---
title: "RTCIceCandidatePairStats: selected-Eigenschaft"
short-title: selected
slug: Web/API/RTCIceCandidatePairStats/selected
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die _nicht standardmäßige_, Firefox-spezifische [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Eigenschaft **`selected`** gibt an, ob das durch das Objekt beschriebene Kandidatenpaar dasjenige ist, welches derzeit zur Kommunikation mit dem entfernten Partner verwendet wird.

## Syntax

```js-nolint
icpStats.selected
```

### Wert

Ein Firefox-spezifischer boolescher Wert, der `true` ist, wenn das durch dieses Objekt beschriebene Kandidatenpaar dasjenige ist, das derzeit verwendet wird.

In jedem anderen Browser können Sie das ausgewählte Kandidatenpaar ermitteln, indem Sie nach einem Statistikobjekt vom Typ `transport` suchen, das ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt ist. Die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) Eigenschaft dieses Objekts gibt an, ob der angegebene Transport derjenige ist, der verwendet wird.

## Beispiel

Die in diesem Beispiel gezeigte Funktion identifiziert das derzeit ausgewählte Kandidatenpaar aus einem Statistikbericht, indem sie zuerst über jeden Bericht iteriert und nach einem `transport` Bericht sucht; wenn einer gefunden wird, wird dessen [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) verwendet, um das [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) zu erhalten, das die Verbindung beschreibt.

Wenn das fehlschlägt, durchläuft der zweite Abschnitt die Berichte und sucht nach einem `candidate-pair` Eintrag, dessen Firefox-spezifische `selected` Eigenschaft `true` ist. Dieses Kandidatenpaar wird dann als das derzeit ausgewählte zurückgegeben.

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
