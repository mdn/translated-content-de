---
title: "RTCPeerConnectionStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCPeerConnectionStats/id
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)-Wörterbuchs ist ein String, der das Objekt, für welches dieses Objekt Statistikdaten liefert, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um die Statistiken über die Zeit für ein gegebenes WebRTC-Objekt, wie zum Beispiel ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), zu überwachen.

## Wert

Ein String, der das Objekt, für welches dieses `RTCPeerConnectionStats`-Objekt Statistikdaten liefert, eindeutig identifiziert.

Das Format des ID-Strings wird von der Spezifikation nicht definiert, daher können Sie keine verlässlichen Annahmen über den Inhalt des Strings machen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
