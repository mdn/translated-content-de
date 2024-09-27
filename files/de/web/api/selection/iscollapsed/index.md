---
title: "Selection: isCollapsed-Eigenschaft"
short-title: isCollapsed
slug: Web/API/Selection/isCollapsed
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ ApiRef("DOM") }}

Die schreibgeschützte **`Selection.isCollapsed`**-Eigenschaft gibt einen booleschen Wert zurück, der angibt, ob derzeit Text ausgewählt ist oder nicht. Kein Text ist ausgewählt, wenn die Anfangs- und Endpunkte der Auswahl an derselben Position im Inhalt liegen.

Beachten Sie, dass eine zusammengeklappte Auswahl dennoch ein (oder mehr, in Gecko) [`Range`](/de/docs/Web/API/Range)s haben kann, sodass [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) möglicherweise nicht null ist. In diesem Szenario kann der Aufruf der [`Selection`](/de/docs/Web/API/Selection)-Objektmethode [`getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt) ein `Range`-Objekt zurückgeben, das zusammengeklappt ist.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
- [`Range`](/de/docs/Web/API/Range)
