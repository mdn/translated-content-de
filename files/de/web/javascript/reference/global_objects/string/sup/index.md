---
title: String.prototype.sup()
short-title: sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`sup()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("sup")}}-Element einbettet (`<sup>str</sup>`). Dadurch wird der String hochgestellt angezeigt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sup()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<sup>`-Start-Tag beginnt, gefolgt vom Text `str` und einem `</sup>`-End-Tag.

## Beispiele

### Verwendung von sup()

Der folgende Code erstellt einen HTML-String und ersetzt damit anschließend den Inhalt des Dokumentkörpers:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sup();
```

Dadurch entsteht das folgende HTML:

```html
<sup>Hello, world</sup>
```

Statt `sup()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("sup");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.sup` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.prototype.sup`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sup")}}
