---
title: String.prototype.link()
short-title: link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

Die **`link()`** Methode von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in einem {{HTMLElement("a")}}-Element (`<a href="...">str</a>`) einbettet, um ihn als Hypertext-Link zu einer anderen URL zu verwenden.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
link(url)
```

### Parameter

- `url`
  - : Jeder String, der das `href`-Attribut des `<a>`-Elements angibt; es sollte eine gültige URL sein (relativ oder absolut), wobei alle `&`-Zeichen als `&amp;` maskiert sein sollten.

### Rückgabewert

Ein String, der mit einem `<a href="url">` Start-Tag beginnt (doppelte Anführungszeichen in `url` werden durch `&quot;` ersetzt), gefolgt vom Text `str`, und dann einem `</a>` End-Tag.

## Beispiele

### Verwendung von link()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

Dies wird das folgende HTML erstellen:

```html
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

Statt `link()` zu verwenden und HTML-Text direkt zu erstellen, sollten Sie DOM-APIs wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) verwenden. Zum Beispiel:

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
- [es-shims Polyfill von `String.prototype.link`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
