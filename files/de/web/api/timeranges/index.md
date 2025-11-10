---
title: TimeRanges
slug: Web/API/TimeRanges
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

Beim Laden einer Medienressource zur Verwendung mit einem {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element wird die **`TimeRanges`**-Schnittstelle verwendet, um die Zeitbereiche der Medienressource darzustellen, die gepuffert, gespielt und suchbar sind.

Ein `TimeRanges`-Objekt umfasst einen oder mehrere Zeitbereiche, von denen jeder durch einen Startzeit-Offset und einen Endzeit-Offset angegeben wird. Sie greifen auf jeden Zeitbereich mit den `start()`- und `end()`-Methoden zu, indem Sie die Indexnummer des gewünschten Zeitbereichs übergeben.

## Normalisierte TimeRanges-Objekte

Einige Mitglieder von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten geben ein **normalisiertes TimeRanges-Objekt** zurück — das [in der Spezifikation beschrieben wird](https://html.spec.whatwg.org/multipage/media.html#normalised-timeranges-object) und folgende Eigenschaften aufweist:

_Die Ranges in einem solchen Objekt sind geordnet, überlappen sich nicht und berühren sich nicht (angrenzende Bereiche werden zu einem größeren Bereich zusammengefasst). Ein Bereich kann leer sein (nur einen einzigen Moment in der Zeit referenzierend)._

## Instanz-Eigenschaften

- [`TimeRanges.length`](/de/docs/Web/API/TimeRanges/length) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Anzahl der durch das Zeitbereichsobjekt dargestellten Zeitbereiche repräsentiert.

## Instanz-Methoden

- [`TimeRanges.start()`](/de/docs/Web/API/TimeRanges/start)
  - : Gibt die Startzeit des Bereichs mit dem angegebenen Index zurück.
- [`TimeRanges.end()`](/de/docs/Web/API/TimeRanges/end)
  - : Gibt die Endzeit des angegebenen Bereichs zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
