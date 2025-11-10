---
title: String.prototype.fontcolor()
short-title: fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{Deprecated_Header}}

Die **`fontcolor()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}}-Element (`<font color="...">str</font>`) einbettet, was dazu führt, dass dieser String in der angegebenen Schriftfarbe angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Falle von `fontcolor()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameter

- `color`
  - : Ein String, der die Farbe als hexadezimales RGB-Triplet oder als String-Literal ausdrückt. String-Literale für Farbnamen sind im [CSS-Farb-Referenz](/de/docs/Web/CSS/Reference/Values/color_value) aufgelistet.

### Rückgabewert

Ein String, der mit einem `<font color="color">`-Start-Tag beginnt (doppelte Anführungszeichen in `color` werden durch `&quot;` ersetzt), dann der Text `str`, und dann ein `</font>`-End-Tag.

## Beschreibung

Die `fontcolor()`-Methode selbst fügt einfach die Teile des Strings ohne jegliche Validierung oder Normalisierung zusammen. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, müssen Sie, wenn Sie die Farbe als hexadezimales RGB-Triplet ausdrücken, das Format `rrggbb` verwenden. Zum Beispiel sind die hexadezimalen RGB-Werte für Lachs rot=FA, grün=80 und blau=72, also ist das RGB-Triplet für Lachs `"FA8072"`.

## Beispiele

### Nutzung von fontcolor()

Der untenstehende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

Dies wird das folgende HTML erstellen:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Anstatt `fontcolor()` zu verwenden und direkt HTML-Text zu erstellen, sollten Sie CSS benutzen, um Schriften zu manipulieren. Zum Beispiel können Sie {{cssxref("color")}} durch das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

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
