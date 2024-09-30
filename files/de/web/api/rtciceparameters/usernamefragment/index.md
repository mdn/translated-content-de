---
title: "RTCIceParameters: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceParameters/usernameFragment
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **[`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)**-Diktionärs
**`usernameFragment`**-Eigenschaft gibt das Benutzernamen-Fragment
("ufrag") an, das die entsprechende ICE-Sitzung während der aktuellen ICE-Sitzung eindeutig identifiziert.

## Wert

Ein String, der das Benutzernamen-Fragment enthält, das zusammen mit dem
[`password`](/de/docs/Web/API/RTCIceParameters/password) die verwendete ICE-Sitzung durch den Transport eindeutig identifiziert. Der String kann bis zu 256 Zeichen lang sein.

Sehen Sie sich [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) an, um mehr über Benutzernamen-Fragmente und deren Rolle in einer Verbindung zu erfahren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
