---
title: HkdfParams
slug: Web/API/HkdfParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

Das **`HkdfParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter an [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) übergeben werden sollte, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.

## Instanzeigenschaften

- `name`
  - : Ein String. Dieser sollte auf `HKDF` gesetzt werden.
- `hash`

  - : Ein String oder ein Objekt mit einer einzigen Eigenschaft namens `name` mit einem String-Wert. Es ist ein Bezeichner für den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest). Dieser sollte einer der folgenden sein:

    - `SHA-256`: wählt den [SHA-256](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-384`: wählt den [SHA-384](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.
    - `SHA-512`: wählt den [SHA-512](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus.

    > **Warning:** `SHA-1` wird hier ebenfalls unterstützt, aber der [SHA-1](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms)-Algorithmus gilt als unsicher und sollte nicht mehr verwendet werden.

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Die [HKDF-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869) gibt an, dass das Hinzufügen von Salt "erheblich zur Stärke von HKDF beiträgt". Idealerweise ist das Salt ein zufälliger oder pseudo-zufälliger Wert mit der gleichen Länge wie die Ausgabe der Digest-Funktion. Im Gegensatz zum Eingabeschlüsselmaterial, das an `deriveKey()` übergeben wird, muss das Salt nicht geheim gehalten werden.
- `info`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der anwendungsspezifische kontextuelle Informationen repräsentiert. Dies wird verwendet, um den abgeleiteten Schlüssel an eine Anwendung oder einen Kontext zu binden, und ermöglicht es Ihnen, unterschiedliche Schlüssel für unterschiedliche Kontexte abzuleiten, während dasselbe Eingabeschlüsselmaterial verwendet wird. Es ist wichtig, dass dies unabhängig vom Eingabeschlüsselmaterial selbst sein sollte. Diese Eigenschaft ist erforderlich, sie kann jedoch ein leerer Buffer sein.

## Beispiele

Siehe die Beispiele für [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HKDF"-Algorithmus für die Methode [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey) unterstützen, werden diesen Typ ebenfalls unterstützen.

## Siehe auch

- [`SubtleCrypto.deriveKey()`](/de/docs/Web/API/SubtleCrypto/deriveKey).
