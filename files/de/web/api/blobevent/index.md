---
title: BlobEvent
slug: Web/API/BlobEvent
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Das **`BlobEvent`** Interface der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) repräsentiert Ereignisse, die mit einem {{domxref("Blob")}} assoziiert sind. Diese Blobs sind typischerweise, aber nicht notwendigerweise, mit Medieninhalten verknüpft.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("BlobEvent.BlobEvent", "BlobEvent()")}}
  - : Erstellt ein `BlobEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Übernimmt Eigenschaften von seinem übergeordneten {{domxref("Event")}}_.

- {{domxref("BlobEvent.data")}} {{ReadOnlyInline}}
  - : Ein {{domxref("Blob")}}, das die mit dem Ereignis verbundenen Daten darstellt. Das Ereignis wurde auf dem {{domxref("EventTarget")}} ausgelöst, aufgrund einer Aktion, die auf diesem spezifischen {{domxref("Blob")}} passiert ist.
- {{domxref("BlobEvent.timecode")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der den Unterschied zwischen dem Zeitstempel des ersten Datenstücks in den Daten und dem Zeitstempel des ersten Stücks im ersten von diesem Recorder erzeugten BlobEvent anzeigt. Beachten Sie, dass der Timecode im ersten erzeugten BlobEvent nicht unbedingt null sein muss.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem übergeordneten {{domxref("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("Event")}} Basis-Interface.
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API): Sendet `BlobEvent`-Objekte jedes Mal, wenn ein Medienstück bereit ist.
- [Verwendung der MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
