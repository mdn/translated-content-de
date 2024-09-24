---
title: Crypto
slug: Web/API/Crypto
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("Web Crypto API")}} {{AvailableInWorkers}}

Die **`Crypto`**-Schnittstelle repräsentiert grundlegende Kryptographie-Funktionen, die im aktuellen Kontext verfügbar sind. Sie ermöglicht den Zugriff auf einen kryptographisch starken Zufallszahlen-Generator und auf kryptographische Primitive.

`Crypto` ist in Fenstern über die {{domxref("Window.crypto")}}-Eigenschaft verfügbar und in Workern über die {{domxref("WorkerGlobalScope.crypto")}}-Eigenschaft.

## Instanz-Eigenschaften

_Diese Schnittstelle implementiert Eigenschaften, die auf {{domxref("Crypto/getRandomValues", "RandomSource")}} definiert sind._

- {{domxref("Crypto.subtle")}} {{ReadOnlyInline}} {{SecureContext_inline}}
  - : Gibt ein {{domxref("SubtleCrypto")}}-Objekt zurück, das Zugriff auf grundlegende kryptographische Primitive bietet, wie Hashing, Signieren, Verschlüsselung oder Entschlüsselung.

## Instanz-Methoden

_Diese Schnittstelle implementiert Methoden, die auf {{domxref("Crypto/getRandomValues", "RandomSource")}} definiert sind._

- {{domxref("Crypto.getRandomValues()")}}
  - : Füllt das übergebene {{ jsxref("TypedArray") }} mit kryptographisch sicheren Zufallswerten.
- {{domxref("Crypto.randomUUID()")}} {{SecureContext_inline}}
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
