---
title: String.prototype.fixed()
short-title: fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`fixed()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in ein {{HTMLElement("tt")}}-Element (`<tt>str</tt>`) einbettet, wodurch dieser String in einer Schrift mit fester Breite angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fixed()` wurde das `<tt>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fixed()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<tt>` Start-Tag beginnt, gefolgt von dem Text `str`, und dann einem `</tt>` End-Tag.

## Beispiele

### Nutzung von fixed()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fixed();
```

Dies erzeugt das folgende HTML:

```html
<tt>Hello, world</tt>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `tt` kein gültiges Element mehr ist.

Anstatt `fixed()` zu verwenden und direkt HTML-Text zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Beispielsweise können Sie {{cssxref("font-family")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.fontFamily = "monospace";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fixed` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.fixed`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("tt")}}
