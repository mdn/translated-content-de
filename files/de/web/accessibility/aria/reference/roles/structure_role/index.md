---
title: "ARIA: structure-Rolle"
short-title: structure
slug: Web/Accessibility/ARIA/Reference/Roles/structure_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `structure`-Rolle ist für dokumentarische Strukturelemente vorgesehen.

> [!WARNING]
> Die `structure`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie wird hier zur Vollständigkeit der Dokumentation aufgenommen. Sie sollte nicht von Web-Autoren verwendet werden. Verwenden Sie HTML und Unterklassenstrukturrollen.

## Beschreibung

`Structure` ist eine Superklasse [abstrakter Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) für Dokumentstrukturen, wie z.B. [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role),
[`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) und [`sectionhead`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), die die Zugänglichkeit von dynamischen Web-Inhalten unterstützen, indem sie assistierenden Technologien helfen, aktiven Inhalt von statischem Dokumenteninhalt zu unterscheiden. Einige Unterklassenrollen, wie z.B. die [`section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), sind wiederum Superklassen anderer Rollen.

Die `structure`-Rolle ist die Superklasse für alle Dokumentstrukturrollen, die verwendet werden, um eine strukturelle Beschreibung für einen Abschnitt des Inhalts bereitzustellen. Die meisten Strukturrollen sollten nicht mehr verwendet werden, da Browser jetzt semantische HTML-Elemente mit derselben Bedeutung unterstützen. Die Strukturrollen ohne HTML-Äquivalente, wie die [`presentation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), die bedeutet, dass der Inhalt nur zur Darstellung dient, liefern informationen zur Dokumentstruktur für unterstützende Technologien wie Bildschirmleser, da äquivalente native HTML-Tags nicht verfügbar sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `roletype`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)
- [ARIA: `generic`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [ARIA: `presentation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [ARIA: `range`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA: `section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `sectionhead`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role)

<!-- diese sollten nicht verwendet werden, also sollten wir nicht darauf verlinken
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [ARIA: `document`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [ARIA: `rowgroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA: `separator`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
-->
