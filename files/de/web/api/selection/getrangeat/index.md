---
title: "Selection: getRangeAt()-Methode"
short-title: getRangeAt()
slug: Web/API/Selection/getRangeAt
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`getRangeAt()`**-Methode der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle gibt ein `Range`-Objekt zurück, das eine derzeit ausgewählte Range repräsentiert.

Wenn sich die Endpunkte der ausgewählten Range innerhalb eines {{Glossary("shadow_tree", "Shadow-DOM-Baums")}} befinden, hat JavaScript keinen Zugriff auf die Schattenknoten, und die Methode sollte die Range um den Host-Element erweitern, das den Endpunkt enthält. In der Praxis implementieren die meisten Browser dieses Verhalten bisher nicht, und die zurückgegebene Range ist unvorhersehbar.

> [!NOTE]
> Beim Selektieren innerhalb von Knoten, die eine Shadow-Root enthalten könnten, kann [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) (falls unterstützt) verwendet werden, um eine Auswahl-Range innerhalb eines Shadow-Baums zu erhalten oder um die Auswahl zuverlässig auf den Host-Knoten zu übertragen.

## Syntax

```js-nolint
getRangeAt(index)
```

### Parameter

- `index`
  - : Der nullbasierte Index der zurückzugebenden Range.
    Eine negative Zahl oder eine Zahl, die größer oder gleich [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) ist, führt zu einem Fehler.

### Rückgabewert

Das spezifizierte [`Range`](/de/docs/Web/API/Range)-Objekt.

## Beispiele

```js
let ranges = [];

sel = window.getSelection();

for (let i = 0; i < sel.rangeCount; i++) {
  ranges[i] = sel.getRangeAt(i);
}
/* Each item in the ranges array is now
 * a range object representing one of the
 * ranges in the current selection */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der sie gehört.
