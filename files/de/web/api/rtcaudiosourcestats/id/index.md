---
title: "RTCAudioSourceStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCAudioSourceStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Wörterbuchs ist ein String, der das Objekt, für das diese Instanz Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt wie eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCAudioSourceStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, sodass Sie keine verlässlichen Annahmen über den Inhalt des Strings treffen oder davon ausgehen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
