---
title: String.prototype.strike()
short-title: strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Deprecated_Header}}

Die **`strike()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in ein {{HTMLElement("strike")}} Element (`<strike>str</strike>`) einbettet, was dazu führt, dass dieser String als durchgestrichener Text angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `strike()` wurde das `<strike>` Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen das {{HTMLElement("del")}} für gelöschten Inhalt oder das {{HTMLElement("s")}} für Inhalte, die nicht mehr korrekt oder relevant sind, verwenden.

## Syntax

```js-nolint
strike()
```

### Parameter

Keine.

### Rückgabewert

Ein String, beginnend mit einem `<strike>` Start-Tag, dann der Text `str` und anschließend ein `</strike>` End-Tag.

## Beispiele

### Verwendung von strike()

Der folgende Code erstellt einen HTML-String und ersetzt damit den Body des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

Dies erstellt das folgende HTML:

```html
<strike>Hello, world</strike>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `strike` kein gültiges Element mehr ist.

Anstelle der Verwendung von `strike()` und der direkten Erstellung von HTML-Text sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "Hello, world";
const elem = document.createElement("s");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.strike` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.strike`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("strike")}}
