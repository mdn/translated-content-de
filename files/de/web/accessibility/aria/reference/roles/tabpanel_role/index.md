---
title: "ARIA: tabpanel-Rolle"
short-title: tabpanel
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: be161fc654b6a638ddbcca733c17c4a083e23778
---

Das ARIA-`tabpanel` ist ein Container für die Ressourcen geschichteter Inhalte, die einem `tab` zugeordnet sind.

## Beschreibung

Die `tabpanel`-Rolle gibt an, dass das Element ein Container für die Ressourcen ist, die einer [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) zugeordnet sind, wobei jedes `tab` in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Tab-Oberfläche, einem gängigen Nutzungsmuster, bei dem eine Gruppe visueller Tabs einen schnellen Wechsel zwischen mehreren geschichteten Ansichten ermöglicht. Jeder Tab wird mit der `tab`-Rolle als solcher definiert, und diese Tabs sind in einem Element mit der `tablist`-Rolle enthalten. Die `tablist` wird häufig visuell über oder neben einem Inhaltsbereich positioniert, der die zugehörigen Tabpanels enthält. Das `tabpanel` ist die Rolle des Containers für jeden Inhaltsbereich, der einem entsprechenden `tab` in der `tablist` der Tab-Oberfläche zugeordnet ist.

In vielen Tab-Oberflächen ist jeweils nur ein einzelnes `tabpanel` sichtbar. Einige Oberflächen können jedoch erfordern, dass mehrere Tabpanels gleichzeitig angezeigt werden. In diesen Fällen würde die `tablist` mit dem Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) versehen, und die `tab`-Elemente würden dann das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) verwenden, um anzugeben, ob das zugehörige `tabpanel` sichtbar ist oder nicht. Der ausgewählte Zustand des Tabs würde stattdessen verwendet, um anzugeben, welches Tabpanel aktuell das „aktive“ Panel ist. Dies könnte beispielsweise angeben, zu welchem Tabpanel der Tastaturfokus wechseln würde, wenn jemand die Taste <kbd>Tab</kbd> drückt, während der Fokus auf einem Tab innerhalb der mehrfach auswählbaren `tablist` liegt.

In Tab-Oberflächen mit Einzelauswahl wird nur das `tabpanel` angezeigt, das dem aktuell ausgewählten Tab zugeordnet ist. Alle anderen `tabpanel`-Elemente, die den nicht ausgewählten Tabs zugeordnet sind, müssen vor Benutzern verborgen werden. Wenn sich also die Tab-Auswahl ändert, ändert sich auch das angezeigte Tabpanel, während das zuvor angezeigte Tabpanel verborgen wird.

In Tab-Oberflächen mit Mehrfachauswahl können mehrere `tabpanel`-Elemente angezeigt werden, entsprechend dem erweiterten Zustand ihrer zugeordneten `tab`-Elemente.

Tabs fungieren nicht als Ankerlinks zu einzelnen Panels — und bei der Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch zum neu angezeigten `tabpanel` wechseln. Eine Tab-Oberfläche kann zwar schrittweise auf Grundlage eines zugrunde liegenden Markup-Musters von seiteninternen Hyperlinks erweitert werden, die auf die zugehörigen Inhaltsabschnitte verweisen; wenn JavaScript verwendet wird, um diese Elemente in eine Tab-Oberfläche umzuwandeln, sollte jedoch das Standardverhalten der Hyperlinks verhindert werden. Idealerweise kann dies durch das Entfernen oder Ändern des `href`-Attributs erfolgen, da dies zusätzlich den Vorteil hat, die hyperlinkspezifischen Menüeinträge aus dem Browser-Kontextmenü des Elements zu entfernen.

Wenn sich der Tastaturfokus auf einer `tablist` oder auf einem `tab` innerhalb der `tablist` befindet, sollte die Taste <kbd>Tab</kbd> so programmiert sein, dass sie vom fokussierten Tab — der möglicherweise ausgewählt ist oder nicht — zum `tabpanel` wechselt, das den aktuell ausgewählten Tab darstellt.

Jedes `tab` in einer `tablist` kann als Beschriftung für sein entsprechendes `tabpanel` dienen. Fügen Sie die `id` jedes `tab` als Wert für das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) jedes `tabpanel` hinzu.

Sie können außerdem optional jedes `tabpanel` seinem zugehörigen `tab` zuordnen, indem Sie die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `tabpanel` als Wert des Attributs [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) des `tab` angeben.

Wenn eine Tab-Oberfläche initialisiert wird, wird ein `tabpanel` angezeigt und sein zugehöriges `tab` wird so gestaltet, dass es aktiv erscheint und seinen programmatischen Zustand widerspiegelt. Alle inaktiven `tabpanel`-Elemente müssen für alle Benutzer verborgen sein. Dies wird am häufigsten durch die Verwendung von CSS `display: none` erreicht.

Weitere Informationen speziell zur Verwendung dieser Rolle finden Sie im Artikel zur [ARIA-`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ein, damit ein `tabpanel` den Fokus erhalten kann, ohne das `tabpanel` in die Reihenfolge des Tastaturfokus der Seite aufzunehmen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, optimalerweise mithilfe der CSS-Pseudoklasse {{CSSXref(':focus')}}, damit Tastaturbenutzer erkennen, dass sich der Fokus geändert hat, und wissen, welche Inhalte aktuell den Fokus haben.

Karussells können mithilfe dieses Tab-Musters erstellt werden: Die Steuerelemente zur Folienauswahl können als `tabs` in einer `tablist` ausgezeichnet werden, wobei die Folie durch ein `tabpanel`-Element dargestellt wird.

Wenn ein Tabpanel leer ist (beispielsweise weil seine Daten noch geladen werden oder der Datensatz leer ist), gibt es drei Optionen:

- Lassen Sie das leere Panel mit `tabindex="0"` zugänglich und fokussierbar und erhalten Sie seinen zugänglichen Namen.
- Rendern Sie Inhalte, die den Zustand erklären, etwa „Wird geladen …“ oder „Keine Ergebnisse“.
- Entfernen Sie den Tab und das Panel aus dem DOM.

Es gibt keine ARIA-Anforderung speziell für leere Panels. Die Entscheidung zwischen diesen Ansätzen ist in erster Linie eine Produktdesign-Entscheidung. Vermeiden Sie im Allgemeinen leere Panels, da sie sowohl für sehende Benutzer als auch für Benutzer von Screenreadern verwirrend sind (Screenreader können den Namen des Panels ankündigen, worauf nichts folgt). Das Entfernen des Tabs und des Panels vermeidet ein zusätzliches Element, an dem vorbeinavigiert werden muss, kann aber verwirrend sein, wenn Benutzer erwarten, dass dieser Tab existiert (z. B. weil derselbe Satz von Tabs mehrfach erschienen ist), oder wenn der Tab später erscheint (z. B. weil er noch geladen wird).

### Zugehörige Rollen und Attribute

- [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanel`
- [`tablist`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Stellt einen zugänglichen Namen bereit. Verweist auf das `tab`-Element, das das Panel steuert.
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
