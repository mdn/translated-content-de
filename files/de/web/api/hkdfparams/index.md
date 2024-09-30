---
title: HkdfParams
slug: Web/API/HkdfParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

Das **`HkdfParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden soll, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HKDF` gesetzt werden.
- `hash`

  - : Ein String, der den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) repräsentiert. Dies kann einer der folgenden sein:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Die [HKDF-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869) besagt, dass das Hinzufügen von Salt "erheblich zur Stärke von HKDF beiträgt". Idealerweise ist der Salt ein zufälliger oder pseudo-zufälliger Wert mit derselben Länge wie die Ausgabe der Digest-Funktion. Im Gegensatz zum Eingabeschlüsselmaterial, das in `deriveKey()` übergeben wird, muss der Salt nicht geheim gehalten werden.
- `info`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} repräsentiert anwendungsspezifische kontextuelle Informationen. Dies wird verwendet, um den abgeleiteten Schlüssel an eine Anwendung oder einen Kontext zu binden, und ermöglicht Ihnen, unterschiedliche Schlüssel für verschiedene Kontexte unter Verwendung desselben Eingabeschlüsselmaterials abzuleiten. Es ist wichtig, dass dies unabhängig vom Eingabeschlüsselmaterial selbst ist. Diese Eigenschaft ist erforderlich, kann jedoch ein leerer Puffer sein.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HKDF"-Algorithmus für die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
