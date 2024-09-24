---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}}

Das **`outerHTML`**-Attribut der {{ domxref("Element") }}
DOM-Schnittstelle erhält das serialisierte HTML-Fragment, das das Element einschließlich seiner
Nachkommen beschreibt. Es kann auch gesetzt werden, um das Element durch Knoten zu ersetzen, die aus der angegebenen Zeichenkette geparst werden.

Um nur die HTML-Darstellung der Inhalte eines Elements zu erhalten oder um die
Inhalte eines Elements zu ersetzen, verwenden Sie stattdessen die {{domxref("Element.innerHTML", "innerHTML")}}-Eigenschaft.

## Wert

Das Auslesen des Wertes von `outerHTML` gibt eine Zeichenkette zurück,
die eine HTML-Serialisierung des `element` und seiner Nachkommen enthält.
Das Setzen des Wertes von `outerHTML` ersetzt das Element und all seine
Nachkommen durch einen neuen DOM-Baum, der durch Parsen des angegebenen
`htmlString` erstellt wird.

Wenn der Wert `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.outerHTML = null` gleichbedeutend mit `elt.outerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Versuch unternommen wurde, `outerHTML` mit einem HTML-String zu setzen, der nicht
    gültig ist.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Versuch unternommen wurde, `outerHTML` auf einem Element zu setzen, das ein direktes
    Kind eines {{domxref("Document")}} ist, wie z.B. {{domxref("Document.documentElement")}}.

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

// Die Zeichenkette '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
// wird im Konsolenfenster ausgegeben
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

console.log(container.firstElementChild.nodeName); // protokolliert "DIV"

d.outerHTML = "<p>This paragraph replaced the original div.</p>";

console.log(container.firstElementChild.nodeName); // protokolliert "P"

// Das #d-div ist nicht mehr Teil des Dokumentbaums,
// der neue Absatz hat es ersetzt.
```

## Anmerkungen

Wenn das Element keinen übergeordneten Knoten hat, wird das Setzen seiner `outerHTML`-Eigenschaft es
oder seine Nachkommen nicht ändern. Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // Ausgabe: "<div></div>"
```

Außerdem, während das Element im Dokument ersetzt wird, wird die Variable, deren
`outerHTML`-Eigenschaft gesetzt wurde, weiterhin eine Referenz auf das ursprüngliche
Element halten:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // zeigt: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // immer noch "P";
```

Der zurückgegebene Wert wird HTML-escaped Attribute enthalten:

```js
const anc = document.createElement("a");
anc.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anc.outerHTML); // Ausgabe: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Serialisieren von DOM-Bäumen in XML-Zeichenketten: {{domxref("XMLSerializer")}}
- Parsen von XML oder HTML in DOM-Bäume: {{domxref("DOMParser")}}
- {{domxref("HTMLElement.outerText")}}
