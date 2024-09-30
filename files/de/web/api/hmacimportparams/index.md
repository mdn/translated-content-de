---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("Web Crypto API") }}

Das **`HmacImportParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dies sollte auf `HMAC` gesetzt werden.
- `hash`

  - : Ein String, der den Namen der zu verwendenden [Hash-Funktion](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) repräsentiert. Dieser kann den Wert `SHA-256`, `SHA-384` oder `SHA-512` annehmen.

    > [!WARNING]
    > Obwohl Sie hier technisch `SHA-1` übergeben können, wird davon dringend abgeraten, da es als unsicher gilt.

- `length` {{optional_inline}}
  - : Eine `Number`, die die Länge des Schlüssels in Bits repräsentiert. Wenn dies weggelassen wird, entspricht die Schlüssellänge der Länge des von der gewählten Hash-Funktion generierten Hashes. Es sei denn, Sie haben einen guten Grund, eine andere Länge zu verwenden, sollten Sie diese Eigenschaft weglassen und die Standardeinstellung nutzen.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methoden [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey), [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.importKey()`](/de/docs/Web/API/SubtleCrypto/importKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
