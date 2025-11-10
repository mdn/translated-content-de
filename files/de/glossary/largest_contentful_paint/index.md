---
title: Largest Contentful Paint (LCP)
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das **Largest Contentful Paint** (LCP) Leistungsmetriks liefert die Renderzeit des größten Bildes oder Textblocks, der innerhalb des Ansichtsfensters sichtbar ist, ab dem Zeitpunkt, an dem die Seite beginnt zu laden.

Die folgenden Elemente werden bei der Bestimmung der LCP berücksichtigt:

- {{HTMLElement("img")}} Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}} Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z.B. {{HTMLElement("p")}}.

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- Verwandte Glossarbegriffe:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("First_Paint", "First Paint")}}
