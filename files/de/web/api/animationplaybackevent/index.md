---
title: AnimationPlaybackEvent
slug: Web/API/AnimationPlaybackEvent
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Animations") }}

Das `AnimationPlaybackEvent` Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert Animationsereignisse.

Während Animationen abgespielt werden, melden sie Änderungen ihres [`playState`](/de/docs/Web/API/Animation/playState) durch Animationsereignisse.

{{InheritanceDiagram}}

## Konstruktor

- [`AnimationPlaybackEvent()`](/de/docs/Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent)
  - : Erstellt eine neue `AnimationPlaybackEvent` Objektinstanz.

## Instanz-Eigenschaften

- [`AnimationPlaybackEvent.currentTime`](/de/docs/Web/API/AnimationPlaybackEvent/currentTime) {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis generiert hat.
- [`AnimationPlaybackEvent.timelineTime`](/de/docs/Web/API/AnimationPlaybackEvent/timelineTime) {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis generiert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation.playState`](/de/docs/Web/API/Animation/playState)
