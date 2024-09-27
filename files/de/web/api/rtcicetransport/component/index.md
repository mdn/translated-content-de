---
title: "RTCIceTransport: Komponenteigenschaft"
short-title: Komponente
slug: Web/API/RTCIceTransport/component
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`component`**-Eigenschaft des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Interfaces gibt an, ob das Objekt dazu dient, [RTP](/de/docs/Glossary/RTP) oder [RTCP](/de/docs/Glossary/RTCP) zu transportieren.

## Wert

Ein String, der einer der folgenden Werte sein kann:

- `rtp`
  - : Identifiziert einen ICE-Transport, der für das [Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP) oder für RTP, das mit dem RTP Control Protocol (RTCP) multiplexiert wird, verwendet wird. RTP ist in {{RFC(3550)}} definiert. Dieser Wert entspricht dem Komponenten-ID-Feld in der `candidate` a-Line mit dem Wert 1.
- `rtcp`
  - : Identifiziert einen ICE-Transport, der für RTCP verwendet wird, welches in {{RFC(3550, "", 6)}} definiert ist. Dieser Wert entspricht der Komponenten-ID 2.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
