---
title: "RTCIceCandidate: Protokolleigenschaft"
short-title: Protokoll
slug: Web/API/RTCIceCandidate/protocol
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`protocol`**-Eigenschaft der **{{domxref("RTCIceCandidate")}}**-Schnittstelle ist ein String, der angibt, ob der Kandidat {{Glossary("UDP")}} oder {{Glossary("TCP")}} als Transportprotokoll verwendet.

Der Wert des `protocol`-Feldes wird aus dem `candidateInfo`-Optionsobjekt festgelegt, das an den {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}-Konstruktor übergeben wird. Sie können den Wert von `protocol` nicht direkt im Optionsobjekt angeben, aber sein Wert wird automatisch aus der a-Line des `candidate`-Objekts extrahiert, sofern es richtig formatiert ist.

Standardmäßig ist `protocol` `null`, wenn es nicht richtig im SDP angegeben ist. Dies stellt jedoch einen Fehlerzustand dar und führt zu einer geworfenen Ausnahme, wenn Sie {{domxref("RTCPeerConnection.addIceCandidate()")}} aufrufen.

## Wert

Ein String, der angibt, welches Netzwerkprotokoll der Kandidat verwendet:

- `tcp`
  - : Der Kandidat würde, falls ausgewählt, {{Glossary("TCP")}} als Transportprotokoll für seine Daten verwenden. Die Eigenschaft {{domxref("RTCIceCandidate.tcpType", "tcpType")}} liefert zusätzliche Informationen über die Art des durch das Objekt dargestellten TCP-Kandidaten.
- `udp`
  - : Der Kandidat wird das {{Glossary("UDP")}}-Transportprotokoll für seine Daten verwenden. Dies ist das bevorzugte Protokoll für Medieninteraktionen, da es eine bessere Leistungsbilanz aufweist.

> [!NOTE]
> Wenn `protocol` `null` ist — und `protocol` vom {{Glossary("user agent")}} unterstützt wird — wird das Hinzufügen des Kandidaten zu {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} fehlschlagen und eine `OperationError`-Ausnahme werfen.

## Verwendungshinweise

Hier ist ein Beispiel für eine a-Line-Kandidat aus einer ICE-Transaktion:

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Das dritte Feld, `"udp"`, ist der Protokolltyp, der angibt, dass der Kandidat das UDP-Transportprotokoll verwenden würde.

## Beispiele

Dieses Codebeispiel untersucht den Wert von `protocol`, um zu entscheiden, ob der Wert von {{domxref("RTCIceCandidate.tcpType", "tcpType")}} betrachtet werden sollte, um festzustellen, ob es sich um einen **simultaneous-open** (**S-O**)-Kandidaten handelt.

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
