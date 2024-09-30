---
title: "RTCIceCandidate: component-Eigenschaft"
short-title: component
slug: Web/API/RTCIceCandidate/component
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`component`**-Eigenschaft
der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle ist ein String, der angibt, ob der Kandidat ein [RTP](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)- oder ein RTCP-Kandidat ist.

Wenn ein Kandidat sowohl RTP als auch RTCP multiplexiert repräsentiert, wird er als ein
RTP-Kandidat gemeldet.

## Wert

Ein String, der einen der folgenden Werte annimmt:

- `rtp`
  - : Identifiziert einen ICE-Transport, der für das [Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP) oder für RTP, multiplexiert mit dem RTP Control Protocol (RTCP), genutzt wird. RTP ist definiert in {{RFC(3550)}}. Dieser Wert entspricht dem Komponenten-ID-Feld in der `candidate` a-Zeile mit dem Wert 1.
- `rtcp`
  - : Identifiziert einen ICE-Transport, der für RTCP genutzt wird, das in {{RFC(3550, "", 6)}} definiert ist. Dieser Wert entspricht der Komponenten-ID 2.

## Nutzungshinweise

Betrachten Sie diese [SDP](/de/docs/Glossary/SDP)-Attributzeile (a-Zeile):

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Dies ist eine ICE-Kandidat a-Zeile, deren [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation)
4234997325 ist. Das nächste Feld in der a-Zeile, `"1"`, ist die
Komponenten-ID. Ein Wert von `"1"` deutet auf RTP hin, was in der
`component`-Eigenschaft als `"rtp"` aufgezeichnet wird. Wenn dieser Wert stattdessen
`"2"` wäre, würde die a-Zeile einen RTCP-Kandidaten beschreiben und
`component` wäre `"rtcp"`.

## Beispiele

Dieses Codebeispiel untersucht den Komponententyp eines Kandidaten und leitet den Kandidaten an
verschiedene Handler, abhängig vom Wert, weiter.

```js
if (candidate.component === "rtp") {
  handleRTPCandidate(candidate);
} else if (candidate.component === "rtcp") {
  handleRTCPCandidate(candidate);
} else {
  handleUnknownCandidate(candidate);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
