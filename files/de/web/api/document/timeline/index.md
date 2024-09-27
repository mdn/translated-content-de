---
title: "Document: timeline-Eigenschaft"
short-title: timeline
slug: Web/API/Document/timeline
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Animations") }}

Die `timeline` schreibgeschützte Eigenschaft der [`Document`](/de/docs/Web/API/Document) Schnittstelle repräsentiert die Standard-Zeitleiste des aktuellen Dokuments. Diese Zeitleiste ist eine spezielle Instanz von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline).

Diese Zeitleiste ist für jedes `document` einzigartig und bleibt für die gesamte Lebensdauer des `document` bestehen, einschließlich Aufrufen von [`Document.open()`](/de/docs/Web/API/Document/open).

Diese Zeitleiste drückt die Zeit in Millisekunden seit [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) aus. Vor dem Zeitursprung ist die Zeitleiste inaktiv und ihre [`currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime) ist `null`.

> [!NOTE]
> Eine Dokumenten-Zeitleiste, die mit einem inaktiven Dokument (einem [`Document`](/de/docs/Web/API/Document), das nicht mit einem [`Window`](/de/docs/Web/API/Window), {{htmlelement("iframe")}}, oder {{htmlelement("frame")}} assoziiert ist) verknüpft ist, wird ebenfalls als inaktiv betrachtet.

## Wert

Ein [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`AnimationTimeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime)
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
