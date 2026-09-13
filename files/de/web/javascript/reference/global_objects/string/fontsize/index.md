---
title: String.prototype.fontsize()
short-title: fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`fontsize()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("font")}}-Element einbettet (`<font size="...">str</font>`), wodurch dieser String in der angegebenen Schriftgröße angezeigt wird.

> [!NOTE]
> Alle [HTML-Einbettungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Falle von `fontsize()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontsize(size)
```

### Parameter

- `size`
  - : Eine ganze Zahl zwischen 1 und 7 oder ein String, der eine signierte ganze Zahl zwischen 1 und 7 darstellt.

### Rückgabewert

Ein String, der mit einem `<font size="size">`-Start-Tag beginnt (doppelte Anführungszeichen in `size` werden durch `&quot;` ersetzt), gefolgt von dem Text `str` und dann einem `</font>`-End-Tag.

## Beschreibung

Die `fontsize()`-Methode selbst fügt einfach die String-Teile zusammen, ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, setzen Sie die Schriftgröße von `str` auf eine der 7 definierten Größen, wenn Sie die Größe als Ganzzahl angeben. Sie können `size` als String wie `"-2"` oder `"+3"` angeben, um die Schriftgröße von `str` relativ zu 3, dem Standardwert, anzupassen.

## Beispiele

### Verwendung von fontsize()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

Dies wird das folgende HTML erstellen:

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Anstatt `fontsize()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Zum Beispiel können Sie {{cssxref("font-size")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims polyfill von `String.prototype.fontsize`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Einbettungsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
