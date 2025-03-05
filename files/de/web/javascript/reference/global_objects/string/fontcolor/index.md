---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}} {{Deprecated_Header}}

Die **`fontcolor()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}} Element einbettet (`<font color="...">str</font>`), was dazu führt, dass dieser String in der angegebenen Schriftfarbe angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontcolor()` wurde das `<font>` Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS) Eigenschaften verwenden.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameter

- `color`
  - : Ein String, der die Farbe als hexadezimaler RGB-Tripel oder als String-Literal ausdrückt. String-Literals für Farbnamen sind in der [CSS-Farbreferenz](/de/docs/Web/CSS/color_value) aufgelistet.

### Rückgabewert

Ein String, der mit einem `<font color="color">` Start-Tag beginnt (doppelte Anführungszeichen in `color` werden durch `&quot;` ersetzt), dann der Text `str`, und dann ein `</font>` End-Tag.

## Beschreibung

Die Methode `fontcolor()` selbst verbindet einfach die String-Teile, ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}} Elemente zu erstellen, müssen Sie, wenn Sie die Farbe als hexadezimalen RGB-Tripel ausdrücken, das Format `rrggbb` verwenden. Beispielsweise sind die hexadezimalen RGB-Werte für Lachs rot=FA, grün=80 und blau=72, daher ist der RGB-Tripel für Lachs `"FA8072"`.

## Beispiele

### Verwendung von fontcolor()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

Dies erstellt folgendes HTML:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Anstatt `fontcolor()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Beispielsweise können Sie {{cssxref("color")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style) Attribut manipulieren:

```js
document.getElementById("yourElemId").style.color = "red";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fontcolor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.fontcolor`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
