---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und Websites ermöglicht, Audio- und/oder Videodaten zu erfassen und optional zu streamen sowie beliebige Daten zwischen Browsern auszutauschen, ohne dass ein Vermittler erforderlich ist. Der Satz von Standards, der WebRTC umfasst, ermöglicht die gemeinsame Nutzung von Daten und die Durchführung von Videokonferenzen Peer-to-Peer, ohne dass der Benutzer Plug-ins oder andere Drittanbieter-Software installieren muss.

WebRTC besteht aus mehreren miteinander verknüpften APIs und Protokollen, die zusammenarbeiten, um dies zu ermöglichen. Die hier bereitgestellte Dokumentation hilft Ihnen, die Grundlagen von WebRTC zu verstehen, wie man sowohl Daten- als auch Medienverbindungen einrichtet und nutzt und vieles mehr.

## WebRTC-Konzepte und Anwendung

WebRTC erfüllt mehrere Zwecke; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bietet es dem Web leistungsstarke Multimedia-Funktionen, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsmanagement und die Schnittstelle zu herkömmlichen Telefonsystemen einschließlich Unterstützung für das Senden von [DTMF](/de/docs/Glossary/DTMF) (Tonwahl) Signalen. Verbindungen zwischen Peers können hergestellt werden, ohne dass spezielle Treiber oder Plug-ins erforderlich sind, und oft ohne Vermittlungsserver.

Verbindungen zwischen zwei Peers werden durch das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interface dargestellt. Sobald eine Verbindung über `RTCPeerConnection` hergestellt und geöffnet wurde, können Medienströme ([`MediaStream`](/de/docs/Web/API/MediaStream)s) und/oder Datenkanäle ([`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s) zur Verbindung hinzugefügt werden.

Medienströme können aus beliebig vielen Medieninformationsspuren bestehen; Spuren, die durch Objekte dargestellt werden, die auf dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interface basieren, können eine von mehreren Arten von Mediendaten enthalten, einschließlich Audio, Video und Text (wie Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einer Audiospur und wahrscheinlich auch einer Videospur und können verwendet werden, um sowohl Live-Medien als auch gespeicherte Medieninformationen (wie einen gestreamten Film) zu senden und zu empfangen.

Sie können die Verbindung zwischen zwei Peers auch nutzen, um beliebige Binärdaten mithilfe des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interfaces auszutauschen. Dies kann für Back-Channel-Informationen, Metadatenaustausch, Spielstatuspakete, Dateitransfers oder sogar als primärer Kanal für den Datentransfer verwendet werden.

### Interoperabilität

WebRTC wird im Allgemeinen gut in modernen Browsern unterstützt, aber einige Inkompatibilitäten bleiben bestehen. Die [adapter.js](https://github.com/webrtcHacks/adapter)-Bibliothek ist ein Shim, um Apps vor diesen Inkompatibilitäten zu schützen.

## WebRTC-Referenz

Da WebRTC Schnittstellen bereitstellt, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erledigen, haben wir die Referenz nach Kategorien aufgeteilt. Bitte sehen Sie in der Seitenleiste nach einer alphabetischen Liste.

### Verbindungseinrichtung und -verwaltung

Diese Schnittstellen, Wörterbücher und Typen werden verwendet, um WebRTC-Verbindungen einzurichten, zu öffnen und zu verwalten. Enthalten sind Schnittstellen, die Peer-Medienverbindungen, Datenkanäle und Schnittstellen darstellen, die verwendet werden, wenn Informationen über die Fähigkeiten jedes Peers ausgetauscht werden, um die bestmögliche Konfiguration für eine Zwei-Wege-Medienverbindung auszuwählen.

#### Schnittstellen

- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Stellt eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer dar. Es wird verwendet, um effizientes Streaming von Daten zwischen den beiden Peers zu handhaben.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Stellt einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung dar.
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
  - : Stellt Ereignisse dar, die beim Anfügen eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftreten. Das einzige Ereignis, das mit dieser Schnittstelle gesendet wird, ist [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event).
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
  - : Stellt die Parameter einer Sitzung dar. Jede `RTCSessionDescription` besteht aus einer Beschreibung vom [`type`](/de/docs/Web/API/RTCSessionDescription/type), die angibt, welchen Teil des Angebots-/Antwortverhandlungsprozesses sie beschreibt, und aus dem [SDP](/de/docs/Glossary/SDP)-Deskriptor der Sitzung.
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
  - : Bietet Informationen, die Details zu Statistiken für eine Verbindung oder für einen einzelnen Track auf der Verbindung bereitstellen; der Bericht kann durch Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) erhalten werden.
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)
  - : Stellt einen Kandidaten für den Aufbau einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit Interactive Connectivity Establishment ([ICE](/de/docs/Glossary/ICE)) dar.
- [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)
  - : Stellt Informationen über ein [ICE](/de/docs/Glossary/ICE)-Transport dar.
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
  - : Stellt Ereignisse dar, die im Zusammenhang mit ICE-Kandidaten beim Ziel auftreten, in der Regel ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Nur ein Ereignis ist von diesem Typ: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : Verwaltet die Codierung und Übertragung von Daten für ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : Verwaltet den Empfang und die Decodierung von Daten für ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)
  - : Die Schnittstelle, die ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis darstellt, das darauf hinweist, dass ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wurde, was darauf hinweist, dass ein neuer eingehender [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt und zur `RTCPeerConnection` hinzugefügt wurde.
- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
  - : Bietet Informationen, die ein Stream Control Transmission Protocol (**[SCTP](/de/docs/Glossary/SCTP)**) Transport beschreiben, und ermöglicht den Zugriff auf das zugrundeliegende Datagram Transport Layer Security (**[DTLS](/de/docs/Glossary/DTLS)**) Transport, über das SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Die Menge an Daten, die derzeit im Datenkanal gepuffert wird — wie durch die [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)-Eigenschaft angezeigt — ist gesunken und erreicht oder liegt unter der minimal gepufferten Datenmenge des Kanals, wie durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegeben.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Der Datenkanal hat den Schließvorgang abgeschlossen und befindet sich nun im `closed` Zustand. Sein zugrunde liegender Datentransport ist nun vollständig geschlossen. Sie können benachrichtigt werden, _bevor_ das Schließen abgeschlossen ist, indem Sie auf das `closing` Ereignis achten.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Der `RTCDataChannel` ist in den `closing` Zustand übergegangen, was darauf hinweist, dass er bald geschlossen wird. Sie können das Abschließen des Schließvorgangs durch das `close` Ereignis feststellen.
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Der Zustand der Verbindung, der in [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) zugänglich ist, hat sich geändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Ein neuer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist verfügbar, nachdem der Remote-Peer einen neuen Datenkanal geöffnet hat. Der Typ dieses Ereignisses ist [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent).
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das darauf hinweist, dass ein Fehler im Datenkanal aufgetreten ist.
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das darauf hinweist, dass ein Fehler im [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) aufgetreten ist. Dieser Fehler wird entweder `dtls-failure` oder `fingerprint-failure` sein.
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Der Sammelzustand des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) hat sich geändert.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das immer gesendet wird, wenn das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der dem lokalen Peer hinzugefügt werden muss, indem [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), das darauf hinweist, dass ein Fehler beim Sammeln von ICE-Kandidaten aufgetreten ist.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich ihr ICE-Verbindungszustand — zu finden in der [`iceconnectionstate`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstate)-Eigenschaft — ändert.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich ihr ICE-Sammelzustand — zu finden in der [`icegatheringstate`](/de/docs/Web/API/RTCPeerConnection/icegatheringstate)-Eigenschaft — ändert.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Das Ereignis ist vom Typ [`MessageEvent`](/de/docs/Web/API/MessageEvent).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Informiert die `RTCPeerConnection`, dass sie eine Sitzungsverhandlung durchführen muss, indem [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) gefolgt von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Der zugrunde liegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder wieder geöffnet.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Das derzeit ausgewählte Paar von ICE-Kandidaten hat sich für den `RTCIceTransport`, auf dem das Ereignis ausgelöst wird, geändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Das `track`-Ereignis vom Typ [`RTCTrackevent`](/de/docs/Web/API/RTCTrackevent) wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wird, nachdem die Verhandlung des Medienstreamings erfolgreich war.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird an die Peer-Verbindung gesendet, wenn sich ihr [`signalingstate`](/de/docs/Web/API/RTCPeerConnection/signalingstate) geändert hat. Dies geschieht als Ergebnis eines Aufrufs von entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Der Zustand des `RTCDtlsTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Der Zustand des `RTCIceTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Der Zustand des `RTCSctpTransport` hat sich geändert.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein kodiertes Video- oder Audio-Frame ist bereit, mit einem Transform-Stream in einem Worker verarbeitet zu werden.

#### Typen

- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
  - : Gibt den Zustand einer [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Instanz an.

### Identität und Sicherheit

Diese APIs werden verwendet, um die Benutzeridentität und Sicherheit zu verwalten, um den Benutzer für eine Verbindung zu authentifizieren.

- [`RTCIdentityProvider`](/de/docs/Web/API/RTCIdentityProvider)
  - : Ermöglicht einem User Agent, die Generierung oder Validierung einer Identitätszusage anzufordern.
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
  - : Stellt die Identität des entfernten Peers der aktuellen Verbindung dar. Wenn noch kein Peer festgelegt und überprüft wurde, gibt diese Schnittstelle `null` zurück. Einmal festgelegt, kann es nicht geändert werden.
- [`RTCIdentityProviderRegistrar`](/de/docs/Web/API/RTCIdentityProviderRegistrar)
  - : Registriert einen Identitätsanbieter (IdP).
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
  - : Stellt ein Zertifikat dar, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Authentifizierung verwendet.

### Telefonie

Diese Schnittstellen und Ereignisse stehen im Zusammenhang mit der Interaktivität mit öffentlichen Telefonnetzen (PSTNs). Sie werden hauptsächlich verwendet, um Wähltonsignale oder Pakete, die diese Signale darstellen, über das Netzwerk an den Remote-Peer zu senden.

#### Schnittstellen

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
  - : Verwaltet die Codierung und Übertragung von Dual-Tone Multi-Frequency ([DTMF](/de/docs/Glossary/DTMF)) Signalen für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
  - : Wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet, um anzugeben, dass ein DTMF-Ton entweder begonnen oder beendet wurde. Dieses Ereignis löst keine Blasenbildung aus (außer wenn anders angegeben) und kann nicht abgebrochen werden (außer wenn anders angegeben).

#### Ereignisse

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Entweder hat ein neuer [DTMF](/de/docs/Glossary/DTMF)-Ton begonnen, über die Verbindung zu spielen, oder der letzte Ton im `RTCDTMFSender`'s [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) wurde gesendet und der Puffer ist nun leer. Der Typ des Ereignisses ist [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent).

### Encoded Transforms

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende kodierte Video- und Audiorahmen mithilfe eines Transform-Streams, der in einem Worker läuft, zu verarbeiten.

#### Schnittstellen

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
  - : Eine Schnittstelle zum Einfügen von Transform-Streams, die in einem Worker laufen, in die RTC-Pipeline.
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
  - : Das Worker-seitige Gegenstück eines `RTCRtpScriptTransform`, das Optionen vom Haupt-Thread zusammen mit einem lesbaren und einem schreibbaren Stream übermittelt, die verwendet werden können, um kodierte Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
  - : Stellt einen kodierten Videorahmen dar, der in der RTC-Pipeline transformiert werden soll.
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
  - : Stellt einen kodierten Audiorahmen dar, der in der RTC-Pipeline transformiert werden soll.

#### Eigenschaften

- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Empfänger-Pipeline für eingehende kodierte Video- und Audiorahmen einzufügen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Absender-Pipeline für ausgehende kodierte Video- und Audiorahmen einzufügen.

#### Ereignisse

- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein RTC-Transform ist bereit, im Worker zu laufen, oder ein kodiertes Video- oder Audiorahmen ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC-API basiert.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen zusammen verwendet werden können, um leistungsfähige Kommunikations-Apps zu erstellen.
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC ermöglicht es Ihnen, Peer-to-Peer-Kommunikation von beliebigen Daten, Audio oder Video — oder einer Kombination davon — in eine Browseranwendung zu integrieren. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, von der Herstellung der Verbindung bis zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.
- [Verbindung herstellen: Das perfekte Verhandlungsmodell](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfekte Verhandlung** ist ein Entwurfsmuster, das für Ihren Signalisierungsprozess empfohlen wird. Es bietet Transparenz in der Verhandlung und ermöglicht es beiden Seiten, entweder der Anbieter oder der Empfänger zu sein, ohne dass erheblicher Programmieraufwand erforderlich ist, um die beiden zu unterscheiden.
- [Signalisierung und Zwei-Wege-Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein WebSocket-basiertes Chatsystem, das für ein früheres Beispiel erstellt wurde, erweitert und Unterstützung für das Öffnen von Videoanrufen unter den Teilnehmern hinzufügt. Die WebSocket-Verbindung des Chat-Servers wird für WebRTC-Signalisierung verwendet.
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, die WebRTC von Browsern erfordert, sowie denen, die optional von verschiedenen populären Browsern unterstützt werden. Enthalten ist ein Leitfaden, der Ihnen hilft, die besten Codecs für Ihre Bedürfnisse auszuwählen.
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden behandelt, wie Sie eine Peer-Verbindung und einen zugehörigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : Die Unterstützung von WebRTC für die Interaktion mit Gateways, die zu herkömmlichen Telefonsystemen verbinden, umfasst die Unterstützung für das Senden von DTMF-Tönen mit dem [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Interface. Dieser Leitfaden zeigt, wie dies möglich ist.
- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende WebRTC-kodierte Video- und Audiorahmen mit einem [`TransformStream`](/de/docs/Web/API/TransformStream), der in einem Worker läuft, modifizieren kann.

## Tutorials

- [Verbesserung der Kompatibilität mit WebRTC adapter.js](#interoperabilität)
  - : Die WebRTC-Organisation [stellt auf GitHub den WebRTC-Adapter zur Verfügung](https://github.com/webrtc/adapter/), um Kompatibilitätsprobleme in den WebRTC-Implementierungen verschiedener Browser zu umgehen. Der Adapter ist ein JavaScript-Shim, der es Ihrem Code ermöglicht, gemäß den Spezifikationen geschrieben zu werden, sodass er in allen Browsern mit WebRTC-Unterstützung "einfach funktioniert".
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interface ist eine Funktion, die es Ihnen erlaubt, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich der [WebSocket API](/de/docs/Web/API/WebSockets_API), sodass dasselbe Programmiermodell für beide verwendet werden kann.
- [Erstellen eines internetfähigen Telefons mit Peer.js](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Dieses Tutorial ist ein Schritt-für-Schritt-Leitfaden, wie man ein Telefon mit Peer.js baut.

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

### Zugehörige unterstützende Protokolle

- [Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal for Offer/Answer Protocol](https://datatracker.ietf.org/doc/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc5389)
- [URI Scheme for the Session Traversal Utilities for NAT (STUN) Protocol](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://datatracker.ietf.org/doc/html/rfc7065)
- [Ein Angebots-/Antwortmodell mit Sitzungsbeschreibungsprotokoll (SDP)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Sitzungsüberquerungsdienstprogramme für NAT (STUN)-Erweiterung für Drittanbieter-Autorisierung](https://datatracker.ietf.org/doc/rfc7635/)

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
