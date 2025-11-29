---
title: Crypto
slug: Web/API/Crypto
l10n:
  sourceCommit: 7034413c8fcca42a6931ac313b26c3abe42937c1
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

Das **`Crypto`**-Interface repräsentiert grundlegende Kryptografiefunktionen, die im aktuellen Kontext verfügbar sind. Es ermöglicht den Zugriff auf einen kryptografisch starken Zufallszahlengenerator und auf kryptografische Primitive.

Das `Crypto` ist in Fenstern über die [`Window.crypto`](/de/docs/Web/API/Window/crypto)-Eigenschaft und in Workern über die [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto)-Eigenschaft verfügbar.

## Instanz-Eigenschaften

- [`Crypto.subtle`](/de/docs/Web/API/Crypto/subtle) {{ReadOnlyInline}} {{SecureContext_inline}}
  - : Gibt ein [`SubtleCrypto`](/de/docs/Web/API/SubtleCrypto)-Objekt zurück, das Zugriff auf gängige kryptografische Primitive wie Hashing, Signieren, Verschlüsselung oder Entschlüsselung bietet.

## Instanz-Methoden

- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)
  - : Füllt das übergebene {{ jsxref("TypedArray") }} mit kryptografisch soliden Zufallswerten.
- [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) {{SecureContext_inline}}
  - : Gibt eine zufällig generierte, 36 Zeichen lange v4-UUID zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit](/de/docs/Web/Security)
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
