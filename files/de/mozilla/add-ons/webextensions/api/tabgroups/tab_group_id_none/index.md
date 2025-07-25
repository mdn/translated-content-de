---
title: tabGroups.TAB_GROUP_ID_NONE
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TAB_GROUP_ID_NONE
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Tab-Gruppen-ID-Wert, der zurückgegeben wird, wenn ein Tab nicht in einer Tab-Gruppe ist.

Sein Wert ist `-1`.

Dieser Wert kann als `groupId` in diesen API-Funktionen erscheinen:

- {{WebExtAPIRef("tabs.group()")}}
- {{WebExtAPIRef("tabs.ungroup()")}}
- {{WebExtAPIRef("tabs.query()")}}
- {{WebExtAPIRef("tabs.Tab")}}

Die Konstante `tabGroups.TAB_GROUP_ID_NONE` ist Teil des `tabGroups`-Namespaces, der nur verfügbar ist, wenn die [`tabGroups`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabGroups#permissions) erteilt wurde. Wenn Ihre Erweiterung die `tabGroups`-Berechtigung nicht benötigt, verwenden Sie `-1` anstelle von `tabGroups.TAB_GROUP_ID_NONE`.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
