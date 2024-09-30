---
title: "RTCIceCandidateStats: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidateStats/priority
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{APIRef("WebRTC")}}

Die **`priority`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Dictionarys ist ein positiver Integer-Wert, der die Priorität (oder Attraktivität) des beschriebenen Kandidaten angibt.

Während der [ICE](/de/docs/Glossary/ICE)-Verhandlung bei der Einrichtung einer WebRTC-Peer-Verbindung werden die vom [User Agent](/de/docs/Glossary/user_agent) an den entfernten Peer gemeldeten Prioritätswerte verwendet, um zu bestimmen, welche Kandidaten als "attraktiver" gelten. Je höher der Wert, desto attraktiver ist der Kandidat.

## Syntax

```js-nolint
priority = rtcIceCandidateStats.priority
```

### Wert

Ein positiver Integer-Wert, der die Priorität des durch das `RTCIceCandidateStats`-Objekt beschriebenen [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) angibt. Der Wert kann zwischen 1 und 2.147.483.647 liegen.

## Bestimmung der Priorität

Die ICE-Spezifikation beschreibt, wie User Agents und andere Software, die WebRTC verwenden, die Priorität berechnen sollten. Die Priorität eines Kandidaten wird unter Verwendung der folgenden Variablen als Eingaben berechnet:

- Die Attraktivität des Kandidatentyps (lokal, server-reflexiv, peer-reflexiv oder weitergeleitet)
- Die Attraktivität der spezifischen IP-Adresse des Kandidaten (für Mehrfachheim-Agenten)
- Die Komponent-ID des Kandidaten (1 für RTP, 2 für RTCP)

Die Priorität eines Kandidaten wird mit der folgenden Formel berechnet (_p<sub>type</sub>_ ist die Priorität des Kandidatentyps und _p<sub>local</sub>_ ist die Priorität der IP-Adresse):

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi mathvariant="italic">priority</mi><mo>=</mo><msup><mn>2</mn><mn>24</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>type</mi></mrow></msub><mo>+</mo><msup><mn>2</mn><mn>8</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>local</mi></mrow></msub><mo>+</mo><mo stretchy="false">(</mo><mn>256</mn><mo>-</mo><mi mathvariant="italic">componentID</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\mathit{priority} = 2^{24} \times p_{type} + 2^{8} \times p_{local} + \left(\right. 256 - \mathit{componentID} \left.\right)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies entspricht der Zuordnung der Prioritäten des Kandidatentyps, der lokalen IP und der Komponent-ID in verschiedene Bit-Bereiche innerhalb des 32-Bit-`priority`-Werts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5245, "", "4.1.2.1")}}: Abschnitt Empfohlene Formel in der ICE-Spezifikation
