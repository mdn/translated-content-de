---
title: "ARIA: generic role"
slug: Web/Accessibility/ARIA/Reference/Roles/generic_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle `generic` erstellt ein namenloses Containerelement, das für sich genommen keine semantische Bedeutung hat.

> [!NOTE]
> Die Rolle `generic` ist die implizite Rolle von generischen Elementen, die von Benutzeragenten verwendet werden. Sie wird hier der Vollständigkeit halber in der Dokumentation aufgeführt. Sie sollte nicht von Webentwickler\*innen verwendet werden.

## Beschreibung

Obwohl ARIA hauptsächlich verwendet wird, um Semantik auszudrücken, gibt es einige Elemente, die keinen semantischen Namen an unterstützende Technologien weitergeben sollten. Die Rolle `generic` zeigt an, dass die Rolle eines Elements der der nicht-semantischen {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente entspricht.

Die Rolle `generic` ist zur Verwendung als implizite Rolle generischer Elemente in Hostsprachen für die Verwendung durch Benutzeragenten gedacht; nicht zur Verwendung durch Entwickler\*innen. Um implizite Zugänglichkeitssemantik zu entfernen, sollten stattdessen [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) oder `none`, sowie die {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente verwendet werden, die keine semantische Bedeutung haben, oder semantische Containerrollen wie [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), um Nachkommen in einem benannten Container semantisch zu gruppieren.

Wie ein Element mit der Rolle `presentation` kann ein Element mit `role="generic"` eine begrenzte Anzahl an zugänglichen Zuständen und Eigenschaften für seine Nachkommen bereitstellen, wie z.B. die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribute. Im Gegensatz zu Elementen mit der Rolle `presentation` werden `generic`-Elemente jedoch in Zugänglichkeits-APIs exponiert, sodass unterstützende Technologien bestimmte Eigenschaften wie Layout und Grenzen erfassen können.

Da die Rolle generic keinen Namen hat, sind die Attribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verboten. Da die Rolle generisch ist, sind auch die Attribute [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) verboten.

> [!NOTE]
> Das Element mit `role="generic"` sollte keinen zugänglichen Namen oder Rollenbeschreibung haben.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft festgelegt ist, werden `generic` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

Diese Rolle ist zur Verwendung durch Benutzeragenten und nicht durch Entwickler\*innen bestimmt. Daher existiert kein passendes Beispiel.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)-Rollen wie
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Rolle
