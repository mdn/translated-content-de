---
title: "ARIA: tabpanel Rolle"
slug: Web/Accessibility/ARIA/Roles/tabpanel_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Der ARIA `tabpanel` ist ein Container für die Ressourcen des geschichteten Inhalts, der mit einem `tab` verbunden ist.

## Beschreibung

Die Rolle `tabpanel` zeigt an, dass das Element ein Container für die Ressourcen ist, die mit der Rolle [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) verbunden sind, wobei jeder `tab` in einem [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Registerkartenoberfläche, einem häufigen Nutzungsmuster, bei dem eine Gruppe von visuellen Registerkarten das schnelle Umschalten zwischen mehreren geschichteten Ansichten ermöglicht. Jede Registerkarte wird mit der Rolle `tab` definiert, und diese Registerkarten sind in einem Element mit der Rolle `tablist` enthalten. Der `tablist` ist oft visuell oberhalb oder seitlich eines Inhaltsbereichs positioniert und enthält die zugehörigen `tabpanels`. Die `tabpanel`-Rolle ist der Container für jedes Inhaltsfenster, das mit einem entsprechenden `tab` im `tablist` der Registerkartenoberfläche verbunden ist.

In vielen Registerkartenoberflächen wird jeweils nur ein `tabpanel` angezeigt. Einige Oberflächen erfordern jedoch möglicherweise, dass mehrere Registerkartenfenster gleichzeitig angezeigt werden. In diesen Fällen würde dem `tablist` das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) zugewiesen, und die `tab`-Elemente würden dann das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) verwenden, um anzuzeigen, ob das zugehörige `tabpanel` sichtbar ist oder nicht. Der ausgewählte Status der Registerkarte würde stattdessen verwendet, um anzuzeigen, welches `tabpanel` das aktuell 'aktive' Panel ist. Beispielsweise könnte dies anzeigen, zu welchem `tabpanel` der Tastaturfokus wechseln würde, wenn jemand die <kbd>tab</kbd>-Taste drückt, während er auf einer Registerkarte innerhalb des Mehrfachauswahl-`tablist` fokussiert ist.

In Einzelwahl-Registerkartenoberflächen wird nur das `tabpanel` angezeigt, das mit der aktuell ausgewählten Registerkarte verbunden ist. Alle anderen `tabpanel`-Elemente, die mit den nicht ausgewählten Registerkarten verbunden sind, müssen für die Benutzer verborgen sein. Wenn sich also die Registerkartenauswahl ändert, würde sich auch das angezeigte `tabpanel` ändern, während das zuvor angezeigte `tabpanel` dann verborgen wird.

In Mehrfachauswahl-Registerkartenoberflächen können mehrere `tabpanel`-Elemente angezeigt werden, die dem erweiterten Zustand ihrer zugehörigen `tab`-Elemente entsprechen.

Registerkarten fungieren nicht als Ankerlinks zu einzelnen Panels — und bei Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch zum neu angezeigten `tabpanel` wechseln. Während eine Registerkartenoberfläche schrittweise basierend auf einem zugrunde liegenden Markup-Muster von In-Page-Hyperlinks, die zu ihren zugehörigen Inhaltsabschnitten verweisen, verbessert werden kann, sollte bei Verwendung von JavaScript zur Umwandlung dieser Elemente in eine Registerkartenoberfläche das Standardverhalten der Hyperlinks verhindert werden. Idealerweise könnte dies durch Entfernen oder Ändern des `href`-Attributs erfolgen, da dies den zusätzlichen Vorteil hätte, die hyperlink-spezifischen Menüeinträge aus dem Kontextmenü des Browsers zu entfernen.

Wenn der Tastaturfokus auf einem `tablist` oder einem `tab` innerhalb des `tablist` liegt, sollte die <kbd>Tab</kbd>-Taste so programmiert werden, dass sie vom fokussierten `tab` — der möglicherweise nicht die ausgewählte Registerkarte ist — zum `tabpanel` wechselt, das die aktuell ausgewählte Registerkarte darstellt.

Jedes `tab` in einem `tablist` kann als Bezeichnung für das entsprechende `tabpanel` dienen. Fügen Sie die `id` jeder `tab` als Wert für das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) jedes `tabpanel` hinzu.

Sie können auch optional jedes `tabpanel` mit seinem zugehörigen `tab` verknüpfen, indem Sie die [`id`](/de/docs/Web/HTML/Global_attributes/id) des `tabpanel` als Wert des Attributs [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) des `tab` hinzufügen.

Bei der Initialisierung einer Registerkartenoberfläche wird ein `tabpanel` angezeigt und das zugehörige `tab` wird so gestaltet, dass es aktiv ist und seinen programmatischen Zustand wiedergibt. Alle inaktiven `tabpanel`-Elemente müssen für alle Benutzer verborgen werden. Dies wird am häufigsten durch die Verwendung von CSSs `display: none` erreicht.

Siehe den Artikel zur [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) für weitere Informationen zu dieser Rolle.

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um einem `tabpanel` zu ermöglichen, den Fokus zu erhalten, ohne das `tabpanel` in die Fokusreihenfolge der Seite aufzunehmen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, optimal durch Verwendung der CSS-Pseudoklasse {{CSSXref(':focus')}}, damit Tastaturnutzer wissen, dass sich der Fokus geändert hat, und sich bewusst sind, welcher Inhalt derzeit den Fokus hat.

Karussells können mit diesem Registerkartenmuster erstellt werden: Ein Folienauswahl-Steuerungselement kann als `tabs` in einem `tablist` mit der Folie dargestellt durch ein `tabpanel`-Element markiert werden.

### Zugehörige Rollen und Attribute

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanel`
- [`tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Bietet einen zugänglichen Namen. Referenziert das `tab`-Element, das das Panel steuert
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Sollte auf den erforderlichen `tab`-Elementen verwendet werden, wenn ein selektierbarer `tablist` verwendet wird.

### Tastaturinteraktionen

Siehe die [Tastaturinteraktionen für `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role#keyboard_interactions) in der Definition der Rolle [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role).

## Beispiel

Siehe das [Beispiel für `tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in der Definition der Rolle [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [ARIA `tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [Beispiel: Registerkarten mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Registerkarten mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
