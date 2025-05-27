---
title: Offline- und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

Normalerweise sind Websites stark von einer zuverlässigen Netzwerkverbindung und davon abhängig, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites einfach unbrauchbar, und wenn der Benutzer die Seite nicht in einem Browsertab geöffnet hat, können die meisten Websites nichts tun.

Betrachten Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht dem Benutzer, Musik zu streamen, während er online ist, kann jedoch im Hintergrund Tracks herunterladen und dann weiter abspielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, drückt auf "Senden" und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald das Netzwerk wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem seiner Kontakte, und obwohl die App nicht geöffnet ist, wird ein Badge auf dem App-Symbol angezeigt, um den Benutzer darauf hinzuweisen, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden führen wir eine Reihe von Technologien ein, die es einer PWA ermöglichen:

- Eine gute Benutzererfahrung zu bieten, auch wenn das Gerät eine unterbrochene Netzwerkverbindung hat
- Seinen Status zu aktualisieren, wenn die App nicht ausgeführt wird
- Den Benutzer über wichtige Ereignisse zu benachrichtigen, die passiert sind, während die App nicht ausgeführt wurde

Die in diesem Leitfaden eingeführten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden besprechen werden, ist der _Service Worker_. In diesem Abschnitt geben wir etwas Hintergrundwissen zu Workern und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine ganze Website in einem einzigen Thread. Dies schließt das eigene JavaScript der Website und die gesamte Arbeit zum Rendern der Benutzeroberfläche der Website ein. Eine Konsequenz daraus ist, dass, wenn Ihr JavaScript einen langwierigen Vorgang ausführt, die Haupt-UI der Website blockiert ist und die Website dem Benutzer nicht mehr reagiert erscheint.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist eine spezielle Art von [Web Worker](/de/docs/Web/API/Web_Workers_API), der zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker, indem er eine URL zum Skript des Workers übergibt. Der Worker und der Hauptcode können nicht direkt aufeinander Zugriff nehmen, aber sie können durch das Senden von Nachrichten miteinander kommunizieren. Worker können verwendet werden, um rechnerisch aufwendige Aufgaben im Hintergrund auszuführen: da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, für den Benutzer reaktionsfähig bleiben.

Eine PWA hat also immer eine Architektur, die wie folgt aufgeteilt ist:

- Die _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScripts, der die Benutzeroberfläche der App implementiert (z.B. durch das Handhaben von Benutzereignissen)
- Der _Service Worker_, der Offline- und Hintergrundaufgaben übernimmt

In diesem Leitfaden werden wir bei der Anzeige von Codebeispielen angeben, zu welchem Teil der App der Code gehört, indem wir einen Kommentar wie `// main.js` oder `// service-worker.js` verwenden.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht es einer PWA, auch dann eine gute Benutzererfahrung zu bieten, wenn das Gerät keine Netzwerkverbindung hat. Dies wird durch das Hinzufügen eines Service Workers zu einer App ermöglicht.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen für die von ihm kontrollierten Seiten (einschließlich Seiten, Stilen, Skripts und Bildern zum Beispiel) vom Server abrufen und sie einem lokalen Cache hinzufügen. Die [`Cache`](/de/docs/Web/API/Cache) Schnittstelle wird verwendet, um Ressourcen dem Cache hinzuzufügen. `Cache`-Instanzen sind im globalen Scope des Service Workers über die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) zugänglich.

Jedes Mal, wenn die App eine Ressource anfordert (zum Beispiel, weil der Benutzer die App öffnet oder auf einen internen Link klickt), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Scope des Service Workers aus. Indem man auf dieses Ereignis hört, kann der Service Worker die Anfrage abfangen.

Der Ereignishandler für das `fetch`-Ereignis erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt, das:

- Zugang zu der Anfrage als eine [`Request`](/de/docs/Web/API/Request) Instanz bereitstellt
- Eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode bereitstellt, um auf die Anfrage zu antworten.

Eine Möglichkeit, wie ein Service Worker Anfragen behandeln kann, ist eine "Cache-First"-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, wird die Ressource aus dem Cache geholt und an die App zurückgegeben.
2. Wenn die angeforderte Ressource nicht im Cache existiert, wird versucht, die Ressource aus dem Netzwerk abzurufen.
   1. Wenn die Ressource erfolgreich abgerufen werden konnte, wird die Ressource dem Cache für das nächste Mal hinzugefügt und an die App zurückgegeben.
   2. Wenn die Ressource nicht abgerufen werden konnte, wird eine Standard-Überbrückungsressource zurückgegeben.

Das folgende Codebeispiel zeigt eine Implementierung davon:

```js
// service-worker.js

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
  // First try to get the resource from the cache.
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // If the response was not found in the cache,
  // try to get the resource from the network.
  try {
    const responseFromNetwork = await fetch(request);
    // If the network request succeeded, clone the response:
    // - put one copy in the cache, for the next time
    // - return the original to the app
    // Cloning is needed because a response can only be consumed once.
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    // If the network request failed,
    // get the fallback response from the cache.
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // When even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object.
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "/fallback.html",
    }),
  );
});
```

Das bedeutet, dass die Web-App in vielen Situationen gut funktioniert, auch wenn die Netzwerkverbindung intermittierend ist. Aus Sicht des Haupt-App-Codes ist dies völlig transparent: Die App macht einfach Netzwerk-Anfragen und erhält Antworten. Außerdem kann der Haupt-App-Code, da der Service Worker in einem separaten Thread ausgeführt wird, reaktionsfähig auf Benutzereingaben bleiben, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker Caching implementieren könnte. Insbesondere bei einer Cache-First-Strategie überprüfen wir zuerst den Cache vor dem Netzwerk, was bedeutet, dass wir wahrscheinlich eine schnelle Antwort ohne Netzwerkkosten erhalten, aber auch wahrscheinlicher eine veraltete Antwort zurückgeben.
>
> Eine alternative Möglichkeit wäre eine _Network-First_-Strategie, bei der wir zuerst versuchen, die Ressource vom Server abzurufen und auf den Cache zurückgreifen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der spezifischen Web-App und ihrer Nutzung ab.

Für wesentlich mehr Details zur Einrichtung von Service Workern und deren Verwendung zur Hinzufügung von Offline-Funktionen sehen Sie sich unseren [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) an.

## Hintergrundbetrieb

Während Offline-Betrieb der häufigste Einsatzzweck für Service Worker ist, ermöglichen sie einer PWA auch, zu funktionieren, auch wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht läuft.

Das bedeutet nicht, dass Service Worker die ganze Zeit aktiv sind: Browser können Service Worker stoppen, wenn sie es für angebracht halten. Zum Beispiel wird ein Service Worker gestoppt, wenn er eine Weile inaktiv war. Der Browser wird den Service Worker jedoch neu starten, wenn ein Ereignis eingetreten ist, das behandelt werden muss. Dies ermöglicht einer PWA, Hintergrundoperationen folgendermaßen zu implementieren:

- In der Haupt-App eine Anfrage registrieren, damit der Service Worker eine Operation ausführt
- Zum passenden Zeitpunkt wird der Service Worker bei Bedarf neu gestartet und ein Ereignis in seinem Scope ausgelöst
- Der Service Worker führt die Operation aus

In den nächsten Abschnitten werden wir einige verschiedene Funktionen besprechen, die dieses Muster verwenden, um einer PWA zu ermöglichen, zu funktionieren, während die Haupt-App nicht geöffnet ist.

## Hintergrund-Synchronisierung

Angenommen, ein Benutzer verfasst eine E-Mail und drückt "Senden". Bei einer traditionellen Website muss er den Tab geöffnet halten, bis die App die E-Mail gesendet hat: Wenn er den Tab schließt oder das Gerät die Verbindung verliert, wird die Nachricht nicht gesendet. Hintergrund-Synchronisierung, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung für dieses Problem für PWAs.

Die Hintergrund-Synchronisierung ermöglicht es der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät Netzwerkverbindung hat, wird der Browser den Service Worker neu starten, falls nötig, und ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Scope des Service Workers auslösen. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, kann der Browser sie eine begrenzte Anzahl von Malen erneut versuchen, indem er das Ereignis erneut auslöst.

### Registrierung eines Sync-Ereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, das ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt auflöst. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) auf dem `ServiceWorkerRegistration`-Objekt auf, wie folgt:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: `"send-message"` in diesem Fall.

### Behandlung eines Sync-Ereignisses

Sobald das Gerät Netzwerkverbindung hat, wird das `sync`-Ereignis im Scope des Service Workers ausgelöst. Der Service Worker prüft den Namen der Aufgabe und führt die entsprechende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag === "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der Funktion `sendMessage()` in die Methode `waitUntil()` des Ereignisses übergeben. Die Methode `waitUntil()` nimmt ein {{jsxref("Promise")}} als Parameter entgegen und fordert den Browser auf, den Service Worker nicht zu beenden, bis das Promise beendet ist. So erfährt der Browser auch, ob die Operation erfolgreich war oder nicht: Wenn das Promise abgelehnt wird, kann der Browser erneut versuchen, indem er das `sync`-Ereignis erneut auslöst.

Die Methode `waitUntil()` ist keine Garantie dafür, dass der Browser den Service Worker nicht stoppt: Wenn der Vorgang zu lange dauert, wird der Service Worker trotzdem gestoppt. In diesem Fall wird die Operation abgebrochen, und das nächste Mal, wenn ein `sync`-Ereignis ausgelöst wird, läuft der Handler von Anfang an neu - er wird nicht dort fortgesetzt, wo er aufgehört hat.

Wie lange "zu lange" ist, ist browser-spezifisch. Bei Chrome wird der Service Worker wahrscheinlich geschlossen, wenn:

- Er 30 Sekunden lang untätig war
- Er 30 Sekunden lang synchrones JavaScript ausgeführt hat
- Das Promise, das an `waitUntil()` übergeben wurde, mehr als 5 Minuten gebraucht hat, um zu enden

## Hintergrund-Abruf

Hintergrund-Synchronisierung ist nützlich für relativ kurze Hintergrundvorgänge, aber wie wir gerade gesehen haben: wenn ein Service Worker ein Sync-Ereignis nicht in relativ kurzer Zeit verarbeitet, wird der Browser den Service Worker stoppen. Dies ist eine absichtliche Maßnahme, um die Akkulaufzeit zu schonen und die Privatsphäre des Benutzers zu schützen, indem die Zeit minimiert wird, in der die IP-Adresse des Benutzers dem Server ausgesetzt ist, während die App im Hintergrund läuft.

Dies macht die Hintergrund-Synchronisierung für längere Vorgänge ungeeignet - zum Beispiel das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit dem Hintergrund-Abruf können Netzwerk-Anfragen ausgeführt werden, während sowohl die Haupt-App-UI als auch der Service Worker geschlossen sind.

Beim Hintergrund-Abruf:

- Die Anfrage wird von der Haupt-App-UI initiiert
- Unabhängig davon, ob die Haupt-App geöffnet ist oder nicht, zeigt der Browser ein dauerhaftes UI-Element an, das den Benutzer über die laufende Anfrage informiert und ihm ermöglicht, sie abzubrechen oder deren Fortschritt zu überprüfen
- Wenn die Anfrage erfolgreich oder mit einem Fehlschlag abgeschlossen ist oder der Benutzer gebeten hat, den Fortschritt der Anfrage zu überprüfen, startet der Browser den Service Worker (falls erforderlich) und löst das entsprechende Ereignis im Scope des Service Workers aus.

### Einleiten einer Hintergrund-Abruf-Anfrage

Eine Hintergrund-Abruf-Anfrage wird im Haupt-App-Code initiiert, indem `backgroundFetch.fetch()` auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, wie folgt:

```js
// main.js

async function requestBackgroundFetch(movieData) {
  const swRegistration = await navigator.serviceWorker.ready;
  const fetchRegistration = await swRegistration.backgroundFetch.fetch(
    "download-movie",
    ["/my-movie-part-1.webm", "/my-movie-part-2.webm"],
    {
      icons: movieIcons,
      title: "Downloading my movie",
      downloadTotal: 60 * 1024 * 1024,
    },
  );
  // …
}
```

Wir übergeben drei Argumente an `backgroundFetch.fetch()`:

1. Eine Kennung für diese Abruf-Anfrage
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Hintergrund-Abruf-Anfrage kann mehrere Netzwerk-Anfragen beinhalten.
3. Ein Objekt, das Daten für das UI enthält, das der Browser verwendet, um das Vorhandensein und den Fortschritt der Anfrage anzuzeigen.

Der `backgroundFetch.fetch()` Aufruf gibt ein {{jsxref("Promise")}} zurück, das ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt auflöst. Dies ermöglicht der Haupt-App, ihre eigene UI zu aktualisieren, während die Anfrage fortschreitet. Wenn die Haupt-App jedoch geschlossen ist, wird der Abruf im Hintergrund fortgesetzt.

Der Browser wird ein dauerhaftes UI-Element anzeigen, das den Benutzer an die laufende Anfrage erinnert und ihm die Möglichkeit gibt, mehr über die Anfrage zu erfahren und sie bei Bedarf abzubrechen. Das UI wird ein Icon und einen Titel enthalten, die aus den `icons` und `title` Argumenten stammen, und verwendet `downloadTotal` als Schätzung der gesamten Downloadgröße, um den Fortschritt der Anfrage anzuzeigen.

### Behandlung der Anfrageergebnisse

Wenn der Abruf mit Erfolg oder Fehlschlag abgeschlossen ist oder der Benutzer auf das Fortschritts-UI geklickt hat, dann startet der Browser den Service Worker der App, falls erforderlich, und löst ein Ereignis im Scope des Service Workers aus. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: Alle Anfragen waren erfolgreich
- `backgroundfetchfail`: Mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: Der Abruf wurde vom Benutzer oder von der Haupt-App abgebrochen
- `backgroundfetchclick`: Der Benutzer hat auf das Fortschritts-UI-Element geklickt, das der Browser anzeigt

#### Abrufen der Antwortdaten

In den Handlern für die `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` Ereignisse kann der Service Worker die Anfrage- und Antwortdaten abrufen.

Um auf die Antwort zuzugreifen, greift der Ereignishandler auf die `registration`-Eigenschaft des Ereignisses zu. Dies ist ein `BackgroundFetchRegistration`-Objekt, das `matchAll()` und `match()` Methoden besitzt, die `BackgroundFetchRecord`-Objekte zurückgeben, die mit der gegebenen URL übereinstimmen (oder, im Fall von `matchAll()` alle Datensätze, wenn keine URL angegeben ist).

Jeder `BackgroundFetchRecord` hat eine `responseReady`-Eigenschaft, die ein `Promise` ist, das mit der `Response` aufgelöst wird, sobald die Antwort verfügbar ist.

Um auf Antwortdaten zuzugreifen, könnte der Handler also so etwas durchführen:

```js
// service-worker.js

self.addEventListener("backgroundfetchsuccess", (event) => {
  const registration = event.registration;

  event.waitUntil(async () => {
    const registration = event.registration;
    const records = await registration.matchAll();
    const responsePromises = records.map(
      async (record) => await record.responseReady,
    );

    const responses = Promise.all(responsePromises);
    // do something with the responses
  });
});
```

Da die Antwortdaten nach dem Beenden des Handlers nicht mehr verfügbar sein werden, sollte der Handler die Daten speichern (zum Beispiel im [`Cache`](/de/docs/Web/API/Cache)), wenn die App sie weiterhin benötigt.

#### Aktualisieren der Browser-UI

Das Ereignisobjekt, das an die `backgroundfetchsuccess` und `backgroundfetchfail` Ereignisse übergeben wird, hat auch eine `updateUI()`-Methode, die zum Aktualisieren der UI verwendet werden kann, die der Browser anzeigt, um den Benutzer über den Abrufvorgang informiert zu halten. Mit `updateUI()` kann der Handler den Titel und das Icon des UI-Elements aktualisieren:

```js
// service-worker.js

self.addEventListener("backgroundfetchsuccess", (event) => {
  // retrieve and store response data
  // …

  event.updateUI({ title: "Finished your download!" });
});

self.addEventListener("backgroundfetchfail", (event) => {
  event.updateUI({ title: "Could not complete download" });
});
```

#### Reagieren auf Benutzerinteraktionen

Das `backgroundfetchclick` Ereignis wird ausgelöst, wenn der Benutzer auf das UI-Element klickt, das der Browser während des laufenden Abrufs anzeigt.

Die erwartete Reaktion ist hier das Öffnen eines Fensters, das dem Benutzer mehr Informationen über den Abrufvorgang gibt, was vom Service Worker aus mit `clients.openWindow()` durchgeführt werden kann. Zum Beispiel:

```js
// service-worker.js

self.addEventListener("backgroundfetchclick", (event) => {
  const registration = event.registration;

  if (registration.result === "success") {
    clients.openWindow("/play-movie");
  } else {
    clients.openWindow("/movie-download-progress");
  }
});
```

## Periodische Hintergrund-Synchronisierung

Die [Periodische Hintergrund-Synchronisierungs-API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht es einer PWA, ihre Daten periodisch im Hintergrund zu aktualisieren, während die Haupt-App geschlossen ist.

Dies kann die Offline-Erfahrung, die eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die auf relativ aktuelle Inhalte angewiesen ist, wie zum Beispiel eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, dann sind die Geschichten mit dem service worker-basierten Caching nur so aktuell wie das letzte Mal, als die App geöffnet wurde. Mit periodischer Hintergrundsynchronisation hätte die App ihre Geschichten im Hintergrund aktualisieren können, als das Gerät Konnektivität hatte, und könnte dem Benutzer relativ aktuelle Inhalte anzeigen.

Dies nutzt die Tatsache aus, dass die Netzwerkverbindung insbesondere auf einem mobilen Gerät nicht schlecht, sondern eher _intermittierend_ ist: indem die App die Zeiten, in denen das Gerät Konnektivität hat, nutzt, kann sie über die Konnektivitätslücken hinweghelfen.

### Registrierung eines periodischen Sync-Ereignisses

Der Code zur Registrierung eines periodischen Sync-Ereignisses folgt demselben Muster wie der zur [Registrierung eines Sync-Ereignisses](#registrierung_eines_sync-ereignisses). Der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync)-Eigenschaft, die eine [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) Methode verwendet, die den Namen der periodischen Synchronisation als Parameter nimmt.

Allerdings nimmt `periodicSync.register()` ein zusätzliches Argument, das ein Objekt mit einer `minInterval`-Eigenschaft ist. Dies repräsentiert das minimale Intervall in Millisekunden zwischen den Synchronisationsversuchen:

```js
// main.js

async function registerPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.register("update-news", {
    // try to update every 24 hours
    minInterval: 24 * 60 * 60 * 1000,
  });
}
```

### Behandlung eines periodischen Sync-Ereignisses

Obwohl die PWA in ihrem `register()`-Aufruf ein bestimmtes Intervall anfragt, liegt es am Browser, wie oft er periodische Sync-Ereignisse generiert. Apps, die Benutzer oft öffnen und mit denen sie oft interagieren, erhalten eher und häufiger periodische Sync-Ereignisse als Apps, mit denen der Benutzer selten oder gar nicht interagiert.

Wenn der Browser entschieden hat, ein periodisches Sync-Ereignis zu generieren, sieht das Muster folgendermaßen aus: er startet den Service Worker, falls erforderlich, und löst ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Ereignis im globalen Scope des Service Workers aus.

Der Ereignishandler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion innerhalb der Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Geschichten abrufen und zwischenspeichern. Die `updateNews()`-Funktion sollte relativ schnell abgeschlossen sein: Wenn der Service Worker zu lange damit beschäftigt ist, seine Inhalte zu aktualisieren, stoppt der Browser ihn.

### Deaktivieren einer periodischen Synchronisation

Wenn die PWA keine periodischen Hintergrundaktualisierungen mehr benötigt (zum Beispiel, weil der Benutzer sie im App-Einstellungen deaktiviert hat), sollte die PWA den Browser bitten, keine periodischen Sync-Ereignisse mehr zu generieren, indem sie die [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister)-Methode von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) aufruft:

```js
// main.js

async function unregisterPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einer PWA, Nachrichten zu empfangen, die vom Server gesendet werden, unabhängig davon, ob die App läuft oder nicht. Wenn die Nachricht vom Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) wird dem Benutzer angezeigt. Die Spezifikation erlaubt "stilles Push", bei dem keine Benachrichtigung angezeigt wird, aber keine Browser unterstützen dies, aufgrund von Datenschutzbedenken (zum Beispiel, dass Push verwendet werden könnte, um den Standort eines Benutzers zu verfolgen).

Eine Benachrichtigung dem Benutzer anzuzeigen lenkt ihn von dem ab, was er gerade getan hat, und kann sehr störend sein, daher sollten Push-Nachrichten mit Vorsicht verwendet werden. Im Allgemeinen sind sie in Situationen geeignet, in denen Sie den Benutzer auf etwas aufmerksam machen müssen und nicht warten können, bis er das nächste Mal Ihre App öffnet.

Ein häufiger Anwendungsfall für Push-Benachrichtigungen sind Chat-Apps: Wenn der Benutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht an ihn übermittelt, und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem aus das Gerät sie abrufen und an die App übermitteln kann.

Das bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Dienst {{Glossary("Encryption", "verschlüsselt")}} (damit der Push-Dienst sie nicht lesen kann) und {{Glossary("Signature/Security", "signiert")}} werden müssen (damit der Push-Dienst weiß, dass die Nachrichten wirklich von Ihrem Server stammen und nicht von jemandem, der Ihren Server imitiert).

Der Push-Dienst wird vom Browseranbieter oder von einem Drittanbieter betrieben, und der App-Server kommuniziert mit ihm über das [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokoll. Der App-Server kann eine Drittanbieter-Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um sich um die Protokolldetails zu kümmern.

### Abonnieren von Push-Nachrichten

Das Muster zur Anmeldung für Push-Nachrichten sieht folgendermaßen aus:

![Diagramm, das die Schritte zum Abonnieren von Push-Nachrichten zeigt](push-messaging-1.svg)

1. Voraussetzung ist, dass der App-Server mit einem {{Glossary("Public-key_cryptography", "öffentlicher/privater Schlüssel-Paar")}} bereitgestellt wird, damit er Push-Nachrichten signieren kann. Die Signierung von Nachrichten muss der [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02)-Spezifikation folgen.

2. Auf dem Gerät verwendet die App die [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)-Methode, um sich für Nachrichten vom Server anzumelden. Die `subscribe()`-Methode:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument entgegen: Dies ist, was der Push-Dienst verwendet, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt auflöst. Dieses Objekt umfasst:

     - Den [Endpunkt](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: So weiß der App-Server, wohin er Push-Nachrichten senden muss.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpunkt und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel unter Verwendung von [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)).

Nach diesem Schritt ist der App-Server in der Lage, Push-Nachrichten zu senden.

### Senden, Zustellen und Bearbeiten von Push-Nachrichten

Wenn ein Ereignis auf dem Server eintritt, das der Server von der App bearbeiten lassen möchte, kann der Server Nachrichten senden, und die Abfolge der Schritte sieht so aus:

![Diagramm, das die Schritte zum Senden und Zustellen von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpunkt für den Push-Dienst, unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls und optional zusätzlicher Bibliotheken, wie web-push.
3. Der Push-Dienst überprüft die Signatur auf der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht zur Zustellung in die Warteschlange.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Dienst die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht erhält, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker, falls nötig, und löst ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) im globalen Scope des Service Workers aus. Dem Ereignishandler wird ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt übergeben, das die Nachrichtendaten enthält.
7. In ihrem Ereignishandler macht der Service Worker alle notwendigen Verarbeitungen der Nachricht. Wie gewohnt ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker am Laufen zu halten.
8. In seinem Ereignishandler erstellt der Service Worker eine Benachrichtigung mit [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
9. Wenn der Benutzer die Benachrichtigung anklickt oder schließt, werden die Ereignisse [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) bzw. [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) im globalen Scope des Service Workers ausgelöst. Diese ermöglichen es der App, auf die Benutzerantwort auf die Benachrichtigung zu reagieren.

## Berechtigungen und Einschränkungen

Browser müssen ein Gleichgewicht finden, bei dem sie Entwicklern von Webanwendungen leistungsstarke APIs bereitstellen können, während sie Benutzer vor bösartigen, ausbeuterischen oder schlecht geschriebenen Websites schützen. Einer der Hauptschutzmechanismen, die sie bieten, ist, dass Benutzer die Seiten einer Website schließen können, und dann ist sie nicht mehr aktiv auf ihrem Gerät. Die in diesem Artikel beschriebenen APIs neigen dazu, dieses Versprechen zu verletzen, daher müssen Browser zusätzliche Maßnahmen ergreifen, um sicherzustellen, dass Benutzer sich dessen bewusst sind und dass die APIs in einer Weise verwendet werden, die den Interessen der Benutzer entspricht.

In diesem Abschnitt werden wir diese Schritte skizzieren. Mehrere dieser APIs erfordern eine explizite [Benutzererlaubnis](/de/docs/Web/API/Permissions_API) sowie verschiedene andere Einschränkungen und Designentscheidungen, um Benutzer zu schützen.

- Die Background Sync API benötigt keine explizite Benutzererlaubnis, aber das Stellen einer Hintergrund-Sync-Anfrage kann nur gemacht werden, während die Haupt-App geöffnet ist, und Browser beschränken die Anzahl der Wiederholungen und die Dauer der Hintergrund-Sync-Operationen.

- Die Background Fetch API erfordert die Benutzererlaubnis `"background-fetch"`, und der Browser zeigt den laufenden Fortschritt des Abrufvorgangs an, wodurch der Benutzer ihn abbrechen kann.

- Die Periodic Background Sync API erfordert die Benutzererlaubnis `"periodic-background-sync"`, und Browser sollten es Benutzern ermöglichen, die periodische Hintergrund-Synchronisation vollständig zu deaktivieren. Außerdem können Browser die Häufigkeit von Sync-Ereignissen mit dem Maß verknüpfen, in dem der Benutzer sich entscheidet, mit der App zu interagieren: Eine App, die der Benutzer selten benutzt, erhält möglicherweise wenige oder gar keine Ereignisse.

- Die Push API erfordert die Benutzererlaubnis `"push"`, und alle Browser setzen voraus, dass Push-Ereignisse für Benutzer sichtbar sein müssen, d.h. dass sie eine benutzersichtbare Benachrichtigung erzeugen.

## Siehe auch

### Referenz

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

### Leitfaden

- [Introducing Background Sync](https://developer.chrome.com/blog/background-sync/) auf developer.chrome.com (2017)
- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/) auf developer.chrome.com (2022)
- [The Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync) auf developer.chrome.com (2020)
- [Notifications](https://web.dev/explore/notifications) auf web.dev
- [PWA with offline streaming](https://web.dev/articles/pwa-with-offline-streaming) auf web.dev (2021)
