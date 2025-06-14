---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: aebeb771add7275369094687b4925e6dbd5bf7b5
---

{{APIRef("DOM")}}

Das **`outerHTML`**-Attribut der [`Element`](/de/docs/Web/API/Element)
DOM-Schnittstelle erhält das serialisierte HTML-Fragment, das das Element einschließlich seiner Nachkommen beschreibt.
Es kann auch gesetzt werden, um das Element mit aus dem angegebenen String geparsten Knoten zu ersetzen.

Um nur die HTML-Darstellung der Inhalte eines Elements zu erhalten oder die Inhalte eines Elements zu ersetzen, verwenden Sie stattdessen die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten auftreten (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke zu verhindern ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)), bei der ein Angreifer eine Eingabe erstellen kann, die eine [Sanisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgeht und so einen Cross-Site-Scripting (XSS) Angriff ermöglicht.

## Wert

Das Lesen des Wertes von `outerHTML` gibt einen String zurück, der eine HTML-Serialisierung des `element` und seiner Nachkommen enthält.
Das Setzen des Wertes von `outerHTML` ersetzt das Element und alle seine Nachkommen mit einem neuen DOM-Baum, der durch das Parsen des angegebenen `htmlString` konstruiert wurde.

Wenn auf den Wert `null` gesetzt, wird dieser `null` Wert in den leeren String (`""`) umgewandelt, sodass `elt.outerHTML = null` dem entspricht `elt.outerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, `outerHTML` mit einem HTML-String zu setzen, der nicht gültig ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, `outerHTML` auf einem Element zu setzen, das ein direkter Nachkomme eines [`Document`](/de/docs/Web/API/Document) ist, wie zum Beispiel [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).

## Beispiele

### Den Wert der outerHTML-Eigenschaft eines Elements abrufen

#### HTML

```html
<div id="d">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

#### JavaScript

```js
const d = document.getElementById("d");
console.log(d.outerHTML);

// The string '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
// is written to the console window
```

### Ersetzen eines Knotens durch Setzen der outerHTML-Eigenschaft

#### HTML

```html
<div id="container">
  <div id="d">This is a div.</div>
</div>
```

#### JavaScript

```js
const container = document.getElementById("container");
const d = document.getElementById("d");

console.log(container.firstElementChild.nodeName); // logs "DIV"

d.outerHTML = "<p>This paragraph replaced the original div.</p>";

console.log(container.firstElementChild.nodeName); // logs "P"

// The #d div is no longer part of the document tree,
// the new paragraph replaced it.
```

## Hinweise

Wenn das Element keinen Elternknoten hat, ändert das Setzen seiner `outerHTML`-Eigenschaft weder das Element noch seine Nachkommen. Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Zudem wird das Element zwar im Dokument ersetzt, aber die Variable, deren
`outerHTML`-Eigenschaft gesetzt wurde, hält weiterhin den Verweis auf das ursprüngliche
Element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

Der zurückgegebene Wert wird Eigenschaften mit HTML-Escapes enthalten:

```js
const anc = document.createElement("a");
anc.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anc.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Serialisieren von DOM-Bäumen in XML-Strings: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- Parsen von XML oder HTML in DOM-Bäume: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
