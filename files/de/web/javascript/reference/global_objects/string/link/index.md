---
title: String.prototype.link()
short-title: link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`link()`** von {{jsxref("String")}}-Werten erstellt einen String, der diesen String in ein {{HTMLElement("a")}}-Element (`<a href="...">str</a>`) einbettet. So kann er als Hypertext-Link zu einer anderen URL verwendet werden.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
link(url)
```

### Parameter

- `url`
  - : Ein beliebiger String, der das Attribut `href` des Elements `<a>` angibt. Er sollte eine gültige URL (relativ oder absolut) sein, in der alle `&`-Zeichen als `&amp;` maskiert sind.

### Rückgabewert

Ein String, der mit einem öffnenden `<a href="url">`-Tag beginnt (doppelte Anführungszeichen in `url` werden durch `&quot;` ersetzt), gefolgt vom Text `str` und einem schließenden `</a>`-Tag.

## Beispiele

### link() verwenden

Der folgende Code erstellt einen HTML-String und ersetzt damit den Inhalt des Dokuments:

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

Dadurch entsteht das folgende HTML:

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

- [Polyfill für `String.prototype.link` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.link` von es-shims](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
