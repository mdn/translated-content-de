---
title: "ARIA: generic Rolle"
slug: Web/Accessibility/ARIA/Roles/generic_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `generic` Rolle erstellt ein namenloses Container-Element, das für sich genommen keine semantische Bedeutung hat.

> [!NOTE]
> Die `generic` Rolle ist die implizite Rolle generischer Elemente, die von Benutzeragenten verwendet wird. Sie wird hier der Vollständigkeit der Dokumentation halber aufgeführt. Sie sollte nicht von Webentwicklern verwendet werden.

## Beschreibung

Während ARIA hauptsächlich dazu verwendet wird, Semantik auszudrücken, gibt es einige Elemente, die keinen semantischen Namen für unterstützende Technologien bereitstellen sollten. Die `generic` Rolle zeigt an, dass die Rolle eines Elements derjenigen der nicht-semantischen {{HTMLElement('div')}} und {{HTMLElement('span')}} Elemente entspricht.

Die `generic` Rolle ist zur Verwendung als implizite Rolle generischer Elemente in Hostsprachen bestimmt und soll nur von Benutzeragenten genutzt werden; nicht von Entwicklern. Um die impliziten Zugänglichkeitssemantiken zu entfernen, sollten stattdessen [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) oder `none`, die {{HTMLElement('div')}} und {{HTMLElement('span')}} Elemente, die keine semantische Bedeutung haben, oder semantische Containerrollen wie [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) verwendet werden, um Nachkommen in einem benannten Container semantisch zu gruppieren.

Wie ein Element mit der Rolle `presentation` kann ein Element mit `role="generic"` eine begrenzte Anzahl an zugänglichen Zuständen und Eigenschaften für seine Nachkommen bereitstellen, wie zum Beispiel [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Attribute. Im Gegensatz zu Elementen mit der Rolle `presentation` werden `generic` Elemente jedoch in Accessibility APIs erfasst, damit unterstützende Technologien bestimmte Eigenschaften wie Layout und Grenzen ermitteln können.

Da die generic-Rolle namenlos ist, sind die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribute verboten. Da die Rolle generisch ist, sind die [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) Attribute ebenfalls verboten.

> [!NOTE]
> Das Element mit `role="generic"` sollte keinen zugänglichen Namen oder Rollenbeschreibungen haben.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft festgelegt sind, werden `generic` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

Diese Rolle ist für die Verwendung durch Benutzeragenten bestimmt und nicht für Entwickler. Daher existiert kein passendes Beispiel.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('div')}} und {{HTMLElement('span')}} Elemente
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) Rollen wie
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
