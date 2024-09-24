---
title: AnimationPlaybackEvent
slug: Web/API/AnimationPlaybackEvent
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Animations") }}

Die `AnimationPlaybackEvent`-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert Animationsereignisse.

Während Animationen ablaufen, melden sie Änderungen in ihrem {{domxref("Animation.playState", "playState")}} durch Animationsereignisse.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("AnimationPlaybackEvent.AnimationPlaybackEvent", "AnimationPlaybackEvent()")}}
  - : Konstruktiert eine neue `AnimationPlaybackEvent` Objektinstanz.

## Instanzeigenschaften

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : Die aktuelle Zeit der Animation, die das Ereignis generiert hat.
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : Der Zeitwert der Zeitleiste der Animation, die das Ereignis generiert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.playState")}}
