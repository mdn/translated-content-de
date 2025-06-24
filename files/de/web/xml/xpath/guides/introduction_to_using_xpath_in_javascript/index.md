---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XML/XPath) in JavaScript. Die Hauptschnittstelle für die Verwendung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate)-Funktion des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode wertet [XPath](/de/docs/Web/XML/XPath)-Ausdrücke in einem auf {{Glossary("XML", "XML")}} basierenden Dokument (einschließlich HTML-Dokumenten) aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, welches entweder einen einzelnen Knoten oder eine Menge von Knoten darstellen kann. Die bestehende Dokumentation zu dieser Methode finden Sie unter [document.evaluate](/de/docs/Web/API/Document/evaluate), jedoch ist sie für unsere aktuellen Bedürfnisse etwas spärlich; eine umfassendere Untersuchung erfolgt unten.

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
- `contextNode`: Ein Knoten im Dokument, gegen den der `xpathExpression` ausgewertet werden soll, einschließlich aller seiner untergeordneten Knoten. Der [document](/de/docs/Web/API/Document)-Knoten ist der am häufigsten verwendete.
- `namespaceResolver`: Eine Funktion, die alle Namensraum-Präfixe innerhalb von `xpathExpression` erhält und eine Zeichenkette zurückgibt, die den Namensraum-URI darstellt, der diesem Präfix zugeordnet ist. Dies ermöglicht die Umwandlung zwischen den im XPath-Ausdruck verwendeten Präfixen und den möglicherweise unterschiedlichen im Dokument verwendeten Präfixen. Die Funktion kann entweder:

  - Ein [`Node`](/de/docs/Web/API/Node) sein, der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bereitstellt, die das Namensraum-Präfix auflöst.
  - `null` sein, was für HTML-Dokumente oder wenn keine Namensraum-Präfixe verwendet werden kann. Beachten Sie, dass, wenn `xpathExpression` ein Namensraum-Präfix enthält, ein `DOMException` mit dem Code `NAMESPACE_ERR` ausgelöst wird.
  - Eine benutzerdefinierte Funktion sein. Einzelheiten finden Sie im Abschnitt [Verwendung eines benutzerdefinierten Namensraum-Resolvers](#implementierung_eines_benutzerdefinierten_namensraum-resolvers) im Anhang.

- `resultType`: Eine [Konstante](#xpathresult_definierte_konstanten), die den gewünschten Ergebnistyp spezifiziert, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten angegebene Konstante ist `XPathResult.ANY_TYPE`, welche die Ergebnisse des XPath-Ausdrucks als natürlichen Typ zurückgibt. Im Anhang gibt es eine vollständige Liste der [verfügbaren Konstanten](#xpathresult_definierte_konstanten). Diese werden im Abschnitt "[Spezifizierung des Rückgabetyps](#spezifizierung_des_rückgabetyps)" unten näher erläutert.
- `result`: Wenn ein existierendes `XPathResult`-Objekt angegeben wird, wird es wiederverwendet, um die Ergebnisse zurückzugeben. Die Angabe von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt des in dem Parameter `resultType` [spezifizierten](#spezifizierung_des_rückgabetyps) Typs zurück.

### Implementierung eines Standard-Namensraum-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namensraum-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate` die Variable `nsResolver` als `namespaceResolver`-Parameter.

Hinweis: XPath definiert QNames ohne Präfix, um nur Elemente im Null-Namensraum abzugleichen. In XPath gibt es keine Möglichkeit, den Standard-Namensraum auf ein reguläres Element-Referenz abzugleichen (z.B. `p[@id='_my-id']` für `xmlns='http://www.w3.org/1999/xhtml'`). Um Standard-Elemente in einem Nicht-Null-Namensraum abzugleichen, müssen Sie entweder auf ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` verweisen ([dieser Ansatz](#verwendung_von_xpath-funktionen_zur_referenzierung_von_elementen_mit_einem_standard-namensraum) funktioniert gut für dynamische XPath's, bei denen die Namensräume möglicherweise unbekannt sind) oder verwenden Sie Präfix-Name-Tests und erstellen Sie einen Namensraum-Resolver, der das Präfix dem Namensraum zuordnet. Lesen Sie mehr darüber, [wie Sie einen benutzerdefinierten Namensraum-Resolver erstellen](#implementierung_eines_benutzerdefinierten_namensraum-resolvers), wenn Sie diesen Ansatz verfolgen möchten.

## Beschreibung

Passt jeden DOM-Knoten an, um Namensräume aufzulösen, so dass ein [XPath](/de/docs/Web/XML/XPath)-Ausdruck leicht relativ zum Kontext des Knotens ausgewertet werden kann, wo er im Dokument erschien. Dieser Adapter funktioniert ähnlich wie die DOM-Level-3-Methode `lookupNamespaceURI` auf Knoten, indem er das `namespaceURI` von einem gegebenen Präfix anhand der aktuellen Informationen in der Knoten-Hierarchie auflöst, wenn `lookupNamespaceURI` aufgerufen wird. Es löst auch korrekt das implizite `xml`-Präfix auf.

### Spezifizierung des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([node-set types](#node-set_typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnistyp in `resultType` als einer der folgenden angegeben ist:

- `NUMBER_TYPE` - ein double
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein boolean

Bekommen wir den Rückgabewert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Das Folgende verwendet den XPath-Ausdruck [`count(//p)`](/de/docs/Web/XML/XPath/Reference/Functions/count) um die Anzahl der `<p>`-Elemente in einem HTML-Dokument zu bestimmen:

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

Obwohl JavaScript es uns ermöglicht, die Zahl zur Anzeige in einen String umwandeln, wird das XPath-Interface das numerische Ergebnis nicht automatisch konvertieren, wenn die `stringValue`-Eigenschaft angefordert wird, daher wird der folgende Code **nicht** funktionieren:

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

Das `XPathResult`-Objekt erlaubt es Nodesets in 3 wesentlichen Typen zurückzugeben:

- [Iterators](#iterators)
- [Snapshots](#snapshots)
- [First Nodes](#erster_knoten)

##### Iterators

Wenn der spezifizierte Ergebnistyp im `resultType`-Parameter entweder einer der folgenden ist:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein Nodeset von übereinstimmenden Knoten, das sich wie ein Iterator verhält und uns ermöglicht, auf die einzelnen enthaltenen Knoten mit der Methode `iterateNext()` des `XPathResult` zuzugreifen.

Nachdem wir über alle einzelnen übereinstimmenden Knoten iteriert haben, wird `iterateNext()` `null` zurückgeben.

Beachten Sie jedoch, dass, wenn das Dokument zwischen den Iterationen mutiert wird (der Dokumentbaum geändert wird), das Iterieren ungültig wird und die Eigenschaft `invalidIteratorState` von `XPathResult` auf `true` gesetzt wird, und es wird eine `NS_ERROR_DOM_INVALID_STATE_ERR` Ausnahme ausgelöst.

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

Wenn der spezifizierte Ergebnistyp im `resultType`-Parameter entweder einer der folgenden ist:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein statisches Nodeset von übereinstimmenden Knoten, das es uns ermöglicht, jeden Knoten durch die Methode `snapshotItem(itemNumber)` des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann durch die Eigenschaft `snapshotLength` abgerufen werden.

Snapshots ändern sich nicht mit Dokument-Mutationen, daher wird im Unterschied zu den Iteratoren der Snapshot nicht ungültig, er stimmt jedoch möglicherweise nicht mit dem aktuellen Dokument überein. Beispielsweise können die Knoten verschoben worden sein, es könnte Knoten enthalten, die nicht mehr existieren oder es könnten neue Knoten hinzugefügt worden sein.

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

Wenn der spezifizierte Ergebnistyp im `resultType`-Parameter entweder einer der folgenden ist:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist nur der erste gefundene Knoten, der mit dem XPath-Ausdruck übereinstimmt. Dieser kann über die Eigenschaft `singleNodeValue` des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn die Nodeset leer ist.

Beachten Sie, dass für den ungeordneten Subtyp der einzige zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentenreihenfolge ist, aber für den geordneten Subtyp erhalten Sie garantiert den ersten Knoten, der in der Dokumentenreihenfolge übereinstimmt.

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

Wenn der Ergebnistyp im `resultType`-Parameter als `ANY_TYPE` spezifiziert ist, wird das `XPathResult`-Objekt in der Art zurückgegeben, die sich natürlich aus der Bewertung des Ausdrucks ergibt.

Es könnte eine der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) sein, **aber**, wenn der zurückgegebene Ergebnistyp ein Nodeset ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach der Auswertung zu bestimmen, verwenden wir die `resultType` Eigenschaft des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_definierte_konstanten) Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in ein beliebiges JavaScript-Fragment im oder mit dem HTML-Dokument, gegen das der XPath-Ausdruck bewertet wird, platziert werden.

Um alle `<h2>`-Heading-Elemente in einem HTML-Dokument mithilfe von XPath zu extrahieren, lautet der `xpathExpression`: `"//h2"`. Dabei ist `//` der Recursive Descent Operator, der Elemente mit dem KnotenName `h2` überall im Dokumentbaum abgleicht. Der vollständige Code hierfür ist:

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Beachten Sie, dass, da HTML keine Namensräume hat, wir `null` für den `namespaceResolver`-Parameter übergeben haben.

Da wir das gesamte Dokument nach den Überschriften durchsuchen möchten, haben wir das [document](/de/docs/Web/API/Document)-Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir wissen möchten, welcher Typ von Ergebnis zurückgegeben wird, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird dies auf `4`, einem `UNORDERED_NODE_ITERATOR_TYPE`, ausgewertet. Dies ist der Standardrückgabewert, wenn das Ergebnis des XPath-Ausdrucks ein Nodeset ist. Es ermöglicht den Zugriff auf einen einzelnen Knoten nach dem anderen und gibt die Knoten möglicherweise nicht in einer bestimmten Reihenfolge zurück. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die `iterateNext()` Methode des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iteriert sind, haben wir Zugriff auf alle Standard-DOM-Schnittstellen auf diesem Knoten. Nach dem Durchlaufen der `h2`-Elemente, die von unserem Ausdruck zurückgegeben werden, geben weitere Aufrufe von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines benutzerdefinierten Namensraum-Resolvers

Dies ist ein Beispiel zur Veranschaulichung. Diese Funktion muss Namensraum-Präfixe aus dem `xpathExpression` übernehmen und den URI zurückgeben, der diesem Präfix entspricht. Zum Beispiel, der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wählt alle [MathML](/de/docs/Web/MathML)-Ausdrücke aus, die Kinder von (X)HTML-Tabellendatenzellen-Elementen sind.

Um das Präfix `mathml:` mit dem Namensraum-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit dem URI `http://www.w3.org/1999/xhtml` zu verknüpfen, stellen wir eine Funktion:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Unser Aufruf zu `document.evaluate` würde dann wie folgt aussehen:

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

Wie zuvor im Abschnitt [Implementierung eines Standard-Namensraum-Resolvers](#implementierung_eines_standard-namensraum-resolvers) erwähnt, behandelt der Standard-Resolver den Standard-Namensraum für XML-Dokumente nicht. Zum Beispiel bei diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

wird `doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` eine leere Menge zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Die Übergabe eines `null`-Resolvers funktioniert auch nicht besser.

Ein möglicher Workaround besteht darin, einen benutzerdefinierten Resolver zu erstellen, der den korrekten Standard-Namensraum (in diesem Fall den Atom-Namensraum) zurückgibt. Beachten Sie, dass Sie in Ihrem XPath-Ausdruck immer noch ein Namensraum-Präfix verwenden müssen, damit die Resolver-Funktion es in Ihren erforderlichen Namensraum ändern kann. Z.B.:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich ist, wenn das Dokument mehrere Namensräume verwendet.

Ein Ansatz, der möglicherweise besser funktioniert (und es erlaubt, dass Namenräume nicht im Voraus bekannt sind), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen zur Referenzierung von Elementen mit einem Standard-Namensraum

Ein weiterer Ansatz, um Standard-Elemente in einem Nicht-Null-Namensraum abzugleichen (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namensräume möglicherweise unbekannt sind), beinhaltet das Verweisen auf ein bestimmtes Element mit einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']`. Dies umgeht das Problem, dass eine XPath-Abfrage nicht in der Lage ist, den Standard-Namensraum auf ein regulär beschriftetes Element zu erkennen.

### Speziell benannte Elemente und Attribute abrufen, unabhängig vom Präfix

Wenn man in Namenräumen Flexibilität bieten möchte (wie sie gedacht sind), indem nicht unbedingt ein bestimmtes Präfix verwendet werden muss, um ein namensraumspezifisches Element oder Attribut zu finden, muss man spezielle Techniken verwenden.

Während man den Ansatz im obigen Abschnitt anpassen kann, um namensraumspezifische Elemente unabhängig vom gewählten Präfix zu testen (Verwendung von [`local-name()`](/de/docs/Web/XML/XPath/Reference/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XML/XPath/Reference/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XML/XPath/Reference/Functions/name)), tritt jedoch eine komplexere Situation auf, wenn man ein Element mit einem bestimmten namensraumspezifischen Attribut in einem Prädikat greifen möchte (angesichts des Fehlens von implementierungsunabhängigen Variablen in XPath 1.0).

Zum Beispiel könnte man versuchen (fälschlich), ein Element mit einem namensraumspezifischen Attribut wie folgt zu greifen: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente erfassen, wenn eines seiner Attribute mit lokalem Namen `href` existierte, es jedoch ein anderes Attribut war, welches den gesuchten (XLink) Namensraum hatte (anstatt [`@href`](/de/docs/Web/XML/XPath/Reference/Axes#attribute)).

Um Elemente genau mit dem XLink-`@href`-Attribut zu erfassen (ohne auch auf vordefinierte Präfixe in einem Namensraum-Resolver beschränkt zu sein), könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### XPathResult definierte Konstanten

| Ergebnis-Typ definierte Konstante | Wert | Beschreibung                                                                                                                                                                                                                        |
| --------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                          | 0    | Ein Ergebnismenge, die jeden Typ enthält, der sich natürlich aus der Auswertung des Ausdrucks ergibt. Beachten Sie, dass, wenn das Ergebnis ein Nodeset ist, dann immer der UNORDERED_NODE_ITERATOR_TYPE der resultierende Typ ist. |
| NUMBER_TYPE                       | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich zum Beispiel in einem XPath-Ausdruck, der die `count()`-Funktion verwendet.                                                                                         |
| STRING_TYPE                       | 2    | Ein Ergebnis, das eine einzelne Zeichenkette enthält.                                                                                                                                                                               |
| BOOLEAN_TYPE                      | 3    | Ein Ergebnis, das einen einzelnen Booleschen Wert enthält. Dies ist nützlich zum Beispiel in einem XPath-Ausdruck, der die `not()`-Funktion verwendet.                                                                              |
| UNORDERED_NODE_ITERATOR_TYPE      | 4    | Ein Ergebnis-Nodeset, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten müssen nicht unbedingt in der Reihenfolge sein, in der sie im Dokument erscheinen.                                                   |
| ORDERED_NODE_ITERATOR_TYPE        | 5    | Ein Ergebnis-Nodeset, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten im Ergebnisset befinden sich in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                                         |
| UNORDERED_NODE_SNAPSHOT_TYPE      | 6    | Ein Ergebnis-Nodeset, das Schnappschüsse aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten müssen nicht unbedingt in der Reihenfolge sein, in der sie im Dokument erscheinen.                                   |
| ORDERED_NODE_SNAPSHOT_TYPE        | 7    | Ein Ergebnis-Nodeset, das Schnappschüsse aller Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten im Ergebnisset befinden sich in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                         |
| ANY_UNORDERED_NODE_TYPE           | 8    | Ein Ergebnis-Nodeset, das einen beliebigen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der Knoten ist nicht unbedingt der erste Knoten im Dokument, der mit dem Ausdruck übereinstimmt.                           |
| FIRST_ORDERED_NODE_TYPE           | 9    | Ein Ergebnis-Nodeset, das den ersten Knoten im Dokument enthält, der mit dem Ausdruck übereinstimmt.                                                                                                                                |

## Siehe auch

- [XPath](/de/docs/Web/XML/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) von _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Ursprüngliche Dokumentinformationen

- Basierend auf einem ursprünglichen Dokument von James Graham.
- Weitere Mitwirkende: James Thompson.
