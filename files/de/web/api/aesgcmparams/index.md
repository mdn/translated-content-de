---
title: AesGcmParams
slug: Web/API/AesGcmParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

Das **`AesGcmParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)-Algorithmus verwendet wird.

Für Einzelheiten, wie geeignete Werte für diesen Parameter bereitgestellt werden, siehe die Spezifikation für AES-GCM: [NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf), insbesondere Abschnitt 5.2.1.1 über Eingabedaten.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `AES-GCM` gesetzt werden.
- `iv`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit dem Initialisierungsvektor. Dieser muss für jede Verschlüsselungsoperation, die mit einem bestimmten Schlüssel durchgeführt wird, einzigartig sein. Anders ausgedrückt: Verwenden Sie niemals denselben IV mit demselben Schlüssel erneut. Die AES-GCM-Spezifikation empfiehlt, dass der IV 96 Bit lang sein sollte und typischerweise Bits aus einem Zufallszahlengenerator enthält. [Abschnitt 8.2 der Spezifikation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) beschreibt Methoden zur Konstruktion von IVs. Beachten Sie, dass der IV nicht geheim, sondern nur einzigartig sein muss: Es ist also in Ordnung, ihn beispielsweise im Klartext zusammen mit der verschlüsselten Nachricht zu übertragen.
- `additionalData` {{optional_inline}}

  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies enthält zusätzliche Daten, die nicht verschlüsselt, aber zusammen mit den verschlüsselten Daten authentifiziert werden. Wenn hier `additionalData` angegeben wird, müssen dieselben Daten im entsprechenden Aufruf von [`decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt) angegeben werden: Wenn die im `decrypt()`-Aufruf angegebenen Daten nicht mit den ursprünglichen Daten übereinstimmen, wird bei der Entschlüsselung eine Ausnahme ausgelöst. Dies gibt Ihnen eine Möglichkeit, zugehörige Daten zu authentifizieren, ohne sie verschlüsseln zu müssen.

    Die Bitlänge von `additionalData` muss kleiner als `2^64 - 1` sein.

    Die Eigenschaft `additionalData` ist optional und kann weggelassen werden, ohne die Sicherheit der Verschlüsselungsoperation zu beeinträchtigen.

- `tagLength` {{optional_inline}}

  - : Eine `Number`. Dies bestimmt die Größe in Bits des Authentifizierungstags, das in der Verschlüsselungsoperation erzeugt und für die Authentifizierung in der entsprechenden Entschlüsselung verwendet wird.

    Laut der [Web-Crypto-Spezifikation](https://www.w3.org/TR/WebCryptoAPI/#dfn-AesGcmParams) muss dies einen der folgenden Werte haben: 32, 64, 96, 104, 112, 120 oder 128. Die AES-GCM-Spezifikation empfiehlt, dass es 96, 104, 112, 120 oder 128 sein sollte, obwohl 32 oder 64 Bit in einigen Anwendungen akzeptabel sein können: [Anhang C der Spezifikation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) bietet hier zusätzliche Hinweise.

    `tagLength` ist optional und hat einen Standardwert von 128, wenn es nicht angegeben wird.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.encrypt()")}} und {{domxref("SubtleCrypto.decrypt()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "AES-GCM"-Algorithmus für die Methoden {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
