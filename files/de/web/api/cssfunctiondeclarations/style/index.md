---
title: "CSSFunctionDeclarations: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFunctionDeclarations/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations)-Schnittstelle enthält ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt, das die im Körper der {{cssxref("@function")}}-Regel verfügbaren Deskriptoren darstellt.

## Wert

Ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt.

Obwohl die `style`-Eigenschaft im Sinne der Nicht-Ersetzbarkeit des `CSSFunctionDescriptors`-Objekts schreibgeschützt ist, können Sie dennoch direkt der `style`-Eigenschaft einen Wert zuweisen. Dies entspricht der Zuweisung zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft. Zudem können Sie das `CSSFunctionDescriptors`-Objekt mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beispiele

Siehe die Hauptreferenzseite zu [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
