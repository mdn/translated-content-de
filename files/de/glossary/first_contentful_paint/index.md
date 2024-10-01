---
title: First contentful paint
slug: Glossary/First_contentful_paint
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**First Contentful Paint** (FCP) ist der Zeitpunkt, an dem der Browser das erste Stück Inhalt aus dem DOM rendert und dem Benutzer das erste Feedback gibt, dass die Seite tatsächlich lädt. Die Frage "Passiert etwas?" wird mit "Ja" beantwortet, wenn das erste contentful paint abgeschlossen ist.

_Der First Contentful Paint_ Zeitstempel ist der Moment, an dem der Browser zum ersten Mal Text, Bild (einschließlich Hintergrundbilder), Video, `canvas`, in das gezeichnet wurde, oder eine nicht-leere SVG gerendert hat. Dies schließt Inhalte innerhalb von `iframes` aus, umfasst jedoch Text mit ausstehenden Webfonts. Dies ist das erste Mal, dass Benutzer mit dem Konsumieren von Seiteninhalten beginnen könnten.

## Siehe auch

- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
- Verwandte Glossarbegriffe:
  - {{Glossary("First_paint", "First paint")}}
  - {{Glossary("Largest_contentful_paint", "Largest contentful paint")}}
  - {{Glossary("First_meaningful_paint", "First meaningful paint")}}
- [First Contentful Paint](https://web.dev/articles/fcp) auf web.dev
