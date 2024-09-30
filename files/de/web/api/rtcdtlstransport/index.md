---
title: RTCDtlsTransport
slug: Web/API/RTCDtlsTransport
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die **`RTCDtlsTransport`**-Schnittstelle bietet Zugriff auf Informationen über den Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**)-Transport, über den die [RTP](/de/docs/Glossary/RTP)- und [RTCP](/de/docs/Glossary/RTCP)-Pakete einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von ihren [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)- und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten gesendet und empfangen werden.

Ein `RTCDtlsTransport`-Objekt wird auch verwendet, um Informationen über [SCTP](/de/docs/Glossary/SCTP)-Pakete bereitzustellen, die von den [Datenkanälen](/de/docs/Web/API/RTCDataChannel) einer Verbindung übertragen und empfangen werden.

Eigenschaften des DTLS-Transports beinhalten die Hinzufügung von Sicherheit zum zugrunde liegenden Transport; die `RTCDtlsTransport`-Schnittstelle kann verwendet werden, um Informationen über den zugrunde liegenden Transport und die vom DTLS-Layer hinzugefügte Sicherheit zu erhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugrunde liegende [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekt zurück.
- [`state`](/de/docs/Web/API/RTCDtlsTransport/state) {{ReadOnlyInline}}
  - : Liefert einen String, der den Zustand des zugrunde liegenden Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**)-Transports beschreibt. Es kann einen der folgenden Werte einnehmen: `new`, `connecting`, `connected`, `closed` oder `failed`.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates)
  - : Gibt ein Array von {{jsxref("ArrayBuffer")}} zurück, das die Zertifikate des Remote-Peers der Verbindung enthält.

## Ereignisse

- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)

  - : Wird gesendet, wenn ein Transport-Fehler auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des DTLS-Transports ändert.

## Beschreibung

### Zuweisung von DTLS-Transporten

`RTCDtlsTransport`-Objekte werden erstellt, wenn eine App entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft. Die Anzahl der erstellten DTLS-Transporte und deren Verwendung hängt vom BUNDLE-Modus ab, der bei der Erstellung der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird.

Ob BUNDLE verwendet wird, hängt davon ab, was das andere Ende verhandeln kann. Alle Browser unterstützen BUNDLE, sodass, wenn beide Endpunkte Browser sind, Sie sicher sein können, dass BUNDLE verwendet wird.

Einige nicht-browserbasierte Legacy-Endpunkte unterstützen jedoch möglicherweise kein BUNDLE. Um mit solchen Endpunkten verhandeln zu können (oder sie vollständig auszuschließen), kann die Eigenschaft `bundlePolicy` beim Erstellen der Verbindung angegeben werden. Die `bundlePolicy` ermöglicht die Kontrolle darüber, wie mit diesen Legacy-Endpunkten verhandelt wird. Die Standardrichtlinie ist `"balanced"`, die ein Gleichgewicht zwischen Leistung und Kompatibilität bietet.

Um beispielsweise die Verbindung mit dem höchsten BUNDLE-Niveau zu erstellen:

```js
const rtcConfig = {
  bundlePolicy: "max-bundle",
};

const pc = new RTCPeerConnection(rtcConfig);
```

[Bundling](https://webrtcstandards.info/sdp-bundle/) ermöglicht es, einen `RTCDtlsTransport` zu verwenden, um die Daten für mehrere höhere Transporte wie mehrere [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)s zu tragen.

#### Wenn kein BUNDLE verwendet wird

Wenn die Verbindung ohne BUNDLE erstellt wird, hat jede RTP- oder RTCP-Komponente jedes [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ihren eigenen `RTCDtlsTransport`; das heißt, jeder [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hat seinen eigenen Transport, und alle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte teilen sich einen dem SCTP gewidmeten Transport.

#### Wenn BUNDLE verwendet wird

Wenn die Verbindung BUNDLE verwendet, repräsentiert jedes `RTCDtlsTransport`-Objekt eine Gruppe von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekten. Wenn die Verbindung im `max-compat`-Modus erstellt wurde, ist jeder Transport dafür verantwortlich, alle Kommunikationen für einen bestimmten Medientyp (Audio, Video oder Datenkanal) zu handhaben. Somit hat eine Verbindung mit beliebig vielen Audio- und Videokanälen immer genau einen DTLS-Transport für Audio und einen für Videokommunikationen.

Da Transporte früh im Verhandlungsprozess etabliert werden, ist es wahrscheinlich, dass erst nach ihrer Erstellung bekannt ist, ob der Remote-Peer BUNDLE unterstützt oder nicht. Aus diesem Grund werden anfangs manchmal separate Transporte erstellt, eines für jede Spur, die dann zusammengeführt werden, sobald klar ist, dass BUNDLE möglich ist. Wenn Ihr Code direkt auf [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und/oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugreift, können Sie Situationen begegnen, in denen sie zunächst getrennt sind, dann wird die Hälfte oder mehr von ihnen geschlossen und die Sender und Empfänger werden aktualisiert, um auf die entsprechenden verbleibenden `RTCDtlsTransport`-Objekte zu verweisen.

### Datenkanäle

[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s verwenden [SCTP](/de/docs/Glossary/SCTP) zur Kommunikation. Alle Datenkanäle einer Peer-Verbindung teilen sich einen einzigen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), der in der [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)-Eigenschaft der Verbindung zu finden ist.

Sie können wiederum den `RTCDtlsTransport` identifizieren, der verwendet wird, um die SCTP-Kommunikationen der Datenkanäle sicher zu kapseln, indem Sie die [`transport`](/de/docs/Web/API/RTCSctpTransport/transport)-Eigenschaft des `RTCSctpTransport`-Objekts betrachten.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `tallySenders()`, die über die [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)s einer `RTCPeerConnection` iteriert und ermittelt, wie viele von ihnen sich in verschiedenen Zuständen befinden. Die Funktion gibt ein Objekt zurück, das Eigenschaften enthält, deren Werte angeben, wie viele Sender sich in jedem Zustand befinden.

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

Beachten Sie, dass in diesem Code die neuen und verbindenden Zustände als ein einziger `connectionPending`-Status im zurückgegebenen Objekt behandelt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpSender.transport`](/de/docs/Web/API/RTCRtpSender/transport) und [`RTCRtpReceiver.transport`](/de/docs/Web/API/RTCRtpReceiver/transport)
- [`RTCSctpTransport.transport`](/de/docs/Web/API/RTCSctpTransport/transport)
