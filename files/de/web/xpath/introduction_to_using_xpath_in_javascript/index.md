---
title: Einführung in die Nutzung von XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: a9d8c917cb786f2143efc5e1df8b721b4d8fac97
---

{{XsltSidebar}}

Dieses Dokument beschreibt die Schnittstelle zur Nutzung von [XPath](/de/docs/Web/XPath) in JavaScript. Die Hauptschnittstelle für die Nutzung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate)-Funktion des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode evaluiert [XPath](/de/docs/Web/XPath)-Ausdrücke gegen ein {{Glossary("XML", "XML")}}-basiertes Dokument (einschließlich HTML-Dokumente) und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das ein einzelner Knoten oder eine Menge von Knoten sein kann. Die bestehende Dokumentation für diese Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist aber momentan recht spärlich für unsere Bedürfnisse; weiter unten wird eine umfassendere Untersuchung gegeben.

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
- `contextNode`: Ein Knoten im Dokument, gegen den der `xpathExpression` ausgewertet werden soll, einschließlich aller seiner Kindknoten. Der [document](/de/docs/Web/API/Document)-Knoten ist der am häufigsten verwendete.
- `namespaceResolver`: Eine Funktion, die etwaige Namensraum-Präfixe innerhalb von `xpathExpression` entgegennimmt und einen String zurückgibt, der den Namensraum-URI darstellt, der diesem Präfix zugeordnet ist. Dies ermöglicht die Konvertierung zwischen den Präfixen, die in den XPath-Ausdrücken verwendet werden, und den möglicherweise unterschiedlichen Präfixen, die im Dokument verwendet werden. Die Funktion kann entweder sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bereitstellt, die das Namensraum-Präfix auflöst.
  - `null`, das für HTML-Dokumente verwendet werden kann oder wenn keine Namensraum-Präfixe verwendet werden. Beachten Sie, dass, wenn der `xpathExpression` ein Namensraum-Präfix enthält, dies zu einem `DOMException` mit dem Code `NAMESPACE_ERR` führt.
  - Eine benutzerdefinierte Funktion. Details finden Sie im Abschnitt [Benutzerdefinierter Namensraum-Resolver verwenden](#implementierung_eines_benutzerdefinierten_namensraum-resolvers) im Anhang.

- `resultType`: Eine [Konstante](#konstanten_definiert_durch_xpathresult), die den gewünschten Ergebnistyp angibt, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als den natürlichsten Typ zurückgibt. Es gibt einen Abschnitt im Anhang, der eine vollständige Liste der [verfügbaren Konstanten](#konstanten_definiert_durch_xpathresult) enthält. Diese werden im Abschnitt "[Festlegung des Rückgabetyps](#festlegung_des_rückgabetyps)" weiter unten erklärt.
- `result`: Wenn ein bestehendes `XPathResult`-Objekt angegeben ist, wird es wiederverwendet, um die Ergebnisse zurückzugeben. Die Angabe von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt `xpathResult` zurück, was ein `XPathResult`-Objekt des Typs ist, der im `resultType`-Parameter [spezifiziert](#festlegung_des_rückgabetyps) wurde. Die `XPathResult`-Schnittstelle ist [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namensraum-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namensraum-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate`, die `nsResolver`-Variable als `namespaceResolver`-Parameter.

> [!NOTE]
> XPath definiert QNames ohne ein Präfix so, dass nur Elemente im Null-Namensraum übereinstimmen. Es gibt keine Möglichkeit in XPath, den Standard-Namensraum aufzuheben, wie er auf eine reguläre Elementreferenz angewendet wird (z.B. `p[@id='_my-id']` für `xmlns='http://www.w3.org/1999/xhtml'`). Um Standard-Elemente in einem nicht-null Namensraum zu matchen, müssen Sie entweder auf ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` ([diese Vorgehensweise](#verwendung_von_xpath-funktionen_zum_verweisen_auf_elemente_mit_einem_standard-namensraum) funktioniert gut für dynamische XPath-Ausdrücke, bei denen die Namensräume möglicherweise nicht bekannt sind) verweisen oder verwenden Sie prefixed name tests und ein Namensraum-Resolver, der das Präfix dem Namensraum zuordnet. Lesen Sie mehr darüber, [wie Sie einen benutzerdefinierten Namensraum-Resolver erstellen](#implementierung_eines_benutzerdefinierten_namensraum-resolvers), wenn Sie den letzteren Ansatz verfolgen möchten.

## Beschreibung

Adaptiert jeden DOM-Knoten, um Namensräume aufzulösen, sodass ein [XPath](/de/docs/Web/XPath)-Ausdruck einfach relativ zu dem Knoten ausgewertet werden kann, bei dem er innerhalb des Dokuments erschien. Dieser Adapter funktioniert wie die DOM-Level-3-Methode `lookupNamespaceURI` auf Knoten, um das `namespaceURI` von einem gegebenen Präfix mit den zum Zeitpunkt des Aufrufs von `lookupNamespaceURI` in der Knotenhierachie verfügbaren Informationen aufzulösen. Es löst auch das implizite `xml`-Präfix korrekt auf.

### Festlegung des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([node-set types](#node-set-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnistyp in `resultType` wie folgt angegeben ist:

- `NUMBER_TYPE` - eine Doppelzahl
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein Boolean

Erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen.

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

Obwohl JavaScript es erlaubt, die Zahl zur Anzeige in einen String zu konvertieren, wird die XPath-Schnittstelle das numerische Ergebnis nicht automatisch konvertieren, wenn die `stringValue`-Eigenschaft abgefragt wird, so dass der folgende Code **nicht** funktioniert:

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

Stattdessen wird eine Ausnahme mit dem Code `NS_DOM_TYPE_ERROR` ausgegeben.

#### Node-Set-Typen

Das `XPathResult`-Objekt ermöglicht es, Node-Sets in drei prinzipiell unterschiedlichen Typen zurückzugeben:

- [Iteratoren](#iteratoren)
- [Snapshots](#snapshots)
- [Erster Knoten](#erster_knoten)

##### Iteratoren

Wenn der angegebene Ergebnistyp im `resultType`-Parameter entweder ist:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein Knoten-Set von übereinstimmenden Knoten, das sich als Iterator verhält und uns erlaubt, auf die einzelnen enthaltenen Knoten durch die Verwendung der Methode `iterateNext()` des `XPathResult`-Objekts zuzugreifen.

Nachdem wir über alle einzelnen übereinstimmenden Knoten iteriert haben, gibt `iterateNext()` `null` zurück.

Beachten Sie jedoch, dass wenn das Dokument verändert wird (der Dokumentbaum wird geändert) zwischen den Iterationen, dies die Iteration ungültig macht und die `invalidIteratorState`-Eigenschaft des `XPathResult` auf `true` gesetzt wird, und eine `NS_ERROR_DOM_INVALID_STATE_ERR`-Ausnahme geworfen wird.

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

Wenn der angegebene Ergebnistyp im `resultType`-Parameter entweder ist:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein statisches Knoten-Set von übereinstimmenden Knoten, das uns erlaubt, auf jeden Knoten durch die Methode `snapshotItem(itemNumber)` des `XPathResult`-Objekts zuzugreifen, wo `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann durch die `snapshotLength`-Eigenschaft abgerufen werden.

Snapshots ändern sich nicht mit Dokumentmutationen, so dass im Gegensatz zu den Iteratoren, das Snapshot nicht ungültig wird, aber es möglicherweise nicht mit dem aktuellen Dokument übereinstimmt, beispielsweise könnten die Knoten verschoben worden sein, es könnten Knoten enthalten sein, die nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

Wenn der angegebene Ergebnistyp im `resultType` Parameter entweder ist:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

Das `XPathResult`-Objekt, das zurückgegeben wird, ist nur der erste gefundene Knoten, der mit dem XPath-Ausdruck übereinstimmt. Dies kann über die `singleNodeValue`-Eigenschaft des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn das Knotenset leer ist.

Beachten Sie, dass für den ungeordneten Subtyp der einzelne zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentreihenfolge ist, aber für den geordneten Subtyp garantiert ist, dass Sie den ersten übereinstimmenden Knoten in der Dokumentreihenfolge erhalten.

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

Wenn der Ergebnistyp im `resultType`-Parameter als `ANY_TYPE` angegeben ist, das zurückgegebene `XPathResult`-Objekt wird jeder Typ sein, der sich natürlich aus der Auswertung des Ausdrucks ergibt.

Es könnte einer der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) sein, **aber**, wenn der zurückgegebene Ergebnistyp ein Knotenset ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach der Auswertung zu bestimmen, verwenden wir die `resultType`-Eigenschaft des `XPathResult`-Objekts. Die [Konstantenwerte](#konstanten_definiert_durch_xpathresult) dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in einem JavaScript-Fragment innerhalb eines HTML-Dokuments platziert werden, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>`-Überschriftselemente in einem HTML-Dokument mit XPath zu extrahieren, ist der `xpathExpression` `"//h2"`. Hierbei ist `//` der rekursive Abstiegsoperator, der Elemente mit dem nodeName `h2` überall im Dokumentbaum abgleicht. Der vollständige Code dafür ist: link to introductory xpath doc

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Beachten Sie, dass wir `null` für den `namespaceResolver`-Parameter übergeben haben, da HTML keine Namensräume hat.

Da wir im gesamten Dokument nach den Überschriften suchen möchten, haben wir das [document](/de/docs/Web/API/Document)-Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir wissen möchten, welchen Typ von Ergebnis wir erhalten haben, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird dies auf `4`, ein `UNORDERED_NODE_ITERATOR_TYPE`. Dies ist der Standardrückgabetyp, wenn das Ergebnis des XPath-Ausdrucks ein Knoten-Set ist. Es ermöglicht den Zugriff auf einen einzelnen Knoten zu einer Zeit und kann die Knoten möglicherweise nicht in einer bestimmten Reihenfolge zurückgeben. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die `iterateNext()`-Methode des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle Standard-DOM-Schnittstellen auf diesem Knoten. Nach dem Durchlaufen aller `h2`-Elemente, die von unserem Ausdruck zurückgegeben wurden, gibt jeder weitere Aufruf von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines benutzerdefinierten Namensraum-Resolvers

Dies ist ein Beispiel zu Veranschaulichungszwecken. Diese Funktion muss Namensraum-Präfixe aus dem `xpathExpression` entgegennehmen und den URI zurückgeben, der diesem Präfix entspricht. Zum Beispiel der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wird alle [MathML](/de/docs/Web/MathML)-Ausdrücke auswählen, die Kinder von (X)HTML-Tabellen-Datenzellen-Elementen sind.

Um das `mathml:`-Präfix mit dem Namensraum-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit dem URI `http://www.w3.org/1999/xhtml` zu verknüpfen, stellen wir eine Funktion bereit:

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

### Implementierung eines Standard-Namensraums für XML-Dokumente

Wie zuvor im Abschnitt [Implementierung eines Standard-Namensraum-Resolvers](#implementierung_eines_standard-namensraum-resolvers) erwähnt, verarbeitet der Standard-Resolver den Standard-Namensraum für XML-Dokumente nicht. Zum Beispiel bei diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` wird ein leeres Set zurückgeben, wobei `nsResolver` jeder `Node` sein kann. Die Übertragung eines `null`-Resolvers funktioniert auch nicht besser.

Ein möglicher Workaround besteht darin, einen benutzerdefinierten Resolver zu erstellen, der den korrekten Standard-Namensraum (in diesem Fall den Atom-Namensraum) zurückgibt. Beachten Sie, dass Sie dennoch ein Namensraum-Präfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolver-Funktion es in Ihren benötigten Namensraum ändern kann. Z.B.:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich ist, wenn das Dokument mehrere Namensräume verwendet.

Ein Ansatz, der besser funktionieren könnte (und es erlauben würde, dass die Namensräume nicht im Voraus bekannt sind), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen zum Verweisen auf Elemente mit einem Standard-Namensraum

Ein anderer Ansatz, um Standard-Elemente in einem nicht-null Namensraum zu matchen (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namensräume möglicherweise nicht bekannt sind), besteht darin, auf ein bestimmtes Element unter Verwendung einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` zu verweisen. Dies umgeht das Problem, dass eine XPath-Abfrage den Standard-Namensraum auf einem regulär benannten Element nicht erkennen kann.

### Speziell benannte Elemente und Attribute unabhängig vom Präfix erhalten

Wenn Sie Flexibilität in den Namensräumen bereitstellen möchten (wie vorgesehen), indem nicht zwingend ein bestimmtes Präfix verwendet wird, um ein benanntes Element oder Attribut zu finden, müssen spezielle Techniken verwendet werden.

Während eine Anpassung des Ansatzes im obigen Abschnitt, um auf Namensraum-Elemente unabhängig vom gewählten Präfix zu testen (unter Verwendung von [`local-name()`](/de/docs/Web/XPath/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XPath/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XPath/Functions/name)) vorgenommen werden kann, tritt eine schwierigere Situation auf, wenn man ein Element mit einem bestimmten Namensraum-Attribut in einem Prädikat (aufgrund des Fehlens implementierungsunabhängiger Variablen in XPath 1.0) erfassen möchte.

Zum Beispiel könnte man (fälschlicherweise) versuchen, ein Element mit einem Namensraum-Attribut wie folgt zu erfassen: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente erfassen, wenn eines seiner Attribute existierte, das einen lokalen Namen von `href` hatte, es sich jedoch um ein anderes Attribut handelte, das den Zielnamensraum (XLink) hatte (anstelle von [`@href`](/de/docs/Web/XPath/Axes#attribute)).

Um genau Elemente mit dem XLink-`@href`-Attribut zu erfassen (ohne auch an vordefinierte Präfixe in einem Namensraum-Resolver gebunden zu sein), könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### Konstanten definiert durch XPathResult

| Definierte Konstante des Resultattyps | Wert | Beschreibung                                                                                                                                                                                                                  |
| ------------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                              | 0    | Eine Ergebnismenge, die den Typ enthält, der sich natürlich aus der Bewertung des Ausdrucks ergibt. Beachten Sie, dass wenn das Ergebnis ein Knotenset ist, der UNORDERED_NODE_ITERATOR_TYPE immer der resultierende Typ ist. |
| NUMBER_TYPE                           | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich beispielsweise in einem XPath-Ausdruck, der die `count()`-Funktion verwendet.                                                                                 |
| STRING_TYPE                           | 2    | Ein Ergebnis, das einen einzelnen String enthält.                                                                                                                                                                             |
| BOOLEAN_TYPE                          | 3    | Ein Ergebnis, das einen einzelnen booleschen Wert enthält. Dies ist nützlich beispielsweise in einem XPath-Ausdruck, der die `not()`-Funktion verwendet.                                                                      |
| UNORDERED_NODE_ITERATOR_TYPE          | 4    | Ein Ergebnisknoten-Set, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht unbedingt in der Reihenfolge, in der sie im Dokument erscheinen.                                   |
| ORDERED_NODE_ITERATOR_TYPE            | 5    | Ein Ergebnisknoten-Set, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten im Ergebnis-Set sind in der Reihenfolge, in der sie im Dokument erscheinen.                                                  |
| UNORDERED_NODE_SNAPSHOT_TYPE          | 6    | Ein Ergebnisknoten-Set, das Momentaufnahmen aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten sind möglicherweise nicht unbedingt in der Reihenfolge, in der sie im Dokument erscheinen.                  |
| ORDERED_NODE_SNAPSHOT_TYPE            | 7    | Ein Ergebnisknoten-Set, das Momentaufnahmen aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten im Ergebnis-Set sind in der Reihenfolge, in der sie im Dokument erscheinen.                                 |
| ANY_UNORDERED_NODE_TYPE               | 8    | Ein Ergebnisknoten-Set, das einen beliebigen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der Knoten ist möglicherweise nicht der erste Knoten im Dokument, der mit dem Ausdruck übereinstimmt.              |
| FIRST_ORDERED_NODE_TYPE               | 9    | Ein Ergebnisknoten-Set, das den ersten Knoten im Dokument enthält, der mit dem Ausdruck übereinstimmt.                                                                                                                        |

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) von _[Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Informationen zum Originaldokument

- Basierend auf einem Originaldokument von James Graham.
- Weitere Mitwirkende: James Thompson.
