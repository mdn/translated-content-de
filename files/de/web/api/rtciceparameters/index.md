---
title: RTCIceParameters
slug: Web/API/RTCIceParameters
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef("WebRTC")}}

Das **`RTCIceParameters`**-Wörterbuch spezifiziert das Benutzername-Fragment und das Passwort, das einer {{Glossary("ICE")}}-Sitzung zugeordnet ist.

Während der ICE-Aushandlung werden das Benutzername-Fragment und das Passwort jedes Peers in einem `RTCIceParameters`-Objekt aufgezeichnet, das aus dem {{domxref("RTCIceTransport")}} durch Aufrufen seiner Methode {{domxref("RTCIceTransport.getLocalParameters", "getLocalParameters()")}} oder {{domxref("RTCIceTransport.getRemoteParameters", "getRemoteParameters()")}} abgerufen werden kann, je nachdem, welches Ende für Sie von Interesse ist.

## Instanzattribute

- {{domxref("RTCIceParameters.usernameFragment", "usernameFragment")}}
  - : Ein String, der den Wert des Benutzername-Fragment-Feldes der ICE-Sitzung, `ufrag`, angibt.
- {{domxref("RTCIceParameters.password", "password")}}
  - : Ein String, der den Passwort-String der Sitzung angibt.

## Nutzungshinweise

Das Benutzername-Fragment und das Passwort identifizieren den entfernten Peer während der ICE-Sitzung eindeutig und werden verwendet, um sowohl die Sicherheit sicherzustellen als auch Übersprechen zwischen mehreren laufenden ICE-Sitzungen zu vermeiden. Siehe {{domxref("RTCIceCandidate.usernameFragment")}} für weitere Informationen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
