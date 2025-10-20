---
title: Anatomie des DOM
slug: Web/API/Document_Object_Model/Anatomy_of_the_DOM
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{DefaultAPISidebar("DOM")}}

Das DOM stellt ein XML- oder HTML-Dokument als Baum dar. Diese Seite führt in die Grundstruktur des DOM-Baums ein und beschreibt die verschiedenen Eigenschaften und Methoden, die zur Navigation verwendet werden.

Zu Beginn müssen wir einige Konzepte im Zusammenhang mit Bäumen einführen. Ein Baum ist eine Datenstruktur, die aus _Knoten_ besteht. Jeder Knoten enthält einige _Daten_. Die Knoten sind hierarchisch organisiert – jeder Knoten hat einen einzelnen _Elternknoten_ (außer dem Wurzelknoten, der keinen Elternteil hat) und eine geordnete Liste von null oder mehr _Kindknoten_. Nun können wir Folgendes definieren:

- Ein Knoten ohne Elternteil wird als _Wurzel_ des Baumes bezeichnet.
- Ein Knoten ohne Kinder wird als _Blatt_ bezeichnet.
- Knoten, die denselben Elternteil haben, werden als _Geschwister_ bezeichnet. Geschwister gehören zur selben Kindknotenliste ihres Elternteils und haben somit eine klar definierte Reihenfolge.
- Wenn wir von Knoten A zu Knoten B gelangen können, indem wir wiederholt den Eltern-Knoten verfolgen, ist A ein _Nachfahre_ von B und B ein _Vorfahre_ von A.
- Knoten in einem Baum werden in _Baumreihenfolge_ aufgelistet, indem zuerst der Knoten selbst aufgelistet wird und dann rekursiv jeder seiner Kindknoten in Reihenfolge (Präorder-, Tiefensuche) aufgelistet wird.

Hier sind einige wichtige Eigenschaften von Bäumen:

- Jeder Knoten ist mit einem eindeutigen Wurzelknoten verbunden.
- Wenn Knoten A der Elternteil von Knoten B ist, dann ist Knoten B ein Kind von Knoten A.
- Zyklen sind nicht erlaubt: Kein Knoten kann ein Vorfahre oder Nachfahre seiner selbst sein.

## Das Node-Interface und seine Unterklassen

Alle Knoten im DOM werden durch Objekte dargestellt, die das [`Node`](/de/docs/Web/API/Node) Interface implementieren. Das `Node`-Interface verkörpert viele der zuvor definierten Konzepte:

- Die [`parentNode`](/de/docs/Web/API/Node/parentNode) Eigenschaft gibt den Elternknoten zurück oder `null`, wenn der Knoten keinen Elternteil hat.
- Die [`childNodes`](/de/docs/Web/API/Node/childNodes) Eigenschaft gibt einen [`NodeList`](/de/docs/Web/API/NodeList) der Kindknoten zurück. Die [`firstChild`](/de/docs/Web/API/Node/firstChild) und [`lastChild`](/de/docs/Web/API/Node/lastChild) Eigenschaften geben das erste und letzte Element dieser Liste zurück, oder `null`, wenn keine Kinder vorhanden sind.
- Die [`getRootNode()`](/de/docs/Web/API/Node/getRootNode) Methode gibt die Wurzel des Baumes zurück, der den Knoten enthält, indem sie wiederholt den Elternknoten verfolgt.
- Die [`hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) Methode gibt `wahr` zurück, wenn es Kindknoten hat, d. h. es ist kein Blatt.
- Die [`previousSibling`](/de/docs/Web/API/Node/previousSibling) und [`nextSibling`](/de/docs/Web/API/Node/nextSibling) Eigenschaften geben die vorherigen und nächsten Geschwisterknoten zurück oder `null`, wenn es kein solches Geschwister gibt.
- Die [`contains()`](/de/docs/Web/API/Node/contains) Methode gibt `wahr` zurück, wenn ein gegebener Knoten ein Nachfahre des Knotens ist.
- Die [`compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition) Methode vergleicht zwei Knoten nach Baumreihenfolge. Der Abschnitt [Vergleichen von Knoten](#vergleichen_von_knoten) bespricht diese Methode im Detail.

Sie arbeiten selten mit einfachen `Node`-Objekten. Stattdessen implementieren alle Objekte im DOM eines der Interfaces, die von `Node` erben und zusätzliche Semantik im Dokument darstellen. Die Knotentypen beschränken, welche Daten sie enthalten und welche Kindertypen gültig sind. Betrachten Sie, wie das folgende HTML-Dokument im DOM dargestellt wird:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

Es erzeugt den folgenden DOM-Baum:

![Der DOM-Baum des vorherigen HTML-Dokuments](/shared-assets/images/diagrams/api/dom/tree-structure.svg)

Die Wurzel dieses DOM-Baumes ist ein [`Document`](/de/docs/Web/API/Document) Knoten, der das gesamte Dokument repräsentiert. Dieser Knoten wird global als die [`document`](/de/docs/Web/API/Window/document) Variable exponiert. Dieser Knoten hat zwei wichtige Kindknoten:

- Einen optionalen [`DocumentType`](/de/docs/Web/API/DocumentType) Knoten, der die {{Glossary("doctype", "doctype")}} Deklaration darstellt. In unserem Fall gibt es einen. Dieser Knoten ist auch über die [`doctype`](/de/docs/Web/API/Document/doctype) Eigenschaft des `Document`-Knotens zugänglich.
- Einen optionalen [`Element`](/de/docs/Web/API/Element) Knoten, der das Wurzelelement darstellt. Für HTML-Dokumente (wie in unserem Fall) ist dies typischerweise das [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement). Für SVG-Dokumente ist dies typischerweise das [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement). Dieser Knoten ist auch über die [`documentElement`](/de/docs/Web/API/Document/documentElement) Eigenschaft des `Document`-Knotens zugänglich.

Der `DocumentType`-Knoten ist immer ein Blattknoten. Der `Element`-Knoten ist dort, wo der Hauptinhalt des Dokuments dargestellt wird. Jedes darunterliegende Element, wie zum Beispiel {{htmlelement("head")}}, {{htmlelement("body")}} und {{htmlelement("p")}}, wird ebenfalls durch einen `Element`-Knoten repräsentiert. Tatsächlich ist jeder eine Unterklasse von `Element`, die spezifisch für diesen Tag-Namen ist, wie im HTML-Spezifikation definiert, wie [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement) und [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement), mit zusätzlichen Eigenschaften und Methoden, die die Semantik dieses Elements darstellen, aber hier konzentrieren wir uns auf die gemeinsamen Verhaltensweisen des DOM. Die `Element`-Knoten können andere `Element`-Knoten als Kinder haben, die verschachtelte Elemente darstellen. Zum Beispiel hat das {{htmlelement("head")}}-Element drei Kinder: zwei {{htmlelement("meta")}}-Elemente und ein {{htmlelement("title")}}-Element. Zusätzlich können Elemente auch [`Text`](/de/docs/Web/API/Text) Knoten und [`CDATASection`](/de/docs/Web/API/CDATASection) Knoten als Kinder haben, die Textinhalte darstellen. Zum Beispiel hat das {{htmlelement("p")}}-Element ein einzelnes Kind, einen `Text`-Knoten, der die Zeichenkette "Dies ist ein Absatz." enthält. `Text`-Knoten und `CDATASection`-Knoten sind immer Blattknoten.

Alle Knoten, die Kinder haben können ([`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) und [`Element`](/de/docs/Web/API/Element)), erlauben zwei Arten von Kindern: [`Comment`](/de/docs/Web/API/Comment) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Knoten. Diese Knoten sind immer Blattknoten.

Jedes Element kann, zusätzlich zu den Kindknoten, auch Attribute haben, die als [`Attr`](/de/docs/Web/API/Attr) Knoten dargestellt werden. `Attr` erweitert das `Node`-Interface, aber sie sind nicht Teil der Hauptbaumstruktur, da sie kein Kind eines Knotens sind und ihr Elternknoten `null` ist. Stattdessen werden sie in einem separaten benannten Knoten-Map gespeichert, die über die [`attributes`](/de/docs/Web/API/Element/attributes) Eigenschaft des `Element`-Knotens zugänglich ist.

Das `Node`-Interface definiert eine [`nodeType`](/de/docs/Web/API/Node/nodeType) Eigenschaft, die den Typ des Knotens angibt. Zusammengefasst haben wir die folgenden Knotentypen eingeführt:

| Knotentyp                            | `nodeType`-Wert                       | Gültige Kinder (außer `Comment` und `ProcessingInstruction`)           |
| ------------------------------------ | -------------------------------------- | ------------------------------------------------------------------------ |
| [`Document`](/de/docs/Web/API/Document)              | `Node.DOCUMENT_NODE` (9)               | [`DocumentType`](/de/docs/Web/API/DocumentType), [`Element`](/de/docs/Web/API/Element)                      |
| [`DocumentType`](/de/docs/Web/API/DocumentType)          | `Node.DOCUMENT_TYPE_NODE` (10)         | Keine                                                                     |
| [`Element`](/de/docs/Web/API/Element)               | `Node.ELEMENT_NODE` (1)                | [`Element`](/de/docs/Web/API/Element), [`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection) |
| [`Text`](/de/docs/Web/API/Text)                  | `Node.TEXT_NODE` (3)                   | Keine                                                                     |
| [`CDATASection`](/de/docs/Web/API/CDATASection)          | `Node.CDATA_SECTION_NODE` (4)          | Keine                                                                     |
| [`Comment`](/de/docs/Web/API/Comment)               | `Node.COMMENT_NODE` (8)                | Keine                                                                     |
| [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) | `Node.PROCESSING_INSTRUCTION_NODE` (7) | Keine                                                                     |
| [`Attr`](/de/docs/Web/API/Attr)                  | `Node.ATTRIBUTE_NODE` (2)              | Keine                                                                     |

> [!NOTE]
> Sie werden bemerken, dass wir hier einige Knotentypen übersprungen haben. Die `Node.ENTITY_REFERENCE_NODE` (5), `Node.ENTITY_NODE` (6) und `Node.NOTATION_NODE` (12) Werte werden nicht mehr verwendet, während der `Node.DOCUMENT_FRAGMENT_NODE` (11) Wert im [Erstellen und Aktualisieren des DOM-Baums](/de/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree) eingeführt wird.

## Daten jedes Knotens

Jeder Knotentyp hat seine eigene Art, die Daten darzustellen, die er hält. Die `Node`-Schnittstelle selbst definiert drei Eigenschaften, die mit Daten zu tun haben, die in der folgenden Tabelle zusammengefasst sind:

| Knotentyp                            | [`nodeName`](/de/docs/Web/API/Node/nodeName)             | [`nodeValue`](/de/docs/Web/API/Node/nodeValue) | [`textContent`](/de/docs/Web/API/Node/textContent)               |
| ------------------------------------ | ---------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| [`Document`](/de/docs/Web/API/Document)              | `"#document"`                                        | `null`                                     | `null`                                                       |
| [`DocumentType`](/de/docs/Web/API/DocumentType)          | Sein [`name`](#documenttype) (z.B., `"html"`)         | `null`                                     | `null`                                                       |
| [`Element`](/de/docs/Web/API/Element)               | Sein [`tagName`](#element) (z.B., `"HTML"`, `"BODY"`) | `null`                                     | Verkettung aller seiner Textknoten-Nachfahren in Baumreihenfolge |
| [`Text`](/de/docs/Web/API/Text)                  | `"#text"`                                            | Sein [`data`](#characterdata)               | Sein [`data`](#characterdata)                                 |
| [`CDATASection`](/de/docs/Web/API/CDATASection)          | `"#cdata-section"`                                   | Sein [`data`](#characterdata)               | Sein [`data`](#characterdata)                                 |
| [`Comment`](/de/docs/Web/API/Comment)               | `"#comment"`                                         | Sein [`data`](#characterdata)               | Sein [`data`](#characterdata)                                 |
| [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) | Sein [`target`](#characterdata)                       | Sein [`data`](#characterdata)               | Sein [`data`](#characterdata)                                 |
| [`Attr`](/de/docs/Web/API/Attr)                  | Sein [`name`](#attr)                                  | Sein [`value`](#attr)                       | Sein [`value`](#attr)                                         |

### Dokument

Der `Document`-Knoten enthält selbst keine Daten, sodass seine `nodeValue` und `textContent` immer `null` sind. Sein `nodeName` ist immer `"#document"`.

Das `Document` definiert einige Metadaten über das Dokument, die aus der Umgebung stammen (zum Beispiel die HTTP-Antwort, die das Dokument ausgeliefert hat):

- Die [`URL`](/de/docs/Web/API/Document/URL) und [`documentURI`](/de/docs/Web/API/Document/documentURI) Eigenschaften geben die URL des Dokuments zurück.
- Die [`characterSet`](/de/docs/Web/API/Document/characterSet) Eigenschaft gibt die im Dokument verwendete Zeichenkodierung zurück, wie zum Beispiel `"UTF-8"`.
- Die [`compatMode`](/de/docs/Web/API/Document/compatMode) Eigenschaft gibt den Darstellungsmodus des Dokuments zurück, entweder `"CSS1Compat"` (Standardmodus) oder `"BackCompat"` (Quirks-Modus).
- Die [`contentType`](/de/docs/Web/API/Document/contentType) Eigenschaft gibt den [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) des Dokuments zurück, wie zum Beispiel `"text/html"` für HTML-Dokumente.

### DocumentType

Ein `DocumentType` im Dokument sieht so aus:

```xml
<!doctype name PUBLIC "publicId" "systemId">
```

Es gibt drei Teile, die Sie angeben können, die den drei Eigenschaften des `DocumentType`-Knotens entsprechen: [`name`](/de/docs/Web/API/DocumentType/name), [`publicId`](/de/docs/Web/API/DocumentType/publicId) und [`systemId`](/de/docs/Web/API/DocumentType/systemId). Für HTML-Dokumente ist der Doctype immer `<!doctype html>`, daher ist der `name` `"html"` und sowohl `publicId` als auch `systemId` sind leere Zeichenfolgen.

### Element

Ein `Element` im Dokument sieht so aus:

```html
<p class="note" id="intro">This is a paragraph.</p>
```

Zusätzlich zu den Inhalten gibt es zwei Teile, die Sie angeben können: den Tag-Namen und die Attribute. Der Tag-Name entspricht der [`tagName`](/de/docs/Web/API/Element/tagName) Eigenschaft des `Element`-Knotens, der in diesem Fall `"P"` ist (beachten Sie, dass er bei HTML-Elementen immer großgeschrieben ist). Die Attribute entsprechen den `Attr`-Knoten, die in der [`attributes`](/de/docs/Web/API/Element/attributes) Eigenschaft des `Element`-Knotens gespeichert sind. Wir werden Attribute im Abschnitt [Das Element und seine Attribute](#das_element_und_seine_attribute) ausführlicher besprechen.

Der `Element`-Knoten enthält selbst keine Daten, daher ist seine `nodeValue` immer `null`. Sein `textContent` ist die Verkettung aller seiner Textknoten-Nachfahren in Baumreihenfolge, die in diesem Fall `"Dies ist ein Paragraph."` ist. Für das folgende Element:

```html
<div>Hello, <span>world</span>!</div>
```

ist das `textContent` `"Hello, world!"`, wobei der Textknoten `"Hello, "`, der Textknoten `"world"` im {{htmlelement("span")}}-Element und der Textknoten `"!"` miteinander verknüpft werden.

### CharacterData

[`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection), [`Comment`](/de/docs/Web/API/Comment), und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) erben alle von der [`CharacterData`](/de/docs/Web/API/CharacterData) Schnittstelle, die eine Unterklasse von `Node` ist. Die `CharacterData` Schnittstelle definiert eine einzelne Eigenschaft, [`data`](/de/docs/Web/API/CharacterData/data), die den Textinhalt des Knotens enthält. Die `data` Eigenschaft wird auch verwendet, um die `nodeValue` und `textContent` Eigenschaften dieser Knoten zu implementieren.

Für `Text` und `CDATASection` hält die `data` Eigenschaft den Textinhalt des Knotens. Im folgenden Dokument (beachten Sie, dass wir ein SVG-Dokument verwenden, da HTML keine CDATA-Abschnitte erlaubt):

```svg
<text>Some text</text>
<style><![CDATA[h1 { color: red; }]]></style>
```

hat der Textknoten im {{svgelement("text")}}-Element `"Some text"` als `data`, und der CDATA-Abschnitt im {{svgelement("style")}}-Element hat `"h1 { color: red; }"` als `data`.

Für `Comment` hält die `data` Eigenschaft den Inhalt des Kommentars, der nach dem `<!--` beginnt und vor dem `-->` endet. Zum Beispiel im folgenden Dokument:

```html
<!-- This is a comment -->
```

hat der Kommentar-Knoten `" Dies ist ein Kommentar "` als `data`.

Für `ProcessingInstruction` hält die `data` Eigenschaft den Inhalt der Verarbeitungseinweisung, die nach dem Ziel beginnt und vor dem `?>` endet. Zum Beispiel im folgenden Dokument:

```xml
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

hat der Verarbeitungseinweisung-Knoten `'type="text/xsl" href="style.xsl"'` als `data` und `"xml-stylesheet"` als sein [`target`](/de/docs/Web/API/ProcessingInstruction/target).

Zusätzlich definiert die `CharacterData` Schnittstelle die [`length`](/de/docs/Web/API/CharacterData/length) Eigenschaft, die die Länge der `data` Zeichenfolge zurückgibt, und die [`substringData()`](/de/docs/Web/API/CharacterData/substringData) Methode, die einen Unterstring der `data` zurückgibt.

### Attr

Für das folgende Element:

```html
<p class="note" id="intro">This is a paragraph.</p>
```

hat das `<p>` Element zwei Attribute, die durch zwei `Attr`-Knoten dargestellt werden. Jedes Attribut besteht aus einem Namen und einem Wert, die den [`name`](/de/docs/Web/API/Attr/name) und [`value`](/de/docs/Web/API/Attr/value) Eigenschaften entsprechen. Das erste Attribut hat `"class"` als `name` und `"note"` als `value`, während das zweite Attribut `"id"` als `name` und `"intro"` als `value` hat.

## Das Element und seine Attribute

Wie bereits erwähnt, werden die Attribute eines `Element`-Knotens durch `Attr`-Knoten dargestellt, die in einem separaten benannten Knoten-Map gespeichert werden, das über die [`attributes`](/de/docs/Web/API/Element/attributes) Eigenschaft des `Element`-Knotens zugänglich ist. Diese [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Schnittstelle definiert drei wichtige Eigenschaften:

- [`length`](/de/docs/Web/API/NamedNodeMap/length), die die Anzahl der Attribute zurückgibt.
- [`item()`](/de/docs/Web/API/NamedNodeMap/item) Methode, die das `Attr` an einem gegebenen Index zurückgibt.
- [`getNamedItem()`](/de/docs/Web/API/NamedNodeMap/getNamedItem) Methode, die das `Attr` mit einem bestimmten Namen zurückgibt.

Das `Element`-Interface definiert außerdem mehrere Methoden, um direkt mit Attributen zu arbeiten, ohne auf den benannten Knoten-Map zugreifen zu müssen:

- [`element.getAttribute(name)`](/de/docs/Web/API/Element/getAttribute) ist äquivalent zu `element.attributes.getNamedItem(name).value`, wenn das Attribut existiert.
- [`element.getAttributeNode(name)`](/de/docs/Web/API/Element/getAttributeNode) ist äquivalent zu `element.attributes.getNamedItem(name)`.
- [`element.hasAttribute(name)`](/de/docs/Web/API/Element/hasAttribute) ist äquivalent zu `element.attributes.getNamedItem(name) !== null`.
- [`element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames) gibt ein Array aller Attributnamen zurück.
- [`element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes) ist äquivalent zu `element.attributes.length > 0`.

Sie können auch über die [`ownerElement`](/de/docs/Web/API/Attr/ownerElement) Eigenschaft des `Attr`-Knotens auf das Eigentümer-Element eines Attributs zugreifen.

Es gibt zwei spezielle Attribute, `id` und `class`, die ihre eigenen Eigenschaften im `Element`-Interface haben: [`id`](/de/docs/Web/API/Element/id) und [`className`](/de/docs/Web/API/Element/className), die den Wert des entsprechenden Attributs [reflektieren](/de/docs/Web/API/Document_Object_Model/Reflected_attributes). Zusätzlich gibt die [`classList`](/de/docs/Web/API/Element/classList) Eigenschaft eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die Liste der Klassen im `class`-Attribut darstellt.

## Arbeiten mit dem Elementbaum

Da `Element`-Knoten das Rückgrat der Dokumentstruktur bilden, können Sie speziell die Elementknoten durchlaufen und andere Knoten (wie `Text` und `Comment`) überspringen.

- Für alle Knoten gibt die [`parentElement`](/de/docs/Web/API/Node/parentElement) Eigenschaft den Elternknoten zurück, wenn es sich um ein `Element` handelt, oder `null`, wenn der Elternteil kein `Element` ist (zum Beispiel, wenn der Elternteil ein `Document` ist). Dies steht im Gegensatz zu [`parentNode`](/de/docs/Web/API/Node/parentNode), das den Elternknoten unabhängig von seinem Typ zurückgibt.
- Für `Document`, `DocumentFragment` und `Element` gibt die [`children`](/de/docs/Web/API/Element/children) Eigenschaft eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von nur den Kind-`Element`-Knoten zurück. Dies steht im Gegensatz zu [`childNodes`](/de/docs/Web/API/Node/childNodes), das alle Kindknoten zurückgibt. Die [`firstElementChild`](/de/docs/Web/API/Element/firstElementChild) und [`lastElementChild`](/de/docs/Web/API/Element/lastElementChild) Eigenschaften geben das erste und letzte Element dieser Sammlung zurück oder `null`, wenn keine Kind-Elemente vorhanden sind. Die [`childElementCount`](/de/docs/Web/API/Element/childElementCount) Eigenschaft gibt die Anzahl der Kind-Elemente zurück.
- Für `Element` und `CharacterData` geben die [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) und [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) Eigenschaften das vorherige und nächste Geschwisterelement zurück, das ein `Element` ist, bzw. `null`, wenn kein solches Geschwisterelement existiert. Dies steht im Gegensatz zu [`previousSibling`](/de/docs/Web/API/Node/previousSibling) und [`nextSibling`](/de/docs/Web/API/Node/nextSibling), die jeden Typ von Geschwisterknoten zurückgeben können.

## Vergleichen von Knoten

Es gibt drei wichtige Methoden, die Knoten vergleichen: [`isEqualNode()`](/de/docs/Web/API/Node/isEqualNode), [`isSameNode()`](/de/docs/Web/API/Node/isSameNode), [`compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition).

Die `isSameNode()` Methode ist veraltet. Jetzt verhält sie sich wie der [strikte Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`), indem sie `wahr` zurückgibt, wenn und nur wenn die beiden Knoten dasselbe Objekt sind.

Die `isEqualNode()` Methode vergleicht zwei Knoten strukturell. Zwei Knoten werden als gleich angesehen, wenn sie denselben Typ, dieselben Daten haben und ihre Kindknoten an jedem Index ebenfalls gleich sind. Im Abschnitt [Daten jedes Knotens](#daten_jedes_knotens) haben wir bereits die Daten definiert, die für jeden Knotentyp relevant sind:

- Für `Document` gibt es keine Daten, daher müssen nur die Kindknoten verglichen werden.
- Für `DocumentType` müssen die Eigenschaften `name`, `publicId` und `systemId` verglichen werden.
- Für `Element` müssen `tagName` (genauer gesagt, `namespaceURI`, `prefix` und `localName`; wir werden diese im [XML-Namensräume](/de/docs/Web/API/Document_Object_Model/XML_namespaces) Leitfaden einführen) und die Attribute verglichen werden.
- Für `Attr` müssen die Eigenschaften `name` (genauer gesagt, `namespaceURI`, `prefix` und `localName`; wir werden diese im [XML-Namensräume](/de/docs/Web/API/Document_Object_Model/XML_namespaces) Leitfaden einführen) und `value` verglichen werden.
- Für alle `CharacterData` Knoten (`Text`, `CDATASection`, `Comment` und `ProcessingInstruction`) muss die `data` Eigenschaft verglichen werden. Für `ProcessingInstruction` muss auch die `target` Eigenschaft verglichen werden.

Die `a.compareDocumentPosition(b)` Methode vergleicht zwei Knoten nach Baumreihenfolge. Sie gibt eine Bitmaske zurück, die ihre relativen Positionen anzeigt. Die möglichen Fälle sind:

- Gibt `0` zurück, wenn `a` und `b` derselbe Knoten sind.
- Wenn die beiden Knoten beide Attribute desselben Elementknotens sind, gibt es `Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (34) zurück, wenn `a` `b` in der Attributliste vorausgeht, oder `Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` (36), wenn `a` `b` folgt. Wenn einer der beiden Knoten ein Attribut ist, wird das Eigentümerelement für weitere Vergleiche verwendet.
- Wenn die beiden Knoten nicht denselben Wurzelknoten haben, gibt es entweder `Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_PRECEDING` (35) oder `Node.DOCUMENT_POSITION_DISCONNECTED | Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC | Node.DOCUMENT_POSITION_FOLLOWING` (37) zurück. Welcher zurückgegeben wird, ist implementierungsspezifisch.
- Wenn `a` ein Vorfahre von `b` ist (einschließlich, wenn `b` ein Attribut von `a` ist), gibt es `Node.DOCUMENT_POSITION_CONTAINS | Node.DOCUMENT_POSITION_PRECEDING` (10) zurück.
- Wenn `a` ein Nachfahre von `b` ist (einschließlich, wenn `a` ein Attribut von `b` ist), gibt es `Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING` (20) zurück.
- Wenn `a` `b` in Baumreihenfolge vorausgeht, gibt es `Node.DOCUMENT_POSITION_PRECEDING` (2) zurück.
- Wenn `a` `b` in Baumreihenfolge folgt, gibt es `Node.DOCUMENT_POSITION_FOLLOWING` (4) zurück.

Bitmaskenwerte werden verwendet, daher können Sie eine bitweise UND-Operation verwenden, um spezifische Beziehungen zu überprüfen. Zum Beispiel, um zu überprüfen, ob `a` `b` vorausgeht, können Sie:

```js
if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING) {
  // a precedes b
}
```

Dies berücksichtigt die Fälle, in denen `a` und `b` Attribute desselben Elements sind, `a` ein Vorfahre von `b` ist und `a` `b` in Baumreihenfolge vorausgeht.

## Zusammenfassung

Hier sind alle Funktionen, die wir bisher eingeführt haben. Es sind viele, aber sie sind alle in verschiedenen Szenarien nützlich.

- Alle Knoten im DOM implementieren das [`Node`](/de/docs/Web/API/Node) Interface.
- Um im DOM-Baum zu navigieren: [`parentNode`](/de/docs/Web/API/Node/parentNode), [`childNodes`](/de/docs/Web/API/Node/childNodes), [`firstChild`](/de/docs/Web/API/Node/firstChild)/[`lastChild`](/de/docs/Web/API/Node/lastChild), [`hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes), [`getRootNode()`](/de/docs/Web/API/Node/getRootNode), [`previousSibling`](/de/docs/Web/API/Node/previousSibling)/[`nextSibling`](/de/docs/Web/API/Node/nextSibling).
- Um im Elementbaum zu navigieren: [`parentElement`](/de/docs/Web/API/Node/parentElement), [`children`](/de/docs/Web/API/Element/children), [`firstElementChild`](/de/docs/Web/API/Element/firstElementChild)/[`lastElementChild`](/de/docs/Web/API/Element/lastElementChild), [`childElementCount`](/de/docs/Web/API/Element/childElementCount), [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling)/[`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling).
- Die [`nodeType`](/de/docs/Web/API/Node/nodeType) Eigenschaft gibt den Typ des Knotens an. Die [`nodeName`](/de/docs/Web/API/Node/nodeName), [`nodeValue`](/de/docs/Web/API/Node/nodeValue) und [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaften liefern die von dem Knoten gehaltenen Daten.
- Der [`Document`](/de/docs/Web/API/Document) Knoten und seine zwei wichtigen Kinder: [`doctype`](/de/docs/Web/API/Document/doctype) und [`documentElement`](/de/docs/Web/API/Document/documentElement).
- Der [`DocumentType`](/de/docs/Web/API/DocumentType) Knoten und seine drei Eigenschaften: [`name`](/de/docs/Web/API/DocumentType/name), [`publicId`](/de/docs/Web/API/DocumentType/publicId) und [`systemId`](/de/docs/Web/API/DocumentType/systemId).
- Der [`Element`](/de/docs/Web/API/Element) Knoten und seine Eigenschaften: [`tagName`](/de/docs/Web/API/Element/tagName), [`attributes`](/de/docs/Web/API/Element/attributes).
- Der [`Attr`](/de/docs/Web/API/Attr) Knoten und seine Eigenschaften: [`name`](/de/docs/Web/API/Attr/name) und [`value`](/de/docs/Web/API/Attr/value).
- Das [`CharacterData`](/de/docs/Web/API/CharacterData) Interface und seine Eigenschaft: [`data`](/de/docs/Web/API/CharacterData/data).
- Die vier [`CharacterData`](/de/docs/Web/API/CharacterData) Unterklassen: [`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection), [`Comment`](/de/docs/Web/API/Comment) und [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction). `ProcessingInstruction` hat auch die [`target`](/de/docs/Web/API/ProcessingInstruction/target) Eigenschaft.
- Die verschiedenen Möglichkeiten, mit Attributen zu arbeiten, einschließlich der [`id`](/de/docs/Web/API/Element/id), [`className`](/de/docs/Web/API/Element/className) und [`classList`](/de/docs/Web/API/Element/classList) Eigenschaften.
- Die drei Methoden zum Vergleichen von Knoten: [`isEqualNode()`](/de/docs/Web/API/Node/isEqualNode), [`isSameNode()`](/de/docs/Web/API/Node/isSameNode) und [`compareDocumentPosition()`](/de/docs/Web/API/Node/compareDocumentPosition).
