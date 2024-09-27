---
title: "RTCDtlsTransport: error-Ereignis"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) erhält ein `error`-Ereignis, wenn ein Transport-Fehler auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den Standard-Eigenschaften, die auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle verfügbar sind, enthält `RTCErrorEvent` auch die folgenden:_

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler spezifiziert; dieses Objekt enthält den Fehlertyp, Informationen darüber, wo der Fehler aufgetreten ist (z. B. welche Zeilennummer in der [SDP](/de/docs/Glossary/SDP) oder welcher [SCTP](/de/docs/Glossary/SCTP)-Ursachencode betroffen war).

## Beschreibung

Transport-Fehler haben einen der folgenden Werte für die spezifizierte Fehler-Property `RTCError` [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail):

- `dtls-failure`
  - : Die Aushandlung der [DTLS](/de/docs/Glossary/DTLS)-Verbindung ist fehlgeschlagen, oder die Verbindung wurde mit einem fatalen Fehler beendet. Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Details über die Art des Fehlers. Wenn ein fataler Fehler _empfangen_ wird, ist die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlerobjekts auf den Wert des empfangenen DTLS-Alarms gesetzt. Wenn hingegen ein fataler Fehler _gesendet_ wurde, ist die [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert)-Eigenschaft auf den Wert des gesendeten Alarms gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) entsprach keinem der im SDP aufgeführten Fingerprints. Wenn der Remote-Peer das lokale Zertifikat nicht mit den bereitgestellten Fingerprints abgleichen kann, tritt dieser Fehler nicht auf, aber diese Situation kann stattdessen zu einem `dtls-failure`-Fehler führen.

## Beispiele

In diesem Beispiel wird die [`onerror`](/de/docs/Web/API/RTCDtlsTransport/onerror) Ereignis-Handler-Eigenschaft verwendet, um den Handler für das `error`-Ereignis zu setzen.

```js
transport.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Da `RTCError` nicht zu den veralteten Fehlern gehört, ist der Wert von [`code`](/de/docs/Web/API/DOMException/code) immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
