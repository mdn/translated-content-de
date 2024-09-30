---
title: "StyleSheet: parentStyleSheet-Eigenschaft"
short-title: parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`parentStyleSheet`**-Eigenschaft der
[`StyleSheet`](/de/docs/Web/API/StyleSheet)-Schnittstelle gibt das Stylesheet zurück, das das angegebene Stylesheet einbindet, sofern vorhanden.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt.

## Beispiele

```js
// Find the top level stylesheet
const sheet = stylesheet.parentStyleSheet ?? stylesheet;
```

## Anmerkungen

Diese Eigenschaft gibt `null` zurück, wenn das aktuelle Stylesheet ein oberstes Stylesheet ist oder wenn die Einbindung von Stylesheets nicht unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
