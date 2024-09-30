---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`fontsize()`** Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}}-Element (`<font size="...">str</font>`) einbettet, wodurch dieser String in der angegebenen Schriftgröße angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontsize()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontsize(size)
```

### Parameter

- `size`
  - : Ein ganzzahliger Wert zwischen 1 und 7 oder ein String, der einen vorzeichenbehafteten ganzzahligen Wert zwischen 1 und 7 darstellt.

### Rückgabewert

Ein String, der mit einem `<font size="size">`-Start-Tag beginnt (doppelte Anführungszeichen in `size` werden durch `&quot;` ersetzt), dann der Text `str` folgt und schließlich mit einem `</font>`-End-Tag endet.

## Beschreibung

Die `fontsize()`-Methode selbst fügt einfach die String-Teile zusammen, ohne irgendeine Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, legen Sie die Schriftgröße von `str` auf eine der 7 definierten Größen fest, wenn Sie die Größe als Ganzzahl angeben. Sie können `size` als String wie `"-2"` oder `"+3"` angeben, um die Schriftgröße von `str` relativ zu 3, dem Standardwert, anzupassen.

## Beispiele

### Verwendung von fontsize()

Der unten stehende Code erstellt einen HTML-String und ersetzt dann den Körper des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

Dies wird das folgende HTML erzeugen:

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> Diese Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Anstatt `fontsize()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriften zu manipulieren. Zum Beispiel können Sie die {{cssxref("font-size")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
