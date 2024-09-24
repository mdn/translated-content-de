---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{XsltSidebar}}

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XPath) in JavaScript. Mozilla implementiert einen beträchtlichen Teil von [DOM 3 XPath](https://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/), was bedeutet, dass XPath-Ausdrücke sowohl gegen HTML- als auch XML-Dokumente ausgeführt werden können.

Die Hauptschnittstelle zur Verwendung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate) Funktion des [document](/de/docs/Web/API/Document) Objekts.

## document.evaluate()

Diese Methode evaluiert [XPath](/de/docs/Web/XPath) Ausdrücke gegen ein auf [XML](/de/docs/Glossary/XML) basierendes Dokument (einschließlich HTML-Dokumente) und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult) Objekt zurück, das ein einzelner Knoten oder eine Gruppe von Knoten sein kann. Die vorhandene Dokumentation zu dieser Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist jedoch derzeit eher spärlich; eine umfassendere Untersuchung wird unten gegeben.

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

- `xpathExpression`: Ein String, der den zu evaluierenden XPath-Ausdruck enthält.
- `contextNode`: Ein Knoten im Dokument, gegen den der `xpathExpression` evaluiert werden soll, einschließlich aller seiner Kindknoten. Der [document](/de/docs/Web/API/Document) Knoten wird am häufigsten verwendet.
- `namespaceResolver`: Eine Funktion, die alle in `xpathExpression` enthaltenen Namensraumpräfixe übergeben wird und eine Zeichenkette zurückgibt, die den Namensraum-URI repräsentiert, der mit diesem Präfix verknüpft ist. Dies ermöglicht die Umwandlung zwischen den in den XPath-Ausdrücken verwendeten Präfixen und den möglicherweise unterschiedlichen im Dokument verwendeten Präfixen. Die Funktion kann entweder sein:

  - Ein {{domxref("Node")}}, der eine {{domxref("Node.lookupNamespaceURI")}}-Methode bereitstellt, die das Namensraumpräfix auflöst.
  - `null`, welches für HTML-Dokumente oder wenn keine Namensraumpräfixe verwendet werden, benutzt werden kann. Beachten Sie, dass, falls der `xpathExpression` ein Namensraumpräfix enthält, dies zu einer `DOMException` mit dem Code `NAMESPACE_ERR` führt.
  - Eine benutzerdefinierte Funktion. Siehe den Abschnitt [Verwenden eines Benutzerdefinierten Namespace-Resolvers](#implementierung_eines_benutzerdefinierten_namespace-resolvers) im Anhang für Details.

- `resultType`: Eine [Konstante](#xpathresult_definierte_konstanten), die den gewünschten Ergebnisdatentyp angibt, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als den natürlichsten Typ zurückgibt. Es gibt einen Abschnitt im Anhang, der eine vollständige Liste der [verfügbaren Konstanten](#xpathresult_definierte_konstanten) enthält. Diese werden weiter unten im Abschnitt "[Festlegen des Rückgabetyps](#festlegen_des_rückgabetyps)" erläutert.
- `result`: Wenn ein bestehendes `XPathResult`-Objekt angegeben wird, wird es wiederverwendet, um die Ergebnisse zurückzugeben. Die Angabe von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt `xpathResult` zurück, welches ein `XPathResult`-Objekt des im `resultType` Parameter [angegebenen](#festlegen_des_rückgabetyps) Typs ist. Die `XPathResult`-Schnittstelle ist [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namensraum-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document) Objekt als einen Namensraum-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und dann übergeben Sie `document.evaluate` die `nsResolver`-Variable als den `namespaceResolver`-Parameter.

Hinweis: XPath definiert QNames ohne ein Präfix, um nur Elemente im Null-Namensraum zu stimmen. Es gibt keine Möglichkeit in XPath, den Standardnamensraum als auf ein reguläres Element bezogenen aufzufangen (z. B. `p[@id='_myid']` für `xmlns='http://www.w3.org/1999/xhtml'`). Um Standardelemente in einem Nicht-Null-Namensraum übereinstimmen zu können, müssen Sie entweder auf ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']` verweisen ([diese Methode](#verwenden_von_xpath-funktionen_zum_referenzieren_von_elementen_mit_einem_standard-namensraum) funktioniert gut für dynamische XPath's, bei denen die Namensräume möglicherweise nicht bekannt sind) oder Sie verwenden vorgestellte Namensüberprüfungen und erstellen einen Namensraum-Resolver, der das Präfix dem Namensraum zuordnet. Lesen Sie mehr darüber, [wie Sie einen benutzerdefinierten Namensraum-Resolver erstellen](#implementierung_eines_benutzerdefinierten_namespace-resolvers), wenn Sie diesen Ansatz wählen möchten.

## Beschreibung

Passt jeden DOM-Knoten an, um Namensräume aufzulösen, sodass ein [XPath](/de/docs/Web/XPath) Ausdruck leicht im Kontext des Knotens evaluiert werden kann, an dem er innerhalb des Dokuments auftrat. Dieser Adapter funktioniert wie die DOM Level 3-Methode `lookupNamespaceURI` auf Knoten, um die `namespaceURI` von einem gegebenen Präfix unter Verwendung der zurzeit verfügbaren Informationen in der Knotenhirarchie zum Zeitpunkt der `lookupNamespaceURI` Anfrage aufzulösen. Er löst auch das implizite `xml` Präfix korrekt auf.

### Festlegen des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([Knotenset-Typen](#knotenset-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnisdatentyp in `resultType` als entweder:

- `NUMBER_TYPE` - ein Double
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein Boolean

angegeben wird, erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen.

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
  `Dieses Dokument enthält ${paragraphCount.numberValue} Absatz-Elemente.`,
);
```

Obwohl JavaScript uns erlaubt, die Zahl in einen String zur Anzeige umzuwandeln, wird die XPath-Schnittstelle das numerische Ergebnis nicht automatisch konvertieren, wenn die `stringValue`-Eigenschaft angefordert wird, sodass der folgende Code **nicht** funktionieren wird:

```js
const paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  `Dieses Dokument enthält ${paragraphCount.stringValue} Absatz-Elemente.`,
);
```

Stattdessen wird eine Ausnahme mit dem Code `NS_DOM_TYPE_ERROR` zurückgegeben.

#### Knotenset-Typen

Das `XPathResult`-Objekt erlaubt Knotensets, die in 3 verschiedenen Haupttypen zurückgegeben werden können:

- [Iterators](#iterators)
- [Snapshots](#snapshots)
- [First Nodes](#first_node)

##### Iterators

Wenn der angegebene Ergebnisdatentyp im `resultType` Parameter entweder ist:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein Knotenset von übereinstimmenden Knoten, welches als Iterator fungiert und es uns ermöglicht, auf die einzelnen enthaltenen Knoten über die `iterateNext()` Methode des `XPathResult` zuzugreifen.

Sobald wir über alle einzelnen übereinstimmenden Knoten iteriert haben, gibt `iterateNext()` `null` zurück.

Beachten Sie jedoch, dass wenn das Dokument zwischen den Iterationen verändert wird (der Dokumentbaum wird modifiziert), dies die Iteration ungültig macht und die `invalidIteratorState` Eigenschaft des `XPathResult` auf `true` gesetzt wird und eine `NS_ERROR_DOM_INVALID_STATE_ERR` Ausnahme ausgelöst wird.

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
  console.error(`Fehler: Dokumentbaum wurde während der Iteration geändert ${e}`);
}
```

##### Snapshots

Wenn der angegebene Ergebnisdatentyp im `resultType` Parameter entweder ist:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein statisches Knotenset von übereinstimmenden Knoten, das es uns ermöglicht, auf jeden Knoten über die `snapshotItem(itemNumber)` Methode des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtzahl der enthaltenen Knoten kann über die `snapshotLength` Eigenschaft abgerufen werden.

Snapshots ändern sich nicht durch Dokumentmutationen, sodass im Unterschied zu den Iteratoren das Snapshot nicht ungültig wird, aber es könnte nicht dem aktuellen Dokument entsprechen, beispielsweise könnten die Knoten verschoben worden sein, es könnten Knoten enthalten sein, die nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

Wenn der angegebene Ergebnisdatentyp im `resultType` Parameter entweder ist:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist nur der erste gefundene Knoten, der mit dem XPath-Ausdruck übereinstimmt. Dieser kann über die `singleNodeValue` Eigenschaft des `XPathResult`-Objekts zugegriffen werden. Dies ist `null`, wenn das Knotenset leer ist.

Beachten Sie, dass für den ungeordneten Subtyp der zurückgegebene Einzelknoten möglicherweise nicht der erste in Dokumentreihenfolge ist, aber für den geordneten Subtyp erhalten Sie garantiert den ersten übereinstimmenden Knoten in Dokumentreihenfolge.

```js
const firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

console.log(
  `Die erste gefundene Telefonnummer ist ${firstPhoneNumber.singleNodeValue.textContent}`,
);
```

#### Das ANY_TYPE Konstante

Wenn der Ergebnisdatentyp im `resultType` Parameter als `ANY_TYPE` angegeben ist, wird das zurückgegebene `XPathResult`-Objekt, welcher Datentyp auch immer natürlich aus der Auswertung des Ausdrucks resultiert.

Es könnte einer der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) sein, **aber**, wenn der zurückgegebene Ergebnisdatentyp ein Knotenset ist, dann wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach der Auswertung zu bestimmen, verwenden wir die `resultType` Eigenschaft des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_definierte_konstanten) Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in ein beliebiges JavaScript-Fragment innerhalb oder verknüpft mit dem HTML-Dokument platziert werden, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>` Überschriftselemente in einem HTML-Dokument mit XPath zu extrahieren, lautet der `xpathExpression` '`//h2`'. Hierbei ist `//` der Rekursiver Abwärtssymbol, der Elemente mit dem Knotenname `h2` überall im Dokumentbaum übereinstimmt. Der vollständige Code hierfür ist: Link zur einleitenden xpath-Dokumentation

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Beachten Sie, dass, da HTML keine Namensräume hat, wir `null` für den `namespaceResolver` Parameter übergeben haben.

Da wir den gesamten Dokumentinhalt nach den Überschriften durchsuchen möchten, haben wir das [document](/de/docs/Web/API/Document) Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult` Objekt. Falls wir den Typ des zurückgegebenen Ergebnisses wissen möchten, können wir die `resultType` Eigenschaft des zurückgegebenen Objekts evaluieren. In diesem Fall wird das auf `4`, ein `UNORDERED_NODE_ITERATOR_TYPE`, evaluieren. Dies ist der Standardrückgabewert, wenn das Ergebnis des XPath-Ausdrucks ein Knotenset ist. Es bietet Zugriff auf einen einzelnen Knoten zu einer Zeit und gibt möglicherweise keine Knoten in einer bestimmten Reihenfolge zurück. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die `iterateNext()` Methode des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 Überschriften in diesem Dokument sind:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle Standard-DOM-Schnittstellen für diesen Knoten. Nachdem wir durch alle `h2` Elemente iteriert haben, die von unserem Ausdruck zurückgegeben wurden, geben weitere Aufrufe von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines Benutzerdefinierten Namespace-Resolvers

Dies ist ein Beispiel zur Veranschaulichung. Diese Funktion muss Namensraumpräfixe aus dem `xpathExpression` nehmen und den URI zurückgeben, der diesem Präfix entspricht. Zum Beispiel der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wird alle [MathML](/de/docs/Web/MathML) Ausdrücke auswählen, die Kinder von (X)HTML Tabellendatenzellen sind.

Um das Präfix '`mathml:`' mit dem Namensraum-URI '`http://www.w3.org/1998/Math/MathML`' und '`xhtml:`' mit dem URI '`http://www.w3.org/1999/xhtml`' zu verknüpfen, stellen wir eine Funktion bereit:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Unser Anruf an `document.evaluate` würde dann so aussehen:

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

Wie im Abschnitt [Implementierung eines Standard-Namensraum-Resolvers](#implementierung_eines_standard-namensraum-resolvers) erwähnt, behandelt der Standard-Resolver den Standard-Namensraum für XML-Dokumente nicht. Zum Beispiel bei diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` wird ein leeres Set zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Auch ein `null` Resolver funktioniert nicht besser.

Eine mögliche Lösung ist es, einen benutzerdefinierten Resolver zu erstellen, der den richtigen Standard-Namensraum (in diesem Fall den Atom-Namensraum) zurückgibt. Beachten Sie, dass Sie weiterhin ein Namensraum-Präfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolver-Funktion es in Ihren gewünschten Namensraum ändern kann. Zum Beispiel:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplizierterer Resolver erforderlich sein könnte, wenn das Dokument mehrere Namensräume verwendet.

Eine Methode, die besser funktionieren könnte (und die es erlaubt, dass Namensräume nicht im Voraus bekannt sein müssen), wird im nächsten Abschnitt beschrieben.

### Verwenden von XPath-Funktionen zum Referenzieren von Elementen mit einem Standard-Namensraum

Eine weitere Methode, um Standardelemente in einem Nicht-Null-Namensraum zu übereinstimmen (und eine, die gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namensräume möglicherweise nicht bekannt sind), beinhaltet die Referenzierung eines bestimmten Elements unter Verwendung einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']`. Dies umgeht das Problem eines XPath-Ausdrucks, der den Standard-Namensraum an einem regelmäßig gekennzeichneten Element nicht erkennen kann.

### Speziell benannte Elemente und Attribute unabhängig vom Präfix abrufen

Wenn man Flexibilität bei Namensräumen bieten möchte (wie sie beabsichtigt sind), indem man nicht unbedingt ein bestimmtes Präfix beim Auffinden eines namensraum-definierten Elements oder Attributs verwendet, muss spezielle Techniken verwendet werden.

Während man den Ansatz im obigen Abschnitt anpassen kann, um für namengenannte Elemente unabhängig vom gewählten Präfix zu prüfen (indem [`local-name()`](/de/docs/Web/XPath/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XPath/Functions/namespace-uri) anstelle von [`name()`]) kann jedoch eine anspruchsvollere Situation auftreten, wenn man ein Element mit einem bestimmten namensraum-konformen Attribut in einem Prädikat erfassen möchte (angesichts des Fehlens von implementierungsunabhängigen Variablen in XPath 1.0).

Zum Beispiel könnte man versuchen (fälschlicherweise), ein Element mit einem namensraum-konformen Attribut wie folgt zu erfassen: `const xpathlink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte gegebenenfalls einige Elemente erfassen, falls eines seiner Attribute existiert, das den lokalen Namen "`href`" hatte, aber es war ein anderes Attribut, das den angezielten (XLink) Namensraum hatte (anstelle von [`@href`](/de/docs/Web/XPath/Axes#attribute)).

Um Elemente mit dem XLink `@href` Attribut ohne vorher definierte Präfixe in einem Namensraum-Resolver genau zu erfassen, könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Erfasst Elemente mit einem einzigen Attribut, das sowohl den lokalen Namen 'href' als auch den XLink-Namensraum hat
const thislevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisitemEl = thislevel.iterateNext();
```

#### XPathResult Definierte Konstanten

| Ergebnis Typ Definierte Konstante | Wert | Beschreibung                                                                                                                                                                                              |
| --------------------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                          | 0    | Ein Resultset, das den Datentyp enthält, welcher sich natürlich aus der Auswertung des Ausdrucks ergibt. Beachten Sie, dass wenn das Ergebnis ein Knotenset ist, dann UNORDERED_NODE_ITERATOR_TYPE immer der resultierende Typ ist. |
| NUMBER_TYPE                       | 1    | Ein Ergebnis, das eine einzelne Nummer enthält. Dies ist zum Beispiel nützlich, in einem XPath-Ausdruck, der die `count()` Funktion verwendet.                                                             |
| STRING_TYPE                       | 2    | Ein Ergebnis, das einen einzelnen String enthält.                                                                                                                                                         |
| BOOLEAN_TYPE                      | 3    | Ein Ergebnis, das einen einzelnen Boolean-Wert enthält. Dies ist zum Beispiel nützlich in einem XPath-Ausdruck, der die `not()` Funktion verwendet.                                                       |
| UNORDERED_NODE_ITERATOR_TYPE      | 4    | Ein Ergebnis-Knotenset, das alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten sind möglicherweise nicht in der Reihenfolge, in der sie im Dokument erscheinen.                            |
| ORDERED_NODE_ITERATOR_TYPE        | 5    | Ein Ergebnis-Knotenset, das alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten im Ergebnis-Set sind in der Reihenfolge, in der sie im Dokument erscheinen.                               |
| UNORDERED_NODE_SNAPSHOT_TYPE      | 6    | Ein Ergebnis-Knotenset, das Schnappschüsse von allen mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten sind möglicherweise nicht in der Reihenfolge, in der sie im Dokument erscheinen.      |
| ORDERED_NODE_SNAPSHOT_TYPE        | 7    | Ein Ergebnis-Knotenset, das Schnappschüsse von allen mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten im Ergebnis-Set sind in der Reihenfolge, in der sie im Dokument erscheinen.           |
| ANY_UNORDERED_NODE_TYPE           | 8    | Ein Ergebnis-Knotenset, das einen einzelnen mit dem Ausdruck übereinstimmenden Knoten enthält. Der Knoten ist nicht unbedingt der erste Knoten im Dokument, der mit dem Ausdruck übereinstimmt.          |
| FIRST_ORDERED_NODE_TYPE           | 9    | Ein Ergebnis-Knotenset, das den ersten Knoten im Dokument enthält, der mit dem Ausdruck übereinstimmt.                                                                                                    |

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Informationen zum Originaldokument

- Basierend auf einem Originaldokument von James Graham.
- Weitere Mitwirkende: James Thompson.
