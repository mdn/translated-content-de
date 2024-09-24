---
title: "RTCDataChannelStats: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/RTCDataChannelStats/protocol
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`protocol`**-Eigenschaft des {{domxref("RTCDataChannelStats")}}-Wörterbuchs gibt einen String zurück, der das {{domxref("RTCDataChannel.protocol", "Protokoll")}} des zugehörigen Datenkanals enthält.

Der Wert wird von der Webseite oder App definiert, wenn der Datenkanal erstellt wird.

## Wert

Ein String, der denselben Wert wie die {{domxref("RTCDataChannel.protocol")}}-Eigenschaft des zugehörigen Datenkanals enthält.

Wenn kein Protokoll definiert wurde, ist dies der leere String ("").

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("RTCDataChannel.protocol")}}
