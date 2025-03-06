---
title: 'ARIA: role="range"'
slug: Web/Accessibility/ARIA/Reference/Roles/range_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die abstrakte Rolle `range` ist eine generische Strukturrolle, die einen Wertebereich darstellt.

> [!NOTE]
> Die Rolle `range` ist eine [abstrakte Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles). Sie wird hier der Vollständigkeit halber dokumentiert. Sie soll nicht von Web-Entwicklern verwendet werden.

## Beschreibung

Die Rolle `range` ist eine abstrakte Rolle. Sie darf nicht von Web-Entwicklern verwendet werden. Sie ist die Superklasse für Strukturrollen von Elementen, die einen Wert innerhalb eines Wertebereichs akzeptieren, einschließlich der Rollen [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) und [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role). Für diese drei sollten Sie das {{HTMLElement("meter")}}-Element, das {{HTMLElement("progress")}}-Element und das {{HTMLElement("input/range")}}, jeweils in Betracht ziehen.

## Beste Praktiken

Nicht verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `structure` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structure_role)
- [ARIA: `meter` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [ARIA: `progressbar` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [ARIA: `scrollbar` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [ARIA: `slider` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [ARIA: `spinbutton` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- {{HTMLElement("input/range")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("progress")}}
