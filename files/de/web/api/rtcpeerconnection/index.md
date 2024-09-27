---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef('WebRTC')}}

Das **`RTCPeerConnection`** Interface repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Partner.
Es bietet Methoden, um eine Verbindung zu einem entfernten Partner herzustellen, zu warten und zu überwachen und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Gibt eine neue `RTCPeerConnection` zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Partner darstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der entfernte Partner [trickled ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann.
- [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Gibt den aktuellen Status der Partnerverbindung zurück, indem einer der folgenden Zeichenfolgen zurückgegeben wird: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- [`currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt zurück, welches das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich verhandelt wurde, seitdem diese `RTCPeerConnection` das Aushandeln und Verbinden mit einem entfernten Partner abgeschlossen hat. Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das im Angebot oder in der Antwort dargestellte Beschreibung zuerst instanziiert wurde.
- [`currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt zurück, welches das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich verhandelt wurde, seitdem diese `RTCPeerConnection` das Aushandeln und Verbinden mit einem entfernten Partner abgeschlossen hat. Ebenfalls enthalten ist eine Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seit das im Angebot oder in der Antwort dargestellte Beschreibung zuerst instanziiert wurde.
- [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Zustand des ICE-Agenten beschreibt, der mit dieser `RTCPeerConnection` verbunden ist. Mögliche Werte sind: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den ICE-Sammlungszustand der Verbindung beschreibt. Dies ermöglicht es Ihnen zu erkennen, wenn die Sammlung von ICE-Kandidaten abgeschlossen ist. Mögliche Werte sind: `new`, `gathering` oder `complete`.
- [`localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zurück, das die Sitzung für das lokale Ende der Verbindung beschreibt. Ist diese noch nicht gesetzt, wird `null` zurückgegeben.
- [`peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auf ein [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) auflöst, welches eine Zeichenfolge enthält, die den entfernten Partner identifiziert. Sobald dieses Versprechen erfolgreich aufgelöst wurde, ist die resultierende Identität die Zielpartner-Identität und wird sich während der Dauer der Verbindung nicht ändern.
- [`pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt zurück, das eine ausstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt. Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie in naher Zukunft existieren könnte.
- [`pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt zurück, das eine ausstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt. Dies beschreibt nicht die aktuelle Verbindung, sondern wie sie in naher Zukunft existieren könnte.
- [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt zurück, das die Sitzung, einschließlich Konfigurations- und Medieninformationen, für das entfernte Ende der Verbindung beschreibt. Ist diese noch nicht gesetzt, wird `null` zurückgegeben.
- [`sctp`](/de/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Gibt ein [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) Objekt zurück, das die [SCTP](/de/docs/Glossary/SCTP) Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden. Wenn SCTP nicht ausgehandelt wurde, ist dieser Wert `null`.
- [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung beim Verbinden oder Wiederverbinden mit einem anderen Partner beschreibt. Es ist einer der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
  - : Erstellt ein X.509-Zertifikat und dessen entsprechenden privaten Schlüssel und gibt ein {{jsxref("Promise")}} zurück, das sich mit dem neuen [`RTCCertificate`](/de/docs/Web/API/RTCCertificate) auflöst, sobald es erstellt wurde.

## Instanz-Methoden

_Erbt auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Fügt der `RTCPeerConnection`-Remotebeschreibung einen neuen entfernten Kandidaten hinzu, der den Zustand des entfernten Endes der Verbindung beschreibt.
- [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
  - : Fügt einen neuen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu der Menge der Tracks hinzu, die an den anderen Partner übertragen werden.
- [`addTransceiver()`](/de/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Erstellt einen neuen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) und fügt ihn der Menge der Transceiver hinzu, die mit der Verbindung assoziiert sind. Jeder Transceiver repräsentiert einen bidirektionalen Stream mit sowohl einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) als auch einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).
- [`close()`](/de/docs/Web/API/RTCPeerConnection/close)
  - : Schließt die aktuelle Partnerverbindung.
- [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Initiiert die Erstellung einer [SDP](/de/docs/Glossary/SDP)-Antwort auf ein Angebot, das während der offer/answer-Verhandlung einer WebRTC-Verbindung von einem entfernten Partner empfangen wurde. Die Antwort enthält Informationen über bereits an die Sitzung angehängte Medien, von dem Browser unterstützte Codecs und Optionen und alle bereits gesammelten [ICE](/de/docs/Glossary/ICE)-Kandidaten.
- [`createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Initiiert die Erstellung eines neuen Kanals, der mit dem entfernten Partner verbunden ist, über den jedes Datenformat übertragen werden kann. Dies kann für Rückkanalinhalte nützlich sein, wie Bilder, Dateitransfer, Textchat, Spiel-Update-Pakete usw.
- [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)
  - : Initiiert die Erstellung eines [SDP](/de/docs/Glossary/SDP)-Angebots, um eine neue WebRTC-Verbindung zu einem entfernten Partner zu starten. Das SDP-Angebot enthält Informationen über bereits an die WebRTC-Sitzung angehängte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekte, Codecs und vom Browser unterstützte Optionen sowie bereits gesammelte Kandidaten durch den [ICE](/de/docs/Glossary/ICE)-Agent, um sie über den Signalisierungskanal an einen potenziellen Partner zu senden, um eine Verbindung zu beantragen oder die Konfiguration einer bestehenden Verbindung zu aktualisieren.
- [`getConfiguration()`](/de/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung angibt.
- [`getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Initiiert das Sammeln einer Identitätsaussage und gibt ein {{jsxref("Promise")}} zurück, das sich in eine codierte Identitätsaussage als Zeichenfolge auflöst. Dies hat nur eine Wirkung, wenn [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `closed` ist.
- [`getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Objekten zurück, von denen jedes einen [RTP](/de/docs/Glossary/RTP)-Empfänger repräsentiert.
- [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)
  - : Gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekten zurück, von denen jedes den [RTP](/de/docs/Glossary/RTP)-Sender repräsentiert, der für das Übertragen der Daten eines Tracks verantwortlich ist.
- [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit Daten auflöst, die Statistiken entweder über die gesamte Verbindung oder über das angegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellen.
- [`getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Gibt eine Liste aller [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) Objekte zurück, die zum Senden und Empfangen von Daten auf der Verbindung verwendet werden.
- [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Teilt dem lokalen Ende der Verbindung mit, das Senden von Medien von dem angegebenen Track zu stoppen, ohne den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) aus der Liste der Sender zu entfernen, wie es durch [`getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) berichtet wird. Ist der Track bereits gestoppt oder nicht in der Senderliste der Verbindung, hat diese Methode keine Wirkung.
- [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)
  - : Erlaubt es, einfach zu verlangen, dass das Sammeln von ICE-Kandidaten an beiden Enden der Verbindung erneut durchgeführt wird. Dies vereinfacht den Prozess, indem dieselbe Methode sowohl vom Anrufer als auch vom Empfänger verwendet werden kann, um einen [ICE](/de/docs/Glossary/ICE) Neustart anzustoßen.
- [`setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Setzt die aktuelle Konfiguration der Verbindung basierend auf den in dem angegebenen Objekt enthaltenen Werten. Dies ermöglicht es Ihnen, die [ICE](/de/docs/Glossary/ICE) Server zu ändern, die von der Verbindung verwendet werden, und welche Transportpolitiken verwendet werden sollen.
- [`setIdentityProvider()`](/de/docs/Web/API/RTCPeerConnection/setIdentityProvider)
  - : Setzt den Identity Provider (IdP) auf das im Parameter gegebene Tripel: seinen Namen, das Protokoll, das zur Kommunikation mit ihm verwendet wird, und einen Benutzernamen. Das Protokoll und der Benutzername sind optional.
- [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Ändert die lokale Beschreibung, die mit der Verbindung verbunden ist. Diese Beschreibung spezifiziert die Eigenschaften des lokalen Endes der Verbindung, einschließlich des Medienformats. Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Setzt die angegebene Sitzungsbeschreibung als aktuelles Angebot oder Antwort des entfernten Partners. Die Beschreibung spezifiziert die Eigenschaften des entfernten Endes der Verbindung, einschließlich des Medienformats. Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle von Audio oder Video hinzu. Anstelle dieser veralteten Methode sollten Sie stattdessen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) einmal für jeden Track verwenden, den Sie an den entfernten Partner senden möchten.
- [`createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), der mit einem bestimmten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) verbunden ist und in der Lage sein wird, [DTMF](/de/docs/Glossary/DTMF)-Telefon-Signalisierung über die Verbindung zu senden.
- [`removeStream()`](/de/docs/Web/API/RTCPeerConnection/removeStream) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen [`MediaStream`](/de/docs/Web/API/MediaStream) als lokale Quelle von Audio oder Video. Da diese Methode veraltet ist, sollten Sie stattdessen [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) verwenden.

## Ereignisse

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignislistener an die `oneventname`-Eigenschaft dieses Interface zuweisen.

- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Wird gesendet, wenn sich der allgemeine Verbindungsstatus der `RTCPeerConnection` ändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Wird gesendet, wenn der entfernte Partner einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zur Verbindung hinzufügt.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Wird gesendet, um den angegebenen Kandidaten an den entfernten Partner zu übermitteln.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Wird an die Verbindung gesendet, wenn ein Fehler während des Sammelns von [ICE](/de/docs/Glossary/ICE)-Kandidaten auftritt. Das Ereignis beschreibt den Fehler.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird gesendet, wenn sich der Zustand der [ICE](/de/docs/Glossary/ICE)-Verbindung ändert, z. B. bei einer Trennung.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird gesendet, wenn sich der Sammelzustand der [ICE](/de/docs/Glossary/ICE)-Schicht ändert, dargestellt durch [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState). Dies zeigt an, ob die ICE-Aushandlung noch nicht begonnen hat (`new`), begonnen hat, Kandidaten zu sammeln (`gathering`), oder abgeschlossen ist (`complete`).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Wird gesendet, wenn eine Aushandlung oder Wiederverhandlung der [ICE](/de/docs/Glossary/ICE)-Verbindung notwendig ist; dies kann sowohl beim ersten Öffnen einer Verbindung als auch bei notwendiger Anpassung an sich ändernde Netzwerkbedingungen geschehen. Der Empfänger sollte darauf reagieren, indem er ein Angebot erstellt und an den anderen Partner sendet.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird gesendet, wenn sich der Signalisierungszustand der [ICE](/de/docs/Glossary/ICE)-Verbindung ändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Wird gesendet, nachdem ein neuer Track einem der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Instanzen hinzugefügt wurde, die die Verbindung ausmachen.

### Veraltete Ereignisse

- [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein neuer [`MediaStream`](/de/docs/Web/API/MediaStream) zur Verbindung hinzugefügt wurde. Anstelle des Hörens auf dieses veraltete Ereignis sollten Sie auf [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse hören; es wird eins gesendet für jeden [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der zur Verbindung hinzugefügt wird.
- [`removestream`](/de/docs/Web/API/RTCPeerConnection/removestream_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird gesendet, wenn ein [`MediaStream`](/de/docs/Web/API/MediaStream) von der Verbindung entfernt wird. Anstelle dieses veralteten Ereignisses sollten Sie auf [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignisse auf jedem Stream hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Einführung in WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML Videoaufzeichnung, Peer-to-Peer Video und Dateifreigabe-Anwendung ([Quelle auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
