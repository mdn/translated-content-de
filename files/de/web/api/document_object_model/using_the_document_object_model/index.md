---
title: Verwendung des Document Object Model
slug: Web/API/Document_Object_Model/Using_the_Document_Object_Model
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{DefaultAPISidebar("DOM")}}

Das _Document Object Model_ (DOM) ist eine API zur Manipulation von DOM-Bäumen in HTML- und XML-Dokumenten (sowie anderen baumartigen Dokumenten). Diese API bildet die Grundlage der Seitenbeschreibung und dient als Basis für das Scripting im Web.

## Was ist ein DOM-Baum?

Ein **DOM-Baum** ist eine [Baumstruktur](https://en.wikipedia.org/wiki/Tree_structure), deren Knoten die Inhalte eines HTML- oder XML-Dokuments repräsentieren. Jedes HTML- oder XML-Dokument hat eine DOM-Baum-Darstellung. Betrachten Sie zum Beispiel das folgende Dokument:

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

Es hat einen DOM-Baum, der so aussieht:

![Der DOM als baumartige Darstellung eines Dokuments mit einer Wurzel und Knoten, die Inhalte enthalten](using_the_w3c_dom_level_1_core-doctree.jpg)

Obwohl der obige Baum dem DOM-Baum des obigen Dokuments ähnlich ist, sind sie nicht identisch, da der tatsächliche DOM-Baum [Leerzeichen](/de/docs/Web/CSS/CSS_text/Whitespace) beibehält.

Wenn ein Webbrowser ein HTML-Dokument parst, erstellt er einen DOM-Baum und verwendet ihn dann, um das Dokument anzuzeigen.

## Was macht die Document API?

Die Document API, manchmal auch als DOM API bezeichnet, ermöglicht es Ihnen, einen DOM-Baum in _beliebiger Weise_ zu ändern. Sie ermöglicht es Ihnen, jedes HTML- oder XML-Dokument von Grund auf neu zu erstellen oder beliebige Inhalte eines gegebenen HTML- oder XML-Dokuments zu ändern. Webseitenautoren können das DOM eines Dokuments mithilfe von JavaScript bearbeiten, indem sie auf die `document`-Eigenschaft des globalen Objekts zugreifen. Dieses `document`-Objekt implementiert die [`Document`](/de/docs/Web/API/Document)-Schnittstelle.

## Lesen und Ändern des Baums

Angenommen, der Autor möchte die Kopfzeile des obigen Dokuments ändern und zwei Absätze anstelle eines schreiben. Das folgende Skript würde dies erledigen:

### HTML

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <input type="button" value="Change this document." />
    <h2>Header</h2>
    <p>Paragraph</p>
  </body>
</html>
```

### JavaScript

```js
document.querySelector("input").addEventListener("click", () => {
  // document.getElementsByTagName("h2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:
  const header = document.getElementsByTagName("h2").item(0);

  // The firstChild of the header is a Text node:
  header.firstChild.data = "A dynamic document";

  // Now header is "A dynamic document".

  // Access the first paragraph
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // Create a new Text node for the second paragraph
  const newText = document.createTextNode("This is the second paragraph.");

  // Create a new Element to be the second paragraph
  const newElement = document.createElement("p");

  // Put the text in the paragraph
  newElement.appendChild(newText);

  // Put the paragraph on the end of the document by appending it to
  // the body (which is the parent of para)
  para.parentNode.appendChild(newElement);
});
```

{{ EmbedLiveSample('reading_and_modifying_the_tree', 800, 300) }}

## Einen Baum erstellen

Sie können auch den obigen Baum vollständig in JavaScript erstellen.

```js
const root = document.createElement("html");
root.lang = "en";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);
```

## Wie kann ich mehr lernen?

Da Sie jetzt mit den grundlegenden Konzepten des DOM vertraut sind, möchten Sie möglicherweise mehr über die grundlegenden Funktionen der Document API erfahren, indem Sie [die Anleitung zum Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces) lesen.

## Siehe auch

- Das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM).
