---
title: "RTCPeerConnection: RTCPeerConnection() Konstruktor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnection()`** Konstruktor gibt ein neu erstelltes {{domxref("RTCPeerConnection")}} zurück, das eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameter

- `configuration` {{optional_inline}}

  - : Ein Objekt, das Optionen zur Konfiguration der neuen Verbindung bereitstellt:

    - `bundlePolicy` {{optional_inline}}

      - : Gibt an, wie mit der Aushandlung von Kandidaten umgegangen werden soll, wenn der entfernte Peer nicht mit dem [SDP BUNDLE Standard](https://webrtcstandards.info/sdp-bundle/) kompatibel ist. Wenn der entfernte Endpunkt BUNDLE-fähig ist, werden alle Medientracks und Datenkanäle beim Abschluss der Aushandlung auf einen einzigen Transport gebündelt, unabhängig von der verwendeten Richtlinie, und alle überflüssigen Transporte, die ursprünglich erstellt wurden, werden in diesem Moment geschlossen.

        In technischen Begriffen lässt ein BUNDLE alle Medien zwischen zwei Peers über ein einzelnes **5-Tupel** fließen; das heißt, von einer einzigen IP und einem Port auf einem Peer zu einer einzigen IP und einem Port auf dem anderen Peer, unter Verwendung desselben Transportprotokolls.

        Dies muss einer der folgenden Zeichenfolgenwerte sein, wenn nicht `balanced` angenommen wird:

        - `"balanced"`
          - : Der ICE-Agent erstellt zunächst einen {{domxref("RTCDtlsTransport")}} für jede Art von hinzugefügtem Inhalt: Audio, Video und Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-fähig ist, dann befasst sich jeder dieser DTLS-Transporte mit der gesamten Kommunikation für eine Art von Daten.
        - `"max-compat"`
          - : Der ICE-Agent erstellt zunächst einen {{domxref("RTCDtlsTransport")}} pro Medientrack und einen separaten für Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-fähig ist, wird alles auf diesen separaten DTLS-Transporten ausgehandelt.
        - `"max-bundle"`
          - : Der ICE-Agent erstellt zunächst nur einen einzelnen {{domxref("RTCDtlsTransport")}}, um die gesamten Daten der {{DOMxRef("RTCPeerConnection")}} zu transportieren. Wenn der entfernte Endpunkt nicht BUNDLE-fähig ist, wird nur ein Track ausgehandelt und der Rest ignoriert.

    - `certificates` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Objekten des Typs {{domxref("RTCCertificate")}}, die von der Verbindung zur Authentifizierung verwendet werden. Wenn diese Eigenschaft nicht angegeben wird, wird automatisch für jede Instanz einer {{domxref("RTCPeerConnection")}} eine Reihe von Zertifikaten generiert. Obwohl für eine gegebene Verbindung nur ein Zertifikat verwendet wird, kann die Bereitstellung von Zertifikaten für mehrere Algorithmen die Chancen auf eine erfolgreiche Verbindung unter bestimmten Umständen verbessern. Siehe [Verwendung von Zertifikaten](#verwendung_von_zertifikaten) für weitere Informationen.

        > [!NOTE]
        > Diese Konfigurationsoption kann nicht geändert werden, nachdem sie einmal angegeben wurde; sobald die Zertifikate gesetzt sind, wird diese Eigenschaft in zukünftigen Aufrufen von {{domxref("RTCPeerConnection.setConfiguration()")}} ignoriert.

    - `iceCandidatePoolSize` {{optional_inline}}

      - : Ein vorzeichenloser 16-Bit-Integerwert, der die Größe des vorab abgerufenen ICE-Kandidatenpools angibt. Der Standardwert ist 0 (was bedeutet, dass kein Kandidaten-Vorababrufen stattfinden wird). In einigen Fällen kann es sein, dass Verbindungen schneller hergestellt werden können, indem der ICE-Agent das Vorababrufen von ICE-Kandidaten startet, bevor Sie versuchen, eine Verbindung herzustellen, sodass sie bereits zur Inspektion verfügbar sind, wenn {{domxref("RTCPeerConnection.setLocalDescription()")}} aufgerufen wird.

        > [!NOTE]
        > Eine Änderung der Größe des ICE-Kandidatenpools kann das Beginnen der ICE-Erfassung auslösen.

    - `iceServers` {{optional_inline}}

      - : Ein Array von Objekten, das jeweils einen Server beschreibt, der vom ICE-Agenten verwendet werden kann; dies sind in der Regel STUN- und/oder TURN-Server. Wenn dies nicht angegeben ist, wird der Verbindungsversuch ohne STUN- oder TURN-Server unternommen, was die Verbindung auf lokale Peers beschränkt. Jedes Objekt kann die folgenden Eigenschaften haben:

        - `credential` {{optional_inline}}
          - : Die Anmeldeinformationen, die beim Einloggen auf dem Server verwendet werden. Dies wird nur verwendet, wenn das Objekt einen TURN-Server darstellt.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, gibt dieses Attribut an, welche Art von `credential` beim Verbinden verwendet werden soll. Der Standard ist `"password"`.
        - `urls`
          - : Diese **erforderliche** Eigenschaft ist entweder eine einzelne Zeichenfolge oder ein Array von Zeichenfolgen, die jeweils eine URL angeben, die zur Verbindung mit dem Server verwendet werden kann.
        - `username` {{optional_inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, dann ist dies der Benutzername, der während der Authentifizierung verwendet wird.

    - `iceTransportPolicy` {{optional_inline}}

      - : Eine Zeichenfolge, die die aktuelle ICE-Transportpolitik darstellt. Mögliche Werte sind:

        - `"all"`
          - : Alle ICE-Kandidaten werden berücksichtigt. Dies ist der Standardwert.
        - `"public"` {{deprecated_inline}}
          - : Nur ICE-Kandidaten mit öffentlichen IP-Adressen werden berücksichtigt.
        - `"relay"`
          - : Nur ICE-Kandidaten, deren IP-Adressen weitergeleitet werden, wie diejenigen, die über einen TURN-Server weitergeleitet werden, werden berücksichtigt.

    - `peerIdentity` {{optional_inline}}
      - : Eine Zeichenfolge, die die Ziel-Peer-Identität für die {{domxref("RTCPeerConnection")}} angibt. Wenn dieser Wert gesetzt ist (standardmäßig `null`), wird die `RTCPeerConnection` keine Verbindung zu einem entfernten Peer herstellen, es sei denn, sie kann sich erfolgreich mit dem angegebenen Namen authentifizieren.
    - `rtcpMuxPolicy` {{optional_inline}}

      - : Eine Zeichenfolge, die die RTCP-Multiplexrichtlinie angibt, die beim Sammeln von ICE-Kandidaten verwendet werden soll, um nicht-multiplexiertes RTCP zu unterstützen. Mögliche Werte sind:

        - `"negotiate"`
          - : Weist den ICE-Agenten an, sowohl {{Glossary("RTP")}}- als auch {{Glossary("RTCP")}}-Kandidaten zu sammeln. Wenn der entfernte Peer RTCP multiplexen kann, werden RTCP-Kandidaten über die entsprechenden RTP-Kandidaten gemultiplext. Andernfalls werden sowohl die RTP- als auch die RTCP-Kandidaten separat zurückgegeben.
        - `"require"`
          - : Teilt dem ICE-Agenten mit, ICE-Kandidaten nur für RTP zu sammeln und RTCP darüber zu multiplexen. Wenn der entfernte Peer RTCP-Multiplexing nicht unterstützt, schlägt die Sitzungsverhandlung fehl. Dies ist der Standardwert.

### Rückgabewert

Ein neu erstelltes {{domxref("RTCPeerConnection")}}-Objekt, konfiguriert wie in `configuration` beschrieben, falls angegeben; andernfalls auf angemessene grundlegende Standardeinstellungen konfiguriert.

## Verwendung von Zertifikaten

Wenn Sie Ihre eigenen Zertifikate für die Verwendung durch eine {{domxref("RTCPeerConnection")}} bereitstellen möchten, anstatt sie automatisch von der `RTCPeerConnection` generieren zu lassen, tun Sie dies, indem Sie die statische Funktion {{domxref("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}} aufrufen.

Der Wert der `certificates`-Eigenschaft kann nach der ersten Angabe nicht mehr geändert werden. Wenn er in der an einen Verbindungsaufruf von {{domxref("RTCPeerConnection.setConfiguration", "setConfiguration()")}} übergebenen Konfiguration enthalten ist, wird er ignoriert.

Dieses Attribut unterstützt die Bereitstellung mehrerer Zertifikate, da auch wenn eine gegebene DTLS-Verbindung nur ein Zertifikat verwendet, die Bereitstellung mehrerer Zertifikate die Unterstützung für mehrere Verschlüsselungsalgorithmen ermöglicht. Die Implementierung von `RTCPeerConnection` wählt das zu verwendende Zertifikat basierend auf den Algorithmen aus, die sie und der entfernte Peer während des DTLS-Handshakes unterstützen.

Wenn Sie keine Zertifikate bereitstellen, werden automatisch neue generiert. Ein offensichtlicher Vorteil, eigene Zertifikate bereitzustellen, ist die Kontinuität des Identitätsschlüssels – wenn Sie dasselbe Zertifikat für aufeinanderfolgende Anrufe verwenden, kann der entfernte Peer erkennen, dass Sie derselbe Anrufer sind. Dies vermeidet auch die Kosten für die Generierung neuer Schlüssel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Übersicht über die WebRTC-Architektur](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
