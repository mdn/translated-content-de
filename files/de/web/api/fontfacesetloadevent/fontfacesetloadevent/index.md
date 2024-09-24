---
title: "FontFaceSetLoadEvent: FontFaceSetLoadEvent() Konstruktor"
short-title: FontFaceSetLoadEvent()
slug: Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Der **`FontFaceSetLoadEvent()`**-Konstruktor erstellt ein neues
{{domxref("FontFaceSetLoadEvent")}}-Objekt, das immer dann ausgelöst wird, wenn ein
{{domxref("FontFaceSet")}} geladen wird.

## Syntax

```js-nolint
new FontFaceSetLoadEvent(type)
new FontFaceSetLoadEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist schreibweiseempfindlich, und Browser setzen ihn immer auf `loading`, `loadingdone` oder `loadingerror`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _neben den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `fontfaces` {{optional_inline}}
      - : Ein Array von {{domxref("FontFace")}}-Instanzen. Es ist standardmäßig das leere Array.

### Rückgabewert

Ein neues {{domxref("FontFaceSetLoadEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
