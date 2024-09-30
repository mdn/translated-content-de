---
title: "RTCIceCandidateStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCIceCandidateStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mithilfe der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein bestimmtes WebRTC-Objekt, wie beispielsweise ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel), zu überwachen.

## Wert

Ein String, der das Objekt, für das dieses `RTCIceCandidateStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
