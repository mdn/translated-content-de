---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XML/XPath) in JavaScript. Die Hauptschnittstelle zur Verwendung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate)-Funktion des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode wertet [XPath](/de/docs/Web/XML/XPath)-Ausdrücke in einem auf {{Glossary("XML", "XML")}} basierenden Dokument (einschließlich HTML-Dokumenten) aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das ein einzelner Knoten oder eine Menge von Knoten sein kann. Die vorhandene Dokumentation zu dieser Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist aber derzeit eher spärlich für unsere Bedürfnisse; eine umfassendere Untersuchung wird unten gegeben.

```js
const xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result,
);
```

### Parameter

Die [`evaluate()`](/de/docs/Web/API/Document/evaluate)-Methode nimmt insgesamt fünf Parameter entgegen:

- `xpathExpression`: Ein String, der den zu bewertenden XPath-Ausdruck enthält.
- `contextNode`: Ein Knoten im Dokument, gegen den der `xpathExpression` ausgewertet werden soll, einschließlich aller seiner Kindknoten. Der [document](/de/docs/Web/API/Document)-Knoten wird am häufigsten verwendet.
- `namespaceResolver`: Eine Funktion, die alle in `xpathExpression` enthaltenen Namespace-Präfixe übergeben bekommt und einen String zurückgibt, der den Namespace-URI wiedergibt, der mit diesem Präfix verknüpft ist. Dies ermöglicht die Umwandlung zwischen den im XPath-Ausdruck verwendeten Präfixen und den möglicherweise unterschiedlichen Präfixen im Dokument. Die Funktion kann entweder sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bereitstellt, die das Namespace-Präfix auflöst.
  - `null`, das für HTML-Dokumente oder wenn keine Namespace-Präfixe verwendet werden, genutzt werden kann. Beachten Sie, dass dies zu einer `DOMException` mit dem Code `NAMESPACE_ERR` führt, wenn der `xpathExpression` ein Namespace-Präfix enthält.
  - Eine benutzerdefinierte Funktion. Details finden Sie im Abschnitt [Verwendung eines benutzerdefinierten Namespace-Resolvers](#implementierung_eines_benutzerdefinierten_namespace-resolvers) im Anhang.

- `resultType`: Eine [Konstante](#xpathresult_definierte_konstanten), die den gewünschten Ergebnistyp angibt, der als Ergebnis der Bewertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als den natürlichsten Typ zurückgibt. Eine vollständige Liste der [verfügbaren Konstanten](#xpathresult_definierte_konstanten) finden Sie im Anhang. Diese werden unten im Abschnitt "[Festlegen des Rückgabetyps](#festlegen_des_rückgabetyps)" erklärt.
- `result`: Wenn ein vorhandenes `XPathResult`-Objekt angegeben wird, wird es zur Rückgabe der Ergebnisse wiederverwendet. Wenn `null` angegeben wird, wird ein neues `XPathResult`-Objekt erstellt.

### Rückgabewert

Gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt des im `resultType`-Parameter [spezifizierten](#festlegen_des_rückgabetyps) Typs zurück.

### Implementierung eines Standard-Namespace-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namespace-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate` die Variable `nsResolver` als `namespaceResolver`-Parameter.

Hinweis: XPath definiert QNames ohne Präfix, um nur Elemente im null Namespace zu matchen. Es gibt keine Möglichkeit in XPath, den Standard-Namespace wie bei einem regulären Elementverweis aufzunehmen (z. B. `p[@id='_my-id']` für `xmlns='http://www.w3.org/1999/xhtml'`). Um Standard-Elemente in einem nicht null Namespace zu matchen, müssen Sie entweder ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` referenzieren ([dieser Ansatz](#verwendung_von_xpath-funktionen,_um_elemente_mit_einem_standard-namespace_zu_referenzieren) funktioniert gut für dynamische XPath's, bei denen die Namespaces möglicherweise nicht bekannt sind) oder Präfix-Name-Tests verwenden und einen Namespace-Resolver erstellen, der das Präfix dem Namespace zuordnet. Lesen Sie mehr über [wie man einen benutzerdefinierten Namespace-Resolver erstellt](#implementierung_eines_benutzerdefinierten_namespace-resolvers), wenn Sie diesen Weg gehen möchten.

## Beschreibung

Passt einen beliebigen DOM-Knoten an, um Namespaces aufzulösen, sodass ein [XPath](/de/docs/Web/XML/XPath)-Ausdruck einfach relativ zum Kontext des Knotens, wo er im Dokument erschien, ausgewertet werden kann. Dieser Adapter funktioniert wie die DOM Level 3-Methode `lookupNamespaceURI` bei Knoten zur Auflösung der `namespaceURI` von einem gegebenen Präfix unter Verwendung der aktuellen Informationen, die in der Hierarchie des Knotens zum Zeitpunkt des Aufrufs von `lookupNamespaceURI` verfügbar sind. Er löst auch das implizite `xml` Präfix korrekt auf.

### Festlegen des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([node-set Typen](#node-set_typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnistyp in `resultType` entweder als

- `NUMBER_TYPE` - ein double
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein boolescher Wert

spezifiziert ist, erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Das folgende Beispiel verwendet den XPath-Ausdruck [`count(//p)`](/de/docs/Web/XML/XPath/Reference/Functions/count), um die Anzahl der `<p>`-Elemente in einem HTML-Dokument zu erhalten:

```js
const paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  `This document contains ${paragraphCount.numberValue} paragraph elements.`,
);
```

Obwohl JavaScript es erlaubt, die Zahl in einen String für die Anzeige umzuwandeln, konvertiert die XPath-Schnittstelle das numerische Ergebnis nicht automatisch, wenn die `stringValue`-Eigenschaft angefordert wird, daher funktioniert der folgende Code **nicht**:

```js
const paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  `This document contains ${paragraphCount.stringValue} paragraph elements.`,
);
```

Stattdessen wird eine Ausnahme mit dem Code `NS_DOM_TYPE_ERROR` zurückgegeben.

#### Node-Set Typen

Das `XPathResult`-Objekt ermöglicht es, Node-Sets in drei prinzipiellen verschiedenen Typen zurückzugeben:

- [Iterators](#iterators)
- [Snapshots](#snapshots)
- [First Nodes](#first_node)

##### Iterators

Wenn der im `resultType`-Parameter angegebene Ergebnistyp entweder

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt als ein Node-Set von übereinstimmenden Knoten fungieren, das als Iterator agiert und es uns ermöglicht, auf die einzelnen enthaltenen Knoten mithilfe der `iterateNext()`-Methode des `XPathResult`-Objekts zuzugreifen.

Sobald wir alle einzelnen übereinstimmenden Knoten durchlaufen haben, kehrt `iterateNext()` `null` zurück.

Beachten Sie jedoch, dass, wenn das Dokument zwischen den Iterationen mutiert wird (der Dokumentenbaum geändert wird), dies die Iteration ungültig macht und die `invalidIteratorState`-Eigenschaft von `XPathResult` auf `true` gesetzt wird, und eine `NS_ERROR_DOM_INVALID_STATE_ERR` Ausnahme ausgelöst wird.

```js
const iterator = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  null,
);

try {
  let thisNode = iterator.iterateNext();

  while (thisNode) {
    console.log(thisNode.textContent);
    thisNode = iterator.iterateNext();
  }
} catch (e) {
  console.error(`Error: Document tree modified during iteration ${e}`);
}
```

##### Snapshots

Wenn der im `resultType`-Parameter angegebene Ergebnistyp entweder

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt als ein statisches Node-Set von übereinstimmenden Knoten fungieren, das uns ermöglicht, auf jeden Knoten mithilfe der `snapshotItem(itemNumber)`-Methode des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann über die `snapshotLength`-Eigenschaft abgerufen werden.

Snapshots ändern sich nicht mit Dokumentänderungen, im Gegensatz zu den Iterators wird das Snapshot nicht ungültig, könnte aber möglicherweise nicht mit dem aktuellen Dokument übereinstimmen, zum Beispiel könnten die Knoten verschoben worden sein, es könnte Knoten enthalten, die nicht mehr existieren, oder neue Knoten könnten hinzugekommen sein.

```js
const nodesSnapshot = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);

for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
  console.log(nodesSnapshot.snapshotItem(i).textContent);
}
```

##### First Node

Wenn der im `resultType`-Parameter angegebene Ergebnistyp entweder

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt nur der erste gefundene Knoten sein, der mit dem XPath-Ausdruck übereinstimmte. Dies kann über die `singleNodeValue`-Eigenschaft des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn das Node-Set leer ist.

Beachten Sie, dass für den ungeordneten Subtyp der einzelne zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentenreihenfolge ist, aber für den geordneten Subtyp Sie garantiert den ersten übereinstimmenden Knoten in der Dokumentenreihenfolge erhalten.

```js
const firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

console.log(
  `The first phone number found is ${firstPhoneNumber.singleNodeValue.textContent}`,
);
```

#### Die ANY_TYPE-Konstante

Wenn der Ergebnistyp im `resultType`-Parameter als `ANY_TYPE` angegeben ist, wird das zurückgegebene `XPathResult`-Objekt von welchem Typ auch immer sein, als welcher das Ergebnis der Auswertung des Ausdrucks natürlich resultiert.

Es könnte einer der einfachen Typen sein (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`), **aber**, wenn der zurückgegebene Ergebnistyp ein Node-Set ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach der Bewertung zu bestimmen, verwenden wir die `resultType`-Eigenschaft des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_definierte_konstanten)-Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code ist dazu gedacht, in jedem JavaScript-Fragment innerhalb oder verlinkt zu dem HTML-Dokument platziert zu werden, gegen das der XPath-Ausdruck bewertet werden soll.

Um alle `<h2>`-Überschriften-Elemente in einem HTML-Dokument mithilfe von XPath zu extrahieren, ist der `xpathExpression` `"//h2"`. Wo `//` der Rekursive Abstieg Operator ist, der Elemente mit dem nodeName `h2` überall im Dokumentbaum matcht. Der vollständige Code hierfür ist: link to introductory xpath doc

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Beachten Sie, dass, da HTML keine Namespaces hat, wir `null` für den `namespaceResolver`-Parameter übergeben haben.

Da wir den gesamten Dokumentbereich nach den Überschriften durchsuchen möchten, haben wir das [document](/de/docs/Web/API/Document)-Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Falls wir wissen möchten, welcher Ergebnistyp zurückgegeben wird, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird es zu `4`, einem `UNORDERED_NODE_ITERATOR_TYPE`, ausgewertet. Dies ist der Standardrückgabetyp, wenn das Ergebnis des XPath-Ausdrucks ein Knoten-Set ist. Es bietet Zugriff auf einen einzelnen Knoten zu einer Zeit und kann Knoten möglicherweise nicht in einer bestimmten Reihenfolge zurückgeben. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die `iterateNext()`-Methode des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle Standard-DOM-Schnittstellen auf diesem Knoten. Nach dem Durchlaufen aller `h2`-Elemente, die von unserem Ausdruck zurückgegeben werden, gibt jeder weitere Aufruf von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines benutzerdefinierten Namespace-Resolvers

Dies ist ein Beispiel zur Veranschaulichung. Diese Funktion muss Namespace-Präfixe aus dem `xpathExpression` übernehmen und die URI zurückgeben, die diesem Präfix entspricht. Zum Beispiel wird der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

alle [MathML](/de/docs/Web/MathML)-Ausdrücke auswählen, die die Kinder von (X)HTML-Tabelldatenzellen-Elementen sind.

Um das Präfix `mathml:` mit dem Namespace-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit der URI `http://www.w3.org/1999/xhtml` zu verknüpfen, stellen wir eine Funktion bereit:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Unser Aufruf von `document.evaluate` würde dann wie folgt aussehen:

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### Implementierung eines Standard-Namespaces für XML-Dokumente

Wie zuvor im Abschnitt [Implementierung eines Standard-Namespace-Resolvers](#implementierung_eines_standard-namespace-resolvers) erwähnt, ist der Standard-Resolver nicht in der Lage, den Standard-Namespace für XML-Dokumente zu bearbeiten. Zum Beispiel mit diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

wird `doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` eine leere Menge zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Auch ein `null`-Resolver funktioniert nicht besser.

Ein möglicher Workaround besteht darin, einen benutzerdefinierten Resolver zu erstellen, der den korrekten Standard-Namespace zurückgibt (in diesem Fall den Atom-Namespace). Beachten Sie, dass Sie weiterhin ein Namespace-Präfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolver-Funktion es in Ihren benötigten Namespace ändern kann. Z.B.:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich ist, wenn das Dokument mehrere Namespaces verwendet.

Ein Ansatz, der möglicherweise besser funktioniert (und es erlaubt, dass Namespaces im Voraus nicht bekannt sind), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen, um Elemente mit einem Standard-Namespace zu referenzieren

Ein weiterer Ansatz, um Standard-Elemente in einem nicht null Namespace zu matchen (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namespaces möglicherweise nicht bekannt sind), beinhaltet die Referenzierung eines bestimmten Elements unter Verwendung einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']`. Dies umgeht das Problem, dass eine XPath-Abfrage nicht in der Lage ist, den Standard-Namespace auf einem regulär beschrifteten Element zu erkennen.

### Abrufen speziell namespaced Elemente und Attribute unabhängig vom Präfix

Wenn man Flexibilität in Namespaces bieten möchte (wie sie beabsichtigt sind), indem man nicht notwendigerweise ein bestimmtes Präfix verwenden muss, um ein namespaced Element oder Attribut zu finden, muss man spezielle Techniken anwenden.

Während man den Ansatz im obigen Abschnitt anpassen kann, um namespaced Elemente unabhängig vom gewählten Präfix zu testen (unter Verwendung von [`local-name()`](/de/docs/Web/XML/XPath/Reference/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XML/XPath/Reference/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XML/XPath/Reference/Functions/name)), tritt eine herausfordernde Situation jedoch auf, wenn man ein Element mit einem bestimmten namespaced Attribut in einem Prädikat erfassen möchte (gegeben das Fehlen von implementationsunabhängigen Variablen in XPath 1.0).

Zum Beispiel könnte man (fälschlicherweise) versuchen, ein Element mit einem namespaced Attribut wie folgt zu erfassen: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente erfassen, wenn eines seiner Attribute existierte, das einen lokalen Namen `href` hatte, aber es war ein anderes Attribut, das den anvisierten (XLink) Namespace hatte (anstelle von [`@href`](/de/docs/Web/XML/XPath/Reference/Axes#attribute)).

Um Elemente mit dem XLink `@href` Attribut genau zu erfassen (ohne auch auf vordefinierte Präfixe in einem Namespace-Resolver beschränkt zu sein), könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### XPathResult Definierte Konstanten

| Result Type Defined Constant | Value | Description                                                                                                                                                                                                                    |
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ANY_TYPE                     | 0     | Ein Ergebnis-Set, das den natürlichen Typ enthält, der aus der Evaluierung des Ausdrucks resultiert. Beachten Sie, dass, wenn das Ergebnis ein Node-Set ist, immer der UNORDERED_NODE_ITERATOR_TYPE der resultierende Typ ist. |
| NUMBER_TYPE                  | 1     | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich für Beispiel in einem XPath-Ausdruck, der die `count()`-Funktion verwendet.                                                                                    |
| STRING_TYPE                  | 2     | Ein Ergebnis, das einen einzelnen String enthält.                                                                                                                                                                              |
| BOOLEAN_TYPE                 | 3     | Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist nützlich für Beispiel in einem XPath-Ausdruck, der die `not()`-Funktion verwendet.                                                                         |
| UNORDERED_NODE_ITERATOR_TYPE | 4     | Ein Ergebnis-Node-Set, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht in der gleichen Reihenfolge wie sie im Dokument erscheinen.                                          |
| ORDERED_NODE_ITERATOR_TYPE   | 5     | Ein Ergebnis-Node-Set, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten im Ergebnis-Set sind in der gleichen Reihenfolge wie sie im Dokument erscheinen.                                               |
| UNORDERED_NODE_SNAPSHOT_TYPE | 6     | Ein statisches Ergebnis-Node-Set, das Momentaufnahmen aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht in der gleichen Reihenfolge wie sie im Dokument erscheinen.              |
| ORDERED_NODE_SNAPSHOT_TYPE   | 7     | Ein statisches Ergebnis-Node-Set, das Momentaufnahmen aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten im Ergebnis-Set sind in der gleichen Reihenfolge wie sie im Dokument erscheinen.                   |
| ANY_UNORDERED_NODE_TYPE      | 8     | Ein Ergebnis-Node-Set, das irgendeinen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der Knoten ist möglicherweise nicht der erste Knoten im Dokument, der mit dem Ausdruck übereinstimmt.                     |
| FIRST_ORDERED_NODE_TYPE      | 9     | Ein Ergebnis-Node-Set, das den ersten Knoten im Dokument enthält, der mit dem Ausdruck übereinstimmt.                                                                                                                          |

## Siehe auch

- [XPath](/de/docs/Web/XML/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Originaldokumentinformationen

- Basierend auf einem Originaldokument von James Graham.
- Andere Mitwirkende: James Thompson.
