---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCPeerConnection`** repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem Remote-Peer.
Sie stellt Methoden bereit, um eine Verbindung mit einem Remote-Peer herzustellen, die Verbindung aufrechtzuerhalten und zu überwachen sowie sie zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt eine neue `RTCPeerConnection` zurück, die eine Verbindung zwischen dem lokalen Gerät und einem Remote-Peer repräsentiert.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Remote-Peer [trickle ICE candidates](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand der Peer-Verbindung an, indem einer der folgenden Strings zurückgegeben wird: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung so beschreibt, wie es seit dem letzten erfolgreichen Aushandeln und Verbinden dieser `RTCPeerConnection` mit einem Remote-Peer zuletzt ausgehandelt wurde.
    Außerdem ist eine Liste aller ICE-Kandidaten enthalten, die der ICE-Agent möglicherweise bereits generiert hat, seit das durch die Beschreibung repräsentierte Angebot oder die Antwort erstmals instanziiert wurde.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das Remote-Ende der Verbindung so beschreibt, wie es seit dem letzten erfolgreichen Aushandeln und Verbinden dieser `RTCPeerConnection` mit einem Remote-Peer zuletzt ausgehandelt wurde.
    Außerdem ist eine Liste aller ICE-Kandidaten enthalten, die der ICE-Agent möglicherweise bereits generiert hat, seit das durch die Beschreibung repräsentierte Angebot oder die Antwort erstmals instanziiert wurde.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des dieser RTCPeerConnection zugeordneten ICE-Agenten angibt.
    Er kann einen der folgenden Werte haben: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den ICE-Erfassungszustand der Verbindung beschreibt.
    Damit können Sie beispielsweise erkennen, wann die Sammlung von ICE-Kandidaten abgeschlossen ist.
    Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`idpLoginUrl`](/de/docs/Web/API/RTCPeerConnection/idpLoginUrl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Endpunkt enthält, zu dem die Anwendung navigieren kann, um Benutzer beim {{Glossary("Identity_provider", "Identitätsanbieter")}} (IdP) anzumelden. Kann `null` sein, wenn keine Anmeldung erforderlich ist.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück,
    die die Sitzung für das lokale Ende der Verbindung beschreibt.
    Wenn sie noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einer [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die einen String zur Identifizierung des Remote-Peers enthält.
    Sobald dieses Promise erfolgreich aufgelöst wurde, ist die resultierende Identität die Ziel-Peer-Identität und ändert sich für die Dauer der Verbindung nicht.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine ausstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung in ihrem aktuellen Zustand, sondern so, wie sie in naher Zukunft bestehen könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück,
    das eine ausstehende Konfigurationsänderung für das Remote-Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung in ihrem aktuellen Zustand, sondern so, wie sie in naher Zukunft bestehen könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das die Sitzung einschließlich Konfigurations- und Medieninformationen für das Remote-Ende der Verbindung beschreibt.
    Wenn dies noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt zurück, das die {{Glossary("SCTP", "SCTP")}}-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden.
    Wenn SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung während des Verbindens oder erneuten Verbindens mit einem anderen Peer beschreibt.
    Er hat einen der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und den entsprechenden privaten Schlüssel und gibt ein {{jsxref("Promise")}} zurück, das nach der Generierung zum neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird.

## Instanzmethoden

_Erbt außerdem Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt der Remote-Beschreibung der `RTCPeerConnection`, die den Zustand des Remote-Endes der Verbindung beschreibt, einen neuen Remote-Kandidaten hinzu.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt der Menge der Tracks, die an den anderen Peer übertragen werden, einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) hinzu.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn der Menge der mit der Verbindung verknüpften Transceiver hinzu.
    Jeder Transceiver repräsentiert einen bidirektionalen Stream, dem sowohl ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) zugeordnet sind.
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schließt die aktuelle Peer-Verbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Startet die Erstellung einer {{Glossary("SDP", "SDP")}}-Antwort auf ein Angebot, das während der Offer/Answer-Aushandlung einer WebRTC-Verbindung von einem Remote-Peer empfangen wurde.
    Die Antwort enthält Informationen über alle bereits an die Sitzung angehängten Medien, vom Browser unterstützte Codecs und Optionen sowie bereits erfasste {{Glossary("ICE", "ICE")}}-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Startet die Erstellung eines neuen Kanals, der mit dem Remote-Peer verknüpft ist und über den Daten jeder Art übertragen werden können.
    Dies kann für Backchannel-Inhalte wie Bilder, Dateiübertragungen, Textchats, Spielaktualisierungspakete und Ähnliches nützlich sein.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Startet die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots mit dem Ziel, eine neue WebRTC-Verbindung zu einem Remote-Peer zu beginnen.
    Das SDP-Angebot enthält Informationen über alle bereits an die WebRTC-Sitzung angehängten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, vom Browser unterstützte Codecs und Optionen sowie alle bereits vom {{Glossary("ICE", "ICE")}}-Agenten erfassten Kandidaten, um über den Signalisierungskanal an einen potenziellen Peer gesendet zu werden und eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung angibt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Startet die Erfassung einer Identitätsassertion und gibt ein {{jsxref("Promise")}} zurück, das zu einer als String codierten Identitätsassertion aufgelöst wird.
    Dies hat nur eine Wirkung, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen {{Glossary("RTP", "RTP")}}-Empfänger repräsentiert.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, von denen jedes den {{Glossary("RTP", "RTP")}}-Sender repräsentiert, der für die Übertragung der Daten eines Tracks verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu Daten mit Statistiken über entweder die gesamte Verbindung oder den angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) aufgelöst wird.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die zum Senden und Empfangen von Daten über die Verbindung verwendet werden.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Weist das lokale Ende der Verbindung an, das Senden von Medien des angegebenen Tracks zu beenden, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) tatsächlich aus der Liste der Sender zu entfernen,
    wie sie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) gemeldet wird.
    Wenn der Track bereits gestoppt wurde oder sich nicht in der Senderliste der Verbindung befindet, hat diese Methode keine Wirkung.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Ermöglicht es Ihnen, einfach anzufordern, dass die ICE-Kandidatenerfassung an beiden Enden der Verbindung erneut durchgeführt wird.
    Dies vereinfacht den Prozess, da sowohl der Aufrufer als auch der Empfänger dieselbe Methode verwenden können, um einen {{Glossary("ICE", "ICE")}}-Neustart auszulösen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Legt die aktuelle Konfiguration der Verbindung auf Grundlage der im angegebenen Objekt enthaltenen Werte fest.
    Damit können Sie die von der Verbindung verwendeten {{Glossary("ICE", "ICE")}}-Server und die zu verwendenden Transportrichtlinien ändern.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Legt den Identity Provider (IdP) auf das durch die Parameter angegebene Tripel fest: seinen Namen, das für die Kommunikation mit ihm verwendete Protokoll und einen Benutzernamen.
    Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die der Verbindung zugeordnete lokale Beschreibung.
    Diese Beschreibung legt die Eigenschaften des lokalen Endes der Verbindung fest, einschließlich des Medienformats.
    Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Legt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder aktuelle Antwort des Remote-Peers fest.
    Die Beschreibung legt die Eigenschaften des Remote-Endes der Verbindung fest, einschließlich des Medienformats.
    Sie gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video hinzu.
    Statt diese veraltete Methode zu verwenden, sollten Sie [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) einmal für jeden Track verwenden, den Sie an den Remote-Peer senden möchten.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zugeordnet ist und {{Glossary("DTMF", "DTMF")}}-Telefonsignalisierung über die Verbindung senden kann.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle für Audio oder Video.
    Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Überwachen Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie der `oneventname`-Eigenschaft dieser Schnittstelle einen Event-Listener zuweisen.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Wird gesendet, wenn sich der allgemeine Verbindungsstatus der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Wird gesendet, wenn der Remote-Peer einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Wird gesendet, um anzufordern, dass der angegebene Kandidat an den Remote-Peer übertragen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Wird an die Verbindung gesendet, wenn während der Erfassung von {{Glossary("ICE", "ICE")}}-Kandidaten ein Fehler auftritt. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird gesendet, wenn sich der Zustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert, etwa wenn die Verbindung getrennt wird.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird gesendet, wenn sich der Erfassungszustand der {{Glossary("ICE", "ICE")}}-Schicht, der durch [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) widergespiegelt wird, ändert.
    Dies gibt an, ob die ICE-Aushandlung noch nicht begonnen hat (`new`), mit der Erfassung von Kandidaten begonnen wurde (`gathering`) oder abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Wird gesendet, wenn eine Aushandlung oder erneute Aushandlung der {{Glossary("ICE", "ICE")}}-Verbindung durchgeführt werden muss;
    dies kann sowohl beim ersten Öffnen einer Verbindung als auch dann auftreten, wenn eine Anpassung an sich ändernde Netzwerkbedingungen erforderlich ist.
    Der Empfänger sollte darauf reagieren, indem er ein Angebot erstellt und es an den anderen Peer sendet.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird gesendet, wenn sich der {{Glossary("ICE", "ICE")}}-Signalisierungszustand der Verbindung ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Wird gesendet, nachdem ein neuer Track zu einer der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, aus denen die Verbindung besteht.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wurde.
    Statt auf dieses veraltete Ereignis zu warten, sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse warten;
    für jeden zur Verbindung hinzugefügten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) wird eines gesendet.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wird.
    Statt auf dieses veraltete Ereignis zu warten, sollten Sie auf jedem Stream auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse warten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js-Anwendung für HTML-Videoaufnahme sowie Peer-to-Peer-Video- und Dateifreigabe ([Quellcode auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
