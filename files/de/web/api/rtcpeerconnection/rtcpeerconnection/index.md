---
title: "RTCPeerConnection: RTCPeerConnection() Konstruktor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnection()`** Konstruktor gibt eine neu erstellte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Partner darstellt.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameter

- `configuration` {{optional_inline}}

  - : Ein Objekt, das Optionen zur Konfiguration der neuen Verbindung bereitstellt:

    - `bundlePolicy` {{optional_inline}}

      - : Gibt an, wie die Aushandlung von Kandidaten behandelt werden soll, wenn das entfernte Gerät nicht mit dem [SDP BUNDLE Standard](https://webrtcstandards.info/sdp-bundle/) kompatibel ist. Wenn das entfernte Endpunkt BUNDLE-kompatibel ist, werden alle Medientracks und Datenkanäle am Ende der Aushandlung auf einen einzigen Transport gebündelt, unabhängig von der verwendeten Richtlinie, und alle überflüssigen Transporte, die ursprünglich erstellt wurden, werden dann geschlossen.

        In technischen Begriffen ermöglicht ein BUNDLE, dass alle Medien zwischen zwei Partnern über eine einzelne **5-tuple** fließen; das heißt, von einer einzelnen IP und einem Port auf einem Peer zu einer einzelnen IP und einem Port auf dem anderen Peer, wobei das gleiche Transportprotokoll verwendet wird.

        Dies muss einer der folgenden Zeichenkettenwerte sein, wenn nicht, wird `balanced` angenommen:

        - `"balanced"`
          - : Der ICE-Agent erstellt zunächst ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) für jede Art von Hinzugefügtem Inhalt: Audio, Video und Datenkanäle. Wenn das entfernte Endpunkt nicht BUNDLE-kompatibel ist, dann übernimmt jeder dieser DTLS-Transporte die gesamte Kommunikation für eine Art von Daten.
        - `"max-compat"`
          - : Der ICE-Agent erstellt zunächst ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) pro Medientrack und ein separates für Datenkanäle. Wenn das entfernte Endpunkt nicht BUNDLE-kompatibel ist, wird alles auf diesen separaten DTLS-Transporten ausgehandelt.
        - `"max-bundle"`
          - : Der ICE-Agent erstellt zunächst nur ein einziges [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), um alle Daten der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu übertragen. Wenn das entfernte Endpunkt nicht BUNDLE-kompatibel ist, wird nur ein einzelner Track ausgehandelt und der Rest ignoriert.

    - `certificates` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Objekten des Typs [`RTCCertificate`](/de/docs/Web/API/RTCCertificate), die von der Verbindung zur Authentifizierung verwendet werden. Wenn diese Eigenschaft nicht angegeben ist, wird für jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz automatisch ein Satz von Zertifikaten generiert. Obwohl für eine gegebene Verbindung nur ein Zertifikat verwendet wird, kann die Bereitstellung von Zertifikaten für mehrere Algorithmen die Chancen auf eine erfolgreiche Verbindung in bestimmten Fällen erhöhen. Siehe [Verwendung von Zertifikaten](#verwendung_von_zertifikaten) für weitere Informationen.

        > [!NOTE]
        > Diese Konfigurationsoption kann nach der ersten Angabe nicht mehr geändert werden; sobald die Zertifikate festgelegt sind, wird diese Eigenschaft in zukünftigen Aufrufen von [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) ignoriert.

    - `iceCandidatePoolSize` {{optional_inline}}

      - : Ein 16-Bit-Integer-Wert ohne Vorzeichen, der die Größe des vorab abgerufenen ICE-Kandidatenpools angibt. Der Standardwert ist 0 (was bedeutet, dass kein Kandidaten-Prefetching stattfinden wird). In einigen Fällen kann es sein, dass Verbindungen schneller hergestellt werden können, indem Sie dem ICE-Agent erlauben, ICE-Kandidaten zu sammeln, bevor Sie versuchen, sich zu verbinden, sodass sie bereits zur Inspektion verfügbar sind, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

        > [!NOTE]
        > Das Ändern der Größe des ICE-Kandidatenpools kann das Sammeln von ICE-Kandidaten einleiten.

    - `iceServers` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils einen Server beschreiben, der vom ICE-Agenten verwendet werden kann. Diese sind typischerweise STUN- und/oder TURN-Server. Wenn dies nicht angegeben wird, wird der Verbindungsversuch ohne verfügbaren STUN- oder TURN-Server durchgeführt, was die Verbindung auf lokale Peers beschränkt. Jedes Objekt kann die folgenden Eigenschaften haben:

        - `credential` {{optional_inline}}
          - : Die Anmeldedaten, die beim Anmelden am Server verwendet werden. Dies wird nur verwendet, wenn das Objekt einen TURN-Server darstellt.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, gibt dieses Attribut an, welche Art von `credential` beim Verbinden verwendet werden soll. Der Standard ist `"password"`.
        - `urls`
          - : Diese **erforderliche** Eigenschaft ist entweder eine einzelne Zeichenkette oder ein Array von Zeichenketten, die jeweils eine URL angeben, die zum Verbinden mit dem Server verwendet werden kann.
        - `username` {{optional_inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, dann ist dies der Benutzername, der während der Authentifizierung verwendet wird.

    - `iceTransportPolicy` {{optional_inline}}

      - : Eine Zeichenkette, die die aktuelle ICE-Transportpolitik darstellt. Mögliche Werte sind:

        - `"all"`
          - : Alle ICE-Kandidaten werden berücksichtigt. Dies ist der Standardwert.
        - `"public"` {{deprecated_inline}}
          - : Nur ICE-Kandidaten mit öffentlichen IP-Adressen werden berücksichtigt.
        - `"relay"`
          - : Nur ICE-Kandidaten, deren IP-Adressen weitergeleitet werden, wie z.B. jene, die durch einen TURN-Server geleitet werden, werden berücksichtigt.

    - `peerIdentity` {{optional_inline}}
      - : Eine Zeichenkette, die die Ziel-Peer-Identität für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt. Wird dieser Wert gesetzt (Standard ist `null`), wird die `RTCPeerConnection` keine Verbindung zu einem entfernten Peer herstellen, es sei denn, sie kann sich erfolgreich mit dem angegebenen Namen authentifizieren.
    - `rtcpMuxPolicy` {{optional_inline}}

      - : Eine Zeichenkette, die die RTCP-Multiplex-Richtlinie angibt, die beim Sammeln von ICE-Kandidaten verwendet wird, um nicht-multiplexiertes RTCP zu unterstützen. Mögliche Werte sind:

        - `"negotiate"`
          - : Weist den ICE-Agenten an, sowohl [RTP](/de/docs/Glossary/RTP)- als auch [RTCP](/de/docs/Glossary/RTCP)-Kandidaten zu sammeln. Wenn der entfernte Peer RTCP multiplexen kann, werden RTCP-Kandidaten auf die entsprechenden RTP-Kandidaten multiplexed. Andernfalls werden sowohl die RTP- als auch die RTCP-Kandidaten separat zurückgegeben.
        - `"require"`
          - : Gibt an, dass der ICE-Agent nur ICE-Kandidaten für RTP sammelt und RTCP darauf multiplexen soll. Wenn der entfernte Peer das Multiplexen von RTCP nicht unterstützt, schlägt die Sitzungsverhandlung fehl. Dies ist der Standardwert.

### Rückgabewert

Ein neu erstelltes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt, das wie durch `configuration` beschrieben konfiguriert ist, falls angegeben; andernfalls, konfiguriert zu geeigneten grundlegenden Standardwerten.

## Verwendung von Zertifikaten

Wenn Sie Ihre eigenen Zertifikate zur Verwendung durch eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitstellen möchten, anstatt dass die `RTCPeerConnection` sie automatisch generiert, tun Sie dies, indem Sie die statische Funktion [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) aufrufen.

Der Wert der `certificates`-Eigenschaft kann nicht geändert werden, sobald er einmal spezifiziert wurde. Wenn er in die Konfiguration aufgenommen wird, die in einen Aufruf der [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) einer Verbindung übergeben wird, wird er ignoriert.

Dieses Attribut unterstützt die Bereitstellung mehrerer Zertifikate, da, obwohl eine gegebene DTLS-Verbindung nur ein Zertifikat verwendet, die Bereitstellung mehrerer Zertifikate die Unterstützung für mehrere Verschlüsselungsalgorithmen ermöglicht. Die Implementierung von `RTCPeerConnection` wählt aus, welches Zertifikat basierend auf den Algorithmen, die es und der entfernte Peer unterstützen, während des DTLS-Handshakes verwendet wird.

Wenn Sie keine Zertifikate bereitstellen, werden automatisch neue generiert. Ein offensichtlicher Vorteil, eigene bereitzustellen, ist die Kontinuität des Identitätsschlüssels – wenn Sie dasselbe Zertifikat für nachfolgende Anrufe verwenden, kann der entfernte Peer feststellen, dass Sie derselbe Anrufer sind. Dies vermeidet auch die Kosten für die Generierung neuer Schlüssel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC-Architekturüberblick](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
