---
title: "ARIA: sectionhead-Rolle"
short-title: sectionhead
slug: Web/Accessibility/ARIA/Reference/Roles/sectionhead_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die **`sectionhead`-Rolle**, eine abstrakte Rolle, ist die Superklassenrolle für Bezeichnungen oder Zusammenfassungen des Themas des zugehörigen Abschnitts.

> [!WARNING]
> Die `sectionhead`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie wird hier zur Vollständigkeit der Dokumentation aufgenommen. Sie sollte von Web-Autoren nicht verwendet werden.

## Beschreibung

Die strukturelle `sectionhead`-Rolle ist eine abstrakte Rolle für die Unterklassenrollen, die die Bezeichnungen oder Zusammenfassungen der Abschnitte identifizieren, die sie kennzeichnen. Die Rolle darf nicht verwendet werden. Die vier Unterklassen — [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Es gibt HTML-Element-Äquivalente, wie {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}} für `columnheader`, {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}} für rowheader und eines der HTML-Überschriften, {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} für `heading`. Die `tab`-Rolle hat derzeit kein HTML-Äquivalent.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `structure`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role)
- [ARIA: `columnheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA: `heading`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [ARIA: `rowheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA: `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
