---
title: RTCSctpTransport
slug: Web/API/RTCSctpTransport
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Das **`RTCSctpTransport`**-Interface bietet Informationen, die ein Stream Control Transmission Protocol (**{{Glossary("SCTP")}}**) Transport beschreiben. Es liefert Informationen über die Einschränkungen des Transports und bietet zudem eine Möglichkeit, auf das zugrunde liegende Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) Transportprotokoll zuzugreifen, über das SCTP-Pakete für alle Datenkanäle einer {{DOMxRef("RTCPeerConnection")}} gesendet und empfangen werden.

Sie erstellen keine `RTCSctpTransport`-Objekte selbst; stattdessen erhalten Sie Zugriff auf das `RTCSctpTransport` für eine bestimmte `RTCPeerConnection` über deren **{{DOMxRef("RTCPeerConnection.sctp", "sctp")}}**-Eigenschaft.

Die wahrscheinlich nützlichste Eigenschaft auf diesem Interface ist die [`maxMessageSize`](#rtcsctptransport.maxmessagesize)-Eigenschaft, mit der Sie die Obergrenze für die Größe von Nachrichten bestimmen können, die Sie über einen Datenkanal der Peer-Verbindung senden können.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von: {{DOMxRef("EventTarget")}}_.

- {{DOMxRef("RTCSctpTransport.maxChannels")}} {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Anzahl von [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekten angibt, die gleichzeitig geöffnet werden können.
- {{DOMxRef("RTCSctpTransport.maxMessageSize")}} {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die maximale Größe in Byte einer Nachricht angibt, die mit der {{DOMxRef("RTCDataChannel.send()")}}-Methode gesendet werden kann.
- {{DOMxRef("RTCSctpTransport.state")}} {{ReadOnlyInline}}
  - : Ein String-Wert, der den Zustand des SCTP-Transports angibt.
- {{DOMxRef("RTCSctpTransport.transport")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("RTCDtlsTransport")}}-Objekt, das den für die Übertragung und den Empfang von Datenpaketen verwendeten {{Glossary("DTLS")}}-Transport darstellt.

## Ereignisse

Hören Sie auf diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder durch Zuweisen eines Ereignis-Listeners zu der `oneventname`-Eigenschaft dieses Interfaces.

- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - : Wird gesendet, wenn sich der {{DOMxRef("RTCSctpTransport.state")}} ändert.

## Instanz-Methoden

_Dieses Interface hat keine Methoden, erbt jedoch Methoden von: {{DOMxRef("EventTarget")}}._

## Beispiel

TBD

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{DOMxRef("RTCPeerConnection")}}
- {{DOMxRef("RTCPeerConnection.sctp")}}
