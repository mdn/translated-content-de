---
title: "RTCSctpTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCSctpTransport/statechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis wird an ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) gesendet, um eine Benachrichtigung zu liefern, wenn sich die [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)-Eigenschaft geändert hat.

<!-- Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt. -->

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Gegeben ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), `transport`, und eine Funktion `updateStatus()`, die dem Benutzer Verbindungsstatusinformationen präsentiert, richtet dieser Code einen Ereignishandler ein, um den Benutzer zu informieren, wenn die Verbindung aktiv ist.

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

Mit `onstatechange` sieht es so aus:

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
