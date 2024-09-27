---
title: "Selection: getRangeAt()-Methode"
short-title: getRangeAt()
slug: Web/API/Selection/getRangeAt
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`getRangeAt()`**-Methode der [`Selection`](/de/docs/Web/API/Selection)-Schnittstelle gibt ein Range-Objekt zurück, das einen derzeit ausgewählten Bereich darstellt.

Wenn die Endpunkte des ausgewählten Bereichs innerhalb eines [Shadow-Trees](/de/docs/Glossary/shadow_tree) liegen, hat JavaScript keine Sichtbarkeit der Shadow-Knoten, und die Methode sollte den Bereich neu fokussieren, um das Host-Element einzuschließen, das den Endpunkt enthält. In der Praxis implementieren die meisten Browser dieses Verhalten noch nicht, und der zurückgegebene Bereich ist unvorhersehbar.

> [!NOTE]
> Wenn innerhalb von Knoten ausgewählt wird, die möglicherweise eine Shadow-Root enthalten, können Sie [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) (falls unterstützt) verwenden, um einen Auswahlsbereich innerhalb eines Shadow-Trees zu erhalten oder die Auswahl zuverlässig auf den Host-Knoten zu fokussieren.

## Syntax

```js-nolint
getRangeAt(index)
```

### Parameter

- `index`
  - : Der nullbasierte Index des zurückzugebenden Bereichs.
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
