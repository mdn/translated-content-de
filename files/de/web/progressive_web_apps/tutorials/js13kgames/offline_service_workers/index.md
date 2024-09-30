---
title: Offline-Funktionalität von PWAs mit Service-Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Nachdem wir die Struktur von js13kPWA kennengelernt und das grundlegende Gerüst in Betrieb gesehen haben, schauen wir uns nun an, wie die Offline-Fähigkeiten mithilfe von Service Worker implementiert sind. In diesem Artikel betrachten wir, wie es in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) verwendet wird ([siehe auch den Quellcode](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie man Offline-Funktionalität hinzufügt.

## Service Worker erklärt

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Elemente einer Website ordnungsgemäß zu zwischenspeichern und sie verfügbar zu machen, wenn das Gerät des Nutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz als im traditionellen Web-Programmieren – die API ist nicht blockierend und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis empfangen, wann immer es bereit ist, indem Sie einen [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierten Ansatz verwenden.

Service Worker können mehr als nur Offline-Fähigkeiten bieten, einschließlich der Handhabung von Benachrichtigungen oder der Durchführung von aufwendigen Berechnungen. Service Worker sind ziemlich leistungsfähig, da sie Kontrolle über Netzwerk-Anfragen übernehmen, sie modifizieren, benutzerdefinierte Antworten aus dem Cache liefern oder Antworten vollständig synthetisieren können.

Um mehr über Service Worker zu erfahren, siehe [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Schauen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Fähigkeiten bereitzustellen.

### Registrierung des Service Workers

Wir beginnen mit dem Code, der einen neuen Service Worker registriert, in der app.js-Datei:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Falls die Service-Worker-API im Browser unterstützt wird, wird sie mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) auf der Seite registriert. Der Inhalt befindet sich in der sw.js-Datei und kann ausgeführt werden, nachdem die Registrierung erfolgreich war. Das ist das einzige Stück Service Worker-Code, das sich in der app.js-Datei befindet; alles andere, das spezifisch für den Service Worker ist, wird direkt in der sw.js-Datei geschrieben.

### Lebenszyklus eines Service Workers

Wenn die Registrierung abgeschlossen ist, wird die sw.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API erlaubt es uns, Ereignis-Listener für wichtige Ereignisse hinzuzufügen, die uns interessieren – das erste ist das `install` Ereignis:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im `install` Listener können wir den Cache initialisieren und Dateien für die Offline-Nutzung hinzufügen. Unsere js13kPWA-App tut genau das.

Zuerst wird eine Variable zum Speichern des Cache-Namens erstellt, und die App-Shell-Dateien werden in einem Array aufgelistet.

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

Als Nächstes werden die Links zu den Bildern, die zusammen mit dem Inhalt aus der data/games.js-Datei geladen werden sollen, im zweiten Array generiert. Danach werden beide Arrays mithilfe der {{jsxref("Array.prototype.concat()")}}-Funktion zusammengeführt.

```js
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Dann können wir das `install` Ereignis selbst verwalten:

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

Hier gibt es zwei Dinge, die einer Erklärung bedürfen: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) macht und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker wird erst installiert, wenn der Code innerhalb von `waitUntil` ausgeführt wird. Es gibt ein Versprechen zurück – dieser Ansatz ist notwendig, da die Installation einige Zeit in Anspruch nehmen kann, daher müssen wir darauf warten, dass sie abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt im Gültigkeitsbereich des gegebenen Service Workers, um das Speichern von Daten zu ermöglichen – das Speichern im [Web-Speicher](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da Web-Speicher synchron ist. Mit Service Workern verwenden wir stattdessen die Cache-API.

Hier öffnen wir einen Cache mit einem gegebenen Namen und fügen alle Dateien, die unsere App verwendet, dem Cache hinzu, damit sie beim nächsten Laden verfügbar sind. Ressourcen werden anhand ihrer Anfrage-URL identifiziert, die relativ zum {{domxref("WorkerGlobalScope.location", "Standort", "", 1)}} des Workers ist.

Sie werden bemerken, dass wir `game.js` nicht zwischengespeichert haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In Wirklichkeit würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen, und das Zwischenspeichern der Daten würde bedeuten, dass sie regelmäßig aktualisiert werden müssten, wenn eine Netzwerkverbindung besteht. Wir werden hier nicht darauf eingehen, aber die [Periodische Hintergrundsynchronisations-API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weitere Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate` Ereignis, das auf die gleiche Weise wie `install` verwendet wird. Dieses Ereignis wird in der Regel verwendet, um alle Dateien zu löschen, die nicht mehr notwendig sind, und nach der App im Allgemeinen aufzuräumen. Das müssen wir in unserer App nicht tun, daher überspringen wir es.

### Antworten bei Abrufen

Ebenfalls steht uns ein `fetch` Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn eine HTTP-Anfrage von unserer App abgeschickt wird. Dies ist sehr nützlich, da es uns ermöglicht, Anfragen abzufangen und mit benutzerdefinierten Antworten darauf zu reagieren. Hier ist ein einfaches Nutzungsbeispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: die angeforderte Datei, ihre zwischengespeicherte Kopie oder ein Stück JavaScript-Code, das etwas Spezifisches ausführt – die Möglichkeiten sind endlos.

In unserer Beispiel-App liefern wir Inhalte aus dem Cache statt aus dem Netzwerk, solange die Ressource tatsächlich im Cache vorhanden ist. Wir machen das, egal ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie zuerst hinzu, bevor sie sie dann liefert:

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

Hier antworten wir auf das Fetch-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, falls sie dort ist. Wenn nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk zu holen und dann die Antwort im Cache zu speichern, damit sie beim nächsten Mal verfügbar ist, wenn sie angefordert wird.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle – dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dies ermöglicht es uns, auf jede einzelne Anfrage mit einer beliebigen Antwort zu reagieren: vorbereitet durch den Service Worker, aus dem Cache entnommen, gegebenenfalls modifiziert.

Das war's! Unsere App speichert ihre Ressourcen beim Installieren im Cache und liefert sie mit fetch aus dem Cache, sodass sie funktioniert, selbst wenn der Nutzer offline ist. Sie speichert auch neue Inhalte im Cache, wenn sie hinzugefügt werden.

## Aktualisierungen

Es gibt noch einen Punkt zu behandeln: Wie aktualisiert man einen Service Worker, wenn eine neue Version der App mit neuen Inhalten verfügbar ist? Die Versionsnummer im Cache-Namen ist der Schlüssel dazu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir dann alle unsere Dateien (einschließlich unserer neuen Dateien) zu einem neuen Cache hinzufügen:

```js
contentToCache.push("/pwa-examples/js13kpwa/icons/icon-32.png");

// ...

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll(contentToCache);
    })(),
  );
});
```

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert korrekt, bis keine Seiten mehr ihn verwenden – dann wird der neue Service Worker aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Den Cache leeren

Erinnern Sie sich an das `activate` Ereignis, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu leeren, den wir nicht mehr benötigen:

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});
```

Dies stellt sicher, dass wir nur die Dateien haben, die wir im Cache benötigen, damit wir keinen Müll zurücklassen; der [verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, nach uns selbst aufzuräumen.

## Weitere Anwendungsfälle

Das Bereitstellen von Dateien aus dem Cache ist nicht das einzige Feature, das der Service Worker bietet. Wenn Sie aufwendige Berechnungen durchführen müssen, können Sie sie vom Haupt-Thread auslagern und im Worker ausführen und die Ergebnisse erhalten, sobald sie verfügbar sind. In Bezug auf die Leistung können Sie Ressourcen vorab laden, die momentan nicht benötigt werden, jedoch in der nahen Zukunft benötigt werden könnten, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich brauchen.

## Zusammenfassung

In diesem Artikel haben wir einen einfachen Blick darauf geworfen, wie Sie Ihre PWA mit Service Workern offlinefähig machen können. Sehen Sie sich unsere weiterführende Dokumentation an, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) erfahren möchten und wie Sie sie im Detail verwenden können.

Service Worker werden auch im Umgang mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet – dies wird in einem nachfolgenden Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
