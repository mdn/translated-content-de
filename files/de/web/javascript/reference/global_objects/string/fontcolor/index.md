---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`fontcolor()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}}-Element einbettet (`<font color="...">str</font>`), wodurch dieser String in der angegebenen Schriftfarbe angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur zu Kompatibilitätszwecken standardisiert. Im Fall von `fontcolor()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameter

- `color`
  - : Ein String, der die Farbe als hexadezimales RGB-Triplett oder als Stringliteral ausdrückt. Stringliterale für Farbnamen sind in der [CSS-Farbreferenz](/de/docs/Web/CSS/color_value) aufgeführt.

### Rückgabewert

Ein String, der mit einem `<font color="color">`-Start-Tag beginnt (Doppelanführungszeichen in `color` werden durch `&quot;` ersetzt), dann den Text `str` enthält und dann mit einem `</font>`-End-Tag endet.

## Beschreibung

Die `fontcolor()`-Methode selbst verbindet einfach die Stringteile zusammen, ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, müssen Sie, wenn Sie Farbe als hexadezimales RGB-Triplett angeben, das Format `rrggbb` verwenden. Zum Beispiel sind die hexadezimalen RGB-Werte für Lachs rot=FA, grün=80 und blau=72, also ist das RGB-Triplett für Lachs `"FA8072"`.

## Beispiele

### Verwendung von fontcolor()

Der folgende Code erstellt einen HTML-String und ersetzt damit den Body des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

Dies wird das folgende HTML erzeugen:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Anstatt `fontcolor()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Zum Beispiel können Sie {{cssxref("color")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.color = "red";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fontcolor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
