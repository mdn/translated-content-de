---
title: String.prototype.blink()
short-title: blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`blink()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem `<blink>`-Element einbettet (`<blink>str</blink>`), was in alten Browsern dazu führte, dass der Text blinkte.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `blink()` wurde das `<blink>`-Element selbst aus modernen Browsern entfernt, und blinkender Text wird von mehreren Zugänglichkeitsstandards abgelehnt. Vermeiden Sie die Verwendung dieses Elements in jeglicher Form.

## Syntax

```js-nolint
blink()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<blink>`-Start-Tag beginnt, gefolgt von dem Text `str`, und dann einem `</blink>`-End-Tag.

## Beispiele

### Verwendung von blink()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

Dies erzeugt das folgende HTML:

```html
<blink>Hello, world</blink>
```

> [!WARNING]
> Diese Markierung ist ungültig, da `blink` kein gültiges Element mehr ist.

Sie sollten blinkende Elemente gänzlich vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.blink` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.blink`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
