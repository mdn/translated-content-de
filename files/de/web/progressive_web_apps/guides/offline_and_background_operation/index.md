---
title: Offline- und Hintergrund-Operation
slug: Web/Progressive_web_apps/Guides/Offline_and_background_operation
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{PWASidebar}}

Normalerweise sind Websites sowohl sehr abhängig von einer zuverlässigen Netzwerkverbindung als auch davon, dass der Benutzer ihre Seiten in einem Browser geöffnet hat. Ohne Netzwerkverbindung sind die meisten Websites einfach unbenutzbar, und wenn der Benutzer die Seite nicht in einem Browsertab geöffnet hat, sind die meisten Websites nicht in der Lage, etwas zu tun.

Betrachten Sie jedoch die folgenden Szenarien:

- Eine Musik-App ermöglicht es dem Benutzer, Musik während der Online-Verbindung zu streamen, kann aber Tracks im Hintergrund herunterladen und dann weiter abspielen, während der Benutzer offline ist.
- Der Benutzer schreibt eine lange E-Mail, drückt "Senden" und verliert dann die Netzwerkverbindung. Das Gerät sendet die E-Mail im Hintergrund, sobald die Netzwerkverbindung wieder verfügbar ist.
- Die Chat-App des Benutzers erhält eine Nachricht von einem ihrer Kontakte, und obwohl die App nicht geöffnet ist, wird ein Abzeichen auf dem App-Symbol angezeigt, um den Benutzer darüber zu informieren, dass er eine neue Nachricht hat.

Dies sind die Arten von Funktionen, die Benutzer von installierten Apps erwarten. In diesem Leitfaden stellen wir eine Reihe von Technologien vor, die es einer PWA ermöglichen:

- Eine gute Benutzererfahrung zu bieten, auch wenn das Gerät nur eine intermittierende Netzwerkverbindung hat
- Ihren Status zu aktualisieren, wenn die App nicht ausgeführt wird
- Den Benutzer über wichtige Ereignisse zu informieren, die eingetreten sind, während die App nicht ausgeführt wurde

Die in diesem Leitfaden eingeführten Technologien sind:

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

## Websites und Worker

Die Grundlage aller Technologien, die wir in diesem Leitfaden diskutieren werden, ist der _Service Worker_. In diesem Abschnitt geben wir einen kleinen Hintergrund über Worker und wie sie die Architektur einer Web-App verändern.

Normalerweise läuft eine gesamte Website in einem einzigen Thread. Dazu gehört das eigene JavaScript der Website und die gesamte Arbeit zur Darstellung der Benutzeroberfläche der Website. Eine Folge davon ist, dass, wenn Ihr JavaScript eine lang andauernde Operation durchführt, die Hauptbenutzeroberfläche der Website blockiert wird und die Website für den Benutzer nicht mehr reagiert.

Ein [Service Worker](/de/docs/Web/API/Service_Worker_API) ist eine spezielle Art von [Web Worker](/de/docs/Web/API/Web_Workers_API), die zur Implementierung von PWAs verwendet wird. Wie alle Web Worker läuft ein Service Worker in einem separaten Thread zum Haupt-JavaScript-Code. Der Hauptcode erstellt den Worker und übergibt eine URL zum Skript des Workers. Der Worker und der Hauptcode können nicht direkt aufeinander zugreifen, aber sie können miteinander kommunizieren, indem sie sich Nachrichten senden. Worker können verwendet werden, um rechenintensive Aufgaben im Hintergrund auszuführen: Da sie in einem separaten Thread laufen, kann der Haupt-JavaScript-Code in der App, der die Benutzeroberfläche der App implementiert, für den Benutzer reaktionsfähig bleiben.

Eine PWA hat also immer eine Architektur auf hohem Niveau, die sich aufteilt in:

- Die _Haupt-App_, mit dem HTML, CSS und dem Teil des JavaScripts, der die Benutzeroberfläche der App implementiert (indem er Benutzerevents verarbeitet, zum Beispiel)
- Den _Service Worker_, der Offline- und Hintergrundaufgaben bearbeitet

In diesem Leitfaden, wenn wir Codebeispiele zeigen, werden wir angeben, zu welchem Teil der App der Code gehört, mit einem Kommentar wie `// main.js` oder `// service-worker.js`.

## Offline-Betrieb

Der Offline-Betrieb ermöglicht es einer PWA, eine gute Benutzererfahrung zu bieten, auch wenn das Gerät keine Netzwerkverbindung hat. Dies wird durch die Hinzufügung eines Service Workers zu einer App ermöglicht.

Ein Service Worker _kontrolliert_ einige oder alle Seiten der App. Wenn der Service Worker installiert ist, kann er die Ressourcen für die von ihm kontrollierten Seiten (einschließlich Seiten, Stile, Skripte und Bilder, zum Beispiel) vom Server abrufen und in einem lokalen Cache hinzufügen. Das {{domxref("Cache")}}-Interface wird verwendet, um Ressourcen zum Cache hinzuzufügen. `Cache`-Instanzen sind durch die {{domxref("WorkerGlobalScope.caches")}}-Eigenschaft im globalen Scope des Service Workers zugänglich.

Dann, wann immer die App eine Ressource anfordert (z. B., weil der Benutzer die App öffnete oder einen internen Link klickte), löst der Browser ein Event namens {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} im globalen Scope des Service Workers aus. Indem der Service Worker auf dieses Event hört, kann er die Anfrage abfangen.

Der Event-Handler für das `fetch`-Event wird mit einem {{domxref("FetchEvent")}}-Objekt übergeben, das:

- Zugriff auf die Anfrage als eine {{domxref("Request")}}-Instanz bietet
- Eine {{domxref("FetchEvent.respondWith", "respondWith()")}}-Methode bereitstellt, um eine Antwort auf die Anfrage zu senden.

Eine Möglichkeit, wie ein Service Worker Anfragen bearbeiten kann, ist eine "Cache-First"-Strategie. In dieser Strategie:

1. Wenn die angeforderte Ressource im Cache existiert, holen Sie die Ressource aus dem Cache und liefern Sie sie an die App zurück.
2. Wenn die angeforderte Ressource nicht im Cache existiert, versuchen Sie, die Ressource aus dem Netzwerk abzurufen.
   1. Wenn die Ressource abgerufen werden konnte, fügen Sie die Ressource dem Cache für das nächste Mal hinzu und liefern Sie sie an die App zurück.
   2. Wenn die Ressource nicht abgerufen werden konnte, liefern Sie eine Standard-Reserveressource zurück.

Das folgende Codebeispiel zeigt eine Implementierung davon:

```js
// service-worker.js

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
  // Versuchen Sie zuerst, die Ressource aus dem Cache zu holen.
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Wenn die Antwort nicht im Cache gefunden wurde,
  // versuchen Sie, die Ressource aus dem Netzwerk zu holen.
  try {
    const responseFromNetwork = await fetch(request);
    // Wenn die Netzwerkabfrage erfolgreich war, klonen Sie die Antwort:
    // - Legen Sie eine Kopie in den Cache, für das nächste Mal
    // - Geben Sie das Original an die App zurück
    // Klonen ist notwendig, da eine Antwort nur einmal verzehrt werden kann.
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    // Wenn die Netzwerkabfrage fehlgeschlagen ist,
    // holen Sie die Reservenantwort aus dem Cache.
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // Wenn nicht einmal die Reservenantwort verfügbar ist,
    // können wir nichts tun, aber wir müssen
    // immer ein Response-Objekt zurückgeben.
    return new Response("Ein Netzwerkfehler ist aufgetreten", {
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

Dies bedeutet, dass in vielen Situationen die Web-App gut funktioniert, selbst wenn die Netzwerkverbindung intermittierend ist. Aus Sicht des Haupt-App-Codes ist dies vollkommen transparent: Die App führt einfach Netzwerkanfragen durch und erhält Antworten. Auch, weil der Service Worker in einem separaten Thread ist, kann der Haupt-App-Code reaktionsfähig auf Benutzereingaben bleiben, während Ressourcen abgerufen und zwischengespeichert werden.

> [!NOTE]
> Die hier beschriebene Strategie ist nur eine Möglichkeit, wie ein Service Worker das Caching implementieren könnte. Insbesondere bei einer Cache-First-Strategie überprüfen wir zuerst den Cache vor dem Netzwerk, was bedeutet, dass wir eher eine schnelle Antwort erhalten, ohne Netzwerk-Kosten zu verursachen, aber eher eine veraltete Antwort zurückgeben.
>
> Eine Alternative wäre eine _Network-First_-Strategie, bei der wir zuerst versuchen, die Ressource vom Server abzurufen, und auf den Cache zurückfallen, wenn das Gerät offline ist.
>
> Die optimale Caching-Strategie hängt von der spezifischen Web-App und ihrer Nutzung ab.

Für wesentlich mehr Details über das Einrichten von Service Workern und deren Nutzung zur Hinzufügung von Offline-Funktionalität, siehe unseren [Leitfaden zur Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Hintergrund-Betrieb

Obwohl Offline-Operationen die häufigste Verwendung für Service Worker sind, ermöglichen sie auch einer PWA, zu arbeiten, selbst wenn die Haupt-App geschlossen ist. Dies ist möglich, weil der Service Worker laufen kann, während die Haupt-App nicht ausgeführt wird.

Das bedeutet nicht, dass Service Worker die ganze Zeit laufen: Browser können Service Worker anhalten, wenn sie es für angebracht halten. Beispielsweise, wenn ein Service Worker eine Weile inaktiv war, wird er angehalten. Der Browser startet den Service Worker jedoch neu, wenn ein Ereignis eingetreten ist, das es zu bearbeiten gilt. Dies ermöglicht es einer PWA, Hintergrundoperationen auf folgende Weise zu implementieren:

- In der Haupt-App registrieren Sie eine Anfrage, dass der Service Worker eine bestimmte Operation ausführt
- Zum passenden Zeitpunkt wird der Service Worker neu gestartet, falls erforderlich, und ein Event wird im Scope des Service Workers ausgelöst
- Der Service Worker führt die Operation aus

In den nächsten Abschnitten werden wir einige verschiedene Funktionen besprechen, die dieses Muster verwenden, um es einer PWA zu ermöglichen, zu funktionieren, während die Haupt-App nicht geöffnet ist.

## Background-Synchronisation

Nehmen wir an, ein Benutzer verfasst eine E-Mail und drückt "Senden". Auf einer herkömmlichen Website muss der Tab geöffnet bleiben, bis die App die E-Mail gesendet hat: Wenn der Tab geschlossen wird oder das Gerät die Verbindung verliert, wird die Nachricht nicht gesendet. Hintergrund-Synchronisation, definiert in der [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API), ist die Lösung für dieses Problem bei PWAs.

Hintergrund-Synchronisation ermöglicht der App, ihren Service Worker zu bitten, eine Aufgabe in ihrem Namen durchzuführen. Sobald das Gerät eine Netzwerkverbindung hat, wird der Browser den Service Worker neu starten, falls erforderlich, und ein Event namens [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) im Scope des Service Workers auslösen. Der Service Worker kann dann versuchen, die Aufgabe auszuführen. Wenn die Aufgabe nicht abgeschlossen werden kann, kann der Browser die Aufgabe möglicherweise eine begrenzte Anzahl von Malen erneut versuchen, indem er das Event erneut auslöst.

### Registrierung eines Synchronisationsereignisses

Um den Service Worker zur Durchführung einer Aufgabe zu bitten, kann die Haupt-App auf {{domxref("ServiceWorkerContainer/ready", "navigator.serviceWorker.ready")}} zugreifen, das mit einem {{domxref("ServiceWorkerRegistration")}}-Objekt aufgelöst wird. Die App ruft dann {{domxref("SyncManager/register", "sync.register()")}} auf dem `ServiceWorkerRegistration`-Objekt auf, wie folgt:

```js
// main.js

async function registerSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.sync.register("send-message");
}
```

Beachten Sie, dass die App einen Namen für die Aufgabe übergibt: `"send-message"` in diesem Fall.

### Umgang mit einem Synchronisationsereignis

Sobald das Gerät Netzwerkverbindung hat, wird das `sync`-Event im Scope des Service Workers ausgelöst. Der Service Worker prüft den Namen der Aufgabe und führt die entsprechende Funktion `sendMessage()` aus:

```js
// service-worker.js

self.addEventListener("sync", (event) => {
  if (event.tag == "send-message") {
    event.waitUntil(sendMessage());
  }
});
```

Beachten Sie, dass wir das Ergebnis der `sendMessage()`-Funktion in die {{domxref("ExtendableEvent/waitUntil", "waitUntil()")}}-Methode des Events übergeben. Die `waitUntil()`-Methode nimmt ein {{jsxref("Promise")}} als Parameter an und bittet den Browser, den Service Worker nicht zu stoppen, bis das Promise beendet ist. Dies ist auch, wie der Browser weiß, ob die Operation erfolgreich war oder nicht: Wenn das Promise abgelehnt wird, kann der Browser das `sync`-Event erneut auslösen.

Die `waitUntil()`-Methode ist keine Garantie dafür, dass der Browser den Service Worker nicht stoppt: Wenn die Operation zu lange dauert, wird der Service Worker dennoch gestoppt. Wenn dies passiert, wird die Operation abgebrochen, und beim nächsten Auslösen eines `sync`-Events wird der Handler erneut von Anfang an ausgeführt - er wird nicht dort fortgesetzt, wo er aufgehört hat.

Wie lang "zu lang" ist, ist browser-spezifisch. Für Chrome ist es wahrscheinlich, dass der Service Worker geschlossen wird, wenn:

- Er 30 Sekunden inaktiv war
- Er 30 Sekunden lang synchronen JavaScript-Code ausgeführt hat
- Das Promise, das an `waitUntil()` übergeben wurde, mehr als 5 Minuten benötigt hat, um beendet zu werden

## Hintergrundabruf

Die Hintergrund-Synchronisation ist nützlich für relativ kurze Hintergrundoperationen, aber wie wir gerade gesehen haben: Wenn ein Service Worker nicht in relativ kurzer Zeit mit der Bearbeitung eines Sync-Events fertig wird, wird der Browser den Service Worker stoppen. Dies ist eine absichtliche Maßnahme, um die Akkulaufzeit zu verlängern und die Privatsphäre des Benutzers zu schützen, indem die Zeit minimiert wird, in der die IP-Adresse des Benutzers dem Server ausgesetzt ist, während die App im Hintergrund läuft.

Dies macht die Hintergrund-Synchronisation ungeeignet für längere Operationen - wie das Herunterladen eines Films, zum Beispiel. Für dieses Szenario benötigen Sie die [Background Fetch API](/de/docs/Web/API/Background_Fetch_API). Mit dem Hintergrundabruf können Netzwerkanfragen ausgeführt werden, während sowohl die Haupt-App-Benutzeroberfläche als auch der Service Worker geschlossen sind.

Mit dem Hintergrundabruf:

- Die Anforderung wird von der Haupt-App-Benutzeroberfläche aus initiiert
- Unabhängig davon, ob die Haupt-App geöffnet ist oder nicht, zeigt der Browser ein dauerhaftes UI-Element an, das den Benutzer über die laufende Anforderung informiert und es ihm ermöglicht, diese abzubrechen oder ihren Fortschritt zu überprüfen
- Wenn die Anforderung mit Erfolg oder Fehler abgeschlossen ist, oder der Benutzer gebeten hat, den Fortschritt der Anforderung zu überprüfen, startet der Browser den Service Worker (falls erforderlich) und löst das passende Event im Scope des Service Workers aus.

### Einen Hintergrundabruf anfordern

Eine Hintergrundabrufanfrage wird im Haupt-App-Code initiiert, indem {{domxref("BackgroundFetchManager/fetch", "backgroundFetch.fetch()")}} auf dem `ServiceWorkerRegistration`-Objekt aufgerufen wird, wie folgt:

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
2. Ein Array von {{domxref("Request")}}-Objekten oder URLs. Eine einzige Hintergrundabrufanforderung kann mehrere Netzwerkabrufe beinhalten.
3. Ein Objekt, das Daten für die Benutzeroberfläche enthält, die der Browser verwendet, um die Existenz und den Fortschritt der Anforderung anzuzeigen.

Der `backgroundFetch.fetch()`-Aufruf liefert ein {{jsxref("Promise")}}, das zu einem {{domxref("BackgroundFetchRegistration")}}-Objekt aufgelöst wird. Dies ermöglicht es der Haupt-App, ihre eigene Benutzeroberfläche zu aktualisieren, während die Anforderung fortschreitet. Wenn die Haupt-App jedoch geschlossen ist, wird der Abruf im Hintergrund fortgesetzt.

Der Browser zeigt ein dauerhaftes UI-Element an, das den Benutzer daran erinnert, dass die Anforderung noch läuft, und ihm die Möglichkeit gibt, mehr über die Anforderung herauszufinden und sie bei Bedarf abzubrechen. Die Benutzeroberfläche enthält ein Symbol und einen Titel, die aus den Argumenten `icons` und `title` stammen, und verwendet `downloadTotal` als Schätzung der gesamten Downloadgröße, um den Fortschritt der Anforderung anzuzeigen.

### Umgang mit Anforderungsresultaten

Wenn der Abruf erfolgreich oder fehlerhaft abgeschlossen ist oder der Benutzer auf die Fortschritts-Benutzeroberfläche geklickt hat, startet der Browser den Service Worker der App, wenn erforderlich, und löst ein Event im Scope des Service Workers aus. Die folgenden Events können ausgelöst werden:

- `backgroundfetchsuccess`: alle Anfragen waren erfolgreich
- `backgroundfetchfail`: mindestens eine Anfrage ist fehlgeschlagen
- `backgroundfetchabort`: der Abruf wurde vom Benutzer oder von der Haupt-App abgebrochen
- `backgroundfetchclick`: der Benutzer hat auf das UI-Element geklickt, das der Browser während des Abrufs zeigt

#### Zugriff auf Antwortdaten

In den Handlungen für die Events `backgroundfetchsuccess`, `backgroundfetchfail` und `backgroundfetchabort` kann der Service Worker die Anfrage- und Antwortdaten abrufen.

Um die Antwort zu erhalten, greift der Event-Handler auf die {{domxref("BackgroundFetchEvent/registration", "registration")}}-Eigenschaft des Events zu. Dies ist ein {{domxref("BackgroundFetchRegistration")}}-Objekt, das {{domxref("BackgroundFetchRegistration/matchAll", "matchAll()")}}- und {{domxref("BackgroundFetchRegistration/match", "match()")}}-Methoden hat, die {{domxref("BackgroundFetchRecord")}}-Objekte zurückgeben, die mit der gegebenen URL übereinstimmen (oder im Fall von `matchAll()` alle Datensätze, wenn keine URL angegeben ist).

Jedes `BackgroundFetchRecord` hat eine `responseReady`-Eigenschaft, die ein `Promise` ist, das mit der {{domxref("Response")}} aufgelöst wird, sobald die Antwort verfügbar ist.

Um auf die Antwortdaten zuzugreifen, könnte der Handler etwa so aussehen:

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
    // Machen Sie etwas mit den Antworten
  });
});
```

Da die Antwortdaten nach dem Beenden des Handlers nicht mehr verfügbar sind, sollte der Handler die Daten speichern (z. B. im {{domxref("Cache")}}), wenn die App sie weiterhin benötigt.

#### Aktualisierung der Benutzeroberfläche des Browsers

Das Event-Objekt, das an `backgroundfetchsuccess` und `backgroundfetchfail` übergeben wird, hat auch eine {{domxref("BackgroundFetchUpdateUIEvent/updateUI", "updateUI()")}}-Methode, die verwendet werden kann, um die Benutzeroberfläche zu aktualisieren, die der Browser anzeigt, um den Benutzer über den Abrufvorgang zu informieren. Mit `updateUI()` kann der Handler den Titel und das Symbol des UI-Elements aktualisieren:

```js
// service-worker.js

self.addEventListener("backgroundfetchsuccess", (event) => {
  // Antwortdaten abrufen und speichern
  // ...

  event.updateUI({ title: "Ihr Download ist abgeschlossen!" });
});

self.addEventListener("backgroundfetchfail", (event) => {
  event.updateUI({ title: "Download konnte nicht abgeschlossen werden" });
});
```

#### Reaktion auf Benutzerinteraktionen

Das `backgroundfetchclick`-Event wird ausgelöst, wenn der Benutzer auf das UI-Element geklickt hat, das der Browser während des laufenden Abrufes zeigt.

Die erwartete Antwort hier ist, ein Fenster zu öffnen, das dem Benutzer mehr Informationen über den Abrufvorgang gibt, was vom Service Worker mit {{domxref("Clients/openWindow", "clients.openWindow()")}} erfolgen kann. Zum Beispiel:

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

Die [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API) ermöglicht einer PWA, ihre Daten periodisch im Hintergrund zu aktualisieren, während die Haupt-App geschlossen ist.

Dies kann das Offline-Erlebnis, das eine PWA bietet, erheblich verbessern. Betrachten Sie eine App, die von angemessen aktuellen Inhalten abhängt, wie eine Nachrichten-App. Wenn das Gerät offline ist, wenn der Benutzer die App öffnet, werden selbst mit service-worker-basiertem Caching die Geschichten nur so aktuell sein, wie beim letzten Mal als die App geöffnet wurde. Mit periodischer Hintergrund-Synchronisation könnte die App ihre Geschichten im Hintergrund aktualisiert haben, als das Gerät Konnektivität hatte, und so dem Benutzer vergleichsweise aktuelle Inhalte zeigen können.

Dies nutzt die Tatsache, dass auf einem Mobilgerät speziell die Konnektivität nicht so sehr schlecht ist, sondern _intermittierend_: indem sie die Zeiten ausnutzt, in denen das Gerät Konnektivität hat, kann die App die Konnektivitätslücken ausgleichen.

### Registrierung eines periodischen Synchronisationsereignisses

Der Code zur Registrierung eines periodischen Synchronisationsereignisses folgt dem gleichen Muster wie der zur [Registrierung eines Synchronisationsereignisses](#registrierung_eines_synchronisationsereignisses). Der {{domxref("ServiceWorkerRegistration")}} hat eine {{domxref("ServiceWorkerRegistration.periodicSync", "periodicSync")}}-Eigenschaft, die eine {{domxref("PeriodicSyncManager/register", "register()")}}-Methode nimmt, die den Namen der periodischen Synchronisation als Parameter annimmt.

Jedoch nimmt `periodicSync.register()` ein zusätzliches Argument, das ein Objekt mit einer `minInterval`-Eigenschaft ist. Dies stellt das minimale Intervall in Millisekunden zwischen den Synchronisationsversuchen dar:

```js
// main.js

async function registerPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.register("update-news", {
    // versuchen, alle 24 Stunden zu aktualisieren
    minInterval: 24 * 60 * 60 * 1000,
  });
}
```

### Umgang mit einem periodischen Synchronisationsereignis

Obwohl die PWA in der `register()`-Aufruf nach einem bestimmten Intervall fragt, liegt es am Browser, wie oft periodische Synchronisationsereignisse generiert werden. Apps, die Benutzer häufig öffnen und verwenden, erhalten wahrscheinlich eher periodische Synchronisationsereignisse und erhalten diese häufiger als Apps, die der Benutzer selten oder nie verwendet.

Wenn der Browser entschieden hat, ein periodisches Synchronisationsereignis zu generieren, ist das Muster das folgende: er startet den Service Worker, falls erforderlich, und löst ein {{domxref("ServiceWorkerGlobalScope.periodicsync_event", "periodicSync")}}-Event im globalen Scope des Service Workers aus.

Der Event-Handler des Service Workers überprüft den Namen des Events und ruft die entsprechende Funktion innerhalb der {{domxref("ExtendableEvent/waitUntil", "waitUntil()")}}-Methode des Events auf:

```js
// service-worker.js

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "update-news") {
    event.waitUntil(updateNews());
  }
});
```

Innerhalb von `updateNews()` kann der Service Worker die neuesten Geschichten abrufen und zwischenspeichern. Die `updateNews()`-Funktion sollte relativ schnell abgeschlossen werden: wenn der Service Worker zu lange braucht, um seine Inhalte zu aktualisieren, wird der Browser ihn stoppen.

### Abmelden von einer periodischen Synchronisation

Wenn die PWA keine periodischen Hintergrundaktualisierungen mehr benötigt (zum Beispiel, weil der Benutzer sie in den Einstellungen der App ausgeschaltet hat), sollte die PWA den Browser bitten, keine periodischen Synchronisationsereignisse mehr zu generieren, indem sie die {{domxref("PeriodicSyncManager/unregister", "unregister()")}}-Methode von {{domxref("serviceWorkerRegistration.periodicSync", "periodicSync")}} aufruft:

```js
// main.js

async function registerPeriodicSync() {
  const swRegistration = await navigator.serviceWorker.ready;
  swRegistration.periodicSync.unregister("update-news");
}
```

## Push

Die [Push-API](/de/docs/Web/API/Push_API) ermöglicht einer PWA, Nachrichten zu empfangen, die vom Server gepusht werden, unabhängig davon, ob die App läuft oder nicht. Wenn die Nachricht auf dem Gerät eingeht, wird der Service Worker der App gestartet und verarbeitet die Nachricht, und eine [Benachrichtigung](/de/docs/Web/API/Notifications_API) wird dem Benutzer angezeigt. Die Spezifikation erlaubt "stille Push", bei denen keine Benachrichtigung angezeigt wird, aber keine Browser unterstützen dies, aufgrund von Datenschutzbedenken (zum Beispiel, dass Push verwendet werden könnte, um die Position eines Benutzers zu verfolgen).

Das Anzeigen einer Benachrichtigung für den Benutzer lenkt ihn von dem ab, was er gerade tut, und hat das Potenzial, sehr störend zu sein. Daher verwenden Sie Push-Nachrichten mit Bedacht. Allgemein sind sie für Situationen geeignet, in denen Sie den Benutzer auf etwas aufmerksam machen müssen und nicht bis zum nächsten Mal warten können, wenn er Ihre App öffnet.

Ein häufiges Anwendungsbeispiel für Push-Benachrichtigungen sind Chat-Apps: wenn der Benutzer eine Nachricht von einem seiner Kontakte erhält, wird sie als Push-Nachricht geliefert und die App zeigt eine Benachrichtigung an.

Push-Nachrichten werden nicht direkt vom App-Server an das Gerät gesendet. Stattdessen sendet Ihr App-Server Nachrichten an einen Push-Dienst, von dem das Gerät sie abrufen und der App zustellen kann.

Das bedeutet auch, dass Nachrichten von Ihrem Server zum Push-Dienst {{Glossary("Encryption", "verschlüsselt")}} (damit der Push-Dienst sie nicht lesen kann) und {{Glossary("Signature/Security", "signiert")}} sein müssen (damit der Push-Dienst weiß, dass die Nachrichten wirklich von Ihrem Server stammen und nicht von jemandem, der Ihren Server imitiert).

Der Push-Dienst wird vom Browseranbieter oder einem Dritten betrieben, und der App-Server kommuniziert mit ihm über das [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokoll. Der App-Server kann eine Drittanbieter-Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um die Protokolldetails zu behandeln.

### Abonnieren von Push-Nachrichten

Das Muster zum Abonnieren von Push-Nachrichten sieht wie folgt aus:

![Diagramm, das die Schritte zur Anmeldung für Push-Nachrichten zeigt](push-messaging-1.svg)

1. Als Voraussetzung muss der App-Server mit einem {{Glossary("Public-key_cryptography", "öffentlich-privaten Schlüsselpaar")}} ausgestattet sein, damit er Push-Nachrichten signieren kann. Die Signierung von Nachrichten muss der [VAPID](https://datatracker.ietf.org/doc/html/draft-thomson-webpush-vapid-02)-Spezifikation folgen.

2. Auf dem Gerät verwendet die App die {{domxref("PushManager.subscribe()")}}-Methode, um sich für Nachrichten des Servers zu abonnieren. Die `subscribe()`-Methode:

   - Nimmt den öffentlichen Schlüssel des App-Servers als Argument: Dies ist, was der Push-Dienst verwenden wird, um die Signatur auf Nachrichten vom App-Server zu überprüfen.

   - Gibt ein `Promise` zurück, das sich zu einem {{domxref("PushSubscription")}}-Objekt auflöst. Dieses Objekt enthält:

     - Den [Endpunkt](/de/docs/Web/API/PushSubscription/endpoint) für den Push-Dienst: Dies ist, wie der App-Server weiß, wohin Push-Nachrichten gesendet werden sollen.
     - Den [öffentlichen Verschlüsselungsschlüssel](/de/docs/Web/API/PushSubscription/getKey), den Ihr Server verwenden wird, um Nachrichten an den Push-Dienst zu verschlüsseln.

3. Die App sendet den Endpunkt und den öffentlichen Verschlüsselungsschlüssel an Ihren Server (zum Beispiel mit {{domxref("WorkerGlobalScope/fetch", "fetch()")}}).

Danach ist der App-Server in der Lage, Push-Nachrichten zu senden.

### Senden, Zustellen und sichere Behandlung von Push-Nachrichten

Wenn ein Ereignis auftritt, das der Server möchte, dass die App bearbeitet, kann der Server Nachrichten senden, und die Schrittfolge ist wie folgt:

![Diagramm, das die Schritte zum Senden und Zustellen von Push-Nachrichten zeigt](push-messaging-2.svg)

1. Der App-Server signiert die Nachricht mit seinem privaten Signaturschlüssel und verschlüsselt die Nachricht mit dem öffentlichen Verschlüsselungsschlüssel für den Push-Dienst. Der App-Server kann eine Bibliothek wie [web-push](https://github.com/web-push-libs/web-push) verwenden, um dies zu vereinfachen.
2. Der App-Server sendet die Nachricht an den Endpunkt für den Push-Dienst, unter Verwendunge des [HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)-Protokolls, und optional erneut mit einer Bibliothek wie web-push.
3. Der Push-Dienst überprüft die Signatur der Nachricht, und wenn die Signatur gültig ist, stellt der Push-Dienst die Nachricht in eine Warteschlange zur Zustellung.
4. Wenn das Gerät Netzwerkverbindung hat, liefert der Push-Dienst die verschlüsselte Nachricht an den Browser.
5. Wenn der Browser die verschlüsselte Nachricht erhält, entschlüsselt er die Nachricht.
6. Der Browser startet den Service Worker, wenn nötig, und löst ein Event namens {{domxref("ServiceWorkerGlobalScope.push_event", "push")}} im globalen Scope des Service Workers aus. Der Event-Handler wird mit einem {{domxref("PushEvent")}}-Objekt übergeben, das die Nachrichtendaten enthält.
7. In seinem Event-Handler verarbeitet der Service Worker die Nachricht. Wie üblich ruft der Event-Handler `event.waitUntil()` auf, um den Browser zu bitten, den Service Worker laufen zu lassen.
8. In seinem Event-Handler erstellt der Service Worker eine Benachrichtigung unter Verwendung von {{domxref("ServiceWorkerRegistration/showNotification", "registration.showNotification()")}}.
9. Wenn der Benutzer auf die Benachrichtigung klickt oder sie schließt, werden {{domxref("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} und {{domxref("ServiceWorkerGlobalScope.notificationclose_event", "notificationclose")}} entsprechend im globalen Scope des Service Workers ausgelöst. Diese ermöglichen der App, die Benutzerreaktion auf die Benachrichtigung zu behandeln.

## Berechtigungen und Einschränkungen

Browser müssen einen Mittelweg finden, bei dem sie Webentwicklern leistungsfähige APIs zur Verfügung stellen können, während sie Benutzer vor bösartigen, ausbeuterischen oder schlecht geschriebenen Websites schützen. Eines der wichtigsten Schutzmaßnahmen, die sie bieten, ist, dass Benutzer die Seiten der Website schließen können und diese dann nicht mehr auf ihrem Gerät aktiv sind. Die in diesem Artikel beschriebenen APIs neigen dazu, diese Zusicherung zu verletzen, sodass Browser zusätzliche Schritte unternehmen müssen, um sicherzustellen, dass Benutzer darüber informiert sind und die APIs in einer Weise verwendet werden, die den Interessen der Benutzer entspricht.

In diesem Abschnitt werden wir diese Schritte skizzieren. Mehrere dieser APIs erfordern eine explizite [Benutzerberechtigung](/de/docs/Web/API/Permissions_API) sowie verschiedene andere Einschränkungen und Designentscheidungen, um die Benutzer zu schützen.

- Die Background Sync API benötigt keine explizite Benutzerberechtigung, aber die Ausstellung einer Hintergrund-Synchronisationsanfrage darf nur erfolgen, solange die Haupt-App geöffnet ist, und Browser begrenzen die Anzahl der Wiederholungen und die Dauer, die Hintergrund-Synchronisationsoperationen dauern können.

- Die Background Fetch API erfordert die Benutzerberechtigung `"background-fetch"`, und der Browser zeigt den fortlaufenden Fortschritt der Abrufoperation an, damit der Benutzer sie abbrechen kann.

- Die Periodic Background Sync API erfordert die Benutzerberechtigung `"periodic-background-sync"`, und Browser sollten Benutzern erlauben, die periodische Hintergrund-Synchronisation vollständig zu deaktivieren. Auch können Browser die Häufigkeit von Synchronisationsereignissen an den Grad binden, zu dem der Benutzer sich entscheidet, mit der App zu interagieren: Eine App, die der Benutzer selten verwendet, erhält möglicherweise wenige Ereignisse (oder sogar keine Ereignisse).

- Die Push API erfordert die Benutzerberechtigung `"push"`, und alle Browser benötigen, dass Push-Ereignisse für den Benutzer sichtbar sind, was bedeutet, dass sie eine benutzer sichtbare Benachrichtigung erzeugen.

## Siehe auch

### Referenz

- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)

### Leitfäden

- [Einführung in die Hintergrund-Synchronisation](https://developer.chrome.com/blog/background-sync/) auf developer.chrome.com (2017)
- [Einführung in den Hintergrundabruf](https://developer.chrome.com/blog/background-fetch/) auf developer.chrome.com (2022)
- [Die Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync) auf developer.chrome.com (2020)
- [Benachrichtigungen](https://web.dev/explore/notifications) auf web.dev
- [PWA mit Offline-Streaming](https://web.dev/articles/pwa-with-offline-streaming) auf web.dev (2021)
