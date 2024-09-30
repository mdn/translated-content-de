---
title: "BlobEvent: timecode-Eigenschaft"
short-title: timecode
slug: Web/API/BlobEvent/timecode
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Die schreibgeschützte **`timecode`**-Eigenschaft des [`BlobEvent`](/de/docs/Web/API/BlobEvent)-Interfaces zeigt den Unterschied zwischen dem Zeitstempel des ersten Datenchunks und dem Zeitstempel des ersten Chunks im ersten von diesem Recorder erzeugten `BlobEvent`.

Beachten Sie, dass der `timecode` im ersten erzeugten `BlobEvent` nicht null sein muss.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
