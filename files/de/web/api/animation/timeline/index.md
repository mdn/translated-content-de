---
title: "Animation: timeline-Eigenschaft"
short-title: timeline
slug: Web/API/Animation/timeline
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die **`Animation.timeline`**-Eigenschaft der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle gibt die mit dieser Animation verknüpfte [`timeline`](/de/docs/Web/API/AnimationTimeline) zurück oder setzt sie. Eine Zeitachse ist eine Quelle von Zeitwerten für Synchronisationszwecke und ist ein auf [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline) basierendes Objekt. Standardmäßig sind die Zeitachse der Animation und die Zeitachse des [`Document`](/de/docs/Web/API/Document) identisch.

## Wert

Ein [timeline object](/de/docs/Web/API/AnimationTimeline) zur Verwendung als Zeitquelle für die Animation oder `null`, um die Standardeinstellung zu verwenden, die die Zeitachse des [`Document`](/de/docs/Web/API/Document) ist.

## Beispiele

Hier setzen wir die Zeitachse der Animation auf die gleiche Zeitachse wie die des Dokuments (dies ist übrigens die Standard-Zeitachse für alle Animationen):

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
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline), das übergeordnete Objekt, von dem alle Zeitachsen erben.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), die einzige Art von Zeitachsenobjekt, das derzeit verfügbar ist.
- [`Document.timeline`](/de/docs/Web/API/Document/timeline), die Standard-Zeitachse, der alle Animationen zugewiesen sind.
