---
title: "Selection: isCollapsed-Eigenschaft"
short-title: isCollapsed
slug: Web/API/Selection/isCollapsed
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Selection.isCollapsed`** gibt einen booleschen Wert zurück, der anzeigt, ob derzeit Text ausgewählt ist oder nicht. Kein Text ist ausgewählt, wenn die Start- und Endpunkte der Auswahl an derselben Position im Inhalt liegen.

Beachten Sie, dass eine zusammengeklappte Auswahl immer noch ein oder mehrere (in Gecko) {{domxref("Range")}}s enthalten kann, sodass {{domxref("Selection.rangeCount")}} möglicherweise nicht null ist. In diesem Fall kann das Aufrufen der {{domxref("Selection")}}-Objektmethode {{domxref("Selection.getRangeAt", "getRangeAt()")}} ein `Range`-Objekt zurückgeben, das zusammengeklappt ist.

## Wert

Ein Boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}
- {{domxref("Range")}}
