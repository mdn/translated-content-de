---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}} {{Deprecated_Header}}

Die **`blink()`** Methode von {{jsxref("String")}} Werten erzeugt eine Zeichenkette, die diese Zeichenkette in ein `<blink>` Element einbettet (`<blink>str</blink>`), was in alten Browsern dazu führte, dass eine Zeichenkette blinkte.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und werden nur aus Kompatibilitätsgründen standardisiert. Im Fall von `blink()` wurde das `<blink>` Element aus modernen Browsern entfernt, und blinkender Text wird von verschiedenen Barrierefreiheitsstandards abgelehnt. Vermeiden Sie die Verwendung des Elements in irgendeiner Weise.

## Syntax

```js-nolint
blink()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die mit einem `<blink>` Start-Tag beginnt, gefolgt von dem Text `str` und dann einem `</blink>` End-Tag.

## Beispiele

### Verwendung von blink()

Der folgende Code erstellt eine HTML-Zeichenkette und ersetzt damit den Inhalt des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

Dies erzeugt das folgende HTML:

```html
<blink>Hello, world</blink>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `blink` kein gültiges Element mehr ist.

Sie sollten blinkende Elemente grundsätzlich vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.blink` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.blink`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
