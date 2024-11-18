---
title: "MediaList: deleteMedium() Methode"
short-title: deleteMedium()
slug: Web/API/MediaList/deleteMedium
l10n:
  sourceCommit: 1759afe30edd337bbf8954e368c9c9889f6e865e
---

{{APIRef("CSSOM")}}

Die `deleteMedium()`-Methode der [`MediaList`](/de/docs/Web/API/MediaList)-Schnittstelle entfernt die angegebene Medienabfrage aus dieser `MediaList`.

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

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zu entfernende Medienabfrage nicht in der Liste enthalten ist.

## Beispiele

Das folgende Beispiel entfernt die Medienabfrage `print` aus der
`MediaList`, die mit dem ersten auf das aktuelle Dokument angewendeten Stylesheet verbunden ist.

```js
const stylesheet = document.styleSheets[0];
stylesheet.media.deleteMedium("print");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
