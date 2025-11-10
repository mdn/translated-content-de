---
title: "ARIA: tablist-Rolle"
short-title: tablist
slug: Web/Accessibility/ARIA/Reference/Roles/tablist_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `tablist`-Rolle identifiziert das Element, das als Container für eine Gruppe von `tabs` dient. Der Tab-Inhalt wird als `tabpanel`-Elemente bezeichnet.

## Beschreibung

Möglicherweise interagieren Sie im Moment mit einer Registerkarten-Oberfläche! Browser-Registerkarten ermöglichen es einem Benutzer, mehrere Webseiten in einem einzigen Fenster offen zu halten. Ein Klick auf eine Registerkarte in der `tablist` am oberen Rand des Browserfensters erlaubt es dem Benutzer, den zugehörigen Inhalt im Hauptinhaltsbereich, dem `tabpanel`, jeweils seitenweise darzustellen. Dies wird als "Tab-Designmuster" bezeichnet.

Beim Implementieren eines Tab-Designmusters werden die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), `tablist` und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verwendet.

Registerkarten sind eine Gruppe von gestaffelten Inhaltsabschnitten, bekannt als Tab-Panels, die jeweils nur ein Panel zur Zeit anzeigen. Jedes Tab-Panel hat ein zugehöriges `tab`-Element, das, wenn es aktiviert wird, das Panel anzeigt. Die Liste der Tab-Elemente ist entlang einer Kante des aktuell dargestellten Panels angeordnet, meist der oberen Kante, verschachtelt in einem `tablist`-Element.

Jede `tab` in einer `tablist` dient als Beschriftung für ein `tabpanel` und kann aktiviert werden, um dieses Panel anzuzeigen. Die `tablist` ist das enthaltene Element für die Gruppe der enthaltenen Tab-Elemente.

Wenn eine Oberfläche mit Registerkarten initialisiert wird, wird ein Tab-Panel angezeigt und sein zugehöriges Tab so gestaltet, dass es als aktiv angezeigt wird. Wenn der Benutzer eines der anderen Tab-Elemente aktiviert, wird das zuvor angezeigte Tab-Panel ausgeblendet, das mit dem aktivierten Tab assoziierte Tab-Panel wird sichtbar und das Tab als "aktiv" betrachtet.

Für eine einfach wählbare `tablist` sollten die nicht aktiven `tabpanel`-Elemente für den Benutzer ausgeblendet werden, bis der Benutzer das mit diesem `tabpanel` assoziierte Tab auswählt.

Wenn Sie eine mehrfach auswählbare `tablist` erstellen, verwenden Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) auf dem `tablist`-Element.

Die `tab`-Elemente, nicht die `tablist`, haben das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Für die mit jedem sichtbaren `tabpanel` assoziierten Tabs wird `aria-selected="true"` gesetzt. Die mit ausgeblendeten `tabpanel`-Elementen assoziierten Tabs haben ihr `aria-selected`-Attribut auf `false` gesetzt.

Wenn die Tab-Liste ein sichtbares Label hat, setzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf die `id` des beschriftenden Elements. Wenn nicht, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um ein Label bereitzustellen.

Um tastaturzugänglich zu sein, muss der Fokus für die Nachkommen dieser Rolle verwaltet werden.

Elemente mit der `tablist`-Rolle haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle
  - : Erforderliche untergeordnete Elemente. Jede `tablist` muss ein oder mehrere `tab`-Kindelemente haben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf `true` gesetzt, zeigt es an, dass der Benutzer mehr als ein `tab` von den `tablist`-Nachkommen auswählen darf.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Wenn das `tablist`-Element vertikal ausgerichtet ist, setzen Sie `aria-orientation="vertical"`. Der Standard ist `horizontal`.

### Tastaturinteraktionen

Für die Tab-Liste:

- <kbd>Tab</kbd>
  - : Wenn der Fokus in die Tab-Liste verschoben wird, wird der Fokus auf das aktive `tab`-Element gesetzt. <br/><br/>Wenn die Tab-Liste den Fokus enthält, verschiebt der Fokus zum nächsten Element in der Tab-Umreihung der Seite außerhalb der Tab-Liste, welches das `tabpanel` ist, es sei denn, das erste Element, das bedeutsamen Inhalt innerhalb des `tabpanel` enthält, ist fokussierbar.

Wenn der Fokus auf einem Tab-Element in einer horizontalen Tab-Liste ist:

- <kbd>Linker Pfeil</kbd>
  - : verschiebt den Fokus auf das vorherige Tab. Wenn der Fokus auf dem ersten Tab ist, wird der Fokus auf das letzte Tab verschoben. Optional kann das neu fokussierte Tab aktiviert werden.
- <kbd>Rechter Pfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Tab. Wenn der Fokus auf dem letzten Tab-Element ist, wird der Fokus auf das erste Tab verschoben. Optional kann das neu fokussierte Tab aktiviert werden.

Wenn der Fokus auf einem Tab-Element in einer vertikalen Tab-Liste ist:

- <kbd>Aufwärtspfeil</kbd>
  - : verschiebt den Fokus auf das vorherige Tab. Wenn der Fokus auf dem ersten Tab ist, wird der Fokus auf das letzte Tab verschoben. Optional kann das neu fokussierte Tab aktiviert werden.
- <kbd>Abwärtspfeil</kbd>
  - : Verschiebt den Fokus auf das nächste Tab. Wenn der Fokus auf dem letzten Tab-Element ist, wird der Fokus auf das erste Tab verschoben. Optional kann das neu fokussierte Tab aktiviert werden.

Wenn die Tab-Liste horizontal ist, wird nicht auf <kbd>Abwärtspfeil</kbd> oder <kbd>Aufwärtspfeil</kbd> gehört, sodass diese Tasten ihre normalen Browser-Scrolling-Funktionen bereitstellen können, selbst wenn der Fokus innerhalb der Tab-Liste ist.

Wenn der Fokus auf einem Tab in einer `tablist` mit entweder horizontaler oder vertikaler Orientierung ist:

- <kbd>Space</kbd> oder <kbd>Enter</kbd>
  - : Aktiviert das Tab, wenn es nicht automatisch beim Fokussieren aktiviert wurde.
- <kbd>Home</kbd> (Optional)
  - : Verschiebt den Fokus auf das erste Tab. Optional kann das neu fokussierte Tab aktiviert werden.
- <kbd>Ende</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Tab. Optional kann das neu fokussierte Tab aktiviert werden.
- <kbd>Umschalt + F10</kbd>
  - : Wenn das Tab ein zugehöriges Popup-Menü hat, öffnet es das Menü.
- <kbd>Entf</kbd> (Optional)
  - : Wenn das Löschen zulässig ist, löscht (schließt) es das aktuelle Tab-Element und sein zugehöriges `tabpanel`, setzt den Fokus auf das Tab, das dem geschlossenen Tab folgt, und optional wird das neu fokussierte Tab aktiviert. Wenn es kein Tab gibt, das dem gelöschten Tab folgte, z.B. wenn das gelöschte Tab das rechte Tab in einer von links nach rechts horizontalen Tab-Liste war, wird der Fokus auf das Tab gesetzt, das dem gelöschten Tab vorausging und optional wird es aktiviert. Wenn die Anwendung löscht, dass alle Tabs gelöscht werden können, und der Benutzer das letzte verbleibende Tab in der Tab-Liste löscht, bewegt die Anwendung den Fokus auf ein anderes Element, das einen logischen Arbeitsablauf bietet. Als Alternative zu Löschen oder zusätzlich zum Unterstützen von Löschen ist die Löschfunktion in einem Kontextmenü verfügbar.

## Beispiele

Sehen Sie das Beispiel für [`tabpanel`, `tab`, und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
