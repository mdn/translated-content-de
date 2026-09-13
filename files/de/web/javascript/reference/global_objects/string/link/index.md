---
title: String.prototype.link()
short-title: link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Die **`link()`** Methode von {{jsxref("String")}} Werten erstellt einen String, der diesen String in ein {{HTMLElement("a")}} Element einbettet (`<a href="...">str</a>`), um ihn als Hypertext-Link zu einer anderen URL zu verwenden.

> [!NOTE]
> Alle [HTML-Einrahmenmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur für Kompatibilitätszwecke standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
link(url)
```

### Parameter

- `url`
  - : Ein beliebiger String, der das `href`-Attribut des `<a>` Elements spezifiziert; er sollte eine gültige URL (relativ oder absolut) sein, wobei alle `&`-Zeichen als `&amp;` maskiert werden.

### Rückgabewert

Ein String, der mit einem `<a href="url">` Start-Tag beginnt (Anführungszeichen in `url` werden durch `&quot;` ersetzt), gefolgt von dem Text `str`, und endet mit einem `</a>` End-Tag.

## Beispiele

### Nutzung von link()

Der folgende Code erzeugt einen HTML-String und ersetzt dann den Körper des Dokuments damit:

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

Dies erzeugt das folgende HTML:

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
- [es-shims Polyfill von `String.prototype.link`](https://www.npmjs.com/package/es-string-html-methods)
- [HTML-Einrahmenmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
