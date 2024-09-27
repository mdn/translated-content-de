---
title: Presentation API
slug: Web/API/Presentation_API
l10n:
  sourceCommit: 88c098f5bd651a5c587d7b32dba055766c1789ca
---

{{securecontext_header}}{{SeeCompatTable}}{{DefaultAPISidebar("Presentation API")}}

Die Presentation API ermöglicht es einem [User-Agent](/de/docs/Glossary/user_agent) (wie einem Webbrowser), Webinhalte effektiv über große Präsentationsgeräte wie Projektoren und netzwerkverbundene Fernseher anzuzeigen. Unterstützte Arten von Multimedia-Geräten umfassen sowohl Displays, die über HDMI, DVI oder ähnliches verkabelt sind, als auch drahtlose Verbindungen über [DLNA](https://www.dlna.org/), [Chromecast](https://developers.google.com/cast/), [AirPlay](https://developer.apple.com/airplay/) oder [Miracast](https://www.wi-fi.org/discover-wi-fi/miracast).

![1-UA-Modus lädt die Steuerungs- und Präsentationsseiten zusammen, bevor sie an Displays ausgegeben werden. 2-UA-Modus lädt sie separat über das Presentation Control Protocol.](presentation_mode_illustration.png)

Im Allgemeinen verwendet eine Webseite die Presentation Controller API, um die Webinhalte anzugeben, die auf dem Präsentationsgerät gerendert werden sollen und die Präsentationssitzung zu starten. Mit der Presentation Receiver API erhalten die präsentierten Webinhalte den Sitzungsstatus. Indem eine Nachrichten-basierte Verbindung sowohl für die Steuerungs- als auch für die Empfangsseite bereitgestellt wird, kann ein Webentwickler die Interaktion zwischen diesen beiden Seiten implementieren.

Abhängig vom Verbindungsmekanismus, der durch das Präsentationsgerät bereitgestellt wird, können die Steuerungs- und Empfangsseiten vom selben User-Agent oder von getrennten User-Agents gerendert werden.

- Bei Geräten im 1-UA-Modus werden beide Seiten vom selben User-Agent geladen. Das Rendering-Ergebnis der Empfangsseite wird jedoch über ein unterstütztes Remote-Rendering-Protokoll an das Präsentationsgerät gesendet.
- Bei Geräten im 2-UA-Modus wird die Empfangsseite direkt auf dem Präsentationsgerät geladen. Der steuernde User-Agent kommuniziert über ein unterstütztes Präsentationskontrollprotokoll mit dem Präsentationsgerät, um die Präsentationssitzung zu steuern und Nachrichten zwischen den beiden Seiten zu übertragen.

## Schnittstellen

- [`Presentation`](/de/docs/Web/API/Presentation)
  - : In einem steuernden Suchkontext bietet die `Presentation`-Schnittstelle einen Mechanismus, um das Standardverhalten des Browsers beim Starten einer Präsentation auf einem externen Bildschirm zu überschreiben. In einem empfangenden Suchkontext bietet die `Presentation`-Schnittstelle Zugriff auf die verfügbaren Präsentationsverbindungen.
- [`PresentationRequest`](/de/docs/Web/API/PresentationRequest)
  - : Initiiert oder stellt eine Verbindung zu einer Präsentation her, die von einem steuernden Suchkontext aus durchgeführt wird.
- [`PresentationAvailability`](/de/docs/Web/API/PresentationAvailability)
  - : Ein [PresentationAvailability](/de/docs/Web/API/PresentationAvailability)-Objekt ist mit verfügbaren Präsentationsanzeigen verknüpft und repräsentiert die _Verfügbarkeit der Präsentationsanzeige_ für eine Präsentationsanforderung.
- [`PresentationConnectionAvailableEvent`](/de/docs/Web/API/PresentationConnectionAvailableEvent)
  - : Der `PresentationConnectionAvailableEvent` wird bei einem [`PresentationRequest`](/de/docs/Web/API/PresentationRequest) ausgelöst, wenn eine mit dem Objekt verknüpfte Verbindung erstellt wird.
- [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)
  - : Jede Präsentationsverbindung wird durch ein [PresentationConnection](/de/docs/Web/API/PresentationConnection)-Objekt dargestellt.
- [`PresentationConnectionCloseEvent`](/de/docs/Web/API/PresentationConnectionCloseEvent)
  - : Ein `PresentationConnectionCloseEvent` wird ausgelöst, wenn eine Präsentationsverbindung in einen `closed`-Zustand wechselt.
- [`PresentationReceiver`](/de/docs/Web/API/PresentationReceiver)
  - : Der [PresentationReceiver](/de/docs/Web/API/PresentationReceiver) ermöglicht einem empfangenden Suchkontext den Zugriff auf die steuernden Suchkontexte und die Kommunikation mit ihnen.
- [`PresentationConnectionList`](/de/docs/Web/API/PresentationConnectionList)
  - : `PresentationConnectionList` repräsentiert die Sammlung nicht beendeter Präsentationsverbindungen. Es ist auch ein Monitor für das Ereignis einer neuen verfügbaren Präsentationsverbindung.

## Beispiel

Die folgenden Beispielcodes veranschaulichen die Verwendung der Hauptfunktionen der Presentation API: `controller.html` implementiert den Controller und `presentation.html` implementiert die Präsentation. Beide Seiten werden von der Domain `https://example.org` bereitgestellt (`https://example.org/controller.html` und `https://example.org/presentation.html`). Diese Beispiele gehen davon aus, dass die Steuerungsseite jeweils eine Präsentation verwaltet. Bitte beziehen Sie sich auf die Kommentare in den Codebeispielen für weitere Details.

### Verfügbarkeit von Präsentationsanzeigen überwachen

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

### Eine Präsentation erneut verbinden

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

### Präsentationsinitiierung durch den steuernden UA

In der Datei `controller.html`:

```html
<script>
  navigator.presentation.defaultRequest = new PresentationRequest(presUrls);
  navigator.presentation.defaultRequest.onconnectionavailable = (evt) => {
    setConnection(evt.connection);
  };
</script>
```

Durch das Setzen von `presentation.defaultRequest` kann die Seite die `PresentationRequest` angeben, die verwendet werden soll, wenn der steuernde UA eine Präsentation initiiert.

### Überwachen des Verbindungsstatus und Datenaustausch

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

[Presentation API Polyfill](https://mediascape.github.io/presentation-api-polyfill/) enthält ein JavaScript-Polyfill der [Presentation API](https://w3c.github.io/presentation-api/) Spezifikation, die sich in der Standardisierung innerhalb der [Second Screen Working Group](https://www.w3.org/2014/secondscreen/) bei W3C befindet. Das Polyfill ist hauptsächlich dafür gedacht, zu erkunden, wie die Presentation API auf verschiedenen Präsentationsmechanismen implementiert werden kann.
