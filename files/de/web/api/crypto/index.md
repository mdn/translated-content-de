---
title: Crypto
slug: Web/API/Crypto
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Die **`Crypto`**-Schnittstelle repräsentiert grundlegende kryptografische Funktionen, die im aktuellen Kontext verfügbar sind. Sie ermöglicht den Zugriff auf einen kryptografisch starken Zufallszahlengenerator und auf kryptografische Primitive.

Das `Crypto` ist in Fenstern über die [`Window.crypto`](/de/docs/Web/API/Window/crypto)-Eigenschaft und in Workern über die [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)-Eigenschaft verfügbar.

## Instanzeigenschaften

_Diese Schnittstelle implementiert Eigenschaften, die auf [`RandomSource`](/de/docs/Web/API/Crypto/getRandomValues) definiert sind._

- [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle) {{ReadOnlyInline}} {{SecureContext_inline}}
  - : Gibt ein [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Objekt zurück, das Zugriff auf gängige kryptografische Primitive ermöglicht, wie z.B. Hashing, Signierung, Verschlüsselung oder Entschlüsselung.

## Instanzmethoden

_Diese Schnittstelle implementiert Methoden, die auf [`RandomSource`](/de/docs/Web/API/Crypto/getRandomValues) definiert sind._

- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)
  - : Füllt das übergebene {{ jsxref("TypedArray") }} mit kryptografisch sicheren Zufallswerten.
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
