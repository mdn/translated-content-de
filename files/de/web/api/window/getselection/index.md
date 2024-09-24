---
title: "Fenster: getSelection()-Methode"
short-title: getSelection()
slug: Web/API/Window/getSelection
l10n:
  sourceCommit: 49032be37ce63630eaf5cc52c5ccf3c13f207f4b
---

{{APIRef("Selection API")}}

Die **`getSelection()`**-Methode des {{domxref("Window")}}-Interfaces gibt das {{domxref("Selection")}}-Objekt zurück, das mit dem {{domxref("document")}} des Fensters assoziiert ist und den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors darstellt.

## Syntax

```js-nolint
getSelection()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Selection")}}-Objekt oder `null`, wenn das zugehörige Dokument keinen [Browsing-Kontext](/de/docs/Glossary/Browsing_context) hat (zum Beispiel, wenn das Fenster ein {{htmlelement("iframe")}} ist, das nicht an ein Dokument angehängt ist).

Wenn die Methode auf einem {{htmlelement("iframe")}} aufgerufen wird, das nicht angezeigt wird (z.B. wenn `display: none` gesetzt ist), gibt Firefox `null` zurück, während andere Browser ein {{domxref("Selection")}}-Objekt mit {{domxref("Selection.type")}} auf `None` gesetzt zurückgeben.

## Beispiele

```js
function foo() {
  const selObj = window.getSelection();
  alert(selObj);
  const selRange = selObj.getRangeAt(0);
  // do stuff with the range
}
```

## Anmerkungen

### String-Darstellung des Selection-Objekts

In JavaScript, wenn ein Objekt an eine Funktion übergeben wird, die einen String erwartet (wie {{Domxref("window.alert()")}} oder {{Domxref("document.write()")}}), wird die {{jsxref("Object.toString", "toString()")}}-Methode des Objekts aufgerufen und der zurückgegebene Wert an die Funktion übergeben. Dies kann das Objekt wie einen String erscheinen lassen, obwohl es tatsächlich ein Objekt mit Eigenschaften und Methoden ist.

Im obigen Beispiel wird `selObj.toString()` automatisch aufgerufen, wenn es an {{domxref("window.alert()")}} übergeben wird. Der direkte Versuch, eine JavaScript-[String](/de/docs/Web/JavaScript/Reference/Global_Objects/String)-Eigenschaft oder -Methode wie
[`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) oder
[`substr`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
auf einem {{domxref("Selection")}}-Objekt zu verwenden, führt zu einem Fehler, wenn es diese Eigenschaft oder Methode nicht besitzt, und kann unerwartete Ergebnisse liefern, wenn es dies tut. Um ein `Selection`-Objekt als String zu verwenden, rufen Sie seine `toString()`-Methode direkt auf:

```js
const selectedText = selObj.toString();
```

- `selObj` ist ein `Selection`-Objekt.
- `selectedText` ist ein String (ausgewählter Text).

### Verwandte Objekte

Sie können {{domxref("Document.getSelection()")}} aufrufen, die identisch wie `Window.getSelection()` funktioniert.

Es ist zu beachten, dass `getSelection()` derzeit nicht auf den Inhalt von {{htmlelement("textarea")}}- und {{htmlelement("input")}}-Elementen in Firefox und Edge (Legacy) funktioniert. {{domxref("HTMLInputElement.setSelectionRange()")}} oder die `selectionStart`- und `selectionEnd`-Eigenschaften könnten zur Umgehung dieses Problems verwendet werden.

Beachten Sie auch den Unterschied zwischen _Selektion_ und _Fokus_. {{domxref("Document.activeElement")}} gibt das fokussierte Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Selection API](/de/docs/Web/API/Selection)
- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
