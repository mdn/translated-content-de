---
title: "MediaList: Methode deleteMedium()"
short-title: deleteMedium()
slug: Web/API/MediaList/deleteMedium
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("CSSOM")}}

Die `deleteMedium()`-Methode der {{DOMxRef("MediaList")}}-Schnittstelle entfernt aus dieser `MediaList` die angegebene Medienabfrage.

## Syntax

```js-nolint
deleteMedium(medium)
```

### Parameter

- `medium`
  - : Ein String, der die zu entfernende Medienabfrage aus der Liste enthält.

### Rückgabewert

Keiner ([undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die zu entfernende Medienabfrage nicht in der Liste ist.

## Beispiele

Das folgende Beispiel entfernt die Medienabfrage `print` aus der
`MediaList`, die dem ersten auf das aktuelle Dokument angewendeten Stylesheet zugeordnet ist.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.removeMedium("print");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
