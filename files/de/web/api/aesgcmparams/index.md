---
title: AesGcmParams
slug: Web/API/AesGcmParams
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Web Crypto API") }}

Das **`AesGcmParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [AES-GCM](/de/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)-Algorithmus verwendet wird.

Für Informationen zur Bereitstellung geeigneter Werte für diesen Parameter siehe die Spezifikation für AES-GCM: [NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf), insbesondere Abschnitt 5.2.1.1 über Eingabedaten.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `AES-GCM` gesetzt werden.
- `iv`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} mit dem Initialisierungsvektor. Dieser muss einzigartig für jede Verschlüsselungsoperation mit einem bestimmten Schlüssel sein. Anders ausgedrückt: Verwenden Sie niemals eine IV mit demselben Schlüssel erneut. Die AES-GCM-Spezifikation empfiehlt, dass die IV 96 Bit lang sein sollte und typischerweise Bits aus einem Zufallszahlengenerator enthält. [Abschnitt 8.2 der Spezifikation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) beschreibt Methoden zur Erstellung von IVs. Beachten Sie, dass die IV nicht vertraulich sein muss, nur einzigartig: daher ist es z.B. in Ordnung, sie im Klartext zusammen mit der verschlüsselten Nachricht zu übertragen.
- `additionalData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies enthält zusätzliche Daten, die nicht verschlüsselt, aber zusammen mit den verschlüsselten Daten authentifiziert werden. Wenn hier `additionalData` angegeben ist, müssen dieselben Daten im entsprechenden Aufruf von [`decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt) angegeben werden: Wenn die Daten im `decrypt()`-Aufruf nicht mit den ursprünglichen Daten übereinstimmen, wird die Entschlüsselung eine Ausnahme auslösen. Dies bietet Ihnen eine Möglichkeit, zugehörige Daten zu authentifizieren, ohne sie verschlüsseln zu müssen.

    Die Bitlänge von `additionalData` muss kleiner als `2^64 - 1` sein.

    Die `additionalData`-Eigenschaft ist optional und kann weggelassen werden, ohne die Sicherheit der Verschlüsselungsoperation zu beeinträchtigen.

- `tagLength` {{optional_inline}}
  - : Eine `Number`. Dies bestimmt die Größe in Bits des Authentifizierungstags, das bei der Verschlüsselungsoperation erzeugt wird und für die Authentifizierung in der entsprechenden Entschlüsselung verwendet wird.

    Die [Web-Crypto-API-Spezifikation](https://w3c.github.io/webcrypto/#aes-gcm-operations-encrypt) verlangt, dass dieser einen der folgenden Werte hat: 32, 64, 96, 104, 112, 120 oder 128. Andererseits empfiehlt die AES-GCM-Spezifikation, dass sie 96, 104, 112, 120 oder 128 betragen sollte, obwohl 32 oder 64 Bit in einigen Anwendungen akzeptabel sein können. Für zusätzliche Richtlinien siehe [Anhang C](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) der NIST-Publikation über "Empfehlungen für Blockchiffren-Betriebsmodi".

    `tagLength` ist optional und standardmäßig 128, wenn es nicht angegeben wird.

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
