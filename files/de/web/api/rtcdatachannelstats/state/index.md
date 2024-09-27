---
title: "RTCDataChannelStats: state-Eigenschaft"
short-title: state
slug: Web/API/RTCDataChannelStats/state
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`state`**-Eigenschaft des `RTCDataChannelStats`-Wörterbuchs gibt einen String zurück, der den [`readyState`](/de/docs/Web/API/RTCDataChannel/readyState) der zugrunde liegenden Datenverbindung des Datenkanals anzeigt: `connecting`, `open`, `closing` oder `closed`.

Beachten Sie, dass diese Eigenschaft erforderlich ist.

## Werte

Ein String, der denselben Wert enthält wie die [`RTCDataChannel.readyState`](/de/docs/Web/API/RTCDataChannel/readyState) Eigenschaft des zugehörigen Datenkanals.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCDataChannel.readyState`](/de/docs/Web/API/RTCDataChannel/readyState)
