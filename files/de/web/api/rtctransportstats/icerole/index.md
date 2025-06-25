---
title: "RTCTransportStats: iceRole-Eigenschaft"
short-title: iceRole
slug: Web/API/RTCTransportStats/iceRole
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`iceRole`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der die ICE-Rolle angibt, die der Transport erfüllt: die des kontrollierenden Agents oder des Agents, der kontrolliert wird.

Dieser Wert entspricht dem der [`RTCIceTransport.role`](/de/docs/Web/API/RTCIceTransport/role)-Eigenschaft des zugrunde liegenden [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport).

## Wert

Ein String, der einen der folgenden Werte haben kann: `controlled`, `controlling` oder `unknown`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
