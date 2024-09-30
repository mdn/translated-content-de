---
title: "Document: timeline-Eigenschaft"
short-title: timeline
slug: Web/API/Document/timeline
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte Eigenschaft `timeline` der [`Document`](/de/docs/Web/API/Document)-Schnittstelle repräsentiert die Standard-Timeline des aktuellen Dokuments. Diese Timeline ist eine spezielle Instanz von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline).

Diese Timeline ist einzigartig für jedes `document` und bleibt während der gesamten Lebensdauer des `document` bestehen, einschließlich Aufrufen von [`Document.open()`](/de/docs/Web/API/Document/open).

Diese Timeline drückt die Zeit in Millisekunden seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) aus.
Vor dem Zeitursprung ist die Timeline inaktiv, und ihre [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime) ist `null`.

> [!NOTE]
> Eine Dokument-Timeline, die mit einem nicht aktiven Dokument (einem [`Document`](/de/docs/Web/API/Document), das nicht mit einem [`Window`](/de/docs/Web/API/Window), {{htmlelement("iframe")}} oder {{htmlelement("frame")}} verbunden ist) verknüpft ist, wird ebenfalls als inaktiv betrachtet.

## Wert

Ein [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`AnimationTimeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime)
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
