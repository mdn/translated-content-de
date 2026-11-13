---
title: "CSSFunctionDeclarations: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFunctionDeclarations/style
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft **`style`** der Schnittstelle [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations) enthält ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt, das die im Rumpf der {{cssxref("@function")}}-Regel verfügbaren Deskriptoren repräsentiert.

## Wert

Ein [`CSSFunctionDescriptors`](/de/docs/Web/API/CSSFunctionDescriptors)-Objekt.

Die Eigenschaft `style` ist zwar schreibgeschützt, da Sie das `CSSFunctionDescriptors`-Objekt nicht ersetzen können. Sie können `style` jedoch direkt einen Wert zuweisen. Dies entspricht einer Zuweisung an dessen Eigenschaft [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText). Sie können das `CSSFunctionDescriptors`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beispiele

Beispiele finden Sie auf der Referenzseite zu [`CSSFunctionDeclarations`](/de/docs/Web/API/CSSFunctionDeclarations).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
