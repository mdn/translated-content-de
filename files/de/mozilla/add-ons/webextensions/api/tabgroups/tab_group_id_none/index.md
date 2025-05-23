---
title: tabGroups.TAB_GROUP_ID_NONE
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TAB_GROUP_ID_NONE
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Der Tab-Gruppen-ID-Wert, der zurückgegeben wird, wenn ein Tab nicht in einer Tab-Gruppe ist.

Sein Wert ist `-1`.

Dieser Wert kann als `groupId` in diesen API-Funktionen erscheinen:

- {{WebExtAPIRef("tabs.group()")}}
- {{WebExtAPIRef("tabs.ungroup()")}}
- {{WebExtAPIRef("tabs.query()")}}
- {{WebExtAPIRef("tabs.Tab")}}

Die Konstante `tabGroups.TAB_GROUP_ID_NONE` ist Teil des `tabGroups` Namensraums, der nur verfügbar ist, wenn die [`tabGroups`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabGroups#permissions) erteilt wurde. Wenn Ihre Erweiterung die `tabGroups`-Berechtigung nicht benötigt, verwenden Sie `-1` anstelle von `tabGroups.TAB_GROUP_ID_NONE`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
