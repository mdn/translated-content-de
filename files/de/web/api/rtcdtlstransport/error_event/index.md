---
title: "RTCDtlsTransport: error event"
short-title: error
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: 1d2dd9c951674bf559b9b6d5223704ea3d8d8269
---

{{APIRef("WebRTC")}}

Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) empfängt ein `error`-Ereignis, wenn ein Transport-Level-Fehler auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Neben den Standard-Eigenschaften, die in der [`Event`](/de/docs/Web/API/Event)-Schnittstelle verfügbar sind, enthält `RTCErrorEvent` auch die folgenden:_

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler spezifiziert; dieses Objekt enthält den Fehlertyp, Informationen darüber, wo der Fehler aufgetreten ist (wie z.B. welche Zeilennummer im {{Glossary("SDP", "SDP")}} oder welcher {{Glossary("SCTP", "SCTP")}} Ursache-Code betroffen war).

## Beschreibung

Transport-Level-Fehler haben einen der folgenden Werte für die angegebene `errorDetail`-Eigenschaft des [`RTCError`](/de/docs/Web/API/RTCError):

- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem fatalen Fehler beendet. Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Details zur Art des Fehlers. Wenn ein fataler Fehler _empfangen_ wird, wird die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlers auf den Wert des empfangenen DTLSL-Warnhinweises gesetzt. Wenn hingegen ein fataler Fehler _gesendet_ wurde, wird [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) auf den Wert des Warnhinweises gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmt mit keinem der im SDP aufgeführten Fingerabdrücke überein. Wenn der entfernte Partner das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure`-Fehler führen kann.

## Beispiele

In diesem Beispiel wird die `onerror`-Event-Handler-Eigenschaft verwendet, um den Handler für das `error`-Ereignis festzulegen.

```js
transport.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Da `RTCError` keine der älteren Fehler ist, hat der Wert von [`code`](/de/docs/Web/API/DOMException/code) immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
