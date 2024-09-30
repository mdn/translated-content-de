---
title: "Document: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces wählt Elemente basierend auf dem im Parameter angegebenen [XPath](/de/docs/Web/XPath)-Ausdruck aus.

XPath-Ausdrücke können sowohl auf HTML- als auch auf XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der den zu evaluierenden _xpath_ darstellt.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage (siehe die [XPath-Spezifikation](https://www.w3.org/TR/1999/REC-xpath-19991116/)).
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die mit Namespace-Präfixen übergeben wird und einen String zurückgeben sollte, der den mit diesem Präfix verbundenen Namespace-URI darstellt.
    Sie wird verwendet, um Präfixe innerhalb des _xpath_ selbst zu lösen, sodass sie mit dem Dokument abgeglichen werden können.
    Der Wert `null` ist bei HTML-Dokumenten oder wenn keine Namespace-Präfixe verwendet werden, häufig.
- `resultType`

  - : Eine Ganzzahl, die dem Typ des zurückzugebenden `XPathResult`-Ergebnisses entspricht.
    Folgende Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Der Typ, der sich natürlich aus dem angegebenen Ausdruck ergibt.
    - `NUMBER_TYPE` (`1`)
      - : Eine Ergebnismenge, die eine einzelne Zahl enthält. Nützlich beispielsweise in einem _xpath_-Ausdruck, der die `count()`-Funktion verwendet.
    - `STRING_TYPE` (`2`)
      - : Eine Ergebnismenge, die einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Eine Ergebnismenge, die einen einzelnen booleschen Wert enthält. Nützlich beispielsweise in einem _xpath_-Ausdruck, der die `not()`-Funktion verwendet.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Eine Ergebnismenge, die alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten in der Ergebnismenge sind nicht unbedingt in derselben Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen zu Knoten im Dokument.
        > Das Modifizieren eines Knotens macht den Iterator ungültig.
        > Nach dem Modifizieren eines Knotens führt das Versuch, die Ergebnisse zu iterieren, zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Eine Ergebnismenge, die alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten in der Ergebnismenge sind in derselben Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen zu Knoten im Dokument.
        > Das Modifizieren eines Knotens macht den Iterator ungültig.
        > Nach dem Modifizieren eines Knotens führt das Versuch, die Ergebnisse zu iterieren, zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Eine Ergebnismenge, die Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten in der Ergebnismenge sind nicht unbedingt in derselben Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen der übereinstimmenden Knoten sind.
        > Sie können das Dokument ändern, indem Sie Schnappschuss-Knoten verändern.
        > Das Modifizieren des Dokuments macht den Schnappschuss nicht ungültig;
        > jedoch kann der Schnappschuss, wenn das Dokument geändert wird, nicht dem aktuellen Zustand des Dokuments entsprechen, da Knoten möglicherweise verschoben, geändert, hinzugefügt oder entfernt wurden.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Eine Ergebnismenge, die Schnappschüsse aller Knoten enthält, die dem Ausdruck entsprechen. Die Knoten in der Ergebnismenge sind in derselben Reihenfolge, wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Schnappschüsse, die im Wesentlichen Listen der übereinstimmenden Knoten sind.
        > Sie können das Dokument ändern, indem Sie Schnappschuss-Knoten verändern.
        > Das Modifizieren des Dokuments macht den Schnappschuss nicht ungültig;
        > jedoch kann der Schnappschuss, wenn das Dokument geändert wird, nicht dem aktuellen Zustand des Dokuments entsprechen, da Knoten möglicherweise verschoben, geändert, hinzugefügt oder entfernt wurden.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Eine Ergebnismenge, die einen beliebigen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der Knoten ist nicht notwendigerweise der erste im Dokument, der dem Ausdruck entspricht.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Eine Ergebnismenge, die den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.

- `result`
  - : Ein bestehendes `XPathResult`, das für die Ergebnisse verwendet werden soll. Wenn `null` gesetzt ist, erstellt und gibt die Methode ein neues `XPathResult` zurück.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult), das auf die ausgewählten Knoten verweist. Wenn `result` `null` war, ist es ein neues Objekt, andernfalls ist es dasselbe Objekt, das als `result`-Parameter übergeben wurde.

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

Beachten Sie, dass im obigen Beispiel ein ausführlicherer _xpath_ gegenüber üblichen Abkürzungen wie `//h2` bevorzugt wird. Generell bieten spezifischere _xpath_-Selektoren, wie im obigen Beispiel, normalerweise eine signifikante Leistungsverbesserung, insbesondere bei sehr großen Dokumenten. Dies liegt daran, dass die Auswertung der Abfrage keine Zeit mit dem Besuch unnötiger Knoten verschwendet. Die Verwendung von // ist in der Regel langsam, da dabei _jeder_ Knoten vom Wurzelknoten und alle Unterknoten nach möglichen Übereinstimmungen durchsucht werden.

Eine weitere Optimierung kann durch sorgfältige Verwendung des Kontextparameters erreicht werden. Wenn Sie zum Beispiel wissen, dass sich der gesuchte Inhalt irgendwo innerhalb des body-Tags befindet, können Sie Folgendes verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass im obigen `document.body` als Kontext und nicht `document` verwendet wurde, sodass der _xpath_ vom body-Element aus beginnt. (In diesem Beispiel ist das `.` wichtig, um anzuzeigen, dass die Abfrage vom Kontextknoten, document.body, starten soll. Wenn das `.` ausgelassen wurde (was `//h2` übrig ließe), würde die Abfrage vom Wurzelknoten (`html`) aus starten, was verschwenderischer wäre.)

Siehe [Introduction to using XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript) für weitere Informationen.

### Element mit xml:id abrufen

Diese Funktion ist ein Ersatz für [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), wenn Sie stattdessen nach `xml:id` suchen müssen.

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
- [Prüfen Sie die Browserunterstützung](https://codepen.io/johan/full/DJoqaX)
