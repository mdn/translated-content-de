---
title: WebRTC API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 9c560a9d9de6f663ada0c1bebaf93a3c76e0901d
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und Websites ermöglicht, Audio- und/oder Videomedien zu erfassen und optional zu streamen sowie beliebige Daten ohne einen Vermittler zwischen Browsern auszutauschen. Die Gesamtheit der Standards, aus denen WebRTC besteht, ermöglicht es, Daten auszutauschen und Telefonkonferenzen per Peer-to-Peer durchzuführen, ohne dass Benutzer Plug-ins oder andere Drittanbietersoftware installieren müssen.

WebRTC besteht aus mehreren miteinander verbundenen APIs und Protokollen, die zusammenarbeiten, um dies zu ermöglichen. Die hier bereitgestellte Dokumentation hilft Ihnen dabei, die Grundlagen von WebRTC zu verstehen, Daten- und Medienverbindungen einzurichten und zu verwenden und mehr.

## WebRTC-Konzepte und Verwendung

WebRTC dient mehreren Zwecken; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) stellt es dem Web leistungsfähige Multimediafunktionen bereit, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsverwaltung sowie die Anbindung an ältere Telefonsysteme, einschließlich Unterstützung für das Senden von {{Glossary("DTMF", "DTMF")}}-Signalen (Tonwahl). Verbindungen zwischen Peers können ohne spezielle Treiber oder Plug-ins hergestellt werden und oft auch ohne zwischengeschaltete Server.

Verbindungen zwischen zwei Peers werden durch die Schnittstelle [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) dargestellt. Sobald eine Verbindung mit `RTCPeerConnection` hergestellt und geöffnet wurde, können Medienstreams ([`MediaStream`](/de/docs/Web/API/MediaStream)s) und/oder Datenkanäle ([`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)s) zur Verbindung hinzugefügt werden.

Medienstreams können aus einer beliebigen Anzahl von Spuren mit Medieninformationen bestehen; Spuren, die durch Objekte auf Grundlage der Schnittstelle [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dargestellt werden, können einen von mehreren Medientypen enthalten, darunter Audio, Video und Text (etwa Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einer Audiospur und wahrscheinlich auch einer Videospur und können zum Senden und Empfangen sowohl von Live-Medien als auch gespeicherten Medieninformationen (etwa eines gestreamten Films) verwendet werden.

Sie können die Verbindung zwischen zwei Peers auch verwenden, um über die Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) beliebige Binärdaten auszutauschen. Dies kann für Rückkanalinformationen, den Austausch von Metadaten, Spielstatuspakete, Dateiübertragungen oder sogar als primärer Kanal für die Datenübertragung verwendet werden.

### Interoperabilität

WebRTC wird im Allgemeinen von modernen Browsern gut unterstützt, es bestehen jedoch noch einige Inkompatibilitäten. Die Bibliothek [adapter.js](https://github.com/webrtcHacks/adapter) ist ein Shim, der Anwendungen von diesen Inkompatibilitäten abschirmt.

## WebRTC-Referenz

Da WebRTC Schnittstellen bereitstellt, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erledigen, haben wir die Referenz nach Kategorien unterteilt. Eine alphabetische Liste finden Sie in der Seitenleiste.

### Einrichtung und Verwaltung von Verbindungen

Diese Schnittstellen, Dictionaries und Typen werden verwendet, um WebRTC-Verbindungen einzurichten, zu öffnen und zu verwalten. Enthalten sind Schnittstellen, die Peer-Medienverbindungen und Datenkanäle darstellen, sowie Schnittstellen, die beim Austausch von Informationen über die Fähigkeiten jedes Peers verwendet werden, um die bestmögliche Konfiguration für eine bidirektionale Medienverbindung auszuwählen.

#### Schnittstellen

- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
  - : Stellt eine WebRTC-Verbindung zwischen dem lokalen Computer und einem Remote-Peer dar. Sie wird zur effizienten Übertragung von Daten zwischen den beiden Peers verwendet.
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
  - : Stellt einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung dar.
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
  - : Stellt Ereignisse dar, die beim Anfügen eines [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auftreten. Das einzige mit dieser Schnittstelle gesendete Ereignis ist [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event).
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
  - : Stellt die Parameter einer Sitzung dar. Jede `RTCSessionDescription` besteht aus einem Beschreibungstyp [`type`](/de/docs/Web/API/RTCSessionDescription/type), der angibt, welchen Teil des Offer/Answer-Aushandlungsprozesses sie beschreibt, sowie aus dem {{Glossary("SDP", "SDP")}}-Deskriptor der Sitzung.
- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
  - : Stellt Informationen mit Statistiken für eine Verbindung oder für eine einzelne Spur der Verbindung bereit; der Bericht kann durch Aufrufen von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) abgerufen werden.
- [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)
  - : Stellt eine mögliche Interactive-Connectivity-Establishment-Konfiguration ({{Glossary("ICE", "ICE")}}) zum Herstellen einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) dar.
- [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)
  - : Stellt Informationen über einen {{Glossary("ICE", "ICE")}}-Transport dar.
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
  - : Stellt Ereignisse dar, die sich auf ICE-Kandidaten mit dem Ziel, üblicherweise einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), beziehen. Es gibt nur ein Ereignis dieses Typs: [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : Verwaltet die Kodierung und Übertragung von Daten für eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : Verwaltet den Empfang und die Dekodierung von Daten für eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)
  - : Die Schnittstelle zur Darstellung eines [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisses, das angibt, dass ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt zum [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt hinzugefügt wurde. Dies zeigt an, dass eine neue eingehende [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erstellt und zur `RTCPeerConnection` hinzugefügt wurde.
- [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)
  - : Stellt Informationen bereit, die einen Stream Control Transmission Protocol- (**{{Glossary("SCTP", "SCTP")}}**) Transport beschreiben, und bietet außerdem eine Möglichkeit, auf den zugrunde liegenden Datagram Transport Layer Security- (**{{Glossary("DTLS", "DTLS")}}**) Transport zuzugreifen, über den SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- [`bufferedamountlow`](/de/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - : Die derzeit vom Datenkanal gepufferte Datenmenge – wie durch seine Eigenschaft [`bufferedAmount`](/de/docs/Web/API/RTCDataChannel/bufferedAmount) angegeben – ist auf die Mindestgröße gepufferter Daten des Kanals oder darunter gesunken, wie durch [`bufferedAmountLowThreshold`](/de/docs/Web/API/RTCDataChannel/bufferedAmountLowThreshold) festgelegt.
- [`close`](/de/docs/Web/API/RTCDataChannel/close_event)
  - : Der Datenkanal hat den Schließvorgang abgeschlossen und befindet sich nun im Zustand `closed`. Sein zugrunde liegender Datentransport ist zu diesem Zeitpunkt vollständig geschlossen. Sie können vor Abschluss des Schließvorgangs benachrichtigt werden, indem Sie stattdessen auf das Ereignis `closing` warten.
- [`closing`](/de/docs/Web/API/RTCDataChannel/closing_event)
  - : Der `RTCDataChannel` ist in den Zustand `closing` übergegangen, was darauf hinweist, dass er bald geschlossen wird. Sie können den Abschluss des Schließvorgangs erkennen, indem Sie auf das Ereignis `close` warten.
- [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Der Zustand der Verbindung, auf den über [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) zugegriffen werden kann, hat sich geändert.
- [`datachannel`](/de/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Ein neuer [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ist verfügbar, nachdem der Remote-Peer einen neuen Datenkanal geöffnet hat. Der Typ dieses Ereignisses ist [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent).
- [`error`](/de/docs/Web/API/RTCDataChannel/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das angibt, dass ein Fehler auf dem Datenkanal aufgetreten ist.
- [`error`](/de/docs/Web/API/RTCDtlsTransport/error_event)
  - : Ein [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent), das angibt, dass ein Fehler auf dem [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) aufgetreten ist. Dieser Fehler ist entweder `dtls-failure` oder `fingerprint-failure`.
- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Der Erfassungszustand des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) hat sich geändert.
- [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Ein [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent), das gesendet wird, wenn das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der durch Aufrufen von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) zum lokalen Peer hinzugefügt werden muss.
- [`icecandidateerror`](/de/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Ein [`RTCPeerConnectionIceErrorEvent`](/de/docs/Web/API/RTCPeerConnectionIceErrorEvent), das angibt, dass beim Erfassen von ICE-Kandidaten ein Fehler aufgetreten ist.
- [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Zustand ihrer ICE-Verbindung – zu finden in der Eigenschaft [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) – ändert.
- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich ihr ICE-Erfassungszustand – zu finden in der Eigenschaft [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) – ändert.
- [`message`](/de/docs/Web/API/RTCDataChannel/message_event)
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Das Ereignis ist vom Typ [`MessageEvent`](/de/docs/Web/API/MessageEvent).
- [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Informiert die `RTCPeerConnection`, dass sie durch Aufrufen von [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), gefolgt von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), eine Sitzungsaushandlung durchführen muss.
- [`open`](/de/docs/Web/API/RTCDataChannel/open_event)
  - : Der zugrunde liegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder erneut geöffnet.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Das aktuell ausgewählte Paar von ICE-Kandidaten hat sich für den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport), auf dem das Ereignis ausgelöst wird, geändert.
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Das `track`-Ereignis vom Typ [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) wird an eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn nach erfolgreicher Aushandlung des Medienstreamings eine neue Spur zur Verbindung hinzugefügt wird.
- [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Wird an die Peer-Verbindung gesendet, wenn sich ihr [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) geändert hat. Dies geschieht infolge eines Aufrufs von entweder [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) oder [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`statechange`](/de/docs/Web/API/RTCDtlsTransport/statechange_event)
  - : Der Zustand des `RTCDtlsTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Der Zustand des `RTCIceTransport` hat sich geändert.
- [`statechange`](/de/docs/Web/API/RTCSctpTransport/statechange_event)
  - : Der Zustand des `RTCSctpTransport` hat sich geändert.
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Ein kodierter Video- oder Audioframe ist bereit zur Verarbeitung mithilfe eines Transform Streams in einem Worker.

#### Typen

- [`RTCSctpTransport.state`](/de/docs/Web/API/RTCSctpTransport/state)
  - : Gibt den Zustand einer [`RTCSctpTransport`](/de/docs/Web/API/RTCSctpTransport)-Instanz an.

### Identität und Sicherheit

Diese APIs werden verwendet, um Benutzeridentität und Sicherheit zu verwalten, um Benutzer für eine Verbindung zu authentifizieren.

- [`RTCIdentityProvider`](/de/docs/Web/API/RTCIdentityProvider)
  - : Ermöglicht einem User Agent, die Erstellung oder Validierung einer Identitätsbehauptung anzufordern.
- [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)
  - : Stellt die Identität des Remote-Peers der aktuellen Verbindung dar. Wenn noch kein Peer festgelegt und verifiziert wurde, gibt diese Schnittstelle `null` zurück. Nach dem Festlegen kann sie nicht geändert werden.
- [`RTCIdentityProviderRegistrar`](/de/docs/Web/API/RTCIdentityProviderRegistrar)
  - : Registriert einen Identitätsanbieter (idP).
- [`RTCCertificate`](/de/docs/Web/API/RTCCertificate)
  - : Stellt ein Zertifikat dar, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Authentifizierung verwendet.

### Telefonie

Diese Schnittstellen und Ereignisse beziehen sich auf die Interaktion mit öffentlichen Telefonnetzen (Public Switched Telephone Networks, PSTNs). Sie werden hauptsächlich verwendet, um Tonwahlsignale – oder Pakete, die diese Töne darstellen – über das Netzwerk an den Remote-Peer zu senden.

#### Schnittstellen

- [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)
  - : Verwaltet die Kodierung und Übertragung der Dual-Tone Multi-Frequency- ({{Glossary("DTMF", "DTMF")}}) Signalisierung für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).
- [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent)
  - : Wird vom [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis verwendet, um anzugeben, dass ein DTMF-Ton entweder begonnen oder geendet hat. Dieses Ereignis propagiert nicht (außer wenn anders angegeben) und kann nicht abgebrochen werden (außer wenn anders angegeben).

#### Ereignisse

- [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)
  - : Entweder wurde ein neuer {{Glossary("DTMF", "DTMF")}}-Ton über die Verbindung abgespielt oder der letzte Ton im [`toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) des `RTCDTMFSender` wurde gesendet und der Puffer ist jetzt leer. Der Typ des Ereignisses ist [`RTCDTMFToneChangeEvent`](/de/docs/Web/API/RTCDTMFToneChangeEvent).

### Kodierte Transforms

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende kodierte Video- und Audioframes mithilfe eines in einem Worker ausgeführten Transform Streams zu verarbeiten.

#### Schnittstellen

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
  - : Eine Schnittstelle zum Einfügen von in einem Worker ausgeführten Transform Streams in die RTC-Pipeline.
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
  - : Das Gegenstück zu `RTCRtpScriptTransform` auf der Worker-Seite, das Optionen aus dem Hauptthread zusammen mit einem lesbaren Stream und einem beschreibbaren Stream übergibt, die verwendet werden können, um kodierte Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zu leiten.
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
  - : Stellt einen kodierten Videoframe dar, der in der RTC-Pipeline transformiert werden soll.
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
  - : Stellt einen kodierten Audioframe dar, der in der RTC-Pipeline transformiert werden soll.

#### Eigenschaften

- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
  - : Eine Eigenschaft zum Einfügen eines Transform Streams in die Receiver-Pipeline für eingehende kodierte Video- und Audioframes.
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
  - : Eine Eigenschaft zum Einfügen eines Transform Streams in die Sender-Pipeline für ausgehende kodierte Video- und Audioframes.

#### Ereignisse

- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)
  - : Eine RTC-Transformation ist bereit zur Ausführung im Worker, oder ein kodierter Video- oder Audioframe ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
  - : Das in {{RFC(3550)}} definierte Real-time Transport Protocol (RTP) ist ein IETF-Standardprotokoll, das Echtzeitverbindungen für den Austausch von Daten ermöglicht, die Echtzeitpriorität benötigen. Dieser Artikel bietet einen Überblick darüber, was RTP ist und wie es im Kontext von WebRTC funktioniert.
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel stellt die Protokolle vor, auf denen die WebRTC API aufbaut.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden dazu, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen zusammen verwendet werden können, um leistungsfähige Kommunikationsanwendungen zu erstellen.
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC ermöglicht Ihnen, Peer-to-Peer-Kommunikation beliebiger Daten, Audiodaten oder Videodaten – oder beliebiger Kombinationen davon – in eine Browseranwendung einzubetten. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, vom Herstellen der Verbindung bis zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.
- [Herstellen einer Verbindung: Das Perfect-Negotiation-Muster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfect Negotiation** ist ein Entwurfsmuster, dem Ihr Signalisierungsprozess folgen sollte. Es bietet Transparenz bei der Aushandlung und ermöglicht beiden Seiten, sowohl Offerer als auch Answerer zu sein, ohne dass umfangreicher Code zur Unterscheidung der beiden erforderlich ist.
- [Signalisierung und bidirektionale Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein für ein früheres Beispiel erstelltes WebSocket-basiertes Chatsystem erweitert, um Videoanrufe zwischen Teilnehmern zu ermöglichen. Die WebSocket-Verbindung des Chatservers wird für die WebRTC-Signalisierung verwendet.
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, deren Unterstützung WebRTC von Browsern verlangt, sowie zu den optionalen Codecs, die von verschiedenen beliebten Browsern unterstützt werden. Enthalten ist ein Leitfaden, der Ihnen bei der Auswahl der besten Codecs für Ihre Anforderungen hilft.
- [Verwenden von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden beschreibt, wie Sie eine Peer-Verbindung und einen zugehörigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) verwenden können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [Verwenden von DTMF mit WebRTC](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : Die Unterstützung von WebRTC für die Interaktion mit Gateways, die mit älteren Telefonsystemen verbunden sind, umfasst das Senden von DTMF-Tönen mithilfe der Schnittstelle [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender). Dieser Leitfaden zeigt, wie dies funktioniert.
- [Verwenden von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende kodierte WebRTC-Video- und Audioframes mithilfe eines [`TransformStream`](/de/docs/Web/API/TransformStream) ändern kann, der in einem Worker ausgeführt wird.

## Tutorials

- [Verbesserung der Kompatibilität mit WebRTC adapter.js](#interoperabilität)
  - : Die WebRTC-Organisation [stellt auf GitHub den WebRTC-Adapter bereit](https://github.com/webrtc/adapter/), um Kompatibilitätsprobleme in den WebRTC-Implementierungen verschiedener Browser zu umgehen. Der Adapter ist ein JavaScript-Shim, mit dem Ihr Code gemäß der Spezifikation geschrieben werden kann, sodass er in allen Browsern mit WebRTC-Unterstützung „einfach funktioniert“.
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Die Schnittstelle [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) ermöglicht es Ihnen, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ähnelt absichtlich der [WebSocket API](/de/docs/Web/API/WebSockets_API), sodass für beide dasselbe Programmiermodell verwendet werden kann.
- [Erstellen eines mit dem Internet verbundenen Telefons mit Peer.js](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Dieses Tutorial ist eine Schritt-für-Schritt-Anleitung zum Erstellen eines Telefons mit Peer.js.

## Spezifikationen

{{Specifications}}

### WebRTC-spezifische Protokolle

- [Protokollaushandlung der Anwendungsschicht für Web-Echtzeitkommunikation](https://datatracker.ietf.org/doc/rfc8833/)
- [Anforderungen an WebRTC-Audiocodecs und -Verarbeitung](https://datatracker.ietf.org/doc/rfc7874/)
- [RTCWeb-Datenkanäle](https://datatracker.ietf.org/doc/rfc8831/)
- [RTCWeb-Datenkanalprotokoll](https://datatracker.ietf.org/doc/rfc8832/)
- [Web-Echtzeitkommunikation (WebRTC): Medientransport und Verwendung von RTP](https://datatracker.ietf.org/doc/rfc8834/)
- [WebRTC-Sicherheitsarchitektur](https://datatracker.ietf.org/doc/rfc8827/)
- [Transporte für RTCWEB](https://datatracker.ietf.org/doc/rfc8835/)

### Zugehörige unterstützende Protokolle

- [Interactive Connectivity Establishment (ICE): Ein Protokoll für die NAT-Traversierung im Offer/Answer-Protokoll](https://datatracker.ietf.org/doc/html/rfc5245)
- [Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc5389)
- [URI-Schema für das Protokoll Session Traversal Utilities for NAT (STUN)](https://datatracker.ietf.org/doc/html/rfc7064)
- [Traversal Using Relays around NAT (TURN) Uniform Resource Identifiers](https://datatracker.ietf.org/doc/html/rfc7065)
- [Ein Offer/Answer-Modell mit Session Description Protocol (SDP)](https://datatracker.ietf.org/doc/html/rfc3264)
- [Session Traversal Utilities for NAT (STUN)-Erweiterung für Drittanbieterautorisierung](https://datatracker.ietf.org/doc/rfc7635/)

## Siehe auch

- [`MediaDevices`](/de/docs/Web/API/MediaDevices)
- [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Webmedientechnologien](/de/docs/Web/Media)
- [Firefox-Multistream und Neuverhandlung für Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Durch den WebRTC-Nebel mit SocketPeer schauen](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Im Partybus: Erstellen einer Web-App mit mehreren Live-Videostreams und interaktiven Grafiken](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [WebRTC-Beispiele](https://webrtc.github.io/samples/)
