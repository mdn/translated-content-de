---
title: "Animation: cancel()-Methode"
short-title: cancel()
slug: Web/API/Animation/cancel
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Animations") }}

Die **`cancel()`**-Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der Web-Animations-API löscht alle von dieser Animation verursachten [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)s und bricht deren Wiedergabe ab.

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

Diese Methode löst direkt keine Ausnahmen aus. Allerdings, wenn der [`playState`](/de/docs/Web/API/Animation/playState) der Animation beim Abbruch etwas anderes als `"idle"` ist, wird das {{domxref("Animation.finished", "momentane Versprechen über das Beenden", "", 1)}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) namens `AbortError` abgelehnt.

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
