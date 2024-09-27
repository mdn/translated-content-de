---
title: "Selection: rangeCount-Eigenschaft"
short-title: rangeCount
slug: Web/API/Selection/rangeCount
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die schreibgeschützte **`Selection.rangeCount`**-Eigenschaft gibt die Anzahl der Bereiche in der Auswahl zurück.

Bevor der Benutzer auf eine neu geladene Seite geklickt hat, ist der `rangeCount` `0`. Nachdem der Benutzer auf die Seite geklickt hat, ist der `rangeCount` `1`, auch wenn keine Auswahl sichtbar ist.

Ein Benutzer kann normalerweise nur einen Bereich auf einmal auswählen, daher ist der `rangeCount` in der Regel `1`. Skripte können verwendet werden, um die Auswahl mehr als einen Bereich enthalten zu lassen.

Gecko-Browser erlauben mehrere Auswahlen über Tabellenzellen hinweg. Firefox ermöglicht die Auswahl mehrerer Bereiche im Dokument durch Drücken von Strg+Klick (es sei denn, der Klick erfolgt innerhalb eines Elements, dem die CSS-Eigenschaft `display: table-cell` zugewiesen ist).

## Wert

Eine Zahl.

## Beispiele

Das folgende Beispiel zeigt jede Sekunde den `rangeCount` an. Wählen Sie Text im Browser aus, um zu sehen, wie er sich ändert.

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

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
