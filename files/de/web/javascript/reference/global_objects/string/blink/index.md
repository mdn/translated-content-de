---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`blink()`**-Methode von {{jsxref("String")}}-Werten erstellt einen Zeichenstring, der diesen String in ein `<blink>`-Element eingebettet darstellt (`<blink>str</blink>`), was in alten Browsern ein Blinken des Strings verursachte.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `blink()` wurde das `<blink>`-Element selbst aus modernen Browsern entfernt, und blinkender Text entspricht nicht mehreren Barrierefreiheitsstandards. Vermeiden Sie die Verwendung des Elements in jeglicher Form.

## Syntax

```js-nolint
blink()
```

### Parameter

Keine.

### Rückgabewert

Ein Zeichenstring, der mit einem `<blink>`-Start-Tag beginnt, gefolgt vom Text `str` und dann einem `</blink>`-End-Tag.

## Beispiele

### Verwendung von blink()

Der folgende Code erstellt einen HTML-String und ersetzt damit den Body des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

Dies wird das folgende HTML erstellen:

```html
<blink>Hello, world</blink>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `blink` kein gültiges Element mehr ist.

Sie sollten das Verwenden von blinkenden Elementen insgesamt vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.blink` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
