---
title: "Dokument: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wählt Elemente basierend auf dem [XPath](/de/docs/Web/XML/XPath)-Ausdruck aus, der in den Parametern angegeben ist.

XPath-Ausdrücke können sowohl auf HTML- als auch auf XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein Zeichenfolgenwert, der das zu evaluierende _xpath_ darstellt.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage.
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die übergebene Namespace-Präfixe empfangen soll und eine Zeichenfolge zurückgeben sollte, die den Namespace-URI repräsentiert, der mit diesem Präfix assoziiert ist.
    Sie wird verwendet, um Präfixe innerhalb des _xpath_ selbst aufzulösen,
    sodass sie mit dem Dokument übereinstimmen können.
    Der Wert `null` ist üblich für HTML-Dokumente oder wenn keine Namespace-Präfixe verwendet werden.
- `resultType`

  - : Eine Ganzzahl, die dem Ergebnistyp `XPathResult` entspricht, der zurückgegeben werden soll.
    Die folgenden Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Jeder Typ, der natürlicherweise aus dem gegebenen Ausdruck resultiert.
    - `NUMBER_TYPE` (`1`)
      - : Eine Ergebnismenge, die eine einzelne Zahl enthält. Nützlich beispielsweise in einem
        _xpath_-Ausdruck, der die `count()`-Funktion verwendet.
    - `STRING_TYPE` (`2`)
      - : Eine Ergebnismenge, die einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Eine Ergebnismenge, die einen einzelnen Booleschen Wert enthält. Nützlich beispielsweise in einem
        _xpath_-Ausdruck, der die `not()`-Funktion verwendet.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Eine Ergebnismenge, die alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten
        in der Ergebnismenge befinden sich nicht unbedingt in der Reihenfolge, in der sie im
        Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Nach dem Ändern eines Knotens führt der Versuch, durch die Ergebnisse zu iterieren, zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Eine Ergebnismenge, die alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten
        in der Ergebnismenge befinden sich in der gleichen Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Nach dem Ändern eines Knotens führt der Versuch, durch die Ergebnisse zu iterieren, zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Eine Ergebnismenge, die Schnappschüsse aller mit dem
        Ausdruck übereinstimmenden Knoten enthält. Die Knoten in der Ergebnismenge befinden sich nicht unbedingt in der
        Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschussknoten ändern.
        > Das Ändern des Dokuments macht den Schnappschuss nicht ungültig;
        > wenn das Dokument jedoch geändert wird, entspricht der Schnappschuss möglicherweise nicht mehr dem aktuellen Stand des Dokuments,
        > da Knoten verschoben, geändert, hinzugefügt oder entfernt worden sind.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Eine Ergebnismenge, die Schnappschüsse aller mit dem
        Ausdruck übereinstimmenden Knoten enthält. Die Knoten in der Ergebnismenge befinden sich in der
        gleichen Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschussknoten ändern.
        > Das Ändern des Dokuments macht den Schnappschuss nicht ungültig;
        > wenn das Dokument jedoch geändert wird, entspricht der Schnappschuss möglicherweise nicht mehr dem aktuellen Stand des Dokuments,
        > da Knoten verschoben, geändert, hinzugefügt oder entfernt worden sind.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Eine Ergebnismenge, die einen beliebigen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der
        Knoten ist nicht unbedingt der erste Knoten im Dokument, der mit dem
        Ausdruck übereinstimmt.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Eine Ergebnismenge, die den ersten Knoten im Dokument enthält, der mit dem
        Ausdruck übereinstimmt.

- `result`
  - : Ein vorhandenes `XPathResult` zur Verwendung für die Ergebnisse. Wenn auf `null` gesetzt, erstellt und gibt die Methode ein neues `XPathResult` zurück.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das auf die ausgewählten Knoten verweist. Wenn `result` `null` war, handelt es sich um ein neues Objekt,
anderenfalls ist es dasselbe Objekt wie das als `result`-Parameter übergebene.

## Beispiele

### Finden aller H2-Überschriften per XPath

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
wie `//h2` verwendet wird. Im Allgemeinen bieten spezifischere _xpath_-Selektoren, wie im obigen
Beispiel, in der Regel eine deutliche Leistungsverbesserung, insbesondere bei sehr großen
Dokumenten. Dies liegt daran, dass die Evaluierung der Abfrage keine unnötige Zeit
mit dem Besuch nicht benötigter Knoten verschwendet. Die Verwendung von // ist im Allgemeinen langsam, da es jeden
Knoten vom Stamm und alle Teilknoten auf der Suche nach möglichen Übereinstimmungen besucht.

Eine weitere Optimierung kann durch sorgfältige Verwendung des Kontexts erreicht werden. Zum Beispiel, wenn Sie wissen, dass der Inhalt, den Sie suchen, sich irgendwo innerhalb des body-Tags befindet, können Sie Folgendes verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass im obigen `document.body` als Kontext anstelle von
`document` verwendet wurde, sodass der _xpath_ vom body-Element startet. (In diesem Beispiel ist der
`"."` wichtig, um anzuzeigen, dass die Abfrage vom
Kontextknoten, document.body, starten soll. Wenn der "." weggelassen würde (bleibt `//h2`),
würde die Abfrage vom Stammknoten (`html`) starten, was verschwenderischer wäre.)

Siehe [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript) für weitere Informationen.

### Elemente nach xml:id abrufen

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
- [Überprüfung der Browserunterstützung](https://codepen.io/johan/full/DJoqaX)
