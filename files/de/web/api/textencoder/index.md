---
title: TextEncoder
slug: Web/API/TextEncoder
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Die **`TextEncoder`**-Schnittstelle nimmt eine Zeichenkette als Eingang und kodiert sie mit {{Glossary("UTF-8", "UTF-8")}}.

## Konstruktor

- [`TextEncoder()`](/de/docs/Web/API/TextEncoder/TextEncoder)
  - : Gibt einen neu konstruierten `TextEncoder` zurück, der einen Bytestrom mit UTF-8-Kodierung erzeugt.

## Instanz-Eigenschaften

_Die `TextEncoder`-Schnittstelle erbt keine Eigenschaften._

- [`TextEncoder.encoding`](/de/docs/Web/API/TextEncoder/encoding) {{ReadOnlyInline}}
  - : Gibt immer `utf-8` zurück.

## Instanz-Methoden

_Die `TextEncoder`-Schnittstelle erbt keine Methoden._

- [`TextEncoder.encode()`](/de/docs/Web/API/TextEncoder/encode)
  - : Nimmt eine Zeichenkette als Eingang und gibt ein {{jsxref("Uint8Array")}} zurück, das den UTF-8-kodierten Text enthält.
- [`TextEncoder.encodeInto()`](/de/docs/Web/API/TextEncoder/encodeInto)
  - : Nimmt eine zu kodierende Zeichenkette und ein Ziel-{{jsxref("Uint8Array")}}, in das der resultierende UTF-8-kodierte Text eingefügt wird, und gibt ein Objekt zurück, das den Fortschritt der Kodierung anzeigt. Dies ist potenziell leistungsfähiger als die ältere `encode()`-Methode.

## Beispiele

```js
const encoder = new TextEncoder();
const view = encoder.encode("€");
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`TextDecoder`](/de/docs/Web/API/TextDecoder)-Schnittstelle, die die Umkehrung der Operation beschreibt.
- [Node.js unterstützt globalen Export ab v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
