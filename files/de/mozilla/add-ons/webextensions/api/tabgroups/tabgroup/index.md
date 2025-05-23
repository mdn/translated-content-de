---
title: tabGroups.TabGroup
slug: Mozilla/Add-ons/WebExtensions/API/tabGroups/TabGroup
l10n:
  sourceCommit: 3ffce2e0e798a46f6405d32a971d1ebf9874cdd4
---

{{AddonSidebar}}

Der Zustand einer Tab-Gruppe.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- `collapsed`
  - : `boolean`. Ob die Tab-Gruppe im Tab-Bereich eingeklappt oder ausgeklappt ist.
- `color`
  - : {{WebExtAPIRef("tabGroups.Color")}}. Der Name der vom Benutzer ausgewählten Farbe für das Etikett und die Symbole der Tab-Gruppe.
- `id`
  - : `integer`. Die eindeutige ID der Tab-Gruppe. Kann nicht {{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}} sein. Die ID einer geschlossenen Tab-Gruppe kann wiederverwendet werden, wenn eine Tab-Gruppe wiederhergestellt wird, dies ist jedoch nicht durch die API garantiert. Um Tab-Gruppen über Browser-Neustarts hinweg zu identifizieren, sollten Sie andere Eigenschaften und die Tabs innerhalb der Tab-Gruppen betrachten.
- `title`
  - : `string`. Der vom Benutzer definierte Name der Tab-Gruppe.
- `windowId`
  - : `integer`. Die eindeutige ID des Fensters, in dem sich die Tab-Gruppe befindet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
