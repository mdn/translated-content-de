---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{ APIRef("Web Crypto API") }}

Das **`Pbkdf2Params`**-Dictionary der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an {{domxref("SubtleCrypto.deriveKey()")}} übergeben werden sollte, wenn der [PBKDF2](/de/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `PBKDF2` gesetzt werden.
- `hash`

  - : Ein String, der den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) repräsentiert. Dieser kann einer der folgenden sein:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

    > **Warning:** `SHA-1` wird in den meisten kryptografischen Anwendungen als unsicher angesehen, gilt aber in PBKDF2 immer noch als sicher. Dennoch ist es ratsam, von seiner Verwendung abzusehen, daher sollte, sofern Sie `SHA-1` nicht unbedingt benötigen, ein anderer Digest-Algorithmus verwendet werden.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}. Dies sollte ein zufälliger oder pseudo-zufälliger Wert von mindestens 16 Byte sein. Im Gegensatz zu dem in [`deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) eingegebenen Schlüsselmaterial muss `salt` nicht geheim gehalten werden.
- `iterations`
  - : Eine `Number`, die die Anzahl der Ausführungen der Hash-Funktion in `deriveKey()` darstellt. Diese bestimmt, wie rechenintensiv (d.h. langsam) die `deriveKey()`-Operation sein wird. In diesem Kontext ist langsam gut, da es den Aufwand für einen Angreifer erhöht, einen {{Glossary("dictionary attack")}} auf die Schlüssel auszuführen. Die allgemeine Empfehlung lautet, so viele Iterationen wie möglich zu verwenden, solange die Leistung Ihrer Anwendung akzeptabel bleibt.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.deriveKey()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "PBKDF2"-Algorithmus für die {{domxref("SubtleCrypto.deriveKey()")}}-Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.deriveKey()")}}.
