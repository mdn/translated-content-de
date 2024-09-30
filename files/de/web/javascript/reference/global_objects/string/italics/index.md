---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`italics()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("i")}}-Element (`<i>str</i>`) einbettet, wodurch dieser String kursiv angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
italics()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<i>`-Start-Tag beginnt, dann den Text `str` enthält und dann mit einem `</i>`-End-Tag endet.

## Beispiele

### Verwendung von italics()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Inhalt des Dokuments mit ihm:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.italics();
```

Dies erzeugt das folgende HTML:

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
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("i")}}
