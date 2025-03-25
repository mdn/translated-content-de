---
title: "ARIA: Struktur-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/structure_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `structure`-Rolle ist für strukturelle Dokumentelemente vorgesehen.

> [!WARNING]
> Die `structure`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation enthalten und sollte nicht von Webautoren verwendet werden. Verwenden Sie stattdessen HTML und Unterklassen-Strukturrollen.

## Beschreibung

`Structure` ist eine Oberklasse für [abstrakte Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) für Dokumentstrukturen, wie [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) und [`sectionhead`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), die die Barrierefreiheit dynamischer Webinhalte unterstützen, indem sie unterstützenden Technologien helfen, aktiven Inhalt von statischem Dokumentinhalt zu unterscheiden. Einige Unterklassenrollen, wie die [`section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), sind wiederum Oberklassen anderer Rollen.

Die `structure`-Rolle ist die Oberklasse für alle Dokumentstrukturrollen, die verwendet werden, um eine strukturelle Beschreibung für einen Inhaltsteil bereitzustellen. Die meisten Strukturrollen sollten nicht mehr verwendet werden, da Browser nun semantische HTML-Elemente mit gleicher Bedeutung unterstützen. Die Strukturrollen ohne HTML-Äquivalente, wie die [`presentation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), die bedeutet, dass der Inhalt nur präsentationsbezogen ist, liefern Informationen über die Dokumentstruktur an unterstützende Technologien wie Screenreader, da gleichwertige native HTML-Tags nicht verfügbar sind.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `roletype`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)
- [ARIA: `generic`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [ARIA: `presentation`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [ARIA: `range`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA: `section`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `sectionhead`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role)

<!-- diese sollten nicht verwendet werden, daher sollten wir nicht auf sie verlinken
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [ARIA: `document`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [ARIA: `rowgroup`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [ARIA: `separator`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
-->
