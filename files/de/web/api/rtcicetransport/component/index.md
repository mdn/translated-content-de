---
title: "RTCIceTransport: Komponenten-Eigenschaft"
short-title: Komponenten
slug: Web/API/RTCIceTransport/component
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`component`** der {{domxref("RTCIceTransport")}}-Schnittstelle gibt an, ob das Objekt zum Transport von {{Glossary("RTP")}} oder {{Glossary("RTCP")}} dient.

## Wert

Ein String, der einer der folgenden ist:

- `rtp`
  - : Kennzeichnet einen ICE-Transport, der für das [Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP) oder für RTP, das mit dem RTP Control Protocol (RTCP) multiplexiert ist, verwendet wird. RTP ist in {{RFC(3550)}} definiert. Dieser Wert entspricht dem Komponenten-ID-Feld in der `candidate` a-line mit dem Wert 1.
- `rtcp`
  - : Kennzeichnet einen ICE-Transport, der für RTCP verwendet wird, was in {{RFC(3550, "", 6)}} definiert ist. Dieser Wert entspricht der Komponenten-ID 2.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
