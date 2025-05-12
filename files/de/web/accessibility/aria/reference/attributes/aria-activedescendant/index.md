---
title: "ARIA: aria-activedescendant-Attribut"
short-title: aria-activedescendant
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-activedescendant`-Attribut identifiziert das aktuell aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

## Beschreibung

Die `aria-activedescendant`-Eigenschaft bietet eine Methode zur Verwaltung des Fokus für unterstützende Technologien bei interaktiven Elementen, die mehrere fokussierbare Nachfahren enthalten, wie Menüs, Raster oder Werkzeugleisten. Anstatt den Fokus des Screenreaders zwischen den zugehörigen Elementen zu verschieben, kann `aria-activedescendant` bei Container-Elementen verwendet werden, um auf das aktuell aktive Element zu verweisen und den Benutzern unterstützender Technologien mitzuteilen, welches Element aktuell aktiv ist, wenn darauf fokussiert wird.

Mit `aria-activedescendant` behält der Browser den DOM-Fokus auf dem Container-Element oder auf einem Eingabeelement, das das Container-Element steuert. Der Benutzeragent kommuniziert Desktop-Fokusereignisse und -zustände an die unterstützende Technologie, als ob das durch `aria-activedescendant` referenzierte Element Fokus hätte.

Dieses Attribut ist nur bei Elementen mit der Rolle von [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widgets, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) relevant, deren `id` als Attributwert referenziert wird.

Das Attribut sorgt dafür, assistiven Technologien Informationen darüber zu geben, welches Element den Fokus hat, erzeugt jedoch selbst keinen Fokus. Das Ändern des Fokus und die Verwaltung des Attributwertes erfolgt mit JavaScript. Neben der Verwaltung dieses Attributwertes sollten Sie sicherstellen, dass das aktuell aktive Nachfahrenelement sichtbar ist und im Sichtbereich ist (oder in den Sichtbereich scrollt), wenn darauf fokussiert wird.

Beim Setzen des Wertes von `aria-activedescendant` auf ein Element mit DOM-Fokus muss sichergestellt werden, dass der Wert auf ein zugehöriges Element verweist — entweder ein Nachfahre des Elements mit DOM-Fokus ODER ein logischer Nachfahre, wie durch das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) angezeigt.

Wenn das Element mit DOM-Fokus eine Combobox, Textbox oder Suchbox ist, sollte [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) hinzugefügt werden, um auf das Element zu verweisen, das `aria-activedescendant` unterstützt.

Der Wert von `aria-activedescendant` verweist auf ein zugehöriges Element des kontrollierten Elements. Zum Beispiel kann bei einer Combobox der Fokus auf der Combobox bleiben, während der Wert von `aria-activedescendant` auf dem Combobox-Element auf einen Nachfahren einer Popup-Liste verweist, die von der Combobox gesteuert wird.

> [!NOTE]
> Das Attribut wird nur für wenige Rollen unterstützt. Zum Beispiel unterstützen `dialog`s `aria-activedescendant` nicht. Wenn eine Combobox einen Dialog öffnet, bewegt sich der DOM-Fokus vom Combobox in den Dialog, da er mit diesem Attribut nicht referenziert werden kann.

> [!NOTE]
> Wenn ein Nachfahre eines `listbox`-, `grid`- oder `tree`-Popups fokussiert ist, bleibt der DOM-Fokus auf der Combobox und die Combobox hat `aria-activedescendant` mit einem Wert gesetzt, der auf das fokussierte Element im Popup verweist.

## Werte

- ID-Referenz
  - : Nimmt als Wert die `id` des aktuell fokussierten Elements.

## Zugehörige Schnittstellen

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Die `ariaActiveDescendantElement`-Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist eine Instanz einer Unterklasse von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenz im `aria-activedescendant`-Attribut widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
  - : Die `ariaActiveDescendantElement`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist eine Instanz einer Unterklasse von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenz im `aria-activedescendant`-Attribut widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Relevant nur als Attribut bei Elementen mit den folgenden Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

## Spezifikationen

{{Specifications}}
