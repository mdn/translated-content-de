---
title: String.prototype.bold()
short-title: bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`bold()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("b")}}-Element einbettet (`<b>str</b>`), sodass er fett dargestellt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
bold()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<b>`-Start-Tag beginnt, gefolgt vom Text `str` und einem `</b>`-End-Tag.

## Beispiele

### Verwendung von bold()

Der folgende Code erstellt einen HTML-String und ersetzt anschließend den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

Dadurch entsteht das folgende HTML:

```html
<b>Hello, world</b>
```

Statt `bold()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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

- [Polyfill für `String.prototype.bold` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.prototype.bold`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("b")}}
