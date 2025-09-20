---
title: "js13kGames: Struktur der Progressive Web App"
short-title: PWA structure
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
l10n:
  sourceCommit: 3e8eb2b3466248d87e86df227f45deb49054aa42
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

In diesem Artikel analysieren wir die [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Anwendung, warum sie so gebaut ist und welche Vorteile sie bietet.

Die Struktur der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Website ist recht einfach: Sie besteht aus einer einzigen HTML-Datei ([index.html](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/index.html)) mit grundlegender CSS-Stilgestaltung ([style.css](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/style.css)), und ein paar Bildern, Skripten und Schriftarten. Die Ordnerstruktur sieht folgendermaßen aus:

![Ordnerstruktur von js13kPWA.](js13kpwa-directory.png)

### Das HTML

Aus der HTML-Perspektive ist der App-Shell alles außerhalb des Inhaltsbereichs:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>js13kGames A-Frame entries</title>
    <meta
      name="description"
      content="A list of A-Frame entries submitted to the js13kGames 2017 competition, used as an example for the MDN articles about Progressive Web Apps." />
    <meta name="author" content="end3r" />
    <meta name="theme-color" content="#B12A34" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      property="og:image"
      content="https://js13kgames.com/img/js13kgames-banner.png" />
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="js13kpwa.webmanifest" />
    <script src="data/games.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <p>
        <a class="logo" href="https://js13kgames.com">
          <img src="img/js13kgames.png" alt="js13kGames" />
        </a>
      </p>
    </header>
    <main>
      <h1>js13kGames A-Frame entries</h1>
      <p class="description">
        List of games submitted to the
        <a href="https://js13kgames.com/aframe">A-Frame category</a> in the
        <a href="https://2017.js13kgames.com">js13kGames 2017</a> competition.
        You can
        <a href="https://github.com/mdn/pwa-examples/blob/main/js13kpwa"
          >fork js13kPWA on GitHub</a
        >
        to check its source code.
      </p>
      <button id="notifications">Request dummy notifications</button>
      <section id="content">// Content inserted in here</section>
    </main>
    <footer>
      <p>
        © js13kGames 2012-2018, created and maintained by
        <a href="https://end3r.com">Andrzej Mazur</a> from
        <a href="https://enclavegames.com">Enclave Games</a>.
      </p>
    </footer>
  </body>
</html>
```

Der {{htmlelement("head")}}-Abschnitt enthält einige grundlegende Informationen wie Titel, Beschreibung und Links zu CSS, Web-Manifest, Spieleinhalt-JS-Datei und app.js — dort wird unsere JavaScript-Anwendung initialisiert. Der {{htmlelement("body")}} ist in den {{htmlelement("header")}} (mit einem verlinkten Bild), in die {{htmlelement("main")}}-Seite (mit Titel, Beschreibung und Platz für Inhalte) und in den {{htmlelement("footer")}} (Kopie und Links) unterteilt.

Die einzige Aufgabe der App ist es, alle A-Frame-Einträge aus dem js13kGames 2017 Wettbewerb aufzulisten. Wie Sie sehen, handelt es sich um eine sehr einfache One-Page-Website — der Punkt ist, etwas Einfaches zu haben, damit wir uns auf die Implementierung der eigentlichen PWA-Funktionen konzentrieren können.

### Das CSS

Das CSS ist ebenfalls so schlicht wie möglich: Es verwendet {{cssxref("@font-face")}}, um eine benutzerdefinierte Schriftart zu laden und anzuwenden, und es wird eine einfache Stilgestaltung der HTML-Elemente vorgenommen. Der Gesamteindruck soll auf mobilen (mit einem Ansatz für responsives Webdesign) und auf Desktop-Geräten gut aussehen.

### Das Haupt-JavaScript der App

Die app.js Datei führt einige Aufgaben aus, die wir in den nächsten Artikeln genauer betrachten werden. Zuallererst generiert sie den Inhalt basierend auf dieser Vorlage:

```js
const template = `<article>
  <img src='data/img/placeholder.png' data-src='data/img/SLUG.jpg' alt='NAME'>
  <h3>#POS. NAME</h3>
  <ul>
  <li><span>Author:</span> <strong>AUTHOR</strong></li>
  <li><span>Website:</span> <a href='http://WEBSITE/'>WEBSITE</a></li>
  <li><span>GitHub:</span> <a href='https://GITHUB'>GITHUB</a></li>
  <li><span>More:</span> <a href='http://js13kgames.com/entries/SLUG'>js13kgames.com/entries/SLUG</a></li>
  </ul>
</article>`;
let content = "";
for (const game of games) {
  const entry = template
    .replace(/POS/g, i + 1)
    .replace(/SLUG/g, game.slug)
    .replace(/NAME/g, game.name)
    .replace(/AUTHOR/g, game.author)
    .replace(/WEBSITE/g, game.website)
    .replace(/GITHUB/g, game.github)
    .replace("<a href='http:///'></a>", "-");
  content += entry;
}
document.getElementById("content").innerHTML = content;
```

Als nächstes registriert sie einen Service Worker:

```js
let swRegistration = null;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/pwa-examples/js13kpwa/sw.js")
    .then((reg) => {
      swRegistration = reg;
    });
}
```

Der nächste Codeblock bittet um Erlaubnis für Benachrichtigungen, wenn ein Button geklickt wird:

```js
const button = document.getElementById("notifications");
button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
});
```

Der letzte Block erstellt Benachrichtigungen, die ein zufällig ausgewähltes Element aus der Spielliste anzeigen:

```js
function randomNotification() {
  if (!swRegistration) return;
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  swRegistration.showNotification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

### Der Service Worker

Die letzte Datei, die wir uns schnell ansehen, ist der Service Worker: sw\.js — zuerst importiert er Daten aus der games.js Datei:

```js
self.importScripts("data/games.js");
```

Als nächstes erstellt er eine Liste aller Dateien, die zwischengespeichert werden sollen, sowohl aus dem App-Shell als auch dem Inhalt:

```js
const cacheName = "js13kPWA-v1";
const appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
  "/pwa-examples/js13kpwa/fonts/graduate.eot",
  "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  "/pwa-examples/js13kpwa/fonts/graduate.woff",
  "/pwa-examples/js13kpwa/favicon.ico",
  "/pwa-examples/js13kpwa/img/js13kgames.png",
  "/pwa-examples/js13kpwa/img/bg.png",
  "/pwa-examples/js13kpwa/icons/icon-32.png",
  "/pwa-examples/js13kpwa/icons/icon-64.png",
  "/pwa-examples/js13kpwa/icons/icon-96.png",
  "/pwa-examples/js13kpwa/icons/icon-128.png",
  "/pwa-examples/js13kpwa/icons/icon-168.png",
  "/pwa-examples/js13kpwa/icons/icon-192.png",
  "/pwa-examples/js13kpwa/icons/icon-256.png",
  "/pwa-examples/js13kpwa/icons/icon-512.png",
];
const gamesImages = [];
for (const game of games) {
  gamesImages.push(`data/img/${game.slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Der nächste Block installiert den Service Worker, der dann tatsächlich alle Dateien aus der obigen Liste zwischenspeichert:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll(contentToCache);
    })(),
  );
});
```

Zuletzt holt der Service Worker Inhalte aus dem Cache, wenn sie dort verfügbar sind, und stellt so die Offline-Funktionalität bereit:

```js
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })(),
  );
});
```

### Die JavaScript-Daten

Die Spieledaten sind im Datenordner in Form eines JavaScript-Objekts enthalten ([games.js](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/data/games.js)):

```js
const games = [
  {
    slug: "lost-in-cyberspace",
    name: "Lost in Cyberspace",
    author: "Zosia and Bartek",
    website: "",
    github: "github.com/bartaz/lost-in-cyberspace",
  },
  {
    slug: "vernissage",
    name: "Vernissage",
    author: "Platane",
    website: "github.com/Platane",
    github: "github.com/Platane/js13k-2017",
  },
  // …
  {
    slug: "emma-3d",
    name: "Emma-3D",
    author: "Prateek Roushan",
    website: "",
    github: "github.com/coderprateek/Emma-3D",
  },
];
```

Jeder Eintrag hat sein eigenes Bild im data/img Ordner. Dies ist unser Inhalt, der mit JavaScript in den Inhaltsbereich geladen wird.

## Als nächstes

Im nächsten Artikel werden wir detaillierter betrachten, wie der App-Shell und der Inhalt für die Offline-Nutzung mit Hilfe des Service Workers zwischengespeichert werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
