---
title: "RTCSctpTransport: statechange Ereignis"
short-title: statechange
slug: Web/API/RTCSctpTransport/statechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis wird an ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) gesendet, um eine Benachrichtigung zu geben, wenn sich die Eigenschaft [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) geändert hat.

<!-- Dieses Ereignis kann nicht abgebrochen werden und verbreitet sich nicht. -->

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben sei ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), `transport`, und eine `updateStatus()`-Funktion, die dem Nutzer Informationsstand der Verbindung präsentiert. Dieser Code richtet einen Ereignis-Handler ein, um den Nutzer zu informieren, wenn der Transport verbunden ist.

```js
pc.addEventListener(
  "statechange",
  (event) => {
    switch (transport.state) {
      case "connected":
        updateStatus("Connection started");
        break;
    }
  },
  false,
);
```

Verwendung von `onstatechange` sieht wie folgt aus:

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

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
