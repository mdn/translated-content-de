---
title: "ARIA: sectionhead Rolle"
slug: Web/Accessibility/ARIA/Roles/sectionhead_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die **`sectionhead`-Rolle**, eine abstrakte Rolle, ist die Oberklasse für Labels oder Zusammenfassungen des Themas des zugehörigen Abschnitts.

> [!NOTE]
> Die `sectionhead`-Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation aufgeführt. Sie sollte nicht von Web-Autoren verwendet werden.

## Beschreibung

Die strukturelle `sectionhead`-Rolle ist eine abstrakte Rolle für die Unterklassenrollen, die die Labels oder Zusammenfassungen der Abschnitte identifizieren, die sie kennzeichnen. Die Rolle darf nicht verwendet werden. Die vier Unterklassen sind [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role), [`heading`](/de/docs/Web/Accessibility/ARIA/Roles/heading_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role). Es gibt HTML-Element-Äquivalente, wie {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}} für `columnheader`, {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}} für `rowheader`, und eines der HTML-Überschriftselemente, {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} für `heading`. Die `tab`-Rolle hat derzeit kein HTML-Äquivalent.

## Best Practices

Nicht verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `structure` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/structure_role)
- [ARIA: `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [ARIA: `heading` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [ARIA: `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [ARIA: `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
