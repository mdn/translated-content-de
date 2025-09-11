---
title: Einführung in das DOM
slug: Web/API/Document_Object_Model/Introduction
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (_DOM_) ist die Datenrepräsentation der Objekte,
die die Struktur und den Inhalt eines Dokuments im Web ausmachen.
Dieser Leitfaden wird das DOM einführen,
untersuchen, wie das DOM ein {{Glossary("HTML", "HTML")}}-Dokument im Speicher darstellt
und wie man APIs verwendet, um Webinhalte und Anwendungen zu erstellen.

## Was ist das DOM?

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente.
Es stellt die Seite so dar, dass Programme die Struktur, den Stil und den Inhalt des Dokuments ändern können.
Das DOM repräsentiert das Dokument als Knoten und Objekte;
so können Programmiersprachen mit der Seite interagieren.

Eine Webseite ist ein Dokument, das entweder im Browserfenster angezeigt oder als HTML-Quelle angezeigt werden kann. In beiden Fällen ist es dasselbe Dokument, aber die Darstellung im Document Object Model (DOM) ermöglicht eine Manipulation. Als objektorientierte Darstellung der Webseite kann es mit einer Skriptsprache wie JavaScript modifiziert werden.

Zum Beispiel gibt das DOM an, dass die Methode `querySelectorAll` in diesem Codeausschnitt eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, die zur Manipulation und Erstellung von Webseiten zur Verfügung stehen, sind in Objekten organisiert. Zum Beispiel das `document`-Objekt, das das Dokument selbst darstellt, sowie `table`-Objekte, die die `HTMLTableElement`-DOM-Schnittstelle zur Zugriff auf HTML-Tabellen implementieren, und so weiter, sind alle Objekte.

Das DOM wird mit mehreren APIs aufgebaut, die zusammenarbeiten.
Das Kern-[DOM](/de/docs/Web/API/Document_Object_Model) definiert die Entitäten,
die jedes Dokument beschreiben und die Objekte innerhalb davon.
Dies wird nach Bedarf durch andere APIs erweitert, die dem DOM neue Funktionen und Fähigkeiten hinzufügen.
Zum Beispiel fügt die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) dem Kern-DOM Unterstützung für die Darstellung von HTML-Dokumenten hinzu,
und die SVG-API fügt Unterstützung für die Darstellung von SVG-Dokumenten hinzu.

## DOM und JavaScript

Das vorherige kurze Beispiel, wie fast alle Beispiele, ist {{Glossary("JavaScript", "JavaScript")}}. Das heißt, es ist in JavaScript _geschrieben_, aber _verwendet_ das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache, aber ohne es hätte die JavaScript-Sprache kein Modell oder Verständnis von Webseiten, HTML-Dokumenten, SVG-Dokumenten und deren Bestandteilen. Das Dokument als Ganzes, der Kopf, Tabellen innerhalb des Dokuments, Tabellenüberschriften, Text innerhalb der Tabellenzellen und alle anderen Elemente in einem Dokument sind Teile des Document Object Model für dieses Dokument. Sie können alle über das DOM und eine Skriptsprache wie JavaScript zugegriffen und manipuliert werden.

Das DOM ist nicht Teil der JavaScript-Sprache,
sondern vielmehr eine Web-API zur Erstellung von Websites.
JavaScript kann auch in anderen Kontexten verwendet werden.
Zum Beispiel führt Node.js JavaScript-Programme auf einem Computer aus,
stellt aber eine andere Menge an APIs bereit,
und die DOM-API ist kein Kernbestandteil der Node.js-Laufzeitumgebung.

Das DOM wurde entwickelt, um unabhängig von einer bestimmten Programmiersprache zu sein, und macht die Strukturrepräsentation des Dokuments über eine konsistente API verfügbar.
Auch wenn die meisten Webentwickler das DOM nur über JavaScript verwenden werden, können Implementierungen des DOM für jede Sprache entwickelt werden, wie dieses Python-Beispiel demonstriert:

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

Für weitere Informationen über die Technologien, die beim Schreiben von JavaScript im Web beteiligt sind, siehe [JavaScript-Technologien Übersicht](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Zugriff auf das DOM

Sie müssen nichts Besonderes tun, um das DOM zu verwenden.
Sie verwenden die API direkt in JavaScript innerhalb eines sogenannten _Scripts_, eines Programms, das von einem Browser ausgeführt wird.

Wenn Sie ein Script erstellen, entweder inline in einem `<script>`-Element oder in die Webseite eingefügt, können Sie sofort die API für die [`document`](/de/docs/Web/API/Document) oder [`window`](/de/docs/Web/API/Window)-Objekte verwenden, um das Dokument selbst oder eines der verschiedenen Elemente auf der Webseite (die Nachkommenelemente des Dokuments) zu manipulieren. Ihre DOM-Programmierung kann so einfach sein wie das folgende Beispiel, das eine Nachricht auf der Konsole anzeigt, indem die [`console.log()`](/de/docs/Web/API/console/log_static)-Funktion verwendet wird:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es im Allgemeinen nicht empfohlen wird, die Struktur der Seite (in HTML geschrieben)
und die Manipulation des DOM (in JavaScript geschrieben) zu mischen,
werden die JavaScript-Teile hier zusammengefasst
und vom HTML getrennt.

Ein Beispiel dafür ist die folgende Funktion, die ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element erstellt,
Text zu diesem Element hinzufügt
und es dann dem Baum für das Dokument hinzufügt:

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

## Fundamentale Datentypen

Diese Seite versucht, die verschiedenen Objekte und Typen in einfachen Begriffen zu beschreiben. Aber es gibt eine Reihe unterschiedlicher Datentypen, die innerhalb der API herumgereicht werden und die Ihnen bewusst sein sollten.

> [!NOTE]
> Da der Großteil des Codes, der das DOM verwendet, sich um die Manipulation von HTML-Dokumenten dreht, ist es üblich, sich auf die Knoten im DOM als **Elemente** zu beziehen, obwohl streng genommen nicht jeder Knoten ein Element ist.

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
        <code>ownerDocument</code>-Eigenschaft eines Elements gibt das <code>document</code>,
        zu dem es gehört, zurück), ist dieses Objekt das Wurzel-
        <code>document</code>-Objekt selbst. Das
        <a href="/de/docs/Web/API/Document">DOM-<code>document</code>-Referenzkapitel</a>
        beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>[`Node`](/de/docs/Web/API/Node)</td>
      <td>
        Jedes Objekt, das sich innerhalb eines Dokuments befindet, ist ein Knoten
        irgendeiner Art. In einem HTML-Dokument kann ein Objekt ein Elementknoten,
        aber auch ein Textknoten oder Attributknoten sein.
      </td>
    </tr>
    <tr>
      <td>[`Element`](/de/docs/Web/API/Element)</td>
      <td>
        Der Typ <code>element</code> basiert auf <code>node</code>. Es bezieht
        sich auf ein Element oder einen Knoten des Typs <code>element</code>,
        das von einem Mitglied der DOM-API zurückgegeben wird. Anstatt zum
        Beispiel zu sagen, dass die Methode
        [`document.createElement()`](/de/docs/Web/API/Document/createElement) ein
        Objektverweis zu einem <code>node</code> zurückgibt, sagen wir einfach,
        dass diese Methode das <code>element</code> zurückgibt, das gerade im DOM
        erstellt wurde. <code>element</code>-Objekte implementieren die DOM-
        <code>Element</code>-Schnittstelle sowie die grundlegendere
        <code>Node</code>-Schnittstelle, die beide zusammen in dieser
        Referenz enthalten sind. In einem HTML-Dokument werden Elemente
        weitergehend durch die HTML-DOM-API-
        [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle verbessert
        sowie durch andere Schnittstellen, die Fähigkeiten spezifischer
        Elementarten beschreiben (zum Beispiel
        [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für
        {{HTMLElement("table")}}-Elemente).
      </td>
    </tr>
    <tr>
      <td>[`NodeList`](/de/docs/Web/API/NodeList)</td>
      <td>
        Eine <code>nodeList</code> ist ein Array von Elementen, wie es
        von der Methode
        [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
        zurückgegeben wird. Elemente in einer <code>nodeList</code> werden entweder
        durch Index auf eine von zwei Arten angesprochen:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        Diese beiden sind gleichwertig. Im ersten Beispiel ist
        <code>item()</code> die alleinige Methode auf dem
        <code>nodeList</code>-Objekt. Das letztere nutzt die typische
        Array-Syntax, um das zweite Element in der Liste abzurufen.
      </td>
    </tr>
    <tr>
      <td>[`Attr`](/de/docs/Web/API/Attr)</td>
      <td>
        Wenn ein <code>attribute</code> von einem Mitglied zurückgegeben wird (z.B.
        von der <code>createAttribute()</code>-Methode), ist es ein
        Objektverweis, der eine spezielle (wenn auch kleine) Schnittstelle
        für Attribute bereitstellt. Attribute sind Knoten im DOM, genau
        wie es Elemente sind, obwohl Sie sie selten als solche verwenden werden.
      </td>
    </tr>
    <tr>
      <td>[`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)</td>
      <td>
        Ein <code>namedNodeMap</code> ist wie ein Array, aber die Elemente werden
        über den Namen oder den Index geladen, obwohl der letztere Fall lediglich
        eine Bequemlichkeit für die Aufzählung ist, da sie in keiner
        bestimmten Reihenfolge in der Liste sind. Ein <code>namedNodeMap</code>
        hat eine <code>item()</code>-Methode zu diesem Zweck, und Sie können auch
        Elemente aus einem <code>namedNodeMap</code> hinzufügen und entfernen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt auch einige gängige Terminologieüberlegungen, die Sie beachten sollten. So ist es üblich, jeden [`Attr`](/de/docs/Web/API/Attr)-Knoten als `attribute` zu bezeichnen, zum Beispiel, und ein Array von DOM-Knoten als `nodeList` zu bezeichnen. Diese und andere Begriffe werden in der Dokumentation eingeführt und verwendet.

## DOM-Schnittstellen

Dieser Leitfaden handelt von den Objekten und den tatsächlichen _Dingen_, die Sie verwenden können, um die DOM-Hierarchie zu manipulieren. Es gibt viele Punkte, an denen das Verständnis, wie diese funktionieren, verwirrend sein kann. Zum Beispiel erhält das Objekt, das das HTML-`form`-Element darstellt, seine `name`-Eigenschaft von der `HTMLFormElement`-Schnittstelle, aber seine `className`-Eigenschaft von der `HTMLElement`-Schnittstelle. In beiden Fällen befindet sich die gewünschte Eigenschaft in diesem Form-Objekt.

Aber die Beziehung zwischen den Objekten und den Schnittstellen, die sie im DOM implementieren, kann verwirrend sein, und dieser Abschnitt versucht, ein wenig über die tatsächlichen Schnittstellen in der DOM-Spezifikation zu sagen und wie sie verfügbar gemacht werden.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere verschiedene Schnittstellen. Das Tabellenobjekt implementiert zum Beispiel eine spezialisierte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle, die Methoden wie `createCaption` und `insertRow` umfasst. Da es jedoch auch ein HTML-Element ist, implementiert `table` die `Element`-Schnittstelle, die im DOM-Referenzkapitel für [`Element`](/de/docs/Web/API/Element) beschrieben wird. Schließlich, da ein HTML-Element auch in Bezug auf das DOM ein Knoten im Knotenbaum ist, der das Objektmodell für eine HTML- oder XML-Seite bildet, implementiert das Tabellenobjekt auch die grundlegendere `Node`-Schnittstelle, aus der `Element` abgeleitet ist.

Wenn Sie, wie im folgenden Beispiel, eine Referenz auf ein `table`-Objekt erhalten, nutzen Sie routinemäßig alle drei dieser Schnittstellen austauschbar auf dem Objekt, vielleicht ohne es zu wissen.

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

### Kernschnittstellen im DOM

Dieser Abschnitt listet einige der am häufigsten verwendeten Schnittstellen im DOM auf. Die Idee ist nicht, hier zu beschreiben, was diese APIs tun, sondern Ihnen eine Vorstellung von den Arten von Methoden und Eigenschaften zu geben, die Sie sehr häufig beim Verwenden des DOMs sehen werden. Diese allgemeinen APIs werden in den längeren Beispielen im [DOM-Beispiele](/de/docs/Web/API/Document_Object_Model/Examples)-Kapitel am Ende dieses Buchs verwendet.

Die `document`- und `window`-Objekte sind die Objekte, deren Schnittstellen Sie im DOM-Programmieren am häufigsten verwenden. Einfach ausgedrückt, repräsentiert das `window`-Objekt etwas wie den Browser, und das `document`-Objekt ist die Wurzel des Dokuments selbst. `Element` leitet sich von der generischen `Node`-Schnittstelle ab, und zusammen bieten diese beiden Schnittstellen viele der Methoden und Eigenschaften, die Sie auf einzelnen Elementen verwenden. Diese Elemente können auch spezifische Schnittstellen für den Umgang mit den Daten haben, die diese Elemente enthalten, wie im Beispiel des `table`-Objekts im vorherigen Abschnitt.

Die folgende Liste stellt einen kurzen Überblick über häufig verwendete APIs in Web- und XML-Seitenskripten mit dem DOM dar.

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

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("textarea")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer den ersten Knopf klickt, setzen wir einen Text im `<textarea>`. Wenn der Benutzer den zweiten Knopf klickt, löschen wir den Text. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<textarea>` und die Schaltfläche zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Knopf-Klicks zu hören
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

### Ein Kind-Element hinzufügen

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("div")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer den ersten Knopf klickt, erstellen wir ein neues Element und fügen es als Kind des `<div>` hinzu. Wenn der Benutzer den zweiten Knopf klickt, entfernen wir das Kind-Element wieder. Wir verwenden:

- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector), um auf das `<div>` und die Schaltflächen zuzugreifen
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um auf Knopf-Klicks zu hören
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
