---
title: HkdfParams
slug: Web/API/HkdfParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

Das **`HkdfParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HKDF` gesetzt werden.
- `hash`

  - : Ein String, der den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) repräsentiert. Dies kann einer der folgenden sein:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}. Die [HKDF-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869) besagt, dass das Hinzufügen von Salt "erheblich zur Stärke von HKDF beiträgt". Ideal ist es, wenn der Salt ein zufälliger oder pseudo-zufälliger Wert mit der gleichen Länge wie die Ausgabe der Digest-Funktion ist. Anders als das in `deriveKey()` übergebene Eingabeschlüsselmateriel muss Salt nicht geheim gehalten werden.
- `info`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das anwendungsspezifische kontextuelle Informationen repräsentiert. Dies wird verwendet, um den abgeleiteten Schlüssel an eine Anwendung oder einen Kontext zu binden und ermöglicht es Ihnen, verschiedene Schlüssel für unterschiedliche Kontexte abzuleiten, während dieselbe Eingabeschlüsselmateriel verwendet wird. Es ist wichtig, dass dies unabhängig vom Eingabeschlüsselmateriel selbst ist. Diese Eigenschaft ist erforderlich, kann aber ein leerer Puffer sein.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HKDF"-Algorithmus für die [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey)-Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
