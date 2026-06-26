---
title: "Dokument: evaluate() Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: 61db27d780267e3f68583214b43bc24319de455b
---

{{ ApiRef("DOM") }}

Die **`evaluate()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle wählt Elemente basierend auf dem [XPath](/de/docs/Web/XML/XPath)-Ausdruck aus, der in den Parametern angegeben ist.

XPath-Ausdrücke können sowohl auf HTML- als auch auf XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der den _xpath_ repräsentiert, der ausgewertet werden soll.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage.
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver` {{optional_inline}}
  - : Eine Funktion, die mit allen Namensraum-Präfixen aufgerufen wird und einen String zurückgeben sollte, der den Namensraum-URI wiedergibt, der mit diesem Präfix assoziiert ist.
    Er wird verwendet, um Präfixe innerhalb des _xpath_ selbst aufzulösen, damit sie mit dem Dokument abgestimmt werden können.
    Der Wert `null` ist üblich für HTML-Dokumente oder wenn keine Namensraum-Präfixe verwendet werden.
    Wenn der Parameter weggelassen wird, ist der Standardwert `null`.
- `resultType` {{optional_inline}}
  - : Ein Integer, der dem Typ von `XPathResult` entspricht, der zurückgegeben werden soll.
    Wird der Parameter weggelassen, ist der Standardwert `ANY_TYPE` (`0`).
    Die folgenden Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Jeder Typ, der sich natürlich aus dem gegebenen Ausdruck ergibt.
    - `NUMBER_TYPE` (`1`)
      - : Ein Ergebnisset, das eine einzelne Zahl enthält. Nützlich beispielsweise in
        einem _xpath_-Ausdruck, der die `count()`-Funktion verwendet.
    - `STRING_TYPE` (`2`)
      - : Ein Ergebnisset, das einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Ein Ergebnisset, das einen einzelnen booleschen Wert enthält. Nützlich beispielsweise in
        einem _xpath_-Ausdruck, der die `not()`-Funktion verwendet.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Ein Ergebnisset, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten
        im Ergebnisset sind nicht unbedingt in der gleichen Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Nach Änderung eines Knotens führt der Versuch, durch die Ergebnisse zu iterieren, zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Ein Ergebnisset, das alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten
        im Ergebnisset sind in der gleichen Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Das Ändern eines Knotens macht den Iterator ungültig.
        > Nach Änderung eines Knotens führt der Versuch, durch die Ergebnisse zu iterieren, zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Ein Ergebnisset, das Schnappschüsse aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten im Ergebnisset sind nicht unbedingt in der
        Reihenfolge, in der sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschuss-Knoten ändern.
        > Das Ändern des Dokuments macht den Schnappschuss nicht ungültig;
        > wenn jedoch das Dokument geändert wird, entspricht der Schnappschuss möglicherweise nicht dem aktuellen Zustand des Dokuments,
        > da Knoten möglicherweise verschoben, geändert, hinzugefügt oder entfernt wurden.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Ein Ergebnisset, das Schnappschüsse aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten im Ergebnisset sind in der gleichen Reihenfolge, in der sie
        im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie Schnappschuss-Knoten ändern.
        > Das Ändern des Dokuments macht den Schnappschuss nicht ungültig;
        > wenn jedoch das Dokument geändert wird, entspricht der Schnappschuss möglicherweise nicht dem aktuellen Zustand des Dokuments,
        > da Knoten möglicherweise verschoben, geändert, hinzugefügt oder entfernt wurden.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Ein Ergebnisset, das einen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der
        Knoten ist nicht unbedingt der erste Knoten im Dokument, der dem
        Ausdruck entspricht.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Ein Ergebnisset, das den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.

- `result` {{optional_inline}}
  - : Ein bestehender `XPathResult`, der für die Ergebnisse verwendet werden soll. Wenn auf `null` gesetzt oder weggelassen, wird die Methode ein neues `XPathResult` erstellen und zurückgeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das auf die ausgewählten Knoten verweist. Wenn `result` `null` war, ist es ein neues Objekt, wenn nicht, ist es das gleiche Objekt, das als `result` Parameter übergeben wurde.

## Beispiele

### Alle H2-Überschriften durch XPath finden

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

In dem obigen Beispiel wird ein ausführlicherer _xpath_ über übliche Abkürzungen wie `//h2` bevorzugt. Im Allgemeinen bieten spezifischere _xpath_-Selektoren, wie im obigen Beispiel, in der Regel einen erheblichen Leistungszuwachs, insbesondere bei sehr großen Dokumenten. Dies liegt daran, dass die Auswertung der Abfrage keine Zeit mit dem Besuchen von unnötigen Knoten verschwendet. Die Verwendung von // ist im Allgemeinen langsam, da alle Knoten vom Wurzelknoten und allen Unterknoten besucht werden, um mögliche Übereinstimmungen zu finden.

Weitere Optimierungen können durch sorgfältige Verwendung des Kontextparameters erreicht werden. Zum Beispiel, wenn Sie wissen, dass der gesuchte Inhalt irgendwo innerhalb des Body-Tags ist, können Sie dies verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass im obigen Beispiel `document.body` als Kontext anstelle von `document` verwendet wurde, sodass der _xpath_ vom Body-Element aus startet. (In diesem Beispiel ist der `"."` wichtig, um anzuzeigen, dass die Abfrage vom Kontextknoten, document.body, starten soll. Wenn der "." weggelassen würde (wodurch `//h2` verbleibt), würde die Abfrage vom Wurzelknoten (`html`) starten, was verschwenderischer wäre.)

Siehe [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript) für weitere Informationen.

### Element durch xml:id abrufen

Diese Funktion ersetzt [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), wenn Sie stattdessen nach `xml:id` suchen müssen.

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
