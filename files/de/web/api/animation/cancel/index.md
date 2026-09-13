---
title: "Animation: cancel() Methode"
short-title: cancel()
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{ APIRef("Web Animations") }}

Die **`cancel()`** Methode des [Web Animations API](/de/docs/Web/API/Web_Animations_API) der Schnittstelle [`Animation`](/de/docs/Web/API/Animation) löscht alle durch diese Animation verursachten [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)s und bricht die Wiedergabe ab.

> [!NOTE]
> Wenn eine Animation abgebrochen wird, werden [`startTime`](/de/docs/Web/API/Animation/startTime) und [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf `null` gesetzt.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode wirft direkt keine Ausnahmen; jedoch, wenn der [`playState`](/de/docs/Web/API/Animation/playState) der Animation beim Abbruch nicht `"idle"` ist, wird das [aktuelle fertige Versprechen](/de/docs/Web/API/Animation/finished) mit einem [`DOMException`](/de/docs/Web/API/DOMException) namens `AbortError` abgelehnt.

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
