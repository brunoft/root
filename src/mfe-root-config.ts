import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@mfe/react-routers",
//   app: () => System.import("@mfe/react-routers"),
//   activeWhen: ['/']
// });

// registerApplication({
//   name: "@mfe/react",
//   app: () => System.import("@mfe/react"),
//   activeWhen: (location) => location.pathname === '/react',
// });



// start({
//   urlRerouteOnly: true,
// });


fetch('https://run.mocky.io/v3/33ce5a0c-fb86-4cdb-8425-5433b124c6b8')
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.activeWhen
    
      });
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })