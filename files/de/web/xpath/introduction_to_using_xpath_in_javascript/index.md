---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{XsltSidebar}}

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XPath) in JavaScript. Mozilla implementiert einen beträchtlichen Teil von [DOM 3 XPath](https://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/), was bedeutet, dass XPath-Ausdrücke sowohl auf HTML- als auch auf XML-Dokumente angewendet werden können.

Die Hauptschnittstelle zur Verwendung von XPath ist die Funktion [evaluate](/de/docs/Web/API/Document/evaluate) des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode evaluiert [XPath](/de/docs/Web/XPath)-Ausdrücke gegen ein auf {{Glossary("XML", "XML")}} basiertes Dokument (einschließlich HTML-Dokumenten) und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das ein einzelner Knoten oder eine Menge von Knoten sein kann. Die vorhandene Dokumentation für diese Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist jedoch momentan relativ spärlich; eine umfassendere Untersuchung wird weiter unten gegeben.

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

Die Methode [`evaluate()`](/de/docs/Web/API/Document/evaluate) nimmt insgesamt fünf Parameter an:

- `xpathExpression`: Ein String, der den zu evaluierenden XPath-Ausdruck enthält.
- `contextNode`: Ein Knoten im Dokument, gegen den der `xpathExpression` evaluiert werden soll, einschließlich aller seiner untergeordneten Knoten. Der [document](/de/docs/Web/API/Document)-Knoten wird am häufigsten verwendet.
- `namespaceResolver`: Eine Funktion, die alle in `xpathExpression` enthaltenen Namensraum-Präfixe übergeben bekommt und einen String zurückgibt, der den Namensraum-URI darstellt, der mit diesem Präfix assoziiert ist. Dies ermöglicht die Umwandlung zwischen den in den XPath-Ausdrücken verwendeten Präfixen und den möglicherweise unterschiedlichen Präfixen, die im Dokument verwendet werden. Die Funktion kann entweder sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bereitstellt, die das Namensraum-Präfix auflöst.
  - `null`, das für HTML-Dokumente verwendet werden kann, oder wenn keine Namensraum-Präfixe verwendet werden. Beachten Sie, dass, wenn der `xpathExpression` ein Namensraum-Präfix enthält, dies zu einem `DOMException` mit dem Code `NAMESPACE_ERR` führen wird.
  - Eine benutzerdefinierte Funktion. Siehe den Abschnitt [Implementieren eines benutzerdefinierten Namespace-Resolvers](#implementierung_eines_benutzerdefinierten_namespace-resolvers) im Anhang für Details.

- `resultType`: Eine [Konstante](#xpathresult_definierte_konstanten), die den gewünschten Ergebnistyp spezifiziert, der als Ergebnis der Evaluierung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als den natürlichsten Typ zurückgibt. Es gibt einen Abschnitt im Anhang, der eine vollständige Liste der [verfügbaren Konstanten](#xpathresult_definierte_konstanten) enthält. Diese werden im Abschnitt "[Den Rückgabetyp spezifizieren](#den_rückgabetyp_spezifizieren)" näher erklärt.
- `result`: Wenn ein vorhandenes `XPathResult`-Objekt angegeben wird, wird es wiederverwendet, um die Ergebnisse zurückzugeben. Die Angabe von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt `xpathResult` zurück, welches ein `XPathResult`-Objekt des Typs ist, der im Parameter `resultType` [spezifiziert](#den_rückgabetyp_spezifizieren) wurde. Die `XPathResult`-Schnittstelle ist [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namensraum-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namensraum-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und dann übergeben wir `document.evaluate`, die Variable `nsResolver` als Parameter `namespaceResolver`.

Hinweis: XPath definiert QNames ohne ein Präfix, um nur Elemente im null-Namensraum zu erkennen. Es gibt keine Möglichkeit in XPath, den Standard-Namensraum zu übernehmen, wie er auf einen regulären Elementverweis angewendet wird (z.B. `p[@id='_my-id']` für `xmlns='http://www.w3.org/1999/xhtml'`). Um Standard-Elemente in einem nicht-null-Namensraum zu erkennen, müssen Sie entweder auf ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' und name()='p' und @id='_my-id']` verweisen ([dieser Ansatz](#verwendung_von_xpath-funktionen_zum_referenzieren_von_elementen_mit_einem_standard-namespace) funktioniert gut für dynamische XPaths, bei denen die Namensräume möglicherweise nicht bekannt sind) oder verwenden Sie Präfix-Namens-Tests und erstellen Sie einen Namensraum-Resolver, der das Präfix zur Namensraum abbildet. Lesen Sie mehr über [wie Sie einen benutzerdefinierten Namensraum-Resolver erstellen](#implementierung_eines_benutzerdefinierten_namespace-resolvers), wenn Sie den letzteren Ansatz verfolgen möchten.

## Beschreibung

Passt jeden DOM-Knoten an, um Namensräume aufzulösen, sodass ein [XPath](/de/docs/Web/XPath)-Ausdruck relativ zum Kontext des Knotens, in dem er im Dokument erschien, leicht ausgewertet werden kann. Dieser Adapter funktioniert wie die DOM Level 3-Methode `lookupNamespaceURI` auf Knoten, um den `namespaceURI` aus einem gegebenen Präfix mit den derzeit im Knoten verfügbaren Informationen zur Hierarchie zum Zeitpunkt des Aufrufs von `lookupNamespaceURI` zu lösen. Er löst auch korrekt das implizite `xml`-Präfix auf.

### Den Rückgabetyp spezifizieren

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([Knoten-Set-Typen](#knoten-set-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnistyp im `resultType` als entweder:

- `NUMBER_TYPE` - ein Double
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein Boolean

angegeben wird, erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Folgendes Beispiel verwendet den XPath-Ausdruck [`count(//p)`](/de/docs/Web/XPath/Functions/count), um die Anzahl der `<p>`-Elemente in einem HTML-Dokument zu erhalten:

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

Obwohl JavaScript es uns ermöglicht, die Zahl zur Anzeige in einen String zu konvertieren, konvertiert die XPath-Schnittstelle das numerische Ergebnis nicht automatisch, wenn die Eigenschaft `stringValue` angefordert wird, sodass der folgende Code **nicht** funktioniert:

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

#### Knoten-Set-Typen

Das `XPathResult`-Objekt ermöglicht es, Knoten-Sets in drei Haupttypen zurückzugeben:

- [Iterators](#iterators)
- [Snapshots](#snapshots)
- [Erster Knoten](#erster_knoten)

##### Iterators

Wenn der spezifizierte Ergebnistyp im Parameter `resultType` entweder ist:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein Knoten-Set von übereinstimmenden Knoten, das sich wie ein Iterator verhält und es uns ermöglicht, auf die einzelnen enthaltenen Knoten mit der Methode `iterateNext()` des `XPathResult` zuzugreifen.

Sobald wir alle übereinstimmenden Knoten durchlaufen haben, gibt `iterateNext()` `null` zurück.

Beachten Sie jedoch, dass, wenn das Dokument zwischen den Iterationen geändert wird (der Dokumentbaum wird geändert), dies die Iteration ungültig macht und die Eigenschaft `invalidIteratorState` des `XPathResult` auf `true` gesetzt wird und eine `NS_ERROR_DOM_INVALID_STATE_ERR`-Ausnahme ausgelöst wird.

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

Wenn der spezifizierte Ergebnistyp im Parameter `resultType` entweder ist:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein statisches Knoten-Set von übereinstimmenden Knoten, das es uns ermöglicht, auf jeden Knoten durch die Methode `snapshotItem(itemNumber)` des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann über die Eigenschaft `snapshotLength` abgerufen werden.

Snapshots ändern sich nicht mit Dokumentmutationen, daher wird im Gegensatz zu den Iteratoren der Snapshot nicht ungültig, aber er entspricht möglicherweise nicht dem aktuellen Dokument, zum Beispiel könnten die Knoten verschoben worden sein, er könnte Knoten enthalten, die nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

Wenn der spezifizierte Ergebnistyp im Parameter `resultType` entweder ist:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist nur der erste gefundene Knoten, der dem XPath-Ausdruck entsprochen hat. Dieser kann über die Eigenschaft `singleNodeValue` des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn das Knoten-Set leer ist.

Beachten Sie, dass das Einzelknoten, das für den ungeordneten Subtyp zurückgegeben wird, möglicherweise nicht der erste in der Dokumentreihenfolge ist, aber für den geordneten Subtyp erhalten Sie garantiert den ersten übereinstimmenden Knoten in der Dokumentreihenfolge.

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

Wenn der Ergebnistyp im `resultType`-Parameter als `ANY_TYPE` spezifiziert ist, wird das zurückgegebene `XPathResult`-Objekt der Typ sein, der natürlich aus der Auswertung des Ausdrucks resultiert.

Es könnte einer der einfachen Typen sein (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`), **aber**, wenn der zurückgegebene Ergebnistyp ein Knoten-Set ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach der Evaluierung festzustellen, verwenden wir die Eigenschaft `resultType` des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_definierte_konstanten)-Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in ein beliebiges JavaScript-Fragment innerhalb oder verbunden mit dem HTML-Dokument eingefügt werden, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>`-Überschriftselemente in einem HTML-Dokument mithilfe von XPath zu extrahieren, ist `xpathExpression` `"//h2"`. Dabei ist `//` der rekursive Abstiegsoperator, der Elemente mit dem nodeName `h2` überall im Dokumentbaum abgleicht. Der vollständige Code hierfür ist: Link zu einführendem XPath-Dokument

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

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir den Typ des zurückgegebenen Ergebnisses wissen möchten, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird es auf `4`, einen `UNORDERED_NODE_ITERATOR_TYPE` auswerten. Dies ist der Standardrückgabetyp, wenn das Ergebnis des XPath-Ausdrucks ein Knoten-Set ist. Es bietet den Zugriff auf ein einzelnes Knoten auf einmal und könnte die Knoten nicht in einer bestimmten Reihenfolge zurückgeben. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die `iterateNext()`-Methode des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle Standard- DOM-Schnittstellen auf diesem Knoten. Nachdem wir alle aus unserem Ausdruck zurückgegebenen `h2`-Elemente durchlaufen haben, geben weitere Aufrufe von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines benutzerdefinierten Namespace-Resolvers

Dies ist ein Beispiel zur Veranschaulichung. Diese Funktion muss Namespace-Präfixe aus dem `xpathExpression` übernehmen und die URI zurückgeben, die dem Präfix entspricht. Zum Beispiel der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wird alle [MathML](/de/docs/Web/MathML)-Ausdrücke auswählen, die Kinder von (X)HTML-Tabellenzelldatenelementen sind.

Um das `mathml:`-Präfix mit der Namensraum-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit der URI `http://www.w3.org/1999/xhtml` zu assoziieren, bieten wir eine Funktion an:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Unser Aufruf von `document.evaluate` würde dann so aussehen:

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### Implementierung eines Standard-Namensraums für XML-Dokumente

Wie zuvor im Abschnitt [Implementierung eines Standard-Namensraum-Resolvers](#implementierung_eines_standard-namensraum-resolvers) angemerkt, behandelt der Standard-Resolver nicht den Standard-Namespace für XML-Dokumente. Zum Beispiel mit diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` wird ein leeres Set zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Auch die Übergabe eines `null` Resolvers funktioniert nicht besser.

Ein möglicher Workaround ist die Erstellung eines benutzerdefinierten Resolvers, der den korrekten Standard-Namensraum zurückgibt (in diesem Fall den Atom-Namensraum). Beachten Sie, dass Sie immer noch ein Namensraum-Präfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolver-Funktion es in Ihren erforderlichen Namespace ändern kann. Zum Beispiel:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich ist, wenn das Dokument mehrere Namespaces verwendet.

Ein Ansatz, der möglicherweise besser funktioniert (und es ermöglicht, dass Namespaces nicht im Voraus bekannt sind), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen zum Referenzieren von Elementen mit einem Standard-Namespace

Ein weiterer Ansatz zum Abgleichen von Standardelementen in einem nicht-null-Namensraum (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namespaces möglicherweise nicht bekannt sind), beinhaltet den Verweis auf ein bestimmtes Element mit einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']`. Dies umgeht das Problem, dass eine XPath-Abfrage den Standard-Namensraum auf einem regulär gekennzeichneten Element nicht erkennen kann.

### Spezifische Namespaces für Elemente und Attribute unabhängig vom Präfix erhalten

Wenn man Flexibilität in Namespaces (wie sie vorgesehen sind) bieten möchte, indem man nicht unbedingt verlangt, dass ein bestimmtes Präfix verwendet wird, um ein namespaciertes Element oder Attribut zu finden, muss man spezielle Techniken verwenden.

Während man den Ansatz im obigen Abschnitt anpassen kann, um Elemente unabhängig von dem gewählten Präfix zu testen (indem man [`local-name()`](/de/docs/Web/XPath/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XPath/Functions/namespace-uri) statt [`name()`](/de/docs/Web/XPath/Functions/name) verwendet), entsteht jedoch eine herausforderndere Situation, wenn man ein Element mit einem speziellen namespacierten Attribut in einem Prädikat erhalten möchte (angesichts der Abwesenheit von implementierungsunabhängigen Variablen in XPath 1.0).

Zum Beispiel könnte man (fälschlicherweise) versuchen, ein Element mit einem namespacierten Attribut wie folgt zu erhalten: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente erfassen, wenn eines seiner Attribute mit einem lokalen Namen `href` existierte, es aber ein anderes Attribut war, das den gezielten (XLink) Namespace hatte (statt [`@href`](/de/docs/Web/XPath/Axes#attribute)).

Um Elemente mit dem XLink `@href`-Attribut genau zu erfassen (ohne auch auf vordefinierte Präfixe in einem Namensraum-Resolver beschränkt zu sein), könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### XPathResult Definierte Konstanten

| Definierte Konstante des Ergebnistyps | Wert | Beschreibung                                                                                                                                                                                                                   |
| ------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ANY_TYPE                              | 0    | Ein Ergebnissatz, der den Typ enthält, der natürlich aus der Evaluierung des Ausdrucks resultiert. Beachten Sie, dass, wenn das Ergebnis ein Knoten-Set ist, der UNORDERED_NODE_ITERATOR_TYPE immer der resultierende Typ ist. |
| NUMBER_TYPE                           | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich, zum Beispiel, in einem XPath-Ausdruck, der die `count()`-Funktion verwendet.                                                                                  |
| STRING_TYPE                           | 2    | Ein Ergebnis, das einen einzelnen String enthält.                                                                                                                                                                              |
| BOOLEAN_TYPE                          | 3    | Ein Ergebnis, das einen einzelnen Boolean-Wert enthält. Dies ist nützlich, zum Beispiel, in einem XPath-Ausdruck, der die `not()`-Funktion verwendet.                                                                          |
| UNORDERED_NODE_ITERATOR_TYPE          | 4    | Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht notwendigerweise in derselben Reihenfolge wie im Dokument erscheinen.                                                  |
| ORDERED_NODE_ITERATOR_TYPE            | 5    | Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnissatz sind in derselben Reihenfolge, wie sie im Dokument erscheinen.                                                      |
| UNORDERED_NODE_SNAPSHOT_TYPE          | 6    | Ein Ergebnis-Knoten-Set, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht notwendigerweise in derselben Reihenfolge wie im Dokument erscheinen.                                       |
| ORDERED_NODE_SNAPSHOT_TYPE            | 7    | Ein Ergebnis-Knoten-Set, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnissatz sind in derselben Reihenfolge, wie sie im Dokument erscheinen.                                           |
| ANY_UNORDERED_NODE_TYPE               | 8    | Ein Ergebnis-Knoten-Set, das einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht notwendigerweise der erste Knoten im Dokument, der dem Ausdruck entspricht.                          |
| FIRST_ORDERED_NODE_TYPE               | 9    | Ein Ergebnis-Knoten-Set, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.                                                                                                                               |

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Informationen zum Originaldokument

- Basierend auf einem Originaldokument von James Graham.
- Weitere Mitwirkende: James Thompson.
