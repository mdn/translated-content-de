---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef('WebRTC')}}

Die **`RTCPeerConnection`**-Schnittstelle repräsentiert eine WebRTC-Verbindung zwischen dem lokalen Computer und einem entfernten Peer. Sie bietet Methoden, um eine Verbindung zu einem entfernten Peer herzustellen, die Verbindung zu pflegen und zu überwachen sowie die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}
  - : Gibt eine neue `RTCPeerConnection` zurück, die eine Verbindung zwischen dem lokalen Gerät und einem entfernten Peer darstellt.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCPeerConnection.canTrickleIceCandidates", "canTrickleIceCandidates")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der entfernte Peer [trickled ICE-Kandidaten](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice) akzeptieren kann oder nicht.
- {{DOMxRef("RTCPeerConnection.connectionState", "connectionState")}} {{ReadOnlyInline}}
  - : Gibt den aktuellen Zustand der Peer-Verbindung an, indem es einen der folgenden Zeichenketten zurückgibt: `new`, `connecting`, `connected`, `disconnected`, `failed` oder `closed`.
- {{DOMxRef("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("RTCSessionDescription")}}-Objekt zurück, das das lokale Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seitdem diese `RTCPeerConnection` die Verhandlung und Verbindung mit einem entfernten Peer abgeschlossen hat.
    Einschließlich einer Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seitdem das Offer oder Answer, das durch die Beschreibung dargestellt wird, erstmals erstellt wurde.
- {{DOMxRef("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("RTCSessionDescription")}}-Objekt zurück, das das entfernte Ende der Verbindung beschreibt, wie es zuletzt erfolgreich ausgehandelt wurde, seitdem diese `RTCPeerConnection` die Verhandlung und Verbindung mit einem entfernten Peer abgeschlossen hat.
    Einschließlich einer Liste von ICE-Kandidaten, die möglicherweise bereits vom ICE-Agenten generiert wurden, seitdem das Offer oder Answer, das durch die Beschreibung dargestellt wird, erstmals erstellt wurde.
- {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Zustand des ICE-Agenten angibt, der mit dieser RTCPeerConnection verbunden ist.
    Mögliche Werte sind: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` oder `closed`.
- {{DOMxRef("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den ICE-Gathering-Zustand der Verbindung beschreibt.
    Dies ermöglicht es Ihnen zu erkennen, wann beispielsweise die Erfassung von ICE-Kandidaten abgeschlossen ist.
    Mögliche Werte sind: `new`, `gathering` oder `complete`.
- {{DOMxRef("RTCPeerConnection.localDescription", "localDescription")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("RTCSessionDescription")}} zurück, das die Sitzung für das lokale Ende der Verbindung beschreibt.
    Wenn es noch nicht festgelegt wurde, wird `null` zurückgegeben.
- {{DOMxRef("RTCPeerConnection.peerIdentity", "peerIdentity")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich zu einem {{DOMxRef("RTCIdentityAssertion")}} auflöst, das eine Zeichenkette zur Identifizierung des entfernten Peers enthält.
    Sobald dieses Versprechen erfolgreich aufgelöst ist, ist die resultierende Identität die Ziel-Peer-Identität und wird sich während der Verbindung nicht ändern.
- {{DOMxRef("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("RTCSessionDescription")}}-Objekt zurück, das eine anstehende Konfigurationsänderung für das lokale Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft existieren könnte.
- {{DOMxRef("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("RTCSessionDescription")}}-Objekt zurück,
    das eine anstehende Konfigurationsänderung für das entfernte Ende der Verbindung beschreibt.
    Dies beschreibt nicht die Verbindung, wie sie derzeit besteht, sondern wie sie in naher Zukunft existieren könnte.
- {{DOMxRef("RTCPeerConnection.remoteDescription", "remoteDescription")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("RTCSessionDescription")}}-Objekt zurück, das die Sitzung, einschließlich Konfiguration und Medieninformationen, für das entfernte Ende der Verbindung beschreibt.
    Falls dieses noch nicht festgelegt wurde, wird `null` zurückgegeben.
- {{DOMxRef("RTCPeerConnection.sctp", "sctp")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("RTCSctpTransport")}}-Objekt zurück, das die {{Glossary("SCTP")}}-Transportschicht beschreibt, über die SCTP-Daten gesendet und empfangen werden.
    Falls SCTP noch nicht ausgehandelt wurde, ist dieser Wert `null`.
- {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Zustand des Signalisierungsprozesses am lokalen Ende der Verbindung während des Verbindens oder Wiederverbindens zu einem anderen Peer beschreibt.
    Es ist einer der folgenden Werte: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` oder `closed`.

## Statische Methoden

- {{DOMxRef("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}}
  - : Erstellt ein X.509-Zertifikat und dessen zugehörigen privaten Schlüssel und gibt ein {{jsxref("Promise")}} zurück, das sich mit dem neuen {{DOMxRef("RTCCertificate")}} auflöst, sobald es erstellt ist.

## Instanz-Methoden

_Erbt auch Methoden von {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
  - : Fügt einen neuen entfernten Kandidaten zur Remote-Beschreibung der `RTCPeerConnection` hinzu, die den Zustand des entfernten Endes der Verbindung beschreibt.
- {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}}
  - : Fügt ein neues {{DOMxRef("MediaStreamTrack")}} zu der Menge von Tracks hinzu, die dem anderen Peer übertragen werden sollen.
- {{DOMxRef("RTCPeerConnection.addTransceiver", "addTransceiver()")}}
  - : Erstellt einen neuen {{DOMxRef("RTCRtpTransceiver")}} und fügt ihn der Menge der mit der Verbindung verbundenen Transceiver hinzu.
    Jeder Transceiver repräsentiert einen bidirektionalen Stream mit einem zugehörigen {{DOMxRef("RTCRtpSender")}} und einem {{DOMxRef("RTCRtpReceiver")}}.
- {{DOMxRef("RTCPeerConnection.close", "close()")}}
  - : Schließt die aktuelle Peer-Verbindung.
- {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}}
  - : Initiiert die Erstellung einer {{Glossary("SDP")}}-Antwort auf ein von einem entfernten Peer erhaltenes Offer während der Offer/Answer-Aushandlung einer WebRTC-Verbindung.
    Die Antwort enthält Informationen über jegliche Medien, die bereits an die Sitzung angehängt sind, die von dem Browser unterstützten Codecs und Optionen sowie bereits gesammelte {{Glossary("ICE")}}-Kandidaten.
- {{DOMxRef("RTCPeerConnection.createDataChannel", "createDataChannel()")}}
  - : Initiiert die Erstellung eines neuen Kanals, der mit dem entfernten Peer verbunden ist, über den beliebige Daten übertragen werden können.
    Dies kann nützlich sein für Back-Channel-Inhalte wie Bilder, Dateiübertragungen, Text-Chats, Spielaktualisierungspakete und so weiter.
- {{DOMxRef("RTCPeerConnection.createOffer", "createOffer()")}}
  - : Initiiert die Erstellung eines {{Glossary("SDP")}}-Angebots zum Zweck der Aufnahme einer neuen WebRTC-Verbindung zu einem entfernten Peer.
    Das SDP-Angebot enthält Informationen über jegliche an die WebRTC-Sitzung bereits angehängte {{DOMxRef("MediaStreamTrack")}}-Objekte, die von dem Browser unterstützten Codecs und Optionen sowie alle bereits von dem {{Glossary("ICE")}}-Agent gesammelten Kandidaten, um sie über den Signalisierungskanal an einen potenziellen Peer zu senden, um eine Verbindung anzufordern oder die Konfiguration einer vorhandenen Verbindung zu aktualisieren.
- {{DOMxRef("RTCPeerConnection.getConfiguration", "getConfiguration()")}}
  - : Gibt ein Objekt zurück, das die aktuelle Konfiguration der Verbindung anzeigt.
- {{DOMxRef("RTCPeerConnection.getIdentityAssertion", "getIdentityAssertion()")}}
  - : Initiiert das Sammeln einer Identitätsaussage und gibt ein {{jsxref("Promise")}} zurück, das sich in eine als Zeichenkette kodierte Identitätsaussage auflöst.
    Dies hat nur Auswirkungen, wenn der {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} nicht `closed` ist.
- {{DOMxRef("RTCPeerConnection.getReceivers", "getReceivers()")}}
  - : Gibt ein Array von {{DOMxRef("RTCRtpReceiver")}}-Objekten zurück, von denen jedes einen {{Glossary("RTP")}}-Empfänger darstellt.
- {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}}
  - : Gibt ein Array von {{DOMxRef("RTCRtpSender")}}-Objekten zurück, von denen jedes den {{Glossary("RTP")}}-Sender darstellt, der für die Übertragung der Daten eines Tracks verantwortlich ist.
- {{DOMxRef("RTCPeerConnection.getStats", "getStats()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit Daten zur Bereitstellung von Statistiken entweder über die gesamte Verbindung oder über den angegebenen {{DOMxRef("MediaStreamTrack")}} auflöst.
- {{DOMxRef("RTCPeerConnection.getTransceivers", "getTransceivers()")}}
  - : Gibt eine Liste aller {{DOMxRef("RTCRtpTransceiver")}}-Objekte zurück, die zum Senden und Empfangen von Daten auf der Verbindung verwendet werden.
- {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}}
  - : Teilt dem lokalen Ende der Verbindung mit, das Senden von Medien von dem angegebenen Track zu stoppen, ohne den entsprechenden {{DOMxRef("RTCRtpSender")}} aus der Liste der Sender zu entfernen
    wie von {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}} berichtet.
    Wenn der Track bereits gestoppt ist oder sich nicht in der Senderliste der Verbindung befindet, hat diese Methode keine Auswirkung.
- {{DOMxRef("RTCPeerConnection.restartIce", "restartIce()")}}
  - : Ermöglicht es, dass die Sammlung von ICE-Kandidaten auf beiden Enden der Verbindung einfach neu gestartet werden kann.
    Dies vereinfacht den Prozess, indem dieselbe Methode sowohl vom Anrufer als auch vom Empfänger verwendet werden kann, um einen {{Glossary("ICE")}}-Neustart auszulösen.
- {{DOMxRef("RTCPeerConnection.setConfiguration", "setConfiguration()")}}
  - : Setzt die aktuelle Konfiguration der Verbindung basierend auf den Werten im angegebenen Objekt.
    Dies ermöglicht es Ihnen, die von der Verbindung verwendeten {{Glossary("ICE")}}-Server zu ändern und welche Transport-Richtlinien verwendet werden sollen.
- {{DOMxRef("RTCPeerConnection.setIdentityProvider", "setIdentityProvider()")}}
  - : Setzt den Identity Provider (IdP) auf das im Parameter angegebene Tripel: den Namen, das Protokoll zur Kommunikation damit und einen Benutzernamen.
    Das Protokoll und der Benutzername sind optional.
- {{DOMxRef("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}
  - : Ändert die mit der Verbindung verknüpfte lokale Beschreibung.
    Diese Beschreibung gibt die Eigenschaften des lokalen Endes der Verbindung an, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.
- {{DOMxRef("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}
  - : Setzt die angegebene Sitzungsbeschreibung als das aktuelle Angebot oder die aktuelle Antwort des entfernten Peers.
    Die Beschreibung legt die Eigenschaften des entfernten Endes der Verbindung fest, einschließlich des Medienformats.
    Es gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Beschreibung asynchron geändert wurde.

### Veraltete Methoden

- {{DOMxRef("RTCPeerConnection.addStream", "addStream()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fügt einen {{DOMxRef("MediaStream")}} als lokale Quelle für Audio oder Video hinzu.
    Anstelle dieser veralteten Methode sollten Sie stattdessen {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}} einmal für jeden Track verwenden, den Sie an den entfernten Peer senden möchten.
- {{DOMxRef("RTCPeerConnection.createDTMFSender", "createDTMFSender()")}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Erstellt einen neuen {{DOMxRef("RTCDTMFSender")}}, der mit einem bestimmten {{DOMxRef("MediaStreamTrack")}} verbunden ist und in der Lage ist, {{Glossary("DTMF")}}-Telefon-Signalisierung über die Verbindung zu senden.
- {{DOMxRef("RTCPeerConnection.removeStream", "removeStream()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Entfernt einen {{DOMxRef("MediaStream")}} als lokale Quelle für Audio oder Video.
    Da diese Methode veraltet ist, sollten Sie stattdessen {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}} verwenden.

## Ereignisse

Diese Ereignisse werden mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} abgehört oder indem ein Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : Gesendet, wenn sich der allgemeine Verbindungsstatus der `RTCPeerConnection` ändert.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : Gesendet, wenn der entfernte Peer einen {{domxref("RTCDataChannel")}} zur Verbindung hinzufügt.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : Gesendet, um zu fordern, dass der angegebene Kandidat an den entfernten Peer übertragen wird.
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : An die Verbindung gesendet, wenn ein Fehler während des {{Glossary("ICE")}}-Kandidatensammelns auftritt. Das Ereignis beschreibt den Fehler.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Gesendet, wenn sich der Zustand der {{Glossary("ICE")}}-Verbindung ändert, zum Beispiel, wenn sie trennt.
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Gesendet, wenn sich der Sammlungzustand der {{Glossary("ICE")}}-Schicht, wie durch {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} reflektiert, ändert.
    Dies zeigt an, ob die ICE-Negotiation noch nicht begonnen hat (`new`), Kandidaten zu sammeln beginnt (`gathering`) oder abgeschlossen ist (`complete`).
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Gesendet, wenn die Verhandlung oder Neuverhandlung der {{Glossary("ICE")}}-Verbindung durchgeführt werden muss;
    Dies kann sowohl beim erstmaligen Öffnen einer Verbindung als auch notwendig sein, um auf sich ändernde Netzwerkbedingungen zu reagieren.
    Der Empfänger sollte mit der Erstellung eines Angebots antworten und es an den anderen Peer senden.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : Gesendet, wenn sich der Signalisierungsstatus der Verbindung ändert.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : Gesendet, nachdem ein neuer Track zu einer der {{domxref("RTCRtpReceiver")}}-Instanzen hinzugefügt wurde, die die Verbindung ausmachen.

### Veraltete Ereignisse

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gesendet, wenn ein neuer {{domxref("MediaStream")}} zur Verbindung hinzugefügt wurde.
    Anstelle dieses veralteten Ereignisses sollten Sie {{domxref("RTCPeerConnection.track_event", "track")}}-Ereignisse hören;
    für jeden {{domxref("MediaStreamTrack")}}, der zur Verbindung hinzugefügt wurde, wird eines gesendet.
- {{domxref("RTCPeerConnection.removestream_event", "removestream")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gesendet, wenn ein {{domxref("MediaStream")}} aus der Verbindung entfernt wird.
    Anstelle des Hörens dieses veralteten Ereignisses sollten Sie auf {{domxref("MediaStream.removetrack_event", "removetrack")}}-Ereignisse auf jedem Stream hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Erste Schritte mit WebRTC](https://web.dev/articles/webrtc-basics)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Node.js HTML-Videoaufnahme, Peer-to-Peer-Video- und Dateiübertragungsanwendung ([Source auf GitHub](https://github.com/chrisjohndigital/TutorRoom))
