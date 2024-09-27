---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die **`RTCIceCandidate`** Schnittstelle—Teil der [WebRTC API](/de/docs/Web/API/WebRTC_API)—repräsentiert eine Kandidatenkonfiguration für das Interactive Connectivity Establishment ([ICE](/de/docs/Glossary/ICE)), die möglicherweise verwendet wird, um eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) herzustellen.

Ein ICE-Kandidat beschreibt die Protokolle und die Routinginformationen, die notwendig sind, damit WebRTC mit einem entfernten Gerät kommunizieren kann. Wenn eine WebRTC-Peer-Verbindung gestartet wird, schlägt typischerweise jedes Ende der Verbindung eine Reihe von Kandidaten vor, bis sie sich auf einen geeigneten Kandidaten einigen, der die beste Verbindung beschreibt. WebRTC verwendet dann die Details dieses Kandidaten, um die Verbindung zu initiieren.

Details über den ICE-Prozess finden Sie unter [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime). Der Artikel [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) bietet weitere nützliche Details.

## Konstruktor

- [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)

  - : Erstellt ein `RTCIceCandidate`-Objekt, um einen einzelnen ICE-Kandidaten zu repräsentieren, optional basierend auf einem Konfigurationsobjekt konfiguriert.

    > [!NOTE]
    > Aus Gründen der Abwärtskompatibilität akzeptiert der Konstruktor auch einen String, der den Wert der [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)-Eigenschaft enthält, anstelle des Konfigurationsobjekts.

## Instanz-Eigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidate/address) {{ReadOnlyInline}}
  - : Ein String, der die IP-Adresse des Kandidaten enthält.
- [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) {{ReadOnlyInline}}
  - : Ein String, der die Transportadresse für den Kandidaten repräsentiert, die für Konnektivitätsprüfungen verwendet werden kann. Das Format dieser Adresse ist ein `candidate-attribute`, wie in {{RFC(5245)}} definiert. Dieser String ist leer (`""`), wenn der `RTCIceCandidate` ein "Ende der Kandidaten"-Indikator ist.
- [`component`](/de/docs/Web/API/RTCIceCandidate/component) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der Kandidat ein RTP- oder ein RTCP-Kandidat ist; sein Wert ist entweder `rtp` oder `rtcp` und wird aus dem `"component-id"`-Feld im `candidate` a-line String abgeleitet.
- [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung enthält, die für alle Kandidaten des gleichen Typs gleich ist, den gleichen Ursprung (die Adresse, von der der ICE-Agent den Kandidaten gesendet hat) teilt und vom gleichen [STUN](/de/docs/Glossary/STUN)-Server stammt. Dies wird verwendet, um die ICE-Performance zu optimieren, während Kandidaten, die auf mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekten erscheinen, priorisiert und korreliert werden.
- [`port`](/de/docs/Web/API/RTCIceCandidate/port) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die Portnummer des Kandidaten angibt.
- [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) {{ReadOnlyInline}}
  - : Ein langer ganzzahliger Wert, der die Priorität des Kandidaten angibt.
- [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Protokoll des Kandidaten `"tcp"` oder `"udp"` ist.
- [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress) {{ReadOnlyInline}}
  - : Wenn der Kandidat von einem anderen Kandidaten abgeleitet ist, ist `relatedAddress` ein String, der die IP-Adresse des Host-Kandidaten enthält. Für Host-Kandidaten ist dieser Wert `null`.
- [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) {{ReadOnlyInline}}
  - : Für einen Kandidaten, der von einem anderen abgeleitet ist, wie ein Relay- oder Reflexiv-Kandidat, ist `relatedPort` eine Zahl, die die Portnummer des Kandidaten angibt, von dem dieser Kandidat abgeleitet ist. Bei Host-Kandidaten ist die `relatedPort`-Eigenschaft `null`.
- [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid) {{ReadOnlyInline}}
  - : Ein String, der das Media-Stream-Identifikationstag des Kandidaten spezifiziert, das den Medienstrom eindeutig innerhalb der Komponente identifiziert, mit der der Kandidat assoziiert ist, oder `null`, wenn eine solche Assoziation nicht existiert.
- [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) {{ReadOnlyInline}}
  - : Wenn nicht `null`, gibt `sdpMLineIndex` die nullbasierte Indexnummer der Medienbeschreibung an (wie in [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566) definiert) im [SDP](/de/docs/Glossary/SDP), mit der der Kandidat assoziiert ist.
- [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType) {{ReadOnlyInline}}
  - : Wenn `protocol` `"tcp"` ist, repräsentiert `tcpType` den Typ des TCP-Kandidaten. Andernfalls ist `tcpType` `null`.
- [`type`](/de/docs/Web/API/RTCIceCandidate/type) {{ReadOnlyInline}}
  - : Ein String, der den Typ des Kandidaten als einen der auf [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) aufgeführten Strings angibt.
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) {{ReadOnlyInline}}
  - : Ein String, der ein zufällig generiertes Benutzername-Fragment ("ice-ufrag") enthält, das ICE für die Nachrichtenintegrität zusammen mit einem zufällig generierten Passwort ("ice-pwd") verwendet. Sie können diesen String verwenden, um Generationen der ICE-Generierung zu überprüfen; jede Generation desselben ICE-Prozesses wird dasselbe `usernameFragment` verwenden, auch bei ICE-Neustarts.

## Instanz-Methoden

- [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON)
  - : Gibt eine [JSON](/de/docs/Glossary/JSON)-Repräsentation der aktuellen Konfiguration des `RTCIceCandidate` zurück. Das Format der Repräsentation ist dasselbe wie das `candidateInfo`-Objekt, das optional dem [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben werden kann, um einen Kandidaten zu konfigurieren.

## Beispiele

Für Beispiele sehen Sie sich den Artikel [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) an, der den gesamten Prozess demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
