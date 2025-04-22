---
title: "RTCIceCandidatePairStats: selected-Eigenschaft"
short-title: selected
slug: Web/API/RTCIceCandidatePairStats/selected
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die **`selected`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Dictionaries zeigt an, ob das durch das Objekt beschriebene Kandidatenpaar das aktuell verwendete Paar für die Kommunikation mit dem entfernten Peer ist.

Diese Eigenschaft ist nicht standardisiert und wird nur von Firefox unterstützt. Der standardmäßige Weg zur Bestimmung des ausgewählten Kandidatenpaars besteht darin, die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats#selectedcandidatepairid)-Eigenschaft des Statistikobjekts des Typs `transport` zu betrachten.

## Wert

`true`, wenn das durch dieses Objekt beschriebene Kandidatenpaar das aktuell verwendete ist, andernfalls `false`.

## Beispiele

Die in diesem Beispiel gezeigte Funktion identifiziert das aktuell ausgewählte Kandidatenpaar aus einem Statistikbericht, indem sie zunächst über jeden Bericht iteriert und nach einem `transport`-Bericht sucht. Wenn einer gefunden wird, wird die `selectedCandidatePairId` dieses Transports verwendet, um das [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) zu erhalten, das die Verbindung beschreibt.

Falls das fehlschlägt, iteriert der zweite Teil über die Berichte und sucht nach einem `candidate-pair`-Eintrag, dessen Firefox-spezifische `selected`-Eigenschaft `true` ist. Dieses Kandidatenpaar wird dann als das aktuell ausgewählte zurückgegeben.

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

Nicht Teil einer Spezifikation. Diese Eigenschaft ist einzigartig für Firefox.

## Browser-Kompatibilität

{{Compat}}
