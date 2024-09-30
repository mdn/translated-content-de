---
title: MediaKeySystemAccess
slug: Web/API/MediaKeySystemAccess
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`MediaKeySystemAccess`**-Interface der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) bietet Zugriff auf ein Key System für die Entschlüsselung und/oder einen Inhaltsanbieter für Schutz. Sie können eine Instanz dieses Objekts mit der Methode [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) anfordern.

## Instanzeigenschaften

- [`MediaKeySystemAccess.keySystem`](/de/docs/Web/API/MediaKeySystemAccess/keySystem) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das verwendete Key System identifiziert.

## Instanzmethoden

- [`MediaKeySystemAccess.createMediaKeys()`](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys)
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem neuen [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt aufgelöst wird.
- [`MediaKeySystemAccess.getConfiguration()`](/de/docs/Web/API/MediaKeySystemAccess/getConfiguration)
  - : Gibt ein Objekt mit der unterstützten Kombination von Konfigurationsoptionen zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
