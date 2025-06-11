---
title: Presentation API
slug: Web/API/Presentation_API
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{securecontext_header}}{{SeeCompatTable}}{{DefaultAPISidebar("Presentation API")}}

Die Presentation API ermöglicht es einem {{Glossary("user_agent", "User Agent")}} (wie z.B. einem Webbrowser), Webinhalte effektiv über große Präsentationsgeräte wie Projektoren und netzwerkverbundene Fernseher darzustellen. Unterstützte Arten von Multimedia-Geräten umfassen sowohl Displays, die über HDMI, DVI oder Ähnliches verkabelt sind, als auch drahtlose, die [DLNA](https://www.dlna.org/), [Chromecast](https://developers.google.com/cast/), [AirPlay](https://developer.apple.com/airplay/) oder [Miracast](https://www.wi-fi.org/applications) verwenden.

![1-UA-Modus hat die Controlling- und Präsentationsseiten zusammen geladen, bevor sie auf Displays ausgegeben werden. 2-UA-Modus hat sie separat mit dem Presentation Control Protocol geladen.](presentation_mode_illustration.png)

Im Allgemeinen verwendet eine Webseite die Presentation Controller API, um die Webinhalte anzugeben, die auf dem Präsentationsgerät dargestellt werden sollen, und um die Präsentationssitzung zu initiieren. Mit der Presentation Receiver API erhält der präsentierende Webinhalt den Sitzungsstatus. Indem sowohl die Kontrollseite als auch die Empfängerseite mit einem nachrichtenbasierten Kanal versehen werden, kann ein Webentwickler die Interaktion zwischen diesen beiden Seiten implementieren.

Je nach Verbindungstechnologie, die das Präsentationsgerät bereitstellt, können sowohl die Kontroll- als auch die Empfängerseite vom selben User Agent oder von getrennten User Agents dargestellt werden.

- Bei 1-UA-Modus-Geräten werden beide Seiten vom gleichen User Agent geladen. Das Rendering-Ergebnis der Empfängerseite wird jedoch über ein unterstütztes Fernrendering-Protokoll an das Präsentationsgerät gesendet.
- Bei 2-UA-Modus-Geräten wird die Empfängerseite direkt auf dem Präsentationsgerät geladen. Der steuernde User Agent kommuniziert über ein unterstütztes Präsentationssteuerungsprotokoll mit dem Präsentationsgerät, um die Präsentationssitzung zu steuern und Nachrichten zwischen den beiden Seiten zu übertragen.

## Schnittstellen

- [`Presentation`](/de/docs/Web/API/Presentation)
  - : In einem steuernden Browsing-Kontext bietet die `Presentation`-Schnittstelle einen Mechanismus, um das standardmäßige Verhalten des Browsers beim Starten von Präsentationen auf externen Bildschirmen zu überschreiben. In einem empfangenden Browsing-Kontext bietet die `Presentation`-Schnittstelle Zugriff auf die verfügbaren Präsentationsverbindungen.
- [`PresentationRequest`](/de/docs/Web/API/PresentationRequest)
  - : Leitet eine von einem steuernden Browsing-Kontext erstellte Präsentation ein oder stellt die Verbindung dazu wieder her.
- [`PresentationAvailability`](/de/docs/Web/API/PresentationAvailability)
  - : Ein [PresentationAvailability](/de/docs/Web/API/PresentationAvailability)-Objekt ist mit verfügbaren Präsentationsdisplays verbunden und repräsentiert die _Verfügbarkeit von Präsentationsdisplays_ für eine Präsentationsanfrage.
- [`PresentationConnectionAvailableEvent`](/de/docs/Web/API/PresentationConnectionAvailableEvent)
  - : Der `PresentationConnectionAvailableEvent` wird auf einer [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) ausgelöst, wenn eine mit dem Objekt verbundene Verbindung erstellt wird.
- [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)
  - : Jede Präsentationsverbindung wird durch ein [PresentationConnection](/de/docs/Web/API/PresentationConnection)-Objekt repräsentiert.
- [`PresentationConnectionCloseEvent`](/de/docs/Web/API/PresentationConnectionCloseEvent)
  - : Ein `PresentationConnectionCloseEvent` wird ausgelöst, wenn eine Präsentationsverbindung in einen `closed`-Status wechselt.
- [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)
  - : Der [PresentationReceiver](/de/docs/Web/API/PresentationReceiver) ermöglicht es einem empfangenden Browsing-Kontext, auf die steuernden Browsing-Kontexte zuzugreifen und mit ihnen zu kommunizieren.
- [`PresentationConnectionList`](/de/docs/Web/API/PresentationConnectionList)
  - : `PresentationConnectionList` repräsentiert die Sammlung nicht beendeter Präsentationsverbindungen. Es ist auch ein Monitor für das Ereignis neuer verfügbarer Präsentationsverbindungen.

## Beispiel

Die folgenden Beispielcodes veranschaulichen die Nutzung der Hauptfunktionen der Presentation API: `controller.html` implementiert den Controller und `presentation.html` die Präsentation. Beide Seiten werden von der Domain `https://example.org` bereitgestellt (`https://example.org/controller.html` und `https://example.org/presentation.html`). Diese Beispiele gehen davon aus, dass die Steuerseite jeweils nur eine Präsentation verwaltet. Bitte beachten Sie die Kommentare in den Codebeispielen für weitere Details.

### Verfügbarkeit von Präsentationsdisplays überwachen

In `controller.html`:

```html
<button id="presentBtn" style="display: none;">Present</button>
```

```js
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
```

### Eine neue Präsentation starten

In `controller.html`:

```js
presentBtn.onclick = () => {
  // Start new presentation.
  request
    .start()
    // The connection to the presentation will be passed to setConnection on success.
    .then(setConnection);
  // Otherwise, the user canceled the selection dialog or no screens were found.
};
```

### Zu einer Präsentation erneut verbinden

In der Datei `controller.html`:

```html
<button id="reconnectBtn" style="display: none;">Reconnect</button>
```

```js
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
```

### Initiierung der Präsentation durch die steuernde UA

In der Datei `controller.html`:

```js
navigator.presentation.defaultRequest = new PresentationRequest(presUrls);
navigator.presentation.defaultRequest.onconnectionavailable = (evt) => {
  setConnection(evt.connection);
};
```

Das Setzen von `presentation.defaultRequest` erlaubt es der Seite, die zu verwendende `PresentationRequest` anzugeben, wenn die steuernde UA eine Präsentation initiiert.

### Den Zustand der Verbindung überwachen und Daten austauschen

In `controller.html`:

```html
<button id="disconnectBtn" style="display: none;">Disconnect</button>
<button id="stopBtn" style="display: none;">Stop</button>
<button id="reconnectBtn" style="display: none;">Reconnect</button>
```

```js
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

### Übermitteln von Lokalisierungsinformationen mit einer Nachricht

In der Datei `controller.html`:

```html
connection.send('{"string": "你好，世界!", "lang": "zh-CN"}');
connection.send('{"string": "こんにちは、世界!", "lang": "ja"}');
connection.send('{"string": "안녕하세요, 세계!", "lang": "ko"}');
connection.send('{"string": "Hello, world!", "lang": "en-US"}');
```

In der Datei `presentation.html`:

```js
connection.onmessage = (message) => {
  const messageObj = JSON.parse(message.data);
  const spanElt = document.createElement("SPAN");
  spanElt.lang = messageObj.lang;
  spanElt.textContent = messageObj.string;
  document.body.appendChild(spanElt);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[Presentation API polyfill](https://mediascape.github.io/presentation-api-polyfill/) enthält ein JavaScript-Polyfill der [Presentation API](https://w3c.github.io/presentation-api/)-Spezifikation, die innerhalb der [Second Screen Working Group](https://www.w3.org/2014/secondscreen/) des W3C standardisiert wird. Das Polyfill ist hauptsächlich dazu gedacht, zu erkunden, wie die Presentation API über verschiedene Präsentationsmechanismen implementiert werden kann.
