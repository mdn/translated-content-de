---
title: AesGcmParams
slug: Web/API/AesGcmParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

Das **`AesGcmParams`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als der `algorithm` Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)-Algorithmus verwendet wird.

Für Einzelheiten, wie man geeignete Werte für diesen Parameter bereitstellt, siehe die Spezifikation für AES-GCM: [NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf), insbesondere Abschnitt 5.2.1.1 zu Eingabedaten.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `AES-GCM` gesetzt werden.
- `iv`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit dem Initialisierungsvektor. Dieser muss für jede Verschlüsselungsoperation mit einem bestimmten Schlüssel einzigartig sein. Anders ausgedrückt: Wiederverwenden Sie niemals einen IV mit dem gleichen Schlüssel. Die AES-GCM-Spezifikation empfiehlt, dass der IV 96 Bit lang sein sollte und typischerweise Bits aus einem Zufallszahlengenerator enthält. [Abschnitt 8.2 der Spezifikation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) umreißt Methoden zur Konstruktion von IVs. Beachten Sie, dass der IV nicht geheim sein muss, sondern nur einzigartig: Es ist also in Ordnung, ihn beispielsweise zusammen mit der verschlüsselten Nachricht unverschlüsselt zu übertragen.
- `additionalData` {{optional_inline}}

  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies enthält zusätzliche Daten, die nicht verschlüsselt, aber zusammen mit den verschlüsselten Daten authentifiziert werden. Wenn `additionalData` hier angegeben wird, müssen bei dem entsprechenden Aufruf von [`decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt) die gleichen Daten angegeben werden: wenn die bei dem `decrypt()`-Aufruf angegebenen Daten nicht mit den ursprünglichen Daten übereinstimmen, wird die Entschlüsselung eine Ausnahme werfen. Dies bietet Ihnen eine Möglichkeit, zugehörige Daten zu authentifizieren, ohne sie verschlüsseln zu müssen.

    Die Bitlänge von `additionalData` muss kleiner sein als `2^64 - 1`.

    Die `additionalData`-Eigenschaft ist optional und kann weggelassen werden, ohne die Sicherheit der Verschlüsselungsoperation zu gefährden.

- `tagLength` {{optional_inline}}

  - : Eine `Number`. Dies bestimmt die Größe in Bits des Authentifizierungstags, das bei der Verschlüsselungsoperation generiert und bei der entsprechenden Entschlüsselung zur Authentifizierung verwendet wird.

    Laut der [Web Crypto-Spezifikation](https://www.w3.org/TR/WebCryptoAPI/#dfn-AesGcmParams) muss dies einen der folgenden Werte haben: 32, 64, 96, 104, 112, 120 oder 128. Die AES-GCM-Spezifikation empfiehlt, dass es 96, 104, 112, 120 oder 128 sein sollte, obwohl 32 oder 64 Bit in einigen Anwendungen akzeptabel sein können: [Anhang C der Spezifikation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) bietet hier zusätzliche Anleitungen.

    `tagLength` ist optional und standardmäßig 128, wenn es nicht spezifiziert ist.

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
