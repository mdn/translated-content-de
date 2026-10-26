---
title: String.prototype.sub()
short-title: sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`sub()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("sub")}}-Element (`<sub>str</sub>`) einbettet. Dadurch wird der String tiefgestellt dargestellt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sub()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<sub>`-Start-Tag beginnt, gefolgt vom Text `str` und einem `</sub>`-End-Tag.

## Beispiele

### Verwendung von sub()

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokumentkörpers:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sub();
```

Dadurch entsteht das folgende HTML:

```html
<sub>Hello, world</sub>
```

Statt `sub()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("sub");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.sub` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.sub` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sub")}}
