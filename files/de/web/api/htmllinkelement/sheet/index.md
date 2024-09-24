---
title: "HTMLLinkElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sheet`**-Eigenschaft der {{domxref("HTMLLinkElement")}}-Schnittstelle enthält das mit diesem Element verknüpfte Stylesheet.

Ein Stylesheet ist mit einem `HTMLLinkElement` verknüpft, wenn `rel="stylesheet"` mit `<link>` verwendet wird.

## Wert

Ein {{DOMxRef("StyleSheet")}}-Objekt oder `null`, wenn keines mit dem Element verknüpft ist.

## Beispiele

```html
<html>
  <header>
    <link rel="stylesheet" href="styles.css" />
    …
  </header>
</html>
```

Die `sheet`-Eigenschaft des `HTMLLinkElement`-Objekts wird das {{domxref("StyleSheet")}}-Objekt zurückgeben, das `styles.css` beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
