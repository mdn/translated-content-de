---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCIceCandidate`** ist Teil der [WebRTC API](/de/docs/Web/API/WebRTC_API) und repräsentiert eine mögliche Konfiguration für Interactive Connectivity Establishment ({{Glossary("ICE", "ICE")}}), die zum Aufbau einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet werden kann.

Ein ICE-Kandidat beschreibt die Protokolle und Routing-Informationen, die WebRTC für die Kommunikation mit einem entfernten Gerät benötigt. Beim Aufbau einer WebRTC-Peer-Verbindung schlagen beide Seiten üblicherweise mehrere Kandidaten vor, bis sie sich auf den Kandidaten einigen, der die aus ihrer Sicht beste Verbindung beschreibt. WebRTC verwendet anschließend dessen Angaben, um die Verbindung aufzubauen.

Weitere Informationen zum Ablauf des ICE-Prozesses finden Sie unter [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime). Der Artikel [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) enthält weitere nützliche Einzelheiten.

## Konstruktor

- [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)
  - : Erstellt ein `RTCIceCandidate`-Objekt, das einen einzelnen ICE-Kandidaten repräsentiert und optional anhand eines Konfigurationsobjekts konfiguriert wird.

    > [!NOTE]
    > Aus Gründen der Abwärtskompatibilität akzeptiert der Konstruktor statt eines Konfigurationsobjekts auch einen String mit dem Wert der Eigenschaft [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).

## Instanzeigenschaften

- [`address`](/de/docs/Web/API/RTCIceCandidate/address) {{ReadOnlyInline}}
  - : Ein String mit der IP-Adresse des Kandidaten.
- [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) {{ReadOnlyInline}}
  - : Ein String, der die Transportadresse des Kandidaten repräsentiert, die für Konnektivitätsprüfungen verwendet werden kann. Das Format dieser Adresse ist ein `candidate-attribute` gemäß {{RFC(5245)}}. Bei einem `RTCIceCandidate`, der das Ende der Kandidatenliste anzeigt, ist dieser String leer (`""`).
- [`component`](/de/docs/Web/API/RTCIceCandidate/component) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob es sich um einen RTP- oder RTCP-Kandidaten handelt. Sein Wert ist entweder `rtp` oder `rtcp` und wird aus dem Feld `"component-id"` im `candidate`-a-line-String abgeleitet.
- [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) {{ReadOnlyInline}}
  - : Gibt einen String mit einem eindeutigen Bezeichner zurück. Er ist für Kandidaten gleich, die denselben Typ und dieselbe Basis (die Adresse, von der aus der ICE-Agent den Kandidaten gesendet hat) haben und vom selben {{Glossary("STUN", "STUN")}}-Server stammen. Dies hilft, die ICE-Leistung zu optimieren, wenn Kandidaten priorisiert und einander zugeordnet werden, die auf mehreren [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekten erscheinen.
- [`port`](/de/docs/Web/API/RTCIceCandidate/port) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die Portnummer des Kandidaten angibt.
- [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) {{ReadOnlyInline}}
  - : Ein langer ganzzahliger Wert, der die Priorität des Kandidaten angibt.
- [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob das Protokoll des Kandidaten `"tcp"` oder `"udp"` ist.
- [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress) {{ReadOnlyInline}}
  - : Wenn der Kandidat von einem anderen Kandidaten abgeleitet ist, enthält `relatedAddress` als String die IP-Adresse dieses Host-Kandidaten. Bei Host-Kandidaten ist dieser Wert `null`.
- [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort) {{ReadOnlyInline}}
  - : Bei einem Kandidaten, der von einem anderen abgeleitet ist, beispielsweise einem Relay- oder reflexiven Kandidaten, gibt `relatedPort` als Zahl die Portnummer des Kandidaten an, von dem er abgeleitet wurde. Bei Host-Kandidaten ist die Eigenschaft `relatedPort` gleich `null`.
- [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid) {{ReadOnlyInline}}
  - : Ein String mit der Medienstream-Kennung des Kandidaten, die den Medienstream innerhalb der Komponente, der der Kandidat zugeordnet ist, eindeutig identifiziert. Besteht keine solche Zuordnung, ist der Wert `null`.
- [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) {{ReadOnlyInline}}
  - : Falls der Wert nicht `null` ist, gibt `sdpMLineIndex` den nullbasierten Index der Medienbeschreibung (gemäß [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566)) im {{Glossary("SDP", "SDP")}} an, der der Kandidat zugeordnet ist.
- [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType) {{ReadOnlyInline}}
  - : Wenn `protocol` den Wert `"tcp"` hat, gibt `tcpType` den Typ des TCP-Kandidaten an. Andernfalls ist `tcpType` gleich `null`.
- [`type`](/de/docs/Web/API/RTCIceCandidate/type) {{ReadOnlyInline}}
  - : Ein String, der den Typ des Kandidaten angibt. Der Wert ist einer der unter [`RTCIceCandidate.type`](/de/docs/Web/API/RTCIceCandidate/type#value) aufgeführten Strings.
- [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) {{ReadOnlyInline}}
  - : Ein String mit einem zufällig erzeugten Benutzernamenfragment („ice-ufrag“), das ICE zusammen mit einem zufällig erzeugten Passwort („ice-pwd“) zur Sicherstellung der Nachrichtenintegrität verwendet. Mithilfe dieses Strings können Sie ICE-Generationen überprüfen: Jede Generation desselben ICE-Prozesses verwendet dasselbe `usernameFragment`, auch nach einem ICE-Neustart.

## Instanzmethoden

- [`toJSON()`](/de/docs/Web/API/RTCIceCandidate/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `RTCIceCandidate`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

Beispiele finden Sie im Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling), der den gesamten Ablauf veranschaulicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
