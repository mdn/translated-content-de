---
title: aria-activedescendant
slug: Web/Accessibility/ARIA/Attributes/aria-activedescendant
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-activedescendant` identifiziert das derzeit aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)-Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) oder [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role) liegt.

## Beschreibung

Die Eigenschaft `aria-activedescendant` bietet eine Methode zur Fokusverwaltung für unterstützende Technologien auf interaktiven Elementen, wenn diese mehrere fokussierbare Nachfolger enthalten, wie Menüs, Raster und Werkzeuge. Anstatt dass der Bildschirmleser den Fokus zwischen den eigenen Elementen verschiebt, kann `aria-activedescendant` auf Containerelementen verwendet werden, um auf das derzeit aktive Element zu verweisen und Benutzern von unterstützenden Technologien das aktuell aktive Element anzuzeigen, wenn es fokussiert ist.

Mit `aria-activedescendant` behält der Browser den Fokus im DOM auf dem Containerelement oder einem Eingabeelement, das das Containerelement steuert. Der Benutzeragent kommuniziert jedoch Desktop-Fokus-Ereignisse und -Zustände an die unterstützende Technologie, als ob das durch `aria-activedescendant` referenzierte Element den Fokus besitzt.

Dieses Attribut ist nur auf Elementen mit Rollen wie [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role) Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) oder [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role) relevant, deren `id` als Attributwert referenziert wird.

Das Attribut stellt unterstützenden Technologien Informationen darüber zur Verfügung, welches Element den Fokus hat, erzeugt jedoch keinen tatsächlichen Fokus. Das Ändern des Fokus und die Verwaltung des Attributwerts erfolgt mit JavaScript. Zusätzlich zur Verwaltung des Attributwerts sollte sichergestellt werden, dass der derzeit aktive Nachfolger sichtbar und im Blickfeld ist (oder in das Blickfeld scrollt), wenn er fokussiert ist.

Beim Setzen des Wertes von `aria-activedescendant` auf einem Element mit DOM-Fokus sollte sichergestellt werden, dass der Wert auf ein untergeordnetes Element verweist—entweder auf einen Nachfolger des Elements mit DOM-Fokus ODER auf einen logischen Nachfolger, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut angezeigt.

Wenn das Element mit DOM-Fokus eine Combobox, Textbox oder Suchfeld ist, sollte [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) eingeschlossen werden, um auf das Element zu verweisen, das `aria-activedescendant` unterstützt.

Der Wert von `aria-activedescendant` verweist auf ein untergeordnetes Element des kontrollierten Elements. Beispielsweise kann bei einer Combobox der Fokus auf der Combobox verbleiben, während der Wert von `aria-activedescendant` auf dem Combobox-Element auf einen Nachfolger einer Popup-Listenbox verweist, die von der Combobox kontrolliert wird.

> [!NOTE]
> Das Attribut wird nur bei wenigen Rollen unterstützt. Beispielsweise unterstützen `dialog`s `aria-activedescendant` nicht. Wenn eine Combobox einen Dialog öffnet, verschiebt sich der DOM-Fokus vom Combobox in den Dialog, da dieser nicht mit diesem Attribut referenzierbar ist.

> [!NOTE]
> Wenn ein Nachfolger eines `listbox`, `grid` oder `tree`-Popups fokussiert ist, bleibt der DOM-Fokus auf der Combobox, und die Combobox hat `aria-activedescendant` auf einen Wert gesetzt, der auf das fokussierte Element innerhalb des Popups verweist.

## Werte

- ID-Referenz
  - : nimmt als Wert die `id` des derzeit fokussierten Elements.

## Zugehörige Rollen

Relevant nur als Attribut auf Elementen mit den folgenden Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

## Spezifikationen

{{Specifications}}
