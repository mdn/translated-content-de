---
title: Präsentations-API
slug: Web/API/Presentation_API
l10n:
  sourceCommit: 88c098f5bd651a5c587d7b32dba055766c1789ca
---

{{securecontext_header}}{{SeeCompatTable}}{{DefaultAPISidebar("Presentation API")}}

Die Präsentations-API ermöglicht es einem {{Glossary("user agent")}} (wie einem Webbrowser), Webinhalte effektiv über große Präsentationsgeräte wie Projektoren und netzwerkverbundene Fernseher anzuzeigen. Unterstützte Arten von Multimedia-Geräten umfassen sowohl Bildschirme, die über HDMI, DVI oder Ähnliches verkabelt sind, als auch kabellose Geräte, die [DLNA](https://www.dlna.org/), [Chromecast](https://developers.google.com/cast/), [AirPlay](https://developer.apple.com/airplay/) oder [Miracast](https://www.wi-fi.org/discover-wi-fi/miracast) verwenden.

![1-UA-Modus lädt die Kontroll- und Präsentationsseiten gemeinsam, bevor sie auf Bildschirmen angezeigt werden. 2-UA-Modus lädt sie separat mit dem Präsentationskontrollprotokoll.](presentation_mode_illustration.png)

Im Allgemeinen verwendet eine Webseite die Presentation Controller API, um die darzustellenden Webinhalte auf dem Präsentationsgerät anzugeben und die Präsentationssitzung zu initiieren. Mit der Presentation Receiver API erhält der präsentierte Webinhalt den Sitzungsstatus. Indem sowohl der Controller-Seite als auch der Empfängerseite ein nachrichtenbasierter Kanal zur Verfügung gestellt wird, kann ein Webentwickler die Interaktion zwischen diesen beiden Seiten implementieren.

Je nach dem Verbindungsmechanismus, der vom Präsentationsgerät bereitgestellt wird, können jede Controller- und Empfängerseite entweder vom gleichen User-Agent oder von getrennten User-Agents gerendert werden.

- Bei 1-UA-Modus-Geräten werden beide Seiten vom gleichen User-Agent geladen. Das Rendering-Ergebnis der Empfängerseite wird jedoch über ein unterstütztes Remote-Rendering-Protokoll an das Präsentationsgerät gesendet.
- Bei 2-UA-Modus-Geräten wird die Empfängerseite direkt auf dem Präsentationsgerät geladen. Der steuernde User-Agent kommuniziert über ein unterstütztes Präsentationskontrollprotokoll mit dem Präsentationsgerät, um die Präsentationssitzung zu steuern und die Nachricht zwischen den beiden Seiten zu übertragen.

## Schnittstellen

- {{domxref("Presentation")}}
  - : Im steuernden Browsing-Kontext bietet die `Presentation`-Schnittstelle einen Mechanismus, um das Standardverhalten des Browsers beim Starten einer Präsentation auf einem externen Bildschirm zu überschreiben. Im empfangenden Browsing-Kontext bietet die `Presentation`-Schnittstelle den Zugriff auf die verfügbaren Präsentationsverbindungen.
- {{domxref("PresentationRequest")}}
  - : Initiiert oder stellt die Verbindung zu einer vom steuernden Browsing-Kontext gestarteten Präsentation wieder her.
- {{domxref("PresentationAvailability")}}
  - : Ein [PresentationAvailability](/de/docs/Web/API/PresentationAvailability)-Objekt ist mit verfügbaren Präsentationsbildschirmen assoziiert und repräsentiert die _Verfügbarkeit von Präsentationsbildschirmen_ für eine Präsentationsanfrage.
- {{domxref("PresentationConnectionAvailableEvent")}}
  - : Das `PresentationConnectionAvailableEvent` wird bei einem [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) ausgelöst, wenn eine mit dem Objekt verbundene Verbindung erstellt wird.
- {{domxref("PresentationConnection")}}
  - : Jede Präsentationsverbindung wird durch ein [PresentationConnection](/de/docs/Web/API/PresentationConnection)-Objekt repräsentiert.
- {{domxref("PresentationConnectionCloseEvent")}}
  - : Ein `PresentationConnectionCloseEvent` wird ausgelöst, wenn eine Präsentationsverbindung in den `closed`-Zustand übergeht.
- {{domxref("PresentationReceiver")}}
  - : Der [PresentationReceiver](/de/docs/Web/API/PresentationReceiver) ermöglicht es einem empfangenden Browsing-Kontext, auf die steuernden Browsing-Kontexte zuzugreifen und mit ihnen zu kommunizieren.
- {{domxref("PresentationConnectionList")}}
  - : `PresentationConnectionList` repräsentiert die Sammlung nicht beendeter Präsentationsverbindungen. Es überwacht auch das Ereignis einer neu verfügbaren Präsentationsverbindung.

## Beispiel

Die untenstehenden Beispielcodes heben die Verwendung der Hauptfunktionen der Präsentations-API hervor: `controller.html` implementiert den Controller und `presentation.html` die Präsentation. Beide Seiten werden von der Domain `https://example.org` bereitgestellt (`https://example.org/controller.html` und `https://example.org/presentation.html`). Diese Beispiele gehen davon aus, dass die Steuerungsseite eine Präsentation nach der anderen verwaltet. Bitte beachten Sie die Kommentare in den Code-Beispielen für weitere Details.

### Verfügbarkeit von Präsentationsbildschirmen überwachen

In `controller.html`:

```html
<button id="presentBtn" style="display: none;">Present</button>
<script>
  // Der Present Button ist sichtbar, wenn mindestens ein Präsentationsbildschirm verfügbar ist
  const presentBtn = document.getElementById("presentBtn");

  // Es ist auch möglich, relative Präsentations-URLs zu verwenden, z.B. "presentation.html"
  const presUrls = [
    "https://example.com/presentation.html",
    "https://example.net/alternate.html",
  ];

  // Zeigen oder verbergen Sie den Present-Button abhängig von der Display-Verfügbarkeit
  const handleAvailabilityChange = (available) => {
    presentBtn.style.display = available ? "inline" : "none";
  };

  // Promise wird aufgelöst, sobald die Verfügbarkeit der Präsentationsbildschirme bekannt ist.
  const request = new PresentationRequest(presUrls);
  request
    .getAvailability()
    .then((availability) => {
      // availability.value kann vom steuernden UA aktuell gehalten werden, solange
      // das Verfügbarkeitsobjekt lebt. Es wird empfohlen, dass die Webentwickler
      // das Objekt verwerfen, sobald es nicht mehr benötigt wird.
      handleAvailabilityChange(availability.value);
      availability.onchange = () => {
        handleAvailabilityChange(availability.value);
      };
    })
    .catch(() => {
      // Verfügbarkeitsüberwachung wird von der Plattform nicht unterstützt, sodass die
      // Entdeckung von Präsentationsbildschirmen erst nach dem Aufruf von request.start() erfolgt.
      // Zur Vereinfachung vorgeben, dass die Geräte verfügbar sind; alternativ könnte
      // man einen dritten Zustand für den Button implementieren.
      handleAvailabilityChange(true);
    });
</script>
```

### Eine neue Präsentation starten

In `controller.html`:

```html
<script>
  presentBtn.onclick = () => {
    // Neue Präsentation starten.
    request
      .start()
      // Die Verbindung zur Präsentation wird bei Erfolg an setConnection übergeben.
      .then(setConnection);
    // Andernfalls hat der Benutzer den Auswahldialog abgebrochen oder es wurden keine Bildschirme gefunden.
  };
</script>
```

### Mit einer Präsentation erneut verbinden

In der Datei `controller.html`:

```html
<button id="reconnectBtn" style="display: none;">Reconnect</button>
<script>
  const reconnect = () => {
    // presId aus localStorage lesen, falls vorhanden
    const presId = localStorage["presId"];
    // presId ist obligatorisch, wenn die Verbindung zu einer Präsentation wiederhergestellt wird.
    if (presId) {
      request
        .reconnect(presId)
        // Die neue Verbindung zur Präsentation wird bei Erfolg an
        // setConnection übergeben.
        .then(setConnection);
      // Keine Verbindung für presUrl und presId gefunden oder es ist ein Fehler aufgetreten.
    }
  };
  // Bei der Navigation des Controllers, automatisch wieder verbinden.
  document.addEventListener("DOMContentLoaded", reconnect);
  // Oder manuelle Wiederverbindung zulassen.
  reconnectBtn.onclick = reconnect;
</script>
```

### Initiierung der Präsentation durch den steuernden UA

In der Datei `controller.html`:

```html
<script>
  navigator.presentation.defaultRequest = new PresentationRequest(presUrls);
  navigator.presentation.defaultRequest.onconnectionavailable = (evt) => {
    setConnection(evt.connection);
  };
</script>
```

Das Setzen von `presentation.defaultRequest` ermöglicht es der Seite, die `PresentationRequest` anzugeben, die verwendet werden soll, wenn der steuernde UA eine Präsentation initiiert.

### Überwachung des Verbindungsstatus und Datenaustausch

In `controller.html`:

```html
<button id="disconnectBtn" style="display: none;">Disconnect</button>
<button id="stopBtn" style="display: none;">Stop</button>
<button id="reconnectBtn" style="display: none;">Reconnect</button>
<script>
  let connection;

  // Die Disconnect- und Stop-Buttons sind sichtbar, wenn eine verbundene Präsentation besteht
  const stopBtn = document.querySelector("#stopBtn");
  const reconnectBtn = document.querySelector("#reconnectBtn");
  const disconnectBtn = document.querySelector("#disconnectBtn");

  stopBtn.onclick = () => {
    connection?.terminate();
  };

  disconnectBtn.onclick = () => {
    connection?.close();
  };

  function setConnection(newConnection) {
    // Trennen Sie sich von der bestehenden Präsentation, wenn keine
    // Wiederverbindung versucht wird
    if (
      connection &&
      connection !== newConnection &&
      connection.state !== "closed"
    ) {
      connection.onclose = undefined;
      connection.close();
    }

    // Setzen Sie die neue Verbindung und speichern Sie die Präsentations-ID
    connection = newConnection;
    localStorage["presId"] = connection.id;

    function showConnectedUI() {
      // Ermöglichen Sie dem Benutzer, die Präsentation zu trennen oder zu beenden
      stopBtn.style.display = "inline";
      disconnectBtn.style.display = "inline";
      reconnectBtn.style.display = "none";
    }

    function showDisconnectedUI() {
      disconnectBtn.style.display = "none";
      stopBtn.style.display = "none";
      reconnectBtn.style.display = localStorage["presId"] ? "inline" : "none";
    }

    // Überwachen Sie den Verbindungsstatus
    connection.onconnect = () => {
      showConnectedUI();

      // Nachricht-Handler registrieren
      connection.onmessage = (message) => {
        console.log(`Received message: ${message.data}`);
      };

      // Senden Sie eine initiale Nachricht an die Präsentationsseite
      connection.send("Say hello");
    };

    connection.onclose = () => {
      connection = null;
      showDisconnectedUI();
    };

    connection.onterminate = () => {
      // Entfernen Sie presId aus localStorage, falls vorhanden
      delete localStorage["presId"];
      connection = null;
      showDisconnectedUI();
    };
  }
</script>
```

### Verfügbare Verbindung(en) überwachen und hallo sagen

In `presentation.html`:

```js
const addConnection = (connection) => {
  connection.onmessage = (message) => {
    if (message.data === "Say hello") connection.send("hello");
  };
};

navigator.presentation.receiver.connectionList.then((list) => {
  list.connections.forEach((connection) => {
    addConnection(connection);
  });
  list.onconnectionavailable = (evt) => {
    addConnection(evt.connection);
  };
});
```

### Übermittlung von lokalen Informationen mit einer Nachricht

In der Datei `controller.html`:

```html
<script>
  connection.send('{"string": "你好，世界!", "lang": "zh-CN"}');
  connection.send('{"string": "こんにちは、世界!", "lang": "ja"}');
  connection.send('{"string": "안녕하세요, 세계!", "lang": "ko"}');
  connection.send('{"string": "Hello, world!", "lang": "en-US"}');
</script>
```

In der Datei `presentation.html`:

```html
<script>
  connection.onmessage = (message) => {
    const messageObj = JSON.parse(message.data);
    const spanElt = document.createElement("SPAN");
    spanElt.lang = messageObj.lang;
    spanElt.textContent = messageObj.string;
    document.body.appendChild(spanElt);
  };
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Präsentations-API-Polyfill](https://mediascape.github.io/presentation-api-polyfill/) enthält ein JavaScript-Polyfill der [Präsentations-API](https://w3c.github.io/presentation-api/)-Spezifikation, die von der [Second Screen Working Group](https://www.w3.org/2014/secondscreen/) beim W3C standardisiert wird. Das Polyfill ist hauptsächlich für die Erkundung gedacht, wie die Präsentations-API auf verschiedenen Präsentationsmechanismen implementiert werden kann.
