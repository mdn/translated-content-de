---
title: tabGroups.TabGroup
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TabGroup
l10n:
  sourceCommit: 4c2c5febdf57cb0b5bdd5d55fc44b965ff41b10f
---

Der Zustand einer Tab-Gruppe.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `collapsed`
  - : `boolean`. Gibt an, ob die Tab-Gruppe in der Tab-Leiste eingeklappt oder ausgeklappt ist.
    - In Firefox kann eine eingeklappte Gruppe den aktiven Tab enthalten. Die inaktiven Tabs sind eingeklappt.
    - In Chrome sind Gruppen komplett eingeklappt. Wenn die Gruppe den aktiven Tab enthält, wenn sie eingeklappt ist, wird der aktive Tab auf den ersten Tab rechts von der Gruppe verschoben. Wenn es keinen Tab rechts von der Gruppe gibt, wird er auf den Tab unmittelbar links von der Gruppe verschoben.
- `color`
  - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der vom Benutzer ausgewählten Farbe für das Label und die Symbole der Tab-Gruppe.
- `id`
  - : `integer`. Die eindeutige ID der Tab-Gruppe. Kann nicht {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}} sein. Die ID einer geschlossenen Tab-Gruppe kann wiederverwendet werden, wenn eine Tab-Gruppe wiederhergestellt wird, aber dies wird von der API nicht garantiert. Um Tab-Gruppen über Browser-Neustarts hinweg zu identifizieren, sollten andere Eigenschaften und die Tabs innerhalb der Tab-Gruppen betrachtet werden.
- `title`
  - : `string`. Der benutzerdefinierte Name der Tab-Gruppe.
- `windowId`
  - : `integer`. Die eindeutige ID des Fensters, in dem sich die Tab-Gruppe befindet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
