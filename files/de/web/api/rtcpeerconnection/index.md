---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`RTCPeerConnection`**-Schnittstelle repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer.
Sie bietet Methoden, um sich mit einem entfernten Peer zu verbinden, die Verbindung zu pflegen und zu überwachen sowie die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt eine neue `RTCPeerConnection` zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der entfernte Peer [trickle ICE candidates](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann oder nicht.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand der Peer-Verbindung zurück, einer der Strings: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seitdem dieser `RTCPeerConnection` das Verhandeln und Verbinden mit einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die bereits vom ICE-Agenten seit dem ersten Instanziieren des in der Beschreibung dargestellten Angebots oder der Antwort generiert worden sein könnten.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seitdem dieser `RTCPeerConnection` das Verhandeln und Verbinden mit einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die bereits vom ICE-Agenten seit dem ersten Instanziieren des in der Beschreibung dargestellten Angebots oder der Antwort generiert worden sein könnten.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des ICE-Agenten beschreibt, der mit dieser RTCPeer-Verbindung assoziiert ist.
    Er kann einen der folgenden Werte annehmen: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den ICE-Sammelzustand der Verbindung beschreibt.
    Dies ermöglicht es Ihnen beispielsweise zu erkennen, wann das Sammeln von ICE-Kandidaten abgeschlossen ist.
    Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück,
    das die Sitzung für das lokale Ende der Verbindung beschreibt.
    Falls es noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird zu einem [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion), das einen String enthält, der den entfernten Peer identifiziert.
    Sobald dieses Versprechen erfolgreich aufgelöst wird, ist die resultierende Identität die Ziel-Peer-Identität und wird sich für die Dauer der Verbindung nicht ändern.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine anstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.
    Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie sich in naher Zukunft darstellen könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)-Objekt zurück, das eine anstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.
    Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie sich in naher Zukunft darstellen könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)-Objekt zurück, das die Sitzung, einschließlich Konfiguration und Medieninformationen, für das entfernte Ende der Verbindung beschreibt.
    Falls dies noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt zurück, das die {{Glossary("SCTP", "SCTP")}}-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden.
    Falls SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beschreibt, während ein anderes Peer verbunden oder erneut verbunden wird.
    Es ist einer der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und seinen entsprechenden privaten Schlüssel und gibt ein {{jsxref("Promise")}} zurück, das auf das neue [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) aufgelöst wird, sobald es generiert wurde.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt einen neuen entfernten Kandidaten zur Remote-Beschreibung der `RTCPeerConnection` hinzu, welche den Zustand des entfernten Verbindungsendes beschreibt.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu der Menge von Tracks hinzu, die zum anderen Peer übertragen werden sollen.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn zur Menge der mit der Verbindung assoziierten Transceiver hinzu.
    Jeder Transceiver repräsentiert einen bidirektionalen Stream, mit einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), die damit assoziiert sind.
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schließt die aktuelle Peer-Verbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Initiiert die Erstellung einer {{Glossary("SDP", "SDP")}}-Antwort auf ein Angebot, das von einem entfernten Peer während der Angebot-/Antwort-Verhandlung einer WebRTC-Verbindung empfangen wurde.
    Die Antwort enthält Informationen über alle Medien, die bereits an die Sitzung angehängt wurden, Codecs und Optionen, die vom Browser unterstützt werden, sowie alle bereits gesammelten {{Glossary("ICE", "ICE")}}-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Initiiert die Erstellung eines neuen Kanals, der mit dem entfernten Peer verbunden ist und über den alle Arten von Daten übertragen werden können.
    Dies kann nützlich sein für Back-Channel-Inhalte, wie Bilder, Dateitransfers, Textchats, Spiel-Aktualisierungspakete und so weiter.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Initiiert die Erstellung eines {{Glossary("SDP", "SDP")}}-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.
    Das SDP-Angebot enthält Informationen über alle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, die bereits an die WebRTC-Sitzung angehängt sind, Codec und Optionen, die vom Browser unterstützt werden, sowie alle bereits gesammelten Kandidaten durch den {{Glossary("ICE", "ICE")}}-Agenten, um sie über den Signalisierungskanal an einen potentiellen Peer zu senden, um entweder eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung anzeigt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Initiiert das Sammeln einer Identitätsaussage und gibt ein {{jsxref("Promise")}} zurück, das auf eine als String codierte Identitätsaussage aufgelöst wird.
    Dies hat nur einen Effekt, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen {{Glossary("RTP", "RTP")}}-Empfänger repräsentiert.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, von denen jedes den {{Glossary("RTP", "RTP")}}-Sender repräsentiert, der für die Datenübertragung eines Tracks verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Daten aufgelöst wird, die Statistikinformationen über entweder die gesamte Verbindung oder über den angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) liefern.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die zum Senden und Empfangen von Daten auf der Verbindung verwendet werden.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Weist das lokale Ende der Verbindung an, das Senden von Medien des angegebenen Tracks zu stoppen, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aus der Liste der Sender zu entfernen,
    wie sie von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) angegeben wird.
    Wenn der Track bereits gestoppt ist oder sich nicht in der Senderliste der Verbindung befindet, hat diese Methode keinen Effekt.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Ermöglicht eine einfache Anforderung, dass das Sammeln von ICE-Kandidaten an beiden Enden der Verbindung erneut durchgeführt wird.
    Dies vereinfacht den Prozess, indem die gleiche Methode verwendet wird, entweder vom Anrufer oder vom Empfänger, um einen {{Glossary("ICE", "ICE")}}-Neustart auszulösen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Legt die aktuelle Konfiguration der Verbindung basierend auf den in dem angegebenen Objekt enthaltenen Werten fest.
    Dies ermöglicht es Ihnen, die von der Verbindung verwendeten {{Glossary("ICE", "ICE")}}-Server und welche Transportpolitiken verwendet werden sollen, zu ändern.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Setzt den Identity Provider (IdP) auf das im Parameter angegebene Triplet: seinen Namen, das Protokoll, das verwendet wird, um mit ihm zu kommunizieren und einen Benutzernamen.
    Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die mit der Verbindung verknüpfte lokale Beschreibung.
    Diese Beschreibung gibt die Eigenschaften des lokalen Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers.
    Die Beschreibung spezifiziert die Eigenschaften des entfernten Endes der Verbindung, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle hinzu.
    Anstatt diese veraltete Methode zu verwenden, sollten Sie stattdessen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) für jeden Track verwenden, den Sie an den entfernten Peer senden möchten.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der mit einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) assoziiert ist und DTMF-Telefonsignalisierung über die Verbindung senden kann.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle.
    Weil diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der Eigenschaft `oneventname` dieser Schnittstelle zuweisen.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Wird gesendet, wenn sich der allgemeine Verbindungsstatus der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Wird gesendet, wenn der entfernte Peer einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Wird gesendet, um anzufordern, dass der angegebene Kandidat an den entfernten Peer übertragen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Wird an die Verbindung gesendet, wenn während des Sammelns von {{Glossary("ICE", "ICE")}}-Kandidaten ein Fehler auftritt. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird gesendet, wenn sich der Zustand der {{Glossary("ICE", "ICE")}}-Verbindung verändert, beispielsweise wenn sie getrennt wird.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird gesendet, wenn sich der Sammelzustand der {{Glossary("ICE", "ICE")}}-Schicht, dargestellt durch [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState), ändert.
    Dies zeigt an, ob die ICE-Verhandlung noch nicht begonnen hat (`new`), begonnen hat, Kandidaten zu sammeln (`gathering`), oder abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Wird gesendet, wenn die Verhandlung oder Neuverhandlung der {{Glossary("ICE", "ICE")}}-Verbindung durchgeführt werden muss;
    Dies kann sowohl beim ersten Öffnen einer Verbindung passieren, als auch wenn es notwendig ist, sich an sich ändernde Netzwerkbedingungen anzupassen.
    Der Empfänger sollte reagieren, indem er ein Angebot erstellt und es an den anderen Peer sendet.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird gesendet, wenn sich der Signalisierungszustand der {{Glossary("ICE", "ICE")}}-Verbindung ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Wird gesendet, nachdem ein neuer Track zu einer der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, die die Verbindung bilden.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wird.
    Anstatt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse hören;
    eines wird für jeden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet, der der Verbindung hinzugefügt wird.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wird.
    Anstatt auf dieses veraltete Ereignis zu hören, sollten Sie auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse auf jedem Stream hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML-Videoaufzeichnung, Peer-to-Peer-Video- und Dateifreigabeanwendung ([Quellcode auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
