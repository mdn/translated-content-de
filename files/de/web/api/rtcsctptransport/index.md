---
title: RTCSctpTransport
slug: Web/API/RTCSctpTransport
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCSctpTransport`** stellt Informationen über einen Transport mit dem Stream Control Transmission Protocol (**{{Glossary("SCTP", "SCTP")}}**) bereit. Dazu gehören Informationen über die Beschränkungen des Transports. Außerdem ermöglicht sie den Zugriff auf den zugrunde liegenden Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**)-Transport, über den SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

Sie erstellen `RTCSctpTransport`-Objekte nicht selbst. Stattdessen greifen Sie über die Eigenschaft **[`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)** einer `RTCPeerConnection` auf deren `RTCSctpTransport` zu.

Eine besonders nützliche Eigenschaft dieser Schnittstelle ist [`maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize). Mit ihr können Sie die maximale Größe von Nachrichten ermitteln, die Sie über einen Datenkanal der Peer-Verbindung senden können.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von: [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`RTCSctpTransport.maxChannels`](/de/docs/Web/API/RTCSctpTransport/maxChannels) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der angibt, wie viele [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte gleichzeitig geöffnet sein können.
- [`RTCSctpTransport.maxMessageSize`](/de/docs/Web/API/RTCSctpTransport/maxMessageSize) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Größe einer Nachricht in Bytes angibt, die mit der Methode [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) gesendet werden kann.
- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) {{ReadOnlyInline}}
  - : Ein String-Enumerationswert, der den Zustand des SCTP-Transports angibt.
- [`RTCSctpTransport.transport`](/de/docs/Web/API/RTCSctpTransport/transport) {{ReadOnlyInline}}
  - : Ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport)-Objekt, das den für das Senden und Empfangen von Datenpaketen verwendeten {{Glossary("DTLS", "DTLS")}}-Transport repräsentiert.

## Instanzmethoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt aber Methoden von: [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Wird ausgelöst, wenn sich [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state) ändert.

## Beispiel

Noch zu ergänzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)
