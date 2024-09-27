---
title: "ARIA: tabpanel Rolle"
slug: Web/Accessibility/ARIA/Roles/tabpanel_role
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{AccessibilitySidebar}}

Das ARIA `tabpanel` ist ein Container für die Ressourcen des geschichteten Inhalts, der mit einem `tab` verknüpft ist.

## Beschreibung

Die Rolle `tabpanel` zeigt an, dass das Element ein Container für die Ressourcen ist, die mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rolle verknüpft sind, wobei jedes `tab` in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Registerkartenoberfläche, einem häufigen Benutzererfahrungsmuster, bei dem eine Gruppe visueller Registerkarten einen schnellen Wechsel zwischen mehreren geschichteten Ansichten ermöglicht. Jede Registerkarte ist mit der Rolle `tab` definiert, und diese Registerkarten sind innerhalb eines Elements mit der Rolle `tablist` enthalten. Das `tablist` ist oft visuell über oder neben einem Inhaltsbereich positioniert, der die zugehörigen Tabpanels enthält. Das `tabpanel` ist die Rolle des Containers für jedes Inhaltsfenster, das mit einem entsprechenden `tab` in der `tablist` der Registerkartenoberfläche verknüpft ist.

In vielen Registerkartenoberflächen wird jeweils nur ein `tabpanel` sichtbar sein. Einige Oberflächen erfordern jedoch möglicherweise, dass mehrere Tabpanels gleichzeitig angezeigt werden. In diesen Fällen würde das `tablist` das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) erhalten, und die `tab`-Elemente würden dann das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) verwenden, um anzuzeigen, ob ihr zugeordnetes `tabpanel` sichtbar war oder nicht. Der ausgewählte Zustand der Registerkarte würde stattdessen verwendet, um anzuzeigen, welches Tabpanel das derzeit 'aktive' Panel ist. Beispielsweise könnte dies anzeigen, zu welchem Tabpanel der Tastaturfokus wechseln würde, wenn jemand die <kbd>Tab</kbd>-Taste drückt, während der Fokus auf einer Registerkarte innerhalb der Multi-Select-`tablist` liegt.

In Einzel-Auswahl-Registerkarten-Oberflächen wird nur das `tabpanel` angezeigt, das mit der derzeit ausgewählten Registerkarte verknüpft ist. Alle anderen `tabpanel`-Elemente, die mit nicht ausgewählten Registerkarten verknüpft sind, müssen vor Benutzern verborgen werden. Wenn sich also die Registerkartenauswahl ändert, würde sich auch das angezeigte Tabpanel ändern, während das vorher angezeigte Tabpanel dann verborgen würde.

In Mehrfachauswahl-Registerkartenoberflächen können mehrere `tabpanel`-Elemente angezeigt werden, die dem erweiterten Zustand ihrer zugeordneten `tab`-Elemente entsprechen.

Registerkarten fungieren nicht als Ankerlinks zu einzelnen Panels – und bei Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch zum neu angezeigten `tabpanel` wechseln. Während eine Registerkartenoberfläche basierend auf einem zugrundeliegenden Markup-Muster aus Hyperlinks auf ihrer Seite, die auf ihre zugeordneten Inhaltsabschnitte zeigen, schrittweise verbessert werden kann, sollte, wenn JavaScript verwendet wird, um diese Elemente in eine Registerkartenoberfläche zu ändern, das Standardverhalten der Hyperlinks verhindert werden. Idealerweise könnte dies durch Entfernen oder Ändern des `href`-Attributs geschehen, da dies den zusätzlichen Vorteil hätte, die hyperlink-spezifischen Menüelemente aus dem Kontextmenü des Browsers des Elements zu entfernen.

Wenn sich der Tastaturfokus auf einem `tablist` oder einem `tab` innerhalb des `tablist` befindet, sollte die <kbd>Tab</kbd>-Taste so programmiert werden, dass sie vom fokussierten Tab – das möglicherweise oder möglicherweise nicht das ausgewählte Tab ist – zu dem `tabpanel` wechselt, das die derzeit ausgewählte Registerkarte darstellt.

Jedes `tab` in einer `tablist` kann als Beschriftung für sein entsprechendes `tabpanel` dienen. Fügen Sie die `id` jeder `tab` als Wert für das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) jedes `tabpanel` hinzu.

Sie können auch optional jedes `tabpanel` mit seinem zugeordneten `tab` verknüpfen, indem Sie die [`id`](/de/docs/Web/HTML/Global_attributes#id) des `tabpanel` als Wert des `aria-controls` Attributs des `tab` hinzufügen.

Wenn eine Registerkartenoberfläche initialisiert wird, wird ein `tabpanel` angezeigt und seine zugehörige `tab` wird so gestaltet, dass sie anzeigt, dass sie aktiv ist und ihren programmatischen Zustand widerspiegelt. Alle inaktiven `tabpanel`-Elemente müssen vor allen Benutzern verborgen sein. Dies wird üblicherweise durch die Verwendung von CSS `display: none` erreicht.

Siehe den Artikel [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) für weitere spezifische Informationen zur Verwendung dieser Rolle.

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um einem `tabpanel` zu ermöglichen, den Fokus zu erhalten, ohne das `tabpanel` in die Tastaturfokusreihenfolge der Seite aufzunehmen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, optimal unter Verwendung der CSS {{CSSXref(':focus')}} Pseudoklasse, damit Tastaturbenutzer wissen, dass es eine Fokusänderung gab und ihnen bewusst ist, welcher Inhalt derzeit den Fokus hat.

Karussells können mit diesem Registerkartenmuster erstellt werden: Ein Dias-Auswahlsteuerungen können als `tabs` in einer `tablist` mit der Folie, die durch ein `tabpanel`-Element dargestellt wird, gekennzeichnet werden.

### Zugehörige Rollen und Attribute

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugeordneten `tabpanel`
- [`tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
  - : Gruppe von `tab` Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Liefert einen zugänglichen Namen. Verweist auf das `tab`-Element, das das Panel steuert
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Sollte bei den erforderlichen `tab`-Elementen verwendet werden, wenn eine mehrfach-selektierbare `tablist` verwendet wird.

### Tastatur-Interaktionen

Siehe die [`tablist` Tastatur-Interaktionen](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role#keyboard_interactions) in der Definition der [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) Rolle.

## Beispiel

Siehe das Beispiel [`tabpanel`, `tab`, und `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [ARIA `tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [Beispiel: Registerkarten mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Registerkarten mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
