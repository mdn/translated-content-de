---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die Methode **`strike()`** von {{jsxref("String")}}-Werten erzeugt einen String, der diesen String in einem {{HTMLElement("strike")}}-Element (`<strike>str</strike>`) einbettet, wodurch dieser String als durchgestrichener Text angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur zur Kompatibilität standardisiert. Im Fall von `strike()` wurde das `<strike>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen das {{HTMLElement("del")}} für gelöschte Inhalte oder das {{HTMLElement("s")}} für Inhalte, die nicht mehr korrekt oder relevant sind, verwenden.

## Syntax

```js-nolint
strike()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<strike>`-Start-Tag beginnt, dann den Text `str` enthält und mit einem `</strike>`-End-Tag endet.

## Beispiele

### Verwendung von strike()

Der untenstehende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

Dies wird folgendes HTML erzeugen:

```html
<strike>Hello, world</strike>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `strike` kein gültiges Element mehr ist.

Statt `strike()` zu verwenden und HTML-Text direkt zu erzeugen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
