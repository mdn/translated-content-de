---
title: RTCErrorEvent
slug: Web/API/RTCErrorEvent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCErrorEvent`**-Interface der WebRTC-API repräsentiert einen Fehler, der an ein WebRTC-Objekt gesendet wird. Es basiert auf dem standardmäßigen [`Event`](/de/docs/Web/API/Event)-Interface, erweitert jedoch um RTC-spezifische Informationen, die den Fehler beschreiben, wie unten gezeigt.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCErrorEvent()`](/de/docs/Web/API/RTCErrorEvent/RTCErrorEvent)
  - : Erstellt und gibt ein neues `RTCErrorEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den standardmäßigen Eigenschaften, die im [`Event`](/de/docs/Web/API/Event)-Interface verfügbar sind, enthält `RTCErrorEvent` auch die folgenden:_

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler angibt; dieses Objekt umfasst den Fehlertyp, Informationen darüber, wo der Fehler aufgetreten ist (wie die Zeilennummer im [SDP](/de/docs/Glossary/SDP) oder welcher [SCTP](/de/docs/Glossary/SCTP)-Fehlercode problematisch war).

## Instanz-Methoden

_Es werden keine zusätzlichen Methoden bereitgestellt, abgesehen von denen, die im übergeordneten Interface [`Event`](/de/docs/Web/API/Event) zu finden sind._

## Beschreibung

Es gibt andere Datentypen, die für Fehlerereignisse in WebRTC verwendet werden, wenn Fehler spezielle Informationsanforderungen beim Teilen erfordern. Der wahrscheinlich häufigste davon ist [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), der vom [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignis verwendet wird, das einen Fehler signalisiert, der während der Sammlung von ICE-Kandidaten während der Verbindungsverhandlung aufgetreten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC API
- [`RTCError`](/de/docs/Web/API/RTCError)
- Das `error`-Ereignis tritt in den folgenden Schnittstellen auf: [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) und [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)
- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)
