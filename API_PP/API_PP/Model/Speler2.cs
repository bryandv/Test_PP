using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_PP.Model
{
    public class Speler2
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Klassement { get; set; }
        public int WaardeKlassement { get; set; }
        public Club Club { get; set; }
    }
}
