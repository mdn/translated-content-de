---
title: AbstractRange
slug: Web/API/AbstractRange
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("DOM")}}

Das **`AbstractRange`**-abstrakte Interface ist die Basisklasse, auf der alle {{Glossary("DOM", "DOM")}}-Bereichstypen definiert sind. Ein **Bereich** ist ein Objekt, das die Start- und Endpunkte eines Abschnitts von Inhalt im Dokument angibt.

> [!NOTE]
> Als abstraktes Interface werden Sie kein Objekt des Typs `AbstractRange` direkt instanziieren. Stattdessen verwenden Sie die Interfaces [`Range`](/de/docs/Web/API/Range) oder [`StaticRange`](/de/docs/Web/API/StaticRange). Um den Unterschied zwischen diesen beiden Interfaces zu verstehen und zu wissen, welches für Ihre Bedürfnisse geeignet ist, konsultieren Sie die Dokumentation der jeweiligen Interfaces.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`collapsed`](/de/docs/Web/API/AbstractRange/collapsed) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Bereich _kollabiert_ ist. Ein kollabierter Bereich ist ein Bereich, dessen Start- und Endposition gleich sind, was zu einem Bereich mit null Zeichen Länge führt.
- [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) {{ReadOnlyInline}}
  - : Das [`Node`](/de/docs/Web/API/Node)-Objekt, in dem das Ende des Bereichs liegt, wie durch die Eigenschaft `endOffset` angegeben.
- [`endOffset`](/de/docs/Web/API/AbstractRange/endOffset) {{ReadOnlyInline}}
  - : Ein Integer-Wert, der den Versatz in Zeichen vom Anfang des Inhalts des Knotens bis zum letzten Zeichen des Bereichs angibt, der durch das Bereichsobjekt repräsentiert wird. Dieser Wert muss kleiner sein als die Länge des `endContainer`-Knotens.
- [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) {{ReadOnlyInline}}
  - : Der DOM-`Node`, in dem der Anfang des Bereichs liegt, wie durch die Eigenschaft `startOffset` angegeben.
- [`startOffset`](/de/docs/Web/API/AbstractRange/startOffset) {{ReadOnlyInline}}
  - : Ein Integer-Wert, der den Versatz in Zeichen vom Anfang des Inhalts des Knotens bis zum ersten Zeichen des Inhalts angibt, auf die das Bereichsobjekt verweist. Dieser Wert muss kleiner sein als die Länge des Knotens, der in `startContainer` angegeben ist.

## Instanz-Methoden

_Das `AbstractRange`-Interface bietet keine Methoden._

## Verwendungshinweise

### Bereichstypen

Alle Inhaltsbereiche innerhalb eines [`Dokuments`](/de/docs/Web/API/Document) werden mithilfe von Instanzen von Interfaces, die auf `AbstractRange` basieren, beschrieben. Es gibt zwei solche Interfaces:

- [`Range`](/de/docs/Web/API/Range)
  - : Das `Range`-Interface ist schon lange existent und wurde erst kürzlich neu definiert, um auf `AbstractRange` zu basieren, da die Notwendigkeit entstanden ist, andere Formen von Bereichsdaten zu definieren. `Range` bietet Methoden, die es Ihnen ermöglichen, die Endpunkte des Bereichs zu ändern, sowie Methoden, um Bereiche zu vergleichen, Schnittpunkte zwischen Bereichen zu erkennen und so weiter.
- [`StaticRange`](/de/docs/Web/API/StaticRange)
  - : Ein `StaticRange` ist ein einfacher Bereich, der nach seiner Erstellung nicht mehr geändert werden kann. Insbesondere ändert sich der Bereich nicht, wenn der Knotenbaum mutiert und sich ändert. Dies ist nützlich, wenn Sie einen Bereich angeben müssen, der nur einmal verwendet wird, da es die Leistungs- und Ressourcenbelastung des komplexeren `Range`-Interfaces vermeidet.

### Inhalte von Elementen

Wenn Sie versuchen, auf die Inhalte eines Elements zuzugreifen, denken Sie daran, dass das Element selbst ein Knoten ist, aber auch jedes darin enthaltene Textstück. Um einen Bereichs-Endpunkt innerhalb des Texts eines Elements festzulegen, achten Sie darauf, den Textknoten innerhalb des Elements zu finden:

```js
const startElem = document.querySelector("p");
const endElem = startElem.querySelector("span");
const range = document.createRange();

range.setStart(startElem, 0);
range.setEnd(endElem, endElem.childNodes[0].length / 2);
const contents = range.cloneContents();

document.body.appendChild(contents);
```

Dieses Beispiel erstellt einen neuen Bereich, `range`, und setzt seinen Startpunkt auf den dritten Kindknoten des ersten Elements. Der Endpunkt wird auf die Mitte des ersten Kindes des Spans gesetzt, und dann wird der Bereich verwendet, um die Inhalte des Bereichs zu kopieren.

### Bereiche und die Hierarchie des DOM

Um einen Zeichenbereich innerhalb eines Dokuments zu definieren, der über null oder mehr Knoten-Grenzen hinweg reichen kann und der gegenüber Änderungen am DOM so widerstandsfähig wie möglich ist, können Sie den Versatz zu den ersten und letzten Zeichen im {{Glossary("HTML", "HTML")}} nicht angeben. Dafür gibt es einige gute Gründe.

Erstens, nachdem Ihre Seite geladen ist, denkt der Browser nicht mehr in HTML. Sobald sie geladen ist, ist die Seite ein Baum von DOM-`Node`-Objekten. Sie müssen also den Anfangs- und Endpunkt eines Bereichs in Bezug auf Knoten und Positionen innerhalb von Knoten angeben.

Zweitens, um die Änderbarkeit des DOM-Baums so weit wie möglich zu unterstützen, benötigen Sie eine Möglichkeit, Positionen relativ zu Knoten im Baum darzustellen, anstatt globale Positionen im gesamten Dokument. Indem Sie Punkte innerhalb des Dokuments als Versätze innerhalb eines bestimmten Knotens definieren, bleiben diese Positionen konsistent mit dem Inhalt, selbst wenn Knoten zum DOM-Baum hinzugefügt, daraus entfernt oder darin verschoben werden—innerhalb vernünftiger Grenzen. Es gibt ziemlich offensichtliche Einschränkungen (z.B. wenn ein Knoten so verschoben wird, dass er nach dem Endpunkt eines Bereichs liegt, oder wenn der Inhalt eines Knotens stark verändert wird), aber es ist viel besser als nichts.

Drittens, Knoten-relative Positionen zu verwenden, um Start- und Endpositionen zu definieren, wird in der Regel einfacher sein, um eine gute Leistung zu erzielen. Anstatt das DOM durchlaufen zu müssen, um herauszufinden, worauf sich Ihr globaler Versatz bezieht, kann der {{Glossary("user_agent", "User-Agent")}} (Browser) direkt zum Knoten gehen, der durch die Startposition angegeben ist, und von dort aus arbeiten, bis er den angegebenen Versatz in den Endknoten erreicht.

Um dies zu veranschaulichen, betrachten Sie das folgende HTML:

```html
<div class="container">
  <div class="header">
    <img src="..." alt="" class="sitelogo" />
    <h1>The Ultimate Website</h1>
  </div>
  <article>
    <section class="entry" id="entry1">
      <h2>Section 1: An interesting thing…</h2>
      <p>A <em>very</em> interesting thing happened on the way to the forum…</p>
      <aside class="callout">
        <h2>Aside</h2>
        <p>An interesting aside to share with you…</p>
      </aside>
    </section>
  </article>
  <pre id="log"></pre>
</div>
```

Nach dem Laden des HTMLs und dem Erstellen der DOM-Darstellung des Dokuments sieht der resultierende DOM-Baum so aus:

![Diagramm des DOM für eine einfache Webseite](simpledom.svg)

In diesem Diagramm sind die Knoten, die HTML-Elemente darstellen, in Grün dargestellt. Jede darunter liegende Zeile zeigt die nächste Schicht der Tiefe in den DOM-Baum. Blaue Knoten sind Textknoten und enthalten den Text, der auf dem Bildschirm angezeigt wird. Die Inhalte jedes Elements sind darunter im Baum verknüpft, was potenziell eine Reihe von Verzweigungen darunter erstellt, da Elemente andere Elemente und Textknoten enthalten können.

Wenn Sie einen Bereich erstellen möchten, der die Inhalte des {{HTMLElement("p")}}-Elements enthält, dessen Inhalte `"A <em>very</em> interesting thing happened on the way to the forum…"` sind, können Sie dies wie folgt tun:

```js
const pRange = document.createRange();
pRange.selectNodeContents(document.querySelector("#entry1 p"));
```

Da wir den gesamten Inhalt des `<p>`-Elements, einschließlich seiner Nachfolger, auswählen möchten, funktioniert dies perfekt.

Falls wir stattdessen den Text "An interesting thing…" aus der Überschrift (einem {{HTMLElement("Heading_Elements", "h2")}}-Element) des {{HTMLElement("section")}} durch bis zum Ende der Buchstaben "ve" im {{HTMLElement("em")}} innerhalb des darunter liegenden Absatzes kopieren möchten, würde der folgende Code funktionieren:

```js
const range = document.createRange();
const startNode = document.querySelector("section h2").childNodes[0];
range.setStart(startNode, 11);

const endNode = document.querySelector("#entry1 p em").childNodes[0];
range.setEnd(endNode, 2);

const fragment = range.cloneContents();
```

Hier entsteht ein interessantes Problem – wir erfassen Inhalte aus mehreren Knoten, die sich auf unterschiedlichen Ebenen der DOM-Hierarchie befinden, und dann nur einen Teil von einem davon. Wie sollte das Ergebnis aussehen?

Glücklicherweise behandelt die DOM-Spezifikation genau dieses Problem. In diesem Fall rufen wir zum Beispiel [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) für den Bereich auf, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zu erstellen, das einen DOM-Unterbaum bereitstellt, der die Inhalte des angegebenen Bereichs repliziert. Dazu konstruiert `cloneContents()` alle Knoten, die erforderlich sind, um die Struktur des angegebenen Bereichs beizubehalten, jedoch nicht mehr als nötig.

In diesem Beispiel findet sich der Anfang des angegebenen Bereichs im Textknoten unter der Überschrift des Abschnitts, was bedeutet, dass das neue `DocumentFragment` ein {{HTMLElement("Heading_Elements", "h2")}} enthalten muss und darunter einen Textknoten.

Das Ende des Bereichs befindet sich unter dem {{HTMLElement("p")}}-Element, sodass auch dieses Element im neuen Fragment benötigt wird. Ebenso der Textknoten, der das Wort "A" enthält, da dieser im Bereich enthalten ist. Schließlich werden ein `<em>` und ein Textknoten darunter hinzugefügt, unter das `<p>`.

Der Inhalt der Textknoten wird dann durch den bei den Aufrufen von [`setStart()`](/de/docs/Web/API/Range/setStart) und [`setEnd()`](/de/docs/Web/API/Range/setEnd) angegebenen Versatz in diese Textknoten bestimmt. Angesichts des Versatzes von 11 in den Text der Überschrift wird dieser Knoten "An interesting thing…" enthalten. Ebenso wird der letzte Textknoten "ve" enthalten, da die ersten beiden Zeichen des Endknotens angefragt wurden.

Das resultierende Dokumentfragment sieht so aus:

![Ein DocumentFragment, das den geklonten Inhalt darstellt](dom-fragment.svg)

Beachten Sie insbesondere, dass der gesamte Inhalt dieses Fragments _unter_ dem gemeinsamen übergeordneten Knoten der obersten Knoten darin liegt. Der übergeordnete `<section>` ist nicht erforderlich, um den geklonten Inhalt zu replizieren, und wird daher nicht eingeschlossen.

## Beispiel

Betrachten Sie dieses einfache HTML-Fragment.

```html
<p><strong>This</strong> is a paragraph.</p>
```

Stellen Sie sich vor, Sie verwenden ein [`Range`](/de/docs/Web/API/Range), um das Wort "paragraph" daraus zu extrahieren. Der Code dafür sieht wie folgt aus:

```js
const paraNode = document.querySelector("p");
const paraTextNode = paraNode.childNodes[1];

const range = document.createRange();
range.setStart(paraTextNode, 6);
range.setEnd(paraTextNode, paraTextNode.length - 1);

const fragment = range.cloneContents();
document.body.appendChild(fragment);
```

Zuerst erhalten wir Referenzen zum Absatzknoten selbst sowie zum _zweiten_ Kindknoten innerhalb des Absatzes. Das erste Kind ist das {{HTMLElement("strong")}}-Element. Das zweite Kind ist der Textknoten " is a paragraph.".

Mit der Textknoten-Referenz in der Hand erstellen wir ein neues `Range`-Objekt, indem wir [`createRange()`](/de/docs/Web/API/Document/createRange) auf dem `Document` selbst aufrufen. Wir setzen die Startposition des Bereichs auf das sechste Zeichen der Stringdarstellung des Textknotens und die Endposition auf die Länge des Strings des Textknotens minus eins. Damit wird der Bereich so eingestellt, dass er das Wort "paragraph" umfasst.

Wir beenden das Ganze, indem wir [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) für den `Range` aufrufen, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zu erstellen, das den Teil des Dokuments enthält, der vom Bereich umfasst wird. Danach verwenden wir [`appendChild()`](/de/docs/Web/API/Node/appendChild), um dieses Fragment am Ende des Dokumentenkörpers anzufügen, so wie es von [`document.body`](/de/docs/Web/API/Document/body) erhalten wird.

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Example", 600, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
