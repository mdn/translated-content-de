---
title: String.prototype.sup()
short-title: sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`sup()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("sup")}}-Element (`<sup>str</sup>`) einbettet, wodurch dieser String als hochgestellter Text angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sup()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<sup>`-Start-Tag beginnt, dann der Text `str` folgt und dann ein `</sup>`-End-Tag.

## Beispiele

### Verwendung von sup()

Der folgende Code erstellt einen HTML-String und ersetzt damit den Body des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sup();
```

Dies wird das folgende HTML erzeugen:

```html
<sup>Hello, world</sup>
```

Anstatt `sup()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sup")}}
