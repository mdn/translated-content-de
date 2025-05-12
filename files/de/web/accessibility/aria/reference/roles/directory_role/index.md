---
title: "ARIA: directory-Rolle"
short-title: directory
slug: Web/Accessibility/ARIA/Reference/Roles/directory_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `directory`-Rolle war für eine Liste von Verweisen auf Mitglieder einer Gruppe gedacht, wie zum Beispiel ein statisches Inhaltsverzeichnis.

> [!WARNING]
> Die `directory`-Rolle wurde in ARIA 1.2 als veraltet eingestuft.

## Beschreibung

Ein Verzeichnis ist ein statisches Inhaltsverzeichnis, unabhängig davon, ob es verlinkt ist oder nicht. Dies schließt Inhaltsverzeichnisse ein, die mit Listen erstellt wurden, einschließlich verschachtelter Listen. Dynamische Inhaltsverzeichnisse könnten jedoch stattdessen eine Baum-Rolle verwenden.

Die veraltete `directory`-Rolle wurde für Listen von Verweisen auf Mitglieder einer Gruppe genutzt, wie zum Beispiel ein statisches Inhaltsverzeichnis.
Verwenden Sie stattdessen die [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)-Rolle. Oder noch besser, verwenden Sie die {{HTMLElement('ul')}}- oder {{HTMLElement('ol')}}-Elemente, da die Verwendung von `directory` keine zusätzlichen Vorteile für Nutzer von unterstützenden Technologien bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- Das {{HTMLElement('ul')}}-Element
- Das {{HTMLElement('ol')}}-Element
