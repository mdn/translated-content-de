---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

Das **`HmacImportParams`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden muss, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HMAC` gesetzt werden.
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Es handelt sich um einen Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Es sollte einer der folgenden sein:

    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.

    > **Warning:** `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus gilt als unsicher und sollte nicht mehr verwendet werden.

- `length` {{optional_inline}}
  - : Eine `Number`, die die Länge in Bits des Schlüssels darstellt. Wenn dies weggelassen wird, entspricht die Länge des Schlüssels der Länge des Digests, der durch die von Ihnen gewählte Digest-Funktion generiert wird. Sofern Sie keinen guten Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und verwenden Sie den Standardwert.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, unterstützen diesen Typ.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
