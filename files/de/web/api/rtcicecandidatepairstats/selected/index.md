---
title: "RTCIceCandidatePairStats: selected-Eigenschaft"
short-title: selected
slug: Web/API/RTCIceCandidatePairStats/selected
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die **`selected`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt an, ob das vom Objekt beschriebene Kandidatenpaar dasjenige ist, das derzeit zur Kommunikation mit dem entfernten Peers verwendet wird.

Diese Eigenschaft ist nicht standardisiert und wird nur von Firefox unterstützt.
Die standardmäßige Methode zur Bestimmung des ausgewählten Kandidatenpaars besteht darin, die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats#selectedcandidatepairid)-Eigenschaft des Statistik-Objekts des Typs `transport` zu betrachten.

## Wert

`true`, wenn das von diesem Objekt beschriebene Kandidatenpaar derzeit verwendet wird, andernfalls `false`.

## Beispiele

Die in diesem Beispiel gezeigte Funktion identifiziert das derzeit ausgewählte Kandidatenpaar aus einem Statistikbericht, indem sie zunächst über jeden Bericht iteriert und nach einem `transport`-Bericht sucht.
Wenn ein solcher gefunden wird, wird die `selectedCandidatePairId` dieses Transports verwendet, um das [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) zu erhalten, das die Verbindung beschreibt.

Falls dies nicht gelingt, wird im zweiten Teil über die Berichte iteriert, um einen `candidate-pair`-Eintrag zu finden, dessen Firefox-spezifische `selected`-Eigenschaft `true` ist.
Dieses Kandidatenpaar wird dann als das derzeit ausgewählte zurückgegeben.

```js
function getCurrentCandidatePair(statsResults) {
  statsResults.forEach((report) => {
    if (report.type === "transport") {
      currentPair = statsResults.get(report.selectedCandidatePairId);
    }
  });

  if (!currentPair) {
    statsResults.forEach((report) => {
      if (report.type === "candidate-pair" && report.selected) {
        currentPair = report;
      }
    });
  }

  return currentPair;
}
```

## Spezifikationen

Teil keiner Spezifikation.
Diese Eigenschaft ist einzigartig für Firefox.

## Browser-Kompatibilität

{{Compat}}
