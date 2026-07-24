---
title: "RTCDtlsTransport: Error-Ereignis"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: 8e0f027a72e39f1e75f707623b48ece23ab656bc
---

{{APIRef("WebRTC")}}

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) empfängt ein `error`-Ereignis, wenn ein Fehler auf Transportebene in der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Beschreibung

Fehler auf Transportebene haben einen der folgenden Werte für die angegebene [`RTCError`](/de/docs/Web/API/RTCError)-Eigenschaft [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail):

- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schweren Fehler beendet. Die [`message`](/de/docs/Web/API/DOMException/message)-Eigenschaft des Fehlers enthält Details zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wird, ist die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlerobjekts auf den Wert des empfangenen DTLS-Alerts gesetzt. Wenn hingegen ein fataler Fehler _gesendet_ wurde, ist die [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert)-Eigenschaft auf den Wert des gesendeten Alerts gesetzt.
- `fingerprint-failure`
  - : Das Remote-Zertifikat für das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmt mit keinem der in der SDP angegebenen Fingerabdrücke überein. Wenn das Remote-Peer das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure`-Fehler führen kann.

## Beispiele

### Grundlegende Nutzung

Angenommen, wir haben eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, behandelt der folgende Code einen DTLS-Transportfehler:

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.addEventListener("error", (ev) => {
  const err = ev.error;
  // …
});
```

Der gleiche Code, unter Verwendung der `onerror`-Event-Handler-Eigenschaft, sieht so aus:

```js
dtlsTransport.onerror = (ev) => {
  const err = ev.error;
  // …
};
```

> [!NOTE]
> Da `RTCError` nicht zu den Legacy-Fehlern gehört, ist der Wert von [`code`](/de/docs/Web/API/DOMException/code) immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
