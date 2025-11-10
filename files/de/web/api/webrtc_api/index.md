---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und Websites ermöglicht, Audio- und/oder Videomedien zu erfassen und optional zu streamen sowie beliebige Daten zwischen Browsern auszutauschen, ohne dass ein Vermittler erforderlich ist. Der Satz von Standards, der WebRTC ausmacht, ermöglicht es, Daten auszutauschen und Telekonferenzen peer-to-peer durchzuführen, ohne dass der Benutzer Plug-ins oder eine andere Drittanbieter-Software installieren muss.

WebRTC besteht aus mehreren miteinander verbundenen APIs und Protokollen, die zusammenarbeiten, um dies zu erreichen. Die hier bereitgestellte Dokumentation hilft Ihnen, die Grundlagen von WebRTC zu verstehen, wie Sie sowohl Daten- als auch Medienverbindungen einrichten und verwenden können und mehr.

## WebRTC-Konzepte und Nutzung

WebRTC erfüllt mehrere Zwecke; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bieten sie leistungsstarke Multimediakapazitäten für das Web, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsmanagement und die Schnittstelle zu älteren Telefonsystemen, einschließlich Unterstützung für das Senden von {{Glossary("DTMF", "DTMF")}}-Signalen (Tonwahl). Verbindungen zwischen Peers können hergestellt werden, ohne dass spezielle Treiber oder Plug-ins erforderlich sind und oft auch ohne Vermittlungsserver.

Verbindungen zwischen zwei Peers werden durch die Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) repräsentiert. Sobald eine Verbindung mit `RTCPeerConnection` etabliert und geöffnet wurde, können Medienströme ([`MediaStream`](/de/docs/Web/API/MediaStream)s) und/oder Datenkanäle ([`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s) zur Verbindung hinzugefügt werden.

Medienströme können beliebig viele Tracks mit Medieninformationen enthalten; Tracks, die durch Objekte basierend auf der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) repräsentiert werden, können eine von mehreren Arten von Mediendaten enthalten, einschließlich Audio, Video und Text (wie Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einem Audiotrack und wahrscheinlich auch einem Videotrack und können verwendet werden, um sowohl Live-Medien als auch gespeicherte Medieninformationen (wie einen gestreamten Film) zu senden und zu empfangen.

Sie können die Verbindung zwischen zwei Peers auch verwenden, um beliebige Binärdaten mit der Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) auszutauschen. Dies kann für Back-Channel-Informationen, Metadaten-Austausch, Spielstatus-Pakete, Dateitransfers oder sogar als Hauptkanal für Datenübertragungen verwendet werden.

### Interoperabilität

WebRTC wird in modernen Browsern im Allgemeinen gut unterstützt, es bleiben jedoch einige Inkompatibilitäten bestehen. Die [adapter.js](https://github.com/webrtcHacks/adapter)-Bibliothek ist ein Shim, um Apps von diesen Inkompatibilitäten zu isolieren.

## WebRTC-Referenz

Da WebRTC Schnittstellen bereitstellt, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erledigen, haben wir die Referenz nach Kategorie unterteilt. Bitte beachten Sie die Sidebar für eine alphabetische Liste.

### Einrichtung und Verwaltung von Verbindungen

Diese Schnittstellen, Dictionaries und Typen werden verwendet, um WebRTC-Verbindungen einzurichten, zu öffnen und zu verwalten. Enthalten sind Schnittstellen, die peer-Medienverbindungen, Datenkanäle und Schnittstellen repräsentieren, die beim Austausch von Informationen über die Fähigkeiten jedes Peers verwendet werden, um die bestmögliche Konfiguration für eine Zwei-Wege-Medienverbindung auszuwählen.

#### Schnittstellen

- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Es wird verwendet, um eine effiziente Datenübertragung zwischen den beiden Peers zu handhaben.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Repräsentiert einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung.
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
  - : Repräsentiert Ereignisse, die beim Anfügen eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftreten. Das einzige Ereignis, das mit dieser Schnittstelle gesendet wird, ist [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event).
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
  - : Repräsentiert die Parameter einer Sitzung. Jede `RTCSessionDescription` besteht aus einem Beschreibungstyp, der anzeigt, welcher Teil des Angebots-/Antwortverhandlungsprozesses beschrieben wird, und dem {{Glossary("SDP", "SDP")}}-Beschreibung der Sitzung.
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
  - : Bietet Informationen, die Statistiken für eine Verbindung oder für einen einzelnen Track auf der Verbindung detailliert beschreiben; der Bericht kann durch Aufrufen von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) erhalten werden.
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)
  - : Repräsentiert einen Kandidaten für den Ausbau interaktiver Konnektivität (ICE) zur Erstellung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)
  - : Repräsentiert Informationen über einen {{Glossary("ICE", "ICE")}}-Transport.
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
  - : Repräsentiert Ereignisse, die im Zusammenhang mit ICE-Kandidaten beim Ziel auftreten, normalerweise einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Nur ein Ereignis ist von diesem Typ: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : Verwaltet die Kodierung und Übertragung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : Verwaltet den Empfang und die Dekodierung von Daten für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)
  - : Die Schnittstelle wird verwendet, um ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis darzustellen, das anzeigt, dass ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt zu dem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt hinzugefügt wurde, was darauf hinweist, dass ein neuer eingehender [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt und der `RTCPeerConnection` hinzugefügt wurde.
- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
  - : Bietet Informationen, die ein Stream Control Transmission Protocol (SCTP) Transport beschreiben und bietet auch eine Möglichkeit, auf den zugrunde liegenden Datagram Transport Layer Security (DTLS) Transport zuzugreifen, über den SCTP Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Die Menge an Daten, die derzeit vom Datenkanal gepuffert wird—wie durch seine [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)-Eigenschaft angegeben—hat sich auf das oder unter das minimale gepufferte Datenvolumen des Kanals verringert, wie von [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) spezifiziert.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Der Datenkanal hat den Schließprozess abgeschlossen und befindet sich jetzt im Zustand `closed`. Sein zugrunde liegender Datentransport ist an diesem Punkt vollständig geschlossen. Sie können benachrichtigt werden _bevor_ das Schließen abgeschlossen ist, indem Sie auf das Ereignis `closing` achten.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Der `RTCDataChannel` ist in den Zustand `closing` übergegangen und zeigt an, dass er bald geschlossen wird. Sie können das Abschließen des Schließprozesses feststellen, indem Sie auf das Ereignis `close` achten.
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Der Verbindungszustand, der in [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) zugänglich ist, hat sich geändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Ein neuer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist verfügbar, nachdem der Remote-Peer einen neuen Datenkanal geöffnet hat. Der Ereignistyp ist [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent).
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), der darauf hinweist, dass ein Fehler auf dem Datenkanal aufgetreten ist.
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), der darauf hinweist, dass ein Fehler auf dem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) aufgetreten ist. Dieser Fehler wird entweder `dtls-failure` oder `fingerprint-failure` sein.
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Der Sammelstatus des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) hat sich geändert.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das gesendet wird, wann immer das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der dem lokalen Peer hinzugefügt werden muss, indem [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), das darauf hinweist, dass beim Sammeln von ICE-Kandidaten ein Fehler aufgetreten ist.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Verbindungsstatus—gefunden in der Eigenschaft [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)—ändert.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Sammelstatus—gefunden in der Eigenschaft [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)—ändert.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Das Ereignis ist vom Typ [`MessageEvent`](/de/docs/Web/API/MessageEvent).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Informiert die `RTCPeerConnection`, dass eine Sitzungsverhandlung durchgeführt werden muss, indem [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) gefolgt von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Der zugrunde liegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder wieder geöffnet.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Das aktuell ausgewählte Paar von ICE-Kandidaten hat sich für das `RTCIceTransport` geändert, auf dem das Ereignis ausgelöst wird.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Das `track`-Ereignis, vom Typ [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent), wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wird, nachdem die Verhandlung des Medienstreams erfolgreich war.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird an die Peer-Verbindung gesendet, wenn sich deren [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) geändert hat. Dies geschieht als Ergebnis eines Aufrufs von entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Der Status des `RTCDtlsTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Der Status des `RTCIceTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Der Status des `RTCSctpTransport` hat sich geändert.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein codiertes Video- oder Audio-Frame ist bereit, um in einem Worker mit einem Transform-Stream verarbeitet zu werden.

#### Typen

- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
  - : Gibt den Zustand einer [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Instanz an.

### Identität und Sicherheit

Diese APIs werden verwendet, um Benutzeridentität und Sicherheit zu verwalten, um den Benutzer für eine Verbindung zu authentifizieren.

- [`RTCIdentityProvider`](/de/docs/Web/API/RTCIdentityProvider)
  - : Ermöglicht es einem Benutzeragenten, zu verlangen, dass eine Identitätsaussage generiert oder validiert wird.
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
  - : Repräsentiert die Identität des Remote-Peers der aktuellen Verbindung. Wenn noch kein Peer gesetzt und verifiziert wurde, gibt diese Schnittstelle `null` zurück. Einmal gesetzt, kann es nicht geändert werden.
- [`RTCIdentityProviderRegistrar`](/de/docs/Web/API/RTCIdentityProviderRegistrar)
  - : Registriert einen Identitätsanbieter (idP).
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
  - : Repräsentiert ein Zertifikat, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Authentifizierung verwendet.

### Telefonie

Diese Schnittstellen und Ereignisse stehen im Zusammenhang mit der Interaktion mit öffentlichen Telefonnetzen (PSTNs). Sie werden hauptsächlich verwendet, um Tonwahlsignale—oder Pakete, die diese Töne repräsentieren—über das Netzwerk an den Remote-Peer zu senden.

#### Schnittstellen

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
  - : Verwalten der Kodierung und Übertragung von Dual-Tone Multi-Frequency ({{Glossary("DTMF", "DTMF")}}) Signalisierung für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
  - : Wird von dem [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet, um anzuzeigen, dass ein DTMF-Ton entweder begonnen oder beendet wurde. Dieses Ereignis bläst nicht auf (außer wo es anders angegeben ist) und ist nicht abbrechbar (außer wo es anders angegeben ist).

#### Ereignisse

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Entweder ein neuer {{Glossary("DTMF", "DTMF")}} Ton hat begonnen, über die Verbindung zu spielen, oder der letzte Ton im [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) des `RTCDTMFSender` wurde gesendet und der Puffer ist jetzt leer. Der Ereignistyp ist [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent).

### Codierte Transforms

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende codierte Video- und Audioframes mithilfe eines Transform-Streams zu verarbeiten, der in einem Worker ausgeführt wird.

#### Schnittstellen

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
  - : Eine Schnittstelle zum Einsetzen von Transform-Streams, die in einem Worker in die RTC-Pipeline laufen.
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
  - : Das Worker-seitige Gegenstück eines `RTCRtpScriptTransform`, das Optionen aus dem Hauptthread zusammen mit einem lesbaren Strom und einem beschreibbaren Strom weitergibt, die verwendet werden können, um codierte Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
  - : Repräsentiert einen codierten Video-Frame, der in der RTC-Pipeline transformiert werden soll.
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
  - : Repräsentiert einen codierten Audio-Frame, der in der RTC-Pipeline transformiert werden soll.

#### Eigenschaften

- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Empfänger-Pipeline für eingehende codierte Video- und Audioframes einzufügen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Senderpipeline für ausgehende codierte Video- und Audioframes einzufügen.

#### Ereignisse

- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein RTC Transform ist bereit, im Worker ausgeführt zu werden, oder ein codiertes Video- oder Audio-Frame ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
  - : Das Real-time Transport Protocol (RTP), definiert in {{RFC(3550)}}, ist ein IETF-Standardprotokoll, um Echtzeit-Konnektivität für den Austausch von Daten zu ermöglichen, die Echtzeit-Priorität benötigen. Dieser Artikel bietet einen Überblick darüber, was RTP ist und wie es im Kontext von WebRTC funktioniert.
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel stellt die Protokolle vor, auf denen die WebRTC API aufgebaut ist.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden dafür, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen zusammen verwendet werden können, um leistungsstarke Kommunikations-Apps zu entwickeln.
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : Mit WebRTC können Sie die Peer-to-Peer-Kommunikation beliebiger Daten, Audio oder Video—oder jeder Kombination davon—in eine Browseranwendung integrieren. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, von der Herstellung der Verbindung bis hin zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.
- [Verbindung aufbauen: Das perfekte Verhandlungsmuster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfekte Verhandlung** ist ein Entwurfsmuster, das für Ihren Signalisierungsprozess empfohlen wird, das Transparenz in der Verhandlung bietet, während es beiden Seiten ermöglicht, entweder der Anbieter oder der Antwortende zu sein, ohne dass wesentliche Codierungen erforderlich sind, um zwischen den beiden zu unterscheiden.
- [Signalisierung und Zwei-Wege-Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein WebSocket-basiertes Chatsystem aus einem früheren Beispiel aufgreift und Unterstützung für das Öffnen von Videoanrufen zwischen Teilnehmern hinzufügt. Die WebSocket-Verbindung des Chat-Servers wird für die WebRTC-Signalisierung verwendet.
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, die WebRTC erfordert, dass Browser sie unterstützen, sowie die optionalen, die von verschiedenen beliebten Browsern unterstützt werden. Enthalten ist ein Leitfaden, der Ihnen hilft, die besten Codecs für Ihre Bedürfnisse auszuwählen.
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden behandelt, wie Sie eine Peer-Verbindung und einen zugehörigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTCs Unterstützung für die Interaktion mit Gateways, die mit herkömmlichen Telefonsystemen verknüpft sind, umfasst die Unterstützung zum Senden von DTMF-Tönen über die Schnittstelle [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender). Dieser Leitfaden zeigt, wie man dies tut.
- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende WebRTC-codierte Video- und Audioframes ändern kann, indem ein [`TransformStream`](/de/docs/Web/API/TransformStream) verwendet wird, der in einem Worker läuft.

## Tutorials

- [Verbesserung der Kompatibilität mit WebRTC adapter.js](#interoperabilität)
  - : Die WebRTC-Organisation [bietet auf GitHub den WebRTC-Adapter](https://github.com/webrtc/adapter/), um Kompatibilitätsprobleme in den WebRTC-Implementierungen verschiedener Browser zu umgehen. Der Adapter ist ein JavaScript-Shim, der es Ihrem Code ermöglicht, gemäß der Spezifikation geschrieben zu werden, sodass er in allen WebRTC-unterstützten Browsern einfach funktioniert.
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Die Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist eine Funktion, die es ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den beliebige Daten gesendet und empfangen werden können. Die API ist absichtlich ähnlich wie die [WebSocket-API](/de/docs/Web/API/WebSockets_API), sodass dasselbe Programmiermodell für beide verwendet werden kann.
- [Bau eines internetfähigen Telefons mit Peer.js](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Dieses Tutorial ist eine Schritt-für-Schritt-Anleitung zum Bau eines Telefons mit Peer.js

## Spezifikationen

{{Specifications}}

### WebRTC-bezogene Protokolle

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
- [Firefox multistream und Neuverhandlung für Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Durch den WebRTC-Nebel mit SocketPeer blicken](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Aufbau einer Web-App mit mehreren Live-Video-Streams + interaktive Grafiken](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [Web-Medientechnologien](/de/docs/Web/Media)
