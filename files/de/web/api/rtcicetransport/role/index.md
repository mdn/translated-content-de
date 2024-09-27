---
title: "RTCIceTransport: role-Eigenschaft"
short-title: role
slug: Web/API/RTCIceTransport/role
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`role`** der Schnittstelle [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) gibt an, welche [ICE](/de/docs/Glossary/ICE)-Rolle der Transport übernimmt: die des kontrollierenden Agenten oder die des kontrollierten Agenten.

Sie können mehr über ICE-Rollen im Abschnitt [Auswählen eines Kandidatenpaars](/de/docs/Web/API/WebRTC_API/Connectivity#choosing_a_candidate_pair) erfahren.

## Wert

Ein String, der angibt, ob das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) den kontrollierenden Agenten oder den kontrollierten Agenten darstellt.

Der Wert muss einer der folgenden sein:

- `"controlled"`
  - : Der Transport ist der kontrollierte Agent.
- `"controlling"`
  - : Das [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekt dient als kontrollierender Agent.
- `"unknown"`
  - : Die Rolle wurde noch nicht bestimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
