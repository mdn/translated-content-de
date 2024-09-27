---
title: "RTCPeerConnectionStats: id Eigenschaft"
short-title: id
slug: Web/API/RTCPeerConnectionStats/id
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt, wie beispielsweise eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCPeerConnectionStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht in der Spezifikation definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt des Strings machen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
