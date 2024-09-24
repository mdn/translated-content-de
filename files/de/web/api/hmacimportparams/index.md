---
title: HmacImportParams
slug: Web/API/HmacImportParams
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ APIRef("Web Crypto API") }}

Das **`HmacImportParams`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.importKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn ein Schlüssel für den [HMAC](/de/docs/Web/API/SubtleCrypto/sign#hmac)-Algorithmus generiert wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HMAC` gesetzt werden.
- `hash`

  - : Ein String, der den Namen der zu verwendenden [Digest-Funktion](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) darstellt. Dieser kann den Wert `SHA-256`, `SHA-384` oder `SHA-512` annehmen.

    > [!WARNING]
    > Obwohl Sie hier technisch `SHA-1` übergeben können, wird dies stark abgeraten, da es als anfällig gilt.

- `length` {{optional_inline}}
  - : Ein `Number`, der die Länge in Bits des Schlüssels repräsentiert. Wenn dies weggelassen wird, entspricht die Länge des Schlüssels der Länge des von der gewählten Digest-Funktion erzeugten Digests. Sofern Sie keinen guten Grund haben, eine andere Länge zu verwenden, lassen Sie diese Eigenschaft weg und verwenden Sie den Standardwert.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.importKey()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HMAC"-Algorithmus für die Methoden {{domxref("SubtleCrypto.importKey()")}} und {{domxref("SubtleCrypto.unwrapKey()")}} unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.importKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
