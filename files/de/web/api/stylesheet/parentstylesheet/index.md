---
title: "StyleSheet: Eigenschaft parentStyleSheet"
short-title: parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`parentStyleSheet`** der Schnittstelle [`StyleSheet`](/de/docs/Web/API/StyleSheet) gibt das Stylesheet zurück, das das betreffende Stylesheet einbindet, sofern eines vorhanden ist.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt.

## Beispiele

```js
// Find the top level stylesheet
const sheet = stylesheet.parentStyleSheet ?? stylesheet;
```

## Hinweise

Diese Eigenschaft gibt `null` zurück, wenn das aktuelle Stylesheet ein Stylesheet der obersten Ebene ist oder wenn die Einbindung von Stylesheets nicht unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
