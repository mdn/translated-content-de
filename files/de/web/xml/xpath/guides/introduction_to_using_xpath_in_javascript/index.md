---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XML/XPath) in JavaScript.
Die Hauptschnittstelle zur Verwendung von XPath ist die Funktion [evaluate](/de/docs/Web/API/Document/evaluate) des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode wertet [XPath](/de/docs/Web/XML/XPath)-Ausdrücke gegen ein auf {{Glossary("XML", "XML")}} basierendes Dokument aus (einschließlich HTML-Dokumente) und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das ein einzelner Knoten oder eine Menge von Knoten sein kann. Die bestehende Dokumentation für diese Methode befindet sich unter [document.evaluate](/de/docs/Web/API/Document/evaluate), ist jedoch für unsere Bedürfnisse momentan eher spärlich; eine umfassendere Untersuchung wird weiter unten gegeben.

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

- `xpathExpression`: Ein String, der den XPath-Ausdruck enthält, der ausgewertet werden soll.
- `contextNode`: Ein Knoten im Dokument, gegen den der `xpathExpression` ausgewertet werden soll, einschließlich aller seiner Kindknoten. Der [document](/de/docs/Web/API/Document)-Knoten wird am häufigsten verwendet.
- `namespaceResolver`: Eine Funktion, die alle Namensraum-Präfixe im `xpathExpression` übergeben bekommt und einen String zurückgibt, der die Namensraum-URI repräsentiert, die mit diesem Präfix verbunden ist. Dies ermöglicht die Umwandlung zwischen den in den XPath-Ausdrücken verwendeten Präfixen und den möglicherweise im Dokument verwendeten unterschiedlichen Präfixen. Die Funktion kann entweder sein:
  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bereitstellt, die das Namensraum-Präfix auflöst.
  - `null`, was für HTML-Dokumente oder wenn keine Namensraum-Präfixe verwendet werden, verwendet werden kann. Beachten Sie, dass, wenn der `xpathExpression` ein Namensraum-Präfix enthält, dies zu einer `DOMException` mit dem Code `NAMESPACE_ERR` führen wird.
  - Eine benutzerdefinierte Funktion. Details finden Sie im Abschnitt [Verwenden einer benutzerdefinierten Namensraum-Resolver](#implementieren_eines_benutzerdefinierten_namensraum-resolvers) im Anhang.

- `resultType`: Eine [Konstante](#xpathresult_definierte_konstanten), die den gewünschten Ergebnistyp angibt, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als den natürlichsten Typ zurückgibt. Im Anhang befindet sich ein vollständiges Verzeichnis der [verfügbaren Konstanten](#xpathresult_definierte_konstanten). Sie werden unten im Abschnitt "[Festlegung des Rückgabetyps](#festlegung_des_rückgabetyps)" erklärt.
- `result`: Wenn ein vorhandenes `XPathResult`-Objekt angegeben wird, wird es erneut verwendet, um die Ergebnisse zurückzugeben. Geben Sie `null` an, um ein neues `XPathResult`-Objekt zu erstellen.

### Rückgabewert

Gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt des im `resultType`-Parameter [spezifizierten](#festlegung_des_rückgabetyps) Typs zurück.

### Implementieren eines Standard-Namensraum-Resolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namensraum-Resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und dann übergeben wir `document.evaluate`, die `nsResolver`-Variable als den `namespaceResolver`-Parameter.

> [!NOTE]
> XPath definiert QNames ohne ein Präfix, um nur Elemente im Null-Namensraum zu matchen. Es gibt keine Möglichkeit in XPath, den Standard-Namensraum wie bei einer regulären Elementreferenz (z. B. `p[@id='_my-id']` für `xmlns='http://www.w3.org/1999/xhtml'`) zu übernehmen. Um Standard-Elemente in einem Nicht-Null-Namensraum zu matchen, müssen Sie entweder ein bestimmtes Element mit einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` referenzieren ([diese Herangehensweise](#verwenden_von_xpath-funktionen_zur_referenzierung_von_elementen_mit_einem_standardnamensraum) funktioniert gut für dynamische XPath's, bei denen die Namensräume möglicherweise nicht bekannt sind) oder Sie verwenden präfixierte Namens-Tests und erstellen einen Namensraum-Resolver, der das Präfix dem Namensraum zuordnet. Lesen Sie mehr über [wie man einen benutzerdefinierten Namensraum-Resolver erstellt](#implementieren_eines_benutzerdefinierten_namensraum-resolvers), wenn Sie den letzteren Ansatz wählen möchten.

## Beschreibung

Passt jeden DOM-Knoten an, um Namensräume aufzulösen, sodass ein [XPath](/de/docs/Web/XML/XPath)-Ausdruck relativ zum Kontext des Knotens, an dem er im Dokument erscheint, einfach ausgewertet werden kann. Dieser Adapter funktioniert wie die DOM-Level-3-Methode `lookupNamespaceURI` an Knoten, um den `namespaceURI` von einem gegebenen Präfix unter Verwendung der aktuellen Informationen, die zum Zeitpunkt des Aufrufs von `lookupNamespaceURI` in der Hierarchie des Knotens verfügbar sind, aufzulösen. Er löst auch das implizite `xml`-Präfix korrekt auf.

### Festlegung des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([Knoten-Set-Typen](#knoten-set-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnistyp in `resultType` entweder als:

- `NUMBER_TYPE` - ein double
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein Boolean

angegeben wird, erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir jeweils auf die folgenden Eigenschaften des `XPathResult`-Objekts zugreifen.

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

Obwohl JavaScript uns erlaubt, die Zahl zum Anzeigen in einen String zu konvertieren, wird die XPath-Schnittstelle das numerische Ergebnis nicht automatisch konvertieren, wenn die `stringValue`-Eigenschaft angefordert wird, daher wird der folgende Code **nicht** funktionieren:

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

Das `XPathResult`-Objekt ermöglicht es, Knoten-Sets in 3 hauptsächlichen unterschiedlichen Typen zurückzugeben:

- [Iterators](#iterators)
- [Snapshots](#snapshots)
- [First Nodes](#erster_knoten)

##### Iterators

Wenn der angegebene Ergebnistyp im `resultType`-Parameter entweder ist:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

Das zurückgegebene `XPathResult`-Objekt ist ein Knoten-Set von übereinstimmenden Knoten, das sich wie ein Iterator verhält und es ermöglicht, auf die einzelnen Knoten mit der Methode `iterateNext()` des `XPathResult` zuzugreifen.

Sobald wir alle einzelnen übereinstimmenden Knoten durchlaufen haben, gibt `iterateNext()` `null` zurück.

Beachten Sie jedoch, dass, wenn das Dokument verändert wird (der Dokumentbaum wird modifiziert) zwischen den Iterationen, das die Iteration ungültig macht und die Eigenschaft `invalidIteratorState` des `XPathResult` auf `true` gesetzt wird, und eine `NS_ERROR_DOM_INVALID_STATE_ERR`-Ausnahme geworfen wird.

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

Das zurückgegebene `XPathResult`-Objekt ist ein statisches Knoten-Set von übereinstimmenden Knoten, das uns ermöglicht, auf jeden Knoten über die Methode `snapshotItem(itemNumber)` des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann über die Eigenschaft `snapshotLength` abgerufen werden.

Snapshots ändern sich nicht mit Dokumentmutationen, daher wird der Snapshot, anders als bei den Iteratoren, nicht ungültig, aber er könnte nicht dem aktuellen Dokument entsprechen, zum Beispiel könnten die Knoten verschoben worden sein, es könnte Knoten enthalten, die nicht mehr existieren, oder neue Knoten könnten hinzugefügt worden sein.

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

Das zurückgegebene `XPathResult`-Objekt ist nur der erste gefundene Knoten, der dem XPath-Ausdruck entspricht. Auf diesen kann über die Eigenschaft `singleNodeValue` des `XPathResult`-Objekts zugegriffen werden. Dies wird `null` sein, wenn das Knoten-Set leer ist.

Beachten Sie, dass für den ungeordneten Subtyp der einzelne zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentreihenfolge ist, aber für den geordneten Subtyp bekommen Sie garantiert den ersten übereinstimmenden Knoten in der Dokumentreihenfolge.

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

Wenn der Ergebnistyp im `resultType`-Parameter als `ANY_TYPE` angegeben wird, wird das zurückgegebene `XPathResult`-Objekt der Typ sein, der sich natürlich aus der Auswertung des Ausdrucks ergibt.

Es könnte einer der einfachen Typen (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`) sein, **aber**, wenn der zurückgegebene Ergebnistyp ein Knoten-Set ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach Auswertung zu bestimmen, verwenden wir die Eigenschaft `resultType` des `XPathResult`-Objekts. Die [Konstanten](#xpathresult_definierte_konstanten)-Werte dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in ein JavaScript-Fragment eingefügt werden, das innerhalb des HTML-Dokuments steht oder mit ihm verknüpft ist, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>`-Überschriftselemente in einem HTML-Dokument mit XPath zu extrahieren, ist der `xpathExpression` `"//h2"`. Wobei `//` der rekurserativer Abwärtssuche-Operator ist, der Elemente mit dem Knotennamen `h2` an jeder Stelle im Dokumentbaum trifft. Der volle Code hierfür ist: Link zum einführenden XPath-Dokument

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

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir den Typ des zurückgegebenen Ergebnisses wissen möchten, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird das Ergebnis `4` sein, ein `UNORDERED_NODE_ITERATOR_TYPE`. Dies ist der Standardrückgabetyp, wenn das Ergebnis des XPath-Ausdrucks ein Knoten-Set ist. Es ermöglicht den Zugriff auf einen einzelnen Knoten nach dem anderen und kann Knoten möglicherweise nicht in einer bestimmten Reihenfolge zurückgeben. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die Methode `iterateNext()` des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle Standard-DOM-Schnittstellen dieses Knotens. Nach dem Durchlaufen aller durch unseren Ausdruck zurückgegebenen `h2`-Elemente, wird jede weitere Anforderung an `iterateNext()` `null` zurückgeben.

## Anhang

### Implementieren eines benutzerdefinierten Namensraum-Resolvers

Dies ist nur ein Beispiel zur Veranschaulichung. Diese Funktion muss Namensraum-Präfixe aus dem `xpathExpression` übernehmen und die URI zurückgeben, die diesem Präfix entspricht. Zum Beispiel, der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wird alle [MathML](/de/docs/Web/MathML)-Ausdrücke auswählen, die Kind von (X)HTML-Tabellendatenzellen-Elementen sind.

Um das `mathml:`-Präfix mit der Namensraum-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit der URI `http://www.w3.org/1999/xhtml` zu verknüpfen, bieten wir eine Funktion an:

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

### Implementieren eines Standardnamensraums für XML-Dokumente

Wie im vorherigen Abschnitt [Implementieren eines Standard-Namensraum-Resolvers](#implementieren_eines_standard-namensraum-resolvers) erwähnt, behandelt der Standard-Resolver nicht den Standard-Namensraum für XML-Dokumente. Beispielsweise mit diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` wird eine leere Menge zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Das Übergeben eines `null`-Resolvers funktioniert nicht besser.

Eine mögliche Lösung besteht darin, einen benutzerdefinierten Resolver zu erstellen, der den korrekten Standard-Namensraum zurückgibt (in diesem Fall der Atom-Namensraum). Beachten Sie, dass Sie immer noch ein Namensraum-Präfix in Ihrem XPath-Ausdruck verwenden müssen, damit die Resolver-Funktion es in Ihren gewünschten Namensraum ändern kann. Beispiel:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich sein wird, wenn das Dokument mehrere Namensräume verwendet.

Ein Ansatz, der möglicherweise besser funktioniert (und es ermöglicht, dass die Namensräume nicht im Voraus bekannt sein müssen), wird im nächsten Abschnitt beschrieben.

### Verwenden von XPath-Funktionen zur Referenzierung von Elementen mit einem Standardnamensraum

Ein anderer Ansatz, um Standard-Elemente in einem Nicht-Null-Namensraum zu matchen (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namensräume möglicherweise nicht bekannt sind), beinhaltet die Bezugnahme auf ein bestimmtes Element mit einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']`. Dies umgeht das Problem, dass eine XPath-Abfrage den Standardnamensraum auf einem regulär bezeichneten Element nicht erkennen kann.

### Spezielles Abrufen von Elementen und Attributen mit Namensraum unabhängig vom Präfix

Wenn jemand Flexibilität in den Namensräumen bieten möchte (wie vorgesehen), ohne unbedingt ein bestimmtes Präfix verwenden zu müssen, wenn ein Element oder Attribut mit Namensraum gefunden werden soll, müssen spezielle Techniken verwendet werden.

Während man den Ansatz im obigen Abschnitt anpassen kann, um Namenraum-Elemente unabhängig vom gewählten Präfix zu testen (mithilfe von [`local-name()`](/de/docs/Web/XML/XPath/Reference/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XML/XPath/Reference/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XML/XPath/Reference/Functions/name)), tritt jedoch eine herausforderndere Situation auf, wenn jemand ein Element mit einem bestimmten Namensraum-Attribut innerhalb eines Prädikats greifen möchte (aufgrund des Fehlens von implementierungsunabhängigen Variablen in XPath 1.0).

Ein Beispiel könnte sein, dass man (fälschlicherweise) versucht, ein Element mit einem Namensraum-Attribut folgendermaßen zu greifen: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente greifen, wenn eines ihrer Attribute existierte, das einen lokalen Namen von `href` hatte, aber es war ein anderes Attribut, das den gezielten (XLink) Namensraum hatte (anstatt von [`@href`](/de/docs/Web/XML/XPath/Reference/Axes#attribute)).

Um Elemente mit dem XLink-`@href`-Attribut genau zu erfassen (ohne auch an vordefinierte Präfixe in einem Namensraum-Resolver gebunden zu sein), könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### XPathResult Definierte Konstanten

| Ergebnis-Typ Definierte Konstante | Wert | Beschreibung                                                                                                                                                                                                                       |
| --------------------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                          | 0    | Ein Ergebnis-Set, das beliebigen Typs enthält, der sich natürlich aus der Auswertung des Ausdrucks ergibt. Beachten Sie, dass, wenn das Ergebnis ein Knoten-Set ist, UNORDERED_NODE_ITERATOR_TYPE immer der resultierende Typ ist. |
| NUMBER_TYPE                       | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich, zum Beispiel in einem XPath-Ausdruck, der die `count()`-Funktion verwendet.                                                                                       |
| STRING_TYPE                       | 2    | Ein Ergebnis, das einen einzelnen String enthält.                                                                                                                                                                                  |
| BOOLEAN_TYPE                      | 3    | Ein Ergebnis, das einen einzelnen Boolean-Wert enthält. Dies ist nützlich, zum Beispiel in einem XPath-Ausdruck, der die `not()`-Funktion verwendet.                                                                               |
| UNORDERED_NODE_ITERATOR_TYPE      | 4    | Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in derselben Reihenfolge wie im Dokument erscheinen.                                                             |
| ORDERED_NODE_ITERATOR_TYPE        | 5    | Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnis-Set sind in derselben Reihenfolge, wie sie im Dokument erscheinen.                                                          |
| UNORDERED_NODE_SNAPSHOT_TYPE      | 6    | Ein Ergebnis-Knoten-Set, das Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in derselben Reihenfolge wie im Dokument erscheinen.                                             |
| ORDERED_NODE_SNAPSHOT_TYPE        | 7    | Ein Ergebnis-Knoten-Set, das Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnis-Set sind in derselben Reihenfolge, wie sie im Dokument erscheinen.                                          |
| ANY_UNORDERED_NODE_TYPE           | 8    | Ein Ergebnis-Knoten-Set, das einen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht unbedingt der erste Knoten im Dokument, der dem Ausdruck entspricht.                                                |
| FIRST_ORDERED_NODE_TYPE           | 9    | Ein Ergebnis-Knoten-Set, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.                                                                                                                                   |

## Siehe auch

- [XPath](/de/docs/Web/XML/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Informationen zum Originaldokument

- Basierend auf einem Originaldokument von James Graham.
- Weitere Mitwirkende: James Thompson.
