---
title: "ARIA: directory Rolle"
slug: Web/Accessibility/ARIA/Roles/directory_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `directory`-Rolle war für eine Liste von Referenzen auf Mitglieder einer Gruppe gedacht, wie ein statisches Inhaltsverzeichnis.

> [!WARNING]
> Die `directory`-Rolle wurde in ARIA 1.2 als veraltet markiert.

## Beschreibung

Ein Verzeichnis ist ein statisches Inhaltsverzeichnis, unabhängig davon, ob es verlinkt ist oder nicht. Dies schließt Inhaltsverzeichnisse ein, die mit Listen erstellt wurden, einschließlich verschachtelter Listen. Dynamische Inhaltsverzeichnisse könnten jedoch stattdessen eine tree-Rolle verwenden.

Die veraltete `directory`-Rolle wurde für Listen von Referenzen auf Mitglieder einer Gruppe verwendet, wie ein statisches Inhaltsverzeichnis. Verwenden Sie stattdessen die [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role)-Rolle. Oder, noch besser, verwenden Sie die {{HTMLElement('ul')}}- oder {{HTMLElement('ol')}}-Elemente, da die Verwendung von `directory` keine zusätzlichen Vorteile für Benutzer unterstützender Technologien bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`list`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- Das {{HTMLElement('ul')}}-Element
- Das {{HTMLElement('ol')}}-Element
