---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`strike()`**-Methode von {{jsxref("String")}}-Werten erstellt eine Zeichenkette, die diese Zeichenkette in ein {{HTMLElement("strike")}}-Element (`<strike>str</strike>`) einbettet, wodurch diese Zeichenkette als durchgestrichener Text angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `strike()` wurde das `<strike>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen das {{HTMLElement("del")}} für gelöschte Inhalte oder das {{HTMLElement("s")}} für Inhalte verwenden, die nicht mehr korrekt oder relevant sind.

## Syntax

```js-nolint
strike()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die mit einem `<strike>`-Start-Tag beginnt, dann den Text `str` enthält, gefolgt von einem `</strike>`-End-Tag.

## Beispiele

### Verwendung von strike()

Der folgende Code erstellt eine HTML-Zeichenkette und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

Dies wird das folgende HTML erstellen:

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
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("strike")}}
