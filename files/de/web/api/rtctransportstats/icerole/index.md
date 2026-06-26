---
title: "RTCTransportStats: iceRole-Eigenschaft"
short-title: iceRole
slug: Web/API/RTCTransportStats/iceRole
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebRTC")}}

Die **`iceRole`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String, der die ICE-Rolle angibt, die der Transport erfüllt: entweder die des kontrollierenden Agenten oder des Agenten, der kontrolliert wird.

Dies hat denselben Wert wie die [`RTCIceTransport.role`](/de/docs/Web/API/RTCIceTransport/role)-Eigenschaft des zugrunde liegenden [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport).

## Wert

Ein String, der einen der folgenden Werte hat: `controlled`, `controlling` oder `unknown`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
