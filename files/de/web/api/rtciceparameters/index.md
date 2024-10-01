---
title: RTCIceParameters
slug: Web/API/RTCIceParameters
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef("WebRTC")}}

Das **`RTCIceParameters`** Dictionary gibt das Benutzername-Fragment und das Passwort an, das einer {{Glossary("ICE", "ICE")}} Sitzung zugewiesen ist.

Während der ICE-Verhandlung werden das Benutzername-Fragment und das Passwort jedes Peers in einem `RTCIceParameters` Objekt gespeichert, das vom [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) durch Aufruf seiner Methoden [`getLocalParameters()`](/de/docs/Web/API/RTCIceTransport/getLocalParameters) oder [`getRemoteParameters()`](/de/docs/Web/API/RTCIceTransport/getRemoteParameters) abgerufen werden kann, je nachdem, welches Ende von Interesse ist.

## Instanz-Eigenschaften

- [`usernameFragment`](/de/docs/Web/API/RTCIceParameters/usernameFragment)
  - : Ein String, der den Wert des Benutzername-Fragments (`ufrag`) des ICE-Sitzungssignals angibt.
- [`password`](/de/docs/Web/API/RTCIceParameters/password)
  - : Ein String, der den Passwort-String der Sitzung spezifiziert.

## Nutzungshinweise

Das Benutzername-Fragment und das Passwort identifizieren den entfernten Peer eindeutig für die Dauer der ICE-Sitzung und werden verwendet, um sowohl die Sicherheit zu gewährleisten als auch Übersprechen zwischen mehreren laufenden ICE-Sitzungen zu vermeiden. Siehe [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
