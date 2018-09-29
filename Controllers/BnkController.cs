using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace react.Controllers
{
    [Route("api/[controller]")]
    public class BnkController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly"
        };

        [HttpGet("[action]")]
        public string BnkList()
        {
            dynamic data;
            data = @"{
                data"":[
                    {""name"":""Cherprang"", ""imgUrl"": ""https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg"", ""instagramId"":""cherprang.bnk48official""},
                    {""name"":""Cherprang"", ""imgUrl"": ""https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg"", ""instagramId"":""cherprang.bnk48official""},
                    {""name"":""Cherprang"", ""imgUrl"": ""https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg"", ""instagramId"":""cherprang.bnk48official""},
                    {""name"":""Cherprang"", ""imgUrl"": ""https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg"", ""instagramId"":""cherprang.bnk48official""},
                    {""name"":""Cherprang"", ""imgUrl"": ""https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg"", ""instagramId"":""cherprang.bnk48official""},
                    {""name"":""Cherprang"", ""imgUrl"": ""https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg"", ""instagramId"":""cherprang.bnk48official""},
                    ] 
                }";
            return data;
        }

    }
}
