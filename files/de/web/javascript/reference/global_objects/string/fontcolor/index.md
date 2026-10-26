---
title: String.prototype.fontcolor()
short-title: fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`fontcolor()`** von {{jsxref("String")}}-Werten erstellt einen String, der den ursprünglichen String in ein {{HTMLElement("font")}}-Element einbettet (`<font color="...">str</font>`). Dadurch wird der String in der angegebenen Schriftfarbe angezeigt.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontcolor()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameter

- `color`
  - : Ein String, der die Farbe als hexadezimales RGB-Tripel oder als Zeichenfolge angibt. Zeichenfolgen für Farbnamen sind in der [CSS-Farbreferenz](/de/docs/Web/CSS/Reference/Values/color_value) aufgeführt.

### Rückgabewert

Ein String, der mit einem `<font color="color">`-Start-Tag beginnt (doppelte Anführungszeichen in `color` werden durch `&quot;` ersetzt), gefolgt vom Text `str` und einem `</font>`-End-Tag.

## Beschreibung

Die Methode `fontcolor()` fügt die Teile des Strings lediglich zusammen, ohne sie zu validieren oder zu normalisieren. Um gültige {{HTMLElement("font")}}-Elemente zu erstellen, müssen Sie eine Farbe als hexadezimales RGB-Tripel jedoch im Format `rrggbb` angeben. Die hexadezimalen RGB-Werte für Lachsfarbe sind beispielsweise Rot=FA, Grün=80 und Blau=72. Das RGB-Tripel für Lachsfarbe lautet daher `"FA8072"`.

## Beispiele

### fontcolor() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit den Body des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

Dadurch entsteht das folgende HTML:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Statt `fontcolor()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftfarben zu ändern. Beispielsweise können Sie {{cssxref("color")}} über die Eigenschaft [`element.style`](/de/docs/Web/API/HTMLElement/style) ändern:

```js
document.getElementById("yourElemId").style.color = "red";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.fontcolor` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.fontcolor` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
