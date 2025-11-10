---
title: CSSImportRule
slug: Web/API/CSSImportRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSImportRule`**-Interface repräsentiert eine {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSImportRule.href`](/de/docs/Web/API/CSSImportRule/href) {{ReadOnlyInline}}
  - : Gibt die URL zurück, die durch die {{cssxref("@import")}}-Regel spezifiziert wird.
- [`CSSImportRule.layerName`](/de/docs/Web/API/CSSImportRule/layerName) {{ReadOnlyInline}}
  - : Gibt den Namen der [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurück, die in der {{cssxref("@import")}}-Regel deklariert ist, den leeren String, wenn die Schicht anonym ist, oder `null`, wenn die Regel keine deklariert.
- [`CSSImportRule.media`](/de/docs/Web/API/CSSImportRule/media)
  - : Gibt den Wert des `media`-Attributs des zugehörigen Stylesheets zurück.
- [`CSSImportRule.styleSheet`](/de/docs/Web/API/CSSImportRule/styleSheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige Stylesheet zurück.
- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) {{ReadOnlyInline}}
  - : Gibt die durch die {{cssxref("@import")}}-Regel spezifizierte Unterstützungsbedingung zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das Dokument enthält ein einzelnes Stylesheet, das eine einzige {{cssxref("@import")}}-Regel enthält. Daher ist das erste Element in der Liste der CSS-Regeln eine `CSSImportRule`.

```css
@import "style.css" screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSImportRule instance object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
