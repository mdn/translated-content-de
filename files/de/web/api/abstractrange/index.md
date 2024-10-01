---
title: AbstractRange
slug: Web/API/AbstractRange
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

Die **`AbstractRange`** abstrakte Schnittstelle ist die Basisklasse, auf der alle {{Glossary("DOM", "DOM")}}-Bereichstypen definiert sind. Ein **Bereich** ist ein Objekt, das die Anfangs- und Endpunkte eines Abschnitts von Inhalten innerhalb des Dokuments angibt.

> [!NOTE]
> Da es sich um eine abstrakte Schnittstelle handelt, wird kein Objekt vom Typ `AbstractRange` direkt instanziiert. Stattdessen verwenden Sie die Schnittstellen [`Range`](/de/docs/Web/API/Range) oder [`StaticRange`](/de/docs/Web/API/StaticRange). Um den Unterschied zwischen diesen beiden Schnittstellen zu verstehen und herauszufinden, welche für Ihre Bedürfnisse geeignet ist, konsultieren Sie die Dokumentationen der jeweiligen Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`collapsed`](/de/docs/Web/API/AbstractRange/collapsed) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` ist, wenn der Bereich _gekürzt_ ist. Ein gekürzter Bereich ist ein Bereich, dessen Anfangs- und Endposition identisch sind, wodurch ein Null-Zeichen-langer Bereich entsteht.
- [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) {{ReadOnlyInline}}
  - : Das [`Node`](/de/docs/Web/API/Node)-Objekt, in dem sich das Ende des Bereichs befindet, wie es durch die `endOffset`-Eigenschaft angegeben ist.
- [`endOffset`](/de/docs/Web/API/AbstractRange/endOffset) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der den Offset, in Zeichen, vom Beginn des Inhalts des Knotens bis zum letzten Zeichen des durch das Bereichsobjekt dargestellten Bereichs angibt. Dieser Wert muss kleiner sein als die Länge des `endContainer`-Knotens.
- [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) {{ReadOnlyInline}}
  - : Der DOM [`Node`](/de/docs/Web/API/Node), in dem sich der Anfang des Bereichs befindet, wie durch die `startOffset`-Eigenschaft angegeben.
- [`startOffset`](/de/docs/Web/API/AbstractRange/startOffset) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der den Offset, in Zeichen, vom Beginn des Inhalts des Knotens bis zum ersten Zeichen des Inhalts angibt, auf den vom Bereichsobjekt verwiesen wird. Dieser Wert muss kleiner sein als die Länge des Knotens, der in `startContainer` angegeben ist.

## Instanz-Methoden

_Die `AbstractRange`-Schnittstelle bietet keine Methoden._

## Hinweise zur Verwendung

### Bereichstypen

Alle Inhaltsbereiche innerhalb eines [`Dokuments`](/de/docs/Web/API/Document) werden mit Instanzen von Schnittstellen beschrieben, die auf `AbstractRange` basieren. Es gibt zwei solche Schnittstellen:

- [`Range`](/de/docs/Web/API/Range)
  - : Die `Range`-Schnittstelle existiert schon seit langer Zeit und wurde kürzlich neu definiert, um auf `AbstractRange` zu basieren, da die Notwendigkeit entstand, andere Formen von Bereichsdaten zu definieren. `Range` stellt Methoden zur Verfügung, die es ermöglichen, die Endpunkte des Bereichs zu ändern, sowie Methoden, um Bereiche zu vergleichen, Überschneidungen zwischen Bereichen zu erkennen und so weiter.
- [`StaticRange`](/de/docs/Web/API/StaticRange)
  - : Ein `StaticRange` ist ein grundlegender Bereich, der nicht geändert werden kann, sobald er erstellt wurde. Insbesondere, wenn sich der Knotenbaum verändert und ändert, bleibt der Bereich unverändert. Dies ist nützlich, wenn Sie einen Bereich angeben müssen, der nur einmal verwendet wird, da dies die Leistungs- und Ressourcenbelastung der komplexeren [`Range`](/de/docs/Web/API/Range)-Schnittstelle vermeidet.

### Inhalte von Elementen

Wenn Sie versuchen, auf die Inhalte eines Elements zuzugreifen, beachten Sie, dass das Element selbst ein Knoten ist, aber auch jeder Text darin. Um einen Bereichsendpunkt innerhalb des Textes eines Elements zu setzen, stellen Sie sicher, dass Sie den Textknoten innerhalb des Elements finden:

```js
const startElem = document.querySelector("p");
const endElem = startElem.querySelector("span");
const range = document.createRange();

range.setStart(startElem, 0);
range.setEnd(endElem, endElem.childNodes[0].length / 2);
const contents = range.cloneContents();

document.body.appendChild(contents);
```

Dieses Beispiel erstellt einen neuen Bereich, `range`, und setzt seinen Startpunkt auf den dritten Kindknoten des ersten Elements, dessen Klasse `elementclass` ist. Der Endpunkt wird auf die Mitte des ersten Kindes des `span` gesetzt, und dann wird der Bereich verwendet, um die Inhalte des Bereichs zu kopieren.

### Bereiche und die Hierarchie des DOM

Um einen Zeichenbereich innerhalb eines Dokuments auf eine Weise zu definieren, die über null oder mehr Knoten-Grenzen hinweg reichen kann und die so widerstandsfähig wie möglich gegenüber Änderungen am DOM ist, können Sie den Offset zu den ersten und letzten Zeichen im {{Glossary("HTML", "HTML")}} nicht angeben. Dafür gibt es einige gute Gründe.

Erstens, nachdem Ihre Seite geladen ist, denkt der Browser nicht mehr in HTML. Sobald sie geladen ist, ist die Seite ein Baum von DOM-Objekten, sodass Sie die Anfangs- und Endpositionen eines Bereichs in Bezug auf Knoten und Positionen innerhalb von Knoten spezifizieren müssen.

Zweitens, um die Veränderlichkeit des DOM-Baumes so weit wie möglich zu unterstützen, benötigen Sie eine Möglichkeit, Positionen relativ zu den Knoten im Baum darzustellen, anstatt globale Positionen innerhalb des gesamten Dokuments. Indem Sie Punkte im Dokument als Offsets innerhalb eines gegebenen Knotens definieren, bleiben diese Positionen mit dem Inhalt konsistent, auch wenn Knoten dem DOM-Baum hinzugefügt, daraus entfernt oder innerhalb dessen verschoben werden—im Rahmen der Vernunft. Es gibt ziemlich offensichtliche Einschränkungen (z. B. wenn ein Knoten hinter den Endpunkt eines Bereichs verschoben wird oder wenn der Inhalt eines Knotens stark verändert wird), aber es ist viel besser als nichts.

Drittens wird die Verwendung von knotenbezogenen Positionen zur Definition der Start- und Endpositionen im Allgemeinen einfacher zu einer guten Leistung führen. Anstatt das DOM durchzuhandeln und herauszufinden, worauf sich Ihr globaler Offset bezieht, kann der {{Glossary("user_agent", "Benutzeragent")}} (Browser) direkt zu dem durch die Startposition angegebenen Knoten gehen und von dort aus vorwärts arbeiten, bis der angegebene Offset in den Endknoten erreicht ist.

Um dies zu veranschaulichen, betrachten Sie den HTML-Code unten:

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

Nachdem das HTML geladen und die DOM-Darstellung des Dokuments konstruiert wurde, sieht der resultierende DOM-Baum so aus:

![Diagramm des DOM für eine einfache Webseite](simpledom.svg)

In diesem Diagramm sind die Knoten, die HTML-Elemente darstellen, grün dargestellt. Jede darunterliegende Reihe zeigt die nächste Ebene der Tiefe im DOM-Baum an. Blaue Knoten sind Textknoten, die den Text enthalten, der auf dem Bildschirm angezeigt wird. Die Inhalte eines Elements sind darunter im Baum verlinkt, wodurch möglicherweise eine Serie von Zweigen entsteht, wenn Elemente andere Elemente und Textknoten enthalten.

Wenn Sie einen Bereich erstellen möchten, der die Inhalte des {{HTMLElement("p")}}-Elements umfasst, dessen Inhalte `"A <em>very</em> interesting thing happened on the way to the forum…"` sind, können Sie dies so tun:

```js
const pRange = document.createRange();
pRange.selectNodeContents(document.querySelector("#entry1 p"));
```

Da wir die gesamten Inhalte des `<p>`-Elements auswählen möchten, einschließlich seiner Nachkommen, funktioniert dies perfekt.

Möchten wir stattdessen den Text „An interesting thing…“ aus der Überschrift des {{HTMLElement("section")}}, einem {{HTMLElement("Heading_Elements", "h2")}}-Element, bis zum Ende der Buchstaben „ve“ im {{HTMLElement("em")}} innerhalb des Absatzes darunter kopieren, würde der folgende Code funktionieren:

```js
const range = document.createRange();
const startNode = document.querySelector("section h2").childNodes[0];
range.setStart(startNode, 11);

const endNode = document.querySelector("#entry1 p em").childNodes[0];
range.setEnd(endNode, 2);

const fragment = range.cloneContents();
```

Hier entsteht ein interessantes Problem—wir erfassen Inhalte aus mehreren Knoten, die sich auf unterschiedlichen Ebenen der DOM-Hierarchie befinden, und dann nur ein Teil eines davon. Wie sollte der resultierende Inhalt aussehen?

Wie es sich herausstellt, behandelt die DOM-Spezifikation glücklicherweise genau dieses Problem. Beispielsweise rufen wir in diesem Fall [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) auf dem Bereich auf, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt bereitzustellen, das einen DOM-Teilbaum bietet, der die Inhalte des angegebenen Bereichs repliziert. `cloneContents()` erstellt alle erforderlichen Knoten, um die Struktur des angegebenen Bereichs zu bewahren, aber nicht mehr als notwendig.

In diesem Beispiel befindet sich der Start des angegebenen Bereichs im Textknoten unter der Überschrift des Bereichs, was bedeutet, dass das neue `DocumentFragment` ein {{HTMLElement("Heading_Elements", "h2")}} enthalten muss und darunter einen Textknoten.

Das Ende des Bereichs befindet sich unter dem {{HTMLElement("p")}}-Element, daher wird dies im neuen Fragment benötigt. Ebenso der Textknoten, der das Wort "A" enthält, da dies im Bereich enthalten ist. Schließlich wird ein `<em>` und ein Textknoten darunter unter dem `<p>` hinzugefügt.

Die Inhalte der Textknoten werden dann durch die Offsets in diesen Textknoten bestimmt, wie beim Aufrufen von [`setStart()`](/de/docs/Web/API/Range/setStart) und [`setEnd()`](/de/docs/Web/API/Range/setEnd) angegeben. Angesichts des Offsets von 11 im Text der Überschrift wird dieser Knoten "An interesting thing…" enthalten. Ebenso enthält der letzte Textknoten "ve", da die ersten zwei Zeichen des Endknotens angefordert werden.

Das resultierende Dokument-Fragment sieht so aus:

![Ein DocumentFragment, das den geklonten Inhalt darstellt](dom-fragment.svg)

Besonders bemerkenswert ist, dass die Inhalte dieses Fragments alle _unterhalb_ des gemeinsamen Elternelements der obersten Knoten innerhalb dieses Fragments sind. Das übergeordnete `<section>` wird nicht benötigt, um den geklonten Inhalt zu replizieren, daher ist es nicht enthalten.

## Beispiel

Betrachten Sie dieses einfache HTML-Fragment.

```html
<p><strong>This</strong> is a paragraph.</p>
```

Stellen Sie sich vor, Sie verwenden ein [`Range`](/de/docs/Web/API/Range), um das Wort "paragraph" daraus zu extrahieren. Der Code, um das zu tun, sieht wie folgt aus:

```js
const paraNode = document.querySelector("p");
const paraTextNode = paraNode.childNodes[1];

const range = document.createRange();
range.setStart(paraTextNode, 6);
range.setEnd(paraTextNode, paraTextNode.length - 1);

const fragment = range.cloneContents();
document.body.appendChild(fragment);
```

Zuerst erhalten wir Referenzen auf den Absatzknoten selbst sowie auf den _zweiten_ Kindknoten innerhalb des Absatzes. Das erste Kind ist das {{HTMLElement("strong")}}-Element. Das zweite Kind ist der Textknoten " is a paragraph.".

Mit der Referenz des Textknotens in der Hand erstellen wir ein neues `Range`-Objekt, indem wir [`createRange()`](/de/docs/Web/API/Document/createRange) auf dem `Document` selbst aufrufen. Wir setzen die Startposition des Bereichs auf das sechste Zeichen der Zeichenkette des Textknotens und die Endposition auf die Länge der Zeichenkette des Textknotens minus eins. Dadurch wird der Bereich so gesetzt, dass er das Wort "paragraph" umfasst.

Wir beenden dann, indem wir [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) auf dem `Range` aufrufen, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zu erstellen, das jenen Teil des Dokuments enthält, der vom Bereich umfasst wird. Danach verwenden wir [`appendChild()`](/de/docs/Web/API/Node/appendChild), um dieses Fragment am Ende des Körpers des Dokuments, wie es von [`document.body`](/de/docs/Web/API/Document/body) erhalten wurde, hinzuzufügen.

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Example", 600, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
