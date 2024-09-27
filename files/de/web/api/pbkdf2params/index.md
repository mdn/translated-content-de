---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{ APIRef("Web Crypto API") }}

Das **`Pbkdf2Params`** Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) Algorithmus verwendet wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `PBKDF2` gesetzt werden.
- `hash`

  - : Ein String, der den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) darstellt. Dies kann einer der folgenden sein:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

    > **Warning:** `SHA-1` gilt in den meisten kryptografischen Anwendungen als unsicher, wird jedoch in PBKDF2 noch als sicher betrachtet. Es wird jedoch empfohlen, überall von `SHA-1` wegzugehen, es sei denn, Sie müssen `SHA-1` verwenden. Verwenden Sie stattdessen einen anderen Digest-Algorithmus.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies sollte ein zufälliger oder pseudo-zufälliger Wert von mindestens 16 Byte sein. Im Gegensatz zum in [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) eingegebenen Schlüsselmaterial muss `salt` nicht geheim gehalten werden.
- `iterations`
  - : Eine `Number`, die die Anzahl der Ausführungen der Hash-Funktion in `deriveKey()` darstellt. Dies bestimmt, wie rechenintensiv (das heißt, langsam) die `deriveKey()`-Operation sein wird. In diesem Kontext ist langsam gut, da es für einen Angreifer teurer wird, einen [Wörterbuchangriff](/de/docs/Glossary/dictionary_attack) gegen die Schlüssel auszuführen. Die allgemeine Empfehlung hier ist, so viele Iterationen wie möglich zu verwenden, sofern ein akzeptables Leistungsniveau für Ihre Anwendung beibehalten wird.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "PBKDF2"-Algorithmus für die [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
