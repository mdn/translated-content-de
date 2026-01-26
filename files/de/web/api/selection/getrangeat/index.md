---
title: "Auswahl: getRangeAt()-Methode"
short-title: getRangeAt()
slug: Web/API/Selection/getRangeAt
l10n:
  sourceCommit: 7a9bb2446815454a7f905e17e6f4d652c891316a
---

{{ ApiRef("DOM") }}

Die **`getRangeAt()`**-Methode des [`Selection`](/de/docs/Web/API/Selection)-Interfaces gibt ein Range-Objekt zurück, das einen aktuell ausgewählten Bereich darstellt.

Wenn die Endpunkte des ausgewählten Bereichs innerhalb eines {{Glossary("shadow_tree", "Shadow-Baums")}} liegen, hat JavaScript keine Sichtbarkeit auf die Shadow-Knoten, und die Methode sollte den Bereich neu ausrichten, um das Host-Element einzuschließen, das den Endpunkt enthält. In der Praxis implementieren die meisten Browser dieses Verhalten noch nicht, und der zurückgegebene Bereich ist unvorhersehbar.

> [!NOTE]
> Wenn Sie innerhalb von Knoten auswählen, die möglicherweise eine Shadow-Root enthalten, können Sie [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) (falls unterstützt) verwenden, um einen Auswahlbereich innerhalb eines Shadow-Baums zu erhalten oder die Auswahl verlässlich auf den Host-Knoten neu auszurichten.

## Syntax

```js-nolint
getRangeAt(index)
```

### Parameter

- `index`
  - : Der nullbasierte Index des zurückzugebenden Bereichs.
    Eine negative Zahl oder eine Zahl, die größer oder gleich [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) ist, führt zu einem Fehler.

### Rückgabewert

Das angegebene [`Range`](/de/docs/Web/API/Range)-Objekt.

## Beispiele

```js
let ranges = [];

const sel = window.getSelection();

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

- [`Selection`](/de/docs/Web/API/Selection), das Interface, zu dem es gehört.
