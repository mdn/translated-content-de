---
title: Einführung in das DOM
slug: Web/API/Document_Object_Model/Introduction
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (_DOM_) ist die Datenrepräsentation der Objekte,
die die Struktur und den Inhalt eines Dokuments im Web ausmachen.
Dieser Leitfaden stellt das DOM vor,
schaut sich an, wie das DOM ein [HTML](/de/docs/Glossary/HTML)-Dokument im Speicher darstellt,
und wie Sie APIs nutzen können, um Webinhalte und Anwendungen zu erstellen.

## Was ist das DOM?

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente.
Es stellt die Seite so dar, dass Programme die Dokumentstruktur, das Design und den Inhalt ändern können.
Das DOM stellt das Dokument als Knoten und Objekte dar;
so können Programmiersprachen mit der Seite interagieren.

Eine Webseite ist ein Dokument, das entweder im Browserfenster oder als HTML-Quelle angezeigt werden kann. In beiden Fällen ist es dasselbe Dokument, aber die Darstellung durch das Document Object Model (DOM) ermöglicht es, es zu manipulieren. Als objektorientierte Darstellung der Webseite kann es mit einer Skriptsprache wie JavaScript modifiziert werden.

Zum Beispiel gibt das DOM an, dass die `querySelectorAll`-Methode in diesem Code-Snippet eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, die zum Manipulieren und Erstellen von Webseiten verfügbar sind, sind in Objekte organisiert. Zum Beispiel ist das `document`-Objekt, das das Dokument selbst repräsentiert, und jedes `table`-Objekt, das die [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) DOM-Schnittstelle zur Zugriff auf HTML-Tabellen implementiert, ein solches Objekt.

Das DOM wird mithilfe mehrerer APIs aufgebaut, die zusammenarbeiten.
Das Kern-[DOM](/de/docs/Web/API/Document_Object_Model) definiert die Entitäten,
die jedes Dokument und die darin enthaltenen Objekte beschreiben.
Dies wird nach Bedarf von anderen APIs erweitert, die neue Funktionen und Fähigkeiten zum DOM hinzufügen.
Zum Beispiel fügt die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) dem Kern-DOM Unterstützung zur Darstellung von HTML-Dokumenten hinzu,
und die SVG API fügt Unterstützung zur Darstellung von SVG-Dokumenten hinzu.

## DOM und JavaScript

Das vorherige kurze Beispiel, wie fast alle Beispiele, ist [JavaScript](/de/docs/Glossary/JavaScript). Das heißt, es ist in JavaScript _geschrieben_, verwendet jedoch das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache, aber ohne es hätte die JavaScript-Sprache kein Modell oder keine Vorstellung von Webseiten, HTML-Dokumenten, SVG-Dokumenten und deren Einzelteilen. Das Dokument als Ganzes, der Kopf, Tabellen in dem Dokument, Tabellenköpfe, Text in den Tabellenspalten und alle anderen Elemente in einem Dokument sind Teile des Dokumentobjektmodells für dieses Dokument. Sie alle können mithilfe des DOM und einer Skriptsprache wie JavaScript zugegriffen und manipuliert werden.

Das DOM ist kein Teil der JavaScript-Sprache,
sondern eine Web-API, die zum Erstellen von Websites verwendet wird.
JavaScript kann auch in anderen Kontexten verwendet werden.
Beispielsweise führt Node.js JavaScript-Programme auf einem Computer aus,
bietet jedoch einen anderen Satz von APIs,
und die DOM-API ist kein wesentlicher Bestandteil der Node.js-Laufzeitumgebung.

Das DOM wurde entwickelt, um unabhängig von einer bestimmten Programmiersprache zu sein, sodass die strukturelle Darstellung des Dokuments über eine einzelne, konsistente API zugänglich ist. Auch wenn die meisten Webentwickler das DOM nur über JavaScript verwenden, können Implementierungen des DOM für jede Sprache erstellt werden, wie dieses Python-Beispiel zeigt:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

Für weitere Informationen darüber, welche Technologien beim Schreiben von JavaScript im Web beteiligt sind, siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Zugriff auf das DOM

Sie müssen nichts Besonderes tun, um das DOM zu verwenden.
Sie verwenden die API direkt in JavaScript innerhalb eines sogenannten _Scripts_, einem Programm, das von einem Browser ausgeführt wird.

Wenn Sie ein Script erstellen, sei es inline in einem `<script>`-Element oder in die Webseite eingebunden, können Sie sofort die API für die [`document`](/de/docs/Web/API/Document)- oder [`window`](/de/docs/Web/API/Window)-Objekte verwenden, um das Dokument selbst oder eines der verschiedenen Elemente der Webseite (die Nachkommenelemente des Dokuments) zu manipulieren. Ihr DOM-Programm könnte so einfach sein wie das folgende Beispiel, das eine Nachricht in der Konsole mittels der [`console.log()`](/de/docs/Web/API/Console/log_static)-Funktion anzeigt:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es im Allgemeinen nicht empfohlen wird, die Struktur der Seite (geschrieben in HTML)
und die Manipulation des DOM (geschrieben in JavaScript) zu mischen,
werden hier die JavaScript-Teile zusammengefasst
und vom HTML getrennt.

Zum Beispiel erstellt die folgende Funktion ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element,
fügt diesem Element Text hinzu
und fügt es dann dem Baum für das Dokument hinzu:

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

Diese Seite versucht, die verschiedenen Objekte und Typen in einfachen Worten zu beschreiben. Es gibt jedoch eine Reihe unterschiedlicher Datentypen, die in der API herumgereicht werden, die Ihnen bewusst sein sollten.

> [!NOTE]
> Da sich die große Mehrheit des Codes, der das DOM verwendet, um die Manipulation von HTML-Dokumenten dreht, ist es üblich, die Knoten im DOM als **Elemente** zu bezeichnen, obwohl streng genommen nicht jeder Knoten ein Element ist.

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
        Wenn ein Mitglied ein Objekt vom Typ <code>document</code> zurückgibt (z.B. die
        <code>ownerDocument</code>-Eigenschaft eines Elements gibt das
        <code>document</code> zurück, zu dem es gehört), ist dieses Objekt das Wurzel-
        <code>document</code>-Objekt selbst. Das
        <a href="/de/docs/Web/API/Document">DOM <code>document</code> Referenz</a>
        Kapitel beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>[`Node`](/de/docs/Web/API/Node)</td>
      <td>
        Jedes im Dokument befindliche Objekt ist eine Art Knoten. In einem
        HTML-Dokument kann ein Objekt ein Elementknoten, aber auch ein Textknoten oder
        ein Attributknoten sein.
      </td>
    </tr>
    <tr>
      <td>[`Element`](/de/docs/Web/API/Element)</td>
      <td>
        Der <code>element</code>-Typ basiert auf <code>node</code>. Er bezieht
        sich auf ein Element oder einen Knoten vom Typ <code>element</code>, der von einem
        Mitglied der DOM-API zurückgegeben wird. Statt beispielsweise zu sagen, dass die
        [`document.createElement()`](/de/docs/Web/API/Document/createElement)-Methode ein
        Objekt-Referenz zu einem <code>node</code> zurückgibt, sagen wir einfach, dass diese Methode
        das <code>element</code> zurückgibt, das gerade im DOM erstellt wurde.
        <code>element</code>-Objekte implementieren die DOM-
        <code>Element</code>-Schnittstelle und auch die grundlegendere
        <code>Node</code>-Schnittstelle, die beide in dieser
        Dokumentation enthalten sind. In einem HTML-Dokument werden Elemente durch die
        [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle der HTML-DOM-API sowie durch
        andere Schnittstellen erweitert, die Fähigkeiten für spezifische Arten von Elementen
        beschreiben (zum Beispiel [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für
        {{HTMLElement("table")}}-Elemente).
      </td>
    </tr>
    <tr>
      <td>[`NodeList`](/de/docs/Web/API/NodeList)</td>
      <td>
        Ein <code>nodeList</code> ist ein Array von Elementen, ähnlich dem, das
        von der Methode
        [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben wird. Elemente in einem
        <code>nodeList</code> werden über den Index auf zwei Arten zugegriffen:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        Diese beiden sind gleichwertig. Beim ersten ist <code>item()</code> die
        einzige Methode des <code>nodeList</code>-Objekts. Die letztere verwendet die
        typische Array-Syntax, um das zweite Element der Liste abzurufen.
      </td>
    </tr>
    <tr>
      <td>[`Attr`](/de/docs/Web/API/Attr)</td>
      <td>
        Wenn ein <code>attribute</code> von einem Mitglied zurückgegeben wird (z.B. von der
        <code>createAttribute()</code>-Methode), ist es eine Objekt-Referenz, die
        eine spezielle (wenn auch kleine) Schnittstelle für Attribute bereitstellt. Attribute
        sind im DOM ebenso Knoten wie Elemente, obwohl Sie sie möglicherweise selten so
        verwenden.
      </td>
    </tr>
    <tr>
      <td>[`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)</td>
      <td>
        Ein <code>namedNodeMap</code> ist wie ein Array, aber die Elemente werden
        durch Name oder Index zugegriffen, obwohl letzteres nur eine Bequemlichkeit für
        die Aufzählung ist, da sie in keiner bestimmten Reihenfolge in der Liste sind. Ein
        <code>namedNodeMap</code> hat zu diesem Zweck eine <code>item()</code>-Methode, und Sie
        können auch Elemente in einem <code>namedNodeMap</code> hinzufügen und entfernen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt auch einige häufige Überlegungen zur Terminologie, die Sie beachten sollten. Es ist üblich, jeden [`Attr`](/de/docs/Web/API/Attr)-Knoten als `attribute` zu bezeichnen und ein Array von DOM-Knoten als `nodeList`. Sie werden feststellen, dass diese Begriffe und andere in der gesamten Dokumentation eingeführt und verwendet werden.

## DOM-Schnittstellen

Dieser Leitfaden behandelt die Objekte und die tatsächlichen _Dinge_, die Sie verwenden können, um die DOM-Hierarchie zu manipulieren. Viele Punkte können verwirrend sein, wenn Sie verstehen, wie diese funktionieren. Beispielsweise erhält das Objekt, das das HTML-`form`-Element darstellt, seine `name`-Eigenschaft von der `HTMLFormElement`-Schnittstelle, aber seine `className`-Eigenschaft von der `HTMLElement`-Schnittstelle. In beiden Fällen befindet sich die Eigenschaft, die Sie benötigen, in diesem Formularobjekt.

Aber die Beziehung zwischen Objekten und den Schnittstellen, die sie im DOM implementieren, kann verwirrend sein, und so versucht dieser Abschnitt, ein wenig über die tatsächlichen Schnittstellen in der DOM-Spezifikation und ihre Verfügbarkeit zu sagen.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere verschiedene Schnittstellen. Das Tabellenobjekt implementiert beispielsweise eine spezialisierte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle, die Methoden wie `createCaption` und `insertRow` umfasst. Da es aber auch ein HTML-Element ist, implementiert `table` die `Element`-Schnittstelle, die im DOM [`Element`](/de/docs/Web/API/Element)-Referenzkapitel beschrieben ist. Schließlich implementiert das Tabellenobjekt, da ein HTML-Element auch, soweit das DOM betrifft, ein Knoten im Baum der Knoten ist, die das Objektschema für eine HTML- oder XML-Seite bilden, die grundlegendere `Node`-Schnittstelle, von der `Element` abgeleitet ist.

Wenn Sie eine Referenz auf ein `table`-Objekt erhalten, verwenden Sie routinemäßig alle drei dieser Schnittstellen austauschbar im Objekt, möglicherweise, ohne es zu wissen.

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

Dieser Abschnitt listet einige der am häufigsten verwendeten Schnittstellen im DOM auf. Das Ziel ist es nicht, hier zu beschreiben, was diese APIs tun, sondern Ihnen eine Vorstellung von den Arten von Methoden und Eigenschaften zu geben, die Sie sehr häufig beim Verwenden des DOM sehen werden. Diese häufig verwendeten APIs werden in den längeren Beispielen im [DOM Examples](/de/docs/Web/API/Document_Object_Model/Examples)-Kapitel am Ende dieses Buches verwendet.

Die `document`- und `window`-Objekte sind die Objekte, deren Schnittstellen Sie in der Regel am häufigsten in der DOM-Programmierung verwenden. Einfach ausgedrückt, repräsentiert das `window`-Objekt so etwas wie den Browser, und das `document`-Objekt ist die Wurzel des Dokuments selbst. `Element` erbt von der generischen `Node`-Schnittstelle, und zusammen bieten diese beiden Schnittstellen viele der Methoden und Eigenschaften, die Sie auf einzelnen Elementen verwenden. Diese Elemente können auch spezifische Schnittstellen für den Umgang mit der Art von Daten haben, die diese Elemente halten, wie im Beispiel des `table`-Objekts im vorherigen Abschnitt.

Die folgende Liste enthält eine kurze Liste häufiger APIs bei der Skriptprogrammierung von Web- und XML-Seiten unter Verwendung des DOM.

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

### Festlegen des Textinhalts

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element mit einem {{HTMLElement("textarea")}} und zwei {{HTMLElement("button")}}-Elementen. Wenn der Benutzer den ersten Button anklickt, setzen wir einen Text in das `<textarea>`. Wenn der Benutzer den zweiten Button anklickt, löschen wir den Text. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<textarea>` und die Schaltfläche zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Klicks auf die Schaltflächen zu reagieren
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

### Hinzufügen eines Kindelements

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element mit einem {{HTMLElement("div")}} und zwei {{HTMLElement("button")}}-Elementen. Wenn der Benutzer den ersten Button anklickt, erstellen wir ein neues Element und fügen es als Kind des `<div>` ein. Wenn der Benutzer den zweiten Button anklickt, entfernen wir das Kindelement. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<div>` und die Schaltflächen zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Klicks auf die Schaltflächen zu reagieren
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
