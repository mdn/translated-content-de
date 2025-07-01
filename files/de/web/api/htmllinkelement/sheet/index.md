---
title: "HTMLLinkElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sheet`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces enthält das mit diesem Element verbundene Stylesheet.

Ein Stylesheet ist mit einem `HTMLLinkElement` verknüpft, wenn `rel="stylesheet"` mit `<link>` verwendet wird.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt oder `null`, wenn keines mit dem Element verknüpft ist.

## Beispiele

```html
<link rel="stylesheet" href="styles.css" />
```

Die `sheet`-Eigenschaft des `HTMLLinkElement`-Objekts wird das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurückgeben, das `styles.css` beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
