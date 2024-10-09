---
title: AbstractRange
slug: Web/API/AbstractRange
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("DOM")}}

Die **`AbstractRange`** abstrakte Schnittstelle ist die Basisklasse, auf der alle {{Glossary("DOM", "DOM")}}-Bereiche definiert sind. Ein **Bereich** ist ein Objekt, das die Start- und Endpunkte eines Abschnitts von Inhalt innerhalb des Dokuments angibt.

> [!NOTE]
> Als abstrakte Schnittstelle werden Sie kein Objekt vom Typ `AbstractRange` direkt instanziieren. Stattdessen verwenden Sie die Schnittstellen [`Range`](/de/docs/Web/API/Range) oder [`StaticRange`](/de/docs/Web/API/StaticRange). Um den Unterschied zwischen diesen beiden Schnittstellen zu verstehen und zu erfahren, welche für Ihre Bedürfnisse geeignet ist, konsultieren Sie die Dokumentation jeder Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`collapsed`](/de/docs/Web/API/AbstractRange/collapsed) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der `true` ist, wenn der Bereich _zusammengeklappt_ ist. Ein zusammengeklappter Bereich ist ein Bereich, dessen Startposition und Endposition identisch sind, was zu einem Bereich mit einer Länge von null Zeichen führt.
- [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) {{ReadOnlyInline}}
  - : Das [`Node`](/de/docs/Web/API/Node)-Objekt, in dem das Ende des Bereichs gemäß der `endOffset`-Eigenschaft liegt.
- [`endOffset`](/de/docs/Web/API/AbstractRange/endOffset) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der den Offset in Zeichen vom Anfang des Inhalts des Knotens bis zum letzten Zeichen des durch das Bereichsobjekt repräsentierten Bereichs angibt. Dieser Wert muss kleiner sein als die Länge des `endContainer`-Knotens.
- [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) {{ReadOnlyInline}}
  - : Der DOM-`Node`, in dem der Beginn des Bereichs gemäß der `startOffset`-Eigenschaft liegt.
- [`startOffset`](/de/docs/Web/API/AbstractRange/startOffset) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der den Offset in Zeichen vom Anfang des Inhalts des Knotens bis zum ersten Zeichen des durch das Bereichsobjekt referenzierten Inhalts angibt. Dieser Wert muss kleiner sein als die Länge des im `startContainer`-Knoten angegebenen Knotens.

## Instanz-Methoden

_Die `AbstractRange`-Schnittstelle bietet keine Methoden._

## Hinweise zur Verwendung

### Bereichstypen

Alle Inhaltsbereiche innerhalb eines [`Dokuments`](/de/docs/Web/API/Document) werden mithilfe von Instanzen von auf `AbstractRange` basierenden Schnittstellen beschrieben. Es gibt zwei solche Schnittstellen:

- [`Range`](/de/docs/Web/API/Range)
  - : Die `Range`-Schnittstelle existiert schon lange und wurde erst kürzlich umdefiniert, um auf `AbstractRange` zu basieren, da die Notwendigkeit entstand, andere Formen von Bereichsdaten zu definieren. `Range` bietet Methoden, mit denen Sie die Endpunkte des Bereichs ändern sowie Bereiche vergleichen, Schnittpunkte zwischen Bereichen erkennen und so weiter können.
- [`StaticRange`](/de/docs/Web/API/StaticRange)
  - : Ein `StaticRange` ist ein grundlegender Bereich, der nicht geändert werden kann, nachdem er erstellt wurde. Insbesondere bleibt der Bereich unverändert, wenn sich der Knotebaum verändert. Dies ist nützlich, wenn Sie einen Bereich angeben müssen, der nur einmal verwendet wird, da er die Leistungs- und Ressourcenbelastung der komplexeren [`Range`](/de/docs/Web/API/Range)-Schnittstelle vermeidet.

### Inhalte von Elementen

Wenn Sie versuchen, auf die Inhalte eines Elements zuzugreifen, beachten Sie, dass das Element selbst ein Knoten ist, aber auch jeder Text darin. Um einen Bereichsendpunkt innerhalb des Textes eines Elements festzulegen, stellen Sie sicher, dass Sie den Textknoten innerhalb des Elements finden:

```js
const startElem = document.querySelector("p");
const endElem = startElem.querySelector("span");
const range = document.createRange();

range.setStart(startElem, 0);
range.setEnd(endElem, endElem.childNodes[0].length / 2);
const contents = range.cloneContents();

document.body.appendChild(contents);
```

Dieses Beispiel erstellt einen neuen Bereich, `range`, und setzt seinen Anfangspunkt auf den dritten Kindknoten des ersten Elements. Der Endpunkt wird auf die Mitte des ersten Kindes des `<span>`-Elements gesetzt, und dann wird der Bereich verwendet, um die Inhalte des Bereichs zu kopieren.

### Bereiche und die Hierarchie des DOM

Um einen Bereich von Zeichen innerhalb eines Dokuments so zu definieren, dass er über null oder mehr Knoten-Grenzen hinwegreichen kann und so widerstandsfähig wie möglich gegen Änderungen des DOM ist, können Sie den Offset zu den ersten und letzten Zeichen in der {{Glossary("HTML", "HTML")}} nicht angeben. Dafür gibt es einige gute Gründe.

Zuerst denkt der Browser nach dem Laden Ihrer Seite nicht mehr in HTML-Kategorien. Sobald die Seite geladen ist, ist sie ein Baum von DOM-`Node`-Objekten, daher müssen Sie die Anfangs- und Endpositionen eines Bereichs in Bezug auf Knoten und Positionen innerhalb von Knoten angeben.

Zweitens benötigen Sie, um die Veränderlichkeit des DOM-Baums so gut wie möglich zu unterstützen, eine Möglichkeit, Positionen relativ zu Knoten im Baum darzustellen, anstatt globale Positionen innerhalb des gesamten Dokuments. Indem Sie Punkte innerhalb des Dokuments als Offsets innerhalb eines gegebenen Knotens definieren, bleiben diese Positionen konsistent mit dem Inhalt, selbst wenn Knoten hinzugefügt, entfernt oder im DOM-Baum verschoben werden – im Rahmen des Vernünftigen. Es gibt recht offensichtliche Einschränkungen (z. B. wenn ein Knoten nach dem Endpunkt eines Bereichs verschoben wird oder der Inhalt eines Knotens stark verändert wird), aber es ist weitaus besser als nichts.

Drittens wird es im Allgemeinen einfacher sein, die Start- und Endpositionen so zu definieren, dass sie relativ zu Knoten sind, um eine gute Leistung zu erzielen. Anstatt sich mit dem DOM auseinanderzusetzen, um herauszufinden, auf was Ihr globaler Offset verweist, kann der {{Glossary("user_agent", "Benutzeragent")}} (Browser) direkt zum angegebenen Knoten der Startposition gehen und von dort aus vorwärts arbeiten, bis er den angegebenen Offset in den Endknoten erreicht.

Um dies zu veranschaulichen, betrachten Sie den folgenden HTML-Code:

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

Nach dem Laden des HTML und dem Erstellen der DOM-Darstellung des Dokuments sieht der resultierende DOM-Baum folgendermaßen aus:

![Diagramm des DOM für eine einfache Webseite](simpledom.svg)

In diesem Diagramm sind die Knoten, die HTML-Elemente darstellen, grün dargestellt. Jede Zeile darunter zeigt die nächste Ebene der Tiefe in den DOM-Baum. Blaue Knoten sind Textknoten, die den Text enthalten, der auf dem Bildschirm angezeigt wird. Der Inhalt jedes Elements ist darunter im Baum verknüpft, und es können sich potenziell eine Reihe von Verzweigungen darunter bilden, da Elemente andere Elemente und Textknoten enthalten.

Wenn Sie einen Bereich erstellen möchten, der den Inhalt des {{HTMLElement("p")}}-Elements umfasst, dessen Inhalt `"A <em>very</em> interesting thing happened on the way to the forum…"` ist, können Sie dies so tun:

```js
const pRange = document.createRange();
pRange.selectNodeContents(document.querySelector("#entry1 p"));
```

Da wir den gesamten Inhalt des `<p>`-Elements einschließlich seiner Nachkommen auswählen möchten, funktioniert dies perfekt.

Wenn wir stattdessen den Text "An interesting thing…" von der Überschrift (ein {{HTMLElement("Heading_Elements", "h2")}}-Element) des {{HTMLElement("section")}} bis zum Ende der Buchstaben "ve" im {{HTMLElement("em")}} innerhalb des Absatzes darunter kopieren möchten, würde der folgende Code funktionieren:

```js
const range = document.createRange();
const startNode = document.querySelector("section h2").childNodes[0];
range.setStart(startNode, 11);

const endNode = document.querySelector("#entry1 p em").childNodes[0];
range.setEnd(endNode, 2);

const fragment = range.cloneContents();
```

Hier entsteht ein interessantes Problem – wir erfassen Inhalte aus mehreren Knoten, die sich auf verschiedenen Ebenen der DOM-Hierarchie befinden, und nur ein Teil eines von ihnen. Wie sollte das Ergebnis aussehen?

Wie sich herausstellt, behandelt die DOM-Spezifikation genau dieses Problem. Beispielsweise rufen wir in diesem Fall [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) für den Bereich auf, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zu erstellen, das einen DOM-Teilbaum bereitstellt, der den Inhalt des angegebenen Bereichs repliziert. Um dies zu tun, konstruiert `cloneContents()` alle Knoten, die erforderlich sind, um die Struktur des angegebenen Bereichs zu bewahren, aber nicht mehr als nötig.

In diesem Beispiel befindet sich der Start des angegebenen Bereichs innerhalb des Textknotens unter der Überschrift des Abschnitts, was bedeutet, dass das neue `DocumentFragment` ein {{HTMLElement("Heading_Elements", "h2")}} enthalten muss und darunter einen Textknoten.

Das Ende des Bereichs befindet sich unter dem {{HTMLElement("p")}}-Element, daher wird dies im neuen Fragment benötigt. Ebenso wird der Textknoten, der das Wort "A" enthält, da er im Bereich enthalten ist. Schließlich wird ein `<em>` und ein Textknoten darunter unter dem `<p>` hinzugefügt.

Der Inhalt der Textknoten wird dann durch die Offsets in diesen Textknoten bestimmt, die bei Aufruf von [`setStart()`](/de/docs/Web/API/Range/setStart) und [`setEnd()`](/de/docs/Web/API/Range/setEnd) angegeben wurden. Angesichts des Offsets von 11 im Text der Überschrift wird dieser Knoten "An interesting thing…" enthalten. Ebenso wird der letzte Textknoten "ve" enthalten, entsprechend der Anforderung für die ersten beiden Zeichen des Endknotens.

Das resultierende Dokumentfragment sieht so aus:

![Ein Dokumentfragment, das den geklonten Inhalt darstellt](dom-fragment.svg)

Beachten Sie besonders, dass der Inhalt dieses Fragments sich _unterhalb_ des gemeinsamen Elternteils der obersten Knoten innerhalb des Fragments befindet. Das Elternelement `<section>` ist nicht erforderlich, um den geklonten Inhalt zu replizieren, daher wird es nicht einbezogen.

## Beispiel

Betrachten Sie dieses einfache HTML-Fragment.

```html
<p><strong>This</strong> is a paragraph.</p>
```

Stellen Sie sich vor, Sie verwenden einen [`Range`](/de/docs/Web/API/Range), um das Wort "paragraph" daraus zu extrahieren. Der Code dazu sieht folgendermaßen aus:

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

Mit der Referenz auf den Textknoten in der Hand erstellen wir ein neues `Range`-Objekt, indem wir [`createRange()`](/de/docs/Web/API/Document/createRange) am `Document` selbst aufrufen. Wir setzen die Startposition des Bereichs auf das sechste Zeichen der Zeichenkette des Textknotens und die Endposition auf die Länge der Zeichenkette des Textknotens minus eins. Dies setzt den Bereich so, dass das Wort "paragraph" umfasst wird.

Dann schließen wir ab, indem wir [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) auf dem `Range` aufrufen, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zu erstellen, das den Teil des Dokuments enthält, der durch den Bereich erfasst wird. Danach verwenden wir [`appendChild()`](/de/docs/Web/API/Node/appendChild), um das Fragment am Ende des Dokumentskörpers hinzuzufügen, wie es von [`document.body`](/de/docs/Web/API/Document/body) erhalten wurde.

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Example", 600, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
