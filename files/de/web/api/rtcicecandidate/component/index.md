---
title: "RTCIceCandidate: Komponenteneigenschaft"
short-title: Komponente
slug: Web/API/RTCIceCandidate/component
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`component`**-Eigenschaft
der Schnittstelle {{domxref("RTCIceCandidate")}} ist ein String, der angibt, ob
der Kandidat ein [RTP](/de/docs/Web/API/WebRTC_API/Intro_to_RTP) oder
ein RTCP-Kandidat ist.

Wenn ein Kandidat sowohl RTP als auch RTCP zusammen multiplexiert darstellt, wird er als
RTP-Kandidat angegeben.

## Wert

Ein String, der einer der folgenden ist:

- `rtp`
  - : Identifiziert einen ICE-Transport, der für das [Real-time Transport Protocol](/de/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP) oder für RTP, multiplexiert mit dem RTP Control Protocol (RTCP), verwendet wird. RTP ist in {{RFC(3550)}} definiert. Dieser Wert entspricht dem Komponenten-ID-Feld in der `candidate` a-line mit dem Wert 1.
- `rtcp`
  - : Identifiziert einen ICE-Transport, der für RTCP verwendet wird, das in {{RFC(3550, "", 6)}} definiert ist. Dieser Wert entspricht der Komponenten-ID 2.

## Nutzungshinweise

Betrachten Sie diese {{Glossary("SDP")}}-Attributzeile (a-line):

```plain
a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
```

Dies ist eine ICE-Kandidat a-line, deren {{domxref("RTCIceCandidate.foundation", "foundation")}}
4234997325 ist. Das nächste Feld in der a-line, `"1"`, ist die
Komponenten-ID. Ein Wert von `"1"` zeigt RTP an, das in der
`component`-Eigenschaft als `"rtp"` vermerkt wird. Wenn dieser Wert stattdessen
`"2"` wäre, würde die a-line einen RTCP-Kandidaten beschreiben und
`component` wäre `"rtcp"`.

## Beispiele

Dieses Codebeispiel prüft den Komponententyp eines Kandidaten und leitet den Kandidaten abhängig vom Wert an verschiedene Handler weiter.

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
