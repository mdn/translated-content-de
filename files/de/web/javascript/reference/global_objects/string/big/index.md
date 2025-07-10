---
title: String.prototype.big()
short-title: big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`big()`** Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("big")}}-Element (`<big>str</big>`) einbettet, was dazu führt, dass dieser String in einer großen Schrift angezeigt wird.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Im Fall von `big()` wurde das `<big>`-Element selbst aus der HTML-Spezifikation entfernt und sollte nicht mehr verwendet werden. Webentwickler sollten stattdessen [CSS](/de/docs/Web/CSS)-Eigenschaften verwenden.

## Syntax

```js-nolint
big()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der mit einem `<big>` Starttag beginnt, dann den Text `str` enthält, und dann mit einem `</big>` Endtag endet.

## Beispiele

### Verwendung von big()

Der untenstehende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.big();
```

Dies wird das folgende HTML erzeugen:

```html
<big>Hello, world</big>
```

> [!WARNING]
> Diese Markierung ist ungültig, da `big` kein gültiges Element mehr ist.

Anstatt `big()` zu verwenden und direkt HTML-Text zu erstellen, sollten Sie CSS verwenden, um Schriften zu manipulieren. Zum Beispiel können Sie {{cssxref("font-size")}} über das [`element.style`](/de/docs/Web/API/HTMLElement/style)-Attribut manipulieren:

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.big` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.big`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("big")}}
