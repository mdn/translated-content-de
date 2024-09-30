---
title: "MediaList: deleteMedium()-Methode"
short-title: deleteMedium()
slug: Web/API/MediaList/deleteMedium
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("CSSOM")}}

Die `deleteMedium()`-Methode des [`MediaList`](/de/docs/Web/API/MediaList)-Interfaces entfernt aus dieser `MediaList` die angegebene Media Query.

## Syntax

```js-nolint
deleteMedium(medium)
```

### Parameter

- `medium`
  - : Ein String, der die zu entfernende Media Query aus der Liste enthält.

### Rückgabewert

Keiner ([undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zu entfernende Media Query nicht in der Liste vorhanden ist.

## Beispiele

Im Folgenden wird die Media Query `print` von der
`MediaList` entfernt, die mit dem ersten Stylesheet im aktuellen Dokument verknüpft ist.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.removeMedium("print");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
