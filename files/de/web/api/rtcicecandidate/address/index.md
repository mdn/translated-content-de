---
title: "RTCIceCandidate: address-Eigenschaft"
short-title: address
slug: Web/API/RTCIceCandidate/address
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`address`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces ist ein String, der die IP-Adresse des Geräts angibt, welches die Quelle des Kandidaten ist. Wenn nicht anders angegeben, ist `address` standardmäßig `null`.

Der Wert des `address`-Felds wird aus dem `candidateInfo`-Optionenobjekt gesetzt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `address` nicht direkt im Optionenobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-line des Objekts extrahiert, wenn es korrekt formatiert ist.

## Wert

Ein String, der die IP-Adresse angibt, von der der Kandidat stammt.

> [!NOTE]
> Wenn `port` `null` ist — und
> `port` vom [Benutzeragenten](/de/docs/Glossary/user_agent) unterstützt wird — wird das Übergeben des
> Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
> fehlschlagen und eine `OperationError`-Ausnahme werfen.

## Sicherheitshinweise

Es ist wichtig zu beachten, dass obwohl WebRTC nicht erfordert, dass zwei Peers in einer
[`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) die tatsächlichen IP-Adressen des jeweils anderen kennen, die
`address`-Eigenschaft von `RTCIceCandidate` möglicherweise mehr
Informationen über die Quelle des Remote-Peers preisgeben kann, als der Benutzer erwartet. Die IP-Adresse
kann verwendet werden, um Informationen über den Standort des Remote-Geräts, die Netzwerk-Topologie
und so weiter abzuleiten. Sie kann auch für [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Zwecke verwendet werden.

Die Kandidaten-IP-Adressen werden _immer_ der Anwendung über
`address` offengelegt, und unliebsame Anwendungen können potenziell die
Adresse dem Benutzer offenbaren. Dies kann ohne die Zustimmung des Remote-Peers geschehen.

Anwendungen, die unter Berücksichtigung des Datenschutzes und der Sicherheit der Benutzer entwickelt werden, können sich dafür entscheiden, die zulässigen Kandidaten nur auf Relay-Kandidaten zu beschränken. Dadurch wird verhindert, dass die Adresse des Remote-Benutzers offengelegt wird, reduziert jedoch den Pool der verfügbaren Kandidaten. Um dies zu tun, konfigurieren Sie die ICE-Transportpolitik des ICE-Agents mit einem Objekt, das der `configuration`-Eigenschaft entspricht, wie in [`RTCPeerConnection.setConfiguration`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) beschrieben, wie folgt:

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

Indem Sie `iceTransportPolicy` auf `"relay"` setzen, werden alle Host-Kandidaten (Kandidaten, bei denen die IP-Adresse die eigene IP-Adresse des Peers ist) aus dem Kandidatenpool ausgeschlossen, ebenso wie alle anderen Kandidaten, die keine Relay-Kandidaten sind.

## Verwendungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das fünfte Feld, `"192.0.2.172"`, ist die IP-Adresse in dieser a-line-Zeichenfolge des Kandidaten.

## Beispiele

Dieser Codeausschnitt verwendet den Wert von `address`, um eine auf IP-Adressen basierende Sperrfunktion zu implementieren.

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
