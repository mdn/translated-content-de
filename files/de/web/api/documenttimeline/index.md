---
title: DocumentTimeline
slug: Web/API/DocumentTimeline
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ APIRef("Web Animations") }}

Das **`DocumentTimeline`**-Interface der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert Animationszeitleisten, einschließlich der standardmäßigen Dokumentzeitleiste (zugreifbar über [`Document.timeline`](/de/docs/Web/API/Document/timeline)).

{{InheritanceDiagram}}

## Konstruktor

- [`DocumentTimeline()`](/de/docs/Web/API/DocumentTimeline/DocumentTimeline)
  - : Erstellt ein neues `DocumentTimeline`-Objekt, das dem aktiven Dokument des aktuellen Browsing-Kontextes zugeordnet ist.

## Instanzeigenschaften

_Dieses Interface erbt seine Eigenschaft von seinem Elternteil, [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

- [`AnimationTimeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime)
  - : Gibt den Zeitwert in Millisekunden für diese Zeitleiste zurück oder `null`, wenn sie inaktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
- [`AnimationTimeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime)
- [`Document.timeline`](/de/docs/Web/API/Document/timeline)
- [`DocumentTimeline()`](/de/docs/Web/API/DocumentTimeline/DocumentTimeline)
