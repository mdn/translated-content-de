---
title: TextDecoder
slug: Web/API/TextDecoder
l10n:
  sourceCommit: 4094b9256ace2d7d805abb6b536e23079aaf9170
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

Das **`TextDecoder`** Interface repräsentiert einen Dekodierer für eine bestimmte Textcodierung, wie `UTF-8`, `ISO-8859-2`, `KOI8-R`, `GBK` usw. Ein Dekodierer nimmt einen Byte-Strom als Eingabe und gibt einen Strom von Codepunkten aus.

## Konstruktor

- [`TextDecoder()`](/de/docs/Web/API/TextDecoder/TextDecoder)
  - : Gibt einen neu konstruierten `TextDecoder` zurück, der einen Codepunktstrom mit der im Parameter angegebenen Dekodiermethode erzeugt.

## Instanz Eigenschaften

_Das `TextDecoder`-Interface erbt keine Eigenschaften._

- [`TextDecoder.encoding`](/de/docs/Web/API/TextDecoder/encoding) {{ReadOnlyInline}}
  - : Ein String, der den Namen des Dekodierers enthält, welcher die Methode beschreibt, die der `TextDecoder` verwenden wird.
- [`TextDecoder.fatal`](/de/docs/Web/API/TextDecoder/fatal) {{ReadOnlyInline}}
  - : Ein {{jsxref('Boolean')}}-Wert, der angibt, ob der Fehlermodus fatal ist.
- [`TextDecoder.ignoreBOM`](/de/docs/Web/API/TextDecoder/ignoreBOM) {{ReadOnlyInline}}
  - : Ein {{jsxref('Boolean')}}-Wert, der angibt, ob das [Byte-Order-Mark](https://www.w3.org/International/questions/qa-byte-order-mark) ignoriert wird.

## Instanzmethoden

_Das `TextDecoder`-Interface erbt keine Methoden._

- [`TextDecoder.decode()`](/de/docs/Web/API/TextDecoder/decode)
  - : Gibt einen String zurück, der den mittels der Methode des spezifischen `TextDecoder`-Objekts dekodierten Text enthält.

## Beispiele

### Text mit typisierten Arrays darstellen

Dieses Beispiel zeigt, wie man ein chinesisch/japanisches Zeichen ![Chinesisches Zeichen, das Glück bedeutet](2019-05-21_191907.png) dekodiert, dargestellt durch fünf verschiedene typisierte Arrays: {{jsxref("Uint8Array")}}, {{jsxref("Int8Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int16Array")}}, und {{jsxref("Int32Array")}}.

```js
let utf8decoder = new TextDecoder(); // default 'utf-8' or 'utf8'

let u8arr = new Uint8Array([240, 160, 174, 183]);
let i8arr = new Int8Array([-16, -96, -82, -73]);
let u16arr = new Uint16Array([41200, 47022]);
let i16arr = new Int16Array([-24336, -18514]);
let i32arr = new Int32Array([-1213292304]);

console.log(utf8decoder.decode(u8arr));
console.log(utf8decoder.decode(i8arr));
console.log(utf8decoder.decode(u16arr));
console.log(utf8decoder.decode(i16arr));
console.log(utf8decoder.decode(i32arr));
```

### Umgang mit nicht-UTF8-Text

In diesem Beispiel dekodieren wir den russischen Text "Привет, мир!", was "Hallo, Welt." bedeutet. In unserem [`TextDecoder()`](/de/docs/Web/API/TextDecoder/TextDecoder) Konstruktor geben wir die Windows-1251-Zeichenkodierung an, die für die kyrillische Schrift geeignet ist.

```js
const win1251decoder = new TextDecoder("windows-1251");
const bytes = new Uint8Array([
  207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33,
]);
console.log(win1251decoder.decode(bytes)); // Привет, мир!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`TextEncoder`](/de/docs/Web/API/TextEncoder) Interface, das die inverse Operation beschreibt.
- Ein [Shim](https://github.com/inexorabletash/text-encoding), das es ermöglicht, dieses Interface in Browsern zu verwenden, die es nicht unterstützen.
- [Node.js unterstützt den globalen Export ab v11.0.0](https://nodejs.org/api/util.html#util_class_util_textdecoder)
