---
title: Auswahl und Traversierung des DOM-Baums
slug: Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree
l10n:
  sourceCommit: ca1468a4faabb0d62b0f08a723281a79dd8ceaf5
---

{{DefaultAPISidebar("DOM")}}

Im Leitfaden [Anatomie des DOM](/de/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM) haben wir Eigenschaften vorgestellt, mit denen Sie zwischen Elternknoten, Kindknoten und Geschwisterknoten navigieren können. Den Baum manuell zu durchlaufen, ist jedoch umständlich und fehleranfällig. Das DOM bietet Methoden, mit denen Sie direkt eine Referenz auf ein Element im Baum anhand einer eindeutigen Kennung, eines Klassennamens, eines Tag-Namens, eines CSS-Selektors und weiterer Kriterien erhalten. Außerdem stellt es Hilfsfunktionen bereit, um über die Knoten des Baums zu iterieren.

## Baumtraversierung: ein Überblick

Der Leitfaden [Anatomie des DOM](/de/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM) stellt die Baumstruktur des DOM vor. Der Baum hat eine Wurzel, und jeder Knoten hat eine möglicherweise leere Liste von Kindknoten. Die Dokumentwurzel ist ein [`Document`](/de/docs/Web/API/Document)-Knoten, während [`Element`](/de/docs/Web/API/Element)-Knoten das Grundgerüst dieses Baums bilden.

![Das DOM als baumartige Darstellung eines Dokuments mit einer Wurzel und Knoten, die Inhalte enthalten](/de/docs/Web/API/Document_Object_Model/example-dom-tree.svg)

Es gibt viele Möglichkeiten, [einen Baum zu durchlaufen](https://en.wikipedia.org/wiki/Tree_traversal), aber das DOM stellt nur eine Reihenfolge bereit: die Tiefensuche mit Besuch des Elternknotens vor seinen Kindknoten (Preorder-DFS). Sie wird als _Dokumentreihenfolge_ oder _Baumreihenfolge_ bezeichnet. Im Pseudocode funktioniert sie so:

```js
function traverseTree(root, visitor) {
  // Visit the root first
  visitor(root);
  for (const child of root.childNodes) {
    // Recursively visit each child in order
    // Each child subtree is completely visited before moving to the next
    traverseTree(child, visitor);
  }
}
```

Ein Element steht vor seinen Nachkommen; frühere Geschwisterknoten und deren Nachkommen stehen vor späteren Geschwisterknoten. Im obigen Baum stehen die `Element`-Knoten beispielsweise in dieser Baumreihenfolge: `HTML`, `HEAD`, `TITLE`, `BODY`, `H1`, `P`.

Die Auswahl ist lediglich eine Form der Traversierung, bei der `visitor` eine boolesche Funktion ist, die angibt, ob uns ein Element interessiert.

```js
function selectTree(root, visitor) {
  // visitor successfully matches the root node; return without going further
  if (visitor(root)) return root;
  for (const child of root.childNodes) {
    const result = selectTree(child, visitor);
    // A result is successfully found within the subtree at child
    if (result !== null) return result;
  }
  // No match found anywhere in the subtree at root
  return null;
}

function selectTreeMulti(root, visitor, collection) {
  if (visitor(root)) collection.push(root);
  for (const child of root.childNodes) {
    selectTreeMulti(child, visitor, collection);
  }
  return collection;
}
```

Wenn Sie diese Konzepte verstehen, verstehen Sie bereits einen großen Teil der Auswahl und Traversierung im DOM. Es bleibt nur noch zu klären, wie die einzelnen spezialisierten DOM-Methoden ihre `visitor`-Funktion und ihr `collection`-Objekt für Sie definieren.

## Elemente anhand von ID, Klasse oder Tag-Namen auswählen

Es gibt drei wichtige Möglichkeiten, ein Element zu identifizieren: seine [`id`](/de/docs/Web/API/Element/id), seinen [`className`](/de/docs/Web/API/Element/className) und seinen [`tagName`](/de/docs/Web/API/Element/tagName). Die Schnittstelle [`Document`](/de/docs/Web/API/Document) stellt drei Methoden bereit, um anhand dieser Kennungen auszuwählen:

- [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)
- [`document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName)
- [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)

Wie die Namen nahelegen, gibt `getElementById()` die Referenz auf ein einzelnes Element zurück (oder `null`, wenn kein Element gefunden wird), während `getElementsByClassName()` und `getElementsByTagName()` Sammlungen von Elementen zurückgeben. Bei der Sammlung handelt es sich um eine _dynamische [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)_. Darauf gehen wir unter [Arbeiten mit Sammlungen](#arbeiten_mit_sammlungen) näher ein.

Die `id` jedes Elements sollte innerhalb des Dokuments eindeutig sein ([Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) verfügt jedoch über eigene Geltungsbereiche). Solange Sie diese Anforderung in Ihrem Code einhalten, erhalten Sie mit `getElementById()` stets das gewünschte Element. `id`-Attribute werden allerdings sparsam eingesetzt, da es schwierig ist, ihre globale Eindeutigkeit sicherzustellen. Daher sind in realen Anwendungen `getElementsByClassName()` und `getElementsByTagName()` (oder die [Abfragemethoden](#elemente_mit_css-selektoren_auswählen), die wir gleich vorstellen) oft praktischer.

```html
<div id="container"></div>
<div class="profile big"></div>
```

```js
const containerDiv = document.getElementById("container");
// containerDiv is an HTMLDivElement

const profileDivs = document.getElementsByClassName("profile");
// profileDivs is an HTMLCollection containing an HTMLDivElement

const profileDivs2 = document.getElementsByTagName("div");
// profileDivs2 is an HTMLCollection containing both HTMLDivElements
```

Einige wichtige Hinweise:

- Die Methode `getElementById()` vergleicht IDs unter Berücksichtigung der Groß- und Kleinschreibung. Auch `getElementsByClassName()` berücksichtigt die Groß- und Kleinschreibung, außer im [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode), in dem der Vergleich ohne Berücksichtigung der ASCII-Groß- und Kleinschreibung erfolgt.
- In HTML-Dokumenten wandelt `getElementsByTagName()` das Argument beim Abgleich mit HTML-Elementen in Kleinbuchstaben um. Nicht-HTML-Elemente (z. B. SVG) werden weiterhin unter Berücksichtigung der Groß- und Kleinschreibung abgeglichen. In XML-Dokumenten wird bei allen Tag-Namen die Groß- und Kleinschreibung berücksichtigt. Beachten Sie, dass `tagName` für ein HTML-Element in einem HTML-Dokument in Großbuchstaben zurückgegeben wird, intern aber weiterhin in Kleinbuchstaben gespeichert ist.
- Der Wert des Attributs `class` ist eine durch Leerzeichen getrennte Liste aus einem oder mehreren Klassennamen. Auch für `getElementsByClassName()` können Sie eine solche Liste angeben. `visitor` prüft dann, ob diese Liste eine Teilmenge der Klassennamen des Elements ist. Ein Element stimmt also überein, wenn alle angegebenen Klassennamen bei ihm vorhanden sind; zusätzliche Klassennamen sind zulässig.
- Die Methode `getElementsByTagName()` akzeptiert den besonderen Wert `"*"`, um alle Elemente abzurufen (also keine Filterung vorzunehmen).

Falls Sie mit [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) vertraut sind: Diese Methoden sind die DOM-Entsprechungen der ID-, Klassen-, Typ- und Universalselektoren:

```css
/* document.getElementById("container") */
#container {
}

/* document.getElementsByClassName("profile") */
.profile {
}

/* document.getElementsByClassName("profile big") */
.profile.big {
}

/* document.getElementsByTagName("div") */
div {
}

/* document.getElementsByTagName("*") */
* {
}
```

Die Methode `getElementById()` ist auch für [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) verfügbar; `getElementsByClassName()` und `getElementsByTagName()` sind auch für [`Element`](/de/docs/Web/API/Element) verfügbar. Wenn Sie eine Methode auf einem Knoten aufrufen, wird dieser Knoten zur Wurzel der Suche. Die aufrufende Wurzel selbst wird nie als Treffer berücksichtigt.

## Elemente mit CSS-Selektoren auswählen

Sie können Elemente auch direkt mit CSS-Selektoren auswählen. Auf [`Document`](/de/docs/Web/API/Document) stehen dafür zwei Methoden zur Verfügung:

- [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)

Beide Methoden durchsuchen die Nachkommen, nicht aber den Knoten, auf dem sie aufgerufen werden. `querySelector()` gibt das erste passende Element zurück; `querySelectorAll()` gibt alle passenden Elemente in einer _statischen [`NodeList`](/de/docs/Web/API/NodeList)_ zurück. Diese Sammlung stellen wir unter [Arbeiten mit Sammlungen](#arbeiten_mit_sammlungen) genauer vor.

Die Methoden akzeptieren [Selektoren](/de/docs/Web/CSS/Guides/Selectors), anhand derer bestimmt wird, welches Element oder welche Elemente zurückgegeben werden. Dazu gehören auch [Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list), mit denen Sie mehrere Selektoren in einer einzigen Abfrage zusammenfassen können.

Um alle Absatz-Elemente (`p`) in einem Dokument auszuwählen, deren Klassen `warning` oder `note` enthalten, können Sie Folgendes tun:

```js
const special = document.querySelectorAll("p.warning, p.note");
```

Sie können auch anhand einer ID suchen. Zum Beispiel:

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

Nach Ausführung des obigen Codes enthält `el` das erste Element im Dokument, dessen ID `main`, `basic` oder `exclamation` ist. Die Reihenfolge der Selektoren in der Liste gibt keiner ID Vorrang vor einer anderen. Ein Element, auf das mehrere Selektoren zutreffen, erscheint im Ergebnis von `querySelectorAll()` nur einmal.

[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wie `:checked` und `:first-child` können in Abfragen verwendet werden. Zum Schutz der Privatsphäre der Benutzer werden einige Pseudoklassen nicht unterstützt oder verhalten sich anders. Beispielsweise liefert {{cssxref(":visited")}} keine Treffer, und {{cssxref(":link")}} wird wie {{cssxref(":any-link")}} behandelt. Es können nur Elemente ausgewählt werden. [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie `::before` liefern daher keine passenden DOM-Elemente.

Die `querySelector`-Methoden decken im Wesentlichen alle Möglichkeiten der zuvor vorgestellten `getElementBy`-Methoden und darüber hinaus ab. Alles, was Sie mit Letzteren umsetzen können, lässt sich mit Ersteren auf ähnliche Weise erreichen:

```js
document.getElementById("container");
// Is equivalent to:
document.querySelector("#container");

document.getElementsByClassName("profile big");
// Is equivalent to:
document.querySelectorAll(".profile.big");

document.getElementsByTagName("div");
// Is equivalent to:
document.querySelectorAll("div");
```

Sie müssen lediglich zwei Dinge beachten:

- `getElementsByClassName()` und `getElementsByTagName()` geben dynamische Sammlungen zurück, während `querySelectorAll()` eine statische Sammlung zurückgibt (siehe [Dynamische und statische Sammlungen](#dynamische_und_statische_sammlungen)). Meist ist das Verhalten der statischen Sammlung erwünscht.
- Die Selektorzeichenfolge muss eine gültige CSS-Selektorsyntax aufweisen. Andernfalls löst die Methode eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `SyntaxError` aus. Eine HTML-ID oder ein Klassenname ist nicht unbedingt ein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/Reference/Values/ident). Verwenden Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static), wenn Sie einen solchen Wert in einen ID- oder Klassenselektor einfügen:

  ```js
  const id = "item:42";
  const item = document.querySelector(`#${CSS.escape(id)}`);
  // document.getElementById(id) needs no escaping.
  ```

Beide Abfragemethoden sind auch für [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) und [`Element`](/de/docs/Web/API/Element) verfügbar. Wenn Sie `querySelector()` oder `querySelectorAll()` auf einem Element aufrufen, werden nur dessen Nachkommen zurückgegeben; der Selektor wird jedoch im Kontext des gesamten Dokuments angewendet. Betrachten Sie beispielsweise dieses HTML:

```html
<div>
  <section id="main">
    <p class="note">A direct child.</p>
    <div>
      <p class="note">A nested paragraph.</p>
    </div>
  </section>
</div>
```

Ein Selektor wie `div p` stimmt weiterhin mit der ersten Notiz überein, da dieses `p` tatsächlich in einem `div` verschachtelt ist, obwohl sich dieses `div` außerhalb der Suchwurzel befindet. Verwenden Sie {{cssxref(":scope")}}, um den Selektor nur innerhalb der Suchwurzel anzuwenden:

```js
const main = document.getElementById("main");
const allNotes = main.querySelectorAll("div p"); // Both paragraphs
const childNote = main.querySelectorAll(":scope div p"); // Only the second
const childNote2 = main.querySelectorAll(":scope > p"); // Only the first
```

Die Methode [`Element.matches()`](/de/docs/Web/API/Element/matches) prüft, ob ein Element mit der Selektorzeichenfolge übereinstimmt. `querySelector()` funktioniert daher ähnlich wie die Funktion `selectTree`, wenn `element.matches` als `visitor`-Funktion übergeben wird (trotz zahlreicher technischer Unterschiede).

Mit der Methode [`Element.closest()`](/de/docs/Web/API/Element/closest) können Sie auch _nach oben_ suchen. Sie prüft zunächst das Element selbst, dann sein Elternelement und so weiter in Richtung der Wurzel, bis sie ein Vorfahrenelement findet, das mit dem angegebenen Selektor übereinstimmt.

Mit demselben HTML:

```js
const innerNote = document.querySelector("#main div p.note");
console.log(innerNote.closest("section").id); // "main"
```

## Arbeiten mit Sammlungen

Wir haben bereits zwei Arten von Sammlungen vorgestellt:

- eine _dynamische [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)_, wie sie von `getElementsByClassName()` und `getElementsByTagName()` zurückgegeben wird
- eine _statische [`NodeList`](/de/docs/Web/API/NodeList)_, wie sie von `querySelectorAll()` zurückgegeben wird

Eine `NodeList` kann Knoten beliebiger Typen enthalten, während eine `HTMLCollection` nur Elemente enthält (die allerdings keine HTML-Elemente sein müssen). Möglicherweise kennen Sie bereits die Eigenschaft [`Node.childNodes`](/de/docs/Web/API/Node/childNodes), die ebenfalls eine `NodeList` ist. Die von `querySelectorAll()` zurückgegebene `NodeList` enthält nur Elemente, weil diese Methode Elemente auswählt.

Beide Schnittstellen sind [Array-ähnlich](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects). Das bedeutet, dass sie eine `length`-Eigenschaft haben und den Zugriff über Indizes unterstützen. Außerdem unterstützen sie die [Iteration](/de/docs/Web/JavaScript/Reference/Iteration_protocols).

```js
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs.length);
console.log(paragraphs[0]);

for (const para of paragraphs) {
  // ...
}
```

Sie sind jedoch keine echten {{jsxref("Array")}}-Objekte und verfügen daher nicht über Methoden wie {{jsxref("Array.prototype.map()")}}. Wenn Sie solche Methoden benötigen, können Sie die Sammlungen mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder {{jsxref("Array.from()")}} in Arrays umwandeln:

```js
const paragraphs = [...document.querySelectorAll("p")];
const paragraphs2 = Array.from(document.querySelectorAll("p"));

const texts = paragraphs.map((p) => p.textContent);
```

Die Schnittstellen `NodeList` und `HTMLCollection` waren – zusammen mit vielen anderen Array-ähnlichen Schnittstellen im Web – ein [Versuch, eine nicht veränderbare Liste zu schaffen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156). Sie bieten keine Möglichkeit, sie direkt zu verändern, und Änderungen an den daraus erzeugten Arrays wirken sich nicht auf die ursprüngliche Liste aus.

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) ist nicht nur eine Liste, sondern auch eine Schlüssel-Wert-Zuordnung, die das Nachschlagen anhand der ID eines Elements oder des `name` eines HTML-Elements ermöglicht. Sie können dafür entweder [`namedItem()`](/de/docs/Web/API/HTMLCollection/namedItem) verwenden oder direkt über Eigenschaften auf die Elemente zugreifen (solange deren Namen nicht mit vorhandenen Eigenschaftsnamen der `HTMLCollection` kollidieren).

```js
const sections = document.getElementsByTagName("section");
const main = sections.namedItem("main");
const main2 = sections["main"];
```

Die Schnittstellen bieten einige zusätzliche praktische Methoden:

- Beide Schnittstellen bieten eine Methode [`item()`](/de/docs/Web/API/NodeList/item), die ähnlich wie der Zugriff über einen Index funktioniert. Der Hauptunterschied besteht darin, dass sie `null` zurückgibt, wenn der Index außerhalb des gültigen Bereichs liegt, während der Zugriff über einen Index `undefined` zurückgibt. Außerdem gelten unterschiedliche Regeln für die Umwandlung der Eingabe.
- [`NodeList`](/de/docs/Web/API/NodeList) bietet [`forEach()`](/de/docs/Web/API/NodeList/forEach), [`entries()`](/de/docs/Web/API/NodeList/entries), [`keys()`](/de/docs/Web/API/NodeList/keys) und [`values()`](/de/docs/Web/API/NodeList/values). Sie funktionieren genauso wie die entsprechenden Methoden von `Array`. Wenn Sie nur diese Methoden benötigen, müssen Sie die `NodeList` nicht in ein `Array` umwandeln.

### Dynamische und statische Sammlungen

Die von `getElementsByTagName()` und `getElementsByClassName()` zurückgegebenen `HTMLCollection`-Objekte sind _dynamisch_. Im Wesentlichen speichert die Sammlung zunächst keine Ergebnisse, sondern merkt sich nur das Wurzelelement und die Abfrage. Erst wenn Sie ihre Länge oder ein enthaltenes Element abrufen, führt sie die eigentliche Traversierung des aktuellen DOM-Baums durch. (In einem realen Browser kann dies aufgrund von Optimierungen anders umgesetzt sein.) Wenn Sie die Sammlung speichern und anschließend den DOM-Baum ändern, spiegelt die Sammlung den aktualisierten DOM-Baum wider.

```js
const container = document.createElement("div");
const paragraph = document.createElement("p");
paragraph.className = "note";
container.append(paragraph);

const liveList = container.getElementsByClassName("note");
console.log(liveList.length); // 1

paragraph.classList.remove("note");
console.log(liveList.length); // 0
```

Das von `querySelectorAll()` zurückgegebene `NodeList`-Objekt ist dagegen _statisch_: Es ist eine Momentaufnahme des Baumzustands zum Zeitpunkt des Methodenaufrufs. Eine statische Liste behält bei, welche Knoten sie enthält, nicht aber deren Zustand: Sie verweist weiterhin auf die ursprünglichen Knotenobjekte.

```js
const container = document.createElement("div");
const paragraph = document.createElement("p");
paragraph.className = "note";
container.append(paragraph);

const staticList = container.querySelectorAll(".note");
console.log(staticList.length); // 1

paragraph.classList.remove("note");
console.log(staticList.length); // 1
console.log(staticList[0].className); // ""
```

Meist ist eine statische Liste das, was Sie benötigen. Um Array-Methoden zu verwenden, müssen Sie die Sammlungen ohnehin fast immer in Arrays umwandeln; danach ist die Sammlung nicht mehr dynamisch. Wenn Sie außerdem eine dynamische Sammlung während der Iteration verändern, können sich ihre Indizes und ihre Länge ändern. Das kann zu unbeabsichtigten [gleichzeitigen Änderungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#mutating_initial_array_in_iterative_methods) führen:

```js
const notes = document.getElementsByClassName("note");
for (const note of notes) {
  // This simultaneously removes this element from the collection, shifting
  // all later elements, so the next iteration doesn't visit the next element
  note.classList.remove("note");
}
```

Um dies zu vermeiden, iterieren Sie über eine Momentaufnahme, etwa ein mit `Array.from(notes)` erstelltes Array oder eine mit `querySelectorAll(".note")` erhaltene statische Liste. Alternativ können Sie Änderungen, die die enthaltenen Elemente oder deren Reihenfolge beeinflussen, bis nach der Iteration aufschieben. Eine Referenz auf die dynamische Sammlung können Sie dennoch behalten, um spätere Aktualisierungen zu beobachten.

## Knoten durchlaufen

Selektormethoden können verwendet werden, um über Elemente zu iterieren, zum Beispiel so:

```js
for (const descendant of element.querySelectorAll("*")) {
  // Visit every single descendant element in this subtree
}
```

Das ist jedoch recht eingeschränkt: Sie können weder Nicht-Elemente wie Textknoten oder Kommentare besuchen noch einen bestimmten Teilbaum auslassen, ohne komplizierte Selektoren zu schreiben. Das DOM stellt zwei Schnittstellen für die allgemeine Traversierung bereit: [`NodeIterator`](/de/docs/Web/API/NodeIterator) und [`TreeWalker`](/de/docs/Web/API/TreeWalker). Das folgende Beispiel durchläuft etwa alle Knoten, einschließlich Textknoten und Kommentare:

```js
const nodeIterator = document.createNodeIterator(document);
let node = nodeIterator.nextNode();
while (node) {
  console.log(node.nodeName);
  node = nodeIterator.nextNode();
}
```

Um einen `NodeIterator` oder `TreeWalker` zu erstellen, rufen Sie [`document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) beziehungsweise [`document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker) auf. Beide Methoden nehmen dieselben drei Argumente entgegen:

- `root`: Der Knoten, an dem die Traversierung beginnt.
- `whatToShow` {{optional_inline}}: Gibt an, welche Knotentypen besucht werden sollen. Ein nicht besuchter Knoten kann dennoch Nachkommen haben, die besucht werden. Der Standardwert ist `NodeFilter.SHOW_ALL`.
- `filter` {{optional_inline}}: Eine Funktion oder ein Objekt mit einer Methode `acceptNode(node)`, die beziehungsweise das die besuchten Knoten weiter einschränkt. Die Funktion kann entscheiden, ob ein Knoten übersprungen werden soll und, falls ja, ob auch seine Nachkommen übersprungen werden sollen (Letzteres nur bei `TreeWalker`). Der Standardwert ist `null`, was bedeutet, dass keine zusätzliche Filterung erfolgt.

Beide Objekte stellen diese Einstellungen über ihre schreibgeschützten Eigenschaften `root`, `whatToShow` und `filter` bereit.

Die Schnittstelle `NodeFilter` stellt Konstanten für `whatToShow` bereit.

| Konstante                                | Angezeigte Knoten                                                 |
| ---------------------------------------- | ----------------------------------------------------------------- |
| `NodeFilter.SHOW_ALL`                    | Alle                                                              |
| `NodeFilter.SHOW_ATTRIBUTE`              | [`Attr`](/de/docs/Web/API/Attr)                                   |
| `NodeFilter.SHOW_CDATA_SECTION`          | [`CDATASection`](/de/docs/Web/API/CDATASection)                   |
| `NodeFilter.SHOW_COMMENT`                | [`Comment`](/de/docs/Web/API/Comment)                             |
| `NodeFilter.SHOW_DOCUMENT`               | [`Document`](/de/docs/Web/API/Document)                           |
| `NodeFilter.SHOW_DOCUMENT_FRAGMENT`      | [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)           |
| `NodeFilter.SHOW_DOCUMENT_TYPE`          | [`DocumentType`](/de/docs/Web/API/DocumentType)                   |
| `NodeFilter.SHOW_ELEMENT`                | [`Element`](/de/docs/Web/API/Element)                             |
| `NodeFilter.SHOW_PROCESSING_INSTRUCTION` | [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) |
| `NodeFilter.SHOW_TEXT`                   | [`Text`](/de/docs/Web/API/Text)                                   |

> [!NOTE]
> Die Konstante `NodeFilter.SHOW_ATTRIBUTE` ist nur wirksam, wenn die Wurzel ein Attributknoten ist. Da der Elternknoten jedes `Attr`-Knotens immer `null` ist, geben [`TreeWalker.nextNode()`](/de/docs/Web/API/TreeWalker/nextNode) und [`TreeWalker.previousNode()`](/de/docs/Web/API/TreeWalker/previousNode) niemals einen `Attr`-Knoten zurück. Um `Attr`-Knoten zu durchlaufen, verwenden Sie stattdessen [`Element.attributes`](/de/docs/Web/API/Element/attributes).

Alle diese Konstanten sind Bitmasken. Sie können daher mit dem [bitweisen ODER-Operator](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) (`|`) mehrere Konstanten kombinieren, um mehrere Knotentypen einzubeziehen. Mit `NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT` beziehen Sie beispielsweise sowohl Element- als auch Textknoten ein.

Ein Knoten, der `whatToShow` nicht erfüllt, wird niemals an die Funktion `filter` übergeben. Er kann jedoch trotzdem Nachkommen haben, die besucht werden.

Die Funktion `filter` (oder ihre Methode `acceptNode()`) wird aufgerufen, wenn bei der Traversierung ein möglicher Knoten geprüft wird, dessen Typ mit `whatToShow` übereinstimmt. Nachkommen eines von `TreeWalker` verworfenen Teilbaums erreichen den Filter möglicherweise nie. Der Filter muss eine dieser Konstanten zurückgeben:

- `NodeFilter.FILTER_ACCEPT`: Der Knoten wird zurückgegeben.
- `NodeFilter.FILTER_SKIP`: Der Knoten wird übersprungen, seine Nachkommen werden aber weiterhin berücksichtigt.
- `NodeFilter.FILTER_REJECT`: Bei `TreeWalker` werden der Knoten und alle seine Nachkommen übersprungen; bei `NodeIterator` verhält sich die Konstante wie `FILTER_SKIP`.

Das folgende Beispiel iteriert über alle Textknoten, die nicht nur aus Leerraum bestehen:

```js
const iterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_TEXT,
  (node) =>
    node.data.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
);
```

### Mit NodeIterator in Baumreihenfolge iterieren

Ein [`NodeIterator`](/de/docs/Web/API/NodeIterator) besucht Knoten mit [`nextNode()`](/de/docs/Web/API/NodeIterator/nextNode) in Baumreihenfolge und mit [`previousNode()`](/de/docs/Web/API/NodeIterator/previousNode) in umgekehrter Baumreihenfolge. Jeder Aufruf gibt einen vom Filter akzeptierten Knoten zurück oder `null`, wenn in der jeweiligen Richtung kein solcher Knoten vorhanden ist.

Wenn Sie das vorherige Beispiel fortsetzen, können Sie sich fortlaufend in Baumreihenfolge vorwärtsbewegen und jeden Textknoten protokollieren:

```js
let node;
while ((node = iterator.nextNode())) {
  console.log(node.data);
}
```

Abstrakt betrachtet funktioniert `NodeIterator` so, als würde er eine Liste der Knoten verwalten, die den Filter passiert haben, sortiert in Baumreihenfolge (tatsächlich speichert er diese Liste nicht). Der Iterator verfolgt eine Position unmittelbar zwischen zwei Knoten dieser Liste, die durch [`referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) und [`pointerBeforeReferenceNode`](/de/docs/Web/API/NodeIterator/pointerBeforeReferenceNode) dargestellt wird. `nextNode()` gibt den Knoten unmittelbar rechts von dieser Position zurück, während `previousNode()` den Knoten unmittelbar links davon zurückgibt. Anfangs ist [`referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) die Wurzel und [`pointerBeforeReferenceNode`](/de/docs/Web/API/NodeIterator/pointerBeforeReferenceNode) ist `true`. Deshalb gibt der erste Aufruf von `nextNode()` die Wurzel zurück, sofern sie die Filter passiert. Der erste Aufruf von `previousNode()` gibt dagegen `null` zurück, weil links davon nichts liegt. Nach einem erfolgreichen Aufruf von `nextNode()` ist `referenceNode` der zurückgegebene Knoten und `pointerBeforeReferenceNode` ist `false`; bei `previousNode()` verhält es sich umgekehrt. Wenn Sie anschließend die Richtung wechseln, wird derselbe Knoten erneut zurückgegeben, sofern er weiterhin die Filter passiert.

### Mit TreeWalker im gefilterten Baum navigieren

[`NodeIterator`](/de/docs/Web/API/NodeIterator) stellt die gefilterten Knoten als lineare Sammlung dar. Das ist für die Iteration praktisch, erhält aber die Baumstruktur nicht. Mit einem [`TreeWalker`](/de/docs/Web/API/TreeWalker) können Sie innerhalb einer gefilterten Ansicht des Baums zwischen den Knotenbeziehungen navigieren.

Abstrakt betrachtet funktioniert `TreeWalker` so, als würde er einen _Baum_ aus Knoten verwalten, die den Filter passiert haben. Für jeden Knoten in der gefilterten Ansicht sind seine direkten Kindknoten diejenigen seiner Nachkommen im ursprünglichen Baum, zwischen denen kein weiterer Knoten liegt, der ebenfalls den Filter passiert. Denken Sie daran: `NodeFilter.FILTER_SKIP` überspringt einen Knoten, lässt seine Nachkommen aber zu; `NodeFilter.FILTER_REJECT` überspringt einen Knoten und alle seine Nachkommen.

![Ein Binärbaum mit 7 Knoten, die in Breitenreihenfolge von 1 bis 7 nummeriert sind. Die Knoten 1, 3, 4, 5 und 7 werden akzeptiert. Gestrichelte Linien in der gefilterten Ansicht verbinden Knoten 1 mit seinen Kindknoten 4, 5 und 3 sowie Knoten 3 mit seinem Kindknoten 7.](filtered-tree.svg)

Die Eigenschaft [`currentNode`](/de/docs/Web/API/TreeWalker/currentNode) beginnt bei der Wurzel, selbst wenn diese die Filter nicht passiert. Anders als bei einem `NodeIterator` beginnt ein Aufruf von `nextNode()` die Suche nach diesem aktuellen Knoten. Die Wurzel selbst wird beim ersten Aufruf daher nie zurückgegeben.

Die folgenden Methoden bewegen `currentNode` durch die gefilterte Ansicht. Wenn kein entsprechender Knoten gefunden wird, geben sie `null` zurück und lassen `currentNode` unverändert: [`parentNode()`](/de/docs/Web/API/TreeWalker/parentNode), [`firstChild()`](/de/docs/Web/API/TreeWalker/firstChild), [`lastChild()`](/de/docs/Web/API/TreeWalker/lastChild), [`previousSibling()`](/de/docs/Web/API/TreeWalker/previousSibling), [`nextSibling()`](/de/docs/Web/API/TreeWalker/nextSibling).

Beachten Sie, dass die gefilterte Ansicht möglicherweise kein einzelner Baum ist, wenn die Wurzel den Filter nicht passiert. Verwenden Sie [`previousNode()`](/de/docs/Web/API/TreeWalker/previousNode) und [`nextNode()`](/de/docs/Web/API/TreeWalker/nextNode), um den vorherigen beziehungsweise nächsten passenden Knoten in Baumreihenfolge zu finden. Dieser kann zu einem anderen gefilterten Baum gehören. Auch diese Methoden geben `null` zurück und lassen `currentNode` unverändert, wenn kein solcher Knoten gefunden wird.

Anders als `referenceNode` eines Iterators ist `currentNode` beschreibbar. Sie können den Wert speichern und später wieder zuweisen oder den Walker mit `walker.currentNode = walker.root` auf seine Wurzel zurücksetzen. Bei einer Zuweisung werden die Filter nicht angewendet, und es wird nicht geprüft, ob sich der Knoten innerhalb des Teilbaums der Wurzel befindet. Halten Sie ihn daher innerhalb dieses Teilbaums, wenn die Traversierung dort bleiben soll.

Betrachten Sie beispielsweise dieses HTML:

```html
<article id="article">
  <p>Read <strong>this</strong> paragraph.</p>
  <aside data-skip><p>Ignore this note.</p></aside>
  <p>Read this paragraph too.</p>
</article>
```

Dieser Walker sammelt Textknoten, die nicht nur aus Leerraum bestehen, und schließt dabei Teilbäume aus, die mit `data-skip` markiert sind:

```js
const article = document.getElementById("article");
const walker = document.createTreeWalker(
  article,
  NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  (node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      return node.hasAttribute("data-skip")
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_SKIP;
    }
    return node.data.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  },
);

const parts = [];
let node;
while ((node = walker.nextNode())) {
  parts.push(node.data);
}
console.log(parts.join(""));
// "Read this paragraph.Read this paragraph too."
```

`SHOW_ELEMENT` ist erforderlich, obwohl wir nur Text sammeln: So kann der Filter Elemente mit `data-skip` prüfen und verwerfen. Bei ausschließlich `SHOW_TEXT` würden diese Elemente übersprungen, bevor der Filter aufgerufen wird, und ihr Text würde weiterhin besucht. Da `NodeIterator` die Baumstruktur nicht berücksichtigt, lassen sich damit keine ganzen Teilbäume ausschließen.

## Zusammenfassung

Die folgenden Funktionen sind für die Auswahl von Elementen im DOM-Baum und die Traversierung von Knoten nützlich:

- Elemente anhand von ID, Klasse oder Tag-Namen auswählen: [`getElementById()`](/de/docs/Web/API/Document/getElementById) (auch für `DocumentFragment` verfügbar), [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) und [`getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) (beide auch für `Element` verfügbar).
- Elemente mit CSS-Selektoren auswählen: [`querySelector()`](/de/docs/Web/API/Element/querySelector) für den ersten Treffer oder [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) für alle Treffer. Beide sind auch für `DocumentFragment` und `Element` verfügbar.
- Ein Element prüfen oder seine Vorfahren durchsuchen: [`matches()`](/de/docs/Web/API/Element/matches) und [`closest()`](/de/docs/Web/API/Element/closest).
- Die Schnittstellen [`NodeList`](/de/docs/Web/API/NodeList) und [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) sind Array-ähnliche Sammlungen von Knoten beziehungsweise Elementen. Sie bieten `length`, Zugriff über Indizes, Iteration und `item()`. `NodeList` bietet außerdem `forEach()`, `entries()`, `keys()` und `values()`. `HTMLCollection` bietet [`namedItem()`](/de/docs/Web/API/HTMLCollection/namedItem) und den Zugriff über benannte Eigenschaften.
- [`document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator) erstellt einen [`NodeIterator`](/de/docs/Web/API/NodeIterator), der Knoten mit seinen Methoden [`nextNode()`](/de/docs/Web/API/NodeIterator/nextNode)/[`previousNode()`](/de/docs/Web/API/NodeIterator/previousNode) nacheinander durchläuft. Seine Position wird durch [`referenceNode`](/de/docs/Web/API/NodeIterator/referenceNode) und [`pointerBeforeReferenceNode`](/de/docs/Web/API/NodeIterator/pointerBeforeReferenceNode) dargestellt.
- [`document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker) erstellt einen [`TreeWalker`](/de/docs/Web/API/TreeWalker), der Knoten in der gefilterten Baumansicht mit seinen Methoden `parentNode()`, `firstChild()`/`lastChild()`, `previousSibling()`/`nextSibling()` und `previousNode()`/`nextNode()` durchläuft. Seine Position wird durch [`currentNode`](/de/docs/Web/API/TreeWalker/currentNode) dargestellt.
- Die Bitmasken `NodeFilter.SHOW_*` wählen Knotentypen aus; eine Filterfunktion oder die Methode `acceptNode()` gibt `FILTER_ACCEPT`, `FILTER_SKIP` oder `FILTER_REJECT` zurück. Nur `TreeWalker` verwendet `FILTER_REJECT`, um Teilbäume auszuschließen.

## Siehe auch

- [Anatomie des DOM](/de/docs/Web/API/Document_Object_Model/Anatomy_of_the_DOM)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
- [`NodeIterator`](/de/docs/Web/API/NodeIterator)
- [`TreeWalker`](/de/docs/Web/API/TreeWalker)
- [DOM-Standard: Traversierung](https://dom.spec.whatwg.org/#traversal)
- [Selektoren-Spezifikation](https://drafts.csswg.org/selectors/)
