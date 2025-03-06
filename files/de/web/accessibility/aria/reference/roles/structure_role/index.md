---
title: "ARIA: `structure` Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/structure_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `structure`-Rolle ist für strukturelle Dokumentelemente.

> [!NOTE]
> Die `structure`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie wird hier der Vollständigkeit der Dokumentation halber aufgeführt. Sie sollte nicht von Web-Autoren verwendet werden.

## Beschreibung

`Structure` ist eine Superklasse [abstrakter Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) für Dokumentstrukturen, wie zum Beispiel [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`rowgroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role) und [`sectionhead`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role), die die Barrierefreiheit dynamischer Webinhalte unterstützen, indem sie assistiven Technologien helfen, aktiven Inhalt von statischem Dokumentinhalt zu unterscheiden. Einige Unterklassenrollen, wie die [`section` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role), sind wiederum Superklassen anderer Rollen.

Die `structure`-Rolle ist die Superklasse für alle Dokumentstrukturrollen, die verwendet werden, um eine strukturelle Beschreibung für einen Abschnitt von Inhalten bereitzustellen. Die meisten Strukturrollen sollten nicht mehr verwendet werden, da Browser jetzt semantische HTML-Elemente mit derselben Bedeutung unterstützen. Die Strukturrollen ohne HTML-Äquivalente, wie die [`presentation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role), die bedeutet, dass der Inhalt nur darstellend ist, bieten Informationen zur Dokumentstruktur für assistive Technologien wie Bildschirmleser, da gleichwertige native HTML-Tags nicht verfügbar sind.

## Beste Praktiken

Verwenden Sie nicht `role="structure"`. Verwenden Sie HTML und Unterklassenstrukturrollen.

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [ARIA: `roletype` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/roletype_role)
- [ARIA: `generic` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [ARIA: `presentation` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [ARIA: `range` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [ARIA: `section` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role)
- [ARIA: `sectionhead` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/sectionhead_role)
