---
title: Accessibility tree
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Der **Accessibility-Tree** enthält {{Glossary("accessibility", "Zugänglichkeits")}}-bezogene Informationen für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die als _[DOM-Tree](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ bezeichnet wird. Der DOM-Tree enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Browser erstellen dann basierend auf dem DOM-Tree einen Accessibility-Tree, der von plattform-spezifischen Accessibility-APIs genutzt wird, um eine Darstellung zu bieten, die von unterstützender Technologie, wie Bildschirmlesegeräten, verstanden werden kann.

In einem Accessibility-Tree-Objekt gibt es vier Eigenschaften:

- **name**
  - : Wie können wir auf dieses Element verweisen? Zum Beispiel wird ein Link mit dem Text "Read more" als Name "Read more" haben (mehr darüber, wie Namen berechnet werden, finden Sie in der [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **description**
  - : Wie beschreiben wir dieses Element, wenn wir mehr Beschreibung über den Namen hinaus bieten möchten? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role**](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Um welche Art von Element handelt es sich? Ist es beispielsweise ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state**](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Hat es einen Zustand? Beispiele sind angekreuzte oder nicht angekreuzte Kontrollkästchenzustände und eingeklappte oder erweiterte Zustände für das [`<summary>`](/de/docs/Web/HTML/Element/summary)-Element.

Zusätzlich enthält der Accessibility-Tree häufig Informationen darüber, was mit einem Element gemacht werden kann: Ein Link kann _gefolgt_, ein Texteingabefeld kann _beschrieben_ werden, usw.

Während sich das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** im April 2022 noch im Entwurf der Web Incubator Community Group befindet, zielt es darauf ab, APIs zu entwickeln, die es erleichtern, Zugänglichkeitssemantiken auszudrücken und möglicherweise den Zugriff auf den berechneten Accessibility-Tree zu ermöglichen.

## Siehe auch

- [Zugänglichkeit](/de/docs/Web/Accessibility)
- [Zugänglichkeit erlernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Zugänglichkeit")}}
  - {{Glossary("Accessible_description", "Accessible description")}}
  - {{Glossary("Accessible_name", "Accessible name")}}
  - {{Glossary("ARIA", "ARIA")}}
