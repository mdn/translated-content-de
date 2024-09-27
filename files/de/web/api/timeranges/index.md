---
title: TimeRanges
slug: Web/API/TimeRanges
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("DOM")}}

Beim Laden einer Medienressource zur Verwendung durch ein {{HTMLElement("audio")}} oder {{HTMLElement("video")}} Element wird das **`TimeRanges`** Interface verwendet, um die Zeitbereiche der Medienressource darzustellen, die gepuffert wurden, die abgespielt wurden und die ansteuerbar sind.

Ein `TimeRanges` Objekt umfasst einen oder mehrere Zeitbereiche, die jeweils durch einen Startzeitversatz und einen Endzeitversatz spezifiziert sind. Sie referenzieren jeden Zeitbereich, indem Sie die Methoden `start()` und `end()` verwenden und die Indexnummer des Zeitbereichs übergeben, den Sie abrufen möchten.

## Normalisierte TimeRanges Objekte

Mehrere Mitglieder von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Objekten geben ein **normalisiertes TimeRanges Objekt** zurück — welches [die Spezifikation beschreibt](https://html.spec.whatwg.org/multipage/media.html#normalised-timeranges-object) mit den folgenden Merkmalen:

_Die Bereiche in einem solchen Objekt sind geordnet, überschneiden sich nicht und berühren sich nicht (benachbarte Bereiche werden zu einem größeren zusammengefasst). Ein Bereich kann leer sein (nur einen einzelnen Moment in der Zeit referenzieren)._

## Instanzeigenschaften

- [`TimeRanges.length`](/de/docs/Web/API/TimeRanges/length) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Anzahl der durch das Zeitbereichsobjekt dargestellten Zeitbereiche repräsentiert.

## Instanzmethoden

- [`TimeRanges.start()`](/de/docs/Web/API/TimeRanges/start)
  - : Gibt die Zeit für den Beginn des Bereichs mit dem angegebenen Index zurück.
- [`TimeRanges.end()`](/de/docs/Web/API/TimeRanges/end)
  - : Gibt die Zeit für das Ende des angegebenen Bereichs zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
