---
title: Offline und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

In der Regel sind Websites stark auf eine zuverlässige Netzwerkverbindung und darauf angewiesen, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites schlichtweg unbrauchbar und wenn der Benutzer die Seite nicht in einem Browser-Tab geöffnet hat, können die meisten Websites nichts tun.

Berücksichtigen Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht dem Benutzer das Streamen von Musik, während er online ist, kann jedoch Titel im Hintergrund herunterladen und sie weiterhin abspielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, drückt auf "Senden" und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald die Netzwerkverbindung wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem seiner Kontakte, und obwohl die App nicht geöffnet ist, zeigt sie einen Badge auf dem App-Symbol an, um den Benutzer darauf hinzuweisen, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden stellen wir Ihnen eine Reihe von Technologien vor, die es einer PWA ermöglichen:

- Eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät nur intermittierende Netzwerkverbindungen hat.
- Ihren Status zu aktualisieren, wenn die App nicht läuft.
- Den Benutzer über wichtige Ereignisse zu benachrichtigen, die aufgetreten sind, während die App nicht lief.

Die in diesem Leitfaden vorgestellten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden besprechen, ist der _Service Worker_. In diesem Abschnitt geben wir einen kleinen Hintergrund über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzelnen Thread. Dies schließt das eigene JavaScript der Website ein und alle Arbeiten zur Darstellung der Benutzeroberfläche der Website. Eine Konsequenz davon ist, dass, wenn Ihr JavaScript eine lang andauernde Operation ausführt, die Hauptoberfläche der Website blockiert wird und die Website dem Benutzer gegenüber unempfänglich erscheint.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist eine spezielle Art von [Web Worker](/de/docs/Web/API/Web_Workers_API), die zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker, indem er eine URL zum Skript des Workers übergibt. Der Worker und der Hauptcode können nicht direkt auf den Zustand des jeweils anderen zugreifen, können jedoch durch das Senden von Nachrichten miteinander kommunizieren. Worker können verwendet werden, um rechentechnisch kostspielige Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, weiterhin auf Benutzereingaben reagieren.

Eine PWA hat also immer eine hochgradige Architektur, die sich aufteilt in:

- Die _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScript, der die Benutzeroberfläche der App implementiert (indem beispielsweise Benutzereignisse behandelt werden)
- Den _Service Worker_, der Offline- und Hintergrundaufgaben behandelt

In diesem Leitfaden, wenn wir Codebeispiele zeigen, werden wir angeben, zu welchem Teil der App der Code gehört mit einem Kommentar wie `// main.js` oder `// service-worker.js`.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht einer PWA, eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät keine Netzwerkverbindung hat. Dies wird ermöglicht, indem einer App ein Service Worker hinzugefügt wird.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen vom Server für die von ihm kontrollierten Seiten abrufen (einschließlich Seiten, Stile, Skripte und Bilder, beispielsweise) und sie in einem lokalen Cache speichern. Die Schnittstelle [`Cache`](/de/docs/Web/API/Cache) wird verwendet, um Ressourcen zum Cache hinzuzufügen. `Cache`-Instanzen sind über die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) im globalen Scope des Service Workers zugänglich.

Jedes Mal, wenn die App eine Ressource anfordert (zum Beispiel, weil der Benutzer die App geöffnet hat oder auf einen internen Link geklickt hat), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Scope des Service Workers aus. Indem er auf dieses Ereignis hört, kann der Service Worker die Anfrage abfangen.

Dem Ereignishandler für das `fetch`-Ereignis wird ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt übergeben, das:

- Zugriff auf die Anfrage als eine [`Request`](/de/docs/Web/API/Request)-Instanz bietet
- Eine Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereitstellt, um eine Antwort auf die Anfrage zu senden.

Eine Möglichkeit, wie ein Service Worker Anfragen handhaben kann, ist eine "Cache-First"-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, holen Sie die Ressource aus dem Cache und geben Sie die Ressource an die App zurück.
2. Wenn die angeforderte Ressource nicht im Cache existiert, versuchen Sie, die Ressource aus dem Netzwerk abzurufen.
   1. Wenn die Ressource abgerufen werden kann, fügen Sie die Ressource dem Cache für das nächste Mal hinzu und geben Sie die Ressource an die App zurück.
   2. Wenn die Ressource nicht abgerufen werden kann, geben Sie eine Standardersatzressource zurück.

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

Das bedeutet, dass in vielen Situationen die Web-App gut funktionieren wird, selbst wenn die Netzwerkverbindung intermittierend ist. Aus Sicht des Haupt-App-Codes ist es völlig transparent: Die App macht einfach Netzwerkabfragen und erhält Antworten. Da der Service Worker in einem separaten Thread läuft, kann der Haupt-App-Code während des Abrufs und Zwischenspeicherns von Ressourcen reaktionsfähig auf Benutzereingaben bleiben.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker das Caching umsetzen könnte. Speziell in einer Cache-First-Strategie prüfen wir zuerst den Cache vor dem Netzwerk, was bedeutet, dass wir eher eine schnelle Antwort ohne Netzwerkkosten erhalten, jedoch wahrscheinlich eine veraltete Antwort zurückgeben.
>
> Eine alternative Möglichkeit wäre eine _Network-First_-Strategie, bei der wir zunächst versuchen, die Ressource vom Server abzurufen, und auf den Cache zurückfallen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der jeweiligen Web-App und ihrer Nutzung ab.

Für wesentlich detaillierte Informationen zur Einrichtung von Service Workern und deren Nutzung zum Hinzufügen von Offline-Funktionalität sehen Sie sich unseren [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers) an.

## Hintergrundbetrieb

Während Offline-Operationen der häufigste Anwendungsfall für Service Worker sind, ermöglichen sie auch, dass eine PWA funktioniert, selbst wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht läuft.

Das bedeutet nicht, dass Service Worker die ganze Zeit über laufen: Browser können Service Worker stoppen, wenn sie es für angebracht halten. Zum Beispiel, wenn ein Service Worker für eine Weile inaktiv war, wird er gestoppt. Der Browser startet den Service Worker jedoch neu, wenn ein Ereignis passiert, das er bearbeiten muss. Dies ermöglicht einer PWA, Hintergrundoperationen auf folgende Weise zu implementieren:

- In der Haupt-App registrieren Sie eine Anfrage, dass der Service Worker eine bestimmte Aufgabe ausführen soll
- Zur richtigen Zeit wird, falls nötig, der Service Worker neu gestartet und ein Ereignis wird im Scope des Service Workers ausgelöst
- Der Service Worker führt die Aufgabe aus

In den nächsten Abschnitten werden wir einige verschiedene Funktionen besprechen, die dieses Muster verwenden, um einer PWA auch bei geschlossener Haupt-App das Arbeiten zu ermöglichen.

## Hintergrundsynchronisation

Angenommen, ein Benutzer verfasst eine E-Mail und drückt auf "Senden". In einer herkömmlichen Website muss der Benutzer den Tab geöffnet halten, bis die App die E-Mail gesendet hat: Wenn er den Tab schließt oder das Gerät die Verbindung verliert, wird die Nachricht nicht gesendet. Die Hintergrundsynchronisation, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung für dieses Problem bei PWAs.

Die Hintergrundsynchronisation ermöglicht der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät Netzwerkverbindung hat, startet der Browser, falls nötig, den Service Worker neu und löst ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Scope des Service Workers aus. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, kann der Browser durch erneutes Auslösen des Ereignisses eine begrenzte Anzahl von Malen versuchen, die Aufgabe erneut zu bearbeiten.

### Registrieren eines Sync-Ereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) auf dem `ServiceWorkerRegistration`-Objekt auf, wie folgt:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: `"send-message"` in diesem Fall.

### Handhabung eines Sync-Ereignisses

Sobald das Gerät Netzwerkverbindung hat, wird das `sync`-Ereignis im Scope des Service Workers ausgelöst. Der Service Worker überprüft den Namen der Aufgabe und führt die entsprechende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der Funktion `sendMessage()` in die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses übergeben. Die Methode `waitUntil()` nimmt ein {{jsxref("Promise")}} als Parameter und fordert den Browser auf, den Service Worker nicht zu stoppen, bis das Promise abgeschlossen ist. Dies ist auch die Methode, wie der Browser weiß, ob die Operation erfolgreich war oder nicht: Wenn das Promise abgelehnt wird, darf der Browser versuchen, das `sync`-Ereignis erneut auszulösen.

Die Methode `waitUntil()` ist keine Garantie dafür, dass der Browser den Service Worker nicht stoppen wird: Wenn die Operation zu lange dauert, wird der Service Worker trotzdem gestoppt. In diesem Fall wird die Operation abgebrochen, und beim nächsten Auslösen eines `sync`-Ereignisses wird der Handler erneut von vorne ausgeführt — er wird nicht an der Stelle fortgesetzt, an der er aufgehört hat.

Wie lange "zu lange" ist, ist browserspezifisch. Bei Chrome wird der Service Worker wahrscheinlich geschlossen, wenn:

- Er 30 Sekunden lang inaktiv gewesen ist
- Er 30 Sekunden lang synchrones JavaScript ausgeführt hat
- Das Promise, das an `waitUntil()` übergeben wurde, mehr als 5 Minuten benötigt, um abgeschlossen zu werden

## Hintergrundabruf

Die Hintergrundsynchronisation ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben, wird der Browser den Service Worker stoppen, wenn er eine Sync-Operation nicht relativ schnell abschließt. Dies ist eine absichtliche Maßnahme, um die Akkulaufzeit zu schonen und die Privatsphäre des Benutzers zu schützen, indem die Zeit, in der die IP-Adresse des Benutzers an den Server übermittelt wird, minimiert wird, während die App im Hintergrund läuft.

Dies macht die Hintergrundsynchronisation ungeeignet für längere Operationen — beispielsweise das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit dem Hintergrundabruf können Netzwerkabfragen durchgeführt werden, während sowohl die Haupt-App-Benutzeroberfläche als auch der Service Worker geschlossen sind.

Mit dem Hintergrundabruf:

- Die Anfrage wird von der Haupt-App-Benutzeroberfläche aus initiiert
- Unabhängig davon, ob die Haupt-App geöffnet ist oder nicht, zeigt der Browser ein beständiges UI-Element an, das den Benutzer über die laufende Anfrage informiert und ihm ermöglicht, sie abzubrechen oder ihren Fortschritt zu überprüfen
- Wenn die Anfrage erfolgreich oder fehlgeschlagen beendet wird oder der Benutzer den Fortschritt der Anfrage überprüfen möchte, startet der Browser den Service Worker (falls nötig) und löst das entsprechende Ereignis im Scope des Service Workers aus.

### Eine Hintergrundabrufanfrage stellen

Eine Hintergrundabrufanfrage wird im Haupt-App-Code initiiert, indem [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, wie folgt:

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

Wir übergeben `backgroundFetch.fetch()` drei Argumente:

1. Eine Kennung für diese Abrufanfrage
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Hintergrundabrufanfrage kann mehrere Netzwerkabfragen enthalten.
3. Ein Objekt, das Daten für die Benutzeroberfläche enthält, die der Browser verwendet, um die Existenz und den Fortschritt der Abfrage anzuzeigen.

Der `backgroundFetch.fetch()`-Aufruf gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt auflöst. Dies ermöglicht es der Haupt-App, ihre eigene Benutzeroberfläche zu aktualisieren, während die Anfrage fortschreitet. Wenn die Haupt-App jedoch geschlossen ist, wird der Abruf im Hintergrund fortgesetzt.

Der Browser zeigt ein beständiges UI-Element an, das den Benutzer daran erinnert, dass die Anfrage läuft, sodass er die Möglichkeit hat, mehr über die Anfrage zu erfahren und sie bei Bedarf abzubrechen. Die Benutzeroberfläche enthält ein Symbol und einen Titel, die aus den Argumenten `icons` und `title` entnommen sind, und verwendet `downloadTotal` als Schätzung der gesamten Download-Größe, um den Fortschritt der Anfrage anzuzeigen.

### Handhabung der Anfrageergebnisse

Wenn der Abruf erfolgreich oder mit Fehler abgeschlossen ist oder der Benutzer auf die Fortschrittsanzeige geklickt hat, startet der Browser den Service Worker der App, falls nötig, und löst ein Ereignis im Scope des Service Workers aus. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: Alle Anfragen waren erfolgreich
- `backgroundfetchfail`: Mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: Der Abruf wurde vom Benutzer oder von der Haupt-App abgebrochen
- `backgroundfetchclick`: Der Benutzer hat auf das UI-Element geklickt, das der Browser während des Abrufs anzeigt

#### Abrufen von Antwortdaten

In den Handlern für die Ereignisse `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` kann der Service Worker die Anfragen- und Antwortdaten abrufen.

Um die Antwort zu erhalten, greift der Ereignishandler auf die Eigenschaft [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt, das über die Methoden [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) und [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) verfügt, die [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekte zurückgeben, die die angegebene URL entsprechen (oder im Fall von `matchAll()` alle Datensätze, wenn keine URL angegeben ist).

Jeder `BackgroundFetchRecord` hat eine Eigenschaft [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady), die ein `Promise` ist, das mit der [`Response`](/de/docs/Web/API/Response) aufgelöst wird, sobald die Antwort verfügbar ist.

Um auf die Antwortdaten zuzugreifen, könnte der Handler also etwa folgendes tun:

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

#### Aktualisierung der Benutzeroberfläche des Browsers

Das Objektereignis, das in `backgroundfetchsuccess` und `backgroundfetchfail` übergeben wird, hat auch eine Methode [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI), die verwendet werden kann, um die Benutzeroberfläche zu aktualisieren, die der Browser zeigt, um den Benutzer über die Abrufoperation informiert zu halten. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

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

#### Reagieren auf die Interaktion des Benutzers

Das `backgroundfetchclick`-Ereignis wird ausgelöst, wenn der Benutzer auf das UI-Element klickt, das der Browser während des laufenden Abrufs anzeigt.

Die erwartete Antwort hier ist, ein Fenster zu öffnen, das dem Benutzer mehr Informationen über die Abrufoperation gibt, was vom Service Worker mit [`clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) erledigt werden kann. Zum Beispiel:

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

## Periodische Hintergrundsynchronisation

Die [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht es einer PWA, ihre Daten im Hintergrund periodisch zu aktualisieren, während die Haupt-App geschlossen ist.

Dies kann die Offline-Erfahrung, die eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die von relativ frischen Inhalten abhängt, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, sind selbst bei service worker-basierten Caches die Geschichten nur so frisch wie beim letzten Öffnen der App. Mit periodischer Hintergrundsynchronisation könnte die App ihre Geschichten im Hintergrund aktualisiert haben, wenn das Gerät eine Verbindung hatte, und so dem Benutzer relativ aktuelle Inhalte anzeigen.

Dies nutzt die Tatsache aus, dass die Konnektivität auf einem mobilen Gerät besonders nicht schlecht ist, sondern _intermittierend_: indem die Zeiten genutzt werden, in denen das Gerät eine Verbindung hat, kann die App die Konnektivitätslücken glätten.

### Registrieren eines periodischen Sync-Ereignisses

Der Code zum Registrieren eines periodischen Sync-Ereignisses folgt demselben Muster wie das zum [Registrieren eines Sync-Ereignisses](#registrieren_eines_sync-ereignisses). Das [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine Eigenschaft [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync), die eine Methode [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) hat, die den Namen der periodischen Synchronisation als Parameter nimmt.

Allerdings nimmt `periodicSync.register()` ein zusätzliches Argument, das ein Objekt mit einer Eigenschaft `minInterval` ist. Dies stellt das Mindestintervall in Millisekunden zwischen Synchronisationsversuchen dar:

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

### Handhabung eines periodischen Sync-Ereignisses

Obwohl die PWA in `register()` für ein bestimmtes Intervall anfordert, entscheidet der Browser, wie oft periodische Sync-Ereignisse generiert werden. Apps, die die Benutzer häufig öffnen und mit denen sie interagieren, werden wahrscheinlich öfter periodische Sync-Ereignisse erhalten und öfter als Apps, die der Benutzer selten oder nie verwendet.

Wenn der Browser entschieden hat, ein periodisches Sync-Ereignis zu erzeugen, folgt folgendem Muster: Er startet den Service Worker, falls nötig, und löst ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Ereignis im globalen Scope des Service Workers aus.

Der Ereignishandler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion innerhalb der Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Geschichten abrufen und zwischenspeichern. Die Funktion `updateNews()` sollte relativ schnell abgeschlossen sein: Wenn der Service Worker zu lange damit verbringt, seine Inhalte zu aktualisieren, wird der Browser ihn stoppen.

### Kündigen einer periodischen Synchronisation

Wenn die PWA keine regelmäßigen Hintergrundaktualisierungen mehr benötigt (zum Beispiel, weil der Benutzer sie in den App-Einstellungen deaktiviert hat), sollte die PWA den Browser bitten, die Erzeugung von periodischen Sync-Ereignissen zu stoppen, indem sie die Methode [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister) von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) aufruft:

```js
// main.js

async function unregisterPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einer PWA, Nachrichten vom Server zu erhalten, egal ob die App läuft oder nicht. Wenn die Nachricht auf dem Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) wird dem Benutzer angezeigt. Die Spezifikation erlaubt "Silent Push", bei dem keine Benachrichtigung angezeigt wird, aber keine Browser unterstützen dies aufgrund von Datenschutzbedenken (zum Beispiel, dass Push genutzt werden könnte, um den Standort eines Benutzers zu verfolgen).

Eine Benachrichtigung dem Benutzer anzuzeigen lenkt ihn von seinen Aktivitäten ab und kann sehr störend sein, daher sollten Push-Nachrichten mit Bedacht eingesetzt werden. Im Allgemeinen sind sie für Situationen geeignet, in denen Sie den Benutzer über etwas informieren müssen und nicht bis zum nächsten Öffnen der App warten können.

Ein häufiger Anwendungsfall für Push-Benachrichtigungen sind Chat-Apps: Wenn der Benutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht zugestellt und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Service, von dem das Gerät sie abrufen und an die App liefern kann.

Das bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Service {{Glossary("Encryption", "verschlüsselt")}} sein müssen (damit der Push-Service sie nicht lesen kann) und {{Glossary("Signature/Security", "signiert")}} sein müssen (damit der Push-Service weiß, dass die Nachrichten wirklich von Ihrem Server stammen und nicht von jemandem, der vorgibt, Ihr Server zu sein).

Der Push-Service wird vom Browser-Anbieter oder von einem Drittanbieter betrieben, und der App-Server kommuniziert mit ihm unter Verwendung des [HTTP Push-Protokolls](https://datatracker.ietf.org/doc/html/rfc8030). Der App-Server kann eine Drittanbieter-Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Protokolldetails zu verwalten.

### Abonnieren von Push-Nachrichten

Das Muster für das Abonnieren von Push-Nachrichten sieht folgendermaßen aus:

![Diagramm, das die Schritte zum Abonnement von Push-Nachrichten zeigt](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem {{Glossary("Public-key_cryptography", "öffentlichen/privaten Schlüsselpaar")}} ausgestattet sein, damit er Push-Nachrichten signieren kann. Das Signieren von Nachrichten muss der [VAPID-Spezifikation](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02) entsprechen.

2. Auf dem Gerät verwendet die App die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe), um Nachrichten vom Server zu abonnieren. Die Methode `subscribe()`:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies ist das, was der Push-Service verwenden wird, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das sich zu einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt auflöst. Dieses Objekt enthält:

     - Den [Endpoint](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Service: So weiß der App-Server, wohin Push-Nachrichten gesendet werden sollen.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Service zu verschlüsseln.

3. Die App sendet den Endpoint und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel unter Verwendung von [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)).

Danach kann der App-Server beginnen, Push-Nachrichten zu senden.

### Senden, Zustellen und Handhaben von Push-Nachrichten

Wenn auf dem Server ein Ereignis eintritt, das er möchte, dass die App behandelt, kann der Server Nachrichten senden, und die Schrittfolge sieht wie folgt aus:

![Diagramm, das die Schritte beim Senden und Zustellen von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Service. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpoint für den Push-Service, unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls, und erneut eventuell unter Verwendung einer Bibliothek, wie web-push.
3. Der Push-Service überprüft die Signatur auf der Nachricht, und wenn die Signatur gültig ist, fügt der Push-Service die Nachricht in die Warteschlange zur Zustellung.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Service die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht erhält, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker, falls nötig, und löst ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) im globalen Scope des Service Workers aus. Dem Ereignishandler wird ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt übergeben, das die Nachrichtendaten enthält.
7. In seinem Ereignishandler führt der Service Worker jede Verarbeitung der Nachricht aus. Wie üblich ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker weiterlaufen zu lassen.
8. In seinem Ereignishandler erstellt der Service Worker eine Benachrichtigung mit [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
9. Wenn der Benutzer die Benachrichtigung anklickt oder schließt, werden die Ereignisse [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) bzw. [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) im globalen Scope des Service Workers ausgelöst. Diese ermöglichen es der App, die Antwort des Benutzers auf die Benachrichtigung zu bearbeiten.

## Berechtigungen und Beschränkungen

Browser müssen einen Ausgleich finden, bei dem sie Webentwickler leistungsstarke APIs bereitstellen können, während sie die Benutzer vor bösartigen, ausbeuterischen oder schlecht geschriebenen Websites schützen. Eine der Hauptschutzmaßnahmen, die sie bieten, ist, dass Benutzer die Seiten der Website schließen können, und dann nicht mehr auf ihrem Gerät aktiv sind. Die in diesem Artikel beschriebenen APIs neigen dazu, diese Sicherheit zu verletzen, daher müssen Browser zusätzliche Schritte unternehmen, um sicherzustellen, dass die Benutzer sich dessen bewusst sind und dass die APIs in einer Weise verwendet werden, die mit den Interessen der Benutzer übereinstimmt.

In diesem Abschnitt skizzieren wir diese Schritte. Mehrere dieser APIs erfordern eine explizite [Benutzerbewilligung](/de/docs/Web/API/Permissions_API) sowie verschiedene andere Einschränkungen und Designentscheidungen, um die Benutzer zu schützen.

- Die Background Sync API benötigt keine explizite Benutzerbewilligung, aber das Auslösen eines Hintergrundsynchronisationsantrags kann nur gemacht werden, während die Haupt-App geöffnet ist, und Browser beschränken die Anzahl der Wiederholungsversuche und die Länge der möglichen Hintergrundsynchronisationsoperationen.

- Die Background Fetch API erfordert die Benutzergenehmigung `"background-fetch"`, und der Browser zeigt den laufenden Fortschritt der Fetch-Operation an, wobei der Benutzer die Möglichkeit hat, sie abzubrechen.

- Die Periodic Background Sync API erfordert die Benutzergenehmigung `"periodic-background-sync"`, und Browser sollten Benutzern erlauben, die periodische Hintergrundsynchronisation vollständig zu deaktivieren. Außerdem können Browser die Häufigkeit von Sync-Ereignissen an den Umfang binden, in dem der Benutzer sich entscheidet, mit der App zu interagieren: Eine App, die der Benutzer selten verwendet, kann wenige Ereignisse (oder sogar überhaupt keine) erhalten.

- Die Push API erfordert die Benutzergenehmigung `"push"`, und alle Browser erfordern, dass Push-Ereignisse für den Benutzer sichtbar sind, was bedeutet, dass sie eine benutzer-sichtbare Benachrichtigung erzeugen.

## Siehe auch

### Referenz

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

### Leitfäden

- [Introducing Background Sync](https://developer.chrome.com/blog/background-sync/) auf developer.chrome.com (2017)
- [Introducing Background Fetch](https://developer.chrome.com/blog/background-fetch/) auf developer.chrome.com (2022)
- [The Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync) auf developer.chrome.com (2020)
- [Notifications](https://web.dev/explore/notifications) auf web.dev
- [PWA with offline streaming](https://web.dev/articles/pwa-with-offline-streaming) auf web.dev (2021)
