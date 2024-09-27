---
title: RTCSctpTransport
slug: Web/API/RTCSctpTransport
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCSctpTransport`**-Schnittstelle stellt Informationen bereit, die ein Stream Control Transmission Protocol (**[SCTP](/de/docs/Glossary/SCTP)**)-Transport beschreiben. Dies bietet Informationen über die Einschränkungen des Transports, ermöglicht jedoch auch den Zugriff auf den zugrunde liegenden Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**)-Transport, über den SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

Sie erstellen `RTCSctpTransport`-Objekte nicht selbst; stattdessen erhalten Sie Zugriff auf den `RTCSctpTransport` für eine gegebene `RTCPeerConnection` über deren **[`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)**-Eigenschaft.

Wahrscheinlich die nützlichste Eigenschaft dieser Schnittstelle ist ihre [`maxMessageSize`](#rtcsctptransport.maxmessagesize)-Eigenschaft, die Sie verwenden können, um die Obergrenze für die Größe von Nachrichten zu bestimmen, die Sie über einen Datenkanal der Peer-Verbindung senden können.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von: [`EventTarget`](/de/docs/Web/API/EventTarget)_.

- [`RTCSctpTransport.maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Anzahl von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekten angibt, die gleichzeitig geöffnet werden können.
- [`RTCSctpTransport.maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Größe in Bytes angibt, die eine Nachricht haben kann, die mit der Methode [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) gesendet wird.
- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) {{ReadOnlyInline}}
  - : Ein aufgezählter Zeichenfolgenwert, der den Status des SCTP-Transports angibt.
- [`RTCSctpTransport.transport`](/de/docs/Web/API/RTCSctpTransport/transport) {{ReadOnlyInline}}
  - : Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den [DTLS](/de/docs/Glossary/DTLS)-Transport darstellt, der für die Übertragung und den Empfang von Datenpaketen verwendet wird.

## Ereignisse

Hören Sie auf diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) ändert.

## Instanzmethoden

_Diese Schnittstelle hat keine Methoden, erbt jedoch Methoden von: [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Beispiel

Wird noch festgelegt

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)
