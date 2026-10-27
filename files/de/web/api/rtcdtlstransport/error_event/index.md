---
title: "RTCDtlsTransport: error-Ereignis"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("WebRTC")}}

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) empfängt ein `error`-Ereignis, wenn bei der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ein Fehler auf Transportebene auftritt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Beschreibung

Bei Fehlern auf Transportebene hat die [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft des zugehörigen [`RTCError`](/de/docs/Web/API/RTCError) einen der folgenden Werte:

- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde aufgrund eines schwerwiegenden Fehlers beendet. Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Einzelheiten zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wurde, wird die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlerobjekts auf den Wert des empfangenen DTLS-Alerts gesetzt. Wenn dagegen ein schwerwiegender Fehler _gesendet_ wurde, wird [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) auf den Wert des Alerts gesetzt.
- `fingerprint-failure`
  - : Das Remote-Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmte mit keinem der im SDP aufgeführten Fingerprints überein. Wenn die Gegenstelle das lokale Zertifikat keinem der bereitgestellten Fingerprints zuordnen kann, tritt dieser Fehler nicht auf. Stattdessen kann in diesem Fall ein `dtls-failure`-Fehler auftreten.

## Beispiele

### Grundlegende Verwendung

Für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `pc` behandelt der folgende Code einen DTLS-Transportfehler:

```js
const dtlsTransport = pc.getSenders()[0].transport;

dtlsTransport.addEventListener("error", (ev) => {
  const err = ev.error;
  // …
});
```

Derselbe Code sieht mit der Event-Handler-Eigenschaft `onerror` wie folgt aus. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onerror` hinzugefügte Event-Listener ersetzt werden:

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
