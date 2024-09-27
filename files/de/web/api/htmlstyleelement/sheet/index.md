---
title: "HTMLStyleElement: sheet-Eigenschaft"
short-title: sheet
slug: Web/API/HTMLStyleElement/sheet
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`sheet`**-Eigenschaft der [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)-Schnittstelle enthält das Stylesheet, das mit diesem Element verknüpft ist.

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet) ist immer mit einem [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement) verknüpft, es sei denn, das `type`-Attribut ist nicht `text/css`.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt oder `null`, wenn keines mit dem Element verknüpft ist.

## Beispiele

```html
<html>
  <header>
    <style media="print" />
    …
  </header>
</html>
```

Die `sheet`-Eigenschaft des zugehörigen `HTMLStyleElement`-Objekts gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, das es beschreibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
