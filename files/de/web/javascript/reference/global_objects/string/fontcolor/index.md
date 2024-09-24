---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`fontcolor()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("font")}}-Element einbettet (`<font color="...">str</font>`), was dazu führt, dass dieser String in der angegebenen Schriftfarbe angezeigt wird.

> [!NOTE]
> Alle [HTML-Hüllmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontcolor()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameter

- `color`
  - : Ein String, der die Farbe als hexadezimales RGB-Triplett oder als Stringliteral angibt. Stringliterale für Farbnamen sind im [CSS-Farbreferenz](/de/docs/Web/CSS/color_value) gelistet.

### Rückgabewert

Ein String, der mit einem `<font color="color">`-Start-Tag beginnt (doppelte Anführungszeichen in `color` werden durch `&quot;` ersetzt), dann der Text `str` und dann ein `</font>`-End-Tag.

## Beschreibung

Die `fontcolor()`-Methode selbst fügt die Stringteile einfach zusammen, ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, müssen Sie bei der Angabe von Farben als hexadezimalem RGB-Triplett das Format `rrggbb` verwenden. Zum Beispiel sind die hexadezimalen RGB-Werte für Lachs rot=FA, grün=80 und blau=72, sodass das RGB-Triplett für Lachs `"FA8072"` ist.

## Beispiele

### Verwendung von fontcolor()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

Dies erzeugt den folgenden HTML-Code:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Anstatt `fontcolor()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Zum Beispiel können Sie {{cssxref("color")}} über das {{domxref("HTMLElement/style", "element.style")}}-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.color = "red";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fontcolor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Hüllmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
