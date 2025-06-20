---
title: String.prototype.fontcolor()
short-title: fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}} {{Deprecated_Header}}

Die **`fontcolor()`**-Methode von {{jsxref("String")}}-Werten erzeugt einen String, der diesen String in ein {{HTMLElement("font")}}-Element einbettet (`<font color="...">str</font>`), wodurch dieser String in der angegebenen Schriftfarbe angezeigt wird.

> [!NOTE]
> Alle [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontcolor()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameter

- `color`
  - : Ein String, der die Farbe als hexadezimales RGB-Triplet oder als String-Literal ausdrückt. String-Literale für Farbnamen sind im [CSS-Farbreferenz](/de/docs/Web/CSS/color_value) aufgelistet.

### Rückgabewert

Ein String, der mit einem `<font color="color">` Start-Tag beginnt (doppelte Anführungszeichen in `color` werden durch `&quot;` ersetzt), dann der Text `str`, und dann ein `</font>` End-Tag.

## Beschreibung

Die `fontcolor()`-Methode selbst verbindet einfach die String-Teile, ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, müssen Sie, wenn Sie Farbe als hexadezimales RGB-Triplet ausdrücken, das Format `rrggbb` verwenden. Zum Beispiel sind die hexadezimalen RGB-Werte für Lachs rot=FA, grün=80 und blau=72, sodass das RGB-Triplet für Lachs `"FA8072"` ist.

## Beispiele

### Verwendung von fontcolor()

Der folgende Code erzeugt einen HTML-String und ersetzt damit den Body des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

Dies erzeugt das folgende HTML:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Anstatt `fontcolor()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Beispielsweise können Sie die {{cssxref("color")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

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
- [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
