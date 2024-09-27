---
title: aria-activedescendant
slug: Web/Accessibility/ARIA/Attributes/aria-activedescendant
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-activedescendant`-Attribut identifiziert das aktuell aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)-Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role) liegt.

## Beschreibung

Die Eigenschaft `aria-activedescendant` bietet eine Methode zur Verwaltung des Fokus für unterstützende Technologien auf interaktiven Elementen, wenn sie mehrere fokussierbare Nachfahren enthalten, wie z.B. Menüs, Raster und Werkzeugleisten. Anstatt dass der Screenreader den Fokus zwischen den zugehörigen Elementen bewegt, kann `aria-activedescendant` auf Containerelementen verwendet werden, um auf das aktuell aktive Element zu verweisen und den Benutzern unterstützender Technologien das aktuell aktive Element bei Fokus mitzuteilen.

Mit `aria-activedescendant` hält der Browser den DOM-Fokus auf dem Containerelement oder auf einem Eingabeelement, das das Containerelement steuert. Der Benutzeragent überträgt jedoch Desktop-Fokusereignisse und -zustände an die unterstützende Technologie, als ob das durch `aria-activedescendant` referenzierte Element den Fokus hätte.

Dieses Attribut ist nur relevant für Elemente mit der Rolle eines [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)-Widgets, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role), deren `id` als Attributwert angegeben ist.

Das Attribut stellt unterstützenden Technologien Informationen darüber zur Verfügung, welches Element den Fokus hat, erzeugt jedoch keinen tatsächlichen Fokus. Das Ändern des Fokus und das Verwalten des Attributwerts erfolgt mit JavaScript. Zusätzlich zur Verwaltung des Attributwerts stellen Sie sicher, dass das aktuell aktive Nachfahrelement sichtbar ist und im Sichtfeld bleibt (oder in das Sichtfeld scrollt), wenn es fokussiert wird.

Bei der Festlegung des Werts von `aria-activedescendant` auf einem Element mit DOM-Fokus, stellen Sie sicher, dass der Wert sich auf ein untergeordnetes Element bezieht - entweder ein Nachfahre des Elements mit DOM-Fokus ODER ein logischer Nachfahre, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Attribut angegeben.

Wenn das Element mit DOM-Fokus eine Combobox, Textbox oder Suchbox ist, verwenden Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls), um auf das Element zu verweisen, das `aria-activedescendant` unterstützt.

Der Wert von `aria-activedescendant` bezieht sich auf ein untergeordnetes Element des gesteuerten Elements. In einer Combobox kann der Fokus beispielsweise auf der Combobox bleiben, während der Wert von `aria-activedescendant` auf dem Combobox-Element auf einen Nachfahren einer Popup-Liste verweist, die von der Combobox gesteuert wird.

> [!NOTE]
> Das Attribut wird nur bei wenigen Rollen unterstützt. Zum Beispiel unterstützen `dialog`s `aria-activedescendant` nicht. Wenn eine Combobox einen Dialog öffnet, wird der DOM-Fokus aus der Combobox in den Dialog verschoben, da er mit diesem Attribut nicht referenziert werden kann.

> [!NOTE]
> Wenn ein Nachfahre eines `listbox`-, `grid`- oder `tree`-Popups fokussiert ist, bleibt der DOM-Fokus auf der Combobox und die Combobox hat `aria-activedescendant` auf einen Wert gesetzt, der sich auf das im Popup fokussierte Element bezieht.

## Werte

- ID-Referenz
  - : nimmt als Wert die `id` des aktuell fokussierten Elements an.

## Zugehörige Rollen

Nur relevant als Attribut auf Elementen mit den folgenden Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

## Spezifikationen

{{Specifications}}
