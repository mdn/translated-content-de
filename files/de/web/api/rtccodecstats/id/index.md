---
title: "RTCCodecStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCCodecStats/id
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCCodecStats")}} Verzeichnisses ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit Hilfe der `id` kann dieses Statistikobjekt mit anderen korreliert werden, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt, wie z.B. eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}}, zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCCodecStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format der ID-Zeichenfolge ist durch die Spezifikation nicht definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt der Zeichenfolge treffen oder davon ausgehen, dass das Format der Zeichenfolge für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
