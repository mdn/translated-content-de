---
title: String.prototype.italics()
short-title: italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`italics()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("i")}}-Element einbettet (`<i>str</i>`), sodass er kursiv dargestellt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
italics()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<i>`-Start-Tag beginnt, gefolgt vom Text `str` und einem `</i>`-End-Tag.

## Beispiele

### Verwendung von italics()

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.italics();
```

Dadurch entsteht das folgende HTML:

```html
<i>Hello, world</i>
```

Statt `italics()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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

- [Polyfill für `String.prototype.italics` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [es-shims-Polyfill für `String.prototype.italics`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("i")}}
