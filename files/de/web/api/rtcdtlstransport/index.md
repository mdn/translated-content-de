---
title: RTCDtlsTransport
slug: Web/API/RTCDtlsTransport
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die **`RTCDtlsTransport`**-Schnittstelle bietet Zugriff auf Informationen über den Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**)-Transport, über den die [RTP](/de/docs/Glossary/RTP)- und [RTCP](/de/docs/Glossary/RTCP)-Pakete einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von ihren [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)- und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten gesendet und empfangen werden.

Ein `RTCDtlsTransport`-Objekt wird auch dazu verwendet, Informationen über [SCTP](/de/docs/Glossary/SCTP)-Pakete bereitzustellen, die über die Datenkanäle einer Verbindung übertragen und empfangen werden.

Zu den Merkmalen des DTLS-Transports gehört die Hinzufügung von Sicherheit zum zugrunde liegenden Transport. Die `RTCDtlsTransport`-Schnittstelle kann verwendet werden, um Informationen über den zugrunde liegenden Transport und die Sicherheit, die durch die DTLS-Schicht hinzugefügt wurde, zu erhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugrunde liegende [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekt zurück.
- [`state`](/de/docs/Web/API/RTCDtlsTransport/state) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des zugrunde liegenden Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**)-Transports beschreibt. Es kann einer der folgenden Werte sein: `new`, `connecting`, `connected`, `closed` oder `failed`.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates)
  - : Gibt ein Array von {{jsxref("ArrayBuffer")}} zurück, das die Zertifikate des Remote-Peers der Verbindung enthält.

## Ereignisse

- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)

  - : Wird gesendet, wenn ein Transport-Fehler in der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des DTLS-Transports ändert.

## Beschreibung

### Zuweisung von DTLS-Transporten

`RTCDtlsTransport`-Objekte werden erstellt, wenn eine App entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft. Die Anzahl der erstellten DTLS-Transporte und wie sie verwendet werden, hängt vom beim Erstellen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendeten Bündelungsmodus ab.

Ob Bündelung verwendet wird, hängt davon ab, was der andere Endpunkt aushandeln kann. Alle Browser unterstützen Bündelung, sodass bei beiden Endpunkten als Browser die Bündelung verwendet wird.

Einige nicht browserbasierte veraltete Endpunkte unterstützen jedoch möglicherweise keine Bündelung. Um mit solchen Endpunkten verhandeln zu können (oder um sie vollständig auszuschließen), kann die Eigenschaft `bundlePolicy` beim Erstellen der Verbindung angegeben werden. Die `bundlePolicy` ermöglicht es Ihnen, zu steuern, wie mit diesen veralteten Endpunkten verhandelt wird. Die Standardrichtlinie ist `"balanced"`, die ein Gleichgewicht zwischen Leistung und Kompatibilität bietet.

Zum Beispiel für das Erstellen der Verbindung mit dem höchstmöglichen Bündelungsgrad:

```js
const rtcConfig = {
  bundlePolicy: "max-bundle",
};

const pc = new RTCPeerConnection(rtcConfig);
```

[Bundling](https://webrtcstandards.info/sdp-bundle/) ermöglicht es Ihnen, einen `RTCDtlsTransport` zu verwenden, um die Daten für mehrere höherstufige Transporte zu übertragen, wie mehrere [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver).

#### Wenn keine BUNDLE verwendet wird

Wenn die Verbindung ohne Verwendung von BUNDLE erstellt wird, hat jede RTP- oder RTCP-Komponente jedes [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ihren eigenen `RTCDtlsTransport`; das heißt, jeder [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hat seinen eigenen Transport, und alle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte teilen sich einen speziell für SCTP vorgesehenen Transport.

#### Wenn BUNDLE verwendet wird

Wenn die Verbindung BUNDLE verwendet, repräsentiert jedes `RTCDtlsTransport`-Objekt eine Gruppe von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekten. Wenn die Verbindung im `max-compat`-Modus erstellt wurde, ist jeder Transport für die Verwaltung aller Kommunikationen für einen bestimmten Medientyp verantwortlich (Audio, Video oder Datenkanal). Eine Verbindung mit einer beliebigen Anzahl von Audio- und Videokanälen wird somit immer genau einen DTLS-Transport für Audio- und einen für Videokommunikation haben.

Da Transporte früh im Verhandlungsprozess eingerichtet werden, ist es wahrscheinlich, dass erst nach ihrer Erstellung bekannt wird, ob der Remote-Peer Bündelung unterstützt. Aus diesem Grund werden Sie manchmal sehen, dass zuerst separate Transporte erstellt werden, eines für jeden Track, die dann zusammengeführt werden, sobald bekannt ist, dass Bündelung möglich ist. Wenn Ihr Code direkt auf [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)s und/oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)s zugreift, könnten Sie Situationen begegnen, in denen sie zunächst getrennt sind, dann werden die Hälfte oder mehr von ihnen geschlossen und die Sender und Empfänger so aktualisiert, dass sie auf die verbleibenden `RTCDtlsTransport`-Objekte verweisen.

### Datenkanäle

[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s verwenden [SCTP](/de/docs/Glossary/SCTP) zur Kommunikation. Alle Datenkanäle einer Peer-Verbindung teilen sich einen einzigen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), der sich in der [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)-Eigenschaft der Verbindung befindet.

Sie können wiederum den `RTCDtlsTransport` identifizieren, der zur sicheren Kapselung der SCTP-Kommunikation der Datenkanäle verwendet wird, indem Sie die [`transport`](/de/docs/Web/API/RTCSctpTransport/transport)-Eigenschaft des `RTCSctpTransport`-Objekts einsehen.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `tallySenders()`, die über die [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)s einer `RTCPeerConnection` iteriert und zählt, wie viele von ihnen sich in verschiedenen Zuständen befinden. Die Funktion gibt ein Objekt zurück, das Eigenschaften enthält, deren Werte angeben, wie viele Sender sich in jedem Zustand befinden.

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
