---
title: "RTCAudioSourceStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCAudioSourceStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCAudioSourceStats")}}-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um über einen bestimmten Zeitraum hinweg Statistiken für ein bestimmtes WebRTC-Objekt, wie beispielsweise eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}}, zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCAudioSourceStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist durch die Spezifikation nicht definiert, sodass Sie keine verlässlichen Annahmen über den Inhalt des Strings machen oder annehmen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
