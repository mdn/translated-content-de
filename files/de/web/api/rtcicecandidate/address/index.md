---
title: "RTCIceCandidate: address-Eigenschaft"
short-title: address
slug: Web/API/RTCIceCandidate/address
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`address`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces ist ein String, der die IP-Adresse des Geräts enthält, das die Quelle des Kandidaten ist.
Der `address`-Wert ist standardmäßig `null`, falls nicht anders angegeben.

Der Wert des `address`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird.
Sie können den Wert von `address` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-line des Objekts extrahiert, sofern sie richtig formatiert ist.

## Wert

Ein String, der die IP-Adresse angibt, von der der Kandidat stammt.

> [!NOTE]
> Wenn `port` `null` ist — und
> `port` vom [User-Agent](/de/docs/Glossary/user_agent) unterstützt wird — wird das
> Hinzufügen des Kandidaten zu [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
> fehlschlagen und eine `OperationError`-Ausnahme auslösen.

## Sicherheitshinweise

Es ist wichtig zu beachten, dass WebRTC zwar nicht erfordert, dass die beiden Peers einer
[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) die tatsächlichen IP-Adressen des anderen kennen, die
`address`-Eigenschaft auf `RTCIceCandidate` _kann_ jedoch mehr
Informationen über die Quelle des entfernten Peers preisgeben, als der Benutzer erwartet. Die IP-Adresse
kann verwendet werden, um Informationen über den Standort des entfernten Geräts, die Netzwerkstruktur
usw. abzuleiten. Sie kann auch zu Zwecken des [Fingerprintings](/de/docs/Glossary/Fingerprinting) verwendet werden.

Die Kandidat-IP-Adressen werden _immer_ über
`address` der Anwendung offengelegt, und unerwünschte Anwendungen können wiederum potenziell die
Adresse dem Benutzer offenlegen. Dies kann ohne das Einverständnis des entfernten Peers geschehen.

Anwendungen, die unter Berücksichtigung der Privatsphäre und Sicherheit des Nutzers entwickelt werden, können sich entscheiden, die
zugelassenen Kandidaten nur auf Relay-Kandidaten zu beschränken. Dies verhindert, dass die Adresse des entfernten Nutzers offengelegt wird, reduziert jedoch den Pool der verfügbaren Kandidaten. Dazu konfigurieren Sie die ICE-Transportpolitik des ICE-Agenten mit einem Objekt, das der `configuration`-Eigenschaft entspricht, die in [`RTCPeerConnection.setConfiguration`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) beschrieben ist, wie folgt:

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

Durch Setzen von `iceTransportPolicy` auf `"relay"`
werden alle Host-Kandidaten (Kandidaten, bei denen die IP-Adresse die eigene IP-Adresse des Peers ist) aus dem Kandidatenpool ausgeschlossen, ebenso wie alle anderen Kandidaten, die keine Relay-Kandidaten sind.

## Nutzungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das fünfte Feld, `"192.0.2.172"`, ist die IP-Adresse in dieser Kandidaten-a-line-Zeichenkette.

## Beispiele

Dieser Codeausschnitt nutzt den Wert von `address`, um eine IP-Adress-basierte Sperrfunktion zu implementieren.

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
