---
title: "CSSPositionTryRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPositionTryRule/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Schnittstelle enthält ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt, das die in der {{cssxref("@position-try")}}-Regel verfügbaren Deskriptoren darstellt.

## Wert

Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt.

Obwohl die `style`-Eigenschaft selbst im Sinne eines Austauschs des `CSSPositionTryDescriptors`-Objekts schreibgeschützt ist, können Sie der `style`-Eigenschaft direkt Werte zuweisen, was gleichbedeutend mit einer Zuweisung an ihre [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft ist. Sie können auch das `CSSPositionTryDescriptors`-Objekt mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) modifizieren.

## Beispiele

Das CSS enthält eine `@position-try`-Regel mit dem Namen `--custom-right` und drei Deskriptoren.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin-top: 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style.top); // "anchor(bottom)"
console.log(tryOption.style["min-width"]); // "100px"
console.log(tryOption.style.positionArea); // ""; no position-area specified
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Umgang mit Überlauf: Optionen für `try` und bedingte Ausblendung](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
