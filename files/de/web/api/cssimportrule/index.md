---
title: CSSImportRule
slug: Web/API/CSSImportRule
l10n:
  sourceCommit: 8b1f687ca6125d49d45b62d2ff6b7806a8a24775
---

{{APIRef("CSSOM")}}

Die **`CSSImportRule`**-Schnittstelle repräsentiert eine {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSImportRule.href`](/de/docs/Web/API/CSSImportRule/href) {{ReadOnlyInline}}
  - : Gibt die URL zurück, die durch die {{cssxref("@import")}}-Regel angegeben wird.
- [`CSSImportRule.layerName`](/de/docs/Web/API/CSSImportRule/layerName) {{ReadOnlyInline}}
  - : Gibt den Namen der [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück, die in der {{cssxref("@import")}}-Regel deklariert ist, den leeren String, wenn die Schicht anonym ist, oder `null`, wenn die Regel keine deklariert.
- [`CSSImportRule.media`](/de/docs/Web/API/CSSImportRule/media)
  - : Gibt den Wert des `media`-Attributs des zugehörigen Stylesheets zurück.
- [`CSSImportRule.styleSheet`](/de/docs/Web/API/CSSImportRule/styleSheet) {{ReadOnlyInline}}
  - : Gibt das zugehörige Stylesheet zurück.
- [`CSSImportRule.supportsText`](/de/docs/Web/API/CSSImportRule/supportsText) {{ReadOnlyInline}}
  - : Gibt die Supports-Bedingung zurück, die durch die {{cssxref("@import")}}-Regel angegeben wird.

## Instanzmethoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das Dokument enthält ein einzelnes Stylesheet, das eine einzelne {{cssxref("@import")}}-Regel enthält. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein.

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // A CSSImportRule instance object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
