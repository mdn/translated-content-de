---
title: "RTCIceCandidatePairStats: selected-Eigenschaft"
short-title: selected
slug: Web/API/RTCIceCandidatePairStats/selected
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die _nicht standardisierte_, Firefox-spezifische [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Eigenschaft **`selected`** gibt an, ob das vom Objekt beschriebene Kandidatenpaar das aktuell verwendete ist, um mit dem entfernten Partner zu kommunizieren.

## Syntax

```js-nolint
icpStats.selected
```

### Wert

Ein Firefox-spezifischer Boolean-Wert, der `true` ist, wenn das von diesem Objekt beschriebene Kandidatenpaar das aktuell verwendete ist.

In allen anderen Browsern können Sie das ausgewählte Kandidatenpaar ermitteln, indem Sie nach einem Statistikobjekt vom Typ `transport` suchen, das ein [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt ist. Die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) Eigenschaft dieses Objekts zeigt an, ob der angegebene Transport der aktuell verwendete ist.

## Beispiel

Die in diesem Beispiel gezeigte Funktion identifiziert das aktuell ausgewählte Kandidatenpaar aus einem Statistikenbericht, indem sie zuerst über jeden Bericht iteriert und nach einem `transport` Bericht sucht; wenn einer gefunden wird, wird die [`selectedCandidatePairId`](/de/docs/Web/API/RTCTransportStats/selectedCandidatePairId) dieses Transports verwendet, um das [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair) zu erhalten, das die Verbindung beschreibt.

Wenn dies fehlschlägt, durchläuft der zweite Abschnitt die Berichte und sucht nach einem `candidate-pair` Datensatz, dessen Firefox-spezifische `selected` Eigenschaft `true` ist. Dieses Kandidatenpaar wird dann als das aktuell ausgewählte zurückgegeben.

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
