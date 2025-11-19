---
title: "RTCPeerConnection: RTCPeerConnection() Konstruktor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Der **`RTCPeerConnection()`**-Konstruktor gibt eine neu erstellte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Ein Objekt, das Optionen zur Konfiguration der neuen Verbindung bereitstellt:
    - `bundlePolicy` {{optional_inline}}
      - : Gibt an, wie mit der Verhandlung von Kandidaten umgegangen werden soll, wenn der entfernte Peer nicht mit dem [SDP BUNDLE Standard](https://datatracker.ietf.org/doc/rfc8843/) kompatibel ist. Wenn der entfernte Endpunkt BUNDLE-fähig ist, werden alle Medientracks und Datenkanäle unabhängig von der verwendeten Richtlinie am Ende der Verhandlung auf einen einzigen Transport gebündelt, und alle überflüssigen Transporte, die ursprünglich erstellt wurden, werden an diesem Punkt geschlossen.

        Technisch gesehen lässt ein BUNDLE alle Medien zwischen zwei Peers über ein einziges **5-Tuple** fließen; das bedeutet, von einer einzelnen IP und einem Port auf einem Peer zu einer einzelnen IP und einem Port auf dem anderen Peer, unter Verwendung desselben Transportprotokolls.

        Dies muss einer der folgenden Zeichenfolgenwerte sein, falls nicht wird `balanced` angenommen:
        - `"balanced"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) für jeden hinzugefügten Inhaltstyp: Audio, Video und Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-fähig ist, dann verwaltet jeder dieser DTLS-Transporte die gesamte Kommunikation für einen Datentyp.
        - `"max-compat"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) pro Medientrack und einen separaten für Datenkanäle. Wenn der entfernte Endpunkt nicht BUNDLE-fähig ist, wird alles über diese separaten DTLS-Transporte verhandelt.
        - `"max-bundle"`
          - : Der ICE-Agent erstellt zunächst nur einen einzigen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), um alle Daten der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu transportieren. Wenn der entfernte Endpunkt nicht BUNDLE-fähig ist, wird nur ein einziger Track verhandelt und der Rest ignoriert.

    - `certificates` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Objekten des Typs [`RTCCertificate`](/de/docs/Web/API/RTCCertificate), die von der Verbindung zur Authentifizierung verwendet werden. Wird diese Eigenschaft nicht angegeben, wird für jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz automatisch eine Gruppe von Zertifikaten generiert. Obwohl pro Verbindung nur ein Zertifikat verwendet wird, kann die Bereitstellung von Zertifikaten für mehrere Algorithmen in einigen Fällen die Chancen auf eine erfolgreiche Verbindung erhöhen. Siehe [Verwendung von Zertifikaten](#verwendung_von_zertifikaten) für weitere Informationen.

        > [!NOTE]
        > Diese Konfigurationsoption kann nicht geändert werden, nachdem sie erstmals festgelegt wurde; sobald die Zertifikate festgelegt sind, wird diese Eigenschaft in zukünftigen Aufrufen von [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) ignoriert.

    - `iceCandidatePoolSize` {{optional_inline}}
      - : Ein vorzeichenloser 16-Bit-Integer-Wert, der die Größe des vorab geladenen ICE-Kandidatenpools angibt. Der Standardwert ist 0 (das bedeutet, es findet kein Kandidatenvorabruf statt). In einigen Fällen kann es sein, dass Verbindungen schneller hergestellt werden können, indem der ICE-Agent damit beginnt, ICE-Kandidaten abzurufen, bevor Sie versuchen, eine Verbindung herzustellen, sodass sie bereits zur Überprüfung bereitstehen, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

        > [!NOTE]
        > Eine Änderung der Größe des ICE-Kandidatenpools kann das Starten der ICE-Sammlung auslösen.

    - `iceServers` {{optional_inline}}
      - : Ein Array von Objekten, von denen jedes einen Server beschreibt, der vom ICE-Agent verwendet werden kann; es handelt sich dabei normalerweise um STUN- und/oder TURN-Server. Wird dies nicht angegeben, wird der Verbindungsversuch ohne verfügbaren STUN- oder TURN-Server unternommen, was die Verbindung auf lokale Peers beschränkt. Jedes Objekt kann die folgenden Eigenschaften haben:
        - `credential` {{optional_inline}}
          - : Das Anmeldekennwort für die Anmeldung am Server. Dies wird nur verwendet, wenn das Objekt einen TURN-Server darstellt.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, gibt dieses Attribut an, welche Art von `credential` beim Verbinden verwendet werden soll. Der Standardwert ist `"password"`.
        - `urls`
          - : Diese **erforderliche** Eigenschaft ist entweder eine einzelne Zeichenfolge oder ein Array von Zeichenfolgen, die jeweils eine URL angeben, die verwendet werden kann, um eine Verbindung zum Server herzustellen.
        - `username` {{optional_inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, ist dies der Benutzername, der während der Authentifizierung verwendet wird.

    - `iceTransportPolicy` {{optional_inline}}
      - : Eine Zeichenkette, die die aktuelle ICE-Transportpolitik darstellt. Mögliche Werte sind:
        - `"all"`
          - : Alle ICE-Kandidaten werden berücksichtigt. Dies ist der Standardwert.
        - `"public"` {{deprecated_inline}}
          - : Nur ICE-Kandidaten mit öffentlichen IP-Adressen werden berücksichtigt.
        - `"relay"`
          - : Nur ICE-Kandidaten, deren IP-Adressen über einen Zwischenserver wie einen TURN-Server weitergeleitet werden, werden berücksichtigt.

    - `peerIdentity` {{optional_inline}}
      - : Eine Zeichenkette, die die Ziel-Peer-Identität für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt. Wenn dieser Wert festgelegt ist (Standard ist `null`), stellt die `RTCPeerConnection` keine Verbindung zu einem entfernten Peer her, es sei denn, sie kann sich erfolgreich mit dem angegebenen Namen authentifizieren.
    - `rtcpMuxPolicy` {{optional_inline}}
      - : Eine Zeichenkette, die die RTCP-Mux-Richtlinie angibt, die beim Sammeln von ICE-Kandidaten verwendet werden soll, um nicht-multiplexiertes RTCP zu unterstützen. Mögliche Werte sind:
        - `"negotiate"`
          - : Weist den ICE-Agent an, sowohl {{Glossary("RTP", "RTP")}} als auch {{Glossary("RTCP", "RTCP")}} Kandidaten zu sammeln. Wenn der entfernte Peer RTCP multiplexen kann, werden RTCP-Kandidaten atop der entsprechenden RTP-Kandidaten multiplexed. Andernfalls werden sowohl die RTP- als auch die RTCP-Kandidaten getrennt zurückgegeben.
        - `"require"`
          - : Fordert den ICE-Agent dazu auf, ICE-Kandidaten nur für RTP zu sammeln und RTCP darauf zu multiplexen. Wenn der entfernte Peer RTCP-Multiplexen nicht unterstützt, schlägt die Sitzungsverhandlung fehl. Dies ist der Standardwert.

### Rückgabewert

Ein neu erstelltes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekt, konfiguriert wie durch `configuration` beschrieben, falls angegeben; andernfalls konfiguriert mit passenden grundlegenden Standardeinstellungen.

## Verwendung von Zertifikaten

Wenn Sie Ihre eigenen Zertifikate für die Verwendung durch eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitstellen möchten, anstatt dass die `RTCPeerConnection` sie automatisch generiert, tun Sie dies, indem Sie die statische Funktion [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static) aufrufen.

Der Wert der Eigenschaft `certificates` kann nicht mehr geändert werden, nachdem er erstmals festgelegt wurde. Wenn er in der Konfiguration enthalten ist, die an einen Aufruf der [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) einer Verbindung übergeben wird, wird er ignoriert.

Dieses Attribut unterstützt die Bereitstellung mehrerer Zertifikate, da, obwohl eine gegebene DTLS-Verbindung nur ein Zertifikat verwendet, die Bereitstellung mehrerer Zertifikate die Unterstützung mehrerer Verschlüsselungsalgorithmen ermöglicht. Die Implementierung von `RTCPeerConnection` wählt aus, welches Zertifikat basierend auf den Algorithmen verwendet wird, die sie und der entfernte Peer unterstützen, wie während des DTLS-Handshakes bestimmt.

Wenn Sie keine Zertifikate bereitstellen, werden automatisch neue generiert. Ein offensichtlicher Vorteil der Bereitstellung Ihrer eigenen Zertifikate ist die Identitätsschlüsselkontinuität - wenn Sie dasselbe Zertifikat für nachfolgende Aufrufe verwenden, kann der entfernte Peer erkennen, dass Sie derselbe Anrufer sind. Dies vermeidet auch die Kosten für die Generierung neuer Schlüssel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC-Architektur Überblick](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
