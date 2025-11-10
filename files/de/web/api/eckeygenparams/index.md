---
title: EcKeyGenParams
slug: Web/API/EcKeyGenParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Crypto API") }}

Das **`EcKeyGenParams`**-Wörterbuch des [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein auf elliptischen Kurven basierendes Schlüsselpaar generiert wird: das heißt, wenn der Algorithmus entweder als [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `ECDSA` oder `ECDH` gesetzt werden, je nachdem, welchen Algorithmus Sie verwenden möchten.
- `namedCurve`
  - : Ein String, der den Namen der zu verwendenden elliptischen Kurve repräsentiert. Dies kann einer der folgenden Namen für von [NIST](https://www.nist.gov/)-zugelassene Kurven sein:
    - `P-256`
    - `P-384`
    - `P-521`

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die die Algorithmen "ECDH" oder "ECDSA" für die Methode [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
