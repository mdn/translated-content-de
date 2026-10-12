---
title: Contentful Paint
slug: Glossary/Contentful_paint
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

Mehrere Leistungsmetriken wie {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}} und {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} verwenden das Konzept eines „Contentful Paint“.

Contentful Paints sind Zeichenoperationen, die wesentliche Inhalte darstellen und daher für Leistungsmessungen relevant sind. Sie unterscheiden sich von weniger wichtigen Zeichenoperationen ohne nützliche Inhalte für Benutzer, etwa dem Zeichnen einer Hintergrundfarbe. Eine Seite, die geladen wird und ihre Hintergrundfarbe setzt, danach aber lange Zeit keine eigentlichen Inhalte anzeigt, ist beispielsweise weniger nützlich als eine Seite, die Text, Bilder oder andere Inhalte anzeigt.

Was genau als „Inhalt“ gilt, wird bis zu einem gewissen Grad anhand von Heuristiken bestimmt und stimmt möglicherweise nicht vollständig mit der Wahrnehmung der Benutzer oder der Absicht der Entwickler überein. Daher können auf unterschiedliche Weise dargestellte Inhalte als „contentful“ gelten oder nicht, selbst wenn sie für Benutzer gleich aussehen. Beispielsweise würde ein {{htmlelement("div")}} mit einer Hintergrundfarbe nicht als contentful gelten, während ein {{htmlelement("img")}} oder {{svgelement("svg")}} mit derselben Farbe als contentful gelten könnte.

Welche Arten von Zeichenoperationen als contentful gelten, unterscheidet sich auch geringfügig zwischen den Metriken:

- FCP soll messen, wann das Laden der Seite beginnt. Daher [berücksichtigt FCP die meisten Elemente, die gezeichnet werden](https://w3c.github.io/paint-timing/#contentful), einschließlich {{htmlelement("canvas")}}- und `<svg>`-Elementen. Skeleton Screens, die nur `<div>`-Elemente verwenden, würden nicht als contentful gelten.
- LCP soll messen, wann die Seite größtenteils geladen und für Benutzer bereit ist. Daher soll erst dann ein Messwert erfasst werden, wenn aussagekräftige Inhalte vorhanden sind. Die Kriterien sind strenger als bei FCP: Nur [für die Zeitmessung geeignete](https://w3c.github.io/paint-timing/#timing-eligible) Elemente gelten als contentful. `<canvas>`- und `<svg>`-Elemente werden deshalb nicht berücksichtigt, da sich bei ihnen schwerer bestimmen lässt, wann – oder ob überhaupt – sie den größten auf der Seite dargestellten Inhalt repräsentieren. Darüber hinaus schließt LCP auch Bilder mit geringer Entropie aus.
- Andere Metriken wie [Interaction Contentful Paint](/de/docs/Web/API/InteractionContentfulPaint), [Soft Navigations](/de/docs/Web/API/PerformanceSoftNavigation), [Element Timing](/de/docs/Web/API/PerformanceElementTiming) und das kommende [Container Timing](https://github.com/w3c/container-timing) orientieren sich stärker am LCP-Modell, mit einigen kleinen Unterschieden – beispielsweise werden Bilder mit geringer Entropie nicht ausgeschlossen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- Performance-APIs
  - [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)
  - [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)
