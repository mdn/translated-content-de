---
title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Das Attribut `aria-activedescendant` identifiziert das aktuell aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

## Beschreibung

Die Eigenschaft `aria-activedescendant` bietet eine Methode zur Verwaltung des Fokus für unterstützende Technologien bei interaktiven Elementen, die mehrere fokussierbare Nachkommen enthalten, wie z.B. Menüs, Raster und Symbolleisten. Anstatt dass der Screenreader den Fokus zwischen den enthaltenen Elementen bewegt, kann `aria-activedescendant` auf Containerelementen verwendet werden, um auf das aktuell aktive Element zu verweisen und Benutzer von unterstützenden Technologien über das derzeit aktive Element beim Fokussieren zu informieren.

Mit `aria-activedescendant` behält der Browser den DOM-Fokus auf dem Containerelement oder auf einem Eingabeelement, das das Containerelement steuert. Der Benutzeragent kommuniziert jedoch Desktop-Fokusereignisse und -zustände an die unterstützende Technologie, als ob das durch `aria-activedescendant` referenzierte Element den Fokus hätte.

Dieses Attribut ist nur relevant für Elemente mit der Rolle eines [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widgets, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), deren `id` als Attributwert referenziert wird.

Das Attribut liefert unterstützenden Technologien Informationen darüber, welches Element den Fokus hat, erzeugt aber tatsächlich keinen Fokus. Die Änderung des Fokus und das Verwalten des Attributwerts erfolgen mit JavaScript. Zusätzlich zum Verwalten dieses Attributwerts stellen Sie sicher, dass der derzeit aktive Nachkomme sichtbar ist und in den Blick gerät (oder in den Blick scrollt), wenn darauf fokussiert wird.

Beim Setzen des Wertes von `aria-activedescendant` auf ein Element mit DOM-Fokus stellen Sie sicher, dass der Wert auf ein enthaltenes Element verweist - entweder ein Nachkomme des Elements mit DOM-Fokus ODER ein logischer Nachkomme, wie durch das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) angegeben.

Wenn das Element mit DOM-Fokus eine Combobox, eine Textbox oder eine Suchbox ist, fügen Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) hinzu, um auf das Element zu verweisen, das `aria-activedescendant` unterstützt.

Der Wert von `aria-activedescendant` bezieht sich auf ein enthaltenes Element des gesteuerten Elements. Zum Beispiel kann der Fokus in einer Combobox auf der Combobox verbleiben, während der Wert von `aria-activedescendant` auf dem Combobox-Element auf einen Nachkommen einer Popup-Listbox verweist, die von der Combobox gesteuert wird.

> [!NOTE]
> Das Attribut wird nur bei wenigen Rollen unterstützt. Zum Beispiel unterstützen `dialog`s `aria-activedescendant` nicht. Wenn eine Combobox einen Dialog öffnet, wird der DOM-Fokus in den Dialog von der Combobox verschoben, da er nicht mit diesem Attribut referenzierbar ist.

> [!NOTE]
> Wenn ein Nachkomme eines `listbox`, `grid` oder `tree` Popups fokussiert ist, bleibt der DOM-Fokus auf der Combobox und die Combobox hat `aria-activedescendant` auf einen Wert gesetzt, der auf das fokussierte Element im Popup verweist.

## Werte

- ID-Referenz
  - : nimmt als Wert die `id` des aktuell fokussierten Elements.

## Zugehörige Schnittstellen

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Die `ariaActiveDescendantElement`-Eigenschaft ist Teil der Schnittstelle eines jeden Elements.
    Ihr Wert ist eine Instanz einer Unterklasse von [`Element`](/de/docs/Web/API/Element), die den `id`-Verweis im `aria-activedescendant`-Attribut widerspiegelt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
  - : Die `ariaActiveDescendantElement`-Eigenschaft ist Teil der Schnittstelle eines jeden benutzerdefinierten Elements.
    Ihr Wert ist eine Instanz einer Unterklasse von [`Element`](/de/docs/Web/API/Element), die den `id`-Verweis im `aria-activedescendant`-Attribut widerspiegelt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Relevant nur als Attribut auf Elementen mit den folgenden Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## Spezifikationen

{{Specifications}}
