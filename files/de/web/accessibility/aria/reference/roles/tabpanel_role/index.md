---
title: "ARIA: tabpanel Rolle"
short-title: tabpanel
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das ARIA `tabpanel` ist ein Container für die Ressourcen von geschichtetem Inhalt, der mit einem `tab` verbunden ist.

## Beschreibung

Die `tabpanel` Rolle zeigt an, dass das Element ein Container für die mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Rolle verbundenen Ressourcen ist, wobei jede `tab` innerhalb einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Tab-Oberfläche, eines häufigen Benutzererfahrungsmusters, bei dem eine Gruppe visueller Tabs ein schnelles Umschalten zwischen mehreren geschichteten Ansichten ermöglicht. Jedes Tab wird mit der `tab` Rolle definiert und diese Tabs sind innerhalb eines Elements mit der `tablist` Rolle enthalten. Die `tablist` wird oft visuell über oder neben einem Inhaltsbereich platziert, der die zugehörigen Tabpanels enthält. Die `tabpanel` Rolle ist der Container für jede Inhaltsfläche, die mit einem entsprechenden `tab` in der Tab-Oberfläche's `tablist` verbunden ist.

In vielen Tab-Oberflächen wird jeweils nur ein einziges `tabpanel` sichtbar sein. Einige Oberflächen erfordern jedoch möglicherweise, dass mehrere Tabpanels gleichzeitig angezeigt werden. In diesen Fällen würde der `tablist` das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) Attribut zugewiesen, und die `tab` Elemente würden dann das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut verwenden, um anzuzeigen, ob ihr zugehöriges `tabpanel` sichtbar war oder nicht. Der ausgewählte Zustand des Tabs würde stattdessen verwendet werden, um anzuzeigen, welches Tabpanel das derzeit 'aktive' Panel ist. Zum Beispiel könnte dies anzeigen, welches Tabpanel den Tastaturfokus erhalten würde, wenn jemand die <kbd>tab</kbd> Taste drücken würde, wenn der Fokus auf einem Tab innerhalb der Mehrfachauswahl `tablist` liegt.

In Einzelwahl-Tab-Oberflächen wird nur das `tabpanel` angezeigt, das dem aktuell ausgewählten Tab zugeordnet ist. Alle anderen `tabpanel` Elemente, die mit den nicht ausgewählten Tabs verbunden sind, müssen für die Benutzer ausgeblendet werden. Wenn sich also die Tab-Auswahl ändert, ändert sich auch das angezeigte Tabpanel, während das zuvor angezeigte Tabpanel dann ausgeblendet wird.

In Mehrfachauswahl-Tab-Oberflächen können mehrere `tabpanel` Elemente angezeigt werden, die dem erweiterten Zustand ihrer zugehörigen `tab` Elemente entsprechen.

Tabs fungieren nicht als Ankerlinks zu einzelnen Panels — und bei Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab` Element bleiben und nicht automatisch zum neu angezeigten `tabpanel` wechseln. Obwohl eine Tab-Oberfläche schrittweise basierend auf einem zugrundeliegenden Markup-Muster von In-Page-Hyperlinks, die auf ihre entsprechenden Inhaltsabschnitte verweisen, verbessert werden kann, sollte, wenn JavaScript verwendet wird, um diese Elemente in eine Tab-Oberfläche zu verwandeln, das Standardverhalten der Hyperlinks verhindert werden. Idealerweise könnte dies durch Entfernen oder Ändern des `href` Attributs erfolgen, da dies den zusätzlichen Vorteil hätte, die hyperlink-spezifischen Menüeinträge aus dem Kontextmenü des Browsers des Elements zu entfernen.

Wenn der Tastaturfokus auf einer `tablist` oder einem `tab` innerhalb der `tablist` liegt, sollte die <kbd>Tab</kbd> Taste so programmiert werden, dass sie von dem fokussierten Tab — das möglicherweise nicht das ausgewählte Tab ist — zum `tabpanel` wechselt, das das derzeit ausgewählte Tab darstellt.

Jedes `tab` in einer `tablist` kann als Kennzeichnung für sein entsprechendes `tabpanel` dienen. Fügen Sie die `id` jedes `tab` als Wert des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attributs jedes `tabpanel` ein.

Sie können auch optional jedes `tabpanel` mit seinem zugehörigen `tab` verknüpfen, indem Sie die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `tabpanel` als Wert des [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attributs des `tab` einfügen.

Wenn eine Tab-Oberfläche initialisiert wird, wird ein `tabpanel` angezeigt und das zugehörige `tab` wird so gestaltet, dass es anzeigt, dass es aktiv ist und seinen programmatischen Zustand widerspiegelt. Alle inaktiven `tabpanel` Elemente müssen für alle Benutzer verborgen werden. Dies wird am häufigsten durch Verwendung von CSS's `display: none` erreicht.

Sehen Sie den Artikel zur [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) für weitere spezifische Informationen zur Verwendung dieser Rolle.

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzu, um einem `tabpanel` zu erlauben, den Fokus zu erhalten, ohne das `tabpanel` in die Tastatur-Fokusreihenfolge der Seite aufzunehmen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, optimalerweise unter Verwendung der CSS {{CSSXref(':focus')}} Pseudoklasse, damit Tastaturbenutzer erkennen, dass es eine Fokusänderung gab, und sie sich bewusst sind, welcher Inhalt derzeit den Fokus hat.

Karussells können mit diesem Tab-Muster erstellt werden: Eine Folien-Auswahlsteuerung kann als `tabs` in einer `tablist` mit der Folie als `tabpanel` Element markiert werden.

### Zugehörige Rollen und Attribute

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanel`
- [`tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : Gruppe von `tab` Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Bietet einen zugänglichen Namen. Verweist auf das `tab` Element, das das Panel steuert
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Sollte auf den erforderlichen `tab` Elementen verwendet werden, wenn eine mehrfach auswählbare `tablist` verwendet wird.

### Tastaturinteraktionen

Sehen Sie die [Tastaturinteraktionen für `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role#keyboard_interactions) in der Definition der [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) Rolle.

## Beispiel

Sehen Sie das [Beispiel für `tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA `tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [Beispiel: Tabs mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Tabs mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) - W3C
