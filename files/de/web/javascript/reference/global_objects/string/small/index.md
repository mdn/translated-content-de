---
title: String.prototype.small()
short-title: small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`small()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("small")}}-Element (`<small>str</small>`) einbettet, wodurch dieser String in einer kleinen Schriftgröße angezeigt wird.

> [!NOTE]
> Alle [HTML-Einbettungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
small()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<small>`-Start-Tag beginnt, dann den Text `str` enthält, und dann mit einem `</small>`-End-Tag endet.

## Beispiele

### Verwendung von small()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
```

Dies wird das folgende HTML erzeugen:

```html
<small>Hello, world</small>
```

Anstelle der direkten Verwendung von `small()` und der direkten Erstellung von HTML-Text sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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

- [Polyfill von `String.prototype.small` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.small`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Einbettungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("small")}}
