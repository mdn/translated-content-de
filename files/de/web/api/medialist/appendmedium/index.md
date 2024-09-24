---
title: "MediaList: Methode appendMedium()"
short-title: appendMedium()
slug: Web/API/MediaList/appendMedium
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("CSSOM")}}

Die Methode `appendMedium()` der {{DomxRef("MediaList")}}-Schnittstelle fügt der Liste eine Medienabfrage hinzu. Wenn die Medienabfrage bereits in der Sammlung vorhanden ist, unternimmt diese Methode nichts.

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

Das folgende Beispiel fügt die Medienabfrage `print` in die `MediaList` ein, die mit dem ersten auf das aktuelle Dokument angewendeten Stylesheet verbunden ist.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.appendMedium("print");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
