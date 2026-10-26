---
title: String.prototype.big()
short-title: big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`big()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("big")}}-Element einbettet (`<big>str</big>`). Dadurch wird der String in einer großen Schrift angezeigt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `big()` wurde das `<big>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
big()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<big>`-Start-Tag beginnt, darauf den Text `str` enthält und mit einem `</big>`-End-Tag endet.

## Beispiele

### big() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt anschließend den Inhalt des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.big();
```

Dadurch entsteht das folgende HTML:

```html
<big>Hello, world</big>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `big` kein gültiges Element mehr ist.

Anstatt `big()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie Schriftarten mit CSS anpassen. Beispielsweise können Sie {{cssxref("font-size")}} über das Attribut [`element.style`](/de/docs/Web/API/HTMLElement/style) ändern:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.big` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.big` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("big")}}
