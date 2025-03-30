---
title: "RTCIceParameters: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceParameters/usernameFragment
l10n:
  sourceCommit: a0719c8102153b8bfc89f9c82126349e1db69461
---

{{APIRef("WebRTC")}}

Die **[`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)**-Wörterbuchs
**`usernameFragment`**-Eigenschaft spezifiziert das Username-Fragment
("ufrag"), das die entsprechende ICE-Sitzung für die Dauer der
aktuellen ICE-Sitzung eindeutig identifiziert.

## Wert

Ein String, der das Username-Fragment enthält, das zusammen mit dem
[`password`](/de/docs/Web/API/RTCIceParameters/password) die zu verwendende ICE-Sitzung des Transports eindeutig identifiziert. Der String kann bis zu 256 Zeichen lang sein.

Siehe [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment), um mehr über Username-Fragmente und ihre Rolle in einer Verbindung zu erfahren.

## Spezifikationen

{{Specifications}}
