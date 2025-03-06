---
title: Barrierefreiheitsbaum
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{GlossarySidebar}}

Der **Barrierefreiheitsbaum** enthält Informationen zu {{Glossary("accessibility", "Barrierefreiheit")}} für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die als _[DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ bezeichnet wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups darstellen. Anschließend erstellen Browser basierend auf dem DOM-Baum einen Barrierefreiheitsbaum, der von plattformspezifischen Barrierefreiheits-APIs verwendet wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien, wie z.B. Bildschirmlesegeräten, verstanden werden kann.

Ein Objekt im Barrierefreiheitsbaum enthält vier Eigenschaften:

- **name (Name)**
  - : Wie können wir dieses Ding benennen? Zum Beispiel hat ein Link mit dem Text "Read more" den Namen "Read more" (weitere Informationen zur Berechnung von Namen finden Sie in der [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **description (Beschreibung)**
  - : Wie beschreiben wir dieses Ding, wenn wir mehr als den Namen beschreiben möchten? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role (Rolle)**](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Was für eine Art von Ding ist es? Ist es zum Beispiel ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state (Zustand)**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Hat es einen Zustand? Beispiele hierfür sind die aktivierten oder nicht aktivierten Zustände von Kontrollkästchen und die erweiterten oder reduzierten Zustände des [`<summary>`](/de/docs/Web/HTML/Element/summary)-Elements.

Zusätzlich enthält der Barrierefreiheitsbaum oft Informationen darüber, was mit einem Element gemacht werden kann: ein Link kann _gefolgt_, ein Texteingabefeld kann _beschrieben_ werden, usw.

Obwohl sie sich im April 2022 noch im Entwurfsstadium innerhalb der Web Incubator Community Group befindet, beabsichtigt das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)**, APIs zu entwickeln, die es erleichtern, Barrierefreiheitssemantiken auszudrücken und möglicherweise Zugriff auf den berechneten Barrierefreiheitsbaum zu ermöglichen.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Web-Barrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C-Web-Barrierefreiheitsinitiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessible_description", "Zugängliche Beschreibung")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
