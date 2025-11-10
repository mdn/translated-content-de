---
title: "CSSPositionTryRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPositionTryRule/style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{ APIRef("CSSOM") }}

Die **`style`** schreibgeschützte Eigenschaft der [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Schnittstelle gibt ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt zurück, das die in der Hauptdeklaration der `@position-try`-At-Regel gesetzten Deklarationen darstellt.

## Wert

Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt.

## Beispiele

Das CSS enthält eine `@position-try`-At-Regel mit einem Namen `--custom-right` und drei Deskriptoren.

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
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Umgang mit Überlauf: Versuchsoptionen und bedingtes Verbergen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
