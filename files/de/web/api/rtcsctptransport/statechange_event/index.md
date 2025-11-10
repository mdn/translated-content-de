---
title: "RTCSctpTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCSctpTransport/statechange_event
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis wird an ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) gesendet, um eine Benachrichtigung bereitzustellen, wenn sich die [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)-Eigenschaft geändert hat.

<!-- Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubble aus. -->

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), `transport`, und eine `updateStatus()`-Funktion, die dem Benutzer Verbindungsstatusinformationen präsentiert, richtet dieser Code einen Ereignishandler ein, um den Benutzer darüber zu informieren, wenn der Transport verbunden ist.

```js
pc.addEventListener("statechange", (event) => {
  switch (transport.state) {
    case "connected":
      updateStatus("Connection started");
      break;
  }
});
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
