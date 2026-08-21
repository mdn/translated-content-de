---
title: "Dokument: enableStyleSheetsForSet() Methode"
short-title: enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{Non-standard_header}}

Aktiviert die Stylesheets, die dem angegebenen Namen im aktuellen Stylesheet-Set entsprechen, und deaktiviert alle anderen Stylesheets (außer denen ohne Titel, die immer aktiviert sind).

## Syntax

```js-nolint
enableStyleSheetsForSet(name)
```

### Parameter

- `name`
  - : Der Name der zu aktivierenden Stylesheets. Alle Stylesheets mit einem Titel, die diesem Namen entsprechen, werden aktiviert, während alle anderen mit einem Titel deaktiviert werden. Geben Sie eine leere Zeichenfolge für den _name_-Parameter an, um alle alternativen und bevorzugten Stylesheets zu deaktivieren (aber nicht die persistenten Stylesheets; das heißt, diejenigen ohne `title`-Attribut).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise

- Titelvergleiche sind groß-/kleinbuchstabensensitiv.
- Ein Aufruf dieser Methode mit einem `null` _name_ hat keine Wirkung; wenn Sie alle alternativen und bevorzugten Stylesheets deaktivieren möchten, **müssen** Sie "", die leere Zeichenfolge, übergeben.
- Stylesheets ohne Titel werden von dieser Methode niemals beeinflusst.
- Diese Methode beeinflusst niemals die Werte von [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet) oder [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet).

## Beispiele

```js
document.enableStyleSheetsForSet("Some style sheet set name");
```

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Stylesheet`](/de/docs/Web/API/StyleSheet)
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)
- [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet)
- [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet)
- [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)
