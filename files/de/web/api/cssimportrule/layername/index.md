---
title: "CSSImportRule: layerName-Eigenschaft"
short-title: layerName
slug: Web/API/CSSImportRule/layerName
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`layerName`**-Eigenschaft der [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Schnittstelle gibt den Namen der Kaskadenschicht zurück, die von der {{cssxref("@import")}}- [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) erstellt wurde.

Wenn die erstellte Schicht anonym ist, ist der String leer (`""`), wenn keine Schicht erstellt wurde, ist es das `null`-Objekt.

## Wert

Ein String, der leer sein kann, oder das `null`-Objekt.

## Beispiele

Das einzelne Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet in eine benannte Schicht. Die zweite Deklaration importiert ein Stylesheet in eine anonyme Schicht. Die dritte Deklaration importiert ein Stylesheet ohne Schichtdeklaration.

Die `layerName`-Eigenschaft gibt den Namen der Schicht zurück, die mit dem importierten Stylesheet verbunden ist.

```css
@import "style1.css" layer(layer-1);
@import "style2.css" layer;
@import "style3.css";
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].layerName); // returns `"layer-1"`
console.log(myRules[1].layerName); // returns `""` (an anonymous layer)
console.log(myRules[2].layerName); // returns `null`
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Lernbereich: [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- {{cssxref("@import")}} und {{cssxref("@layer")}}
