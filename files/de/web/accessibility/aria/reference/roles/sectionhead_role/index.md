---
title: "ARIA: `sectionhead` Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/sectionhead_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die **`sectionhead` Rolle**, eine abstrakte Rolle, dient als Superklasse für Rollen, die Bezeichner oder Zusammenfassungen des Themas ihres zugehörigen Abschnitts darstellen.

> [!NOTE]
> Die `sectionhead` Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie wird hier zur Vollständigkeit der Dokumentation aufgenommen. Sie sollte nicht von Web-Autoren verwendet werden.

## Beschreibung

Die strukturelle `sectionhead` Rolle ist eine abstrakte Rolle für die Unterklassenrollen, die die Bezeichner oder Zusammenfassungen der Abschnitte kennzeichnen, die sie kennzeichnen. Die Rolle darf nicht verwendet werden. Die vier Unterklassen sind — [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role), [`heading`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role), [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role) und [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Es gibt HTML-Element-Äquivalente wie z.B. {{HTMLElement('th', '<code>&lt;th scope="col"&gt;</code>')}} für `columnheader`, {{HTMLElement('th', '<code>&lt;th scope="row"&gt;</code>')}} für `rowheader` und eines der HTML-Überschriftselemente von {{HTMLElement("Heading_Elements", "h1")}} bis {{HTMLElement("Heading_Elements", "h6")}} für `heading`. Die `tab` Rolle hat derzeit kein HTML-Äquivalent.

## Beste Vorgehensweisen

Nicht verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `structure` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role)
- [ARIA: `columnheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [ARIA: `heading` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [ARIA: `rowheader` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [ARIA: `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
