---
title: Largest Contentful Paint (LCP)
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

Die **Largest Contentful Paint** (LCP) Leistungsmetrik liefert die Renderzeit des größten Bildes oder Textblocks, der innerhalb des Viewports sichtbar ist, gemessen ab dem Zeitpunkt, an dem die Seite zu laden beginnt.

Die folgenden Elemente werden als {{Glossary("Contentful_paint", "contentful")}} betrachtet, wenn das LCP bestimmt wird:

- {{HTMLElement("img")}}-Elemente.
- {{svgelement("image")}}-Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie zum Beispiel {{HTMLElement("p")}}.

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- Verwandte Glossarbegriffe:
  - {{Glossary("Contentful_Paint", "Contentful Paint")}}
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("First_Paint", "First Paint")}}
