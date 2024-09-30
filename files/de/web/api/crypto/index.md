---
title: Crypto
slug: Web/API/Crypto
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Das **`Crypto`** Interface repräsentiert grundlegende Kryptografiefunktionen, die im aktuellen Kontext verfügbar sind. Es ermöglicht den Zugriff auf einen kryptographisch starken Zufallszahlengenerator und auf kryptographische Primitive.

`Crypto` ist in `windows` über die [`Window.crypto`](/de/docs/Web/API/Window/crypto) Eigenschaft und in `workers` über die [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) Eigenschaft verfügbar.

## Instanz-Eigenschaften

_Dieses Interface implementiert Eigenschaften, die in [`RandomSource`](/de/docs/Web/API/Crypto/getRandomValues) definiert sind._

- [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle) {{ReadOnlyInline}} {{SecureContext_inline}}
  - : Gibt ein [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto) Objekt zurück, das Zugriff auf gängige kryptografische Primitive wie Hashing, Signierung, Verschlüsselung oder Entschlüsselung bietet.

## Instanz-Methoden

_Dieses Interface implementiert Methoden, die in [`RandomSource`](/de/docs/Web/API/Crypto/getRandomValues) definiert sind._

- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)
  - : Füllt das übergebene {{ jsxref("TypedArray") }} mit kryptographisch sicheren Zufallswerten.
- [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) {{SecureContext_inline}}
  - : Gibt eine zufällig generierte, 36 Zeichen lange v4 UUID zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security)
