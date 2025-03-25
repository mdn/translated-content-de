---
title: "ARIA: sectionhead-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/sectionhead_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die **`sectionhead`-Rolle**, eine abstrakte Rolle, ist eine Superklassenrolle für Beschriftungen oder Zusammenfassungen des Themas ihres zugehörigen Abschnitts.

> [!WARNING]
> Die `sectionhead`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation enthalten. Sie sollte nicht von Webautoren verwendet werden.

## Beschreibung

Die strukturelle `sectionhead`-Rolle ist eine abstrakte Rolle für die Unterklassenrollen, die die Beschriftungen oder Zusammenfassungen der Abschnitte identifizieren, die sie beschriften. Die Rolle darf nicht verwendet werden. Die vier Unterklassen sind — [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Es gibt HTML-Element-Äquivalente, wie z.B. {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}} für `columnheader`, {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}} für rowheader und eines der HTML-Heading-Elemente, {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} für `heading`. Die `tab`-Rolle hat derzeit kein HTML-Äquivalent.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `structure`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role)
- [ARIA: `columnheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA: `heading`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [ARIA: `rowheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA: `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
