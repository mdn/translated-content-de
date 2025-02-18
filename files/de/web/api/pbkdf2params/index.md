---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

Das **`Pbkdf2Params`**-Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) stellt das Objekt dar, das als `algorithm`-Parameter an [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `PBKDF2` gesetzt werden.
- `hash`

  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Es handelt sich um einen Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dieser sollte einer der folgenden Werte sein:

    - `SHA-256`: Wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: Wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: Wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > [!WARNING] > `SHA-1` wird in den meisten kryptographischen Anwendungen als unsicher angesehen, gilt jedoch in PBKDF2 weiterhin als sicher. Dennoch ist es ratsam, überall darauf zu verzichten. Verwenden Sie nach Möglichkeit einen anderen Digest-Algorithmus.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}}. Dies sollte ein zufälliger oder pseudorandomisierter Wert mit mindestens 16 Bytes sein. Im Gegensatz zum Eingabematerial, das an [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben wird, muss `salt` nicht geheim gehalten werden.
- `iterations`
  - : Eine `Number`, die die Anzahl der Ausführungen der Hash-Funktion in `deriveKey()` darstellt. Dies bestimmt, wie rechenintensiv (d. h. langsam) der `deriveKey()`-Vorgang sein wird. In diesem Kontext ist langsam gut, da es für einen Angreifer teurer wird, einen {{Glossary("dictionary_attack", "Wörterbuchangriff")}} auf die Schlüssel auszuführen. Die allgemeine Empfehlung lautet hier, so viele Iterationen wie möglich zu verwenden, solange die Leistung Ihrer Anwendung akzeptabel bleibt.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "PBKDF2"-Algorithmus für die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützen, unterstützen diesen Typ.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
