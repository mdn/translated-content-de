---
title: "RTCTransformEvent: transformer-Eigenschaft"
short-title: transformer
slug: Web/API/RTCTransformEvent/transformer
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transformer`**-Eigenschaft des [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent)-Interfaces gibt den [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) zurück, der mit dem Ereignis verbunden ist.

Diese Eigenschaft stellt die WebRTC-Sender- oder -Empfänger-Pipeline als lesbaren und beschreibbaren Stream von kodierten Medienframes dar. Ein [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) kann sich in diesen Stream einfügen, um Frames zu modifizieren.

## Wert

Ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
