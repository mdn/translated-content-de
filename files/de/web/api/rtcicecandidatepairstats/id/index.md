---
title: "RTCIceCandidatePairStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCIceCandidatePairStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken liefert, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Beziehung setzen, um die Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie z.B. ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder ein [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt, für das dieses `RTCIceCandidatePairStats`-Objekt Statistiken liefert, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
