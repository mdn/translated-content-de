---
title: Contentful Paint
slug: Glossary/Contentful_paint
l10n:
  sourceCommit: 784cf625ee9f57f6cedbbf220c66ae99e34e8f9b
---

Mehrere Leistungsmetriken wie {{Glossary("First_contentful_paint", "First Contentful Paint (FCP)")}} und {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} verwenden das Konzept eines "contentful paint".

Contentful Paints sind Malvorgänge, die bedeutenden Inhalt rendern und daher für Leistungsbewertungen wichtig sind. Sie unterscheiden sich von weniger wichtigen Malvorgängen, die keinen nützlichen Inhalt für den Benutzer bieten, wie zum Beispiel Hintergrundfarbenanstriche. Zum Beispiel ist eine Seite, die lädt, die Hintergrundfarbe setzt, aber dann lange Zeit keinen tatsächlichen Inhalt anzeigt, nicht so nützlich wie eine, die Text, Bilder oder andere Inhalte zeigt.

Was genau als "Inhalt" zählt, basiert teilweise auf Heuristiken und stimmt möglicherweise nicht perfekt mit der Benutzerwahrnehmung oder der Absicht des Entwicklers überein. Das bedeutet, dass auf unterschiedliche Weise auf den Bildschirm gezeichnete Malvorgänge als "contentful" zählen können oder nicht, selbst wenn sie dem Benutzer gleich erscheinen. Zum Beispiel würde die Verwendung eines {{htmlelement("div")}} mit einer Hintergrundfarbe nicht als contentful gelten, während die Verwendung eines {{htmlelement("img")}} oder {{svgelement("svg")}} für diese Farbe möglicherweise als contentful angesehen wird.

Die Arten von Malvorgängen, die als contentful betrachtet werden, unterscheiden sich auch leicht zwischen den Metriken:

- FCP soll messen, wann die Seite zu laden beginnt. Daher [umfasst es die meisten Elemente, die gemalt werden](https://w3c.github.io/paint-timing/#contentful), einschließlich {{htmlelement("canvas")}} und `<svg>`-Elemente. Skelettbildschirme, die nur `<div>`-Elemente verwenden, würden nicht als contentful gelten.
- LCP soll messen, wann die Seite größtenteils geladen und bereit für den Benutzer ist, daher wird versucht, sicherzustellen, dass bedeutender Inhalt vorhanden ist, bevor ausgelöst wird. Es hat strengere Kriterien als FCP, indem es nur [zeitberechtigte](https://w3c.github.io/paint-timing/#timing-eligible) Elemente als contentful zählt. Daher schließt es keine `<canvas>`- oder `<svg>`-Elemente ein, da diese schwerer zu messen sind in Bezug darauf, wann (oder ob) sie repräsentativ für den größten auf der Seite gezeichneten Inhalt sind. Darüber hinaus schließt LCP auch Bilder mit geringer Entropie aus.
- Andere Metriken wie [`Interaction Contentful Paint`](/de/docs/Web/API/InteractionContentfulPaint), [`soft navigations`](/de/docs/Web/API/PerformanceSoftNavigation), [`Element Timing`](/de/docs/Web/API/PerformanceElementTiming) und die kommende [Container Timing](https://github.com/WICG/container-timing) sind näher am LCP-Modell mit einigen kleinen Unterschieden, wie dem Ausschluss von Bildern mit geringer Entropie.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- Performance APIs
  - [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)
  - [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
  - [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
  - [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
  - [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)
