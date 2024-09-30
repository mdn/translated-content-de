---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef('WebRTC')}}

Die **`RTCPeerConnection`**-Schnittstelle repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer.
Sie bietet Methoden, um eine Verbindung zu einem entfernten Peer herzustellen, die Verbindung aufrechtzuerhalten und zu überwachen und die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt eine neue `RTCPeerConnection` zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Instanzeigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der entfernte Peer [trickled ICE Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand der Peer-Verbindung durch die Rückgabe einer der Zeichenketten an: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seit die `RTCPeerConnection` das letzte Mal die Verhandlung mit einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die vom ICE-Agenten seit dem Angebot oder der Antwort, die von der Beschreibung dargestellt wird, möglicherweise bereits generiert wurden.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seit die `RTCPeerConnection` das letzte Mal die Verhandlung mit einem entfernten Peer abgeschlossen hat.
    Ebenfalls enthalten ist eine Liste aller ICE-Kandidaten, die vom ICE-Agenten seit dem Angebot oder der Antwort, die von der Beschreibung dargestellt wird, möglicherweise bereits generiert wurden.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Zustand des ICE-Agenten beschreibt, der mit dieser RTCPeerConnection verbunden ist.
    Es kann einer der folgenden Werte sein: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den ICE-Sammlungszustand der Verbindung beschreibt.
    Dies lässt Sie zum Beispiel erkennen, wann die Sammlung der ICE-Kandidaten abgeschlossen ist.
    Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt eine [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, die die Sitzung für das lokale Ende der Verbindung beschreibt.
    Wenn sie noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auf eine [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) auflöst, die eine Zeichenkette enthält, die den entfernten Peer identifiziert.
    Sobald dieses Versprechen erfolgreich aufgelöst wurde, ist die resultierende Identität die Ziel-Peer-Identität und wird sich während der Dauer der Verbindung nicht ändern.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zurück, das eine ausstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung, wie sie derzeit existiert, sondern wie sie möglicherweise in naher Zukunft existieren könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) -Objekt zurück, das eine ausstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung, wie sie derzeit existiert, sondern wie sie möglicherweise in naher Zukunft existieren könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)-Objekt zurück, das die Sitzung, einschließlich Konfiguration und Medieninformationen, für das entfernte Ende der Verbindung beschreibt.
    Wenn dies noch nicht festgelegt wurde, wird `null` zurückgegeben.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Objekt zurück, das die [SCTP](/de/docs/Glossary/SCTP)-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden.
    Wenn SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beim Verbinden oder Wiederverbinden mit einem anderen Peer beschreibt.
    Es ist einer der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und den dazugehörigen privaten Schlüssel und gibt ein {{jsxref("Promise")}} zurück, das sich zu dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) auflöst, sobald es generiert wurde.

## Instanzmethoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt der `RTCPeerConnection`-Remotebeschreibung einen neuen entfernten Kandidaten hinzu, welcher den Zustand des entfernten Endes der Verbindung beschreibt.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt der Menge von Tracks, die an den anderen Peer übertragen werden, einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) hinzu.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn der Menge der mit der Verbindung verbundenen Transceiver hinzu.
    Jeder Transceiver repräsentiert einen bidirektionalen Stream mit sowohl einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schließt die aktuelle Peer-Verbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Leitet die Erstellung einer [SDP](/de/docs/Glossary/SDP)-Antwort auf ein Angebot ein, das von einem entfernten Peer während der Angebot-/Antwort-Verhandlung einer WebRTC-Verbindung empfangen wurde.
    Die Antwort enthält Informationen über alle Medien, die bereits an die Sitzung angehängt sind, Codecs und Optionen, die vom Browser unterstützt werden, sowie alle bereits gesammelten [ICE](/de/docs/Glossary/ICE)-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Leitet die Erstellung eines neuen Kanals ein, der mit dem entfernten Peer verbunden ist, über den jede Art von Daten übertragen werden kann.
    Dies kann für Back-Channel-Inhalte nützlich sein, wie z. B. Bilder, Dateitransfer, Text-Chat, Spielaktualisierungspakete und so weiter.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Leitet die Erstellung eines [SDP](/de/docs/Glossary/SDP)-Angebots ein, um eine neue WebRTC-Verbindung zu einem entfernten Peer zu starten.
    Das SDP-Angebot enthält Informationen über bereits an die WebRTC-Sitzung angehängte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekte, Codecs und Optionen, die vom Browser unterstützt werden, sowie alle vom [ICE](/de/docs/Glossary/ICE)-Agenten bereits gesammelten Kandidaten, um über den Signalisierungskanal an einen potenziellen Peer gesendet zu werden, um eine Verbindung anzufordern oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung anzeigt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Leitet das Sammeln einer Identitätsnachweis ein und gibt ein {{jsxref("Promise")}} zurück, das sich auf einen als Zeichenkette codierten Identitätsnachweis auflöst.
    Dies hat nur dann eine Wirkung, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen [RTP](/de/docs/Glossary/RTP)-Empfänger darstellt.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, von denen jedes den [RTP](/de/docs/Glossary/RTP)-Sender darstellt, der für die Übertragung der Daten eines Tracks verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit Daten auflöst, die Statistiken entweder über die gesamte Verbindung oder über den spezifizierten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) liefern.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Objekte zurück, die zur Datenübertragung in der Verbindung verwendet werden.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Weist das lokale Ende der Verbindung an, das Senden von Medien eines bestimmten Tracks zu stoppen, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aus der Liste der Sender zu entfernen,
    wie es von [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet wird.
    Wenn der Track bereits gestoppt ist oder nicht in der Senderliste der Verbindung ist, hat diese Methode keine Auswirkung.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Erlaubt es, die erneute Durchführung der Sammlung von ICE-Kandidaten auf beiden Enden der Verbindung einfach anzufordern.
    Dies vereinfacht den Prozess, indem dieselbe Methode sowohl vom Anrufer als auch vom Empfänger verwendet werden kann, um einen Neustart von [ICE](/de/docs/Glossary/ICE) auszulösen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Legt die aktuelle Konfiguration der Verbindung basierend auf den in dem angegebenen Objekt enthaltenen Werten fest.
    Dadurch können Sie die von der Verbindung verwendeten [ICE](/de/docs/Glossary/ICE)-Server ändern und welche Transportpolitik verwendet werden soll.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Setzt den Identitätsanbieter (IdP) auf das im Parameter angegebene Triplet: dessen Name, das Protokoll zur Kommunikation mit ihm und einen Benutzernamen.
    Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die mit der Verbindung verbundene lokale Beschreibung.
    Diese Beschreibung gibt die Eigenschaften des lokalen Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Peers.
    Die Beschreibung gibt die Eigenschaften des entfernten Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle hinzu.
    Anstatt diese veraltete Methode zu verwenden, sollten Sie stattdessen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) einmal für jeden Track verwenden, den Sie an den entfernten Peer senden möchten.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der mit einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) assoziiert ist, und in der Lage ist, [DTMF](/de/docs/Glossary/DTMF)-Telefon-Signalisierung über die Verbindung zu senden.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Audio- oder Videoquelle.
    Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Wird gesendet, wenn sich der allgemeine Verbindungszustand der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Wird gesendet, wenn der entfernte Peer einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Wird gesendet, um zu verlangen, dass der angegebene Kandidat an den entfernten Peer übertragen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Wird an die Verbindung gesendet, wenn während der Sammlung von [ICE](/de/docs/Glossary/ICE)-Kandidaten ein Fehler aufgetreten ist. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird gesendet, wenn sich der Zustand der [ICE](/de/docs/Glossary/ICE)-Verbindung ändert, zum Beispiel wenn sie getrennt wird.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird gesendet, wenn sich der Sammlungzustand der [ICE](/de/docs/Glossary/ICE)-Ebene, widergespiegelt von [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState), ändert.
    Dies zeigt, ob die ICE-Verhandlung noch nicht begonnen hat (`new`), Kandidaten zu sammeln begonnen hat (`gathering`) oder abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Wird gesendet, wenn eine Verhandlung oder Neuverhandlung der [ICE](/de/docs/Glossary/ICE)-Verbindung erforderlich ist;
    dies kann sowohl beim ersten Öffnen einer Verbindung als auch bei Bedarf zur Anpassung an sich ändernde Netzwerkbedingungen geschehen.
    Der Empfänger sollte mit der Erstellung eines Angebots antworten und es an den anderen Peer senden.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird gesendet, wenn sich der Signalisierungszustand der [ICE](/de/docs/Glossary/ICE)-Verbindung ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Wird gesendet, nachdem ein neuer Track zu einer der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, aus denen die Verbindung besteht.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wurde.
    Anstatt diesem veralteten Ereignis zuzuhören, sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse hören;
    eins wird für jeden zur Verbindung hinzugefügten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) gesendet.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) aus der Verbindung entfernt wird.
    Anstatt diesem veralteten Ereignis zuzuhören, sollten Sie auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse in jedem Stream hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML Videoerfassung, Peer-to-Peer-Video- und Dateifreigabeanwendung ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
