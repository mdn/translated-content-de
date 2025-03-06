---
title: "ARIA: directory-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/directory_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `directory`-Rolle war für eine Liste von Referenzen zu Mitgliedern einer Gruppe gedacht, wie zum Beispiel ein statisches Inhaltsverzeichnis.

> [!WARNING]
> Die `directory`-Rolle wurde in ARIA 1.2 als veraltet erklärt.

## Beschreibung

Ein Verzeichnis ist ein statisches Inhaltsverzeichnis, ob verlinkt oder unverlinkt. Dazu gehören Inhaltsverzeichnisse, die mit Listen, einschließlich verschachtelter Listen, erstellt wurden. Dynamische Inhaltsverzeichnisse könnten jedoch stattdessen eine `tree`-Rolle verwenden.

Die veraltete `directory`-Rolle wurde für Listen von Referenzen zu Mitgliedern einer Gruppe, wie ein statisches Inhaltsverzeichnis, verwendet. Verwenden Sie stattdessen die [`list`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) Rolle. Oder noch besser, nutzen Sie die {{HTMLElement('ul')}} oder {{HTMLElement('ol')}}-Elemente, da die Verwendung von `directory` keinen zusätzlichen Nutzen für Benutzer von unterstützender Technologie bietet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Die [`list`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- Das {{HTMLElement('ul')}}-Element
- Das {{HTMLElement('ol')}}-Element
