---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`fontsize()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}}-Element (`<font size="...">str</font>`) einbettet, was dazu führt, dass dieser String in der angegebenen Schriftgröße angezeigt wird.

> [!NOTE]
> Alle [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontsize()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontsize(size)
```

### Parameter

- `size`
  - : Eine Ganzzahl zwischen 1 und 7 oder ein String, der eine vorzeichenbehaftete Ganzzahl zwischen 1 und 7 darstellt.

### Rückgabewert

Ein String, der mit einem `<font size="size">`-Start-Tag beginnt (doppelte Anführungszeichen in `size` werden durch `&quot;` ersetzt), dann der Text `str`, und dann ein `</font>`-End-Tag.

## Beschreibung

Die `fontsize()`-Methode selbst verbindet einfach die Stringteile ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, wird, wenn Sie die Größe als Ganzzahl angeben, die Schriftgröße von `str` auf eine der 7 definierten Größen gesetzt. Sie können `size` als String wie `"-2"` oder `"+3"` angeben, um die Schriftgröße von `str` relativ zu 3, dem Standardwert, anzupassen.

## Beispiele

### Verwendung von fontsize()

Der untenstehende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

Dies wird folgendes HTML erzeugen:

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, weil `font` kein gültiges Element mehr ist.

Anstatt `fontsize()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriften zu manipulieren. Beispielsweise können Sie {{cssxref("font-size")}} über das {{domxref("HTMLElement/style", "element.style")}}-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
