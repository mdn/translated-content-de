---
title: "Dokument: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 8ea63a911eed0b22c74e2c3f0c41ae1e98abc314
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wählt Elemente basierend auf dem [XPath](/de/docs/Web/XML/XPath)-Ausdruck aus, der in den Parametern angegeben ist.

XPath-Ausdrücke können sowohl auf HTML- als auch auf XML-Dokumente angewandt werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der das zu evaluierende _xpath_ darstellt.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage.
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die alle Namespace-Präfixe übergeben bekommt
    und einen String zurückgeben sollte, der den mit diesem Präfix verbundenen Namespace-URI darstellt.
    Sie wird verwendet, um Präfixe innerhalb des _xpath_ selbst aufzulösen,
    sodass diese mit dem Dokument übereinstimmen können.
    Der Wert `null` ist üblich für HTML-Dokumente oder wenn keine Namespace-Präfixe verwendet werden.
- `resultType`
  - : Eine Ganzzahl, die dem zurückzugebenden Ergebnistyp `XPathResult` entspricht.
    Folgende Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Jeder Typ, der sich natürlich aus dem angegebenen Ausdruck ergibt.
    - `NUMBER_TYPE` (`1`)
      - : Eine Ergebnismenge, die eine einzelne Zahl enthält. Nützlich zum Beispiel in einem
        _xpath_-Ausdruck, der die `count()`-Funktion verwendet.
    - `STRING_TYPE` (`2`)
      - : Eine Ergebnismenge, die einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Eine Ergebnismenge, die einen einzelnen booleschen Wert enthält. Nützlich, zum Beispiel, in einem
        _xpath_-Ausdruck, der die `not()`-Funktion verwendet.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Eine Ergebnismenge, die alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten
        in der Ergebnismenge sind nicht unbedingt in der Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Eine Änderung eines Knotens macht den Iterator ungültig.
        > Nach einer Änderung eines Knotens wird beim Versuch, durch die Ergebnisse zu iterieren, ein Fehler auftreten.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Eine Ergebnismenge, die alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten
        in der Ergebnismenge befinden sich in der Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Eine Änderung eines Knotens macht den Iterator ungültig.
        > Nach einer Änderung eines Knotens wird beim Versuch, durch die Ergebnisse zu iterieren, ein Fehler auftreten.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Eine Ergebnismenge, die Schnappschüsse aller mit dem
        Ausdruck übereinstimmenden Knoten enthält. Die Knoten in der Ergebnismenge
        sind nicht unbedingt in der Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschussknoten ändern.
        > Änderungen am Dokument machen den Schnappschuss nicht ungültig;
        > jedoch, wenn das Dokument geändert wird, kann der Schnappschuss nicht mit dem aktuellen Zustand des Dokuments übereinstimmen,
        > da Knoten verschoben, geändert, hinzugefügt oder entfernt worden sein können.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Eine Ergebnismenge, die Schnappschüsse aller mit dem
        Ausdruck übereinstimmenden Knoten enthält. Die Knoten in der Ergebnismenge
        sind in der Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschussknoten ändern.
        > Änderungen am Dokument machen den Schnappschuss nicht ungültig;
        > jedoch, wenn das Dokument geändert wird, kann der Schnappschuss nicht mit dem aktuellen Zustand des Dokuments übereinstimmen,
        > da Knoten verschoben, geändert, hinzugefügt oder entfernt worden sein können.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Eine Ergebnismenge, die einen beliebigen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der
        Knoten ist nicht unbedingt der erste Knoten im Dokument, der mit dem
        Ausdruck übereinstimmt.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Eine Ergebnismenge, die den ersten Knoten im Dokument enthält, der mit dem
        Ausdruck übereinstimmt.

- `result`
  - : Ein bestehendes `XPathResult`, das für die Ergebnisse verwendet werden soll. Wenn auf `null` gesetzt, wird die Methode ein neues `XPathResult` erstellen und zurückgeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das auf die ausgewählten Knoten verweist. Wenn `result` `null` war, ist es ein neues Objekt, andernfalls ist es dasselbe Objekt, das als `result`-Parameter übergeben wurde.

## Beispiele

### Finden aller H2-Überschriften mit XPath

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

In dem obigen Beispiel wird ein ausführlicheres _xpath_ gegenüber gängigen Abkürzungen
wie `//h2` bevorzugt. Im Allgemeinen bieten spezifischere _xpath_-Selektoren, wie im obigen
Beispiel, eine signifikante Leistungsverbesserung, besonders bei sehr großen
Dokumenten. Dies liegt daran, dass die Evaluierung der Abfrage keine Zeit
damit verschwendet, unnötige Knoten zu besuchen. Die Verwendung von // ist im Allgemeinen langsam, da es _jeden_
Knoten vom Stamm und alle Unterknoten besucht, um nach möglichen Übereinstimmungen zu suchen.

Eine weitere Optimierung kann durch sorgfältigen Einsatz des Kontextparameters erreicht werden. Zum
Beispiel, wenn Sie wissen, dass der gesuchte Inhalt irgendwo innerhalb des Body-Tags ist,
können Sie dies verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass im obigen Beispiel `document.body` als Kontext statt
`document` verwendet wird, sodass das _xpath_ vom Body-Element startet. (In diesem Beispiel ist das
`"."` wichtig, um anzuzeigen, dass die Abfrage vom
Kontextknoten, document.body, starten soll. Wenn das "." weggelassen würde (also `//h2`)
würde die Abfrage vom Wurzelknoten (`html`) starten, was
viel verschwenderischer wäre.)

Weitere Informationen finden Sie unter [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript).

### Element abrufen nach xml:id

Diese Funktion ist ein Ersatz für [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) für den Fall, dass Sie nach `xml:id` suchen müssen.

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
