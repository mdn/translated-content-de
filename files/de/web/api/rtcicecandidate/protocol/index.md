---
title: "RTCIceCandidate: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/RTCIceCandidate/protocol
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`protocol`**-Eigenschaft des **[`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)**-Interfaces ist ein String, der angibt, ob der Kandidat [UDP](/de/docs/Glossary/UDP) oder [TCP](/de/docs/Glossary/TCP) als Transportprotokoll verwendet.

Der Wert des `protocol`-Feldes wird aus dem `candidateInfo`-Optionsobjekt gesetzt, das dem [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Sie können den Wert von `protocol` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der `candidate`-a-Zeile des Objekts extrahiert, wenn sie richtig formatiert ist.

`protocol` ist standardmäßig `null`, wenn es nicht richtig im SDP angegeben ist, was jedoch ein Fehlerzustand ist und zu einer Ausnahme führt, wenn Sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen.

## Wert

Ein String, der angibt, welches Netzwerkprotokoll der Kandidat verwendet:

- `tcp`
  - : Der Kandidat würde, falls ausgewählt, [TCP](/de/docs/Glossary/TCP) als Transportprotokoll für seine Daten verwenden. Die Eigenschaft [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType) liefert zusätzliche Informationen über die Art des durch das Objekt dargestellten TCP-Kandidaten.
- `udp`
  - : Der Kandidat verwendet das [UDP](/de/docs/Glossary/UDP)-Transportprotokoll für seine Daten. Dies ist das bevorzugte Protokoll für Medieninteraktionen aufgrund seines besseren Leistungsprofils.

> [!NOTE]
> Wenn `protocol` `null` ist — und `protocol` vom [user agent](/de/docs/Glossary/user_agent) unterstützt wird — wird das Übergeben des Kandidaten an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) fehlschlagen und eine `OperationError`-Ausnahme auslösen.

## Verwendungshinweise

Hier ist ein Beispiel für eine Kandidat-a-Zeile aus einer ICE-Transaktion:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das dritte Feld, `"udp"`, ist der Protokolltyp und zeigt an, dass der Kandidat das UDP-Transportprotokoll verwenden würde.

## Beispiele

Dieser Codeausschnitt untersucht den Wert von `protocol`, um zu entscheiden, ob er den Wert von [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType) betrachten soll, um zu sehen, ob es sich um einen **simultaneous-open** (**S-O**)-Kandidaten handelt.

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
