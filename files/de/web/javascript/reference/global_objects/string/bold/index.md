---
title: String.prototype.bold()
short-title: bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`bold()`** Methode von {{jsxref("String")}} Werten erzeugt einen String, der diesen String in einem {{HTMLElement("b")}} Element (`<b>str</b>`) einbettet, was dazu führt, dass dieser String fett angezeigt wird.

> [!NOTE]
> Alle [HTML-Einbettungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und werden nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
bold()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<b>` Start-Tag beginnt, gefolgt von dem Text `str`, und mit einem `</b>` End-Tag endet.

## Beispiele

### Verwendung von bold()

Der untenstehende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

Dies wird das folgende HTML erzeugen:

```html
<b>Hello, world</b>
```

Anstatt `bold()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
- [es-shims Polyfill von `String.prototype.bold`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Einbettungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("b")}}
