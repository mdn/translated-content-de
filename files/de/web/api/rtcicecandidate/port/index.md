---
title: "RTCIceCandidate: port-Eigenschaft"
short-title: port
slug: Web/API/RTCIceCandidate/port
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`port`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces enthält die Portnummer auf dem Gerät an der durch [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address) angegebenen Adresse, unter der der Peer des Kandidaten erreicht werden kann.

Der Wert des `port`-Feldes wird aus dem `candidateInfo`-Optionsobjekt übernommen, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `port` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate` a-line des Objekts extrahiert, wenn diese richtig formatiert ist.

## Wert

Ein 16-Bit-Wert, der die Portnummer auf dem Gerät an der durch [`address`](/de/docs/Web/API/RTCIceCandidate/address) angegebenen Adresse angibt, unter der der Peer des Kandidaten erreicht werden kann.

`port` wird auf `null` gesetzt, wenn es nicht im
`candidate` angegeben ist oder wenn der `candidate`-String nicht richtig analysiert werden kann.

> [!NOTE]
> Wenn `port` `null` ist, schlägt das Übergeben des Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) fehl und löst eine `OperationError`-Ausnahme aus.
> Dies gilt nur, wenn der Kandidat `port` implementiert.

## Anwendungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Die Portnummer befindet sich im sechsten Feld, das `"44323"` lautet. In diesem Fall wird der Wert von `port` 44323 sein.

## Beispiele

Dieses Code-Snippet holt die IP-Adresse und die Portnummer des Kandidaten und speichert sie
in einem Objekt zur zukünftigen Verwendung.

```js
const candidateLoc = {
  address: candidate.ip,
  port: candidate.port,
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
