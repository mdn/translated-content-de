---
title: "ARIA: tabpanel-Rolle"
short-title: tabpanel
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: d9b48f268f04264e420388135f53db136e5d9272
---

Das ARIA-`tabpanel` ist ein Container für die Ressourcen geschichteter Inhalte, die mit einem `tab` verknüpft sind.

## Beschreibung

Die `tabpanel`-Rolle zeigt an, dass das Element ein Container für die Ressourcen ist, die mit einer [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) verknüpft sind, wobei jeder `tab` in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Tab-Oberfläche, einem häufigen Muster der Benutzererfahrung, bei dem eine Gruppe visueller Tabs ein schnelles Wechseln zwischen mehreren geschichteten Ansichten ermöglicht. Jeder Tab wird mit der `tab`-Rolle als solcher definiert, und diese Tabs sind in einem Element mit der `tablist`-Rolle enthalten. Die `tablist` wird häufig visuell oberhalb oder seitlich eines Inhaltsbereichs positioniert, der die zugehörigen Tabpanels enthält. Das `tabpanel` ist die Rolle des Containers für jeden Inhaltsbereich, der mit einem entsprechenden `tab` in der `tablist` der Tab-Oberfläche verknüpft ist.

In vielen Tab-Oberflächen ist jeweils nur ein einzelnes `tabpanel` sichtbar. Einige Oberflächen können jedoch erfordern, dass mehrere Tabpanels gleichzeitig angezeigt werden. In diesen Fällen würde die `tablist` mit dem Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) versehen, und die `tab`-Elemente würden dann das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) verwenden, um anzugeben, ob das zugehörige `tabpanel` sichtbar ist oder nicht. Der ausgewählte Zustand des Tabs würde stattdessen verwendet, um anzugeben, welches Tabpanel aktuell das „aktive“ Panel ist. Beispielsweise könnte dies angeben, zu welchem Tabpanel der Tastaturfokus wechseln würde, wenn eine Person die Taste <kbd>Tab</kbd> drückt, während ein Tab innerhalb der mehrfach auswählbaren `tablist` den Fokus hat.

In Tab-Oberflächen mit Einfachauswahl wird nur das `tabpanel` angezeigt, das mit dem aktuell ausgewählten Tab verknüpft ist. Alle anderen `tabpanel`-Elemente, die mit den nicht ausgewählten Tabs verknüpft sind, müssen für Benutzerinnen und Benutzer verborgen werden. Wenn sich die Tab-Auswahl ändert, ändert sich daher auch das angezeigte Tabpanel, während das zuvor angezeigte Tabpanel anschließend verborgen wird.

In Tab-Oberflächen mit Mehrfachauswahl können mehrere `tabpanel`-Elemente angezeigt werden, entsprechend dem erweiterten Zustand ihrer zugehörigen `tab`-Elemente.

Tabs fungieren nicht als Ankerlinks zu einzelnen Panels — und bei der Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch zum neu angezeigten `tabpanel` wechseln. Zwar kann eine Tab-Oberfläche schrittweise auf Basis eines zugrunde liegenden Markup-Musters von seiteninternen Hyperlinks erweitert werden, die auf die zugehörigen Inhaltsabschnitte verweisen, aber wenn JavaScript verwendet wird, um diese Elemente in eine Tab-Oberfläche umzuwandeln, sollte das Standardverhalten der Hyperlinks verhindert werden. Idealerweise kann dies durch Entfernen oder Ändern des `href`-Attributs erfolgen, da dies zusätzlich den Vorteil hat, dass hyperlink-spezifische Menüeinträge aus dem Browser-Kontextmenü des Elements entfernt werden.

Wenn sich der Tastaturfokus auf einer `tablist` oder einem `tab` innerhalb der `tablist` befindet, sollte die Taste <kbd>Tab</kbd> so programmiert sein, dass sie vom fokussierten Tab — der möglicherweise ausgewählt ist oder auch nicht — zum `tabpanel` wechselt, das den aktuell ausgewählten Tab repräsentiert.

Jeder `tab` in einer `tablist` kann als Beschriftung für sein entsprechendes `tabpanel` dienen. Schließen Sie die `id` jedes `tab` als Wert für das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) jedes `tabpanel` ein.

Optional können Sie jedes `tabpanel` mit seinem zugehörigen `tab` verknüpfen, indem Sie die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `tabpanel` als Wert für das Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) des `tab` einschließen.

Wenn eine Tab-Oberfläche initialisiert wird, wird ein `tabpanel` angezeigt und sein zugehöriger `tab` wird so gestaltet, dass er anzeigt, dass er aktiv ist, was seinen programmatischen Zustand widerspiegelt. Alle inaktiven `tabpanel`-Elemente müssen für alle Benutzerinnen und Benutzer verborgen werden. Dies wird am häufigsten durch die Verwendung von CSS `display: none` erreicht.

Weitere Informationen zur Verwendung dieser Rolle finden Sie im Artikel zur [ARIA-`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ein, damit ein `tabpanel` den Fokus erhalten kann, ohne das `tabpanel` in die Tastaturfokusreihenfolge der Seite aufzunehmen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, optimalerweise mithilfe der CSS-Pseudoklasse {{CSSXref(':focus')}}, damit Tastaturnutzerinnen und Tastaturnutzer wissen, dass sich der Fokus geändert hat, und erkennen können, welche Inhalte aktuell den Fokus haben.

Karussells können mit diesem Tab-Muster erstellt werden: Steuerelemente zur Folienauswahl können als `tabs` in einer `tablist` ausgezeichnet werden, wobei die Folie durch ein `tabpanel`-Element repräsentiert wird.

### Zugehörige Rollen und Attribute

- [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanel`.
- [`tablist`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Stellt einen barrierefreien Namen bereit. Verweist auf das `tab`-Element, das das Panel steuert.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Sollte auf den erforderlichen `tab`-Elementen verwendet werden, wenn eine mehrfach auswählbare `tablist` verwendet wird.

### Tastaturinteraktionen

Siehe die [Tastaturinteraktionen von `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role#keyboard_interactions) in der Rollendefinition von [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role).

## Beispiel

Siehe das [Beispiel für `tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Rollendefinition von [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA-`tablist`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [Beispiel: Tabs mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) – W3C
- [Beispiel: Tabs mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) – W3C
