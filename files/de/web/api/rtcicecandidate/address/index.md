---
title: "RTCIceCandidate: address-Eigenschaft"
short-title: address
slug: Web/API/RTCIceCandidate/address
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`address`**-Eigenschaft der **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Schnittstelle ist ein String, der die IP-Adresse des Geräts angibt, das die Quelle des Kandidaten ist.
Die `address` ist standardmäßig `null`, wenn nicht anders angegeben.

Der Wert des `address`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird.
Sie können den Wert von `address` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-line des Objekts extrahiert, wenn diese korrekt formatiert ist.

## Wert

Ein String, der die IP-Adresse angibt, von der der Kandidat kommt.

> [!NOTE]
> Wenn `port` `null` ist — und
> `port` vom {{Glossary("user_agent", "user agent")}} unterstützt wird — wird das
> Übergeben des Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
> fehlschlagen und eine `OperationError`-Ausnahme werfen.

## Sicherheitshinweise

Es ist wichtig zu beachten, dass, obwohl WebRTC nicht erfordert, dass die beiden Peers einer
[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) die tatsächlichen IP-Adressen voneinander kennen, die
`address`-Eigenschaft auf `RTCIceCandidate` _kann_ mehr
Informationen über die Quelle des entfernten Peers preisgeben, als der Benutzer erwartet. Die IP-Adresse
kann verwendet werden, um Informationen über die Lage des entfernten Geräts, die Netzwerkstruktur usw. abzuleiten. Sie kann auch für {{Glossary("Fingerprinting", "Browser-Fingerprinting")}}-Zwecke verwendet werden.

Die Kandidaten-IP-Adressen werden _immer_ der Anwendung über
`address` offengelegt, und unerwünschte Anwendungen können im Gegenzug potenziell die
Adresse dem Benutzer offenbaren. Dies kann ohne die Zustimmung des entfernten Peers geschehen.

Anwendungen, die mit Blick auf den Datenschutz und die Sicherheit der Benutzer entwickelt werden, können sich dafür entscheiden, die
erlaubten Kandidaten auf nur Relay-Kandidaten zu beschränken. Dadurch wird verhindert, dass die Adresse des Remote-Benutzers offengelegt wird, aber der Pool der verfügbaren Kandidaten, aus denen gewählt werden kann, wird reduziert.
Um dies zu tun, konfigurieren Sie die ICE-Transport-Policy des ICE-Agenten mit einem Objekt, das der `configuration`-Eigenschaft entspricht, wie in [`RTCPeerConnection.setConfiguration`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) beschrieben, etwa so:

```js
const rtcConfig = {
  iceServers: [
    {
      urls: "turn:my-turn.server.ip",
      username: "username",
      credential: "password",
    },
  ],
  iceTransportPolicy: "relay",
};
```

Indem Sie `iceTransportPolicy` auf `"relay"` setzen,
werden Host-Kandidaten (Kandidaten, bei denen die IP-Adresse die eigene IP-Adresse des Peers ist) aus dem Kandidatenpool ausgeschlossen, ebenso wie alle anderen Kandidaten, die keine Relay-Kandidaten sind.

## Nutzungshinweise

Betrachten Sie diese {{Glossary("SDP", "SDP")}}-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das fünfte Feld, `"192.0.2.172"`, ist die IP-Adresse in dieser a-line-Zeichenkette des Kandidaten.

## Beispiele

Dieser Code-Ausschnitt verwendet den Wert von `address`, um eine Sperrfunktion für IP-Adressen zu implementieren.

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
