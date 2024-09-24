---
title: "BlobEvent: timecode-Eigenschaft"
short-title: timecode
slug: Web/API/BlobEvent/timecode
l10n:
  sourceCommit: 1c9d35561671086a47fa501a34ec7af2cf8182cf
---

{{APIRef("MediaStream Recording")}}

Die **`timecode`** schreibgeschützte Eigenschaft der {{domxref("BlobEvent")}}-Schnittstelle zeigt die Differenz zwischen dem Zeitstempel des ersten Datenblocks und dem Zeitstempel des ersten Blocks im ersten `BlobEvent` an, das von diesem Rekorder erzeugt wird.

Beachten Sie, dass der `timecode` im ersten erzeugten `BlobEvent` nicht unbedingt null sein muss.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
