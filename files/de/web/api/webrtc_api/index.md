---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: a544f6d64dc65d37bbf06282f95ff013c5a24a7f
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und -sites ermöglicht, Audio- und/oder Videomedien aufzunehmen und optional zu streamen, sowie beliebige Daten zwischen Browsern auszutauschen, ohne dass ein Vermittler erforderlich ist. Das Set von Standards, das WebRTC umfasst, ermöglicht es, Daten zu teilen und Telekonferenzen peer-to-peer durchzuführen, ohne dass der Nutzer Plug-ins oder andere Software von Dritten installieren muss.

WebRTC besteht aus mehreren miteinander verbundenen APIs und Protokollen, die zusammenarbeiten, um dies zu ermöglichen. Die hier bereitgestellte Dokumentation hilft Ihnen, die Grundlagen von WebRTC zu verstehen, wie man sowohl Daten- als auch Medienverbindungen einrichtet und nutzt, und mehr.

## WebRTC-Konzepte und -Verwendung

WebRTC dient mehreren Zwecken; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bieten sie leistungsstarke Multimedia-Fähigkeiten für das Web, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsmanagement und die Schnittstelle zu alten Telefonsystemen, einschließlich der Unterstützung für das Senden von {{Glossary("DTMF", "DTMF")}}-Signalen (Tonwahl). Verbindungen zwischen den Peers können ohne besondere Treiber oder Plug-ins hergestellt werden und oft auch ohne Zwischenserver.

Verbindungen zwischen zwei Peers werden durch die Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) dargestellt. Sobald eine Verbindung mit `RTCPeerConnection` hergestellt und geöffnet wurde, können Medienströme ([`MediaStream`](/de/docs/Web/API/MediaStream)s) und/oder Datenkanäle ([`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s) der Verbindung hinzugefügt werden.

Medienströme können aus beliebig vielen Tracks mit Medieninformationen bestehen; Tracks, die durch Objekte auf Basis der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) repräsentiert werden, können eine der mehreren Medientypen enthalten, einschließlich Audio, Video und Text (wie Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einem Audiotrack und wahrscheinlich auch einem Videotrack und können verwendet werden, um sowohl Live- als auch gespeicherte Medieninformationen (wie einen gestreamten Film) zu senden und zu empfangen.

Sie können die Verbindung zwischen zwei Peers auch nutzen, um beliebige binäre Daten über die Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) auszutauschen. Dies kann für Back-Channel-Informationen, Metadaten-Austausch, Spielstatuspakete, Dateiübertragungen oder sogar als primärer Kanal für den Datentransfer verwendet werden.

### Interoperabilität

WebRTC wird im Allgemeinen gut von modernen Browsern unterstützt, jedoch bestehen noch einige Inkompatibilitäten. Die Bibliothek [adapter.js](https://github.com/webrtcHacks/adapter) ist ein Shim, um Apps von diesen Inkompatibilitäten abzuschirmen.

## WebRTC-Referenz

Da WebRTC Schnittstellen bietet, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erfüllen, haben wir die Referenz nach Kategorien aufgeteilt. Bitte sehen Sie sich die Seitenleiste für eine alphabetische Liste an.

### Verbindungsaufbau und -verwaltung

Diese Schnittstellen, Wörterbücher und Typen werden verwendet, um WebRTC-Verbindungen aufzubauen, zu öffnen und zu verwalten. Enthalten sind Schnittstellen, die Peer-Medienverbindungen, Datenkanäle und Schnittstellen darstellen, die beim Austausch von Informationen über die Fähigkeiten jedes Peers zum Einsatz kommen, um die bestmögliche Konfiguration für eine bidirektionale Medienverbindung auszuwählen.

#### Schnittstellen

- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Es wird verwendet, um effizientes Streaming von Daten zwischen den beiden Peers zu verwalten.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Repräsentiert einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung.
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
  - : Repräsentiert Ereignisse, die beim Anhängen eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftreten. Das einzige Ereignis, das mit dieser Schnittstelle gesendet wird, ist [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event).
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
  - : Repräsentiert die Parameter einer Sitzung. Jede `RTCSessionDescription` besteht aus einem Beschreibungstyp [`type`](/de/docs/Web/API/RTCSessionDescription/type), der beschreibt, welchen Teil des Angebots-/Antwortverhandlungsprozesses sie beschreibt, und dem {{Glossary("SDP", "SDP")}}-Deskriptor der Sitzung.
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
  - : Bietet detaillierte Statistikinformationen für eine Verbindung oder für einen einzelnen Track auf der Verbindung; der Bericht kann durch Aufrufen von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) erhalten werden.
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)
  - : Stellt eine Kandidatenkonfiguration für die Interactive Connectivity Establishment ({{Glossary("ICE", "ICE")}}) dar, um eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufzubauen.
- [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)
  - : Repräsentiert Informationen über einen {{Glossary("ICE", "ICE")}}-Transport.
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
  - : Stellt Ereignisse dar, die im Zusammenhang mit ICE-Kandidaten mit dem Ziel auftreten, in der Regel eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Nur ein Ereignis dieses Typs wird gesendet: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : Verwalten der Kodierung und Übertragung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : Verwalten des Empfangs und der Dekodierung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)
  - : Die Schnittstelle, die verwendet wird, um ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis darzustellen, welches anzeigt, dass ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt zu dem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt hinzugefügt wurde, was bedeutet, dass ein neuer eingehender [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt und zur `RTCPeerConnection` hinzugefügt wurde.
- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
  - : Bietet Informationen, die ein Stream Control Transmission Protocol (**{{Glossary("SCTP", "SCTP")}}**) Transport beschreiben und auch einen Zugang zu dem darunterliegenden Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transport bieten, über den die SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Die Menge der derzeit vom Datenkanal gepufferten Daten—wie durch seine Eigenschaft [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) angezeigt—hat abgenommen und ist bis auf die minimale gepufferte Datenmenge des Kanals oder darunter gesunken, wie durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegeben.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Der Datenkanal hat den Schließvorgang abgeschlossen und befindet sich jetzt im `closed`-Zustand. Sein zugrundeliegender Datentransport ist nun vollständig geschlossen. Sie können benachrichtigt werden _bevor_ der Schließvorgang abgeschlossen ist, indem Sie das `closing`-Ereignis überwachen.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Der `RTCDataChannel` hat in den `closing`-Zustand gewechselt, was darauf hinweist, dass er bald geschlossen wird. Sie können das Ende des Schließvorgangs erkennen, indem Sie das `close`-Ereignis überwachen.
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Der Verbindungszustand, der im [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) zugänglich ist, hat sich geändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Ein neuer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist verfügbar, nachdem der entfernte Peer einen neuen Datenkanal geöffnet hat. Der Typ dieses Ereignisses ist [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent).
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das anzeigt, dass ein Fehler auf dem Datenkanal aufgetreten ist.
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das anzeigt, dass ein Fehler auf dem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) aufgetreten ist. Dieser Fehler wird entweder `dtls-failure` oder `fingerprint-failure` sein.
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Der Sammelzustand des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) hat sich geändert.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das immer dann gesendet wird, wenn das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der dem lokalen Peer hinzugefügt werden muss, indem [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), das anzeigt, dass beim Sammeln der ICE-Kandidaten ein Fehler aufgetreten ist.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : An eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Verbindungszustand—in der Eigenschaft [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) zu finden—ändert.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : An eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Sammelzustand—in der Eigenschaft [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) zu finden—ändert.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Das Ereignis ist vom Typ [`MessageEvent`](/de/docs/Web/API/MessageEvent).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Informiert die `RTCPeerConnection`, dass sie die Sitzungsverhandlung durch Aufruf von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) gefolgt von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) durchführen muss.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Der zugrundeliegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder wieder geöffnet.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Das aktuell ausgewählte Paar von ICE-Kandidaten hat sich für den `RTCIceTransport` geändert, auf dem das Ereignis ausgelöst wird.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Das `track`-Ereignis vom Typ [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wird, nachdem die Verhandlung der Medienübertragung erfolgreich war.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : An die Peer-Verbindung gesendet, wenn sich ihr [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) geändert hat. Dies passiert als Ergebnis eines Aufrufs von entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Der Zustand des `RTCDtlsTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Der Zustand des `RTCIceTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Der Zustand des `RTCSctpTransport` hat sich geändert.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein kodiertes Video- oder Audio-Frame ist bereit zur Verarbeitung mit einem Transform-Stream in einem Worker.

#### Typen

- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
  - : Gibt den Zustand einer [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Instanz an.

### Identität und Sicherheit

Diese APIs werden verwendet, um Benutzeridentität und Sicherheit zu verwalten, um den Benutzer für eine Verbindung zu authentifizieren.

- [`RTCIdentityProvider`](/de/docs/Web/API/RTCIdentityProvider)
  - : Ermöglicht es einem Benutzeragenten, eine Identitätsaussage zu generieren oder zu validieren.
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
  - : Repräsentiert die Identität des entfernten Peers der aktuellen Verbindung. Wenn noch kein Peer festgelegt und überprüft wurde, liefert diese Schnittstelle `null`. Einmal festgelegt, kann es nicht geändert werden.
- [`RTCIdentityProviderRegistrar`](/de/docs/Web/API/RTCIdentityProviderRegistrar)
  - : Registriert einen Identitätsanbieter (IdP).
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
  - : Repräsentiert ein Zertifikat, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet, um sich zu authentifizieren.

### Telefonie

Diese Schnittstellen und Ereignisse beziehen sich auf die Interaktivität mit öffentlichen Telefonnetzen (PSTNs). Sie werden hauptsächlich verwendet, um Wahltonsignale—oder Pakete, die diese Töne darstellen—über das Netzwerk an den entfernten Peer zu senden.

#### Schnittstellen

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
  - : Verwalten der Kodierung und Übertragung von Dual-Tone Multi-Frequency ({{Glossary("DTMF", "DTMF")}})-Signalisierung für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
  - : Wird von dem [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet, um anzuzeigen, dass ein DTMF-Ton entweder begonnen hat oder beendet wurde. Dieses Ereignis wird nicht gebubbelt (außer wenn anders angegeben) und ist nicht abbrechbar (außer wenn anders angegeben).

#### Ereignisse

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Entweder hat ein neuer {{Glossary("DTMF", "DTMF")}}-Ton über die Verbindung begonnen zu spielen, oder der letzte Ton im `RTCDTMFSender`'s [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) wurde gesendet und der Puffer ist jetzt leer. Der Typ des Ereignisses ist [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent).

### Codierte Transforms

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende kodierte Video- und Audio-Frames mit einem Transform-Stream zu verarbeiten, der in einem Worker läuft.

#### Schnittstellen

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
  - : Eine Schnittstelle für das Einfügen von Transform-Streams, die in einem Worker laufen, in die RTC-Pipeline.
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
  - : Das Worker-seitige Gegenstück eines `RTCRtpScriptTransform`, das Optionen vom Hauptthread zusammen mit einem lesbaren Stream und einem schreibbaren Stream übergibt, die verwendet werden können, um kodierte Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
  - : Repräsentiert ein kodiertes Videoframe, das in der RTC-Pipeline transformiert werden soll.
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
  - : Repräsentiert ein kodiertes Audioframe, das in der RTC-Pipeline transformiert werden soll.

#### Eigenschaften

- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Empfänger-Pipeline für eingehende kodierte Video- und Audio-Frames einzufügen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Sender-Pipeline für ausgehende kodierte Video- und Audio-Frames einzufügen.

#### Ereignisse

- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Eine RTC-Transformation ist bereit, im Worker ausgeführt zu werden, oder ein kodiertes Video- oder Audio-Frame ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in das Real-Time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
  - : Das Real-time Transport Protocol (RTP), definiert in {{RFC(3550)}}, ist ein IETF-Standardprotokoll zur Ermöglichung von Echtzeit-Konnektivität zum Austausch von Daten, die Echtzeitpriorität erfordert. Dieser Artikel bietet einen Überblick darüber, was RTP ist und wie es im Kontext von WebRTC funktioniert.
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC-API basiert.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden dazu, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen gemeinsam genutzt werden können, um leistungsstarke Kommunikationsanwendungen zu erstellen.
- [Lebenszeit einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC erlaubt es Ihnen, Peer-to-Peer-Kommunikation mit beliebigen Daten, Audio oder Video—oder jeder Kombination davon—in eine Browseranwendung einzubauen. In diesem Artikel schauen wir uns die Lebenszeit einer WebRTC-Sitzung an, vom Aufbau der Verbindung bis zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.
- [Verbindungsherstellung: Das perfekte Verhandlungsmuster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfekte Verhandlung** ist ein Designmuster, das für Ihren Signalisierungsprozess empfohlen wird, das Transparenz bei der Verhandlung bietet, während es beiden Seiten erlaubt, entweder das Angebot oder die Antwort zu sein, ohne wesentlichen Programmieraufwand, um die beiden zu unterscheiden.
- [Signalisierung und bidirektionale Video-Telefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein auf WebSockets basierendes Chatsystem, das für ein vorheriges Beispiel erstellt wurde, erweitert und Unterstützung für das Eröffnen von Videoanrufen unter den Teilnehmern hinzufügt. Die WebSocket-Verbindung des Chatservers wird für die WebRTC-Signalisierung verwendet.
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, die Browser unterstützen müssen, sowie die optionalen, die von verschiedenen populären Browsern unterstützt werden. Beinhaltet ist ein Leitfaden, der Ihnen hilft, die besten Codecs für Ihre Bedürfnisse auszuwählen.
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden behandelt, wie Sie eine Peer-Verbindung und einen zugehörigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTCs Unterstützung für die Interaktion mit Gateways, die mit älteren Telefonsystemen verbunden sind, umfasst die Unterstützung für das Senden von DTMF-Tönen unter Verwendung der Schnittstelle [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender). Dieser Leitfaden zeigt, wie dies funktioniert.
- [Verwendung von WebRTC-kodierten Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende WebRTC-kodierte Video- und Audio-Frames modifizieren kann, indem ein [`TransformStream`](/de/docs/Web/API/TransformStream) verwendet wird, der in einen Worker läuft.

## Tutorials

- [Verbesserung der Kompatibilität mit WebRTC adapter.js](#interoperabilität)
  - : Die WebRTC-Organisation [bietet auf GitHub den WebRTC-Adapter](https://github.com/webrtc/adapter/) an, um Kompatibilitätsprobleme in den verschiedenen WebRTC-Implementierungen von Browsern zu umgehen. Der Adapter ist ein JavaScript-Shim, der es Ihrem Code ermöglicht, nach der Spezifikation geschrieben zu werden, sodass er in allen mit WebRTC kompatiblen Browsern "einfach funktioniert".
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Die Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist eine Funktion, die es ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich der [WebSocket-API](/de/docs/Web/API/WebSockets_API), sodass dasselbe Programmiermodell für beide verwendet werden kann.
- [Erstellen eines Internet-verbundenen Telefons mit Peer.js](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Dieses Tutorial ist ein schrittweiser Leitfaden zum Bau eines Telefons mit Peer.js

## Spezifikationen

{{Specifications}}

### WebRTC-Eigene Protokolle

- [Application Layer Protocol Negotiation for Web Real-Time Communications](https://datatracker.ietf.org/doc/rfc8833/)
- [WebRTC Audio Codec and Processing Requirements](https://datatracker.ietf.org/doc/rfc7874/)
- [RTCWeb Data Channels](https://datatracker.ietf.org/doc/rfc8831/)
- [RTCWeb Data Channel Protocol](https://datatracker.ietf.org/doc/rfc8832/)
- [Web Real-Time Communication (WebRTC): Media Transport and Use of RTP](https://datatracker.ietf.org/doc/rfc8834/)
- [WebRTC Security Architecture](https://datatracker.ietf.org/doc/rfc8827/)
- [Transports for RTCWEB](https://datatracker.ietf.org/doc/rfc8835/)

### Verwandte unterstützende Protokolle

- [Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol](https://datatracker.ietf.org/doc/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc5389)
- [URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://datatracker.ietf.org/doc/html/rfc7065)
- [An Offer/Answer Model with Session Description Protocol (SDP)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Extension for Third Party Authorization](https://datatracker.ietf.org/doc/rfc7635/)

## Siehe auch

- [`MediaDevices`](/de/docs/Web/API/MediaDevices)
- [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [Web-Medientechnologien](/de/docs/Web/Media)
