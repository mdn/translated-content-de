---
title: "RTCIceCandidateStats: Eigenschaft priority"
short-title: priority
slug: Web/API/RTCIceCandidateStats/priority
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{APIRef("WebRTC")}}

Die **`priority`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Dictionaries ist ein positiver Ganzzahlwert, der die Priorität (oder Begehrtheit) des beschriebenen Kandidaten angibt.

Während der {{Glossary("ICE")}}-Verhandlung beim Einrichten einer WebRTC-Peer-Verbindung werden die von einem {{Glossary("user agent")}} an den entfernten Peer gemeldeten Prioritätswerte verwendet, um zu bestimmen, welche Kandidaten als "begehrenswerter" gelten. Je höher der Wert, desto begehrenswerter der Kandidat.

## Syntax

```js-nolint
priority = rtcIceCandidateStats.priority
```

### Wert

Ein positiver Ganzzahlwert, der die Priorität des durch das `RTCIceCandidateStats`-Objekt beschriebenen {{domxref("RTCIceCandidate")}} angibt. Der Wert kann zwischen 1 und 2.147.483.647 liegen.

## Bestimmung der Priorität

Die ICE-Spezifikation beschreibt, wie Benutzeragenten und andere Software, die WebRTC verwenden, die Priorität berechnen sollten. Die Priorität eines Kandidaten wird anhand der folgenden Eingabevariablen berechnet:

- Die Bevorzugung des Kandidatentyps (lokal, server-reflexiv, peer-reflexiv oder relayiert)
- Die Bevorzugung der spezifischen IP-Adresse des Kandidaten (bei Multi-Homed-Agenten)
- Die Komponenten-ID des Kandidaten (1 für RTP, 2 für RTCP)

Die Priorität des Kandidaten wird mit der folgenden Formel berechnet (_p<sub>type</sub>_ ist die Priorität des Kandidatentyps und _p<sub>local</sub>_ ist die Priorität der IP-Adresse):

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi mathvariant="italic">priority</mi><mo>=</mo><msup><mn>2</mn><mn>24</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>type</mi></mrow></msub><mo>+</mo><msup><mn>2</mn><mn>8</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>local</mi></mrow></msub><mo>+</mo><mo stretchy="false">(</mo><mn>256</mn><mo>-</mo><mi mathvariant="italic">componentID</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\mathit{priority} = 2^{24} \times p_{type} + 2^{8} \times p_{local} + \left(\right. 256 - \mathit{componentID} \left.\right)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies entspricht der Abbildung der Prioritäten des Kandidatentyps, der lokalen IP und der Komponenten-ID in verschiedene Bitbereiche innerhalb des 32-Bit-`priority`-Wertes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5245, "", "4.1.2.1")}}: Abschnitt Empfohlene Formel in der ICE-Spezifikation
