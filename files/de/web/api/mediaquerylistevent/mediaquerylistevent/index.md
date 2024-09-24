---
title: "MediaQueryListEvent: MediaQueryListEvent() Konstruktor"
short-title: MediaQueryListEvent()
slug: Web/API/MediaQueryListEvent/MediaQueryListEvent
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

Der **`MediaQueryListEvent()`** Konstruktor erstellt ein neues {{domxref("MediaQueryListEvent")}} Objekt.

## Syntax

```js-nolint
new MediaQueryListEvent(type)
new MediaQueryListEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß-/kleinschreibungssensitiv und Browser setzen es immer auf `change`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den Eigenschaften, die in {{domxref("Event/Event", "Event()")}} definiert sind_ die folgenden Eigenschaften haben kann:
    - `media` {{optional_inline}}
      - : Ein String, der eine serialisierte Medienabfrage darstellt. Standardmäßig ist er `""`.
    - `matches` {{optional_inline}}
      - : Ein boolescher Wert, der den Status der Medienabfrage darstellt; `true`, wenn es übereinstimmt, `false`, wenn nicht. Er ist standardmäßig `false`.

### Rückgabewert

Ein neues {{domxref("MediaQueryListEvent")}} Objekt.

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
- [Media Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
