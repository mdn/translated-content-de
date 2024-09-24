---
title: "RTCIceTransport: role-Eigenschaft"
short-title: Rolle
slug: Web/API/RTCIceTransport/role
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`role`**-Eigenschaft der {{domxref("RTCIceTransport")}}-Schnittstelle gibt an, welche {{Glossary("ICE")}}-Rolle der Transport erfüllt: die des steuernden Agenten oder des gesteuerten Agenten.

Sie können mehr über ICE-Rollen in [Auswahl eines Kandidatenpaares](/de/docs/Web/API/WebRTC_API/Connectivity#choosing_a_candidate_pair) erfahren.

## Wert

Ein String, der angibt, ob das {{domxref("RTCIceTransport")}} den steuernden Agenten oder den gesteuerten Agenten darstellt.

Der Wert muss einer der folgenden sein:

- `"controlled"`
  - : Der Transport ist der gesteuerte Agent.
- `"controlling"`
  - : Das {{domxref("RTCIceTransport")}}-Objekt dient als steuernder Agent.
- `"unknown"`
  - : Die Rolle wurde noch nicht bestimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
