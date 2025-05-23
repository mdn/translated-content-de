---
title: "js13kGames: Die PWA offline mit Service Workern funktionsfähig machen"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Nachdem wir uns die Struktur von js13kPWA angesehen und die grundlegende Shell in Betrieb genommen haben, schauen wir uns an, wie die Offline-Fähigkeiten mit Service Workern implementiert sind. In diesem Artikel betrachten wir, wie es in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) verwendet wird ([siehe auch den Quellcode](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie Offline-Funktionen hinzugefügt werden können.

## Service Worker erklärt

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Assets einer Website ordnungsgemäß zu cachen und sie verfügbar zu machen, wenn das Gerät des Nutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz als bei der traditionellen Webprogrammierung - die API ist nicht blockierend und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis erhalten, sobald es bereit ist, indem Sie einen auf [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) basierenden Ansatz verwenden.

Service Worker können mehr leisten als nur Offline-Fähigkeiten anzubieten, einschließlich der Verwaltung von Benachrichtigungen oder der Durchführung von umfangreichen Berechnungen. Service Worker sind recht mächtig, da sie die Kontrolle über Netzwerkrequests übernehmen, sie modifizieren, benutzerdefinierte Antworten aus dem Cache abrufen oder Antworten vollständig synthetisieren können.

Um mehr über Service Worker zu erfahren, sehen Sie sich [Offline und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation) an.

## Service Worker in der js13kPWA-App

Sehen wir uns an, wie die js13kPWA-App Service Worker nutzt, um Offline-Fähigkeiten bereitzustellen.

### Registrierung des Service Workers

Wir beginnen mit dem Code, der einen neuen Service Worker registriert, im app.js-Datei:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Wenn die Service Worker API im Browser unterstützt wird, wird sie mithilfe der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) auf der Seite registriert. Ihr Inhalt befindet sich in der sw.js-Datei und kann nach erfolgreicher Registrierung ausgeführt werden. Es ist das einzige Stück Service Worker-Code, das in der app.js-Datei sitzt; alles andere, das spezifisch für Service Worker ist, wird in der sw.js-Datei selbst geschrieben.

### Lebenszyklus eines Service Workers

Wenn die Registrierung abgeschlossen ist, wird die sw.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API ermöglicht es uns, Event-Listener für Schlüsselereignisse hinzuzufügen, die uns interessieren — das erste ist das `install`-Ereignis:

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

Als nächstes werden die Links zu den Bildern erstellt, die zusammen mit dem Inhalt aus der data/games.js-Datei geladen werden sollen. Danach werden beide Arrays mithilfe der Funktion {{jsxref("Array.prototype.concat()")}} zusammengeführt.

```js
const gamesImages = [];
for (let i = 0; i < games.length; i++) {
  gamesImages.push(`data/img/${games[i].slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Dann können wir das `install`-Event selbst verwalten:

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

Hier gibt es zwei Dinge, die eine Erklärung benötigen: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) tut und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker installiert sich nicht, bis der Code innerhalb von `waitUntil` ausgeführt wird. Er gibt ein Promise zurück — dieser Ansatz ist erforderlich, weil die Installation einige Zeit in Anspruch nehmen kann, also müssen wir warten, bis sie abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das im Scope des gegebenen Service Workers verfügbar ist, um das Speichern von Daten zu ermöglichen — das Speichern im [Webspeicher](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da der Webspeicher synchron ist. Mit Service Workern verwenden wir stattdessen die Cache-API.

Hier öffnen wir einen Cache mit einem gegebenen Namen, dann fügen wir alle Dateien, die unsere App verwendet, dem Cache hinzu, damit sie verfügbar sind, wenn sie das nächste Mal geladen wird. Ressourcen werden anhand ihrer Request-URL identifiziert, die relativ zum [Standort](/de/docs/Web/API/WorkerGlobalScope/location) des Arbeiters ist.

Sie haben vielleicht bemerkt, dass wir `game.js` nicht gecacht haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. Tatsächlich würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen, und das Cachen der Daten würde bedeuten, sie periodisch zu aktualisieren, wenn eine Netzwerkverbindung besteht. Wir werden hier nicht weiter darauf eingehen, aber die [Periodische Hintergrundsynchronisation API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weiterführende Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Ereignis, das auf die gleiche Weise wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um Dateien zu löschen, die nicht mehr benötigt werden, und um die App im Allgemeinen aufzuräumen. Das müssen wir in unserer App nicht tun, also überspringen wir es.

### Antworten auf Fetches

Wir haben außerdem ein `fetch`-Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn ein HTTP-Request von unserer App ausgeführt wird. Dies ist sehr nützlich, da es uns ermöglicht, Requests abzufangen und auf sie mit benutzerdefinierten Antworten zu reagieren. Zum Beispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: die angeforderte Datei, ihre gecachte Kopie oder ein Stück JavaScript-Code, das etwas Spezifisches tut — die Möglichkeiten sind endlos.

In unserer Beispiel-App liefern wir Inhalte aus dem Cache statt aus dem Netzwerk, solange die Ressource tatsächlich im Cache ist. Wir tun dies unabhängig davon, ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie dort zuerst hinzu, bevor sie sie dann liefert:

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

Hier reagieren wir auf das Fetch-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Wenn nicht, verwenden wir einen weiteren Fetch-Request, um sie aus dem Netzwerk abzurufen und speichern die Antwort im Cache, sodass sie beim nächsten Mal dort verfügbar ist, wenn sie angefordert wird.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle — dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk funktioniert. Dies ermöglicht es uns, auf jede einzelne Anfrage mit jeder beliebigen Antwort zu reagieren: vorbereitet vom Service Worker, aus dem Cache entnommen, modifiziert, wenn nötig.

Das war's! Unsere App cached ihre Ressourcen bei der Installation und liefert sie mit Fetch aus dem Cache, sodass sie auch funktioniert, wenn der Nutzer offline ist. Außerdem cached sie neue Inhalte, wann immer sie hinzugefügt werden.

## Updates

Es gibt noch einen Punkt, den wir behandeln müssen: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Assets verfügbar ist? Die Versionsnummer im Cache-Namen ist der Schlüssel dazu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir dann all unsere Dateien (einschließlich unserer neuen Dateien) zu einem neuen Cache hinzufügen:

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

Ein neuer Service Worker wird im Hintergrund installiert und der vorherige (v1) funktioniert korrekt, bis keine Seiten ihn mehr verwenden — der neue Service Worker wird dann aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Cache leeren

Erinnern Sie sich an das `activate`-Ereignis, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu leeren, den wir nicht mehr benötigen:

```js
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return undefined;
          }
          return caches.delete(key);
        }),
      );
    }),
  );
});
```

Dadurch wird sichergestellt, dass wir nur die Dateien im Cache haben, die wir benötigen, sodass wir keinen Müll hinterlassen; der [verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, aufzuräumen.

## Andere Anwendungsfälle

Das Servieren von Dateien aus dem Cache ist nicht die einzige Funktion, die Service Worker bieten. Wenn Sie umfangreiche Berechnungen durchführen müssen, können Sie diese vom Haupt-Thread auslagern und im Worker ausführen lassen. Die Ergebnisse erhalten Sie, sobald sie verfügbar sind. Aus Leistungssicht können Sie Ressourcen vorher abrufen, die gerade nicht benötigt werden, aber möglicherweise in naher Zukunft benötigt werden, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir uns einen einfachen Überblick darüber verschafft, wie Sie Ihre PWA mit Service Workern offline funktionsfähig machen können. Achten Sie darauf, unsere weitere Dokumentation zu konsultieren, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) lernen und sie detaillierter nutzen möchten.

Service Worker werden auch beim Umgang mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet — dies wird in einem nachfolgenden Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
