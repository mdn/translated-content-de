---
title: "MediaList: appendMedium() Methode"
short-title: appendMedium()
slug: Web/API/MediaList/appendMedium
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("CSSOM")}}

Die `appendMedium()`-Methode des [`MediaList`](/de/docs/Web/API/MediaList)-Interfaces fügt der Liste eine Media Query hinzu. Wenn die Media Query bereits in der Sammlung enthalten ist, tut diese Methode nichts.

## Syntax

```js-nolint
appendMedium(medium)
```

### Parameter

- `medium`
  - : Ein String, der die hinzuzufügende Media Query enthält.

### Rückgabewert

Keiner ([undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Beispiele

Das folgende Beispiel fügt die Media Query `print` in die
`MediaList` ein, die dem ersten auf das aktuelle Dokument angewendeten Stylesheet zugeordnet ist.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.appendMedium("print");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
