---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XML/XPath) in JavaScript. Die Hauptschnittstelle für XPath ist die Funktion [evaluate](/de/docs/Web/API/Document/evaluate) des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode wertet [XPath](/de/docs/Web/XML/XPath)-Ausdrücke gegen ein {{Glossary("XML", "XML")}}-basiertes Dokument (einschließlich HTML-Dokumenten) aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das entweder einen einzelnen Knoten oder eine Menge von Knoten darstellen kann. Die bestehende Dokumentation für diese Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist jedoch für unsere Bedürfnisse momentan eher spärlich; im Folgenden wird eine detailliertere Untersuchung gegeben.

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

Die Methode [`evaluate()`](/de/docs/Web/API/Document/evaluate) nimmt insgesamt fünf Parameter entgegen:

- `xpathExpression`: Ein String, der den auszuwertenden XPath-Ausdruck enthält.
- `contextNode`: Ein Knoten im Dokument, gegen den `xpathExpression` ausgewertet werden soll, einschließlich aller seiner Kindknoten. Der [document](/de/docs/Web/API/Document)-Knoten ist der häufigste.
- `namespaceResolver`: Eine Funktion, die alle Namespace-Präfixe, die in `xpathExpression` enthalten sind, entgegennimmt und eine Zeichenfolge zurückgibt, die den Namespace-URI repräsentiert, der mit diesem Präfix verknüpft ist. Dies ermöglicht die Umwandlung zwischen den im XPath-Ausdruck verwendeten Präfixen und den möglicherweise unterschiedlichen Präfixen, die im Dokument verwendet werden. Die Funktion kann entweder sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine Methode [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI) bereitstellt, um das Namespace-Präfix aufzulösen.
  - `null`, was für HTML-Dokumente oder wenn keine Namespace-Präfixe verwendet werden, genutzt werden kann. Beachten Sie, dass, wenn der `xpathExpression` ein Namespace-Präfix enthält, dies zu einer `DOMException` mit dem Code `NAMESPACE_ERR` führt.
  - Eine benutzerdefinierte Funktion. Details dazu finden Sie im Abschnitt [Verwendung eines benutzerdefinierten Namespace-Resolvers](#implementierung_eines_benutzerdefinierten_namespace-resolvers) im Anhang.

- `resultType`: Eine [Konstante](#xpathresult-definierte_konstanten), die den gewünschten Rückgabetyp angibt, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten verwendete Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks im natürlichsten Typ zurückgibt. Eine vollständige Liste der [verfügbaren Konstanten](#xpathresult-definierte_konstanten) finden Sie im Anhang. Diese werden ausführlich im Abschnitt "[Spezifizierung des Rückgabetyps](#spezifizierung_des_rückgabetyps)" erklärt.
- `result`: Wenn ein vorhandenes `XPathResult`-Objekt angegeben wird, wird es wiederverwendet, um die Ergebnisse zurückzugeben. Das Angeben von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt `xpathResult` zurück, ein `XPathResult`-Objekt vom Typ, der im Parameter `resultType` [spezifiziert](#spezifizierung_des_rückgabetyps) wurde. Die `XPathResult`-Schnittstelle wird [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namespace-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namespace-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate` die Variable `nsResolver` als `namespaceResolver`-Parameter.

> [!NOTE]
> XPath definiert QNames ohne ein Präfix, um nur Elemente im Null-Namespace abzugleichen. Es gibt keine Möglichkeit in XPath, den Standard-Namespace auf ein reguläres Element-Referenz (z. B. `p[@id='_my-id']` bei `xmlns='http://www.w3.org/1999/xhtml'`) anzuwenden. Um Standard-Elemente in einem Nicht-Null-Namespace abzugleichen, müssen Sie entweder auf ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` (siehe [diesen Ansatz](#verwendung_von_xpath-funktionen_zum_referenzieren_von_elementen_mit_einem_standard-namespace) für dynamische XPath-Ausdrücke, bei denen die Namespaces nicht bekannt sein könnten) verweisen oder benannte Präfix-Tests verwenden und einen Namespace-Resolver erstellen, der das Präfix auf den Namespace abbildet. Lesen Sie mehr darüber, [wie man einen benutzerdefinierten Namespace-Resolver erstellt](#implementierung_eines_benutzerdefinierten_namespace-resolvers), wenn Sie den letzteren Ansatz verfolgen möchten.

## Beschreibung

Passt jeden DOM-Knoten an, um Namespaces aufzulösen, sodass ein [XPath](/de/docs/Web/XML/XPath)-Ausdruck einfach relativ zum Kontextknoten im Dokument ausgewertet werden kann, in dem er auftritt. Dieser Adapter funktioniert wie die DOM Level 3-Methode `lookupNamespaceURI` auf Knoten, indem er `namespaceURI` aus einem gegebenen Präfix mit den aktuellen Informationen auflöst, die in der Hierarchie des Knotens zum Zeitpunkt des Aufrufs von `lookupNamespaceURI` verfügbar sind. Außerdem wird das implizite `xml`-Präfix korrekt aufgelöst.

### Spezifizierung des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([node-set-Typen](#node-set-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Rückgabetyp in `resultType` entweder als:

- `NUMBER_TYPE` - eine Zahl (double)
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein boolean

angegeben ist, erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen:

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Im folgenden Beispiel wird der XPath-Ausdruck [`count(//p)`](/de/docs/Web/XML/XPath/Reference/Functions/count) verwendet, um die Anzahl der `<p>`-Elemente in einem HTML-Dokument zu erhalten:

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

Obwohl JavaScript uns erlaubt, die Zahl in einen String für die Anzeige zu konvertieren, konvertiert die XPath-Schnittstelle das numerische Ergebnis nicht automatisch, wenn die `stringValue`-Eigenschaft abgefragt wird. Daher funktioniert der folgende Code **nicht**:

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

#### Node-Set-Typen

Das `XPathResult`-Objekt erlaubt es, Node-Sets in 3 Haupttypen zurückzugeben:

- [Iterators](#iterators)
- [Snapshots](#snapshots)
- [First Nodes](#first_node)

##### Iterators

Wenn der angegebene Rückgabetyp im Parameter `resultType` entweder:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt ein Node-Set der übereinstimmenden Knoten sein, das sich wie ein Iterator verhält und uns erlaubt, auf die einzelnen Knoten zuzugreifen, indem wir die Methode `iterateNext()` des `XPathResult`-Objekts verwenden.

Sobald wir alle Einzelknoten durchlaufen haben, gibt `iterateNext()` `null` zurück.

Beachten Sie jedoch, dass, wenn das Dokument zwischen den Iterationen verändert wird (der Baum des Dokuments geändert wird), dies die Iteration ungültig macht und die Eigenschaft `invalidIteratorState` des `XPathResult` auf `true` gesetzt wird und eine Ausnahme mit dem Code `NS_ERROR_DOM_INVALID_STATE_ERR` ausgelöst wird.

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

Wenn der angegebene Rückgabetyp im Parameter `resultType` entweder:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt ein statisches Node-Set der übereinstimmenden Knoten sein, das es uns erlaubt, auf jeden Knoten über die Methode `snapshotItem(itemNumber)` des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtzahl der enthaltenen Knoten kann über die Eigenschaft `snapshotLength` abgerufen werden.

Snapshots ändern sich nicht mit Dokumentmutationen, daher wird der Snapshot, im Gegensatz zu den Iteratoren, nicht ungültig, könnte jedoch nicht mehr mit dem aktuellen Dokument übereinstimmen. Beispielsweise könnten die Knoten verschoben worden sein, Knoten könnten nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

Wenn der angegebene Rückgabetyp im Parameter `resultType` entweder:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt nur den ersten gefundenen Knoten, der mit dem XPath-Ausdruck übereinstimmt, enthalten. Dieser kann über die Eigenschaft `singleNodeValue` des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn die Node-Set-Menge leer ist.

Beachten Sie, dass im ungeordneten Subtyp der zurückgegebene Einzelknoten möglicherweise nicht der erste in Dokumentreihenfolge ist, aber im geordneten Subtyp erhalten Sie garantiert den ersten übereinstimmenden Knoten in Dokumentreihenfolge.

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

#### Die Konstante ANY_TYPE

Wenn der Rückgabetyp im Parameter `resultType` als `ANY_TYPE` angegeben ist, wird das zurückgegebene `XPathResult`-Objekt vom Typ sein, der natürlich aus der Auswertung des Ausdrucks resultiert.

Es könnte einer der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) sein, **aber**, wenn der zurückgegebene Ergebnistyp ein Node-Set ist, wird er **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um den Typ nach der Auswertung zu bestimmen, verwenden wir die Eigenschaft `resultType` des `XPathResult`-Objekts. Die [Konstantenwerte](#xpathresult-definierte_konstanten) dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in einem beliebigen JavaScript-Fragment innerhalb oder verknüpft mit dem HTML-Dokument platziert werden, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>`-Überschriftenelemente in einem HTML-Dokument mithilfe von XPath zu extrahieren, lautet der `xpathExpression` `"//h2"`. Dabei ist `//` der Recursive Descent Operator, der Elemente mit dem `nodeName` `h2` überall im Dokumentbaum abgleicht. Der vollständige Code dazu ist hier: Link zur Einführung in XPath-Dokumentation.

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Beachten Sie, dass HTML keine Namespaces hat, deshalb haben wir `null` für den `namespaceResolver`-Parameter übergeben.

Da wir über das gesamte Dokument nach den Überschriften suchen möchten, haben wir das [document](/de/docs/Web/API/Document)-Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir den Typrückgabewert des Ergebnisses wissen möchten, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird dies zu `4`, einem `UNORDERED_NODE_ITERATOR_TYPE`, ausgewertet. Dies ist der Standardrückgabetyp, wenn das Ergebnis des XPath-Ausdrucks ein Node-Set ist. Es bietet Zugriff auf jeweils einen Knoten und gibt die Knoten möglicherweise nicht in einer bestimmten Reihenfolge zurück. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die Methode `iterateNext()` des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir über einen Knoten iterieren, haben wir Zugriff auf alle Standard-DOM-Schnittstellen für diesen Knoten. Nachdem wir alle `h2`-Elemente aus unserem Ausdruck durchlaufen haben, geben alle weiteren Aufrufe von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines benutzerdefinierten Namespace-Resolvers

Dies ist nur ein Beispiel zur Veranschaulichung. Diese Funktion muss Namespace-Präfixe aus dem `xpathExpression` übernehmen und den URI zurückgeben, der diesem Präfix entspricht. Zum Beispiel wird der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

alle [MathML](/de/docs/Web/MathML)-Ausdrücke auswählen, die Kinder von (X)HTML-Tabellenzellen sind.

Um das Präfix `mathml:` dem Namespace-URI `http://www.w3.org/1998/Math/MathML` zuzuordnen und `xhtml:` dem URI `http://www.w3.org/1999/xhtml`, bieten wir eine Funktion an:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Unser Aufruf von `document.evaluate` würde dann folgendes aussehen:

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### Implementierung eines Standard-Namespace für XML-Dokumente

Wie zuvor im Abschnitt [Implementierung eines Standard-Namespace-Resolvers](#implementierung_eines_standard-namespace-resolvers) erwähnt, behandelt der Standard-Resolver den Standard-Namespace für XML-Dokumente nicht. Zum Beispiel wird mit folgendem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` eine leere Menge zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Die Übergabe eines `null`-Resolvers funktioniert ebenfalls nicht besser.

Eine mögliche Abhilfe besteht darin, einen benutzerdefinierten Resolver zu erstellen, der den richtigen Standard-Namespace (in diesem Fall den Atom-Namespace) zurückgibt. Beachten Sie, dass Sie immer noch ein Namespace-Präfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolverfunktion es in Ihren gewünschten Namespace ändern kann. Beispiel:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich sein wird, wenn das Dokument mehrere Namespaces verwendet.

Ein Ansatz, der möglicherweise besser funktioniert (und es ermöglicht, dass Namespaces im Voraus nicht bekannt sind), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen zum Referenzieren von Elementen mit einem Standard-Namespace

Ein weiterer Ansatz zum Abgleichen von Standard-Elementen in einem Nicht-Null-Namespace (und ein Ansatz, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen Namespaces möglicherweise nicht bekannt sind), besteht darin, auf ein bestimmtes Element mit einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` zu verweisen. Dies umgeht das Problem, dass eine XPath-Abfrage den Standard-Namespace eines regulär benannten Elements nicht erkennen kann.

### Abrufen spezifisch benannter Elemente und Attribute unabhängig vom Präfix

Wenn man bei Namespaces flexibel sein möchte (wie sie beabsichtigt sind) und nicht zwingend ein bestimmtes Präfix verwenden möchte, um ein namespaced-Element oder -Attribut zu finden, muss man spezielle Techniken anwenden.

Während man den Ansatz im vorherigen Abschnitt anpassen kann, um nach namespaced-Elementen unabhängig vom gewählten Präfix zu suchen (unter Verwendung von [`local-name()`](/de/docs/Web/XML/XPath/Reference/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XML/XPath/Reference/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XML/XPath/Reference/Functions/name)), entsteht ein Problem, wenn man ein Element mit einem bestimmten namespaced-Attribut in einem Prädikat erfassen möchte (angesichts der Abwesenheit von implementierungsunabhängigen Variablen in XPath 1.0).

Beispielsweise könnte man versuchen (fälschlicherweise), ein Element mit einem namespaced-Attribut wie folgt zu erfassen: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte unbeabsichtigt einige Elemente erfassen, wenn eines seiner Attribute existierte, das einen lokalen Namen von `href` hatte, es sich jedoch um ein anderes Attribut handelte, das den Ziel-Namespace (XLink) hatte (anstelle von [`@href`](/de/docs/Web/XML/XPath/Reference/Axes#attribute)).

Um Elemente mit dem XLink-Attribut `@href` genau zu erfassen (ohne ebenfalls auf vordefinierte Präfixe in einem Namespace-Resolver beschränkt zu sein), könnte man sie folgendermaßen abrufen:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### XPathResult-definierte Konstanten

| Ergebnis-Typ definierte Konstante | Wert | Beschreibung                                                                                                                                                                                                              |
| --------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                          | 0    | Eine Ergebnismenge, die den Typ enthält, der natürlich aus der Auswertung des Ausdrucks resultiert. Beachten Sie, dass, wenn das Ergebnis ein Node-Set ist, UNORDERED_NODE_ITERATOR_TYPE immer der resultierende Typ ist. |
| NUMBER_TYPE                       | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich, z. B. bei einem XPath-Ausdruck, der die Funktion `count()` verwendet.                                                                                    |
| STRING_TYPE                       | 2    | Ein Ergebnis, das eine einzelne Zeichenfolge enthält.                                                                                                                                                                     |
| BOOLEAN_TYPE                      | 3    | Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist nützlich, z. B. bei einem XPath-Ausdruck, der die Funktion `not()` verwendet.                                                                         |
| UNORDERED_NODE_ITERATOR_TYPE      | 4    | Ein Ergebnis-Node-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge vorliegen, in der sie im Dokument erscheinen.                                 |
| ORDERED_NODE_ITERATOR_TYPE        | 5    | Ein Ergebnis-Node-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten in der Ergebnismenge befinden sich in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                               |
| UNORDERED_NODE_SNAPSHOT_TYPE      | 6    | Ein Ergebnis-Node-Set, das Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge vorliegen, in der sie im Dokument erscheinen.                 |
| ORDERED_NODE_SNAPSHOT_TYPE        | 7    | Ein Ergebnis-Node-Set, das Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten in der Ergebnismenge befinden sich in der gleichen Reihenfolge, in der sie im Dokument erscheinen.               |
| ANY_UNORDERED_NODE_TYPE           | 8    | Ein Ergebnisknoten-Set, das einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht notwendigerweise der erste Knoten im Dokument, der dem Ausdruck entspricht.                      |
| FIRST_ORDERED_NODE_TYPE           | 9    | Ein Ergebnisknoten-Set, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.                                                                                                                           |

## Siehe auch

- [XPath](/de/docs/Web/XML/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Informationen zum Originaldokument

- Basierend auf einem ursprünglichen Dokument von James Graham.
- Weitere Mitwirkende: James Thompson.
