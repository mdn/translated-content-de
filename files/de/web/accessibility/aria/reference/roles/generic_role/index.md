---
title: "ARIA: generic role"
short-title: generic
slug: Web/Accessibility/ARIA/Reference/Roles/generic_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `generic` Rolle erstellt ein namenloses Container-Element, das keine eigene semantische Bedeutung hat.

> [!NOTE]
> Die `generic` Rolle ist die implizite Rolle von generischen Elementen, die von Benutzeragenten verwendet werden. Sie ist hier zur Vollständigkeit der Dokumentation enthalten. Sie sollte nicht von Webentwicklern verwendet werden.

## Beschreibung

Während ARIA hauptsächlich verwendet wird, um Semantik auszudrücken, gibt es einige Elemente, die keinen semantischen Namen für unterstützende Technologien offenlegen sollten. Die `generic` Rolle zeigt an, dass die Rolle eines Elements der nicht-semantischen Bedeutung von {{HTMLElement('div')}} und {{HTMLElement('span')}} Elementen entspricht.

Die `generic` Rolle ist als implizite Rolle für generische Elemente in Hostsprachen gedacht, die ausschließlich von Benutzeragenten verwendet werden; nicht für die Nutzung durch Entwickler. Stattdessen sollte zur Entfernung impliziter Zugänglichkeitssemantiken [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) oder `none` verwendet werden, sowie die {{HTMLElement('div')}} und {{HTMLElement('span')}} Elemente, die keine semantische Bedeutung haben, oder semantische Container-Rollen wie [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), um Nachfolger semantisch in einem benannten Container zu gruppieren.

Ähnlich wie ein Element mit der Rolle `presentation` kann ein Element mit `role="generic"` eine begrenzte Anzahl zugänglicher Zustände und Eigenschaften für seine Nachfolger bieten, wie z. B. [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribute. Im Gegensatz zu Elementen mit der Rolle `presentation` werden `generic` Elemente jedoch in Zugänglichkeits-APIs exponiert, sodass unterstützende Technologien bestimmte Eigenschaften wie Layout und Begrenzungen erfassen können.

Da die generische Rolle namenlos ist, sind die Attribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verboten. Da die Rolle generisch ist, sind auch die Attribute [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) verboten.

> [!NOTE]
> Das Element mit `role="generic"` sollte keinen zugänglichen Namen oder Rollenbeschreibung haben.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft gesetzt ist, werden `generic` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

Diese Rolle ist für die Verwendung durch Benutzeragenten und nicht durch Entwickler gedacht. Daher existiert kein geeignetes Beispiel.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('div')}} und {{HTMLElement('span')}} Elemente
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) Rollen wie
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
