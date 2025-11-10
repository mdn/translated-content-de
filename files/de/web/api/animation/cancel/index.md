---
title: "Animation: cancel() Methode"
short-title: cancel()
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: ee20ce74eefdb7612f16c575667ad6a3b17b7d9e
---

{{ APIRef("Web Animations") }}

Die **`cancel()`** Methode des [Web Animations API](/de/docs/Web/API/Web_Animations_API) der [`Animation`](/de/docs/Web/API/Animation) Schnittstelle entfernt alle durch diese Animation verursachten [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)s und bricht deren Wiedergabe ab.

> [!NOTE]
> Wenn eine Animation abgebrochen wird, werden ihr [`startTime`](/de/docs/Web/API/Animation/startTime) und [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf `null` gesetzt.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode wirft keine Ausnahmen direkt; jedoch, wenn der [`playState`](/de/docs/Web/API/Animation/playState) der Animation beim Abbruch anders als `"idle"` ist, wird das [aktuelle abgeschlossene Versprechen](/de/docs/Web/API/Animation/finished) mit einem [`DOMException`](/de/docs/Web/API/DOMException) namens `AbortError` abgelehnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
- [`Animation`](/de/docs/Web/API/Animation)
- [`Animation.playState`](/de/docs/Web/API/Animation/playState)
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) gibt das Versprechen zurück, das abgelehnt wird, wenn der `playState` der Animation nicht `"idle"` ist.
