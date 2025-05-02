---
title: "RTCSctpTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCSctpTransport/statechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis wird an ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) gesendet, um eine Benachrichtigung zu geben, wenn sich die [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)-Eigenschaft geändert hat.

<!-- Dieses Ereignis kann nicht abgebrochen werden und es wird nicht propagiert. -->

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Angenommen, Sie haben ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), `transport`, und eine `updateStatus()`-Funktion, die Verbindungsstatusinformationen dem Benutzer anzeigt. Dieser Code richtet einen Ereignishandler ein, um den Benutzer zu informieren, wenn die Verbindung hergestellt ist.

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

Unter Verwendung von `onstatechange` sieht es so aus:

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
