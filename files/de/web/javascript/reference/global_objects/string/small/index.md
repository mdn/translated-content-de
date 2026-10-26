---
title: String.prototype.small()
short-title: small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`small()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("small")}}-Element einbettet (`<small>str</small>`). Dadurch wird der String in kleiner Schrift dargestellt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
small()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<small>`-Start-Tag beginnt, darauf den Text `str` enthält und mit einem `</small>`-End-Tag endet.

## Beispiele

### small() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokumentkörpers:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
```

Dadurch entsteht folgendes HTML:

```html
<small>Hello, world</small>
```

Statt `small()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("small");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.small` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.prototype.small`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("small")}}
