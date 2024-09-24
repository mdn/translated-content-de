---
title: AbstractRange
slug: Web/API/AbstractRange
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

Das abstrakte Interface **`AbstractRange`** ist die Basisklasse, auf der alle {{Glossary("DOM")}}-Bereichstypen definiert sind. Ein **Bereich** ist ein Objekt, das die Start- und Endpunkte eines Abschnitts von Inhalt innerhalb des Dokuments angibt.

> [!NOTE]
> Als abstraktes Interface werden Sie kein Objekt vom Typ `AbstractRange` direkt instanziieren. Stattdessen verwenden Sie die Interfaces {{domxref("Range")}} oder {{domxref("StaticRange")}}. Um den Unterschied zwischen diesen beiden Interfaces zu verstehen und herauszufinden, welches für Ihre Bedürfnisse geeignet ist, konsultieren Sie die Dokumentation der jeweiligen Interfaces.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("AbstractRange.collapsed", "collapsed")}} {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der `true` ist, wenn der Bereich _kollabiert_ ist. Ein kollabierter Bereich ist ein Bereich, dessen Start- und Endposition gleich sind, was zu einem Bereich mit null Zeichen führt.
- {{domxref("AbstractRange.endContainer", "endContainer")}} {{ReadOnlyInline}}
  - : Das {{domxref("Node")}}-Objekt, in dem sich das Ende des Bereichs befindet, wie durch die `endOffset`-Eigenschaft angegeben.
- {{domxref("AbstractRange.endOffset", "endOffset")}} {{ReadOnlyInline}}
  - : Ein Ganzzahlenwert, der den Offset in Zeichen vom Anfang des Inhalts des Knotens bis zum letzten Zeichen des durch das Bereichsobjekt dargestellten Bereichs angibt. Dieser Wert muss kleiner sein als die Länge des `endContainer` Knotens.
- {{domxref("AbstractRange.startContainer", "startContainer")}} {{ReadOnlyInline}}
  - : Der DOM-{{domxref("Node")}}, in dem sich der Anfang des Bereichs befindet, wie durch die `startOffset`-Eigenschaft angegeben.
- {{domxref("AbstractRange.startOffset", "startOffset")}} {{ReadOnlyInline}}
  - : Ein Ganzzahlenwert, der den Offset in Zeichen vom Anfang des Inhalts des Knotens bis zum ersten Zeichen des durch das Bereichsobjekt referenzierten Inhalts darstellt. Dieser Wert muss kleiner sein als die Länge des in `startContainer` angegebenen Knotens.

## Instanz-Methoden

_Das `AbstractRange`-Interface bietet keine Methoden._

## Anwendungshinweise

### Bereichstypen

Alle Inhaltsbereiche innerhalb eines {{domxref("Document", "Dokuments")}} werden beschrieben, indem Instanzen von Interfaces basierend auf `AbstractRange` verwendet werden. Es gibt zwei solche Interfaces:

- {{domxref("Range")}}
  - : Das `Range`-Interface existiert schon seit langem und wurde erst kürzlich neu definiert, um auf `AbstractRange` basierend zu sein, um den Bedarf an der Definition anderer Formen von Bereichsdaten zu decken. `Range` bietet Methoden, die es Ihnen erlauben, die Endpunkte des Bereichs zu ändern sowie Methoden zum Vergleichen von Bereichen, Erkennen von Schnittpunkten zwischen Bereichen usw.
- {{domxref("StaticRange")}}
  - : Ein `StaticRange` ist ein einfacher Bereich, der nach seiner Erstellung nicht mehr geändert werden kann. Insbesondere bleibt der Bereich unverändert, wenn sich der Knotenbaum ändert. Dies ist nützlich, wenn Sie einen Bereich spezifizieren müssen, der nur einmal verwendet wird, da so die Leistungs- und Ressourcenauswirkungen des komplexeren {{domxref("Range")}}-Interfaces vermieden werden.

### Inhalte von Elementen

Wenn Sie versuchen, auf die Inhalte eines Elements zuzugreifen, bedenken Sie, dass das Element selbst ein Knoten ist, aber auch jeder Text darin. Um einen Bereichs-Endpunkt innerhalb des Textes eines Elements festzulegen, müssen Sie sicherstellen, dass Sie den Textknoten innerhalb des Elements finden:

```js
const startElem = document.querySelector("p");
const endElem = startElem.querySelector("span");
const range = document.createRange();

range.setStart(startElem, 0);
range.setEnd(endElem, endElem.childNodes[0].length / 2);
const contents = range.cloneContents();

document.body.appendChild(contents);
```

Dieses Beispiel erstellt einen neuen Bereich, `range`, und legt seinen Startpunkt auf den dritten Kindknoten des ersten Elements fest, dessen Klasse `elementclass` ist. Der Endpunkt wird auf die Mitte des ersten Kindelements des span gesetzt, und dann wird der Bereich verwendet, um den Inhalt des Bereichs zu kopieren.

### Bereiche und die Hierarchie des DOM

Um einen Bereich von Zeichen innerhalb eines Dokuments zu definieren, der über null oder mehr Knoten-Grenzen hinwegspannen kann und möglichst resilient gegenüber Änderungen am DOM ist, können Sie den Offset zu den ersten und letzten Zeichen im {{Glossary("HTML")}} nicht spezifizieren. Es gibt einige gute Gründe dafür.

Erstens denkt der Browser, nachdem Ihre Seite geladen wurde, nicht mehr in HTML. Sobald die Seite geladen ist, ist sie ein Baum von DOM-{{domxref("Node")}}-Objekten, sodass Sie die Start- und Endpositionen eines Bereichs in Bezug auf Knoten und Positionen innerhalb von Knoten angeben müssen.

Zweitens müssen Sie zur Unterstützung der Veränderlichkeit des DOM-Baums so viel wie möglich eine Möglichkeit haben, Positionen relativ zu Knoten im Baum darzustellen, anstatt globale Positionen im gesamten Dokument. Indem Sie Punkte innerhalb des Dokuments als Offsets innerhalb eines bestimmten Knotens definieren, bleiben diese Positionen mit dem Inhalt konsistent, selbst wenn Knoten im DOM-Baum hinzugefügt, entfernt oder verschoben werden – innerhalb vernünftiger Grenzen. Es gibt offensichtliche Einschränkungen (wie z.B. wenn ein Knoten nach dem Endpunkt eines Bereichs verschoben wird oder wenn der Inhalt eines Knotens stark verändert wird), aber es ist viel besser als nichts.

Drittens wird es im Allgemeinen einfacher sein, node-relative Positionen zu verwenden, um die Start- und Endpositionen effizient zu gestalten. Anstatt sich durch das DOM schlängeln zu müssen, um herauszufinden, worauf sich Ihr globaler Offset bezieht, kann der {{Glossary("Benutzeragent")}} (Browser) stattdessen direkt zum Knoten gehen, der durch die Startposition angegeben ist, und von dort aus weiterarbeiten, bis er den angegebenen Offset in den Endknoten erreicht.

Um dies zu veranschaulichen, betrachten Sie das folgende HTML:

```html
<div class="container">
  <div class="header">
    <img src="" class="sitelogo" />
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

Nach dem Laden des HTML und der Konstruktion der DOM-Darstellung des Dokuments sieht der resultierende DOM-Baum folgendermaßen aus:

![Diagram eines einfachen Webseiten-DOMs](simpledom.svg)

In diesem Diagramm werden die Knoten, die HTML-Elemente darstellen, grün dargestellt. Jede darunterliegende Zeile zeigt die nächste Tiefenschicht in den DOM-Baum. Blaue Knoten sind Textknoten, die den Text enthalten, der auf dem Bildschirm angezeigt wird. Der Inhalt jedes Elements ist darunter im Baum verlinkt und kann möglicherweise eine Reihe von Verzweigungen unterhalb erzeugen, da Elemente andere Elemente und Textknoten einschließen.

Wenn Sie einen Bereich erstellen möchten, der den Inhalt des {{HTMLElement("p")}}-Elements umfasst, dessen Inhalt `"A <em>very</em> interesting thing happened on the way to the forum…"` ist, können Sie dies folgendermaßen tun:

```js
const pRange = document.createRange();
pRange.selectNodeContents(document.querySelector("#entry1 p"));
```

Da wir den gesamten Inhalt des `<p>`-Elements inklusive seiner Nachkommen auswählen möchten, funktioniert das perfekt.

Wenn wir stattdessen den Text "An interesting thing…" von der Überschrift des {{HTMLElement("section")}} (ein {{HTMLElement("Heading_Elements", "h2")}}-Element) bis zum Ende der Buchstaben "ve" im {{HTMLElement("em")}} innerhalb des darauffolgenden Absatzes kopieren möchten, würde der folgende Code funktionieren:

```js
const range = document.createRange();
const startNode = document.querySelector("section h2").childNodes[0];
range.setStart(startNode, 11);

const endNode = document.querySelector("#entry1 p em").childNodes[0];
range.setEnd(endNode, 2);

const fragment = range.cloneContents();
```

Hier ergibt sich ein interessantes Problem — wir erfassen Inhalte aus mehreren auf verschiedenen Ebenen der DOM-Hierarchie befindlichen Knoten und dann nur Teile davon. Wie sollte das Ergebnis aussehen?

Wie es sich herausstellt, löst die DOM-Spezifikation genau dieses Problem. In diesem Fall rufen wir {{domxref("Range.cloneContents", "cloneContents()")}} auf den Bereich auf, um ein neues {{domxref("DocumentFragment")}}-Objekt zu erstellen, das einen DOM-Teilbaum bereithält, der die Inhalte des angegebenen Bereichs reproduziert. Um dies zu tun, konstruiert `cloneContents()` alle Knoten, die benötigt werden, um die Struktur des angegebenen Bereichs zu erhalten, aber nicht mehr als nötig.

In diesem Beispiel liegt der Beginn des angegebenen Bereichs im Textknoten unter der Überschrift des Abschnitts, was bedeutet, dass das neue `DocumentFragment` ein {{HTMLElement("Heading_Elements", "h2")}} und darunter einen Textknoten enthalten muss.

Das Ende des Bereichs befindet sich unter dem {{HTMLElement("p")}}-Element, daher wird dies im neuen Fragment benötigt. Auch der Textknoten, der das Wort "A" enthält, da dies im Bereich enthalten ist. Schließlich werden ein `<em>` und ein Textknoten darunter unter dem `<p>` ebenfalls hinzugefügt.

Die Inhalte der Textknoten werden dann durch die Offsets in diesen Textknoten bestimmt, die bei den Aufrufen von {{domxref("Range.setStart", "setStart()")}} und {{domxref("Range.setEnd", "setEnd()")}} angegeben wurden. Angesichts des Offsets von 11 in den Text der Überschrift wird dieser Knoten "An interesting thing…" enthalten. Ebenso wird der letzte Textknoten "ve" enthalten, da die ersten beiden Zeichen des Endknotens angefordert wurden.

Das resultierende Dokumentfragment sieht wie folgt aus:

![Ein DocumentFragment, das den geklonten Inhalt darstellt](dom-fragment.svg)

Beachten Sie besonders, dass die Inhalte dieses Fragments alle _unter_ dem gemeinsamen Elternteil der obersten Knoten darin liegen. Der übergeordnete `<section>` wird nicht benötigt, um den geklonten Inhalt zu replizieren und ist daher nicht enthalten.

## Beispiel

Betrachten Sie dieses einfache HTML-Fragment.

```html
<p><strong>This</strong> is a paragraph.</p>
```

Stellen Sie sich vor, Sie verwenden einen {{domxref("Range")}}, um das Wort "paragraph" daraus zu extrahieren. Der entsprechende Code sieht so aus:

```js
const paraNode = document.querySelector("p");
const paraTextNode = paraNode.childNodes[1];

const range = document.createRange();
range.setStart(paraTextNode, 6);
range.setEnd(paraTextNode, paraTextNode.length - 1);

const fragment = range.cloneContents();
document.body.appendChild(fragment);
```

Zuerst erhalten wir Referenzen auf den Absatzknoten selbst sowie auf den _zweiten_ Kindknoten innerhalb des Absatzes. Der erste Kindknoten ist das {{HTMLElement("strong")}}-Element. Der zweite Kindknoten ist der Textknoten " is a paragraph.".

Mit der Textknotenreferenz in der Hand erstellen wir ein neues `Range`-Objekt, indem wir {{domxref("Document.createRange", "createRange()")}} auf dem `Document` selbst aufrufen. Wir setzen die Startposition des Bereichs auf das sechste Zeichen der Zeichenkette des Textknotens und die Endposition auf die Länge der Textknoten-Zeichenkette minus eins. Dies setzt den Bereich auf das Wort "paragraph".

Dann beenden wir, indem wir {{domxref("Range.cloneContents", "cloneContents()")}} auf dem `Range` aufrufen, um ein neues {{domxref("DocumentFragment")}}-Objekt zu erstellen, das den im Bereich umfassten Abschnitt des Dokuments enthält. Danach verwenden wir {{domxref("Node.appendChild", "appendChild()")}}, um dieses Fragment am Ende des Dokumentskörpers hinzuzufügen, wie vom {{domxref("document.body")}} erhalten.

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Example", 600, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
