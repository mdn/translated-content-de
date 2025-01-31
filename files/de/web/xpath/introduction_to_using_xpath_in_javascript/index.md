---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XPath) in JavaScript. Die Hauptschnittstelle zur Verwendung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate)-Funktion des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode wertet [XPath](/de/docs/Web/XPath)-Ausdrücke gegen ein auf {{Glossary("XML", "XML")}} basierendes Dokument aus (einschließlich HTML-Dokumente) und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das ein einzelner Knoten oder eine Menge von Knoten sein kann. Die bestehende Dokumentation zu dieser Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist jedoch für unsere derzeitigen Bedürfnisse etwas spärlich; eine umfassendere Untersuchung wird im Folgenden gegeben.

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

- `xpathExpression`: Ein String, der den auszuwertenden XPath-Ausdruck enthält.
- `contextNode`: Ein Knoten im Dokument, gegen den `xpathExpression` ausgewertet werden soll, einschließlich aller seiner untergeordneten Knoten. Der [document](/de/docs/Web/API/Document)-Knoten ist der am häufigsten verwendete.
- `namespaceResolver`: Eine Funktion, die alle in `xpathExpression` enthaltenen Namensraumpräfixe übermittelt erhält und eine Zeichenkette zurückgibt, die den mit diesem Präfix verbundenen Namensraum-URI darstellt. Dies ermöglicht die Umwandlung zwischen den in den XPath-Ausdrücken verwendeten Präfixen und den möglicherweise unterschiedlichen Präfixen, die im Dokument verwendet werden. Die Funktion kann sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bereitstellt, die das Namensraumpräfix auflöst.
  - `null`, welches für HTML-Dokumente oder wenn keine Namensraumpräfixe verwendet werden, verwendet werden kann. Beachten Sie, dass, wenn `xpathExpression` ein Namensraumpräfix enthält, dies zu einer `DOMException` mit dem Code `NAMESPACE_ERR` führt.
  - Eine benutzerdefinierte Funktion. Siehe den Abschnitt [Verwendung eines benutzerdefinierten Namensraum-Resolvers](#implementierung_eines_benutzerdefinierten_namensraum-resolvers) im Anhang für Details.

- `resultType`: Eine [Konstante](#xpathresult_definierte_konstanten), die den gewünschten Ergebnistyp spezifiziert, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als den natürlichsten Typ zurückgibt. Im Anhang finden Sie eine vollständige Liste der [verfügbaren Konstanten](#xpathresult_definierte_konstanten). Diese werden im Abschnitt "[Rückgabetyp spezifizieren](#rückgabetyp_spezifizieren)" weiter unten erklärt.
- `result`: Wenn ein vorhandenes `XPathResult`-Objekt angegeben ist, wird es wiederverwendet, um die Ergebnisse zurückzugeben. Die Angabe von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt `xpathResult` zurück, das ein `XPathResult`-Objekt des im `resultType`-Parameter [spezifizierten](#rückgabetyp_spezifizieren) Typs ist. Die `XPathResult`-Schnittstelle ist [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namensraum-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namensraum-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate`, die als `namespaceResolver`-Parameter die Variable `nsResolver`.

Hinweis: XPath definiert QNames ohne Präfix, um nur Elemente im Null-Namensraum zu finden. Es gibt keine Möglichkeit in XPath, den Standardnamensraum wie auf ein reguläres Element-Referenz (z.B. `p[@id='_my-id']` für `xmlns='http://www.w3.org/1999/xhtml'`) anzuwenden. Um Standardelemente in einem nicht-Null-Namensraum zu finden, müssen Sie entweder ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` ([diese Methodik](#verwendung_von_xpath-funktionen,_um_auf_elemente_mit_einem_standard-namensraum_zu_verweisen) funktioniert gut für dynamische XPath's, in denen die Namensräume möglicherweise nicht bekannt sind) oder verwenden Sie Namenspräfixtests und erstellen Sie einen Namensraum-Resolver, der das Präfix auf den Namensraum abbildet. Lesen Sie mehr darüber, [wie Sie einen benutzerdefinierten Namensraum-Resolver erstellen](#implementierung_eines_benutzerdefinierten_namensraum-resolvers), wenn Sie den letzteren Ansatz verfolgen möchten.

## Beschreibung

Passt jeden DOM-Knoten so an, dass Namensräume aufgelöst werden können, sodass ein [XPath](/de/docs/Web/XPath)-Ausdruck einfach relativ zu dem Kontext, in dem er im Dokument auftaucht, ausgewertet werden kann. Dieser Adapter funktioniert wie die DOM-Level-3-Methode `lookupNamespaceURI` für Knoten zur Auflösung des `namespaceURI` aus einem gegebenen Präfix unter Verwendung der aktuellen Informationen, die in der Hierarchie des Knotens verfügbar sind, zu dem Zeitpunkt, an dem `lookupNamespaceURI` aufgerufen wird. Löst auch das implizite `xml`-Präfix korrekt auf.

### Rückgabetyp spezifizieren

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([Knotenmengen-Typen](#knotenmengen-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnistyp in `resultType` wie folgt spezifiziert ist:

- `NUMBER_TYPE` - ein double
- `STRING_TYPE` - ein string
- `BOOLEAN_TYPE` - ein boolean

Erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts respektive zugreifen.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Das folgende Beispiel verwendet den XPath-Ausdruck [`count(//p)`](/de/docs/Web/XPath/Functions/count), um die Anzahl der `<p>`-Elemente in einem HTML-Dokument zu erhalten:

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

Obwohl JavaScript uns erlaubt, die Zahl für die Anzeige in einen String zu konvertieren, wird die XPath-Schnittstelle das numerische Ergebnis nicht automatisch konvertieren, wenn die Eigenschaft `stringValue` abgefragt wird, daher wird der folgende Code **nicht** funktionieren:

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

#### Knotenmengen-Typen

Das `XPathResult`-Objekt erlaubt es, Knotenmengen in 3 hauptsächlichen Typen zurückzugeben:

- [Iteratoren](#iteratoren)
- [Schnappschüsse](#schnappschüsse)
- [Erste Knoten](#erster_knoten)

##### Iteratoren

Wenn der angegebene Ergebnistyp im `resultType`-Parameter entweder ist:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist eine Knotenmengen von übereinstimmenden Knoten, die wie ein Iterator fungieren, sodass wir mit der `iterateNext()`-Methode des `XPathResult`-Objekts auf die Einzelknoten zugreifen können.

Wenn wir über alle einzeln übereinstimmenden Knoten iteriert haben, wird `iterateNext()` `null` zurückgeben.

Beachten Sie jedoch, dass sich, wenn das Dokument verändert wird (der Dokumentbaum geändert wird) zwischen den Iterationen, die Iteration ungültig wird und die `invalidIteratorState`-Eigenschaft von `XPathResult` auf `true` gesetzt ist und eine `NS_ERROR_DOM_INVALID_STATE_ERR` Ausnahme geworfen wird.

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

##### Schnappschüsse

Wenn der angegebene Ergebnistyp im `resultType`-Parameter entweder ist:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist eine statische Knotenmengen von übereinstimmenden Knoten, die es uns erlaubt, auf jeden Knoten durch die `snapshotItem(itemNumber)`-Methode des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann über die `snapshotLength`-Eigenschaft abgerufen werden.

Schnappschüsse ändern sich nicht bei Dokumentmutation, sodass, im Gegensatz zu den Iteratoren, der Schnappschuss nicht ungültig wird, jedoch möglicherweise nicht mit dem aktuellen Dokument übereinstimmt, zum Beispiel könnten die Knoten bewegt worden sein, es könnten Knoten enthalten sein, die nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

Wenn der angegebene Ergebnistyp im `resultType`-Parameter entweder ist:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist nur der erste gefundene Knoten, der mit dem XPath-Ausdruck übereinstimmt. Dieser kann durch die `singleNodeValue`-Eigenschaft des `XPathResult`-Objekts abgerufen werden. Dies wird `null` sein, wenn die Knotenmengen leer ist.

Beachten Sie, dass bei der ungeordneten Unterart der einzelne zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentreihenfolge ist, aber bei der geordneten Unterart erhalten Sie garantiert den ersten übereinstimmenden Knoten in der Dokumentreihenfolge.

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

Wenn der Ergebnistyp im `resultType`-Parameter als `ANY_TYPE` spezifiziert ist, wird das zurückgegebene `XPathResult`-Objekt der Typ der Auswertung des Ausdrucks sein.

Es könnte einer der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) sein, **jedoch**, wenn der zurückgegebene Ergebnistyp eine Knotenmenge ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um den Typ nach der Auswertung zu bestimmen, verwenden wir die `resultType`-Eigenschaft des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_definierte_konstanten) Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in ein beliebiges JavaScript-Fragment innerhalb des HTML-Dokuments platziert werden, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>`-Überschriftselemente in einem HTML-Dokument mithilfe von XPath zu extrahieren, ist der `xpathExpression` `"//h2"`. Dabei ist `//` der rekursive Abwärtstraversierungs-Operator, der Elemente mit dem nodeName `h2` überall im Dokumentbaum abgleicht. Der vollständige Code dafür ist: link to introductory xpath doc

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Beachten Sie, da HTML keine Namensräume hat, haben wir `null` für den `namespaceResolver`-Parameter übergeben.

Da wir das gesamte Dokument nach den Überschriften durchsuchen möchten, haben wir das [document](/de/docs/Web/API/Document)-Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir den Typ des zurückgegebenen Ergebnisses wissen möchten, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird sie auf `4`, einen `UNORDERED_NODE_ITERATOR_TYPE`, ausgewertet. Dies ist der Standard-Rückgabetyp, wenn das Ergebnis des XPath-Ausdrucks eine Knotenmengen ist. Es ermöglicht den Zugriff auf einen Knoten gleichzeitig und kann möglicherweise Knoten in keiner bestimmten Reihenfolge zurückgeben. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die `iterateNext()`-Methode des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle Standard-DOM-Schnittstellen auf diesem Knoten. Nachdem wir durch alle `h2`-Elemente, die unser Ausdruck zurückgegeben hat, iteriert sind, wird jeder weitere Aufruf von `iterateNext()` `null` zurückgeben.

## Anhang

### Implementierung eines benutzerdefinierten Namensraum-Resolvers

Dies ist ein Beispiel zur Veranschaulichung. Diese Funktion muss Namensraumpräfixe aus dem `xpathExpression` nehmen und den URI zurückgeben, der diesem Präfix entspricht. Zum Beispiel der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wird alle [MathML](/de/docs/Web/MathML)-Ausdrücke auswählen, die Kinder von (X)HTML-Tabellendatenelementen sind.

Um das `mathml:`-Präfix mit dem Namensraum-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit dem URI `http://www.w3.org/1999/xhtml` zu verknüpfen, bieten wir eine Funktion an:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Unsere Aufruf zu `document.evaluate` würde dann so aussehen:

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### Implementierung eines Standardnamensraums für XML-Dokumente

Wie zuvor im Abschnitt [Implementierung eines Standard-Namensraum-Resolvers](#implementierung_eines_standard-namensraum-resolvers) erwähnt, behandelt der Standard-Resolver nicht den Standard-Namensraum für XML-Dokumente. Beispielsweise mit diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

wird `doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` eine leere Menge zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Das Übergeben eines `null`-Resolvers funktioniert auch nicht besser.

Eine mögliche Umgehungslösung ist das Erstellen eines benutzerdefinierten Resolvers, der den korrekten Standard-Namensraum (hier den Atom-Namensraum) zurückgibt. Beachten Sie, dass Sie immer noch irgendein Namensraumpräfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolver-Funktion es in Ihren erforderlichen Namensraum ändern kann. Z.B.:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich sein wird, wenn das Dokument mehrere Namensräume verwendet.

Ein Ansatz, der möglicherweise besser funktioniert (und es erlaubt, dass die Namensräume nicht im Voraus bekannt sein müssen), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen, um auf Elemente mit einem Standard-Namensraum zu verweisen

Ein weiterer Ansatz, um Standardelemente in einem nicht-Null-Namensraum zu finden (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namensräume möglicherweise nicht bekannt sind), beinhaltet das Verweisen auf ein bestimmtes Element mit einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']`. Dies umgeht das Problem, dass eine XPath-Abfrage nicht in der Lage ist, den Standard-Namensraum auf ein regelmäßig benanntes Element zu erkennen.

### Spezifische namespaced Elemente und Attribute unabhängig vom Präfix abrufen

Wenn man Flexibilität in Namensräumen bieten möchte (wie sie beabsichtigt sind), indem man nicht zwingend ein bestimmtes Präfix erfordert, um ein namespaced Element oder Attribut zu finden, müssen spezielle Techniken verwendet werden.

Während man den Ansatz im obigen Abschnitt anpassen kann, um nach namespaced Elementen unabhängig von dem gewählten Präfix zu testen (unter Verwendung von [`local-name()`](/de/docs/Web/XPath/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XPath/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XPath/Functions/name)), tritt eine schwierigere Situation auf, wenn man ein Element mit einem bestimmten namespaced Attribut in einem Prädikat erfassen möchte (aufgrund des Fehlens von implementierungsunabhängigen Variablen in XPath 1.0).

Zum Beispiel könnte man (fälschlicherweise) versuchen, ein Element mit einem namespaced Attribut wie folgt zu erfassen: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente erfassen, wenn eines seiner Attribute existiert, das einen lokalen Namen von `href` hatte, aber es war ein anderes Attribut, das den angezielten (XLink) Namensraum hatte (anstelle von [`@href`](/de/docs/Web/XPath/Axes#attribute)).

Um Elemente mit dem XLink `@href`-Attribut genau zu erfassen (ohne auch auf vordefinierte Präfixe in einem Namensraum-Resolver beschränkt zu sein), könnte man sie wie folgt abrufen:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### XPathResult Definierte Konstanten

| Ergebnis Typ Definierte Konstante | Wert | Beschreibung                                                                                                                                                                                                                   |
| --------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ANY_TYPE                          | 0    | Eine Ergebnismenge, die den Typ enthält, der sich natürlich aus der Auswertung des Ausdrucks ergibt. Beachten Sie, dass, wenn das Ergebnis eine Knotenmengen ist, dann immer UNORDERED_NODE_ITERATOR_TYPE der Ergebnistyp ist. |
| NUMBER_TYPE                       | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich zum Beispiel in einem XPath-Ausdruck, der die Funktion `count()` verwendet.                                                                                    |
| STRING_TYPE                       | 2    | Ein Ergebnis, das einen einzelnen String enthält.                                                                                                                                                                              |
| BOOLEAN_TYPE                      | 3    | Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist nützlich zum Beispiel in einem XPath-Ausdruck, der die Funktion `not()` verwendet.                                                                         |
| UNORDERED_NODE_ITERATOR_TYPE      | 4    | Eine Knotenmenge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht in der gleichen Reihenfolge, wie sie im Dokument erscheinen.                                              |
| ORDERED_NODE_ITERATOR_TYPE        | 5    | Eine Knotenmenge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind in der gleichen Reihenfolge, wie sie im Dokument erscheinen.                                              |
| UNORDERED_NODE_SNAPSHOT_TYPE      | 6    | Eine Knotenmenge, die Schnappschüsse aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht in der gleichen Reihenfolge, wie sie im Dokument erscheinen.                              |
| ORDERED_NODE_SNAPSHOT_TYPE        | 7    | Eine Knotenmenge, die Schnappschüsse aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind in der gleichen Reihenfolge, wie sie im Dokument erscheinen.                              |
| ANY_UNORDERED_NODE_TYPE           | 8    | Eine Knotenmenge, die einen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der Knoten ist möglicherweise nicht der erste im Dokument, der mit dem Ausdruck übereinstimmt.                                       |
| FIRST_ORDERED_NODE_TYPE           | 9    | Eine Knotenmenge, die den ersten Knoten im Dokument enthält, der mit dem Ausdruck übereinstimmt.                                                                                                                               |

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Originaldokumentinformationen

- Basierend auf einem Originaldokument von James Graham.
- Weitere Mitwirkende: James Thompson.
