---
title: Crypto
slug: Web/API/Crypto
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Das **`Crypto`**-Interface repräsentiert grundlegende Kryptografiefunktionen, die im aktuellen Kontext zur Verfügung stehen. Es ermöglicht den Zugriff auf einen kryptografisch starken Zufallszahlengenerator und auf kryptografische Primitive.

Das `Crypto` ist in Fenstern über die [`Window.crypto`](/de/docs/Web/API/Window/crypto)-Eigenschaft und in Workern über die [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)-Eigenschaft verfügbar.

## Instanz-Eigenschaften

_Dieses Interface implementiert Eigenschaften, die auf [`RandomSource`](/de/docs/Web/API/Crypto/getRandomValues) definiert sind._

- [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle) {{ReadOnlyInline}} {{SecureContext_inline}}
  - : Gibt ein [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Objekt zurück, das Zugang zu allgemeinen kryptografischen Primitiven bietet, wie Hashing, Signierung, Verschlüsselung oder Entschlüsselung.

## Instanz-Methoden

_Dieses Interface implementiert Methoden, die auf [`RandomSource`](/de/docs/Web/API/Crypto/getRandomValues) definiert sind._

- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)
  - : Füllt das übergebene {{ jsxref("TypedArray") }} mit kryptografisch sicheren Zufallswerten.
- [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) {{SecureContext_inline}}
  - : Gibt eine zufällig generierte, 36 Zeichen lange v4-UUID zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- [Merkmale, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [Transportschichtsicherheit](/de/docs/Web/Security/Transport_Layer_Security)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
