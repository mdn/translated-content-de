---
title: "AnimationPlaybackEvent: AnimationPlaybackEvent() Konstruktor"
short-title: AnimationPlaybackEvent()
slug: Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Der **`AnimationPlaybackEvent()`** Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt eine neue {{domxref("AnimationPlaybackEvent")}} Objektinstanz zurück.

## Syntax

```js-nolint
new AnimationPlaybackEvent(type)
new AnimationPlaybackEvent(type, options)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert mit dem Namen des Ereignisses.
    Er ist groß-/kleinschreibungssensitiv, und Browser setzen ihn auf `cancel`, `finish` oder `remove`.
- `options` {{optional_inline}}
  - : Ein Objekt, das zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften die folgenden Eigenschaften besitzt:
    - `detail` {{optional_inline}}
      - : Ein ereignisabhängiger Wert, der mit dem Ereignis verknüpft ist. Standardmäßig `null`.

### Rückgabewert

Ein neues {{domxref("AnimationPlaybackEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
- {{domxref("Animation.playState")}}
- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
- {{domxref("Event.Event", "Event()")}}
