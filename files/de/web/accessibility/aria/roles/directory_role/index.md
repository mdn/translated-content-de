---
title: "ARIA: directory Rolle"
slug: Web/Accessibility/ARIA/Roles/directory_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `directory` Rolle war für eine Liste von Referenzen zu Mitgliedern einer Gruppe gedacht, wie z. B. ein statisches Inhaltsverzeichnis.

> [!WARNING]
> Die `directory` Rolle wurde in ARIA 1.2 als veraltet markiert

## Beschreibung

Ein Verzeichnis ist ein statisches Inhaltsverzeichnis, ob verlinkt oder nicht verlinkt. Dazu gehören Inhaltsverzeichnisse, die mit Listen erstellt wurden, einschließlich verschachtelter Listen. Dynamische Inhaltsverzeichnisse hingegen könnten stattdessen eine Baumrolle verwenden.

Die veraltete `directory` Rolle wurde für Listen von Referenzen zu Mitgliedern einer Gruppe verwendet, wie z. B. ein statisches Inhaltsverzeichnis. Verwenden Sie stattdessen die [`list`](/de/docs/Web/Accessibility/ARIA/Roles/list_role) Rolle. Oder besser noch, nutzen Sie die {{HTMLElement('ul')}} oder {{HTMLElement('ol')}} Elemente, da die Verwendung von `directory` keine zusätzlichen Vorteile für Benutzer von unterstützenden Technologien bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- Das {{HTMLElement('ul')}} Element
- Das {{HTMLElement('ol')}} Element
