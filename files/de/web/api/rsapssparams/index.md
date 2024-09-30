---
title: RsaPssParams
slug: Web/API/RsaPssParams
l10n:
  sourceCommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{ APIRef("Web Crypto API") }}

Das **`RsaPssParams`** Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) oder [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) übergeben werden sollte, wenn der [RSA-PSS](/de/docs/Web/API/SubtleCrypto/sign#rsa-pss) Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `RSA-PSS` gesetzt werden.
- `saltLength`

  - : Ein `long` Integer, der die Länge des zu verwendenden zufälligen Salzes in Bytes darstellt.

    [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) besagt, dass "Typische Salzlängen" entweder 0 oder die Länge der Ausgabe des [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto#supported_algorithms) sind, der ausgewählt wurde, als dieser Schlüssel [generiert](/de/docs/Web/API/SubtleCrypto/generateKey) wurde. Wenn Sie beispielsweise [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) als Digest-Algorithmus verwenden, könnte dies 32 sein.

    Die maximale Größe von `saltLength` wird durch folgendes bestimmt:

    ```js
    Math.ceil((keySizeInBits - 1) / 8) - digestSizeInBytes - 2;
    ```

    Bei einer Schlüssellänge von 2048 Bits und einer Digest-Ausgabegröße von 32 Bytes wäre die maximale Größe also 222.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "RSA-PSS"-Algorithmus für die Methoden [`SubtleCrypto.sign()`](/de/docs/Web/API/SubtleCrypto/sign) und [`SubtleCrypto.verify()`](/de/docs/Web/API/SubtleCrypto/verify) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [RFC 3447: RSASSA-PSS](https://datatracker.ietf.org/doc/html/rfc3447#section-8.1)
