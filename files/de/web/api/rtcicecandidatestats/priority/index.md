---
title: "RTCIceCandidateStats: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidateStats/priority
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebRTC")}}

Die **`priority`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Dictionaries ist ein positiver Ganzzahlenwert, der die Priorität (oder Erwünschtheit) des beschriebenen Kandidaten angibt.

## Wert

Ein positiver Ganzzahlenwert, der die Priorität des durch das `RTCIceCandidateStats`-Objekt beschriebenen [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) angibt.
Der Wert kann zwischen 1 und 2.147.483.647 liegen.

## Beschreibung

Während der {{Glossary("ICE", "ICE")}}-Aushandlung beim Aufbau einer WebRTC-Peer-Verbindung werden die Prioritätswerte, die dem entfernten Peer von einem {{Glossary("user_agent", "User-Agent")}} gemeldet werden, verwendet, um zu bestimmen, welche Kandidaten als "erwünschter" betrachtet werden.
Je höher der Wert, desto erwünschter ist der Kandidat.

### Bestimmung der Priorität

Die ICE-Spezifikation beschreibt, wie User Agents und andere Software, die WebRTC verwenden, die Priorität berechnen sollten.
Die Priorität eines Kandidaten wird anhand der folgenden Variablen als Eingaben berechnet:

- Die Präferenz des Kandidatentyps (lokal, serverreflexiv, peerreflexiv oder weitergeleitet)
- Die Präferenz der speziellen IP-Adresse des Kandidaten (für mehrheimische Agents)
- Die Komponenten-ID des Kandidaten (1 für RTP, 2 für RTCP)

Die Priorität des Kandidaten wird anhand der folgenden Formel berechnet (_p<sub>type</sub>_ ist die Priorität des Kandidatentyps und _p<sub>local</sub>_ ist die Priorität der IP-Adresse):

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi mathvariant="italic">priority</mi><mo>=</mo><msup><mn>2</mn><mn>24</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>type</mi></mrow></msub><mo>+</mo><msup><mn>2</mn><mn>8</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>local</mi></mrow></msub><mo>+</mo><mo stretchy="false">(</mo><mn>256</mn><mo>-</mo><mi mathvariant="italic">componentID</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\mathit{priority} = 2^{24} \times p_{type} + 2^{8} \times p_{local} + \left(\right. 256 - \mathit{componentID} \left.\right)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies entspricht der Zuordnung der Prioritäten des Kandidatentyps, der lokalen IP und der Komponenten-ID in verschiedene Bitbereiche innerhalb des 32-Bit-`priority`-Werts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5245, "", "4.1.2.1")}}: Abschnitt "Recommended Formula" in der ICE-Spezifikation
