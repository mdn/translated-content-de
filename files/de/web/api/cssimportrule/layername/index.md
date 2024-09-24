---
title: "CSSImportRule: Eigenschaft layerName"
short-title: layerName
slug: Web/API/CSSImportRule/layerName
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`layerName`**-Eigenschaft der {{domxref("CSSImportRule")}}-Schnittstelle gibt den Namen der Kaskadenschicht zurück, die durch die {{cssxref("@import")}} [At-Regel](/de/docs/Web/CSS/At-rule) erstellt wurde.

Wenn die erstellte Schicht anonym ist, ist der String leer (`""`); wenn keine Schicht erstellt wurde, ist sie das `null`-Objekt.

## Wert

Ein String, der leer sein kann, oder das `null`-Objekt.

## Beispiele

Das einzelne Stylesheet des Dokuments enthält drei {{cssxref("@import")}}-Regeln. Die erste Deklaration importiert ein Stylesheet in eine benannte Schicht. Die zweite Deklaration importiert ein Stylesheet in eine anonyme Schicht. Die dritte Deklaration importiert ein Stylesheet ohne Schichtdeklaration.

Die `layerName`-Eigenschaft gibt den Namen der Schicht zurück, die mit dem importierten Stylesheet verbunden ist.

```css
@import url("style1.css") layer(layer-1);
@import url("style2.css") layer;
@import url("style3.css");
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].layerName); // gibt `"layer-1"` zurück
console.log(myRules[1].layerName); // gibt `""` zurück (eine anonyme Schicht)
console.log(myRules[2].layerName); // gibt `null` zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Lernbereich: [Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- {{cssxref("@import")}} und {{cssxref("@layer")}}
