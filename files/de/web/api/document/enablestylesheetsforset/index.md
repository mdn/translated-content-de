---
title: "Dokument: enableStyleSheetsForSet() Methode"
short-title: enableStyleSheetsForSet()
slug: Web/API/Document/enableStyleSheetsForSet
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Aktiviert die Stylesheets, die mit dem angegebenen Namen im aktuellen Stylesheet-Set übereinstimmen, und deaktiviert alle anderen Stylesheets (außer denen ohne Titel, die immer aktiviert sind).

## Syntax

```js-nolint
enableStyleSheetsForSet(name)
```

### Parameter

- `name`
  - : Der Name der zu aktivierenden Stylesheets. Alle Stylesheets mit einem Titel, der diesem Namen entspricht, werden aktiviert, während alle anderen mit einem Titel deaktiviert werden. Geben Sie einen leeren String für den _name_-Parameter an, um alle alternativen und bevorzugten Stylesheets zu deaktivieren (aber nicht die persistenten Stylesheets, das heißt, diejenigen ohne `title`-Attribut).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise

- Titelvergleiche sind Groß-/Kleinschreibungssensitiv.
- Ein Aufruf dieser Methode mit einem `null` _name_ hat keine Wirkung; wenn Sie alle alternativen und bevorzugten Stylesheets deaktivieren möchten, **müssen** Sie "", den leeren String, übergeben.
- Stylesheets ohne Titel werden von dieser Methode nie beeinflusst.
- Diese Methode beeinflusst niemals die Werte von {{domxref("document.lastStyleSheetSet")}} oder {{domxref("document.preferredStyleSheetSet")}}.

## Beispiele

```js
document.enableStyleSheetsForSet("Some style sheet set name");
```

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Stylesheet")}}
- {{domxref("Document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
