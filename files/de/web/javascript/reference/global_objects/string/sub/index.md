---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`sub()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("sub")}}-Element (`<sub>str</sub>`) einbettet, was dazu führt, dass dieser String als Tiefgestellter Text angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
sub()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<sub>`-Start-Tag beginnt, dann der Text `str` und dann ein `</sub>`-End-Tag.

## Beispiele

### Verwendung von sub()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Inhalt des Dokuments im body:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.sub();
```

Dies erzeugt den folgenden HTML-Code:

```html
<sub>Hello, world</sub>
```

Anstatt `sub()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("sub")}}