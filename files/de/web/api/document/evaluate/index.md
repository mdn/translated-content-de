---
title: "Dokument: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/Document/evaluate
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`evaluate()`**-Methode des {{domxref("Document")}} Schnittstelle wählt Elemente basierend auf dem [XPath](/de/docs/Web/XPath)
Ausdruck aus, der in den Parametern angegeben ist.

XPath-Ausdrücke können sowohl in HTML- als auch in XML-Dokumenten ausgewertet werden.

## Syntax

```js-nolint
evaluate(xpathExpression, contextNode, namespaceResolver, resultType, result)
```

### Parameter

- `xpathExpression`
  - : Ein String, der das zu evaluierende _xpath_ darstellt.
- `contextNode`
  - : Der _Kontextknoten_ für die Abfrage (siehe die [XPath Spezifikation](https://www.w3.org/TR/1999/REC-xpath-19991116/)).
    Es ist üblich, `document` als Kontextknoten zu übergeben.
- `namespaceResolver`
  - : Eine Funktion, die alle Namensraum-Präfixe übergeben bekommt
    und einen String zurückgeben sollte, der den zugehörigen Namensraum-URI für dieses Präfix darstellt.
    Es wird verwendet, um Präfixe innerhalb des _xpath_ selbst zu lösen,
    sodass sie mit dem Dokument in Einklang gebracht werden können.
    Der Wert `null` ist üblich für HTML-Dokumente oder wenn keine Namensraum-Präfixe verwendet werden.
- `resultType`

  - : Eine ganze Zahl, die dem Typ des zu retournierenden Ergebnisses `XPathResult` entspricht.
    Folgende Werte sind möglich:
    - `ANY_TYPE` (`0`)
      - : Jeder Typ, der natürlicherweise aus dem gegebenen Ausdruck resultiert.
    - `NUMBER_TYPE` (`1`)
      - : Eine Ergebnisgruppe, die eine einzelne Zahl enthält. Nützlich zum Beispiel in einem
        _xpath_-Ausdruck, der die `count()` Funktion verwendet.
    - `STRING_TYPE` (`2`)
      - : Eine Ergebnisgruppe, die einen einzelnen String enthält.
    - `BOOLEAN_TYPE` (`3`)
      - : Eine Ergebnisgruppe, die einen einzigen booleschen Wert enthält. Nützlich, zum Beispiel, in einem
        _xpath_-Ausdruck, der die `not()` Funktion verwendet.
    - `UNORDERED_NODE_ITERATOR_TYPE` (`4`)
      - : Eine Ergebnisgruppe, die alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten
        in der Ergebnisgruppe sind nicht notwendigerweise in der gleichen Reihenfolge wie sie
        im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Das Ändern eines Knotens wird den Iterator ungültig machen.
        > Nach der Änderung eines Knotens führt der Versuch, die Ergebnisse zu iterieren, zu einem Fehler.
    - `ORDERED_NODE_ITERATOR_TYPE` (`5`)
      - : Eine Ergebnisgruppe, die alle Knoten enthält, die dem Ausdruck entsprechen. Die Knoten
        in der Ergebnisgruppe sind in der gleichen Reihenfolge wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs enthalten Referenzen auf Knoten im Dokument.
        > Das Ändern eines Knotens wird den Iterator ungültig machen.
        > Nach der Änderung eines Knotens führt der Versuch, die Ergebnisse zu iterieren, zu einem Fehler.
    - `UNORDERED_NODE_SNAPSHOT_TYPE` (`6`)
      - : Eine Ergebnisgruppe, die Momentaufnahmen aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten in der Ergebnisgruppe sind nicht notwendigerweise in der gleichen
        Reihenfolge wie sie im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Momentaufnahmen, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie die Momentaufnahme-Knoten verändern.
        > Das Ändern des Dokuments macht die Momentaufnahme nicht ungültig;
        > jedoch, wenn das Dokument geändert wird, kann die Momentaufnahme nicht mehr zum aktuellen Stand des Dokuments übereinstimmen,
        > da Knoten sich möglicherweise bewegt, verändert, hinzugefügt oder entfernt haben.
    - `ORDERED_NODE_SNAPSHOT_TYPE` (`7`)
      - : Eine Ergebnisgruppe, die Momentaufnahmen aller Knoten enthält, die dem
        Ausdruck entsprechen. Die Knoten in der Ergebnisgruppe sind in der gleichen Reihenfolge wie sie
        im Dokument erscheinen.
        > [!NOTE]
        > Ergebnisse dieses Typs sind Momentaufnahmen, die im Wesentlichen Listen von übereinstimmenden Knoten sind.
        > Sie können Änderungen am Dokument vornehmen, indem Sie die Momentaufnahme-Knoten verändern.
        > Das Ändern des Dokuments macht die Momentaufnahme nicht ungültig;
        > jedoch, wenn das Dokument geändert wird, kann die Momentaufnahme nicht mehr zum aktuellen Stand des Dokuments übereinstimmen,
        > da Knoten sich möglicherweise bewegt, verändert, hinzugefügt oder entfernt haben.
    - `ANY_UNORDERED_NODE_TYPE` (`8`)
      - : Eine Ergebnisgruppe, die irgendeinen einzelnen Knoten enthält, der dem Ausdruck entspricht. Der
        Knoten ist nicht notwendigerweise der erste Knoten im Dokument, der dem Ausdruck entspricht.
    - `FIRST_ORDERED_NODE_TYPE` (`9`)
      - : Eine Ergebnisgruppe, die den ersten Knoten im Dokument enthält, der dem Ausdruck entspricht.

- `result`
  - : Ein vorhandenes `XPathResult` zur Verwendung für die Ergebnisse. Wenn auf `null` gesetzt, erstellt und gibt die Methode ein neues `XPathResult` zurück.

### Rückgabewert

Ein {{domxref("XPathResult")}}, das auf die ausgewählten Knoten verweist. Wenn `result` `null` war, ist es ein neues Objekt,
andernfalls ist es dasselbe Objekt wie das, das als `result`-Parameter übergeben wurde.

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
/* Durchsucht das Dokument nach allen h2-Elementen.
 * Das Ergebnis wird wahrscheinlich ein ungeordneter Knoten-Iterator sein. */
let thisHeading = headings.iterateNext();
let alertText = "Überschriften der Ebene 2 in diesem Dokument sind:\n";
while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
alert(alertText); // Warnmeldung mit dem Text aller h2-Elemente
```

Beachten Sie im obigen Beispiel, dass ein ausführlicherer _xpath_ gegenüber gängigen Abkürzungen
wie `//h2` bevorzugt wird. Im Allgemeinen geben spezifischere _xpath_-Selektoren, wie im obigen
Beispiel, in der Regel eine signifikante Leistungsverbesserung, insbesondere bei sehr großen
Dokumenten. Dies liegt daran, dass die Auswertung der Abfrage keine Zeit damit verschwendet,
unnötige Knoten zu besuchen. Die Verwendung von // ist im Allgemeinen langsam, da sie _jeden_
Knoten vom Root aus und alle Unteknoten besucht, um mögliche Übereinstimmungen zu finden.

Weiterhin kann eine Optimierung durch sorgfältige Verwendung des Kontextparameters erreicht werden. Wenn
Sie zum Beispiel wissen, dass der gesuchte Inhalt irgendwo innerhalb des body-Tags liegt,
können Sie dies verwenden:

```js
document.evaluate(".//h2", document.body, null, XPathResult.ANY_TYPE, null);
```

Beachten Sie, dass im obigen `document.body` als Kontext statt
`document` verwendet wurde, sodass der _xpath_ vom body-Element aus startet. (In diesem Beispiel ist das
`"."` wichtig, um anzugeben, dass die Abfrage vom
Kontextknoten `document.body` aus starten soll. Wenn das "." ausgelassen würde (bei
`//h2`) würde die Abfrage vom Root-Knoten (`html`) starten, was verschwenderischer wäre.)

Siehe [Einführung in die Verwendung von XPath in JavaScript](/de/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript) für mehr Informationen.

### Element über xml:id erhalten

Diese Funktion ist ein Ersatz für {{domxref("Document.getElementById()")}}, wenn Sie stattdessen nach `xml:id` suchen müssen.

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

- {{domxref("Document.createExpression()")}}
- {{domxref("XPathResult")}}
- [Prüfen Sie die Browser-Kompatibilität](https://codepen.io/johan/full/DJoqaX)
