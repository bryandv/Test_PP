using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_PP.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_PP.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    
    public class PPController : ControllerBase
    {
        public LibraryContext _context;
        public PPController(LibraryContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Club> GetTeams()
        {
            return _context.Clubs.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult getClub(int id)
        {
            var club = _context.Clubs.Find(id);

            if (club == null)
                return NotFound();

            return Ok(club);
        }

        [Route("{id}/spelers")]
        [HttpGet]
        public IActionResult getClubSpelers(int id)
        {
            var club = _context.Clubs
                    .Include(d => d.Spelers)
                    .SingleOrDefault(d => d.Id == id);

            if (club == null)
                return NotFound();

            return Ok(club.Spelers);
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteClub(int id)
        {
            var club = _context.Clubs.Find(id);
            if (club == null)
                return NotFound();

            _context.Clubs.Remove(club);
            _context.SaveChanges();

            return NoContent();
        }

    }
}

