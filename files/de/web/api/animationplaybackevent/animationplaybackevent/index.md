---
title: "AnimationPlaybackEvent: Konstruktor AnimationPlaybackEvent()"
short-title: AnimationPlaybackEvent()
slug: Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Der **`AnimationPlaybackEvent()`**-Konstruktor der [Web Animations API](/de/docs/Web/API/Web_Animations_API) gibt eine neue [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent) Objektinstanz zurück.

## Syntax

```js-nolint
new AnimationPlaybackEvent(type)
new AnimationPlaybackEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es unterscheidet Groß- und Kleinschreibung und wird von Browsern auf `cancel`, `finish` oder `remove` gesetzt.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `detail` {{optional_inline}}
      - : Ein vom Ereignis abhängiger Wert, der mit dem Ereignis verbunden ist. Standardmäßig `null`.

### Rückgabewert

Ein neues [`AnimationPlaybackEvent`](/de/docs/Web/API/AnimationPlaybackEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationPlayBackEvent`](/de/docs/Web/API/AnimationPlayBackEvent)
- [`Animation.playState`](/de/docs/Web/API/Animation/playState)
- [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent)
- [`Event()`](/de/docs/Web/API/Event/Event)
