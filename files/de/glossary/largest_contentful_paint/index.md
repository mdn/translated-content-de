---
title: Largest Contentful Paint (LCP)
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

Der Leistungskennwert **Largest Contentful Paint** (LCP) gibt die Renderzeit des größten Bildes oder Textblocks an, der im sichtbaren Bereich des Viewports angezeigt wird, gemessen ab dem Zeitpunkt, an dem die Seite zu laden beginnt.

Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- {{svgelement("image")}}-Elemente innerhalb eines SVGs.
- Die Vorschaubilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie zum Beispiel {{HTMLElement("p")}}.

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- Verwandte Glossareinträge:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("First_Paint", "First Paint")}}
