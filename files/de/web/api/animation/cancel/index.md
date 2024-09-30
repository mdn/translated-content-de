---
title: "Animation: cancel()-Methode"
short-title: cancel()
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die **`cancel()`**-Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der Web Animations API entfernt alle durch diese Animation verursachten [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)s und bricht deren Wiedergabe ab.

> [!NOTE]
> Wenn eine Animation abgebrochen wird, werden deren [`startTime`](/de/docs/Web/API/Animation/startTime) und [`currentTime`](/de/docs/Web/API/Animation/currentTime) auf `null` gesetzt.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode wirft direkt keine Ausnahmen; wenn jedoch der [`playState`](/de/docs/Web/API/Animation/playState) der Animation beim Abbruch nicht `"idle"` ist, wird das {{domxref("Animation.finished", "aktuelle abgeschlossene Promise", "", 1)}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `AbortError` abgelehnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
- [`Animation`](/de/docs/Web/API/Animation)
- [`Animation.playState`](/de/docs/Web/API/Animation/playState)
- [`Animation.finished`](/de/docs/Web/API/Animation/finished) gibt das Promise zurück, das abgelehnt wird, wenn der `playState` der Animation nicht `"idle"` ist.
