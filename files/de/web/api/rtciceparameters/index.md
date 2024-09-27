---
title: RTCIceParameters
slug: Web/API/RTCIceParameters
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef("WebRTC")}}

Das **`RTCIceParameters`**-Wörterbuch spezifiziert das Benutzername-Fragment und das Passwort, das einer [ICE](/de/docs/Glossary/ICE)-Sitzung zugewiesen ist.

Während der ICE-Verhandlung werden das Benutzername-Fragment und das Passwort jedes Peers in einem `RTCIceParameters`-Objekt aufgezeichnet, das von der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) durch Aufrufen der Methoden [`getLocalParameters()`](/de/docs/Web/API/RTCIceTransport/getLocalParameters) oder [`getRemoteParameters()`](/de/docs/Web/API/RTCIceTransport/getRemoteParameters) erhalten werden kann, je nachdem, welches Ende Sie interessiert.

## Instanzeigenschaften

- [`usernameFragment`](/de/docs/Web/API/RTCIceParameters/usernameFragment)
  - : Ein String, der den Wert des Benutzername-Fragmentfelds der ICE-Sitzung, `ufrag`, angibt.
- [`password`](/de/docs/Web/API/RTCIceParameters/password)
  - : Ein String, der den Passwort-String der Sitzung angibt.

## Anwendungshinweise

Das Benutzername-Fragment und das Passwort identifizieren den entfernten Peer eindeutig für die Dauer der ICE-Sitzung und werden sowohl zur Sicherstellung der Sicherheit als auch zur Vermeidung von Übersprechen über mehrere laufende ICE-Sitzungen verwendet. Siehe [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
