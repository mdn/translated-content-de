---
title: "AnimationPlaybackEvent: AnimationPlaybackEvent()-Konstruktor"
short-title: AnimationPlaybackEvent()
slug: Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Der **`AnimationPlaybackEvent()`**-Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) liefert eine neue [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)-Objektinstanz zurück.

## Syntax

```js-nolint
new AnimationPlaybackEvent(type)
new AnimationPlaybackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Dieser ist Groß- und Kleinschreibung-sensitiv, und Browser setzen ihn auf `cancel`, `finish` oder `remove`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _(zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften)_ die folgenden Eigenschaften besitzt:
    - `detail` {{optional_inline}}
      - : Ein ereignisabhängiger Wert, der mit dem Ereignis verknüpft ist. Standardmäßig `null`.

### Rückgabewert

Ein neues [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationPlayBackEvent`](/de/docs/Web/API/AnimationPlaybackEvent)
- [`Animation.playState`](/de/docs/Web/API/Animation/playState)
- [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent)
- [`Event()`](/de/docs/Web/API/Event/Event)
