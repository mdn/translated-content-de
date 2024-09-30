---
title: "ARIA: tabpanel-Rolle"
slug: Web/Accessibility/ARIA/Roles/tabpanel_role
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{AccessibilitySidebar}}

Die ARIA `tabpanel` ist ein Container für die Ressourcen des geschichteten Inhalts, der mit einem `tab` verbunden ist.

## Beschreibung

Die `tabpanel`-Rolle zeigt an, dass das Element ein Container für die Ressourcen ist, die mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle verbunden sind, wobei jedes `tab` innerhalb einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Tab-Schnittstelle, ein häufig verwendetes Benutzererlebnis-Muster, bei dem eine Gruppe von visuellen Tabs das schnelle Wechseln zwischen mehreren geschichteten Ansichten ermöglicht. Jedes Tab wird als solches mit der `tab`-Rolle definiert, und diese Tabs sind innerhalb eines Elements mit der `tablist`-Rolle enthalten. Die `tablist` ist oft visuell über oder neben einem Inhaltsbereich positioniert und enthält die zugehörigen Tabpanels. Die `tabpanel`-Rolle ist der Container für jede Inhaltseinheit, die in einer Tab-Schnittstelle mit einem entsprechenden `tab` in der `tablist` verbunden ist.

In vielen Tab-Schnittstellen wird jeweils nur ein `tabpanel` sichtbar sein. Einige Schnittstellen erfordern jedoch möglicherweise die gleichzeitige Anzeige mehrerer Tab-Panels. In diesen Fällen würde der `tablist` das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attribut zugewiesen und die `tab`-Elemente würden dann das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attribut verwenden, um anzuzeigen, ob das zugehörige `tabpanel` sichtbar war oder nicht. Der ausgewählte Zustand des Tabs würde stattdessen verwendet, um anzuzeigen, welches Tabpanel das derzeit 'aktive' Panel ist. Dies könnte beispielsweise anzeigen, auf welches Tabpanel der Tastaturfokus wechseln würde, wenn jemand die <kbd>Tab</kbd>-Taste drückt, während ein Tab innerhalb der Multi-Select-`tablist` fokussiert ist.

In Einzelauswahl-Tab-Schnittstellen wird nur das `tabpanel` angezeigt, das mit dem derzeit ausgewählten Tab verbunden ist. Alle anderen `tabpanel`-Elemente, die mit den nicht ausgewählten Tabs verbunden sind, müssen vor Benutzern versteckt werden. Wenn sich also die Tab-Auswahl ändert, würde sich auch das angezeigte Tabpanel ändern, während das zuvor angezeigte Tabpanel dann versteckt würde.

In Mehrfachauswahl-Tab-Schnittstellen können mehrere `tabpanel`-Elemente angezeigt werden, die dem erweiterten Zustand ihrer zugehörigen `tab`-Elemente entsprechen.

Tabs fungieren nicht als Ankerlinks zu einzelnen Panels – und bei Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch auf das neu angezeigte `tabpanel` verschoben werden. Während eine Tab-Schnittstelle schrittweise auf einem zugrunde liegenden Markup-Muster von Seitenhyperlinks verbessert werden kann, die auf ihre zugehörigen Inhaltabschnitte verweisen, sollte das Standardverhalten der Hyperlinks bei Verwendung von JavaScript zur Umwandlung dieser Elemente in eine Tab-Schnittstelle verhindert werden. Idealerweise könnte dies durch Entfernen oder Ändern des `href`-Attributs erfolgen, da dies den zusätzlichen Vorteil hätte, die hyperlink-spezifischen Menüeinträge aus dem Kontextmenü des Browsers des Elements zu entfernen.

Wenn der Tastaturfokus auf einer `tablist` oder einem `tab` innerhalb der `tablist` liegt, sollte die <kbd>Tab</kbd>-Taste programmiert werden, um vom fokussierten Tab – das möglicherweise nicht das ausgewählte Tab ist – zum `tabpanel` zu wechseln, das das derzeit ausgewählte Tab darstellt.

Jedes `tab` in einer `tablist` kann als Beschriftung für sein entsprechendes `tabpanel` dienen. Schließen Sie die `id` jedes `tab` als Wert für das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)-Attribut jedes `tabpanel` ein.

Sie können auch optional jedes `tabpanel` mit seinem zugehörigen `tab` verbinden, indem Sie die [`id`](/de/docs/Web/HTML/Global_attributes#id) des `tabpanel` als Wert des `aria-controls`-Attributs des `tab` einfügen.

Wenn eine Tab-Schnittstelle initialisiert wird, wird ein `tabpanel` angezeigt und sein zugehöriges `tab` ist so gestaltet, dass es aktiv ist und seinen programmatischen Zustand widerspiegelt. Alle inaktiven `tabpanel`-Elemente müssen vor allen Benutzern verborgen sein. Dies wird am häufigsten durch die Verwendung von CSSs `display: none` erreicht.

Siehe den Artikel [ARIA `tab` role](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) für weitere Informationen zur Verwendung dieser Rolle.

Schließen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Global_attributes/tabindex) ein, um zu ermöglichen, dass ein `tabpanel` den Fokus erhält, ohne dass das `tabpanel` in die Tastaturfokus-Reihenfolge der Seite aufgenommen wird.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, optimal unter Verwendung der CSS {{CSSXref(':focus')}} Pseudo-Klasse, sodass Tastaturnutzer wissen, dass sich der Fokus geändert hat und erkennen, welcher Inhalt derzeit den Fokus hat.

Karussells können mit diesem Tab-Muster erstellt werden: Eine Folienspicker-Steuerung kann als `tabs` in einer `tablist` ausgezeichnet werden, wobei die Folie durch ein `tabpanel`-Element dargestellt wird.

### Zugehörige Rollen und Attribute

- [`tab` role](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanel`
- [`tablist` role](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Bietet einen zugänglichen Namen. Verweist auf das `tab`-Element, das das Panel steuert
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Sollte auf den erforderlichen `tab`-Elementen verwendet werden, wenn eine multiselektionale `tablist` verwendet wird.

### Tastaturinteraktionen

Siehe die [`tablist`-Tastaturinteraktionen](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role#keyboard_interactions) in der Definition der [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)-Rolle.

## Beispiel

Siehe das [Beispiel zu `tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `tab` role](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [ARIA `tablist` role](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [Beispiel: Tabs mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Tabs mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
