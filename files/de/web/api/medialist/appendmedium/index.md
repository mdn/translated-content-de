---
title: "MediaList: appendMedium()-Methode"
short-title: appendMedium()
slug: Web/API/MediaList/appendMedium
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("CSSOM")}}

Die `appendMedium()`-Methode der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle fügt eine Medienabfrage zur Liste hinzu. Befindet sich die Medienabfrage bereits in der Sammlung, tut diese Methode nichts.

## Syntax

```js-nolint
appendMedium(medium)
```

### Parameter

- `medium`
  - : Ein String, der die hinzuzufügende Medienabfrage enthält.

### Rückgabewert

Keiner ([undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Beispiele

Das folgende Beispiel fügt die Medienabfrage `print` in die
`MediaList` ein, die dem ersten Stylesheet zugeordnet ist, das auf das aktuelle Dokument angewendet wird.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.appendMedium("print");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
