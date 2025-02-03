---
title: "Dokument: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wählt Elemente basierend auf dem im Parameter angegebenen [XPath](/de/docs/Web/XPath)-Ausdruck aus.

XPath-Ausdrücke können sowohl auf HTML- als auch XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der den zu bewertenden _xpath_ darstellt.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage (siehe die [XPath-Spezifikation](https://www.w3.org/TR/1999/REC-xpath-19991116/)).
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die für jegliche Namespace-Präfixe aufgerufen wird
    und einen String zurückgeben sollte, der die Namespace-URI darstellt, die mit diesem Präfix assoziiert ist.
    Sie wird verwendet, um Präfixe innerhalb des _xpath_ selbst aufzulösen,
    sodass sie mit dem Dokument abgeglichen werden können.
    Der Wert `null` ist bei HTML-Dokumenten oder wenn keine Namespace-Präfixe verwendet werden, üblich.
- `resultType`

  - : Ein Ganzzahlwert, der dem Typ des Ergebnisses `XPathResult` entspricht, das zurückgegeben werden soll.
    Folgende Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Welcher Typ natürlich aus dem gegebenen Ausdruck resultiert.
    - `NUMBER_TYPE` (`1`)
      - : Ein Ergebnis, das eine einzelne Zahl enthält. Nützlich beispielsweise in einem
        _xpath_-Ausdruck, der die Funktion `count()` verwendet.
    - `STRING_TYPE` (`2`)
      - : Ein Ergebnis, das einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Ein Ergebnis, das einen einzigen booleschen Wert enthält. Nützlich beispielsweise in einem
        _xpath_-Ausdruck, der die Funktion `not()` verwendet.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Ein Ergebnis, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten
        im Ergebnis sind nicht zwingend in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Versucht man, nach der Änderung eines Knotens die Ergebnisse zu durchlaufen, wird ein Fehler erzeugt.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Ein Ergebnis, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten
        im Ergebnis sind in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Versucht man, nach der Änderung eines Knotens die Ergebnisse zu durchlaufen, wird ein Fehler erzeugt.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Ein Ergebnis, das Schnappschüsse aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten im Ergebnis sind nicht zwingend in der Reihenfolge,
        in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschussknoten ändern.
        > Das Ändern des Dokuments macht den Schnappschuss nicht ungültig;
        > jedoch kann, wenn das Dokument geändert wird, der Schnappschuss nicht mehr dem aktuellen Stand des Dokuments entsprechen,
        > da Knoten verschoben, geändert, hinzugefügt oder entfernt worden sein könnten.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Ein Ergebnis, das Schnappschüsse aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten im Ergebnis sind in der Reihenfolge, in der sie
        im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschussknoten ändern.
        > Das Ändern des Dokuments macht den Schnappschuss nicht ungültig;
        > jedoch kann, wenn das Dokument geändert wird, der Schnappschuss nicht mehr dem aktuellen Stand des Dokuments entsprechen,
        > da Knoten verschoben, geändert, hinzugefügt oder entfernt worden sein könnten.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Ein Ergebnis, das einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der
        Knoten ist nicht zwingend der erste Knoten im Dokument, der dem
        Ausdruck entspricht.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Ein Ergebnis, das den ersten Knoten im Dokument enthält, der dem
        Ausdruck entspricht.

- `result`
  - : Ein vorhandenes `XPathResult`, das für die Ergebnisse verwendet werden soll. Wenn auf `null` gesetzt, erzeugt und gibt die Methode ein neues `XPathResult` zurück.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das auf die ausgewählten Knoten verweist. Wenn `result` `null` war, ist es ein neues Objekt,
wenn nicht, ist es dasselbe Objekt wie dasjenige, das als `result`-Parameter übergeben wurde.

## Beispiele

### Finden aller H2-Überschriften mittels XPath

```js
const headings = document.evaluate(
  "/html/body//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
/* Search the document for all h2 elements.
 * The result will likely be an unordered node iterator. */
let thisHeading = headings.iterateNext();
let alertText = "Level 2 headings in this document are:\n";
while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
alert(alertText); // Alerts the text of all h2 elements
```

Beachten Sie, dass im obigen Beispiel ein ausführlicherer _xpath_ gegenüber den üblichen Abkürzungen
wie `//h2` bevorzugt wird. Generell sorgt ein spezifischerer _xpath_-Selektor, wie im obigen
Beispiel, in der Regel für eine signifikante Leistungsverbesserung, insbesondere in sehr großen
Dokumenten. Dies liegt daran, dass die Evaluierung der Abfrage keine Zeit
verschwendet, um unnötige Knoten zu besuchen. Die Verwendung von // ist generell langsamer, da sie _jeden_
Knoten vom Wurzelknoten und alle Unterknoten auf mögliche Übereinstimmungen untersucht.

Weitere Optimierungen können durch den sorgfältigen Einsatz des Kontextparameters erreicht werden. Zum Beispiel,
wenn Sie wissen, dass der gesuchte Inhalt sich irgendwo innerhalb des body-Tags befindet,
können Sie Folgendes verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass im obigen Beispiel `document.body` als Kontext anstelle von
`document` verwendet wurde, sodass der _xpath_ von dem body-Element ausgeht. (In diesem Beispiel ist
das `"."` wichtig, um anzuzeigen, dass die Abfrage vom
Kontextknoten aus, document.body, beginnen sollte. Würde man das "." weglassen (wodurch `//h2` bleiben würde), würde
die Abfrage vom Wurzelknoten (`html`) aus beginnen, was verschwenderischer wäre.)

Siehe [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Guides/Introduction_to_using_XPath_in_JavaScript) für weitere Informationen.

### Element anhand von xml:id erhalten

Diese Funktion ist ein Ersatz für [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), wenn Sie stattdessen nach `xml:id` suchen müssen.

```js
function getElementByIdWrapper(xmlDoc, id) {
  return xmlDoc.evaluate(
    `//*[@xml:id="${id}"]`,
    xmlDoc,
    () => "http://www.w3.org/XML/1998/namespace",
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createExpression()`](/de/docs/Web/API/Document/createExpression)
- [`XPathResult`](/de/docs/Web/API/XPathResult)
- [Prüfen Sie die Browser-Unterstützung](https://codepen.io/johan/full/DJoqaX)
