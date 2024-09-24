---
title: "RTCIceCandidate: port-Eigenschaft"
short-title: port
slug: Web/API/RTCIceCandidate/port
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`port`**-Eigenschaft der **{{domxref("RTCIceCandidate")}}**-Schnittstelle enthält die Portnummer auf dem Gerät an der durch {{domxref("RTCIceCandidate.address")}} angegebenen Adresse, unter der der Peer des Kandidaten erreicht werden kann.

Der Wert des `port`-Feldes wird aus dem `candidateInfo`-Optionsobjekt übernommen, das an den {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}} Konstruktor übergeben wird. Sie können den Wert von `port` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate` a-line des Objekts extrahiert, wenn sie richtig formatiert ist.

## Wert

Eine 16-Bit-Zahl, die die Portnummer auf dem Gerät an der durch {{domxref("RTCIceCandidate/address", "address")}} angegebenen Adresse angibt, unter der der Peer des Kandidaten erreicht werden kann.

`port` wird auf `null` initialisiert, wenn es im `candidate` nicht angegeben ist oder wenn die `candidate`-Zeichenkette nicht richtig geparst werden kann.

> [!NOTE]
> Wenn `port` `null` ist, schlägt das Übergeben des Kandidaten an {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
> fehl und löst eine `OperationError`-Ausnahme aus.
> Dies gilt nur, wenn der Kandidat `port` implementiert.

## Verwendungshinweise

Betrachten Sie diese {{Glossary("SDP")}} Attributzeile (a-line), die einen ICE-Kandidaten beschreibt:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Die Portnummer befindet sich im sechsten Feld, das `"44323"` ist. In diesem Fall wird der Wert von `port` 44323 sein.

## Beispiele

Dieser Codeausschnitt holt die IP-Adresse und Portnummer des Kandidaten und speichert sie in einem Objekt zur späteren Verwendung.

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
