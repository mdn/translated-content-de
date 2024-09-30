---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`small()`** Methode von {{jsxref("String")}}-Werten erzeugt einen String, der diesen String in ein {{HTMLElement("small")}}-Element einbettet (`<small>str</small>`), wodurch dieser String in einer kleinen Schriftart angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
small()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<small>`-Start-Tag beginnt, gefolgt von dem Text `str` und dann einem `</small>`-End-Tag.

## Beispiele

### Verwendung von small()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Körper des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
```

Dies erstellt folgendes HTML:

```html
<small>Hello, world</small>
```

Anstatt `small()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("small")}}
