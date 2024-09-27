---
title: Offline- und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

Normalerweise sind Websites stark von einer zuverlässigen Netzwerkverbindung abhängig und davon, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites schlicht nicht nutzbar, und wenn der Benutzer die Seite nicht in einem Browsertab geöffnet hat, können die meisten Websites nichts tun.

Berücksichtigen Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht es dem Benutzer, Musik beim Online-Streaming abzuspielen, aber sie kann Titel im Hintergrund herunterladen und dann weiter abspielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, drückt auf "Senden" und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald das Netzwerk wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem seiner Kontakte, und obwohl die App nicht geöffnet ist, zeigt sie ein Abzeichen auf dem App-Symbol an, um den Benutzer darüber zu informieren, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die es einer PWA ermöglichen:

- Auch bei intermittierender Netzwerkverbindung eine gute Benutzererfahrung zu bieten
- Ihren Status zu aktualisieren, wenn die App nicht läuft
- Den Benutzer über wichtige Ereignisse zu informieren, die stattgefunden haben, während die App nicht lief

Die in diesem Leitfaden vorgestellten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden diskutieren werden, ist der _Service Worker_. In diesem Abschnitt bieten wir einen kurzen Überblick über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzigen Thread. Dies umfasst das eigene JavaScript der Website sowie alle Arbeiten zur Darstellung der Benutzeroberfläche der Website. Eine Konsequenz davon ist, dass wenn Ihr JavaScript eine langlaufende Operation ausführt, die Hauptbenutzeroberfläche der Website blockiert wird und die Website für den Benutzer unresponsive erscheint.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist eine spezielle Art von [Web Worker](/de/docs/Web/API/Web_Workers_API), die zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker und übergibt eine URL zum Skript des Workers. Der Worker und der Hauptcode können nicht direkt auf den Zustand des anderen zugreifen, aber sie können miteinander kommunizieren, indem sie sich gegenseitig Nachrichten senden. Worker können verwendet werden, um rechenintensive Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, responsiv auf den Benutzer bleiben.

So hat eine PWA immer eine in zwei Teile unterteilte Architektur:

- Die _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScripts, der die Benutzeroberfläche der App implementiert (indem sie z.B. Benutzereingaben verarbeitet)
- Der _Service Worker_, der Offline- und Hintergrundaufgaben übernimmt

In diesem Leitfaden werden wir beim Zeigen von Codebeispielen angeben, zu welchem Teil der App der Code gehört, mit einem Kommentar wie `// main.js` oder `// service-worker.js`.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht es einer PWA, eine gute Benutzererfahrung zu bieten, auch wenn das Gerät keine Netzwerkverbindung hat. Dies wird ermöglicht, indem ein Service Worker zu einer App hinzugefügt wird.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen vom Server für die Seiten abrufen, die er kontrolliert (einschließlich Seiten, Stile, Skripte und Bilder, zum Beispiel), und sie zu einem lokalen Cache hinzufügen. Das [`Cache`](/de/docs/Web/API/Cache)-Interface wird verwendet, um Ressourcen zum Cache hinzuzufügen. `Cache`-Instanzen sind über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft im globalen Scope des Service Workers zugänglich.

Immer wenn die App dann eine Ressource anfordert (zum Beispiel, weil der Benutzer die App geöffnet oder auf einen internen Link geklickt hat), löst der Browser ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) im globalen Scope des Service Workers aus. Indem der Service Worker auf dieses Ereignis hört, kann er die Anforderung abfangen.

Der Ereignishandler für das `fetch`-Ereignis erhält ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt, das:

- Zugriff auf die Anforderung als eine [`Request`](/de/docs/Web/API/Request)-Instanz bietet
- Eine [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith)-Methode bereitstellt, um eine Antwort auf die Anforderung zu senden.

Eine Möglichkeit, wie ein Service Worker Anforderungen handhaben kann, ist eine "Cache-First"-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache vorhanden ist, holen Sie die Ressource aus dem Cache und geben Sie sie an die App zurück.
2. Wenn die angeforderte Ressource nicht im Cache vorhanden ist, versuchen Sie, die Ressource aus dem Netzwerk abzurufen.
   1. Wenn die Ressource abgerufen werden konnte, fügen Sie die Ressource dem Cache für das nächste Mal hinzu und geben Sie die Ressource an die App zurück.
   2. Wenn die Ressource nicht abgerufen werden konnte, geben Sie eine Standard-Ersatzressource zurück.

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

Dies bedeutet, dass die Web-App in vielen Situationen auch dann gut funktioniert, wenn die Netzwerkverbindung instabil ist. Aus Sicht des Haupt-App-Codes ist dies völlig transparent: Die App stellt einfach Netzwerk-Anforderungen und erhält Antworten. Da sich der Service Worker in einem separaten Thread befindet, kann der Haupt-App-Code weiterhin auf Benutzereingaben reagieren, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker das Caching implementieren könnte. Bei einer Cache-First-Strategie prüfen wir den Cache zuerst vor dem Netzwerk, was bedeutet, dass wir eher eine schnelle Antwort zurückgeben, ohne Netzwerkkosten entstehen zu lassen, aber eher eine veraltete Antwort zurückgeben.
>
> Eine Alternative wäre eine _Network-First_-Strategie, bei der wir versuchen, die Ressource zuerst vom Server abzurufen, und in den Cache zurückfallen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der spezifischen Web-App und ihrer Nutzung ab.

Für detaillierte Informationen zur Einrichtung von Service Workern und deren Nutzung zur Bereitstellung von Offline-Funktionalität, siehe unseren [Leitfaden zur Nutzung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrundbetrieb

Während Offline-Betriebe die häufigste Verwendung für Service Worker sind, ermöglichen sie einer PWA auch, zu arbeiten, während die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, auch wenn die Haupt-App nicht läuft.

Dies bedeutet nicht, dass Service Worker die ganze Zeit laufen: Browser können Service Worker stoppen, wenn sie dies für angemessen halten. Beispielsweise, wenn ein Service Worker eine Zeit lang inaktiv war, wird er gestoppt. Der Browser startet den Service Worker jedoch neu, wenn ein Ereignis aufgetreten ist, das er bearbeiten muss. Damit kann eine PWA den Hintergrundbetrieb auf folgende Weise implementieren:

- In der Haupt-App eine Anforderung registrieren, dass der Service Worker eine Operation ausführt
- Zu gegebener Zeit wird der Service Worker bei Bedarf neu gestartet, und ein Ereignis wird im Scope des Service Workers ausgelöst
- Der Service Worker führt die Operation aus

In den folgenden Abschnitten werden wir einige verschiedene Funktionen diskutieren, die dieses Muster verwenden, damit eine PWA arbeiten kann, während die Haupt-App nicht geöffnet ist.

## Hintergrund-Synchronisation

Nehmen wir an, ein Benutzer verfasst eine E-Mail und drückt "Senden". Bei einer herkömmlichen Website muss der Tab geöffnet bleiben, bis die App die E-Mail gesendet hat: Wenn der Tab geschlossen wird oder das Gerät die Konnektivität verliert, wird die Nachricht nicht gesendet. Die Hintergrund-Synchronisation, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung dieses Problems für PWAs.

Die Hintergrund-Synchronisation ermöglicht es der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen durchzuführen. Sobald das Gerät über Netzwerkverbindung verfügt, startet der Browser den Service Worker erneut, falls nötig, und löst ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Scope des Service Workers aus. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, kann der Browser die Aufgabe begrenzt oft erneut versuchen, indem er das Ereignis erneut auslöst.

### Registrierung eines Sync-Ereignisses

Um den Service Worker zu bitten, eine Aufgabe durchzuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, die mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt aufgelöst wird. Die App ruft dann [`sync.register()`](/de/docs/Web/API/SyncManager/register) auf dem `ServiceWorkerRegistration` Objekt auf, wie dies:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: "send-message" in diesem Fall.

### Umgang mit einem Sync-Ereignis

Sobald das Gerät über Netzwerkverbindung verfügt, löst das `sync`-Ereignis im Scope des Service Workers aus. Der Service Worker überprüft den Namen der Aufgabe und führt die entsprechende Funktion aus, `sendMessage()` in diesem Fall:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der `sendMessage()`-Funktion an die `waitUntil()`-Methode des Ereignisses übergeben. Die `waitUntil()`-Methode nimmt ein {{jsxref("Promise")}} als Parameter und fordert den Browser auf, den Service Worker nicht zu stoppen, bis das Versprechen abgeschlossen ist. So weiß der Browser auch, ob die Operation erfolgreich war oder nicht: Wenn das Versprechen abgelehnt wird, kann der Browser erneut versuchen, indem er das `sync`-Ereignis erneut auslöst.

Die `waitUntil()`-Methode ist keine Garantie dafür, dass der Browser den Service Worker nicht stoppt: Wenn die Operation zu lange dauert, wird der Service Worker trotzdem gestoppt. Wenn dies passiert, wird die Operation abgebrochen, und wenn das nächste `sync`-Ereignis ausgelöst wird, wird der Handler erneut von vorne gestartet – es wird nicht dort fortgesetzt, wo er aufgehört hat.

Wie lange "zu lange" ist, ist browserspezifisch. Für Chrome ist der Service Worker wahrscheinlich geschlossen, wenn:

- Er seit 30 Sekunden inaktiv ist
- Er synchrones JavaScript seit 30 Sekunden ausführt
- Das Versprechen, das an `waitUntil()` übergeben wurde, mehr als 5 Minuten dauert, bis es abgeschlossen ist

## Hintergrundabruf

Hintergrund-Synchronisation ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben: Wenn ein Service Worker eine Synchronisierung nicht in einer relativ kurzen Zeit abgeschlossen hat, wird der Browser den Service Worker stoppen. Dies ist eine absichtliche Maßnahme, um die Batterielebensdauer zu schonen und die Privatsphäre des Benutzers zu schützen, indem die Zeit minimiert wird, in der die IP-Adresse des Benutzers während der App im Hintergrund dem Server ausgesetzt ist.

Dies macht die Hintergrund-Synchronisation für längere Operationen ungeeignet - beispielsweise das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit dem Hintergrundabruf können Netzwerk-Anfragen durchgeführt werden, während sowohl die Haupt-App-Benutzeroberfläche als auch der Service Worker geschlossen sind.

Beim Hintergrundabruf:

- Die Anfrage wird von der Haupt-App-Benutzeroberfläche initiiert
- Unabhängig davon, ob die Haupt-App geöffnet ist oder nicht, zeigt der Browser ein dauerhaftes UI-Element an, das den Benutzer über den laufenden Abruf informiert und ihm ermöglicht, ihn abzubrechen oder seinen Fortschritt zu überprüfen
- Wenn der Abruf erfolgreich oder fehlgeschlagen abgeschlossen wurde, oder der Benutzer den Fortschritt der Anfrage überprüfen möchte, startet der Browser den Service Worker (falls erforderlich) und löst das entsprechende Ereignis im Scope des Service Workers aus.

### Anforderung eines Hintergrundabrufs

Eine Hintergrundabruf-Anfrage wird im Haupt-App-Code initiiert, indem [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, wie dies:

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

1. Eine Kennung für diese Abrufanforderung
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Hintergrundabruf-Anforderung kann mehrere Netzwerk-Anfragen umfassen.
3. Ein Objekt, das Daten für die Benutzeroberfläche enthält, die der Browser verwendet, um die Existenz und den Fortschritt der Anfrage anzuzeigen.

Der `backgroundFetch.fetch()`-Aufruf gibt ein {{jsxref("Promise")}} zurück, das auf ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt aufgelöst wird. Dadurch kann die Haupt-App ihre eigene Benutzeroberfläche aktualisieren, während der Abruf fortschreitet. Wenn jedoch die Haupt-App geschlossen ist, wird der Abruf im Hintergrund fortgesetzt.

Der Browser zeigt ein dauerhaftes UI-Element an, das den Benutzer daran erinnert, dass der Abruf läuft, wodurch er die Möglichkeit erhält, mehr über die Anfrage zu erfahren und sie bei Bedarf abzubrechen. Die Benutzeroberfläche enthält ein Symbol und einen Titel aus den `icons`- und `title`-Argumenten und verwendet `downloadTotal` als Schätzung der gesamten Download-Größe, um den Fortschritt der Anfrage anzuzeigen.

### Umgang mit Abrufergebnissen

Wenn der Abruf mit Erfolg oder Misserfolg abgeschlossen ist oder der Benutzer auf die Fortschritts-Benutzeroberfläche geklickt hat, startet der Browser den Service Worker der App, falls erforderlich, und löst ein Ereignis im Scope des Service Workers aus. Folgende Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: Alle Anforderungen waren erfolgreich
- `backgroundfetchfail`: Mindestens eine Anforderung ist fehlgeschlagen
- `backgroundfetchabort`: Der Abruf wurde vom Benutzer یا von der Haupt-App abgebrochen
- `backgroundfetchclick`: Der Benutzer hat auf das Fortschritts-UI-Element geklickt, das der Browser anzeigt

#### Abruf von Antwortdaten

In den Handlern für die `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort`-Ereignisse kann der Service Worker die Anfrage- und Antwortdaten abrufen.

Um die Antwort zu erhalten, greift der Ereignishandler auf die `registration`-Eigenschaft des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt, das `matchAll()` und `match()`-Methoden hat, die `BackgroundFetchRecord`-Objekte zurückgeben, die mit der angegebenen URL übereinstimmen (oder im Fall von `matchAll()` alle Datensätze, wenn keine URL angegeben ist).

Jeder `BackgroundFetchRecord` hat eine `responseReady`-Eigenschaft, die ein `Promise` ist, das auf die `Response`-Instanz aufgelöst wird, sobald die Antwort verfügbar ist.

Um also auf Antwortdaten zuzugreifen, könnte der Handler etwa Folgendes tun:

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

Da die Antwortdaten nach Beendigung des Handlers nicht mehr verfügbar sind, sollte der Handler die Daten speichern (zum Beispiel im `Cache`), wenn die App sie weiterhin benötigt.

#### Aktualisierung der Benutzeroberfläche des Browsers

Das an `backgroundfetchsuccess` und `backgroundfetchfail` übergebene Ereignisobjekt hat auch eine `updateUI()`-Methode, die verwendet werden kann, um die Benutzeroberfläche zu aktualisieren, die der Browser anzeigt, um den Benutzer über die Abrufoperation zu informieren. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

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

#### Reaktion auf Benutzerinteraktionen

Das `backgroundfetchclick`-Ereignis wird ausgelöst, wenn der Benutzer auf das UI-Element geklickt hat, das der Browser während des Abrufs anzeigt.

Die erwartete Antwort hier ist das Öffnen eines Fensters, das dem Benutzer weitere Informationen über die Abrufoperation gibt, was vom Service Worker mit `clients.openWindow()` aus erfolgen kann. Beispiel:

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

Dies kann das Offline-Erlebnis, das eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die von halbwegs aktuellen Inhalten abhängt, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, sind die Geschichten selbst mit service worker-basiertem Caching nur so aktuell wie beim letzten Öffnen der App. Mit periodischer Hintergrund-Synchronisation könnte die App ihre Geschichten im Hintergrund aktualisiert haben, als das Gerät Konnektivität hatte, und könnte daher relativ aktuelle Inhalte für den Benutzer anzeigen.

Dies nutzt die Tatsache aus, dass die Konnektivität auf einem mobilen Gerät insbesondere nicht schlecht ist, sondern _intermittierend_: Durch die Nutzung der Zeiten, in denen das Gerät Konnektivität hat, kann die App die Konnektivitätslücken überbrücken.

### Registrierung eines periodischen Sync-Ereignisses

Der Code zur Registrierung eines periodischen Sync-Ereignisses folgt demselben Muster wie der zur [Registrierung eines Sync-Ereignisses](#registrierung_eines_sync-ereignisses). Die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) hat eine `periodicSync`-Eigenschaft, die eine `register()`-Methode hat, die den Namen des periodischen Sync als Parameter akzeptiert.

Allerdings erfordert `periodicSync.register()` ein zusätzliches Argument, das ein Objekt mit einer `minInterval`-Eigenschaft ist. Dies stellt das minimale Intervall in Millisekunden zwischen den Synchronisationsversuchen dar:

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

Obwohl die PWA in der `register()`-Aufruf ein bestimmtes Intervall anfragt, liegt es am Browser, wie oft periodische Sync-Ereignisse generiert werden. Apps, die oft geöffnet und mit denen interagiert wird, sind wahrscheinlicher, periodische Sync-Ereignisse zu erhalten, und erhalten sie häufiger als Apps, mit denen der Benutzer selten oder nie interagiert.

Wenn der Browser beschlossen hat, ein periodisches Sync-Ereignis zu generieren, ist das Muster folgendes: Er startet den Service Worker, falls erforderlich, und löst ein `periodicSync`-Ereignis im globalen Scope des Service Workers aus.

Der Ereignishandler des Service Workers überprüft den Namen des Ereignisses und ruft die entsprechende Funktion innerhalb der `waitUntil()`-Methode des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Geschichten abrufen und cachen. Die `updateNews()`-Funktion sollte relativ schnell abgeschlossen sein: Wenn der Service Worker zu lange braucht, um seine Inhalte zu aktualisieren, wird der Browser ihn stoppen.

### Abmeldung von einem periodischen Sync

Wenn die PWA keine regelmäßigen Hintergrund-Updates mehr benötigt (zum Beispiel, weil der Benutzer sie in den App-Einstellungen deaktiviert hat), sollte die PWA den Browser bitten, keine periodischen Sync-Ereignisse mehr zu generieren, indem die `unregister()`-Methode von `periodicSync` aufgerufen wird:

```js
// main.js

async function registerPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht es einer PWA, Nachrichten vom Server zu empfangen, unabhängig davon, ob die App läuft oder nicht. Wenn die Nachricht vom Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und dem Benutzer wird eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) angezeigt. Die Spezifikation erlaubt "stille Push-Nachrichten", bei denen keine Benachrichtigung angezeigt wird, aber keine Browser unterstützen dies, wegen Bedenken bezüglich der Privatsphäre (zum Beispiel, dass Push verwendet werden könnte, um den Standort eines Benutzers zu verfolgen).

Das Anzeigen einer Benachrichtigung für den Benutzer lenkt ihn von dem ab, was er tut, und kann sehr störend sein. Verwenden Sie Push-Nachrichten daher mit Bedacht. Im Allgemeinen sind sie für Situationen geeignet, in denen Sie den Benutzer über etwas informieren müssen und nicht bis zum nächsten Öffnen Ihrer App warten können.

Ein häufiger Anwendungsfall für Push-Benachrichtigungen sind Chat-Apps: Wenn ein Benutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht geliefert, und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem das Gerät sie abrufen und an die App liefern kann.

Dies bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Dienst [verschlüsselt](/de/docs/Glossary/Encryption) (damit der Push-Dienst sie nicht lesen kann) und [signiert](/de/docs/Glossary/Signature/Security) (damit der Push-Dienst weiß, dass die Nachrichten wirklich von Ihrem Server sind und nicht von jemandem, der sich als Ihr Server ausgibt) sein müssen.

Der Push-Dienst wird von dem Browseranbieter oder einem Drittanbieter betrieben, und der App-Server kommuniziert mit ihm über das [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokoll. Der App-Server kann eine Drittanbieter-Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Protokolldetails zu übernehmen.

### Abonnieren von Push-Nachrichten

Das Muster zum Abonnieren von Push-Nachrichten sieht so aus:

![Diagramm, das die Schritte zum Abonnieren von Push-Nachrichten zeigt](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem [öffentlichen/privaten Schlüsselpaar](/de/docs/Glossary/Public-key_cryptography) ausgestattet sein, damit er Push-Nachrichten signieren kann. Das Signieren von Nachrichten muss der [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02)-Spezifikation entsprechen.

2. Auf dem Gerät verwendet die App die [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe)-Methode, um Nachrichten vom Server zu abonnieren. Die `subscribe()`-Methode:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies ist das, was der Push-Dienst verwenden wird, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das auf ein [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt auflöst. Dieses Objekt umfasst:

     - Den [endpoint](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: Dies ist, wie der App-Server weiß, wohin Push-Nachrichten gesendet werden sollen.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpunkt und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel, indem sie [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) verwendet).

Danach kann der App-Server beginnen, Push-Nachrichten zu senden.

### Senden, Zustellen und Verarbeiten von Push-Nachrichten

Wenn ein Ereignis auf dem Server eintritt, das der Server von der App verarbeiten lassen möchte, kann der Server Nachrichten senden, und die Schritte sind wie folgt:

![Diagramm, das die Schritte zum Senden und Liefern von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signierungsschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpunkt für den Push-Dienst, unter Verwendung des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls und optional einer Bibliothek wie web-push.
3. Der Push-Dienst überprüft die Signatur auf der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht in die Warteschlange zur Lieferung.
4. Wenn das Gerät über Netzwerkverbindung verfügt, liefert der Push-Dienst die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht empfängt, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker, falls nötig, und löst ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) im globalen Scope des Service Workers aus. Der Ereignishandler erhält ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt, das die Nachrichtendaten enthält.
7. In seinem Ereignishandler führt der Service Worker jede Verarbeitung der Nachricht durch. Wie üblich ruft der Ereignishandler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker am Laufen zu halten.
8. In seinem Ereignishandler erstellt der Service Worker eine Benachrichtigung mit `registration.showNotification()`.
9. Wenn der Benutzer auf die Benachrichtigung klickt oder sie schließt, werden die [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) entsprechend im globalen Scope des Service Workers ausgelöst. Dadurch kann die App auf die Benutzerreaktion auf die Benachrichtigung reagieren.

## Berechtigungen und Einschränkungen

Browser müssen ein Gleichgewicht finden, bei dem sie Web-Entwicklern leistungsstarke APIs bieten können, während sie Benutzer vor schädlichen, ausbeuterischen oder schlecht geschriebenen Websites schützen. Einer der Hauptschutzmechanismen, die sie bieten, ist, dass Benutzer die Seiten der Website schließen können, und sie dann nicht mehr aktiv auf ihrem Gerät sind. Die in diesem Artikel beschriebenen APIs neigen dazu, diese Zusicherung zu verletzen, daher müssen Browser zusätzliche Schritte unternehmen, um sicherzustellen, dass Benutzer sich dessen bewusst sind und dass die APIs auf Weisen verwendet werden, die mit den Interessen der Benutzer übereinstimmen.

In diesem Abschnitt skizzieren wir diese Schritte. Mehrere dieser APIs erfordern eine explizite [Benutzerberechtigung](/de/docs/Web/API/Permissions_API) und verschiedene andere Einschränkungen und Designentscheidungen, um Benutzer zu schützen.

- Die Background Sync API benötigt keine explizite Benutzerberechtigung, aber das Erstellen einer Hintergrundsynchronisierungsanfrage kann nur erfolgen, während die Haupt-App geöffnet ist, und Browser begrenzen die Anzahl der Wiederholungsversuche und die Länge der Zeit, die Hintergrundsynchronisierungsoperationen dauern dürfen.

- Die Background Fetch API erfordert die `"background-fetch"`-Benutzerberechtigung, und der Browser zeigt den laufenden Fortschritt der Abrufoperation an und ermöglicht dem Benutzer, sie abzubrechen.

- Die Periodic Background Sync API erfordert die `"periodic-background-sync"`-Benutzerberechtigung, und Browser sollten es Benutzern ermöglichen, die periodische Hintergrundsynchronisation vollständig zu deaktivieren. Außerdem können Browser die Häufigkeit der Sync-Ereignisse mit dem Ausmaß verknüpfen, in dem der Benutzer sich entscheidet, mit der App zu interagieren, sodass eine App, die der Benutzer selten nutzt, möglicherweise wenige Ereignisse (oder gar keine Ereignisse) erhält.

- Die Push API erfordert die `"push"`-Benutzerberechtigung, und alle Browser erfordern, dass Push-Ereignisse für den Benutzer sichtbar sind, was bedeutet, dass sie eine benutzerbezogene Benachrichtigung erzeugen.

## Siehe auch

### Referenzen

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
- [Benachrichtigungen](https://web.dev/explore/notifications) auf web.dev
- [PWA mit Offline-Streaming](https://web.dev/articles/pwa-with-offline-streaming) auf web.dev (2021)
