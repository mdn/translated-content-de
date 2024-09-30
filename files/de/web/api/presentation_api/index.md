---
title: Presentation API
slug: Web/API/Presentation_API
l10n:
  sourceCommit: 88c098f5bd651a5c587d7b32dba055766c1789ca
---

{{securecontext_header}}{{SeeCompatTable}}{{DefaultAPISidebar("Presentation API")}}

Die Presentation API ermöglicht es einem [User-Agent](/de/docs/Glossary/user_agent) (wie einem Webbrowser), Webinhalte effektiv über große Präsentationsgeräte wie Projektoren und netzwerkverbundene Fernseher darzustellen. Unterstützte Arten von Multimedia-Geräten umfassen sowohl Displays, die kabelgebunden über HDMI, DVI oder Ähnliches verbunden sind, als auch kabellose, die [DLNA](https://www.dlna.org/), [Chromecast](https://developers.google.com/cast/), [AirPlay](https://developer.apple.com/airplay/) oder [Miracast](https://www.wi-fi.org/discover-wi-fi/miracast) verwenden.

![1-UA-Modus lädt die Steuer- und Präsentationsseiten gemeinsam, bevor sie an Displays ausgegeben werden. 2-UA-Modus lädt sie separat unter Verwendung des Presentation Control Protocol.](presentation_mode_illustration.png)

Im Allgemeinen verwendet eine Webseite die Presentation Controller API, um die darzustellenden Webinhalte auf einem Präsentationsgerät anzugeben und die Präsentationssitzung zu initiieren. Mit der Presentation Receiver API erhält der darstellende Webinhalt den Sitzungsstatus. Indem sowohl die Steuerungsseite als auch die Empfangsseite mit einem nachrichtenbasierten Kanal ausgestattet werden, kann ein Webentwickler die Interaktion zwischen diesen beiden Seiten implementieren.

Abhängig von dem vom Präsentationsgerät bereitgestellten Verbindungsmechanismus können Steuerungs- und Empfangsseite von demselben User-Agent oder von getrennten User-Agents gerendert werden.

- Bei 1-UA-Modus-Geräten werden beide Seiten vom selben User-Agent geladen. Das Rendering-Ergebnis der Empfangsseite wird jedoch über ein unterstütztes Fernrendering-Protokoll an das Präsentationsgerät gesendet.
- Bei 2-UA-Modus-Geräten wird die Empfangsseite direkt auf dem Präsentationsgerät geladen. Der Steuerungs-User-Agent kommuniziert über das unterstützte Präsentationssteuerprotokoll mit dem Präsentationsgerät, um die Präsentationssitzung zu steuern und Nachrichten zwischen den beiden Seiten zu übertragen.

## Schnittstellen

- [`Presentation`](/de/docs/Web/API/Presentation)
  - : Im Steuerungs-Browsing-Kontext bietet die `Presentation`-Schnittstelle einen Mechanismus, um das Standardverhalten des Browsers zum Starten einer Präsentation auf einem externen Bildschirm zu überschreiben. Im Empfangsbrowsing-Kontext bietet die `Presentation`-Schnittstelle Zugriff auf die verfügbaren Präsentationsverbindungen.
- [`PresentationRequest`](/de/docs/Web/API/PresentationRequest)
  - : Initiiert oder stellt die Verbindung zu einer Präsentation in einem steuernden Browsing-Kontext wieder her.
- [`PresentationAvailability`](/de/docs/Web/API/PresentationAvailability)
  - : Ein [PresentationAvailability](/de/docs/Web/API/PresentationAvailability)-Objekt ist mit verfügbaren Präsentationsdisplays assoziiert und stellt die _Verfügbarkeit von Präsentationsdisplays_ für eine Präsentationsanforderung dar.
- [`PresentationConnectionAvailableEvent`](/de/docs/Web/API/PresentationConnectionAvailableEvent)
  - : Das `PresentationConnectionAvailableEvent` wird auf einer [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) ausgelöst, wenn eine mit dem Objekt assoziierte Verbindung hergestellt wird.
- [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)
  - : Jede Präsentationsverbindung wird durch ein [PresentationConnection](/de/docs/Web/API/PresentationConnection)-Objekt repräsentiert.
- [`PresentationConnectionCloseEvent`](/de/docs/Web/API/PresentationConnectionCloseEvent)
  - : Ein `PresentationConnectionCloseEvent` wird ausgelöst, wenn eine Präsentationsverbindung in einen `closed`-Zustand übergeht.
- [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)
  - : Der [PresentationReceiver](/de/docs/Web/API/PresentationReceiver) ermöglicht es einem empfangenden Browsing-Kontext, auf die steuernden Browsing-Kontexte zuzugreifen und mit ihnen zu kommunizieren.
- [`PresentationConnectionList`](/de/docs/Web/API/PresentationConnectionList)
  - : `PresentationConnectionList` repräsentiert die Sammlung von nicht beendeten Präsentationsverbindungen. Es ist auch ein Monitor für das Ereignis einer neu verfügbaren Präsentationsverbindung.

## Beispiel

Die folgenden Beispielcodes zeigen die Verwendung der Hauptfunktionen der Presentation API: `controller.html` implementiert die Steuerung und `presentation.html` die Präsentation. Beide Seiten werden von der Domain `https://example.org` bereitgestellt (`https://example.org/controller.html` und `https://example.org/presentation.html`). Diese Beispiele gehen davon aus, dass die Steuerungsseite eine Präsentation zur gleichen Zeit verwaltet. Bitte beachten Sie die Kommentare in den Codebeispielen für weitere Details.

### Verfügbarkeit von Präsentationsdisplays überwachen

In `controller.html`:

```html
<button id="presentBtn" style="display: none;">Present</button>
<script>
  // The Present button is visible if at least one presentation display is available
  const presentBtn = document.getElementById("presentBtn");

  // It is also possible to use relative presentation URL e.g. "presentation.html"
  const presUrls = [
    "https://example.com/presentation.html",
    "https://example.net/alternate.html",
  ];

  // Show or hide present button depending on display availability
  const handleAvailabilityChange = (available) => {
    presentBtn.style.display = available ? "inline" : "none";
  };

  // Promise is resolved as soon as the presentation display availability is known.
  const request = new PresentationRequest(presUrls);
  request
    .getAvailability()
    .then((availability) => {
      // availability.value may be kept up-to-date by the controlling UA as long
      // as the availability object is alive. It is advised for the web developers
      // to discard the object as soon as it's not needed.
      handleAvailabilityChange(availability.value);
      availability.onchange = () => {
        handleAvailabilityChange(availability.value);
      };
    })
    .catch(() => {
      // Availability monitoring is not supported by the platform, so discovery of
      // presentation displays will happen only after request.start() is called.
      // Pretend the devices are available for simplicity; or, one could implement
      // a third state for the button.
      handleAvailabilityChange(true);
    });
</script>
```

### Eine neue Präsentation starten

In `controller.html`:

```html
<script>
  presentBtn.onclick = () => {
    // Start new presentation.
    request
      .start()
      // The connection to the presentation will be passed to setConnection on success.
      .then(setConnection);
    // Otherwise, the user canceled the selection dialog or no screens were found.
  };
</script>
```

### Wiederherstellen einer Präsentation

In der Datei `controller.html`:

```html
<button id="reconnectBtn" style="display: none;">Reconnect</button>
<script>
  const reconnect = () => {
    // read presId from localStorage if exists
    const presId = localStorage["presId"];
    // presId is mandatory when reconnecting to a presentation.
    if (presId) {
      request
        .reconnect(presId)
        // The new connection to the presentation will be passed to
        // setConnection on success.
        .then(setConnection);
      // No connection found for presUrl and presId, or an error occurred.
    }
  };
  // On navigation of the controller, reconnect automatically.
  document.addEventListener("DOMContentLoaded", reconnect);
  // Or allow manual reconnection.
  reconnectBtn.onclick = reconnect;
</script>
```

### Präsentation vom steuernden UA initiieren

In der Datei `controller.html`:

```html
<script>
  navigator.presentation.defaultRequest = new PresentationRequest(presUrls);
  navigator.presentation.defaultRequest.onconnectionavailable = (evt) => {
    setConnection(evt.connection);
  };
</script>
```

Durch das Setzen von `presentation.defaultRequest` kann die Seite angeben, welchen `PresentationRequest` sie verwenden möchte, wenn der steuernde UA eine Präsentation initiiert.

### Zustand der Verbindung überwachen und Daten austauschen

In `controller.html`:

```html
<button id="disconnectBtn" style="display: none;">Disconnect</button>
<button id="stopBtn" style="display: none;">Stop</button>
<button id="reconnectBtn" style="display: none;">Reconnect</button>
<script>
  let connection;

  // The Disconnect and Stop buttons are visible if there is a connected presentation
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
    // Disconnect from existing presentation, if not attempting to reconnect
    if (
      connection &&
      connection !== newConnection &&
      connection.state !== "closed"
    ) {
      connection.onclose = undefined;
      connection.close();
    }

    // Set the new connection and save the presentation ID
    connection = newConnection;
    localStorage["presId"] = connection.id;

    function showConnectedUI() {
      // Allow the user to disconnect from or terminate the presentation
      stopBtn.style.display = "inline";
      disconnectBtn.style.display = "inline";
      reconnectBtn.style.display = "none";
    }

    function showDisconnectedUI() {
      disconnectBtn.style.display = "none";
      stopBtn.style.display = "none";
      reconnectBtn.style.display = localStorage["presId"] ? "inline" : "none";
    }

    // Monitor the connection state
    connection.onconnect = () => {
      showConnectedUI();

      // Register message handler
      connection.onmessage = (message) => {
        console.log(`Received message: ${message.data}`);
      };

      // Send initial message to presentation page
      connection.send("Say hello");
    };

    connection.onclose = () => {
      connection = null;
      showDisconnectedUI();
    };

    connection.onterminate = () => {
      // Remove presId from localStorage if exists
      delete localStorage["presId"];
      connection = null;
      showDisconnectedUI();
    };
  }
</script>
```

### Verfügbare Verbindung(en) überwachen und Hallo sagen

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

### Weitergeben von Gebietsschema-Informationen mit einer Nachricht

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

[Presentation API polyfill](https://mediascape.github.io/presentation-api-polyfill/) enthält ein JavaScript-Polyfill der [Presentation API](https://w3c.github.io/presentation-api/)-Spezifikation, die innerhalb der [Second Screen Working Group](https://www.w3.org/2014/secondscreen/) beim W3C standardisiert wird. Das Polyfill ist hauptsächlich dazu gedacht, zu erkunden, wie die Presentation API auf verschiedenen Präsentationsmechanismen implementiert werden kann.
