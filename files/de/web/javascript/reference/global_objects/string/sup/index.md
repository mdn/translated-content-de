---
title: String.prototype.sup()
short-title: sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`sup()`** Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("sup")}}-Element (`<sup>str</sup>`) einbettet, wodurch dieser String als Hochstellung angezeigt wird.

> [!NOTE]
> Alle [HTML-Verpackungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur zu Kompatibilitätszwecken standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sup()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<sup>` Start-Tag beginnt, dann den Text `str` enthält, und mit einem `</sup>` End-Tag schließt.

## Beispiele

### Verwendung von sup()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sup();
```

Dies erstellt den folgenden HTML-Code:

```html
<sup>Hello, world</sup>
```

Anstatt `sup()` zu verwenden und HTML-Text direkt zu erzeugen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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

- [Polyfill von `String.prototype.sup` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.sup`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Verpackungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sup")}}
