---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnection`**-Schnittstelle repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Sie bietet Methoden, um sich mit einem entfernten Peer zu verbinden, die Verbindung zu pflegen und zu überwachen und die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt eine neue `RTCPeerConnection` zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der entfernte Peer [trickle ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann oder nicht.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Gibt den aktuellen Status der Peer-Verbindung an, indem einer der folgenden Zeichenfolgen zurückgegeben wird: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seit das letzte Mal, als diese `RTCPeerConnection` das Verhandeln und Verbinden mit einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das Angebot oder die Antwort, die durch die Beschreibung repräsentiert wird, erstmals instanziiert wurde.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seit das letzte Mal, als diese `RTCPeerConnection` das Verhandeln und Verbinden mit einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das Angebot oder die Antwort, die durch die Beschreibung repräsentiert wird, erstmals instanziiert wurde.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Status des ICE-Agenten angibt, der mit dieser RTCPeerConnection verbunden ist.
    Es kann einer der folgenden Werte sein: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den ICE-Sammelstatus der Verbindung beschreibt.
    Dies lässt Sie beispielsweise erkennen, wann die Sammlung von ICE-Kandidaten abgeschlossen ist.
    Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück,
    die die Sitzung für das lokale Ende der Verbindung beschreibt.
    Wenn sie noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt einen {{jsxref("Promise")}} zurück, der zu einer [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die eine Zeichenfolge enthält, die den entfernten Peer identifiziert.
    Sobald dieser Promise erfolgreich aufgelöst wird, ist die resultierende Identität die Ziel-Peer-Identität und wird sich für die Dauer der Verbindung nicht ändern.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine anstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung in ihrem aktuellen Zustand, sondern wie sie möglicherweise in naher Zukunft existieren könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)-Objekt zurück,
    das eine anstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung in ihrem aktuellen Zustand, sondern wie sie möglicherweise in naher Zukunft existieren könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das die Sitzung, einschließlich Konfigurations- und Medieninformationen, für das entfernte Ende der Verbindung beschreibt.
    Wenn dies noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt zurück, das die {{Glossary("SCTP", "SCTP")}}-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden.
    Wenn SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Zustand des Signalisierungsprozesses auf dem lokalen Ende der Verbindung beschreibt, während eine Verbindung zu einem anderen Peer aufgebaut oder wiederhergestellt wird.
    Es kann einer der folgenden Werte sein: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und den entsprechenden privaten Schlüssel und gibt einen {{jsxref("Promise")}} zurück, der nach der Erzeugung mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt der entfernten Beschreibung des `RTCPeerConnection`, die den Zustand des entfernten Endes der Verbindung beschreibt, einen neuen Remote-Kandidaten hinzu.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt ein neues [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zur Menge der Spuren hinzu, die an den anderen Peer übertragen werden.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn der Menge der Transceiver hinzu, die mit der Verbindung verbunden sind.
    Jeder Transceiver stellt einen bidirektionalen Stream dar, mit einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), die damit verbunden sind.
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schließt die aktuelle Peer-Verbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Leitet die Erstellung einer {{Glossary("SDP", "SDP")}}-Antwort auf ein von einem entfernten Peer erhaltenes Angebot während der Angebot/Antwort-Aushandlung einer WebRTC-Verbindung ein.
    Die Antwort enthält Informationen über alle Medien, die bereits an die Sitzung angehängt sind, von den Browser unterstützte Codecs und Optionen sowie alle bereits gesammelten {{Glossary("ICE", "ICE")}}-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Leitet die Erstellung eines neuen Kanals ein, der mit dem entfernten Peer verknüpft ist, über den jede Art von Daten übertragen werden kann.
    Dies kann nützlich sein für Back-Channel-Inhalte, wie Bilder, Dateitransfer, Text-Chat, Spielaktualisierungspakete usw.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Leitet die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots ein, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.
    Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, vom Browser unterstützte Codecs und Optionen sowie alle Kandidaten, die bereits vom {{Glossary("ICE", "ICE")}}-Agenten gesammelt wurden, um über den Signalisierungskanal an einen potenziellen Peer gesendet zu werden, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung angibt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Leitet das Sammeln einer Identitätsaussage ein und gibt einen {{jsxref("Promise")}} zurück, der zu einer als Zeichenfolge codierten Identitätsaussage aufgelöst wird.
    Dies hat nur Auswirkungen, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen {{Glossary("RTP", "RTP")}}-Empfänger darstellt.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, von denen jedes den {{Glossary("RTP", "RTP")}}-Sender darstellt, der für die Übertragung der Daten einer Spur verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt einen {{jsxref("Promise")}} zurück, der mit Daten aufgelöst wird, die Statistiken über entweder die gesamte Verbindung oder über das angegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellen.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die zum Senden und Empfangen von Daten auf der Verbindung verwendet werden.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Weist das lokale Ende der Verbindung an, das Senden von Medien von der angegebenen Spur zu stoppen, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aus der Liste der Sender zu entfernen, wie durch [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet.
    Wenn die Spur bereits gestoppt ist oder nicht in der Senderliste der Verbindung enthalten ist, hat diese Methode keine Wirkung.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Ermöglicht es, das Sammeln von ICE-Kandidaten an beiden Enden der Verbindung problemlos erneut anzufordern.
    Dies vereinfacht den Prozess, indem die gleiche Methode entweder vom Anrufer oder vom Empfänger verwendet werden kann, um einen {{Glossary("ICE", "ICE")}}-Neustart auszulösen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Setzt die aktuelle Konfiguration der Verbindung basierend auf den in dem angegebenen Objekt enthaltenen Werten.
    Dadurch können Sie die von der Verbindung verwendeten {{Glossary("ICE", "ICE")}}-Server ändern und welche Transportpolitiken verwendet werden sollen.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Setzt den Identity Provider (IdP) auf das gegebene Triplett: dessen Name, das Protokoll, das zur Kommunikation mit ihm verwendet wird, und ein Benutzername.
    Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die mit der Verbindung verknüpfte lokale Beschreibung.
    Diese Beschreibung gibt die Eigenschaften des lokalen Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt einen {{jsxref("Promise")}} zurück, der erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers.
    Die Beschreibung gibt die Eigenschaften des entfernten Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt einen {{jsxref("Promise")}} zurück, der erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video hinzu.
    Anstelle dieser veralteten Methode sollten Sie [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) einmal für jede Spur verwenden, die Sie an den entfernten Peer senden möchten.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der mit einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) assoziiert ist und in der Lage ist, {{Glossary("DTMF", "DTMF")}}-Telefoniesignalisierung über die Verbindung zu senden.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video.
    Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle ab.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Wird gesendet, wenn sich der allgemeine Verbindungsstatus der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Wird gesendet, wenn der entfernte Peer einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Wird gesendet, um anzufordern, dass der angegebene Kandidat an den entfernten Peer übertragen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Wird an die Verbindung gesendet, wenn ein Fehler während der Sammlung von {{Glossary("ICE", "ICE")}}-Kandidaten auftritt. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird gesendet, wenn sich der Zustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert, beispielsweise wenn sie getrennt wird.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird gesendet, wenn sich der Sammlungszustand der {{Glossary("ICE", "ICE")}}-Schicht, wie durch [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) reflektiert, ändert.
    Dies zeigt, ob die ICE-Aushandlung noch nicht begonnen hat (`new`), Kandidaten sammeln begonnen hat (`gathering`) oder abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Wird gesendet, wenn die Aushandlung oder Nachverhandlung der {{Glossary("ICE", "ICE")}}-Verbindung durchgeführt werden muss;
    Dies kann sowohl beim erstmaligen Öffnen einer Verbindung als auch bei der Anpassung an sich ändernde Netzwerkbedingungen passieren.
    Der Empfänger sollte darauf reagieren, indem er ein Angebot erstellt und es an den anderen Peer sendet.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird gesendet, wenn sich der Signalisierungszustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Wird gesendet, nachdem eine neue Spur zu einer der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, die die Verbindung ausmachen.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wurde.
    Statt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse hören;
    eines wird für jede [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), die der Verbindung hinzugefügt wird, gesendet.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wird.
    Statt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse auf jedem Stream hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML-Videoaufnahme, Peer-to-Peer-Video- und Dateifreigabeanwendung ([Quellcode auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
