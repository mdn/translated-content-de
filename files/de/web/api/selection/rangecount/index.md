---
title: "Auswahl: Eigenschaft `rangeCount`"
short-title: rangeCount
slug: Web/API/Selection/rangeCount
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Selection.rangeCount`** gibt die Anzahl der Bereiche in der Auswahl zurück.

Bevor der Benutzer eine frisch geladene Seite angeklickt hat, ist `rangeCount` `0`. Nachdem der Benutzer auf die Seite geklickt hat, ist `rangeCount` `1`, selbst wenn keine Auswahl sichtbar ist.

Ein Benutzer kann normalerweise nur einen Bereich gleichzeitig auswählen, daher wird `rangeCount` in der Regel `1` sein. Scripting kann verwendet werden, um die Auswahl mehr als einen Bereich enthalten zu lassen.

Gecko-Browser erlauben mehrere Auswahlen über Tabellenzellen hinweg. Firefox ermöglicht es, mehrere Bereiche im Dokument auszuwählen, indem Ctrl+Klick verwendet wird (es sei denn, der Klick erfolgt innerhalb eines Elements, das die CSS-Eigenschaft `display: table-cell` zugewiesen hat).

## Wert

Eine Zahl.

## Beispiele

Das folgende Beispiel zeigt jede Sekunde den `rangeCount`. Wählen Sie Text im Browser aus, um die Veränderung zu sehen.

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

Öffnen Sie Ihre Konsole, um zu sehen, wie viele Bereiche in der Auswahl sind. In Gecko-Browsern können Sie mehrere Bereiche über Tabellenzellen hinweg auswählen, indem Sie <kbd>Ctrl</kbd> (oder <kbd>Cmd</kbd> auf macOS) gedrückt halten, während Sie mit der Maus ziehen.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem es gehört.
