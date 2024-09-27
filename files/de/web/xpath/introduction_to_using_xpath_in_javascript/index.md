---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Dieses Dokument beschreibt das Interface zur Verwendung von [XPath](/de/docs/Web/XPath) in JavaScript. Mozilla implementiert eine beträchtliche Menge des [DOM 3 XPath](https://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/), was bedeutet, dass XPath-Ausdrücke sowohl gegen HTML- als auch XML-Dokumente ausgeführt werden können.

Das wichtigste Interface zur Verwendung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate)-Funktion des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode evaluiert [XPath](/de/docs/Web/XPath)-Ausdrücke gegen ein auf [XML](/de/docs/Glossary/XML) basierendes Dokument (einschließlich HTML-Dokumente) und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das ein einzelner Knoten oder eine Menge von Knoten sein kann. Die vorhandene Dokumentation für diese Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist aber derzeit für unsere Bedürfnisse recht spärlich; eine umfassendere Untersuchung wird unten gegeben.

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

- `xpathExpression`: Ein String, der den zu evaluierenden XPath-Ausdruck enthält.
- `contextNode`: Ein Knoten im Dokument, gegen den der `xpathExpression` ausgewertet werden soll, einschließlich aller seiner Kind-Knoten. Der [document](/de/docs/Web/API/Document)-Knoten wird am häufigsten verwendet.
- `namespaceResolver`: Eine Funktion, die jegliche in `xpathExpression` enthaltenen Namespace-Präfixe übergibt und einen String zurückgibt, der den mit diesem Präfix verknüpften Namespace-URI darstellt. Dies ermöglicht die Konvertierung zwischen den in den XPath-Ausdrücken verwendeten Präfixen und den möglicherweise unterschiedlichen im Dokument verwendeten Präfixen. Die Funktion kann entweder sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bietet, die das Namespace-Präfix auflöst.
  - `null`, was für HTML-Dokumente oder wenn keine Namespace-Präfixe verwendet werden, genutzt werden kann. Beachten Sie, dass dies, wenn der `xpathExpression` ein Namespace-Präfix enthält, zu einer `DOMException` mit dem Code `NAMESPACE_ERR` führt.
  - Eine benutzerdefinierte Funktion. Details finden Sie im Abschnitt [Verwendung eines benutzerdefinierten Namespace-Resolvers](#implementing_a_user_defined_namespace_resolver) im Anhang.

- `resultType`: Eine [Konstante](#xpathresult_defined_constants), die den gewünschten Ergebnis-Typ spezifiziert, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als natürlichsten Typ zurückgibt. Eine vollständige Liste der [verfügbaren Konstanten](#xpathresult_defined_constants) ist im Anhang enthalten. Sie werden unten im Abschnitt "[Festlegen des Rückgabetyps](#festlegen_des_rückgabetyps)" erklärt.
- `result`: Wenn ein bestehendes `XPathResult`-Objekt angegeben wird, wird es erneut verwendet, um die Ergebnisse zurückzugeben. Die Angabe von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt `xpathResult` zurück, ein `XPathResult`-Objekt des Typs, der im Parameter `resultType` [angegeben](#festlegen_des_rückgabetyps) ist. Das `XPathResult`-Interface ist [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namespace-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namespace-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate` die Variable `nsResolver` als `namespaceResolver`-Parameter.

Hinweis: XPath definiert QNames ohne Präfix, um nur Elemente im Null-Namespace zu matchen. Es gibt keinen Weg in XPath, um den Standard-Namespace für eine reguläre Elementreferenz (z. B. `p[@id='_myid']` für `xmlns='http://www.w3.org/1999/xhtml'`) aufzugreifen. Um Standard-Elemente in einem Nicht-Null-Namespace zu matchen, müssen Sie entweder auf ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']` (dieser [Ansatz](#using_xpath_functions_to_reference_elements_with_a_default_namespace) funktioniert gut für dynamische XPath's, wo die Namespaces nicht bekannt sind) verweisen oder Namenstests mit Präfixen verwenden und einen Namespace-Resolver erstellen, der das Präfix dem Namespace zuordnet. Lesen Sie mehr darüber, [wie Sie einen benutzerdefinierten Namespace-Resolver erstellen](#implementing_a_user_defined_namespace_resolver), falls Sie den letzteren Ansatz verfolgen möchten.

## Beschreibung

Adaptiert jeden DOM-Knoten zur Auflösung von Namespaces, damit ein [XPath](/de/docs/Web/XPath)-Ausdruck relativ zum Kontext des Knotens, in dem er im Dokument erscheint, einfach ausgewertet werden kann. Dieser Adapter funktioniert wie die DOM Level 3-Methode `lookupNamespaceURI` auf Knoten, um das `namespaceURI` von einem gegebenen Präfix mit den aktuellen Informationen der Knotenhierarchie zu der Zeit aufzulösen, zu der `lookupNamespaceURI` aufgerufen wird. Auch das implizite `xml`-Präfix wird korrekt aufgelöst.

### Festlegen des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus individuellen Knoten ([einfache Typen](#einfache_typen)) oder aus einer Sammlung von Knoten ([node-set Typen](#node-set_typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Rückgabewert in `resultType` entweder spezifiziert ist als:

- `NUMBER_TYPE` - eine Zahl
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein Boolean

Erhalten wir den Rückgabewert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Folgendes verwendet den XPath-Ausdruck [`count(//p)`](/de/docs/Web/XPath/Functions/count), um die Anzahl der `<p>`-Elemente in einem HTML-Dokument zu erhalten:

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

Obwohl JavaScript es uns ermöglicht, die Zahl für die Anzeige in einen String zu konvertieren, konvertiert das XPath-Interface das numerische Ergebnis nicht automatisch, wenn die `stringValue`-Eigenschaft abgefragt wird, daher wird der folgende Code **nicht** funktionieren:

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

Das `XPathResult`-Objekt ermöglicht es, Node-Sets in 3 verschiedenen Haupttypen zurückzugeben:

- [Iterators](#iterators)
- [Snapshots](#snapshots)
- [First Nodes](#first_node)

##### Iterators

Wenn der angegebene Rückgabewert im `resultType`-Parameter entweder ist:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein Node-Set von übereinstimmenden Knoten, das sich wie ein Iterator verhält und es uns erlaubt, auf die einzelnen enthaltenen Knoten über die `iterateNext()`-Methode des `XPathResult` zuzugreifen.

Sobald wir über alle einzelnen übereinstimmenden Knoten iteriert haben, wird `iterateNext()` `null` zurückgeben.

Beachten Sie jedoch, dass, wenn das Dokument verändert wird (der Dokumentbaum wird modifiziert) zwischen den Iterationen, dies die Iteration ungültig macht und die `invalidIteratorState`-Eigenschaft des `XPathResult` auf `true` gesetzt wird, und eine `NS_ERROR_DOM_INVALID_STATE_ERR`-Ausnahme geworfen wird.

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

Wenn der angegebene Rückgabewert im `resultType`-Parameter entweder ist:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein statisches Node-Set von übereinstimmenden Knoten, das es uns ermöglicht, auf jeden Knoten über die `snapshotItem(itemNumber)`-Methode des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des zu erfassenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann über die `snapshotLength`-Eigenschaft abgerufen werden.

Snapshots ändern sich nicht mit Dokumentänderungen, daher wird im Gegensatz zu den Iteratoren der Snapshot nicht ungültig, aber er könnte nicht mit dem aktuellen Dokument übereinstimmen, zum Beispiel könnten die Knoten verschoben worden sein, es könnte Knoten enthalten, die nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

Wenn der angegebene Rückgabewert im `resultType`-Parameter entweder ist:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist nur der erste gefundene Knoten, der mit dem XPath-Ausdruck übereinstimmt. Auf diesen kann über die `singleNodeValue`-Eigenschaft des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn das Node-Set leer ist.

Beachten Sie, dass beim ungeordneten Subtyp der einzelne zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentenreihenfolge ist, aber beim geordneten Subtyp erhalten Sie garantiert den ersten übereinstimmenden Knoten in der Dokumentenreihenfolge.

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

#### Die ANY_TYPE Konstante

Wenn der Rückgabewert im `resultType`-Parameter als `ANY_TYPE` spezifiziert ist, wird das zurückgegebene `XPathResult`-Objekt der Typ sein, der sich natürlich aus der Auswertung des Ausdrucks ergibt.

Es könnte sich um einen der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) handeln, **aber**, wenn der zurückgegebene Ergebnistyp ein Node-Set ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um den Typ nach der Auswertung zu bestimmen, verwenden wir die `resultType`-Eigenschaft des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_defined_constants) Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code sollte in jedem JavaScript-Fragment innerhalb oder verlinkt mit dem HTML-Dokument platziert werden, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>`-Überschriften in einem HTML-Dokument mit XPath zu extrahieren, ist der `xpathExpression` `"//h2"`. Wo `//` der rekursive Abwärtsoperator ist, der Elemente mit dem `nodeName` `h2` überall im Dokumentbaum matcht. Der vollständige Code dafür ist: Link zum einführenden XPath-Dokument

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

Da wir über das gesamte Dokument nach den Überschriften suchen möchten, haben wir das [document](/de/docs/Web/API/Document)-Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir wissen möchten, welcher Ergebnistyp zurückgegeben wurde, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird das Ergebnis `4` evaluieren, ein `UNORDERED_NODE_ITERATOR_TYPE`. Dies ist der Standard-Rückgabewert, wenn das Ergebnis des XPath-Ausdrucks ein Node-Set ist. Es bietet Zugriff auf einen einzelnen Knoten zur Ze整理щомен网页登录ācija
