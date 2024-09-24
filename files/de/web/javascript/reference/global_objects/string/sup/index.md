---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`sup()`**-Methode von {{jsxref("String")}}-Werten erstellt eine Zeichenfolge, die diese Zeichenfolge in einem {{HTMLElement("sup")}}-Element (`<sup>str</sup>`) einbettet, wodurch diese Zeichenfolge als Hochgestellt angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model), wie zum Beispiel [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sup()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die mit einem `<sup>`-Starttag beginnt, dann den Text `str` enthält, und mit einem `</sup>`-Endtag endet.

## Beispiele

### Verwendung von sup()

Der folgende Code erstellt eine HTML-Zeichenfolge und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sup();
```

Dies wird das folgende HTML erzeugen:

```html
<sup>Hello, world</sup>
```

Anstatt `sup()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) nutzen. Zum Beispiel:

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
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sup")}}
