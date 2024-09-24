---
title: Einführung in das DOM
slug: Web/API/Document_Object_Model/Introduction
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Das **Document Object Model** (_DOM_) ist die Datenrepräsentation der Objekte,
die die Struktur und den Inhalt eines Dokuments im Web ausmachen.
Dieser Leitfaden wird das DOM einführen,
zeigen, wie das DOM ein {{Glossary("HTML")}}-Dokument im Speicher darstellt,
und wie Sie APIs verwenden, um Webinhalte und Anwendungen zu erstellen.

## Was ist das DOM?

Das Document Object Model (DOM) ist eine Programmierschnittstelle für Webdokumente. Es stellt die Seite dar, sodass Programme die Dokumentenstruktur, den Stil und den Inhalt ändern können. Das DOM stellt das Dokument als Knoten und Objekte dar; auf diese Weise können Programmiersprachen mit der Seite interagieren.

Eine Webseite ist ein Dokument, das entweder im Browserfenster angezeigt oder als HTML-Quelle dargestellt werden kann. In beiden Fällen handelt es sich um dasselbe Dokument, aber die Darstellung im Document Object Model (DOM) ermöglicht dessen Manipulation. Als objektorientierte Darstellung der Webseite kann es mit einer Skriptsprache wie JavaScript modifiziert werden.

Zum Beispiel gibt das DOM an, dass die `querySelectorAll`-Methode in diesem Code-Snippet eine Liste aller {{HTMLElement("p")}}-Elemente im Dokument zurückgeben muss:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] ist das erste <p>-Element
// paragraphs[1] ist das zweite <p>-Element, usw.
alert(paragraphs[0].nodeName);
```

Alle Eigenschaften, Methoden und Ereignisse, die für die Bearbeitung und Erstellung von Webseiten verfügbar sind, sind in Objekten organisiert. Zum Beispiel das `document`-Objekt, das das Dokument selbst darstellt, jegliche `table`-Objekte, die die {{domxref("HTMLTableElement")}} DOM-Schnittstelle für den Zugriff auf HTML-Tabellen implementieren, und so weiter, sind alle Objekte.

Das DOM wird mit mehreren APIs gebaut, die zusammenarbeiten. Der Kern-[DOM](/de/docs/Web/API/Document_Object_Model) definiert die Entitäten, die jedes Dokument und die Objekte darin beschreiben. Dies wird nach Bedarf durch andere APIs erweitert, die dem DOM neue Funktionen und Fähigkeiten hinzufügen. Beispielsweise fügt die [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) Unterstützung für die Darstellung von HTML-Dokumenten zum Kern-DOM hinzu und die SVG-API fügt Unterstützung für die Darstellung von SVG-Dokumenten hinzu.

## DOM und JavaScript

Das vorherige kurze Beispiel, wie fast alle Beispiele, ist {{glossary("JavaScript")}}. Das heißt, es ist in JavaScript geschrieben, verwendet aber das DOM, um auf das Dokument und seine Elemente zuzugreifen. Das DOM ist keine Programmiersprache, aber ohne es würde die JavaScript-Sprache kein Modell oder Konzept von Webseiten, HTML-Dokumenten, SVG-Dokumenten und ihren Komponenten haben. Das Dokument als Ganzes, der Kopf, Tabellen im Dokument, Tabellenüberschriften, Text innerhalb der Tabellenzellen und alle anderen Elemente in einem Dokument sind Teile des Dokument-Objektmodells dieses Dokuments. Sie können alle mithilfe des DOM und einer Skriptsprache wie JavaScript zugegriffen und manipuliert werden.

Das DOM ist kein Teil der JavaScript-Sprache, sondern eine Web-API, die zum Erstellen von Websites verwendet wird. JavaScript kann auch in anderen Kontexten verwendet werden. Zum Beispiel führt Node.js JavaScript-Programme auf einem Computer aus, stellt jedoch eine andere Menge an APIs bereit, und die DOM-API ist kein Kernbestandteil der Node.js-Laufzeit.

Das DOM wurde unabhängig von einer bestimmten Programmiersprache entworfen, sodass die strukturelle Darstellung des Dokuments über eine einzige, konsistente API verfügbar ist. Auch wenn die meisten Webentwickler das DOM nur über JavaScript nutzen werden, können Implementierungen des DOM für jede Sprache erstellt werden, wie dieses Python-Beispiel zeigt:

```python
# Python DOM-Beispiel
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM-Eigenschaft des Dokumentobjekts
p_list = doc.getElementsByTagName("para")
```

Für weitere Informationen darüber, welche Technologien beim Schreiben von JavaScript im Web beteiligt sind, siehe [JavaScript-Technologieübersicht](/de/docs/Web/JavaScript/JavaScript_technologies_overview).

## Zugriff auf das DOM

Sie müssen nichts Besonderes tun, um mit der Nutzung des DOM zu beginnen. Sie verwenden die API direkt in JavaScript innerhalb dessen, was als _Script_ bezeichnet wird, ein Programm, das von einem Browser ausgeführt wird.

Wenn Sie ein Script erstellen, sei es inline in einem `<script>`-Element oder in die Webseite eingebunden, können Sie sofort die API für die {{domxref("document")}}- oder {{domxref("Window", "window")}}-Objekte verwenden, um das Dokument selbst oder eines der verschiedenen Elemente auf der Webseite (die Nachfahrenelemente des Dokuments) zu manipulieren. Ihr DOM-Programm kann so einfach sein wie das folgende Beispiel, das eine Nachricht mit der Funktion {{domxref("console/log_static", "console.log()")}} auf der Konsole anzeigt:

```html
<body onload="console.log('Welcome to my home page!');">
  …
</body>
```

Da es generell nicht empfohlen wird, die Struktur der Seite (in HTML geschrieben)
und die Manipulation des DOM (in JavaScript geschrieben) zu vermischen,
werden die JavaScript-Teile hier zusammengefasst und vom HTML getrennt.

Zum Beispiel erstellt die folgende Funktion ein neues {{HTMLElement("Heading_Elements", "h1")}}-Element,
fügt diesem Text hinzu und fügt es dann dem Baum des Dokuments hinzu:

```html
<html lang="en">
  <head>
    <script>
      // Diese Funktion wird ausgeführt, wenn das Dokument geladen ist
      window.onload = () => {
        // Ein paar Elemente in einer ansonsten leeren HTML-Seite erstellen
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

Diese Seite versucht, die verschiedenen Objekte und Typen in einfachen Begriffen zu beschreiben. Aber es gibt eine Reihe unterschiedlicher Datentypen, die durch die API weitergereicht werden, die Ihnen bewusst sein sollten.

> [!NOTE]
> Da sich der überwiegende Teil des Codes, der das DOM verwendet, um das Manipulieren von HTML-Dokumenten dreht, ist es üblich, auf die Knoten im DOM als **Elemente** zu verweisen, obwohl streng genommen nicht jeder Knoten ein Element ist.

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
      <td>{{domxref("Document")}}</td>
      <td>
        Wenn ein Mitglied ein Objekt vom Typ <code>document</code> zurückgibt (z.B. die
        <code>ownerDocument</code>-Eigenschaft eines Elements gibt das
        Dokument zurück, zu dem es gehört), ist dieses Objekt das
        <code>document</code>-Objekt selbst. Das
        <a href="/de/docs/Web/API/Document">DOM <code>document</code> Referenz</a>
        Kapitel beschreibt das <code>document</code>-Objekt.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        Jedes Objekt, das sich in einem Dokument befindet, ist ein Knoten irgendeiner Art. In einem
        HTML-Dokument kann ein Objekt ein Elementknoten, aber auch ein Textknoten oder
        Attributsknoten sein.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        Der <code>element</code>-Typ basiert auf <code>node</code>. Er bezieht
        sich auf ein Element oder einen Knoten vom Typ <code>element</code>, der von einem
        Mitglied der DOM-API zurückgegeben wird. Anstatt zum Beispiel zu sagen, dass die
        {{domxref("document.createElement()")}}-Methode eine
        Objektreferenz auf einen <code>node</code> zurückgibt, sagen wir einfach, dass diese Methode
        das <code>element</code> zurückgibt, das gerade im DOM erstellt wurde.
        <code>element</code>-Objekte implementieren die DOM
        <code>Element</code>-Schnittstelle und auch die grundlegendere
        <code>Node</code>-Schnittstelle, die beide in diesem
        Referenz enthalten sind. In einem HTML-Dokument werden Elemente durch die
        HTML DOM API's {{domxref("HTMLElement")}}-Schnittstelle sowie
        andere Schnittstellen, die Fähigkeiten bestimmter Arten von Elementen beschreiben
        (zum Beispiel {{domxref("HTMLTableElement")}} für
        {{HTMLElement("table")}}-Elemente) weiter verbessert.
      </td>
    </tr>
    <tr>
      <td>{{domxref("NodeList")}}</td>
      <td>
        Ein <code>nodeList</code> ist ein Array von Elementen, wie die Art, die
        von der Methode
        {{domxref("document.querySelectorAll()")}} zurückgegeben wird. Elemente in einer
        <code>nodeList</code> werden indexbasiert auf eine von zwei Arten zugegriffen:
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
      <td>{{domxref("Attr")}}</td>
      <td>
        Wenn ein <code>attribute</code> von einem Mitglied zurückgegeben wird (z.B. durch die
        <code>createAttribute()</code>-Methode), ist es eine Objektreferenz, die
        eine spezielle (wenn auch kleine) Schnittstelle für Attribute bereitstellt. Attribute
        sind Knoten im DOM, genauso wie Elemente, auch wenn man sie selten
        so verwendet.
      </td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td>
        Eine <code>namedNodeMap</code> ist wie ein Array, aber die Elemente werden
        durch Namen oder Index angesprochen, wobei letzterer Fall lediglich eine
        Bequemlichkeit zum Durchzählen darstellt, da sie in keiner bestimmten
        Ordnung in der Liste sind. Eine
        <code>namedNodeMap</code> hat eine <code>item()</code>-Methode zu diesem
        Zweck, und Sie können auch Elemente zu einer
        <code>namedNodeMap</code> hinzufügen und entfernen.
      </td>
    </tr>
  </tbody>
</table>

Es gibt auch einige allgemeine Begrifflichkeiten, die zu beachten sind. Es ist üblich, auf einen {{domxref("Attr")}}-Knoten als `attribute` zu verweisen, zum Beispiel, und auf ein Array von DOM-Knoten als `nodeList`. Sie werden diese Begriffe und andere in der gesamten Dokumentation eingeführt und verwendet finden.

## DOM-Schnittstellen

Dieser Leitfaden beschäftigt sich mit den Objekten und den tatsächlichen _Dingen_, die Sie zur Manipulation der DOM-Hierarchie verwenden können. Es gibt viele Punkte, an denen das Verständnis, wie diese funktionieren, verwirrend sein kann. Beispielsweise erhält das Objekt, das das HTML-`form`-Element darstellt, seine `name`-Eigenschaft von der `HTMLFormElement`-Schnittstelle, aber seine `className`-Eigenschaft von der `HTMLElement`-Schnittstelle. In beiden Fällen befindet sich die gewünschte Eigenschaft in diesem Form-Objekt.

Aber die Beziehung zwischen Objekten und den Schnittstellen, die sie im DOM implementieren, kann verwirrend sein, und diese Sektion versucht, etwas über die tatsächlichen Schnittstellen in der DOM-Spezifikation zu sagen und wie sie verfügbar gemacht werden.

### Schnittstellen und Objekte

Viele Objekte implementieren mehrere verschiedene Schnittstellen. Das Tabellen-Objekt zum Beispiel implementiert eine spezialisierte {{domxref("HTMLTableElement")}}-Schnittstelle, die solche Methoden wie `createCaption` und `insertRow` umfasst. Aber da es auch ein HTML-Element ist, implementiert `table` die `Element`-Schnittstelle, die im DOM {{domxref("Element")}} Referenzkapitel beschrieben ist. Und schließlich, da ein HTML-Element, soweit es das DOM betrifft, ein Knoten im Baum von Knoten ist, die das Objektmodell für eine HTML- oder XML-Seite ausmachen, implementiert das Tabellen-Objekt auch die grundlegendere `Node`-Schnittstelle, von der `Element` abgeleitet ist.

Wenn Sie eine Referenz auf ein `table`-Objekt erhalten, wie im folgenden Beispiel, verwenden Sie routinemäßig alle drei dieser Schnittstellen austauschbar auf dem Objekt, vielleicht ohne es zu wissen.

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element-Schnittstelle
for (let i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement-Schnittstelle: border-Attribut
  if (tableAttrs[i].nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement-Schnittstelle: summary-Attribut
table.summary = "note: increased border";
```

### Kernschnittstellen im DOM

Dieser Abschnitt listet einige der am häufigsten verwendeten Schnittstellen im DOM auf. Die Idee ist nicht zu beschreiben, was diese APIs hier tun, sondern Ihnen eine Vorstellung von den Arten von Methoden und Eigenschaften zu geben, die Sie sehr oft verwenden werden, während Sie das DOM verwenden. Diese gängigen APIs werden in den längeren Beispielen im Kapitel [DOM-Beispiele](/de/docs/Web/API/Document_Object_Model/Examples) am Ende dieses Buches verwendet.

Die `document`- und `window`-Objekte sind die Objekte, deren Schnittstellen Sie in der DOM-Programmierung im Allgemeinen am häufigsten verwenden. In einfachen Worten, das `window`-Objekt repräsentiert etwas wie den Browser, und das `document`-Objekt ist die Wurzel des Dokuments selbst. `Element` erbt von der generischen `Node`-Schnittstelle, und zusammen bieten diese beiden Schnittstellen viele der Methoden und Eigenschaften, die Sie auf individuellen Elementen verwenden. Diese Elemente können auch spezifische Schnittstellen haben, um mit der Art von Daten umzugehen, die diese Elemente enthalten, wie im Beispielszenario mit dem `table`-Objekt im vorherigen Abschnitt.

Die folgende Liste ist eine kurze Aufstellung von gängigen APIs beim Skripting von Web- und XML-Seiten mithilfe des DOM.

- {{domxref("document.querySelector()")}}
- {{domxref("document.querySelectorAll()")}}
- {{domxref("document.createElement()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("EventTarget.addEventListener()")}}
- {{domxref("HTMLElement.style")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Window.load_event", "window.onload")}}
- {{domxref("window.scrollTo()")}}

## Beispiele

### Setzen von Textinhalt

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("textarea")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, setzen wir etwas Text in das `<textarea>`. Wenn der Benutzer auf den zweiten Button klickt, löschen wir den Text. Wir verwenden:

- {{domxref("Document.querySelector()")}}, um auf das `<textarea>` und die Schaltfläche zuzugreifen
- {{domxref("EventTarget.addEventListener()")}} zum Hören auf Button-Klicks
- {{domxref("Node.textContent")}} zum Setzen und Löschen des Textes.

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

Dieses Beispiel verwendet ein {{HTMLElement("div")}}-Element, das ein {{HTMLElement("div")}} und zwei {{HTMLElement("button")}}-Elemente enthält. Wenn der Benutzer auf den ersten Button klickt, erstellen wir ein neues Element und fügen es als Kind des `<div>` hinzu. Wenn der Benutzer auf den zweiten Button klickt, entfernen wir das Kindelement. Wir verwenden:

- {{domxref("Document.querySelector()")}}, um auf das `<div>` und die Schaltflächen zuzugreifen
- {{domxref("EventTarget.addEventListener()")}} zum Hören auf Button-Klicks
- {{domxref("Document.createElement")}}, um das Element zu erstellen
- {{domxref("Node.appendChild()")}} zum Hinzufügen des Kindes
- {{domxref("Node.removeChild()")}} zum Entfernen des Kindes.

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
  // Fügen Sie nur ein Kind hinzu, wenn wir nicht bereits eines haben
  // zusätzlich zum Textknoten "parent"
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
