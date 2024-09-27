---
title: EcKeyImportParams
slug: Web/API/EcKeyImportParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

Das **`EcKeyImportParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein schlüsselpaar auf Basis elliptischer Kurven generiert wird: das heißt, wenn der Algorithmus entweder als [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `ECDSA` oder `ECDH` gesetzt werden, abhängig vom verwendeten Algorithmus.
- `namedCurve`

  - : Ein String, der den Namen der zu verwendenden elliptischen Kurve darstellt. Dies kann einer der folgenden Namen für von [NIST](https://www.nist.gov/)-zugelassene Kurven sein:

    - `P-256`
    - `P-384`
    - `P-521`

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die die "ECDH"- oder "ECDSA"-Algorithmen für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
