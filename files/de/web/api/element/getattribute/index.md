---
title: "Element: getAttribute() Methode"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("DOM")}}

Die **`getAttribute()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle gibt den Wert eines angegebenen Attributs des Elements zurück.

Wenn das angegebene Attribut nicht existiert, wird der Wert `null` zurückgegeben.

Wenn Sie die Eigenschaften des [`Attr`](/de/docs/Web/API/Attr) Knotens inspizieren müssen, können Sie stattdessen die [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode) Methode verwenden.

## Syntax

```js-nolint
getAttribute(attributeName)
```

### Parameter

- `attributeName`
  - : Der Name des Attributs, dessen Wert Sie erhalten möchten.

### Rückgabewert

Ein String, der den Wert von `attributeName` enthält, wenn das Attribut existiert, andernfalls `null`.

## Beispiele

```html
<!-- example div in an HTML DOC -->
<div id="div1">Hi Champ!</div>
```

```js
const div1 = document.getElementById("div1");
// <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
// "div1"

const align = div1.getAttribute("align");
// null
```

## Beschreibung

### Kleinschreibung

Wenn `getAttribute()` auf einem HTML-Element in einem DOM aufgerufen wird, das als HTML-Dokument markiert ist, wird das Argument in Kleinschreibung umgewandelt, bevor fortgefahren wird.

### Abrufen von Nonce-Werten

Aus Sicherheitsgründen werden [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces von Nicht-Skript-Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufen verborgen.

```js example-bad
let nonce = script.getAttribute("nonce");
// returns empty string
```

Statt den Nonce aus dem Content-Attribut abzurufen, verwenden Sie die [`nonce`](/de/docs/Web/API/HTMLElement/nonce) Eigenschaft:

```js
let nonce = script.nonce;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
