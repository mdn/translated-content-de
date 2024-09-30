---
title: EcKeyImportParams
slug: Web/API/EcKeyImportParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

Das **`EcKeyImportParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden soll, wenn ein beliebiges elliptische-Kurve-basiertes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus als [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `ECDSA` oder `ECDH` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `namedCurve`

  - : Ein String, der den Namen der zu verwendenden elliptischen Kurve repräsentiert. Dies kann einer der folgenden Namen für [NIST](https://www.nist.gov/)-zugelassene Kurven sein:

    - `P-256`
    - `P-384`
    - `P-521`

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die die "ECDH" oder "ECDSA"-Algorithmen für die [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) Methoden unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
