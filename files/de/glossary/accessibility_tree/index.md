---
title: Barrierefreiheit-Baum
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

Der **Barrierefreiheit-Baum** enthält {{Glossary("accessibility", "Barrierefreiheit")}}-bezogene Informationen für die meisten HTML-Elemente.

Browser konvertieren Markup in eine interne Darstellung, die als _[DOM-Baum](/de/docs/Web/API/Document_Object_Model)_ bezeichnet wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Basierend auf dem DOM-Baum erstellen Browser dann einen Barrierefreiheit-Baum, der von plattformspezifischen Barrierefreiheits-APIs verwendet wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien wie Bildschirmlesern verstanden werden kann.

Ein Barrierefreiheit-Baum-Objekt hat vier Eigenschaften:

- **name**
  - : Wie können wir auf dieses Ding verweisen? Zum Beispiel hat ein Link mit dem Text „Mehr lesen“ den Namen „Mehr lesen“ (finden Sie mehr dazu, wie Namen im [Accessible Name and Description Computation spec](https://w3c.github.io/accname/) berechnet werden).
- **description**
  - : Wie beschreiben wir dieses Ding, wenn wir über den Namen hinaus mehr Beschreibung bieten wollen? Die Beschreibung einer Tabelle könnte erklären, welche Art von Informationen die Tabelle enthält.
- [**role**](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Um welche Art von Objekt handelt es sich? Beispielsweise, ist es ein Button, eine Navigationsleiste oder eine Liste von Elementen?
- [**state**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : Hat es einen Zustand? Beispiele beinhalten die Zustände „angekreuzt“ oder „nicht angekreuzt“ bei Kontrollkästchen sowie „eingeklappt“ oder „ausgeklappt“ beim [`<summary>`](/de/docs/Web/HTML/Reference/Elements/summary)-Element.

Zusätzlich enthält der Barrierefreiheit-Baum oft Informationen darüber, was mit einem Element gemacht werden kann: Ein Link kann _verfolgt_ werden, in ein Texteingabefeld kann _getippt_ werden, usw.

Noch in der Entwurfsphase im Web Incubator Community Group ab April 2022, beabsichtigt das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** APIs zu entwickeln, die es erleichtern, Barrierefreiheits-Semantik auszudrücken und möglicherweise den Lesezugriff auf den berechneten Barrierefreiheit-Baum erlauben.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn_web_development/Core/Accessibility)
- [Webbarrierefreiheit](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Zugehörige Glossarbegriffe:
  - {{Glossary("Accessibility", "Barrierefreiheit")}}
  - {{Glossary("Accessible_description", "Zugängliche Beschreibung")}}
  - {{Glossary("Accessible_name", "Zugänglicher Name")}}
  - {{Glossary("ARIA", "ARIA")}}
