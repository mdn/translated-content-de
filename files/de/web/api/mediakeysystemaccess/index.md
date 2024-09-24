---
title: MediaKeySystemAccess
slug: Web/API/MediaKeySystemAccess
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeySystemAccess`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) bietet Zugriff auf ein Schlüsselsystem zur Entschlüsselung und/oder einen Inhaltschutzanbieter. Sie können eine Instanz dieses Objekts mit der Methode {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} anfordern.

## Instanz-Eigenschaften

- {{domxref("MediaKeySystemAccess.keySystem")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das verwendete Schlüsselsystem identifiziert.

## Instanz-Methoden

- {{domxref("MediaKeySystemAccess.createMediaKeys()")}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das zu einem neuen {{domxref("MediaKeys")}}-Objekt aufgelöst wird.
- {{domxref("MediaKeySystemAccess.getConfiguration()")}}
  - : Gibt ein Objekt mit der unterstützten Kombination von Konfigurationsoptionen zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
