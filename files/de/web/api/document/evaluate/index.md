---
title: "Dokumentation: Methode evaluate()"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wählt Elemente basierend auf dem [XPath](/de/docs/Web/XML/XPath)-Ausdruck aus, der in den Parametern übergeben wird.

XPath-Ausdrücke können sowohl auf HTML- als auch auf XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der das _xpath_ darstellt, das ausgewertet werden soll.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage (siehe die [XPath-Spezifikation](https://www.w3.org/TR/1999/REC-xpath-19991116/)).
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die alle Namensraumprefixe erhält und einen String zurückgeben sollte, der die mit dem Prefix assoziierte Namensraum-URI darstellt.
    Die Funktion wird verwendet, um Prefixe innerhalb des _xpath_ aufzulösen, damit sie mit dem Dokument abgeglichen werden können.
    Der Wert `null` ist üblich für HTML-Dokumente oder wenn keine Namensraumprefixe verwendet werden.
- `resultType`

  - : Eine Ganzzahl, die dem Typ von Ergebnis entspricht, das von `XPathResult` zurückgegeben wird.
    Folgende Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Der Typ, der sich natürlich aus dem angegebenen Ausdruck ergibt.
    - `NUMBER_TYPE` (`1`)
      - : Ein Ergebnisset, das eine einzelne Zahl enthält. Nützlich beispielsweise in einem
        _xpath_-Ausdruck mit der Funktion `count()`.
    - `STRING_TYPE` (`2`)
      - : Ein Ergebnisset, das einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Ein Ergebnisset, das einen einzelnen Booleschen Wert enthält. Nützlich beispielsweise in einem
        _xpath_-Ausdruck mit der Funktion `not()`.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Ein Ergebnisset, das alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten
        im Ergebnisset sind nicht zwingend in derselben Reihenfolge angeordnet, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Eine Modifikation eines Knotens macht den Iterator ungültig.
        > Nach der Modifikation eines Knotens führt der Versuch, durch die Ergebnisse zu iterieren, zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Ein Ergebnisset, das alle mit dem Ausdruck übereinstimmenden Knoten enthält. Die Knoten
        im Ergebnisset sind in derselben Reihenfolge angeordnet, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Eine Modifikation eines Knotens macht den Iterator ungültig.
        > Nach der Modifikation eines Knotens führt der Versuch, durch die Ergebnisse zu iterieren, zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Ein Ergebnisset, das Snapshots aller mit dem Ausdruck übereinstimmenden Knoten enthält.
        Die Knoten im Ergebnisset sind nicht zwingend in derselben Reihenfolge angeordnet, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Snapshots, im Wesentlichen Listen der übereinstimmenden Knoten.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Snapshot-Knoten modifizieren.
        > Eine Modifikation des Dokuments macht den Snapshot nicht ungültig;
        > jedoch entspricht der Snapshot möglicherweise nicht mehr dem aktuellen Zustand des Dokuments,
        > da sich Knoten verschoben haben, geändert wurden oder hinzugefügt bzw. entfernt wurden.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Ein Ergebnisset, das Snapshots aller mit dem Ausdruck übereinstimmenden Knoten enthält.
        Die Knoten im Ergebnisset sind in derselben Reihenfolge angeordnet, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Snapshots, im Wesentlichen Listen der übereinstimmenden Knoten.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Snapshot-Knoten modifizieren.
        > Eine Modifikation des Dokuments macht den Snapshot nicht ungültig;
        > jedoch entspricht der Snapshot möglicherweise nicht mehr dem aktuellen Zustand des Dokuments,
        > da sich Knoten verschoben haben, geändert wurden oder hinzugefügt bzw. entfernt wurden.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Ein Ergebnisset, das einen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der
        Knoten ist nicht zwingend der erste Knoten im Dokument, der dem Ausdruck entspricht.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Ein Ergebnisset, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.

- `result`
  - : Ein existierendes `XPathResult` zur Verwendung für die Ergebnisse. Falls `null` gesetzt ist, erstellt die Methode ein neues `XPathResult` und gibt es zurück.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das mit den ausgewählten Knoten verknüpft ist. Falls `result` `null` war, handelt es sich um ein neues Objekt,
andernfalls ist es dasselbe Objekt, das als Parameter `result` übergeben wurde.

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

Beachten Sie im obigen Beispiel, dass ein ausführlicherer _xpath_ gegenüber häufigen Abkürzungen wie `//h2` bevorzugt wird.
Generell erzielen spezifischere _xpath_-Selektoren, wie im obigen Beispiel, eine signifikante Leistungssteigerung, besonders
bei sehr großen Dokumenten. Dies liegt daran, dass die Auswertung der Abfrage keine Zeit darauf verschwendet, unnötige Knoten zu durchsuchen.
Die Verwendung von `//` ist im Allgemeinen langsam, da es _jeden_ Knoten vom Wurzelknoten und alle Unterknoten besucht, um mögliche Übereinstimmungen zu finden.

Weitere Optimierungen können durch die sorgfältige Verwendung des Kontextparameters erreicht werden. Zum Beispiel, wenn Sie wissen, dass sich der gesuchte Inhalt
irgendwo innerhalb des `body`-Tags befindet, können Sie Folgendes verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass im obigen Beispiel `document.body` als Kontext statt `document` verwendet wurde, sodass das _xpath_ vom `body`-Element startet.
(In diesem Beispiel ist es wichtig, das `"."` anzugeben, um anzugeben, dass die Abfrage vom Kontextknoten `document.body` starten soll.
Wenn das `"."` weggelassen wird (was zu `//h2` führt), würde die Abfrage vom Wurzelknoten (`html`) starten, was verschwenderischer wäre.)

Weitere Informationen finden Sie unter [Einführung in die Verwendung von XPath mit JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript).

### Abrufen eines Elements anhand von xml:id

Diese Funktion ist ein Ersatz für [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), wenn Sie nach `xml:id` suchen müssen.

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
