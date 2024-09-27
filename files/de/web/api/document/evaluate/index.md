---
title: "Document: evaluate() Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wählt Elemente basierend auf dem im Parameter angegebenen [XPath](/de/docs/Web/XPath)-Ausdruck aus.

XPath-Ausdrücke können sowohl in HTML- als auch in XML-Dokumenten ausgewertet werden.

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
  - : Eine Funktion, die alle Namespace-Präfixe übergeben bekommt
    und einen String zurückgeben sollte, der den mit diesem Präfix verbundenen Namespace-URI darstellt.
    Sie wird verwendet, um Präfixe innerhalb des _xpath_ selbst aufzulösen,
    sodass sie mit dem Dokument übereinstimmen können.
    Der Wert `null` ist üblich für HTML-Dokumente oder wenn keine Namespace-Präfixe verwendet werden.
- `resultType`

  - : Eine Ganzzahl, die dem Typ des zurückgegebenen `XPathResult` entspricht.
    Folgende Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Welcher Typ auch immer natürlich aus dem gegebenen Ausdruck resultiert.
    - `NUMBER_TYPE` (`1`)
      - : Eine Ergebnismenge, die eine einzelne Zahl enthält. Nützlich z.B. in einem _xpath_-Ausdruck mit der Funktion `count()`.
    - `STRING_TYPE` (`2`)
      - : Eine Ergebnismenge, die einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Eine Ergebnismenge, die einen einzelnen booleschen Wert enthält. Nützlich z.B. in einem _xpath_-Ausdruck mit der Funktion `not()`.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Eine Ergebnismenge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten
        in der Ergebnismenge sind nicht unbedingt in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Eine Änderung an einem Knoten macht den Iterator ungültig.
        > Ein Versuch, nach einer Änderung eines Knotens durch die Ergebnisse zu iterieren, führt zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Eine Ergebnismenge, die alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten
        in der Ergebnismenge sind in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Eine Änderung an einem Knoten macht den Iterator ungültig.
        > Ein Versuch, nach einer Änderung eines Knotens durch die Ergebnisse zu iterieren, führt zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Eine Ergebnismenge, die Schnappschüsse aller Knoten enthält, die mit dem
        Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind nicht unbedingt in der gleichen
        Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen der passenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschuss-Knoten ändern.
        > Eine Änderung am Dokument macht den Schnappschuss nicht ungültig;
        > jedoch kann der Schnappschuss, wenn das Dokument geändert wurde, nicht mehr dem aktuellen Zustand des Dokuments entsprechen,
        > da sich Knoten möglicherweise bewegt haben, geändert, hinzugefügt oder entfernt wurden.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Eine Ergebnismenge, die Schnappschüsse aller Knoten enthält, die mit dem
        Ausdruck übereinstimmen. Die Knoten in der Ergebnismenge sind in der gleichen Reihenfolge, in der sie
        im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen der passenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschuss-Knoten ändern.
        > Eine Änderung am Dokument macht den Schnappschuss nicht ungültig;
        > jedoch kann der Schnappschuss, wenn das Dokument geändert wurde, nicht mehr dem aktuellen Zustand des Dokuments entsprechen,
        > da sich Knoten möglicherweise bewegt haben, geändert, hinzugefügt oder entfernt wurden.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Eine Ergebnismenge, die jeden einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der
        Knoten ist nicht unbedingt der erste Knoten im Dokument, der mit dem Ausdruck übereinstimmt.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Eine Ergebnismenge, die den ersten Knoten im Dokument enthält, der mit dem Ausdruck übereinstimmt.

- `result`
  - : Ein vorhandenes `XPathResult` zur Verwendung für die Ergebnisse. Wenn auf `null` gesetzt, erstellt und gibt die Methode ein neues `XPathResult` zurück.

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

Beachten Sie im obigen Beispiel, dass ein ausführlicherer _xpath_ gegenüber üblichen Abkürzungen wie `//h2` bevorzugt wird.
Allgemein bieten spezifischere _xpath_-Selektoren, wie im obigen Beispiel, normalerweise eine signifikante Leistungssteigerung, besonders bei sehr großen
Dokumenten. Dies liegt daran, dass die Bewertung der Abfrage keine Zeit verschwendet,
um unnötige Knoten zu besuchen. Die Verwendung von // ist im Allgemeinen langsam, da sie _jeden_
Knoten aus der Wurzel und allen Unterknoten besucht, um mögliche Übereinstimmungen zu finden.

Weitere Optimierungen können durch eine sorgfältige Verwendung des Kontext Parameters erreicht werden. Wenn Sie zum Beispiel wissen, dass der gesuchte Inhalt irgendwo im body-Tag enthalten ist,
können Sie dies verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie im obigen Beispiel, dass `document.body` als Kontext verwendet wird, anstatt `document`, sodass der _xpath_ bei dem body-Element beginnt. (In diesem Beispiel ist der
`"."` wichtig, um anzuzeigen, dass die Abfrage beim
Kontextknoten, document.body, beginnen soll. Wenn der "." weggelassen würde (wobei `//h2` übrig bliebe), würde die
Abfrage beim Wurzelknoten (`html`) beginnen, was verschwenderischer wäre.)

Weitere Informationen finden Sie unter [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript).

### Element durch xml:id erhalten

Diese Funktion ist ein Ersatz für [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById) für den Fall, dass Sie nach `xml:id` suchen müssen.

```js
function getElementByIdWrapper(xmldoc, id) {
  return xmldoc.evaluate(
    `//*[@xml:id="${id}"]`,
    xmldoc,
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
- [Browserunterstützung überprüfen](https://codepen.io/johan/full/DJoqaX)
