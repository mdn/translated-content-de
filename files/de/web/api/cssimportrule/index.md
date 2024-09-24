---
title: CSSImportRule
slug: Web/API/CSSImportRule
l10n:
  sourceCommit: 8b1f687ca6125d49d45b62d2ff6b7806a8a24775
---

{{APIRef("CSSOM")}}

Die **`CSSImportRule`**-Schnittstelle repräsentiert eine {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("CSSRule")}}._

- {{domxref("CSSImportRule.href")}} {{ReadOnlyInline}}
  - : Gibt die URL zurück, die durch die {{cssxref("@import")}}-Regel angegeben ist.
- {{domxref("CSSImportRule.layerName")}} {{ReadOnlyInline}}
  - : Gibt den Namen der [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück, die in der {{cssxref("@import")}}-Regel deklariert ist, einen leeren String, wenn die Schicht anonym ist, oder `null`, wenn die Regel keine deklariert.
- {{domxref("CSSImportRule.media")}}
  - : Gibt den Wert des `media`-Attributs des zugehörigen Stylesheets zurück.
- {{domxref("CSSImportRule.styleSheet")}} {{ReadOnlyInline}}
  - : Gibt das zugehörige Stylesheet zurück.
- {{domxref("CSSImportRule.supportsText")}} {{ReadOnlyInline}}
  - : Gibt die durch die {{cssxref("@import")}}-Regel angegebene Unterstützungsbedingung zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren {{domxref("CSSRule")}}._

## Beispiele

Das Dokument enthält ein einzelnes Stylesheet, das eine einzelne {{cssxref("@import")}}-Regel enthält. Daher wird das erste Element in der Liste der CSS-Regeln eine `CSSImportRule` sein.

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // Ein CSSImportRule-Instanzobjekt
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
