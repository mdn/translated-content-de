---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

{{ APIRef("Web Crypto API") }}

Das **`Pbkdf2Params`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `PBKDF2` gesetzt werden.
- `hash`
  - : Ein String oder ein Objekt, das eine einzelne Eigenschaft namens `name` mit einem String-Wert enthält. Es ist ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dies sollte einer der folgenden sein:
    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > [!WARNING]
    > `SHA-1` wird in den meisten kryptographischen Anwendungen als anfällig angesehen, gilt jedoch in PBKDF2 immer noch als sicher. Es ist jedoch ratsam, `SHA-1` überall zu vermeiden, es sei denn, Sie müssen es unbedingt verwenden. Verwenden Sie stattdessen einen anderen Digest-Algorithmus.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Dies sollte ein zufälliger oder pseudorandomisierter Wert von mindestens 16 Bytes sein. Im Gegensatz zum Eingabeschlüsselmaterial, das in [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben wird, muss `salt` nicht geheim gehalten werden.
- `iterations`
  - : Eine `Number`, die die Anzahl der Ausführungen der Hash-Funktion in `deriveKey()` darstellt. Dies bestimmt, wie rechenaufwendig (also langsam) die `deriveKey()`-Operation sein wird. In diesem Kontext ist langsam gut, da es für einen Angreifer teurer wird, einen Wörterbuchangriff gegen die Schlüssel auszuführen. Die allgemeine Empfehlung hier ist, so viele Iterationen wie möglich zu verwenden, solange ein akzeptables Leistungsniveau für Ihre Anwendung beibehalten werden kann.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "PBKDF2"-Algorithmus für die [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey)-Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
