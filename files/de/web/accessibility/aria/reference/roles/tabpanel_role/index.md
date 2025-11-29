---
title: "ARIA: tabpanel-Rolle"
short-title: tabpanel
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das ARIA `tabpanel` ist ein Container für die Ressourcen von geschichteten Inhalten, die mit einem `tab` verbunden sind.

## Beschreibung

Die `tabpanel`-Rolle zeigt an, dass das Element ein Container für die Ressourcen ist, die mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle verbunden sind, wobei jeder `tab` in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Tab-Oberfläche, eines häufigen Benutzererfahrungsmusters, bei dem eine Gruppe visueller Tabs einen schnellen Wechsel zwischen mehreren geschichteten Ansichten ermöglicht. Jeder Tab wird als solcher mit der `tab`-Rolle definiert, und diese Tabs sind in einem Element mit der `tablist`-Rolle enthalten. Die `tablist` ist oft visuell über oder neben einem Inhaltsbereich positioniert, der die zugehörigen `tabpanels` enthält. Die `tabpanel`-Rolle ist der Container für jedes Paneel von Inhalten, das mit einem entsprechenden `tab` in der Tab-Oberfläche `tablist` verbunden ist.

In vielen Tab-Oberflächen wird nur ein einziges `tabpanel` gleichzeitig sichtbar sein. Einige Oberflächen erfordern jedoch möglicherweise, dass mehrere Tab-Panels gleichzeitig angezeigt werden. In diesen Fällen würde der `tablist` das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) erhalten, und die `tab`-Elemente würden dann das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) verwenden, um anzugeben, ob das zugehörige `tabpanel` sichtbar ist oder nicht. Der ausgewählte Zustand des Tabs würde stattdessen verwendet, um anzuzeigen, welches Tabpanel aktuell das 'aktive' Panel ist. Beispielsweise könnte dies anzeigen, zu welchem `tabpanel` der Tastaturfokus wechseln würde, wenn jemand die <kbd>Tab</kbd>-Taste drückt, wenn der Fokus auf einem Tab innerhalb der multiselektiven `tablist` liegt.

In einselektiven Tab-Oberflächen wird nur das `tabpanel` angezeigt, das dem aktuell ausgewählten Tab zugeordnet ist. Alle anderen mit den nicht ausgewählten Tabs verknüpften `tabpanel`-Elemente müssen vor den Benutzern verborgen werden. Wenn sich die Tab-Auswahl ändert, würde sich auch das angezeigte `tabpanel` ändern, während das zuvor angezeigte `tabpanel` dann verborgen würde.

In multiselektiven Tab-Oberflächen können mehrere `tabpanel`-Elemente angezeigt werden, die dem erweiterten Zustand ihrer zugehörigen `tab`-Elemente entsprechen.

Tabs fungieren nicht als Ankerlinks zu den einzelnen Paneelen — und bei Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element verbleiben und nicht automatisch zu dem neu angezeigten `tabpanel` wechseln. Während eine Tab-Oberfläche basierend auf einem zugrunde liegenden Markup-Muster von In-Seiten-Hyperlinks, die auf ihre zugehörigen Inhaltsabschnitte verweisen, schrittweise verbessert werden kann, sollte das Standardverhalten der Hyperlinks verhindert werden, wenn JavaScript verwendet wird, um diese Elemente in eine geteilte Benutzeroberfläche zu verwandeln. Idealerweise könnte dies durch Entfernen oder Modifizieren des `href`-Attributs geschehen, da dies den zusätzlichen Vorteil hätte, die hyperlink-spezifischen Menüpunkte aus dem Kontextmenü des Browsers des Elements zu entfernen.

Wenn der Tastaturfokus auf einer `tablist` oder einem `tab` innerhalb der `tablist` liegt, sollte die <kbd>Tab</kbd>-Taste programmiert werden, um von dem fokussierten Tab — der möglicherweise nicht der ausgewählte Tab ist — zu dem `tabpanel` zu wechseln, das den aktuell ausgewählten Tab darstellt.

Jeder `tab` in einer `tablist` kann als Beschriftung für das zugehörige `tabpanel` dienen. Geben Sie die `id` jedes `tab` als Wert für jedes `tabpanel`-Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an.

Sie können jedes `tabpanel` optional mit seinem zugehörigen `tab` verknüpfen, indem Sie die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `tabpanel` als Wert des `tab`-Attributs [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) einfügen.

Wenn eine Tab-Oberfläche initialisiert wird, wird ein `tabpanel` angezeigt und sein zugehöriger `tab` wird so gestaltet, dass er anzeigt, dass er aktiv ist, was seinem programmatischen Zustand entspricht. Alle inaktiven `tabpanel`-Elemente müssen vor allen Benutzern verborgen werden. Dies wird am häufigsten durch Verwendung von CSSs `display: none` erreicht.

Sehen Sie im Artikel zur [ARIA `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) nach, um weitere Informationen zur Verwendung dieser Rolle zu erhalten.

Schließen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ein, um es einem `tabpanel` zu ermöglichen, den Fokus zu erhalten, ohne das `tabpanel` in der Tastaturfokus-Reihenfolge der Seite aufzunehmen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, optimalerweise mit der CSS {{CSSXref(':focus')}}-Pseudoklasse, damit Tastaturnutzer wissen, dass es eine Veränderung im Fokus gibt und sie sich darüber im Klaren sind, welcher Inhalt derzeit im Fokus steht.

Karusselle können mit diesem Tab-Muster erstellt werden: Ein Schieberegler-Steuerelement kann als `tabs` in einer `tablist` mit der Folie, die durch ein `tabpanel`-Element dargestellt wird, ausgezeichnet werden.

### Zugehörige Rollen und Attribute

- [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanel`.
- [`tablist`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Bietet einen zugänglichen Namen. Verweist auf das `tab`-Element, das das Panel steuert.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Sollte bei den notwendigen `tab`-Elementen verwendet werden, wenn eine multiselektive `tablist` verwendet wird.

### Tastaturinteraktionen

Sehen Sie sich die [Tastaturinteraktionen der `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role#keyboard_interactions) in der Definition der [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)-Rolle an.

## Beispiel

Siehe das [Beispiel für `tabpanel`, `tab`, und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA `tablist`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [Beispiel: Tabs mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Tabs mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html)-W3C
