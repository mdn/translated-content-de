---
title: Wie PWAs offline mit Service Workern arbeiten
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

{{PWASidebar}}

Da wir nun die Struktur von js13kPWA kennengelernt haben und gesehen haben, dass das grundlegende Shell läuft, schauen wir uns an, wie die Offline-Fähigkeiten unter Verwendung von Service Workern implementiert sind. In diesem Artikel betrachten wir die Anwendung in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) ([sehen Sie sich auch den Quellcode an](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie man Offline-Funktionalität hinzufügt.

## Service Worker erklärt

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Ressourcen einer Website richtig zu cachen und verfügbar zu machen, wenn das Gerät des Benutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz als bei der traditionellen Webprogrammierung — die API ist nicht-blockierend und kann Kommunikation zwischen verschiedenen Kontexten senden und empfangen. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis empfangen, sobald es fertig ist, indem Sie einen [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierten Ansatz verwenden.

Service Worker können mehr als nur Offline-Fähigkeiten bieten, einschließlich der Bearbeitung von Benachrichtigungen oder der Durchführung umfangreicher Berechnungen. Service Worker sind sehr leistungsfähig, da sie die Kontrolle über Netzwerk-Anfragen übernehmen, diese modifizieren, benutzerdefinierte Antworten aus dem Cache bereitstellen oder Antworten vollständig synthetisieren können.

Um mehr über Service Worker zu erfahren, siehe [Offline- und Hintergrundbetrieb](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Sehen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Fähigkeiten bereitzustellen.

### Registrierung des Service Workers

Wir beginnen mit dem Code, der einen neuen Service Worker in der app.js Datei registriert:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Wenn die Service Worker API im Browser unterstützt wird, wird sie für die Website mit der Methode {{domxref("ServiceWorkerContainer.register()")}} registriert. Der Inhalt befindet sich in der sw\.js-Datei und kann nach erfolgreicher Registrierung ausgeführt werden. Es ist das einzige Stück Service Worker Code, das sich in der app.js-Datei befindet; alles andere, was speziell für den Service Worker ist, wird in der sw\.js-Datei selbst geschrieben.

### Lebenszyklus eines Service Workers

Nach Abschluss der Registrierung wird die sw\.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API erlaubt es uns, Event-Listener für Schlüsselereignisse hinzuzufügen, die uns interessieren — das erste ist das `install`-Ereignis:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im `install`-Listener können wir den Cache initialisieren und Dateien hinzufügen, um sie offline zu nutzen. Unsere js13kPWA-App tut genau das.

Zuerst wird eine Variable erstellt, um den Cachenamen zu speichern, und die App-Shell-Dateien werden in einem Array aufgelistet.

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

Anschließend werden die Links zu den Bildern generiert, die zusammen mit dem Inhalt aus der Datei data/games.js geladen werden, in einem zweiten Array. Danach werden beide Arrays mithilfe der {{jsxref("Array.prototype.concat()")}}-Funktion zusammengeführt.

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

Hier gibt es zwei Dinge, die einer Erklärung bedürfen: was {{domxref("ExtendableEvent.waitUntil")}} tut und was das {{domxref("Cache","caches")}}-Objekt ist.

Der Service Worker wird nicht installiert, bis der Code innerhalb von `waitUntil` ausgeführt wird. Es gibt ein Promise zurück — dieser Ansatz ist erforderlich, da die Installation einige Zeit in Anspruch nehmen kann, sodass wir darauf warten müssen, dass sie abgeschlossen ist.

`caches` ist ein spezielles {{domxref("CacheStorage")}}-Objekt, das im Geltungsbereich des gegebenen Service Workers verfügbar ist, um Daten zu speichern — das Speichern im [Webspeicher](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da der Webspeicher synchron ist. Bei Service Workern verwenden wir stattdessen die Cache API.

Hier öffnen wir einen Cache mit einem angegebenen Namen und fügen dann alle Dateien, die unsere App verwendet, dem Cache hinzu, sodass sie das nächste Mal verfügbar sind, wenn sie geladen wird. Ressourcen werden anhand ihrer Anforderungs-URL identifiziert, die relativ zur {{domxref("WorkerGlobalScope.location", "location", "", 1)}} des Workers ist.

Sie werden bemerkt haben, dass wir `game.js` nicht gecachet haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In Wirklichkeit würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen, und das Cachen der Daten würde bedeuten, sie regelmäßig zu aktualisieren, wenn Netzwerkverbindungen bestehen. Wir werden hier nicht darauf eingehen, aber die [Periodic Background Sync API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ist eine gute weiterführende Lektüre zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Ereignis, das auf die gleiche Weise wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um jede nicht mehr benötigte Datei zu löschen und nach der App im Allgemeinen aufzuräumen. Das müssen wir in unserer App nicht tun, daher überspringen wir es.

### Reagieren auf Fetches

Wir haben auch ein `fetch`-Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn eine HTTP-Anfrage von unserer App gesendet wird. Dies ist sehr nützlich, da es uns ermöglicht, Anfragen abzufangen und mit benutzerdefinierten Antworten darauf zu reagieren. Hier ist ein einfaches Anwendungsbeispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir wollen: die angeforderte Datei, ihre gecachte Kopie oder ein JavaScript-Code, der etwas Spezifisches tut — die Möglichkeiten sind endlos.

In unserer Beispiel-App servieren wir Inhalte aus dem Cache anstelle des Netzwerks, solange die Ressource tatsächlich im Cache vorhanden ist. Das tun wir, egal ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie dort zuerst hinzu, bevor sie sie dann bereitstellt:

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

Hier antworten wir auf das Fetch-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Wenn nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk zu holen, speichern dann die Antwort im Cache, damit sie beim nächsten Mal dort verfügbar ist, wenn sie angefordert wird.

Die Methode {{domxref("FetchEvent.respondWith")}} übernimmt die Kontrolle — dies ist der Teil, der als Proxy-Server zwischen der App und dem Netzwerk fungiert. Dadurch können wir auf jede einzelne Anfrage mit jeder gewünschten Antwort reagieren: vom Service Worker vorbereitet, aus dem Cache genommen, falls erforderlich modifiziert.

Das war's! Unsere App cached ihre Ressourcen bei der Installation und serviert sie mit Fetch aus dem Cache, sodass sie auch funktioniert, wenn der Benutzer offline ist. Sie cached auch neue Inhalte, wenn sie hinzugefügt werden.

## Updates

Es gibt noch einen Punkt zu klären: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Assets verfügbar ist? Die Versionsnummer im Cachenamen ist der Schlüssel dazu:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir alle unsere Dateien (einschließlich unserer neuen Dateien) zu einem neuen Cache hinzufügen:

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

Ein neuer Service Worker wird im Hintergrund installiert, und der vorherige (v1) funktioniert korrekt, bis es keine Seiten mehr gibt, die ihn verwenden — der neue Service Worker wird dann aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Cache leeren

Erinnern Sie sich an das `activate`-Ereignis, das wir übersprungen haben? Es kann verwendet werden, um den alten Cache zu bereinigen, den wir nicht mehr benötigen:

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

Dies stellt sicher, dass wir nur die Dateien im Cache haben, die wir benötigen, damit wir keinen Müll hinterlassen; der [verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, nach uns aufzuräumen.

## Andere Anwendungsfälle

Das Bereitstellen von Dateien aus dem Cache ist nicht das einzige Merkmal, das der Service Worker bietet. Wenn Sie schwere Berechnungen durchführen müssen, können Sie diese vom Haupt-Thread entlasten und im Worker ausführen und die Ergebnisse erhalten, sobald sie verfügbar sind. Leistungsmäßig können Sie Ressourcen vorab laden, die momentan nicht benötigt werden, aber möglicherweise in naher Zukunft, damit die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir einen einfachen Einblick erhalten, wie Sie Ihre PWA mit Service Workern offline arbeiten lassen können. Sehen Sie sich unsere weiterführende Dokumentation an, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) erfahren und wie Sie diese im Detail nutzen können.

Service Worker werden auch beim Umgang mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet — dies wird in einem nachfolgenden Artikel erklärt.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
