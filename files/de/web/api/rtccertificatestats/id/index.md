---
title: "RTCCertificateStats: id-Eigenschaft"
short-title: id
slug: Web/API/RTCCertificateStats/id
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`id`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein String, der das Objekt, für das dieses Objekt Statistiken bereitstellt, eindeutig identifiziert.

Mit der `id` können Sie dieses Statistik-Objekt mit anderen korrelieren, um Statistiken über die Zeit für ein bestimmtes WebRTC-Objekt zu überwachen, wie z. B. eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) oder einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel).

## Wert

Ein String, der das Objekt eindeutig identifiziert, für das dieses `RTCCertificateStats`-Objekt Statistiken bereitstellt.

Das Format des ID-Strings ist in der Spezifikation nicht definiert, sodass Sie keine verlässlichen Annahmen über den Inhalt des Strings oder darüber treffen können, dass das Format des Strings für einen bestimmten Objekttyp unverändert bleibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
