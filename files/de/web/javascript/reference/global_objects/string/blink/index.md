---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`blink()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein `<blink>`-Element einbettet (`<blink>str</blink>`), was in alten Browsern dazu führte, dass ein String blinkte.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `blink()` wurde das `<blink>`-Element selbst aus modernen Browsern entfernt, und blinkender Text wird von mehreren Barrierefreiheitsstandards abgelehnt. Vermeiden Sie die Nutzung des Elements auf jegliche Weise.

## Syntax

```js-nolint
blink()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<blink>`-Start-Tag beginnt, dann den Text `str` enthält und mit einem `</blink>`-End-Tag endet.

## Beispiele

### Verwendung von blink()

Der untenstehende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

Dies wird das folgende HTML erzeugen:

```html
<blink>Hello, world</blink>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `blink` kein gültiges Element mehr ist.

Sie sollten blinkende Elemente generell vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.blink` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
