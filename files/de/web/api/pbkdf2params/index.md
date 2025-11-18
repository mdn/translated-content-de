---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

Das **`Pbkdf2Params`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `PBKDF2` gesetzt werden.
- `hash`
  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Es ist ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte eines der folgenden sein:
    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > [!WARNING] > `SHA-1` wird in den meisten kryptografischen Anwendungen als anfällig betrachtet, gilt aber in PBKDF2 immer noch als sicher. Es ist jedoch ratsam, überall auf ihn zu verzichten, daher sollten Sie einen anderen Digest-Algorithmus verwenden, es sei denn, Sie müssen `SHA-1` verwenden.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies sollte ein zufälliger oder pseudorandomer Wert von mindestens 16 Bytes sein. Im Gegensatz zum in [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergebenen Schlüsselmaterial muss `salt` nicht geheim gehalten werden.
- `iterations`
  - : Eine `Number`, die die Anzahl der Ausführungen der Hash-Funktion in `deriveKey()` darstellt. Dies bestimmt, wie rechnerisch aufwändig (das heißt, langsam) der `deriveKey()`-Vorgang sein wird. In diesem Zusammenhang ist langsam gut, da es einem Angreifer erschwert, einen {{Glossary("dictionary_attack", "Wörterbuchangriff")}} auf die Schlüssel auszuführen. Die allgemeine Empfehlung hier ist, so viele Iterationen wie möglich zu verwenden, sofern eine akzeptable Leistungsstufe für Ihre Anwendung beibehalten wird.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "PBKDF2"-Algorithmus für die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
