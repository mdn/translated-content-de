---
title: "Element: getAttribute()-Methode"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: 3f10b3a23b7123d051dccb3a97c4258c540df9bd
---

{{APIRef("DOM")}}

Die **`getAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt den Wert eines angegebenen Attributs des Elements zurück.

Falls das angegebene Attribut nicht existiert, wird der zurückgegebene Wert `null` sein.

Wenn Sie die Eigenschaften eines [`Attr`](/de/docs/Web/API/Attr)-Nodes inspizieren müssen, können Sie stattdessen die [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)-Methode verwenden.

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

Wenn `getAttribute()` auf ein HTML-Element in einem DOM, das als HTML-Dokument markiert ist, aufgerufen wird, werden die Argumente in Kleinbuchstaben umgewandelt, bevor fortgefahren wird.

### Dekodierte Zeichenreferenzen in Attributwerten

HTML {{Glossary("Character_reference", "Zeichenreferenzen")}} im Quellmarkup eines Attributs (zum Beispiel `&lt;`, `&amp;` oder `&#x3C;`) werden vom HTML-Parser dekodiert, wenn das Dokument geparst wird. Daher gibt `getAttribute()` den dekodierten Wert zurück, nicht den ursprünglichen Quelltext.

Gegeben:

```html
<div id="example" data-payload="&lt;b&gt;hi&lt;/b&gt;"></div>
```

Der Aufruf von `document.getElementById("example").getAttribute("data-payload")` gibt den String `"<b>hi</b>"` zurück.

Es ist unsicher, den Rückgabewert von `getAttribute()` als bereits escaptes HTML zu behandeln. Wenn Sie ein Attribut lesen, das nicht vertrauenswürdige Daten enthält und dieses dann [`innerHTML`](/de/docs/Web/API/Element/innerHTML) zuweisen oder als Markup ins Dokument einfügen, werden alle HTML-Referenzen, die verwendet wurden, um Sonderzeichen zu escapen, bereits dekodiert sein, und das Ergebnis kann für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) ausgenutzt werden.

Verwenden Sie [`textContent`](/de/docs/Web/API/Node/textContent) (oder eine andere text-sichere API) für nicht vertrauenswürdige Daten anstelle von `innerHTML`.

### Abrufen von nonce-Werten

Aus Sicherheitsgründen sind [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces von nicht-Skript-Quellen, wie CSS-Selektoren, und `.getAttribute("nonce")`-Aufrufen ausgeblendet.

```js example-bad
let nonce = script.getAttribute("nonce");
// returns empty string
```

Anstatt das nonce aus dem Content-Attribut abzurufen, verwenden Sie die [`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft:

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
