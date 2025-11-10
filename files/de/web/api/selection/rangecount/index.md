---
title: "Selection: rangeCount-Eigenschaft"
short-title: rangeCount
slug: Web/API/Selection/rangeCount
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{ ApiRef("DOM") }}

Die schreibgeschützte **`Selection.rangeCount`**-Eigenschaft gibt die Anzahl der Bereiche in der Auswahl zurück.

Vor dem ersten Klick des Benutzers auf eine frisch geladene Seite ist der `rangeCount` `0`. Nachdem der Benutzer auf die Seite geklickt hat, ist der `rangeCount` `1`, auch wenn keine Auswahl sichtbar ist.

Ein Benutzer kann normalerweise nur einen Bereich gleichzeitig auswählen, daher wird der `rangeCount` normalerweise `1` sein. Mit Skripten kann die Auswahl so verändert werden, dass sie mehr als einen Bereich enthält.

Gecko-Browser erlauben Mehrfachauswahlen über Tabellenzellen hinweg. Firefox erlaubt das Auswählen mehrerer Bereiche im Dokument durch Halten der Strg-Taste und Klicken (es sei denn, der Klick erfolgt innerhalb eines Elements, dem die CSS-Eigenschaft `display: table-cell` zugewiesen ist).

## Wert

Eine Zahl.

## Beispiele

Das folgende Beispiel zeigt den `rangeCount` jede Sekunde an. Wählen Sie Text im Browser aus, um die Änderung zu sehen.

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

Öffnen Sie Ihre Konsole, um zu sehen, wie viele Bereiche in der Auswahl sind. In Gecko-Browsern können Sie mehrere Bereiche über Tabellenzellen hinweg auswählen, indem Sie beim Ziehen der Maus die <kbd>Strg</kbd>-Taste (oder <kbd>Cmd</kbd> auf macOS) gedrückt halten.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem es gehört.
