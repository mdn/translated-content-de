---
title: PWAs offline arbeitsfähig machen mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Nachdem wir nun gesehen haben, wie die Struktur von js13kPWA aussieht und das grundlegende Gerüst läuft, schauen wir uns an, wie die Offline-Fähigkeiten mit Service Workern implementiert sind. In diesem Artikel betrachten wir, wie es in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) verwendet wird ([sehen Sie sich auch den Quellcode an](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie die Offline-Funktionalität hinzugefügt wird.

## Service Worker erklärt

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Assets einer Website ordnungsgemäß zu cachen und sie verfügbar zu machen, wenn das Gerät des Benutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite aus und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz als die traditionelle Webprogrammierung – die API ist nicht blockierend und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker etwas zu bearbeiten geben und das Ergebnis erhalten, wann immer es fertig ist, indem Sie einen auf [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) basierenden Ansatz verwenden.

Service Worker können mehr als nur Offline-Fähigkeiten bieten, einschließlich der Handhabung von Benachrichtigungen oder der Durchführung aufwendiger Berechnungen. Service Worker sind ziemlich mächtig, da sie die Kontrolle über Netzwerk-Anfragen übernehmen, diese modifizieren, benutzerdefinierte Antworten aus dem Cache bereitstellen oder Antworten vollständig synthetisieren können.

Um mehr über Service Worker zu erfahren, lesen Sie [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Sehen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Fähigkeiten bereitzustellen.

### Registrierung des Service Workers

Wir beginnen mit dem Code, der einen neuen Service Worker im app.js-File registriert:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Wenn die Service Worker API im Browser unterstützt wird, wird sie mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) gegen die Seite registriert. Ihr Inhalt befindet sich in der sw.js-Datei und kann nach erfolgreicher Registrierung ausgeführt werden. Dies ist der einzige Teil des Service Worker-Codes, der sich in der app.js-Datei befindet; alles andere, das spezifisch für den Service Worker ist, wird in der sw.js-Datei selbst geschrieben.

### Lebenszyklus eines Service Workers

Nachdem die Registrierung abgeschlossen ist, wird die sw.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API ermöglicht uns, Ereignis-Listener für wichtige Ereignisse hinzuzufügen, die uns interessieren – das erste ist das `install`-Ereignis:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im `install`-Listener können wir den Cache initialisieren und Dateien für die Offline-Nutzung hinzufügen. Unsere js13kPWA-App macht genau das.

Zuerst wird eine Variable zum Speichern des Cache-Namens erstellt und die App-Shell-Dateien werden in einem Array aufgelistet.

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

Als nächstes werden die Links zu Bildern, die zusammen mit dem Inhalt aus der data/games.js-Datei geladen werden sollen, im zweiten Array generiert. Danach werden beide Arrays mit der {{jsxref("Array.prototype.concat()")}}-Funktion zusammengeführt.

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

Es gibt zwei Dinge, die hier eine Erklärung benötigen: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) macht und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker wird nicht installiert, bis der Code innerhalb von `waitUntil` ausgeführt wurde. Es gibt ein Promise zurück – dieser Ansatz ist nötig, da die Installation einige Zeit in Anspruch nehmen kann, also müssen wir darauf warten, dass sie abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das im Scope des gegebenen Service Workers verfügbar ist, um das Speichern von Daten zu ermöglichen – das Speichern im [Webspeicher](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da der Webspeicher synchron ist. Mit Service Workern verwenden wir stattdessen die Cache-API.

Hier öffnen wir einen Cache mit einem gegebenen Namen und fügen alle Dateien, die unsere App verwendet, dem Cache hinzu, damit sie beim nächsten Laden verfügbar sind. Ressourcen werden durch ihre Anfrage-URL identifiziert, die relativ zur {{domxref("WorkerGlobalScope.location", "location", "", 1)}} des Workers ist.

Sie werden bemerken, dass wir `game.js` nicht gecacht haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In der Realität würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank kommen, und das Cachen der Daten würde bedeuten, sie periodisch zu aktualisieren, wenn eine Netzwerkverbindung besteht. Darauf werden wir hier nicht eingehen, aber die [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weiterführende Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Ereignis, das auf die gleiche Weise wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um alle Dateien zu löschen, die nicht mehr benötigt werden und im Allgemeinen nach der App aufzuräumen. Wir müssen das in unserer App nicht machen, also überspringen wir es.

### Reagieren auf Fetches

Wir haben auch ein `fetch`-Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn eine HTTP-Anfrage von unserer App gestartet wird. Dies ist sehr nützlich, da es uns ermöglicht, Anfragen abzufangen und mit benutzerdefinierten Antworten zu reagieren. Hier ein einfaches Anwendungsbeispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: die angeforderte Datei, ihre gecachte Kopie oder ein Stück JavaScript-Code, das etwas Bestimmtes tut – die Möglichkeiten sind endlos.

In unserer Beispiel-App liefern wir den Inhalt aus dem Cache anstatt aus dem Netzwerk, solange die Ressource tatsächlich im Cache ist. Dies tun wir, egal ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie zuerst dorthin hinzu, bevor sie sie dann bereitstellt:

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

Hier reagieren wir auf das fetch-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Wenn nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk zu holen und speichern dann die Antwort im Cache, damit sie beim nächsten Anfordern dort verfügbar ist.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle – dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dies ermöglicht es uns, auf jede einzelne Anfrage mit einer beliebigen Antwort zu antworten: vorbereitet vom Service Worker, aus dem Cache genommen, modifiziert, wenn nötig.

Das war's! Unsere App cached ihre Ressourcen bei der Installation und liefert sie bei Fetch aus dem Cache, so dass sie funktioniert, auch wenn der Nutzer offline ist. Sie cached auch neue Inhalte, wann immer sie hinzugefügt werden.

## Updates

Es gibt noch einen Punkt zu klären: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Assets verfügbar ist? Die Versionsnummer im Cache-Namen ist der Schlüssel dazu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir dann alle unsere Dateien (einschließlich unserer neuen Dateien) in einen neuen Cache hinzufügen:

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

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert korrekt, bis keine Seiten ihn mehr verwenden – der neue Service Worker wird dann aktiviert und übernimmt die Verwaltung der Seite vom alten Service Worker.

## Cache leeren

Erinnern Sie sich an das `activate`-Ereignis, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu löschen, den wir nicht mehr benötigen:

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

Dies stellt sicher, dass wir nur die Dateien im Cache haben, die wir benötigen, damit wir keinen Müll hinterlassen; der [verfügbare Cache-Speicherplatz im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), also ist es eine gute Idee, aufzuräumen.

## Andere Anwendungsfälle

Dateien aus dem Cache bereitzustellen ist nicht die einzige Funktion, die Service Worker bieten. Wenn Sie aufwendige Berechnungen durchführen müssen, können Sie diese vom Haupt-Thread auslagern und im Worker ausführen lassen und die Ergebnisse erhalten, sobald sie verfügbar sind. Leistungstechnisch können Sie Ressourcen vorab laden, die im Moment nicht benötigt werden, aber möglicherweise in naher Zukunft benötigt werden, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir einen einfachen Blick darauf geworfen, wie Sie Ihre PWA mit Service Workern offline arbeitsfähig machen können. Sehen Sie sich unbedingt unsere weitere Dokumentation an, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) erfahren und erfahren möchten, wie Sie sie detaillierter nutzen können.

Service Worker werden auch beim Umgang mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet – dies wird in einem Folgeartikel erläutert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
