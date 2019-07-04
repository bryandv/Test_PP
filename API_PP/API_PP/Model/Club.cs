using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_PP.Model
{
    public class Club
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string  Location { get; set; }
        [JsonIgnore]
        public ICollection<Speler2> Spelers { get; set; }
    }
}
