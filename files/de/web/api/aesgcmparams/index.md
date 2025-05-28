---
title: AesGcmParams
slug: Web/API/AesGcmParams
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{ APIRef("Web Crypto API") }}

Das **`AesGcmParams`** Wörterbuch des [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) Algorithmus verwendet wird.

Für Details, wie man geeignete Werte für diesen Parameter liefert, siehe die Spezifikation für AES-GCM: [NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf), insbesondere Abschnitt 5.2.1.1 über Eingabedaten.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `AES-GCM` gesetzt werden.
- `iv`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit dem Initialisierungsvektor. Dieser muss für jede Verschlüsselungsoperation mit einem gegebenen Schlüssel einzigartig sein. Anders ausgedrückt: Wiederverwenden Sie niemals einen IV mit dem gleichen Schlüssel. Die AES-GCM-Spezifikation empfiehlt, dass der IV 96 Bit lang sein sollte und typischerweise aus einem Zufallszahlengenerator stammt. [Abschnitt 8.2 der Spezifikation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) beschreibt Methoden zur Konstruktion von IVs. Beachten Sie, dass der IV nicht geheim sein muss, nur einzigartig: Es ist also in Ordnung, ihn beispielsweise zusammen mit der verschlüsselten Nachricht im Klartext zu übertragen.
- `additionalData` {{optional_inline}}

  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies enthält zusätzliche Daten, die nicht verschlüsselt werden, aber zusammen mit den verschlüsselten Daten authentifiziert werden sollen. Wenn hier `additionalData` angegeben wird, müssen dieselben Daten im entsprechenden Aufruf von [`decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt) angegeben werden: Wenn die Daten, die beim Aufruf von `decrypt()` angegeben werden, nicht mit den Originaldaten übereinstimmen, wird die Entschlüsselung eine Ausnahme auslösen. Dies bietet Ihnen eine Möglichkeit, assoziierte Daten zu authentifizieren, ohne sie verschlüsseln zu müssen.

    Die Bitlänge von `additionalData` muss kleiner als `2^64 - 1` sein.

    Die `additionalData` Eigenschaft ist optional und kann weggelassen werden, ohne die Sicherheit der Verschlüsselungsoperation zu beeinträchtigen.

- `tagLength` {{optional_inline}}

  - : Eine `Number`. Dies bestimmt die Größe in Bits des Authentifizierungs-Tags, das in der Verschlüsselungsoperation generiert wird und für die Authentifizierung in der entsprechenden Entschlüsselung verwendet wird.

    Die [Web Crypto API Spezifikation](https://w3c.github.io/webcrypto/#aes-gcm-operations-encrypt) erfordert, dass dies einen der folgenden Werte hat: 32, 64, 96, 104, 112, 120 oder 128. Andererseits empfiehlt die AES-GCM-Spezifikation, dass es 96, 104, 112, 120 oder 128 sein sollte, obwohl 32 oder 64 Bit in einigen Anwendungen akzeptabel sein können. Für zusätzliche Leitlinien siehe [Anhang C](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) der NIST-Publikation zu "Empfehlungen für Blockverschlüsselungsmodi".

    `tagLength` ist optional und standardmäßig 128, wenn es nicht spezifiziert wird.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) und [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "AES-GCM"-Algorithmus für die Methoden [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt).
- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
