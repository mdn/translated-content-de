---
title: "CSSImportRule: layerName Eigenschaft"
short-title: layerName
slug: Web/API/CSSImportRule/layerName
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`layerName`**-Eigenschaft des [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)-Interfaces gibt den Namen der Kaskadenschicht zurück, die durch die {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) erstellt wird.

Wenn die erstellte Schicht anonym ist, ist der String leer (`""`), wenn keine Schicht erstellt wurde, ist es das `null`-Objekt.

## Wert

Ein String, der leer sein kann, oder das `null`-Objekt.

## Beispiele

Das Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet in eine benannte Schicht. Die zweite Deklaration importiert ein Stylesheet in eine anonyme Schicht. Die dritte Deklaration importiert ein Stylesheet ohne eine Schichtdeklaration.

Die `layerName`-Eigenschaft gibt den Namen der Schicht zurück, die mit dem importierten Stylesheet verbunden ist.

```css
@import url("style1.css") layer(layer-1);
@import url("style2.css") layer;
@import url("style3.css");
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
