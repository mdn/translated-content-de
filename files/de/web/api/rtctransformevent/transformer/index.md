---
title: "RTCTransformEvent: transformer-Eigenschaft"
short-title: transformer
slug: Web/API/RTCTransformEvent/transformer
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transformer`**-Eigenschaft der {{domxref("RTCTransformEvent")}}-Schnittstelle gibt den mit dem Ereignis verbundenen {{domxref("RTCRtpScriptTransformer")}} zurück.

Die Eigenschaft stellt die WebRTC-Sender- oder Empfänger-Pipeline als lesbaren und schreibbaren Stream von kodierten Medienrahmen dar, in die sich ein [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) einfügen kann, um Rahmen zu modifizieren.

## Wert

Ein {{domxref("RTCRtpScriptTransformer")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
