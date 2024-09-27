---
title: "BlobEvent: timecode-Eigenschaft"
short-title: timecode
slug: Web/API/BlobEvent/timecode
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Die schreibgeschützte **`timecode`**-Eigenschaft der Schnittstelle [`BlobEvent`](/de/docs/Web/API/BlobEvent) gibt die Differenz zwischen dem Zeitstempel des ersten Datenstücks und dem Zeitstempel des ersten Stücks im ersten von diesem Recorder erzeugten `BlobEvent` an.

Beachten Sie, dass der `timecode` im ersten erzeugten `BlobEvent` nicht Null sein muss.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
