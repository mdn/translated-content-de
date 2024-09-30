---
title: BlobEvent
slug: Web/API/BlobEvent
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Die **`BlobEvent`**-Schnittstelle der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) repräsentiert Ereignisse, die mit einem [`Blob`](/de/docs/Web/API/Blob) verbunden sind. Diese Blobs stehen typischerweise, aber nicht notwendigerweise, im Zusammenhang mit Mediendaten.

{{InheritanceDiagram}}

## Konstruktor

- [`BlobEvent()`](/de/docs/Web/API/BlobEvent/BlobEvent)
  - : Erstellt ein `BlobEvent`-Ereignis mit den gegebenen Parametern.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`BlobEvent.data`](/de/docs/Web/API/BlobEvent/data) {{ReadOnlyInline}}
  - : Ein [`Blob`](/de/docs/Web/API/Blob), das die mit dem Ereignis verknüpften Daten darstellt. Das Ereignis wurde auf dem [`EventTarget`](/de/docs/Web/API/EventTarget) ausgelöst, weil etwas mit diesem spezifischen [`Blob`](/de/docs/Web/API/Blob) passiert ist.
- [`BlobEvent.timecode`](/de/docs/Web/API/BlobEvent/timecode) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Unterschied zwischen dem Zeitstempel des ersten Datenchunks und dem Zeitstempel des ersten Chunks im ersten von diesem Rekorder erzeugten BlobEvent anzeigt. Beachten Sie, dass der Zeitcode im ersten erzeugten BlobEvent nicht null sein muss.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Event`](/de/docs/Web/API/Event)-Basisschnittstelle.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API): Sendet `BlobEvent`-Objekte jedes Mal, wenn ein Medienchunk fertig ist.
- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
