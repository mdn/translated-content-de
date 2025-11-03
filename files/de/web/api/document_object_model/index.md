---
title: Document Object Model (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (**DOM**) verbindet Webseiten mit Skripten oder Programmiersprachen, indem es die Struktur eines Dokuments—wie das HTML, das eine Webseite darstellt—im Speicher abbildet. In der Regel bezieht es sich auf JavaScript, obwohl das Modellieren von HTML-, SVG- oder XML-Dokumenten als Objekte nicht Teil der Kernsprache von JavaScript ist.

Das DOM stellt ein Dokument als logischen Baum dar. Jeder Ast des Baumes endet in einem Knoten, und jeder Knoten enthält Objekte. DOM-Methoden ermöglichen den programmatischen Zugriff auf den Baum. Mit ihnen können Sie die Struktur, das Design oder den Inhalt des Dokuments ändern.

An Knoten können auch Ereignishandler angehängt werden. Sobald ein Ereignis ausgelöst wird, werden die Ereignishandler ausgeführt.

## Konzepte und Verwendung

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente.
Es repräsentiert die Seite, sodass Programme die Struktur, das Design und den Inhalt des Dokuments ändern können.
Das DOM stellt das Dokument als Knoten und Objekte dar;
auf diese Weise können Programmiersprachen mit der Seite interagieren.

Eine Webseite ist ein Dokument, das entweder im Browserfenster angezeigt oder als HTML-Quelle dargestellt werden kann. In beiden Fällen handelt es sich um dasselbe Dokument, aber die Darstellungsform im Document Object Model (DOM) erlaubt Manipulationen. Als objektorientierte Repräsentation der Webseite kann es mit einer Skriptsprache wie JavaScript modifiziert werden.

Zum Beispiel legt das DOM fest, dass die `querySelectorAll`-Methode in diesem Codeschnipsel eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, die zur Manipulation und Erstellung von Webseiten verfügbar sind, sind in Objekten organisiert. Zum Beispiel das `document`-Objekt, das das Dokument selbst darstellt, alle `table`-Objekte, die die [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-DOM-Schnittstelle zur Zugriff auf HTML-Tabellen implementieren, und so weiter, sind alles Objekte.

Das DOM wird aus mehreren APIs aufgebaut, die zusammenarbeiten.
Das Kern-DOM definiert die Entitäten,
die jedes Dokument und die Objekte darin beschreiben.
Dies wird bei Bedarf von anderen APIs erweitert, die dem DOM neue Funktionen und Fähigkeiten hinzufügen.
Zum Beispiel fügt die [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API) dem Kern-DOM Unterstützung für die Darstellung von HTML-Dokumenten hinzu, und die SVG-API fügt Unterstützung für die Darstellung von SVG-Dokumenten hinzu.

### Was ist ein DOM-Baum?

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

![Das DOM als baumartige Darstellung eines Dokuments, das eine Wurzel und Knotenelemente enthält, die Inhalte enthalten](using_the_w3c_dom_level_1_core-doctree.jpg)

Obwohl der obige Baum dem DOM-Baum des obigen Dokuments ähnlich ist, sind sie nicht identisch, da der tatsächliche DOM-Baum [Leerzeichen](/de/docs/Web/CSS/CSS_text/Whitespace) beibehält.

Wenn ein Webbrowser ein HTML-Dokument analysiert, erstellt er einen DOM-Baum und verwendet ihn dann, um das Dokument anzuzeigen.

### DOM und JavaScript

Das vorherige kurze Beispiel, wie fast alle Beispiele, ist {{Glossary("JavaScript", "JavaScript")}}. Das heißt, es ist in JavaScript _geschrieben_, verwendet aber das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache, aber ohne es hätte die JavaScript-Sprache kein Modell oder keine Vorstellung von Webseiten, HTML-Dokumenten, SVG-Dokumenten und ihren Komponenten. Das Dokument als Ganzes, der Kopf, Tabellen im Dokument, Tabellenüberschriften, Text innerhalb der Tabellenzellen und alle anderen Elemente in einem Dokument sind Teile des Dokumentobjektmodells für dieses Dokument. Sie können alle über das DOM und eine Skriptsprache wie JavaScript zugegriffen und manipuliert werden.

Das DOM ist nicht Teil der JavaScript-Sprache,
sondern eine Web-API zur Erstellung von Websites.
JavaScript kann auch in anderen Kontexten verwendet werden.
Zum Beispiel führt Node.js JavaScript-Programme auf einem Computer aus,
bietet jedoch einen anderen Satz von APIs,
und die DOM-API ist kein Kernbestandteil der Node.js-Laufzeitumgebung.

Das DOM wurde entworfen, um unabhängig von jeder bestimmten Programmiersprache zu sein und die strukturelle Darstellung des Dokuments über eine einzige, konsistente API verfügbar zu machen.
Auch wenn die meisten Webentwickler das DOM nur über JavaScript verwenden, können Implementierungen des DOM für jede Sprache erstellt werden, wie dieses Python-Beispiel zeigt:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

Weitere Informationen zu den Technologien, die bei der Erstellung von JavaScript im Web beteiligt sind, finden Sie in der [Übersicht über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### Zugriff auf das DOM

Es ist nichts Besonderes erforderlich, um mit der Verwendung des DOM zu beginnen.
Sie verwenden die API direkt in JavaScript innerhalb dessen, was ein _Skript_ genannt wird, ein Programm, das von einem Browser ausgeführt wird.

Wenn Sie ein Skript erstellen, egal ob inline in einem `<script>`-Element oder in die Webseite eingeschlossen, können Sie sofort beginnen, die API für die [`document`](/de/docs/Web/API/Document)- oder [`window`](/de/docs/Web/API/Window)-Objekte zu verwenden, um das Dokument selbst oder eines der verschiedenen Elemente auf der Webseite (die untergeordneten Elemente des Dokuments) zu manipulieren. Ihre DOM-Programmierung kann so einfach sein wie das folgende Beispiel, das eine Nachricht in der Konsole anzeigt, indem die [`console.log()`](/de/docs/Web/API/console/log_static)-Funktion verwendet wird:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es im Allgemeinen nicht empfohlen wird, die Struktur der Seite (geschrieben in HTML) und die Manipulation des DOM (geschrieben in JavaScript) zu mischen,
werden die JavaScript-Teile hier gruppiert
und von dem HTML getrennt.

Zum Beispiel erstellt die folgende Funktion ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element,
fügt diesem Element Text hinzu
und fügt es dann dem Baum des Dokuments hinzu:

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

Die folgenden sind alle Schnittstellen, die durch die DOM-Spezifikation definiert werden:

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

Dieser Leitfaden handelt von den Objekten und den tatsächlichen _Dingen_, die Sie verwenden können, um die DOM-Hierarchie zu manipulieren. Es gibt viele Punkte, an denen das Verständnis, wie diese funktionieren, verwirrend sein kann. Zum Beispiel erhält das Objekt, das das HTML-`form`-Element darstellt, seine `name`-Eigenschaft von der `HTMLFormElement`-Schnittstelle, aber seine `className`-Eigenschaft von der `HTMLElement`-Schnittstelle. In beiden Fällen befindet sich die gewünschte Eigenschaft in diesem Formularobjekt.

Aber die Beziehung zwischen Objekten und den von ihnen im DOM implementierten Schnittstellen kann verwirrend sein, und daher versucht dieser Abschnitt, ein wenig über die tatsächlichen Schnittstellen in der DOM-Spezifikation zu sagen und wie sie verfügbar gemacht werden.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere verschiedene Schnittstellen. Das Tisch-Objekt zum Beispiel implementiert eine spezialisierte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle, die Methoden wie `createCaption` und `insertRow` umfasst. Aber da es sich auch um ein HTML-Element handelt, implementiert `table` die `Element`-Schnittstelle, die im DOM-Referenzkapitel zu [`Element`](/de/docs/Web/API/Element) beschrieben wird. Schließlich, da ein HTML-Element auch, soweit das DOM betroffen ist, ein Knoten im Baum der Knoten ist, die das Objektmodell für eine HTML- oder XML-Seite bilden, implementiert das Tisch-Objekt auch die grundlegendere `Node`-Schnittstelle, von der `Element` abgeleitet ist.

Wenn Sie eine Referenz auf ein `table`-Objekt erhalten, wie im folgenden Beispiel, verwenden Sie routinemäßig alle drei dieser Schnittstellen abwechselnd auf dem Objekt, vielleicht ohne es zu wissen.

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

### Fundamentale Datentypen

Diese Seite versucht, die verschiedenen Objekte und Typen in einfachen Begriffen zu beschreiben. Es gibt jedoch eine Reihe unterschiedlicher Datentypen, die in der API umhergereicht werden und die Sie beachten sollten.

> [!NOTE]
> Da sich der überwiegende Teil des Codes, der das DOM verwendet, um die Manipulation von HTML-Dokumenten dreht, ist es üblich, sich auf die Knoten im DOM als **Elemente** zu beziehen, obwohl streng genommen nicht jeder Knoten ein Element ist.

Die folgende Tabelle beschreibt kurz diese Datentypen.

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
        Wenn ein Mitglied ein Objekt vom Typ <code>document</code> zurückgibt (z.B. die
        <code>ownerDocument</code>-Eigenschaft eines Elements gibt das
        <code>document</code> zurück, zu dem es gehört), ist dieses Objekt das Wurzel-
        <code>document</code>-Objekt selbst. Das
        <a href="/de/docs/Web/API/Document">DOM-<code>document</code>-Referenz</a>kapitel beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>[`Node`](/de/docs/Web/API/Node)</td>
      <td>
        Jedes Objekt, das sich innerhalb eines Dokuments befindet, ist ein Knoten irgendeiner Art. In einem
        HTML-Dokument kann ein Objekt ein Elementknoten, aber auch ein Textknoten oder
        Attributknoten sein.
      </td>
    </tr>
    <tr>
      <td>[`Element`](/de/docs/Web/API/Element)</td>
      <td>
        Der <code>element</code>-Typ basiert auf <code>node</code>. Er bezieht sich
        auf ein Element oder einen Knoten des Typs <code>element</code>, der von einem
        Mitglied der DOM-API zurückgegeben wird. Statt zu sagen, dass die
        [`document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode eine
        Objektreferenz auf einen <code>Knoten</code> zurückgibt, sagen wir einfach, dass diese Methode das
        <code>Element</code> zurückgibt, das gerade im DOM erstellt wurde.
        <code>element</code>-Objekte implementieren die DOM
        <code>Element</code>-Schnittstelle und auch die grundlegendere
        <code>Node</code>-Schnittstelle, die beide zusammen in dieser
        Referenz vorhanden sind. In einem HTML-Dokument werden Elemente weiter durch die
        HTML-DOM-API's [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle verbessert sowie von
        anderen Schnittstellen, die Fähigkeiten bestimmter Arten von Elementen
        beschreiben (zum Beispiel [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für
        {{HTMLElement("table")}}-Elemente).
      </td>
    </tr>
    <tr>
      <td>[`Attr`](/de/docs/Web/API/Attr)</td>
      <td>
        Wenn ein <code>Attribut</code> von einem Mitglied zurückgegeben wird (z.B. durch die
        <code>createAttribute()</code>-Methode), ist es eine Objektreferenz, die eine spezielle (obwohl
        kleine) Schnittstelle für Attribute freilegt. Attribute sind Knoten im DOM, genau wie
        Elemente, obwohl Sie sie möglicherweise selten als solche verwenden.
      </td>
    </tr>
  </tbody>
</table>

Es gibt auch einige allgemeine terminologische Überlegungen, die man beachten sollte. Es ist üblich, sich auf jeden [`Attr`](/de/docs/Web/API/Attr)-Knoten als `attribute` zu beziehen, zum Beispiel, und auf ein Array von DOM-Knoten als `nodeList`. Sie werden sehen, dass diese Begriffe und andere in der Dokumentation eingeführt und verwendet werden.

Die `document`- und `window`-Objekte sind die Objekte, deren Schnittstellen Sie oft verwenden in der DOM-Programmierung. Einfach ausgedrückt, repräsentiert das `window`-Objekt so etwas wie den Browser, und das `document`-Objekt ist die Wurzel des Dokuments selbst. `Element` erbt von der generischen `Node`-Schnittstelle, und zusammen bieten diese zwei Schnittstellen viele der Methoden und Eigenschaften, die Sie auf individuellen Elementen verwenden. Diese Elemente können auch spezifische Schnittstellen haben, um mit der Art von Daten umzugehen, die diese Elemente enthalten, wie im `table`-Objekt-Beispiel im vorherigen Abschnitt.

### Veraltete DOM-Schnittstellen

Das Document Object Model wurde stark vereinfacht. Um dies zu erreichen, wurden die folgenden Schnittstellen in den verschiedenen DOM Level 3 oder früher entfernt. Sie stehen Webentwicklern nicht länger zur Verfügung.

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

Ein Dokument, das HTML enthält, wird unter Verwendung der [`Document`](/de/docs/Web/API/Document)-Schnittstelle beschrieben, die von der HTML-Spezifikation erweitert wird, um verschiedene HTML-spezifische Funktionen einzuschließen. Insbesondere wird die [`Element`](/de/docs/Web/API/Element)-Schnittstelle erweitert, um zu [`HTMLElement`](/de/docs/Web/API/HTMLElement) und verschiedenen Unterklassen zu werden, von denen jede ein oder eine eng verwandte Familie von Elementen darstellt.

Die HTML-DOM-API bietet Zugriff auf verschiedene Browserfunktionen wie Tabs und Fenster, CSS-Stile und Stylesheets, Browser-Verlauf usw. Diese Schnittstellen werden ausführlicher in der [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API)-Dokumentation beschrieben.

## SVG DOM

Ebenso wird ein Dokument, das SVG enthält, auch unter Verwendung der [`Document`](/de/docs/Web/API/Document)-Schnittstelle beschrieben, die von der SVG-Spezifikation erweitert wird, um verschiedene SVG-spezifische Funktionen einzuschließen. Insbesondere wird die [`Element`](/de/docs/Web/API/Element)-Schnittstelle erweitert, um zu [`SVGElement`](/de/docs/Web/API/SVGElement) und verschiedenen Unterklassen zu werden, von denen jede ein Element oder eine eng verwandte Familie von Elementen darstellt. Diese Schnittstellen werden ausführlicher in der [SVG-API](/de/docs/Web/API/SVG_API)-Dokumentation beschrieben.

## Beispiele

### Textinhalt setzen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("textarea")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, setzen wir etwas Text in das `<textarea>`. Wenn der Benutzer auf den zweiten Button klickt, löschen wir den Text. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) um auf das `<textarea>` und den Button zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) um auf Buttonklicks zu hören
- [`Node.textContent`](/de/docs/Web/API/Node/textContent) um den Text zu setzen und zu löschen.

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
const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### Ergebnis

{{EmbedLiveSample("Setting text content", "", "150px")}}

### Ein Kind-Element hinzufügen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("div")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, erstellen wir ein neues Element und fügen es als Kind des `<div>` hinzu. Wenn der Benutzer auf den zweiten Button klickt, entfernen wir das Kind-Element. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) um auf das `<div>` und die Buttons zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) um auf Buttonklicks zu hören
- [`Document.createElement`](/de/docs/Web/API/Document/createElement) um das Element zu erstellen
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) um das Kind hinzuzufügen
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild) um das Kind zu entfernen.

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
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
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

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});
```

#### Ergebnis

{{EmbedLiveSample("Adding a child element", "", "180px")}}

### Den Baum lesen und modifizieren

Angenommen, der Autor möchte die Kopfzeile des Dokuments in [Was ist ein DOM-Baum?](#what_is_a_dom_tree) ändern und anstelle eines Absatzes zwei Absätze schreiben. Das folgende Skript würde die Aufgabe erfüllen:

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

Sie können den Baum in [Was ist ein DOM-Baum?](#what_is_a_dom_tree) auch vollständig in JavaScript erstellen.

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

Dieses Beispiel zeigt, wie Ereignisse in einer sehr einfachen Weise im DOM ausgelöst und behandelt werden. Wenn der BODY dieses HTML-Dokuments lädt, wird ein Ereignislistener mit der obersten Zeile der TABLE registriert. Der Ereignislistener behandelt das Ereignis, indem die Funktion stopEvent ausgeführt wird, die den Wert in der unteren Zelle der Tabelle ändert.

Allerdings ruft stopEvent auch eine Methode des Ereignisobjekts auf, [`event.stopPropagation`](/de/docs/Web/API/Event/stopPropagation), die verhindert, dass das Ereignis weiter im DOM aufsteigt. Beachten Sie, dass die Tabelle selbst einen [`onclick`](/de/docs/Web/API/Element/click_event)-Ereignishandler hat, der eine Nachricht anzeigen soll, wenn die Tabelle angeklickt wird. Aber die Methode stopEvent hat die Ausbreitung gestoppt, und so wird nach der Aktualisierung der Daten in der Tabelle die Ereignisphase effektiv beendet, und ein Bestätigungsfenster angezeigt, um dies zu bestätigen.

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

### Anzeige von Eigenschaften des Ereignisobjekts

Dieses Beispiel verwendet DOM-Methoden, um alle Eigenschaften des [`onload`](/de/docs/Web/API/Window/load_event)-[`event`](/de/docs/Web/API/Event)-Objekts und ihre Werte in einer Tabelle anzuzeigen. Es zeigt auch eine nützliche Technik, eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife zu verwenden, um über die Eigenschaften eines Objekts zu iterieren, um deren Werte zu erhalten.

Die Eigenschaften von Ereignisobjekten unterscheiden sich erheblich zwischen den Browsern. Der [WHATWG DOM Standard](https://dom.spec.whatwg.org/) listet die Standardeigenschaften auf, jedoch haben viele Browser diese stark erweitert.

Setzen Sie den folgenden Code in eine leere Textdatei und laden Sie sie in eine Vielzahl von Browsern, Sie werden von der unterschiedlichen Anzahl und den Namen der Eigenschaften überrascht sein. Vielleicht möchten Sie auch einige Elemente auf der Seite hinzufügen und diese Funktion von verschiedenen Ereignishandlern aufrufen.

```html
<h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
```

```css
table {
  border-collapse: collapse;
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
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  const event = e || window.event;
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

showEventProperties(event);
```

{{EmbedLiveSample("Displaying event object properties", "", "300")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model)
- [HTML DOM API](/de/docs/Web/API/HTML_DOM_API)
- [SVG API](/de/docs/Web/API/SVG_API)
