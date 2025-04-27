---
title: Offline- und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{PWASidebar}}

In der Regel sind Websites stark von einer zuverlässigen Netzwerkverbindung und davon abhängig, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites einfach unbrauchbar, und wenn der Benutzer die Seite nicht in einem Browser-Tab geöffnet hat, können die meisten Websites nichts tun.

Betrachten Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht dem Benutzer, Musik online zu streamen, kann aber im Hintergrund Tracks herunterladen und dann weiter abspielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, drückt auf „Senden“ und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald die Netzwerkverbindung wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem seiner Kontakte, und obwohl die App nicht geöffnet ist, wird ein Badge auf dem App-Symbol angezeigt, um den Benutzer darüber zu informieren, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden werden wir eine Reihe von Technologien vorstellen, die es einer PWA ermöglichen:

- Eine gute Benutzererfahrung zu bieten, auch wenn das Gerät nur intermittierende Netzwerkverbindung hat
- Den eigenen Status zu aktualisieren, wenn die App nicht läuft
- Den Benutzer über wichtige Ereignisse zu informieren, die passiert sind, während die App nicht lief

Die in diesem Leitfaden eingeführten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden besprechen werden, ist der _Service Worker_. In diesem Abschnitt geben wir einen kleinen Überblick über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzigen Thread. Dazu gehört das eigene JavaScript der Website und alle Arbeiten zur Darstellung der Benutzeroberfläche der Website. Eine Konsequenz daraus ist, dass, wenn Ihr JavaScript eine langwierige Operation ausführt, die Hauptbenutzeroberfläche der Website blockiert wird und die Website dem Benutzer als nicht ansprechbar erscheint.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist eine spezielle Art von [Web Worker](/de/docs/Web/API/Web_Workers_API), die zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker, indem er eine URL für das Skript des Workers übergibt. Der Worker und der Hauptcode können nicht direkt aufeinander zugreifen, können jedoch durch Senden von Nachrichten miteinander kommunizieren. Worker können verwendet werden, um rechenintensive Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, ansprechbar für den Benutzer bleiben.

Daher hat eine PWA immer eine Architektur, die in folgende Teile unterteilt ist:

- Die _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScripts, das die Benutzeroberfläche der App implementiert (indem beispielsweise Benutzerereignisse behandelt werden)
- Der _Service Worker_, der Offline- und Hintergrundaufgaben behandelt

In diesem Leitfaden werden wir, wenn wir Codebeispiele zeigen, angeben, zu welchem Teil der App der Code gehört, mit einem Kommentar wie `// main.js` oder `// service-worker.js`.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht es einer PWA, eine gute Benutzererfahrung zu bieten, auch wenn das Gerät keine Netzwerkverbindung hat. Dies wird ermöglicht, indem ein Service Worker zur App hinzugefügt wird.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen vom Server für die von ihm kontrollierten Seiten abrufen (einschließlich Seiten, Stile, Skripte und Bilder, zum Beispiel) und sie zu einem lokalen Cache hinzufügen. Die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle wird verwendet, um Ressourcen zum Cache hinzuzufügen. `Cache`-Instanzen sind im globalen Umfang von Service Workern über die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) zugänglich.

Dann, wann immer die App eine Ressource anfordert (zum Beispiel, weil der Benutzer die App geöffnet oder auf einen internen Link geklickt hat), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Umfang des Service Workers aus. Indem dieses Ereignis überwacht wird, kann der Service Worker die Anfrage abfangen.

Der Ereignishandler für das `fetch`-Ereignis erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt, das:

- Zugriff auf die Anfrage als eine [`Request`](/de/docs/Web/API/Request)-Instanz bietet
- Eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bietet, um eine Antwort auf die Anfrage zu senden

Eine Möglichkeit, wie ein Service Worker Anfragen behandeln kann, ist eine "Cache-zuerst"-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, wird die Ressource aus dem Cache abgerufen und der App bereitgestellt.
2. Wenn die angeforderte Ressource nicht im Cache existiert, wird versucht, die Ressource aus dem Netzwerk abzurufen.
   1. Wenn die Ressource abgerufen werden konnte, wird die Ressource dem Cache hinzugefügt, damit sie beim nächsten Mal verfügbar ist, und der App zur Verfügung gestellt.
   2. Wenn die Ressource nicht abgerufen werden konnte, wird eine Standard-Backup-Ressource bereitgestellt.

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

Das bedeutet, dass die Web-App in vielen Situationen gut funktioniert, selbst wenn die Netzwerkverbindung nur intermittierend ist. Aus Sicht des Haupt-App-Codes ist es vollständig transparent: Die App stellt einfach Netzwerk-Anfragen und erhält Antworten. Außerdem kann der Haupt-App-Code ansprechbar für Benutzereingaben bleiben, während Ressourcen abgerufen und im Cache gespeichert werden, da der Service Worker in einem separaten Thread läuft.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker Caching implementieren könnte. Insbesondere wird bei einer „Cache-zuerst“-Strategie zuerst der Cache überprüft, bevor auf das Netzwerk zugegriffen wird, was bedeutet, dass wir wahrscheinlich schneller eine Antwort erhalten, ohne dass Netzwerkressourcen gebraucht werden, wir aber möglicherweise eine veraltete Antwort erhalten.
>
> Eine Alternative wäre eine _Netzwerk-zuerst_-Strategie, bei der wir zuerst versuchen, die Ressource vom Server abzurufen, und auf den Cache zurückgreifen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der jeweiligen Web-App und ihrer Nutzung ab.

Für wesentlich mehr Details zum Einrichten von Service Workern und deren Verwendung zum Hinzufügen von Offline-Funktionalitäten, siehe unseren [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrundbetrieb

Während Offline-Funktionen die häufigste Nutzung für Service Worker darstellen, ermöglichen sie einer PWA auch, sogar dann zu arbeiten, wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht läuft.

Das bedeutet nicht, dass Service Worker die ganze Zeit laufen: Browser können Service Worker stoppen, wenn sie es für angemessen halten. Zum Beispiel wird ein Service Worker gestoppt, wenn er eine Weile inaktiv ist. Der Browser wird den Service Worker jedoch neu starten, wenn ein Ereignis aufgetreten ist, das er bearbeiten muss. Dies ermöglicht es einer PWA, Hintergrundoperationen folgendermaßen zu implementieren:

- In der Haupt-App eine Anfrage für den Service Worker registrieren, eine bestimmte Operation auszuführen
- Zum passenden Zeitpunkt wird der Service Worker, falls erforderlich, neu gestartet und ein Ereignis wird im Umfang des Service Workers ausgelöst
- Der Service Worker führt die Operation aus

In den nächsten Abschnitten werden wir einige verschiedene Funktionen diskutieren, die dieses Muster verwenden, um einer PWA zu ermöglichen, zu arbeiten, während die Haupt-App nicht geöffnet ist.

## Hintergrund-Synchronisation

Angenommen, ein Benutzer verfasst eine E-Mail und drückt „Senden“. Auf einer traditionellen Website müsste er den Tab offen halten, bis die App die E-Mail gesendet hat: Wenn er den Tab schließt oder das Gerät die Verbindung verliert, wird die Nachricht nicht gesendet. Hintergrund-Synchronisation, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung für dieses Problem bei PWAs.

Hintergrund-Synchronisation ermöglicht es der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät Netzwerkverbindung hat, wird der Browser den Service Worker, falls erforderlich, neu starten und ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Bereich des Service Workers auslösen. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, kann der Browser die Anzahl der Wiederholungen begrenzen, indem er das Ereignis erneut auslöst.

### Registrierung eines Synchronisationsereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) am `ServiceWorkerRegistration`-Objekt auf, wie folgt:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: `"send-message"` in diesem Fall.

### Behandlung eines Synchronisationsereignisses

Sobald das Gerät Netzwerkverbindung hat, wird das `sync`-Ereignis im Umfang des Service Workers ausgelöst. Der Service Worker überprüft den Namen der Aufgabe und führt die entsprechende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der Funktion `sendMessage()` in die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses übergeben. Die `waitUntil()`-Methode nimmt ein {{jsxref("Promise")}} als Parameter entgegen und bittet den Browser, den Service Worker nicht zu stoppen, bis das Versprechen erfüllt ist. Dies ist auch die Möglichkeit, wie der Browser erkennt, ob die Operation erfolgreich war oder nicht: Wenn das Versprechen fehlschlägt, kann der Browser versuchen, das `sync`-Ereignis erneut auszulösen.

Die `waitUntil()`-Methode garantiert nicht, dass der Browser den Service Worker nicht stoppt: Wenn die Operation zu lange dauert, wird der Service Worker trotzdem gestoppt. Passiert dies, wird die Operation abgebrochen, und das nächste Mal, wenn ein `sync`-Ereignis ausgelöst wird, läuft der Handler von Anfang an erneut - er setzt nicht dort fort, wo er aufgehört hat.

Was in einem Browser als „zu lange“ betrachtet wird, ist spezifisch für den Browser. Für Chrome ist der Service Worker wahrscheinlich geschlossen, wenn:

- Er war 30 Sekunden inaktiv
- Er hat 30 Sekunden lang synchrones JavaScript ausgeführt
- Das Versprechen, das an `waitUntil()` übergeben wurde, hat mehr als 5 Minuten gebraucht, um erfüllt zu werden

## Hintergrundabruf

Hintergrund-Synchronisation ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben: Wenn ein Service Worker nicht innerhalb einer relativ kurzen Zeit einen Synchronisationsereignis behandelt, wird der Browser den Service Worker anhalten. Dies ist eine bewusste Maßnahme, um die Akkulaufzeit zu schonen und die Privatsphäre des Benutzers zu schützen, indem die Zeit minimiert wird, für die die IP-Adresse des Benutzers dem Server bekannt ist, während die App im Hintergrund läuft.

Dies macht die Hintergrund-Synchronisation für längere Operationen ungeeignet - zum Beispiel das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit Hintergrund-Abrufen können Netzwerkanfragen durchgeführt werden, während sowohl die Haupt-App-Benutzeroberfläche als auch der Service Worker geschlossen sind.

Mit Hintergrund-Abrufen:

- Die Anfrage wird von der Haupt-App-Benutzeroberfläche aus eingeleitet
- Unabhängig davon, ob die Haupt-App geöffnet ist oder nicht, zeigt der Browser ein dauerhaftes Benutzerelement an, das den Benutzer über die laufende Anfrage informiert und es ihm ermöglicht, sie abzubrechen oder den Fortschritt zu überprüfen
- Wenn die Anfrage erfolgreich abgeschlossen wurde oder fehlschlägt, oder der Benutzer den Fortschritt der Anfrage überprüfen möchte, startet der Browser den Service Worker (falls erforderlich) und löst das entsprechende Ereignis im Bereich des Service Workers aus.

### Erstellen einer Hintergrund-Abruf-Anfrage

Eine Hintergrund-Abruf-Anfrage wird im Haupt-App-Code durch einen Aufruf von [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) am `ServiceWorkerRegistration`-Objekt initiiert, so:

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
  // ...
}
```

Wir übergeben drei Argumente an `backgroundFetch.fetch()`:

1. Eine Kennung für diese Abruf-Anfrage
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Hintergrund-Abruf-Anfrage kann mehrere Netzwerk-Anfragen beinhalten.
3. Ein Objekt, das Daten für die Benutzeroberfläche enthält, die der Browser verwendet, um das Vorhandensein und den Fortschritt der Anfrage anzuzeigen.

Der Aufruf von `backgroundFetch.fetch()` gibt ein {{jsxref("Promise")}} zurück, das sich zu einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt auflöst. Damit kann die Haupt-App ihre eigene Benutzeroberfläche aktualisieren, während der Fortschritt der Anfrage liegt. Allerdings wird, wenn die Haupt-App geschlossen ist, der Abruf im Hintergrund fortgesetzt.

Der Browser wird ein dauerhaftes Benutzerelement anzeigen, das den Benutzer daran erinnert, dass die Anfrage läuft, und ihm die Möglichkeit gibt, mehr über die Anfrage zu erfahren und sie abzubrechen, wenn er möchte. Das Benutzerelement wird ein Symbol und einen Titel enthalten, die aus den Argumenten `icons` und `title` stammen, und verwendet `downloadTotal` als Schätzung für die gesamte Download-Größe, um den Fortschritt der Anfrage anzuzeigen.

### Behandlung von Anfrageergebnissen

Wenn der Abruf mit Erfolg oder Misserfolg abgeschlossen ist, oder der Benutzer auf die Fortschrittsbenutzeroberfläche geklickt hat, startet der Browser den Service Worker der App, falls erforderlich, und löst ein Ereignis im Bereich des Service Workers aus. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: alle Anfragen waren erfolgreich
- `backgroundfetchfail`: mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: der Abruf wurde vom Benutzer oder von der Haupt-App abgebrochen
- `backgroundfetchclick`: der Benutzer hat auf das Fortschrittsbenutzerelement geklickt, das der Browser anzeigt

#### Abrufen von Antwortdaten

In den Handlern für die Ereignisse `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` kann der Service Worker die Anfragen- und Antwortdaten abrufen.

Um die Antwort zu erhalten, greift der Ereignishandler auf die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt, das die Methoden [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) und [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) enthält, die [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekte zurückgeben, die die gegebene URL (oder im Fall von `matchAll()` alle Datensätze, wenn keine URL angegeben ist) entsprechen.

Jeder `BackgroundFetchRecord` hat eine [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady)-Eigenschaft, die ein `Promise` ist, das sich auf die [`Response`](/de/docs/Web/API/Response) auflöst, sobald die Antwort verfügbar ist.

Um auf Antwortdaten zuzugreifen, könnte der Handler etwa so vorgehen:

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

Da die Antwortdaten nach dem Beenden des Handlers nicht mehr verfügbar sind, sollte der Handler die Daten speichern (zum Beispiel im [`Cache`](/de/docs/Web/API/Cache)), wenn die App sie weiterhin benötigt.

#### Aktualisieren der Benutzeroberfläche des Browsers

Das Ereignisobjekt, das in `backgroundfetchsuccess` und `backgroundfetchfail` übergeben wird, hat auch eine [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode, die verwendet werden kann, um die Benutzeroberfläche zu aktualisieren, die der Browser anzeigt, um den Benutzer über die Abrufoperation auf dem Laufenden zu halten. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

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

Das `backgroundfetchclick`-Ereignis wird ausgelöst, wenn der Benutzer auf das UI-Element geklickt hat, das der Browser anzeigt, während der Abruf läuft.

Die erwartete Reaktion hier ist das Öffnen eines Fensters, das dem Benutzer mehr Informationen über die Abrufoperation gibt, was vom Service Worker aus mit [`clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) geschehen kann. Zum Beispiel:

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

Dies kann die Offline-Erfahrung, die eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die davon abhängig ist, relativ frische Inhalte bereitzustellen, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, dann werden selbst mit Service Worker-basierendem Caching die Artikel nur so frisch sein, wie sie zuletzt geöffnet wurden. Mit periodischer Hintergrund-Synchronisation könnte die App ihre Artikel im Hintergrund aktualisiert haben, wenn das Gerät Konnektivität hatte, und könnte dem Benutzer so relativ frische Inhalte zeigen.

Dies nutzt die Tatsache, dass die Konnektivität insbesondere auf einem mobilen Gerät nicht so sehr schlecht als _intermittierend_ ist: Durch die Nutzung der Zeiten, in denen das Gerät Konnektivität hat, kann die App die Verbindungslücken glätten.

### Registrierung eines periodischen Synchronisationsereignisses

Der Code zur Registrierung eines periodischen Synchronisationsereignisses folgt demselben Muster wie der zur [Registrierung eines Synchronisationsereignisses](#registrierung_eines_synchronisationsereignisses). Der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) Eigenschaft, die eine [`register()`](/de/docs/Web/API/PeriodicSyncManager/register)-Methode besitzt, die den Namen der periodischen Synchronisation als Parameter annimmt.

Allerdings nimmt `periodicSync.register()` ein zusätzliches Argument entgegen, das ein Objekt mit einer `minInterval`-Eigenschaft ist. Dies stellt das minimale Intervall, in Millisekunden, zwischen Synchronisationsversuchen dar:

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

### Behandlung eines periodischen Synchronisationsereignisses

Obwohl die PWA in der `register()`-Methode um ein bestimmtes Intervall bittet, liegt es im Ermessen des Browsers, wie oft periodische Synchronisationsereignisse generiert werden. Apps, die Nutzer oft öffnen und mit denen sie interagieren, werden wahrscheinlicher öfter periodische Synchronisationsereignisse empfangen, als Apps, mit denen ein Nutzer selten oder nie interagiert.

Wenn der Browser entschieden hat, ein periodisches Synchronisationsereignis zu generieren, ist das Muster wie folgt: er startet den Service Worker, falls erforderlich, und löst ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Ereignis im globalen Umfang des Service Workers aus.

Der Ereignishandler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion innerhalb der Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Artikel abrufen und im Cache speichern. Die `updateNews()`-Funktion sollte relativ schnell abgeschlossen sein: wenn der Service Worker zu lange braucht, um seine Inhalte zu aktualisieren, wird der Browser ihn stoppen.

### Entregistrierung einer periodischen Synchronisation

Wenn die PWA keine regelmäßigen Hintergrundaktualisierungen mehr benötigt (zum Beispiel, weil der Benutzer sie in den App-Einstellungen ausgeschaltet hat), sollte die PWA den Browser bitten, keine periodischen Synchronisationsereignisse mehr zu generieren, indem sie die [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister)-Methode von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) aufruft:

```js
// main.js

async function unregisterPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einer PWA, Nachrichten zu empfangen, die vom Server gesendet werden, unabhängig davon, ob die App läuft oder nicht. Wenn die Nachricht vom Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) wird dem Benutzer angezeigt. Die Spezifikation erlaubt "stilles Pushen", bei dem keine Anzeige erscheint, aber keine Browser unterstützen dies, aufgrund von Bedenken hinsichtlich der Privatsphäre (zum Beispiel könnte Push dann verwendet werden, um den Standort eines Benutzers zu verfolgen).

Das Anzeigen einer Benachrichtigung für den Benutzer unterbricht ihn bei dem, was er gerade macht, und hat das Potenzial, sehr störend zu sein. Nutzen Sie Push-Nachrichten daher mit Bedacht. Sie eignen sich im Allgemeinen für Situationen, in denen Sie den Benutzer über etwas informieren müssen und nicht warten können, bis er die App das nächste Mal öffnet.

Ein häufiger Anwendungsfall für Push-Benachrichtigungen sind Chat-Apps: Wenn der Benutzer eine Nachricht von einem seiner Kontakte erhält, wird diese als Push-Nachricht zugestellt, und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom Server der App zum Gerät gesendet. Stattdessen sendet der Server der App Nachrichten an einen Push-Service, von dem das Gerät sie abrufen und an die App weiterleiten kann.

Das bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Service {{Glossary("Encryption", "verschlüsselt")}} (damit der Push-Service sie nicht lesen kann) und {{Glossary("Signature/Security", "unterschrieben")}} werden müssen (damit der Push-Service weiß, dass die Nachrichten wirklich von Ihrem Server stammen und nicht von jemandem, der sich als Ihr Server ausgibt).

Der Push-Service wird vom Browseranbieter oder einem Drittanbieter betrieben, und der Server der App kommuniziert mit ihm unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls. Der Server der App kann eine Drittanbieterbibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um sich um die Details des Protokolls zu kümmern.

### Abonnieren von Push-Nachrichten

Das Muster für das Abonnieren von Push-Nachrichten sieht wie folgt aus:

![Diagramm der Schritte zur Push-Nachricht-Abonnierung](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem {{Glossary("Public-key_cryptography", "public/private Schlüssel-Paar")}} ausgestattet sein, damit er Push-Nachrichten signieren kann. Die Signatur der Nachrichten muss dem [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02)-Standard folgen.

2. Auf dem Gerät verwendet die App die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe), um sich für Nachrichten vom Server zu abonnieren. Die Methode `subscribe()`:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies ist das, was der Push-Service verwendet, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das sich in ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt auflöst. Dieses Objekt beinhaltet:

     - Den [Endpoint](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Service: Dies ist, wie der App-Server weiß, wohin er Push-Nachrichten senden soll.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Service zu verschlüsseln.

3. Die App sendet den Endpoint und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel durch Verwendung von [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)).

Danach kann der App-Server beginnen, Push-Nachrichten zu senden.

### Senden, Zustellen und Behandeln von Push-Nachrichten

Wenn ein Ereignis auf dem Server stattfindet, das der Server von der App verwaltet haben möchte, kann der Server Nachrichten senden, und die Abfolge der Schritte ist wie folgt:

![Diagramm der Schritte zum Senden und Liefern von Push-Nachrichten](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Service. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpoint für den Push-Service, unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls, und optional erneut unter Verwendung einer Bibliothek, wie web-push.
3. Der Push-Service überprüft die Signatur der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Service die Nachricht zur Zustellung in die Warteschlange.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Service die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht empfängt, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker, falls erforderlich, und löst ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) im globalen Umfang des Service Workers aus. Der Ereignishandler erhält ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt, das die Nachrichtendaten enthält.
7. In seinem Ereignishandler verarbeitet der Service Worker die Nachricht. Wie gewohnt ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker am Laufen zu halten.
8. In seinem Ereignishandler erstellt der Service Worker eine Benachrichtigung unter Verwendung von [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
9. Wenn der Benutzer auf die Benachrichtigung klickt oder sie schließt, werden die Ereignisse [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) im globalen Umfang des Service Workers ausgelöst. Diese ermöglichen es der App, auf die Benutzerreaktion auf die Benachrichtigung zu reagieren.

## Berechtigungen und Einschränkungen

Browser müssen einen Ausgleich finden, bei dem sie Webentwicklern leistungsstarke APIs bereitstellen können, während sie Benutzer vor bösartigen, ausbeuterischen oder schlecht geschriebenen Websites schützen. Einer der wichtigsten Schutzmechanismen besteht darin, dass Benutzer die Seiten der Website schließen können und sie dann nicht mehr auf ihrem Gerät aktiv ist. Die in diesem Artikel beschriebenen APIs neigen dazu, diese Sicherheit zu verletzen, daher müssen Browser zusätzliche Maßnahmen ergreifen, um sicherzustellen, dass Benutzer sich dessen bewusst sind und dass die APIs in einer Weise verwendet werden, die mit den Interessen der Benutzer übereinstimmt.

In diesem Abschnitt skizzieren wir diese Schritte. Mehrere dieser APIs erfordern explizite [Benutzerberechtigungen](/de/docs/Web/API/Permissions_API) und verschiedene andere Einschränkungen und Designentscheidungen, um Benutzer zu schützen.

- Die Background Sync API benötigt keine explizite Benutzerberechtigung, aber das Anfordern einer Hintergrundsynchronisation darf nur gemacht werden, während die Haupt-App geöffnet ist, und Browser begrenzen die Anzahl der Wiederholungen und die Dauer, die Hintergrundsynchronisationsoperationen dauern können.

- Die Background Fetch API erfordert die Benutzerberechtigung „"background-fetch"“, und der Browser zeigt den laufenden Fortschritt der Abrufoperation an und ermöglicht es dem Benutzer, sie abzubrechen.

- Die Periodic Background Sync API erfordert die Benutzerberechtigung „"periodic-background-sync"“, und Browser sollten Benutzern erlauben, die periodische Hintergrundsynchronisation vollständig zu deaktivieren. Außerdem können Browser die Häufigkeit der Synchronisationsereignisse an das Ausmaß knüpfen, mit dem der Benutzer mit der App interagiert: eine App, die der Benutzer selten benutzt, erhält möglicherweise wenige oder sogar keine Ereignisse.

- Die Push API erfordert die Benutzerberechtigung „"push"“, und alle Browser verlangen, dass Push-Ereignisse für den Benutzer sichtbar sind, was bedeutet, dass sie eine benutzer- sichtbare Benachrichtigung auslösen.

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
