---
title: RTCDtlsTransport
slug: Web/API/RTCDtlsTransport
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("WebRTC")}}

Die **`RTCDtlsTransport`**-Schnittstelle bietet Zugriff auf Informationen über den Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) Transport, über den die {{Glossary("RTP")}}- und {{Glossary("RTCP")}}-Pakete einer {{domxref("RTCPeerConnection")}} von den {{domxref("RTCRtpSender")}}- und {{domxref("RTCRtpReceiver")}}-Objekten gesendet und empfangen werden.

Ein `RTCDtlsTransport`-Objekt wird auch verwendet, um Informationen über {{Glossary("SCTP")}}-Pakete bereitzustellen, die von den [Datenkanälen](/de/docs/Web/API/RTCDataChannel) einer Verbindung übertragen und empfangen werden.

Eigenschaften des DTLS-Transports umfassen die Hinzufügung von Sicherheit zum zugrunde liegenden Transport; die `RTCDtlsTransport`-Schnittstelle kann verwendet werden, um Informationen über den zugrunde liegenden Transport und die durch die DTLS-Schicht hinzugefügte Sicherheit zu erhalten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDtlsTransport.iceTransport", "iceTransport")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das zugrunde liegende {{DOMxRef("RTCIceTransport")}}-Objekt zurück.
- {{DOMxRef("RTCDtlsTransport.state", "state")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Status des zugrunde liegenden Datagram Transport Layer Security (**{{Glossary("DTLS")}}**)-Transports beschreibt.
    Er kann einen der folgenden Werte annehmen: `new`, `connecting`, `connected`, `closed` oder `failed`.

## Instanz-Methoden

_Erbt auch Methoden von {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCDtlsTransport.getRemoteCertificates", "getRemoteCertificates()")}}
  - : Gibt ein Array von {{jsxref("ArrayBuffer")}} zurück, das die Zertifikate des entfernten Peers der Verbindung enthält.

## Ereignisse

- {{DOMxRef("RTCDtlsTransport.error_event", "error")}}

  - : Wird gesendet, wenn ein Transportfehler auf der {{domxref("RTCPeerConnection")}} auftritt.

- {{DOMxRef("RTCDtlsTransport.statechange_event", "statechange")}}
  - : Wird gesendet, wenn sich der {{DOMxRef("RTCDtlsTransport.state", "state")}} des DTLS-Transports ändert.

## Beschreibung

### Zuweisung von DTLS-Transporten

`RTCDtlsTransport`-Objekte werden erstellt, wenn eine Anwendung entweder {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} oder {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} aufruft. Die Anzahl der erstellten DTLS-Transporte und deren Verwendung hängen vom Bündelungsmodus ab, der bei der Erstellung der {{domxref("RTCPeerConnection")}} verwendet wird.

Ob Bündelung verwendet wird, hängt davon ab, was der andere Endpunkt aushandeln kann. Alle Browser unterstützen Bündelung, sodass Sie bei zwei Browser-Endpunkten sicher sein können, dass Bündelung verwendet wird.

Einige nicht browserbasierte ältere Endpunkte unterstützen möglicherweise kein Bundle. Um mit solchen Endpunkten verhandeln zu können (oder um sie komplett auszuschließen), kann die `bundlePolicy`-Eigenschaft beim Erstellen der Verbindung angegeben werden. Die `bundlePolicy` ermöglicht es Ihnen zu steuern, wie mit diesen älteren Endpunkten verhandelt wird. Die Standardrichtlinie ist `"balanced"`, was ein Gleichgewicht zwischen Leistung und Kompatibilität bietet.

Zum Beispiel, um die Verbindung mit dem höchsten Niveau der Bündelung zu erstellen:

```js
const rtcConfig = {
  bundlePolicy: "max-bundle",
};

const pc = new RTCPeerConnection(rtcConfig);
```

[Bündelung](https://webrtcstandards.info/sdp-bundle/) ermöglicht die Verwendung eines `RTCDtlsTransport`, um die Daten für mehrere höherstufige Transporte zu tragen, wie zum Beispiel mehrere {{domxref("RTCRtpTransceiver")}}s.

#### Wenn kein BUNDLE verwendet wird

Wird die Verbindung ohne Verwendung von BUNDLE erstellt, hat jede RTP- oder RTCP-Komponente jeder {{domxref("RTCRtpTransceiver")}} ihren eigenen `RTCDtlsTransport`; das bedeutet, jeder {{domxref("RTCRtpSender")}} und {{domxref("RTCRtpReceiver")}} hat seinen eigenen Transport, und alle {{domxref("RTCDataChannel")}}-Objekte teilen sich einen dem SCTP gewidmeten Transport.

#### Wenn BUNDLE verwendet wird

Wird die Verbindung mit BUNDLE verwendet, repräsentiert jedes `RTCDtlsTransport`-Objekt eine Gruppe von {{domxref("RTCRtpTransceiver")}}-Objekten. Wenn die Verbindung im `max-compat`-Modus erstellt wurde, ist jeder Transport dafür verantwortlich, alle Kommunikationen für eine gegebene Medienart (Audio, Video oder Datenkanal) zu handhaben. Somit hat eine Verbindung mit einer beliebigen Anzahl von Audio- und Video-Kanälen immer genau einen DTLS-Transport für Audio- und einen für Videokommunikation.

Da Transporte früh im Verhandlungsprozess etabliert werden, ist es wahrscheinlich, dass erst nach ihrer Erstellung bekannt wird, ob der entfernte Peer Bündelung unterstützt. Aus diesem Grund werden Sie manchmal zunächst separate Transporte für jeden Track erstellt sehen, die dann gebündelt werden, sobald bekannt ist, dass Bündelung möglich ist. Wenn Ihr Code {{domxref("RTCRtpSender")}}s und/oder {{domxref("RTCRtpReceiver")}}s direkt zugreift, könnten Sie auf Situationen stoßen, in denen sie zunächst separat sind, gefolgt von der Schließung der Hälfte oder mehr von ihnen, und die Sender und Empfänger auf die passenden verbleibenden `RTCDtlsTransport`-Objekte aktualisiert werden.

### Datenkanäle

{{domxref("RTCDataChannel")}}s verwenden {{Glossary("SCTP")}}, um zu kommunizieren. Alle Datenkanäle einer Peer-Verbindung teilen einen einzelnen {{domxref("RTCSctpTransport")}}, der in der {{domxref("RTCPeerConnection.sctp", "sctp")}}-Eigenschaft der Verbindung zu finden ist.

Sie können wiederum den `RTCDtlsTransport` identifizieren, der verwendet wird, um die SCTP-Kommunikation der Datenkanäle sicher zu kapseln, indem Sie die {{domxref("RTCSctpTransport.transport", "transport")}}-Eigenschaft des `RTCSctpTransport`-Objekts betrachten.

## Beispiele

Dieses Beispiel zeigt eine Funktion, `tallySenders()`, die über die {{domxref("RTCRtpSender")}}s einer `RTCPeerConnection` iteriert und erfasst, wie viele von ihnen sich in verschiedenen Zuständen befinden. Die Funktion gibt ein Objekt zurück, das Eigenschaften enthält, deren Werte angeben, wie viele Sender sich in jedem Zustand befinden.

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

Beachten Sie, dass in diesem Code die `new`- und `connecting`-Zustände als ein einziger `connectionPending`-Status im zurückgegebenen Objekt behandelt werden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRtpSender.transport")}} und {{domxref("RTCRtpReceiver.transport")}}
- {{DOMxRef("RTCSctpTransport.transport")}}
