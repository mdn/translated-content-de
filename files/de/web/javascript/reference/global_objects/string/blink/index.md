---
title: String.prototype.blink()
short-title: blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`blink()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein `<blink>`-Element einbettet (`<blink>str</blink>`). In älteren Browsern ließ dies den Text blinken.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `blink()` wird das `<blink>`-Element selbst von modernen Browsern nicht mehr unterstützt. Blinkender Text wird zudem von mehreren Barrierefreiheitsstandards als problematisch angesehen. Vermeiden Sie die Verwendung dieses Elements in jeder Form.

## Syntax

```js-nolint
blink()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<blink>`-Start-Tag beginnt, gefolgt vom Text `str` und einem `</blink>`-End-Tag.

## Beispiele

### blink() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit anschließend den Inhalt des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

Dadurch entsteht das folgende HTML:

```html
<blink>Hello, world</blink>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `blink` kein gültiges Element mehr ist.

Vermeiden Sie blinkende Elemente grundsätzlich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.blink` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.blink` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
