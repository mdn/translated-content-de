---
title: "RTCIceCandidateStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCIceCandidateStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen in Verbindung bringen, um Statistiken über die Zeit hinweg für ein bestimmtes WebRTC-Objekt zu überwachen, wie z. B. eine {{domxref("RTCPeerConnection")}} oder ein {{domxref("RTCDataChannel")}}.

## Wert

Ein String, der das Objekt, für das dieses `RTCIceCandidateStats`-Objekt Statistiken bereitstellt, eindeutig identifiziert.

Das Format des ID-Strings ist von der Spezifikation nicht definiert, daher können Sie keine verlässlichen Annahmen über den Inhalt des Strings machen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
