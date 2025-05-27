---
title: "js13kGames: So funktioniert die PWA offline mit Service Workern"
short-title: Offline-Unterstützung mit Service Workern
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

Nun, da wir gesehen haben, wie die Struktur von js13kPWA aussieht und die grundlegende Shell in Betrieb genommen wurde, schauen wir uns an, wie die Offline-Funktionalitäten mit Service Workern implementiert sind. In diesem Artikel betrachten wir, wie es in unserem [js13kPWA-Beispiel](https://mdn.github.io/pwa-examples/js13kpwa/) verwendet wird ([siehe auch den Quellcode](https://github.com/mdn/pwa-examples/tree/main/js13kpwa)). Wir untersuchen, wie die Offline-Funktionalität hinzugefügt wird.

## Erklärung der Service Worker

Service Worker sind ein virtueller Proxy zwischen dem Browser und dem Netzwerk. Sie ermöglichen es, die Ressourcen einer Website ordnungsgemäß zu cachen und sie verfügbar zu machen, wenn das Gerät des Benutzers offline ist.

Sie laufen in einem separaten Thread vom Haupt-JavaScript-Code unserer Seite und haben keinen Zugriff auf die DOM-Struktur. Dies führt zu einem anderen Ansatz als die traditionelle Webprogrammierung — die API ist nicht blockierend und kann zwischen verschiedenen Kontexten kommunizieren. Sie können einem Service Worker eine Aufgabe geben und das Ergebnis empfangen, sobald es bereit ist, basierend auf einem [Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basierten Ansatz.

Service Worker können mehr als nur Offline-Fähigkeiten bieten, einschließlich der Verwaltung von Benachrichtigungen oder der Ausführung umfangreicher Berechnungen. Service Worker sind ziemlich leistungsfähig, da sie die Kontrolle über Netzwerk-Anfragen übernehmen, diese modifizieren, benutzerdefinierte Antworten aus dem Cache bereitstellen oder Antworten vollständig synthetisieren können.

Um mehr über Service Worker zu erfahren, siehe [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Service Worker in der js13kPWA-App

Sehen wir uns an, wie die js13kPWA-App Service Worker verwendet, um Offline-Fähigkeiten bereitzustellen.

### Registrierung des Service Workers

Wir beginnen mit dem Code, der einen neuen Service Worker in der Datei app.js registriert:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./pwa-examples/js13kpwa/sw.js");
}
```

Wenn die Service Worker-API im Browser unterstützt wird, wird sie mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) für die Website registriert. Der Inhalt befindet sich in der sw.js-Datei und kann nach erfolgreicher Registrierung ausgeführt werden. Dies ist der einzige Abschnitt des Service Worker-Codes, der sich in der app.js-Datei befindet; alles andere, das spezifisch für den Service Worker ist, wird in der sw.js-Datei selbst geschrieben.

### Lebenszyklus eines Service Workers

Nach Abschluss der Registrierung wird die sw.js-Datei automatisch heruntergeladen, dann installiert und schließlich aktiviert.

#### Installation

Die API erlaubt es uns, Ereignislistener für wichtige Ereignisse, an denen wir interessiert sind, hinzuzufügen — das erste ist das `install`-Ereignis:

```js
self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
});
```

Im `install`-Listener können wir den Cache initialisieren und Dateien für die Offline-Nutzung hinzufügen. Unsere js13kPWA-App macht genau das.

Zuerst wird eine Variable zur Speicherung des Cachennamens erstellt und die App-Shelldateien werden in einem Array aufgelistet.

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

Als Nächstes werden die Links zu Bildern, die mit dem Inhalt der Datei data/games.js geladen werden sollen, in einem zweiten Array generiert. Danach werden beide Arrays mit der {{jsxref("Array.prototype.concat()")}}-Funktion zusammengeführt.

```js
const gamesImages = [];
for (const game of games) {
  gamesImages.push(`data/img/${game.slug}.jpg`);
}
const contentToCache = appShellFiles.concat(gamesImages);
```

Dann können wir das eigentliche `install`-Ereignis verwalten:

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

Es gibt zwei Dinge, die hier erklärt werden müssen: was [`ExtendableEvent.waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) macht und was das [`caches`](/de/docs/Web/API/Cache)-Objekt ist.

Der Service Worker wird erst dann installiert, wenn der Code innerhalb von `waitUntil` ausgeführt wird. Es gibt ein Versprechen zurück — dieser Ansatz ist notwendig, weil die Installation einige Zeit in Anspruch nehmen kann, also müssen wir darauf warten, dass sie abgeschlossen ist.

`caches` ist ein spezielles [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt, das im Geltungsbereich des angegebenen Service Workers verfügbar ist, um das Speichern von Daten zu ermöglichen — das Speichern in [Web-Speicher](/de/docs/Web/API/Web_Storage_API) funktioniert nicht, da Web-Speicher synchron ist. Mit Service Workern verwenden wir stattdessen die Cache-API.

Hier öffnen wir einen Cache mit einem bestimmten Namen und fügen alle Dateien, die unsere App verwendet, dem Cache hinzu, damit sie beim nächsten Laden verfügbar sind. Ressourcen werden durch ihre Anfrage-URL identifiziert, die relativ zur [location](/de/docs/Web/API/WorkerGlobalScope/location) des Workers ist.

Sie werden bemerken, dass wir `game.js` nicht gecacht haben. Dies ist die Datei, die die Daten enthält, die wir beim Anzeigen unserer Spiele verwenden. In der Realität würden diese Daten höchstwahrscheinlich von einem API-Endpunkt oder einer Datenbank stammen und das Cachen der Daten würde bedeuten, sie periodisch zu aktualisieren, wenn eine Netzwerkverbindung bestand. Darauf gehen wir hier nicht ein, aber die [Periodische Hintergrund-Synchronisierungs-API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) eignet sich gut für weiterführende Informationen zu diesem Thema.

#### Aktivierung

Es gibt auch ein `activate`-Ereignis, das auf die gleiche Weise wie `install` verwendet wird. Dieses Ereignis wird normalerweise verwendet, um nicht mehr benötigte Dateien zu löschen und die App im Allgemeinen aufzuräumen. Das müssen wir in unserer App nicht tun, daher überspringen wir es.

### Reagieren auf Fetches

Wir haben auch ein `fetch`-Ereignis zur Verfügung, das jedes Mal ausgelöst wird, wenn von unserer App eine HTTP-Anfrage ausgeführt wird. Dies ist sehr nützlich, da es uns ermöglicht, Anfragen abzufangen und mit benutzerdefinierten Antworten auf sie zu reagieren. Zum Beispiel:

```js
self.addEventListener("fetch", (e) => {
  console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});
```

Die Antwort kann alles sein, was wir möchten: die angeforderte Datei, ihre gecachte Kopie oder ein Stück JavaScript-Code, das etwas Bestimmtes ausführt — die Möglichkeiten sind endlos.

In unserer Beispiel-App bedienen wir Inhalte aus dem Cache anstatt aus dem Netzwerk, solange die Ressource tatsächlich im Cache vorhanden ist. Wir tun dies, egal ob die App online oder offline ist. Wenn die Datei nicht im Cache ist, fügt die App sie zuerst dort hinzu, bevor sie sie dann bereitstellt:

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

Hier reagieren wir auf das `fetch`-Ereignis mit einer Funktion, die versucht, die Ressource im Cache zu finden und die Antwort zurückzugeben, wenn sie dort ist. Falls nicht, verwenden wir eine weitere Fetch-Anfrage, um sie aus dem Netzwerk zu holen, speichern dann die Antwort im Cache, sodass sie beim nächsten Mal dort verfügbar ist, wenn sie angefordert wird.

Die Methode [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith) übernimmt die Kontrolle — dies ist der Teil, der als Proxyserver zwischen der App und dem Netzwerk fungiert. Dadurch können wir auf jede einzelne Anfrage mit jeder gewünschten Antwort reagieren: vorbereitet durch den Service Worker, aus dem Cache entnommen, falls erforderlich modifiziert.

Das war's! Unsere App cached ihre Ressourcen bei der Installation und dient sie mit Fetch aus dem Cache, sodass sie auch funktioniert, wenn der Benutzer offline ist. Sie cached auch neue Inhalte, wann immer sie hinzugefügt werden.

## Updates

Es bleibt noch ein Punkt zu klären: Wie aktualisieren Sie einen Service Worker, wenn eine neue Version der App mit neuen Ressourcen verfügbar ist? Die Versionsnummer im Cachennamen ist entscheidend dafür:

```js
const cacheName = "js13kPWA-v1";
```

Wenn dies auf v2 aktualisiert wird, können wir dann alle unsere Dateien (einschließlich unserer neuen Dateien) in einem neuen Cache hinzufügen:

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

Ein neuer Service Worker wird im Hintergrund installiert und der vorherige (v1) funktioniert korrekt, bis keine Seiten mehr ihn verwenden — der neue Service Worker wird dann aktiviert und übernimmt die Verwaltung der Seite vom alten.

## Leeren des Caches

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

Dies stellt sicher, dass wir nur die Dateien, die wir benötigen, im Cache haben, damit wir keinen Müll hinterlassen; der [verfügbare Cache-Speicher im Browser ist begrenzt](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), daher ist es eine gute Idee, nach uns selbst aufzuräumen.

## Andere Anwendungsfälle

Das Ausliefern von Dateien aus dem Cache ist nicht das einzige Feature, das Service Worker bieten. Wenn Sie umfangreiche Berechnungen durchführen müssen, können Sie diese vom Haupt-Thread auslagern und im Worker durchführen und die Ergebnisse erhalten, sobald sie verfügbar sind. In puncto Leistung können Sie Ressourcen, die momentan nicht benötigt werden, aber in naher Zukunft möglicherweise, vorab abrufen, sodass die App schneller ist, wenn Sie diese Ressourcen tatsächlich benötigen.

## Zusammenfassung

In diesem Artikel haben wir einen einfachen Blick darauf geworfen, wie Sie Ihre PWA mit Service Workern offlinefähig machen können. Sehen Sie sich unbedingt unsere weiterführende Dokumentation an, wenn Sie mehr über die Konzepte hinter der [Service Worker API](/de/docs/Web/API/Service_Worker_API) erfahren möchten und wie Sie sie detaillierter einsetzen können.

Service Worker werden auch im Umgang mit [Push-Benachrichtigungen](/de/docs/Web/API/Push_API) verwendet — dies wird in einem nachfolgenden Artikel erläutert.

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/App_structure", "Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
