---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`bold()`**-Methode von {{jsxref("String")}}-Werten erzeugt eine Zeichenkette, die diese Zeichenkette in ein {{HTMLElement("b")}}-Element (`<b>str</b>`) einbettet, was dazu führt, dass diese Zeichenkette fett angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
bold()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die mit einem `<b>`-Start-Tag beginnt, dann den Text `str` enthält und mit einem `</b>`-End-Tag endet.

## Beispiele

### Verwendung von bold()

Der folgende Code erzeugt eine HTML-Zeichenkette und ersetzt dann den Inhalt des Dokumentkörpers damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

Dies erzeugt das folgende HTML:

```html
<b>Hello, world</b>
```

Anstatt `bold()` zu verwenden und HTML-Text direkt zu erzeugen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("b");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.bold` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("b")}}
