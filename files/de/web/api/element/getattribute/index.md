---
title: "Element: getAttribute()-Methode"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

Die **`getAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt den Wert eines angegebenen Attributs des Elements zurück.

Falls das angegebene Attribut nicht existiert, wird der Wert `null` zurückgegeben.

Wenn Sie die Eigenschaften des [`Attr`](/de/docs/Web/API/Attr)-Knotens untersuchen müssen, können Sie stattdessen die [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)-Methode verwenden.

## Syntax

```js-nolint
getAttribute(attributeName)
```

### Parameter

- `attributeName`
  - : Der Name des Attributs, dessen Wert Sie abrufen möchten.

### Rückgabewert

Ein String, der den Wert von `attributeName` enthält, falls das Attribut existiert, ansonsten `null`.

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

const lang = div1.getAttribute("lang");
// null
```

## Beschreibung

### Kleinbuchstaben

Wenn `getAttribute()` auf einem HTML-Element in einem als HTML-Dokument markierten DOM aufgerufen wird, wird das Argument vor der weiteren Verarbeitung in Kleinbuchstaben umgewandelt.

### Abrufen von Nonce-Werten

Aus Sicherheitsgründen sind [CSP](/de/docs/Web/HTTP/Guides/CSP) Nonces aus Nicht-Skriptquellen, wie z. B. CSS-Selektoren, sowie `.getAttribute("nonce")`-Aufrufe verborgen.

```js example-bad
let nonce = script.getAttribute("nonce");
// returns empty string
```

Statt den Nonce über das Inhaltsattribut abzurufen, verwenden Sie die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft:

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
