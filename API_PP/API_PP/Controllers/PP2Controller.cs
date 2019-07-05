using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_PP.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_PP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PP2Controller : ControllerBase
    {
        public LibraryContext _context;
        public PP2Controller (LibraryContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Speler2> GetAllSpelers(string Klassement, string Name,string sort, int? page, string dir = "asc", int length = 2)
        {
            IQueryable<Speler2> query = _context.Speler;

           // if (!string.IsNullOrWhiteSpace(Klassement))
                //query = query.Where(d => (d.Klassement == "C0") || (d.Klassement == "C2") || (d.Klassement == "C4") || (d.Klassement == "C6"));
            if (!string.IsNullOrWhiteSpace(Name))
                query = query.Where(d => d.Name == Name);


            /*Sorteren van spelers op klassement in beide richtingingen*/
            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "WaardeKlassement":
                        if (dir == "asc")
                            query = query.OrderBy(d => d.WaardeKlassement);
                        else if (dir == "desc")
                            query = query.OrderByDescending(d => d.WaardeKlassement);
                        break;
                }
            }

            /*Oproepen van spelers op reeks*/
            if (!string.IsNullOrWhiteSpace(Klassement))
            {
                switch(Klassement)
                {
                    /*voorlopige test met B en C klassement moet nog uitgebreid worden naar de overige klassementen A,D,E,F,NG*/
                    case "B":
                        if (!string.IsNullOrWhiteSpace(Klassement))
                            query = query.Where(d => (d.Klassement == "B0") || (d.Klassement == "B2") || (d.Klassement == "B4") || (d.Klassement == "B6"));
                        break;
                    case "C":
                        if (!string.IsNullOrWhiteSpace(Klassement))
                        {
                            query = query.Where(d => (d.Klassement == "C0") || (d.Klassement == "C2") || (d.Klassement == "C4") || (d.Klassement == "C6"));
                            
                            //query = query.Skip(query.Count());
                            query = query.Take(query.Count());
                            return query.ToList();
                        }
                            
                        break;
                }
            }



            


            if(page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);
            

            return query.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult getSpeler(int id)
        {
            var speler = _context.Speler
                    .Include(d => d.Club)
                    .SingleOrDefault(d => d.Id == id);

            if (speler == null)
                return NotFound();

            return Ok(speler);
        }


        [HttpPost]
        public IActionResult CreateSpeler([FromBody] Speler2 newspeler)
        {
            /*Als club wordt toegevoegd controleren of club al bestaat en deze met de juiste id toevoegen.*/
            /*Als deze nog niet bestaat nieuwe aanmaken*/


            _context.Speler.Add(newspeler);
            _context.SaveChanges();
            return Created("", newspeler);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteSpeler(int id)
        {
            var speler = _context.Speler.Find(id);
            if (speler == null)
                return NotFound();

            _context.Speler.Remove(speler);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpPut]
        public IActionResult UpdateSpeler([FromBody] Speler2 updatespeler)
        {
            var orgSpeler = _context.Speler.Find(updatespeler.Id);
            if (orgSpeler == null)
                return NotFound();

            if(updatespeler.Name != null)
                orgSpeler.Name = updatespeler.Name;
            if (updatespeler.Klassement != null)
                orgSpeler.Klassement = updatespeler.Klassement;
            if (updatespeler.WaardeKlassement != 0)
                orgSpeler.WaardeKlassement = updatespeler.WaardeKlassement;
            if (updatespeler.Club != null)
                orgSpeler.Club = updatespeler.Club;


            _context.SaveChanges();
            return Ok(orgSpeler);
        }

    }
}