---
title: RTCDtlsTransport
slug: Web/API/RTCDtlsTransport
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{APIRef("WebRTC")}}

Die **`RTCDtlsTransport`**-Schnittstelle bietet Zugriff auf Informationen über den Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**)-Transport, über den die {{Glossary("RTP", "RTP")}}- und {{Glossary("RTCP", "RTCP")}}-Pakete einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von ihren [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)- und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten gesendet und empfangen werden.

Ein `RTCDtlsTransport`-Objekt wird auch verwendet, um Informationen über {{Glossary("SCTP", "SCTP")}}-Pakete bereitzustellen, die von den [Datakanälen](/de/docs/Web/API/RTCDataChannel) einer Verbindung übertragen und empfangen werden.

Merkmale des DTLS-Transports umfassen die Hinzufügung von Sicherheit zum zugrunde liegenden Transport; über die `RTCDtlsTransport`-Schnittstelle können Informationen über den zugrunde liegenden Transport und die Sicherheitsschicht des DTLS bereitgestellt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugrunde liegende [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekt zurück.
- [`state`](/de/docs/Web/API/RTCDtlsTransport/state) {{ReadOnlyInline}}
  - : Gibt einen String zurück,
    der den Zustand des zugrunde liegenden Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**)-Transports beschreibt.
    Es kann einer der folgenden Werte sein:
    `new`, `connecting`, `connected`, `closed` oder `failed`.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates)
  - : Gibt ein Array von {{jsxref("ArrayBuffer")}} zurück, das die Zertifikate des Remote-Peers der Verbindung enthält.

## Ereignisse

- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)

  - : Wird gesendet, wenn ein Fehler auf Transport-Ebene bei der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des DTLS-Transports ändert.

## Beschreibung

### Zuweisung von DTLS-Transports

`RTCDtlsTransport`-Objekte werden erstellt, wenn eine Anwendung entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft. Die Anzahl der erstellten DTLS-Transports und deren Verwendung hängt vom Bunde-Modus ab, der bei der Erstellung der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird.

Ob Bundling verwendet wird, hängt davon ab, was das andere Endpunkt verhandeln kann. Alle Browser unterstützen Bundling, sodass Sie sicher sein können, dass es verwendet wird, wenn beide Endpunkte Browser sind.

Einige nicht-Browser-basierte alte Endpunkte unterstützen jedoch möglicherweise kein Bundling. Um mit solchen Endpunkten verhandeln zu können (oder sie vollständig auszuschließen), kann die `bundlePolicy`-Eigenschaft bei der Erstellung der Verbindung angegeben werden. Die `bundlePolicy` erlaubt es Ihnen, zu steuern, wie mit diesen alten Endpunkten verhandelt wird. Die Standardrichtlinie ist `"balanced"`, die eine Balance zwischen Leistung und Kompatibilität bietet.

Um beispielsweise die Verbindung mit dem höchsten Bundling-Level zu erstellen:

```js
const rtcConfig = {
  bundlePolicy: "max-bundle",
};

const pc = new RTCPeerConnection(rtcConfig);
```

[Bundling](https://datatracker.ietf.org/doc/rfc8843/) ermöglicht es, einen `RTCDtlsTransport` zu verwenden, um die Daten für mehrere höherstufige Transports wie mehrere [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)s zu übertragen.

#### Ohne BUNDLE

Wenn die Verbindung ohne Verwendung von BUNDLE erstellt wird, hat jede RTP- oder RTCP-Komponente jedes [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ihren eigenen `RTCDtlsTransport`; das heißt, jeder [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hat seinen eigenen Transport, und alle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte teilen sich einen Transport, der SCTP gewidmet ist.

#### Mit BUNDLE

Wenn die Verbindung BUNDLE verwendet, repräsentiert jedes `RTCDtlsTransport`-Objekt eine Gruppe von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekten. Wird die Verbindung im `max-compat`-Modus erstellt, ist jeder Transport dafür verantwortlich, die gesamte Kommunikation für eine gegebene Medienart (Audio, Video oder Datenkanal) zu handhaben. Somit wird eine Verbindung mit einer beliebigen Anzahl von Audio- und Videokanälen immer genau einen DTLS-Transport für Audio- und einen für Videokommunikation haben.

Da Transports früh im Verhandlungsprozess etabliert werden, ist es wahrscheinlich, dass erst nach ihrer Erstellung bekannt ist, ob der Remote-Peer Bundling unterstützt. Aus diesem Grund sehen Sie manchmal, dass zunächst separate Transports erstellt werden, einer für jede Spur, und dann gebündelt werden, sobald bekannt ist, dass Bundling möglich ist. Wenn Ihr Code direkt auf [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und/oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugreift, könnten Sie auf Situationen stoßen, in denen sie anfangs getrennt sind, dann wird die Hälfte oder mehr geschlossen und die Sender und Empfänger werden aktualisiert, um auf die entsprechenden verbleibenden `RTCDtlsTransport`-Objekte zu verweisen.

### Datenkanäle

[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s verwenden {{Glossary("SCTP", "SCTP")}} für die Kommunikation. Alle Datenkanäle einer Peer-Verbindung teilen sich einen einzigen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), der in der [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)-Eigenschaft der Verbindung zu finden ist.

Sie können wiederum den `RTCDtlsTransport` identifizieren, der verwendet wird, um die SCTP-Kommunikation der Datenkanäle sicher zu kapseln, indem Sie die [`transport`](/de/docs/Web/API/RTCSctpTransport/transport)-Eigenschaft des `RTCSctpTransport`-Objekts untersuchen.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `tallySenders()`, die über die [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)s einer `RTCPeerConnection` iteriert und aufzeichnet, wie viele von ihnen sich in verschiedenen Zuständen befinden. Die Funktion gibt ein Objekt zurück, dessen Eigenschaften angeben, wie viele Sender sich in jedem Zustand befinden.

```js
let pc = new RTCPeerConnection({ bundlePolicy: "max-bundle" });

// …

function tallySenders(pc) {
  let results = {
    transportMissing: 0,
    connectionPending: 0,
    connected: 0,
    closed: 0,
    failed: 0,
    unknown: 0,
  };

  let senderList = pc.getSenders();
  senderList.forEach((sender) => {
    let transport = sender.transport;

    if (!transport) {
      results.transportMissing++;
    } else {
      switch (transport.state) {
        case "new":
        case "connecting":
          results.connectionPending++;
          break;
        case "connected":
          results.connected++;
          break;
        case "closed":
          results.closed++;
          break;
        case "failed":
          results.failed++;
          break;
        default:
          results.unknown++;
          break;
      }
    }
  });
  return results;
}
```

Beachten Sie, dass in diesem Code die Zustände `new` und `connecting` als ein einziger `connectionPending`-Status im zurückgegebenen Objekt behandelt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpSender.transport`](/de/docs/Web/API/RTCRtpSender/transport) und [`RTCRtpReceiver.transport`](/de/docs/Web/API/RTCRtpReceiver/transport)
- [`RTCSctpTransport.transport`](/de/docs/Web/API/RTCSctpTransport/transport)
