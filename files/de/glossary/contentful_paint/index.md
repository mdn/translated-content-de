---
title: Contentful Paint
slug: Glossary/Contentful_paint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

Mehrere Leistungsmetriken wie {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}} und {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} verwenden das Konzept eines "Contentful Paint".

Contentful Paints sind Maloperationen, die signifikanten Inhalt rendern und daher wichtig für Leistungsbewertungen sind. Diese heben sich von weniger wichtigen Paints ab, die keinen nützlichen Inhalt für den Benutzer enthalten, wie zum Beispiel Hintergrundfarben-Paints. Eine Seite, die lädt, die Hintergrundfarbe setzt, aber dann für längere Zeit keinen tatsächlichen Inhalt zeigt, ist beispielsweise nicht so nützlich wie eine, die Text, Bilder oder andere Inhalte zeigt.

Was genau als "Inhalt" zählt, basiert zu einem gewissen Grad auf Heuristik und stimmt möglicherweise nicht perfekt mit der Benutzerwahrnehmung oder der Absicht des Entwicklers überein. Das bedeutet, dass auf verschiedene Weise auf den Bildschirm gezeichnete Paints als "contentful" zählen oder nicht, selbst wenn sie für den Benutzer gleich aussehen. Zum Beispiel würde die Verwendung eines {{htmlelement("div")}} mit Hintergrundfarbe nicht als contentful gelten, während die Verwendung eines {{htmlelement("img")}} oder {{htmlelement("svg")}} für diese Farbe als contentful betrachtet werden könnte.

Die Arten von Paints, die als contentful gelten, unterscheiden sich auch leicht zwischen den Metriken:

- FCP soll messen, wann die Seite mit dem Laden beginnt. Es [umfasst daher die meisten Elemente, die gemalt werden](https://w3c.github.io/paint-timing/#contentful), einschließlich {{htmlelement("canvas")}}- und `<svg>`-Elemente. Skeleton-Screens, die nur `<div>`-Elemente verwenden, würden nicht als contentful zählen.
- LCP soll messen, wann die Seite größtenteils geladen und bereit für den Benutzer ist, daher versucht es sicherzustellen, dass es bedeutenden Inhalt gibt, bevor es ausgelöst wird. Es hat strengere Kriterien als FCP und zählt nur [zeitberechtigte](https://w3c.github.io/paint-timing/#timing-eligible) Elemente als contentful. Es schließt daher `<canvas>`- oder `<svg>`-Elemente nicht ein, da diese schwieriger zu messen sind, in Bezug darauf, wann (oder ob) sie repräsentativ für den größten auf der Seite gezeichneten Inhalt sind. Außerdem schließt LCP auch Bilder mit niedriger Entropie aus.
- Andere Metriken wie [`Interaction Contentful Paint`](/de/docs/Web/API/InteractionContentfulPaint), [`soft navigations`](/de/docs/Web/API/PerformanceSoftNavigation), [`Element Timing`](/de/docs/Web/API/PerformanceElementTiming) und das bevorstehende [Container Timing](https://github.com/WICG/container-timing) sind dem LCP-Modell näher, mit einigen kleinen Unterschieden, wie niedrige Entropie-Bilder, die nicht ausgeschlossen sind.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- Performance-APIs:
  - [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)
  - [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)
