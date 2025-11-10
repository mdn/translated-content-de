---
title: String.prototype.italics()
short-title: italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`italics()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in ein {{HTMLElement("i")}} Element (`<i>str</i>`) einbettet, wodurch dieser String kursiv angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
italics()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<i>` Start-Tag beginnt, dann den Text `str`, und dann einen `</i>` End-Tag enthält.

## Beispiele

### Verwendung von italics()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.italics();
```

Dies wird folgendes HTML erzeugen:

```html
<i>Hello, world</i>
```

Anstatt `italics()` zu verwenden und direkt HTML-Text zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("i");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.italics` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.italics`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("i")}}
