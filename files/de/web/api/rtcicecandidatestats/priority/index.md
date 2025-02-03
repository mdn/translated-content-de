---
title: "RTCIceCandidateStats: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCIceCandidateStats/priority
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebRTC")}}

Die **`priority`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein positiver Ganzzahlenwert, der die Priorität (oder Begehrlichkeit) des beschriebenen Kandidaten angibt.

Während der {{Glossary("ICE", "ICE")}}-Verhandlung beim Aufbau einer WebRTC-Peer-Verbindung werden die Prioritätswerte, die vom {{Glossary("user_agent", "User-Agent")}} an den entfernten Peer gemeldet werden, verwendet, um zu bestimmen, welche Kandidaten als "begehrenswerter" angesehen werden. Je höher der Wert, desto begehrenswerter ist der Kandidat.

## Wert

Ein positiver Ganzzahlenwert, der die Priorität des in dem `RTCIceCandidateStats`-Objekt beschriebenen [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) angibt. Der Wert kann zwischen 1 und 2.147.483.647 liegen.

## Bestimmung der Priorität

Die ICE-Spezifikation beschreibt, wie User-Agents und andere Software, die WebRTC einsetzen, die Priorität berechnen sollten. Die Priorität eines Kandidaten wird unter Verwendung der folgenden Variablen berechnet:

- Die Bevorzugung des Kandidatentyps (lokal, serverreflexiv, peerreflexiv oder übermittelt)
- Die Bevorzugung der spezifischen IP-Adresse des Kandidaten (für multihomed Agents)
- Die Komponent-ID des Kandidaten (1 für RTP, 2 für RTCP)

Die Priorität des Kandidaten wird unter Verwendung der folgenden Formel berechnet (_p<sub>type</sub>_ ist die Priorität des Kandidatentyps und _p<sub>local</sub>_ ist die Priorität der IP-Adresse):

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi mathvariant="italic">priority</mi><mo>=</mo><msup><mn>2</mn><mn>24</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>type</mi></mrow></msub><mo>+</mo><msup><mn>2</mn><mn>8</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>local</mi></mrow></msub><mo>+</mo><mo stretchy="false">(</mo><mn>256</mn><mo>-</mo><mi mathvariant="italic">componentID</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\mathit{priority} = 2^{24} \times p_{type} + 2^{8} \times p_{local} + \left(\right. 256 - \mathit{componentID} \left.\right)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Dies entspricht der Zuordnung der Prioritäten des Kandidatentyps, der lokalen IP und der Komponent-ID zu verschiedenen Bitbereichen innerhalb des 32-Bit-`priority`-Werts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5245, "", "4.1.2.1")}}: Abschnitt Empfohlene Formel in der ICE-Spezifikation
