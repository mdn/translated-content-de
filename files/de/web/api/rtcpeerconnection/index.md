---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnection`**-Schnittstelle repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer.
Sie bietet Methoden zum Verbinden mit einem entfernten Peer, zum Aufrechterhalten und Überwachen der Verbindung sowie zum Schließen der Verbindung, sobald diese nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt ein neues `RTCPeerConnection` zurück, das eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der entfernte Peer [Trickled ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Gibt den aktuellen Status der Peer-Verbindung zurück, indem einer der folgenden Strings zurückgegeben wird: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seit diese `RTCPeerConnection` zuletzt mit dem Aushandeln und Verbinden mit einem entfernten Peer fertig war.
    Dazu gehört auch eine Liste aller ICE-Kandidaten, die der ICE-Agent möglicherweise bereits generiert hat, seit das durch die Beschreibung repräsentierte Angebot oder die Antwort erstmals instanziiert wurde.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seit diese `RTCPeerConnection` zuletzt mit dem Aushandeln und Verbinden mit einem entfernten Peer fertig war.
    Dazu gehört auch eine Liste aller ICE-Kandidaten, die der ICE-Agent möglicherweise bereits generiert hat, seit das durch die Beschreibung repräsentierte Angebot oder die Antwort erstmals instanziiert wurde.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Status des ICE-Agents beschreibt, der mit dieser RTCPeerConnection assoziiert ist.
    Es kann einer der folgenden Werte sein: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected`, oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den ICE-Gathering-Status der Verbindung beschreibt.
    Dies ermöglicht es Ihnen zu erkennen, z.B. wann die Sammlung von ICE-Kandidaten abgeschlossen ist.
    Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`idpLoginUrl`](/de/docs/Web/API/RTCPeerConnection/idpLoginUrl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Endpunkt enthält, zu dem die Anwendung navigieren kann, um Benutzer beim {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) anzumelden. Kann `null` sein, wenn keine Anmeldung erforderlich ist.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, die die Sitzung für das lokale Ende der Verbindung beschreibt.
    Falls sie noch nicht gesetzt wurde, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einer [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die einen String enthält, der den entfernten Peer identifiziert.
    Sobald dieses Promise erfolgreich aufgelöst wird, ist die resultierende Identität die Ziel-Peer-Identität und wird sich für die Dauer der Verbindung nicht ändern.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine ausstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.
    Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie in naher Zukunft möglicherweise aussehen könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)-Objekt zurück, das eine ausstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.
    Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie in naher Zukunft möglicherweise aussehen könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das die Sitzung, einschließlich Konfiguration und Medieninformationen, für das entfernte Ende der Verbindung beschreibt.
    Falls dies noch nicht gesetzt wurde, wird `null` zurückgegeben.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt zurück, das die {{Glossary("SCTP", "SCTP")}}-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden.
    Falls SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beim Verbinden oder Wiederverbinden mit einem anderen Peer beschreibt.
    Er ist einer der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer`, oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und den zugehörigen privaten Schlüssel, wobei ein {{jsxref("Promise")}} zurückgeben wird, das mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es generiert ist.

## Instanzmethoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt der Remote-Beschreibung der `RTCPeerConnection` einen neuen Remote-Kandidaten hinzu, der den Zustand des entfernten Endes der Verbindung beschreibt.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu der Menge von Tracks hinzu, die an den anderen Peer übertragen werden.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn der Menge von Transceivern hinzu, die mit der Verbindung assoziiert sind.
    Jeder Transceiver repräsentiert einen bidirektionalen Stream, dem sowohl ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugeordnet sind.
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schliesst die aktuelle Peer-Verbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Initiates die Erstellung einer {{Glossary("SDP", "SDP")}}-Antwort auf ein von einem entfernten Peer empfangenes Angebot während der Angebot/Antwort-Verhandlung einer WebRTC-Verbindung.
    Die Antwort enthält Informationen über vorhandene Medien, die Sitzung angehängt sind, unterstützte Codecs und Optionen des Browsers sowie bereits gesammelte {{Glossary("ICE", "ICE")}}-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Initiates die Erstellung eines neuen Kanals zum entfernten Peer, über den Daten jeglicher Art übertragen werden können.
    Dies kann nützlich für Backchannel-Inhalte sein, wie Bilder, Dateitransfers, Text-Chat, Spiele-Paketaktualisierungen und so weiter.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Initiates die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.
    Das SDP-Angebot beinhaltet Informationen über alle bereits an die WebRTC-Sitzung angehängten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, den vom Browser unterstützten Codec und Optionen sowie alle bereits vom {{Glossary("ICE", "ICE")}}-Agenten gesammelten Kandidaten, um über den Signalisierungskanal zu einem potenziellen Peer gesendet zu werden, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung anzeigt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Initiates die Sammlung einer Identitätsbehauptung und gibt ein {{jsxref("Promise")}} zurück, das zu einer als String kodierten Identitätsbehauptung aufgelöst wird.
    Dies hat nur eine Wirkung, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, die jeweils einen {{Glossary("RTP", "RTP")}}-Empfänger repräsentieren.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, die jeweils den {{Glossary("RTP", "RTP")}}-Sender repräsentieren, der für die Übertragung der Daten eines Tracks verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Daten aufgelöst wird, die Statistiken entweder über die gesamte Verbindung oder über das spezifizierte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellen.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die verwendet werden, um Daten auf der Verbindung zu senden und zu empfangen.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Weist das lokale Ende der Verbindung an, Medien von dem angegebenen Track nicht mehr zu senden, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aus der Liste der Sender zu entfernen,
    wie sie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet wird.
    Wenn der Track bereits gestoppt ist oder nicht in der Senderliste der Verbindung enthalten ist, hat diese Methode keine Wirkung.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Ermöglicht es, das erneute Sammeln von ICE-Kandidaten an beiden Enden der Verbindung einfach anzufordern.
    Dies vereinfacht den Prozess, indem dieselbe Methode sowohl vom Anrufer als auch vom Empfänger verwendet werden kann, um einen {{Glossary("ICE", "ICE")}}-Neustart auszulösen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Legt die aktuelle Konfiguration der Verbindung basierend auf den Werten im angegebenen Objekt fest.
    Dies ermöglicht es Ihnen, die von der Verbindung verwendeten {{Glossary("ICE", "ICE")}}-Server zu ändern und welche Transportpolicies zu verwenden sind.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Legt den Identitätsanbieter (IdP) auf das in den Parametern angegebene Triplet fest: seinen Namen, das Protokoll, das zur Kommunikation mit ihm verwendet wird, und einen Benutzernamen.
    Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die mit der Verbindung verknüpfte lokale Beschreibung.
    Diese Beschreibung legt die Eigenschaften des lokalen Endes der Verbindung fest, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Legt die spezifierte Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers fest.
    Die Beschreibung legt die Eigenschaften des entfernten Endes der Verbindung fest, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle hinzu.
    Statt diese veraltete Methode zu verwenden, sollten Sie [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) für jeden Track verwenden, den Sie an den entfernten Peer senden möchten.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der einem spezifischen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zugeordnet ist und in der Lage sein wird, {{Glossary("DTMF", "DTMF")}}-Telefone-Signalisierungen über die Verbindung zu senden.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle.
    Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder indem ein Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Wird gesendet, wenn sich der allgemeine Verbindungsstatus der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Wird gesendet, wenn der entfernte Peer einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Wird gesendet, um anzufordern, dass der angegebene Kandidat an den entfernten Peer übertragen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Wird an die Verbindung gesendet, wenn während der Sammlung von {{Glossary("ICE", "ICE")}}-Kandidaten ein Fehler auftritt. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird gesendet, wenn sich der Zustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert, z.B. wenn sie getrennt wird.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird gesendet, wenn sich der Sammelstatus der {{Glossary("ICE", "ICE")}}-Schicht, der durch [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) reflektiert wird, ändert.
    Dies zeigt an, ob die ICE-Verhandlung noch nicht begonnen hat (`new`), begonnen hat, Kandidaten zu sammeln (`gathering`) oder abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Wird gesendet, wenn eine Verhandlung oder Neuverhandlung der {{Glossary("ICE", "ICE")}}-Verbindung durchgeführt werden muss;
    dies kann sowohl beim erstmaligen Öffnen einer Verbindung als auch bei der Anpassung an sich ändernde Netzbedingungen passieren.
    Der Empfänger sollte darauf reagieren, indem er ein Angebot erstellt und es an den anderen Peer sendet.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird gesendet, wenn sich der Signalisierungsstatus der {{Glossary("ICE", "ICE")}}-Verbindung ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Wird gesendet, nachdem eine neue Spur zu einer der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, die die Verbindung ausmachen.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wurde.
    Statt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse lauschen;
    eines wird für jeden zur Verbindung hinzugefügten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wurde.
    Statt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse auf jedem Stream hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML-Videoaufnahme, Peer-to-Peer-Video- und Dateifreigabeanwendung ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
