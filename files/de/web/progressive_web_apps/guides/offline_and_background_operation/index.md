---
title: Offline- und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

Normalerweise sind Websites stark von einer zuverlässigen Netzwerkverbindung und davon abhängig, dass Benutzer ihre Seiten im Browser geöffnet haben. Ohne Netzwerkverbindung sind die meisten Websites einfach unbrauchbar, und wenn der Benutzer die Site nicht in einem Browser-Tab geöffnet hat, können die meisten Websites nichts tun.

Betrachten Sie jedoch folgende Szenarien:

- Eine Musik-App ermöglicht dem Benutzer, Musik zu streamen, während er online ist, kann jedoch im Hintergrund Tracks herunterladen und dann weiterspielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, drückt auf „Senden“ und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald das Netzwerk wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem seiner Kontakte, und obwohl die App nicht geöffnet ist, wird ein Abzeichen auf dem App-Symbol angezeigt, um den Benutzer darüber zu informieren, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden stellen wir Ihnen eine Reihe von Technologien vor, die es ermöglichen, dass eine PWA:

- Eine gute Benutzererfahrung bietet, auch wenn die Netzwerkverbindung des Geräts unzuverlässig ist
- Ihren Zustand aktualisiert, wenn die App nicht läuft
- Den Benutzer über wichtige Ereignisse informiert, die passiert sind, während die App nicht lief

Die in diesem Leitfaden vorgestellten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden besprechen, ist der _Service Worker_. In diesem Abschnitt geben wir einen kurzen Überblick über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzelnen Thread. Dies schließt das eigene JavaScript der Website und alle Arbeiten zur Darstellung der Benutzeroberfläche der Website ein. Eine Konsequenz daraus ist, dass wenn Ihr JavaScript eine lang andauernde Operation ausführt, die Hauptbenutzeroberfläche der Website blockiert wird und die Website für den Benutzer nicht mehr reagiert.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist ein spezieller Typ von [Web Worker](/de/docs/Web/API/Web_Workers_API), der zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker, indem er eine URL zum Skript des Workers übergibt. Worker und Hauptcode können nicht direkt auf den Zustand des jeweils anderen zugreifen, können jedoch Nachrichten austauschen, um zu kommunizieren. Worker können verwendet werden, um rechnerisch anspruchsvolle Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, weiterhin auf Benutzereingaben reagieren.

Eine PWA hat also immer eine hochgradig geteilte Architektur zwischen:

- Der _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScripts, der die Benutzeroberfläche der App implementiert (indem sie beispielsweise Benutzerereignisse verarbeitet)
- Dem _Service Worker_, der Offline- und Hintergrundaufgaben übernimmt

In diesem Leitfaden geben wir in den Codebeispielen an, zu welchem Teil der App der Code gehört, mit einem Kommentar wie `// main.js` oder `// service-worker.js`.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht einer PWA, eine gute Benutzererfahrung zu bieten, auch wenn das Gerät keine Netzwerkverbindung hat. Dies wird durch das Hinzufügen eines Service Workers zur App ermöglicht.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen für die von ihm kontrollierten Seiten (einschließlich Seiten, Stilen, Skripten und Bildern beispielsweise) vom Server abrufen und sie dem lokalen Cache hinzufügen. Die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle wird verwendet, um Ressourcen dem Cache hinzuzufügen. `Cache`-Instanzen sind über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft im globalen Geltungsbereich des Service Workers zugänglich.

Wann immer die App dann eine Ressource anfordert (zum Beispiel, weil der Benutzer die App öffnete oder auf einen internen Link klickte), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Geltungsbereich des Service Workers aus. Indem er auf dieses Ereignis reagiert, kann der Service Worker die Anforderung abfangen.

Der Ereignishandler für das `fetch`-Ereignis erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt, welches:

- Zugriff auf die Anforderung als [`Request`](/de/docs/Web/API/Request)-Instanz bietet
- Eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bereitstellt, um eine Antwort auf die Anforderung zu senden

Eine Möglichkeit, wie ein Service Worker Anforderungen behandeln kann, ist eine „cache-first“-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, holen Sie die Ressource aus dem Cache und geben Sie die Ressource an die App zurück.
2. Wenn die angeforderte Ressource nicht im Cache existiert, versuchen Sie, die Ressource aus dem Netzwerk abzurufen.
   1. Wenn die Ressource abgerufen werden konnte, fügen Sie die Ressource für das nächste Mal dem Cache hinzu und geben Sie die Ressource an die App zurück.
   2. Wenn die Ressource nicht abgerufen werden konnte, geben Sie eine standardmäßig festgelegte Fallback-Ressource zurück.

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

Das bedeutet, dass die Web-App in vielen Situationen gut funktioniert, auch wenn die Netzwerkverbindung unzuverlässig ist. Aus Sicht des Hauptanwendungscodes ist dies völlig transparent: Die App stellt einfach Netzwerkanfragen und erhält Antworten. Da der Service Worker in einem separaten Thread läuft, kann der Hauptanwendungscode weiterhin auf Benutzereingaben reagieren, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker Caching implementieren könnte. Insbesondere bei einer „cache-first“-Strategie prüfen wir zuerst den Cache vor dem Netzwerk, was bedeutet, dass wir eher eine schnelle Antwort ohne Netzwerkkosten liefern, aber eher eine veraltete Antwort liefern.
>
> Eine Alternative wäre eine _network-first_ Strategie, bei der wir zuerst versuchen, die Ressource vom Server abzurufen und auf den Cache zurückgreifen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der jeweiligen Web-App und ihrer Nutzung ab.

Für weit ausführlichere Details zur Einrichtung von Service Workern und ihrer Nutzung zur Hinzufügung von Offline-Funktionen siehe unseren [Leitfaden zur Nutzung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrundbetrieb

Während Offline-Operationen der häufigste Anwendungsfall für Service Worker sind, ermöglichen sie einer PWA auch, zu arbeiten, selbst wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht läuft.

Das bedeutet nicht, dass Service Worker die ganze Zeit laufen: Browser können Service Worker beenden, wenn sie dies für angemessen halten. Zum Beispiel, wenn ein Service Worker eine Weile inaktiv war, wird er gestoppt. Wenn ein Ereignis eintritt, das der Service Worker erledigen muss, startet der Browser ihn jedoch neu. Dies ermöglicht einer PWA, Hintergrundoperationen auf folgende Weise zu implementieren:

- In der Haupt-App wird eine Anforderung zur Ausführung einer Operation durch den Service Worker registriert
- Zum richtigen Zeitpunkt wird der Service Worker bei Bedarf neu gestartet und ein Ereignis im Geltungsbereich des Service Workers ausgelöst
- Der Service Worker führt die Operation aus

In den nächsten Abschnitten werden wir einige verschiedene Funktionen besprechen, die dieses Muster verwenden, um einer PWA zu ermöglichen, zu arbeiten, während die Haupt-App nicht geöffnet ist.

## Hintergrund-Synchronisation

Angenommen, ein Benutzer verfasst eine E-Mail und drückt „Senden“. Auf einer traditionellen Website muss er den Tab geöffnet lassen, bis die App die E-Mail gesendet hat: Wenn er den Tab schließt oder das Gerät die Verbindung verliert, wird die Nachricht nicht gesendet. Die Hintergrund-Synchronisation, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung dieses Problems für PWAs.

Die Hintergrund-Synchronisation ermöglicht es der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät eine Netzwerkverbindung hat, startet der Browser den Service Worker bei Bedarf neu und löst ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Geltungsbereich des Service Workers aus. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, kann der Browser eine begrenzte Anzahl von Versuchen unternehmen, indem er das Ereignis erneut auslöst.

### Registrierung eines Sync-Ereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) auf dem `ServiceWorkerRegistration`-Objekt auf, wie folgt:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: In diesem Fall „send-message“.

### Verarbeiten eines Sync-Ereignisses

Sobald das Gerät eine Netzwerkverbindung hat, wird das `sync`-Ereignis im Geltungsbereich des Service Workers ausgelöst. Der Service Worker überprüft den Namen der Aufgabe und führt die entsprechende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der `sendMessage()`-Funktion an die `waitUntil()`-Methode des Ereignisses übergeben. Die `waitUntil()`-Methode nimmt ein {{jsxref("Promise")}} als Parameter und bittet den Browser, den Service Worker nicht zu stoppen, bis das Versprechen erfüllt ist. Dies ist auch der Weg, wie der Browser erkennt, ob die Operation erfolgreich war oder nicht: Wenn das Versprechen abgelehnt wird, kann der Browser das `sync`-Ereignis erneut auslösen.

Die `waitUntil()`-Methode garantiert nicht, dass der Browser den Service Worker nicht stoppt: Wenn die Operation zu lange dauert, wird der Service Worker trotzdem gestoppt. Sollte dies der Fall sein, wird die Operation abgebrochen, und wenn das `sync`-Ereignis das nächste Mal ausgelöst wird, läuft der Handler erneut von vorne - er setzt nicht dort fort, wo er aufgehört hat.

Wie lange „zu lange“ ist, ist browser-spezifisch. Für Chrome wird der Service Worker wahrscheinlich geschlossen, wenn:

- Er 30 Sekunden inaktiv war
- Er 30 Sekunden synchrones JavaScript ausgeführt hat
- Das an `waitUntil()` übergebene Versprechen mehr als 5 Minuten gebraucht hat, um abgeschlossen zu werden

## Hintergrundabruf

Hintergrund-Synchronisation ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben: Wenn ein Service Worker ein Sync-Ereignis nicht innerhalb einer relativ kurzen Zeit abwickelt, stoppt der Browser den Service Worker. Dies ist eine bewusste Maßnahme, um die Akkulaufzeit zu schonen und die Privatsphäre des Benutzers zu schützen, indem die Zeit, in der die IP-Adresse des Benutzers bei Backend-Interaktionen im Hintergrund freigelegt wird, minimiert wird.

Dies macht Hintergrund-Synchronisation für längere Operationen ungeeignet — zum Beispiel das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit dem Hintergrundabruf können Netzwerk-Anfragen gestellt werden, während sowohl die Haupt-App-Benutzeroberfläche als auch der Service Worker geschlossen sind.

Beim Hintergrundabruf:

- Wird die Anfrage über die Haupt-App-Benutzeroberfläche initiiert
- Unabhängig davon, ob die Haupt-App geöffnet ist oder nicht, zeigt der Browser ein dauerhaftes Benutzeroberflächenelement an, das den Benutzer über die laufende Anfrage informiert und ihm die Möglichkeit gibt, sie abzubrechen oder den Fortschritt zu überprüfen
- Wenn die Anfrage erfolgreich beendet wurde oder der Benutzer den Fortschritt überprüfen möchte, startet der Browser den Service Worker (falls erforderlich) und löst das entsprechende Ereignis im Geltungsbereich des Service Workers aus.

### Ausführen einer Hintergrundabruf-Anfrage

Eine Hintergrundabruf-Anfrage wird im Haupt-Anwendungscode initiiert, indem [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, wie folgt:

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
  //...
}
```

Wir übergeben drei Argumente an `backgroundFetch.fetch()`:

1. Einen Bezeichner für diese Abrufanfrage
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Hintergrundabrufanfrage kann mehrere Netzwerkabfragen enthalten.
3. Ein Objekt, das Daten für die Benutzeroberfläche enthält, die der Browser verwendet, um die Existenz und den Fortschritt der Anfrage zu zeigen.

Der `backgroundFetch.fetch()` Aufruf gibt ein {{jsxref("Promise")}} zurück, das mit einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt aufgelöst wird. Dies ermöglicht der Haupt-App, ihre eigene Benutzeroberfläche zu aktualisieren, während der Abruf fortschreitet. Wenn jedoch die Haupt-App geschlossen ist, wird der Abruf im Hintergrund fortgesetzt.

Der Browser zeigt ein dauerhaftes Benutzeroberflächenelement an, das den Benutzer daran erinnert, dass die Anfrage läuft, und gibt ihm die Möglichkeit, mehr über die Anfrage zu erfahren und sie bei Bedarf abzubrechen. Die Benutzeroberfläche enthält ein Symbol und einen Titel, die von den Argumenten `icons` und `title` übernommen werden, und verwendet `downloadTotal` als Schätzung der Gesamtdownloadgröße, um den Fortschritt der Anfrage anzuzeigen.

### Verarbeiten von Anfragergebnissen

Wenn der Abruf mit Erfolg oder Misserfolg abgeschlossen ist oder der Benutzer auf die Fortschrittsanzeige geklickt hat, startet der Browser bei Bedarf den Service Worker der App und löst ein Ereignis im Geltungsbereich des Service Workers aus. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: Alle Anfragen waren erfolgreich
- `backgroundfetchfail`: Mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: Der Abruf wurde vom Benutzer oder durch die Haupt-App abgebrochen
- `backgroundfetchclick`: Der Benutzer hat auf das Fortschrittsanzeigelement geklickt, das der Browser zeigt

#### Abrufen von Antwortdaten

In den Handlern für die Ereignisse `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` kann der Service Worker die Anfrage- und Antwortdaten abrufen.

Um auf die Antwort zuzugreifen, greift der Ereignishandler auf die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt, das Methoden [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) und [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) bietet, die [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekte zurückgeben, die mit der angegebenen URL übereinstimmen (oder im Fall von `matchAll()` alle Einträge, wenn keine URL angegeben ist).

Jeder `BackgroundFetchRecord` hat eine [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady)-Eigenschaft, die ein `Promise` ist, das mit der [`Response`](/de/docs/Web/API/Response) aufgelöst wird, sobald die Antwort verfügbar ist.

Um auf Antwortdaten zuzugreifen, könnte der Handler etwas wie folgt tun:

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

Da die Antwortdaten nicht verfügbar sind, nachdem der Handler beendet ist, sollte der Handler die Daten speichern (zum Beispiel im [`Cache`](/de/docs/Web/API/Cache)), wenn die App sie weiterhin benötigt.

#### Aktualisieren der Benutzeroberfläche des Browsers

Das an `backgroundfetchsuccess` und `backgroundfetchfail` übergebene Ereignisobjekt verfügt auch über eine [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode, die verwendet werden kann, um die Benutzeroberfläche zu aktualisieren, die der Browser zeigt, um den Benutzer über den Abrufvorgang zu informieren. Mit `updateUI()` kann der Handler den Titel und das Symbol des Benutzeroberflächenelements aktualisieren:

```js
// service-worker.js

self.addEventListener("backgroundfetchsuccess", (event) => {
  // retrieve and store response data
  // ...

  event.updateUI({ title: "Finished your download!" });
});

self.addEventListener("backgroundfetchfail", (event) => {
  event.updateUI({ title: "Could not complete download" });
});
```

#### Reagieren auf Benutzerinteraktion

Das `backgroundfetchclick`-Ereignis wird ausgelöst, wenn der Benutzer auf das Benutzeroberflächenelement geklickt hat, das der Browser anzeigt, während der Abruf läuft.

Die erwartete Antwort hier ist, ein Fenster zu öffnen, das dem Benutzer mehr Informationen über den Abrufvorgang gibt, was vom Service Worker aus mithilfe von [`clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) erfolgen kann. Zum Beispiel:

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

## Periodische Hintergrund-Synchronisation

Die [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht es einer PWA, ihre Daten regelmäßig im Hintergrund zu aktualisieren, während die Haupt-App geschlossen ist.

Dies kann das Offline-Erlebnis, das eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die auf relativ aktuelle Inhalte angewiesen ist, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, dann werden selbst mit service worker-basiertem Caching die Geschichten nur so aktuell sein, wie das letzte Mal, als die App geöffnet wurde. Mit der periodischen Hintergrund-Synchronisation könnte die App ihre Geschichten im Hintergrund aktualisieren, wann immer das Gerät Konnektivität hatte, und damit relativ frische Inhalte für den Benutzer bereitstellen.

Dies nutzt die Tatsache, dass insbesondere auf einem mobilen Gerät die Konnektivität nicht so sehr schlecht ist, sondern _unterbrochen_: indem die Zeiten genutzt werden, in denen das Gerät Konnektivität hat, kann die App die Konnektivitätslücken überbrücken.

### Registrierung eines periodischen Sync-Ereignisses

Der Code zur Registrierung eines periodischen Sync-Ereignisses folgt demselben Muster wie der für die [Registrierung eines Sync-Ereignisses](#registrierung_eines_sync-ereignisses). Der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync)-Eigenschaft, die eine [`register()`](/de/docs/Web/API/PeriodicSyncManager/register)-Methode hat, die den Namen der periodischen Synchronisation als Parameter nimmt.

Jedoch nimmt `periodicSync.register()` ein zusätzliches Argument, das ein Objekt mit einer `minInterval`-Eigenschaft ist. Dies stellt das Mindestintervall in Millisekunden zwischen den Synchronisationsversuchen dar:

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

### Verarbeiten eines periodischen Sync-Ereignisses

Obwohl die PWA in der `register()`-Anweisung um ein bestimmtes Intervall bittet, liegt es im Ermessen des Browsers, wie oft periodische Sync-Ereignisse generiert werden. Apps, die Benutzer oft öffnen und mit denen sie interagieren, werden mit höherer Wahrscheinlichkeit periodische Sync-Ereignisse erhalten und werden sie öfter erhalten als Apps, mit denen der Benutzer selten oder nie interagiert.

Wenn der Browser beschlossen hat, ein periodisches Sync-Ereignis zu generieren, ist das Muster folgendes: Er startet den Service Worker falls erforderlich und löst ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Ereignis im globalen Geltungsbereich des Service Workers aus.

Der Ereignishandler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion innerhalb der [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Geschichten abrufen und zwischenspeichern. Die `updateNews()`-Funktion sollte relativ schnell abgeschlossen werden: wenn der Service Worker zu lange damit beschäftigt ist, seine Inhalte zu aktualisieren, wird der Browser ihn stoppen.

### Abmelden von einer periodischen Synchronisation

Wenn die PWA keine periodischen Hintergrundaktualisierungen mehr benötigt (zum Beispiel, weil der Benutzer sie in den App-Einstellungen deaktiviert hat), sollte die PWA den Browser auffordern, keine periodischen Sync-Ereignisse mehr zu generieren, indem sie die [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister)-Methode von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) aufruft:

```js
// main.js

async function registerPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einer PWA, Nachrichten zu erhalten, die vom Server aus gesendet werden, unabhängig davon, ob die App läuft oder nicht. Wenn die Nachricht auf dem Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) wird dem Benutzer angezeigt. Die Spezifikation erlaubt „stilles Pushen“, bei dem keine Benachrichtigung angezeigt wird, aber alle Browser unterstützen dies aufgrund von Datenschutzbedenken nicht (zum Beispiel könnte Push sonst verwendet werden, um den Standort eines Benutzers zu verfolgen).

Benachrichtigungen an den Benutzer abzulehnen, unterbricht sie in ihrer Aktivität und kann sehr störend sein, verwenden Sie also Push-Nachrichten mit Bedacht. Im Allgemeinen sind sie für Situationen geeignet, in denen Sie den Benutzer über etwas informieren müssen und nicht warten können, bis er das nächste Mal Ihre App öffnet.

Ein häufiger Anwendungsfall für Push-Benachrichtigungen sind Chat-Apps: Wenn der Benutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht übermittelt und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem aus das Gerät sie abrufen und an die App ausliefern kann.

Dies bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Dienst [verschlüsselt](/de/docs/Glossary/Encryption) werden müssen (damit der Push-Dienst sie nicht lesen kann) und [signiert](/de/docs/Glossary/Signature/Security) werden müssen (damit der Push-Dienst weiß, dass die Nachrichten wirklich von Ihrem Server und nicht von jemandem stammen, der sich als Ihr Server ausgibt).

Der Push-Dienst wird von dem Browseranbieter oder von einem Drittanbieter betrieben, und der App-Server kommuniziert mit ihm über das [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokoll. Der App-Server kann eine Drittanbieter-Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Protokolldetails zu verwalten.

### Abonnement für Push-Nachrichten

Das Muster für das Abonnieren von Push-Nachrichten sieht folgendermaßen aus:

![Diagramm, das die Schritte zum Abonnieren von Push-Nachrichten zeigt](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem [öffentlichen/privaten Schlüsselpaar](/de/docs/Glossary/Public-key_cryptography) ausgestattet sein, damit er Push-Nachrichten signieren kann. Die Signierung von Nachrichten muss der [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02)-Spezifikation folgen.

2. Auf dem Gerät verwendet die App die [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)-Methode, um sich für Nachrichten vom Server anzumelden. Die `subscribe()`-Methode:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies ist der Schlüssel, den der Push-Dienst verwendet, um die Signatur von Nachrichten des App-Servers zu überprüfen.

   - Gibt ein `Promise` zurück, das mit einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt aufgelöst wird. Dieses Objekt enthält:

     - Den [Endpunkt](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: So weiß der App-Server, wohin er Push-Nachrichten senden muss.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpunkt und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel mit [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)).

Danach ist der App-Server in der Lage, mit dem Versenden von Push-Nachrichten zu beginnen.

### Senden, Zustellen und Verarbeiten von Push-Nachrichten

Wenn ein Ereignis auf dem Server eintritt, das der Server von der App verarbeitet werden möchte, kann der Server Nachrichten senden, und die Schritte sehen wie folgt aus:

![Diagramm, das die Schritte beim Senden und Zustellen von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpunkt für den Push-Dienst, indem er das [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokoll verwendet und optional eine Bibliothek wie web-push verwendet.
3. Der Push-Dienst überprüft die Signatur der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht zur Zustellung in die Warteschlange.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Dienst die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht erhält, entschlüsselt er die Nachricht.
6. Der Browser startet bei Bedarf den Service Worker und löst ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) im globalen Geltungsbereich des Service Workers aus. Der Ereignishandler erhält ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt, das die Nachrichtendaten enthält.
7. In seinem Ereignishandler führt der Service Worker jede Verarbeitung der Nachricht durch. Wie üblich ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker weiterlaufen zu lassen.
8. In seinem Ereignishandler erstellt der Service Worker eine Benachrichtigung mit [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
9. Wenn der Benutzer die Benachrichtigung anklickt oder schließt, werden die [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) bzw. [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) im globalen Bereich des Service Workers ausgelöst. Diese erlauben der App, auf die Reaktion des Benutzers auf die Benachrichtigung zu reagieren.

## Berechtigungen und Beschränkungen

Browser müssen ein Gleichgewicht finden, bei dem sie leistungsstarke APIs für Webentwickler bereitstellen können und gleichzeitig Benutzer vor schädlichen, ausnutzenden oder schlecht geschriebenen Websites schützen. Einer der Hauptschutzmechanismen, den sie bieten, ist, dass Benutzer die Seiten der Website schließen können und damit nicht mehr auf ihrem Gerät aktiv sind. Die in diesem Artikel beschriebenen APIs neigen dazu, diese Zusicherung zu verletzen, deshalb müssen Browser zusätzliche Schritte unternehmen, um sicherzustellen, dass Benutzer darüber informiert sind und dass die APIs in einer Weise verwendet werden, die den Interessen der Benutzer entspricht.

In diesem Abschnitt werden wir diese Schritte skizzieren. Einige dieser APIs erfordern eine explizite [Benutzererlaubnis](/de/docs/Web/API/Permissions_API), sowie verschiedene andere Beschränkungen und Designentscheidungen, um die Benutzer zu schützen.

- Die Background Sync API benötigt keine explizite Benutzererlaubnis, aber das Ausstellen einer Hintergrund-Synchronisationsanfrage kann nur durchgeführt werden, solange die Haupt-App geöffnet ist, und Browser begrenzen die Anzahl der Wiederholungsversuche und die Dauer von Hintergrund-Synchronisationsvorgängen.

- Die Background Fetch API erfordert die Benutzererlaubnis `"background-fetch"`, und der Browser zeigt den Fortschritt des Abrufvorgangs an, sodass der Benutzer ihn abbrechen kann.

- Die Periodic Background Sync API erfordert die Benutzererlaubnis `"periodic-background-sync"`, und Browser sollten es Benutzern ermöglichen, die periodische Hintergrundsynchronisation vollständig zu deaktivieren. Außerdem können Browser die Häufigkeit von Synchronisationsereignissen an das Ausmaß anpassen, in dem der Benutzer sich entscheidet, mit der App zu interagieren: Eine App, die der Benutzer selten verwendet, kann wenige oder gar keine Ereignisse erhalten.

- Die Push API erfordert die Benutzererlaubnis `"push"`, und alle Browser erfordern, dass Push-Ereignisse für den Benutzer sichtbar sind, was bedeutet, dass sie eine benutzersichtbare Benachrichtigung erzeugen.

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
