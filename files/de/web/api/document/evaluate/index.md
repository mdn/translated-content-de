---
title: "Dokument: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle wählt Elemente basierend auf dem im Parameter angegebenen [XPath](/de/docs/Web/XPath)-Ausdruck aus.

XPath-Ausdrücke können sowohl auf HTML- als auch auf XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der das zu evaluierende _XPath_ repräsentiert.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage (siehe die [XPath-Spezifikation](https://www.w3.org/TR/1999/REC-xpath-19991116/)).
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die für alle Namensraumpräfixe aufgerufen wird und einen String zurückgeben soll, der den Namespace-URI darstellt, der diesem Präfix zugeordnet ist.
    Er wird verwendet, um Präfixe innerhalb des _XPath_ selbst aufzulösen, damit sie mit dem Dokument übereinstimmen.
    Der Wert `null` ist üblich für HTML-Dokumente oder wenn keine Namensraumpräfixe verwendet werden.
- `resultType`

  - : Eine Ganzzahl, die mit dem Typ des zu retournierenden `XPathResult`-Ergebnisses übereinstimmt.
    Die folgenden Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Egal welcher Typ, der natürlich aus dem gegebenen Ausdruck resultiert.
    - `NUMBER_TYPE` (`1`)
      - : Ein Ergebnisset, das eine einzelne Zahl enthält. Nützlich zum Beispiel in einem
        _XPath_-Ausdruck mit der `count()`-Funktion.
    - `STRING_TYPE` (`2`)
      - : Ein Ergebnisset, das einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Ein Ergebnisset, das einen einzelnen booleschen Wert enthält. Nützlich, zum Beispiel, ein
        _XPath_-Ausdruck mit der `not()`-Funktion.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Ein Ergebnisset, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten
        im Ergebnisset sind nicht unbedingt in der gleichen Reihenfolge, in der sie im
        Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Nach dem Ändern eines Knotens führt ein Versuch, die Ergebnisse zu durchlaufen, zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Ein Ergebnisset, das alle Knoten enthält, die mit dem Ausdruck übereinstimmen. Die Knoten
        im Ergebnisset sind in der gleichen Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Verweise auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Nach dem Ändern eines Knotens führt ein Versuch, die Ergebnisse zu durchlaufen, zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Ein Ergebnisset, das Schnappschüsse aller Knoten enthält, die mit dem
        Ausdruck übereinstimmen. Die Knoten im Ergebnisset sind nicht unbedingt in der gleichen
        Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Momentaufnahmen, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Momentaufnahme-Knoten ändern.
        > Änderungen am Dokument machen die Momentaufnahme nicht ungültig;
        > jedoch, wenn das Dokument geändert wird, muss die Momentaufnahme nicht mehr dem aktuellen Stand des Dokuments entsprechen,
        > da Knoten verschoben, verändert, hinzugefügt oder entfernt worden sein können.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Ein Ergebnisset, das Schnappschüsse aller Knoten enthält, die mit dem
        Ausdruck übereinstimmen. Die Knoten im Ergebnisset sind in der gleichen Reihenfolge wie sie
        im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Momentaufnahmen, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Momentaufnahme-Knoten ändern.
        > Änderungen am Dokument machen die Momentaufnahme nicht ungültig;
        > jedoch, wenn das Dokument geändert wird, muss die Momentaufnahme nicht mehr dem aktuellen Stand des Dokuments entsprechen,
        > da Knoten verschoben, verändert, hinzugefügt oder entfernt worden sein können.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Ein Ergebnisset, das einen beliebigen einzelnen Knoten enthält, der mit dem Ausdruck übereinstimmt. Der
        Knoten muss nicht unbedingt der erste Knoten im Dokument sein, der mit dem
        Ausdruck übereinstimmt.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Ein Ergebnisset, das den ersten Knoten im Dokument enthält, der mit dem
        Ausdruck übereinstimmt.

- `result`
  - : Ein vorhandenes `XPathResult`, das für die Ergebnisse verwendet werden soll. Wenn `null` festgelegt ist, erstellt und gibt die Methode ein neues `XPathResult` zurück.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das auf die ausgewählten Knoten verweist. Wenn `result` `null` war, ist es ein neues Objekt, andernfalls ist es dasselbe Objekt wie das, das als `result`-Parameter übergeben wurde.

## Beispiele

### Alle H2-Überschriften mit XPath finden

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

Beachten Sie, dass im obigen Beispiel ein ausführlicheres _XPath_ bevorzugt wird gegenüber allgemeinen Abkürzungen wie `//h2`. Im Allgemeinen liefern spezifischere _XPath_-Selektoren, wie im obigen
Beispiel, gewöhnlich einen erheblichen Performancegewinn, insbesondere bei sehr großen
Dokumenten. Dies liegt daran, dass die Auswertung der Abfrage keine Zeit
damit verschwendet, unnötige Knoten zu besuchen. Die Verwendung von // ist generell langsam, da jeder
Knoten vom Root und allen Unterknoten gesucht wird, um mögliche Übereinstimmungen zu finden.

Weitere Optimierungen können durch sorgfältige Verwendung des Kontextparameters erreicht werden. Zum Beispiel, wenn Sie wissen, dass der Inhalt, den Sie suchen, irgendwo im body-Tag ist, können Sie dies verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie im obigen Beispiel, dass `document.body` als Kontext verwendet wurde anstelle von
`document`, sodass das _XPath_ vom body-Element aus beginnt. (In diesem Beispiel ist das
`"."` wichtig, um anzugeben, dass die Abfrage vom
Kontextknoten, document.body, starten soll. Wenn das Symbol "." ausgelassen würde (so dass `//h2` übrig bleibt), würde die
Abfrage vom Root-Knoten (`html`) starten, was verschwenderischer wäre.)

Siehe [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript) für weitere Informationen.

### Element per xml:id abrufen

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
- [Browser-Unterstützung prüfen](https://codepen.io/johan/full/DJoqaX)
