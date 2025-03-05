---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}} {{Deprecated_Header}}

Die **`bold()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in einem {{HTMLElement("b")}} Element (`<b>str</b>`) einbettet, wodurch dieser String fett angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
bold()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<b>` Start-Tag beginnt, gefolgt vom Text `str`, und dann einem `</b>` End-Tag.

## Beispiele

### Verwendung von bold()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Inhalt des Dokuments mit ihm:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

Dies wird das folgende HTML erzeugen:

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

- [Polyfill von `String.prototype.bold` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.bold`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("b")}}
