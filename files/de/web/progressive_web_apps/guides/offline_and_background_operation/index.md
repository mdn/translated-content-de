---
title: Offline- und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Normalerweise sind Websites stark von einer zuverlässigen Netzwerkverbindung und davon abhängig, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites einfach unbrauchbar, und wenn der Benutzer die Seite nicht in einem Browsertab geöffnet hat, sind die meisten Websites nicht in der Lage, etwas zu tun.

Betrachten Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht es dem Benutzer, während des Online-Seins Musik zu streamen, kann aber Tracks im Hintergrund herunterladen und dann weiterspielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, drückt "Senden" und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald das Netzwerk wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem seiner Kontakte, und obwohl die App nicht geöffnet ist, wird ein Badge auf dem App-Symbol angezeigt, um den Benutzer darüber zu informieren, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die es einer PWA ermöglichen:

- Ein gutes Benutzererlebnis auch bei intermittierender Netzwerkverbindung des Geräts zu bieten
- Ihren Zustand zu aktualisieren, wenn die App nicht läuft
- Den Benutzer über wichtige Ereignisse zu informieren, die geschehen sind, während die App nicht aktiv war

Die in diesem Leitfaden eingeführten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Webseiten und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden besprechen werden, ist der _Service Worker_. In diesem Abschnitt geben wir einen kurzen Hintergrund über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzigen Thread. Dies schließt das eigene JavaScript der Website und alle Arbeiten zum Rendern der Benutzeroberfläche der Website ein. Eine Konsequenz daraus ist, dass, wenn Ihr JavaScript eine lang laufende Operation ausführt, die Hauptbenutzeroberfläche der Website blockiert wird und die Website für den Benutzer unresponsive erscheint.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist ein spezieller Typ von [Web Worker](/de/docs/Web/API/Web_Workers_API), der zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker, indem er eine URL zum Skript des Workers übergibt. Der Worker und der Hauptcode können nicht direkt auf den Zustand des jeweils anderen zugreifen, können jedoch Nachrichten austauschen. Worker können verwendet werden, um rechenintensive Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, reaktionsfähig für den Benutzer bleiben.

So hat eine PWA immer eine grobe Architektur, die zwischen aufgeteilt ist:

- Der _Hauptapp_, mit dem HTML, CSS und dem Teil des JavaScripts, der die Benutzeroberfläche der App implementiert (etwa durch das Handling von Benutzereignissen)
- Der _Service Worker_, der Offline- und Hintergrundaufgaben behandelt

In diesem Leitfaden zeigen wir, zu welchem Teil der App die Codebeispiele gehören, indem wir einen Kommentar wie `// main.js` oder `// service-worker.js` hinzufügen.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht es einer PWA, ein gutes Benutzererlebnis zu bieten, selbst wenn das Gerät keine Netzwerkverbindung hat. Dies wird ermöglicht, indem man der App einen Service Worker hinzufügt.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert wird, kann er die Ressourcen vom Server für die von ihm kontrollierten Seiten (einschließlich Seiten, Stile, Skripte und Bilder, zum Beispiel) abrufen und sie in einem lokalen Cache speichern. Das [`Cache`](/de/docs/Web/API/Cache)-Interface wird verwendet, um Ressourcen in den Cache zu laden. `Cache`-Instanzen sind im globalen Gültigkeitsbereich des Service Workers über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft zugänglich.

Wann immer die App nun eine Ressource anfordert (zum Beispiel, weil der Benutzer die App geöffnet oder auf einen internen Link geklickt hat), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Gültigkeitsbereich des Service Workers aus. Indem er auf dieses Ereignis hört, kann der Service Worker die Anforderung abfangen.

Der Ereignishandler für das `fetch` Ereignis erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt, welches:

- Zugriff auf die Anforderung als [`Request`](/de/docs/Web/API/Request)-Instanz bietet
- Eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bereitstellt, um eine Antwort auf die Anforderung zu senden.

Eine Möglichkeit, wie ein Service Worker Anfragen behandeln kann, ist eine "cache-first" Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, holen Sie sich die Ressource aus dem Cache und geben Sie sie an die App zurück.
2. Wenn die angeforderte Ressource nicht im Cache existiert, versuchen Sie, die Ressource aus dem Netzwerk zu holen.
   1. Falls die Ressource abgerufen werden konnte, fügen Sie die Ressource dem Cache für das nächste Mal hinzu und geben Sie sie an die App zurück.
   2. Falls die Ressource nicht abgerufen werden konnte, geben Sie eine alternative Standardressource zurück.

Das folgende Codebeispiel zeigt eine Implementierung dafür:

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

Das bedeutet, dass die Web-App in vielen Situationen gut funktionieren wird, selbst wenn die Netzwerkverbindung intermittierend ist. Aus Sicht des Haupt-App-Codes ist dies völlig transparent: Die App stellt einfach Netzwerkanfragen und erhält Antworten. Da der Service Worker in einem separaten Thread arbeitet, kann der Haupt-App-Code reaktionsfähig auf Benutzereingaben bleiben, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker das Caching implementieren könnte. Speziell in einer Cache-First-Strategie überprüfen wir zuerst den Cache vor dem Netzwerk, was bedeutet, dass wir eher eine schnelle Antwort ohne Netzwerkkosten erhalten, aber eher eine veraltete Antwort liefern.
>
> Eine Alternative wäre eine _network-first_ Strategie, bei der wir zuerst versuchen, die Ressource vom Server abzurufen, und zum Cache greifen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der jeweiligen Web-App und ihrer Nutzung ab.

Für weitaus mehr Details über die Einrichtung von Service Workern und deren Verwendung zur Hinzufügung von Offline-Funktionalität, siehe unseren [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrundbetrieb

Während Offline-Funktionen die häufigste Anwendung für Service Worker sind, ermöglichen sie auch einer PWA den Betrieb, selbst wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht läuft.

Dies bedeutet nicht, dass Service Worker die ganze Zeit laufen: Browser können Service Worker stoppen, wenn sie es für angemessen halten. Zum Beispiel wird ein Service Worker, der eine Weile inaktiv war, gestoppt. Der Browser startet ihn jedoch erneut, wenn ein Ereignis auftritt, das er verarbeiten muss. Dies ermöglicht es einer PWA, Hintergrundvorgänge auf die folgende Weise zu implementieren:

- In der Haupt-App eine Anfrage registrieren, damit der Service Worker einen Vorgang ausführt
- Zum geeigneten Zeitpunkt wird der Service Worker bei Bedarf neu gestartet, und es wird ein Ereignis in seinem Bereich ausgelöst
- Der Service Worker führt den Vorgang aus

In den nächsten Abschnitten werden wir einige Funktionen besprechen, die dieses Muster verwenden, um einer PWA das Arbeiten zu ermöglichen, während die Haupt-App nicht geöffnet ist.

## Hintergrund-Synchronisierung

Angenommen, ein Benutzer verfasst eine E-Mail und drückt "Senden". In einer traditionellen Website muss er den Tab geöffnet lassen, bis die App die E-Mail gesendet hat: Schließt er den Tab oder verliert das Gerät die Verbindung, wird die Nachricht nicht gesendet. Die Hintergrund-Synchronisierung, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung für dieses Problem bei PWAs.

Die Hintergrund-Synchronisierung ermöglicht es der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät Netzwerkverbindung hat, startet der Browser den Service Worker neu, falls erforderlich, und löst ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Bereich des Service Workers aus. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Kann die Aufgabe nicht abgeschlossen werden, kann der Browser das Ereignis noch einige Male erneut auslösen, um es erneut zu versuchen.

### Registrieren eines Sync-Ereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, wodurch ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) auf dem `ServiceWorkerRegistration`-Objekt auf, wie folgt:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: In diesem Fall `"send-message"`.

### Handhabung eines Sync-Ereignisses

Sobald das Gerät Netzwerkverbindung hat, wird das `sync`-Ereignis im Bereich des Service Workers ausgelöst. Der Service Worker überprüft den Namen der Aufgabe und führt die entsprechende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag === "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der `sendMessage()`-Funktion in die [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode des Events übergeben. Die `waitUntil()`-Methode nimmt ein {{jsxref("Promise")}} als Parameter und fordert den Browser auf, den Service Worker nicht zu stoppen, bis das Promise geklärt ist. So weiß der Browser auch, ob die Operation erfolgreich war oder nicht: Wenn das Promise abgelehnt wird, kann der Browser durch erneutes Auslösen des `sync`-Ereignisses einen weiteren Versuch unternehmen.

Die `waitUntil()`-Methode stellt keine Garantie dar, dass der Browser den Service Worker nicht stoppt: Wenn die Operation zu lange dauert, wird der Service Worker dennoch gestoppt. Wenn dies geschieht, wird die Operation abgebrochen, und wenn das `sync`-Ereignis das nächste Mal erneut ausgelöst wird, läuft der Handler von Anfang an - er setzt nicht dort fort, wo er aufgehört hat.

Wie lange "zu lange" ist, ist browserspezifisch. Für Chrome wird der Service Worker wahrscheinlich geschlossen, wenn:

- Er 30 Sekunden untätig war
- Er 30 Sekunden synchrones JavaScript ausgeführt hat
- Das an `waitUntil()` übergebene Promise mehr als 5 Minuten zum Klären benötigt hat

## Hintergrundabruf

Die Hintergrund-Synchronisierung ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben: Wenn ein Service Worker ein Sync-Ereignis nicht in relativ kurzer Zeit beendet, stoppt der Browser den Service Worker. Dies ist eine bewusst getroffene Maßnahme, um die Akkulaufzeit zu verlängern und die Privatsphäre des Benutzers zu schützen, indem die Zeit minimiert wird, während der die IP-Adresse des Benutzers bei geschlossener App dem Server ausgesetzt ist.

Das macht die Hintergrund-Synchronisierung für längere Operationen ungeeignet - z.B. das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit dem Hintergrundabruf können Netzwerkanfragen durchgeführt werden, während sowohl die Haupt-App-UI als auch der Service Worker geschlossen sind.

Mit dem Hintergrundabruf:

- Die Anforderung wird von der Haupt-App-UI aus initiiert
- Unabhängig davon ob die Haupt-App geöffnet ist oder nicht, zeigt der Browser ein dauerhaftes UI-Element an, das den Benutzer über die laufende Anfrage informiert und es ihm ermöglicht, sie abzubrechen oder den Fortschritt zu überprüfen
- Wenn die Anfrage erfolgreich oder fehlgeschlagen abgeschlossen wird, oder der Benutzer den Fortschritt der Anfrage überprüfen möchte, startet der Browser den Service Worker (falls erforderlich) und löst das entsprechende Ereignis im Bereich des Service Workers aus.

### Einen Hintergrundabruf starten

Ein Hintergrundabholung ist im Haupt-App-Code initiiert, indem [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, wie folgt:

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

1. Einen Bezeichner für diese Abrufanforderung
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Hintergrundabholung kann mehrere Netzwerkabfragen umfassen.
3. Ein Objekt, das Daten für die UI enthält, die der Browser verwendet, um die Existenz und den Fortschritt der Anforderung anzuzeigen.

Der Aufruf von `backgroundFetch.fetch()` gibt ein {{jsxref("Promise")}} zurück, das in ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt aufgelöst wird. Dadurch kann die Haupt-App ihre eigene UI entsprechend dem Fortschritt der Anforderung aktualisieren. Ist die Haupt-App jedoch geschlossen, wird der Abruf im Hintergrund fortgesetzt.

Der Browser zeigt ein dauerhaftes UI-Element an, das den Benutzer daran erinnert, dass die Anfrage läuft, und ihm die Möglichkeit bietet, mehr über die Anfrage zu erfahren und sie bei Bedarf abzubrechen. Die UI wird ein Symbol und einen Titel enthalten, die aus den Argumenten `icons` und `title` stammen und verwendet `downloadTotal` als Schätzung der Gesamtdownloadgröße, um den Fortschritt der Anforderung anzuzeigen.

### Handhabung von Anforderungsergebnissen

Wenn der Abruf erfolgreich oder mit Misserfolg abgeschlossen ist, oder der Benutzer auf die Fortschritts-UI geklickt hat, startet der Browser bei Bedarf den Service Worker der App und löst ein Ereignis im Bereich des Service Workers aus. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: Alle Anfragen waren erfolgreich
- `backgroundfetchfail`: Mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: Der Abruf wurde vom Benutzer oder von der Haupt-App abgebrochen
- `backgroundfetchclick`: Der Benutzer hat auf das Fortschritts-UI-Element geklickt, das der Browser anzeigt

#### Abrufen von Antwortdaten

In den Handlern für die `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort`-Ereignisse kann der Service Worker die Anfrage- und Antwortdaten abrufen.

Um auf die Antwort zuzugreifen, greift der Ereignishandler auf die [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration)-Eigenschaft des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt, das über die Methoden [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) und [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) verfügt, welche [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekte zurückgeben, die der gegebenen URL entsprechen (oder, im Fall von `matchAll()`, alle Datensätze, wenn keine URL angegeben ist).

Jeder `BackgroundFetchRecord` hat eine [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady)-Eigenschaft, die ein `Promise` ist, das sich auf die [`Response`](/de/docs/Web/API/Response) klärt, sobald die Antwort verfügbar ist.

Um auf die Antwortdaten zuzugreifen, könnte der Handler etwa so vorgehen:

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

Da die Antwortdaten nach dem Beenden des Handlers nicht mehr verfügbar sind, sollte der Handler die Daten speichern (zum Beispiel im [`Cache`](/de/docs/Web/API/Cache)), wenn die App diese weiterhin benötigt.

#### Aktualisieren der UI des Browsers

Das Ereignisobjekt, das in `backgroundfetchsuccess` und `backgroundfetchfail` übergeben wird, verfügt auch über eine [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI)-Methode, mit der die vom Browser angezeigte UI, die den Benutzer über die Abrufoperation informiert, aktualisiert werden kann. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

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

#### Reaktion auf Nutzerinteraktion

Das `backgroundfetchclick`-Ereignis wird ausgelöst, wenn der Benutzer auf das UI-Element geklickt hat, das der Browser anzeigt, während der Abruf läuft.

Die erwartete Antwort darauf ist es, ein Fenster zu öffnen, das dem Benutzer mehr Informationen über die Abrufoperation liefert, was aus dem Service Worker heraus mit [`clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) getan werden kann. Zum Beispiel:

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

Die [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht es einer PWA, ihre Daten im Hintergrund periodisch zu aktualisieren, während die Haupt-App geschlossen ist.

Dies kann das Offline-Erlebnis, das eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die auf einigermaßen aktuelle Inhalte angewiesen ist, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, werden selbst bei Service-Worker-basiertem Caching die Geschichten nur so aktuell sein wie zuletzt, als die App geöffnet war. Mit der periodischen Hintergrund-Synchronisierung könnte die App ihre Geschichten im Hintergrund aktualisiert haben, wenn das Gerät eine Verbindung hatte, und könnte so relativ aktuelle Inhalte dem Benutzer anzeigen.

Dies nutzt die Tatsache, dass insbesondere auf einem mobilen Gerät die Konnektivität nicht unbedingt schlecht, sondern eher _intermittierend_ ist: Indem man die Zeiten nutzt, in denen das Gerät Konnektivität hat, kann die App die Konnektivitätslücken überbrücken.

### Registrieren eines periodischen Sync-Ereignisses

Der Code zum Registrieren eines periodischen Sync-Ereignisses folgt dem gleichen Muster wie für das [Registrieren eines Sync-Ereignisses](#registrieren_eines_sync-ereignisses). Der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync)-Eigenschaft, die eine [`register()`](/de/docs/Web/API/PeriodicSyncManager/register)-Methode mit dem Namen des periodischen Sync als Parameter hat.

Allerdings nimmt `periodicSync.register()` ein weiteres Argument, welches ein Objekt mit einer `minInterval`-Eigenschaft ist, an. Dies stellt das minimale Intervall in Millisekunden zwischen Synchronisationsversuchen dar:

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

Obwohl die PWA in dem `register()`-Aufruf um ein bestimmtes Intervall bittet, liegt es im Ermessen des Browsers, wie oft periodische Sync-Ereignisse generiert werden. Apps, die Benutzer häufig öffnen und damit interagieren, erhalten eher regelmäßigere periodische Sync-Ereignisse als Apps, mit denen der Benutzer selten oder nie interagiert.

Wenn der Browser entschieden hat, ein periodisches Sync-Ereignis zu generieren, folgt das Muster: Er startet den Service Worker, falls erforderlich, und löst ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Ereignis im globalen Gültigkeitsbereich des Service Workers aus.

Der Event-Handler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion innerhalb der [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Methode des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb `updateNews()` kann der Service Worker die neuesten Geschichten abrufen und zwischenspeichern. Die `updateNews()`-Funktion sollte relativ schnell abgeschlossen sein: Wenn der Service Worker zu lange für die Aktualisierung seines Inhalts benötigt, wird er vom Browser gestoppt.

### Abmelden von einer periodischen Synchronisierung

Wenn die PWA keine periodischen Hintergrundaktualisierungen mehr benötigt (zum Beispiel, weil der Benutzer sie in den App-Einstellungen ausgeschaltet hat), sollte die PWA den Browser bitten, keine periodischen Sync-Ereignisse mehr zu erzeugen, indem die [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister)-Methode von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) aufgerufen wird:

```js
// main.js

async function unregisterPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einer PWA, Nachrichten zu empfangen, die vom Server gepusht werden, egal ob die App läuft oder nicht. Wenn die Nachricht vom Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) wird dem Benutzer angezeigt. Die Spezifikation erlaubt auch "silent push", bei dem keine Benachrichtigung angezeigt wird, aber keine Browser unterstützen dies, aufgrund von Datenschutzbedenken (zum Beispiel, dass Push dann verwendet werden könnte, um den Standort eines Benutzers zu verfolgen).

Dem Benutzer eine Benachrichtigung anzuzeigen, lenkt ihn von dem ab, was er gerade tut, und kann sehr störend sein. Daher sollten Push-Nachrichten mit Bedacht eingesetzt werden. Generell sind sie für Situationen geeignet, in denen Sie den Benutzer über etwas informieren müssen und nicht bis zum nächsten Mal warten können, wenn er Ihre App öffnet.

Ein häufiges Anwendungsbeispiel für Push-Benachrichtigungen sind Chat-Apps: Wenn der Benutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht zugestellt, und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem das Gerät sie abrufen und an die App zustellen kann.

Dies bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Dienst {{Glossary("Encryption", "verschlüsselt")}} (damit der Push-Dienst sie nicht lesen kann) und {{Glossary("Signature/Security", "signiert")}} (damit der Push-Dienst weiß, dass die Nachrichten wirklich von Ihrem Server stammen und nicht von jemandem, der sich als Ihren Server ausgibt) sein müssen.

Der Push-Dienst wird vom Browseranbieter oder einem Dritten betrieben, und der App-Server kommuniziert mit diesem über das [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokoll. Der App-Server kann eine Drittanbieterbibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Protokolldetails zu behandeln.

### Abonnieren von Push-Nachrichten

Das Muster für das Abonnieren von Push-Nachrichten sieht folgendermaßen aus:

![Diagramm, das die Schritte zur Push-Nachricht-Abonnement zeigt](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem {{Glossary("Public-key_cryptography", "öffentlich-privaten Schlüsselpaar")}} ausgestattet werden, damit er Push-Nachrichten signieren kann. Das Signieren der Nachrichten muss der [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02)-Spezifikation folgen.

2. Auf dem Gerät verwendet die App die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe), um Nachrichten vom Server zu abonnieren. Die `subscribe()`-Methode:
   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies ist, was der Push-Dienst verwenden wird, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das sich in ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt auflöst. Dieses Objekt beinhaltet:
     - Den [Endpunkt](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: Dies ist, wie der App-Server weiß, wohin er Push-Nachrichten senden soll.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpunkt und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel unter Verwendung von [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)).

Danach ist der App-Server in der Lage, Push-Nachrichten zu senden.

### Senden, Zustellen und Handhaben von Push-Nachrichten

Wenn ein Ereignis auf dem Server eintritt, das die App handhaben soll, kann der Server Nachrichten senden, und die Abfolge der Schritte ist wie folgt:

![Diagramm, das die Schritte zum Senden und Zustellen von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpunkt für den Push-Dienst, unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls, und optional erneut unter Verwendung einer Bibliothek wie web-push.
3. Der Push-Dienst überprüft die Signatur auf der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht zur Zustellung in die Warteschlange.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Dienst die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht empfängt, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker bei Bedarf und löst ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) im globalen Gültigkeitsbereich des Service Workers aus. Der Ereignishandler erhält ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt, das die Nachrichtendaten enthält.
7. In seinem Ereignishandler führt der Service Worker die Verarbeitung der Nachricht aus. Wie üblich ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker am Laufen zu halten.
8. In seinem Ereignishandler erstellt der Service Worker eine Benachrichtigung mit [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification).
9. Wenn der Benutzer die Benachrichtigung anklickt oder schließt, werden die Ereignisse [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) bzw. [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) im globalen Gültigkeitsbereich des Service Workers ausgelöst. Diese ermöglichen es der App, die Antwort des Benutzers auf die Benachrichtigung zu handhaben.

## Berechtigungen und Einschränkungen

Browser müssen einen Ausgleich finden, um leistungsfähige APIs für Webentwickler bereitzustellen, während sie die Benutzer vor bösartigen, ausbeuterischen oder schlecht geschriebenen Websites schützen. Einer der Hauptschutzmechanismen besteht darin, dass Benutzer die Seiten der Website schließen können, und sie dann nicht mehr aktiv auf ihrem Gerät ist. Die in diesem Artikel beschriebenen APIs neigen dazu, diese Zusicherung zu verletzen, also müssen Browser zusätzliche Maßnahmen ergreifen, um sicherzustellen, dass Benutzer sich dessen bewusst sind und dass die APIs in einer Weise verwendet werden, die den Interessen der Benutzer entspricht.

In diesem Abschnitt werden wir diese Schritte umreißen. Einige dieser APIs erfordern eine explizite [Benutzerberechtigung](/de/docs/Web/API/Permissions_API) sowie verschiedene andere Beschränkungen und Designentscheidungen, um den Schutz der Benutzer zu gewährleisten.

- Die Background Sync API benötigt keine explizite Benutzerberechtigung, aber die Anforderung einer Hintergrundsynchronisation kann nur dann erfolgen, während die Haupt-App geöffnet ist, und Browser beschränken die Anzahl der Wiederholungen sowie die Dauer, die Hintergrundsynchronisationsvorgänge dauern dürfen.

- Die Background Fetch API erfordert die Benutzerberechtigung `"background-fetch"`, und der Browser zeigt den laufenden Fortschritt der Abrufoperation an, wodurch der Benutzer sie abbrechen kann.

- Die Periodic Background Sync API erfordert die Benutzerberechtigung `"periodic-background-sync"`, und Browser sollten es den Benutzern ermöglichen, die periodische Hintergrundsynchronisierung vollständig zu deaktivieren. Außerdem können Browser die Häufigkeit der Sync-Ereignisse daran binden, in welchem Maß der Benutzer sich für die Interaktion mit der App entscheidet, so dass eine App, die der Benutzer selten nutzt, möglicherweise nur wenige oder gar keine Ereignisse erhält.

- Die Push API erfordert die Benutzerberechtigung `"push"`, und alle Browser verlangen, dass Push-Ereignisse benutzersichtbar sind, was bedeutet, dass sie eine Benutzernachricht generieren müssen.

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
