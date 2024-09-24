---
title: "RTCSctpTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCSctpTransport/statechange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis wird an ein {{domxref("RTCSctpTransport")}} gesendet, um eine Benachrichtigung bereitzustellen, wenn sich die {{domxref("RTCSctpTransport.state")}}-Eigenschaft geändert hat.

<!-- Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt. -->

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Angenommen, Sie haben ein {{domxref("RTCSctpTransport")}}, `transport`, und eine `updateStatus()`-Funktion, die Verbindungsstatusinformationen dem Benutzer anzeigt, richtet dieser Code einen Ereignishandler so ein, dass der Benutzer erfährt, wenn die Verbindung des Transports hergestellt wurde.

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

Bei Verwendung von `onstatechange` sieht es folgendermaßen aus:

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
- {{domxref("RTCSctpTransport.state")}}
