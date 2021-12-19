using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TechTashWebApp
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(name: "Homepage",url: "Homepage",defaults: new { controller = "home", action = "home" });
            routes.MapRoute(name: "ceomessage", url: "Ceomessage", defaults: new { controller = "home", action = "Ceomessage" });
            routes.MapRoute(name: "mission", url: "mission", defaults: new { controller = "home", action = "mission" });
            routes.MapRoute(name: "vision", url: "vision", defaults: new { controller = "home", action = "vision" });
            routes.MapRoute(name: "refrigerator", url: "refrigerator-repair", defaults: new { controller = "home", action = "refrigerator" });
            routes.MapRoute(name: "washer", url: "washeranddryer-repair", defaults: new { controller = "home", action = "washer" });
            routes.MapRoute(name: "equipment service", url: "equipmentservice-repair", defaults: new { controller = "home", action = "equipmentservice" });
            routes.MapRoute(name: "oven", url: "oven-repair", defaults: new { controller = "home", action = "oven" });
            routes.MapRoute(name: "stove", url: "stove-repair", defaults: new { controller = "home", action = "stove" });
            routes.MapRoute(name: "gym", url: "gym-repair", defaults: new { controller = "home", action = "gym" });
            routes.MapRoute(name: "dishwasher", url: "dishwasher-repair", defaults: new { controller = "home", action = "dishwasher" });
            routes.MapRoute(name: "treadmill", url: "Treadmill-repair", defaults: new { controller = "home", action = "Treadmill" });
            routes.MapRoute(name: "elliptical", url: "elliptical-repair", defaults: new { controller = "home", action = "elliptical" });
            routes.MapRoute(name: "upright", url: "uprightbike-repair", defaults: new { controller = "home", action = "uprightbike" });
            routes.MapRoute(name: "relocation", url: "relocationassembly-repair", defaults: new { controller = "home", action = "relocationassembly" });
            routes.MapRoute(name: "contactus", url: "contactus", defaults: new { controller = "home", action = "contactus" });

            routes.MapRoute(name: "why", url: "why", defaults: new { controller = "home", action = "why" });
            routes.MapRoute(name: "how", url: "how", defaults: new { controller = "home", action = "how" });

            routes.MapRoute(name: "book", url: "book/electric-stove-repair", defaults: new { controller = "home", action = "book",Name="Electric Stove Repair" });
            routes.MapRoute(name: "book2", url: "book/gas-cooker-repair", defaults: new { controller = "home", action = "book", Name = "Gas Cooker Repair" });
            routes.MapRoute(name: "book3", url: "book/dryer-repair", defaults: new { controller = "home", action = "book", Name = "Dryer Repair" });
            routes.MapRoute(name: "book4", url: "book/dishwasher-repair", defaults: new { controller = "home", action = "book", Name = "Dish Washer Repair" });
            routes.MapRoute(name: "book5", url: "book/treadmill-repair", defaults: new { controller = "home", action = "book", Name = "Tread Mill Repair" });
            routes.MapRoute(name: "book6", url: "book/elliptical-repair", defaults: new { controller = "home", action = "book", Name = "Ellecptical Repair" });
            routes.MapRoute(name: "book7", url: "book/exercise-bike-repair", defaults: new { controller = "home", action = "book", Name = "Exercise Bike Repair" });
            routes.MapRoute(name: "book8", url: "book/gym-repair", defaults: new { controller = "home", action = "book", Name = "Gym Repair" });
            routes.MapRoute(name: "book9", url: "book/gym-equipment-repair", defaults: new { controller = "home", action = "book", Name = "Gym Equipment Repair" });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Home", id = UrlParameter.Optional }
            );

            

        }
    }
}
