---
title: "RTCDtlsTransport: Fehlerereignis"
short-title: Fehler
slug: Web/API/RTCDtlsTransport/error_event
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Ein {{domxref("RTCDtlsTransport")}} empfängt ein `error`-Ereignis, wenn ein transportbezogener Fehler auf der {{domxref("RTCPeerConnection")}} auftritt.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("RTCErrorEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("RTCErrorEvent")}}

## Ereigniseigenschaften

_Neben den Standard-Eigenschaften, die in der {{domxref("Event")}}-Schnittstelle verfügbar sind, umfasst `RTCErrorEvent` auch die folgenden:_

- {{domxref("RTCErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : Ein {{domxref("RTCError")}}-Objekt, das den aufgetretenen Fehler angibt; dieses Objekt enthält den Fehlertyp und Informationen darüber, wo der Fehler aufgetreten ist (z. B. welche Zeilennummer in der {{Glossary("SDP")}} oder welcher {{Glossary("SCTP")}}-Ursachencode betroffen war).

## Beschreibung

Transportbezogene Fehler haben einen der folgenden Werte für die angegebene {{domxref("RTCError")}}-Eigenschaft {{domxref("RTCError.errorDetail", "errorDetail")}}:

- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schweren Fehler beendet. Die {{domxref("DOMException.message", "message")}} des Fehlers enthält Details zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wird, wird die {{domxref("RTCError.receivedAlert", "receivedAlert")}}-Eigenschaft des Fehlerobjekts auf den Wert des empfangenen DTLS-Alerts gesetzt. Wenn im Gegensatz dazu ein schwerwiegender Fehler _gesendet_ wurde, wird die {{domxref("RTCError.sentAlert", "sentAlert")}}-Eigenschaft auf den Wert des gesendeten Alerts gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den {{domxref("RTCDtlsTransport")}} stimmte mit keinem der in der SDP aufgeführten Fingerabdrücke überein. Wenn das entfernte Gegenüber das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure`-Fehler führen kann.

## Beispiele

In diesem Beispiel wird die {{domxref("RTCDtlsTransport.onerror", "onerror")}}-Eigenschaft des Ereignis-Handlers verwendet, um den Handler für das `error`-Ereignis festzulegen.

```js
transport.onerror = (ev) => {
  const err = ev.error;

  // …
};
```

> [!NOTE]
> Da `RTCError` nicht zu den alten Fehlern gehört, ist der Wert von {{domxref("DOMException.code", "code")}} immer 0.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
