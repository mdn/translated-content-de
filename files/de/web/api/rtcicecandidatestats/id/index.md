---
title: "RTCIceCandidateStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCIceCandidateStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken liefert, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein gegebenes WebRTC-Objekt zu überwachen, wie etwa eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt, für das dieses `RTCIceCandidateStats`-Objekt Statistiken liefert, eindeutig identifiziert.

Das Format des ID-Strings ist von der Spezifikation nicht definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt des Strings machen oder davon ausgehen, dass das Format des Strings für einen gegebenen Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
