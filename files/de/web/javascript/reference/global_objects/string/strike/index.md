---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`strike()`**-Methode von {{jsxref("String")}}-Werten erzeugt einen String, der diesen String in ein {{HTMLElement("strike")}}-Element einbettet (`<strike>str</strike>`), was dazu führt, dass dieser String als durchgestrichener Text angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `strike()` wurde das `<strike>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen das {{HTMLElement("del")}} für gelöschten Inhalt oder das {{HTMLElement("s")}} für Inhalte verwenden, die nicht mehr korrekt oder relevant sind.

## Syntax

```js-nolint
strike()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<strike>`-Anfangstag beginnt, gefolgt vom Text `str`, und dann einem `</strike>`-Endetag.

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
> Dieses Markup ist ungültig, da `strike` kein gültiges Element mehr ist.

Anstatt `strike()` zu verwenden und direkt HTML-Text zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) nutzen. Zum Beispiel:

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
