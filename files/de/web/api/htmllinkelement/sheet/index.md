---
title: "HTMLLinkElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

Die **`sheet`** schreibgeschützte Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement) Interfaces enthält das Stylesheet, das mit diesem Element verknüpft ist.

Ein Stylesheet ist mit einem `HTMLLinkElement` verknüpft, wenn `rel="stylesheet"` mit `<link>` verwendet wird.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet) Objekt, oder `null`, wenn keines mit dem Element assoziiert ist.

## Beispiele

```html
<html>
  <header>
    <link rel="stylesheet" href="styles.css" />
    …
  </header>
</html>
```

Die `sheet`-Eigenschaft des `HTMLLinkElement`-Objekts wird das [`StyleSheet`](/de/docs/Web/API/StyleSheet) Objekt zurückgeben, das `styles.css` beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
