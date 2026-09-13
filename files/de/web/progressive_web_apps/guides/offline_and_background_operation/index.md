---
title: Offline- und Hintergrundbetrieb
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 964ab8ae30c5ce0a343cc6d0f28c1b94389bae89
---

Normalerweise sind Websites sowohl von einer zuverlässigen Netzwerkverbindung als auch davon abhängig, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites schlicht nicht nutzbar, und wenn der Benutzer die Website nicht in einem Browser-Tab geöffnet hat, können die meisten Websites nichts tun.

Betrachten Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht es dem Benutzer, Musik zu streamen, während er online ist, kann aber Titel im Hintergrund herunterladen und sie anschließend weiter abspielen, während der Benutzer offline ist.
- Der Benutzer verfasst eine lange E-Mail, klickt auf „Senden“ und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald das Netzwerk wieder verfügbar ist.
- Die Chat-App des Benutzers empfängt eine Nachricht von einem seiner Kontakte und zeigt, obwohl die App nicht geöffnet ist, ein Abzeichen auf dem App-Symbol an, um den Benutzer darüber zu informieren, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die einer PWA Folgendes ermöglichen:

- Eine gute Benutzererfahrung bieten, selbst wenn das Gerät nur zeitweise über eine Netzwerkverbindung verfügt
- Ihren Zustand aktualisieren, wenn die App nicht ausgeführt wird
- Den Benutzer über wichtige Ereignisse benachrichtigen, die eingetreten sind, während die App nicht ausgeführt wurde

Die in diesem Leitfaden vorgestellten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden behandeln werden, ist der _Service Worker_. In diesem Abschnitt geben wir einige Hintergrundinformationen zu Workern und dazu, wie sie die Architektur einer Web-App verändern.

Normalerweise wird eine gesamte Website in einem einzigen Thread ausgeführt. Dies umfasst das JavaScript der Website selbst sowie die gesamte Arbeit zum Rendern der UI der Website. Eine Folge davon ist, dass die Haupt-UI der Website blockiert wird, wenn Ihr JavaScript eine lang laufende Operation ausführt, und die Website für den Benutzer nicht mehr zu reagieren scheint.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist ein spezifischer Typ von [Web Worker](/de/docs/Web/API/Web_Workers_API), der zur Implementierung von PWAs verwendet wird. Wie alle Web Worker wird ein Service Worker in einem separaten Thread vom Haupt-JavaScript-Code ausgeführt. Der Hauptcode erstellt den Worker und übergibt dabei eine URL zum Skript des Workers. Der Worker und der Hauptcode können nicht direkt auf den Zustand des jeweils anderen zugreifen, können jedoch durch das Senden von Nachrichten miteinander kommunizieren. Worker können verwendet werden, um rechenintensive Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code der App, der die UI der App implementiert, für Benutzereingaben responsiv bleiben.

Eine PWA verfügt daher immer über eine Architektur auf hoher Ebene, die aufgeteilt ist in:

- Die _Haupt-App_ mit HTML, CSS und dem Teil des JavaScript, der die UI der App implementiert, etwa durch die Verarbeitung von Benutzerereignissen
- Den _Service Worker_, der Offline- und Hintergrundaufgaben verarbeitet

Wenn wir in diesem Leitfaden Codebeispiele zeigen, kennzeichnen wir mit einem Kommentar wie `// main.js` oder `// service-worker.js`, zu welchem Teil der App der Code gehört.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht einer PWA, eine gute Benutzererfahrung zu bieten, selbst wenn das Gerät keine Netzwerkverbindung hat. Dies wird durch das Hinzufügen eines Service Workers zu einer App ermöglicht.

Ein Service Worker _steuert_ einige oder alle Seiten der App. Wenn der Service Worker installiert wird, kann er die Ressourcen vom Server für die von ihm gesteuerten Seiten abrufen, beispielsweise Seiten, Styles, Skripte und Bilder, und sie einem lokalen Cache hinzufügen. Die [`Cache`](/de/docs/Web/API/Cache)-Schnittstelle wird verwendet, um Ressourcen zum Cache hinzuzufügen. Auf `Cache`-Instanzen kann über die Eigenschaft [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) im globalen Gültigkeitsbereich des Service Workers zugegriffen werden.

Wenn die App dann eine Ressource anfordert, beispielsweise weil der Benutzer die App geöffnet oder auf einen internen Link geklickt hat, löst der Browser im globalen Gültigkeitsbereich des Service Workers ein Ereignis namens [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) aus. Indem er auf dieses Ereignis lauscht, kann der Service Worker die Anfrage abfangen.

Dem Event-Handler für das `fetch`-Ereignis wird ein [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Objekt übergeben, das:

- Zugriff auf die Anfrage als [`Request`](/de/docs/Web/API/Request)-Instanz bereitstellt
- Eine Methode [`respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) bereitstellt, um eine Antwort auf die Anfrage zu senden.

Eine Möglichkeit für einen Service Worker, Anfragen zu verarbeiten, ist eine „Cache-first“-Strategie. Bei dieser Strategie gilt:

1. Wenn die angeforderte Ressource im Cache vorhanden ist, rufen Sie die Ressource aus dem Cache ab und geben Sie sie an die App zurück.
2. Wenn die angeforderte Ressource nicht im Cache vorhanden ist, versuchen Sie, die Ressource aus dem Netzwerk abzurufen.
   1. Wenn die Ressource abgerufen werden konnte, fügen Sie sie für das nächste Mal zum Cache hinzu und geben Sie sie an die App zurück.
   2. Wenn die Ressource nicht abgerufen werden konnte, geben Sie eine Standard-Fallback-Ressource zurück.

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

Das bedeutet, dass die Web-App in vielen Situationen gut funktioniert, selbst wenn die Netzwerkverbindung zeitweise unterbrochen ist. Aus Sicht des Haupt-App-Codes ist dies vollständig transparent: Die App stellt einfach Netzwerkanfragen und erhält Antworten. Da sich der Service Worker außerdem in einem separaten Thread befindet, kann der Haupt-App-Code für Benutzereingaben responsiv bleiben, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker Caching implementieren könnte. Insbesondere prüfen wir bei einer Cache-first-Strategie den Cache vor dem Netzwerk. Das bedeutet, dass wir mit höherer Wahrscheinlichkeit schnell antworten können, ohne Netzwerkkosten zu verursachen, aber auch mit höherer Wahrscheinlichkeit eine veraltete Antwort zurückgeben.
>
> Eine Alternative wäre eine _Network-first_-Strategie, bei der wir zuerst versuchen, die Ressource vom Server abzurufen, und auf den Cache zurückgreifen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der jeweiligen Web-App und ihrer Verwendung ab.

Weitere Details zum Einrichten von Service Workern und ihrer Verwendung zum Hinzufügen von Offline-Funktionalität finden Sie in unserem [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrundbetrieb

Während Offline-Operationen die häufigste Verwendung für Service Worker sind, ermöglichen sie einer PWA auch den Betrieb, wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker ausgeführt werden kann, während die Haupt-App nicht läuft.

Das bedeutet nicht, dass Service Worker ständig laufen: Browser können Service Worker stoppen, wenn sie dies für angemessen halten. Wenn ein Service Worker beispielsweise eine Zeit lang inaktiv war, wird er gestoppt. Der Browser startet den Service Worker jedoch neu, wenn ein Ereignis eingetreten ist, um das er sich kümmern muss. Dies ermöglicht einer PWA, Hintergrundoperationen auf folgende Weise zu implementieren:

- Registrieren Sie in der Haupt-App eine Anfrage, dass der Service Worker eine bestimmte Operation ausführen soll.
- Zum passenden Zeitpunkt wird der Service Worker bei Bedarf neu gestartet und ein Ereignis im Gültigkeitsbereich des Service Workers ausgelöst.
- Der Service Worker führt die Operation aus.

In den nächsten Abschnitten behandeln wir einige verschiedene Funktionen, die dieses Muster verwenden, damit eine PWA arbeiten kann, während die Haupt-App nicht geöffnet ist.

## Hintergrundsynchronisierung

Angenommen, ein Benutzer verfasst eine E-Mail und klickt auf „Senden“. Bei einer herkömmlichen Website muss er den Tab geöffnet lassen, bis die App die E-Mail gesendet hat: Wenn er den Tab schließt oder das Gerät die Verbindung verliert, wird die Nachricht nicht gesendet. Die Hintergrundsynchronisierung, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung für dieses Problem bei PWAs.

Die Hintergrundsynchronisierung ermöglicht der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen auszuführen. Sobald das Gerät über eine Netzwerkverbindung verfügt, startet der Browser den Service Worker bei Bedarf neu und löst im Gültigkeitsbereich des Service Workers ein Ereignis namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) aus. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, versucht der Browser möglicherweise eine begrenzte Anzahl von Wiederholungen, indem er das Ereignis erneut auslöst.

### Registrieren eines Synchronisierungsereignisses

Um den Service Worker zu bitten, eine Aufgabe auszuführen, kann die Haupt-App auf [`navigator.serviceWorker.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) zugreifen, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird. Die App ruft dann `sync.register()` auf dem `ServiceWorkerRegistration`-Objekt auf, wie hier:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: in diesem Fall `"send-message"`.

### Verarbeiten eines Synchronisierungsereignisses

Sobald das Gerät über eine Netzwerkverbindung verfügt, wird das `sync`-Ereignis im Gültigkeitsbereich des Service Workers ausgelöst. Der Service Worker prüft den Namen der Aufgabe und führt die passende Funktion aus, in diesem Fall `sendMessage()`:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag === "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der Funktion `sendMessage()` an die Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses übergeben. Die Methode `waitUntil()` akzeptiert ein {{jsxref("Promise")}} als Parameter und fordert den Browser auf, den Service Worker nicht zu stoppen, bis das Promise abgeschlossen ist. Auf diese Weise weiß der Browser auch, ob die Operation erfolgreich war: Wenn das Promise abgelehnt wird, kann der Browser die Operation erneut versuchen, indem er das `sync`-Ereignis wieder auslöst.

Die Methode `waitUntil()` ist keine Garantie dafür, dass der Browser den Service Worker nicht stoppt: Wenn die Operation zu lange dauert, wird der Service Worker dennoch gestoppt. Geschieht dies, wird die Operation abgebrochen. Wenn das nächste Mal ein `sync`-Ereignis ausgelöst wird, läuft der Handler erneut von Anfang an – er setzt nicht an der Stelle fort, an der er aufgehört hat.

Wie lange „zu lange“ ist, hängt vom Browser ab. Bei Chrome wird der Service Worker wahrscheinlich geschlossen, wenn:

- Er 30 Sekunden lang inaktiv war
- Er 30 Sekunden lang synchrones JavaScript ausgeführt hat
- Das an `waitUntil()` übergebene Promise mehr als 5 Minuten für den Abschluss benötigt hat

## Hintergrundabruf

Die Hintergrundsynchronisierung ist für relativ kurze Hintergrundoperationen nützlich. Wie wir jedoch gerade gesehen haben, stoppt der Browser den Service Worker, wenn dieser die Verarbeitung eines Synchronisierungsereignisses nicht in relativ kurzer Zeit abschließt. Dies ist eine beabsichtigte Maßnahme, um die Akkulaufzeit zu schonen und die Privatsphäre des Benutzers zu schützen, indem die Zeit minimiert wird, in der die IP-Adresse des Benutzers dem Server ausgesetzt ist, während die App im Hintergrund läuft.

Dadurch ist die Hintergrundsynchronisierung für längere Operationen ungeeignet – etwa für das Herunterladen eines Films. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit Background Fetch können Netzwerkanfragen ausgeführt werden, während sowohl die Haupt-App-UI als auch der Service Worker geschlossen sind.

Bei Background Fetch gilt:

- Die Anfrage wird über die Haupt-App-UI gestartet.
- Unabhängig davon, ob die Haupt-App geöffnet ist, zeigt der Browser ein dauerhaftes UI-Element an, das den Benutzer über die laufende Anfrage informiert und ihm ermöglicht, sie abzubrechen oder ihren Fortschritt zu prüfen.
- Wenn die Anfrage erfolgreich oder mit einem Fehler abgeschlossen wurde oder der Benutzer darum gebeten hat, den Fortschritt der Anfrage zu prüfen, startet der Browser den Service Worker bei Bedarf und löst das entsprechende Ereignis im Gültigkeitsbereich des Service Workers aus.

### Stellen einer Background-Fetch-Anfrage

Eine Background-Fetch-Anfrage wird im Haupt-App-Code initiiert, indem [`backgroundFetch.fetch()`](/de/docs/Web/API/BackgroundFetchManager/fetch) auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, wie hier:

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

1. Einen Bezeichner für diese Fetch-Anfrage
2. Ein Array von [`Request`](/de/docs/Web/API/Request)-Objekten oder URLs. Eine einzelne Background-Fetch-Anfrage kann mehrere Netzwerkanfragen umfassen.
3. Ein Objekt, das Daten für die UI enthält, die der Browser verwendet, um das Vorhandensein und den Fortschritt der Anfrage anzuzeigen.

Der Aufruf `backgroundFetch.fetch()` gibt ein {{jsxref("Promise")}} zurück, das zu einem [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt aufgelöst wird. Dadurch kann die Haupt-App ihre eigene UI aktualisieren, während die Anfrage fortschreitet. Wenn die Haupt-App jedoch geschlossen wird, wird der Abruf im Hintergrund fortgesetzt.

Der Browser zeigt ein dauerhaftes UI-Element an, das den Benutzer daran erinnert, dass die Anfrage noch läuft, ihm die Möglichkeit gibt, mehr über die Anfrage zu erfahren und sie bei Bedarf abzubrechen. Die UI enthält ein Symbol und einen Titel aus den Argumenten `icons` und `title` und verwendet `downloadTotal` als Schätzung der gesamten Downloadgröße, um den Fortschritt der Anfrage anzuzeigen.

### Verarbeiten von Anfrageergebnissen

Wenn der Abruf erfolgreich oder mit einem Fehler beendet wurde oder der Benutzer auf die Fortschritts-UI geklickt hat, startet der Browser bei Bedarf den Service Worker der App und löst ein Ereignis im Gültigkeitsbereich des Service Workers aus. Die folgenden Ereignisse können ausgelöst werden:

- `backgroundfetchsuccess`: Alle Anfragen waren erfolgreich.
- `backgroundfetchfail`: Mindestens eine Anfrage ist fehlgeschlagen.
- `backgroundfetchabort`: Der Abruf wurde vom Benutzer oder von der Haupt-App abgebrochen.
- `backgroundfetchclick`: Der Benutzer hat auf das Fortschritts-UI-Element geklickt, das der Browser anzeigt.

#### Abrufen von Antwortdaten

In den Handlern für die Ereignisse `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` kann der Service Worker die Anfrage- und Antwortdaten abrufen.

Um die Antwort abzurufen, greift der Event-Handler auf die Eigenschaft [`registration`](/de/docs/Web/API/BackgroundFetchEvent/registration) des Ereignisses zu. Dies ist ein [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Objekt, das die Methoden [`matchAll()`](/de/docs/Web/API/BackgroundFetchRegistration/matchAll) und [`match()`](/de/docs/Web/API/BackgroundFetchRegistration/match) besitzt. Diese geben [`BackgroundFetchRecord`](/de/docs/Web/API/BackgroundFetchRecord)-Objekte zurück, die der angegebenen URL entsprechen, oder bei `matchAll()` alle Datensätze, wenn keine URL angegeben ist.

Jeder `BackgroundFetchRecord` besitzt eine Eigenschaft [`responseReady`](/de/docs/Web/API/BackgroundFetchRecord/responseReady), die ein `Promise` ist und mit der [`Response`](/de/docs/Web/API/Response) aufgelöst wird, sobald die Antwort verfügbar ist.

Um also auf Antwortdaten zuzugreifen, könnte der Handler beispielsweise Folgendes tun:

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

Da die Antwortdaten nach dem Beenden des Handlers nicht mehr verfügbar sind, sollte der Handler die Daten speichern, beispielsweise im [`Cache`](/de/docs/Web/API/Cache), wenn die App sie weiterhin benötigt.

#### Aktualisieren der Browser-UI

Das an `backgroundfetchsuccess` und `backgroundfetchfail` übergebene Ereignisobjekt besitzt außerdem eine Methode [`updateUI()`](/de/docs/Web/API/BackgroundFetchUpdateUIEvent/updateUI), die verwendet werden kann, um die UI zu aktualisieren, die der Browser anzeigt, um den Benutzer über die Fetch-Operation auf dem Laufenden zu halten. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

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

#### Reagieren auf Benutzerinteraktion

Das Ereignis `backgroundfetchclick` wird ausgelöst, wenn der Benutzer auf das UI-Element klickt, das der Browser anzeigt, während der Abruf noch läuft.

Die erwartete Reaktion besteht darin, ein Fenster zu öffnen, das dem Benutzer weitere Informationen zur Fetch-Operation bietet. Dies kann vom Service Worker mit [`clients.openWindow()`](/de/docs/Web/API/Clients/openWindow) erfolgen. Beispiel:

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

## Periodische Hintergrundsynchronisierung

Die [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht einer PWA, ihre Daten im Hintergrund regelmäßig zu aktualisieren, während die Haupt-App geschlossen ist.

Dies kann die Offline-Erfahrung einer PWA erheblich verbessern. Betrachten Sie eine App, die von einigermaßen aktuellen Inhalten abhängt, etwa eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, sind die Artikel selbst bei Service-Worker-basiertem Caching nur so aktuell wie beim letzten Öffnen der App. Mit periodischer Hintergrundsynchronisierung könnte die App ihre Artikel im Hintergrund aktualisiert haben, als das Gerät über eine Verbindung verfügte, und könnte dem Benutzer daher relativ aktuelle Inhalte anzeigen.

Dies nutzt die Tatsache, dass die Verbindung insbesondere auf Mobilgeräten weniger schlecht als vielmehr _zeitweise_ ist: Indem die App die Zeiträume nutzt, in denen das Gerät über eine Verbindung verfügt, kann sie Verbindungslücken überbrücken.

### Registrieren eines periodischen Synchronisierungsereignisses

Der Code zum Registrieren eines periodischen Synchronisierungsereignisses folgt demselben Muster wie beim [Registrieren eines Synchronisierungsereignisses](#registrieren_eines_synchronisierungsereignisses). Die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) besitzt eine Eigenschaft [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync), die eine Methode [`register()`](/de/docs/Web/API/PeriodicSyncManager/register) hat, welche den Namen der periodischen Synchronisierung als Parameter akzeptiert.

`periodicSync.register()` akzeptiert jedoch ein zusätzliches Argument: ein Objekt mit einer Eigenschaft `minInterval`. Diese stellt das Mindestintervall in Millisekunden zwischen Synchronisierungsversuchen dar:

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

### Verarbeiten eines periodischen Synchronisierungsereignisses

Obwohl die PWA im Aufruf von `register()` ein bestimmtes Intervall anfordert, entscheidet der Browser, wie häufig periodische Synchronisierungsereignisse erzeugt werden. Apps, die Benutzer häufig öffnen und mit denen sie häufig interagieren, erhalten mit größerer Wahrscheinlichkeit periodische Synchronisierungsereignisse und erhalten diese häufiger als Apps, mit denen Benutzer selten oder nie interagieren.

Wenn der Browser entschieden hat, ein periodisches Synchronisierungsereignis zu erzeugen, ist das Muster wie folgt: Er startet bei Bedarf den Service Worker und löst im globalen Gültigkeitsbereich des Service Workers ein [`periodicSync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Ereignis aus.

Der Event-Handler des Service Workers prüft den Namen des Ereignisses und ruft die passende Funktion innerhalb der Methode [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) des Ereignisses auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Artikel abrufen und zwischenspeichern. Die Funktion `updateNews()` sollte relativ schnell abgeschlossen werden: Wenn der Service Worker zu lange benötigt, um seine Inhalte zu aktualisieren, stoppt der Browser ihn.

### Abmelden einer periodischen Synchronisierung

Wenn die PWA keine regelmäßigen Hintergrundaktualisierungen mehr benötigt, beispielsweise weil der Benutzer sie in den Einstellungen der App deaktiviert hat, sollte die PWA den Browser bitten, keine periodischen Synchronisierungsereignisse mehr zu erzeugen. Dazu ruft sie die Methode [`unregister()`](/de/docs/Web/API/PeriodicSyncManager/unregister) von [`periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) auf:

```js
// main.js

async function unregisterPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push API](/de/docs/Web/API/Push_API) ermöglicht einer PWA, vom Server übermittelte Nachrichten zu empfangen, unabhängig davon, ob die App ausgeführt wird oder nicht. Wenn die Nachricht vom Gerät empfangen wird, wird der Service Worker der App gestartet und verarbeitet die Nachricht. Anschließend wird dem Benutzer eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) angezeigt. Die Spezifikation erlaubt „Silent Push“, bei dem keine Benachrichtigung angezeigt wird. Dies wird jedoch von keinem Browser unterstützt, da es Datenschutzbedenken gibt, etwa dass Push dann zum Nachverfolgen des Standorts eines Benutzers verwendet werden könnte.

Eine Benachrichtigung für den Benutzer anzuzeigen, lenkt ihn von seiner aktuellen Tätigkeit ab und kann sehr störend sein. Verwenden Sie Push-Nachrichten daher mit Bedacht. Im Allgemeinen eignen sie sich für Situationen, in denen Sie den Benutzer auf etwas aufmerksam machen müssen und nicht warten können, bis er Ihre App das nächste Mal öffnet.

Ein häufiger Anwendungsfall für Push-Benachrichtigungen sind Chat-Apps: Wenn der Benutzer eine Nachricht von einem seiner Kontakte empfängt, wird sie als Push-Nachricht zugestellt und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem das Gerät sie abrufen und an die App zustellen kann.

Das bedeutet auch, dass Nachrichten von Ihrem Server an den Push-Dienst {{Glossary("Encryption", "verschlüsselt")}} sein müssen, damit der Push-Dienst sie nicht lesen kann, und {{Glossary("Signature/Security", "signiert")}}, damit der Push-Dienst weiß, dass die Nachrichten tatsächlich von Ihrem Server stammen und nicht von jemandem, der sich als Ihr Server ausgibt.

Der Push-Dienst wird vom Browser-Anbieter oder von einem Drittanbieter betrieben, und der App-Server kommuniziert mit ihm über das Protokoll [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030). Der App-Server kann eine Drittanbieterbibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Protokolldetails zu übernehmen.

### Push-Nachrichten abonnieren

Das Muster zum Abonnieren von Push-Nachrichten sieht wie folgt aus:

![Diagramm mit Schritten zum Abonnieren von Push-Nachrichten](push-messaging-1.svg)

1. Voraussetzung ist, dass der App-Server mit einem {{Glossary("Public-key_cryptography", "öffentlichen/privaten Schlüsselpaar")}} ausgestattet sein muss, damit er Push-Nachrichten signieren kann. Das Signieren von Nachrichten muss der Spezifikation [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02) entsprechen.

2. Auf dem Gerät verwendet die App die Methode [`PushManager.subscribe()`](/de/docs/Web/API/PushManager/subscribe), um Nachrichten vom Server zu abonnieren. Die Methode `subscribe()`:
   - Akzeptiert den öffentlichen Schlüssel des App-Servers als Argument: Dieser wird vom Push-Dienst verwendet, um die Signatur von Nachrichten des App-Servers zu überprüfen.

   - Gibt ein `Promise` zurück, das zu einem [`PushSubscription`](/de/docs/Web/API/PushSubscription)-Objekt aufgelöst wird. Dieses Objekt enthält:
     - Den [Endpoint](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: So weiß der App-Server, wohin Push-Nachrichten gesendet werden müssen.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwendet, um Nachrichten für den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpoint und den öffentlichen Verschlüsselungsschlüssel an Ihren Server, beispielsweise mit [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch).

Danach kann der App-Server beginnen, Push-Nachrichten zu senden.

### Senden, Zustellen und Verarbeiten von Push-Nachrichten

Wenn auf dem Server ein Ereignis eintritt, das der Server von der App verarbeiten lassen möchte, kann der Server Nachrichten senden. Die Reihenfolge der Schritte ist wie folgt:

![Diagramm mit Schritten zum Senden und Zustellen von Push-Nachrichten](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht über das Protokoll [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030) an den Endpoint des Push-Dienstes, wiederum optional mithilfe einer Bibliothek wie web-push.
3. Der Push-Dienst prüft die Signatur der Nachricht. Wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht zur Zustellung in eine Warteschlange.
4. Wenn das Gerät über eine Netzwerkverbindung verfügt, stellt der Push-Dienst die verschlüsselte Nachricht an den Browser zu.
5. Wenn der Browser die verschlüsselte Nachricht empfängt, entschlüsselt er sie.
6. Der Browser startet bei Bedarf den Service Worker und löst im globalen Gültigkeitsbereich des Service Workers ein Ereignis namens [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event) aus. Dem Event-Handler wird ein [`PushEvent`](/de/docs/Web/API/PushEvent)-Objekt übergeben, das die Nachrichtendaten enthält.
7. In seinem Event-Handler verarbeitet der Service Worker die Nachricht nach Bedarf. Wie üblich ruft der Event-Handler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker weiter auszuführen.
8. In seinem Event-Handler erstellt der Service Worker mit [`registration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification) eine Benachrichtigung.
9. Wenn der Benutzer auf die Benachrichtigung klickt oder sie schließt, werden im globalen Gültigkeitsbereich des Service Workers jeweils [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event) und [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event) ausgelöst. Diese ermöglichen der App, die Reaktion des Benutzers auf die Benachrichtigung zu verarbeiten.

## Berechtigungen und Einschränkungen

Browser müssen ein Gleichgewicht finden, bei dem sie Webentwicklern leistungsstarke APIs bereitstellen und gleichzeitig Benutzer vor bösartigen, ausbeuterischen oder schlecht geschriebenen Websites schützen können. Einer der wichtigsten Schutzmechanismen besteht darin, dass Benutzer die Seiten der Website schließen können und diese dann nicht mehr auf ihrem Gerät aktiv ist. Die in diesem Artikel beschriebenen APIs verletzen diese Zusicherung tendenziell. Daher müssen Browser zusätzliche Maßnahmen ergreifen, um sicherzustellen, dass Benutzer sich dessen bewusst sind und dass die APIs auf eine Weise verwendet werden, die den Interessen der Benutzer entspricht.

In diesem Abschnitt skizzieren wir diese Maßnahmen. Mehrere dieser APIs erfordern eine ausdrückliche [Benutzerberechtigung](/de/docs/Web/API/Permissions_API), außerdem gibt es verschiedene weitere Einschränkungen und Designentscheidungen zum Schutz der Benutzer.

- Die Background Sync API benötigt keine ausdrückliche Benutzerberechtigung, aber eine Background-Sync-Anfrage darf nur gestellt werden, während die Haupt-App geöffnet ist. Browser begrenzen außerdem die Anzahl der Wiederholungen und die Dauer von Background-Sync-Operationen.

- Die Background Fetch API erfordert die Benutzerberechtigung `"background-fetch"`, und der Browser zeigt den laufenden Fortschritt der Fetch-Operation an, sodass der Benutzer sie abbrechen kann.

- Die Periodic Background Sync API erfordert die Benutzerberechtigung `"periodic-background-sync"`, und Browser sollten Benutzern ermöglichen, die periodische Hintergrundsynchronisierung vollständig zu deaktivieren. Darüber hinaus können Browser die Häufigkeit von Synchronisierungsereignissen daran koppeln, wie stark der Benutzer mit der App interagiert: Eine App, die der Benutzer selten verwendet, erhält möglicherweise nur wenige oder gar keine Ereignisse.

- Die Push API erfordert die Benutzerberechtigung `"push"`, und alle Browser verlangen, dass Push-Ereignisse für den Benutzer sichtbar sind, also eine für den Benutzer sichtbare Benachrichtigung erzeugen.

## Siehe auch

### Referenz

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

### Leitfäden

- [Einführung in Background Sync](https://developer.chrome.com/blog/background-sync/) auf developer.chrome.com (2017)
- [Einführung in Background Fetch](https://developer.chrome.com/blog/background-fetch/) auf developer.chrome.com (2022)
- [Die Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync) auf developer.chrome.com (2020)
- [Benachrichtigungen](https://web.dev/explore/notifications) auf web.dev
- [PWA mit Offline-Streaming](https://web.dev/articles/pwa-with-offline-streaming) auf web.dev (2021)
