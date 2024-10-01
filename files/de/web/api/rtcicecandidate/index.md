---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCIceCandidate`**—Teil der [WebRTC-API](/de/docs/Web/API/WebRTC_API)—repräsentiert eine Kandidatenkonfiguration für die interaktive Verbindungsherstellung ({{Glossary("ICE", "ICE")}}), die verwendet werden kann, um eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu etablieren.

Ein ICE-Kandidat beschreibt die Protokolle und Routen, die WebRTC benötigt, um mit einem entfernten Gerät zu kommunizieren. Beim Start einer WebRTC-Verbindung schlagen normalerweise beide Enden der Verbindung eine Reihe von Kandidaten vor, bis sie sich gegenseitig auf einen einigen, der die Verbindung beschreibt, die sie für die beste halten. WebRTC verwendet dann die Details dieses Kandidaten, um die Verbindung zu initiieren.

Einzelheiten darüber, wie der ICE-Prozess funktioniert, finden Sie unter [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime). Der Artikel [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) bietet zusätzliche nützliche Details.

## Konstruktor

- [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)

  - : Erstellt ein `RTCIceCandidate`-Objekt, um einen einzelnen ICE-Kandidaten zu repräsentieren, der optional basierend auf einem Konfigurationsobjekt konfiguriert wird.

    > [!NOTE]
    > Aus Gründen der Abwärtskompatibilität akzeptiert der Konstruktor auch als Eingabe einen String, der den Wert der [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)-Eigenschaft anstelle des Konfigurationsobjekts enthält.

## Instanz-Eigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidate/address) {{ReadOnlyInline}}
  - : Ein String, der die IP-Adresse des Kandidaten enthält.
- [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) {{ReadOnlyInline}}
  - : Ein String, der die Transportadresse für den Kandidaten darstellt, die für Verbindungstests verwendet werden kann. Das Format dieser Adresse ist ein `candidate-attribute`, wie in {{RFC(5245)}} definiert. Dieser String ist leer (`""`), wenn das `RTCIceCandidate` ein "Ende der Kandidaten"-Indikator ist.
- [`component`](/de/docs/Web/API/RTCIceCandidate/component) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der Kandidat ein RTP- oder RTCP-Kandidat ist; sein Wert ist entweder `rtp` oder `rtcp` und wird aus dem `"component-id"`-Feld im `candidate` a-line String abgeleitet.
- [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine eindeutige Kennung enthält, die für alle Kandidaten des gleichen Typs dieselbe ist, denselben Ursprung (die Adresse, von der der ICE-Agent den Kandidaten gesendet hat) teilt und vom selben {{Glossary("STUN", "STUN")}}-Server stammt. Dies dient dazu, die ICE-Leistung zu optimieren, indem Kandidaten priorisiert und korreliert werden, die auf mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekten erscheinen.
- [`port`](/de/docs/Web/API/RTCIceCandidate/port) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die Portnummer des Kandidaten angibt.
- [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) {{ReadOnlyInline}}
  - : Ein ganzzahliger Langwert, der die Priorität des Kandidaten angibt.
- [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Protokoll des Kandidaten `"tcp"` oder `"udp"` ist.
- [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress) {{ReadOnlyInline}}
  - : Wenn der Kandidat von einem anderen Kandidaten abgeleitet ist, ist `relatedAddress` ein String, der die IP-Adresse des Hostkandidaten enthält. Für Hostkandidaten ist dieser Wert `null`.
- [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) {{ReadOnlyInline}}
  - : Für einen Kandidaten, der von einem anderen wie einem Relay- oder Reflexiv-Kandidaten abgeleitet ist, ist `relatedPort` eine Zahl, die die Portnummer des Kandidaten angibt, von dem dieser Kandidat abgeleitet ist. Für Hostkandidaten ist die Eigenschaft `relatedPort` `null`.
- [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid) {{ReadOnlyInline}}
  - : Ein String, der die Medienstrom-Identifikationsmarkierung des Kandidaten angibt, die den Medienstrom innerhalb der Komponente, mit der der Kandidat verknüpft ist, eindeutig identifiziert, oder `null`, wenn keine solche Verknüpfung besteht.
- [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) {{ReadOnlyInline}}
  - : Ist er nicht `null`, gibt `sdpMLineIndex` den nullbasierten Index der Medienbeschreibung (wie in [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566) definiert) im {{Glossary("SDP", "SDP")}} an, mit dem der Kandidat verknüpft ist.
- [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType) {{ReadOnlyInline}}
  - : Wenn `protocol` `"tcp"` ist, repräsentiert `tcpType` die Art des TCP-Kandidaten. Andernfalls ist `tcpType` `null`.
- [`type`](/de/docs/Web/API/RTCIceCandidate/type) {{ReadOnlyInline}}
  - : Ein String, der die Art des Kandidaten als einen der auf [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) aufgeführten Strings angibt.
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) {{ReadOnlyInline}}
  - : Ein String, der ein zufällig generiertes Benutzernamefragment ("ice-ufrag") enthält, das ICE zusammen mit einem zufällig generierten Passwort ("ice-pwd") für die Nachrichtenintegrität verwendet. Sie können diesen String verwenden, um ICE-Generationen zu überprüfen; jede Generation desselben ICE-Prozesses verwendet dasselbe `usernameFragment`, auch über ICE-Neustarts hinweg.

## Instanz-Methoden

- [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON)
  - : Gibt eine {{Glossary("JSON", "JSON")}}-Darstellung der aktuellen Konfiguration des `RTCIceCandidate` zurück.
    Das Format der Darstellung ist dasselbe wie das `candidateInfo`-Objekt, das optional an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben werden kann, um einen Kandidaten zu konfigurieren.

## Beispiele

Beispiele finden Sie im Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling), der den gesamten Prozess demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
