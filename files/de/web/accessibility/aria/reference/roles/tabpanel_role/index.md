---
title: "ARIA: tabpanel Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/tabpanel_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das ARIA `tabpanel` ist ein Container für die Ressourcen von geschichtetem Inhalt, der mit einem `tab` verknüpft ist.

## Beschreibung

Die `tabpanel`-Rolle zeigt an, dass das Element ein Container für die Ressourcen ist, die mit einer [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle verknüpft sind, wobei jeder `tab` in einer [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) enthalten ist.

Ein `tabpanel` ist Teil einer Registerkarten-Schnittstelle, einem gängigen Nutzungsmuster, bei dem eine Gruppe von visuellen Registerkarten ein schnelles Umschalten zwischen mehreren geschichteten Ansichten ermöglicht. Jede Registerkarte wird mit der `tab`-Rolle definiert, und diese Registerkarten sind in einem Element mit der `tablist`-Rolle enthalten. Die `tablist` ist oft visuell über oder neben einem Inhaltsbereich positioniert, der die zugehörigen `tabpanel`-Elemente enthält. Die `tabpanel`-Rolle ist der Container für jedes Inhaltsfeld, das mit einem entsprechenden `tab` in der `tablist` der Registerkartenschnittstelle verknüpft ist.

In vielen Registerkarten-Schnittstellen ist zu einem Zeitpunkt nur ein einziges `tabpanel` sichtbar. In einigen Schnittstellen können jedoch mehrere `tabpanel`-Elemente gleichzeitig angezeigt werden. In solchen Fällen würde die `tablist` das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) erhalten, und die `tab`-Elemente würden dann das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) verwenden, um anzuzeigen, ob ihr zugeordnetes `tabpanel` sichtbar ist oder nicht. Der ausgewählte Zustand der Registerkarte würde stattdessen verwendet, um anzuzeigen, welches `tabpanel` das derzeit 'aktive' Panel ist. Zum Beispiel könnte dies anzeigen, auf welches `tabpanel` der Tastaturfokus wechseln würde, wenn jemand die <kbd>Tab</kbd>-Taste drücken würde, während er auf eine Registerkarte innerhalb der Mehrfachauswahl-`tablist` fokussiert ist.

In Einzel-Auswahl-Registerkartenschnittstellen wird nur das `tabpanel` angezeigt, das mit der aktuell ausgewählten Registerkarte verknüpft ist. Alle anderen `tabpanel`-Elemente, die mit den nicht ausgewählten Registerkarten verknüpft sind, müssen vor den Benutzern verborgen werden. Beim Ändern der Registerkartenauswahl ändert sich somit auch das angezeigte `tabpanel`, während das zuvor angezeigte `tabpanel` dann ausgeblendet wird.

In Mehrfachauswahl-Registerkartenschnittstellen können mehrere `tabpanel`-Elemente angezeigt werden, die den erweiterten Zustand ihrer zugehörigen `tab`-Elemente widerspiegeln.

Registerkarten funktionieren nicht als Ankerlinks zu einzelnen Panels – und bei der Aktivierung sollte der Tastaturfokus auf dem aktuellen `tab`-Element bleiben und nicht automatisch auf das neu angezeigte `tabpanel` verschoben werden. Während eine Registerkartenschnittstelle progressiv auf einem zugrunde liegenden Markup-Muster von Seitenverweisen, die auf ihre entsprechenden Inhaltsabschnitte zeigen, erweitert werden kann, sollte beim Einsatz von JavaScript, um diese Elemente in eine Registerkartenschnittstelle zu verwandeln, das Standardverhalten der Hyperlinks verhindert werden. Idealerweise könnte dies durch Entfernen oder Ändern des `href`-Attributs erreicht werden, da dies den zusätzlichen Vorteil hätte, die hyperlnkt-spezifischen Menüeinträge aus dem Kontextmenü des Browsers des Elements zu entfernen.

Wenn der Tastaturfokus auf einer `tablist` oder einem `tab` innerhalb der `tablist` liegt, sollte die <kbd>Tab</kbd>-Taste programmiert werden, um vom fokussierten `tab` – das möglicherweise oder möglicherweise nicht das ausgewählte `tab` ist – zu dem `tabpanel` zu wechseln, das die derzeit ausgewählte Registerkarte darstellt.

Jeder `tab` in einer `tablist` kann als Beschriftung für sein entsprechendes `tabpanel` dienen. Fügen Sie die `id` jeder Registerkarte als Wert für das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut jedes `tabpanel`-Elements ein.

Sie können auch optional jedes `tabpanel` mit seiner zugehörigen Registerkarte verknüpfen, indem Sie die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des `tabpanel` als Wert des [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attributs der Registerkarte einfügen.

Wenn eine Registerkartenschnittstelle initialisiert wird, wird ein `tabpanel` angezeigt und seine zugehörige Registerkarte ist so gestaltet, dass sie anzeigt, dass sie aktiv ist, um ihren programmatischen Zustand widerzuspiegeln. Alle inaktiven `tabpanel`-Elemente müssen für alle Benutzer verborgen werden. Dies wird am häufigsten durch die Verwendung von `display: none` in CSS erreicht.

Siehe den Artikel zur [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) für weitere Informationen zur Verwendung dieser Rolle.

Fügen Sie [`tabindex="-1"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzu, um einem `tabpanel` das Fokussieren zu ermöglichen, ohne das `tabpanel` in die Tastaturfokus-Reihenfolge der Seite einzuschließen.

Stellen Sie sicher, dass Sie Stile für ein `tabpanel` definieren, wenn es den Fokus erhält, idealerweise unter Verwendung der CSS {{CSSXref(':focus')}}-Pseudoklasse, sodass Tastaturnutzer wissen, dass ein Fokuswechsel stattgefunden hat und sie sich bewusst sind, welcher Inhalt derzeit den Fokus hat.

Karussells können mit diesem Registerkartenmuster erstellt werden: Ein Folienauswahlelement kann als `tabs` in einer `tablist` markiert werden, wobei die Folie durch ein `tabpanel`-Element dargestellt wird.

### Zugehörige Rollen und Attribute

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Steuert die Sichtbarkeit des zugehörigen `tabpanel`
- [`tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
  - : Gruppe von `tab`-Elementen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Bietet einen zugänglichen Namen. Referenziert das `tab`-Element, das das Panel steuert
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Sollte auf den erforderlichen `tab`-Elementen verwendet werden, wenn eine mehrfache auswählbare `tablist` verwendet wird.

### Tastaturinteraktionen

Siehe die [Tastaturinteraktionen der `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role#keyboard_interactions) in der Definition der [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)-Rolle.

## Beispiel

Siehe das [Beispiel für `tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA `tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [ARIA `tablist` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)
- [Beispiel: Registerkarten mit automatischer Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Beispiel: Registerkarten mit manueller Aktivierung](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
