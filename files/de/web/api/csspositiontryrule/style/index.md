---
title: "CSSPositionTryRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSPositionTryRule/style
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`style`** schreibgeschützte Eigenschaft der [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Schnittstelle gibt ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt zurück, das die Deklarationen repräsentiert, die im Körper der `@position-try`-Regel festgelegt sind.

## Wert

Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt.

## Beispiele

Die CSS enthält eine `@position-try`-Regel mit dem Namen `--custom-right` und drei Deskriptoren.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin: 10px 0 0 0;
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
- [Modul für CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Verwendung von CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Verarbeiten von Overflow: try-Optionen und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
