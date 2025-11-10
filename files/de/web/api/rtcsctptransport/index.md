---
title: RTCSctpTransport
slug: Web/API/RTCSctpTransport
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Die **`RTCSctpTransport`**-Schnittstelle liefert Informationen, die ein Stream Control Transmission Protocol (**{{Glossary("SCTP", "SCTP")}}**) beschreiben. Sie bietet Informationen über die Einschränkungen des Transports und ermöglicht den Zugriff auf das zugrunde liegende Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transportprotokoll, über das SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

Sie erstellen `RTCSctpTransport`-Objekte nicht selbst; stattdessen erhalten Sie Zugriff auf das `RTCSctpTransport` für eine gegebene `RTCPeerConnection` über ihre **[`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)**-Eigenschaft.

Vermutlich die nützlichste Eigenschaft dieser Schnittstelle ist die [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize)-Eigenschaft, die Sie verwenden können, um die Obergrenze der Größe von Nachrichten zu ermitteln, die Sie über einen Datenkanal auf der Peer-Verbindung senden können.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von: [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`RTCSctpTransport.maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Anzahl von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekten angibt, die gleichzeitig geöffnet werden können.
- [`RTCSctpTransport.maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Größe in Bytes angibt, die eine Nachricht haben kann, die mit der [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode gesendet werden kann.
- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert, der den Zustand des SCTP-Transports angibt.
- [`RTCSctpTransport.transport`](/de/docs/Web/API/RTCSctpTransport/transport) {{ReadOnlyInline}}
  - : Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den {{Glossary("DTLS", "DTLS")}}-Transport darstellt, der für die Übertragung und den Empfang von Datenpaketen verwendet wird.

## Ereignisse

Verwenden Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) ändert.

## Instanzmethoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von: [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)
