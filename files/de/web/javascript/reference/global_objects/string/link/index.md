---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`link()`**-Methode von {{jsxref("String")}}-Werten erstellt eine Zeichenkette, die diese Zeichenkette in einem {{HTMLElement("a")}}-Element (`<a href="...">str</a>`) einbettet, um sie als Hypertext-Link zu einer anderen URL zu verwenden.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
link(url)
```

### Parameter

- `url`
  - : Jede Zeichenkette, die das `href`-Attribut des `<a>`-Elements angibt; es sollte sich um eine gültige URL (relativ oder absolut) handeln, wobei alle `&`-Zeichen als `&amp;` maskiert sind.

### Rückgabewert

Eine Zeichenkette, die mit einem `<a href="url">`-Start-Tag beginnt (doppelte Anführungszeichen in `url` werden durch `&quot;` ersetzt), gefolgt vom Text `str` und dann einem `</a>`-End-Tag.

## Beispiele

### Verwendung von link()

Der folgende Code erstellt eine HTML-Zeichenkette und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

Dies wird das folgende HTML erzeugen:

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

Anstatt `link()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

```js
const contentString = "MDN Web Docs";
const elem = document.createElement("a");
elem.href = "https://developer.mozilla.org/";
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.link` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
