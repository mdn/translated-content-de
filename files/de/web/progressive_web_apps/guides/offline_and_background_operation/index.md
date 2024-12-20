---
title: Offline- und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: b3f8fa535224e8678bfe4b601481fcba3a39201f
---

{{PWASidebar}}

Normalerweise sind Websites sowohl sehr abhängig von einer zuverlässigen Netzwerkverbindung als auch davon, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites einfach unbrauchbar, und wenn der Benutzer die Seite nicht in einem Browser-Tab geöffnet hat, können die meisten Websites nichts tun.

Betrachten Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht es dem Benutzer, Musik online zu streamen, herunterzuladen und im Hintergrund zu spielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, drückt auf "Senden" und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald die Verbindung wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem seiner Kontakte und zeigt, obwohl die App nicht geöffnet ist, ein Symbol auf der App an, um den Benutzer über eine neue Nachricht zu informieren.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden führen wir eine Reihe von Technologien ein, die es einer PWA ermöglichen zu:

- Eine gute Benutzererfahrung selbst bei intermittierender Netzwerkverbindung bieten
- Ihren Zustand aktualisieren, wenn die App nicht läuft
- Den Benutzer über wichtige Ereignisse informieren, die aufgetreten sind, während die App nicht aktiv war

Die in diesem Leitfaden vorgestellten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden besprechen, ist der _Service Worker_. In diesem Abschnitt bieten wir einen kurzen Überblick über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzigen Thread. Dies umfasst das JavaScript der Website und alle Arbeiten zur Darstellung der UI der Website. Eine Folge davon ist, dass, wenn Ihr JavaScript eine langlaufende Operation ausführt, die Haupt-UI der Website blockiert wird und die Website für den Benutzer nicht mehr reagiert.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist eine spezielle Art von [Web Worker](/de/docs/Web/API/Web_Workers_API), der zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker, wobei er eine URL zum Skript des Workers übergibt. Der Worker und der Hauptcode können nicht direkt auf den Zustand des jeweils anderen zugreifen, sondern durch das Senden von Nachrichten kommunizieren. Worker können zur Ausführung rechenintensiver Aufgaben im Hintergrund verwendet werden: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code der App, der die UI der App implementiert, reaktionsfähig auf den Benutzer bleiben.

Eine PWA hat also immer eine aufgeteilte Architektur zwischen:

- Der _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScripts, der die UI der App implementiert (z. B. durch Handhabung von Benutzerereignissen)
- Dem _Service Worker_, der Offline- und Hintergrundaufgaben verwaltet

In diesem Leitfaden, wenn wir Code-Beispiele zeigen, werden wir angeben, zu welchem Teil der App der Code gehört, mit einem Kommentar wie `// main.js` oder `// service-worker.js`.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht es einer PWA, eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät keine Netzwerkverbindung hat. Dies wird durch das Hinzufügen eines Service Workers zu einer App ermöglicht.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen vom Server für die Seiten der Kontrolle abruft (einschließlich Seiten, Stile, Skripte und Bilder, zum Beispiel) und sie zu einem lokalen Cache hinzufügen. Das [`Cache`](/de/docs/Web/API/Cache)-Interface wird verwendet, um Ressourcen zum Cache hinzuzufügen. `Cache`-Instanzen sind im Service Worker globalem Bereich durch die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft zugänglich.

Dann, wann immer die App eine Ressource anfordert (z. B. weil der Benutzer die App geöffnet oder auf einen internen Link geklickt hat), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Bereich des Service Workers aus. Indem der Service Worker auf dieses Ereignis hört, kann er die Anforderung abfangen.

Der Ereignishandler für das `fetch`-Ereignis erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt, das:

- Zugriff auf die Anforderung als ein [`Request`](/de/docs/Web/API/Request)-Instanz bereitstellt
- Eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bereitstellt, um eine Antwort auf die Anforderung zu senden.

Eine Möglichkeit, wie ein Service Worker Anfragen bearbeitet, ist eine "Cache-First"-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, holen Sie die Ressource aus dem Cache und geben Sie die Ressource an die App zurück.
2. Wenn die angeforderte Ressource nicht im Cache existiert, versuchen Sie, die Ressource aus dem Netzwerk zu holen.
   1. Wenn die Ressource geholt werden konnte, fügen Sie die Ressource für das nächste Mal dem Cache hinzu und senden Sie die Ressource an die App zurück.
   2. Wenn die Ressource nicht geholt werden konnte, geben Sie eine standardmäßige Ersatzzressource zurück.

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

Das bedeutet, dass die Web-App in vielen Situationen gut funktioniert, selbst wenn die Netzwerkverbindung intermittierend ist. Aus der Sicht des Haupt-App-Codes ist dies völlig transparent: die App stellt Netzwerkabfragen und erhält Antworten. Außerdem, da der Service Worker in einem separaten Thread läuft, kann der Haupt-App-Code reaktionsfähig auf die Benutzereingaben bleiben, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker das Caching implementieren könnte. Genauer gesagt, in einer Cache-First-Strategie überprüfen wir zuerst den Cache vor dem Netzwerk, was bedeutet, dass wir eher eine schnelle Antwort ohne Netzwerkkosten erhalten, aber eher eine veraltete Antwort zurückgeben.
>
> Eine Alternative wäre eine _Netzwerk-First_-Strategie, bei der wir versuchen, die Ressource zuerst vom Server abzurufen und auf den Cache zurückgreifen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der jeweiligen Web-App und ihrer Nutzung ab.

Für viel mehr Details zum Einrichten von Service Workern und deren Verwendung zur Hinzufügung von Offline-Funktionalität siehe unseren [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrundbetrieb

Während Offline-Operationen die häufigste Verwendung für Service Worker sind, ermöglichen sie einer PWA auch den Betrieb, auch wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht aktiv ist.

Das bedeutet nicht, dass Service Worker immer laufen: Browser können Service Worker stoppen, wenn sie es für angemessen halten. Zum Beispiel, wenn ein Service Worker eine Weile inaktiv war, wird er gestoppt. Der Browser wird den Service Worker jedoch neu starten, wenn ein Ereignis eingetreten ist, das es zu bearbeiten gilt. Dies ermöglicht es einer PWA, Hintergrundoperationen folgendermaßen umzusetzen:

- In der Haupt-App eine Anforderung registrieren, dass der Service Worker eine Aktion ausführen soll
- Zum passenden Zeitpunkt wird der Service Worker gegebenenfalls neu gestartet und ein Ereignis wird im Bereich des Service Workers ausgelöst
- Der Service Worker führt die Aktion aus

In den nächsten Abschnitten werden wir einige verschiedene Funktionen diskutieren, die dieses Muster nutzen, um einer PWA zu ermöglichen zu funktionieren, während die Haupt-App nicht offen ist.

## Hintergrund-Synchronisation

Angenommen, ein Benutzer verfasst eine E-Mail und drückt "Senden". Auf einer traditionellen Website muss er den Tab geöffnet halten, bis die App die E-Mail gesendet hat: Wenn er den Tab schließt oder das Gerät die Verbindung verliert, dann wird die Nachricht nicht gesendet. Hintergrund-Synchronisation, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung zu diesem Problem für PWAs.

Die Hintergrund-Synchronisation ermöglicht es der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät eine Netzwerkverbindung hat, wird der Browser den Service Worker bei Bedarf neu starten und ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Bereich des Service Workers auslösen. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, dann kann der Browser möglicherweise eine begrenzte Anzahl von Wiederholungsversuchen unternehmen, indem er das Ereignis erneut auslöst.

### Registrierung eines Sync-Ereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, was ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt auflöst. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) auf dem `ServiceWorkerRegistration`-Objekt auf, so:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: in diesem Fall `"send-message"`.

### Behandlung eines Sync-Ereignisses

Sobald das Gerät eine Netzwerkverbindung hat, wird das `sync`-Ereignis im Bereich des Service Workers ausgelöst. Der Service Worker überprüft den Namen der Aufgabe und führt die entsprechende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der `sendMessage()`-Funktion in die [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode des Ereignisses übergeben. Die `waitUntil()`-Methode nimmt ein {{jsxref("Promise")}} als Parameter und bittet den Browser, den Service Worker nicht zu stoppen, bis das Promise erledigt ist. So weiß der Browser auch, ob die Operation erfolgreich war oder nicht: Wenn das Promise abgelehnt wird, könnte der Browser den `sync`-Ereignis erneut auslösen.

Die `waitUntil()`-Methode ist keine Garantie, dass der Browser den Service Worker nicht stoppen wird: Wenn die Operation zu lange dauert, wird der Service Worker trotzdem gestoppt. Wenn dies geschieht, wird die Operation abgebrochen und beim nächsten Auslösen eines `sync`-Ereignisses wird der Handler erneut von Anfang an ausgeführt - er setzt nicht dort fort, wo er aufgehört hat.

Wie lange "zu lange" ist, ist browser-spezifisch. Für Chrome wird der Service Worker wahrscheinlich geschlossen, wenn:

- Er seit 30 Sekunden im Leerlauf war
- Er seit 30 Sekunden synchronen JavaScript-Code ausgeführt hat
- Das an `waitUntil()` übergebene Promise mehr als 5 Minuten benötigt hat, um sich zu erledigen

## Hintergrundabruf

Hintergrund-Synchronisation ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben: Wenn ein Service Worker es nicht schafft, ein Sync-Ereignis in relativ kurzer Zeit zu behandeln, wird der Browser den Service Worker stoppen. Dies ist eine bewusste Maßnahme, um Akkulaufzeit zu sparen und die Privatsphäre des Benutzers zu schützen, indem die Zeit, in der die IP-Adresse des Benutzers während des Betriebes der App im Hintergrund ausgesetzt ist, minimiert wird.

Das macht Hintergrund-Synchronisation ungeeignet für längere Operationen - das Herunterladen eines Films zum Beispiel. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit Hintergrundabruf können Netzwerk-Anfragen ausgeführt werden, während sowohl die Haupt-App-UI als auch der Service Worker geschlossen sind.

Mit Hintergrundabruf:

- Die Anfrage wird von der Haupt-App-UI initiiert
- Ob die Haupt-App geöffnet ist oder nicht, der Browser zeigt ein anhaltendes UI-Element an, das den Benutzer über die laufende Anfrage informiert, und ermöglicht es ihm, sie abzubrechen oder ihren Fortschritt zu überprüfen
- Wenn die Anfrage mit Erfolg oder Misserfolg abgeschlossen ist, oder der Benutzer gebeten hat, den Fortschritt der Anfrage zu überprüfen, dann startet der Browser den Service Worker, falls nötig, und löst das entsprechende Ereignis im Bereich des Service Workers aus.

### Initiierung einer Hintergrundabruf-Anfrage

Eine Hintergrundabruf-Anfrage wird im Haupt-App-Code initiiert, indem [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, so:

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

Wir übergeben `backgroundFetch.fetch()` drei Argumente:

1. Einen Bezeichner für diese Abruf-Anfrage
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Hintergrundabruf-Anfrage kann mehrere Netzwerk-Anfragen enthalten.
3. Ein Objekt mit Daten für die UI, die der Browser verwendet, um die Existenz und den Fortschritt der Anfrage anzuzeigen.

Der `backgroundFetch.fetch()`-Aufruf gibt ein {{jsxref("Promise")}} zurück, das in ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt aufgelöst wird. Dies ermöglicht es der Haupt-App, ihre eigene UI zu aktualisieren, während die Anfrage läuft. Wenn die Haupt-App jedoch geschlossen ist, wird der Abruf im Hintergrund fortgesetzt.

Der Browser wird ein anhaltendes UI-Element anzeigen, das den Benutzer darüber informiert, dass die Anfrage läuft, und ihm die Möglichkeit geben, mehr über die Anfrage herauszufinden und sie abzubrechen, wenn er möchte. Die UI wird ein Symbol und einen Titel enthalten, die aus den `icons`- und `title`-Argumenten stammen, und `downloadTotal` wird als Schätzung der gesamten Downloadgröße verwendet, um den Fortschritt der Anfrage anzuzeigen.

### Behandlung der Anfrageergebnisse

Wenn der Abruf mit Erfolg oder Misserfolg abgeschlossen ist oder der Benutzer auf die Fortschritts-UI geklickt hat, wird der Browser den Service Worker der App gegebenenfalls starten und ein Ereignis im Bereich des Service Workers auslösen. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: alle Anfragen waren erfolgreich
- `backgroundfetchfail`: mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: der Abruf wurde vom Benutzer oder von der Haupt-App abgebrochen
- `backgroundfetchclick`: der Benutzer hat auf das Fortschritts-UI-Element geklickt, das der Browser anzeigt

#### Abrufen der Antwortdaten

In den Handlern für die Ereignisse `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` kann der Service Worker die Anforderungs- und Antwortdaten abrufen.

Um die Antwort zu erhalten, greift der Ereignishandler auf die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt, das [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) und [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match)-Methoden hat, die [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekte zurückgeben, die mit der gegebenen URL übereinstimmen (oder im Fall von `matchAll()` alle Aufzeichnungen, wenn keine URL angegeben ist).

Jedes `BackgroundFetchRecord` hat eine [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady)-Eigenschaft, die ein `Promise` ist, das sich mit der [`Response`](/de/docs/Web/API/Response) auflöst, sobald sie verfügbar ist.

Um auf die Antwortdaten zuzugreifen, könnte der Handler also etwas wie Folgendes tun:

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

Da die Antwortdaten nach Abschluss des Handlers nicht mehr verfügbar sind, sollte der Handler die Daten speichern (zum Beispiel im [`Cache`](/de/docs/Web/API/Cache)), wenn die App sie weiterhin benötigt.

#### Aktualisierung der UI des Browsers

Das an `backgroundfetchsuccess` und `backgroundfetchfail` übergebene Ereignisobjekt hat auch eine [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode, die verwendet werden kann, um die UI zu aktualisieren, die der Browser anzeigt, um den Benutzer über die Abrufoperation zu informieren. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

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

#### Reaktion auf Benutzerinteraktion

Das `backgroundfetchclick`-Ereignis wird ausgelöst, wenn der Benutzer auf das UI-Element geklickt hat, das der Browser anzeigt, während der Abruf andauert.

Die erwartete Reaktion hier ist, ein Fenster zu öffnen, das dem Benutzer mehr Informationen über die Abrufoperation gibt, was vom Service Worker mit [`clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) erreicht werden kann. Zum Beispiel:

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

Dies kann das Offline-Erlebnis, das eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die auf relativ aktuelle Inhalte angewiesen ist, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, dann werden selbst mit service-workerbasiertem Caching die Stories nur so aktuell sein wie beim letzten Öffnen der App. Mit periodischer Hintergrund-Synchronisation könnte die App ihre Stories im Hintergrund aktualisiert haben, wenn das Gerät Verbindung hatte, und dem Benutzer so relativ aktuelle Inhalte zeigen.

Dies nutzt die Tatsache aus, dass insbesondere auf einem mobilen Gerät die Konnektivität nicht schlecht, sondern _intermittierend_ ist: Indem die Zeiten genutzt werden, in denen das Gerät Konnektivität hat, kann die App die Lücken in der Konnektivität glätten.

### Registrierung eines periodischen Sync-Ereignisses

Der Code zur Registrierung eines periodischen Sync-Ereignisses folgt demselben Muster wie der zur [Registrierung eines Sync-Ereignisses](#registrierung_eines_sync-ereignisses). Die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync)-Eigenschaft, die eine [`register()`](/de/docs/Web/API/PeriodicSyncManager/register)-Methode hat, die den Namen der periodischen Synchronisation als Parameter annimmt.

Allerdings nimmt `periodicSync.register()` ein zusätzliches Argument, das ein Objekt mit einer `minInterval`-Eigenschaft ist. Dies stellt das minimale Intervall in Millisekunden zwischen Synchronisierungsversuchen dar:

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

Obwohl die PWA in dem `register()`-Aufruf um ein bestimmtes Intervall bittet, liegt es im Ermessen des Browsers, wie oft periodische Sync-Ereignisse generiert werden. Apps, die Benutzer häufig öffnen und verwenden, erhalten öfter periodische Sync-Ereignisse als Apps, die der Benutzer selten oder nie verwendet.

Wenn der Browser beschlossen hat, ein periodisches Sync-Ereignis zu generieren, ist das Muster wie folgt: er startet den Service Worker, falls erforderlich, und löst ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) Ereignis im globalen Bereich des Service Workers aus.

Der Ereignishandler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion innerhalb der [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Stories abrufen und zwischenspeichern. Die `updateNews()`-Funktion sollte relativ schnell abgeschlossen sein: Wenn der Service Worker zu lange braucht, um seine Inhalte zu aktualisieren, wird der Browser ihn stoppen.

### Abmelden einer periodischen Synchronisation

Wenn die PWA keine periodischen Hintergrundaktualisierungen mehr benötigt (zum Beispiel, weil der Benutzer sie in den Einstellungen der App deaktiviert hat), sollte die PWA den Browser bitten, keine periodischen Sync-Ereignisse mehr zu generieren, indem sie die [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister)-Methode von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) aufruft:

```js
// main.js

async function unregisterPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einer PWA, Nachrichten zu empfangen, die vom Server gesendet werden, unabhängig davon, ob die App läuft oder nicht. Wenn die Nachricht vom Gerät empfangen wird, wird der Service Worker der App gestartet, verarbeitet die Nachricht und zeigt eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) für den Benutzer an. Die Spezifikation erlaubt "stille Push-Benachrichtigungen", bei denen keine Benachrichtigung angezeigt wird, aber keine Browser unterstützen dies aufgrund von Datenschutzbedenken (zum Beispiel, dass Push zur Verfolgung des Standorts eines Benutzers verwendet werden könnte).

Das Anzeigen einer Benachrichtigung lenkt den Benutzer von dem ab, was er gerade tut, und kann sehr störend sein. Verwenden Sie Push-Nachrichten daher mit Vorsicht. Im Allgemeinen eignen sie sich für Situationen, in denen Sie den Benutzer über etwas informieren müssen und nicht bis zum nächsten Öffnen Ihrer App warten können.

Ein häufiges Anwendungsbeispiel für Push-Benachrichtigungen sind Chat-Apps: Wenn der Benutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht zugestellt, und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem das Gerät sie abrufen und an die App weiterleiten kann.

Das bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Dienst {{Glossary("Encryption", "verschlüsselt")}} (damit der Push-Dienst sie nicht lesen kann) und {{Glossary("Signature/Security", "signiert")}} (damit der Push-Dienst weiß, dass die Nachrichten wirklich von Ihrem Server stammen und nicht von jemandem, der sich als Ihren Server ausgibt) werden müssen.

Der Push-Dienst wird vom Browser-Anbieter oder von einem Drittanbieter betrieben, und der App-Server kommuniziert mit ihm unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls. Der App-Server kann eine Drittanbieterbibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Details des Protokolls zu behandeln.

### Abonnieren von Push-Nachrichten

Das Muster zum Abonnieren von Push-Nachrichten sieht wie folgt aus:

![Diagramm, das die Schritte zur Abonnierung von Push-Nachrichten zeigt](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem {{Glossary("Public-key_cryptography", "öffentlich-privaten Schlüsselpaar")}} ausgestattet sein, damit er Push-Nachrichten signieren kann. Das Signieren von Nachrichten muss den [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02)-Spezifikationen folgen.

2. Auf dem Gerät verwendet die App die [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)-Methode, um Nachrichten vom Server zu abonnieren. Die `subscribe()`-Methode:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies wird der Push-Dienst verwenden, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das in ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt aufgelöst wird. Dieses Objekt enthält:

     - Den [Endpunkt](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: Dies ist die Methode, wie der App-Server weiß, wohin er Push-Nachrichten senden soll.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpunkt und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel mit [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)).

Nach diesem Schritt kann der App-Server damit beginnen, Push-Nachrichten zu senden.

### Senden, Zustellen und Verarbeiten von Push-Nachrichten

Wenn ein Ereignis auf dem Server passiert, das der Server von der App verarbeiten lassen möchte, kann der Server Nachrichten senden, und die Abfolge der Schritte sieht so aus:

![Diagramm, das die Schritte zum Senden und Zustellen von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpunkt für den Push-Dienst, unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls, und optional wieder unter Verwendung einer Bibliothek wie web-push.
3. Der Push-Dienst überprüft die Signatur der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht zur Zustellung in die Warteschlange.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Dienst die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht erhält, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker falls erforderlich und löst ein [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) Ereignis im globalen Bereich des Service Workers aus. Dem Ereignishandler wird ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt übergeben, das die Nachrichtendaten enthält.
7. Im Ereignishandler verarbeitet der Service Worker die Nachricht. Wie üblich ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker auszuführen.
8. Im Ereignishandler erstellt der Service Worker eine Benachrichtigung mit [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
9. Wenn der Benutzer auf die Benachrichtigung klickt oder sie schließt, werden die Ereignisse [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) bzw. [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) im globalen Bereich des Service Workers ausgelöst. Diese ermöglichen der App, die Reaktion des Benutzers auf die Benachrichtigung zu behandeln.

## Berechtigungen und Einschränkungen

Browser müssen ein Gleichgewicht finden, bei dem sie Entwicklern leistungsstarke APIs bereitstellen können, während sie die Benutzer vor bösartigen, ausbeuterischen oder schlecht geschriebenen Websites schützen. Einer der Hauptschutzmechanismen besteht darin, dass Benutzer die Seiten der Website schließen können, und die Website dann nicht mehr auf ihrem Gerät aktiv ist. Die in diesem Artikel beschriebenen APIs neigen dazu, diese Zusicherung zu verletzen, weshalb Browser zusätzliche Schritte unternehmen müssen, um sicherzustellen, dass die Benutzer sich dessen bewusst sind und dass die APIs auf eine Weise verwendet werden, die mit den Interessen der Benutzer übereinstimmt.

In diesem Abschnitt werden wir diese Schritte skizzieren. Einige dieser APIs erfordern eine explizite [Benutzerberechtigung](/de/docs/Web/API/Permissions_API), und es gibt verschiedene andere Einschränkungen und Designentscheidungen, um die Benutzer zu schützen.

- Die Background Sync API benötigt keine explizite Benutzererlaubnis, aber die Beantragung eines Hintergrund-Sync-Anfragen kann nur getätigt werden, während die Haupt-App geöffnet ist, und Browser beschränken die Anzahl der Wiederholungsversuche und die Länge der Zeit, die Hintergrund-Sync-Operationen in Anspruch nehmen können.

- Die Background Fetch API erfordert die Benutzererlaubnis für `"background-fetch"`, und der Browser zeigt den laufenden Fortschritt der Abrufoperation an und ermöglicht dem Benutzer, sie zu stornieren.

- Die Periodic Background Sync API erfordert die Benutzererlaubnis für `"periodic-background-sync"`, und Browser sollten Benutzern erlauben, die periodische Hintergrund-Synchronisation vollständig zu deaktivieren. Außerdem können Browser die Häufigkeit der Sync-Ereignisse an das Ausmaß anpassen, in dem der Benutzer sich entscheidet, mit der App zu interagieren: Eine App, die der Benutzer selten verwendet, erhält möglicherweise nur wenige Ereignisse (oder sogar überhaupt keine Ereignisse).

- Die Push API erfordert die Benutzererlaubnis für `"push"`, und alle Browser verlangen, dass Push-Ereignisse für den Benutzer sichtbar sind, was bedeutet, dass sie eine für den Benutzer sichtbare Benachrichtigung erzeugen.

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
