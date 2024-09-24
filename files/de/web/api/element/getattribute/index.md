---
title: "Element: getAttribute()-Methode"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

Die **`getAttribute()`** Methode des {{domxref("Element")}}-Interfaces gibt den Wert eines angegebenen Attributs des Elements zurück.

Falls das angegebene Attribut nicht existiert, wird der Wert `null` zurückgegeben.

Wenn Sie die Eigenschaften des {{domxref("Attr")}}-Knotens inspizieren müssen, können Sie stattdessen die {{domxref("Element.getAttributeNode()", "getAttributeNode()")}}-Methode verwenden.

## Syntax

```js-nolint
getAttribute(attributeName)
```

### Parameter

- `attributeName`
  - : Der Name des Attributs, dessen Wert Sie abrufen möchten.

### Rückgabewert

Ein String, der den Wert von `attributeName` enthält, falls das Attribut existiert, sonst `null`.

## Beispiele

```html
<!-- Beispiel-Div in einem HTML-Dokument -->
<div id="div1">Hi Champ!</div>
```

```js
// in einer Konsole
const div1 = document.getElementById("div1");
//=> <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
//=> "div1"

const align = div1.getAttribute("align");
//=> null
```

## Beschreibung

### Kleinschreibung

Wenn sie auf ein HTML-Element in einem DOM aufgerufen wird, das als HTML-Dokument gekennzeichnet ist, wandelt `getAttribute()` sein Argument in Kleinbuchstaben um, bevor es fortfährt.

### Abrufen von Nonce-Werten

Aus Sicherheitsgründen sind [CSP](/de/docs/Web/HTTP/CSP) Nonces aus nicht-Skript-Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufen verborgen.

```js example-bad
let nonce = script.getAttribute("nonce");
// gibt einen leeren String zurück
```

Anstatt den Nonce-Wert aus dem Inhaltsattribut abzurufen, verwenden Sie die {{domxref("HTMLElement/nonce", "nonce")}}-Eigenschaft:

```js
let nonce = script.nonce;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
