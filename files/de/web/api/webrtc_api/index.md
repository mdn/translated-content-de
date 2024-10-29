---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und Websites ermöglicht, Audio- und/oder Videomedien zu erfassen und optional zu streamen sowie beliebige Daten zwischen Browsern ohne Zwischeninstanz auszutauschen. Der Satz von Standards, der WebRTC umfasst, ermöglicht es, Daten zu teilen und Peer-to-Peer-Telekonferenzen durchzuführen, ohne dass der Benutzer Plug-Ins oder eine andere Drittanbieter-Software installieren muss.

WebRTC besteht aus mehreren miteinander verbundenen APIs und Protokollen, die zusammenarbeiten, um dies zu erreichen. Die hier vorhandene Dokumentation hilft Ihnen dabei, die Grundlagen von WebRTC zu verstehen, wie Sie sowohl Daten- als auch Medienverbindungen einrichten und verwenden können, und vieles mehr.

## WebRTC-Konzepte und Nutzung

WebRTC erfüllt mehrere Zwecke; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bieten sie leistungsstarke Multimedia-Fähigkeiten für das Web, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsmanagement und Schnittstellen zu älteren Telefonsystemen, einschließlich Unterstützung für das Senden von {{Glossary("DTMF", "DTMF")}} (Tonwahl) Signalen. Verbindungen zwischen Peers können ohne spezielle Treiber oder Plug-Ins hergestellt werden und oft auch ohne Zwischenserver.

Verbindungen zwischen zwei Peers werden durch das Interface [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) dargestellt. Sobald eine Verbindung mit `RTCPeerConnection` etabliert und geöffnet wurde, können Medienstreams ([`MediaStream`](/de/docs/Web/API/MediaStream)s) und/oder Datenkanäle ([`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s) zur Verbindung hinzugefügt werden.

Medienstreams können aus einer beliebigen Anzahl von Medienspuren bestehen; Spuren, die durch Objekte basierend auf dem Interface [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) repräsentiert werden, können eine von mehreren Arten von Mediendaten enthalten, einschließlich Audio, Video und Text (wie Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einer Audiospur und wahrscheinlich auch einer Videospur und können sowohl Live-Medien als auch gespeicherte Mediendaten (wie einen gestreamten Film) senden und empfangen.

Sie können auch die Verbindung zwischen zwei Peers nutzen, um beliebige binäre Daten über das Interface [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) auszutauschen. Dies kann für Backchannel-Informationen, Metadatenaustausch, Spielstatuspakete, Dateitransfers oder sogar als Hauptkanal für den Datentransfer verwendet werden.

### Interoperabilität

WebRTC wird im Allgemeinen gut in modernen Browsern unterstützt, es bleiben jedoch einige Inkompatibilitäten. Die [adapter.js](https://github.com/webrtcHacks/adapter) Bibliothek ist ein Shim, um Apps vor diesen Inkompatibilitäten zu schützen.

## WebRTC-Referenz

Da WebRTC Schnittstellen bereitstellt, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erfüllen, haben wir die Referenzen nach Kategorien aufgeteilt. Bitte sehen Sie in der Seitenleiste für eine alphabetische Liste nach.

### Verbindungsaufbau und -verwaltung

Diese Schnittstellen, Wörterbücher und Typen werden verwendet, um WebRTC-Verbindungen einzurichten, zu öffnen und zu verwalten. Enthalten sind Schnittstellen, die Peer-Medienverbindungen, Datenkanäle und Schnittstellen darstellen, die verwendet werden, um Informationen über die Fähigkeiten jedes Peers auszutauschen, um die bestmögliche Konfiguration für eine Zwei-Wege-Medienverbindung auszuwählen.

#### Schnittstellen

- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Es wird verwendet, um effizientes Streaming von Daten zwischen den beiden Peers zu handhaben.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Repräsentiert einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung.
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
  - : Repräsentiert Ereignisse, die beim Anfügen eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftreten. Das einzige Ereignis, das mit diesem Interface gesendet wird, ist [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event).
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
  - : Repräsentiert die Parameter einer Sitzung. Jede `RTCSessionDescription` besteht aus einer Beschreibung [`type`](/de/docs/Web/API/RTCSessionDescription/type), die angibt, welcher Teil des Offer/Answer-Negotiationsprozesses beschrieben wird, und aus dem {{Glossary("SDP", "SDP")}}-Deskriptor der Sitzung.
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
  - : Bietet Informationen zu Statistiken für eine Verbindung oder für eine einzelne Spur in der Verbindung; der Bericht kann durch Aufrufen von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) abgerufen werden.
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)
  - : Repräsentiert einen Kandidaten für den Aufbau einer interaktiven Verbindungsherstellung ({{Glossary("ICE", "ICE")}})-Server für die Etablierung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)
  - : Repräsentiert Informationen über einen {{Glossary("ICE", "ICE")}}-Transport.
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
  - : Repräsentiert Ereignisse, die im Zusammenhang mit ICE-Kandidaten mit dem Ziel auftreten, in der Regel eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Nur ein Ereignis dieser Art existiert: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : Verwalten das Kodieren und die Übertragung von Daten für eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : Verwalten den Empfang und das Dekodieren von Daten für eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)
  - : Das Interface, das ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis darstellt, welches angibt, dass ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt hinzugefügt wurde, was darauf hinweist, dass eine neue eingehende [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt und zur `RTCPeerConnection` hinzugefügt wurde.
- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
  - : Bietet Informationen, die ein Stream Control Transmission Protocol (**{{Glossary("SCTP", "SCTP")}}**)-Transport beschreiben und bietet auch eine Möglichkeit, auf den zugrunde liegenden Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**)-Transport zuzugreifen, über den SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Die Menge an aktuell vom Datenkanal gepufferten Daten – wie durch seine [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) Eigenschaft angezeigt – ist auf oder unter die minimale gepufferte Datengröße des Kanals gefallen, wie durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) spezifiziert.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Der Datenkanal hat den Schließvorgang abgeschlossen und befindet sich jetzt im `closed`-Zustand. Sein zugrunde liegendes Datentransport ist zu diesem Zeitpunkt vollständig geschlossen. Sie können über das bevorstehende Schließen benachrichtigt werden, indem Sie stattdessen das `closing`-Ereignis überwachen.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Der `RTCDataChannel` ist in den `closing`-Zustand übergegangen, was darauf hinweist, dass er bald geschlossen wird. Sie können das Abschließen des Schließvorgangs feststellen, indem Sie das `close`-Ereignis überwachen.
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Der Zustand der Verbindung, auf die über [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) zugegriffen werden kann, hat sich geändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Ein neuer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist verfügbar, nachdem der entfernte Peer einen neuen Datenkanal geöffnet hat. Der Typ dieses Ereignisses ist [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent).
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das anzeigt, dass ein Fehler im Datenkanal aufgetreten ist.
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das anzeigt, dass ein Fehler im [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) aufgetreten ist. Dieser Fehler wird entweder `dtls-failure` oder `fingerprint-failure` sein.
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Der Erfassungszustand des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) hat sich geändert.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das gesendet wird, wann immer das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der dem lokalen Peer durch Aufruf von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) hinzugefügt werden muss.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), das darauf hinweist, dass ein Fehler beim Sammeln von ICE-Kandidaten aufgetreten ist.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Verbindungszustand – der in der [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft zu finden ist – ändert.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Erfassungszustand – der in der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState)-Eigenschaft zu finden ist – ändert.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Das Ereignis ist vom Typ [`MessageEvent`](/de/docs/Web/API/MessageEvent).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Informiert die `RTCPeerConnection`, dass eine Sitzungsverhandlung durchgeführt werden muss, indem [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) gefolgt von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Der zugrundeliegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder wieder geöffnet.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Das aktuell ausgewählte Paar von ICE-Kandidaten hat sich für den `RTCIceTransport`, auf dem das Ereignis ausgelöst wird, geändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Das `track`-Ereignis vom Typ [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn ein neuer Track zur Verbindung nach erfolgreicher Verhandlung des Medienstreamings hinzugefügt wird.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird an die Peer-Verbindung gesendet, wenn sich ihr [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) geändert hat. Dies geschieht als Ergebnis eines Aufrufs von entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Der Zustand des `RTCDtlsTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Der Zustand des `RTCIceTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Der Zustand des `RTCSctpTransport` hat sich geändert.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein kodierter Video- oder Audio-Frame ist bereit, mit einem Transformstream in einem Worker verarbeitet zu werden.

#### Typen

- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
  - : Gibt den Zustand einer [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Instanz an.

### Identität und Sicherheit

Diese APIs werden verwendet, um Benutzeridentität und Sicherheit zu verwalten, um den Benutzer für eine Verbindung zu authentifizieren.

- [`RTCIdentityProvider`](/de/docs/Web/API/RTCIdentityProvider)
  - : Ermöglicht einem User Agent die Anforderung, dass eine Identitätsbehauptung generiert oder validiert wird.
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
  - : Gibt die Identität des entfernten Peers der aktuellen Verbindung an. Wenn noch kein Peer festgelegt und überprüft wurde, gibt dieses Interface `null` zurück. Einmal festgelegt, kann es nicht geändert werden.
- [`RTCIdentityProviderRegistrar`](/de/docs/Web/API/RTCIdentityProviderRegistrar)
  - : Registriert einen Identitätsprovider (idP).
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
  - : Repräsentiert ein Zertifikat, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Authentifizierung verwendet.

### Telefonie

Diese Schnittstellen und Ereignisse stehen im Zusammenhang mit der Interaktivität mit öffentlichen Telefonnetzen (PSTNs). Sie werden hauptsächlich verwendet, um Tonsignale – oder Pakete, die diese Töne darstellen – über das Netzwerk an den entfernten Peer zu senden.

#### Schnittstellen

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
  - : Verwalten das Kodieren und die Übertragung von Mehrfrequenzwahlverfahren ({{Glossary("DTMF", "DTMF")}})-Signalen für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
  - : Wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignis verwendet, um anzuzeigen, dass ein DTMF-Ton entweder begonnen oder geendet hat. Dieses Ereignis „blubbert“ nicht (außer wo anders angegeben) und kann nicht abgebrochen werden (außer wo anders angegeben).

#### Ereignisse

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Ein neuer {{Glossary("DTMF", "DTMF")}}-Ton hat begonnen, über die Verbindung abzuspielen, oder der letzte Ton im [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) des `RTCDTMFSenders` wurde gesendet und der Puffer ist jetzt leer. Der Ereignistyp ist [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent).

### Kodierte Transformationen

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende kodierte Video- und Audio-Frames mithilfe eines Transformstreams zu verarbeiten, der in einem Worker läuft.

#### Schnittstellen

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
  - : Eine Schnittstelle zum Einfügen von Transformstreams, die in einem Worker laufen, in die RTC-Pipeline.
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
  - : Das auf der Worker-Seite befindliche Gegenstück eines `RTCRtpScriptTransform`, das Optionen vom Hauptthread übermittelt, zusammen mit einem lesbaren Stream und einem beschreibbaren Stream, die verwendet werden können, um kodierte Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
  - : Repräsentiert ein kodiertes Video-Frame, das in der RTC-Pipeline transformiert werden soll.
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
  - : Repräsentiert ein kodiertes Audio-Frame, das in der RTC-Pipeline transformiert werden soll.

#### Eigenschaften

- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Eine Eigenschaft zur Einfügung eines Transformstreams in die Receiver-Pipeline für eingehende kodierte Video- und Audio-Frames.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Eine Eigenschaft zur Einfügung eines Transformstreams in die Sender-Pipeline für ausgehende kodierte Video- und Audio-Frames.

#### Ereignisse

- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Eine RTC-Transformation ist bereit, im Worker zu laufen, oder ein kodiertes Video- oder Audio-Frame ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC API aufgebaut ist.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen zusammen verwendet werden können, um leistungsstarke Kommunikations-Apps zu erstellen.
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC ermöglicht es Ihnen, Peer-to-Peer-Kommunikation von beliebigen Daten, Audio oder Video – oder beliebige Kombinationen davon – in eine Browseranwendung zu integrieren. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, vom Aufbau der Verbindung bis zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.
- [Verbindung aufbauen: Das perfekte Verhandlungsmuster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfekte Verhandlung** ist ein Designmuster, das empfohlen wird, um den Signalisierungsprozess zu folgen, der Transparenz bei der Verhandlung bietet und es beiden Seiten ermöglicht, entweder der Anfragende oder der Antwortende zu sein, ohne signifikanten Programmieraufwand zur Unterscheidung der beiden.
- [Signalisierung und Zwei-Wege-Video-Anrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein auf WebSocket basierendes Chat-System, das für ein früheres Beispiel erstellt wurde, erweitert, indem die Unterstützung für das Öffnen von Videoanrufen zwischen Teilnehmern hinzugefügt wird. Die WebSocket-Verbindung des Chat-Servers wird für die WebRTC-Signalisierung verwendet.
- [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, die WebRTC erfordert, dass Browser unterstützen, sowie die optionalen, die von verschiedenen beliebten Browsern unterstützt werden. Ein Leitfaden, der Ihnen hilft, die besten Codecs für Ihre Bedürfnisse auszuwählen, ist enthalten.
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden behandelt, wie Sie eine Peer-Verbindung und einen dazugehörigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTC's Unterstützung für die Interaktion mit Gateways, die mit Altsystemen verbunden sind, umfasst die Unterstützung für das Senden von DTMF-Tönen über das Interface [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender). Dieser Leitfaden zeigt, wie dies gemacht werden kann.
- [Verwendung von WebRTC-Kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende WebRTC-kodierte Video- und Audio-Frames modifizieren kann, indem ein [`TransformStream`](/de/docs/Web/API/TransformStream) in einen Worker ausgeführt wird.

## Tutorials

- [Verbesserung der Kompatibilität mit WebRTC adapter.js](#interoperabilität)
  - : Die WebRTC-Organisation [stellt auf GitHub den WebRTC-Adapter bereit](https://github.com/webrtc/adapter/), um Kompatibilitätsprobleme in den unterschiedlichen WebRTC-Implementierungen von Browsern zu umgehen. Der Adapter ist ein JavaScript-Shim, mit dem Ihr Code gemäß der Spezifikation geschrieben werden kann, sodass er in allen Browsern mit WebRTC-Unterstützung "einfach funktioniert".
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interface ist eine Funktion, mit der Sie einen Kanal zwischen zwei Peers öffnen können, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich der [WebSocket API](/de/docs/Web/API/WebSockets_API), sodass dasselbe Programmiermodell für beide verwendet werden kann.
- [Erstellen eines internetverbundenen Telefons mit Peer.js](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Dieses Tutorial ist eine Schritt-für-Schritt-Anleitung, wie man ein Telefon mit Peer.js baut.

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
- [Web-Medien-Technologien](/de/docs/Web/Media)
