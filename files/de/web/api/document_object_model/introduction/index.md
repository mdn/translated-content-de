---
title: Einführung in das DOM
slug: Web/API/Document_Object_Model/Introduction
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (_DOM_) ist die Datenrepräsentation der Objekte,
die die Struktur und den Inhalt eines Dokuments im Web bilden.
Dieser Leitfaden wird das DOM einführen,
untersuchen, wie das DOM ein {{Glossary("HTML", "HTML")}}-Dokument im Speicher darstellt
und wie man APIs nutzt, um Webinhalte und Anwendungen zu erstellen.

## Was ist das DOM?

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente. Es repräsentiert die Seite, sodass Programme die Dokumentstruktur, den Stil und den Inhalt ändern können. Das DOM stellt das Dokument als Knoten und Objekte dar; auf diese Weise können Programmiersprachen mit der Seite interagieren.

Eine Webseite ist ein Dokument, das entweder im Browserfenster angezeigt oder als HTML-Quelle betrachtet werden kann. In beiden Fällen ist es dasselbe Dokument, aber die Darstellung des Document Object Model (DOM) ermöglicht es, es zu manipulieren. Als objektorientierte Darstellung der Webseite kann es mit einer Skriptsprache wie JavaScript modifiziert werden.

Zum Beispiel spezifiziert das DOM, dass die Methode `querySelectorAll` in diesem Code-Schnipsel eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, die zum Erstellen und Manipulieren von Webseiten verfügbar sind, sind in Objekte organisiert. Zum Beispiel das `document`-Objekt, das das Dokument selbst darstellt, sowie alle `table`-Objekte, die die [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-DOM-Schnittstelle implementieren, um auf HTML-Tabellen zuzugreifen, und so weiter.

Das DOM wird unter Verwendung mehrerer APIs aufgebaut, die zusammenarbeiten.
Das Kern-[DOM](/de/docs/Web/API/Document_Object_Model) definiert die Entitäten,
die jedes Dokument und die darin enthaltenen Objekte beschreiben.
Dieses wird nach Bedarf durch andere APIs erweitert, die dem DOM neue Funktionen und Fähigkeiten hinzufügen.
Zum Beispiel fügt die [HTML-DOM-API](/de/docs/Web/API/HTML_DOM_API) dem Kern-DOM Unterstützung für die Darstellung von HTML-Dokumenten hinzu,
und die SVG-API fügt Unterstützung für die Darstellung von SVG-Dokumenten hinzu.

## DOM und JavaScript

Das vorherige kurze Beispiel, wie fast alle Beispiele, ist in {{Glossary("JavaScript", "JavaScript")}} geschrieben. Das heißt, es ist _in_ JavaScript geschrieben, verwendet aber das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache, aber ohne es hätte die JavaScript-Sprache kein Modell oder Vorstellung von Webseiten, HTML-Dokumenten, SVG-Dokumenten und deren Bestandteilen. Das Dokument als Ganzes, der Kopf, Tabellen innerhalb des Dokuments, Tabellenüberschriften, Text innerhalb der Tabellenzellen und alle anderen Elemente eines Dokuments sind Teile des Document Object Models dieses Dokuments. Alle können mit dem DOM und einer Skriptsprache wie JavaScript aufgerufen und manipuliert werden.

Das DOM ist kein Teil der JavaScript-Sprache,
sondern eine Web-API, um Websites zu erstellen.
JavaScript kann auch in anderen Kontexten verwendet werden.
Zum Beispiel führt Node.js JavaScript-Programme auf einem Computer aus,
stellt aber einen anderen Satz von APIs bereit,
und die DOM-API ist kein Kernbestandteil der Node.js-Laufzeitumgebung.

Das DOM wurde entwickelt, um unabhängig von einer bestimmten Programmiersprache zu sein, sodass eine strukturelle Darstellung des Dokuments von einer einzigen, konsistenten API bereitgestellt wird. Auch wenn die meisten Webentwickler das DOM nur über JavaScript verwenden werden, können Implementierungen des DOM für jede Sprache erstellt werden, wie dieses Python-Beispiel zeigt:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

Für weitere Informationen darüber, welche Technologien beim Schreiben von JavaScript im Web beteiligt sind, siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Zugriff auf das DOM

Es ist nicht nötig, etwas Besonderes zu tun, um mit der Verwendung des DOM zu beginnen.
Sie verwenden die API direkt in JavaScript innerhalb eines sogenannten _Scripts_, eines Programms, das von einem Browser ausgeführt wird.

Wenn Sie ein Script erstellen, sei es inline in einem `<script>`-Element oder in die Webseite eingefügt, können Sie sofort die API für die [`document`](/de/docs/Web/API/Document) oder [`window`](/de/docs/Web/API/Window)-Objekte verwenden, um das Dokument selbst oder eines der verschiedenen Elemente auf der Webseite (die Nachfahr-Elemente des Dokuments) zu manipulieren. Ihr DOM-Programmieren kann so einfach sein wie das folgende Beispiel, das eine Nachricht in der Konsole anzeigt, indem es die Funktion [`console.log()`](/de/docs/Web/API/Console/log_static) verwendet:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es allgemein nicht empfohlen wird, die Struktur der Seite (geschrieben in HTML)
und die Manipulation des DOM (geschrieben in JavaScript) zu mischen,
werden die JavaScript-Teile hier zusammengefasst,
und vom HTML getrennt.

Zum Beispiel erstellt die folgende Funktion ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element,
fügt diesem Element Text hinzu und fügt es dann in den Dokumentenbaum ein:

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

## Fundamentale Datentypen

Diese Seite versucht, die verschiedenen Objekte und Typen in einfachen Worten zu beschreiben. Aber es gibt eine Reihe unterschiedlicher Datentypen, die durch die API übertragen werden und denen Sie bewusst sein sollten.

> [!NOTE]
> Da der überwiegende Teil des Codes, der das DOM verwendet, sich um die Manipulation von HTML-Dokumenten dreht, ist es üblich, sich auf die Knoten im DOM als **Elemente** zu beziehen, obwohl streng genommen nicht jeder Knoten ein Element ist.

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
        <a href="/de/docs/Web/API/Document">DOM-<code>document</code>-Referenzkapitel</a>
        beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>[`Node`](/de/docs/Web/API/Node)</td>
      <td>
        Jedes im Dokument befindliche Objekt ist eine Art von Knoten. In einem
        HTML-Dokument kann ein Objekt ein Elementknoten, aber auch ein Textknoten oder
        Attributknoten sein.
      </td>
    </tr>
    <tr>
      <td>[`Element`](/de/docs/Web/API/Element)</td>
      <td>
        Der <code>element</code>-Typ basiert auf <code>node</code>. Er bezieht sich
        auf ein Element oder einen Knoten vom Typ <code>element</code>, der von einem
        Mitglied der DOM-API zurückgegeben wird. Anstatt zum Beispiel zu sagen, dass die
        [`document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode eine
        Objektreferenz zu einem <code>node</code> zurückgibt, sagen wir einfach, dass diese Methode
        das <code>element</code> zurückgibt, das gerade im DOM erstellt wurde.
        <code>element</code>-Objekte implementieren die DOM-
        <code>Element</code>-Schnittstelle und auch die grundlegendere
        <code>Node</code>-Schnittstelle, die beide zusammen in dieser
        Referenz enthalten sind. In einem HTML-Dokument werden Elemente zusätzlich durch die
        [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle der HTML-DOM-API sowie
        andere Schnittstellen, die Fähigkeiten spezifischer Elementtypen beschreiben
        (zum Beispiel [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für
        {{HTMLElement("table")}}-Elemente), erweitert.
      </td>
    </tr>
    <tr>
      <td>[`NodeList`](/de/docs/Web/API/NodeList)</td>
      <td>
        Ein <code>nodeList</code> ist ein Array von Elementen, wie das, was
        von der Methode
        [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben wird. Artikel in einem
        <code>nodeList</code> werden entweder indexbasiert auf zwei Arten angesprochen:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        Diese beiden sind gleichwertig. Im ersten Fall ist <code>item()</code> die
        einzige Methode auf dem <code>nodeList</code>-Objekt. Letzteres verwendet die
        typische Array-Syntax, um das zweite Element in der Liste zu holen.
      </td>
    </tr>
    <tr>
      <td>[`Attr`](/de/docs/Web/API/Attr)</td>
      <td>
        Wenn ein <code>attribute</code> von einem Mitglied zurückgegeben wird (z.B. durch die
        <code>createAttribute()</code>-Methode), ist es eine Objektreferenz, die
        eine spezielle (wenn auch kleine) Schnittstelle für Attribute bereitstellt. Attribute
        sind genauso Knoten im DOM wie Elemente, auch wenn Sie sie selten
        als solche verwenden.
      </td>
    </tr>
    <tr>
      <td>[`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)</td>
      <td>
        Ein <code>namedNodeMap</code> ist wie ein Array, aber die Elemente werden nach
        Namen oder Index angesprochen, obwohl dieser letztere Fall lediglich eine Annehmlichkeit für
        die Aufzählung ist, da sie in keiner bestimmten Reihenfolge in der Liste sind. Ein
        <code>namedNodeMap</code> hat eine <code>item()</code>-Methode zu diesem
        Zweck, und Sie können auch Elemente zu einem
        <code>namedNodeMap</code> hinzufügen und daraus entfernen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt auch einige gebräuchliche Terminologieüberlegungen, die beachtet werden sollten. Es ist zum Beispiel üblich, einen [`Attr`](/de/docs/Web/API/Attr)-Knoten als `attribute` zu bezeichnen, und auf ein Array von DOM-Knoten als `nodeList` zu verweisen. Diese und andere Begriffe werden in der gesamten Dokumentation eingeführt und verwendet.

## DOM-Schnittstellen

Dieser Leitfaden behandelt die Objekte und die tatsächlichen _Dinge_, die Sie verwenden können, um die DOM-Hierarchie zu manipulieren. Es gibt viele Punkte, an denen das Verständnis, wie diese funktionieren, verwirrend sein kann. Zum Beispiel erhält das Objekt, das das HTML-`form`-Element darstellt, seine `name`-Eigenschaft von der `HTMLFormElement`-Schnittstelle, aber seine `className`-Eigenschaft von der `HTMLElement`-Schnittstelle. In beiden Fällen ist die Eigenschaft, die Sie benötigen, in diesem Form-Objekt.

Aber die Beziehung zwischen Objekten und den Schnittstellen, die sie im DOM implementieren, kann verwirrend sein, und so versucht dieser Abschnitt, ein wenig über die tatsächlichen Schnittstellen in der DOM-Spezifikation und ihre Verfügbarkeit zu sagen.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere verschiedene Schnittstellen. Das Tabellenobjekt implementiert zum Beispiel eine spezialisierte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle, die Methoden wie `createCaption` und `insertRow` umfasst. Da es jedoch auch ein HTML-Element ist, implementiert `table` die im DOM beschriebene `Element`-Schnittstelle im [`Element`](/de/docs/Web/API/Element)-Referenzkapitel. Schließlich, da ein HTML-Element innerhalb des DOM auch als Knoten in dem Knotensystem angesehen wird, das das Objektmodell für eine HTML- oder XML-Seite bildet, implementiert das Tabellenobjekt auch die grundlegendere `Node`-Schnittstelle, von der `Element` abgeleitet ist.

Wenn Sie eine Referenz auf ein `table`-Objekt erhalten, wie im folgenden Beispiel, verwenden Sie routinemäßig alle drei dieser Schnittstellen auf dem Objekt, möglicherweise ohne es zu wissen.

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

Dieser Abschnitt listet einige der am häufigsten verwendeten Schnittstellen im DOM auf. Die Idee ist nicht, zu beschreiben, was diese APIs hier tun, sondern Ihnen eine Vorstellung von den Arten von Methoden und Eigenschaften zu geben, die Sie häufig sehen werden, wenn Sie das DOM verwenden. Diese häufigen APIs werden in den längeren Beispielen im [DOM-Beispiele](/de/docs/Web/API/Document_Object_Model/Examples)-Kapitel am Ende dieses Buches verwendet.

Die `document`- und `window`-Objekte sind die Objekte, deren Schnittstellen Sie in der DOM-Programmierung am häufigsten verwenden. Einfach ausgedrückt, steht das `window`-Objekt für etwas wie den Browser, und das `document`-Objekt ist die Wurzel des Dokuments selbst. `Element` erbt von der generischen `Node`-Schnittstelle, und gemeinsam bieten diese beiden Schnittstellen viele der Methoden und Eigenschaften, die Sie auf individuellen Elementen verwenden. Diese Elemente können auch spezielle Schnittstellen haben, um mit dem Datentyp umzugehen, den diese Elemente enthalten, wie im `table`-Objekt-Beispiel im vorherigen Abschnitt.

Folgend eine kurze Liste gemeinsamer APIs in Web- und XML-Seiten-Scripting unter Verwendung des DOM.

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

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("textarea")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, setzen wir etwas Text in das `<textarea>`. Wenn der Benutzer auf den zweiten Button klickt, leeren wir den Text. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<textarea>` und die Buttons zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Buttonklicks zu hören
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

{{EmbedLiveSample("Textinhalt setzen", "", "150px")}}

### Ein Kind-Element hinzufügen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("div")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, erstellen wir ein neues Element und fügen es als Kind des `<div>` hinzu. Wenn der Benutzer auf den zweiten Button klickt, entfernen wir das Kind-Element. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<div>` und die Buttons zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Buttonklicks zu hören
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

{{EmbedLiveSample("Ein Kind-Element hinzufügen", "", "180px")}}

## Spezifikationen

{{Specifications}}
