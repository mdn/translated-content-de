---
title: Dokumenten-Zeitleiste
slug: Web/API/DocumentTimeline
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ APIRef("Web Animations") }}

Das **`DocumentTimeline`**-Interface der [Web-Animationen-API](/de/docs/Web/API/Web_Animations_API) repräsentiert Animationszeitleisten, einschließlich der standardmäßigen Dokumenten-Zeitleiste (zugreifbar über {{domxref("Document.timeline")}}).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
  - : Erstellt ein neues `DocumentTimeline`-Objekt, das dem aktiven Dokument des aktuellen Browsing-Kontexts zugeordnet ist.

## Instanz-Eigenschaften

_Dieses Interface erbt seine Eigenschaften von seinem Elternteil, {{domxref("AnimationTimeline")}}._

- {{domxref("AnimationTimeline.currentTime")}}
  - : Gibt den Zeitwert in Millisekunden für diese Zeitleiste zurück oder `null`, wenn sie inaktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("Document.timeline")}}
- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
