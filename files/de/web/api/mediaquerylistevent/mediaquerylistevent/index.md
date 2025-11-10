---
title: "MediaQueryListEvent: MediaQueryListEvent() Konstruktor"
short-title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM view API")}}

Der **`MediaQueryListEvent()`** Konstruktor erstellt ein neues [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent) Objekt.

## Syntax

```js-nolint
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es immer auf `change`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `media` {{optional_inline}}
      - : Ein String, der eine serialisierte Media-Query darstellt. Standardmäßig `""`.
    - `matches` {{optional_inline}}
      - : Ein boolescher Wert, der den Status der Media-Query repräsentiert; `true`, wenn sie übereinstimmt, `false`, wenn nicht. Standardmäßig `false`.

### Rückgabewert

Ein neues [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent) Objekt.

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

- [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verwendung von Media-Queries im Code](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
