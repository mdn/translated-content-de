---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

Das **`HmacImportParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus erstellt wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HMAC` gesetzt werden.
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem Stringwert enthält. Es ist ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:

    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > [!WARNING] > `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus wird als unsicher angesehen und sollte nicht mehr verwendet werden.

- `length` {{optional_inline}}
  - : Eine `Nummer`, die die Länge des Schlüssels in Bits darstellt. Wenn dies weggelassen wird, entspricht die Länge des Schlüssels der Länge des von der gewählten Digest-Funktion erzeugten Digests. Sofern Sie keinen besonderen Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und verwenden Sie den Standardwert.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) und [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
