---
title: RTCDtlsTransport
slug: Web/API/RTCDtlsTransport
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Das **`RTCDtlsTransport`** Interface bietet Zugriff auf Informationen über den Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transport, über den die {{Glossary("RTP", "RTP")}}- und {{Glossary("RTCP", "RTCP")}}-Pakete einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von deren [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Objekten gesendet und empfangen werden.

Ein `RTCDtlsTransport` Objekt wird auch verwendet, um Informationen über die {{Glossary("SCTP", "SCTP")}}-Pakete zu liefern, die von den [Datenkanälen](/de/docs/Web/API/RTCDataChannel) einer Verbindung übertragen und empfangen werden.

Merkmale des DTLS-Transports beinhalten die Hinzufügung von Sicherheit zum zugrunde liegenden Transport; das `RTCDtlsTransport` Interface kann verwendet werden, um Informationen über den zugrunde liegenden Transport und die durch die DTLS-Schicht hinzugefügte Sicherheit zu erhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugrunde liegende [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Objekt zurück.
- [`state`](/de/docs/Web/API/RTCDtlsTransport/state) {{ReadOnlyInline}}
  - : Gibt einen String zurück,
    der den Zustand des zugrunde liegenden Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transports beschreibt.
    Es kann einer der folgenden Werte sein:
    `new`, `connecting`, `connected`, `closed` oder `failed`.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`getRemoteCertificates()`](/de/docs/Web/API/RTCDtlsTransport/getRemoteCertificates)
  - : Gibt ein Array von {{jsxref("ArrayBuffer")}} zurück, das die Zertifikate des Remote-Peers der Verbindung enthält.

## Ereignisse

- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Wird gesendet, wenn ein Transport-Level-Fehler auf der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftritt.

- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Wird gesendet, wenn sich der [`state`](/de/docs/Web/API/RTCDtlsTransport/state) des DTLS-Transports ändert.

## Beschreibung

### Zuweisung von DTLS-Transporten

`RTCDtlsTransport` Objekte werden erstellt, wenn eine App entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufruft. Die Anzahl der erstellten DTLS-Transporte und deren Verwendung hängt vom Bündelungsmodus ab, der beim Erstellen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird.

Ob Bündelung verwendet wird, hängt davon ab, was der andere Endpunkt verhandeln kann. Alle Browser unterstützen Bündelung, sodass, wenn beide Endpunkte Browser sind, Sie sicher sein können, dass Bündelung verwendet wird.

Einige nicht-browserbasierte Legacy-Endpunkte unterstützen jedoch möglicherweise keine Bündelung. Um mit solchen Endpunkten verhandeln zu können (oder um sie ganz auszuschließen), kann die Eigenschaft `bundlePolicy` beim Erstellen der Verbindung angegeben werden. Die `bundlePolicy` ermöglicht es Ihnen, zu steuern, wie mit diesen Legacy-Endpunkten verhandelt wird. Die Standardrichtlinie ist `"balanced"`, die eine Balance zwischen Leistung und Kompatibilität bietet.

Zum Beispiel, um die Verbindung mit dem höchsten Bündelungsgrad zu erstellen:

```js
const rtcConfig = {
  bundlePolicy: "max-bundle",
};

const pc = new RTCPeerConnection(rtcConfig);
```

[Bundling](https://datatracker.ietf.org/doc/rfc8843/) ermöglicht es Ihnen, einen `RTCDtlsTransport` zu verwenden, um die Daten für mehrere höherstufige Transporte, wie z.B. mehrere [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), zu tragen.

#### Wenn BUNDLE nicht verwendet wird

Wenn die Verbindung ohne Verwendung von BUNDLE erstellt wird, hat jede RTP- oder RTCP-Komponente jedes [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ihren eigenen `RTCDtlsTransport`; das heißt, jeder [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) hat seinen eigenen Transport und alle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekte teilen sich einen dem SCTP gewidmeten Transport.

#### Wenn BUNDLE verwendet wird

Wenn die Verbindung BUNDLE verwendet, repräsentiert jedes `RTCDtlsTransport` Objekt eine Gruppe von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Objekten. Wenn die Verbindung im `max-compat` Modus erstellt wurde, ist jeder Transport dafür verantwortlich, alle Kommunikationen für einen gegebenen Medientyp zu handhaben (Audio, Video oder Datenkanal). Somit wird eine Verbindung mit beliebig vielen Audio- und Video-Kanälen immer genau einen DTLS-Transport für Audio- und einen für Video-Kommunikation haben.

Da Transporte früh im Verhandlungsprozess etabliert werden, ist es wahrscheinlich, dass erst nach ihrer Erstellung bekannt ist, ob das Remote-Peer die Bündelung unterstützt. Aus diesem Grund werden Sie manchmal zu Beginn separate Transporte sehen, einen für jeden Track, und dann sehen, wie sie gebündelt werden, sobald bekannt ist, dass Bündelung möglich ist. Wenn Ihr Code direkt auf [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und/oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugreift, können Sie Situationen begegnen, in denen sie zunächst separat sind, dann die Hälfte oder mehr davon geschlossen wird und die Sender und Empfänger aktualisiert werden, um auf die passende verbleibende `RTCDtlsTransport` Objekte zu verweisen.

### Datenkanäle

[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden {{Glossary("SCTP", "SCTP")}} zur Kommunikation. Alle Datenkanäle einer Peer-Verbindung teilen sich einen einzigen [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport), der sich in der [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) Eigenschaft der Verbindung befindet.

Sie können wiederum den `RTCDtlsTransport` identifizieren, der verwendet wird, um die SCTP-Kommunikation der Datenkanäle sicher zu kapseln, indem Sie die `transport`-Eigenschaft des `RTCSctpTransport` Objekts betrachten.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `tallySenders()`, die über die [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) einer `RTCPeerConnection` iteriert und zählt, wie viele von ihnen sich in verschiedenen Zuständen befinden. Die Funktion gibt ein Objekt zurück, das Eigenschaften enthält, deren Werte angeben, wie viele Sender sich in jedem Zustand befinden.

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

Beachten Sie, dass in diesem Code die Zustände `new` und `connecting` als ein einziger `connectionPending` Status im zurückgegebenen Objekt behandelt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpSender.transport`](/de/docs/Web/API/RTCRtpSender/transport) und [`RTCRtpReceiver.transport`](/de/docs/Web/API/RTCRtpReceiver/transport)
- [`RTCSctpTransport.transport`](/de/docs/Web/API/RTCSctpTransport/transport)
