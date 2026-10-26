---
title: String.prototype.fixed()
short-title: fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`fixed()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("tt")}}-Element einbettet (`<tt>str</tt`). Dadurch wird der String in einer Schriftart mit fester Zeichenbreite angezeigt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fixed()` wurde das `<tt>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fixed()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem öffnenden `<tt>`-Tag beginnt, gefolgt vom Text `str` und einem schließenden `</tt>`-Tag.

## Beispiele

### fixed() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fixed();
```

Dadurch wird das folgende HTML erzeugt:

```html
<tt>Hello, world</tt>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `tt` kein gültiges Element mehr ist.

Statt `fixed()` zu verwenden und HTML-Text direkt zu erzeugen, sollten Sie Schriftarten mit CSS anpassen. Beispielsweise können Sie {{cssxref("font-family")}} über das Attribut [`element.style`](/de/docs/Web/API/HTMLElement/style) ändern:

```js
document.getElementById("yourElemId").style.fontFamily = "monospace";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.fixed` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.fixed` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("tt")}}
