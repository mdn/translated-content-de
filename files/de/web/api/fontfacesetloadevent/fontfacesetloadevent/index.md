---
title: "FontFaceSetLoadEvent: FontFaceSetLoadEvent()-Konstruktor"
short-title: FontFaceSetLoadEvent()
slug: Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Der **`FontFaceSetLoadEvent()`**-Konstruktor erstellt ein neues
[`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)-Objekt, das ausgelöst wird, wann immer ein
[`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Syntax

```js-nolint
new FontFaceSetLoadEvent(type)
new FontFaceSetLoadEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es immer auf `loading`, `loadingdone` oder `loadingerror`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften enthalten kann:
    - `fontfaces` {{optional_inline}}
      - : Ein Array von [`FontFace`](/de/docs/Web/API/FontFace)-Instanzen. Es ist standardmäßig das leere Array.

### Rückgabewert

Ein neues [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
