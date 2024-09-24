---
title: RTCCertificate
slug: Web/API/RTCCertificate
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("WebRTC")}}

Das **`RTCCertificate`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) stellt ein Objekt dar, das ein {{domxref("RTCPeerConnection")}} zur Authentifizierung verwendet.

`RTCCertificate` ist ein {{Glossary("serializable object")}}, sodass es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit {{domxref("Worker/postMessage()", "postMessage()")}} kopiert werden kann.

## Instanz-Eigenschaften

- {{domxref("RTCCertificate.expires")}} {{ReadOnlyInline}}
  - : Gibt das Ablaufdatum des Zertifikats zurück.

## Instanz-Methoden

- {{domxref("RTCCertificate.getFingerprints()")}}
  - : Gibt ein Array von Zertifikat-Fingerabdrücken zurück, die mit den verschiedenen vom Browser unterstützten Algorithmen berechnet wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.RTCPeerConnection()`-Argument `configuration.certificates`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#certificates)
- {{domxref("RTCPeerConnection.generateCertificate_static", "RTCPeerConnection.generateCertificate()")}}
