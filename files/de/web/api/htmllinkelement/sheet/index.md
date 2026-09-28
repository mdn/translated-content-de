---
title: "HTMLLinkElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`sheet`** der Schnittstelle [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) enthält das Stylesheet, das diesem Element zugeordnet ist.

Ein Stylesheet ist einem `HTMLLinkElement` zugeordnet, wenn `rel="stylesheet"` mit `<link>` verwendet wird.

## Wert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt oder `null`, wenn dem Element kein Stylesheet zugeordnet ist.

## Beispiele

```html
<link rel="stylesheet" href="styles.css" />
```

Die Eigenschaft `sheet` des `HTMLLinkElement`-Objekts gibt das [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück, das `styles.css` beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
