---
title: "FontFaceSetLoadEvent: FontFaceSetLoadEvent() Konstruktor"
short-title: FontFaceSetLoadEvent()
slug: Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Der **`FontFaceSetLoadEvent()`** Konstruktor erstellt ein neues [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)-Objekt, das ausgelöst wird, wenn ein [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) geladen wird.

## Syntax

```js-nolint
new FontFaceSetLoadEvent(type)
new FontFaceSetLoadEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive, und Browser setzen es immer auf `loading`, `loadingdone` oder `loadingerror`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `fontfaces` {{optional_inline}}
      - : Ein Array von [`FontFace`](/de/docs/Web/API/FontFace)-Instanzen. Der Standardwert ist ein leeres Array.

### Rückgabewert

Ein neues [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
