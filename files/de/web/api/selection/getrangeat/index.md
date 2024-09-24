---
title: "Selection: Methode getRangeAt()"
short-title: getRangeAt()
slug: Web/API/Selection/getRangeAt
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{ ApiRef("DOM") }}

Die **`getRangeAt()`**-Methode der {{domxref("Selection")}}-Schnittstelle gibt ein Range-Objekt zurück, das einen aktuell ausgewählten Bereich darstellt.

Befinden sich die Endpunkte des ausgewählten Bereichs innerhalb eines {{glossary("shadow tree")}}, hat JavaScript keine Sichtbarkeit auf die Shadow-Knoten, und die Methode sollte den Bereich neu ausrichten, um das Host-Element einzuschließen, das den Endpunkt enthält. In der Praxis implementieren die meisten Browser dieses Verhalten noch nicht, und der zurückgegebene Bereich ist unvorhersehbar.

> [!NOTE]
> Wenn Sie innerhalb von Knoten auswählen, die möglicherweise eine Shadow-Root enthalten, können Sie {{domxref("Selection.getComposedRanges()")}} (sofern unterstützt) verwenden, um einen Auswahlbereich innerhalb eines Shadow-Trees zu erhalten oder die Auswahl zuverlässig auf den Host-Knoten umzustellen.

## Syntax

```js-nolint
getRangeAt(index)
```

### Parameter

- `index`
  - : Der nullbasierte Index des zurückzugebenden Bereichs.
    Eine negative Zahl oder eine Zahl, die größer oder gleich {{domxref("Selection.rangeCount")}} ist, führt zu einem Fehler.

### Rückgabewert

Das angegebene {{domxref("Range")}}-Objekt.

## Beispiele

```js
let ranges = [];

sel = window.getSelection();

for (let i = 0; i < sel.rangeCount; i++) {
  ranges[i] = sel.getRangeAt(i);
}
/* Jedes Element im ranges-Array ist jetzt
 * ein Bereichsobjekt, das einen der
 * Bereiche in der aktuellen Auswahl darstellt */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}, die Schnittstelle, zu der sie gehört.
