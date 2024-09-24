---
title: "ARIA: Strukturrolle"
slug: Web/Accessibility/ARIA/Roles/structure_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `structure`-Rolle ist für dokumentarische Strukturelemente.

> [!NOTE]
> Die `structure`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation enthalten. Sie sollte von Webautoren nicht verwendet werden.

## Beschreibung

`Structure` ist eine Superklasse der [abstrakten Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) für Dokumentstrukturen wie [`document`](/de/docs/Web/Accessibility/ARIA/Roles/document_role), [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role) und [`sectionhead`](/de/docs/Web/Accessibility/ARIA/Roles/sectionhead_role), die die Zugänglichkeit dynamischer Webinhalte unterstützen, indem sie assistiven Technologien helfen, aktiven Inhalt von statischem Dokumentinhalt zu unterscheiden. Einige Unterklassenrollen, wie die [`section`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role), sind ihrerseits Superklassen anderer Rollen.

Die `structure`-Rolle ist die Superklasse für alle Dokumentstrukturrollen, die verwendet werden, um eine strukturelle Beschreibung eines Inhaltsabschnitts bereitzustellen. Die meisten Strukturrollen sollten nicht mehr verwendet werden, da Browser jetzt semantische HTML-Elemente mit derselben Bedeutung unterstützen. Die Strukturrollen ohne HTML-Äquivalente, wie die [`presentation`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role), die bedeutet, dass der Inhalt nur präsentativ ist, liefern Informationen zur Dokumentstruktur an assistive Technologien wie Bildschirmleser, da äquivalente native HTML-Tags nicht verfügbar sind.

## Beste Praktiken

Verwenden Sie nicht `role="structure"`. Verwenden Sie HTML und Unterklassen-Strukturrollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `roletype`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/roletype_role)
- [ARIA: `generic`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [ARIA: `presentation`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [ARIA: `range`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/range_role)
- [ARIA: `section`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/section_role)
- [ARIA: `sectionhead`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/sectionhead_role)

<!-- diese sollten nicht verwendet werden, daher sollten wir nicht auf sie verlinken
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [ARIA: `document`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/document_role)
- [ARIA: `rowgroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [ARIA: `separator`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
-->
