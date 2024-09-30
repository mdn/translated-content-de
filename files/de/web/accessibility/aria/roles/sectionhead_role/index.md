---
title: "ARIA: sectionhead-Rolle"
slug: Web/Accessibility/ARIA/Roles/sectionhead_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die **`sectionhead`-Rolle**, eine abstrakte Rolle, ist eine Superklasse für die Rolle von Etiketten oder Zusammenfassungen des Themas ihres zugehörigen Abschnitts.

> [!NOTE]
> Die `sectionhead`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation aufgenommen. Sie sollte von Web-Autoren nicht verwendet werden.

## Beschreibung

Die strukturelle `sectionhead`-Rolle ist eine abstrakte Rolle für die Unterklassenrollen, die die Etiketten oder Zusammenfassungen der Abschnitte, die sie kennzeichnen, identifizieren. Die Rolle darf nicht verwendet werden. Die vier Unterklassen — [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role). Es gibt HTML-Elementäquivalente, wie zum Beispiel {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}} für `columnheader`, {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}} für `rowheader`, und jede der HTML-Überschriften, {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} für `heading`. Die `tab`-Rolle hat derzeit kein HTML-Äquivalent.

## Beste Praktiken

Nicht verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `structure`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/structure_role)
- [ARIA: `columnheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [ARIA: `heading`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [ARIA: `rowheader`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [ARIA: `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
