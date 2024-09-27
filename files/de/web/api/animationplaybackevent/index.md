---
title: AnimationPlaybackEvent
slug: Web/API/AnimationPlaybackEvent
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Animations") }}

Die `AnimationPlaybackEvent`-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert Animationsereignisse.

Während Animationsabspielen berichten sie Änderungen ihres [`playState`](/de/docs/Web/API/Animation/playState) durch Animationsereignisse.

{{InheritanceDiagram}}

## Konstruktor

- [`AnimationPlaybackEvent()`](/de/docs/Web/API/AnimationPlaybackEvent/AnimationPlaybackEvent)
  - : Erstellt eine neue Instanz des `AnimationPlaybackEvent`-Objekts.

## Instanzeigenschaften

- [`AnimationPlaybackEvent.currentTime`](/de/docs/Web/API/AnimationPlaybackEvent/currentTime) {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis erzeugt hat.
- [`AnimationPlaybackEvent.timelineTime`](/de/docs/Web/API/AnimationPlaybackEvent/timelineTime) {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis erzeugt hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation.playState`](/de/docs/Web/API/Animation/playState)
