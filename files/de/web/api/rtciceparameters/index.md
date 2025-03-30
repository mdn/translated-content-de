---
title: RTCIceParameters
slug: Web/API/RTCIceParameters
l10n:
  sourceCommit: a0719c8102153b8bfc89f9c82126349e1db69461
---

{{APIRef("WebRTC")}}

Das **`RTCIceParameters`**-Wörterbuch spezifiziert das Benutzername-Fragment und das Passwort, das einer {{Glossary("ICE", "ICE")}}-Sitzung zugewiesen ist.

Während der ICE-Aushandlung werden das Benutzername-Fragment und das Passwort jedes Peers in einem `RTCIceParameters`-Objekt festgehalten. Dieses kann vom [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) erhalten werden, indem dessen Methoden [`getLocalParameters()`](/de/docs/Web/API/RTCIceTransport/getLocalParameters) oder [`getRemoteParameters()`](/de/docs/Web/API/RTCIceTransport/getRemoteParameters) aufgerufen werden, je nachdem, welches Ende für Sie von Interesse ist.

## Instanz-Eigenschaften

- [`usernameFragment`](/de/docs/Web/API/RTCIceParameters/usernameFragment)
  - : Ein String, der den Wert des Benutzername-Fragment-Feldes der ICE-Sitzung, `ufrag`, angibt.
- [`password`](/de/docs/Web/API/RTCIceParameters/password)
  - : Ein String, der das Passwort der Sitzung angibt.

## Nutzungshinweise

Das Benutzername-Fragment und das Passwort identifizieren den Remote-Peer eindeutig für die Dauer der ICE-Sitzung und werden sowohl zur Sicherstellung der Sicherheit als auch zur Vermeidung von Übersprechen zwischen mehreren gleichzeitig laufenden ICE-Sitzungen verwendet. Siehe [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) für weitere Informationen.

## Spezifikationen

{{Specifications}}
