---
title: "RTCIceCandidatePairStats: selected-Eigenschaft"
short-title: selected
slug: Web/API/RTCIceCandidatePairStats/selected
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die **`selected`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt an, ob das durch das Objekt beschriebene Kandidatenpaar dasjenige ist, das derzeit zur Kommunikation mit dem entfernten Peer verwendet wird.

Diese Eigenschaft ist nicht standardisiert und wird nur von Firefox unterstützt.
Der standardisierte Weg, um das ausgewählte Kandidatenpaar zu bestimmen, besteht darin, die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId)-Eigenschaft des Statistikobjekts vom Typ `transport` zu betrachten.

## Wert

`true`, wenn das durch dieses Objekt beschriebene Kandidatenpaar das derzeit verwendete ist, und `false` andernfalls.

## Beispiele

Die in diesem Beispiel gezeigte Funktion identifiziert das derzeit ausgewählte Kandidatenpaar aus einem Statistikbericht, indem sie zunächst über jeden Bericht iteriert und nach einem `transport`-Bericht sucht.
Wenn ein solcher gefunden wird, wird die `selectedCandidatePairId` dieses Transports verwendet, um das [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) zu erhalten, das die Verbindung beschreibt.

Schlägt dies fehl, iteriert der zweite Teil über die Berichte und sucht nach einem `candidate-pair`-Datensatz, dessen Firefox-spezifische `selected`-Eigenschaft `true` ist.
Dieses Kandidatenpaar wird dann als das aktuell ausgewählte zurückgegeben.

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
