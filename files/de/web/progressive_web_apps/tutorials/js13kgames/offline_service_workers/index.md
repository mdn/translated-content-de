---
title: "js13kGames: Die PWA offline mit Service Workern zum Laufen bringen"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Nachdem wir gesehen haben, wie die Struktur von js13kPWA aussieht und das grundlegende Grundgerüst in Betrieb genommen haben, schauen wir uns an, wie die Offline-Funktionen mittels Service Workern implementiert sind. In diesem Artikel schauen wir uns an, wie dies in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) verwendet wird ([auch den Quellcode sehen](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie man Offline-Funktionalität hinzufügt.

## Service Worker erklärt

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Ressourcen einer Website korrekt zu cachen und verfügbar zu machen, wenn das Gerät des Nutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz als beim herkömmlichen Webprogrammieren – die API ist nicht blockierend und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis erhalten, sobald es bereit ist, indem Sie einen [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierten Ansatz verwenden.

Service Worker können mehr als nur Offline-Funktionen bieten, darunter das Verarbeiten von Benachrichtigungen oder das Ausführen schwerer Berechnungen. Service Worker sind ziemlich leistungsfähig, da sie die Kontrolle über Netzwerkanfragen übernehmen, sie modifizieren, benutzerdefinierte Antworten aus dem Cache bereitstellen oder Antworten vollständig synthetisieren können.

Um mehr über Service Worker zu erfahren, siehe [Offline und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Schauen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Funktionen bereitzustellen.

### Registrierung des Service Workers

Wir beginnen mit einem Blick auf den Code, der einen neuen Service Worker registriert, in der app.js-Datei:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Wenn die Service Worker-API im Browser unterstützt wird, wird sie mittels der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) gegen die Seite registriert. Ihr Inhalt befindet sich in der sw.js-Datei und kann nach erfolgreicher Registrierung ausgeführt werden. Es ist das einzige Stück Service Worker-Code, das in der app.js-Datei sitzt; alles andere, das spezifisch für den Service Worker ist, wird in der sw.js-Datei selbst geschrieben.

### Lebenszyklus eines Service Workers

Wenn die Registrierung abgeschlossen ist, wird die sw.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API erlaubt es uns, Event-Listener für wichtige Ereignisse hinzuzufügen, die uns interessieren – das erste ist das `install`-Ereignis:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im `install`-Listener können wir den Cache initialisieren und Dateien für die Offline-Nutzung hinzufügen. Unsere js13kPWA-App tut genau das.

Zunächst wird eine Variable zur Speicherung des Cache-Namens erstellt und die App-Shell-Dateien werden in einem Array aufgelistet.

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

Als nächstes werden die Links zu den Bildern generiert, die zusammen mit dem Inhalt aus der Datei data/games.js geladen werden sollen, in einem zweiten Array. Danach werden beide Arrays mit der Funktion {{jsxref("Array.prototype.concat()")}} zusammengeführt.

```js
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
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

Hier gibt es zwei Dinge, die erklärt werden müssen: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) macht und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker wird erst installiert, wenn der Code in `waitUntil` ausgeführt wird. Es gibt ein Promise zurück – dieser Ansatz ist erforderlich, da die Installation einige Zeit in Anspruch nehmen kann, sodass wir warten müssen, bis sie abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das im Gültigkeitsbereich des gegebenen Service Workers verfügbar ist, um das Speichern von Daten zu ermöglichen – das Speichern im [Webspeicher](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da Webspeicher synchron ist. Mit Service Workern verwenden wir stattdessen die Cache-API.

Hier öffnen wir einen Cache mit einem gegebenen Namen und fügen dann alle Dateien, die unsere App verwendet, dem Cache hinzu, sodass sie das nächste Mal, wenn sie geladen werden, verfügbar sind. Ressourcen werden durch ihre Anforderungs-URL identifiziert, die relativ zum [Standort](/de/docs/Web/API/WorkerGlobalScope/location) des Workers ist.

Sie bemerken vielleicht, dass wir `game.js` nicht zwischengespeichert haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In Wirklichkeit würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen, und das Zwischenspeichern der Daten würde bedeuten, dass sie regelmäßig aktualisiert werden müssen, wenn eine Netzwerkverbindung besteht. Darauf werden wir hier nicht eingehen, aber die [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weiterführende Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Ereignis, das auf die gleiche Weise wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um alle Dateien zu löschen, die nicht mehr benötigt werden, und um die App im Allgemeinen aufzuräumen. In unserer App brauchen wir das nicht zu tun, daher überspringen wir es.

### Reagieren auf Abrufe

Wir haben auch ein `fetch`-Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn eine HTTP-Anfrage von unserer App abgeschickt wird. Dies ist sehr nützlich, da es uns ermöglicht, Anforderungen abzufangen und darauf mit benutzerdefinierten Antworten zu reagieren. Zum Beispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: die angeforderte Datei, ihre zwischengespeicherte Kopie oder ein JavaScript-Code-Stück, das etwas Spezifisches tut – die Möglichkeiten sind endlos.

In unserer Beispiel-App liefern wir Inhalte aus dem Cache, anstatt aus dem Netzwerk, solange die Ressource tatsächlich im Cache ist. Wir tun dies, unabhängig davon, ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, wird sie zuerst dort hinzugefügt, bevor sie dann geliefert wird:

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

Hier reagieren wir auf das Abrufereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Wenn nicht, verwenden wir eine andere Abrufanfrage, um sie aus dem Netzwerk zu holen, und speichern dann die Antwort im Cache, sodass sie dort verfügbar sein wird, wenn sie das nächste Mal angefordert wird.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle – dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dies ermöglicht es uns, auf jede einzelne Anfrage mit jeder gewünschten Antwort zu antworten: vorbereitet vom Service Worker, aus dem Cache entnommen, falls erforderlich modifiziert.

Das war's! Unsere App speichert ihre Ressourcen beim Installieren im Cache und liefert sie mit fetch aus dem Cache, sodass sie funktioniert, auch wenn der Nutzer offline ist. Sie speichert auch neue Inhalte, wann immer diese hinzugefügt werden.

## Updates

Es gibt noch einen Punkt zu klären: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Ressourcen verfügbar ist? Die Versionsnummer im Cache-Namen ist der Schlüssel dazu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir alle unsere Dateien (einschließlich unserer neuen Dateien) zu einem neuen Cache hinzufügen:

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

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert korrekt, bis keine Seiten mehr verwendet werden – der neue Service Worker wird dann aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Den Cache leeren

Erinnern Sie sich an das `activate`-Ereignis, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu bereinigen, den wir nicht mehr benötigen:

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

Dies stellt sicher, dass wir nur die Dateien im Cache haben, die wir benötigen, sodass wir keinen Müll hinterlassen; der [verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, nach uns selbst aufzuräumen.

## Weitere Anwendungsfälle

Das Bereitstellen von Dateien aus dem Cache ist nicht das einzige Merkmal, das der Service Worker bietet. Wenn Sie schwere Berechnungen durchführen müssen, können Sie diese vom Haupt-Thread auslagern und im Worker durchführen und die Ergebnisse erhalten, sobald sie verfügbar sind. Leistungsseitig können Sie Ressourcen vorab abrufen, die derzeit nicht benötigt werden, aber bald benötigt werden könnten, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir einen einfachen Blick darauf geworfen, wie Sie Ihre PWA mit Service Workern offline funktionsfähig machen können. Achten Sie darauf, unsere weiterführende Dokumentation zu lesen, wenn Sie mehr über die Konzepte hinter der [Service Worker-API](/de/docs/Web/API/Service_Worker_API) und deren detaillierte Verwendung lernen möchten.

Service Worker werden auch für die Arbeit mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet – dies wird in einem nachfolgenden Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
