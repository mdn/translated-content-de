---
title: "RTCDtlsTransport: statechange-Ereignis"
short-title: statechange
slug: Web/API/RTCDtlsTransport/statechange_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein **`statechange`**-Ereignis tritt auf, wenn sich der Zustand eines [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ändert. Mit der Eigenschaft [`state`](/de/docs/Web/API/RTCDtlsTransport/state) können Sie den aktuellen Zustand des zugrunde liegenden Datagram Transport Layer Security (DTLS)-Transports ermitteln.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc` erstellt der folgende Code einen Event-Handler, der eine Funktion namens `handleFailure()` aufruft, wenn der DTLS-Transport in einen Fehlerzustand übergeht.

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.addEventListener("statechange", (ev) => {
  if (dtlsTransport.state === "failed") {
    handleFailure(pc);
  }
});
```

Derselbe Code sieht mit der Event-Handler-Eigenschaft `onstatechange` so aus (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onstatechange` hinzugefügte Event-Listener ersetzt werden):

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
