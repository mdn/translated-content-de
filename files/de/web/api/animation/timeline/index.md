---
title: "Animation: timeline-Eigenschaft"
short-title: timeline
slug: Web/API/Animation/timeline
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die **`Animation.timeline`**-Eigenschaft des [`Animation`](/de/docs/Web/API/Animation)-Interface gibt die mit dieser Animation verknüpfte [`timeline`](/de/docs/Web/API/AnimationTimeline) zurück oder legt diese fest. Eine Timeline ist eine Quelle von Zeitwerten für Synchronisationszwecke und ein auf [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) basierendes Objekt. Standardmäßig sind die Timeline der Animation und die Timeline des [`Document`](/de/docs/Web/API/Document) identisch.

## Wert

Ein {{domxref("AnimationTimeline", "timeline-Objekt", "", 1)}} zur Verwendung als Timingquelle für die Animation oder `null` zur Verwendung des Standards, welches die Timeline des [`Document`](/de/docs/Web/API/Document) ist.

## Beispiele

Hier setzen wir die Timeline der Animation so, dass sie mit der Timeline des Dokuments übereinstimmt (dies ist übrigens die Standard-Timeline für alle Animationen):

```js
animation.timeline = document.timeline;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), das übergeordnete Objekt, von dem alle Timelines erben.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), die einzige Art von Timeline-Objekt, die derzeit verfügbar ist.
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) ist die Standard-Timeline, die allen Animationen zugewiesen wird.
