---
title: "js13kGames: PWA offlinefähig machen mit Service Workern"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 3e8eb2b3466248d87e86df227f45deb49054aa42
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Nachdem wir die Struktur von js13kPWA kennengelernt und das grundlegende Gerüst laufend gesehen haben, schauen wir uns nun die Implementierung der Offline-Fähigkeiten mit Service Workern an. In diesem Artikel betrachten wir, wie es in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) eingesetzt wird ([siehe auch den Quellcode](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie man Offline-Funktionalität hinzufügen kann.

## Erklärung von Service Workern

Service Worker sind ein virtuelles Proxy zwischen dem Browser und dem Netzwerk. Sie machen es möglich, die Ressourcen einer Website ordnungsgemäß zu cachen und sie verfügbar zu machen, wenn das Gerät des Nutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies erfordert einen anderen Ansatz als traditionelles Web-Programmieren — die API ist nicht blockierend und kann Kommunikation zwischen unterschiedlichen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis empfangen, sobald es fertig ist, indem Sie einen [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierten Ansatz verwenden.

Service Worker können mehr als nur Offline-Fähigkeiten bieten, einschließlich der Behandlung von Benachrichtigungen oder der Durchführung von komplexen Berechnungen. Service Worker sind ziemlich mächtig, da sie die Kontrolle über Netzwerkanfragen übernehmen, diese modifizieren, benutzerdefinierte Antworten aus dem Cache bereitstellen oder Antworten komplett synthetisieren können.

Um mehr über Service Worker zu erfahren, lesen Sie [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Schauen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Fähigkeiten bereitzustellen.

### Registrierung des Service Workers

Beginnen wir mit einem Blick auf den Code in der app.js-Datei, der einen neuen Service Worker registriert:

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

Wenn die Service Worker-API im Browser unterstützt wird, wird sie mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) an der Website registriert. Ihr Inhalt befindet sich in der sw.js-Datei und kann ausgeführt werden, nachdem die Registrierung erfolgreich war. Es ist der einzige Teil des Service Worker-Codes, der sich in der app.js-Datei befindet; alles andere, was service worker-spezifisch ist, wird in der sw.js-Datei selbst geschrieben.

### Lebenszyklus eines Service Workers

Wenn die Registrierung abgeschlossen ist, wird die sw.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API ermöglicht es uns, Event-Listener für wichtige Ereignisse hinzuzufügen, an denen wir interessiert sind – das erste ist das `install`-Ereignis:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im `install`-Listener können wir den Cache initialisieren und Dateien für die Offline-Verwendung hinzufügen. Unsere js13kPWA-App tut genau das.

Zuerst wird eine Variable zum Speichern des Cachennamens erstellt und die App-Shell-Dateien in einem Array aufgelistet.

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
```

Als Nächstes werden die Links zu den Bildern, die mit dem Inhalt aus der Datei data/games.js geladen werden sollen, im zweiten Array generiert. Danach werden beide Arrays mit der {{jsxref("Array.prototype.concat()")}}-Funktion zusammengeführt.

```js
const gamesImages = [];
for (const game of games) {
  gamesImages.push(`data/img/${game.slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Dann können wir das `install`-Ereignis selbst verwalten:

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

Hier gibt es zwei Dinge, die einer Erklärung bedürfen: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) tut, und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker wird nicht installiert, bis der Code innerhalb von `waitUntil` ausgeführt wird. Es gibt ein Versprechen zurück – dieser Ansatz ist notwendig, weil die Installation einige Zeit in Anspruch nehmen kann, also müssen wir darauf warten, dass sie abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das im Bereich des gegebenen Service Workers verfügbar ist, um das Speichern von Daten zu ermöglichen – das Speichern in [web storage](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da Webspeicher synchron ist. Mit Service Workern verwenden wir stattdessen die Cache-API.

Hier öffnen wir einen Cache mit einem gegebenen Namen und fügen dann alle Dateien, die unsere App verwendet, dem Cache hinzu, damit sie beim nächsten Laden verfügbar sind. Ressourcen werden durch ihre Anfrage-URL identifiziert, die relativ zur [location](/de/docs/Web/API/WorkerGlobalScope/location) des Workers ist.

Sie werden bemerken, dass wir `game.js` nicht gecacht haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In Wirklichkeit würden diese Daten vermutlich von einem API-Endpunkt oder einer Datenbank stammen und das Cachen der Daten würde bedeuten, sie periodisch zu aktualisieren, wenn eine Netzwerkverbindung besteht. Wir werden das hier nicht behandeln, aber die [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weitere Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Ereignis, das auf die gleiche Weise wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um Dateien zu löschen, die nicht mehr benötigt werden, und allgemein hinter der App aufzuräumen. In unserer App müssen wir das nicht tun, also überspringen wir es.

### Reagieren auf Abfragen

Wir haben auch ein `fetch`-Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn eine HTTP-Anfrage von unserer App gesendet wird. Dies ist sehr nützlich, da wir Anfragen abfangen und darauf mit individuellen Antworten reagieren können. Zum Beispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: die angeforderte Datei, ihre gecachte Kopie oder ein Stück JavaScript-Code, das etwas Spezifisches tut – die Möglichkeiten sind endlos.

In unserer Beispiel-App liefern wir Inhalte aus dem Cache statt aus dem Netzwerk, solange die Ressource tatsächlich im Cache ist. Das tun wir, unabhängig davon, ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie dort zuerst hinzu, bevor sie sie dann bereitstellt:

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

Hier antworten wir auf das Fetch-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Wenn nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk zu holen, und speichern die Antwort dann im Cache, damit sie beim nächsten Mal dort verfügbar ist, wenn sie angefordert wird.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle – dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dies ermöglicht es uns, auf jede einzelne Anfrage mit einer beliebigen Antwort zu reagieren: vorbereitet vom Service Worker, aus dem Cache genommen, modifiziert, falls nötig.

Das war's! Unsere App cached ihre Ressourcen bei der Installation und liefert sie mit Fetch aus dem Cache, sodass sie funktioniert, auch wenn der Nutzer offline ist. Sie cached auch neue Inhalte, wann immer sie hinzugefügt werden.

## Aktualisierungen

Es bleibt noch ein Punkt zu klären: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Assets verfügbar ist? Die Versionsnummer im Cachennamen ist der Schlüssel dazu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir dann alle unsere Dateien (einschließlich unserer neuen Dateien) zu einem neuen Cache hinzufügen:

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

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert korrekt, bis es keine Seiten mehr gibt, die ihn verwenden — der neue Service Worker wird dann aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Den Cache leeren

Erinnern Sie sich an das `activate`-Ereignis, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu leeren, den wir nicht mehr benötigen:

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

Dies stellt sicher, dass wir nur die Dateien, die wir benötigen, im Cache haben, sodass wir keinen Müll hinterlassen; [der verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, aufzuräumen.

## Weitere Anwendungsfälle

Das Bereitstellen von Dateien aus dem Cache ist nicht die einzige Funktion, die der Service Worker bietet. Wenn Sie komplexe Berechnungen durchführen müssen, können Sie diese vom Haupt-Thread auslagern und im Worker durchführen und die Ergebnisse erhalten, sobald sie verfügbar sind. Leistungsmäßig können Sie Ressourcen vorladen, die momentan nicht benötigt werden, aber in naher Zukunft möglicherweise, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir uns einfach angesehen, wie Sie Ihre PWA offline arbeitsfähig mit Service Workern machen können. Schauen Sie sich unbedingt unsere weitere Dokumentation an, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) erfahren und lernen möchten, wie Sie sie detaillierter verwenden können.

Service Worker werden auch verwendet, wenn es um [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) geht — dies wird in einem späteren Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
