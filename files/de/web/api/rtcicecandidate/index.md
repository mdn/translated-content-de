---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Das **`RTCIceCandidate`** Interface – Teil der [WebRTC API](/de/docs/Web/API/WebRTC_API) – repräsentiert eine Interactive Connectivity Establishment ({{Glossary("ICE", "ICE")}}) Konfiguration, die verwendet werden kann, um eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu etablieren.

Ein ICE-Kandidat beschreibt die Protokolle und das Routing, die für WebRTC erforderlich sind, um mit einem entfernten Gerät kommunizieren zu können. Beim Starten einer WebRTC-Peer-Verbindung wird typischerweise eine Reihe von Kandidaten von jeder Seite der Verbindung vorgeschlagen, bis sie sich gegenseitig auf einen einigen, der die Verbindung beschreibt, die sie für die beste halten. WebRTC verwendet dann die Details dieses Kandidaten, um die Verbindung zu initiieren.

Für Details darüber, wie der ICE-Prozess funktioniert, siehe [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime). Der Artikel [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) bietet zusätzliche nützliche Details.

## Konstruktor

- [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)

  - : Erstellt ein `RTCIceCandidate`-Objekt, um einen einzelnen ICE-Kandidaten darzustellen, optional basierend auf einem Konfigurationsobjekt konfiguriert.

    > [!NOTE]
    > Aus Gründen der Abwärtskompatibilität akzeptiert der Konstruktor auch einen String als Eingabe, welcher den Wert der [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)-Eigenschaft anstelle des Konfigurationsobjekts enthält.

## Instanz-Eigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidate/address) {{ReadOnlyInline}}
  - : Ein String, der die IP-Adresse des Kandidaten enthält.
- [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) {{ReadOnlyInline}}
  - : Ein String, der die Transportadresse für den Kandidaten darstellt, die für Konnektivitätsprüfungen verwendet werden kann. Das Format dieser Adresse ist ein `candidate-attribute` wie in {{RFC(5245)}} definiert. Dieser String ist leer (`""`), wenn das `RTCIceCandidate` ein Hinweis auf das "Ende der Kandidaten" ist.
- [`component`](/de/docs/Web/API/RTCIceCandidate/component) {{ReadOnlyInline}}
  - : Ein String, der anzeigt, ob der Kandidat ein RTP- oder ein RTCP-Kandidat ist; sein Wert ist entweder `rtp` oder `rtcp` und leitet sich aus dem `"component-id"`-Feld in der `candidate` a-line-Zeichenfolge ab.
- [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung enthält, die für alle Kandidaten desselben Typs gleich ist, die gleiche Basis teilen (die Adresse, von der der ICE-Agent den Kandidaten gesandt hat) und vom selben {{Glossary("STUN", "STUN")}}-Server stammen. Dies wird verwendet, um die ICE-Leistung zu optimieren, während Kandidaten priorisiert und korreliert werden, die auf mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekten erscheinen.
- [`port`](/de/docs/Web/API/RTCIceCandidate/port) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die Portnummer des Kandidaten angibt.
- [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) {{ReadOnlyInline}}
  - : Ein langer ganzzahliger Wert, der die Priorität des Kandidaten angibt.
- [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Protokoll des Kandidaten `"tcp"` oder `"udp"` ist.
- [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress) {{ReadOnlyInline}}
  - : Wenn der Kandidat von einem anderen Kandidaten abgeleitet ist, ist `relatedAddress` ein String, der die IP-Adresse dieses Host-Kandidaten enthält. Für Host-Kandidaten ist dieser Wert `null`.
- [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) {{ReadOnlyInline}}
  - : Für einen Kandidaten, der von einem anderen abgeleitet ist, wie einen Relay- oder Reflexivkandidaten, ist `relatedPort` eine Zahl, die die Portnummer des Kandidaten angibt, von dem dieser Kandidat abgeleitet ist. Für Host-Kandidaten ist die `relatedPort`-Eigenschaft `null`.
- [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid) {{ReadOnlyInline}}
  - : Ein String, der das Media-Stream-Identifikationstag des Kandidaten spezifiziert, welches den Media-Stream innerhalb der Komponente eindeutig identifiziert, mit dem der Kandidat assoziiert ist, oder `null`, wenn keine solche Assoziation existiert.
- [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) {{ReadOnlyInline}}
  - : Wenn nicht `null`, gibt `sdpMLineIndex` die nullbasierte Indexnummer der Medienbeschreibung (wie in [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566) definiert) im {{Glossary("SDP", "SDP")}} an, mit der der Kandidat assoziiert ist.
- [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType) {{ReadOnlyInline}}
  - : Wenn `protocol` `"tcp"` ist, repräsentiert `tcpType` die Art des TCP-Kandidaten. Andernfalls ist `tcpType` `null`.
- [`type`](/de/docs/Web/API/RTCIceCandidate/type) {{ReadOnlyInline}}
  - : Ein String, der den Typ des Kandidaten angibt, als einer der auf [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) aufgeführten Strings.
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) {{ReadOnlyInline}}
  - : Ein String, der ein zufällig generiertes Benutzername-Fragment ("ice-ufrag") enthält, das ICE zusammen mit einem zufällig generierten Passwort ("ice-pwd") für die Nachrichtenintegrität verwendet. Sie können diesen String verwenden, um Generationen des ICE-Prozesses zu verifizieren; jede Generation desselben ICE-Prozesses wird dasselbe `usernameFragment` verwenden, selbst bei ICE-Neustarts.

## Instanzmethoden

- [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON)
  - : Gibt eine {{Glossary("JSON", "JSON")}}-Repräsentation der aktuellen Konfiguration des `RTCIceCandidate` zurück.
    Das Format der Repräsentation ist dasselbe wie das `candidateInfo`-Objekt, das optional an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben werden kann, um einen Kandidaten zu konfigurieren.

## Beispiele

Für Beispiele siehe den Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling), der den gesamten Prozess demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
