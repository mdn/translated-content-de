---
title: TextDecoder
slug: Web/API/TextDecoder
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Encoding API")}} {{AvailableInWorkers}}

Das **`TextDecoder`**-Interface repräsentiert einen Decoder für eine spezifische Textkodierung, wie z.B. `UTF-8`, `ISO-8859-2`, `KOI8-R`, `GBK` usw. Ein Decoder nimmt einen Byte-Strom als Eingabe und gibt einen Strom von Codepunkten aus.

## Konstruktor

- {{DOMxRef("TextDecoder.TextDecoder", "TextDecoder()")}}
  - : Gibt einen neu konstruierten `TextDecoder` zurück, der einen Codepunkt-Strom mit der in den Parametern angegebenen Dekodierungsmethode erzeugt.

## Instanzeigenschaften

_Das `TextDecoder`-Interface erbt keine Eigenschaften._

- {{DOMxRef("TextDecoder.encoding")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen des Decoders enthält, was eine Zeichenkette ist, die die Methode beschreibt, die der `TextDecoder` verwenden wird.
- {{DOMxRef("TextDecoder.fatal")}} {{ReadOnlyInline}}
  - : Ein {{jsxref('Boolean')}}, der angibt, ob der Fehlermodus fatal ist.
- {{DOMxRef("TextDecoder.ignoreBOM")}} {{ReadOnlyInline}}
  - : Ein {{jsxref('Boolean')}}, der angibt, ob das [Byte Order Mark](https://www.w3.org/International/questions/qa-byte-order-mark) ignoriert wird.

## Instanzmethoden

_Das `TextDecoder`-Interface erbt keine Methoden._

- {{DOMxRef("TextDecoder.decode()")}}
  - : Gibt einen String zurück, der den mit der Methode des spezifischen `TextDecoder`-Objekts dekodierten Text enthält.

## Beispiele

### Darstellung von Text mit typisierten Arrays

Dieses Beispiel zeigt, wie man ein chinesisches/japanisches Schriftzeichen dekodiert ![Chinesisches Zeichen, das Glück bedeutet](2019-05-21_191907.png), dargestellt durch fünf verschiedene typisierte Arrays: {{jsxref("Uint8Array")}}, {{jsxref("Int8Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int16Array")}}, und {{jsxref("Int32Array")}}.

```js
let utf8decoder = new TextDecoder(); // Standard 'utf-8' oder 'utf8'

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

### Umgang mit nicht-UTF8 Text

In diesem Beispiel dekodieren wir den russischen Text "Привет, мир!", was "Hallo, Welt." bedeutet. In unserem {{domxref("TextDecoder/TextDecoder", "TextDecoder()")}}-Konstruktor spezifizieren wir die Windows-1251-Zeichenkodierung, die für kyrillische Schrift geeignet ist.

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

- Das {{DOMxRef("TextEncoder")}}-Interface, das die umgekehrte Operation beschreibt.
- Ein [Shim](https://github.com/inexorabletash/text-encoding), der die Verwendung dieses Interfaces in Browsern ermöglicht, die es nicht unterstützen.
- [Node.js unterstützt den globalen Export ab v11.0.0](https://nodejs.org/api/util.html#util_class_util_textdecoder)
