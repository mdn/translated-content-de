---
title: "RTCIceCandidate: address-Eigenschaft"
short-title: address
slug: Web/API/RTCIceCandidate/address
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`address`**-Eigenschaft des **{{domxref("RTCIceCandidate")}}**-Interfaces ist ein String, der die IP-Adresse des Geräts bereitstellt, das die Quelle des Kandidaten ist.
Der `address`-Wert ist standardmäßig `null`, wenn nichts anderes angegeben ist.

Der Wert des `address`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das an den Konstruktor {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} übergeben wird.
Sie können den Wert von `address` nicht direkt im Optionsobjekt angeben, aber der Wert wird automatisch aus der `candidate`-a-line des Objekts extrahiert, wenn diese richtig formatiert ist.

## Wert

Ein String, der die IP-Adresse angibt, von der der Kandidat kommt.

> [!NOTE]
> Wenn `port` `null` ist — und
> `port` vom {{Glossary("user agent")}} unterstützt wird — schlägt das Übergeben des
> Kandidaten an {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
> fehl und wirft eine `OperationError`-Exception.

## Sicherheitshinweise

Es ist wichtig zu beachten, dass obwohl WebRTC nicht erfordert, dass die beiden Peers in einer
{{domxref("RTCPeerConnection")}} die tatsächlichen IP-Adressen voneinander kennen, die
`address`-Eigenschaft auf `RTCIceCandidate` _kann_ mehr
Informationen über die Quelle des entfernten Peers preisgeben, als der Nutzer erwartet. Die IP-Adresse
kann verwendet werden, um Informationen über den Standort des entfernten Geräts, die Netzwerk-Topologie
und dergleichen abzuleiten. Sie kann auch für [Fingerprinting](/de/docs/Glossary/Fingerprinting) Zwecke verwendet werden.

Die IP-Adressen des Kandidaten werden _immer_ der Anwendung über
`address` offengelegt, und unlautere Anwendungen könnten die
Adresse im Gegenzug möglicherweise dem Nutzer offenlegen. Dies kann ohne die Zustimmung des entfernten Peers erfolgen.

Anwendungen, die mit Blick auf die Privatsphäre und Sicherheit der Nutzer entwickelt werden, können entscheiden, die
erlaubten Kandidaten auf ausschließlich Relay-Kandidaten zu beschränken. Dies verhindert, dass die Adresse des entfernten Nutzers offengelegt wird, reduziert jedoch den Pool verfügbarer Kandidaten, aus denen gewählt werden kann.
Um dies zu tun, konfigurieren Sie die ICE-Agent-Transportpolitik des ICE-Agent mit einem Objekt, das mit der `configuration`-Eigenschaft beschrieben in {{domxref("RTCPeerConnection.setConfiguration")}} übereinstimmt, wie folgt:

```js
const rtcConfig = {
  iceServers: [
    {
      urls: "turn:myturn.server.ip",
      username: "username",
      credential: "password",
    },
  ],
  iceTransportPolicy: "relay",
};
```

Indem `iceTransportPolicy` auf `"relay"` gesetzt wird,
werden alle Host-Kandidaten (Kandidaten, bei denen die IP-Adresse die eigene IP-Adresse des Peers ist) aus dem Kandidatenpool ausgeschlossen, ebenso wie alle anderen Kandidaten, die keine Relay-Kandidaten sind.

## Verwendungshinweise

Betrachten Sie diese {{Glossary("SDP")}}-Attribute-Zeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das fünfte Feld, `"192.0.2.172"`, ist die IP-Adresse in der a-line-Zeichenkette dieses Kandidaten.

## Beispiele

Dieses Code-Snippet verwendet den Wert von `address`, um eine auf IP-Adressen basierende Sperrfunktion zu implementieren.

```js
if (ipBanList.includes(candidate.address)) {
  rejectCandidate(candidate);
} else {
  acceptCandidate(candidate);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
