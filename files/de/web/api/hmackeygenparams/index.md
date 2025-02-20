---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

Das **`HmacKeyGenParams`**-Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanzeigenschaften

- `name`

  - : Ein String. Dieser sollte auf `HMAC` gesetzt werden.

- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Dies ist ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:

    - `SHA-256`: Wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-384`: Wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-512`: Wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.

    > **Warning:** `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus gilt als unsicher und sollte nicht mehr verwendet werden.

- `length` {{optional_inline}}
  - : Eine `Number` — die Länge des Schlüssels in Bits. Wenn dies weggelassen wird, ist die Länge des Schlüssels gleich der Blockgröße der ausgewählten Hash-Funktion. Sofern es keinen triftigen Grund gibt, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und verwenden Sie die Standardeinstellung.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methode [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey) unterstützen, werden diesen Typ auch unterstützen.

## Siehe auch

- [`SubtleCrypto.generateKey()`](/de/docs/Web/API/SubtleCrypto/generateKey).
