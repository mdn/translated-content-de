---
title: "MediaQueryListEvent: MediaQueryListEvent() Konstruktor"
short-title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Der **`MediaQueryListEvent()`** Konstruktor erstellt ein neues [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)-Objekt.

## Syntax

```js-nolint
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Events.
    Es ist case-sensitive und Browser setzen es immer auf `change`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `media` {{optional_inline}}
      - : Ein String, der eine serialisierte Medienabfrage darstellt. Standardmäßig ist er `""`.
    - `matches` {{optional_inline}}
      - : Ein boolescher Wert, der den Status der Medienabfrage darstellt; `true`, wenn sie zutrifft, `false`, wenn nicht. Standardmäßig ist er `false`.

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

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Medienabfragen im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
