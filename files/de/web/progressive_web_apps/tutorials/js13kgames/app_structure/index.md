---
title: Struktur einer progressiven Web-App
slug: Web/Progressive_web_apps/Tutorials/js13kGames/App_structure
l10n:
  sourceCommit: a34d62daf2294f7f4d1f339cee60ba58c109ae01
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

In diesem Artikel werden wir die [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Anwendung analysieren, warum sie so aufgebaut ist und welche Vorteile sie bietet.

Die Struktur der [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) Website ist recht einfach: Sie besteht aus einer einzigen HTML-Datei ([index.html](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/index.html)) mit grundlegender CSS-Stilsetzung ([style.css](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/style.css)) sowie einigen Bildern, Skripten und Schriftarten. Die Ordnerstruktur sieht folgendermaßen aus:

![Ordnerstruktur von js13kPWA.](js13kpwa-directory.png)

### Das HTML

Aus HTML Sicht ist die App Shell alles außerhalb des Inhaltsbereichs:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>js13kGames A-Frame entries</title>
    <meta
      name="description"
      content="Eine Liste der A-Frame Einträge, die für den js13kGames 2017 Wettbewerb eingereicht wurden, verwendet als Beispiel für die MDN Artikel über Progressive Web Apps." />
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
        Liste der Spiele, die in der
        <a href="https://js13kgames.com/aframe">A-Frame Kategorie</a> beim
        <a href="https://2017.js13kgames.com">js13kGames 2017</a> Wettbewerb eingereicht wurden.
        Sie können
        <a href="https://github.com/mdn/pwa-examples/blob/main/js13kpwa"
          >js13kPWA auf GitHub forken</a
        >
        um den Quellcode zu überprüfen.
      </p>
      <button id="notifications">Dummy-Benachrichtigungen anfordern</button>
      <section id="content">// Inhalt wird hier eingefügt</section>
    </main>
    <footer>
      <p>
        © js13kGames 2012-2018, erstellt und gepflegt von
        <a href="https://end3r.com">Andrzej Mazur</a> von
        <a href="https://enclavegames.com">Enclave Games</a>.
      </p>
    </footer>
  </body>
</html>
```

Der {{htmlelement("head")}} Abschnitt enthält einige Basisinformationen wie Titel, Beschreibung und Links zu CSS, Web Manifest, JS-Datei mit Spieleinhalten und app.js — dort wird unsere JavaScript-Anwendung initialisiert. Der {{htmlelement("body")}} ist in {{htmlelement("header")}} (mit verlinktem Bild), {{htmlelement("main")}}-Seite (mit Titel, Beschreibung und Platz für Inhalt) und {{htmlelement("footer")}} (Kopie und Links) unterteilt.

Die Aufgabe der App besteht darin, alle A-Frame Einträge des js13kGames 2017 Wettbewerbs aufzulisten. Wie Sie sehen können, handelt es sich um eine sehr gewöhnliche, einseitige Website — der Punkt ist, etwas Einfaches zu haben, damit wir uns auf die Implementierung der tatsächlichen PWA-Funktionen konzentrieren können.

### Das CSS

Das CSS ist ebenfalls so schlicht wie möglich: es verwendet {{cssxref("@font-face")}} um eine benutzerdefinierte Schriftart zu laden und anzuwenden und es bietet eine einfache Stilgebung der HTML-Elemente. Der Gesamtansatz ist, das Design auf mobilen Geräten (mit einem responsiven Webdesign-Ansatz) und Desktop-Geräten gut aussehen zu lassen.

### Das Haupt-JavaScript der App

Die app.js Datei erledigt einige Dinge, die wir in den nächsten Artikeln genauer betrachten werden. Zuerst generiert es den Inhalt basierend auf dieser Vorlage:

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
for (let i = 0; i < games.length; i++) {
  let entry = template
    .replace(/POS/g, i + 1)
    .replace(/SLUG/g, games[i].slug)
    .replace(/NAME/g, games[i].name)
    .replace(/AUTHOR/g, games[i].author)
    .replace(/WEBSITE/g, games[i].website)
    .replace(/GITHUB/g, games[i].github);
  entry = entry.replace("<a href='http:///'></a>", "-");
  content += entry;
}
document.getElementById("content").innerHTML = content;
```

Als nächstes registriert es einen Service Worker:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa-examples/js13kpwa/sw.js");
}
```

Der nächste Codeblock fordert die Erlaubnis für Benachrichtigungen an, wenn ein Button gedrückt wird:

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

Der letzte Block erstellt Benachrichtigungen, die ein zufällig ausgewähltes Element aus der Spieleliste anzeigen:

```js
function randomNotification() {
  const randomItem = Math.floor(Math.random() * games.length);
  const notifTitle = games[randomItem].name;
  const notifBody = `Created by ${games[randomItem].author}.`;
  const notifImg = `data/img/${games[randomItem].slug}.jpg`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}
```

### Der Service Worker

Die letzte Datei, die wir schnell betrachten werden, ist der Service Worker: sw.js — hier werden zunächst Daten aus der games.js Datei importiert:

```js
self.importScripts("data/games.js");
```

Als nächstes wird eine Liste aller Dateien erstellt, die gecacht werden sollen, sowohl aus der App Shell als auch aus dem Inhalt:

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
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Der nächste Block installiert den Service Worker, der dann tatsächlich alle Dateien aus der oben genannten Liste cached:

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

Zuletzt holt der Service Worker Inhalte aus dem Cache, wenn sie dort verfügbar sind, und bietet so eine Offline-Funktionalität:

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

Die Spieledaten sind im Datenordner in Form eines JavaScript-Objekts gespeichert ([games.js](https://github.com/mdn/pwa-examples/blob/main/js13kpwa/data/games.js)):

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
  // ...
  {
    slug: "emma-3d",
    name: "Emma-3D",
    author: "Prateek Roushan",
    website: "",
    github: "github.com/coderprateek/Emma-3D",
  },
];
```

Jeder Eintrag hat sein eigenes Bild im Ordner data/img. Dies ist unser Inhalt, der mit JavaScript in den Inhaltsbereich geladen wird.

## Als nächstes

Im nächsten Artikel werden wir uns genauer ansehen, wie die App Shell und der Inhalt mit Hilfe des Service Workers für die Offline-Nutzung gecacht werden.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames", "Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
