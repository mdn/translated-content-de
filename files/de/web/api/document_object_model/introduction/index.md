---
title: Einführung in das DOM
slug: Web/API/Document_Object_Model/Introduction
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (_DOM_) ist die Datenrepräsentation der Objekte, die die Struktur und den Inhalt eines Dokuments im Web ausmachen. Dieser Leitfaden wird das DOM einführen, erklären, wie das DOM ein [HTML]-Dokument im Speicher darstellt und wie APIs verwendet werden, um Webinhalte und -anwendungen zu erstellen.

## Was ist das DOM?

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente. Es stellt die Seite so dar, dass Programme die Struktur, den Stil und den Inhalt des Dokuments ändern können. Das DOM stellt das Dokument als Knoten und Objekte dar, sodass Programmiersprachen mit der Seite interagieren können.

Eine Webseite ist ein Dokument, das entweder im Browserfenster angezeigt oder als HTML-Quelle dargestellt werden kann. In beiden Fällen ist es dasselbe Dokument, aber die Darstellung als Document Object Model (DOM) ermöglicht seine Manipulation. Als objektorientierte Repräsentation der Webseite kann es mit einer Skriptsprache wie JavaScript modifiziert werden.

Zum Beispiel spezifiziert das DOM, dass die Methode `querySelectorAll` im folgenden Code-Schnipsel eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, die zur Manipulation und Erstellung von Webseiten verfügbar sind, sind in Objekten organisiert. Zum Beispiel ist das `document`-Objekt, das das Dokument selbst darstellt, ein `table`-Objekt, das die [`HTMLTableElement`]-Schnittstelle implementiert, um auf HTML-Tabellen zuzugreifen, und so weiter, alles Objekte.

Das DOM wird mit mehreren APIs aufgebaut, die zusammenarbeiten. Der Kern des [DOMs] definiert die Entitäten, die jedes Dokument und die darin enthaltenen Objekte beschreiben. Dies wird bei Bedarf durch andere APIs erweitert, die dem DOM neue Funktionen und Fähigkeiten hinzufügen. Zum Beispiel fügt die [HTML DOM API] Unterstützung für die Repräsentation von HTML-Dokumenten zum Kern-DOM hinzu, und die SVG-API fügt Unterstützung für die Repräsentation von SVG-Dokumenten hinzu.

## DOM und JavaScript

Das vorherige kurze Beispiel, wie fast alle Beispiele, ist [JavaScript]. Das heißt, es ist in JavaScript _geschrieben_, verwendet jedoch das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache, aber ohne es hätte die JavaScript-Sprache kein Modell oder Konzept von Webseiten, HTML-Dokumenten, SVG-Dokumenten und deren Bestandteilen. Das Dokument als Ganzes, der Kopf, Tabellen innerhalb des Dokuments, Tabellenüberschriften, Text innerhalb der Tabellenzellen und alle anderen Elemente in einem Dokument sind Teile des Document Object Model für dieses Dokument. Sie können alle mit dem DOM und einer Skriptsprache wie JavaScript zugegriffen und manipuliert werden.

Das DOM ist kein Teil der JavaScript-Sprache, sondern eine Web-API, die zum Erstellen von Websites verwendet wird. JavaScript kann auch in anderen Kontexten verwendet werden. Zum Beispiel führt Node.js JavaScript-Programme auf einem Computer aus, bietet jedoch einen anderen Satz von APIs, und die DOM-API ist kein wesentlicher Bestandteil der Node.js-Laufzeit.

Das DOM wurde so konzipiert, dass es unabhängig von einer bestimmten Programmiersprache ist, was die strukturelle Darstellung des Dokuments über eine einzige, konsistente API verfügbar macht. Selbst wenn die meisten Webentwickler das DOM nur über JavaScript verwenden werden, können Implementierungen des DOM für jede Sprache erstellt werden, wie dieses Python-Beispiel demonstriert:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

Für weitere Informationen zu den Technologien, die in der JavaScript-Programmierung im Web involviert sind, siehe [JavaScript Technologien Übersicht].

## Zugriff auf das DOM

Sie müssen nichts Besonderes tun, um mit der Verwendung des DOM zu beginnen. Sie verwenden die API direkt in JavaScript innerhalb eines sogenannten _Skripts_, ein von einem Browser ausgeführtes Programm.

Wenn Sie ein Skript erstellen, sei es inline in einem `<script>`-Element oder in der Webseite enthalten, können Sie sofort mit der API für das [`document`] oder [`window`]-Objekte beginnen, um das Dokument selbst zu manipulieren oder eines der verschiedenen Elemente auf der Webseite (die Nachkommenselemente des Dokuments). Ihre DOM-Programmierung kann so einfach sein wie das folgende Beispiel, das eine Nachricht auf der Konsole anzeigt, indem die Funktion [`console.log()`] verwendet wird:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es im Allgemeinen nicht empfohlen wird, die Struktur der Seite (in HTML geschrieben) und die Manipulation des DOM (in JavaScript geschrieben) zu mischen, werden die JavaScript-Teile hier zusammengefasst und von dem HTML getrennt.

Zum Beispiel erstellt die folgende Funktion ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element, fügt diesem Element Text hinzu und bindet es dann in den Baum für das Dokument ein:

```html
<html lang="en">
  <head>
    <script>
      // run this function when the document is loaded
      window.onload = () => {
        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const headingText = document.createTextNode("Big Head!");
        heading.appendChild(headingText);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## Grundlegende Datentypen

Diese Seite versucht, die verschiedenen Objekte und Typen in einfachen Worten zu beschreiben. Es gibt jedoch eine Reihe verschiedener Datentypen, die durch die API hinweggereicht werden, die Sie kennen sollten.

> [!NOTE]
> Da sich der überwiegende Teil des Codes, der das DOM verwendet, um die Manipulation von HTML-Dokumenten dreht, ist es üblich, sich auf die Knoten im DOM als **Elemente** zu beziehen, obwohl streng genommen nicht jeder Knoten ein Element ist.

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
        Wenn ein Mitglied ein Objekt des Typs <code>document</code> zurückgibt (z.B. die
        <code>ownerDocument</code>-Eigenschaft eines Elements gibt das
        <code>document</code> zurück, zu dem es gehört), ist dieses Objekt das
        Wurzel-<code>document</code>-Objekt selbst. Das Kapitel
        <a href="/de/docs/Web/API/Document">DOM <code>document</code> Referenz</a>
        beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>[`Node`](/de/docs/Web/API/Node)</td>
      <td>
        Jedes Objekt, das sich innerhalb eines Dokuments befindet, ist eine Art von Knoten. In einem
        HTML-Dokument kann ein Objekt ein Elementknoten, aber auch ein Textknoten oder
        Attributknoten sein.
      </td>
    </tr>
    <tr>
      <td>[`Element`](/de/docs/Web/API/Element)</td>
      <td>
        Der <code>element</code>-Typ basiert auf <code>node</code>. Er bezieht sich
        auf ein Element oder einen Knoten des Typs <code>element</code>, der von einem
        Mitglied der DOM-API zurückgegeben wird. Anstatt beispielsweise zu sagen, dass die
        Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement) ein
        Objektreferenz auf einen <code>node</code> zurückgibt, sagen wir einfach, dass diese Methode
        das <code>element</code> zurückgibt, das gerade im DOM erstellt wurde.
        <code>element</code>-Objekte implementieren die DOM
        <code>Element</code>-Schnittstelle und auch die einfachere
        <code>Node</code>-Schnittstelle, die beide in dieser
        Referenz enthalten sind. In einem HTML-Dokument werden Elemente weiter durch die
        HTML DOM API's [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle verbessert sowie
        andere Schnittstellen, die Fähigkeiten spezifischer Arten von Elementen beschreiben
        (zum Beispiel [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für
        {{HTMLElement("table")}}-Elemente).
      </td>
    </tr>
    <tr>
      <td>[`NodeList`](/de/docs/Web/API/NodeList)</td>
      <td>
        Ein <code>nodeList</code> ist ein Array von Elementen, wie das, das
        von der Methode
        [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben wird. Elemente in einer
        <code>nodeList</code> werden auf zwei verschiedene Arten per Index zugegriffen:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        Diese beiden sind äquivalent. Im ersten Fall ist <code>item()</code> die
        einzige Methode auf dem <code>nodeList</code>-Objekt. Letzteres verwendet die
        typische Array-Syntax, um das zweite Element in der Liste abzurufen.
      </td>
    </tr>
    <tr>
      <td>[`Attr`](/de/docs/Web/API/Attr)</td>
      <td>
        Wenn ein <code>attribute</code> von einem Mitglied zurückgegeben wird (z.B. durch die
        <code>createAttribute()</code>-Methode), ist es eine Objektreferenz, die
        eine spezielle (wenn auch kleine) Schnittstelle für Attribute bereitstellt. Attribute
        sind Knoten im DOM, genau wie Elemente, obwohl Sie diese selten so verwenden.
      </td>
    </tr>
    <tr>
      <td>[`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)</td>
      <td>
        Ein <code>namedNodeMap</code> ist wie ein Array, aber die Elemente werden
        nach Name oder Index zugegriffen, obwohl dieser letzte Fall nur eine Bequemlichkeit für
        die Aufzählung ist, da sie in keiner bestimmten Reihenfolge in der Liste sind. Ein
        <code>namedNodeMap</code> hat eine <code>item()</code>-Methode für diesen
        Zweck, und Sie können auch Elemente zu einem
        <code>namedNodeMap</code> hinzufügen und entfernen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt auch einige allgemeine terminologische Überlegungen, die zu beachten sind. Es ist üblich, sich auf jeden [`Attr`]-Knoten als `attribute` zu beziehen, zum Beispiel, und sich auf ein Array von DOM-Knoten als `nodeList` zu beziehen. Diese Begriffe und andere werden in der gesamten Dokumentation eingeführt und verwendet.

## DOM-Schnittstellen

Dieser Leitfaden befasst sich mit den Objekten und den tatsächlichen _Dingen_, die Sie verwenden können, um die DOM-Hierarchie zu manipulieren. Es gibt viele Punkte, an denen das Verständnis dieser Dinge verwirrend sein kann. Zum Beispiel erhält das Objekt, das das HTML-`form`-Element darstellt, seine `name`-Eigenschaft von der `HTMLFormElement`-Schnittstelle, aber seine `className`-Eigenschaft von der `HTMLElement`-Schnittstelle. In beiden Fällen befindet sich die gewünschte Eigenschaft in diesem Formularobjekt.

Aber die Beziehung zwischen Objekten und den Schnittstellen, die sie im DOM implementieren, kann verwirrend sein, und daher versucht dieser Abschnitt, ein wenig über die tatsächlichen Schnittstellen in der DOM-Spezifikation zu sagen und wie sie verfügbar gemacht werden.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere verschiedene Schnittstellen. Das Tabellenobjekt, zum Beispiel, implementiert eine spezialisierte [`HTMLTableElement`]-Schnittstelle, die solche Methoden wie `createCaption` und `insertRow` umfasst. Aber da es auch ein HTML-Element ist, implementiert `table` die `Element`-Schnittstelle, die im DOM [`Element`]-Referenzkapitel beschrieben ist. Und schließlich implementiert das Tabellenobjekt, da ein HTML-Element auch, was das DOM betrifft, ein Knoten im Baum der Knoten ist, die das Objektmodell für eine HTML- oder XML-Seite bilden, auch die einfachere `Node`-Schnittstelle, von der `Element` abgeleitet ist.

Wenn Sie eine Referenz auf ein `table`-Objekt erhalten, wie im folgenden Beispiel, verwenden Sie routinemäßig alle drei dieser Schnittstellen auf dem Objekt, vielleicht ohne es zu wissen.

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

### Kern-Schnittstellen im DOM

Dieser Abschnitt listet einige der am häufigsten verwendeten Schnittstellen im DOM auf. Die Idee ist nicht, hier zu beschreiben, was diese APIs tun, sondern Ihnen eine Vorstellung von den Arten von Methoden und Eigenschaften zu geben, die Sie sehr oft sehen werden, wenn Sie das DOM verwenden. Diese häufig verwendeten APIs werden in den längeren Beispielen im Kapitel [DOM-Beispiele] am Ende dieses Buches verwendet.

Die `document`- und `window`-Objekte sind die Objekte, deren Schnittstellen Sie normalerweise am häufigsten in der DOM-Programmierung verwenden. Einfach ausgedrückt, das `window`-Objekt repräsentiert etwas wie den Browser, und das `document`-Objekt ist die Wurzel des Dokuments selbst. `Element` erbt von der generischen `Node`-Schnittstelle, und zusammen bieten diese beiden Schnittstellen viele der Methoden und Eigenschaften, die Sie für einzelne Elemente verwenden. Diese Elemente können auch spezifische Schnittstellen haben, um mit der Art von Daten umzugehen, die diese Elemente halten, wie im `table`-Objektbeispiel im vorherigen Abschnitt.

Im Folgenden finden Sie eine kurze Liste gängiger APIs in der Skripterstellung von Web- und XML-Seiten unter Verwendung des DOM.

- [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`document.createElement()`](/de/docs/Web/API/Document/createElement)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild)
- [`window.onload`](/de/docs/Web/API/Window/load_event)
- [`window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)

## Beispiele

### Textinhalt festlegen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("textarea")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, setzen wir einen Text in das `<textarea>`. Wenn der Benutzer auf den zweiten Button klickt, löschen wir den Text. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) zum Zugriff auf das `<textarea>` und den Button
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zum Anhören von Button-Klicks
- [`Node.textContent`](/de/docs/Web/API/Node/textContent) zum Setzen und Löschen des Textes.

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

### Hinzufügen eines Kind-Elements

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("div")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, erstellen wir ein neues Element und fügen es als Kind des `<div>` hinzu. Wenn der Benutzer auf den zweiten Button klickt, entfernen wir das Kind-Element. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) zum Zugriff auf das `<div>` und die Buttons
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zum Anhören von Button-Klicks
- [`Document.createElement`](/de/docs/Web/API/Document/createElement) zum Erstellen des Elements
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) zum Hinzufügen des Kindes
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild) zum Entfernen des Kindes.

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

## Spezifikationen

{{Specifications}}
