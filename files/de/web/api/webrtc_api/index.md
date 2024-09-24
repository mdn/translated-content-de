---
title: WebRTC-API
slug: Web/API/WebRTC_API
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{DefaultAPISidebar("WebRTC")}}

**WebRTC** (Web Real-Time Communication) ist eine Technologie, die es Webanwendungen und -seiten ermöglicht, Audio- und/oder Videodaten zu erfassen und optional zu streamen sowie beliebige Daten zwischen Browsern auszutauschen, ohne dass ein Vermittler erforderlich ist. Der Satz von Standards, der WebRTC umfasst, ermöglicht den Austausch von Daten und die Durchführung von Telefonkonferenzen "peer-to-peer", ohne dass der Benutzer Plug-ins oder andere Software von Drittanbietern installieren muss.

WebRTC besteht aus mehreren miteinander verbundenen APIs und Protokollen, die zusammenarbeiten, um dies zu erreichen. Die Dokumentation, die Sie hier finden, hilft Ihnen, die Grundlagen von WebRTC zu verstehen, wie man sowohl Daten- als auch Medienverbindungen einrichtet und verwendet, und vieles mehr.

## WebRTC-Konzepte und Nutzung

WebRTC erfüllt mehrere Zwecke; zusammen mit der [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) bieten sie leistungsstarke Multimedia-Fähigkeiten für das Web, einschließlich Unterstützung für Audio- und Videokonferenzen, Dateiaustausch, Bildschirmfreigabe, Identitätsmanagement und die Verbindung mit herkömmlichen Telefonsystemen, einschließlich der Unterstützung für das Senden von {{Glossary("DTMF")}}-Signalen (Tonwahl). Verbindungen zwischen den Peers können ohne spezielle Treiber oder Plug-ins hergestellt werden und häufig auch ohne zwischengeschaltete Server.

Verbindungen zwischen zwei Peers werden durch die {{DOMxRef("RTCPeerConnection")}}-Schnittstelle dargestellt. Sobald eine Verbindung hergestellt und geöffnet wurde, können Medien-Streams ({{DOMxRef("MediaStream")}}s) und/oder Datenkanäle ({{DOMxRef("RTCDataChannel")}}s) zur Verbindung hinzugefügt werden.

Medien-Streams können aus einer beliebigen Anzahl von Medientracks bestehen; die Tracks, die durch Objekte basierend auf der {{DOMxRef("MediaStreamTrack")}}-Schnittstelle dargestellt werden, können eine der vielen Arten von Mediendaten enthalten, einschließlich Audio, Video und Text (wie zum Beispiel Untertitel oder sogar Kapitelnamen). Die meisten Streams bestehen aus mindestens einem Audiotrack und wahrscheinlich auch einem Videotrack und können verwendet werden, um sowohl Live-Medien als auch gespeicherte Mediendaten (wie ein gestreamter Film) zu senden und empfangen.

Sie können auch die Verbindung zwischen zwei Peers verwenden, um beliebige Binärdaten über die {{DOMxRef("RTCDataChannel")}}-Schnittstelle auszutauschen. Dies kann für Back-Channel-Informationen, Metadatenaustausch, Statuspakete von Spielen, Dateiübertragungen oder sogar als primärer Kanal für die Datenübertragung genutzt werden.

### Interoperabilität

WebRTC wird im Allgemeinen gut von modernen Browsern unterstützt, aber einige Inkompatibilitäten bleiben bestehen. Die Bibliothek [adapter.js](https://github.com/webrtcHacks/adapter) ist ein Shim, um Apps von diesen Inkompatibilitäten abzuschirmen.

## WebRTC-Referenz

Da WebRTC Schnittstellen bietet, die zusammenarbeiten, um eine Vielzahl von Aufgaben zu erledigen, haben wir die Referenz nach Kategorien aufgeteilt. Bitte sehen Sie sich die Seitenleiste für eine alphabetische Liste an.

### Verbindungseinrichtung und -verwaltung

Diese Schnittstellen, Wörterbücher und Typen werden verwendet, um WebRTC-Verbindungen einzurichten, zu öffnen und zu verwalten. Dazu gehören Schnittstellen, die Peermediaverbindungen, Datenkanäle und Schnittstellen repräsentieren, die beim Austausch von Informationen über die Fähigkeiten jedes Peers verwendet werden, um die bestmögliche Konfiguration für eine Zwei-Wege-Medienverbindung auszuwählen.

#### Schnittstellen

- {{DOMxRef("RTCPeerConnection")}}
  - : Repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Es wird verwendet, um das effiziente Streaming von Daten zwischen den beiden Peers zu handhaben.
- {{DOMxRef("RTCDataChannel")}}
  - : Repräsentiert einen bidirektionalen Datenkanal zwischen zwei Peers einer Verbindung.
- {{DOMxRef("RTCDataChannelEvent")}}
  - : Repräsentiert Ereignisse, die beim Anhängen eines {{DOMxRef("RTCDataChannel")}} an ein {{DOMxRef("RTCPeerConnection")}} auftreten. Das einzige Ereignis, das mit dieser Schnittstelle gesendet wird, ist {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}.
- {{DOMxRef("RTCSessionDescription")}}
  - : Repräsentiert die Parameter einer Sitzung. Jede `RTCSessionDescription` besteht aus einer Beschreibung {{DOMxRef("RTCSessionDescription.type", "type")}}, die angibt, welchen Teil des Offer/Answer-Verhandlungsprozesses sie beschreibt, und dem {{Glossary("SDP")}}-Descriptor der Sitzung.
- {{DOMxRef("RTCStatsReport")}}
  - : Bietet Informationen, die Statistiken für eine Verbindung oder einen einzelnen Track auf der Verbindung detailliert beschreiben; der Bericht kann durch Aufruf von {{DOMxRef("RTCPeerConnection.getStats()")}} erhalten werden.
- {{DOMxRef("RTCIceCandidate")}}
  - : Repräsentiert einen Kandidaten des Interactive Connectivity Establishment ({{Glossary("ICE")}}) Servers zur Herstellung einer {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCIceTransport")}}
  - : Repräsentiert Informationen über einen {{Glossary("ICE")}}-Transport.
- {{DOMxRef("RTCPeerConnectionIceEvent")}}
  - : Repräsentiert Ereignisse, die in Bezug auf ICE-Kandidaten mit dem Ziel eintreten, normalerweise eine {{DOMxRef("RTCPeerConnection")}}. Nur ein Ereignis dieses Typs existiert: {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}.
- {{DOMxRef("RTCRtpSender")}}
  - : Verwalte die Kodierung und Übertragung von Daten für einen {{DOMxRef("MediaStreamTrack")}} auf einer {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCRtpReceiver")}}
  - : Verwalte den Empfang und die Dekodierung von Daten für einen {{DOMxRef("MediaStreamTrack")}} auf einer {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCTrackEvent")}}
  - : Die Schnittstelle, die ein {{domxref("RTCPeerConnection.track_event", "track")}}-Ereignis darstellt, welches anzeigt, dass ein {{DOMxRef("RTCRtpReceiver")}}-Objekt zur {{DOMxRef("RTCPeerConnection")}}-Objekt hinzugefügt wurde, was anzeigt, dass ein neuer eingehender {{DOMxRef("MediaStreamTrack")}} erstellt und zur `RTCPeerConnection` hinzugefügt wurde.
- {{DOMxRef("RTCSctpTransport")}}
  - : Bietet Informationen, die ein Stream Control Transmission Protocol (**{{Glossary("SCTP")}}**) Transport beschreiben und bietet auch einen Weg, um auf den darunterliegenden Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) Transport zuzugreifen, über den SCTP-Pakete für alle Datenkanäle einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet und empfangen werden.

#### Ereignisse

- {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}}
  - : Die Menge an Daten, die derzeit vom Datenkanal gepuffert wird, wie durch seine {{domxref("RTCDataChannel.bufferedAmount", "bufferedAmount")}}-Eigenschaft angezeigt, ist auf oder unter die minimale gepufferte Datenmenge des Kanals gesunken, wie durch {{domxref("RTCDataChannel.bufferedAmountLowThreshold", "bufferedAmountLowThreshold")}} festgelegt.
- {{domxref("RTCDataChannel.close_event", "close")}}
  - : Der Datenkanal hat den Schließvorgang abgeschlossen und befindet sich nun im `closed`-Zustand. Sein zugrundeliegender Datentransport ist vollständig geschlossen. Sie können _vorher_ benachrichtigt werden, dass das Schließen abgeschlossen ist, indem Sie auf das `closing`-Ereignis achten.
- {{domxref("RTCDataChannel.closing_event", "closing")}}
  - : Der `RTCDataChannel` ist in den `closing`-Zustand übergegangen, was anzeigt, dass er bald geschlossen werden wird. Sie können das Abschließen des Schließvorgangs erkennen, indem Sie das `close`-Ereignis beachten.
- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : Der Zustand der Verbindung, auf den über {{domxref("RTCPeerConnection.connectionState", "connectionState")}} zugegriffen werden kann, hat sich geändert.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : Ein neuer {{domxref("RTCDataChannel")}} ist verfügbar, nachdem der entfernte Peer einen neuen Datenkanal geöffnet hat. Der Typ dieses Ereignisses ist {{domxref("RTCDataChannelEvent")}}.
- {{domxref("RTCDataChannel.error_event", "error")}}
  - : Ein {{domxref("RTCErrorEvent")}}, der anzeigt, dass ein Fehler auf dem Datenkanal aufgetreten ist.
- {{domxref("RTCDtlsTransport.error_event", "error")}}
  - : Ein {{domxref("RTCErrorEvent")}}, der anzeigt, dass ein Fehler auf dem {{domxref("RTCDtlsTransport")}} aufgetreten ist. Dieser Fehler wird entweder `dtls-failure` oder `fingerprint-failure` sein.
- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : Der Erfassungszustand des {{domxref("RTCIceTransport")}} hat sich geändert.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : Ein {{domxref("RTCPeerConnectionIceEvent")}}, das immer dann gesendet wird, wenn das lokale Gerät einen neuen ICE-Kandidaten identifiziert hat, der dem lokalen Peer hinzugefügt werden muss, indem {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} aufgerufen wird.
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : Ein {{domxref("RTCPeerConnectionIceErrorEvent")}}, das anzeigt, dass ein Fehler beim Sammeln von ICE-Kandidaten aufgetreten ist.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Wird an ein {{domxref("RTCPeerConnection")}} gesendet, wenn sich der ICE-Verbindungszustand, der in der {{domxref("RTCPeerConnection.iceconnectionstate", "iceconnectionstate")}}-Eigenschaft gefunden wird, ändert.
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Wird an ein {{domxref("RTCPeerConnection")}} gesendet, wenn sich der ICE-Sammelzustand ändert, der in der {{domxref("RTCPeerConnection.icegatheringstate", "icegatheringstate")}}-Eigenschaft gefunden wird.
- {{domxref("RTCDataChannel.message_event", "message")}}
  - : Eine Nachricht wurde auf dem Datenkanal empfangen. Das Ereignis ist vom Typ {{domxref("MessageEvent")}}.
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Informiert die `RTCPeerConnection`, dass sie die Sitzungsverhandlung durchführen muss, indem {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} gefolgt von {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} aufgerufen wird.
- {{domxref("RTCDataChannel.open_event", "open")}}
  - : Der zugrundeliegende Datentransport für den `RTCDataChannel` wurde erfolgreich geöffnet oder erneut geöffnet.
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : Das aktuell ausgewählte Paar von ICE-Kandidaten hat sich für den `RTCIceTransport`, auf dem das Ereignis ausgelöst wird, geändert.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : Das `track`-Ereignis, vom Typ {{domxref("RTCTrackevent")}}, wird an ein {{domxref("RTCPeerConnection")}} gesendet, wenn ein neuer Track zur Verbindung hinzugefügt wird, nachdem die Verhandlung des Medienstreamings erfolgreich war.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : Wird an die Peer-Verbindung gesendet, wenn sich ihr {{domxref("RTCPeerConnection.signalingstate", "signalingstate")}} geändert hat. Dies geschieht als Ergebnis eines Aufrufs von entweder {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} oder {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}.
- {{domxref("RTCDtlsTransport.statechange_event", "statechange")}}
  - : Der Zustand des `RTCDtlsTransport` hat sich geändert.
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : Der Zustand des `RTCIceTransport` hat sich geändert.
- {{domxref("RTCSctpTransport.statechange_event", "statechange")}}
  - : Der Zustand des `RTCSctpTransport` hat sich geändert.
- {{DOMxRef("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}
  - : Ein kodierter Video- oder Audio-Frame ist bereit, um in einem Worker mit einem Transform-Stream verarbeitet zu werden.

#### Typen

- {{DOMxRef("RTCSctpTransport.state")}}
  - : Gibt den Zustand einer {{DOMxRef("RTCSctpTransport")}}-Instanz an.

### Identität und Sicherheit

Diese APIs werden verwendet, um die Benutzeridentität und -sicherheit zu verwalten, um den Benutzer für eine Verbindung zu authentifizieren.

- {{DOMxRef("RTCIdentityProvider")}}
  - : Ermöglicht es einem User Agent, zu verlangen, dass eine Identitätsaussage generiert oder validiert wird.
- {{DOMxRef("RTCIdentityAssertion")}}
  - : Repräsentiert die Identität des entfernten Peers der aktuellen Verbindung. Wenn noch kein Peer gesetzt und verifiziert wurde, gibt diese Schnittstelle `null` zurück. Sobald sie gesetzt ist, kann sie nicht mehr geändert werden.
- {{DOMxRef("RTCIdentityProviderRegistrar")}}
  - : Registriert einen Identitätsanbieter (idP).
- {{DOMxRef("RTCCertificate")}}
  - : Repräsentiert ein Zertifikat, das eine {{DOMxRef("RTCPeerConnection")}} zur Authentifizierung verwendet.

### Telefonie

Diese Schnittstellen und Ereignisse stehen im Zusammenhang mit der Interaktivität mit öffentlichen Telefonnetzen (PSTNs). Sie werden hauptsächlich verwendet, um Tonwahlgeräusche oder Pakete, die diese Töne darstellen, über das Netzwerk an den entfernten Peer zu senden.

#### Schnittstellen

- {{DOMxRef("RTCDTMFSender")}}
  - : Verwalte die Kodierung und Übertragung von Dual-Tone Multi-Frequency ({{Glossary("DTMF")}}) Signalen für eine {{DOMxRef("RTCPeerConnection")}}.
- {{DOMxRef("RTCDTMFToneChangeEvent")}}
  - : Wird vom {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}-Ereignis verwendet, um anzuzeigen, dass ein DTMF-Ton entweder begonnen hat oder beendet wurde. Dieses Ereignis blubbert nicht (außer wenn anders angegeben) und ist nicht abbrechbar (außer wenn anders angegeben).

#### Ereignisse

- {{domxref("RTCDTMFSender.tonechange_event", "tonechange")}}
  - : Entweder hat ein neuer {{Glossary("DTMF")}}-Ton begonnen, über die Verbindung abzuspielen, oder der letzte Ton im {{domxref("RTCDTMFSender.toneBuffer", "toneBuffer")}} des `RTCDTMFSender` wurde gesendet und der Puffer ist jetzt leer. Der Typ des Ereignisses ist {{domxref("RTCDTMFToneChangeEvent")}}.

### Kodierte Transformationen

Diese Schnittstellen und Ereignisse werden verwendet, um eingehende und ausgehende kodierte Video- und Audio-Frames mithilfe eines Transform-Streams zu verarbeiten, der in einem Worker ausgeführt wird.

#### Schnittstellen

- {{DOMxRef("RTCRtpScriptTransform")}}
  - : Eine Schnittstelle zum Einfügen von Transform-Streams, die in einem Worker in die RTC-Pipeline laufen.
- {{DOMxRef("RTCRtpScriptTransformer")}}
  - : Das Gegenstück auf der Worker-Seite eines `RTCRtpScriptTransform`, das Optionen vom Hauptthread zusammen mit einem lesbaren Strom und einem beschreibbaren Strom überträgt, die verwendet werden können, um kodierte Frames durch ein {{DOMxRef("TransformStream")}} zu leiten.
- {{DOMxRef("RTCEncodedVideoFrame")}}
  - : Repräsentiert einen kodierten Videoframe, der in der RTC-Pipeline transformiert wird.
- {{DOMxRef("RTCEncodedAudioFrame")}}
  - : Repräsentiert einen kodierten Audioframe, der in der RTC-Pipeline transformiert wird.

#### Eigenschaften

- {{DOMxRef("RTCRtpReceiver.transform")}}
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Empfangs-Pipeline für eingehende kodierte Video- und Audio-Frames einzufügen.
- {{DOMxRef("RTCRtpSender.transform")}}
  - : Eine Eigenschaft, die verwendet wird, um einen Transform-Stream in die Sender-Pipeline für ausgehende kodierte Video- und Audio-Frames einzufügen.

#### Ereignisse

- {{DOMxRef("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}
  - : Eine RTC-Transformation ist bereit, im Worker zu laufen, oder ein kodierter Video- oder Audio-Frame ist bereit zur Verarbeitung.

## Leitfäden

- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
  - : Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC-API basiert.
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
  - : Ein Leitfaden dazu, wie WebRTC-Verbindungen funktionieren und wie die verschiedenen Protokolle und Schnittstellen zusammen genutzt werden können, um leistungsstarke Kommunikationsanwendungen zu erstellen.
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC ermöglicht es Ihnen, Peer-to-Peer-Kommunikation von beliebigen Daten, Audio oder Video — oder jede Kombination davon — in eine Browseranwendung zu integrieren. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, vom Einrichten der Verbindung bis hin zum Schließen, wenn sie nicht mehr benötigt wird.
- [Eine Verbindung herstellen: Das perfekte Verhandlungs-Muster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)
  - : **Perfekte Verhandlung** ist ein Designmuster, das für Ihren Signalisierungsprozess empfohlen wird, um Transparenz in der Verhandlung zu bieten, während es beiden Seiten ermöglicht, entweder der Angebots- oder der Antwortseite zu sein, ohne dass erheblicher Programmieraufwand erforderlich ist, um die beiden zu unterscheiden.
- [Signalisierung und bidirektionale Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Ein Tutorial und Beispiel, das ein auf WebSocket basierendes Chatsystem, das für ein früheres Beispiel erstellt wurde, erweitert und Unterstützung für das Eröffnen von Videoanrufen zwischen Teilnehmern hinzufügt. Die WebSocket-Verbindung des Chat-Servers wird für die WebRTC-Signalisierung verwendet.
- [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs)
  - : Ein Leitfaden zu den Codecs, die WebRTC erfordert, dass Browser diese unterstützen, sowie zu den optionalen, die von verschiedenen beliebten Browsern unterstützt werden. Inbegriffen ist ein Leitfaden, der Ihnen hilft, die besten Codecs für Ihre Bedürfnisse auszuwählen.
- [WebRTC-Datenkanäle verwenden](/de/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Dieser Leitfaden behandelt, wie Sie eine Peer-Verbindung und einen zugehörigen {{DOMxRef("RTCDataChannel")}} verwenden können, um beliebige Daten zwischen zwei Peers auszutauschen.
- [DTMF mit WebRTC verwenden](/de/docs/Web/API/WebRTC_API/Using_DTMF)
  - : WebRTC unterstützt die Interaktion mit Gateways, die mit alten Telefonsystemen verbunden sind, einschließlich der Unterstützung für das Senden von DTMF-Tönen über die {{DOMxRef("RTCDTMFSender")}}-Schnittstelle. Dieser Leitfaden zeigt, wie das gemacht wird.
- [WebRTC Kodierte Transformationen verwenden](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
  - : Dieser Leitfaden zeigt, wie eine Webanwendung eingehende und ausgehende WebRTC-kodierte Video- und Audio-Frames modifizieren kann, indem ein {{DOMxRef("TransformStream")}} verwendet wird, der in einen Worker läuft.

## Tutorials

- [Verbesserte Kompatibilität mit WebRTC adapter.js]({#interoperability})
  - : Die WebRTC-Organisation [stellt auf GitHub den WebRTC-Adapter bereit](https://github.com/webrtc/adapter/), um Kompatibilitätsprobleme in den verschiedenen WebRTC-Implementierungen der Browser zu umgehen. Der Adapter ist ein JavaScript-Shim, das es Ihrem Code ermöglicht, entsprechend der Spezifikation geschrieben zu werden, damit er in allen mit WebRTC-Unterstützung ausgestatteten Browsern „einfach funktioniert“.
- [Ein einfaches RTCDataChannel-Beispiel](/de/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : Die {{DOMxRef("RTCDataChannel")}}-Schnittstelle ist eine Funktion, die es Ihnen ermöglicht, einen Kanal zwischen zwei Peers zu öffnen, über den Sie beliebige Daten senden und empfangen können. Die API ist absichtlich der [WebSocket-API](/de/docs/Web/API/WebSockets_API) ähnlich, damit dasselbe Programmiermodell für beide verwendet werden kann.
- [Ein internetfähiges Telefon mit Peer.js erstellen](/de/docs/Web/API/WebRTC_API/Build_a_phone_with_peerjs)
  - : Dieses Tutorial bietet eine Schritt-für-Schritt-Anleitung, wie man ein Telefon mit Peer.js erstellt.

## Spezifikationen

{{Specifications}}

### WebRTC-spezifische Protokolle

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

- {{DOMxRef("MediaDevices")}}
- {{DOMxRef("MediaStreamEvent")}}
- {{DOMxRef("MediaStreamTrack")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MediaStream")}}
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Firefox multistream and renegotiation for Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering Through the WebRTC Fog with SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [Inside the Party Bus: Building a Web App with Multiple Live Video Streams + Interactive Graphics](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
- [Webmedientechnologien](/de/docs/Web/Media)
