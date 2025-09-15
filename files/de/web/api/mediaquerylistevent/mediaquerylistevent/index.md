---
title: "MediaQueryListEvent: MediaQueryListEvent() Konstruktor"
short-title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Der **`MediaQueryListEvent()`** Konstruktor erstellt ein neues [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Objekt.

## Syntax

```js-nolint
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv und Browser setzen ihn immer auf `change`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in [`Event()`](/de/docs/Web/API/Event/Event) definiert sind_, die folgenden Eigenschaften haben kann:
    - `media` {{optional_inline}}
      - : Eine Zeichenfolge, die eine serialisierte Media Query darstellt. Standardmäßig ist sie `""`.
    - `matches` {{optional_inline}}
      - : Ein boolescher Wert, der den Status der Media Query darstellt; `true`, wenn sie zutrifft, `false`, wenn nicht. Standardmäßig ist sie `false`.

### Rückgabewert

Ein neues [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Objekt.

## Beispiele

```js
const media = "(width <= 600px)";
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
