---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{ APIRef("Web Crypto API") }}

Das **`Pbkdf2Params`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `PBKDF2` gesetzt werden.
- `hash`

  - : Ein String, der den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) darstellt. Dieser kann einer der folgenden sein:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

    > **Warnung:** `SHA-1` gilt in den meisten kryptografischen Anwendungen als anfällig, wird jedoch in PBKDF2 immer noch als sicher angesehen. Es ist jedoch ratsam, es überall zu vermeiden, also verwenden Sie, falls nicht unbedingt nötig, `SHA-1` nicht. Verwenden Sie stattdessen einen anderen Digest-Algorithmus.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies sollte ein zufälliger oder pseudo-zufälliger Wert von mindestens 16 Bytes sein. Im Gegensatz zu dem in [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergebenen Eingabeschlüsselmaterial muss `salt` nicht geheim gehalten werden.
- `iterations`
  - : Eine `Number`, die die Anzahl der Male darstellt, die die Hash-Funktion in `deriveKey()` ausgeführt wird. Dies bestimmt, wie rechenintensiv (d. h. langsam) der `deriveKey()`-Vorgang sein wird. In diesem Kontext ist langsam gut, da es für einen Angreifer teurer wird, einen {{Glossary("dictionary_attack", "Wörterbuchangriff")}} gegen die Schlüssel durchzuführen. Die allgemeine Richtlinie hier ist, so viele Iterationen wie möglich zu verwenden, solange eine akzeptable Leistung für Ihre Anwendung gewährleistet bleibt.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "PBKDF2"-Algorithmus für die [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey)-Methode unterstützen, unterstützen diesen Typ.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
