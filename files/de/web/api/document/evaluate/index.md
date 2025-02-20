---
title: "Dokumentation: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wählt Elemente basierend auf dem im Parameter angegebenen [XPath](/de/docs/Web/XML/XPath)-Ausdruck aus.

XPath-Ausdrücke können sowohl in HTML- als auch in XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der den zu bewertenden _xpath_ darstellt.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage.
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die alle Namenspräfixe übergeben bekommt und einen String zurückgeben soll, der die mit diesem Präfix assoziierte Namespace-URI darstellt. Diese wird verwendet, um Präfixe innerhalb des _xpath_ zu lösen, sodass diese mit dem Dokument abgeglichen werden können. Der Wert `null` ist bei HTML-Dokumenten oder wenn keine Namenspräfixe verwendet werden, gängig.
- `resultType`

  - : Eine Ganzzahl, die dem Typ des zurückzugebenden Ergebnisses `XPathResult` entspricht.
    Folgende Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Der Typ, der sich natürlich aus dem angegebenen Ausdruck ergibt.
    - `NUMBER_TYPE` (`1`)
      - : Ein Ergebnis, das eine einzige Zahl enthält. Nützlich beispielsweise in einem _xpath_-Ausdruck, der die Funktion `count()` verwendet.
    - `STRING_TYPE` (`2`)
      - : Ein Ergebnis, das einen einzigen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Ein Ergebnis, das einen einzigen booleschen Wert enthält. Nützlich beispielsweise in einem _xpath_-Ausdruck, der die Funktion `not()` verwendet.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Ein Ergebnis, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten sind im Ergebnis nicht unbedingt in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Wenn ein Knoten geändert wird, wird der Iterator ungültig.
        > Nach einer Änderung eines Knotens führt der Versuch, die Ergebnisse weiter zu durchlaufen, zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Ein Ergebnis, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten sind im Ergebnis in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Wenn ein Knoten geändert wird, wird der Iterator ungültig.
        > Nach einer Änderung eines Knotens führt der Versuch, die Ergebnisse weiter zu durchlaufen, zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Ein Ergebnis, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten sind im Ergebnis nicht unbedingt in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Snapshots, bei denen es sich im Wesentlichen um Listen von übereinstimmenden Knoten handelt.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Snapshot-Knoten verändern.
        > Änderungen am Dokument machen den Snapshot nicht ungültig;
        > jedoch kann der Snapshot unter Umständen nicht mehr dem aktuellen Zustand des Dokuments entsprechen, wenn sich Knoten bewegt, geändert, hinzugefügt oder entfernt haben.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Ein Ergebnis, das Snapshots aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten sind im Ergebnis in der Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Snapshots, bei denen es sich im Wesentlichen um Listen von übereinstimmenden Knoten handelt.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Snapshot-Knoten verändern.
        > Änderungen am Dokument machen den Snapshot nicht ungültig;
        > jedoch kann der Snapshot unter Umständen nicht mehr dem aktuellen Zustand des Dokuments entsprechen, wenn sich Knoten bewegt, geändert, hinzugefügt oder entfernt haben.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Ein Ergebnis, das einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht unbedingt der erste im Dokument, der dem Ausdruck entspricht.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Ein Ergebnis, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.

- `result`
  - : Ein bestehendes `XPathResult`, das für die Ergebnisse verwendet werden soll. Wenn auf `null` gesetzt, erstellt die Methode ein neues `XPathResult`.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das mit den ausgewählten Knoten verknüpft ist. Wenn `result` `null` war, ist es ein neues Objekt, andernfalls ist es dasselbe Objekt, das als Parameter `result` übergeben wurde.

## Beispiele

### Alle H2-Überschriften per XPath finden

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

In dem obigen Beispiel wird ein ausführlicherer _xpath_ gegenüber üblichen Abkürzungen wie `//h2` bevorzugt. Allgemein liefern spezifischere _xpath_-Selektoren, wie im obigen Beispiel, oft einen erheblichen Leistungsgewinn, insbesondere bei sehr großen Dokumenten. Dies liegt daran, dass die Abfrageauswertung keine Zeit mit dem Besuch unnötiger Knoten verschwendet. Die Verwendung von `//` ist im Allgemeinen langsamer, da sie _jede_ Knotenstruktur vom Wurzelknoten und alle untergeordneten Knoten besucht, um mögliche Übereinstimmungen zu finden.

Eine weitere Optimierung kann durch die sorgfältige Nutzung des Kontextparameters erreicht werden. Wenn Sie beispielsweise wissen, dass sich der gesuchte Inhalt irgendwo im `<body>`-Tag befindet, können Sie Folgendes verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass in dem obigen Beispiel `document.body` als Kontext anstelle von `document` verwendet wurde, sodass der _xpath_ im `<body>`-Element beginnt. (In diesem Beispiel ist das `"."` wichtig, um anzugeben, dass die Abfrage am Kontextknoten, also `document.body`, beginnen soll. Wenn das `"."` weggelassen würde (z. B. bei `//h2`), würde die Abfrage am Wurzelknoten (`html`) beginnen, was ineffizienter wäre.)

Weitere Informationen finden Sie unter [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript).

### Element per xml:id abrufen

Diese Funktion ersetzt [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), wenn Sie nach `xml:id` suchen müssen.

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
- [Überprüfen Sie die Browser-Unterstützung](https://codepen.io/johan/full/DJoqaX)
