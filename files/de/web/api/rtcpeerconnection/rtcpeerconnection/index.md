---
title: "RTCPeerConnection: RTCPeerConnection() Konstruktor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnection()`** Konstruktor gibt ein neu-erstelltes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zurück, das eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameter

- `configuration` {{optional_inline}}

  - : Ein Objekt, das Optionen zur Konfiguration der neuen Verbindung bereitstellt:

    - `bundlePolicy` {{optional_inline}}

      - : Gibt an, wie die Aushandlung von Kandidaten gehandhabt werden soll, wenn der entfernte Peer nicht mit dem [SDP BUNDLE Standard](https://datatracker.ietf.org/doc/rfc8843/) kompatibel ist. Wenn der entfernte Endpunkt BUNDLE-bewusst ist, werden alle Medienspuren und Datenkanäle unabhängig von der verwendeten Richtlinie auf einen einzigen Transport gebündelt, sobald die Aushandlung abgeschlossen ist, und alle überflüssigen Transporte, die zunächst erstellt wurden, werden dann geschlossen.

        Technisch gesehen ermöglicht ein BUNDLE, dass alle Medienströme zwischen zwei Peers über eine einzelne **5-tuple** fließen; das heißt, von einer einzigen IP und Port auf einem Peer zu einer einzigen IP und Port auf dem anderen Peer, wobei dasselbe Transportprotokoll verwendet wird.

        Dies muss einer der folgenden Zeichenfolgenwerte sein, falls nicht wird `balanced` angenommen:

        - `"balanced"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) für jeden Inhaltstyp: Audio, Video und Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-bewusst ist, dann verwaltet jeder dieser DTLS-Transporte die gesamte Kommunikation für einen Typ von Daten.
        - `"max-compat"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) pro Medienspuren und einen separaten für Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-bewusst ist, wird alles auf diesen separaten DTLS-Transporten ausgehandelt.
        - `"max-bundle"`
          - : Der ICE-Agent erstellt zunächst nur einen einzigen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), um alle Daten der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu übertragen. Wenn der entfernte Endpunkt nicht BUNDLE-bewusst ist, wird nur eine einzige Spur ausgehandelt und der Rest ignoriert.

    - `certificates` {{optional_inline}}

      - : Ein {{jsxref("Array")}} von Objekten vom Typ [`RTCCertificate`](/de/docs/Web/API/RTCCertificate), die von der Verbindung zur Authentifizierung verwendet werden. Wenn diese Eigenschaft nicht angegeben ist, wird für jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz automatisch ein Satz von Zertifikaten generiert. Obwohl nur ein Zertifikat von einer bestimmten Verbindung verwendet wird, kann die Bereitstellung von Zertifikaten für mehrere Algorithmen in einigen Fällen die Chancen auf eine erfolgreiche Verbindung erhöhen. Weitere Informationen finden Sie unter [Verwendung von Zertifikaten](#verwendung_von_zertifikaten).

        > [!NOTE]
        > Diese Konfigurationsoption kann nicht geändert werden, nachdem sie erstmals festgelegt wurde; sobald die Zertifikate festgelegt sind, wird diese Eigenschaft in zukünftigen Aufrufen von [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) ignoriert.

    - `iceCandidatePoolSize` {{optional_inline}}

      - : Ein nicht signierter 16-Bit-Integer-Wert, der die Größe des vorab abgerufenen ICE-Kandidatenpools angibt. Der Standardwert ist 0 (d.h. es findet kein vorab abgerufenes Kandidaten-Prefetching statt). In einigen Fällen kann es sein, dass Verbindungen schneller hergestellt werden, indem dem ICE-Agent erlaubt wird, ICE-Kandidaten zu sammeln, bevor Sie versuchen, zu verbinden, sodass sie bereits zur Verfügung stehen, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

        > [!NOTE]
        > Eine Änderung der Größe des ICE-Kandidatenpools kann den Beginn des ICE-Sammelns auslösen.

    - `iceServers` {{optional_inline}}

      - : Ein Array von Objekten, die jeweils einen Server beschreiben, der vom ICE-Agent verwendet werden kann; diese sind typischerweise STUN- und/oder TURN-Server. Wenn dies nicht angegeben wird, wird der Verbindungsversuch ohne verfügbaren STUN- oder TURN-Server unternommen, was die Verbindung auf lokale Peers beschränkt. Jedes Objekt kann die folgenden Eigenschaften haben:

        - `credential` {{optional_inline}}
          - : Das Anmeldeinformationen zur Anmeldung beim Server. Dies wird nur verwendet, wenn das Objekt einen TURN-Server darstellt.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, gibt dieses Attribut an, welche Art von `credential` beim Verbinden verwendet werden soll. Der Standard ist `"password"`.
        - `urls`
          - : Diese **erforderliche** Eigenschaft ist entweder eine einzelne Zeichenfolge oder ein Array von Zeichenfolgen, die jeweils eine URL angeben, die zur Verbindung mit dem Server verwendet werden kann.
        - `username` {{optional_inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, dann ist dies der Benutzername, der während der Authentifizierung verwendet wird.

    - `iceTransportPolicy` {{optional_inline}}

      - : Eine Zeichenkette, die die aktuelle ICE-Transportpolitik darstellt. Mögliche Werte sind:

        - `"all"`
          - : Alle ICE-Kandidaten werden in Betracht gezogen. Dies ist der Standardwert.
        - `"public"` {{deprecated_inline}}
          - : Es werden nur ICE-Kandidaten mit öffentlichen IP-Adressen in Betracht gezogen.
        - `"relay"`
          - : Es werden nur ICE-Kandidaten in Betracht gezogen, deren IP-Adressen weitergeleitet werden, wie beispielsweise solche, die über einen TURN-Server geleitet werden.

    - `peerIdentity` {{optional_inline}}
      - : Eine Zeichenfolge, die die Ziel-Peer-Identität für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt. Wenn dieser Wert gesetzt ist (Standard ist `null`), wird die `RTCPeerConnection` nicht mit einem entfernten Peer verbinden, es sei denn, sie kann erfolgreich mit dem angegebenen Namen authentifizieren.
    - `rtcpMuxPolicy` {{optional_inline}}

      - : Eine Zeichenkette, die die RTCP-Mux-Richtlinie angibt, die beim Sammeln von ICE-Kandidaten verwendet werden soll, um nicht-multiplexiertes RTCP zu unterstützen. Mögliche Werte sind:

        - `"negotiate"`
          - : Weist den ICE-Agent an, sowohl {{Glossary("RTP", "RTP")}} als auch {{Glossary("RTCP", "RTCP")}} Kandidaten zu sammeln. Wenn der entfernte Peer RTCP multiplexen kann, dann werden RTCP-Kandidaten auf die entsprechenden RTP-Kandidaten multipelxiert. Andernfalls werden sowohl die RTP- als auch die RTCP-Kandidaten separat zurückgegeben.
        - `"require"`
          - : Fordert den ICE-Agent auf, ICE-Kandidaten nur für RTP zu sammeln und RTCP darauf zu multiplexen. Wenn der entfernte Peer kein RTCP-Multiplexen unterstützt, schlägt die Sitzungsverhandlung fehl. Dies ist der Standardwert.

### Rückgabewert

Ein neu-erstelltes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekt, konfiguriert wie durch `configuration` beschrieben, falls angegeben; andernfalls mit angemessenen Grundeinstellungen konfiguriert.

## Verwendung von Zertifikaten

Wenn Sie Ihre eigenen Zertifikate für die Verwendung durch eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitstellen möchten, anstatt diese automatisch generieren zu lassen, tun Sie dies, indem Sie die statische Funktion [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) aufrufen.

Der Wert der `certificates` Eigenschaft kann nicht geändert werden, nachdem er erstmals festgelegt wurde. Wenn er in der Konfiguration enthalten ist, die bei einem Aufruf von [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) einer Verbindung übergeben wird, wird er ignoriert.

Dieses Attribut unterstützt die Bereitstellung mehrerer Zertifikate, da obwohl eine DTLS-Verbindung nur ein Zertifikat verwendet, die Bereitstellung mehrerer Zertifikate die Unterstützung mehrerer Verschlüsselungsalgorithmen ermöglicht. Die Implementierung von `RTCPeerConnection` wählt das zu verwendende Zertifikat basierend auf den Algorithmen aus, die es und der entfernte Peer während des DTLS-Handshake unterstützen.

Wenn Sie keine Zertifikate bereitstellen, werden neue automatisch generiert. Ein offensichtlicher Vorteil der Bereitstellung eigener Zertifikate ist die Kontinuität des Identitätsschlüssels — wenn Sie dasselbe Zertifikat für nachfolgende Anrufe verwenden, kann der entfernte Peer erkennen, dass Sie derselbe Anrufer sind. Dies vermeidet auch die Kosten der Erstellung neuer Schlüssel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Überblick über die WebRTC-Architektur](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebensdauer einer WebRTC-Session](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
