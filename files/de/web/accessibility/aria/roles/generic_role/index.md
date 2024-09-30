---
title: "ARIA: generic-Rolle"
slug: Web/Accessibility/ARIA/Roles/generic_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `generic`-Rolle erstellt ein namensloses Containerelement, das keine eigene semantische Bedeutung hat.

> [!NOTE]
> Die `generic`-Rolle ist die implizite Rolle von generischen Elementen, die von Benutzeragenten verwendet werden. Sie ist hier zur Vollständigkeit der Dokumentation enthalten. Sie sollte nicht von Webentwicklern verwendet werden.

## Beschreibung

Während ARIA hauptsächlich zur Darstellung semantischer Inhalte verwendet wird, gibt es einige Elemente, die keinen semantischen Namen für Hilfstechnologien offenlegen sollten. Die `generic`-Rolle zeigt an, dass die Rolle eines Elements der der nicht-semantischen {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente entspricht.

Die `generic`-Rolle ist dafür gedacht, als implizite Rolle von generischen Elementen in Wirtssprachen ausschließlich von Benutzeragenten verwendet zu werden; nicht von Entwicklern. Um implizite Zugänglichkeitssemantiken zu entfernen, verwenden Sie stattdessen [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) oder `none`, die {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente, die keine semantische Bedeutung haben, oder semantische Containerrollen wie [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role), um Nachkommen semantisch in einem benannten Container zu gruppieren.

Wie ein Element mit der Rolle `presentation` kann ein Element mit `role="generic"` eine begrenzte Anzahl von zugänglichen Zuständen und Eigenschaften für seine Nachkommen bereitstellen, wie z.B. `aria-live`-Attribute. Im Gegensatz zu Elementen mit der Rolle `presentation` werden `generic`-Elemente jedoch in Zugänglichkeitsschnittstellen angezeigt, damit Hilfstechnologien bestimmte Eigenschaften wie Layout und Grenzen erfassen können.

Da die `generic`-Rolle namenlos ist, sind die Attribute [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verboten. Da die Rolle generisch ist, sind auch die Attribute [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) verboten.

> [!NOTE]
> Ein Element mit `role="generic"` sollte keinen zugänglichen Namen oder Rollenbeschreibung haben.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft festgelegt sind, werden `generic` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

Diese Rolle ist für die Verwendung durch Benutzeragenten und nicht durch Entwickler gedacht. Daher existiert kein geeigneter Anwendungsfall.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role)-Rollen, wie
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)-Rolle
