---
title: "RTCIceParameters: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceParameters/usernameFragment
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **{{domxref("RTCIceParameters")}}**-Wörterbuchs
**`usernameFragment`**-Eigenschaft gibt das Benutzername-Fragment
("ufrag") an, das die entsprechende ICE-Sitzung während der aktuellen ICE-Sitzung eindeutig identifiziert.

## Wert

Ein String, der das Benutzername-Fragment enthält, das zusammen mit dem
{{domxref("RTCIceParameters.password", "Passwort")}} die von dem Transport verwendete ICE-Sitzung eindeutig identifiziert. Der String kann bis zu 256 Zeichen lang sein.

Siehe {{domxref("RTCIceCandidate.usernameFragment")}}, um mehr über Benutzername-Fragmente und deren Rolle in einer Verbindung zu erfahren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
