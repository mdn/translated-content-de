---
title: "RTCDtlsTransport: statechange-Event"
short-title: statechange
slug: Web/API/RTCDtlsTransport/statechange_event
l10n:
  sourceCommit: ef185b1e0a720a4b7f5da3745831871248e6a2f1
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Event tritt auf, wenn sich der Zustand von [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ändert. Die Eigenschaft [`state`](/de/docs/Web/API/RTCDtlsTransport/state) kann verwendet werden, um den aktuellen Zustand des zugrunde liegenden Datagram Transport Layer Security (DTLS)-Transports zu bestimmen.

Dieses Event kann nicht abgebrochen werden und entfaltet sich nicht.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Eventtyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Angenommen, es gibt eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, erzeugt der folgende Code einen Event-Handler, der eine Funktion namens `handleFailure()` aufruft, wenn der DTLS-Transport in einen Fehlerzustand wechselt.

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.addEventListener("statechange", (ev) => {
  if (dtlsTransport.state === "failed") {
    handleFailure(pc);
  }
});
```

Der gleiche Code, unter Verwendung der `onstatechange`-Event-Handler-Eigenschaft, sieht so aus:

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.onstatechange = (ev) => {
  if (dtlsTransport.state === "failed") {
    handleFailure(pc);
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [`RTCDtlsTransport.state`](/de/docs/Web/API/RTCDtlsTransport/state)
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
