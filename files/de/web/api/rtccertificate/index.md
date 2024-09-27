---
title: RTCCertificate
slug: Web/API/RTCCertificate
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("WebRTC")}}

Das **`RTCCertificate`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet ein Objekt, das ein Zertifikat darstellt, das eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Authentifizierung verwendet.

`RTCCertificate` ist ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

## Instanzeigenschaften

- [`RTCCertificate.expires`](/de/docs/Web/API/RTCCertificate/expires) {{ReadOnlyInline}}
  - : Gibt das Ablaufdatum des Zertifikats zurück.

## Instanzmethoden

- [`RTCCertificate.getFingerprints()`](/de/docs/Web/API/RTCCertificate/getFingerprints)
  - : Gibt ein Array von Zertifikat-Fingerabdrücken zurück, die unter Verwendung der verschiedenen vom Browser unterstützten Algorithmen berechnet wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.RTCPeerConnection()`-Argument `configuration.certificates`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection#certificates)
- [`RTCPeerConnection.generateCertificate()`](/de/docs/Web/API/RTCPeerConnection/generateCertificate_static)
