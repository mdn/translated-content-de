---
title: "RTCPeerConnection: RTCPeerConnection()-Konstruktor"
short-title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
l10n:
  sourceCommit: 9c560a9d9de6f663ada0c1bebaf93a3c76e0901d
---

{{APIRef("WebRTC")}}

Der Konstruktor **`RTCPeerConnection()`** gibt eine neu erstellte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zurück, die eine Verbindung zwischen dem lokalen Gerät und einem Remote-Peer darstellt.

## Syntax

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Ein Objekt, das Optionen zum Konfigurieren der neuen Verbindung bereitstellt:
    - `alwaysNegotiateDataChannels` {{optional_inline}}
      - : Ein boolescher Wert, der bei `true` angibt, dass die Anwendung Datenkanäle im {{Glossary("SDP", "SDP")}}-Angebot aushandelt, bevor ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) erstellt wird. Dadurch wird auch der Daten-`m=`-Abschnitt vor allen Audio- oder Video-`m=`-Abschnitten ausgehandelt. Der Daten-`m=`-Abschnitt wird auch als „offerer-tagged“-`m=`-Abschnitt für BUNDLE verwendet. Der Standardwert ist `false`.

        Der Vorteil, `alwaysNegotiateDataChannels` auf `true` zu setzen, besteht darin, dass Sie vor Ihrem ersten Aufruf von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) keinen Datenkanal erstellen oder keine zweite Neuverhandlung akzeptieren müssen, wenn [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) ausgelöst wird.

        > [!NOTE]
        > Nach dem Festlegen kann der Wert von `alwaysNegotiateDataChannels` nicht mehr geändert werden, nachdem die Verbindung erstellt wurde. Der Aufruf von [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) mit einem anderen Wert löst einen `InvalidModificationError` aus.
    - `bundlePolicy` {{optional_inline}}
      - : Legt fest, wie die Aushandlung von Kandidaten behandelt wird, wenn der Remote-Peer nicht mit dem [SDP-BUNDLE-Standard](https://datatracker.ietf.org/doc/rfc8843/) kompatibel ist. Wenn der Remote-Endpunkt BUNDLE unterstützt, werden alle Medientracks und Datenkanäle nach Abschluss der Aushandlung unabhängig von der verwendeten Richtlinie auf einem einzigen Transport gebündelt, und alle überflüssigen Transporte, die anfänglich erstellt wurden, werden zu diesem Zeitpunkt geschlossen.

        Technisch ausgedrückt ermöglicht ein BUNDLE, dass der gesamte Medienfluss zwischen zwei Peers über ein einzelnes **5-Tupel** erfolgt; das heißt, von einer einzelnen IP-Adresse und einem Port auf einem Peer zu einer einzelnen IP-Adresse und einem Port auf dem anderen Peer unter Verwendung desselben Transportprotokolls.

        Dies muss einer der folgenden Stringwerte sein; andernfalls wird `balanced` angenommen:
        - `"balanced"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) für jeden hinzugefügten Inhaltstyp: Audio, Video und Datenkanäle. Wenn der Remote-Endpunkt BUNDLE nicht unterstützt, verarbeitet jeder dieser DTLS-Transporte die gesamte Kommunikation für einen Datentyp.
        - `"max-compat"`
          - : Der ICE-Agent erstellt zunächst einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) pro Medientrack und einen separaten für Datenkanäle. Wenn der Remote-Endpunkt BUNDLE nicht unterstützt, wird alles auf diesen separaten DTLS-Transporten ausgehandelt.
        - `"max-bundle"`
          - : Der ICE-Agent erstellt zunächst nur einen einzigen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport), um alle Daten der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu übertragen. Wenn der Remote-Endpunkt BUNDLE nicht unterstützt, wird nur ein einzelner Track ausgehandelt und der Rest ignoriert.

    - `certificates` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Objekten des Typs [`RTCCertificate`](/de/docs/Web/API/RTCCertificate), die von der Verbindung zur Authentifizierung verwendet werden. Wenn diese Eigenschaft nicht angegeben wird, wird automatisch ein Satz von Zertifikaten für jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Instanz generiert. Obwohl von einer bestimmten Verbindung nur ein Zertifikat verwendet wird, kann das Bereitstellen von Zertifikaten für mehrere Algorithmen unter bestimmten Umständen die Wahrscheinlichkeit einer erfolgreichen Verbindung erhöhen. Weitere Informationen finden Sie unter [Zertifikate verwenden](#zertifikate_verwenden).

        > [!NOTE]
        > Diese Konfigurationsoption kann nicht mehr geändert werden, nachdem sie erstmals angegeben wurde; sobald die Zertifikate festgelegt wurden, wird diese Eigenschaft bei zukünftigen Aufrufen von [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) ignoriert.

    - `iceCandidatePoolSize` {{optional_inline}}
      - : Ein vorzeichenloser 16-Bit-Ganzzahlwert, der die Größe des vorab abgerufenen ICE-Kandidatenpools angibt. Der Standardwert ist 0 (das bedeutet, dass kein Vorabruf von Kandidaten erfolgt). In einigen Fällen können Verbindungen möglicherweise schneller hergestellt werden, indem Sie dem ICE-Agenten erlauben, ICE-Kandidaten abzurufen, bevor Sie versuchen, eine Verbindung herzustellen, sodass sie bereits zur Prüfung verfügbar sind, wenn [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.

        > [!NOTE]
        > Das Ändern der Größe des ICE-Kandidatenpools kann den Beginn der ICE-Erfassung auslösen.

    - `iceServers` {{optional_inline}}
      - : Ein Array von Objekten, die jeweils einen Server beschreiben, der vom ICE-Agenten verwendet werden kann; dabei handelt es sich typischerweise um STUN- und/oder TURN-Server. Wenn dies nicht angegeben wird, wird der Verbindungsversuch ohne verfügbaren STUN- oder TURN-Server durchgeführt, wodurch die Verbindung auf lokale Peers beschränkt wird. Jedes Objekt kann die folgenden Eigenschaften haben:
        - `credential` {{optional_inline}}
          - : Die Zugangsdaten, die bei der Anmeldung am Server verwendet werden sollen. Dies wird nur verwendet, wenn das Objekt einen TURN-Server darstellt.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, gibt dieses Attribut an, welche Art von `credential` beim Herstellen der Verbindung verwendet werden soll. Der Standardwert ist `"password"`.
        - `urls`
          - : Diese **erforderliche** Eigenschaft ist entweder ein einzelner String oder ein Array von Strings, die jeweils eine URL angeben, die zum Herstellen einer Verbindung mit dem Server verwendet werden kann.
        - `username` {{optional_inline}}
          - : Wenn das Objekt einen TURN-Server darstellt, ist dies der Benutzername, der während der Authentifizierung verwendet werden soll.

    - `iceTransportPolicy` {{optional_inline}}
      - : Ein String, der die aktuelle ICE-Transportrichtlinie darstellt. Mögliche Werte sind:
        - `"all"`
          - : Alle ICE-Kandidaten werden berücksichtigt. Dies ist der Standardwert.
        - `"public"` {{deprecated_inline}}
          - : Nur ICE-Kandidaten mit öffentlichen IP-Adressen werden berücksichtigt.
        - `"relay"`
          - : Nur ICE-Kandidaten, deren IP-Adressen weitergeleitet werden, beispielsweise über einen TURN-Server, werden berücksichtigt.

    - `peerIdentity` {{optional_inline}}
      - : Ein String, der die Identität des Ziel-Peers für die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) angibt. Wenn dieser Wert festgelegt ist (der Standardwert ist `null`), stellt die `RTCPeerConnection` keine Verbindung zu einem Remote-Peer her, es sei denn, sie kann sich erfolgreich mit dem angegebenen Namen authentifizieren.
    - `rtcpMuxPolicy` {{optional_inline}}
      - : Ein String, der die RTCP-Mux-Richtlinie angibt, die beim Sammeln von ICE-Kandidaten verwendet werden soll, um nicht-multiplexiertes RTCP zu unterstützen. Mögliche Werte sind:
        - `"negotiate"`
          - : Weist den ICE-Agenten an, sowohl {{Glossary("RTP", "RTP")}}- als auch {{Glossary("RTCP", "RTCP")}}-Kandidaten zu sammeln. Wenn der Remote-Peer RTCP multiplexen kann, werden RTCP-Kandidaten über die entsprechenden RTP-Kandidaten multiplexiert. Andernfalls werden sowohl die RTP- als auch die RTCP-Kandidaten getrennt zurückgegeben.
        - `"require"`
          - : Weist den ICE-Agenten an, ICE-Kandidaten nur für RTP zu sammeln und RTCP darüber zu multiplexieren. Wenn der Remote-Peer RTCP-Multiplexing nicht unterstützt, schlägt die Sitzungsaushandlung fehl. Dies ist der Standardwert.

### Rückgabewert

Ein neu erstelltes [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt, das wie durch `configuration` beschrieben konfiguriert ist, sofern angegeben; andernfalls mit geeigneten grundlegenden Standardwerten konfiguriert.

## Zertifikate verwenden

Wenn Sie eigene Zertifikate zur Verwendung durch eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) bereitstellen möchten, anstatt sie automatisch von der `RTCPeerConnection` generieren zu lassen, tun Sie dies durch Aufrufen der statischen Funktion [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static).

Der Wert der Eigenschaft `certificates` kann nicht geändert werden, nachdem er erstmals angegeben wurde. Wenn er in der Konfiguration enthalten ist, die an einen Aufruf von [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) einer Verbindung übergeben wird, wird er ignoriert.

Dieses Attribut unterstützt das Bereitstellen mehrerer Zertifikate, da zwar eine bestimmte DTLS-Verbindung nur ein Zertifikat verwendet, das Bereitstellen mehrerer Zertifikate jedoch die Unterstützung mehrerer Verschlüsselungsalgorithmen ermöglicht. Die Implementierung von `RTCPeerConnection` wählt anhand der Algorithmen, die sie und der Remote-Peer unterstützen und die während des DTLS-Handshakes ermittelt werden, aus, welches Zertifikat verwendet werden soll.

Wenn Sie keine Zertifikate bereitstellen, werden automatisch neue generiert. Ein offensichtlicher Vorteil des Bereitstellens eigener Zertifikate ist die Kontinuität des Identitätsschlüssels: Wenn Sie für nachfolgende Aufrufe dasselbe Zertifikat verwenden, kann der Remote-Peer erkennen, dass Sie derselbe Anrufer sind. Dies vermeidet zudem die Kosten für die Generierung neuer Schlüssel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Überblick über die WebRTC-Architektur](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
