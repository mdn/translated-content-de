---
title: "ARIA: tabpanel Rolle"
slug: Web/Accessibility/ARIA/Roles/tabpanel_role
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{AccessibilitySidebar}}

Der ARIA-`tabpanel` ist ein Container für die Ressourcen des geschichteten Inhalts, der einem `tab` zugeordnet ist.

## Beschreibung

Die `tabpanel`-Rolle gibt an, dass das Element ein Container für die Ressourcen ist, die mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle verbunden sind, wobei jedes `tab` in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Tab-Oberfläche, einem gängigen Benutzermuster, bei dem eine Gruppe von visuellen Tabs ein schnelles Umschalten zwischen mehreren geschichteten Ansichten ermöglicht. Jedes Tab wird mit der `tab`-Rolle definiert, und diese Tabs sind in einem Element mit der `tablist`-Rolle enthalten. Die `tablist` befindet sich oft visuell oberhalb oder seitlich eines Inhaltsbereichs, der die zugehörigen Tabpanels enthält. Das `tabpanel` ist die Rolle des Containers für jede Inhaltsscheibe, die einem entsprechenden `tab` in der `tablist` der Tab-Oberfläche zugeordnet ist.

In vielen Tab-Oberflächen wird gleichzeitig nur ein einzelnes `tabpanel` sichtbar sein. Einige Oberflächen erfordern jedoch möglicherweise, dass mehrere Tab-Panels gleichzeitig angezeigt werden. In diesen Fällen würde der `tablist` das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attribut bereitgestellt, und die `tab`-Elemente würden dann das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attribut verwenden, um anzugeben, ob das zugehörige `tabpanel` sichtbar ist oder nicht. Der ausgewählte Zustand der Registerkarte würde stattdessen verwendet, um anzuzeigen, welches Tabpanel das aktuell „aktive“ Panel ist. Zum Beispiel könnte dies darauf hinweisen, auf welches Tabpanel die Tastaturfokussierung verschieben würde, wenn jemand die <kbd>Tab</kbd>-Taste drückt, während ein Tab innerhalb der Mehrfachauswahl-`tablist` fokussiert ist.

In Tab-Oberflächen mit Einzelauswahl wird nur das `tabpanel` angezeigt, das mit dem aktuell ausgewählten Tab verbunden ist. Alle anderen `tabpanel`-Elemente, die mit den nicht ausgewählten Tabs verknüpft sind, müssen vor den Benutzern verborgen sein. Daher würde sich beim Ändern der Tab-Auswahl auch das angezeigte Tabpanel ändern, während das zuvor angezeigte Tabpanel dann ausgeblendet wird.

In Tab-Oberflächen mit Mehrfachauswahl können mehrere `tabpanel`-Elemente angezeigt werden, die mit dem erweiterten Zustand ihrer zugehörigen `tab`-Elemente übereinstimmen.

Tabs fungieren nicht als Ankerlinks zu den einzelnen Panels – und bei Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch auf das neu angezeigte `tabpanel` verschoben werden. Während eine Tab-Oberfläche basierend auf einem grundlegenden Markup-Muster von In-Page-Hyperlinks, die auf ihre zugeordneten Inhaltsabschnitte verweisen, schrittweise verbessert werden kann, sollte das Standardverhalten der Hyperlinks verhindert werden, wenn JavaScript verwendet wird, um diese Elemente in eine Tab-Oberfläche zu modifizieren. Idealerweise könnte dies durch Entfernen oder Ändern des `href`-Attributs geschehen, da dies zusätzlichen Vorteil hätte, die hyperlinkspezifischen Menüelemente aus dem Kontextmenü des Browsers des Elements zu entfernen.

Wenn der Tastaturfokus auf einer `tablist` oder einem `tab` innerhalb der `tablist` liegt, sollte die <kbd>Tab</kbd>-Taste so programmiert sein, dass sie vom fokussierten Tab – welches möglicherweise nicht das ausgewählte Tab ist – zum `tabpanel` wechselt, das das aktuell ausgewählte Tab darstellt.

Jedes `tab` in einer `tablist` kann als das Label für sein entsprechendes `tabpanel` dienen. Fügen Sie die `id` jedes `tab` als Wert für das `aria-labelledby`-Attribut jedes `tabpanel` hinzu.

Sie können auch optional jedes `tabpanel` mit seinem zugehörigen `tab` verbinden, indem Sie die [`id`](/de/docs/Web/HTML/Global_attributes#id) des `tabpanel` als Wert des `aria-controls`-Attributs des `tab` einfügen.

Wenn eine Tab-Oberfläche initialisiert wird, wird ein `tabpanel` angezeigt und sein zugehöriges `tab` so gestaltet, dass angezeigt wird, dass es aktiv ist, und seinen programmatischen Zustand widerspiegelt. Alle inaktiven `tabpanel`-Elemente müssen vor allen Benutzern ausgeblendet werden. Dies wird am häufigsten durch die Verwendung von CSS's `display: none` erreicht.

Weitere Informationen zur Verwendung dieser Rolle finden Sie im Artikel zur [ARIA-`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um einem `tabpanel` das Empfangen von Fokus zu ermöglichen, ohne das `tabpanel` in die Tastaturfokusreihenfolge der Seite aufzunehmen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es Fokus erhält, optimalerweise unter Verwendung der CSS {{CSSXref(':focus')}} Pseudoklasse, damit Tastaturbenutzer erkennen können, dass sich der Fokus geändert hat und wissen, welcher Inhalt derzeit im Fokus steht.

Karusselle können mit diesem Tab-Muster erstellt werden: Eine Folienschiebersteuerung kann als `tabs` in einer `tablist` mit der Folie dargestellt durch ein `tabpanel`-Element ausgezeichnet werden.

### Zugehörige Rollen und Attribute

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
  - : Steuerung der Sichtbarkeit des zugehörigen `tabpanel`
- [`tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Ermöglicht einen zugänglichen Namen. Verweist auf das `tab`-Element, das das Panel steuert.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Sollte auf den notwendigen `tab`-Elementen verwendet werden, wenn eine mehrfach auswählbare `tablist` verwendet wird.

### Tastaturinteraktionen

Siehe die [Tastaturinteraktionen der `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role#keyboard_interactions) in der Definition der [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)-Rolle.

## Beispiel

Siehe das [Beispiel für `tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [ARIA `tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [Beispiel: Tabs mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Tabs mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
