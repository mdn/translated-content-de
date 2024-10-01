---
title: RTCErrorEvent
slug: Web/API/RTCErrorEvent
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die **`RTCErrorEvent`**-Schnittstelle der WebRTC API stellt einen Fehler dar, der an ein WebRTC-Objekt gesendet wird. Sie basiert auf der Standard-[`Event`](/de/docs/Web/API/Event)-Schnittstelle, fügt jedoch RTC-spezifische Informationen hinzu, die den Fehler beschreiben, wie unten gezeigt.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCErrorEvent()`](/de/docs/Web/API/RTCErrorEvent/RTCErrorEvent)
  - : Erstellt und gibt ein neues `RTCErrorEvent`-Objekt zurück.

## Instanzeigenschaften

_Zusätzlich zu den auf der [`Event`](/de/docs/Web/API/Event)-Schnittstelle verfügbaren Standard-Eigenschaften enthält `RTCErrorEvent` auch folgende:_

- [`error`](/de/docs/Web/API/RTCErrorEvent/error) {{ReadOnlyInline}}
  - : Ein [`RTCError`](/de/docs/Web/API/RTCError)-Objekt, das den aufgetretenen Fehler angibt; dieses Objekt enthält den Fehlertyp, Informationen darüber, wo der Fehler aufgetreten ist (wie die Zeilennummer im {{Glossary("SDP", "SDP")}} oder welcher {{Glossary("SCTP", "SCTP")}}-Fehlercode betroffen war).

## Instanzmethoden

_Es werden keine zusätzlichen Methoden bereitgestellt, die über die auf der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) gefundenen hinausgehen._

## Beschreibung

Es gibt andere Datentypen, die für Fehlerereignisse in WebRTC verwendet werden, wenn besondere Anforderungen an die Informationsübermittlung bestehen. Der vielleicht häufigste davon ist [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), der vom [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)-Ereignis verwendet wird, welches ein Fehler signalisiert, der beim Sammeln von ICE-Kandidaten während der Verbindungsverhandlung aufgetreten ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- WebRTC API
- [`RTCError`](/de/docs/Web/API/RTCError)
- Das `error`-Ereignis tritt bei den folgenden Schnittstellen auf: [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) und [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)
- [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent)
