---
title: "Auswahl: rangeCount-Eigenschaft"
short-title: rangeCount
slug: Web/API/Selection/rangeCount
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{ ApiRef("DOM") }}

Die **`Selection.rangeCount`** schreibgeschützte Eigenschaft gibt die Anzahl der Bereiche in der Auswahl zurück.

Bevor der Benutzer eine neu geladene Seite angeklickt hat, ist `rangeCount`
`0`. Nachdem der Benutzer auf die Seite geklickt hat, ist `rangeCount`
`1`, selbst wenn keine Auswahl sichtbar ist.

Ein Benutzer kann normalerweise nur einen Bereich gleichzeitig auswählen, daher wird `rangeCount`
in der Regel `1` sein. Scripting kann verwendet werden, um die Auswahl mehr als einen Bereich enthalten zu lassen.

Gecko-Browser erlauben Mehrfachauswahlen über Tabellenzellen hinweg. Firefox erlaubt es Ihnen, mehrere Bereiche im Dokument auszuwählen, indem Sie mit Strg+Klick (sofern der Klick nicht innerhalb eines Elements erfolgt, dem die CSS-Eigenschaft `display: table-cell` zugeordnet ist) auswählen.

## Wert

Eine Zahl.

## Beispiele

Das folgende Beispiel zeigt den `rangeCount` jede Sekunde. Wählen Sie Text im Browser aus, um die Änderung zu sehen.

### HTML

```html
<table>
  <tbody>
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
  </tbody>
</table>
```

### JavaScript

```js
setInterval(() => {
  console.log(window.getSelection().rangeCount);
}, 1000);
```

### Ergebnis

Öffnen Sie Ihre Konsole, um zu sehen, wie viele Bereiche in der Auswahl sind. In Gecko-Browsern können Sie mehrere Bereiche über Tabellenzellen hinweg auswählen, indem Sie <kbd>Strg</kbd> (oder <kbd>Cmd</kbd> auf macOS) gedrückt halten, während Sie mit der Maus ziehen.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
