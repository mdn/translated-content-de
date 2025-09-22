---
title: "AnimationTimeline: duration-Eigenschaft"
short-title: duration
slug: Web/API/AnimationTimeline/duration
l10n:
  sourceCommit: b7536cd198df32cd28c01d407a1d8b4dbceed7d2
---

{{ APIRef("Web Animations") }}

Die **`duration`**-Eigenschaft des [Web Animations API](/de/docs/Web/API/Web_Animations_API)'s [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)-Interfaces gibt den Höchstwert für diese Timeline oder `null` zurück.

Beachten Sie, dass die abgeleiteten Schnittstellen [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) und [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) immer eine Dauer von 100 % zurückgeben, während [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) keine Dauer hat und `null` zurückgibt.

## Wert

Eine Zahl, die die Dauer der Timeline (den Höchstwert für diese Timeline) oder `null` darstellt.

## Beispiele

### View-Timeline-Dauer

Die [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) gibt immer eine Dauer von 100% als [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück.

```js
const subject = document.querySelector(".subject");
const timeline = new ViewTimeline({
  subject,
  axis: "block",
});

timeline.duration; // CSSUnitValue { value: 100, unit: "percent" }
```

### Scroll-Timeline-Dauer

Die [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) gibt immer eine Dauer von 100% als [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück.

```js
const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: "block",
});

timeline.duration; // CSSUnitValue { value: 100, unit: "percent" }
```

### Dokument-Timeline-Dauer

Die [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) hat keine Dauer.

```js
document.timeline.duration; // null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) erbt diese Eigenschaft
- [`ScrollTimeline`](/de/docs/Web/API/ScrollTimeline) erbt diese Eigenschaft
- [`ViewTimeline`](/de/docs/Web/API/ViewTimeline) erbt diese Eigenschaft
