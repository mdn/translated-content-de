---
title: "RTCIceCandidate: port Eigenschaft"
short-title: port
slug: Web/API/RTCIceCandidate/port
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`port`**-Eigenschaft der Schnittstelle **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)** enthält die Portnummer auf dem Gerät an der durch [`RTCIceCandidate.address`](/de/docs/Web/API/RTCIceCandidate/address) angegebenen Adresse, unter der der Peer des Kandidaten erreicht werden kann.

Der Wert des `port`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `port` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-Zeile des Objekts extrahiert, wenn sie ordnungsgemäß formatiert ist.

## Wert

Eine 16-Bit-Zahl, die die Portnummer auf dem Gerät an der durch [`address`](/de/docs/Web/API/RTCIceCandidate/address) angegebenen Adresse angibt, unter der der Peer des Kandidaten erreicht werden kann.

`port` wird auf `null` initialisiert, wenn er in der
`candidate` nicht angegeben ist oder wenn der `candidate`-String nicht korrekt geparst werden kann.

> [!NOTE]
> Wenn `port` `null` ist, wird das Übergeben des Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)
> fehlschlagen und eine `OperationError`-Ausnahme auslösen.
> Dies gilt nur, wenn der Kandidat `port` implementiert.

## Verwendungsnotizen

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-Zeile), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Die Portnummer befindet sich im sechsten Feld, das `"44323"` ist. In diesem Fall wird der Wert von `port` 44323 sein.

## Beispiele

Dieses Codebeispiel ruft die IP-Adresse und die Portnummer des Kandidaten ab und speichert sie in einem Objekt zur späteren Verwendung.

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
