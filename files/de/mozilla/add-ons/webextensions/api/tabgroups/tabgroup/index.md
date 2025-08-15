---
title: tabGroups.TabGroup
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TabGroup
l10n:
  sourceCommit: 0ddea08f7bbefccc38ae86977a2d138420cc8a67
---

Der Status einer Tab-Gruppe.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `collapsed`
  - : `boolean`. Ob die Tab-Gruppe im Tab-Streifen eingeklappt oder erweitert ist.
    - In Firefox kann eine eingeklappte Gruppe den aktiven Tab enthalten. Die inaktiven Tabs sind eingeklappt.
    - In Chrome sind Gruppen vollständig eingeklappt. Wenn die Gruppe den aktiven Tab enthält, wenn sie eingeklappt wird, wird der aktive Tab zum ersten Tab rechts von der Gruppe verschoben. Wenn es keinen Tab rechts von der Gruppe gibt, wird er direkt auf den Tab links von der Gruppe verschoben.
- `color`
  - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der vom Benutzer ausgewählten Farbe für das Label und die Symbole der Tab-Gruppe.
- `id`
  - : `integer`. Die eindeutige ID der Tab-Gruppe. Kann nicht {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}} sein. Die ID einer geschlossenen Tab-Gruppe kann wiederverwendet werden, wenn eine Tab-Gruppe wiederhergestellt wird, aber dies wird von der API nicht garantiert. Um Tab-Gruppen über Browser-Neustarts hinweg zu identifizieren, sollten Sie andere Eigenschaften und die Tabs innerhalb der Tab-Gruppen betrachten.
- `title`
  - : `string`. Der vom Benutzer definierte Name der Tab-Gruppe.
- `windowId`
  - : `integer`. Die eindeutige ID des Fensters, in dem sich die Tab-Gruppe befindet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
