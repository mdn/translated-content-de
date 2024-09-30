---
title: TimeRanges
slug: Web/API/TimeRanges
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("DOM")}}

Beim Laden einer Medienressource zur Verwendung durch ein {{HTMLElement("audio")}}- oder {{HTMLElement("video")}}-Element wird die **`TimeRanges`**-Schnittstelle zur Darstellung der Zeitbereiche der Medienressource verwendet, die gepuffert wurden, die abgespielt wurden und die verfügbar sind zum Suchen.

Ein `TimeRanges`-Objekt umfasst einen oder mehrere Zeitbereiche, die jeweils durch einen Startzeitoffset und einen Endzeitoffset spezifiziert sind. Sie beziehen sich auf jeden Zeitbereich, indem Sie die Methoden `start()` und `end()` verwenden und die Indexnummer des Zeitbereichs übergeben, den Sie abrufen möchten.

## Normalisierte TimeRanges-Objekte

Mehrere Mitglieder von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten geben ein **normalisiertes TimeRanges-Objekt** zurück — das [die Spezifikation beschreibt](https://html.spec.whatwg.org/multipage/media.html#normalised-timeranges-object) als mit den folgenden Eigenschaften:

_Die Bereiche in einem solchen Objekt sind geordnet, überlappen sich nicht und berühren sich nicht (angrenzende Bereiche werden zu einem größeren Bereich zusammengefasst). Ein Bereich kann leer sein (bezieht sich nur auf einen einzelnen Zeitpunkt)._

## Instanz-Eigenschaften

- [`TimeRanges.length`](/de/docs/Web/API/TimeRanges/length) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Anzahl der Zeitbereiche repräsentiert, die durch das Zeitbereichsobjekt dargestellt werden.

## Instanz-Methoden

- [`TimeRanges.start()`](/de/docs/Web/API/TimeRanges/start)
  - : Gibt die Zeit für den Beginn des Bereichs mit dem angegebenen Index zurück.
- [`TimeRanges.end()`](/de/docs/Web/API/TimeRanges/end)
  - : Gibt die Zeit für das Ende des angegebenen Bereichs zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
