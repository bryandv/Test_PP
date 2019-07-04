using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_PP.Model
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            if(!context.Speler.Any())
            {
                //Clubs
                var TtkMerksplas = new Club()
                {
                   
                    Name = "TTK Merksplas",
                    Location = "Merksplas"
                };
                context.Clubs.Add(TtkMerksplas);

                var TtkSchoten = new Club()
                {

                    Name = "TTK Schoten",
                    Location = "Schoten"
                };
                context.Clubs.Add(TtkSchoten);

                //Spelers
                var speler1 = new Speler2()
                {
                    
                    Name = "Devolder Bryan",
                    Klassement = "C0",
                    WaardeKlassement = 14,
                    Club = TtkMerksplas
                };
                context.Speler.Add(speler1);

                var speler2 = new Speler2()
                {
                   
                    Name = "Devolder Dirk",
                    Klassement = "E4",
                    WaardeKlassement = 4,
                    Club = TtkSchoten
                };
                context.Speler.Add(speler2);
                context.SaveChanges();
            }




            #region test
            //Are there already books present ?
            /* if (!context.Team.Any())
             {

                var team = new Teams()
                 {

                     Speler1 = new Speler()
                     {
                         Naam = "Devolder Bryan",
                         Club = "Merksplas",
                         Klassement = "C0"
                     },
                     Speler2 = new Speler()
                     {
                         Naam = "Torfs Yordi",
                         Club = "Merksplas",
                         Klassement = "B6"
                     }


                 }*/
            #endregion
           
            }
        }
    }

