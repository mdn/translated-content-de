---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und -seiten ermöglicht, Audio- und/oder Videomedien zu erfassen und optional zu streamen sowie beliebige Daten zwischen Browsern auszutauschen, ohne dass ein Vermittler erforderlich ist. Der Satz von Standards, der WebRTC ausmacht, erlaubt es, Daten zu teilen und Videokonferenzen peer-to-peer durchzuführen, ohne dass Benutzer Plug-ins oder andere Software von Drittanbietern installieren müssen.

WebRTC besteht aus mehreren miteinander verbundenen APIs und Protokollen, die zusammenarbeiten, um dies zu erreichen. Die hier enthaltene Dokumentation hilft Ihnen, die Grundlagen von WebRTC zu verstehen, wie Sie Daten- und Medienverbindungen einrichten und nutzen und vieles mehr.

## Konzepte und Nutzung von WebRTC

WebRTC hat mehrere Zwecke; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bieten sie leistungsstarke Multimedia-Fähigkeiten im Web, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsmanagement und die Verbindung mit älteren Telefonsystemen einschließlich Unterstützung zum Senden von {{Glossary("DTMF", "DTMF")}} (Tonwahl) Signalen. Verbindungen zwischen Peers können hergestellt werden, ohne dass spezielle Treiber oder Plug-ins erforderlich sind, und oft ohne dass Vermittlungsserver benötigt werden.

Verbindungen zwischen zwei Peers werden durch das Interface [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) dargestellt. Sobald eine Verbindung mit `RTCPeerConnection` hergestellt und geöffnet wurde, können Medienstreams ([`MediaStream`](/de/docs/Web/API/MediaStream)s) und/oder Datenkanäle ([`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s) zur Verbindung hinzugefügt werden.

Medienstreams können aus einer beliebigen Anzahl von Spuren mit Medieninformationen bestehen; Spuren, die durch Objekte basierend auf dem Interface [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dargestellt werden, können eine der vielen Arten von Mediendaten enthalten, einschließlich Audio, Video und Text (wie Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einer Audiospur und wahrscheinlich auch einer Videospur und können verwendet werden, um sowohl Live-Medien als auch gespeicherte Mediendaten (wie einen gestreamten Film) zu senden und zu empfangen.

Sie können auch die Verbindung zwischen zwei Peers nutzen, um beliebige Binärdaten auszutauschen, indem Sie das Interface [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden. Dies kann für Back-Channel-Informationen, Metadaten-Austausch, Spielstatuspakete, Dateitransfers oder sogar als primärer Kanal für die Datenübertragung eingesetzt werden.

### Interoperabilität

WebRTC wird im Allgemeinen gut von modernen Browsern unterstützt, aber einige Inkompatibilitäten bestehen weiterhin. Die [adapter.js](https://github.com/webrtcHacks/adapter) Bibliothek ist ein Shim, um Apps vor diesen Inkompatibilitäten zu schützen.

## WebRTC Referenz

Da WebRTC Schnittstellen bereitstellt, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erledigen, haben wir die Referenz nach Kategorie unterteilt. Bitte sehen Sie sich die Sidebar für eine alphabetische Liste an.

### Verbindungseinrichtung und -management

Diese Schnittstellen, Wörterbücher und Typen werden verwendet, um WebRTC-Verbindungen einzurichten, zu öffnen und zu verwalten. Dazu gehören Schnittstellen, die Peer-Medienverbindungen, Datenkanäle und Schnittstellen repräsentieren, die verwendet werden, um Informationen über die Fähigkeiten jedes Peers auszutauschen, um die bestmögliche Konfiguration für eine Zwei-Wege-Medienverbindung auszuwählen.

#### Schnittstellen

- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Es wird verwendet, um eine effiziente Übertragung von Daten zwischen den beiden Peers zu handhaben.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Repräsentiert einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung.
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
  - : Repräsentiert Ereignisse, die auftreten, während ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wird. Das einzige Ereignis, das mit dieser Schnittstelle gesendet wird, ist [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event).
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
  - : Stellt die Parameter einer Sitzung dar. Jede `RTCSessionDescription` besteht aus einer Beschreibung des [`type`](/de/docs/Web/API/RTCSessionDescription/type), der angibt, welchen Teil des Angebots/Antwortverhandlungsprozesses sie beschreibt, und des {{Glossary("SDP", "SDP")}}-Descriptors der Sitzung.
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
  - : Bietet Informationen, die Statistiken für eine Verbindung oder für eine einzelne Spur auf der Verbindung detailliert darlegen; der Bericht kann durch Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) erhalten werden.
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)
  - : Repräsentiert einen Kandidaten für einen Interactive Connectivity Establishment ({{Glossary("ICE", "ICE")}}) Server zur Einrichtung einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)
  - : Stellt Informationen über einen {{Glossary("ICE", "ICE")}} Transport dar.
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
  - : Repräsentiert Ereignisse, die in Bezug auf ICE-Kandidaten mit dem Ziel auftreten, normalerweise eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Nur ein Ereignis ist dieses Typs: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : Verwaltet die Kodierung und Übertragung von Daten für eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : Verwaltet den Empfang und die Dekodierung von Daten für eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)
  - : Die Schnittstelle, die ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis darstellt, das anzeigt, dass ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt wurde, womit ein neuer eingehender [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt und zur `RTCPeerConnection` hinzugefügt wurde.
- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
  - : Bietet Informationen, die einen Stream Control Transmission Protocol (**{{Glossary("SCTP", "SCTP")}}**) Transport beschreiben und bietet auch eine Möglichkeit, auf den darunterliegenden Datagram Transport Layer Security (**{{Glossary("DTLS", "DTLS")}}**) Transport zuzugreifen, über den SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Die Menge an Daten, die derzeit vom Datenkanal gepuffert werden—wie durch seine [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount)-Eigenschaft angegeben—wurde verringert, um unter die minimale gepufferte Datenmenge des Kanals zu fallen, wie durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) angegeben.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Der Datenkanal hat den Schließvorgang abgeschlossen und ist nun im `closed`-Status. Sein zugrunde liegender Datentransport ist zu diesem Zeitpunkt vollständig geschlossen. Sie können benachrichtigt werden, _bevor_ das Schließen abgeschlossen ist, indem Sie das `closing`-Ereignis überwachen.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Der `RTCDataChannel` hat den `closing`-Status erreicht, was anzeigt, dass er bald geschlossen wird. Sie können den Abschluss des Schließvorgangs erkennen, indem Sie nach dem `close`-Ereignis suchen.
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Der Verbindungszustand, der über [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) zugänglich ist, hat sich geändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Ein neuer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist verfügbar, nachdem der entfernte Peer einen neuen Datenkanal geöffnet hat. Der Typ dieses Ereignisses ist [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent).
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) zeigt an, dass auf dem Datenkanal ein Fehler aufgetreten ist.
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) zeigt an, dass auf dem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) ein Fehler aufgetreten ist. Dieser Fehler wird entweder `dtls-failure` oder `fingerprint-failure` sein.
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Der Erfassungsstatus des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) hat sich geändert.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das immer gesendet wird, wenn das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der zum lokalen Peer hinzugefügt werden muss, indem [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), der anzeigt, dass ein Fehler bei der Erfassung von ICE-Kandidaten aufgetreten ist.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der ICE-Verbindungsstatus—im [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) Eigenschaft—ändert.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich ihr ICE-Erfassungsstatus—im [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) Eigenschaft—ändert.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Der Ereignistyp ist [`MessageEvent`](/de/docs/Web/API/MessageEvent).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Informiert die `RTCPeerConnection`, dass eine Sitzungsverhandlung erforderlich ist, indem [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) gefolgt von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Der zugrunde liegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder wieder geöffnet.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Das derzeit ausgewählte Paar von ICE-Kandidaten hat sich für das `RTCIceTransport`, auf dem das Ereignis ausgelöst wird, geändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Das `track`-Ereignis, vom Typ [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent), wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn nach erfolgreicher Verhandlung des Medienstreams ein neuer Track zur Verbindung hinzugefügt wird.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird an die Peer-Verbindung gesendet, wenn sich ihr [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) geändert hat. Dies geschieht als Ergebnis eines Anrufs von entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Der Zustand des `RTCDtlsTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Der Zustand des `RTCIceTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Der Zustand des `RTCSctpTransport` hat sich geändert.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein kodierter Video- oder Audio-Frame ist bereit, mit einem Transform-Stream in einem Worker verarbeitet zu werden.

#### Typen

- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
  - : Zeigt den Zustand eines [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport) Instanz an.

### Identität und Sicherheit

Diese APIs werden verwendet, um die Benutzeridentität und Sicherheit zu verwalten, um den Benutzer für eine Verbindung zu authentifizieren.

- [`RTCIdentityProvider`](/de/docs/Web/API/RTCIdentityProvider)
  - : Ermöglicht es einem Benutzeragenten, die Erstellung oder Validierung einer Identitätsbehauptung anzufordern.
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
  - : Repräsentiert die Identität des entfernten Peers der aktuellen Verbindung. Wenn noch kein Peer gesetzt und verifiziert wurde, gibt diese Schnittstelle `null` zurück. Wenn sie einmal gesetzt ist, kann sie nicht geändert werden.
- [`RTCIdentityProviderRegistrar`](/de/docs/Web/API/RTCIdentityProviderRegistrar)
  - : Registriert einen Identitätsanbieter (idP).
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
  - : Repräsentiert ein Zertifikat, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Authentifizierung verwendet.

### Telefonie

Diese Schnittstellen und Ereignisse beziehen sich auf die Interaktivität mit Public-Switched Telephone Networks (PSTNs). Sie werden hauptsächlich verwendet, um Tondialtonsounds—oder Pakete, die diese Töne repräsentieren—über das Netzwerk an den entfernten Peer zu senden.

#### Schnittstellen

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
  - : Verwaltet die Kodierung und Übertragung von Dual-Tone Multi-Frequency ({{Glossary("DTMF", "DTMF")}}) Signalen für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
  - : Wird von dem [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignis verwendet, um anzuzeigen, dass ein DTMF-Ton entweder begonnen oder beendet wurde. Dieses Ereignis steigt nicht auf (außer wenn anders angegeben) und kann nicht abgebrochen werden (außer wenn anders angegeben).

#### Ereignisse

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Entweder hat ein neuer {{Glossary("DTMF", "DTMF")}} Ton über die Verbindung zu spielen begonnen, oder der letzte Ton im `RTCDTMFSender`'s [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) wurde gesendet und der Puffer ist jetzt leer. Der Ereignistyp ist [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent).

### Kodierte Transforms

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende kodierte Video- und Audio-Frames mit einem Transform-Stream zu verarbeiten, der in einem Worker läuft.

#### Schnittstellen

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
  - : Eine Schnittstelle zum Einfügen von Transform-Streams, die in einem Worker in die RTC-Pipeline laufen.
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
  - : Das Gegenstück auf der Worker-Seite zu einem `RTCRtpScriptTransform`, das Optionen aus dem Haupt-Thread, zusammen mit einem lesbaren Stream und einem beschreibbaren Stream übergibt, der zum Durchleiten der kodierten Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) verwendet werden kann.
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
  - : Repräsentiert einen kodierten Video-Frame, der in der RTC-Pipeline transformiert werden soll.
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
  - : Repräsentiert einen kodierten Audio-Frame, der in der RTC-Pipeline transformiert werden soll.

#### Eigenschaften

- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Empfänger-Pipeline für eingehende kodierte Video- und Audio-Frames einzufügen.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Sender-Pipeline für ausgehende kodierte Video- und Audio-Frames einzufügen.

#### Ereignisse

- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein RTC-Transform ist bereit, im Worker ausgeführt zu werden, oder ein kodierter Video- oder Audio-Frame ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC-API basiert.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen zusammen genutzt werden können, um leistungsstarke Kommunikationsanwendungen zu erstellen.
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC ermöglicht es Ihnen, Peer-to-Peer-Kommunikation von beliebigen Daten, Audio oder Video—in jedem beliebigen Kombination—in eine Browseranwendung zu integrieren. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, von der Herstellung der Verbindung bis zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.
- [Eine Verbindung herstellen: Das perfekte Verhandlungsmuster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfekte Verhandlung** ist ein Designmuster, das für Ihren Signalisierungsprozess empfohlen wird. Es sorgt für Transparenz bei der Verhandlung, während es beiden Seiten ermöglicht, entweder der Anbieter oder der Annehmende zu sein, ohne dass signifikante Codierung erforderlich ist, um die beiden zu unterscheiden.
- [Signalisierung und Zwei-Wege-Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein auf WebSockets basierendes Chatsystem, das für ein früheres Beispiel erstellt wurde, um Unterstützung für das Öffnen von Videoanrufen unter Teilnehmern erweitert. Die WebSocket-Verbindung des Chat-Servers wird für die WebRTC-Signalisierung verwendet.
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, die WebRTC erfordert, dass Browser sie unterstützen, sowie die optionalen, die von verschiedenen populären Browsern unterstützt werden. Eingeschlossen ist ein Leitfaden, der Ihnen hilft, die besten Codecs für Ihre Bedürfnisse auszuwählen.
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden behandelt, wie Sie eine Peer-Verbindung und einen zugehörigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) nutzen können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [Verwendung von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : Die Unterstützung von WebRTC für die Interaktion mit Gateways, die mit traditionellen Telefonsystemen verbinden, umfasst die Möglichkeit, DTMF-Töne zu senden, indem die Schnittstelle [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) verwendet wird. Dieser Leitfaden zeigt, wie das geht.
- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende WebRTC-kodierte Video- und Audio-Frames modifizieren kann, indem ein [`TransformStream`](/de/docs/Web/API/TransformStream) in einem Worker ausgeführt wird.

## Anleitungen

- [Kompatibilität verbessern mit WebRTC adapter.js](#interoperabilität)
  - : Die WebRTC-Organisation [stellt auf GitHub den WebRTC-Adapter](https://github.com/webrtc/adapter/) zur Verfügung, um Kompatibilitätsprobleme in den WebRTC-Implementierungen verschiedener Browser zu umgehen. Der Adapter ist ein JavaScript-Shim, das es ermöglicht, Ihren Code so zu schreiben, dass er den Spezifikationen entspricht und in allen Browsern mit WebRTC-Unterstützung "einfach funktioniert".
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Das Interface [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist eine Funktion, die es Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich ähnlich zur [WebSocket API](/de/docs/Web/API/WebSockets_API), sodass dasselbe Programmiermodell für beide verwendet werden kann.
- [Ein Internet-verbundenes Telefon mit Peer.js bauen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Dieses Tutorial ist eine Schritt-für-Schritt-Anleitung, wie man ein Telefon mit Peer.js baut.

## Spezifikationen

{{Specifications}}

### WebRTC-eigene Protokolle

- [Application Layer Protocol Negotiation für Web Real-Time Communications](https://datatracker.ietf.org/doc/rfc8833/)
- [Anforderungen an WebRTC Audio Codec und Processing](https://datatracker.ietf.org/doc/rfc7874/)
- [RTCWeb Data Channels](https://datatracker.ietf.org/doc/rfc8831/)
- [RTCWeb Data Channel Protocol](https://datatracker.ietf.org/doc/rfc8832/)
- [Web Real-Time Communication (WebRTC): Media Transport und Nutzung von RTP](https://datatracker.ietf.org/doc/rfc8834/)
- [WebRTC Sicherheitsarchitektur](https://datatracker.ietf.org/doc/rfc8827/)
- [Transports für RTCWEB](https://datatracker.ietf.org/doc/rfc8835/)

### Verwandte unterstützende Protokolle

- [Interactive Connectivity Establishment (ICE): Ein Protokoll für Netzadressübersetzer (NAT) Traversal für Offer/Answer Protokoll](https://datatracker.ietf.org/doc/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc5389)
- [URI Schema für das Session Traversal Utilities for NAT (STUN) Protokoll](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://datatracker.ietf.org/doc/html/rfc7065)
- [Ein Offer/Answer Modell mit Session Description Protocol (SDP)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN) Erweiterung für Drittpartei-Autorisierung](https://datatracker.ietf.org/doc/rfc7635/)

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
