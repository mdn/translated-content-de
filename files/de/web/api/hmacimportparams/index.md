---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("Web Crypto API") }}

Das **`HmacImportParams`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `HMAC` gesetzt werden.
- `hash`

  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) darstellt. Er kann den Wert `SHA-256`, `SHA-384` oder `SHA-512` annehmen.

    > [!WARNING]
    > Obwohl Sie technisch `SHA-1` hier übergeben können, wird dies dringend abgeraten, da es als unsicher gilt.

- `length` {{optional_inline}}
  - : Eine `Number`, die die Länge in Bits des Schlüssels darstellt. Wenn dies weggelassen wird, entspricht die Länge des Schlüssels der Länge des Digests, der von der gewählten Digest-Funktion erzeugt wird. Sofern Sie keinen guten Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und verwenden Sie den Standardwert.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey), [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
