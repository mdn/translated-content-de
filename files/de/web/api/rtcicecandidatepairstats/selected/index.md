---
title: "RTCIceCandidatePairStats: Eigenschaft ausgewählt"
short-title: ausgewählt
slug: Web/API/RTCIceCandidatePairStats/selected
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die _nicht standardisierte_, Firefox-spezifische {{domxref("RTCIceCandidatePairStats")}}-Eigenschaft **`selected`** gibt an, ob das durch das Objekt beschriebene Kandidatenpaar dasjenige ist, das derzeit zur Kommunikation mit dem entfernten Peer verwendet wird.

## Syntax

```js-nolint
icpStats.selected
```

### Wert

Ein Firefox-spezifischer boolescher Wert, der `true` ist, wenn das durch dieses Objekt beschriebene Kandidatenpaar dasjenige ist, das gerade verwendet wird.

In jedem anderen Browser können Sie das ausgewählte Kandidatenpaar ermitteln, indem Sie nach einem Statistikobjekt vom Typ `transport` suchen, das ein {{domxref("RTCTransportStats")}}-Objekt ist. Die {{domxref("RTCTransportStats.selectedCandidatePairId", "selectedCandidatePairId")}}-Eigenschaft dieses Objekts gibt an, ob der angegebene Transport verwendet wird.

## Beispiel

Die in diesem Beispiel gezeigte Funktion identifiziert das gerade ausgewählte Kandidatenpaar aus einem Statistikbericht, indem sie zuerst über jeden Bericht iteriert und nach einem `transport`-Bericht sucht; wenn einer gefunden wird, wird die {{domxref("RTCTransportStats.selectedCandidatePairId", "selectedCandidatePairId")}} dieses Transports verwendet, um das {{domxref("RTCIceCandidatePair")}}, das die Verbindung beschreibt, zu erhalten.

Falls dies fehlschlägt, durchläuft der zweite Abschnitt die Berichte und sucht nach einem `candidate-pair`-Datensatz, dessen Firefox-spezifische `selected`-Eigenschaft `true` ist. Dieses Kandidatenpaar wird dann als das derzeit ausgewählte zurückgegeben.

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

Teil keiner Spezifikation. Diese Eigenschaft ist einzigartig für Firefox.

## Browser-Kompatibilität

{{Compat}}
