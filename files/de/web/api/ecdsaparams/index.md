---
title: EcdsaParams
slug: Web/API/EcdsaParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

Das **`EcdsaParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) übergeben werden sollte, wenn der [ECDSA](/de/docs/Web/API/SubtleCrypto/sign#ecdsa)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `ECDSA` gesetzt werden.
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Es ist ein Bezeichner für den [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest), der verwendet werden soll. Folgende Werte sind möglich:

    - `SHA-256`: Wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-384`: Wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-512`: Wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.

    > **Warning:** `SHA-1` wird ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus gilt als unsicher und sollte nicht mehr verwendet werden.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "ECDSA"-Algorithmus für die Methoden [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) unterstützen, unterstützen diesen Typ.

{{Compat}}

## Siehe auch

- [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify).
