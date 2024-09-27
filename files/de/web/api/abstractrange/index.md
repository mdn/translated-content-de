---
title: AbstractRange
slug: Web/API/AbstractRange
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

Das **`AbstractRange`**-Interface ist die Basisklasse, auf der alle [DOM](/de/docs/Glossary/DOM)-Bereiche definiert sind. Ein **Bereich** ist ein Objekt, das die Start- und Endpunkte eines Abschnitts von Inhalten innerhalb des Dokuments angibt.

> [!NOTE]
> Als abstraktes Interface werden Sie kein Objekt vom Typ `AbstractRange` direkt instanziieren. Stattdessen verwenden Sie die Interfaces [`Range`](/de/docs/Web/API/Range) oder [`StaticRange`](/de/docs/Web/API/StaticRange). Um den Unterschied zwischen diesen beiden Interfaces zu verstehen und zu erfahren, welches für Ihre Bedürfnisse geeignet ist, konsultieren Sie die Dokumentation für jedes Interface.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`collapsed`](/de/docs/Web/API/AbstractRange/collapsed) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der `true` ist, wenn der Bereich _kollabiert_ ist. Ein kollabierter Bereich ist ein Bereich, dessen Start- und Endposition identisch sind, was zu einem nullzeichenlangen Bereich führt.
- [`endContainer`](/de/docs/Web/API/AbstractRange/endContainer) {{ReadOnlyInline}}
  - : Das [`Node`](/de/docs/Web/API/Node)-Objekt, in dem sich das Ende des Bereichs befindet, wie es durch die Eigenschaft `endOffset` angegeben wird.
- [`endOffset`](/de/docs/Web/API/AbstractRange/endOffset) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der den Versatz in Zeichen vom Beginn der Inhalte des Knotens bis zum letzten Zeichen des durch das Bereichsobjekt dargestellten Bereichs angibt. Dieser Wert muss kleiner sein als die Länge des `endContainer`-Knotens.
- [`startContainer`](/de/docs/Web/API/AbstractRange/startContainer) {{ReadOnlyInline}}
  - : Der DOM-[`Node`](/de/docs/Web/API/Node), in dem sich der Anfang des Bereichs befindet, wie durch die `startOffset`-Eigenschaft angegeben.
- [`startOffset`](/de/docs/Web/API/AbstractRange/startOffset) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der den Versatz in Zeichen vom Beginn der Inhalte des Knotens bis zum ersten Zeichen der Inhalte angibt, auf die durch das Bereichsobjekt verwiesen wird. Dieser Wert muss kleiner sein als die Länge des Knotens, der in `startContainer` angegeben ist.

## Instanzmethoden

_Das `AbstractRange`-Interface bietet keine Methoden._

## Hinweise zur Verwendung

### Bereichstypen

Alle Inhaltsbereiche innerhalb eines [`Dokuments`](/de/docs/Web/API/Document) werden mithilfe von Instanzen von Interfaces beschrieben, die auf `AbstractRange` basieren. Es gibt zwei solcher Interfaces:

- [`Range`](/de/docs/Web/API/Range)
  - : Das `Range`-Interface existiert schon lange und wurde erst kürzlich neu definiert, um auf `AbstractRange` zu basieren, da es notwendig wurde, andere Formen von Bereichsdaten zu definieren. `Range` bietet Methoden, mit denen Sie die Endpunkte des Bereichs ändern sowie Bereiche vergleichen, Schnittmengen zwischen Bereichen erkennen usw. können.
- [`StaticRange`](/de/docs/Web/API/StaticRange)
  - : Ein `StaticRange` ist ein einfacher Bereich, der nach seiner Erstellung nicht mehr geändert werden kann. Speziell, wenn sich der Knotenbaum verändert, bleibt der Bereich unverändert. Dies ist nützlich, wenn Sie einen Bereich angeben müssen, der nur einmal verwendet wird, da es die Leistung und den Ressourcenaufwand des komplexeren [`Range`](/de/docs/Web/API/Range)-Interfaces vermeidet.

### Inhalte von Elementen

Wenn Sie versuchen, auf die Inhalte eines Elements zuzugreifen, bedenken Sie, dass das Element selbst ein Knoten ist, aber auch jeder Text innerhalb des Elements. Um einen Bereichsendpunkt innerhalb des Textes eines Elements festzulegen, stellen Sie sicher, dass Sie den Textknoten innerhalb des Elements finden:

```js
const startElem = document.querySelector("p");
const endElem = startElem.querySelector("span");
const range = document.createRange();

range.setStart(startElem, 0);
range.setEnd(endElem, endElem.childNodes[0].length / 2);
const contents = range.cloneContents();

document.body.appendChild(contents);
```

Dieses Beispiel erstellt einen neuen Bereich, `range`, und setzt seinen Startpunkt auf den dritten Kindknoten des ersten Elements, dessen Klasse `elementclass` ist. Der Endpunkt wird in der Mitte des ersten Kindes des `<span>`-Elements festgelegt, und dann wird der Bereich verwendet, um die Inhalte des Bereichs zu kopieren.

### Bereiche und die Hierarchie des DOM

Um einen Bereich von Zeichen innerhalb eines Dokuments zu definieren, der in der Lage ist, sich über null oder mehr Knotengrenzen zu erstrecken, und der so widerstandsfähig wie möglich gegenüber Änderungen des DOM ist, können Sie nicht den Versatz für die ersten und letzten Zeichen im [HTML](/de/docs/Glossary/HTML) angeben. Es gibt einige gute Gründe dafür.

Erstens, nachdem Ihre Seite geladen ist, denkt der Browser nicht mehr in HTML. Nach dem Laden ist die Seite ein Baum von DOM-[`Node`](/de/docs/Web/API/Node)-Objekten, sodass Sie die Anfangs- und Endpositionen eines Bereichs in Bezug auf Knoten und Positionen innerhalb dieser Knoten angeben müssen.

Zweitens, um die Veränderlichkeit des DOM-Baums so gut wie möglich zu unterstützen, benötigen Sie eine Möglichkeit, Positionen relativ zu Knoten im Baum darzustellen, anstatt globale Positionen im gesamten Dokument. Indem Sie Punkte innerhalb des Dokuments als Versätze innerhalb eines gegebenen Knotens definieren, bleiben diese Positionen konsistent mit den Inhalten, selbst wenn Knoten zum DOM-Baum hinzugefügt, daraus entfernt oder darin verschoben werden—im Rahmen des Möglichen. Es gibt recht offensichtliche Einschränkungen (z. B. wenn ein Knoten nach dem Endpunkt eines Bereichs verschoben wird oder wenn der Inhalt eines Knotens stark verändert wird), aber es ist weit besser als gar nichts.

Drittens, die Verwendung von knotenrelativen Positionen zur Definition der Start- und Endpositionen ist im Allgemeinen einfacher zu optimieren. Anstatt den DOM zu durchforsten, um herauszufinden, auf was sich Ihr globaler Versatz bezieht, kann der [user agent](/de/docs/Glossary/user_agent) (Browser) direkt zum durch die Startposition angegebenen Knoten gehen und von dort aus arbeiten, bis er den angegebenen Versatz im Endknoten erreicht.

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

Nach dem Laden des HTML und dem Aufbau der DOM-Darstellung des Dokuments sieht der resultierende DOM-Baum so aus:

![Diagramm des DOM für eine einfache Webseite](simpledom.svg)

In diesem Diagramm sind die Knoten, die HTML-Elemente darstellen, in Grün dargestellt. Jede Zeile darunter zeigt die nächste Tiefenschicht in den DOM-Baum. Blaue Knoten sind Textknoten, die den Text enthalten, der auf dem Bildschirm angezeigt wird. Die Inhalte jedes Elements sind unter ihm im Baum verlinkt, was möglicherweise eine Reihe von Ästen darunter auslöst, da Elemente andere Elemente und Textknoten umfassen.

Wenn Sie einen Bereich erstellen möchten, der die Inhalte des {{HTMLElement("p")}}-Elements umfasst, dessen Inhalte `"A <em>very</em> interesting thing happened on the way to the forum…"` lauten, können Sie dies wie folgt tun:

```js
const pRange = document.createRange();
pRange.selectNodeContents(document.querySelector("#entry1 p"));
```

Da wir den gesamten Inhalt des `<p>`-Elements, einschließlich seiner Nachkommen, auswählen möchten, funktioniert dies perfekt.

Wenn wir stattdessen den Text "An interesting thing…" aus der Überschrift des {{HTMLElement("section")}} (ein {{HTMLElement("Heading_Elements", "h2")}}-Element) bis zu den Buchstaben "ve" im {{HTMLElement("em")}} innerhalb des Absatzes darunter kopieren möchten, würde der folgende Code funktionieren:

```js
const range = document.createRange();
const startNode = document.querySelector("section h2").childNodes[0];
range.setStart(startNode, 11);

const endNode = document.querySelector("#entry1 p em").childNodes[0];
range.setEnd(endNode, 2);

const fragment = range.cloneContents();
```

Hier entsteht ein interessantes Problem — wir erfassen Inhalte aus mehreren Knoten auf verschiedenen Ebenen der DOM-Hierarchie und dann nur einen Teil davon. Wie sollte das Ergebnis aussehen?

Wie sich herausstellt, beschäftigt sich die DOM-Spezifikation glücklicherweise genau mit diesem Problem. In diesem Fall rufen wir zum Beispiel [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) für den Bereich auf, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zu erstellen, das einen DOM-Unterbaum bereitstellt, der die Inhalte des angegebenen Bereichs reproduziert. Dazu baut `cloneContents()` alle Knoten auf, die benötigt werden, um die Struktur des angegebenen Bereichs zu erhalten, aber nicht mehr als nötig.

In diesem Beispiel befindet sich der Start des angegebenen Bereichs im Textknoten unterhalb der Überschrift des Abschnitts, was bedeutet, dass das neue `DocumentFragment` ein {{HTMLElement("Heading_Elements", "h2")}} und darunter einen Textknoten enthalten muss.

Das Ende des Bereichs befindet sich unterhalb des {{HTMLElement("p")}}-Elements, daher wird dies ebenfalls im neuen Fragment benötigt. Ebenso der Textknoten, der das Wort "A" enthält, da dies im Bereich enthalten ist. Schließlich werden ein `<em>` und ein darunter liegender Textknoten unter dem `<p>` hinzugefügt.

Die Inhalte der Textknoten werden dann durch die angegebenen Versätze in diese Textknoten bestimmt, wenn [`setStart()`](/de/docs/Web/API/Range/setStart) und [`setEnd()`](/de/docs/Web/API/Range/setEnd) aufgerufen werden. Angesichts des Versatzes von 11 im Text der Überschrift wird dieser Knoten "An interesting thing…" enthalten. Ebenso wird der letzte Textknoten "ve" enthalten, weil die ersten beiden Zeichen des Endknotens angefordert wurden.

Das resultierende Dokumentfragment sieht so aus:

![Ein Dokumentfragment, das den geklonten Inhalt darstellt](dom-fragment.svg)

Beachten Sie besonders, dass die Inhalte dieses Fragments alle _unterhalb_ des gemeinsamen übergeordneten Elements der obersten Knoten innerhalb davon liegen. Das übergeordnete `<section>`-Element ist nicht notwendig, um den geklonten Inhalt zu reproduzieren, daher ist es nicht enthalten.

## Beispiel

Betrachten Sie dieses einfache HTML-Fragment.

```html
<p><strong>This</strong> is a paragraph.</p>
```

Stellen Sie sich vor, Sie verwenden ein [`Range`](/de/docs/Web/API/Range), um das Wort "paragraph" daraus zu extrahieren. Der folgende Code sieht so aus:

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

Mit der Textknoten-Referenz in der Hand erstellen wir ein neues `Range`-Objekt, indem wir [`createRange()`](/de/docs/Web/API/Document/createRange) auf dem `Document` selbst aufrufen. Wir setzen die Startposition des Bereichs auf das sechste Zeichen der Zeichenfolge des Textknotens und die Endposition auf die Länge der Zeichenfolge des Textknotens minus eins. Dies setzt den Bereich, um das Wort "paragraph" zu umfassen.

Dann rufen wir [`cloneContents()`](/de/docs/Web/API/Range/cloneContents) auf dem `Range` auf, um ein neues [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt zu erstellen, welches den durch den Bereich umfassten Teil des Dokuments enthält. Danach verwenden wir [`appendChild()`](/de/docs/Web/API/Node/appendChild), um dieses Fragment am Ende des Dokumentkörpers hinzuzufügen, wie es mittels [`document.body`](/de/docs/Web/API/Document/body) abgerufen wird.

Das Ergebnis sieht so aus:

{{EmbedLiveSample("Example", 600, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
