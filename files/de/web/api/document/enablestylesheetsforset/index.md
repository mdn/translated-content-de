---
title: "Document: enableStyleSheetsForSet()-Methode"
short-title: enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Aktiviert die Stylesheets, die dem angegebenen Namen im aktuellen Stylesheet-Set entsprechen, und deaktiviert alle anderen Stylesheets (außer denen ohne Titel, die immer aktiviert sind).

## Syntax

```js-nolint
enableStyleSheetsForSet(name)
```

### Parameter

- `name`
  - : Der Name der zu aktivierenden Stylesheets. Alle Stylesheets mit einem Titel, der diesem Namen entspricht, werden aktiviert, während alle anderen mit einem Titel deaktiviert werden. Geben Sie eine leere Zeichenkette für den _name_-Parameter an, um alle alternativen und bevorzugten Stylesheets zu deaktivieren (aber nicht die persistenten Stylesheets, also diejenigen ohne `title`-Attribut).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise

- Titeltreffer sind groß-/kleinbuchstabenempfindlich.
- Ein Aufruf dieser Methode mit einem `null` _name_ hat keine Auswirkung; wenn Sie alle alternativen und bevorzugten Stylesheets deaktivieren möchten, müssen Sie "", die leere Zeichenkette, übergeben.
- Stylesheets ohne Titel werden von dieser Methode nie betroffen.
- Diese Methode beeinflusst niemals die Werte von [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet) oder
  [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet).

## Beispiele

```js
document.enableStyleSheetsForSet("Some style sheet set name");
```

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Stylesheet`](/de/docs/Web/API/Stylesheet)
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)
- [`document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet)
- [`document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet)
- [`document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet)
