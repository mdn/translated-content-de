---
title: RTCErrorEvent
slug: Web/API/RTCErrorEvent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCErrorEvent`**-Interface der WebRTC-API repräsentiert einen Fehler, der an ein WebRTC-Objekt gesendet wird. Es basiert auf dem Standard-{{domxref("Event")}}-Interface, fügt jedoch RTC-spezifische Informationen hinzu, die den Fehler beschreiben, wie im Folgenden gezeigt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("RTCErrorEvent.RTCErrorEvent", "RTCErrorEvent()")}}
  - : Erstellt und gibt ein neues `RTCErrorEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den Standard-Eigenschaften, die im {{domxref("Event")}}-Interface verfügbar sind, enthält `RTCErrorEvent` auch die folgenden:_

- {{domxref("RTCErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : Ein {{domxref("RTCError")}}-Objekt, das den aufgetretenen Fehler angibt; dieses Objekt enthält den Typ des aufgetretenen Fehlers, Informationen darüber, wo der Fehler aufgetreten ist (z. B. welche Zeilennummer in der {{Glossary("SDP")}} oder welcher {{Glossary("SCTP")}}-Ursachencode betroffen war).

## Instanz-Methoden

_Es werden keine zusätzlichen Methoden über die hinaus bereitgestellt, die auf dem übergeordneten Interface, {{domxref("Event")}}, zu finden sind._

## Beschreibung

Es gibt andere Datentypen, die für Fehlerereignisse in WebRTC verwendet werden, wenn spezielle Informationsanforderungen bestehen. Der gebräuchlichste davon ist wahrscheinlich das {{domxref("RTCPeerConnectionIceErrorEvent")}}, das vom {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}-Ereignis verwendet wird, welches einen Fehler signalisiert, der beim Sammeln von ICE-Kandidaten während der Verbindungsverhandlung aufgetreten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC-API
- {{domxref("RTCError")}}
- Das `error`-Ereignis tritt auf den folgenden Schnittstellen auf: {{domxref("RTCDataChannel")}} und {{domxref("RTCDtlsTransport")}}
- {{domxref("RTCPeerConnectionIceErrorEvent")}}
