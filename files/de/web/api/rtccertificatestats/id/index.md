---
title: "RTCCertificateStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCCertificateStats/id
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des {{domxref("RTCCertificateStats")}}-Wörterbuchs ist ein String, der das Objekt eindeutig identifiziert, für das dieses Objekt Statistiken bereitstellt.

Mit der `id` können Sie dieses Statistikobjekt mit anderen korrelieren, um Statistiken im Laufe der Zeit für ein gegebenes WebRTC-Objekt zu überwachen, wie beispielsweise eine {{domxref("RTCPeerConnection")}} oder einen {{domxref("RTCDataChannel")}}.

## Wert

Ein String, der das Objekt eindeutig identifiziert, für das dieses `RTCCertificateStats`-Objekt Statistiken bereitstellt.

Das Format des ID-Strings ist in der Spezifikation nicht definiert, daher können Sie keine zuverlässigen Annahmen über den Inhalt des Strings treffen oder davon ausgehen, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
