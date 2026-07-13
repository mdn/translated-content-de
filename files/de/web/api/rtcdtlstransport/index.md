---
title: RTCDtlsTransport
slug: Web/API/RTCDtlsTransport
l10n:
  sourceCommit: 2dc27362f1f5a228a279f869784597b94a2f8d96
---

{{APIRef("WebRTC")}}

Das **`RTCDtlsTransport`**-Interface bietet Zugriff auf Informationen über den Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transport, über den die {{Glossary("RTP", "RTP")}}- und {{Glossary("RTCP", "RTCP")}}-Pakete einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von ihren [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)- und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten gesendet und empfangen werden.

Ein `RTCDtlsTransport`-Objekt wird auch verwendet, um Informationen über {{Glossary("SCTP", "SCTP")}}-Pakete bereitzustellen, die von den [Datenkanälen](/de/docs/Web/API/RTCDataChannel) einer Verbindung übertragen und empfangen werden.

Merkmale des DTLS-Transports umfassen die Hinzufügung von Sicherheit zum zugrunde liegenden Transport; das `RTCDtlsTransport`-Interface kann verwendet werden, um Informationen über den zugrunde liegenden Transport und die Sicherheit zu erhalten, die von der DTLS-Schicht hinzugefügt wurde.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugrunde liegende [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekt zurück.
- [`state`](/de/docs/Web/API/RTCDtlsTransport/state) {{ReadOnlyInline}}
  - : Gibt einen string zurück,
    der den Zustand des zugrunde liegenden Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transports beschreibt.
    Es kann einen der folgenden Werte haben:
    `new`, `connecting`, `connected`, `closed` oder `failed`.

## Instanzmethoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates)
  - : Gibt ein Array von {{jsxref("ArrayBuffer")}}-Objekten zurück, die die Zertifikatskette des entfernten Peers darstellen.

## Ereignisse

- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Wird gesendet, wenn auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ein Fehler auf Transportschicht-Ebene auftritt.

- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des DTLS-Transports ändert.

## Beschreibung

### Zuweisung von DTLS-Transporten

`RTCDtlsTransport`-Objekte werden erstellt, wenn eine App entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft. Die Anzahl der erstellten DTLS-Transporte und ihre Verwendung hängt vom verwendeten Bündelungsmodus ab, der bei der Erstellung der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird.

[Bündelung](https://datatracker.ietf.org/doc/rfc8843/) ermöglicht es, einen `RTCDtlsTransport` zu verwenden, um die Daten für mehrere höherstufige Transporte, wie mehrere [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) zu tragen.
Ob Bündelung verwendet wird, hängt davon ab, was der andere Endpunkt verhandeln kann. Alle Browser unterstützen Bündelung, sodass, wenn beide Endpunkte Browser sind, Sie sicher sein können, dass Bündelung verwendet wird.

Einige nicht-browserbasierte Legacy-Endpunkte unterstützen jedoch möglicherweise kein Bündel. Um mit solchen Endpunkten verhandeln zu können (oder sie vollständig auszuschließen), kann die Eigenschaft `bundlePolicy` bei der Erstellung der Verbindung angegeben werden. Die `bundlePolicy` ermöglicht es Ihnen, zu steuern, wie mit diesen Legacy-Endpunkten verhandelt wird. Die Standardrichtlinie ist `"balanced"`, die ein Gleichgewicht zwischen Leistung und Kompatibilität bietet.

Zum Beispiel, um die Verbindung mit dem höchsten Bündelungsgrad zu erstellen:

```js
const rtcConfig = {
  bundlePolicy: "max-bundle",
};

const pc = new RTCPeerConnection(rtcConfig);
```

#### Wenn BUNDLE nicht verwendet wird

Wenn die Verbindung erstellt wird, ohne BUNDLE zu verwenden, hat jede RTP- oder RTCP-Komponente jedes [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ihren eigenen `RTCDtlsTransport`; das heißt, jeder [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hat seinen eigenen Transport, und alle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte teilen sich einen Transport, der dem SCTP gewidmet ist.

#### Wenn BUNDLE verwendet wird

Wenn die Verbindung BUNDLE verwendet, repräsentiert jedes `RTCDtlsTransport`-Objekt eine Gruppe von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekten. Wenn die Verbindung im `max-compat`-Modus erstellt wurde, ist jeder Transport dafür verantwortlich, alle Kommunikationen für einen bestimmten Medientyp (Audio, Video oder Datenkanal) zu handhaben. Somit wird eine Verbindung mit einer beliebigen Anzahl von Audio- und Videokanälen immer genau einen DTLS-Transport für Audio- und einen für Videokommunikation haben.

Da die Transporte früh im Verhandlungsprozess etabliert werden, ist es wahrscheinlich, dass erst nach ihrer Erstellung bekannt wird, ob der entfernte Peer Bündelung unterstützt oder nicht. Aus diesem Grund sehen Sie manchmal, dass zuerst separate Transporte erstellt werden, jeweils einer für jede Spur, und dass sie dann zusammengebündelt werden, sobald bekannt ist, dass Bündelung möglich ist. Wenn Ihr Code direkt auf [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)s und/oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)s zugreift, könnten Sie auf Situationen stoßen, in denen sie zunächst separat sind, dann die Hälfte oder mehr von ihnen geschlossen werden und die Sender und Empfänger aktualisiert werden, um auf die entsprechenden verbleibenden `RTCDtlsTransport`-Objekte zu verweisen.

### Datenkanäle

[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s verwenden {{Glossary("SCTP", "SCTP")}} zur Kommunikation. Alle Datenkanäle einer Peer-Verbindung teilen sich einen einzigen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), der sich in der [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp)-Eigenschaft der Verbindung befindet.

Sie können wiederum den `RTCDtlsTransport` identifizieren, der verwendet wird, um die SCTP-Kommunikation der Datenkanäle sicher zu kapseln, indem Sie die [`transport`](/de/docs/Web/API/RTCSctpTransport/transport)-Eigenschaft des `RTCSctpTransport`-Objekts betrachten.

## Beispiele

Dieses Beispiel präsentiert eine Funktion, `tallySenders()`, die die [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) einer `RTCPeerConnection` iteriert und auflistet, wie viele von ihnen sich in verschiedenen Zuständen befinden. Die Funktion gibt ein Objekt zurück, dessen Eigenschaften anzeigen, wie viele Sender sich in jedem Zustand befinden.

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
