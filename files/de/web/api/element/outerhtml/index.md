---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}}

Das **`outerHTML`**-Attribut des [`Element`](/de/docs/Web/API/Element)
DOM-Interfaces liefert das serialisierte HTML-Fragment, das das Element inklusive seiner
Nachkommen beschreibt. Es kann auch gesetzt werden, um das Element mit aus dem angegebenen
String geparsten Knoten zu ersetzen.

Um nur die HTML-Darstellung des Inhalts eines Elements zu erhalten oder den Inhalt eines Elements zu ersetzen, verwenden Sie stattdessen die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft.

## Wert

Das Lesen des Wertes von `outerHTML` gibt einen String zurück,
der eine HTML-Serialisierung des `element` und seiner Nachkommen enthält.
Das Setzen des Wertes von `outerHTML` ersetzt das Element und alle seine
Nachkommen durch einen neuen DOM-Baum, der durch das Parsen des angegebenen
`htmlString` erstellt wird.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, daher ist `elt.outerHTML = null` äquivalent zu `elt.outerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, `outerHTML` mit einem HTML-String zu setzen, der nicht
    gültig ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, `outerHTML` auf einem Element zu setzen, welches ein direktes
    Kind eines [`Document`](/de/docs/Web/API/Document) ist, wie zum Beispiel [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).

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

Wenn das Element keinen übergeordneten Knoten hat, wird das Setzen seiner `outerHTML`-Eigenschaft es
oder seine Nachkommen nicht ändern. Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Auch wenn das Element im Dokument ersetzt wird, wird die Variable, deren
`outerHTML`-Eigenschaft gesetzt wurde, weiterhin eine Referenz auf das ursprüngliche
Element halten:

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

- Serialisieren von DOM-Bäumen in XML-Strings: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- Parsen von XML oder HTML in DOM-Bäume: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
