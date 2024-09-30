---
title: "Selection: isCollapsed Eigenschaft"
short-title: isCollapsed
slug: Web/API/Selection/isCollapsed
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ ApiRef("DOM") }}

Die schreibgeschützte **`Selection.isCollapsed`**-Eigenschaft gibt einen
booleschen Wert zurück, der angibt, ob aktuell Text ausgewählt ist oder nicht.
Es ist kein Text ausgewählt, wenn die Start- und Endpunkte der Auswahl an derselben
Position im Inhalt liegen.

Beachten Sie, dass eine kollabierte Auswahl dennoch einen (oder mehr, in Gecko)
[`Range`](/de/docs/Web/API/Range) haben kann, sodass [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) möglicherweise nicht null ist. In diesem
Fall kann der Aufruf der Methode [`getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) eines [`Selection`](/de/docs/Web/API/Selection)-Objekts ein kollabiertes `Range`-Objekt zurückgeben.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
- [`Range`](/de/docs/Web/API/Range)
