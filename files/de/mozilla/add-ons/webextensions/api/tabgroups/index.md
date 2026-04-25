---
title: tabGroups
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Diese API ermöglicht Erweiterungen, [Tab-Gruppen](https://support.mozilla.org/en-US/kb/tab-groups) zu ändern und neu anzuordnen.

Tab-Gruppen können bei einem Neustart des Browsers als Teil der Sitzungswiederherstellung erhalten bleiben. Tab-Gruppen in privaten Browserfenstern bleiben bei Neustarts nicht erhalten. Wenn eine Tab-Gruppe wiederhergestellt wird, kann sich ihre `groupId` von ihrem ursprünglichen Wert unterscheiden.

Die `tabGroups` API bietet nicht die Möglichkeit, Tab-Gruppen zu erstellen, zu ändern oder zu entfernen. Verwenden Sie:

- {{WebExtAPIRef("tabs.group")}} und {{WebExtAPIRef("tabs.ungroup")}} zum Erstellen oder Entfernen von Gruppen.
- {{WebExtAPIRef("tabs.move")}} um Tabs innerhalb einer Gruppe, in eine Gruppe oder aus einer Gruppe zu verschieben.
- {{WebExtAPIRef("tabs.remove")}} um Tabs in einer Gruppe zu schließen und die Gruppe zu schließen, wenn der Tab der letzte in der Gruppe war.
- {{WebExtAPIRef("tabs.query")}} um die Position einer Tab-Gruppe innerhalb eines Fensters abzufragen.

Diese APIs im `tabs`-Namensraum erfordern keine Berechtigungen.

## Berechtigungen

Um diese API zu verwenden, muss eine Erweiterung die Berechtigung `"tabGroups"` im [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern. Die `"tabGroups"` Berechtigung wird Benutzern in Berechtigungsaufforderungen nicht angezeigt.

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
  - : Gibt Details über eine Tab-Gruppe zurück.
- {{WebExtAPIRef("tabGroups.move()")}}
  - : Verschiebt eine Tab-Gruppe innerhalb eines Fensters oder zu einem anderen Fenster.
- {{WebExtAPIRef("tabGroups.query()")}}
  - : Gibt alle Tab-Gruppen zurück oder findet Tab-Gruppen mit bestimmten Eigenschaften.
- {{WebExtAPIRef("tabGroups.update()")}}
  - : Ändert den Zustand einer Tab-Gruppe.

## Ereignisse

- {{WebExtAPIRef("tabGroups.onCreated")}}
  - : Wird ausgelöst, wenn eine Tab-Gruppe erstellt wird.
- {{WebExtAPIRef("tabGroups.onMoved")}}
  - : Wird ausgelöst, wenn eine Tab-Gruppe innerhalb eines Fensters oder zu einem anderen Fenster verschoben wird.
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
