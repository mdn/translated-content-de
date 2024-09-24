---
title: "Animation: timeline-Eigenschaft"
short-title: timeline
slug: Web/API/Animation/timeline
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

Die **`Animation.timeline`**-Eigenschaft des {{domxref("Animation")}}-Interfaces gibt die mit dieser Animation verbundene {{domxref("AnimationTimeline", "timeline")}} zurück oder legt sie fest. Eine Timeline ist eine Quelle von Zeitwerten für Synchronisationszwecke und ist ein auf {{domxref("AnimationTimeline")}} basierendes Objekt. Standardmäßig sind die Timeline der Animation und die Timeline des {{domxref("Document")}} identisch.

## Wert

Ein {{domxref("AnimationTimeline", "timeline object", "", 1)}} zur Verwendung als Zeitquelle für die Animation oder `null`, um den Standardwert zu verwenden, der die Timeline des {{domxref("Document")}} ist.

## Beispiele

Hier setzen wir die Timeline der Animation auf dieselbe wie die Timeline des Dokuments (dies ist übrigens die Standard-Timeline für alle Animationen):

```js
animation.timeline = document.timeline;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("AnimationTimeline")}} das übergeordnete Objekt, von dem alle Timelines erben.
- {{domxref("DocumentTimeline")}} die einzige Art von Timeline-Objekt, das derzeit verfügbar ist.
- {{domxref("Document.timeline")}} ist die Standard-Timeline, die allen Animationen zugewiesen wird.
