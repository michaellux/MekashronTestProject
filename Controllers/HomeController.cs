using MekashronTestProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using MekashronTestProjectServices;

namespace MekashronTestProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> LogIn()
        {
            ICUTechClient client = new ICUTechClient();
            string username = Request.Form["username"];
            string password = Request.Form["password"];
            string? ip = "";
            var data = await client.LoginAsync(username, password, ip);


            return new ContentResult { Content = data.@return, ContentType = "application/json" };
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}