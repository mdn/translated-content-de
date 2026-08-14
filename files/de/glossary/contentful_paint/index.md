---
title: Contentful Paint
slug: Glossary/Contentful_paint
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Mehrere Leistungskennzahlen wie {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}} und {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} verwenden das Konzept eines "contentful paint".

Contentful paints sind Maloperationen, die bedeutenden Inhalt rendern und daher für Leistungsmessungen wichtig sind. Sie unterscheiden sich von weniger wichtigen Paints, die keinen nützlichen Inhalt für den Benutzer enthalten, wie zum Beispiel Hintergrundfarben-Paints. Eine Seite, die geladen wird, die Hintergrundfarbe setzt, aber dann für einen langen Zeitraum keinen tatsächlichen Inhalt zeigt, ist beispielsweise nicht so nützlich wie eine, die Text, Bilder oder andere Inhalte zeigt.

Was genau als "Inhalt" zählt, basiert bis zu einem gewissen Grad auf Heuristiken und stimmt möglicherweise nicht perfekt mit der Benutzerwahrnehmung oder Entwicklerabsicht überein. Das bedeutet, dass Paints, die auf unterschiedliche Weise auf den Bildschirm gezeichnet werden, als "contentful" gelten können oder nicht, selbst wenn sie dem Benutzer identisch erscheinen. Beispielsweise würde die Verwendung eines {{htmlelement("div")}} mit einer Hintergrundfarbe nicht als contentful gelten, während die Verwendung eines {{htmlelement("img")}} oder {{svgelement("svg")}} für diese Farbe möglicherweise als contentful angesehen wird.

Die Arten von Paints, die als contentful betrachtet werden, unterscheiden sich auch leicht zwischen den Metriken:

- FCP ist dafür gedacht zu messen, wann die Seite zu laden beginnt. Daher [schließt es die meisten Elemente ein, die malen](https://w3c.github.io/paint-timing/#contentful), einschließlich {{htmlelement("canvas")}} und `<svg>` Elemente. Skeleton Screens, die nur `<div>` Elemente verwenden, würden nicht als contentful zählen.
- LCP ist dafür gedacht zu messen, wann die Seite größtenteils geladen und für den Benutzer bereit ist, daher versucht es sicherzustellen, dass es bedeutsamen Inhalt gibt, bevor es ausgelöst wird. Es hat strengere Kriterien als FCP, indem es nur [timing-eligible](https://w3c.github.io/paint-timing/#timing-eligible) Elemente als contentful zählt. Es schließt daher `<canvas>` oder `<svg>` Elemente nicht ein, da diese schwerer zu messen sind, wann (oder ob) sie repräsentativ für den größten auf der Seite gezeichneten Inhalt sind. Darüber hinaus schließt LCP auch Bilder mit geringer Entropie aus.
- Andere Metriken wie [Interaction Contentful Paint](/de/docs/Web/API/InteractionContentfulPaint), [soft navigations](/de/docs/Web/API/PerformanceSoftNavigation), [Element Timing](/de/docs/Web/API/PerformanceElementTiming) und das kommende [Container Timing](https://github.com/WICG/container-timing) sind näher am LCP-Modell, mit einigen kleinen Unterschieden, wie zum Beispiel das Nicht-Ausschließen von Bildern mit geringer Entropie.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- Leistungs-APIs
  - [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)
  - [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)
