---
title: "RTCDtlsTransport: error-Ereignis"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) empfängt ein `error`-Ereignis, wenn ein Transportfehler in der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

Dieses Ereignis ist nicht abbrechbar und bubblet nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den Standard-Eigenschaften, die in der [`Event`](/de/docs/Web/API/Event)-Schnittstelle verfügbar sind, enthält `RTCErrorEvent` auch folgende:_

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler spezifiziert; dieses Objekt enthält den Fehlertyp, Informationen darüber, wo der Fehler aufgetreten ist (wie zum Beispiel welche Zeilennummer im {{Glossary("SDP", "SDP")}} oder welcher {{Glossary("SCTP", "SCTP")}}-Ursachencode betroffen war).

## Beschreibung

Transportfehler haben einen der folgenden Werte für die spezielle Fehler-Eigenschaft [`RTCError`](/de/docs/Web/API/RTCError) [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail):

- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung schlug fehl oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet. Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Details zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wird, wird die Eigenschaft [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert) des Fehlerobjekts auf den Wert des empfangenen DTLSL-Alarms gesetzt. Wenn andererseits ein schwerwiegender Fehler _gesendet_ wurde, wird [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) auf den Wert des Alarms gesetzt.
- `fingerprint-failure`
  - : Das Remote-Zertifikat für das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmte mit keinem der in der SDP aufgelisteten Fingerabdrücke überein. Kann das Remote-Peer das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure`-Fehler führen kann.

## Beispiele

In diesem Beispiel wird die [`onerror`](/de/docs/Web/API/RTCDtlsTransport/onerror)-Ereignishandler-Eigenschaft verwendet, um den Handler für das `error`-Ereignis festzulegen.

```js
transport.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Da `RTCError` kein Fehler aus der Legacy-Gruppe ist, hat der Wert von [`code`](/de/docs/Web/API/DOMException/code) immer den Wert 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
