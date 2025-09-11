---
title: Presentation API
slug: Web/API/Presentation_API
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{securecontext_header}}{{SeeCompatTable}}{{DefaultAPISidebar("Presentation API")}}

Die Presentation API ermöglicht es einem {{Glossary("user_agent", "User Agent")}} (wie einem Webbrowser), Webinhalte effektiv über große Präsentationsgeräte wie Projektoren und netzwerkverbundene Fernseher anzuzeigen. Unterstützte Arten von Multimedia-Geräten schließen sowohl Displays ein, die über HDMI, DVI oder Ähnliches verkabelt sind, als auch drahtlose, welche [DLNA](https://www.dlna.org/), [Chromecast](https://developers.google.com/cast/), [AirPlay](https://developer.apple.com/airplay/) oder [Miracast](https://www.wi-fi.org/applications) verwenden.

![1-UA-Modus lädt die Steuerungs- und Präsentationsseiten zusammen, bevor sie auf Displays ausgegeben werden. 2-UA-Modus lädt sie separat mit dem Präsentationssteuerungsprotokoll.](presentation_mode_illustration.png)

Im Allgemeinen verwendet eine Webseite die Presentation Controller API, um die Webinhalte anzugeben, die über das Präsentationsgerät gerendert werden sollen, und um die Präsentationssitzung zu initiieren. Mit der Presentation Receiver API erhalten die präsentierten Webinhalte den Sitzungsstatus. Indem sowohl die Steuerungs- als auch die Empfängerseite mit einem nachrichtenbasierten Kanal versehen werden, kann ein Webentwickler die Interaktion zwischen diesen beiden Seiten implementieren.

Abhängig vom Verbindungsmechanismus, der vom Präsentationsgerät bereitgestellt wird, kann jede Steuerungs- und Empfängerseite entweder vom gleichen User Agent oder von separaten User Agents gerendert werden.

- Bei Geräten im 1-UA-Modus werden beide Seiten vom gleichen User Agent geladen. Das Rendering-Ergebnis der Empfängerseite wird jedoch über ein unterstütztes Remote-Rendering-Protokoll an das Präsentationsgerät gesendet.
- Bei Geräten im 2-UA-Modus wird die Empfängerseite direkt auf dem Präsentationsgerät geladen. Der steuernde User Agent kommuniziert über ein unterstütztes Präsentationssteuerungsprotokoll mit dem Präsentationsgerät, um die Präsentationssitzung zu steuern und Nachrichten zwischen den beiden Seiten zu übertragen.

## Schnittstellen

- [`Presentation`](/de/docs/Web/API/Presentation)
  - : Im Steuerungskontext der Browser bietet die `Presentation`-Schnittstelle einen Mechanismus, das Standardverhalten des Browsers beim Start einer Präsentation auf einem externen Bildschirm zu überschreiben. Im Empfängerkontext bietet die `Presentation`-Schnittstelle Zugang zu den verfügbaren Präsentationsverbindungen.
- [`PresentationRequest`](/de/docs/Web/API/PresentationRequest)
  - : Startet oder stellt die Verbindung mit einer Präsentation in einem steuernden Browserkontext wieder her.
- [`PresentationAvailability`](/de/docs/Web/API/PresentationAvailability)
  - : Ein [PresentationAvailability](/de/docs/Web/API/PresentationAvailability)-Objekt ist mit den verfügbaren Präsentationsdisplays verknüpft und stellt die _Verfügbarkeit von Präsentationsdisplays_ für eine Präsentationsanforderung dar.
- [`PresentationConnectionAvailableEvent`](/de/docs/Web/API/PresentationConnectionAvailableEvent)
  - : Der `PresentationConnectionAvailableEvent` wird auf einem [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) ausgelöst, wenn eine mit dem Objekt verknüpfte Verbindung erstellt wird.
- [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)
  - : Jede Präsentationsverbindung wird durch ein [PresentationConnection](/de/docs/Web/API/PresentationConnection)-Objekt dargestellt.
- [`PresentationConnectionCloseEvent`](/de/docs/Web/API/PresentationConnectionCloseEvent)
  - : Ein `PresentationConnectionCloseEvent` wird ausgelöst, wenn eine Präsentationsverbindung in einen `closed`-Status übergeht.
- [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)
  - : Der [PresentationReceiver](/de/docs/Web/API/PresentationReceiver) erlaubt einem empfangenden Browserkontext, auf die steuernden Browserkontexte zuzugreifen und mit ihnen zu kommunizieren.
- [`PresentationConnectionList`](/de/docs/Web/API/PresentationConnectionList)
  - : `PresentationConnectionList` steht für die Sammlung nicht beendeter Präsentationsverbindungen. Es ist auch ein Monitor für das Ereignis neuer verfügbarer Präsentationsverbindungen.

## Beispiel

Die folgenden Beispielcodes veranschaulichen die Nutzung der Hauptmerkmale der Presentation API: `controller.html` implementiert die Steuerung und `presentation.html` die Präsentation. Beide Seiten werden von der Domain `https://example.org` bedient (`https://example.org/controller.html` und `https://example.org/presentation.html`). Diese Beispiele gehen davon aus, dass die Steuerungsseite jeweils eine Präsentation verwaltet. Bitte beachten Sie die Kommentare in den Codebeispielen für weitere Details.

### Überwachung der Verfügbarkeit von Präsentationsdisplays

In `controller.html`:

```html
<button id="presentBtn" class="hidden">Present</button>
```

```css
.hidden {
  display: none;
}
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
  if (available) {
    presentBtn.classList.remove("hidden");
  } else {
    presentBtn.classList.add("hidden");
  }
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

### Start einer neuen Präsentation

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

### Wiederherstellen der Verbindung zu einer Präsentation

In der Datei `controller.html`:

```html
<button id="reconnectBtn" class="hidden">Reconnect</button>
```

```js
const reconnect = () => {
  const presId = localStorage.getItem("presId");
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
reconnect();
// Or allow manual reconnection.
reconnectBtn.onclick = reconnect;
```

### Präsentationsstart durch den steuernden UA

In der Datei `controller.html`:

```js
navigator.presentation.defaultRequest = new PresentationRequest(presUrls);
navigator.presentation.defaultRequest.onconnectionavailable = (evt) => {
  setConnection(evt.connection);
};
```

Das Setzen von `presentation.defaultRequest` erlaubt es der Seite, die `PresentationRequest` zu spezifizieren, die verwendet werden soll, wenn der steuernde UA eine Präsentation startet.

### Überwachen des Verbindungsstatus und Datenaustausch

In `controller.html`:

```html
<button id="disconnectBtn" class="hidden">Disconnect</button>
<button id="stopBtn" class="hidden">Stop</button>
<button id="reconnectBtn" class="hidden">Reconnect</button>
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
  localStorage.setItem("presId", connection.id);

  function showConnectedUI() {
    // Allow the user to disconnect from or terminate the presentation
    stopBtn.classList.remove("hidden");
    disconnectBtn.classList.remove("hidden");
    reconnectBtn.classList.add("hidden");
  }

  function showDisconnectedUI() {
    disconnectBtn.classList.add("hidden");
    stopBtn.classList.add("hidden");
    if (localStorage.getItem("presId")) {
      // If there is a presId in localStorage, allow the user to reconnect
      reconnectBtn.classList.remove("hidden");
    } else {
      reconnectBtn.classList.add("hidden");
    }
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
    localStorage.removeItem("presId");
    connection = null;
    showDisconnectedUI();
  };
}
```

### Überwachen verfügbarer Verbindungen und Begrüßung

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

### Übermittlung von Sprachinformationen mit einer Nachricht

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

[Presentation API polyfill](https://mediascape.github.io/presentation-api-polyfill/) enthält ein JavaScript-Polyfill der [Presentation API](https://w3c.github.io/presentation-api/)-Spezifikation, die innerhalb der [Second Screen Working Group](https://www.w3.org/2014/secondscreen/) bei W3C standardisiert wird. Das Polyfill ist hauptsächlich dazu gedacht, zu erforschen, wie die Presentation API über verschiedene Präsentationsmechanismen hinweg implementiert werden kann.
