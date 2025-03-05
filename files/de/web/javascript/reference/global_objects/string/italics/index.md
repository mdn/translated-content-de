---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}} {{Deprecated_Header}}

Die **`italics()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in einem {{HTMLElement("i")}}-Element (`<i>str</i>`) einbettet, was dazu führt, dass dieser String kursiv angezeigt wird.

> [!NOTE]
> Alle [HTML-Einfügemethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
italics()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<i>` Start-Tag beginnt, gefolgt von dem Text `str`, und dann einem `</i>` End-Tag.

## Beispiele

### Verwendung von italics()

Der untenstehende Code erstellt einen HTML-String und ersetzt damit den Körper des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.italics();
```

Dies wird das folgende HTML erzeugen:

```html
<i>Hello, world</i>
```

Anstatt `italics()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
- [HTML-Einfügemethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("i")}}
