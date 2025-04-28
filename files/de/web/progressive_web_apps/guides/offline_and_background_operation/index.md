---
title: Offline- und Hintergrundoperationen
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{PWASidebar}}

Normalerweise sind Websites stark auf eine zuverlässige Netzwerkverbindung und darauf angewiesen, dass der Nutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites einfach unbrauchbar, und wenn der Nutzer die Seite nicht in einem Browser-Tab geöffnet hat, können die meisten Websites nichts unternehmen.

Betrachten Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht es dem Nutzer, Musik zu streamen, während er online ist, kann aber im Hintergrund Tracks herunterladen und dann weiterhin abspielen, während der Nutzer offline ist.
- Der Nutzer verfasst eine lange E-Mail, drückt auf "Senden" und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald die Netzwerkverbindung wieder verfügbar ist.
- Die Chat-App des Nutzers erhält eine Nachricht von einem ihrer Kontakte, und obwohl die App nicht geöffnet ist, zeigt sie ein Abzeichen auf dem App-Symbol an, um den Nutzer darüber zu informieren, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Nutzer von installierten Apps erwarten. In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die es einem PWA ermöglichen:

- Eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät eine intermittierende Netzwerkverbindung hat
- Seinen Zustand zu aktualisieren, wenn die App nicht läuft
- Den Nutzer über wichtige Ereignisse zu benachrichtigen, die passiert sind, während die App nicht lief

Die in diesem Leitfaden vorgestellten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden besprechen werden, ist der _Service Worker_. In diesem Abschnitt geben wir einen kleinen Überblick über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzigen Thread. Dies umfasst das eigene JavaScript der Website sowie alle Arbeiten zur Darstellung der Benutzeroberfläche der Website. Eine Konsequenz daraus ist, dass wenn Ihr JavaScript eine lang andauernde Operation ausführt, die Haupt-Benutzeroberfläche der Website blockiert wird und die Website für den Nutzer nicht mehr reagiert.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist eine spezielle Art von [Web Worker](/de/docs/Web/API/Web_Workers_API), die dazu verwendet wird, PWAs zu implementieren. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker, indem er eine URL zum Skript des Workers übergibt. Der Worker und der Hauptcode können nicht direkt auf die Zustände des jeweils anderen zugreifen, können aber kommunizieren, indem sie sich gegenseitig Nachrichten senden. Worker können verwendet werden, um rechenintensive Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, schnell auf die Eingaben des Nutzers reagieren.

Ein PWA hat also immer eine in höherem Maße aufgeteilte Architektur:

- Die _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScripts, der die Benutzeroberfläche der App implementiert (indem er auf Benutzerereignisse reagiert, zum Beispiel)
- Der _Service Worker_, der Offline- und Hintergrundaufgaben übernimmt

In diesem Leitfaden werden wir bei der Darstellung von Codebeispielen angeben, zu welchem Teil der App der Code gehört, mit einem Kommentar wie `// main.js` oder `// service-worker.js`.

## Offline-Betrieb

Offline-Betrieb ermöglicht es einem PWA, eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät keine Netzwerkverbindung hat. Dies wird ermöglicht, indem der App ein Service Worker hinzugefügt wird.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen vom Server für die von ihm kontrollierten Seiten abrufen (einschließlich Seiten, Stilen, Skripten und Bildern zum Beispiel) und sie einem lokalen Cache hinzufügen. Die [`Cache`](/de/docs/Web/API/Cache) Schnittstelle wird verwendet, um Ressourcen zum Cache hinzuzufügen. `Cache`-Instanzen sind über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft im globalen Scope des Service Workers zugänglich.

Wenn die App dann eine Ressource anfordert (zum Beispiel, weil der Nutzer die App öffnet oder auf einen internen Link klickt), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Scope des Service Workers aus. Indem sie dieses Ereignis abhören, kann der Service Worker die Anfrage abfangen.

Der Ereignishandler für das `fetch` Ereignis erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) Objekt, das:

- Zugriff auf die Anfrage als [`Request`](/de/docs/Web/API/Request) Instanz bietet
- Eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) Methode bietet, um eine Antwort auf die Anfrage zu senden.

Eine Möglichkeit, wie ein Service Worker Anfragen behandeln kann, ist eine "cache-first"-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, holen Sie die Ressource aus dem Cache und geben Sie sie der App zurück.
2. Wenn die angeforderte Ressource nicht im Cache existiert, versuchen Sie, die Ressource aus dem Netzwerk zu holen.
   1. Wenn die Ressource abgerufen werden konnte, fügen Sie die Ressource für das nächste Mal dem Cache hinzu und geben Sie die Ressource der App zurück.
   2. Wenn die Ressource nicht abgerufen werden konnte, geben Sie eine Standard-Notfallressource zurück.

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

Das bedeutet, dass die Web-App in vielen Situationen auch dann gut funktionieren wird, wenn die Netzwerkverbindung intermittierend ist. Aus Sicht des Haupt-App-Codes ist dies völlig transparent: Die App führt einfach Netzwerk-Anfragen aus und erhält Antworten. Da der Service Worker jedoch in einem separaten Thread läuft, kann der Haupt-App-Code reaktionsschnell auf Benutzereingaben bleiben, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker Caching implementieren könnte. Insbesondere überprüfen wir bei einer Cache-First-Strategie zuerst den Cache, bevor wir das Netzwerk ansprechen, was bedeutet, dass wir eher eine schnelle Antwort zurückgeben können, ohne einen Netzwerkkostenaufwand zu verursachen, aber eher eine veraltete Antwort zurückgeben.
>
> Eine Alternative wäre eine _network-first_ Strategie, bei der wir zuerst versuchen, die Ressource vom Server abzurufen und wenn das Gerät offline ist, auf den Cache zurückgreifen.
>
> Die optimale Caching-Strategie hängt von der jeweiligen Web-App und ihrer Nutzung ab.

Für viel detailliertere Informationen, wie man Service Worker einrichtet und verwendet, um Offline-Funktionalität hinzuzufügen, siehe unseren [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrundoperationen

Während Offline-Betrieb die häufigste Verwendung für Service Worker ist, ermöglichen sie einem PWA auch, zu funktionieren, selbst wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht läuft.

Das bedeutet nicht, dass Service Worker die ganze Zeit laufen: Browser können Service Worker stoppen, wenn sie der Meinung sind, dass es angebracht ist. Wenn ein Service Worker zum Beispiel eine Weile inaktiv war, wird er gestoppt. Der Browser wird den Service Worker jedoch neustarten, wenn ein Ereignis aufgetreten ist, das behandelt werden muss. Dadurch kann ein PWA Hintergrundoperationen auf folgende Weise umsetzen:

- In der Haupt-App registrieren Sie eine Anfrage, dass der Service Worker eine Operation durchführt
- Zum geeigneten Zeitpunkt wird der Service Worker bei Bedarf neu gestartet, und ein Ereignis wird im Scope des Service Workers ausgelöst
- Der Service Worker führt die Operation aus

In den nächsten Abschnitten werden wir einige verschiedene Funktionen besprechen, die dieses Muster verwenden, um es einem PWA zu ermöglichen, zu arbeiten, während die Haupt-App nicht geöffnet ist.

## Hintergrundsync

Angenommen, ein Nutzer verfasst eine E-Mail und drückt auf "Senden". Bei einer traditionellen Website muss er das Tab geöffnet lassen, bis die App die E-Mail gesendet hat: Wenn er das Tab schließt oder das Gerät die Verbindung verliert, wird die Nachricht nicht gesendet. Hintergrundsync, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung für dieses Problem für PWAs.

Hintergrundsync ermöglicht es der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät eine Netzwerkverbindung hat, wird der Browser den Service Worker, falls nötig, neu starten und ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Scope des Service Workers auslösen. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, kann der Browser eine begrenzte Anzahl von Malen erneut versuchen, indem er das Ereignis erneut auslöst.

### Registrieren eines Sync-Ereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, welche ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt zurückgibt. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) auf dem `ServiceWorkerRegistration` Objekt auf, so:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe angibt: In diesem Fall `"send-message"`.

### Umgang mit einem Sync-Ereignis

Sobald das Gerät eine Netzwerkverbindung hat, wird das `sync`-Ereignis im Scope des Service Workers ausgelöst. Der Service Worker überprüft den Namen der Aufgabe und führt die entsprechende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der `sendMessage()`-Funktion in die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses geben. Die Methode `waitUntil()` nimmt ein {{jsxref("Promise")}} als Parameter und bittet den Browser, den Service Worker nicht zu stoppen, bis das Versprechen abgeschlossen ist. Auf diese Weise erfährt der Browser auch, ob die Operation erfolgreich war oder nicht: Wenn das Versprechen abgelehnt wird, kann der Browser erneut versuchen, indem er das `sync`-Ereignis erneut auslöst.

Die `waitUntil()`-Methode ist keine Garantie dafür, dass der Browser den Service Worker nicht stoppt: Wenn die Operation zu lange dauert, wird der Service Worker dennoch gestoppt. Wenn das passiert, wird die Operation abgebrochen und beim nächsten `sync`-Ereignis wird der Handler erneut von Anfang an ausgeführt - er setzt nicht dort fort, wo er aufgehört hat.

Wie lange "zu lange" ist, ist browserspezifisch. Bei Chrome wird der Service Worker wahrscheinlich geschlossen, wenn:

- Er 30 Sekunden lang inaktiv war
- Er 30 Sekunden lang synchronen JavaScript ausgeführt hat
- Das Versprechen, das an `waitUntil()` übergeben wurde, mehr als 5 Minuten benötigt hat, um abgeschlossen zu sein

## Hintergrundabruf

Hintergrundsync ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben: Wenn ein Service Worker es nicht schafft, ein Sync-Ereignis in relativ kurzer Zeit zu bearbeiten, wird der Browser den Service Worker stoppen. Dies ist eine bewusste Maßnahme, um die Batterielebensdauer zu schonen und die Privatsphäre des Nutzers zu schützen, indem die Zeit, in der die IP-Adresse des Nutzers dem Server ausgesetzt ist, minimiert wird, während die App im Hintergrund läuft.

Dies macht Hintergrundsync ungeeignet für längere Vorgänge - zum Beispiel das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit Hintergrundabruf können Netzwerk-Anfragen ausgeführt werden, während sowohl die Haupt-App-Oberfläche als auch der Service Worker geschlossen sind.

Beim Hintergrundabruf:

- Wird die Anfrage von der Haupt-App-Oberfläche aus gestartet
- Zeigt der Browser, unabhängig davon, ob die Haupt-App geöffnet ist oder nicht, ein dauerhaftes UI-Element an, das den Nutzer über die laufende Anfrage informiert und es ihm ermöglicht, sie abzubrechen oder ihren Fortschritt zu überprüfen
- Startet der Browser den Service Worker (falls nötig) und löst das entsprechende Ereignis im Scope des Service Workers aus, wenn die Anfrage mit Erfolg oder Misserfolg abgeschlossen wurde oder der Nutzer den Fortschritt der Anfrage überprüfen möchte.

### Durchführung einer Hintergrundabruf-Anfrage

Eine Hintergrundabruf-Anfrage wird im Haupt-App-Code gestartet, indem [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) auf dem `ServiceWorkerRegistration` Objekt aufgerufen wird, so:

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

1. Einen Bezeichner für diesen Abruf
2. Ein Array von [`Request`](/de/docs/Web/API/Request) Objekten oder URLs. Eine einzelne Hintergrundabruf-Anfrage kann mehrere Netzwerk-Anfragen umfassen.
3. Ein Objekt, das Daten für die UI enthält, die der Browser verwendet, um die Existenz und den Fortschritt der Anfrage anzuzeigen.

Der Aufruf von `backgroundFetch.fetch()` gibt ein {{jsxref("Promise")}} zurück, das ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Objekt auflöst. Auf diese Weise kann die Haupt-App ihre eigene UI aktualisieren, während die Anfrage fortschreitet. Wenn die Haupt-App jedoch geschlossen wird, wird der Abruf im Hintergrund fortgesetzt.

Der Browser zeigt ein dauerhaftes UI-Element an, das den Nutzer daran erinnert, dass die Anfrage noch läuft und ihm die Möglichkeit gibt, mehr über die Anfrage zu erfahren und sie bei Bedarf abzubrechen. Die UI enthält ein Symbol und einen Titel, die aus den Argumenten `icons` und `title` übernommen werden, und verwendet `downloadTotal` als Schätzung der gesamten Downloadgröße, um den Fortschritt der Anfrage anzuzeigen.

### Umgang mit Ergebnissen von Anfragen

Wenn der Abruf erfolgreich oder fehlgeschlagen ist oder der Nutzer auf die Fortschritts-UI geklickt hat, dann startet der Browser den Service Worker der App, falls nötig, und löst ein Ereignis im Scope des Service Workers aus. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: alle Anfragen waren erfolgreich
- `backgroundfetchfail`: mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: der Abruf wurde vom Nutzer oder von der Haupt-App abgebrochen
- `backgroundfetchclick`: der Nutzer hat auf das Fortschritts-UI-Element geklickt, das der Browser zeigt

#### Abrufen von Antwortdaten

In den Handlern für die Ereignisse `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` kann der Service Worker die Anfrage- und Antwortdaten abrufen.

Um die Antwort zu erhalten, greift der Ereignishandler auf die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) Eigenschaft des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration) Objekt, das über die Methoden [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) und [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) verfügt, die [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord) Objekte zurückgeben, die mit der gegebenen URL übereinstimmen (oder im Fall von `matchAll()` alle Datensätze, wenn keine URL angegeben ist).

Jeder `BackgroundFetchRecord` hat eine [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady) Eigenschaft, die ein `Promise` ist, das auf die [`Response`](/de/docs/Web/API/Response) aufgelöst wird, sobald die Antwort verfügbar ist.

Um auf die Antwortdaten zuzugreifen, könnte der Handler also so etwas tun:

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

Da die Antwortdaten nach dem Verlassen des Handlers nicht mehr verfügbar sind, sollte der Handler die Daten speichern (zum Beispiel im [`Cache`](/de/docs/Web/API/Cache)), wenn die App sie noch benötigt.

#### Aktualisieren der UI des Browsers

Das Ereignisobjekt, das an `backgroundfetchsuccess` und `backgroundfetchfail` übergeben wird, verfügt auch über eine [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI) Methode, die verwendet werden kann, um die UI zu aktualisieren, die der Browser anzeigt, um den Nutzer über die Abrufoperation zu informieren. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

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

Das `backgroundfetchclick`-Ereignis wird ausgelöst, wenn der Nutzer auf das UI-Element geklickt hat, das der Browser zeigt, während der Abruf noch läuft.

Die erwartete Reaktion hier ist, ein Fenster zu öffnen, das dem Nutzer mehr Informationen über die Abrufoperation gibt, was vom Service Worker aus mit [`clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) geschehen kann. Zum Beispiel:

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

## Periodischer Hintergrundsync

Die [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht es einem PWA, seine Daten im Hintergrund periodisch zu aktualisieren, während die Haupt-App geschlossen ist.

Dies kann die Offline-Erfahrung, die ein PWA bietet, erheblich verbessern. Betrachten Sie eine App, die von relativ aktuellen Inhalten abhängig ist, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Nutzer die App öffnet, dann werden selbst bei der Verwendung von Service Worker-basiertem Caching die Geschichten nur so frisch sein, wie das letzte Mal, als die App geöffnet war. Mit periodischem Hintergrundsync könnte die App ihre Geschichten im Hintergrund aktualisiert haben, wenn das Gerät eine Verbindung hatte, und könnte dem Nutzer daher relativ frische Inhalte zeigen.

Dies nutzt die Tatsache aus, dass die Konnektivität auf einem mobilen Gerät besonders nicht so sehr schlecht, sondern _intermittierend_ ist: Durch das Nutzen der Zeiten, in denen das Gerät Konnektivität hat, kann die App die Konnektivitätslücken überbrücken.

### Registrieren eines periodischen Sync-Ereignisses

Der Code zur Registrierung eines periodischen Sync-Ereignisses folgt demselben Muster wie für [die Registrierung eines Sync-Ereignisses](#registrieren_eines_sync-ereignisses). Der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) Eigenschaft, die über eine [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) Methode verfügt, die den Namen des periodischen Syncs als Parameter annimmt.

Allerdings nimmt `periodicSync.register()` ein zusätzliches Argument, das ein Objekt mit einem `minInterval`-Eigenschaft ist. Diese stellt das Mindestintervall in Millisekunden zwischen Synchronisierungsversuchen dar:

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

### Umgang mit einem periodischen Sync-Ereignis

Obwohl das PWA ein bestimmtes Intervall im `register()`-Aufruf anfordert, liegt es im Ermessen des Browsers, wie oft periodische Sync-Ereignisse generiert werden. Apps, die Nutzer häufig öffnen und nutzen, erhalten wahrscheinlich häufiger periodische Sync-Ereignisse als Apps, mit denen der Nutzer selten oder gar nicht interagiert.

Wenn der Browser entschieden hat, ein periodisches Sync-Ereignis zu generieren, ist das Muster folgendes: Er startet den Service Worker, falls nötig, und löst ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) Ereignis im globalen Scope des Service Workers aus.

Der Ereignishandler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion in der [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) Methode des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Geschichten abrufen und zwischenspeichern. Die Funktion `updateNews()` sollte relativ schnell abgeschlossen sein: Wenn der Service Worker zu lange braucht, um seine Inhalte zu aktualisieren, wird der Browser ihn stoppen.

### Abmelden eines periodischen Syncs

Wenn das PWA keine periodischen Hintergrund-Updates mehr benötigt (zum Beispiel, weil der Nutzer sie in den App-Einstellungen deaktiviert hat), sollte das PWA den Browser bitten, keine periodischen Sync-Ereignisse mehr zu generieren, indem es die [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister) Methode von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) aufruft:

```js
// main.js

async function unregisterPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einem PWA, Nachrichten zu empfangen, die vom Server gepusht werden, unabhängig davon, ob die App läuft oder nicht. Wenn die Nachricht vom Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) wird dem Nutzer angezeigt. Die Spezifikation erlaubt "stilles Pushen", bei dem keine Benachrichtigung gezeigt wird, aber keine Browser unterstützen dies, aus Datenschutzbedenken (zum Beispiel, dass Push dann verwendet werden könnte, um den Standort eines Nutzers zu verfolgen).

Das Anzeigen einer Benachrichtigung lenkt den Nutzer von dem ab, was er gerade tut, und hat das Potenzial, sehr störend zu sein, daher sollten Push-Nachrichten mit Vorsicht verwendet werden. Im Allgemeinen sind sie in Situationen geeignet, in denen Sie den Nutzer über etwas informieren müssen und nicht bis zum nächsten Mal warten können, wenn er Ihre App öffnet.

Ein häufiges Verwendungsbeispiel für Push-Benachrichtigungen sind Chat-Apps: Wenn der Nutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht zugestellt und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem das Gerät sie abrufen und an die App liefern kann.

Das bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Dienst {{Glossary("Encryption", "verschlüsselt")}} (damit der Push-Dienst sie nicht lesen kann) und {{Glossary("Signature/Security", "signiert")}} (damit der Push-Dienst weiß, dass die Nachrichten wirklich von Ihrem Server stammen und nicht von jemandem, der sich als Ihr Server ausgibt) sein müssen.

Der Push-Dienst wird von dem Browseranbieter oder von einem Drittanbieter betrieben, und der App-Server kommuniziert mit ihm über das [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030) Protokoll. Der App-Server kann eine Drittanbieterbibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Detailfragen des Protokolls zu handhaben.

### Abonnieren von Push-Nachrichten

Das Muster zum Abonnieren von Push-Nachrichten sieht wie folgt aus:

![Diagramm, das die Schritte für das Abonnieren von Push-Nachrichten zeigt](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem {{Glossary("Public-key_cryptography", "öffentlichen/privaten Schlüsselpaar")}} ausgestattet sein, damit er Push-Nachrichten signieren kann. Das Signieren von Nachrichten muss der [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02) Spezifikation folgen.

2. Auf dem Gerät verwendet die App die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe), um Nachrichten vom Server zu abonnieren. Die `subscribe()`-Methode:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies ist das, was der Push-Dienst verwenden wird, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das auf ein [`PushSubscription`](/de/docs/Web/API/PushSubscription) Objekt aufgelöst wird. Dieses Objekt enthält:

     - Den [Endpunkt](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: So weiß der App-Server, wohin er Push-Nachrichten senden muss.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpunkt und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel mit [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)).

Danach ist der App-Server in der Lage, damit zu beginnen, Push-Nachrichten zu senden.

### Senden, Liefern und Verarbeiten von Push-Nachrichten

Wenn auf dem Server ein Ereignis auftritt, das der Server von der App bearbeiten lassen möchte, kann der Server Nachrichten senden, und die Abfolge der Schritte sieht so aus:

![Diagramm, das die Schritte für das Senden und Liefern von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpunkt für den Push-Dienst, unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030) Protokolls, und optional erneut unter Verwendung einer Bibliothek wie web-push.
3. Der Push-Dienst überprüft die Signatur auf der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht zur Zustellung in die Warteschlange.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Dienst die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht erhält, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker bei Bedarf und löst ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) im globalen Scope des Service Workers aus. Der Ereignishandler erhält ein [`PushEvent`](/de/docs/Web/API/PushEvent) Objekt, das die Nachrichtendaten enthält.
7. Im Ereignishandler verarbeitet der Service Worker die Nachricht. Wie üblich ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker am Laufen zu halten.
8. Im Ereignishandler erstellt der Service Worker eine Benachrichtigung mit [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
9. Wenn der Nutzer die Benachrichtigung anklickt oder schließt, werden die [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) Ereignisse entsprechend im globalen Scope des Service Workers ausgelöst. Diese ermöglichen es der App, auf die Reaktion des Nutzers auf die Benachrichtigung zu reagieren.

## Berechtigungen und Einschränkungen

Browser müssen ein Gleichgewicht finden, bei dem sie leistungsfähige APIs für Webentwickler bereitstellen können, während sie die Nutzer vor bösartigen, ausnutzenden oder schlecht geschriebenen Websites schützen. Einer der wichtigsten Schutzmaßnahmen, die sie bieten, ist, dass Nutzer die Seiten der Website schließen können und sie dann nicht mehr aktiv auf ihrem Gerät ist. Die in diesem Artikel beschriebenen APIs neigen dazu, diesen Schutz zu verletzen, daher müssen Browser zusätzliche Schritte unternehmen, um sicherzustellen, dass die Nutzer sich dessen bewusst sind und dass die APIs in einer Weise verwendet werden, die den Interessen der Nutzer entspricht.

In diesem Abschnitt werden wir diese Schritte umreißen. Einige dieser APIs erfordern eine explizite [Nutzerberechtigung](/de/docs/Web/API/Permissions_API) sowie verschiedene andere Einschränkungen und Designentscheidungen, um die Nutzer zu schützen.

- Die Background-Sync-API benötigt keine explizite Nutzerberechtigung, aber das Auslösen einer Hintergrund-Sync-Anfrage kann nur gemacht werden, während die Haupt-App geöffnet ist, und Browser begrenzen die Anzahl der Wiederholungen und die Länge der Hintergrund-Sync-Vorgänge.

- Die Background-Fetch-API erfordert die Nutzerberechtigung `"background-fetch"`, und der Browser zeigt den laufenden Fortschritt der Abrufoperation an, sodass der Nutzer sie jederzeit abbrechen kann.

- Die Periodic-Background-Sync-API erfordert die Nutzerberechtigung `"periodic-background-sync"`, und Browser sollten den Nutzern erlauben, den periodischen Hintergrundsync vollständig zu deaktivieren. Außerdem können Browser die Frequenz der Synchronisierungsereignisse mit dem Ausmaß verknüpfen, in dem der Nutzer beschließt, mit der App zu interagieren: Eine App, die der Nutzer selten nutzt, kann wenige bis keine Ereignisse erhalten.

- Die Push-API erfordert die Nutzerberechtigung `"push"`, und alle Browser verlangen, dass Push-Ereignisse für den Nutzer sichtbar sind, was bedeutet, dass sie eine sichtbare Benachrichtigung erzeugen.

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
