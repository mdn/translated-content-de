---
title: "RTCIceCandidate: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/RTCIceCandidate/protocol
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`protocol`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces ist ein String, der angibt, ob der Kandidat [UDP](/de/docs/Glossary/UDP) oder [TCP](/de/docs/Glossary/TCP) als Transportprotokoll verwendet.

Der Wert des `protocol`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `protocol` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus dem `candidate` a-line des Objekts extrahiert, wenn es richtig formatiert ist.

`protocol` ist standardmäßig `null`, wenn es nicht richtig im SDP spezifiziert ist, aber dies ist ein Fehlerzustand und führt zu einer Ausnahme, wenn Sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen.

## Wert

Ein String, der angibt, welches Netzwerkprotokoll der Kandidat verwendet:

- `tcp`
  - : Der Kandidat würde, wenn ausgewählt, [TCP](/de/docs/Glossary/TCP) als Transportprotokoll für seine Daten verwenden. Die [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType)-Eigenschaft liefert zusätzliche Informationen über die Art des durch das Objekt dargestellten TCP-Kandidaten.
- `udp`
  - : Der Kandidat wird das [UDP](/de/docs/Glossary/UDP)-Transportprotokoll für seine Daten verwenden. Dies ist das bevorzugte Protokoll für Medieninteraktionen aufgrund seines besseren Leistungsprofils.

> [!NOTE]
> Wenn `protocol` `null` ist — und `protocol` vom [User Agent](/de/docs/Glossary/user_agent) unterstützt wird — schlägt das Übergeben des Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) fehl, und es wird eine `OperationError`-Ausnahme geworfen.

## Nutzungshinweise

Hier ist ein Beispiel eines Kandidaten-a-line aus einer ICE-Transaktion:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das dritte Feld, `"udp"`, ist der Protokolltyp, der anzeigt, dass der Kandidat das UDP-Transportprotokoll verwenden würde.

## Beispiele

Dieses Code-Snippet untersucht den Wert von `protocol`, um zu entscheiden, ob der Wert von [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType) betrachtet werden soll, um zu sehen, ob es sich um einen **simultaneous-open** (**S-O**)-Kandidaten handelt.

```js
if (candidate.protocol === "tcp") {
  if (candidate.tcpType === "so") {
    adjustForSimultaneousOpen(candidate);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
