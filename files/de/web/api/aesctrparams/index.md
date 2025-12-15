---
title: AesCtrParams
slug: Web/API/AesCtrParams
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{ APIRef("Web Crypto API") }}

Das **`AesCtrParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey) oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) übergeben werden sollte, wenn der [AES-CTR](/de/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)-Algorithmus verwendet wird.

AES ist ein Blockchiffre, was bedeutet, dass es die Nachricht in Blöcke aufteilt und diese Block für Block verschlüsselt. Im CTR-Modus wird jedes Mal, wenn ein Block der Nachricht verschlüsselt wird, ein zusätzlicher Block von Daten eingemischt. Dieser zusätzliche Block wird "Counter-Block" genannt.

Ein gegebener Counter-Block-Wert darf nicht mehr als einmal mit demselben Schlüssel verwendet werden:

- Bei einer Nachricht, die _n_ Blöcke lang ist, muss für jeden Block ein anderer Counter-Block verwendet werden.
- Wenn derselbe Schlüssel zum Verschlüsseln mehrerer Nachrichten verwendet wird, muss für alle Blöcke über alle Nachrichten hinweg ein unterschiedlicher Counter-Block verwendet werden.

Typischerweise wird dies erreicht, indem der anfängliche Counter-Block-Wert in zwei zusammengefügte Teile aufgeteilt wird:

- Eine {{Glossary("Nonce", "Nonce")}} (das heißt, eine Zahl, die nur einmal verwendet werden darf). Der Nonce-Teil des Blocks bleibt für jeden Block in der Nachricht gleich. Jedes Mal, wenn eine neue Nachricht verschlüsselt werden soll, wird eine neue Nonce gewählt. Nonces müssen nicht geheim sein, aber sie dürfen nicht mit demselben Schlüssel wiederverwendet werden.
- Ein Zähler. Dieser Teil des Blocks wird jedes Mal inkrementiert, wenn ein Block verschlüsselt wird.

Im Wesentlichen sollte die Nonce sicherstellen, dass Counter-Blöcke nicht von einer Nachricht zur nächsten wiederverwendet werden, während der Zähler sicherstellen sollte, dass Counter-Blöcke nicht innerhalb einer einzelnen Nachricht wiederverwendet werden.

> [!NOTE]
> Siehe [Anhang B des NIST SP800-38A-Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) für weitere Informationen.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `AES-CTR` gesetzt werden.
- `counter`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder eine {{jsxref("DataView")}} — Der Anfangswert des Counter-Blocks. Dieser muss 16 Bytes lang sein (die AES-Blockgröße). Die rechtsmost `length` Bits dieses Blocks werden für den Zähler verwendet, und der Rest wird für die Nonce verwendet. Zum Beispiel, wenn `length` auf 64 gesetzt ist, dann ist die erste Hälfte von `counter` die Nonce und die zweite Hälfte wird für den Zähler verwendet.
- `length`
  - : Eine `Number` — die Anzahl der Bits im Counter-Block, die für den tatsächlichen Zähler verwendet werden. Der Zähler muss groß genug sein, damit er nicht überläuft: Wenn die Nachricht `n` Blöcke lang ist und der Zähler `m` Bits lang ist, muss folgendes gelten: `n <= 2^m`. Der [NIST SP800-38A](https://csrc.nist.gov/pubs/sp/800/38/a/final) Standard, der CTR definiert, empfiehlt, dass der Zähler die Hälfte des Counter-Blocks einnehmen sollte (siehe [Anhang B.2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A73%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)), so dass er für AES 64 wäre.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt) und [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "AES-CTR"-Algorithmus für die Methoden [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt), [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt), [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey), oder [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- Der CTR-Modus ist in Abschnitt 6.5 des [NIST SP800-38A-Standards](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) definiert.
- [`SubtleCrypto.encrypt()`](/de/docs/Web/API/SubtleCrypto/encrypt).
- [`SubtleCrypto.decrypt()`](/de/docs/Web/API/SubtleCrypto/decrypt).
- [`SubtleCrypto.wrapKey()`](/de/docs/Web/API/SubtleCrypto/wrapKey).
- [`SubtleCrypto.unwrapKey()`](/de/docs/Web/API/SubtleCrypto/unwrapKey).
