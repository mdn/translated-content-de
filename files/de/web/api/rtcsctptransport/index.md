---
title: RTCSctpTransport
slug: Web/API/RTCSctpTransport
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Das **`RTCSctpTransport`**-Interface liefert Informationen, die ein Stream Control Transmission Protocol (**{{Glossary("SCTP", "SCTP")}}**) Transport beschreiben. Dies bietet Informationen über die Einschränkungen des Transports, ermöglicht aber auch den Zugriff auf das zugrunde liegende Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transportprotokoll, über das SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

`RTCSctpTransport`-Objekte erstellen Sie nicht selbst; stattdessen erhalten Sie Zugriff auf das `RTCSctpTransport` für eine gegebene `RTCPeerConnection` über ihre **[`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)**-Eigenschaft.

Möglicherweise die nützlichste Eigenschaft dieses Interfaces ist die [`maxMessageSize`](#rtcsctptransport.maxmessagesize)-Eigenschaft, die Sie verwenden können, um das obere Limit der Größe von Nachrichten zu bestimmen, die über einen Datenkanal in der Peer-Verbindung gesendet werden können.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von: [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`RTCSctpTransport.maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Anzahl von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekten angibt, die gleichzeitig geöffnet werden können.
- [`RTCSctpTransport.maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Größe in Bytes einer Nachricht angibt, die mit der Methode [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) gesendet werden kann.
- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert, der den Zustand des SCTP-Transports angibt.
- [`RTCSctpTransport.transport`](/de/docs/Web/API/RTCSctpTransport/transport) {{ReadOnlyInline}}
  - : Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den {{Glossary("DTLS", "DTLS")}}-Transport darstellt, der für die Übertragung und den Empfang von Datenpaketen verwendet wird.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder, indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) ändert.

## Instanz-Methoden

_Dieses Interface hat keine Methoden, erbt aber Methoden von: [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

Wird noch entwickelt

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)
