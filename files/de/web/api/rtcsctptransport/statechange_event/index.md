---
title: "RTCSctpTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCSctpTransport/statechange_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis wird an ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) gesendet, wenn sich die Eigenschaft [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) geändert hat.

<!-- This event is not cancelable and does not bubble. -->

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben seien ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) namens `transport` und eine Funktion `updateStatus()`, die Informationen zum Verbindungszustand anzeigt. Der folgende Code richtet einen Event-Handler ein, der den Benutzer informiert, sobald die Transportverbindung hergestellt ist.

```js
transport.addEventListener("statechange", (event) => {
  switch (transport.state) {
    case "connected":
      updateStatus("Connection started");
      break;
  }
});
```

Mit `onstatechange` sieht das so aus (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onstatechange` hinzugefügte Event-Listener ersetzt werden):

```js
transport.onstatechange = (event) => {
  switch (transport.state) {
    case "connected":
      updateStatus("Connection started");
      break;
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
