---
title: Verwendung des Document Object Model
slug: Web/API/Document_Object_Model/Using_the_Document_Object_Model
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{DefaultAPISidebar("DOM")}}

Das _Document Object Model_ (DOM) ist eine API zur Manipulation von DOM-Bäumen in HTML- und XML-Dokumenten (neben anderen baumartigen Dokumenten). Diese API bildet die Grundlage für die Beschreibung einer Seite und dient als Basis für Skripting im Web.

## Was ist ein DOM-Baum?

Ein **DOM-Baum** ist eine [Baumstruktur](https://en.wikipedia.org/wiki/Tree_structure), deren Knoten den Inhalt eines HTML- oder XML-Dokuments darstellen. Jedes HTML- oder XML-Dokument hat eine DOM-Baum-Darstellung. Betrachten Sie zum Beispiel das folgende Dokument:

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

![Das DOM als baumartige Darstellung eines Dokuments, das eine Wurzel und Knotenelemente mit Inhalt hat](using_the_w3c_dom_level_1_core-doctree.jpg)

Obwohl der oben gezeigte Baum dem DOM-Baum des Dokuments ähnlich ist, ist er nicht identisch, da [der tatsächliche DOM-Baum Leerzeichen beibehält](/de/docs/Web/API/Document_Object_Model/Whitespace).

Wenn ein Webbrowser ein HTML-Dokument parst, erstellt er einen DOM-Baum und verwendet diesen dann, um das Dokument anzuzeigen.

## Was macht die Document API?

Die Document API, auch manchmal DOM API genannt, ermöglicht es Ihnen, einen DOM-Baum _nach Belieben_ zu ändern. Sie ermöglicht es, jedes HTML- oder XML-Dokument von Grund auf neu zu erstellen oder den Inhalt eines vorhandenen HTML- oder XML-Dokuments zu ändern. Webseitenautoren können das DOM eines Dokuments bearbeiten, indem sie JavaScript verwenden, um auf die `document`-Eigenschaft des globalen Objekts zuzugreifen. Dieses `document`-Objekt implementiert die [`Document`](/de/docs/Web/API/Document)-Schnittstelle.

## Lesen und Ändern des Baums

Angenommen, der Autor möchte die Überschrift des oben genannten Dokuments ändern und zwei Absätze statt eines schreiben. Das folgende Skript würde die Aufgabe erledigen:

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

Sie können den oben gezeigten Baum auch vollständig in JavaScript erstellen.

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

Jetzt, da Sie mit den grundlegenden Konzepten des DOM vertraut sind, möchten Sie möglicherweise mehr über die grundlegenden Funktionen der Document API erfahren, indem Sie die [Anleitung zum Durchlaufen einer HTML-Tabelle mit JavaScript und DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces) lesen.

## Siehe auch

- Das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM).
