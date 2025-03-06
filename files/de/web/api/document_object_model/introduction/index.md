---
title: Einführung in das DOM
slug: Web/API/Document_Object_Model/Introduction
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (_DOM_) ist die Datenrepräsentation der Objekte, die die Struktur und den Inhalt eines Dokuments im Web ausmachen. Dieser Leitfaden soll das DOM vorstellen, untersuchen, wie das DOM ein {{Glossary("HTML", "HTML")}}-Dokument im Speicher darstellt und wie man APIs verwendet, um Webinhalte und Anwendungen zu erstellen.

## Was ist das DOM?

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente. Es stellt die Seite so dar, dass Programme die Dokumentenstruktur, den Stil und den Inhalt ändern können. Das DOM stellt das Dokument als Knoten und Objekte dar; auf diese Weise können Programmiersprachen mit der Seite interagieren.

Eine Webseite ist ein Dokument, das entweder im Browserfenster angezeigt oder als HTML-Quelle dargestellt werden kann. In beiden Fällen ist es dasselbe Dokument, aber die Darstellung im Document Object Model (DOM) ermöglicht seine Manipulation. Als objektorientierte Darstellung der Webseite kann es mit einer Skriptsprache wie JavaScript modifiziert werden.

Zum Beispiel gibt das DOM vor, dass die Methode `querySelectorAll` in diesem Codebeispiel eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, die zum Manipulieren und Erstellen von Webseiten verfügbar sind, sind in Objekten organisiert. Zum Beispiel ist das `document`-Objekt, das das Dokument selbst repräsentiert, jedes `table`-Objekt, das die [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) DOM-Schnittstelle für den Zugriff auf HTML-Tabellen implementiert, und so weiter, alles Objekte.

Das DOM wird mit mehreren APIs aufgebaut, die zusammenarbeiten. Der Kern [DOM](/de/docs/Web/API/Document_Object_Model) definiert die Entitäten, die jedes Dokument und die Objekte innerhalb von ihm beschreiben. Dieses wird bei Bedarf von anderen APIs erweitert, die dem DOM neue Funktionen und Fähigkeiten hinzufügen. Zum Beispiel fügt die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) Unterstützung für die Darstellung von HTML-Dokumenten zum Kern-DOM hinzu, und die SVG API fügt Unterstützung für die Darstellung von SVG-Dokumenten hinzu.

## DOM und JavaScript

Das vorherige kurze Beispiel, wie fast alle Beispiele, ist {{Glossary("JavaScript", "JavaScript")}}. Das heißt, es ist in JavaScript _geschrieben_, benutzt aber das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache, aber ohne es hätte die JavaScript-Sprache kein Modell oder Konzept von Webseiten, HTML-Dokumenten, SVG-Dokumenten und deren Komponenten. Das Dokument als Ganzes, der Kopf, Tabellen innerhalb des Dokuments, Tabellenelemente, Text innerhalb der Tabellenzellen und alle anderen Elemente in einem Dokument sind Teile des Document Object Models für dieses Dokument. Sie alle können mit dem DOM und einer Skriptsprache wie JavaScript angesprochen und manipuliert werden.

Das DOM ist nicht Teil der JavaScript-Sprache, sondern eine Web-API, die zum Erstellen von Websites verwendet wird. JavaScript kann auch in anderen Kontexten verwendet werden. Zum Beispiel führt Node.js JavaScript-Programme auf einem Computer aus, bietet jedoch einen anderen Satz von APIs, und die DOM-API ist kein Kernbestandteil der Node.js-Laufzeitumgebung.

Das DOM wurde so konzipiert, dass es unabhängig von einer bestimmten Programmiersprache ist, wodurch die strukturelle Darstellung des Dokuments von einer einzigen, konsistenten API verfügbar gemacht wird. Auch wenn die meisten Webentwickler das DOM nur über JavaScript verwenden, können Implementierungen des DOM für jede Sprache gebaut werden, wie dieses Python-Beispiel zeigt:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

Für weitere Informationen zu den Technologien, die beim Schreiben von JavaScript im Web involviert sind, sehen Sie sich den [Überblick über JavaScript-Technologien](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview) an.

## Zugriff auf das DOM

Sie müssen nichts Besonderes tun, um das DOM zu nutzen. Sie verwenden die API direkt in JavaScript innerhalb eines sogenannten _Scripts_, einem Programm, das von einem Browser ausgeführt wird.

Wenn Sie ein Skript erstellen, sei es inline in einem `<script>`-Element oder in die Webseite eingebunden, können Sie sofort beginnen, die API für die [`document`](/de/docs/Web/API/Document)- oder [`window`](/de/docs/Web/API/Window)-Objekte zu nutzen, um das Dokument selbst oder eines der verschiedenen Elemente auf der Webseite (die Nachfahrelemente des Dokuments) zu manipulieren. Ihre DOM-Programmierung könnte so einfach sein wie das folgende Beispiel, das eine Nachricht in der Konsole anzeigt, indem es die Funktion [`console.log()`](/de/docs/Web/API/Console/log_static) nutzt:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es im Allgemeinen nicht empfohlen wird, die Struktur der Seite (in HTML geschrieben) mit der Manipulation des DOM (in JavaScript geschrieben) zu vermischen, werden die JavaScript-Teile hier gruppiert und vom HTML getrennt.

Zum Beispiel erstellt die folgende Funktion ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element, fügt diesem Element Text hinzu und fügt es dann dem Baum des Dokuments hinzu:

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

Diese Seite versucht, die verschiedenen Objekte und Typen in einfachen Begriffen zu beschreiben. Es gibt jedoch eine Reihe von unterschiedlichen Datentypen, die innerhalb der API verwendet werden und die Ihnen bekannt sein sollten.

> [!NOTE]
> Da der überwiegende Teil des Codes, der das DOM verwendet, sich um die Manipulation von HTML-Dokumenten dreht, ist es üblich, sich auf die Knoten im DOM als **Elemente** zu beziehen, obwohl streng genommen nicht jeder Knoten ein Element ist.

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
        Wenn ein Mitglied ein Objekt vom Typ <code>document</code> zurückgibt (z.B. die <code>ownerDocument</code>-Eigenschaft eines Elements gibt das <code>document</code> zurück, zu dem es gehört), ist dieses Objekt das Wurzel-<code>document</code>-Objekt selbst. Das Kapitel <a href="/de/docs/Web/API/Document">DOM <code>document</code> Referenz</a> beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>[`Node`](/de/docs/Web/API/Node)</td>
      <td>
        Jedes Objekt, das sich innerhalb eines Dokuments befindet, ist ein Knoten irgendeiner Art. In einem HTML-Dokument kann ein Objekt ein Elementknoten, aber auch ein Textknoten oder Attributknoten sein.
      </td>
    </tr>
    <tr>
      <td>[`Element`](/de/docs/Web/API/Element)</td>
      <td>
        Der <code>element</code>-Typ basiert auf <code>node</code>. Er bezieht sich auf ein Element oder einen Knoten des Typs <code>element</code>, der von einem Mitglied der DOM-API zurückgegeben wird. Anstatt zu sagen, dass die Methode [`document.createElement()`](/de/docs/Web/API/Document/createElement) ein Objekt-Referenz zu einem <code>node</code> zurückgibt, sagen wir einfach, dass diese Methode das <code>element</code> zurückgibt, das gerade im DOM erstellt wurde. <code>element</code>-Objekte implementieren die DOM-<code>Element</code>-Schnittstelle und auch die grundlegendere <code>Node</code>-Schnittstelle, die beide zusammen in dieser Referenz enthalten sind. In einem HTML-Dokument werden Elemente durch die HTML DOM-API's [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle sowie andere Schnittstellen beschrieben, die Fähigkeiten spezieller Art von Elementen beschreiben (zum Beispiel [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für {{HTMLElement("table")}}-Elemente).
      </td>
    </tr>
    <tr>
      <td>[`NodeList`](/de/docs/Web/API/NodeList)</td>
      <td>
        Ein <code>nodeList</code> ist ein Array von Elementen, wie es von der Methode [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben wird. Elemente in einem <code>nodeList</code> werden durch Indizierung auf eine der zwei Arten zugegriffen:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        Diese zwei sind gleichbedeutend. Im ersten Fall ist <code>item()</code> die einzige Methode auf dem <code>nodeList</code>-Objekt. Das letztere verwendet die typische Array-Syntax, um das zweite Element in der Liste zu holen.
      </td>
    </tr>
    <tr>
      <td>[`Attr`](/de/docs/Web/API/Attr)</td>
      <td>
        Wenn ein <code>attribute</code> von einem Mitglied zurückgegeben wird (z.B. durch die Methode <code>createAttribute()</code>), ist es eine Objekt-Referenz, die eine spezielle (wenn auch kleine) Schnittstelle für Attribute freigibt. Attribute sind, genau wie Elemente, Knoten im DOM, obwohl Sie sie selten als solche verwenden werden.
      </td>
    </tr>
    <tr>
      <td>[`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)</td>
      <td>
        Ein <code>namedNodeMap</code> ist wie ein Array, aber die Elemente werden durch Namen oder Index aufgerufen, obwohl dieser letztere Fall lediglich eine Bequemlichkeit für die Aufzählung darstellt, da sie in keiner bestimmten Reihenfolge in der Liste sind. Ein <code>namedNodeMap</code> hat eine <code>item()</code>-Methode für diesen Zweck, und Sie können auch Elemente zu einem <code>namedNodeMap</code> hinzufügen und von diesem entfernen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt auch einige gängige Begriffsüberlegungen zu beachten. Es ist üblich, sich auf jeden [`Attr`](/de/docs/Web/API/Attr)-Knoten als `attribute` zu beziehen, zum Beispiel, und auf ein Array von DOM-Knoten als `nodeList`. Sie werden diese und andere Begriffe in der gesamten Dokumentation eingeführt und verwendet finden.

## DOM-Schnittstellen

Dieser Leitfaden behandelt die Objekte und die tatsächlichen _Dinge_, die Sie verwenden können, um die DOM-Hierarchie zu manipulieren. An vielen Punkten kann das Verständnis darüber, wie diese funktionieren, verwirrend sein. Zum Beispiel erhält das Objekt, das das HTML-`form`-Element darstellt, seine `name`-Eigenschaft aus der `HTMLFormElement`-Schnittstelle, seine `className`-Eigenschaft jedoch aus der `HTMLElement`-Schnittstelle. In beiden Fällen befindet sich die gewünschte Eigenschaft in diesem Formularobjekt.

Aber die Beziehung zwischen Objekten und den Schnittstellen, die sie im DOM implementieren, kann verwirrend sein, und so versucht dieser Abschnitt, etwas über die tatsächlichen Schnittstellen in der DOM-Spezifikation und deren Verfügbarkeit zu sagen.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere unterschiedliche Schnittstellen. Das Tabellenobjekt implementiert zum Beispiel eine spezialisierte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle, zu der Methoden wie `createCaption` und `insertRow` gehören. Da es aber auch ein HTML-Element ist, implementiert `table` die `Element`-Schnittstelle, die im DOM-[`Element`](/de/docs/Web/API/Element)-Referenzkapitel beschrieben ist. Und schließlich, da ein HTML-Element auch, soweit es das DOM betrifft, ein Knoten im Baum der Knoten ist, die das Objektmodell für eine HTML- oder XML-Seite bilden, implementiert das Tabellenobjekt auch die grundlegendere `Node`-Schnittstelle, von der `Element` abgeleitet ist.

Wenn Sie eine Referenz zu einem `table`-Objekt erhalten, wie im folgenden Beispiel, verwenden Sie routinemäßig alle drei dieser Schnittstellen austauschbar auf dem Objekt, vielleicht ohne es zu wissen.

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element interface
for (let i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if (tableAttrs[i].nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

### Kernschnittstellen im DOM

Dieser Abschnitt listet einige der am häufigsten verwendeten Schnittstellen im DOM auf. Es geht nicht darum, hier zu beschreiben, was diese APIs machen, sondern Ihnen eine Vorstellung zu geben, von den Arten von Methoden und Eigenschaften, die Sie sehr oft sehen werden, wenn Sie das DOM verwenden. Diese häufig verwendeten APIs werden in den längeren Beispielen im [DOM-Beispiele](/de/docs/Web/API/Document_Object_Model/Examples)-Kapitel am Ende dieses Buches verwendet.

Die `document`- und `window`-Objekte sind die Objekte, deren Schnittstellen Sie in der DOM-Programmierung am häufigsten nutzen. Einfach ausgedrückt repräsentiert das `window`-Objekt etwas wie den Browser, und das `document`-Objekt ist die Wurzel des Dokuments selbst. `Element` erbt von der generischen `Node`-Schnittstelle, und zusammen bieten diese beiden Schnittstellen viele der Methoden und Eigenschaften, die Sie an einzelnen Elementen verwenden. Diese Elemente können auch spezifische Schnittstellen zur Behandlung der Art der Daten haben, die diese Elemente enthalten, wie im `table`-Objektbeispiel im vorherigen Abschnitt.

Im Folgenden finden Sie eine kurze Liste von gängigen APIs in der Web- und XML-Seiten-Skripting mithilfe des DOM.

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

### Textinhalt setzen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("textarea")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, setzen wir Text im `<textarea>`. Wenn der Benutzer auf den zweiten Button klickt, löschen wir den Text. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<textarea>` und den Button zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Button-Klicks zu hören
- [`Node.textContent`](/de/docs/Web/API/Node/textContent), um den Text zu setzen und zu löschen.

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

### Ein Kindelement hinzufügen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("div")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, erstellen wir ein neues Element und fügen es als Kind dem `<div>` hinzu. Wenn der Benutzer auf den zweiten Button klickt, entfernen wir das Kindelement. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<div>` und die Buttons zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Button-Klicks zu hören
- [`Document.createElement`](/de/docs/Web/API/Document/createElement), um das Element zu erstellen
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild), um das Kind hinzuzufügen
- [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), um das Kind zu entfernen.

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
