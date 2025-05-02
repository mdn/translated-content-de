---
title: "RTCDtlsTransport: error event"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebRTC")}}

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) erhält ein `error`-Ereignis, wenn ein Fehler auf der Transporteebene bei der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Neben den standardmäßigen Eigenschaften, die auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle verfügbar sind, enthält `RTCErrorEvent` auch die folgenden:_

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler angibt; dieses Objekt enthält den Fehler-Typ, Informationen über den Ort des Fehlers (wie z.B. welche Zeilennummer im {{Glossary("SDP", "SDP")}} oder welcher {{Glossary("SCTP", "SCTP")}}-Ursachencode betroffen war).

## Beschreibung

Fehler auf der Transporteebene werden einen der folgenden Werte für die spezifische Fehler [`RTCError`](/de/docs/Web/API/RTCError)-Eigenschaft [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) haben:

- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet. Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Details zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wird, wird die Eigenschaft [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert) des Fehlerobjekts auf den Wert der empfangenen DTLSL-Warnung gesetzt. Wenn hingegen ein schwerwiegender Fehler _gesendet_ wurde, wird [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) auf den Wert der Warnung gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmte nicht mit einem der im SDP aufgeführten Fingerabdrücke überein. Wenn das entfernte Peering das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl dies stattdessen zu einem `dtls-failure` führen kann.

## Beispiele

In diesem Beispiel wird die [`onerror`](/de/docs/Web/API/RTCDtlsTransport/onerror) Ereignis-Handler-Eigenschaft verwendet, um den Handler für das `error`-Ereignis festzulegen.

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
