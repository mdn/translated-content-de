---
title: Document Object Model (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: ca1468a4faabb0d62b0f08a723281a79dd8ceaf5
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (**DOM**) verbindet Webseiten mit Skripten oder Programmiersprachen, indem es die Struktur eines Dokuments – etwa das HTML einer Webseite – im Speicher abbildet. Meist bezieht sich dies auf JavaScript, obwohl die Abbildung von HTML-, SVG- oder XML-Dokumenten als Objekte nicht zur JavaScript-Kernsprache gehört.

Das DOM stellt ein Dokument als logischen Baum dar. Jeder Zweig des Baums endet an einem Knoten, und jeder Knoten enthält Objekte. DOM-Methoden ermöglichen den programmatischen Zugriff auf den Baum. Mit ihnen können Sie die Struktur, das Erscheinungsbild oder den Inhalt des Dokuments ändern.

An Knoten können auch Event-Handler gebunden sein. Wenn ein Ereignis ausgelöst wird, werden die Event-Handler ausgeführt.

## Konzepte und Verwendung

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente.
Es stellt die Seite so dar, dass Programme die Struktur, das Erscheinungsbild und den Inhalt des Dokuments ändern können.
Das DOM stellt das Dokument als Knoten und Objekte dar;
so können Programmiersprachen mit der Seite interagieren.

Eine Webseite ist ein Dokument, das entweder im Browserfenster oder als HTML-Quelltext angezeigt werden kann. In beiden Fällen handelt es sich um dasselbe Dokument, doch die Darstellung durch das Document Object Model (DOM) ermöglicht es, das Dokument zu verändern. Als objektorientierte Darstellung der Webseite lässt sie sich mit einer Skriptsprache wie JavaScript bearbeiten.

Beispielsweise legt das DOM fest, dass die Methode `querySelectorAll` im folgenden Codeausschnitt eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, mit denen Webseiten verändert und erstellt werden können, sind in Objekten organisiert. Dazu gehören beispielsweise das `document`-Objekt, das das Dokument selbst darstellt, sowie alle `table`-Objekte, die die DOM-Schnittstelle [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für den Zugriff auf HTML-Tabellen implementieren.

Das DOM wird aus mehreren APIs aufgebaut, die zusammenarbeiten.
Das Kern-DOM definiert die Entitäten, die ein beliebiges Dokument und die darin enthaltenen Objekte beschreiben.
Andere APIs erweitern es bei Bedarf um neue Funktionen und Möglichkeiten.
Beispielsweise ergänzt die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) das Kern-DOM um die Darstellung von HTML-Dokumenten,
während die SVG API die Darstellung von SVG-Dokumenten ermöglicht.

### Was ist ein DOM-Baum?

Ein **DOM-Baum** ist eine [Baumstruktur](https://en.wikipedia.org/wiki/Tree_structure), deren Knoten den Inhalt eines HTML- oder XML-Dokuments darstellen. Jedes HTML- oder XML-Dokument hat eine Darstellung als DOM-Baum. Betrachten Sie beispielsweise das folgende Dokument:

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

Sein DOM-Baum sieht so aus:

![Das DOM als baumartige Darstellung eines Dokuments mit einer Wurzel und Knoten, die Inhalt enthalten](example-dom-tree.svg)

Obwohl der abgebildete Baum dem DOM-Baum des Dokuments ähnelt, sind beide nicht identisch: Der tatsächliche DOM-Baum bewahrt [Leerraum](/de/docs/Web/CSS/Guides/Text/Whitespace).

Wenn ein Webbrowser ein HTML-Dokument parst, erstellt er einen DOM-Baum und verwendet ihn anschließend, um das Dokument anzuzeigen.

### DOM und JavaScript

Das vorangegangene kurze Beispiel ist, wie fast alle Beispiele, {{Glossary("JavaScript", "JavaScript")}}. Es ist also in JavaScript _geschrieben_, _verwendet_ aber das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache. Ohne das DOM hätte JavaScript jedoch kein Modell und keine Vorstellung von Webseiten, HTML-Dokumenten, SVG-Dokumenten und deren Bestandteilen. Das gesamte Dokument, der Kopfbereich, Tabellen im Dokument, Tabellenüberschriften, Text in Tabellenzellen und alle anderen Elemente eines Dokuments sind Teile des Document Object Models dieses Dokuments. Auf sie alle kann mithilfe des DOM und einer Skriptsprache wie JavaScript zugegriffen werden; ebenso lassen sie sich damit verändern.

Das DOM ist nicht Teil der JavaScript-Sprache,
sondern eine Web-API, die zur Erstellung von Websites verwendet wird.
JavaScript kann auch in anderen Umgebungen eingesetzt werden.
Beispielsweise führt Node.js JavaScript-Programme auf einem Computer aus,
stellt aber andere APIs bereit;
die DOM API gehört nicht zum Kern der Node.js-Laufzeitumgebung.

Das DOM wurde so entworfen, dass es von einer bestimmten Programmiersprache unabhängig ist und die strukturelle Darstellung eines Dokuments über eine einheitliche API zugänglich macht.
Auch wenn die meisten Webentwickler das DOM nur über JavaScript verwenden, können Implementierungen des DOM für jede Sprache erstellt werden, wie dieses Python-Beispiel zeigt:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

Weitere Informationen zu den Technologien, die beim Schreiben von JavaScript für das Web eine Rolle spielen, finden Sie in der [Übersicht über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### Auf das DOM zugreifen

Sie müssen nichts Besonderes tun, um das DOM zu verwenden.
Sie nutzen die API direkt in JavaScript innerhalb eines sogenannten _Skripts_, eines Programms, das von einem Browser ausgeführt wird.

Wenn Sie ein Skript erstellen – ob direkt in einem `<script>`-Element oder anderweitig in die Webseite eingebunden –, können Sie sofort die APIs der Objekte [`document`](/de/docs/Web/API/Document) und [`window`](/de/docs/Web/API/Window) verwenden, um das Dokument selbst oder eines der verschiedenen Elemente auf der Webseite (die Nachfahren des Dokuments) zu verändern. Ihre DOM-Programmierung kann so einfach sein wie das folgende Beispiel, das mit der Funktion [`console.log()`](/de/docs/Web/API/console/log_static) eine Meldung in der Konsole ausgibt:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es im Allgemeinen nicht empfohlen wird, die Struktur der Seite (in HTML geschrieben)
mit der Bearbeitung des DOM (in JavaScript geschrieben) zu vermischen,
werden die JavaScript-Teile hier zusammengefasst
und vom HTML getrennt.

Die folgende Funktion erstellt beispielsweise ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element,
fügt diesem Element Text hinzu
und hängt es anschließend in den Baum des Dokuments ein:

```html
<html lang="en">
  <head> </head>
  <body>
    <script>
      // create a couple of elements in an otherwise empty HTML page
      const heading = document.createElement("h1");
      const headingText = document.createTextNode("Big Head!");
      heading.appendChild(headingText);
      document.body.appendChild(heading);
    </script>
  </body>
</html>
```

## DOM-Schnittstellen

Die folgenden Schnittstellen sind in der DOM-Spezifikation definiert:

- [`AbortController`](/de/docs/Web/API/AbortController)
- [`AbortSignal`](/de/docs/Web/API/AbortSignal)
- [`AbstractRange`](/de/docs/Web/API/AbstractRange)
- [`Attr`](/de/docs/Web/API/Attr)
- [`CDATASection`](/de/docs/Web/API/CDATASection)
- [`CharacterData`](/de/docs/Web/API/CharacterData)
- [`Comment`](/de/docs/Web/API/Comment)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`Document`](/de/docs/Web/API/Document)
- [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)
- [`DocumentType`](/de/docs/Web/API/DocumentType)
- [`DOMError`](/de/docs/Web/API/DOMError) {{Deprecated_Inline}}
- [`DOMException`](/de/docs/Web/API/DOMException)
- [`DOMImplementation`](/de/docs/Web/API/DOMImplementation)
- [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)
- [`Element`](/de/docs/Web/API/Element)
- [`Event`](/de/docs/Web/API/Event)
- [`EventTarget`](/de/docs/Web/API/EventTarget)
- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
- [`MutationObserver`](/de/docs/Web/API/MutationObserver)
- [`MutationRecord`](/de/docs/Web/API/MutationRecord)
- [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeIterator`](/de/docs/Web/API/NodeIterator)
- [`NodeList`](/de/docs/Web/API/NodeList)
- [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
- [`Range`](/de/docs/Web/API/Range)
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- [`StaticRange`](/de/docs/Web/API/StaticRange)
- [`Text`](/de/docs/Web/API/Text)
- [`TreeWalker`](/de/docs/Web/API/TreeWalker)
- [`XMLDocument`](/de/docs/Web/API/XMLDocument)
- [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
- [`XPathResult`](/de/docs/Web/API/XPathResult)
- [`XSLTProcessor`](/de/docs/Web/API/XSLTProcessor)

Dieser Leitfaden behandelt die Objekte und die konkreten _Dinge_, mit denen Sie die DOM-Hierarchie verändern können. Dabei kann es an vielen Stellen schwierig sein zu verstehen, wie sie funktionieren. Beispielsweise erhält das Objekt, das ein HTML-`form`-Element darstellt, seine Eigenschaft `name` von der Schnittstelle `HTMLFormElement`, seine Eigenschaft `className` jedoch von der Schnittstelle `HTMLElement`. In beiden Fällen befindet sich die gewünschte Eigenschaft im selben Formularobjekt.

Die Beziehung zwischen Objekten und den DOM-Schnittstellen, die sie implementieren, kann jedoch verwirrend sein. Deshalb erläutert dieser Abschnitt kurz die Schnittstellen der DOM-Spezifikation und wie sie verfügbar gemacht werden.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere Schnittstellen. Das Tabellenobjekt implementiert beispielsweise die spezialisierte Schnittstelle [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement), zu der Methoden wie `createCaption` und `insertRow` gehören. Da es zugleich ein HTML-Element ist, implementiert `table` auch die Schnittstelle `Element`, die im Referenzkapitel zu DOM [`Element`](/de/docs/Web/API/Element) beschrieben wird. Und da ein HTML-Element aus Sicht des DOM auch ein Knoten in dem Knotenbaum ist, der das Objektmodell einer HTML- oder XML-Seite bildet, implementiert das Tabellenobjekt außerdem die allgemeinere Schnittstelle `Node`, von der `Element` abgeleitet ist.

Wenn Sie wie im folgenden Beispiel eine Referenz auf ein `table`-Objekt erhalten, verwenden Sie am selben Objekt gewöhnlich alle drei Schnittstellen – möglicherweise ohne es zu wissen.

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element interface
for (const attr of tableAttrs) {
  // HTMLTableElement interface: border attribute
  if (attr.nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

### Grundlegende Datentypen

Diese Seite versucht, die verschiedenen Objekte und Typen einfach zu beschreiben. In der API werden jedoch einige unterschiedliche Datentypen verwendet, die Sie kennen sollten.

> [!NOTE]
> Da es bei der überwiegenden Mehrheit des Codes, der das DOM verwendet, um die Bearbeitung von HTML-Dokumenten geht, werden Knoten im DOM häufig als **Elemente** bezeichnet, obwohl genau genommen nicht jeder Knoten ein Element ist.

Die folgende Tabelle beschreibt diese Datentypen kurz.

<table class="standard-table">
  <thead>
    <tr>
      <th>Datentyp (Schnittstelle)</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`Document`](/de/docs/Web/API/Document)</td>
      <td>
        Wenn ein Member ein Objekt vom Typ <code>document</code> zurückgibt
        (beispielsweise gibt die Eigenschaft <code>ownerDocument</code> eines
        Elements das <code>document</code> zurück, zu dem es gehört), ist
        dieses Objekt das <code>document</code>-Wurzelobjekt selbst. Das
        Referenzkapitel zu <a href="/de/docs/Web/API/Document">DOM <code>document</code></a>
        beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>[`Node`](/de/docs/Web/API/Node)</td>
      <td>
        Jedes Objekt innerhalb eines Dokuments ist ein Knoten irgendeiner Art.
        In einem HTML-Dokument kann ein Objekt ein Elementknoten, aber auch ein
        Text- oder Attributknoten sein.
      </td>
    </tr>
    <tr>
      <td>[`Element`](/de/docs/Web/API/Element)</td>
      <td>
        Der Typ <code>element</code> basiert auf <code>node</code>. Er bezeichnet
        ein Element beziehungsweise einen Knoten vom Typ <code>element</code>,
        der von einem Member der DOM API zurückgegeben wird. Statt beispielsweise
        zu sagen, dass die Methode
        [`document.createElement()`](/de/docs/Web/API/Document/createElement)
        eine Objektreferenz auf einen <code>node</code> zurückgibt, sagen wir
        einfach, dass diese Methode das gerade im DOM erstellte
        <code>element</code> zurückgibt. <code>element</code>-Objekte
        implementieren die DOM-Schnittstelle <code>Element</code> und auch die
        allgemeinere Schnittstelle <code>Node</code>; beide werden in dieser
        Referenz behandelt. In einem HTML-Dokument werden Elemente zusätzlich
        durch die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)
        der HTML DOM API sowie durch weitere Schnittstellen erweitert, die die
        Fähigkeiten bestimmter Elementarten beschreiben (beispielsweise
        [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für
        {{HTMLElement("table")}}-Elemente).
      </td>
    </tr>
    <tr>
      <td>[`Attr`](/de/docs/Web/API/Attr)</td>
      <td>
        Wenn ein <code>attribute</code> von einem Member zurückgegeben wird
        (beispielsweise von der Methode <code>createAttribute()</code>),
        handelt es sich um eine Objektreferenz, die eine spezielle, wenn auch
        kleine Schnittstelle für Attribute bereitstellt. Attribute sind ebenso
        wie Elemente Knoten im DOM, auch wenn Sie sie nur selten als solche
        verwenden werden.
      </td>
    </tr>
  </tbody>
</table>

Auch einige gebräuchliche Bezeichnungen sind zu beachten. Beispielsweise wird jeder [`Attr`](/de/docs/Web/API/Attr)-Knoten häufig als `attribute` und ein Array von DOM-Knoten als `nodeList` bezeichnet. Diese und weitere Begriffe werden im Verlauf der Dokumentation eingeführt und verwendet.

Die Objekte `document` und `window` sind diejenigen, deren Schnittstellen Sie bei der DOM-Programmierung normalerweise am häufigsten verwenden. Vereinfacht gesagt stellt das `window`-Objekt etwas wie den Browser dar, während das `document`-Objekt die Wurzel des Dokuments selbst ist. `Element` erbt von der allgemeinen Schnittstelle `Node`. Zusammen stellen diese beiden Schnittstellen viele der Methoden und Eigenschaften bereit, die Sie bei einzelnen Elementen verwenden. Solche Elemente können außerdem spezielle Schnittstellen für die Art von Daten besitzen, die sie enthalten – wie beim `table`-Objekt im vorangegangenen Abschnitt.

### Veraltete DOM-Schnittstellen

Das Document Object Model wurde stark vereinfacht. Dazu wurden die folgenden Schnittstellen aus den verschiedenen Spezifikationen für DOM Level 3 oder früher entfernt. Sie stehen Webentwicklern nicht mehr zur Verfügung.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

Ein Dokument, das HTML enthält, wird durch die Schnittstelle [`Document`](/de/docs/Web/API/Document) beschrieben. Die HTML-Spezifikation erweitert diese um verschiedene HTML-spezifische Funktionen. Insbesondere wird die Schnittstelle [`Element`](/de/docs/Web/API/Element) zu [`HTMLElement`](/de/docs/Web/API/HTMLElement) und verschiedenen Unterklassen erweitert, die jeweils ein Element oder eine Gruppe eng verwandter Elemente darstellen.

Die HTML DOM API ermöglicht den Zugriff auf verschiedene Browserfunktionen wie Tabs und Fenster, CSS-Stile und Stylesheets sowie den Browserverlauf. Diese Schnittstellen werden in der Dokumentation zur [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) näher erläutert.

## SVG DOM

Entsprechend wird auch ein Dokument, das SVG enthält, durch die Schnittstelle [`Document`](/de/docs/Web/API/Document) beschrieben. Die SVG-Spezifikation erweitert diese um verschiedene SVG-spezifische Funktionen. Insbesondere wird die Schnittstelle [`Element`](/de/docs/Web/API/Element) zu [`SVGElement`](/de/docs/Web/API/SVGElement) und verschiedenen Unterklassen erweitert, die jeweils ein Element oder eine Gruppe eng verwandter Elemente darstellen. Diese Schnittstellen werden in der Dokumentation zur [SVG API](/de/docs/Web/API/SVG_API) näher erläutert.

## Beispiele

### Textinhalt festlegen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("textarea")}}-Element und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, fügen wir Text in das `<textarea>` ein. Wenn er auf den zweiten Button klickt, löschen wir den Text. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<textarea>` und den Button zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Klicks auf die Buttons zu reagieren
- [`Node.textContent`](/de/docs/Web/API/Node/textContent), um den Text festzulegen und zu löschen.

#### HTML

```html
<div class="container">
  <textarea class="story"></textarea>
  <button id="set-text" type="button">Set text content</button>
  <button id="clear-text" type="button">Clear text content</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 200px;
}
```

#### JavaScript

```js
const story = document.querySelector(".story");

const setText = document.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### Ergebnis

{{EmbedLiveSample("Setting text content", "", "150px")}}

### Ein Kindelement hinzufügen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein weiteres {{HTMLElement("div")}}-Element und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, erstellen wir ein neues Element und fügen es als Kindelement des `<div>` hinzu. Wenn er auf den zweiten Button klickt, entfernen wir das Kindelement. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<div>` und die Buttons zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Klicks auf die Buttons zu reagieren
- [`Document.createElement`](/de/docs/Web/API/Document/createElement), um das Element zu erstellen
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das Kindelement hinzuzufügen
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), um das Kindelement zu entfernen.

#### HTML

```html
<div class="container">
  <div class="parent">parent</div>
  <button id="add-child" type="button">Add a child</button>
  <button id="remove-child" type="button">Remove child</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 100px;
}

div.parent {
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  height: 100px;
}

div.child {
  border: 1px solid red;
  margin: 10px;
  padding: 5px;
  width: 80px;
  height: 60px;
  box-sizing: border-box;
}
```

#### JavaScript

```js
const parent = document.querySelector(".parent");

const addChild = document.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // Only add a child if we don't already have one
  // in addition to the text node "parent"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChild = document.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.querySelector(".child");
  parent.removeChild(child);
});
```

#### Ergebnis

{{EmbedLiveSample("Adding a child element", "", "180px")}}

### Den Baum lesen und verändern

Angenommen, der Autor möchte die Überschrift des Dokuments unter [Was ist ein DOM-Baum?](#what_is_a_dom_tree) ändern und statt eines Absatzes zwei schreiben. Das folgende Skript erledigt dies:

#### HTML

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

#### JavaScript

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

### Einen Baum erstellen

Sie können den Baum unter [Was ist ein DOM-Baum?](#what_is_a_dom_tree) auch vollständig in JavaScript erstellen.

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

### Ereignisweitergabe

Dieses Beispiel zeigt auf sehr einfache Weise, wie Ereignisse im DOM ausgelöst und verarbeitet werden. Wenn das BODY-Element dieses HTML-Dokuments geladen wird, wird für die oberste Zeile der TABLE ein Event-Listener registriert. Der Event-Listener verarbeitet das Ereignis, indem er die Funktion stopEvent ausführt, die den Wert in der untersten Zelle der Tabelle ändert.

stopEvent ruft außerdem die Methode [`event.stopPropagation`](/de/docs/Web/API/Event/stopPropagation) des Ereignisobjekts auf. Dadurch wird verhindert, dass das Ereignis im DOM weiter nach oben weitergegeben wird. Beachten Sie, dass die Tabelle selbst einen [`onclick`](/de/docs/Web/API/Element/click_event)-Event-Handler besitzt, der beim Klicken auf die Tabelle eine Meldung anzeigen sollte. Die Methode stopEvent hat die Weitergabe jedoch gestoppt. Nachdem die Daten in der Tabelle aktualisiert wurden, ist die Ereignisverarbeitung damit praktisch beendet, und zur Bestätigung wird ein Hinweisfenster angezeigt.

```html
<table id="t-daddy">
  <tbody>
    <tr id="tbl1">
      <td id="c1">one</td>
    </tr>
    <tr>
      <td id="c2">two</td>
    </tr>
  </tbody>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "hello";

  // this ought to keep t-daddy from getting the click.
  event.stopPropagation();
  console.log("event propagation halted.");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("t-daddy clicked");
});
```

{{EmbedLiveSample("Event propagation", "", "300")}}

### Eigenschaften eines Ereignisobjekts anzeigen

Dieses Beispiel verwendet DOM-Methoden, um alle Eigenschaften des Ereignisobjekts [`click`](/de/docs/Web/API/Element/click_event) und ihre Werte in einer Tabelle anzuzeigen. Es zeigt außerdem eine nützliche Technik: Mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife können Sie über die Eigenschaften eines Objekts iterieren und ihre Werte abrufen.

Die Eigenschaften von Ereignisobjekten unterscheiden sich stark zwischen Browsern. Der [WHATWG-DOM-Standard](https://dom.spec.whatwg.org/) führt die Standardeigenschaften auf; viele Browser haben diese jedoch erheblich erweitert.

Fügen Sie den folgenden Code in eine leere Textdatei ein und laden Sie diese in verschiedenen Browsern. Die Unterschiede bei Anzahl und Namen der Eigenschaften werden Sie möglicherweise überraschen. Sie können der Seite auch einige Elemente hinzufügen und diese Funktion über verschiedene Event-Handler aufrufen.

```html
<h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
```

```css
table {
  border-collapse: collapse;
  margin-top: 2em;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: white;
}
```

```js
function showEventProperties(event) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  document.getElementById("eventType").textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "Property", "Value"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const p in event) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, event[p]);
  }

  document.body.appendChild(table);
}

window.addEventListener("click", showEventProperties);
```

{{EmbedLiveSample("Displaying event object properties", "", "300")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model)
- [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- [SVG API](/de/docs/Web/API/SVG_API)
