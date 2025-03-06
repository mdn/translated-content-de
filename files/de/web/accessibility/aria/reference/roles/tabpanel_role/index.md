---
title: "ARIA: Rolle `tabpanel`"
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das ARIA-`tabpanel` ist ein Container für die Ressourcen von geschichtetem Inhalt, der mit einem `tab` verbunden ist.

## Beschreibung

Die Rolle `tabpanel` gibt an, dass das Element ein Container für die Ressourcen ist, die mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle verbunden sind, wobei jeder `tab` in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Tab-Oberfläche, einem häufigen Benutzererfahrungsmuster, bei dem eine Gruppe von visuellen Tabs ein schnelles Wechseln zwischen mehreren geschichteten Ansichten ermöglicht. Jeder Tab wird als solcher mit der Rolle `tab` definiert, und diese Tabs befinden sich in einem Element mit der Rolle `tablist`. Die `tablist` ist oft visuell über oder neben einem Inhaltsbereich positioniert, der die zugehörigen Tabpanels enthält. Die Rolle `tabpanel` ist der Container für jedes Inhaltsfeld, das mit einem entsprechenden `tab` in der `tablist` der Tab-Oberfläche verbunden ist.

In vielen Tab-Oberflächen wird jeweils nur ein einziges `tabpanel` sichtbar sein. Allerdings können einige Oberflächen erfordern, dass mehrere Tabpanels gleichzeitig angezeigt werden. In diesen Fällen würde der `tablist` das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) zugewiesen, und die `tab`-Elemente würden dann das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) verwenden, um anzuzeigen, ob ihr zugehöriges `tabpanel` sichtbar ist oder nicht. Der ausgewählte Zustand des Tabs würde stattdessen verwendet werden, um anzuzeigen, welches Tabpanel das aktuell 'aktive' Paneel ist. Zum Beispiel könnte dies anzeigen, zu welchem Tabpanel der Tastaturfokus wechseln würde, wenn jemand die <kbd>tab</kbd>-Taste drückt, während ein Tab innerhalb der Multi-Select-`tablist` fokussiert ist.

In Einzelselektions-Tab-Oberflächen wird nur das `tabpanel` angezeigt, das mit dem aktuell ausgewählten Tab verbunden ist. Alle anderen `tabpanel`-Elemente, die mit den nicht ausgewählten Tabs verbunden sind, müssen vor den Benutzern verborgen sein. Wenn also der Tab-Wechsel erfolgt, würde sich auch das angezeigte Tabpanel ändern, während das vorher angezeigte Tabpanel dann verborgen wird.

In Multi-Select-Tab-Oberflächen können mehrere `tabpanel`-Elemente angezeigt werden, die dem erweiterten Zustand ihrer zugehörigen `tab`-Elemente entsprechen.

Tabs agieren nicht als Ankerlinks zu einzelnen Panels – und bei der Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch zum neu angezeigten `tabpanel` wechseln. Während eine Tab-Oberfläche progressiv verbessert werden kann, basierend auf einem zugrundeliegenden Markup-Muster von In-Page-Hyperlinks, die auf ihre zugeordneten Inhaltsbereiche verweisen, sollte das Standardverhalten der Hyperlinks verhindert werden, wenn JavaScript verwendet wird, um diese Elemente in eine Tab-Oberfläche zu verwandeln. Idealerweise könnte dies durch Entfernen oder Ändern des `href`-Attributes erfolgen, da dies den zusätzlichen Vorteil hätte, die hyperlink-spezifischen Menüpunkte aus dem Kontextmenü des Browsers zu entfernen.

Wenn der Tastaturfokus auf einer `tablist` oder einem `tab` innerhalb der `tablist` liegt, sollte die <kbd>Tab</kbd>-Taste so programmiert werden, dass sie vom fokussierten Tab – das möglicherweise nicht der ausgewählte Tab ist – zu dem `tabpanel` wechselt, das den aktuell ausgewählten Tab darstellt.

Jeder `tab` in einer `tablist` kann als Beschriftung für sein entsprechendes `tabpanel` dienen. Fügen Sie die `id` jedes `tabs` als Wert für das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut jedes `tabpanels` hinzu.

Sie können auch optional jedes `tabpanel` mit seinem zugehörigen `tab` assoziieren, indem Sie die [`id`](/de/docs/Web/HTML/Global_attributes/id) des `tabpanels` als Wert des [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attributs des `tabs` hinzufügen.

Wenn eine tabgesteuerte Oberfläche initialisiert wird, wird ein `tabpanel` angezeigt und sein zugeordneter `tab` wird so gestaltet, dass er anzeigt, dass er aktiv ist und seinen programmatischen Zustand widerspiegelt. Alle inaktiven `tabpanel`-Elemente müssen für alle Benutzer verborgen sein. Dies wird meistens durch die Verwendung von CSS's `display: none` erreicht.

Siehe den Artikel zur [ARIA-`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) für weitere Informationen zur Verwendung dieser Rolle.

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um einem `tabpanel` das Empfangen von Fokus zu ermöglichen, ohne das `tabpanel` in die Tastaturfokus-Reihenfolge der Seite aufzunehmen.

Stellen Sie sicher, dass Sie für ein `tabpanel`, das den Fokus erhält, Stile definieren, optimal mit der CSS-{{CSSXref(':focus')}}-Pseudoklasse, sodass Tastaturbenutzer wissen, dass sich der Fokus geändert hat und sie sich darüber bewusst sind, welcher Inhalt derzeit den Fokus hat.

Karussells können mit diesem Tab-Muster erstellt werden: Eine Foliensauswahlsteuerung kann als `tabs` in einer `tablist` mit der Folie, die durch ein `tabpanel`-Element dargestellt wird, ausgezeichnet werden.

### Zugehörige Rollen und Attribute

- [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanels`
- [`tablist`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Bietet einen zugänglichen Namen. Verweist auf das `tab`-Element, das das Panel steuert.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Sollte auf den benötigten `tab`-Elementen verwendet werden, wenn eine mehr auswählbare `tablist` verwendet wird.

### Tastaturinteraktionen

Siehe die [Tastaturinteraktionen der `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role#keyboard_interactions) in der Definition der [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)-Rolle.

## Beispiel

Siehe das Beispiel für [`tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA-`tablist`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [Beispiel: Tabs mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Tabs mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
