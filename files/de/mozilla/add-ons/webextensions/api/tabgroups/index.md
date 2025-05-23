---
title: tabGroups
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu modifizieren und neu anzuordnen.

Tab-Gruppen können als Teil der Sitzungswiederherstellung über Browser-Neustarts hinaus bestehen bleiben. Tab-Gruppen in privaten Browserfenstern bleiben über Neustarts hinweg nicht bestehen. Wenn eine Tab-Gruppe wiederhergestellt wird, kann sich ihre `groupId` von ihrem ursprünglichen Wert unterscheiden.

Die `tabGroups`-API bietet nicht die Möglichkeit, Tab-Gruppen zu erstellen oder zu entfernen. Verwenden Sie stattdessen die Methoden {{WebExtAPIRef("tabs.group()")}} und {{WebExtAPIRef("tabs.ungroup()")}}. Um die Position einer Tab-Gruppe innerhalb eines Fensters abzufragen, verwenden Sie {{WebExtAPIRef("tabs.query()")}}. Diese APIs im `tabs`-Namensraum erfordern keine Berechtigungen.

## Berechtigungen

Um diese API zu verwenden, muss eine Erweiterung die `"tabGroups"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern. Die `"tabGroups"`-Berechtigung wird Benutzern in Berechtigungsanfragen nicht angezeigt.

## Typen

- {{WebExtAPIRef("tabGroups.Color")}}
  - : Die Farbe einer Tab-Gruppe.
- {{WebExtAPIRef("tabGroups.TabGroup")}}
  - : Der Zustand einer Tab-Gruppe.

## Eigenschaften

- {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}
  - : Der Tab-Gruppen-ID-Wert, der zurückgegeben wird, wenn ein Tab nicht in einer Tab-Gruppe ist.

## Funktionen

- {{WebExtAPIRef("tabGroups.get()")}}
  - : Gibt Details zu einer Tab-Gruppe zurück.
- {{WebExtAPIRef("tabGroups.move()")}}
  - : Verschiebt eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster.
- {{WebExtAPIRef("tabGroups.query()")}}
  - : Gibt alle Tab-Gruppen zurück oder findet Tab-Gruppen mit bestimmten Eigenschaften.
- {{WebExtAPIRef("tabGroups.update()")}}
  - : Ändert den Zustand einer Tab-Gruppe.

## Ereignisse

- {{WebExtAPIRef("tabGroups.onCreated")}}
  - : Wird ausgelöst, wenn eine Tab-Gruppe erstellt wird.
- {{WebExtAPIRef("tabGroups.onMoved")}}
  - : Wird ausgelöst, wenn eine Tab-Gruppe innerhalb eines Fensters oder in ein anderes Fenster verschoben wird.
- {{WebExtAPIRef("tabGroups.onRemoved")}}
  - : Wird ausgelöst, wenn eine Tab-Gruppe entfernt wird.
- {{WebExtAPIRef("tabGroups.onUpdated")}}
  - : Wird ausgelöst, wenn eine Tab-Gruppe aktualisiert wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("tabs.group()")}}
- {{WebExtAPIRef("tabs.ungroup()")}}
- {{WebExtAPIRef("tabs.query()")}}
- {{WebExtAPIRef("tabs.Tab")}}
