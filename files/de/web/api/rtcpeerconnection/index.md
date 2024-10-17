---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef('WebRTC')}}

Das **`RTCPeerConnection`**-Interface repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Es bietet Methoden, um sich mit einem entfernten Peer zu verbinden, die Verbindung zu pflegen und zu überwachen sowie die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt eine neue `RTCPeerConnection` zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Instanzeigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der entfernte Peer [trickle ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Zeigt den aktuellen Zustand der Peer-Verbindung an, indem einer der folgenden Zeichenfolgen zurückgegeben wird: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seitdem diese `RTCPeerConnection` die Verhandlung und Verbindung mit einem entfernten Peer abgeschlossen hat. Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die vom ICE-Agenten seit dem ersten Start des Angebots oder der Antwort, die durch die Beschreibung dargestellt wird, möglicherweise bereits generiert wurden.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seitdem diese `RTCPeerConnection` die Verhandlung und Verbindung mit einem entfernten Peer abgeschlossen hat. Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die vom ICE-Agenten seit dem ersten Start des Angebots oder der Antwort, die durch die Beschreibung dargestellt wird, möglicherweise bereits generiert wurden.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt einen Zeichenfolgenwert zurück, der den Zustand des ICE-Agenten angibt, der mit dieser RTCPeerConnection verbunden ist. Es kann einer der folgenden Werte sein: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den ICE-Sammlung-Zustand der Verbindung beschreibt. Damit können Sie beispielsweise erkennen, wann die Sammlung von ICE-Kandidaten abgeschlossen ist. Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das die Sitzung für das lokale Ende der Verbindung beschreibt. Wenn es noch nicht gesetzt wurde, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einer [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die eine Zeichenfolge enthält, die den entfernten Peer identifiziert. Sobald dieses Versprechen erfolgreich aufgelöst wurde, ist die resultierende Identität die Ziel-Peer-Identität und ändert sich während der gesamten Verbindung nicht.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine anstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt. Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft aussehen könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine anstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt. Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft aussehen könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das die Sitzung, einschließlich Konfigurations- und Medieninformationen, für das entfernte Ende der Verbindung beschreibt. Wenn dies noch nicht gesetzt wurde, wird `null` zurückgegeben.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt zurück, das die {{Glossary("SCTP", "SCTP")}}-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden. Wenn SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beim Verbinden oder Wiederverbinden mit einem anderen Peer beschreibt. Es ist einer der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und den entsprechenden privaten Schlüssel und gibt ein {{jsxref("Promise")}} zurück, das mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es generiert wurde.

## Instanzmethoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt einen neuen entfernten Kandidaten zur `RTCPeerConnection`-Remote-Beschreibung hinzu, die den Zustand des entfernten Endes der Verbindung beschreibt.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zum Satz der Tracks hinzu, die an den anderen Peer übertragen werden.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn dem Satz von Transceivern hinzu, die mit der Verbindung verbunden sind. Jeder Transceiver repräsentiert einen bidirektionalen Datenstrom, mit einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), die damit verbunden sind.
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schließt die aktuelle Peer-Verbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Leitet die Erstellung einer {{Glossary("SDP", "SDP")}}-Antwort auf ein Angebot ein, das von einem entfernten Peer während der Angebot/Antwort-Verhandlung einer WebRTC-Verbindung empfangen wurde. Die Antwort enthält Informationen über bereits an die Sitzung angehängte Medien, vom Browser unterstützte Codecs und Optionen sowie bereits gesammelte {{Glossary("ICE", "ICE")}}-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Leitet die Erstellung eines neuen Kanals ein, der mit dem entfernten Peer verknüpft ist, über den jede Art von Daten übertragen werden kann. Dies kann nützlich sein für Back-Channel-Inhalte wie Bilder, Dateitransfer, Text-Chat, Spiel-Update-Pakete usw.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Leitet die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots für den Zweck ein, eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten. Das SDP-Angebot enthält Informationen über bereits an die WebRTC-Sitzung angehängte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, vom Browser unterstützte Codecs und Optionen sowie bereits gesammelte {{Glossary("ICE", "ICE")}}-Kandidaten, die über den Signalisierungskanal an einen potenziellen Peer gesendet werden sollen, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung angibt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Leitet das Sammeln einer Identitätszusicherung ein und gibt ein {{jsxref("Promise")}} zurück, das in eine als Zeichenfolge codierte Identitätszusicherung aufgelöst wird. Dies hat nur dann eine Wirkung, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen {{Glossary("RTP", "RTP")}}-Empfänger darstellt.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, von denen jedes den {{Glossary("RTP", "RTP")}}-Sender repräsentiert, der für die Übertragung der Daten eines Tracks verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Daten aufgelöst wird, die Statistiken entweder über die gesamte Verbindung oder über den angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellen.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die zum Senden und Empfangen von Daten auf der Verbindung verwendet werden.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Teilt dem lokalen Ende der Verbindung mit, das Senden von Medien von dem angegebenen Track zu stoppen, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) tatsächlich aus der Liste der Sender zu entfernen, wie sie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet wird. Wenn der Track bereits gestoppt ist oder sich nicht in der Sendeliste der Verbindung befindet, hat diese Methode keine Wirkung.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Ermöglicht es, das Sammeln von ICE-Kandidaten an beiden Enden der Verbindung leicht neu zu starten. Dies vereinfacht den Prozess, indem dieselbe Methode sowohl vom Anrufer als auch vom Empfänger verwendet werden kann, um einen {{Glossary("ICE", "ICE")}}-Neustart auszulösen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Setzt die aktuelle Konfiguration der Verbindung basierend auf den in dem angegebenen Objekt enthaltenen Werten. Damit können Sie die von der Verbindung verwendeten {{Glossary("ICE", "ICE")}}-Server ändern und welche Transport-Richtlinien verwendet werden sollen.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Setzt den Identitätsanbieter (IdP) auf das im Parameter angegebene Tripel: seinen Namen, das Protokoll für die Kommunikation mit ihm und einen Benutzernamen. Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die mit der Verbindung verbundene lokale Beschreibung. Diese Beschreibung spezifiziert die Eigenschaften des lokalen Endes der Verbindung, einschließlich des Medienformats. Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers. Die Beschreibung spezifiziert die Eigenschaften des entfernten Endes der Verbindung, einschließlich des Medienformats. Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video hinzu. Anstelle dieser veralteten Methode sollten Sie für jeden Track, den Sie an den entfernten Peer senden möchten, [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) verwenden.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der mit einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) verbunden ist, und der in der Lage ist, {{Glossary("DTMF", "DTMF")}}-Telefonie-Signalisierung über die Verbindung zu senden.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video. Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Gesendet, wenn sich der allgemeine Konnektivitätsstatus der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Gesendet, wenn der entfernte Peer einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Gesendet, um anzufordern, dass der angegebene Kandidat an den entfernten Peer übertragen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : An die Verbindung gesendet, wenn während des Sammelns von {{Glossary("ICE", "ICE")}}-Kandidaten ein Fehler auftritt. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Gesendet, wenn sich der Zustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert, z. B. wenn sie unterbrochen wird.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Gesendet, wenn sich der Sammlungszustand der {{Glossary("ICE", "ICE")}}-Schicht, der durch [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) reflektiert wird, ändert. Dies zeigt an, ob die ICE-Verhandlung noch nicht begonnen hat (`new`), ob mit dem Sammeln von Kandidaten begonnen wurde (`gathering`) oder ob sie abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Gesendet, wenn die Verhandlung oder Neuverhandlung der {{Glossary("ICE", "ICE")}}-Verbindung durchgeführt werden muss; dies kann sowohl beim erstmaligen Öffnen einer Verbindung als auch bei notwendiger Anpassung an sich ändernde Netzwerkbedingungen geschehen. Der Empfänger sollte darauf reagieren, indem er ein Angebot erstellt und es an den anderen Peer sendet.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Gesendet, wenn sich der Signalisierungszustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Gesendet, nachdem ein neuer Track zu einer der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, die die Verbindung umfassen.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wurde. Anstatt auf dieses veraltete Ereignis zu achten, sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse achten; eines wird für jeden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, der zur Verbindung hinzugefügt wird.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) von der Verbindung entfernt wird. Anstatt auf dieses veraltete Ereignis zu achten, sollten Sie auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse auf jedem Stream achten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML Videoaufnahme, Peer-to-Peer-Video- und Dateifreigabeanwendung ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
