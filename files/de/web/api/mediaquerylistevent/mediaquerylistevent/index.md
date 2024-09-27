---
title: "MediaQueryListEvent: MediaQueryListEvent()-Konstruktor"
short-title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Der **`MediaQueryListEvent()`**-Konstruktor erstellt ein neues [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Objekt.

## Syntax

```js-nolint
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitiv, und Browser setzen ihn immer auf `change`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `media` {{optional_inline}}
      - : Ein String, der eine serialisierte Media Query darstellt. Standardmäßig ist er `""`.
    - `matches` {{optional_inline}}
      - : Ein boolescher Wert, der den Status der Media Query darstellt; `true`, wenn sie übereinstimmt, `false`, wenn nicht. Standardmäßig ist er `false`.

### Rückgabewert

Ein neues [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Objekt.

## Beispiele

```js
const media = "(max-width: 600px)";
const matches = true;

const myMediaQueryListEvent = new MediaQueryListEvent("change", {
  media,
  matches,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
