---
title: TimeRanges
slug: Web/API/TimeRanges
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("DOM")}}

Beim Laden einer Medienressource zur Verwendung durch ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element wird das **`TimeRanges`**-Interface genutzt, um die Zeitbereiche der Medienressource darzustellen, die gepuffert, abgespielt und suchbar sind.

Ein `TimeRanges`-Objekt enthält einen oder mehrere Zeitbereiche, die jeweils durch einen Startzeit- und einen Endzeitpunkt festgelegt sind. Sie greifen auf jeden Zeitbereich mittels der `start()`- und `end()`-Methoden zu, indem Sie die Indexnummer des gewünschten Zeitbereichs übergeben.

## Normalisierte TimeRanges-Objekte

Mehrere Mitglieder von {{domxref("HTMLMediaElement")}}-Objekten geben ein **normalisiertes TimeRanges-Objekt** zurück — welches [in der Spezifikation beschrieben wird](https://html.spec.whatwg.org/multipage/media.html#normalised-timeranges-object) und folgende Merkmale aufweist:

_Die Zeitbereiche in einem solchen Objekt sind geordnet, überlappen sich nicht und berühren sich nicht (angrenzende Bereiche werden zu einem größeren Bereich zusammengefasst). Ein Bereich kann leer sein (bezieht sich nur auf einen einzelnen Moment in der Zeit)._

## Instanz-Eigenschaften

- {{domxref("TimeRanges.length")}} {{ReadOnlyInline}}
  - : Gibt einen `unsigned long` zurück, der die Anzahl der durch das Zeitbereichsobjekt dargestellten Zeitbereiche repräsentiert.

## Instanz-Methoden

- {{domxref("TimeRanges.start()")}}
  - : Gibt die Zeit für den Start des Bereichs mit dem angegebenen Index zurück.
- {{domxref("TimeRanges.end()")}}
  - : Gibt die Zeit für das Ende des angegebenen Bereichs zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
