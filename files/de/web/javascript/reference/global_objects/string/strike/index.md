---
title: String.prototype.strike()
short-title: strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`strike()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("strike")}}-Element einbettet (`<strike>str</strike>`). Dadurch wird der String als durchgestrichener Text angezeigt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `strike()` wurde das `<strike>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen {{HTMLElement("del")}} für gelöschte Inhalte oder {{HTMLElement("s")}} für Inhalte verwenden, die nicht mehr korrekt oder relevant sind.

## Syntax

```js-nolint
strike()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<strike>`-Start-Tag beginnt, gefolgt vom Text `str` und einem `</strike>`-End-Tag.

## Beispiele

### strike() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

Dadurch entsteht das folgende HTML:

```html
<strike>Hello, world</strike>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `strike` kein gültiges Element mehr ist.

Anstatt `strike()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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

- [Polyfill für `String.prototype.strike` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.strike` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("strike")}}
