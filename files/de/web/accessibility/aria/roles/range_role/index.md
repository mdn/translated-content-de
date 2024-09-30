---
title: "ARIA: range Rolle"
slug: Web/Accessibility/ARIA/Roles/range_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `range` abstrakte Rolle ist eine generische Art von Strukturrolle, die einen Bereich von Werten darstellt.

> [!NOTE]
> Die `range` Rolle ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles). Sie ist hier zur Vollständigkeit der Dokumentation enthalten und soll nicht von Web-Autoren verwendet werden.

## Beschreibung

Die `range` Rolle ist eine abstrakte Rolle. Sie darf nicht von Web-Autoren verwendet werden. Sie ist die Superklasse für strukturelle Rollen für Elemente, die einen Wert innerhalb eines Wertebereichs akzeptieren, einschließlich der [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) Rolle, der [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role) und der [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role). Für diese drei sollten Sie das {{HTMLElement("meter")}} Element, das {{HTMLElement("progress")}} Element und das {{HTMLElement("input/range")}} verwenden.

## Beste Praktiken

Nicht verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `structure` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/structure_role)
- [ARIA: `meter` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [ARIA: `progressbar` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [ARIA: `scrollbar` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [ARIA: `slider` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [ARIA: `spinbutton` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- {{HTMLElement("input/range")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("progress")}}
