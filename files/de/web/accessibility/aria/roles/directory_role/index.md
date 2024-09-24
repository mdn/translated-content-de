---
title: "ARIA: Verzeichnisrolle"
slug: Web/Accessibility/ARIA/Roles/directory_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `directory`-Rolle war für eine Liste von Referenzen zu Mitgliedern einer Gruppe, wie z.B. einem statischen Inhaltsverzeichnis, vorgesehen.

> [!WARNING]
> Die `directory`-Rolle wurde in ARIA 1.2 als veraltet markiert.

## Beschreibung

Ein Verzeichnis ist ein statisches Inhaltsverzeichnis, ob verlinkt oder nicht. Dazu gehören Inhaltsverzeichnisse, die mit Listen erstellt wurden, einschließlich geschachtelter Listen. Dynamische Inhaltsverzeichnisse hingegen könnten stattdessen eine Baumrolle verwenden.

Die veraltete `directory`-Rolle wurde für Listen von Referenzen zu Mitgliedern einer Gruppe, wie z.B. einem statischen Inhaltsverzeichnis, verwendet. Verwenden Sie stattdessen die [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role)-Rolle. Noch besser ist es, die {{HTMLElement('ul')}}- oder {{HTMLElement('ol')}}-Elemente zu verwenden, da die Verwendung von `directory` keine zusätzlichen Vorteile für Benutzer von unterstützenden Technologien bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- Das {{HTMLElement('ul')}}-Element
- Das {{HTMLElement('ol')}}-Element
