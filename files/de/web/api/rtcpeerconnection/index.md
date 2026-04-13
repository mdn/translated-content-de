---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: efb84732016b60b17f81358960f9d5ebf516c5fe
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnection`**-Schnittstelle stellt eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer dar. Sie stellt Methoden bereit, um eine Verbindung zu einem entfernten Peer herzustellen, die Verbindung zu warten und zu überwachen und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt ein neues `RTCPeerConnection` zurück, das eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der entfernte Peer [trickled ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand der Peer-Verbindung an, indem einer der folgenden Strings zurückgegeben wird: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, welches das lokale Ende der Verbindung beschreibt, wie sie zuletzt erfolgreich ausgehandelt wurde seit dem letzten Mal, als diese `RTCPeerConnection` die Verhandlung und Verbindung zu einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das Angebot oder die Antwort, die in der Beschreibung dargestellt werden, erstmals instanziiert wurde.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, welches das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde seit dem letzten Mal, als diese `RTCPeerConnection` die Verhandlung und Verbindung zu einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das Angebot oder die Antwort, die in der Beschreibung dargestellt werden, erstmals instanziiert wurde.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des ICE-Agenten angibt, der mit dieser RTCPeerConnection verbunden ist.
    Es kann einer der folgenden Werte sein: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den ICE-Sammelzustand der Verbindung beschreibt.
    Damit können Sie beispielsweise feststellen, wann die Sammlung von ICE-Kandidaten abgeschlossen ist.
    Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`idpLoginUrl`](/de/docs/Web/API/RTCPeerConnection/idpLoginUrl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Endpunkt enthält, zu dem die Anwendung navigieren kann, um Benutzer beim {{Glossary("Identity_provider", "Identity-Provider")}} (IdP) anzumelden. Kann `null` sein, wenn keine Anmeldung erforderlich ist.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, das die Sitzung für das lokale Ende der Verbindung beschreibt.
    Wenn es noch nicht gesetzt wurde, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, welches einen String enthält, der den entfernten Peer identifiziert.
    Sobald dieses Versprechen erfolgreich aufgelöst wurde, ist die resultierende Identität die Ziel-Peer-Identität und wird sich für die Dauer der Verbindung nicht ändern.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine bevorstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft existieren könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)-Objekt zurück, das eine bevorstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft existieren könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)-Objekt zurück, welches die Sitzung, einschließlich Konfigurations- und Medieninformationen, für das entfernte Ende der Verbindung beschreibt.
    Wenn dies noch nicht gesetzt wurde, gibt es `null` zurück.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt zurück, welches die {{Glossary("SCTP", "SCTP")}}-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden.
    Wenn SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beim Verbinden oder Wiederverbinden mit einem anderen Peer beschreibt.
    Es ist einer der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und den dazugehörigen privaten Schlüssel und gibt ein {{jsxref("Promise")}} zurück, das mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es generiert ist.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt einen neuen entfernten Kandidaten zur Remote-Beschreibung der `RTCPeerConnection` hinzu, die den Zustand des entfernten Endes der Verbindung beschreibt.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu den zu übertragenden Spuren zum anderen Peer hinzu.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt ein neues [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt es zu den mit der Verbindung assoziierten Transceivern hinzu.
    Jeder Transceiver repräsentiert einen bidirektionalen Stream und hat sowohl ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugeordnet.
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schließt die aktuelle Peer-Verbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Initiiert die Erstellung einer {{Glossary("SDP", "SDP")}}-Antwort auf ein vom entfernten Peer erhaltenes Angebot während der Angebot/Antwort-Verhandlung einer WebRTC-Verbindung.
    Die Antwort enthält Informationen über bereits an die Sitzung angehängte Medien, von den Browser unterstützte Codecs und Optionen sowie bereits gesammelte {{Glossary("ICE", "ICE")}}-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Initiiert die Erstellung eines neuen Kanals, der mit dem entfernten Peer verbunden ist und über den beliebige Daten übertragen werden können.
    Dies kann nützlich für Back-Channel-Inhalte wie Bilder, Dateiübertragung, Text-Chat, Spielaktualisierungspakete usw. sein.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Initiiert die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.
    Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, Codec- und Optionen, die vom Browser unterstützt werden, sowie alle bereits vom {{Glossary("ICE", "ICE")}}-Agenten gesammelten Kandidaten, mit dem Ziel, sie über den Signalisierungskanal an einen potenziellen Peer zu senden, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung angibt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Initiiert das Sammeln einer Identitätsaussage und gibt ein {{jsxref("Promise")}} zurück, wenn diese aufgelöst wird zu einer als String kodierten Identitätsaussage.
    Dies hat nur dann eine Wirkung, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen {{Glossary("RTP", "RTP")}}-Empfänger repräsentiert.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, von denen jedes den {{Glossary("RTP", "RTP")}}-Sender darstellt, der für die Übertragung der Daten einer Spur verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Daten aufgelöst wird, die Statistiken über entweder die gesamte Verbindung oder über den angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellen.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die verwendet werden, um Daten auf der Verbindung zu senden und zu empfangen.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Fordert das lokale Ende der Verbindung auf, das Senden von Medien von der angegebenen Spur zu beenden, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aus der Liste der Sender zu entfernen, wie sie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet wird.
    Wenn die Spur bereits gestoppt ist oder nicht in der Senderliste der Verbindung enthalten ist, hat diese Methode keine Auswirkungen.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Ermöglicht es, auf einfache Weise zu verlangen, dass das Sammeln von ICE-Kandidaten an beiden Enden der Verbindung erneut durchgeführt wird.
    Dies vereinfacht den Prozess, indem die gleiche Methode verwendet werden kann, sowohl vom Anrufer als auch vom Empfänger, um einen {{Glossary("ICE", "ICE")}}-Neustart auszulösen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Legt die aktuelle Konfiguration der Verbindung basierend auf den im angegebenen Objekt enthaltenen Werten fest.
    Dies ermöglicht es Ihnen, die von der Verbindung verwendeten {{Glossary("ICE", "ICE")}}-Server zu ändern und welche Transportrichtlinien verwendet werden sollen.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Setzt den Identity-Provider (IdP) auf das in den Parametern angegebene Tripel: seinen Namen, das Protokoll, das zur Kommunikation mit ihm verwendet wird, und einen Benutzernamen.
    Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die mit der Verbindung verknüpfte lokale Beschreibung.
    Diese Beschreibung gibt die Eigenschaften des lokalen Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung geändert wurde, asynchron.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers.
    Die Beschreibung gibt die Eigenschaften des entfernten Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung geändert wurde, asynchron.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video hinzu.
    Statt diese veraltete Methode zu verwenden, sollten Sie [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) einmal für jede Spur verwenden, die Sie an den entfernten Peer senden möchten.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der mit einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) verbunden ist und in der Lage sein wird, {{Glossary("DTMF", "DTMF")}}-Telefon-Signalisierung über die Verbindung zu senden.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video.
    Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Wird gesendet, wenn sich der gesamte Verbindungsstatus der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Wird gesendet, wenn der entfernte Peer einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Wird gesendet, um anzufordern, dass der angegebene Kandidat an den entfernten Peer übertragen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Wird an die Verbindung gesendet, wenn ein Fehler während des {{Glossary("ICE", "ICE")}}-Kandidaten-Sammelns auftrat. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird gesendet, wenn sich der Zustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert, zum Beispiel, wenn sie getrennt wird.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird gesendet, wenn sich der Sammelstatus der {{Glossary("ICE", "ICE")}}-Schicht, reflektiert durch [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState), ändert.
    Dies zeigt an, ob die ICE-Verhandlung noch nicht begonnen hat (`new`), ob Kandidaten gesammelt werden (`gathering`) oder ob sie abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Wird gesendet, wenn die Verhandlung oder Neuverhandlung der {{Glossary("ICE", "ICE")}}-Verbindung durchgeführt werden muss;
    dies kann sowohl beim ersten Öffnen einer Verbindung als auch dann passieren, wenn es notwendig ist, sich an verändernde Netzwerkbedingungen anzupassen.
    Der Empfänger sollte darauf reagieren, indem er ein Angebot erstellt und es an den anderen Peer sendet.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird gesendet, wenn sich der Signalisierungszustand der Verbindung {{Glossary("ICE", "ICE")}} ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Wird gesendet, nachdem ein neuer Track zu einer der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, die die Verbindung umfassen.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wurde.
    Anstatt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse hören;
    es wird eins für jeden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, der zur Verbindung hinzugefügt wird.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wird.
    Anstatt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse auf jedem Stream hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML Videoaufnahme, Peer-to-Peer Video- und Dateifreigabeanwendung ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
