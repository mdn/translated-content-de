---
title: HkdfParams
slug: Web/API/HkdfParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

Das **`HkdfParams`**-Wörterbuch der [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) repräsentiert das Objekt, das als `algorithm`-Parameter in {{domxref("SubtleCrypto.deriveKey()")}} übergeben werden sollte, wenn der [HKDF](/de/docs/Web/API/SubtleCrypto/deriveKey#hkdf)-Algorithmus verwendet wird.

## Instanz-Eigenschaften

- `name`
  - : Ein String. Dies sollte auf `HKDF` gesetzt werden.
- `hash`

  - : Ein String, der den zu verwendenden [Digest-Algorithmus](/de/docs/Web/API/SubtleCrypto/digest#supported_algorithms) darstellt. Dies kann einer der folgenden sein:

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

- `salt`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}. Die [HKDF-Spezifikation](https://datatracker.ietf.org/doc/html/rfc5869) besagt, dass das Hinzufügen von Salt "die Stärke von HKDF erheblich erhöht". Idealerweise ist das Salt ein zufälliger oder pseudozufälliger Wert mit der gleichen Länge wie die Ausgabe der Digest-Funktion. Im Gegensatz zum Eingabeschlüsselmaterial, das in `deriveKey()` übergeben wird, muss Salt nicht geheim gehalten werden.
- `info`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das anwendungsspezifische Kontextinformationen darstellt. Dies wird verwendet, um den abgeleiteten Schlüssel an eine Anwendung oder einen Kontext zu binden und ermöglicht es Ihnen, unterschiedliche Schlüssel für verschiedene Kontexte zu erzeugen, während Sie das gleiche Eingabeschlüsselmaterial verwenden. Es ist wichtig, dass dies unabhängig vom Eingabeschlüsselmaterial selbst sein sollte. Diese Eigenschaft ist erforderlich, kann jedoch ein leerer Puffer sein.

## Beispiele

Siehe die Beispiele für {{domxref("SubtleCrypto.deriveKey()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Browser, die den "HKDF"-Algorithmus für die {{domxref("SubtleCrypto.deriveKey()")}}-Methode unterstützen, werden diesen Typ unterstützen.

## Siehe auch

- {{domxref("SubtleCrypto.deriveKey()")}}.
