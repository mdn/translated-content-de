---
title: AesCtrParams
slug: Web/API/AesCtrParams
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{ APIRef("Web Crypto API") }}

Das **`AesCtrParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} übergeben werden sollte, wenn der [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)-Algorithmus verwendet wird.

AES ist ein Blockchiffre, was bedeutet, dass die Nachricht in Blöcke aufgeteilt wird und ein Block nach dem anderen verschlüsselt wird. Im CTR-Modus wird jedes Mal, wenn ein Block der Nachricht verschlüsselt wird, ein zusätzlicher Datenblock eingemischt. Dieser zusätzliche Block wird als "Zählerblock" bezeichnet.

Ein gegebener Zählerblock-Wert darf nie mehr als einmal mit demselben Schlüssel verwendet werden:

- Bei einer Nachricht, die _n_ Blöcke lang ist, muss für jeden Block ein anderer Zählerblock verwendet werden.
- Wenn derselbe Schlüssel verwendet wird, um mehr als eine Nachricht zu verschlüsseln, muss für alle Blöcke über alle Nachrichten hinweg ein anderer Zählerblock verwendet werden.

Typischerweise wird dies erreicht, indem der anfängliche Zählerblock-Wert in zwei zusammenhängende Teile aufgeteilt wird:

- Ein [Nonce](https://en.wikipedia.org/wiki/Cryptographic_nonce) (das ist eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block in der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht verschlüsselt werden soll, wird ein neuer Nonce gewählt. Nonces müssen nicht geheim sein, aber sie dürfen nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird jedes Mal erhöht, wenn ein Block verschlüsselt wird.

Im Wesentlichen sollte der Nonce sicherstellen, dass Zählerblöcke von einer Nachricht zur nächsten nicht wiederverwendet werden, während der Zähler sicherstellen sollte, dass Zählerblöcke innerhalb einer einzelnen Nachricht nicht wiederverwendet werden.

> [!NOTE]
> Weitere Informationen finden Sie in [Anhang B des NIST SP800-38A-Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D).

## Instanzeigenschaften

- `name`
  - : Ein String. Dies sollte auf `AES-CTR` gesetzt werden.
- `counter`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}} — der Anfangswert des Zählerblocks. Dieser muss 16 Bytes lang sein (die AES-Blockgröße). Die rechtesten `length` Bit dieses Blocks werden für den Zähler verwendet, und der Rest wird für den Nonce verwendet. Zum Beispiel, wenn `length` auf 64 gesetzt ist, dann ist die erste Hälfte von `counter` der Nonce und die zweite Hälfte wird für den Zähler verwendet.
- `length`
  - : Eine `Number` — die Anzahl der Bits im Zählerblock, die für den tatsächlichen Zähler verwendet werden. Der Zähler muss groß genug sein, damit er sich nicht überlappt: Wenn die Nachricht `n` Blöcke ist und der Zähler `m` Bits lang ist, dann muss Folgendes zutreffen: `n <= 2^m`. Der [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final)-Standard, der CTR definiert, schlägt vor, dass der Zähler die Hälfte des Zählerblocks einnehmen sollte (siehe [Anhang B.2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A73%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)), so dass es für AES 64 wäre.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.encrypt()")}} und {{domxref("SubtleCrypto.decrypt()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "AES-CTR"-Algorithmus für die Methoden {{domxref("SubtleCrypto.encrypt()")}}, {{domxref("SubtleCrypto.decrypt()")}}, {{domxref("SubtleCrypto.wrapKey()")}} oder {{domxref("SubtleCrypto.unwrapKey()")}} unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- Der CTR-Modus ist in Abschnitt 6.5 des [NIST SP800-38A-Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) definiert.
- {{domxref("SubtleCrypto.encrypt()")}}.
- {{domxref("SubtleCrypto.decrypt()")}}.
- {{domxref("SubtleCrypto.wrapKey()")}}.
- {{domxref("SubtleCrypto.unwrapKey()")}}.
