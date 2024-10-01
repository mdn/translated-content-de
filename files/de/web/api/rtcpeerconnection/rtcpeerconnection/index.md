---
title: "RTCPeerConnection: RTCPeerConnection() Konstruktor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnection()`** Konstruktor gibt ein neu erstelltes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zurück, das eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameter

- `configuration` {{optional_inline}}

  - : Ein Objekt, das Optionen zum Konfigurieren der neuen Verbindung bereitstellt:

    - `bundlePolicy` {{optional_inline}}

      - : Gibt an, wie die Verhandlung von Kandidaten gehandhabt werden soll, wenn der entfernte Peer nicht mit dem [SDP BUNDLE-Standard](https://webrtcstandards.info/sdp-bundle/) kompatibel ist. Wenn der entfernte Endpunkt BUNDLE-kompatibel ist, werden alle Medientracks und Datenkanäle unabhängig von der verwendeten Richtlinie auf einen einzigen Transport gebündelt, sobald die Verhandlung abgeschlossen ist, und alle überflüssigen Transporte, die ursprünglich erstellt wurden, werden zu diesem Zeitpunkt geschlossen.

        In technischen Begriffen ermöglicht ein BUNDLE, dass alle Medienströme zwischen zwei Peers über ein einziges **5-Tupel** fließen; das heißt, von einer einzigen IP und Port auf einem Peer zu einer einzigen IP und Port auf dem anderen Peer, wobei dasselbe Transportprotokoll verwendet wird.

        Dies muss einer der folgenden Zeichenkettenwerte sein, wenn keiner angegeben wird, wird `balanced` angenommen:

        - `"balanced"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) für jeden hinzugefügten Inhaltstyp: Audio, Video und Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-kompatibel ist, übernimmt jeder dieser DTLS-Transporte die gesamte Kommunikation für einen Datentyp.
        - `"max-compat"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) pro Medientrack und einen separaten für Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-kompatibel ist, wird alles auf diesen separaten DTLS-Transporten verhandelt.
        - `"max-bundle"`
          - : Der ICE-Agent erstellt zunächst nur einen einzigen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), um alle Daten der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu transportieren. Wenn der entfernte Endpunkt nicht BUNDLE-kompatibel ist, wird nur ein einzelner Track verhandelt und der Rest ignoriert.

    - `certificates` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Objekten des Typs [`RTCCertificate`](/de/docs/Web/API/RTCCertificate), die von der Verbindung zur Authentifizierung verwendet werden. Wenn diese Eigenschaft nicht angegeben ist, wird für jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz automatisch ein Satz von Zertifikaten generiert. Obwohl nur ein Zertifikat von einer bestimmten Verbindung verwendet wird, kann das Bereitstellen von Zertifikaten für mehrere Algorithmen in einigen Fällen die Erfolgschancen bei der Verbindungserstellung verbessern. Siehe [Verwendung von Zertifikaten](#verwendung_von_zertifikaten) für weitere Informationen.

        > [!NOTE]
        > Diese Konfigurationsoption kann nach der ersten Angabe nicht mehr geändert werden; sobald die Zertifikate festgelegt wurden, wird diese Eigenschaft in zukünftigen Aufrufen von [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) ignoriert.

    - `iceCandidatePoolSize` {{optional_inline}}

      - : Ein nicht signierter 16-Bit-Integer-Wert, der die Größe des vorab abgerufenen ICE-Kandidatenpools angibt. Der Standardwert ist 0 (was bedeutet, dass kein Kandidatenvorababruf erfolgt). In einigen Fällen kann es sinnvoll sein, dem ICE-Agenten zu erlauben, ICE-Kandidaten bereits vor Beginn des Verbindungsversuchs abzurufen, damit sie zur Überprüfung verfügbar sind, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

        > [!NOTE]
        > Das Ändern der Größe des ICE-Kandidatenpools kann den Beginn der ICE-Erfassung auslösen.

    - `iceServers` {{optional_inline}}

      - : Ein Array von Objekten, von denen jedes einen Server beschreibt, der vom ICE-Agenten verwendet werden kann; hierbei handelt es sich typischerweise um STUN- und/oder TURN-Server. Wenn dies nicht angegeben ist, erfolgt der Verbindungsversuch ohne verfügbaren STUN- oder TURN-Server, was die Verbindung auf lokale Peers beschränkt. Jedes Objekt kann die folgenden Eigenschaften haben:

        - `credential` {{optional_inline}}
          - : Die Anmeldeinformationen für die Anmeldung beim Server. Dies wird nur verwendet, wenn das Objekt einen TURN-Server darstellt.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, gibt dieses Attribut an, welche Art von `credential` bei der Verbindung verwendet werden soll. Der Standardwert ist `"password"`.
        - `urls`
          - : Diese **erforderliche** Eigenschaft ist entweder ein einzelner Zeichenfolgenwert oder ein Array von Zeichenfolgen, von denen jede eine URL angibt, die zur Verbindung mit dem Server verwendet werden kann.
        - `username` {{optional_inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, ist dies der Benutzername, der während der Authentifizierung verwendet wird.

    - `iceTransportPolicy` {{optional_inline}}

      - : Eine Zeichenfolge, die die aktuelle ICE-Transportpolitik darstellt. Mögliche Werte sind:

        - `"all"`
          - : Alle ICE-Kandidaten werden berücksichtigt. Dies ist der Standardwert.
        - `"public"` {{deprecated_inline}}
          - : Es werden nur ICE-Kandidaten mit öffentlichen IP-Adressen berücksichtigt.
        - `"relay"`
          - : Es werden nur ICE-Kandidaten berücksichtigt, deren IP-Adressen weitergeleitet werden, wie z. B. über einen TURN-Server.

    - `peerIdentity` {{optional_inline}}
      - : Eine Zeichenfolge, die die Ziel-Peer-Identität für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt. Wenn dieser Wert gesetzt ist (Standardwert ist `null`), wird die `RTCPeerConnection` keine Verbindung zu einem entfernten Peer herstellen, es sei denn, sie kann erfolgreich mit dem angegebenen Namen authentifizieren.
    - `rtcpMuxPolicy` {{optional_inline}}

      - : Eine Zeichenfolge, die die RTCP-Multiplexierungsrichtlinie angibt, die beim Erfassen von ICE-Kandidaten verwendet werden soll, um nicht-multiplexierte RTCP zu unterstützen. Mögliche Werte sind:

        - `"negotiate"`
          - : Weist den ICE-Agenten an, sowohl {{Glossary("RTP", "RTP")}} als auch {{Glossary("RTCP", "RTCP")}}-Kandidaten zu sammeln. Wenn der entfernte Peer RTCP multiplexen kann, werden RTCP-Kandidaten über die entsprechenden RTP-Kandidaten multiplexed. Andernfalls werden sowohl die RTP- als auch die RTCP-Kandidaten separat zurückgegeben.
        - `"require"`
          - : Sagt dem ICE-Agenten, ICE-Kandidaten nur für RTP zu sammeln und RTCP darüber zu multiplexen. Wenn der entfernte Peer RTCP-Multiplexen nicht unterstützt, schlägt die Sitzungsverhandlung fehl. Dies ist der Standardwert.

### Rückgabewert

Ein neu erstelltes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt, konfiguriert gemäß `configuration`, falls angegeben; andernfalls wird eine angemessene Grundeinstellung verwendet.

## Verwendung von Zertifikaten

Wenn Sie Ihre eigenen Zertifikate für die Verwendung durch eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitstellen möchten, anstatt dass die `RTCPeerConnection` sie automatisch generiert, tun Sie dies, indem Sie die statische Funktion [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) aufrufen.

Der Wert der `certificates`-Eigenschaft kann nicht mehr geändert werden, sobald er erstmals angegeben wurde. Wenn er in die Konfiguration aufgenommen wird, die bei einem Aufruf von [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) auf eine Verbindung übergeben wird, wird er ignoriert.

Dieses Attribut unterstützt mehrere Zertifikate, weil, obwohl eine DTLS-Verbindung nur ein Zertifikat verwendet, die Bereitstellung mehrerer Zertifikate die Unterstützung für mehrere Verschlüsselungsalgorithmen ermöglicht. Die Implementierung von `RTCPeerConnection` wählt aus, welches Zertifikat basierend auf den Algorithmen, die es und der entfernte Peer unterstützen, während des DTLS-Handshakes verwendet wird.

Wenn Sie keine Zertifikate bereitstellen, werden neue automatisch generiert. Ein offensichtlicher Vorteil, eigene bereitzustellen, ist die Kontinuität des Identitätsschlüssels — wenn Sie für nachfolgende Anrufe dasselbe Zertifikat verwenden, kann der entfernte Peer erkennen, dass Sie derselbe Anrufer sind. Dies vermeidet auch die Kosten für die Erstellung neuer Schlüssel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Übersicht über die WebRTC-Architektur](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
