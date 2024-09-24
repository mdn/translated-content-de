---
title: "Selection: rangeCount-Eigenschaft"
short-title: rangeCount
slug: Web/API/Selection/rangeCount
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die **`Selection.rangeCount`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Anzahl der Bereiche in der Auswahl zurückgibt.

Bevor ein Benutzer auf eine neu geladene Seite geklickt hat, ist der `rangeCount` `0`. Nachdem der Benutzer auf die Seite geklickt hat, ist der `rangeCount` `1`, selbst wenn keine Auswahl sichtbar ist.

Ein Benutzer kann normalerweise nur einen Bereich gleichzeitig auswählen, daher wird der `rangeCount` in der Regel `1` sein. Skripte können verwendet werden, um die Auswahl mehr als einen Bereich enthalten zu lassen.

Gecko-Browser erlauben Mehrfachauswahlen über Tabellenzellen hinweg. Firefox erlaubt das Auswählen mehrerer Bereiche im Dokument durch Strg+Klick (es sei denn, der Klick erfolgt innerhalb eines Elements, dem die CSS-Eigenschaft `display: table-cell` zugewiesen ist).

## Wert

Eine Zahl.

## Beispiele

Das folgende Beispiel zeigt den `rangeCount` jede Sekunde. Wählen Sie Text im Browser aus, um die Änderung zu sehen.

### HTML

```html
<table>
  <tr>
    <td>a.1</td>
    <td>a.2</td>
  </tr>
  <tr>
    <td>b.1</td>
    <td>b.2</td>
  </tr>
  <tr>
    <td>c.1</td>
    <td>c.2</td>
  </tr>
</table>
```

### JavaScript

```js
setInterval(() => {
  console.log(window.getSelection().rangeCount);
}, 1000);
```

### Ergebnis

Öffnen Sie Ihre Konsole, um zu sehen, wie viele Bereiche in der Auswahl sind. In Gecko-Browsern können Sie mehrere Bereiche über Tabellenzellen hinweg auswählen, indem Sie <kbd>Strg</kbd> (oder <kbd>Cmd</kbd> auf MacOS) gedrückt halten, während Sie mit der Maus ziehen.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}, das Interface, zu dem es gehört.
