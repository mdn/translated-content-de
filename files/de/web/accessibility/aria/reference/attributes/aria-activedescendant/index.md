---
title: "ARIA: aria-activedescendant Attribut"
short-title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Das `aria-activedescendant` Attribut identifiziert das derzeit aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

## Beschreibung

Die `aria-activedescendant` Eigenschaft bietet eine Methode zur Verwaltung des Fokus für unterstützende Technologien auf interaktiven Elementen, wenn sie mehrere fokussierbare Nachfahren enthalten, wie zum Beispiel Menüs, Raster und Werkzeugleisten. Anstatt dass der Screenreader den Fokus zwischen untergeordneten Elementen bewegt, kann `aria-activedescendant` auf Containerelementen verwendet werden, um auf das derzeit aktive Element zu verweisen, wodurch Benutzer unterstützt werden, die Technologie anwenden, um das derzeit aktive Element zu identifizieren, wenn der Fokus darauf liegt.

Mit `aria-activedescendant` hält der Browser den DOM-Fokus auf dem Containerelement oder auf einem Eingabeelement, das das Containerelement steuert. Der Benutzeragent kommuniziert jedoch Desktop-Fokusereignisse und -zustände an die unterstützende Technologie, als ob das durch `aria-activedescendant` referenzierte Element den Fokus hätte.

Dieses Attribut ist nur relevant für Elemente mit der Rolle [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), deren `id` als Attributwert referenziert wird.

Das Attribut verwaltet die Bereitstellung von Informationen für unterstützende Technologien darüber, welches Element den Fokus hat, erzeugt jedoch keinen tatsächlichen Fokus. Das Ändern des Fokus und die Verwaltung des Attributwertes erfolgt mit JavaScript. Zusätzlich zur Verwaltung dieses Attributwertes stellen Sie sicher, dass der derzeit aktive Nachfahre sichtbar ist und im Sichtfeld (oder in das Sichtfeld rollt) ist, wenn er fokussiert wird.

Beim Setzen des Wertes von `aria-activedescendant` auf einem Element mit DOM-Fokus stellen Sie sicher, dass der Wert auf ein untergeordnetes Element verweist—entweder einen Nachfahren des Elements mit DOM-Fokus ODER einen logischen Nachfahren, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut angezeigt.

Wenn das Element mit DOM-Fokus eine Combobox, ein Textfeld oder ein Suchfeld ist, fügen Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) hinzu, um auf das Element zu verweisen, das `aria-activedescendant` unterstützt.

Der Wert von `aria-activedescendant` verweist auf ein untergeordnetes Element des gesteuerten Elements. Zum Beispiel kann bei einer Combobox der Fokus auf der Combobox bleiben, während der Wert von `aria-activedescendant` auf dem Combobox-Element auf einen Nachfahren einer Popup-Listbox verweist, die von der Combobox gesteuert wird.

> [!NOTE]
> Das Attribut wird nur von wenigen Rollen unterstützt. Zum Beispiel unterstützen `dialog`s nicht `aria-activedescendant`. Wenn eine Combobox ein Dialogfeld öffnet, wechselt der DOM-Fokus vom Combobox ins Dialogfeld, da er mit diesem Attribut nicht referenziert werden kann.

> [!NOTE]
> Wenn ein Nachfahre eines `listbox`, `grid` oder `tree` Popups fokussiert ist, bleibt der DOM-Fokus auf der Combobox, und die Combobox hat `aria-activedescendant` auf einen Wert gesetzt, der auf das fokussierte Element innerhalb des Popups verweist.

## Werte

- ID-Referenz
  - : nimmt als Wert die `id` des derzeit fokussierten Elements.

## Zugehörige Schnittstellen

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Die `ariaActiveDescendantElement` Eigenschaft ist Teil der Schnittstelle jedes Elements. Ihr Wert ist eine Instanz einer Unterklasse von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenz im `aria-activedescendant` Attribut widerspiegelt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
  - : Die `ariaActiveDescendantElement` Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements. Ihr Wert ist eine Instanz einer Unterklasse von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenz im `aria-activedescendant` Attribut widerspiegelt ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Relevant nur als Attribut auf Elementen mit den folgenden Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## Spezifikationen

{{Specifications}}
