---
title: DocumentTimeline
slug: Web/API/DocumentTimeline
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{ APIRef("Web Animations") }}

Die **`DocumentTimeline`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert Animations-Zeitleisten, einschließlich der standardmäßigen Dokument-Zeitleiste (zugänglich über [`Document.timeline`](/de/docs/Web/API/Document/timeline)).

{{InheritanceDiagram}}

## Konstruktor

- [`DocumentTimeline()`](/de/docs/Web/API/DocumentTimeline/DocumentTimeline)
  - : Erstellt ein neues `DocumentTimeline`-Objekt, das dem aktiven Dokument des aktuellen Browserkontexts zugeordnet ist.

## Instanzeigenschaften

_Diese Schnittstelle erbt ihre Eigenschaft von ihrer übergeordneten Schnittstelle [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)._

- [`AnimationTimeline.currentTime`](/de/docs/Web/API/AnimationTimeline/currentTime) {{ReadOnlyInline}}
  - : Gibt den Zeitwert dieser Zeitleiste in Millisekunden zurück oder `null`, wenn sie inaktiv ist.

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
