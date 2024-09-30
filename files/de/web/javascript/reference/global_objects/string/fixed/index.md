---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`fixed()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("tt")}}-Element (`<tt>str</tt>`) einbettet, wodurch dieser String in einer Schriftart mit fester Breite angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fixed()` wurde das `<tt>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fixed()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<tt>`-Start-Tag beginnt, gefolgt vom Text `str` und einem `</tt>`-End-Tag.

## Beispiele

### Verwendung von fixed()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fixed();
```

Dies erstellt das folgende HTML:

```html
<tt>Hello, world</tt>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `tt` kein gültiges Element mehr ist.

Anstatt `fixed()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Zum Beispiel können Sie {{cssxref("font-family")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.fontFamily = "monospace";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fixed` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("tt")}}
