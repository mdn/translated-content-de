---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XPath/Guides/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XPath) in JavaScript. Die Hauptschnittstelle zur Verwendung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate) Funktion des [document](/de/docs/Web/API/Document) Objekts.

## document.evaluate()

Diese Methode bewertet [XPath](/de/docs/Web/XPath) Ausdrücke gegen ein auf {{Glossary("XML", "XML")}} basierendes Dokument (einschließlich HTML-Dokumenten) und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult) Objekt zurück, das ein einzelner Knoten oder eine Menge von Knoten sein kann. Die vorhandene Dokumentation für diese Methode befindet sich bei [document.evaluate](/de/docs/Web/API/Document/evaluate), ist jedoch momentan für unsere Bedürfnisse eher spärlich; eine umfassendere Untersuchung wird unten gegeben.

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

Die [`evaluate()`](/de/docs/Web/API/Document/evaluate) Methode nimmt insgesamt fünf Parameter an:

- `xpathExpression`: Ein String, der den zu bewertenden XPath-Ausdruck enthält.
- `contextNode`: Ein Knoten im Dokument, gegen den das `xpathExpression` bewertet werden soll, einschließlich aller seiner Kindknoten. Der [document](/de/docs/Web/API/Document) Knoten ist der am häufigsten verwendete.
- `namespaceResolver`: Eine Funktion, die alle im `xpathExpression` enthaltenen Namespace-Präfixe erhält und eine Zeichenkette zurückgibt, die den Namespace-URI darstellt, der mit diesem Präfix assoziiert ist. Dies ermöglicht die Umwandlung zwischen den in den XPath-Ausdrücken verwendeten Präfixen und den möglicherweise unterschiedlichen Präfixen, die im Dokument verwendet werden. Die Funktion kann entweder sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI) Methode bereitstellt, die das Namespace-Präfix auflöst.
  - `null`, was für HTML-Dokumente oder wenn keine Namespace-Präfixe verwendet werden, verwendet werden kann. Beachten Sie, dass, wenn das `xpathExpression` ein Namespace-Präfix enthält, dies zu einer `DOMException` führt, die mit dem Code `NAMESPACE_ERR` ausgelöst wird.
  - Eine benutzerdefinierte Funktion. Einzelheiten hierzu finden Sie im Abschnitt [Verwendung eines benutzerdefinierten Namespace-Resolvers](#implementierung_eines_benutzerdefinierten_namespace-resolvers) im Anhang.

- `resultType`: Eine [Konstante](#xpathresult_definierte_konstanten), die den gewünschten Rückgabedatentyp angibt, der als Ergebnis der Bewertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als den natürlichsten Typ zurückgibt. Im Anhang gibt es einen Abschnitt, der eine vollständige Liste der [verfügbaren Konstanten](#xpathresult_definierte_konstanten) enthält. Sie werden unten im Abschnitt "[Spezifizieren des Rückgabetyps](#spezifizieren_des_rückgabetyps)" erklärt.
- `result`: Wenn ein vorhandenes `XPathResult`-Objekt angegeben wird, wird es wiederverwendet, um die Ergebnisse zurückzugeben. Wenn `null` angegeben wird, wird ein neues `XPathResult`-Objekt erstellt.

### Rückgabewert

Gibt `xpathResult` zurück, ein `XPathResult`-Objekt vom im Parameter `resultType` [spezifizierten](#spezifizieren_des_rückgabetyps) Typ. Die `XPathResult`-Schnittstelle wird [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namespace-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document) Objekt als Namespace-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate`, die `nsResolver`-Variable als `namespaceResolver`-Parameter.

Hinweis: XPath definiert QNames ohne ein Präfix, um nur Elemente im Null-Namespace zu entsprechen. Es gibt keine Möglichkeit in XPath, den Standard-Namespace als auf ein reguläres Element referenziert (z.B. `p[@id='_my-id']` für `xmlns='http://www.w3.org/1999/xhtml'`) auszuwählen. Um Standardelemente in einem Nicht-Null-Namespace zu entsprechen, müssen Sie entweder ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` ([diese Methode](#verwendung_von_xpath-funktionen_zum_referenzieren_von_elementen_mit_einem_standard-namespace) funktioniert gut für dynamische XPath's, bei denen die Namespaces möglicherweise nicht bekannt sind) referenzieren oder präfixierte Namens-Tests verwenden und einen Namespace-Resolver erstellen, der das Präfix dem Namespace zuordnet. Lesen Sie mehr darüber, [wie Sie einen benutzerdefinierten Namespace-Resolver erstellen](#implementierung_eines_benutzerdefinierten_namespace-resolvers), wenn Sie den letzteren Ansatz verfolgen möchten.

## Beschreibung

Passt einen beliebigen DOM-Knoten an, um Namespaces aufzulösen, sodass ein [XPath](/de/docs/Web/XPath) Ausdruck relativ zum Kontext des Knotens, wo er im Dokument erschien, leicht bewertet werden kann. Dieser Adapter funktioniert wie die DOM Level 3 Methode `lookupNamespaceURI` auf Knoten beim Auflösen des `namespaceURI` von einem gegebenen Präfix zu der aktuellen Information, die in der Hierarchie des Knotens verfügbar ist, zur Zeit, wenn `lookupNamespaceURI` aufgerufen wird. Außerdem wird das implizite `xml` Präfix korrekt aufgelöst.

### Spezifizieren des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([Knoten-Mengen-Typen](#knoten-mengen-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Rückgabedatentyp im `resultType` entweder als:

- `NUMBER_TYPE` - ein double
- `STRING_TYPE` - ein string
- `BOOLEAN_TYPE` - ein boolean

spezifiziert wird.

Wir erhalten den zurückgegebenen Wert des Ausdrucks durch Zugriff auf die folgenden Eigenschaften des `XPathResult`-Objekts.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Folgendes verwendet den XPath-Ausdruck [`count(//p)`](/de/docs/Web/XPath/Reference/Functions/count), um die Anzahl der `<p>` Elemente in einem HTML-Dokument zu ermitteln:

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

Obwohl JavaScript uns erlaubt, die Zahl in eine Zeichenkette zur Anzeige zu konvertieren, wird das XPath-Interface das numerische Ergebnis nicht automatisch konvertieren, wenn die `stringValue`-Eigenschaft angefordert wird, sodass der folgende Code **nicht** funktioniert:

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

Stattdessen wird eine Ausnahme mit dem Code `NS_DOM_TYPE_ERROR` ausgelöst.

#### Knoten-Mengen-Typen

Das `XPathResult`-Objekt ermöglicht es, Knoten-Mengen in 3 verschiedenen Haupttypen zurückzugeben:

- [Iteratoren](#iteratoren)
- [Snapshots](#snapshots)
- [Erster Knoten](#erster_knoten)

##### Iteratoren

Wenn der angegebene Rückgabedatentyp im `resultType`-Parameter entweder:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt eine Knoten-Menge passender Knoten sein, die sich wie ein Iterator verhält, wodurch wir Zugang zu den einzelnen enthaltenen Knoten durch die `iterateNext()` Methode des `XPathResult` erhalten.

Sobald wir alle der einzeln passenden Knoten durchlaufen haben, wird `iterateNext()` `null` zurückgeben.

Beachten Sie jedoch, dass wenn das Dokument mutiert wird (der Dokumentbaum verändert wird) zwischen den Iterationen, dies die Iteration ungültig macht und die `invalidIteratorState`-Eigenschaft des `XPathResult` auf `true` gesetzt ist und eine `NS_ERROR_DOM_INVALID_STATE_ERR` Ausnahme ausgelöst wird.

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

Wenn der angegebene Rückgabedatentyp im `resultType`-Parameter entweder:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt eine statische Knoten-Menge passender Knoten sein, die es uns ermöglicht, auf jeden Knoten durch die `snapshotItem(itemNumber)` Methode des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann über die `snapshotLength`-Eigenschaft abgerufen werden.

Snapshots ändern sich nicht mit Dokument-Mutationen, so dass, im Gegensatz zu den Iteratoren, der Snapshot nicht ungültig wird, aber möglicherweise nicht dem aktuellen Dokument entspricht, z.B. könnten die Knoten verschoben worden sein, es könnten Knoten enthalten sein, die nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

##### Erster Knoten

Wenn der angegebene Rückgabedatentyp im `resultType`-Parameter entweder:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt nur der erste gefundene Knoten sein, der dem XPath-Ausdruck entspricht. Dieser kann über die `singleNodeValue`-Eigenschaft des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn die Knoten-Menge leer ist.

Beachten Sie, dass für den ungeordneten Subtyp der einzelne zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentenreihenfolge ist, aber für den geordneten Subtyp wird garantiert, dass der erste gefundene Knoten in der Dokumentenreihenfolge zurückgegeben wird.

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

Wenn der Rückgabedatentyp im `resultType`-Parameter als `ANY_TYPE` angegeben wird, ist das zurückgegebene `XPathResult`-Objekt, welcher Typ auch immer natürlicherweise aus der Auswertung des Ausdrucks resultiert.

Es könnte einer der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) sein, **aber**, wenn der zurückgegebene Rückgabedatentyp eine Knoten-Menge ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach der Auswertung zu bestimmen, verwenden wir die `resultType`-Eigenschaft des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_definierte_konstanten) Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code ist dazu gedacht, in einem JavaScript-Fragment innerhalb oder verbunden mit dem HTML-Dokument platziert zu werden, gegen das der XPath-Ausdruck bewertet werden soll.

Um alle `<h2>` Überschriften-Elemente in einem HTML-Dokument mit XPath zu extrahieren, ist der `xpathExpression` `"//h2"`. Wobei `//` der Recursive Descent Operator ist, der Elemente mit dem `nodeName` `h2` überall im Dokumentbaum matched. Der vollständige Code dafür ist: link to introductory xpath doc

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

Da wir über das gesamte Dokument nach den Überschriften suchen möchten, haben wir das [document](/de/docs/Web/API/Document) Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir den Typ des zurückgegebenen Ergebnisses wissen möchten, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird das auf `4` ausgewertet, ein `UNORDERED_NODE_ITERATOR_TYPE`. Dies ist der Standard-Rückgabedatentyp, wenn das Ergebnis des XPath-Ausdrucks eine Knoten-Menge ist. Es bietet Zugriff auf einen einzelnen Knoten auf einmal und kann Knoten möglicherweise nicht in einer bestimmten Reihenfolge zurückgeben. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die `iterateNext()`-Methode des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle Standard-DOM-Schnittstellen auf diesem Knoten. Nach dem Durchlaufen aller `h2`-Elemente, die aus unserem Ausdruck zurückgegeben werden, geben weitere Aufrufe von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines benutzerdefinierten Namespace-Resolvers

Dies ist nur ein Beispiel zur Veranschaulichung. Diese Funktion muss Namespace-Präfixe aus dem `xpathExpression` nehmen und den URI zurückgeben, der diesem Präfix entspricht. Zum Beispiel der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wird alle [MathML](/de/docs/Web/MathML) Ausdrücke auswählen, die Kinder von (X)HTML Tabellendatenzellelementen sind.

Um das `mathml:` Präfix mit dem Namespace-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit dem URI `http://www.w3.org/1999/xhtml` zu assoziieren, bieten wir eine Funktion an:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Unser Aufruf zu `document.evaluate` würde dann so aussehen:

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

Wie zuvor im Abschnitt [Implementieren eines Standard-Namespace-Resolvers](#implementierung_eines_standard-namespace-resolvers) erwähnt, behandelt der Standard-Resolver nicht den Standard-Namespace für XML-Dokumente. Zum Beispiel mit diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` wird μια leere Menge zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Ein `null` Resolver funktioniert auch nicht besser.

Ein möglicher Workaround ist die Erstellung eines benutzerdefinierten Resolvers, der den korrekten Standard-Namespace zurückgibt (in diesem Fall den Atom-Namespace). Beachten Sie, dass Sie dennoch ein Namespace-Präfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolver-Funktion es in Ihren benötigten Namespace ändern kann. Z.B.:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich sein wird, wenn das Dokument mehrere Namespaces verwendet.

Ein Ansatz, der besser funktionieren könnte (und es ermöglicht, dass Namespaces nicht im Voraus bekannt sein müssen), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen zum Referenzieren von Elementen mit einem Standard-Namespace

Ein anderer Ansatz, um Standardelemente in einem Nicht-Null-Namespace zu entsprechen (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namespaces möglicherweise nicht bekannt sind), besteht darin, auf ein bestimmtes Element mit einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` zu verweisen. Dies umgeht das Problem, dass eine XPath-Abfrage den Standard-Namespace auf einem regulär beschrifteten Element nicht erkennen kann.

### Spezifisch benannte Elemente und Attribute, unabhängig von ihrem Präfix abrufen

Wenn man Flexibilität in Namespaces bieten möchte (wie sie gedacht sind), indem man nicht unbedingt ein bestimmtes Präfix verwendet, um ein namespaciertes Element oder Attribut zu finden, muss man spezielle Techniken anwenden.

Während man den Ansatz im obigen Abschnitt anpassen kann, um namespacierte Elemente unabhängig von dem gewählten Präfix zu testen (indem man [`local-name()`](/de/docs/Web/XPath/Reference/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XPath/Reference/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XPath/Reference/Functions/name) benutzt), tritt jedoch eine schwierigere Situation auf, wenn man ein Element mit einem bestimmten namespacierten Attribut in einem Prädikat erfassen möchte (gegeben dem Fehlen von implementierungsunabhängigen Variablen in XPath 1.0).

Zum Beispiel könnte man (fälschlicherweise) versuchen, ein Element mit einem namespacierten Attribut wie folgt zu erfassen: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente erfassen, wenn eines seiner Attribute existierte, das einen lokalen Namen von `href` hatte, aber es war ein anderes Attribut, das den gezielten (XLink) Namespace hatte (anstatt von [`@href`](/de/docs/Web/XPath/Reference/Axes#attribute)).

Um Elemente mit dem XLink-`@href`-Attribut genau zu erfassen (ohne sich auch auf vorher festgelegte Präfixe in einem Namespace-Resolver beschränken zu müssen), könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### XPathResult Definierte Konstanten

| Ergebnis-Typ definierte Konstante | Wert | Beschreibung                                                                                                                                                                                                                               |
| --------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ANY_TYPE                          | 0    | Ein Ergebnismenge, die den Typ enthält, der natürlicherweise aus der Evaluierung des Ausdrucks resultiert. Beachten Sie, dass, wenn das Ergebnis eine Knoten-Menge ist, dann UNORDERED_NODE_ITERATOR_TYPE immer der resultierende Typ ist. |
| NUMBER_TYPE                       | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich, z.B. in einem XPath-Ausdruck, der die `count()` Funktion verwendet.                                                                                                       |
| STRING_TYPE                       | 2    | Ein Ergebnis, das eine einzelne Zeichenkette enthält.                                                                                                                                                                                      |
| BOOLEAN_TYPE                      | 3    | Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist nützlich, z.B. in einem XPath-Ausdruck, der die `not()` Funktion verwendet.                                                                                            |
| UNORDERED_NODE_ITERATOR_TYPE      | 4    | Eine Ergebnis-Knoten-Menge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                                             |
| ORDERED_NODE_ITERATOR_TYPE        | 5    | Eine Ergebnis-Knoten-Menge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                                             |
| UNORDERED_NODE_SNAPSHOT_TYPE      | 6    | Eine Ergebnis-Knoten-Menge, die Snapshots aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                                  |
| ORDERED_NODE_SNAPSHOT_TYPE        | 7    | Eine Ergebnis-Knoten-Menge, die Snapshots aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                                  |
| ANY_UNORDERED_NODE_TYPE           | 8    | Eine Ergebnis-Knoten-Menge, die einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten muss nicht unbedingt der erste Knoten im Dokument sein, der dem Ausdruck entspricht.                                    |
| FIRST_ORDERED_NODE_TYPE           | 9    | Eine Ergebnis-Knoten-Menge, die den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.                                                                                                                                        |

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Informationen zum Originaldokument

- Basierend auf einem Originaldokument von James Graham.
- Weitere Mitwirkende: James Thompson.
