---
title: Verwendung des Document Object Models
slug: Web/API/Document_Object_Model/Using_the_Document_Object_Model
l10n:
  sourceCommit: 1f44fd905e4acbe867ca945b26a8b06ddb646328
---

{{DefaultAPISidebar("DOM")}}

Das _Document Object Model_ (DOM) ist eine API zur Manipulation von DOM-Bäumen von HTML- und XML-Dokumenten (unter anderen baumartigen Dokumenten). Diese API ist die Grundlage für die Beschreibung einer Seite und dient als Basis für das Scripting im Web.

## Was ist ein DOM-Baum?

Ein **DOM-Baum** ist eine [Baumstruktur](https://en.wikipedia.org/wiki/Tree_structure), deren Knoten den Inhalt eines HTML- oder XML-Dokuments darstellen. Jedes HTML- oder XML-Dokument hat eine DOM-Baum-Darstellung. Betrachten Sie zum Beispiel folgendes Dokument:

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

Es hat einen DOM-Baum, der wie folgt aussieht:

![Der DOM als baumartige Darstellung eines Dokuments, das eine Wurzel und Knotenelemente mit Inhalten hat](using_the_w3c_dom_level_1_core-doctree.jpg)

Obwohl der obige Baum dem DOM-Baum des oben genannten Dokuments ähnelt, ist er nicht identisch, da [der tatsächliche DOM-Baum Leerzeichen bewahrt](/de/docs/Web/API/Document_Object_Model/Whitespace).

Wenn ein Webbrowser ein HTML-Dokument analysiert, erstellt er einen DOM-Baum und verwendet ihn anschließend zur Anzeige des Dokuments.

## Was macht die Document API?

Die Document API, manchmal auch DOM API genannt, ermöglicht es Ihnen, einen DOM-Baum in _beliebiger Weise zu verändern_. Sie erlaubt es Ihnen, jedes HTML- oder XML-Dokument von Grund auf neu zu erstellen oder den Inhalt eines gegebenen HTML- oder XML-Dokuments zu ändern. Autoren von Webseiten können das DOM eines Dokuments mit JavaScript bearbeiten, indem sie auf die `document`-Eigenschaft des globalen Objekts zugreifen. Dieses `document`-Objekt implementiert die {{domxref("Document")}}-Schnittstelle.

## Lesen und Ändern des Baums

Angenommen, der Autor möchte den Header des obigen Dokuments ändern und statt eines Paragraphen zwei schreiben. Das folgende Skript erfüllt diese Aufgabe:

### HTML

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <input type="button" value="Change this document." onclick="change()" />
    <h2>Header</h2>
    <p>Paragraph</p>
  </body>
</html>
```

### JavaScript

```js
function change() {
  // document.getElementsByTagName("h2") gibt eine NodeList der <h2>
  // Elemente im Dokument zurück, und das erste ist Nummer 0:
  const header = document.getElementsByTagName("h2").item(0);

  // Das firstChild des Headers ist ein Textknoten:
  header.firstChild.data = "A dynamic document";

  // Jetzt ist der Header "A dynamic document".

  // Zugriff auf den ersten Paragraphen
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // Erstellen eines neuen Textknotens für den zweiten Absatz
  const newText = document.createTextNode("This is the second paragraph.");

  // Erstellen eines neuen Elements für den zweiten Absatz
  const newElement = document.createElement("p");

  // Den Text in den Paragraphen einfügen
  newElement.appendChild(newText);

  // Den Paragraphen ans Ende des Dokuments anhängen,
  // indem er dem body angehängt wird (welches das übergeordnete Element von para ist)
  para.parentNode.appendChild(newElement);
}
```

{{ EmbedLiveSample('reading_and_modifying_the_tree', 800, 300) }}

## Erstellen eines Baums

Sie können den obigen Baum auch vollständig in JavaScript erstellen.

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

## Wie kann ich mehr erfahren?

Da Sie nun mit den grundlegenden Konzepten des DOM vertraut sind, möchten Sie möglicherweise mehr über die fundamentalen Funktionen der Document API erfahren, indem Sie [lernen, wie man eine HTML-Tabelle mit JavaScript und DOM-Schnittstellen durchläuft](/de/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces).

## Siehe auch

- Das [Document Object Model](/de/docs/Web/API/Document_Object_Model) (DOM).
