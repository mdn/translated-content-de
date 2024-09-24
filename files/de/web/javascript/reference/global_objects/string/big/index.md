---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`big()`** Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("big")}}-Element einbettet (`<big>str</big>`), was bewirkt, dass dieser String in großer Schrift angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `big()` wurde das `<big>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
big()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<big>`-Start-Tag beginnt, dann den Text `str`, und dann ein `</big>`-End-Tag enthält.

## Beispiele

### Verwendung von big()

Der unten stehende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

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

Anstatt `big()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie CSS verwenden, um Schriften zu manipulieren. Zum Beispiel können Sie mit {{cssxref("font-size")}} über das {{domxref("HTMLElement/style", "element.style")}}-Attribut die Schriftgröße beeinflussen:

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
