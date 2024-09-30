---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und -seiten ermöglicht, Audio- und/oder Videomedien zu erfassen und optional zu streamen sowie beliebige Daten zwischen Browsern ohne Vermittler auszutauschen. Der Standardsatz, der WebRTC umfasst, ermöglicht das Teilen von Daten und die Durchführung von Videokonferenzen Peer-to-Peer, ohne dass der Benutzer Plugins oder andere Drittanbieter-Software installieren muss.

WebRTC besteht aus mehreren miteinander verbundenen APIs und Protokollen, die zusammenarbeiten, um dies zu erreichen. Die hier bereitgestellte Dokumentation hilft Ihnen, die Grundlagen von WebRTC zu verstehen, wie man Daten- und Medienverbindungen einrichtet und nutzt und mehr.

## WebRTC-Konzepte und Nutzung

WebRTC hat mehrere Zwecke; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bieten sie leistungsstarke Multimedia-Fähigkeiten für das Web, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsmanagement und Schnittstellen zu herkömmlichen Telefonsystemen, einschließlich Unterstützung für das Senden von [DTMF](/de/docs/Glossary/DTMF) (Tonwahl) Signalen. Verbindungen zwischen Peers können ohne spezielle Treiber oder Plugins hergestellt werden und oft auch ohne Vermittlungsserver.

Verbindungen zwischen zwei Peers werden durch das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Interface dargestellt. Sobald eine Verbindung mit `RTCPeerConnection` hergestellt und geöffnet wurde, können Medienströme ([`MediaStream`](/de/docs/Web/API/MediaStream)s) und/oder Datenkanäle ([`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s) zur Verbindung hinzugefügt werden.

Medienströme können eine beliebige Anzahl von Medientracks enthalten; Tracks, die durch Objekte auf Basis des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Schnittstelle dargestellt werden, können eine Vielzahl von Mediadatentypen enthalten, einschließlich Audio, Video und Text (wie Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einem Audiospur und wahrscheinlich auch einer Videospur und können verwendet werden, um sowohl Live-Medien als auch gespeicherte Mediadaten (wie einen gestreamten Film) zu senden und zu empfangen.

Sie können die Verbindung zwischen zwei Peers auch verwenden, um beliebige binäre Daten über das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Interface auszutauschen. Dies kann für Backchannel-Informationen, Metadaten-Austausch, Spielstatus-Packete, Dateitransfers oder sogar als primärer Kanal für den Datentransfer genutzt werden.

### Interoperabilität

WebRTC wird im Allgemeinen weitgehend von modernen Browsern unterstützt, aber einige Inkompatibilitäten bleiben bestehen. Die [adapter.js](https://github.com/webrtcHacks/adapter) Bibliothek ist ein Shim, um Apps von diesen Inkompatibilitäten zu isolieren.

## WebRTC-Referenz

Da WebRTC Schnittstellen bereitstellt, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erfüllen, haben wir die Referenz nach Kategorie unterteilt. Bitte sehen Sie sich die Seitenleiste für eine alphabetische Liste an.

### Verbindungseinrichtung und -verwaltung

Diese Schnittstellen, Wörterbücher und Typen werden verwendet, um WebRTC-Verbindungen einzurichten, zu öffnen und zu verwalten. Enthalten sind Schnittstellen, die Peer-Medienverbindungen repräsentieren, Datenkanäle und Schnittstellen, die bei der Austausch von Informationen über die Fähigkeiten jedes Peers verwendet werden, um die bestmögliche Konfiguration für eine Zwei-Wege-Medienverbindung auszuwählen.

#### Schnittstellen

- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Es wird verwendet, um effizientes Streaming von Daten zwischen den beiden Peers zu handhaben.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Repräsentiert einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung.
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
  - : Repräsentiert Ereignisse, die beim Anfügen eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftreten. Das einzige Ereignis, das mit diesem Interface gesendet wird, ist [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event).
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
  - : Repräsentiert die Parameter einer Sitzung. Jede `RTCSessionDescription` besteht aus einem Beschreibungstyp, der angibt, welchen Teil des Offer/Answer-Aushandlungsprozess sie beschreibt, und dem [SDP](/de/docs/Glossary/SDP) Deskriptor der Sitzung.
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
  - : Bietet Informationen, die Statistiken für eine Verbindung oder für einen einzelnen Track auf der Verbindung detailliert beschreiben; der Bericht kann durch Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) erhalten werden.
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)
  - : Repräsentiert einen Kandidaten für den Aufbau einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) über das Interactive Connectivity Establishment ([ICE](/de/docs/Glossary/ICE)) Server.
- [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)
  - : Repräsentiert Informationen über einen [ICE](/de/docs/Glossary/ICE) Transport.
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
  - : Repräsentiert Ereignisse, die im Zusammenhang mit ICE-Kandidaten mit dem Ziel, normalerweise einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), auftreten. Nur ein Ereignis hat diesen Typ: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : Verwalten die Codierung und Übertragung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) an einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : Verwalten die Empfang und Dekodierung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) an einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)
  - : Die Schnittstelle, die verwendet wird, um ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis zu repräsentieren, das anzeigt, dass ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Objekt zu einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekt hinzugefügt wurde, was darauf hinweist, dass ein neuer eingehender [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt und der `RTCPeerConnection` hinzugefügt wurde.
- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
  - : Bietet Informationen, die einen Stream Control Transmission Protocol (**[SCTP](/de/docs/Glossary/SCTP)**) Transport beschreiben und auch eine Möglichkeit bieten, auf den zugrundeliegenden Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**) Transport zuzugreifen, über den SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Die Menge an Daten, die derzeit im Datenkanal gepuffert sind, wie durch die [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) Eigenschaft angegeben, ist auf oder unter die minimale gepufferte Datengröße des Kanals gesunken, wie durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) spezifiziert.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Der Datenkanal hat den Schließvorgang abgeschlossen und befindet sich jetzt im `closed` Zustand. Sein zugrundeliegender Datentransport ist zu diesem Zeitpunkt vollständig geschlossen. Sie können sich _vorher_ von der Schließung benachrichtigen lassen, indem Sie das `closing` Ereignis beobachten.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Der `RTCDataChannel` ist in den `closing` Zustand übergegangen, was darauf hinweist, dass er bald geschlossen wird. Sie können den Abschluss des Schließvorgangs erkennen, indem Sie das `close` Ereignis beobachten.
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Der Zustand der Verbindung, auf die über [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) zugegriffen werden kann, hat sich geändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Ein neuer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist verfügbar, nachdem der Remote-Peer einen neuen Datenkanal geöffnet hat. Der Ereignistyp ist [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent).
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das darauf hinweist, dass ein Fehler auf dem Datenkanal aufgetreten ist.
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das darauf hinweist, dass ein Fehler auf dem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) aufgetreten ist. Dieser Fehler wird entweder `dtls-failure` oder `fingerprint-failure` sein.
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Der Sammelstatus des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) hat sich geändert.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das gesendet wird, wann immer das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der dem lokalen Peer hinzugefügt werden muss, indem [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), das darauf hinweist, dass ein Fehler beim Sammeln der ICE-Kandidaten aufgetreten ist.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : An ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Zustand seiner ICE-Verbindung, zu finden in der [`iceconnectionstate`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstate) Eigenschaft, ändert.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : An ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Sammelstatus, zu finden in der [`icegatheringstate`](/de/docs/Web/API/RTCPeerConnection/icegatheringstate) Eigenschaft, ändert.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Das Ereignis ist vom Typ [`MessageEvent`](/de/docs/Web/API/MessageEvent).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Informiert die `RTCPeerConnection`, dass eine Sitzungsverhandlung durchgeführt werden muss, indem [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) gefolgt von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Der zugrundeliegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder wiedereröffnet.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Das aktuell ausgewählte ICE-Kandidatenpaar hat sich für den `RTCIceTransport` geändert, auf dem das Ereignis ausgelöst wird.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Das `track` Ereignis, vom Typ [`RTCTrackevent`](/de/docs/Web/API/RTCTrackevent), wird an ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track nach erfolgreicher Aushandlung des Streaming der Medien zur Verbindung hinzugefügt wird.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : An die Peer-Verbindung gesendet, wenn sich ihr [`signalingstate`](/de/docs/Web/API/RTCPeerConnection/signalingstate) geändert hat. Dies geschieht als Ergebnis eines Aufrufs von entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Der Zustand des `RTCDtlsTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Der Zustand des `RTCIceTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Der Zustand des `RTCSctpTransport` hat sich geändert.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein codierter Video- oder Audio-Frame ist bereit, mit einem Transform-Stream in einem Worker verarbeitet zu werden.

#### Typen

- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
  - : Gibt den Zustand einer [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) Instanz an.

### Identität und Sicherheit

Diese APIs werden genutzt, um die Benutzeridentität und Sicherheit zu verwalten, um den Benutzer für eine Verbindung zu authentifizieren.

- [`RTCIdentityProvider`](/de/docs/Web/API/RTCIdentityProvider)
  - : Ermöglicht es einem Benutzeragenten, zu beantragen, dass eine Identitätsbestätigung generiert oder validiert wird.
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
  - : Repräsentiert die Identität des entfernten Peers der aktuellen Verbindung. Wenn noch kein Peer gesetzt und überprüft wurde, gibt dieses Interface `null` zurück. Einmal gesetzt, kann es nicht geändert werden.
- [`RTCIdentityProviderRegistrar`](/de/docs/Web/API/RTCIdentityProviderRegistrar)
  - : Registriert einen Identitätsanbieter (idP).
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
  - : Repräsentiert ein Zertifikat, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Authentifizierung verwendet.

### Telefonie

Diese Schnittstellen und Ereignisse stehen in Zusammenhang mit der Interaktivität mit öffentlichen Telefonnetzen (PSTNs). Sie werden hauptsächlich verwendet, um Wähltöne oder Pakete, die diese Töne repräsentieren, über das Netzwerk an den entfernten Peer zu senden.

#### Schnittstellen

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
  - : Verwalten die Codierung und Übertragung von Dual-Tone Multi-Frequency ([DTMF](/de/docs/Glossary/DTMF)) Signalisierung für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
  - : Wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignis verwendet, um anzuzeigen, dass ein DTMF-Ton entweder begonnen oder beendet wurde. Dieses Ereignis ist nicht bubling (außer wo anders angegeben) und nicht abbrechbar (außer wo anders angegeben).

#### Ereignisse

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Entweder hat ein neuer [DTMF](/de/docs/Glossary/DTMF) Ton über die Verbindung zu spielen begonnen, oder der letzte Ton im `RTCDTMFSender`'s [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) wurde gesendet und der Puffer ist jetzt leer. Der Ereignistyp ist [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent).

### Codierte Transforms

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende codierte Video- und Audio-Frames mit einem Transform-Stream zu verarbeiten, der in einem Worker läuft.

#### Schnittstellen

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
  - : Ein Interface zum Einfügen von Transform-Stream(s), die in einem Worker laufen, in die RTC-Pipeline.
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
  - : Das Worker-seitige Gegenstück zu einem `RTCRtpScriptTransform`, das Optionen vom Main-Thread weitergibt, zusammen mit einem lesbaren Stream und einem schreibbaren Stream, der verwendet werden kann, um codierte Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
  - : Repräsentiert einen codierten Videoframe, der in der RTC-Pipeline transformiert werden soll.
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
  - : Repräsentiert einen codierten Audioframe, der in der RTC-Pipeline transformiert werden soll.

#### Eigenschaften

- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Empfänger-Pipeline für eingehende codierte Video- und Audio-Frames einzufügen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Sender-Pipeline für ausgehende codierte Video- und Audio-Frames einzufügen.

#### Ereignisse

- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein RTC-Transform ist bereit, im Worker zu laufen, oder ein codierter Video- oder Audio-Frame ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel stellt die Protokolle vor, auf denen die WebRTC-API basiert.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden dafür, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen zusammen genutzt werden können, um leistungsstarke Kommunikationsanwendungen zu entwickeln.
- [Lebenszeit einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC ermöglicht Ihnen die Entwicklung von Peer-to-Peer-Kommunikation von beliebigen Daten, Audio oder Video – oder jeder Kombination davon – in einer Browseranwendung. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, vom Aufbau der Verbindung bis hin zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.
- [Verbindungsaufbau: Das perfekte Verhandlungs-Muster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfekte Verhandlung** ist ein Designmuster, das für Ihren Signalisierungsprozess empfohlen wird, um zu folgen, das Transparenz in der Verhandlung bietet und beiden Seiten erlaubt, entweder der Anbietende oder der Antwortende zu sein, ohne dass signifikantes Codieren erforderlich ist, um die beiden zu unterscheiden.
- [Signalisierung und Zweiwege-Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein auf WebSocket basierendes Chat-System, das für ein früheres Beispiel erstellt wurde, erweitert und Unterstützung für das Öffnen von Videocalls unter Teilnehmern hinzufügt. Die WebSocket-Verbindung des Chat-Servers wird für die WebRTC-Signalisierung genutzt.
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, die WebRTC-Browser unterstützen müssen, sowie zu den optionalen, die von verschiedenen beliebten Browsern unterstützt werden. Enthalten ist ein Leitfaden, der Ihnen hilft, die besten Codecs für Ihre Bedürfnisse auszuwählen.
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden behandelt, wie Sie eine Peer-Verbindung und einen zugehörigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTCs Unterstützung für die Interaktion mit Gateways, die zu herkömmlichen Telefonsystemen verlinken, umfasst die Unterstützung für das Senden von DTMF-Tönen mithilfe der [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) Schnittstelle. Dieser Leitfaden zeigt, wie dies zu tun ist.
- [Verwendung von WebRTC Codierte Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende WebRTC codierte Video- und Audio-Frames mithilfe eines [`TransformStream`](/de/docs/Web/API/TransformStream) verarbeiten kann, der in einem Worker läuft.

## Anleitungen

- [Verbesserung der Kompatibilität mit WebRTC adapter.js](#interoperabilität)
  - : Die WebRTC-Organisation [bietet auf GitHub den WebRTC-Adapter](https://github.com/webrtc/adapter/) an, um Kompatibilitätsprobleme in verschiedenen WebRTC-Implementierungen der Browser zu umgehen. Der Adapter ist ein JavaScript-Shim, der es ermöglicht, Ihren Code gemäß der Spezifikation zu schreiben, sodass er in allen Browsern mit WebRTC-Unterstützung "einfach funktioniert".
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Die [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle ist eine Funktion, die es Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich dem [WebSocket API](/de/docs/Web/API/WebSockets_API) ähnlich, sodass dasselbe Programmiermodell für beide verwendet werden kann.
- [Erstellen eines internetverbundenen Telefons mit Peer.js](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Diese Anleitung ist ein Schritt-für-Schritt-Leitfaden zum Erstellen eines Telefons mit Peer.js

## Spezifikationen

{{Specifications}}

### WebRTC-eigene Protokolle

- [Application Layer Protocol Negotiation for Web Real-Time Communications](https://datatracker.ietf.org/doc/rfc8833/)
- [WebRTC Audio Codec and Processing Requirements](https://datatracker.ietf.org/doc/rfc7874/)
- [RTCWeb Data Channels](https://datatracker.ietf.org/doc/rfc8831/)
- [RTCWeb Data Channel Protocol](https://datatracker.ietf.org/doc/rfc8832/)
- [Web Real-Time Communication (WebRTC): Media Transport and Use of RTP](https://datatracker.ietf.org/doc/rfc8834/)
- [WebRTC Security Architecture](https://datatracker.ietf.org/doc/rfc8827/)
- [Transports for RTCWEB](https://datatracker.ietf.org/doc/rfc8835/)

### Relevante unterstützende Protokolle

- [Interactive Connectivity Establishment (ICE): Ein Protokoll zur NAT-Traversierung für das Offer/Answer-Protokoll](https://datatracker.ietf.org/doc/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc5389)
- [URI-Schema für das Session Traversal Utilities for NAT (STUN) Protokoll](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://datatracker.ietf.org/doc/html/rfc7065)
- [Ein Offer/Answer-Modell mit Session Description Protocol (SDP)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Erweiterung für die Autorisierung von Drittanbietern](https://datatracker.ietf.org/doc/rfc7635/)

## Siehe auch

- [`MediaDevices`](/de/docs/Web/API/MediaDevices)
- [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Firefox Multistream und Renegotiation für Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Durch den WebRTC-Nebel mit SocketPeer blicken](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Aufbau einer Web-App mit mehreren Live-Video-Streams + interaktiven Grafiken](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [Web-Medientechnologien](/de/docs/Web/Media)
