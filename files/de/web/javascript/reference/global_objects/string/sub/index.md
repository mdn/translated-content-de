---
title: String.prototype.sub()
short-title: sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`sub()`**-Methode von {{jsxref("String")}}-Werten erzeugt einen String, der diesen String in einem {{HTMLElement("sub")}}-Element (`<sub>str</sub>`) einbettet, wodurch dieser String als tiefgestellt angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sub()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<sub>`-Start-Tag beginnt, dann den Text `str`, und dann ein `</sub>`-End-Tag.

## Beispiele

### Verwendung von sub()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sub();
```

Dadurch wird das folgende HTML erstellt:

```html
<sub>Hello, world</sub>
```

Anstatt `sub()` zu verwenden und direkt HTML-Text zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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

- [Polyfill von `String.prototype.sub` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.sub`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sub")}}
