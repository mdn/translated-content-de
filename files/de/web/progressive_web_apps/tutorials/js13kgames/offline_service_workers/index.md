---
title: "js13kGames: Die PWA mit Service Workern offline nutzbar machen"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 91e08923c809ca8deded3e3294f49bbe1a4a00b3
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Nachdem wir uns angesehen haben, wie die Struktur von js13kPWA aussieht, und die grundlegende Shell in Betrieb gesehen haben, betrachten wir nun, wie die Offline-Funktionen mithilfe von Service Workern implementiert werden. In diesem Artikel sehen wir uns an, wie sie in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) verwendet werden ([siehe auch den Quellcode](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie Offline-Funktionalität hinzugefügt wird.

## Service Worker erklärt

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Assets einer Website ordnungsgemäß zwischenzuspeichern und verfügbar zu machen, wenn das Gerät der Benutzerin oder des Benutzers offline ist.

Sie werden in einem separaten Thread vom JavaScript-Hauptcode unserer Seite ausgeführt und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz als bei der traditionellen Webprogrammierung — die API blockiert nicht und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis mithilfe eines auf [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) basierenden Ansatzes erhalten, sobald es bereit ist.

Service Worker können mehr als nur Offline-Funktionen bereitstellen, etwa Benachrichtigungen verarbeiten oder aufwendige Berechnungen durchführen. Service Worker sind ziemlich leistungsfähig, da sie die Kontrolle über Netzwerkanfragen übernehmen, diese ändern, benutzerdefinierte Antworten aus dem Cache bereitstellen oder Antworten vollständig synthetisieren können.

Weitere Informationen zu Service Workern finden Sie unter [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Sehen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Funktionen bereitzustellen.

### Den Service Worker registrieren

Beginnen wir mit dem Code, der einen neuen Service Worker in der Datei app.js registriert:

```js
let swRegistration = null;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./pwa-examples/js13kpwa/sw.js")
    .then((reg) => {
      swRegistration = reg;
    });
}
```

Wenn die Service-Worker-API im Browser unterstützt wird, wird sie mithilfe der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) für die Website registriert. Ihr Inhalt befindet sich in der Datei sw.js und kann ausgeführt werden, nachdem die Registrierung erfolgreich war. Dies ist der einzige Teil des Service-Worker-Codes, der sich in der Datei app.js befindet; alles andere Service-Worker-Spezifische wird direkt in der Datei sw.js geschrieben.

### Lebenszyklus eines Service Workers

Wenn die Registrierung abgeschlossen ist, wird die Datei sw.js automatisch heruntergeladen, anschließend installiert und schließlich aktiviert.

#### Installation

Die API ermöglicht es uns, Event Listener für wichtige Ereignisse hinzuzufügen, an denen wir interessiert sind — das erste ist das Ereignis `install`:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im Listener für `install` können wir den Cache initialisieren und Dateien für die Offline-Nutzung hinzufügen. Unsere js13kPWA-App tut genau das.

Zuerst wird eine Variable zum Speichern des Cache-Namens erstellt und die Dateien der App-Shell werden in einem Array aufgelistet.

```js
const cacheName = "js13kPWA-v1";
const appShellFiles = [
  "/pwa-examples/js13kpwa/",
  "/pwa-examples/js13kpwa/index.html",
  "/pwa-examples/js13kpwa/app.js",
  "/pwa-examples/js13kpwa/style.css",
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
```

Anschließend werden die Links zu den Bildern, die zusammen mit dem Inhalt aus der Datei data/games.js geladen werden sollen, im zweiten Array erzeugt. Danach werden beide Arrays mithilfe der Funktion {{jsxref("Array.prototype.concat()")}} zusammengeführt.

```js
const gamesImages = [];
for (const game of games) {
  gamesImages.push(`data/img/${game.slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Dann können wir das Ereignis `install` selbst verwalten:

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

Zwei Dinge benötigen hier eine Erklärung: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) tut und was das Objekt [`caches`](/de/docs/Web/API/Cache) ist.

Der Service Worker wird nicht installiert, bevor der Code innerhalb von `waitUntil` ausgeführt wurde. Es gibt ein Promise zurück — dieser Ansatz ist erforderlich, weil die Installation einige Zeit dauern kann und wir warten müssen, bis sie abgeschlossen ist.

`caches` ist ein spezielles Objekt vom Typ [`CacheStorage`](/de/docs/Web/API/CacheStorage), das im Gültigkeitsbereich des jeweiligen Service Workers verfügbar ist, um das Speichern von Daten zu ermöglichen — das Speichern in [Web Storage](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da Web Storage synchron ist. Mit Service Workern verwenden wir stattdessen die Cache API.

Hier öffnen wir einen Cache mit einem bestimmten Namen und fügen dann alle Dateien, die unsere App verwendet, zum Cache hinzu, damit sie beim nächsten Laden verfügbar sind. Ressourcen werden anhand ihrer Request-URL identifiziert, die relativ zum [location](/de/docs/Web/API/WorkerGlobalScope/location) des Workers ist.

Möglicherweise ist Ihnen aufgefallen, dass wir `game.js` nicht gecacht haben. Dies ist die Datei, die die Daten enthält, die wir bei der Anzeige unserer Spiele verwenden. In der Praxis würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen, und das Cachen der Daten würde bedeuten, sie bei bestehender Netzwerkverbindung regelmäßig zu aktualisieren. Darauf gehen wir hier nicht näher ein, aber die [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weiterführende Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein Ereignis `activate`, das auf dieselbe Weise wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um Dateien zu löschen, die nicht mehr benötigt werden, und die App allgemein aufzuräumen. In unserer App müssen wir das nicht tun, daher überspringen wir es.

### Auf Fetches reagieren

Wir haben außerdem ein Ereignis `fetch` zur Verfügung, das jedes Mal ausgelöst wird, wenn von unserer App eine HTTP-Anfrage gesendet wird. Dies ist sehr nützlich, da es uns ermöglicht, Anfragen abzufangen und mit benutzerdefinierten Antworten darauf zu reagieren. Zum Beispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir möchten: die angeforderte Datei, ihre gecachte Kopie oder ein JavaScript-Codefragment, das etwas Bestimmtes ausführt — die Möglichkeiten sind endlos.

In unserer Beispiel-App stellen wir Inhalte aus dem Cache statt aus dem Netzwerk bereit, solange die Ressource tatsächlich im Cache vorhanden ist. Das tun wir unabhängig davon, ob die App online oder offline ist. Wenn die Datei nicht im Cache vorhanden ist, fügt die App sie zunächst dort hinzu und stellt sie anschließend bereit:

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

Hier reagieren wir auf das Fetch-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, falls sie vorhanden ist. Falls nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk abzurufen, und speichern die Antwort dann im Cache, sodass sie beim nächsten Anfordern dort verfügbar ist.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle — dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dadurch können wir auf jede einzelne Anfrage mit einer beliebigen Antwort reagieren: vom Service Worker vorbereitet, aus dem Cache abgerufen oder bei Bedarf geändert.

Das ist alles! Unsere App speichert ihre Ressourcen bei der Installation im Cache und stellt sie beim Fetch aus dem Cache bereit, sodass sie auch funktioniert, wenn die Benutzerin oder der Benutzer offline ist. Außerdem speichert sie neue Inhalte im Cache, sobald diese hinzugefügt werden.

## Aktualisierungen

Es gibt noch einen Punkt zu behandeln: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Assets verfügbar ist? Die Versionsnummer im Cache-Namen ist dabei entscheidend:

```js
const cacheName = "js13kPWA-v1";
```

Wenn diese auf v2 aktualisiert wird, können wir alle unsere Dateien, einschließlich der neuen Dateien, zu einem neuen Cache hinzufügen:

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// …

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })(),
  );
});
```

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert weiterhin ordnungsgemäß, bis keine Seiten ihn mehr verwenden — anschließend wird der neue Service Worker aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Den Cache leeren

Erinnern Sie sich an das Ereignis `activate`, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu leeren, den wir nicht mehr benötigen:

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return undefined;
          }
          return caches.delete(key);
        }),
      ),
    ),
  );
});
```

Dadurch wird sichergestellt, dass sich nur die benötigten Dateien im Cache befinden, sodass wir keinen Müll zurücklassen; der [verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, hinter uns aufzuräumen.

## Andere Anwendungsfälle

Das Bereitstellen von Dateien aus dem Cache ist nicht die einzige Funktion, die Service Worker bieten. Wenn Sie aufwendige Berechnungen durchführen müssen, können Sie diese aus dem Hauptthread auslagern, im Worker ausführen und die Ergebnisse erhalten, sobald sie verfügbar sind. Hinsichtlich der Performance können Sie Ressourcen vorab abrufen, die derzeit nicht benötigt werden, aber möglicherweise in naher Zukunft benötigt werden, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir uns einfach angesehen, wie Sie Ihre PWA mit Service Workern offline nutzbar machen können. Lesen Sie unbedingt unsere weiterführende Dokumentation, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) und deren detailliertere Verwendung erfahren möchten.

Service Worker werden auch beim Umgang mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet — dies wird in einem folgenden Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
