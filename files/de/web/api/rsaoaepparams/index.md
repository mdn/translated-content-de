---
title: RsaOaepParams
slug: Web/API/RsaOaepParams
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{ APIRef("Web Crypto API") }}

Das **`RsaOaepParams`**-Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [RSA_OAEP](/de/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)-Algorithmus verwendet wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `RSA-OAEP` gesetzt werden.
- `label` {{optional_inline}}

  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder eine {{jsxref("DataView")}} — ein Array von Bytes, das selbst nicht verschlüsselt werden muss, aber mit dem Chiffretext verbunden sein sollte. Ein Digest des Labels ist Teil der Eingabe für die Verschlüsselungsoperation.

    Sofern Ihre Anwendung kein Label verlangt, können Sie dieses Argument einfach weglassen, und es wird sich nicht auf die Sicherheit der Verschlüsselungsoperation auswirken.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) und [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "RSA-OAEP"-Algorithmus für die Methoden [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt).
- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
