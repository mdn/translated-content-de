---
title: String.prototype.fontcolor()
short-title: fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`fontcolor()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}} Element einbettet (`<font color="...">str</font>`), wodurch dieser String in der angegebenen Schriftfarbe angezeigt wird.

> [!NOTE]
> Alle [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontcolor()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontcolor(color)
```

### Parameter

- `color`
  - : Ein String, der die Farbe als hexadezimales RGB-Triplett oder als Stringliteral ausdrückt. Stringliterale für Farbnamen sind in der [CSS-Farbreferenz](/de/docs/Web/CSS/color_value) aufgelistet.

### Rückgabewert

Ein String, der mit einem `<font color="color">` Start-Tag beginnt (doppelte Anführungszeichen in `color` werden durch `&quot;` ersetzt), dann der Text `str`, und dann ein `</font>` End-Tag.

## Beschreibung

Die `fontcolor()` Methode selbst verbindet einfach die Stringteile ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}} Elemente zu erstellen, müssen Sie im Fall von Farbangaben als hexadezimales RGB-Triplett das Format `rrggbb` verwenden. Zum Beispiel sind die hexadezimalen RGB-Werte für Lachs (salmon) rot=FA, grün=80 und blau=72, das RGB-Triplett für Lachs ist also `"FA8072"`.

## Beispiele

### Verwendung von fontcolor()

Der untenstehende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokuments:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

Dies erzeugt das folgende HTML:

```html
<font color="red">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, weil `font` kein gültiges Element mehr ist.

Anstatt `fontcolor()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Zum Beispiel können Sie {{cssxref("color")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style) Attribut manipulieren:

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
