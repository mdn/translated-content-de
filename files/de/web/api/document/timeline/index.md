---
title: "Dokument: timeline-Eigenschaft"
short-title: timeline
slug: Web/API/Document/timeline
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ APIRef("Web Animations") }}

Die schreibgeschützte Eigenschaft `timeline` des {{domxref("Document")}}-Interfaces repräsentiert die Standard-Zeitachse des aktuellen Dokuments. Diese Zeitachse ist eine spezielle Instanz von {{domxref("DocumentTimeline")}}.

Diese Zeitachse ist einzigartig für jedes `document` und bleibt während der gesamten Lebensdauer des `document`, einschließlich Aufrufen von {{domxref("Document.open()")}}, bestehen.

Diese Zeitachse drückt die Zeit in Millisekunden seit {{domxref("Performance.timeOrigin")}} aus. Vor dem Zeitursprung ist die Zeitachse inaktiv, und ihre {{domxref("AnimationTimeline.currentTime","currentTime")}} ist `null`.

> [!NOTE]
> Eine Dokumenten-Zeitachse, die einem nicht-aktiven Dokument zugeordnet ist (ein {{domxref("Document")}} ohne Zuordnung zu einem {{domxref("Window")}}, {{htmlelement("iframe")}} oder {{htmlelement("frame")}}), wird ebenfalls als inaktiv betrachtet.

## Wert

Ein {{domxref("DocumentTimeline")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("DocumentTimeline")}}
