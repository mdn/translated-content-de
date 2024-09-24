---
title: aria-activedescendant
slug: Web/Accessibility/ARIA/Attributes/aria-activedescendant
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-activedescendant` identifiziert das derzeit aktive Element, wenn sich der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)-Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role) befindet.

## Beschreibung

Die Eigenschaft `aria-activedescendant` bietet eine Methode zur Verwaltung des Fokus für unterstützende Technologien auf interaktiven Elementen, wenn diese mehrere fokussierbare Nachkommen enthalten, wie Menüs, Raster und Werkzeugleisten. Anstatt dass der Screenreader den Fokus zwischen besitzenden Elementen verschiebt, kann `aria-activedescendant` auf Containerelemente angewendet werden, um auf das derzeit aktive Element zu verweisen und Benutzer von unterstützender Technologie über das derzeit aktive Element zu informieren, wenn der Fokus darauf liegt.

Mit `aria-activedescendant` behält der Browser den DOM-Fokus auf dem Containerelement oder einem Eingabeelement, das das Containerelement steuert. Der Benutzeragent kommuniziert jedoch Desktop-Fokus-Ereignisse und Zustände an die unterstützende Technologie, als ob das von `aria-activedescendant` referenzierte Element den Fokus hätte.

Dieses Attribut ist nur relevant für Elemente mit der Rolle eines [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)-Widgets, [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role), deren `id` als Attributwert referenziert wird.

Das Attribut liefert unterstützenden Technologien Informationen darüber, welches Element den Fokus hat, erzeugt aber nicht tatsächlich den Fokus. Das Ändern des Fokus und die Verwaltung des Attributwerts erfolgen mit JavaScript. Zusätzlich zur Verwaltung dieses Attributwerts, stellen Sie sicher, dass der derzeit aktive Nachkomme sichtbar und im Sichtfeld ist (oder in das Sichtfeld scrollt), wenn er fokussiert ist.

Beim Festlegen des Werts von `aria-activedescendant` auf ein Element mit DOM-Fokus, stellen Sie sicher, dass der Wert auf ein besessenes Element verweist - entweder ein Nachkomme des Elements mit DOM-Fokus ODER ein logischer Nachkomme, wie es durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut angezeigt wird.

Wenn das Element mit DOM-Fokus eine Combobox, Textbox oder Suchbox ist, fügen Sie [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) hinzu, um auf das Element zu verweisen, das `aria-activedescendant` unterstützt.

Der Wert von `aria-activedescendant` verweist auf ein besessenes Element des kontrollierten Elements. Zum Beispiel, in einer Combobox kann der Fokus auf der Combobox bleiben, während der Wert von `aria-activedescendant` auf dem Combobox-Element auf einen Nachkommen einer Popup-Liste verweist, die von der Combobox gesteuert wird.

> [!NOTE]
> Das Attribut wird nur von wenigen Rollen unterstützt. Zum Beispiel unterstützen `dialog`s nicht `aria-activedescendant`. Wenn eine Combobox einen Dialog öffnet, wechselt der DOM-Fokus vom Combobox in den Dialog, da dieser nicht mit diesem Attribut referenzierbar ist.

> [!NOTE]
> Wenn ein Nachkomme eines `listbox`-, `grid`- oder `tree`-Popups fokussiert ist, bleibt der DOM-Fokus auf der Combobox und die Combobox hat `aria-activedescendant`, das auf ein fokussiertes Element innerhalb des Popups verweist.

## Werte

- ID-Referenz
  - : nimmt als Wert die `id` des derzeit fokussierten Elements.

## Zugehörige Rollen

Relevant nur als Attribut auf Elementen mit folgenden Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`composite`](/de/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

## Spezifikationen

{{Specifications}}
