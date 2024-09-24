---
title: "RTCIceCandidatePairStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCIceCandidatePairStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCIceCandidatePairStats")}}-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Beziehung setzen, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie z. B. eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}}.

## Wert

Ein String, der das Objekt, für das dieses `RTCIceCandidatePairStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist nicht durch die Spezifikation definiert, sodass Sie keine zuverlässigen Annahmen über den Inhalt des Strings machen können oder davon ausgehen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
