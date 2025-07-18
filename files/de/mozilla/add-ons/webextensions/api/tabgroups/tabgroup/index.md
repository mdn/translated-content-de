---
title: tabGroups.TabGroup
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TabGroup
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Zustand einer Tab-Gruppe.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `collapsed`
  - : `boolean`. Gibt an, ob die Tab-Gruppe im Tab-Streifen eingeklappt oder ausgeklappt ist.
- `color`
  - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der vom Benutzer gewählten Farbe für das Etikett und die Symbole der Tab-Gruppe.
- `id`
  - : `integer`. Die eindeutige ID der Tab-Gruppe. Kann nicht {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}} sein. Die ID einer geschlossenen Tab-Gruppe kann wiederverwendet werden, wenn eine Tab-Gruppe wiederhergestellt wird, aber dies wird von der API nicht garantiert. Um Tab-Gruppen über Browser-Neustarts hinweg zu identifizieren, sollten Sie andere Eigenschaften und die Tabs innerhalb der Tab-Gruppen betrachten.
- `title`
  - : `string`. Der vom Benutzer definierte Name der Tab-Gruppe.
- `windowId`
  - : `integer`. Die eindeutige ID des Fensters, in dem sich die Tab-Gruppe befindet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
