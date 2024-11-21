---
title: So funktionieren PWAs offline mit Service Workers
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Nachdem wir nun die Struktur von js13kPWA gesehen haben und das grundlegende Gerüst in Betrieb ist, schauen wir uns an, wie die Offline-Fähigkeiten mit Service Workers implementiert werden. In diesem Artikel betrachten wir, wie dies in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) ([siehe auch den Quellcode](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)) verwendet wird. Wir untersuchen, wie Offline-Funktionalität hinzugefügt werden kann.

## Service Workers erklärt

Service Workers sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Assets einer Website richtig zu cachen und verfügbar zu machen, wenn das Gerät des Nutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies erfordert einen anderen Ansatz als bei der traditionellen Webprogrammierung — die API ist nicht blockierend und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis erhalten, sobald es bereit ist, indem Sie einen auf [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) basierenden Ansatz verwenden.

Service Workers können mehr als nur Offline-Fähigkeiten bieten, einschließlich der Handhabung von Benachrichtigungen oder der Durchführung von rechenintensiven Berechnungen. Service Workers sind ziemlich leistungsfähig, da sie die Kontrolle über Netzwerk-Anfragen übernehmen, diese modifizieren, individuelle Antworten aus dem Cache bereitstellen oder Antworten vollständig synthetisieren können.

Um mehr über Service Workers zu erfahren, siehe [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Workers in der js13kPWA-App

Schauen wir, wie die js13kPWA-App Service Workers einsetzt, um Offline-Fähigkeiten bereitzustellen.

### Registrieren des Service Workers

Wir beginnen mit dem Code, der einen neuen Service Worker in der Datei app.js registriert:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Wenn die API für Service Workers im Browser unterstützt wird, wird diese über die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) mit der Seite registriert. Der Inhalt befindet sich in der Datei sw\.js und kann nach erfolgreicher Registrierung ausgeführt werden. Es ist das einzige Stück Service Worker-Code, das sich in der Datei app.js befindet; alles andere, das spezifisch für den Service Worker ist, ist in der Datei sw\.js geschrieben.

### Lebenszyklus eines Service Workers

Nach Abschluss der Registrierung wird die sw\.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API ermöglicht es uns, Ereignis-Listener für Schlüsselereignisse hinzuzufügen, an denen wir interessiert sind — das erste ist das `install`-Ereignis:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im `install`-Listener können wir den Cache initialisieren und Dateien für die Offline-Nutzung hinzufügen. Unsere js13kPWA-App macht genau das.

Zuerst wird eine Variable erstellt, um den Cache-Namen zu speichern, und die App-Shell-Dateien werden in einem Array aufgelistet.

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

Als nächstes werden die Links zu den Bildern generiert, die zusammen mit dem Inhalt aus der Datei data/games.js geladen werden sollen. Danach werden beide Arrays mithilfe der {{jsxref("Array.prototype.concat()")}}-Funktion zusammengeführt.

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

Hier sind zwei Dinge zu erklären: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) macht und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker installiert nicht, bis der Code innerhalb von `waitUntil` ausgeführt wird. Es gibt ein Versprechen zurück — dieser Ansatz ist notwendig, weil das Installieren einige Zeit dauern kann, daher müssen wir warten, bis es abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das im Bereich des gegebenen Service Workers verfügbar ist, um das Speichern von Daten zu ermöglichen — das Speichern in [Web Storage](/de/docs/Web/API/Web_Storage_API) ist nicht möglich, da Web Storage synchron ist. Mit Service Workers verwenden wir stattdessen die Cache API.

Hier öffnen wir einen Cache mit einem gegebenen Namen und fügen alle Dateien, die unsere App verwendet, dem Cache hinzu, damit sie beim nächsten Laden verfügbar sind. Ressourcen werden durch ihre Anforderungs-URL identifiziert, die relativ zur {{domxref("WorkerGlobalScope.location", "location", "", 1)}} des Workers ist.

Sie haben vielleicht bemerkt, dass wir `game.js` nicht gecacht haben. Das ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In Wirklichkeit würden diese Daten wahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen und das Cachen der Daten würde bedeuten, sie regelmäßig zu aktualisieren, wenn eine Netzwerkverbindung besteht. Darauf gehen wir hier nicht ein, aber die [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist gute weiterführende Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Ereignis, das ähnlich wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um alle Dateien zu löschen, die nicht mehr benötigt werden, und allgemein nach der App aufzuräumen. Wir müssen dies in unserer App nicht tun, daher überspringen wir es.

### Reaktion auf Fetches

Wir haben auch ein `fetch`-Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn eine HTTP-Anfrage von unserer App gesendet wird. Dies ist sehr nützlich, da es uns ermöglicht, Anfragen abzufangen und ihnen mit benutzerdefinierten Antworten zu antworten. Zum Beispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: die angeforderte Datei, ihre gecachte Kopie oder ein Stück JavaScript-Code, das etwas Spezifisches macht — die Möglichkeiten sind endlos.

In unserer Beispiel-App servieren wir Inhalte aus dem Cache anstelle des Netzwerks, solange die Ressource tatsächlich im Cache ist. Wir tun dies, ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie dort zuerst hinzu, bevor sie dann ausgeliefert wird:

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

Hier reagieren wir auf das Fetch-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Falls nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk zu holen, und speichern die Antwort dann im Cache, damit sie beim nächsten Mal verfügbar ist, wenn sie angefordert wird.

Die [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith)-Methode übernimmt die Kontrolle — dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dies ermöglicht es uns, auf jede einzelne Anfrage mit einer beliebigen Antwort zu antworten: von dem Service Worker vorbereitet, aus dem Cache genommen, modifiziert, falls nötig.

Das war's! Unsere App cached ihre Ressourcen bei der Installation und serviert sie mit Fetch aus dem Cache, sodass sie auch funktioniert, wenn der Nutzer offline ist. Sie cached auch neue Inhalte, wann immer sie hinzugefügt werden.

## Aktualisierungen

Es gibt noch einen Punkt zu klären: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Assets verfügbar ist? Die Versionsnummer im Cache-Namen ist der Schlüssel dazu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir dann alle unsere Dateien (einschließlich unserer neuen Dateien) in einen neuen Cache einfügen:

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

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert korrekt, bis keine Seiten mehr ihn verwenden — der neue Service Worker wird dann aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Löschen des Caches

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

Dies stellt sicher, dass wir nur die Dateien im Cache haben, die wir benötigen, sodass wir keinen Müll hinterlassen; der [verfügbare Speicherplatz für den Cache im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, nach uns selbst aufzuräumen.

## Andere Anwendungsfälle

Das Servieren von Dateien aus dem Cache ist nicht das einzige Merkmal, das der Service Worker bietet. Wenn Sie intensive Berechnungen durchzuführen haben, können Sie diese vom Haupt-Thread auslagern und im Worker ausführen und die Ergebnisse erhalten, sobald sie verfügbar sind. In Bezug auf die Leistung können Sie Ressourcen vorab laden, die jetzt nicht benötigt werden, aber in naher Zukunft nützlich sein könnten, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir einen einfachen Blick darauf geworfen, wie Sie Ihre PWA mit Service Workers offlinefähig machen können. Sehen Sie sich unsere weitere Dokumentation an, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) erfahren und sie detaillierter nutzen möchten.

Service Workers werden auch verwendet, wenn es um [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) geht — dies wird in einem folgenden Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
