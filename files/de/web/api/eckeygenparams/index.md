---
title: EcKeyGenParams
slug: Web/API/EcKeyGenParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

Das **`EcKeyGenParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein Schlüsselpaar auf Basis elliptischer Kurven generiert wird: Das heißt, wenn der Algorithmus entweder als [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa) oder [ECDH](/de/docs/Web/API/SubtleCrypto/deriveKey#ecdh) identifiziert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `ECDSA` oder `ECDH` gesetzt werden, abhängig von dem Algorithmus, den Sie verwenden möchten.
- `namedCurve`

  - : Ein String, der den Namen der zu verwendenden elliptischen Kurve darstellt. Dies kann einer der folgenden Namen für von [NIST](https://www.nist.gov/) genehmigte Kurven sein:

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
