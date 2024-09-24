---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}} {{Deprecated_Header}}

Die **`link()`**-Methode von {{jsxref("String")}}-Werten erzeugt einen String, der diesen String in einem {{HTMLElement("a")}}-Element (`<a href="...">str</a>`) einbettet, um ihn als Hypertext-Link zu einer anderen URL zu verwenden.

> [!NOTE]
> Alle [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) sind veraltet und nur aus Kompatibilitätsgründen standardisiert. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

## Syntax

```js-nolint
link(url)
```

### Parameter

- `url`
  - : Ein beliebiger String, der das `href`-Attribut des `<a>`-Elements angibt; es sollte sich um eine gültige URL (relativ oder absolut) handeln, wobei alle `&`-Zeichen als `&amp;` maskiert werden.

### Rückgabewert

Ein String, der mit einem `<a href="url">`-Start-Tag beginnt (doppelte Anführungszeichen in `url` werden durch `&quot;` ersetzt), dann den Text `str` und schließlich einen `</a>`-End-Tag enthält.

## Beispiele

### Verwendung von link()

Der folgende Code erstellt einen HTML-String und ersetzt dann den Body des Dokuments damit:

```js
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

Dies erzeugt den folgenden HTML-Code:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.link` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML-Wrapper-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}
