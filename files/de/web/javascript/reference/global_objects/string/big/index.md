---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`big()`**-Methode von {{jsxref("String")}}-Werten erstellt einen Zeichenfolgenwert, der diese Zeichenfolge in ein {{HTMLElement("big")}}-Element einbettet (`<big>str</big>`), wodurch diese Zeichenfolge in einer großen Schrift angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `big()` wurde das `<big>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
big()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenfolge, die mit einem `<big>`-Start-Tag beginnt, dann der Text `str` und dann ein `</big>`-End-Tag.

## Beispiele

### Verwendung von big()

Der folgende Code erstellt eine HTML-Zeichenfolge und ersetzt dann den Body des Dokuments durch diese:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.big();
```

Dies wird das folgende HTML erstellen:

```html
<big>Hello, world</big>
```

> [!WARNING]
> Dieses Markup ist ungültig, da `big` kein gültiges Element mehr ist.

Anstatt `big()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriftarten zu manipulieren. Zum Beispiel können Sie die {{cssxref("font-size")}} über das Attribut [`element.style`](/de/docs/Web/API/HTMLElement/style) manipulieren:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.big` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("big")}}
