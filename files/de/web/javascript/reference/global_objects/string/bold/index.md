---
title: String.prototype.bold()
short-title: bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Deprecated_Header}}

Die **`bold()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("b")}}-Element einbettet (`<b>str</b>`), wodurch dieser String fett dargestellt wird.

> [!NOTE]
> Alle [HTML-Einrahmungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
bold()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<b>` Start-Tag beginnt, gefolgt von dem Text `str` und einem `</b>` End-Tag.

## Beispiele

### Verwendung von bold()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Inhalt des Dokumentenkörpers damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.bold();
```

Dies erzeugt folgendes HTML:

```html
<b>Hello, world</b>
```

Anstatt `bold()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("b");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.bold` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.bold`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Einrahmungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("b")}}
