---
title: Barrierefreiheitsbaum
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der **Barrierefreiheitsbaum** enthält Informationen zur {{Glossary("accessibility")}} der meisten HTML-Elemente.

Browser wandeln Markup in eine interne Darstellung um, die als _[DOM tree](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ bezeichnet wird. Der DOM-Baum enthält Objekte, die alle Elemente, Attribute und Textknoten des Markups repräsentieren. Anschließend erstellen Browser basierend auf dem DOM-Baum einen Barrierefreiheitsbaum, der von plattformspezifischen Barrierefreiheits-APIs verwendet wird, um eine Darstellung bereitzustellen, die von unterstützenden Technologien, wie Bildschirmlesegeräten, verstanden werden kann.

Ein Objekt im Barrierefreiheitsbaum hat vier Eigenschaften:

- **name (Name)**
  - : Wie können wir auf dieses Objekt verweisen? Beispielsweise hat ein Link mit dem Text "Read more" den Namen "Read more" (finden Sie mehr dazu, wie Namen berechnet werden, in der [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **description (Beschreibung)**
  - : Wie beschreiben wir dieses Objekt, wenn wir mehr als nur den Namen zur Verfügung stellen wollen? Die Beschreibung einer Tabelle könnte erläutern, welche Art von Informationen die Tabelle enthält.
- [**role (Rolle)**](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Um welche Art von Objekt handelt es sich? Zum Beispiel, ob es sich um einen Button, eine Navigationsleiste oder eine Liste von Elementen handelt.
- [**state (Status)**](/de/docs/Web/Accessibility/ARIA/Attributes)
  - : Hat es einen Status? Beispiele sind die Zustände "geprüft" oder "ungeprüft" für Kontrollkästchen und die Zustände "eingeklappt" oder "ausgeklappt" für das [`<summary>`](/de/docs/Web/HTML/Element/summary)-Element.

Zusätzlich enthält der Barrierefreiheitsbaum häufig Informationen darüber, was mit einem Element gemacht werden kann: Ein Link kann _verfolgt_ werden, in ein Texteingabefeld kann _getippt_ werden, etc.

Das **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** befindet sich im April 2022 noch in der Entwurfsphase innerhalb der Web Incubator Community Group und beabsichtigt, APIs zu inkubieren, die es erleichtern, Barrierefreiheitssemantik auszudrücken und möglicherweise Lesezugriff auf den berechneten Barrierefreiheitsbaum zu ermöglichen.

## Siehe auch

- [Barrierefreiheit](/de/docs/Web/Accessibility)
- [Barrierefreiheit lernen](/de/docs/Learn/Accessibility)
- [Web-Accessibility](https://en.wikipedia.org/wiki/Web_accessibility) auf Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/de/docs/Web/Accessibility/ARIA)
- [Die W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility")}}
  - {{Glossary("Accessible description")}}
  - {{Glossary("Accessible name")}}
  - {{Glossary("ARIA")}}
