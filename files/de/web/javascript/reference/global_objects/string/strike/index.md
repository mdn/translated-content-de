---
title: String.prototype.strike()
short-title: strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`strike()`** Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("strike")}}-Element einbettet (`<strike>str</strike>`), wodurch dieser String als durchgestrichener Text angezeigt wird.

> [!NOTE]
> Alle [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `strike()` wurde das `<strike>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen das {{HTMLElement("del")}} für gelöschte Inhalte oder das {{HTMLElement("s")}} für Inhalte, die nicht mehr korrekt oder relevant sind, verwenden.

## Syntax

```js-nolint
strike()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<strike>`-Start-Tag beginnt, dann den Text `str`, und dann ein `</strike>`-End-Tag.

## Beispiele

### Verwendung von strike()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

Dies erzeugt das folgende HTML:

```html
<strike>Hello, world</strike>
```

> [!WARNING]
> Diese Markup ist ungültig, da `strike` kein gültiges Element mehr ist.

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

- [Polyfill von `String.prototype.strike` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.strike`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("strike")}}
