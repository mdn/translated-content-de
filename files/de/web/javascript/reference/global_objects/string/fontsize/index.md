---
title: String.prototype.fontsize()
short-title: fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`fontsize()`** von {{jsxref("String")}}-Werten erstellt einen String, der den ursprünglichen String in ein {{HTMLElement("font")}}-Element einschließt (`<font size="...">str</font>`). Dadurch wird der String in der angegebenen Schriftgröße angezeigt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Bei `fontsize()` kommt hinzu, dass das `<font>`-Element selbst aus der HTML-Spezifikation entfernt wurde und nicht mehr verwendet werden sollte. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontsize(size)
```

### Parameter

- `size`
  - : Eine Ganzzahl zwischen 1 und 7 oder ein String, der eine Ganzzahl mit Vorzeichen zwischen 1 und 7 darstellt.

### Rückgabewert

Ein String, der mit einem öffnenden `<font size="size">`-Tag beginnt (doppelte Anführungszeichen in `size` werden durch `&quot;` ersetzt), gefolgt vom Text `str` und einem schließenden `</font>`-Tag.

## Beschreibung

Die Methode `fontsize()` selbst fügt die String-Teile lediglich zusammen, ohne sie zu validieren oder zu normalisieren. Um gültige {{HTMLElement("font")}}-Elemente zu erstellen, können Sie `size` als Ganzzahl angeben. Damit legen Sie die Schriftgröße von `str` auf eine der 7 definierten Größen fest. Sie können `size` auch als String wie `"-2"` oder `"+3"` angeben, um die Schriftgröße von `str` relativ zum Standardwert 3 anzupassen.

## Beispiele

### fontsize() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokument-Bodys:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

Dadurch entsteht das folgende HTML:

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Statt `fontsize()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie Schriftarten mit CSS anpassen. Beispielsweise können Sie {{cssxref("font-size")}} über die Eigenschaft [`element.style`](/de/docs/Web/API/HTMLElement/style) ändern:

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.fontsize` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.fontsize` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
