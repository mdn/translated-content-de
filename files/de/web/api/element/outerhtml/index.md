---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}}

Das **`outerHTML`**-Attribut der [`Element`](/de/docs/Web/API/Element)-DOM-Schnittstelle erhält das serialisierte HTML-Fragment, das das Element einschließlich seiner Nachkommen beschreibt. Es kann auch gesetzt werden, um das Element mit Knoten aus dem angegebenen String zu ersetzen.

Um nur die HTML-Darstellung der Inhalte eines Elements zu erhalten oder um den Inhalt eines Elements zu ersetzen, verwenden Sie stattdessen die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft.

## Wert

Das Lesen des Werts von `outerHTML` gibt einen String zurück, der eine HTML-Serialisierung des `Elements` und seiner Nachkommen enthält. Das Setzen des Werts von `outerHTML` ersetzt das Element und alle seine Nachkommen durch einen neuen DOM-Baum, der durch das Parsen des angegebenen `htmlString` erstellt wird.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.outerHTML = null` gleichbedeutend ist mit `elt.outerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` mit einem ungültigen HTML-String zu setzen.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` auf einem Element zu setzen, das ein direktes Kind eines [`Document`](/de/docs/Web/API/Document) ist, wie z.B. [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).

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

Wenn das Element keinen übergeordneten Knoten hat, ändert das Setzen seiner `outerHTML`-Eigenschaft weder dieses noch seine Nachkommen. Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Außerdem, während das Element im Dokument ersetzt wird, hält die Variable, deren `outerHTML`-Eigenschaft gesetzt wurde, weiterhin eine Referenz auf das ursprüngliche Element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

Der zurückgegebene Wert enthält HTML-escapete Attribute:

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
