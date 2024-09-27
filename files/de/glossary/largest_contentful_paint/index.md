---
title: Largest Contentful Paint
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Das **Largest Contentful Paint** (LCP) Leistungsmerkmal liefert die Renderzeit des größten Bilds oder Textblocks, der innerhalb des Viewports sichtbar ist, und wird ab dem Zeitpunkt aufgezeichnet, an dem die Seite erstmals geladen wird.

Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image)-Elemente innerhalb eines SVG.
- Die Poster-Bilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z.B. {{HTMLElement("p")}}.

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- Verwandte Glossarbegriffe:
  - [First Contentful Paint](/de/docs/Glossary/First_contentful_paint)
  - [First Paint](/de/docs/Glossary/First_paint)
