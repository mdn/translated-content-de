---
title: "Animation: cancel() Methode"
short-title: cancel()
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die **`cancel()`** Methode des {{domxref("Animation")}}-Interfaces der Web Animations API entfernt alle durch diese Animation verursachten {{domxref("KeyframeEffect")}}s und bricht die Wiedergabe ab.

> [!NOTE]
> Wenn eine Animation abgebrochen wird, werden deren {{domxref("Animation.startTime", "startTime")}} und {{domxref("Animation.currentTime", "currentTime")}} auf `null` gesetzt.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode wirft nicht direkt Ausnahmen; Wenn jedoch der {{domxref("Animation.playState", "playState")}} der Animation beim Abbrechen nicht `"idle"` ist, wird das {{domxref("Animation.finished", "current finished promise", "", 1)}} mit einem {{domxref("DOMException")}} namens `AbortError` abgelehnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} gibt das Versprechen zurück, das diese Aktion ablehnen wird, wenn der `playState` der Animation nicht `"idle"` ist.
