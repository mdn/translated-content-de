---
title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-activedescendant`-Attribut identifiziert das aktuell aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

## Beschreibung

Die `aria-activedescendant`-Eigenschaft bietet eine Methode, den Fokus für unterstützende Technologien bei interaktiven Elementen zu verwalten, wenn diese mehrere fokussierbare Nachkommen enthalten, wie z.B. Menüs, Raster und Werkzeugleisten. Anstatt dass der Bildschirmleser den Fokus zwischen den zugehörigen Elementen verschiebt, kann `aria-activedescendant` auf Containerelementen verwendet werden, um auf das aktuell aktive Element zu verweisen und den Benutzern unterstützender Technologien mitzuteilen, welches das aktuell aktive Element ist, wenn es fokussiert ist.

Mit `aria-activedescendant` hält der Browser den DOM-Fokus auf dem Containerelement oder auf einem Eingabeelement, das das Containerelement steuert. Der Benutzeragent jedoch kommuniziert Desktop-Fokus-Ereignisse und -Zustände an die unterstützende Technologie, als ob das Element, auf das durch `aria-activedescendant` verwiesen wird, den Fokus hätte.

Dieses Attribut ist nur auf Elementen relevant, die die Rolle eines [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widgets, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) haben, deren `id` als Attributwert referenziert wird.

Das Attribut verwaltet die Bereitstellung von Informationen über den Fokus für unterstützende Technologien, erzeugt jedoch selbst keinen Fokus. Das Ändern des Fokus und die Verwaltung des Attributwertes erfolgt mit JavaScript. Zusätzlich zur Verwaltung dieses Attributswertes stellen Sie sicher, dass der aktuell aktive Nachkomme sichtbar ist und im Blickfeld (oder ins Blickfeld scrollt) ist, wenn er fokussiert ist.

Bei der Festlegung des Wertes von `aria-activedescendant` auf ein Element mit DOM-Fokus stellen Sie sicher, dass der Wert sich auf ein besessenes Element bezieht—entweder ein Nachkomme des Elementes mit DOM-Fokus oder ein logischer Nachkomme, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut angezeigt.

Wenn das Element mit DOM-Fokus eine Combobox, Textbox oder Suchbox ist, fügen Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) hinzu, um auf das Element zu verweisen, das `aria-activedescendant` unterstützt.

Der Wert von `aria-activedescendant` bezieht sich auf ein besessenes Element des gesteuerten Elementes. Beispielsweise kann bei einer Combobox der Fokus auf der Combobox bleiben, während der Wert von `aria-activedescendant` auf dem Combobox-Element auf einen Nachkommen einer Popup-Listbox verweist, die von der Combobox gesteuert wird.

> [!NOTE]
> Das Attribut wird nur von wenigen Rollen unterstützt. Zum Beispiel unterstützen `dialog`e `aria-activedescendant` nicht. Wenn eine Combobox ein Dialog öffnet, wird der DOM-Fokus aus der Combobox in das Dialogfenster verschoben, da es nicht mit diesem Attribut referenziert werden kann.

> [!NOTE]
> Wenn ein Nachkomme eines `listbox`, `grid` oder `tree` Popups fokussiert ist, bleibt der DOM-Fokus auf der Combobox, und die Combobox hat `aria-activedescendant` so gesetzt, dass der Wert auf das fokussierte Element innerhalb des Popups verweist.

## Werte

- ID-Referenz
  - : nimmt als Wert die `id` des aktuell fokussierten Elements.

## Zugehörige Rollen

Relevant nur als Attribut auf Elementen mit den folgenden Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## Spezifikationen

{{Specifications}}
