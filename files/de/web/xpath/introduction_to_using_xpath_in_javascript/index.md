---
title: Einführung in die Verwendung von XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Dieses Dokument beschreibt die Schnittstelle zur Verwendung von [XPath](/de/docs/Web/XPath) in JavaScript. Mozilla implementiert einen erheblichen Teil von [DOM 3 XPath](https://www.w3.org/TR/2004/NOTE-DOM-Level-3-XPath-20040226/), was bedeutet, dass XPath-Ausdrücke sowohl gegen HTML- als auch gegen XML-Dokumente ausgeführt werden können.

Die Hauptschnittstelle zur Verwendung von XPath ist die [evaluate](/de/docs/Web/API/Document/evaluate)-Funktion des [document](/de/docs/Web/API/Document)-Objekts.

## document.evaluate()

Diese Methode wertet [XPath](/de/docs/Web/XPath)-Ausdrücke gegen ein auf {{Glossary("XML", "XML")}} basierendes Dokument (einschließlich HTML-Dokumente) aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt zurück, das entweder einen einzelnen Knoten oder eine Menge von Knoten darstellen kann. Die bestehende Dokumentation für diese Methode ist unter [document.evaluate](/de/docs/Web/API/Document/evaluate) zu finden, aber für unsere Bedürfnisse im Moment eher dürftig; eine umfassendere Untersuchung wird unten gegeben.

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
- `contextNode`: Ein Knoten im Dokument, gegen den das `xpathExpression` ausgewertet werden soll, einschließlich aller seiner Kindknoten. Der [document](/de/docs/Web/API/Document)-Knoten ist der am häufigsten verwendete.
- `namespaceResolver`: Eine Funktion, die alle Namensraum-Präfixe im `xpathExpression` übergeben bekommt und die einen String zurückgibt, der den mit diesem Präfix verbundenen Namensraum-URI darstellt. Dies ermöglicht die Umwandlung zwischen den in den XPath-Ausdrücken verwendeten Präfixen und den möglicherweise unterschiedlichen im Dokument verwendeten Präfixen. Die Funktion kann entweder sein:

  - Ein [`Node`](/de/docs/Web/API/Node), der eine [`Node.lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode bereitstellt, die das Namensraum-Präfix auflöst.
  - `null`, was für HTML-Dokumente oder wenn keine Namensraum-Präfixe verwendet werden, verwendet werden kann. Beachten Sie, dass, wenn das `xpathExpression` ein Namensraum-Präfix enthält, dies zu einer `DOMException` mit dem Code `NAMESPACE_ERR` führen wird.
  - Eine benutzerdefinierte Funktion. Siehe den Abschnitt [Verwendung eines benutzerdefinierten Namensraumresolvers](#implementierung_eines_benutzerdefinierten_namensraumresolvers) im Anhang für Details.

- `resultType`: Eine [Konstante](#definierte_konstanten_von_xpathresult), die den gewünschten Ergebnistyp angibt, der als Ergebnis der Auswertung zurückgegeben werden soll. Die am häufigsten übergebene Konstante ist `XPathResult.ANY_TYPE`, die die Ergebnisse des XPath-Ausdrucks als am natürlichsten passender Typ zurückgibt. Es gibt einen Abschnitt im Anhang, der eine vollständige Liste der [verfügbaren Konstanten](#definierte_konstanten_von_xpathresult) enthält. Diese werden im Abschnitt "[Festlegen des Rückgabetyps](#festlegen_des_rückgabetyps)" unten erklärt.
- `result`: Wenn ein vorhandenes `XPathResult`-Objekt angegeben wird, wird es zur Rückgabe der Ergebnisse wiederverwendet. Die Angabe von `null` erstellt ein neues `XPathResult`-Objekt.

### Rückgabewert

Gibt `xpathResult` zurück, das ein `XPathResult`-Objekt des Typs ist, der im Parameter `resultType` [spezifiziert](#festlegen_des_rückgabetyps) wurde. Die `XPathResult`-Schnittstelle ist [hier](/de/docs/Web/API/XPathResult) definiert.

### Implementierung eines Standard-Namensraumresolvers

Wir verwenden das [`document`](/de/docs/Web/API/Document)-Objekt als Namensraumresolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

Und übergeben dann `document.evaluate` die Variable `nsResolver` als `namespaceResolver`-Parameter.

> [!NOTE]
> XPath definiert QNames ohne Präfix nur, um Elemente im Null-Namensraum zuzuordnen. Es gibt in XPath keine Möglichkeit, den Standardnamensraum wie bei einem regulären Elementverweis (z.B. `p[@id='_myid']` für `xmlns='http://www.w3.org/1999/xhtml'`) zu übernehmen. Um Standard-Elemente in einem Nicht-Null-Namensraum zuzuordnen, müssen Sie entweder in einer Form wie `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']` auf ein bestimmtes Element verweisen (diese [Vorgehensweise](#verwendung_von_xpath-funktionen,_um_elemente_mit_einem_standard-namensraum_zu_referenzieren) eignet sich gut für dynamische XPath's, bei denen die Namensräume möglicherweise nicht bekannt sind) oder verwenden Sie präfixierte Namens-Tests und erstellen Sie einen Namensraumresolver, der das Präfix dem Namensraum zuordnet. Lesen Sie mehr darüber, [wie Sie einen benutzerdefinierten Namensraumresolver erstellen](#implementierung_eines_benutzerdefinierten_namensraumresolvers), wenn Sie diesen Ansatz verfolgen möchten.

## Beschreibung

Passt jeden DOM-Knoten an, um Namensräume aufzulösen, sodass ein [XPath](/de/docs/Web/XPath)-Ausdruck leicht relativ zum Kontext des Knotens, in dem er im Dokument erscheint, ausgewertet werden kann. Dieser Adapter funktioniert wie die DOM Level 3-Methode `lookupNamespaceURI` auf Knoten, um das `namespaceURI` eines angegebenen Präfixes unter Verwendung der derzeit im Knotenhierarchie verfügbaren Informationen zum Zeitpunkt des Aufrufs von `lookupNamespaceURI` aufzulösen. Auch der implizite `xml`-Präfix wird korrekt aufgelöst.

### Festlegen des Rückgabetyps

Die zurückgegebene Variable `xpathResult` von `document.evaluate` kann entweder aus einzelnen Knoten ([einfache Typen](#einfache_typen)) oder einer Sammlung von Knoten ([Knoten-Set-Typen](#knoten-set-typen)) bestehen.

#### Einfache Typen

Wenn der gewünschte Ergebnistyp in `resultType` entweder als:

- `NUMBER_TYPE` - ein double
- `STRING_TYPE` - ein String
- `BOOLEAN_TYPE` - ein Boolean

angegeben ist, erhalten wir den zurückgegebenen Wert des Ausdrucks, indem wir die folgenden Eigenschaften des `XPathResult`-Objekts entsprechend abrufen.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Beispiel

Das Folgende verwendet den XPath-Ausdruck [`count(//p)`](/de/docs/Web/XPath/Functions/count), um die Anzahl der `<p>`-Elemente in einem HTML-Dokument zu erhalten:

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

Obwohl uns JavaScript erlaubt, die Zahl für die Anzeige in einen String umzuwandeln, wird das XPath-Interface das numerische Ergebnis nicht automatisch konvertieren, wenn die Eigenschaft `stringValue` angefordert wird, sodass der folgende Code **nicht** funktioniert:

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

Stattdessen wird es eine Ausnahme mit dem Code `NS_DOM_TYPE_ERROR` zurückgeben.

#### Knoten-Set-Typen

Das `XPathResult`-Objekt erlaubt, dass Knoten-Sets in drei unterschiedlichen Haupttypen zurückgegeben werden:

- [Iteratoren](#iteratoren)
- [Snapshots](#snapshots)
- [Erste Knoten](#erster_knoten)

##### Iteratoren

Wenn der im Parameter `resultType` angegebene Ergebnistyp entweder:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt zu einem Knoten-Set von übereinstimmenden Knoten, das sich wie ein Iterator verhält und es uns erlaubt, auf die einzelnen Knoten zuzugreifen, indem wir die Methode `iterateNext()` des `XPathResult` verwenden.

Sobald wir über alle einzelnen übereinstimmenden Knoten iteriert haben, wird `iterateNext()` `null` zurückgeben.

Beachten Sie jedoch, dass, wenn das Dokument zwischen den Iterationen mutiert wird (der Dokumentbaum wird geändert), das die Iteration ungültig machen und die `invalidIteratorState`-Eigenschaft von `XPathResult` auf `true` gesetzt wird und eine `NS_ERROR_DOM_INVALID_STATE_ERR`-Ausnahme ausgelöst wird.

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

Wenn der im Parameter `resultType` angegebene Ergebnistyp entweder:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt zu einem statischen Knoten-Set von übereinstimmenden Knoten, das es uns erlaubt, auf jeden Knoten über die Methode `snapshotItem(itemNumber)` des `XPathResult`-Objekts zuzugreifen, wobei `itemNumber` der Index des abzurufenden Knotens ist. Die Gesamtanzahl der enthaltenen Knoten kann über die Eigenschaft `snapshotLength` abgerufen werden.

Snapshots ändern sich nicht bei Dokumentmutationen, sodass im Gegensatz zu den Iteratoren der Snapshot nicht ungültig wird, er entspricht jedoch möglicherweise nicht dem aktuellen Dokument, z.B. könnten die Knoten verschoben worden sein, es könnten Knoten enthalten sein, die nicht mehr existieren, oder es könnten neue Knoten hinzugefügt worden sein.

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

Wenn der im Parameter `resultType` angegebene Ergebnistyp entweder:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

ist, wird das zurückgegebene `XPathResult`-Objekt nur der erste gefundene Knoten, der dem XPath-Ausdruck entspricht. Dieser kann über die Eigenschaft `singleNodeValue` des `XPathResult`-Objekts abgerufen werden. Dieser Wert wird `null` sein, wenn die Knotensammlung leer ist.

Beachten Sie, dass für den ungeordneten Subtyp der einzelne zurückgegebene Knoten möglicherweise nicht der erste in der Dokumentreihenfolge ist, aber für den geordneten Subtyp erhalten Sie garantiert den ersten übereinstimmenden Knoten in der Dokumentreihenfolge.

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

Wenn der Ergebnistyp im Parameter `resultType` als `ANY_TYPE` angegeben ist, wird das zurückgegebene `XPathResult`-Objekt derjenige Typ sein, der sich als Ergebnis der Auswertung des Ausdrucks natürlich ergibt.

Es könnte sich um einen der einfachen Typen handeln (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`), **aber**, wenn der zurückgegebene Ergebnistyp ein Knoten-Set ist, wird es **nur** ein `UNORDERED_NODE_ITERATOR_TYPE` sein.

Um diesen Typ nach der Auswertung zu bestimmen, verwenden wir die `resultType`-Eigenschaft des `XPathResult`-Objekts. Die [Konstantenwerte](#definierte_konstanten_von_xpathresult) dieser Eigenschaft sind im Anhang definiert.

## Beispiele

### Innerhalb eines HTML-Dokuments

Der folgende Code soll in einem beliebigen JavaScript-Fragment innerhalb oder verknüpft mit dem HTML-Dokument platziert werden, gegen das der XPath-Ausdruck ausgewertet werden soll.

Um alle `<h2>`-Überschriftselemente in einem HTML-Dokument mithilfe von XPath zu extrahieren, ist der `xpathExpression` `"//h2"`. Dabei ist `//` der Rekursive Abfahrtsoperator, der Elemente mit dem Knotenname `h2` überall im Dokumentbaum auswählt. Der vollständige Code dafür ist: Link zum einführenden xpath-Dokument

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

Da wir über das gesamte Dokument nach den Überschriften suchen möchten, haben wir das [document](/de/docs/Web/API/Document)-Objekt selbst als `contextNode` verwendet.

Das Ergebnis dieses Ausdrucks ist ein `XPathResult`-Objekt. Wenn wir wissen möchten, welcher Typ von Ergebnis zurückgegeben wurde, können wir die `resultType`-Eigenschaft des zurückgegebenen Objekts auswerten. In diesem Fall wird das zu `4` auswerten, ein `UNORDERED_NODE_ITERATOR_TYPE`. Dies ist der Standard-Rückgabetyp, wenn das Ergebnis des XPath-Ausdrucks ein Knoten-Set ist. Es ermöglicht den Zugriff auf einen einzelnen Knoten zur Zeit und gibt die Knoten möglicherweise nicht in einer bestimmten Reihenfolge zurück. Um auf die zurückgegebenen Knoten zuzugreifen, verwenden wir die Methode `iterateNext()` des zurückgegebenen Objekts:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Sobald wir zu einem Knoten iterieren, haben wir Zugriff auf alle standardmäßigen DOM-Schnittstellen auf diesem Knoten. Nach dem Durchlaufen aller `h2`-Elemente, die von unserem Ausdruck zurückgegeben werden, gibt jeder weitere Aufruf von `iterateNext()` `null` zurück.

## Anhang

### Implementierung eines benutzerdefinierten Namensraumresolvers

Dies ist ein Beispiel nur zur Veranschaulichung. Diese Funktion muss Namensraum-Präfixe aus dem `xpathExpression` übernehmen und den URI zurückgeben, der diesem Präfix entspricht. Beispielsweise der Ausdruck:

```plain
'//xhtml:td/mathml:math'
```

wird alle [MathML](/de/docs/Web/MathML)-Ausdrücke auswählen, die Kinder von (X)HTML-Tabellenzellenelementen sind.

Um das Präfix `mathml:` mit dem Namensraum-URI `http://www.w3.org/1998/Math/MathML` und `xhtml:` mit dem URI `http://www.w3.org/1999/xhtml` zu verknüpfen, stellen wir eine Funktion bereit:

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

### Implementierung eines Standardnamensraums für XML-Dokumente

Wie zuvor im Abschnitt [Implementierung eines Standard-Namensraumresolvers](#implementierung_eines_standard-namensraumresolvers) erwähnt, behandelt der Standard-Resolver nicht den Standard-Namensraum für XML-Dokumente. Zum Beispiel mit diesem Dokument:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

wird `doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` eine leere Menge zurückgeben, wobei `nsResolver` ein beliebiger `Node` ist. Ein `null`-Resolver funktioniert auch nicht besser.

Ein möglicher Workaround besteht darin, einen benutzerdefinierten Resolver zu erstellen, der den richtigen Standard-Namensraum zurückgibt (in diesem Fall den Atom-Namensraum). Beachten Sie, dass Sie trotz allem in Ihrem XPath-Ausdruck ein Namensraum-Präfix verwenden müssen, damit die Resolver-Funktion es zu Ihrem geforderten Namensraum umwandeln kann. Z.B.:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass ein komplexerer Resolver erforderlich ist, wenn das Dokument mehrere Namensräume verwendet.

Ein Ansatz, der möglicherweise besser funktioniert (und es ermöglicht, dass die Namensräume nicht im Voraus bekannt sein müssen), wird im nächsten Abschnitt beschrieben.

### Verwendung von XPath-Funktionen, um Elemente mit einem Standard-Namensraum zu referenzieren

Ein weiterer Ansatz, um Standard-Elemente in einem Namensraum ohne Null (und einer, der gut für dynamische XPath-Ausdrücke funktioniert, bei denen die Namensräume möglicherweise nicht bekannt sind) zuzuordnen, besteht darin, auf ein bestimmtes Element in einer Form wie `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']` zu verweisen. Dies umgeht das Problem, dass eine XPath-Abfrage den Standard-Namensraum auf einem regelmäßig benannten Element nicht erkennen kann.

### Spezielles Abrufen von Namensraum-spezifischen Elementen und Attributen unabhängig vom Präfix

Wenn man in der Namensraumwahl flexibel sein möchte (was deren Zweck ist) und bei der Suche nach einem Namensraum-Element oder Attribut nicht zwingend ein bestimmtes Präfix verwendet werden soll, muss man spezielle Techniken nutzen.

Während man den Ansatz im obigen Abschnitt anpassen kann, um Elemente im Namensraum unabhängig vom gewählten Präfix zu testen (indem [`local-name()`](/de/docs/Web/XPath/Functions/local-name) in Kombination mit [`namespace-uri()`](/de/docs/Web/XPath/Functions/namespace-uri) anstelle von [`name()`](/de/docs/Web/XPath/Functions/name) verwendet wird), entsteht eine schwierigere Situation, wenn man ein Element mit einem gezielten Namensraum-Attribut in einem Prädikat erfassen möchte (angesichts des Fehlens von implementationsunabhängigen Variablen in XPath 1.0).

Zum Beispiel könnte man (fälschlicherweise) versuchen, ein Element mit einem Namensraum-Attribut folgendermaßen zu erfassen: `const xpathlink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Dies könnte versehentlich einige Elemente erfassen, wenn ein Attribut existieren würde, das einen lokalen Namen von `href` hätte, es könnte jedoch ein anderes Attribut gewesen sein, das den anvisierten (XLink) Namensraum hatte (anstatt [`@href`](/de/docs/Web/XPath/Axes#attribute)).

Um Elemente mit dem XLink `@href`-Attribut genau zu erfassen (ohne auch auf vordefinierte Präfixe in einem Namensraumresolver beschränkt zu sein), könnte man sie wie folgt erhalten:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
const thislevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisitemEl = thislevel.iterateNext();
```

#### Definierte Konstanten von XPathResult

| Definierte Konstante für Ergebnistyp | Wert | Beschreibung                                                                                                                                                                                                                    |
| ------------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                             | 0    | Ein Ergebnis-Set, das den Typ enthält, der sich als Natur Ergebnis der Auswertung des Ausdrucks ergibt. Beachten Sie, dass, wenn das Ergebnis ein Knoten-Set ist, UNORDERED_NODE_ITERATOR_TYPE immer der resultierende Typ ist. |
| NUMBER_TYPE                          | 1    | Ein Ergebnis, das eine einzelne Zahl enthält. Dies ist nützlich, zum Beispiel, in einem XPath-Ausdruck, der die `count()`-Funktion verwendet.                                                                                   |
| STRING_TYPE                          | 2    | Ein Ergebnis, das einen einzelnen String enthält.                                                                                                                                                                               |
| BOOLEAN_TYPE                         | 3    | Ein Ergebnis, das einen einzelnen Boolean-Wert enthält. Dies ist nützlich, zum Beispiel, in einem XPath-Ausdruck, der die `not()`-Funktion verwendet.                                                                           |
| UNORDERED_NODE_ITERATOR_TYPE         | 4    | Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge erscheinen, in der sie im Dokument vorkommen.                                     |
| ORDERED_NODE_ITERATOR_TYPE           | 5    | Ein Ergebnis-Knoten-Set, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnis-Set sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                                                 |
| UNORDERED_NODE_SNAPSHOT_TYPE         | 6    | Ein Ergebnis-Knoten-Set, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten müssen nicht unbedingt in der gleichen Reihenfolge erscheinen, in der sie im Dokument vorkommen.                          |
| ORDERED_NODE_SNAPSHOT_TYPE           | 7    | Ein Ergebnis-Knoten-Set, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten im Ergebnis-Set sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.                                      |
| ANY_UNORDERED_NODE_TYPE              | 8    | Ein Ergebnis-Knoten-Set, das einen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht unbedingt der erste Knoten im Dokument, der dem Ausdruck entspricht.                                             |
| FIRST_ORDERED_NODE_TYPE              | 9    | Ein Ergebnis-Knoten-Set, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.                                                                                                                                |

## Siehe auch

- [XPath](/de/docs/Web/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) aus _[Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ von G. Ken Holman

## Informationen zum Originaldokument

- Basierend auf einem Originaldokument von James Graham.
- Andere Mitwirkende: James Thompson.
