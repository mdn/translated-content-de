---
title: HkdfParams
slug: Web/API/HkdfParams
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{ APIRef("Web Crypto API") }}

Das **`HkdfParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) stellt das Objekt dar, das als `algorithm`-Parameter in [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HKDF` gesetzt werden.
- `hash`
  - : Ein String oder ein Objekt, das eine einzige Eigenschaft namens `name` mit einem String-Wert enthält. Es ist ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dieser sollte einer der folgenden sein:
    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus aus.

    > [!WARNING] > `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus wird als anfällig betrachtet und sollte nicht mehr verwendet werden.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}. Die [HKDF-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869) besagt, dass das Hinzufügen von Salt "erheblich zur Stärke von HKDF beiträgt". Idealerweise ist der Salt-Wert ein zufälliger oder pseudo-zufälliger Wert mit derselben Länge wie die Ausgabe der Digest-Funktion. Im Gegensatz zum Input-Schlüsselmaterial, das in `deriveKey()` übergeben wird, muss Salt nicht geheim gehalten werden.
- `info`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das anwendungsspezifische kontextbezogene Informationen darstellt. Dies wird verwendet, um den abgeleiteten Schlüssel an eine Anwendung oder einen Kontext zu binden, und ermöglicht es, verschiedene Schlüssel für verschiedene Kontexte mit demselben Input-Schlüsselmaterial abzuleiten. Es ist wichtig, dass dies unabhängig vom Input-Schlüsselmaterial selbst ist. Diese Eigenschaft ist erforderlich, kann jedoch ein leerer Puffer sein.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HKDF"-Algorithmus für die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
