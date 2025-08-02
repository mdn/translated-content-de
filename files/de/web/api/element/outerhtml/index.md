---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{APIRef("DOM")}}

Das **`outerHTML`**-Attribut der [`Element`](/de/docs/Web/API/Element)
DOM-Schnittstelle erhält das serialisierte HTML-Fragment, das das Element einschließlich seiner Nachkommen beschreibt.
Es kann auch gesetzt werden, um das Element mit Knoten zu ersetzen, die aus dem angegebenen String geparst werden.

Um nur die HTML-Repräsentation der Inhalte eines Elements zu erhalten oder die Inhalte eines Elements zu ersetzen, verwenden Sie stattdessen die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies ist, um eine potenzielle Sicherheitslücke zu verhindern ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)), bei der ein Angreifer Eingaben erstellen kann, die eine [Sanisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen können, was einen Cross-Site-Scripting-(XSS)-Angriff ermöglicht.

## Wert

Das Lesen des Werts von `outerHTML` gibt einen String zurück, der eine HTML-Serialisierung des `element` und seiner Nachkommen enthält.
Das Setzen des Wertes von `outerHTML` ersetzt das Element und alle seine Nachkommen durch einen neuen DOM-Baum, der durch Parsen des angegebenen `htmlString` konstruiert wird.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `elt.outerHTML = null` äquivalent zu `elt.outerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` mit einem HTML-String zu setzen, der nicht gültig ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` bei einem Element zu setzen, das ein direktes Kind eines [`Document`](/de/docs/Web/API/Document) ist, wie zum Beispiel [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).

## Beispiele

### Den Wert der outerHTML-Eigenschaft eines Elements erhalten

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

Wenn das Element keinen übergeordneten Knoten hat, wird durch Setzen seiner `outerHTML`-Eigenschaft weder das Element noch seine Nachkommen verändert. Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Außerdem, obwohl das Element im Dokument ersetzt wird, hält die Variable, deren `outerHTML`-Eigenschaft gesetzt wurde, weiterhin eine Referenz auf das ursprüngliche Element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

Der zurückgegebene Wert wird HTML-escapete Attribute enthalten:

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

- Serialisierung von DOM-Bäumen in XML-Strings: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- Parsen von XML oder HTML in DOM-Bäume: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
