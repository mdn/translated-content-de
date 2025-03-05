---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}} {{Deprecated_Header}}

Die **`strike()`** Methode von {{jsxref("String")}} Werten erzeugt eine Zeichenkette, die diese Zeichenkette in einem {{HTMLElement("strike")}} Element (`<strike>str</strike>`) einbettet, wodurch diese Zeichenkette als durchgestrichener Text angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `strike()` wurde das `<strike>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen das {{HTMLElement("del")}} für gelöschte Inhalte oder das {{HTMLElement("s")}} für Inhalte verwenden, die nicht mehr korrekt oder relevant sind.

## Syntax

```js-nolint
strike()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die mit einem `<strike>`-Start-Tag beginnt, gefolgt vom Text `str`, und dann mit einem `</strike>`-End-Tag endet.

## Beispiele

### Verwendung von strike()

Der folgende Code erstellt eine HTML-Zeichenkette und ersetzt damit den Inhalt des Dokumentenkörpers:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

Dies erzeugt das folgende HTML:

```html
<strike>Hello, world</strike>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `strike` kein gültiges Element mehr ist.

Statt `strike()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
