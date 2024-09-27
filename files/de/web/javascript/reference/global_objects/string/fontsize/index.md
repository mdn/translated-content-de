---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`fontsize()`**-Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("font")}}-Element (`<font size="...">str</font>`) einbettet, wodurch dieser String in der angegebenen Schriftgröße angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Falle von `fontsize()` wurde das `<font>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
fontsize(size)
```

### Parameter

- `size`
  - : Eine Ganzzahl zwischen 1 und 7 oder ein String, der eine vorzeichenbehaftete Ganzzahl zwischen 1 und 7 repräsentiert.

### Rückgabewert

Ein String, beginnend mit einem `<font size="size">`-Start-Tag (doppelte Anführungszeichen in `size` werden durch `&quot;` ersetzt), dann der Text `str` und dann ein `</font>`-End-Tag.

## Beschreibung

Die `fontsize()`-Methode selbst fügt die String-Teile einfach zusammen, ohne jegliche Validierung oder Normalisierung. Um jedoch gültige {{HTMLElement("font")}}-Elemente zu erstellen, setzen Sie, wenn Sie `size` als Ganzzahl angeben, die Schriftgröße von `str` auf eine der 7 definierten Größen. Sie können `size` als String wie `"-2"` oder `"+3"` angeben, um die Schriftgröße von `str` relativ zu 3, dem Standardwert, anzupassen.

## Beispiele

### Verwendung von fontsize()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

Dies erzeugt folgendes HTML:

```html
<font size="7">Hello, world</font>
```

> [!WARNING]
> Diese Markup ist ungültig, da `font` kein gültiges Element mehr ist.

Statt `fontsize()` zu verwenden und direkt HTML-Text zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Sie können beispielsweise {{cssxref("font-size")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

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
