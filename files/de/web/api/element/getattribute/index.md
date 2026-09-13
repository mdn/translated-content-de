---
title: "Element: die Methode getAttribute()"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

Die **`getAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces gibt den String-Wert des angegebenen Attributs des angegebenen Elements zurück. Sie gibt `null` zurück, wenn das Element kein Attribut mit dem angegebenen Namen hat.

Wenn Sie die Eigenschaften des [`Attr`](/de/docs/Web/API/Attr)-Knotens untersuchen müssen, können Sie stattdessen die Methode [`getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode) verwenden.

## Syntax

```js-nolint
getAttribute(attrName)
```

### Parameter

- `attrName`
  - : Ein String, der den Namen des Attributs angibt. Wenn es auf einem HTML-Element in einem DOM aufgerufen wird, das als HTML-Dokument gekennzeichnet ist, wird der Name in Kleinbuchstaben normalisiert.

### Rückgabewert

Ein String, der den Wert des Attributs enthält, oder `null`, wenn das Element kein Attribut mit dem angegebenen Namen hat.

## Verwendungshinweise

### Dekodierte Zeichenreferenzen in Attributwerten

HTML-{{Glossary("Character_reference", "Zeichenreferenzen")}} im Quell-Markup eines Attributs (zum Beispiel `&lt;`, `&amp;` oder `&#x3C;`) werden vom HTML-Parser dekodiert, wenn das Dokument geparst wird, sodass `getAttribute()` den dekodierten Wert und nicht den ursprünglichen Quellwert zurückgibt.

Gegeben:

```html
<div id="example" data-payload="&lt;b&gt;hi&lt;/b&gt;"></div>
```

ruft `document.getElementById("example").getAttribute("data-payload")` den String `"<b>hi</b>"` zurück.

Es ist unsicher, den Rückgabewert von `getAttribute()` als bereits-escape-HTML zu behandeln. Wenn Sie ein Attribut lesen, das unzuverlässige Daten enthält, und es dann [`innerHTML`](/de/docs/Web/API/Element/innerHTML) zuweisen oder als Markup in das Dokument einfügen, werden alle HTML-Referenzen zur Escape von Sonderzeichen bereits dekodiert, und das Ergebnis kann für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) ausgenutzt werden.

Verwenden Sie [`textContent`](/de/docs/Web/API/Node/textContent) (oder eine andere text-sichere API) für unzuverlässige Daten anstelle von `innerHTML`.

### Abrufen von Nonce-Werten

Aus Sicherheitsgründen sind [CSP](/de/docs/Web/HTTP/Guides/CSP)-Nonces aus Nicht-Skript-Quellen, wie z.B. CSS-Selektoren und `.getAttribute("nonce")`-Aufrufen, verborgen.

```js example-bad
const nonce = script.getAttribute("nonce");
// returns empty string
```

Anstelle des Abrufs der Nonce aus dem Inhaltsattribut verwenden Sie die
[`nonce`](/de/docs/Web/API/HTMLElement/nonce)-Eigenschaft:

```js
const nonce = script.nonce;
```

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
