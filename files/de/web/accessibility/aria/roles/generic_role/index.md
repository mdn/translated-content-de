---
title: "ARIA: generische Rolle"
slug: Web/Accessibility/ARIA/Roles/generic_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `generic`-Rolle erstellt ein namenloses Containerelement, das in sich selbst keine semantische Bedeutung hat.

> [!NOTE]
> Die `generic`-Rolle ist die implizite Rolle generischer Elemente, die von Benutzeragenten verwendet werden. Sie ist hier für die Vollständigkeit der Dokumentation enthalten. Sie sollte nicht von Webautoren verwendet werden.

## Beschreibung

Während ARIA hauptsächlich zur Darstellung von Semantiken verwendet wird, gibt es einige Elemente, die keinen semantischen Namen an unterstützende Technologien weitergeben sollten. Die `generic`-Rolle zeigt an, dass die Rolle eines Elements gleichwertig mit der der nicht-semantischen {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente ist.

Die `generic`-Rolle ist für die Verwendung als implizite Rolle generischer Elemente in Wirtssprachen gedacht, die nur von Benutzeragenten verwendet werden sollen; nicht für Entwickler. Um implizite Zugänglichkeitssemantiken zu entfernen, verwenden Sie stattdessen [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) oder `none`, die {{HTMLElement('div')}}- und {{HTMLElement('span')}}-Elemente, die keine semantische Bedeutung haben, oder semantische Containerrollen wie [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role), um Nachfahren in einem benannten Container semantisch zu gruppieren.

Wie ein Element mit der Rolle `presentation` kann ein Element mit `role="generic"` eine begrenzte Anzahl zugänglicher Zustände und Eigenschaften für seine Nachfahren bereitstellen, wie zum Beispiel [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attribute. Im Unterschied zu Elementen mit der Rolle `presentation` werden `generic`-Elemente jedoch in Zugänglichkeits-APIs exponiert, damit unterstützende Technologien bestimmte Eigenschaften wie Layout und Grenzen erfassen können.

Da die generische Rolle namenlos ist, sind die [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)- und [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Attribute verboten. Da die Rolle generisch ist, sind die [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)- und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)-Attribute ebenfalls verboten.

> [!NOTE]
> Das Element mit `role="generic"` sollte keinen zugänglichen Namen oder Rollenbeschreibung haben.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft gesetzt sind, werden `generic` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

Diese Rolle ist für die Verwendung durch Benutzeragenten und nicht für Entwickler gedacht. Daher existiert kein geeignetes Beispiel.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Elemente {{HTMLElement('div')}} und {{HTMLElement('span')}}
- Rollen wie [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
