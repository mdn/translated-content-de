---
title: String.prototype.fontsize()
short-title: fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`fontsize()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}}-Element (`<font size="...">str</font>`) einbettet, wodurch dieser String in der angegebenen Schriftgröße angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und werden nur aus Kompatibilitätsgründen standardisiert. Im Fall von `fontsize()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontsize(size)
```

### Parameter

- `size`
  - : Eine ganze Zahl zwischen 1 und 7 oder ein String, der eine unterzeichnete ganze Zahl zwischen 1 und 7 darstellt.

### Rückgabewert

Ein String, der mit einem `<font size="size">` Start-Tag beginnt (Doppelte Anführungszeichen in `size` werden durch `&quot;` ersetzt), gefolgt vom Text `str` und dann einem `</font>` End-Tag.

## Beschreibung

Die `fontsize()`-Methode selbst verbindet einfach die String-Teile ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, setzen Sie die Schriftgröße von `str` auf eine der 7 definierten Größen, wenn Sie `size` als Ganzzahl angeben. Sie können `size` auch als String angeben, wie z.B. `"-2"` oder `"+3"`, um die Schriftgröße von `str` relativ zu 3, dem Standardwert, anzupassen.

## Beispiele

### Verwendung von fontsize()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

Dies wird das folgende HTML erzeugen:

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Statt `fontsize()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Zum Beispiel können Sie {{cssxref("font-size")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.fontsize` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.fontsize`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("font")}}
