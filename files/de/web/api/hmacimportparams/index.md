---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: 63774786a6abccda8e70ad62429aa39571aba878
---

{{ APIRef("Web Crypto API") }}

Das **`HmacImportParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das beim Importieren, Entpacken oder Ableiten eines Schlüssels für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus übergeben werden soll, als:

- Der `algorithm`-Parameter für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey)
- Der `unwrappedKeyAlgorithm`-Parameter für [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey)
- Der `derivedKeyType`-Parameter für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HMAC` gesetzt werden.
- `hash`
  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem Stringwert enthält. Es ist ein Identifier für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:
    - `SHA-256`: Wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-384`: Wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-512`: Wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.

    > [!WARNING]
    > `SHA-1` wird hier auch unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus gilt als verwundbar und sollte nicht mehr verwendet werden.

- `length` {{optional_inline}}
  - : Eine `Number`, die die Länge des Schlüssels in Bits darstellt. Wenn dies weggelassen wird, entspricht die Länge des Schlüssels der Länge des Digests, der von der gewählten Digest-Funktion erzeugt wird. Sofern Sie keinen triftigen Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und verwenden Sie die Standardeinstellung.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey), [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) oder [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey), [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) oder [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
