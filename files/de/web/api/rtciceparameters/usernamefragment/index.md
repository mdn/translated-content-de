---
title: "RTCIceParameters: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceParameters/usernameFragment
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die **[`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)**-Diktionärs-
**`usernameFragment`**-Eigenschaft gibt das Benutzernamenfragment
("ufrag") an, das die entsprechende ICE-Sitzung während der Dauer der
aktuellen ICE-Sitzung eindeutig identifiziert.

## Wert

Ein String, der das Benutzernamenfragment enthält, das zusammen mit dem
[`password`](/de/docs/Web/API/RTCIceParameters/password) die aktuell genutzte ICE-Sitzung
des Transports eindeutig identifiziert. Der String kann bis zu 256 Zeichen lang sein.

Siehe [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment), um mehr über Benutzernamenfragmente
und ihre Rolle in einer Verbindung zu erfahren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
