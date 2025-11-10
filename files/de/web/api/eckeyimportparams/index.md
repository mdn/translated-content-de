---
title: EcKeyImportParams
slug: Web/API/EcKeyImportParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Crypto API") }}

Das **`EcKeyImportParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein schlüsselpaargenerierender Algorithmus auf Basis elliptischer Kurven verwendet wird: Dieser wird identifiziert als entweder [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh).

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `ECDSA` oder `ECDH` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `namedCurve`
  - : Ein String, der den Namen der zu verwendenden elliptischen Kurve repräsentiert. Dies kann einer der folgenden Namen für [NIST](https://www.nist.gov/)-genehmigte Kurven sein:
    - `P-256`
    - `P-384`
    - `P-521`

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die Algorithmen "ECDH" oder "ECDSA" für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
