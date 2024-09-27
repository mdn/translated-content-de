---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`sup()`**-Methode von {{jsxref("String")}}-Werten erzeugt einen String, der diesen String in ein {{HTMLElement("sup")}}-Element (`<sup>str</sup>`) einbettet, was dazu führt, dass dieser String als Hochgestellt angezeigt wird.

> [!NOTE]
> Alle [HTML-Verpackungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sup()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<sup>`-Start-Tag beginnt, gefolgt von dem Text `str` und einem `</sup>`-End-Tag.

## Beispiele

### Verwendung von sup()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Inhalt des Dokumentkörpers damit:

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

- [Polyfill für `String.prototype.sup` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Verpackungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sup")}}
