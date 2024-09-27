---
title: "Element: getAttribute() Methode"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

Die **`getAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt den Wert eines angegebenen Attributs des Elements zurück.

Wenn das angegebene Attribut nicht existiert, wird der Wert `null` zurückgegeben.

Wenn Sie die Eigenschaften des [`Attr`](/de/docs/Web/API/Attr)-Knotens inspizieren müssen, können Sie stattdessen die [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)-Methode verwenden.

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
// in a console
const div1 = document.getElementById("div1");
//=> <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
//=> "div1"

const align = div1.getAttribute("align");
//=> null
```

## Beschreibung

### Kleinbuchstaben

Wenn `getAttribute()` an einem HTML-Element in einem DOM, das als HTML-Dokument markiert ist, aufgerufen wird, wandelt die Methode ihr Argument in Kleinbuchstaben um, bevor sie fortfährt.

### Abrufen von Nonce-Werten

Aus Sicherheitsgründen werden [CSP](/de/docs/Web/HTTP/CSP)-Nonces, die nicht aus Skriptquellen stammen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufe verborgen.

```js example-bad
let nonce = script.getAttribute("nonce");
// returns empty string
```

Anstatt die Nonce aus dem Inhaltsattribut abzurufen, verwenden Sie die
[`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft:

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
