---
title: "js13kGames: Die PWA offline mit Service Workern arbeiten lassen"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Nun, da wir die Struktur von js13kPWA gesehen haben und die grundlegende Shell in Betrieb genommen haben, schauen wir uns an, wie die Offline-Fähigkeiten mithilfe von Service Workern implementiert werden. In diesem Artikel betrachten wir, wie sie in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) verwendet werden ([siehe auch den Quellcode](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie man Offline-Funktionalität hinzufügt.

## Erklärung der Service Worker

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Assets einer Website korrekt zu cachen und sie verfügbar zu machen, wenn das Gerät des Benutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz im Vergleich zur traditionellen Web-Programmierung — die API ist nicht blockierend und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis abrufen, sobald es bereit ist, wobei ein [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierter Ansatz verwendet wird.

Service Worker können mehr als nur Offline-Fähigkeiten bieten, einschließlich der Verarbeitung von Benachrichtigungen oder der Durchführung von Schwerberechnungen. Service Worker sind sehr leistungsfähig, da sie die Kontrolle über Netzwerk-Anfragen übernehmen, modifizieren, benutzerdefinierte Antworten aus dem Cache abrufen oder Antworten vollständig synthetisieren können.

Um mehr über Service Worker zu erfahren, sehen Sie [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Schauen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Fähigkeiten bereitzustellen.

### Registrierung des Service Workers

Wir beginnen mit dem Code, der im app.js-File einen neuen Service Worker registriert:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Wenn die Service Worker API im Browser unterstützt wird, wird sie mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) gegen die Seite registriert. Sein Inhalt befindet sich in der sw.js-Datei und kann nach erfolgreicher Registrierung ausgeführt werden. Dies ist das einzige Stück Service Worker-Code, das sich in der app.js-Datei befindet; alles andere, was spezifisch für Service Worker ist, wird direkt in der sw.js-Datei geschrieben.

### Lebenszyklus eines Service Workers

Nach Abschluss der Registrierung wird die sw.js-Datei automatisch heruntergeladen, installiert und schließlich aktiviert.

#### Installation

Die API erlaubt uns, Event-Listener für wichtige Events hinzuzufügen, an denen wir interessiert sind — das erste ist das `install`-Event:

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

Als nächstes werden die Links zu den mit dem Inhalt geladenen Bildern aus der data/games.js-Datei im zweiten Array generiert. Danach werden beide Arrays mit der {{jsxref("Array.prototype.concat()")}}-Funktion zusammengeführt.

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

Hier gibt es zwei Dinge zu erklären: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) tut und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker installiert nicht, bis der Code innerhalb von `waitUntil` ausgeführt wird. Es gibt ein Promise zurück — dieser Ansatz ist erforderlich, weil die Installation einige Zeit in Anspruch nehmen kann, und wir müssen darauf warten, dass sie abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das im Scope des betreffenden Service Workers verfügbar ist, um Daten zu speichern — das Speichern in [Web-Speicher](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, weil Webspeicher synchron ist. Mit Service Workern verwenden wir stattdessen die Cache API.

Hier öffnen wir einen Cache mit einem bestimmten Namen und fügen alle Dateien hinzu, die unsere App verwendet, damit sie das nächste Mal verfügbar sind, wenn sie geladen wird. Ressourcen werden anhand ihrer Anfrage-URL identifiziert, die relativ zur [location](/de/docs/Web/API/WorkerGlobalScope/location) des Workers ist.

Vielleicht ist Ihnen aufgefallen, dass wir `game.js` nicht gecacht haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In der Realität würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen, und das Cachen der Daten würde bedeuten, dass sie periodisch aktualisiert werden, wenn eine Netzwerkverbindung besteht. Darauf gehen wir hier nicht näher ein, aber die [Periodische Hintergrund-Synchronisierungs-API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weitere Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Event, das in gleicher Weise wie `install` verwendet wird. Dieses Event wird normalerweise verwendet, um alle nicht mehr benötigten Dateien zu löschen und die App im Allgemeinen aufzuräumen. Dies ist in unserer App nicht notwendig, daher überspringen wir es.

### Reaktionen auf Fetches

Wir haben auch ein `fetch`-Event zur Verfügung, das jedes Mal ausgelöst wird, wenn eine HTTP-Anfrage von unserer App abgesendet wird. Dies ist sehr nützlich, da es uns ermöglicht, Anfragen abzufangen und mit benutzerdefinierten Antworten zu antworten. Zum Beispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: Die angeforderte Datei, ihre zwischengespeicherte Kopie oder ein Stück JavaScript-Code, das etwas Bestimmtes tut — die Möglichkeiten sind endlos.

In unserer Beispiel-App liefern wir Inhalte aus dem Cache statt aus dem Netzwerk, solange die Ressource tatsächlich im Cache vorhanden ist. Dies tun wir, unabhängig davon, ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie zunächst hinzu, bevor sie dann bereitgestellt wird:

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

Hier antworten wir auf das fetch-Event mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Falls nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk zu holen, und speichern dann die Antwort im Cache, damit sie beim nächsten Mal zur Verfügung steht, wenn sie angefordert wird.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle — dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dies erlaubt uns, auf jede einzelne Anfrage mit jeder gewünschten Antwort zu antworten: vorbereitet vom Service Worker, aus dem Cache genommen, falls nötig modifiziert.

Das war's! Unsere App cached ihre Ressourcen bei der Installation und liefert sie mit Fetch aus dem Cache, sodass sie funktioniert, selbst wenn der Benutzer offline ist. Außerdem cached sie neue Inhalte, wann immer sie hinzugefügt werden.

## Updates

Noch ein Punkt bleibt zu klären: Wie aktualisiert man einen Service Worker, wenn eine neue Version der App mit neuen Assets verfügbar ist? Der Versionsnummer im Cache-Namen kommt dabei eine Schlüsselrolle zu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir alle unsere Dateien (einschließlich unserer neuen Dateien) in einen neuen Cache hinzufügen:

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

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert korrekt bis keine Seiten mehr ihn nutzen — dann wird der neue Service Worker aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Cache leeren

Erinnern Sie sich an das `activate`-Event, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu leeren, den wir nicht mehr benötigen:

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

Dies stellt sicher, dass wir nur die Dateien im Cache haben, die wir benötigen, sodass wir keinen Müll hinterlassen; der [verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, nach uns aufzuräumen.

## Andere Anwendungsfälle

Das Bereitstellen von Dateien aus dem Cache ist nicht die einzige Funktion, die der Service Worker bietet. Wenn Sie schwere Berechnungen durchführen müssen, können Sie diese vom Haupt-Thread auslagern und im Worker durchführen und die Ergebnisse erhalten, sobald sie verfügbar sind. Leistungstechnisch können Sie Ressourcen vorab holen, die im Moment nicht benötigt werden, aber in naher Zukunft benötigt werden könnten, sodass die App schneller ist, wenn Sie tatsächlich diese Ressourcen benötigen.

## Zusammenfassung

In diesem Artikel haben wir uns einfach angeschaut, wie Sie Ihre PWA mit Service Workern offlinefähig machen können. Sehen Sie sich unbedingt unsere weiterführende Dokumentation an, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) und deren detaillierte Nutzung erfahren möchten.

Service Worker werden auch beim Umgang mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet — dies wird in einem nachfolgenden Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
