---
title: "RTCTransportStats: iceRole-Eigenschaft"
short-title: iceRole
slug: Web/API/RTCTransportStats/iceRole
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

Die **`iceRole`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Dictionaries ist ein String, der die ICE-Rolle angibt, die der Transport erfüllt: die des kontrollierenden Agenten oder des Agenten, der kontrolliert wird.

Diese hat denselben Wert wie die [`RTCIceTransport.role`](/de/docs/Web/API/RTCIceTransport/role)-Eigenschaft des zugrunde liegenden [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport).

## Wert

Ein String, der einen der folgenden Werte haben wird: `controlled`, `controlling` oder `unknown`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
