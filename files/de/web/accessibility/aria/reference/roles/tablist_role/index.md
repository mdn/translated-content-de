---
title: "ARIA: Rolle tablist"
slug: Web/Accessibility/ARIA/Reference/Roles/tablist_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle `tablist` identifiziert das Element, das als Container für eine Gruppe von `tabs` dient. Der Inhalt der Tabs wird als `tabpanel`-Elemente bezeichnet.

## Beschreibung

Möglicherweise interagieren Sie gerade mit einer Registerkarten-Schnittstelle! Browser-Registerkarten ermöglichen es einem Benutzer, mehrere Webseiten in einem einzigen Fenster zu öffnen. Durch Klicken auf eine Registerkarte in der `tablist` am oberen Rand des Browserfensters kann der Benutzer den zugehörigen Inhalt im Hauptinhaltsbereich, dem `tabpanel`, anzeigen, jeweils eine Website. Dies wird als "Tab-Designmuster" bezeichnet.

Beim Implementieren eines Tab-Designmusters werden die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), `tablist` und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verwendet.

Registerkarten sind eine Gruppe von übereinanderliegenden Inhaltsbereichen, bekannt als Tab-Panels, die jeweils nur einen Bereich anzeigen. Jedes Tab-Panel hat ein zugehöriges `tab`-Element, das beim Aktivieren das Panel anzeigt. Die Liste der Tab-Elemente ist entlang einer Kante des aktuell angezeigten Panels angeordnet, meist an der oberen Kante, eingebettet in einem `tablist`-Element.

Jedes `tab` in einer `tablist` dient als Beschriftung für ein `tabpanel` und kann aktiviert werden, um dieses Panel anzuzeigen. Die `tablist` ist das enthaltende Element für die Gruppe der enthaltenen Tab-Elemente.

Wenn eine Registerkarten-Schnittstelle initialisiert wird, wird ein Tab-Panel angezeigt und sein zugehöriges Tab wird so gestaltet, dass es als aktiv gekennzeichnet ist. Wenn der Benutzer eine der anderen Tab-Elemente aktiviert, wird das zuvor angezeigte Tab-Panel ausgeblendet, das mit dem aktivierten Tab verknüpfte Tab-Panel wird sichtbar und das Tab wird als "aktiv" betrachtet.

Für eine einfach auswählbare `tablist` sollten die nicht-aktiven `tabpanel`-Elemente vor dem Benutzer verborgen werden, bis der Benutzer das mit diesem `tabpanel` verknüpfte Tab auswählt.

Beim Erstellen einer mehrfach auswählbaren `tablist`, fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) dem `tablist`-Element hinzu.

Die `tab`-Elemente, nicht die `tablist`, haben das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Setzen Sie es auf `aria-selected="true"` für die Tabs, die mit jedem sichtbaren `tabpanel` verknüpft sind. Die Tabs, die mit den versteckten `tabpanel`-Elementen verbunden sind, haben ihr `aria-selected`-Attribut auf `false` gesetzt.

Wenn die Tab-Liste ein sichtbares Etikett hat, setzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf die `id` des beschriftenden Elements. Wenn nicht, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um ein Etikett bereitzustellen.

Um tastaturzugänglich zu sein, muss der Fokus für die Nachkommen dieser Rolle verwaltet werden.

Elemente mit der Rolle `tablist` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- Rolle [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Erforderliche enthaltene Elemente. Jede tablist muss ein oder mehrere `tab`-Kinder haben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf `true` gesetzt, zeigt es an, dass der Benutzer mehr als ein `tab` aus den Nachkommen der `tablist` auswählen kann.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Wenn das `tablist`-Element vertikal ausgerichtet ist, setzen Sie `aria-orientation="vertical"`. Standardwert ist `horizontal`.

### Tastaturinteraktionen

Für die Tab-Liste:

- <kbd>Tab</kbd>
  - : Wenn der Fokus in die Tab-Liste gelangt, wird der Fokus auf das aktive `tab`-Element gesetzt. <br/><br/>Wenn die Tab-Liste den Fokus enthält, wird der Fokus auf das nächste Element in der Seitentabfolge außerhalb der `tablist` verschoben, welches das `tabpanel` ist, es sei denn, das erste Element, das einen sinnvollen Inhalt im `tabpanel` enthält, ist fokussierbar.

Wenn der Fokus auf einem Tab-Element in einer horizontalen Tab-Liste liegt:

- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Tab. Wenn der Fokus auf dem ersten Tab liegt, verschiebt er den Fokus auf das letzte Tab. Aktiviert optional das neu fokussierte Tab.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Tab. Wenn der Fokus auf dem letzten Tab-Element liegt, verschiebt er den Fokus auf das erste Tab. Aktiviert optional das neu fokussierte Tab.

Wenn der Fokus auf einem Tab-Element in einer vertikalen Tab-Liste liegt:

- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Tab. Wenn der Fokus auf dem ersten Tab liegt, verschiebt er den Fokus auf das letzte Tab. Aktiviert optional das neu fokussierte Tab.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Tab. Wenn der Fokus auf dem letzten Tab-Element liegt, verschiebt er den Fokus auf das erste Tab. Aktiviert optional das neu fokussierte Tab.

Wenn die Tab-Liste horizontal ausgerichtet ist, reagiert sie nicht auf <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd>, sodass diese Tasten ihre normalen Browser-Scrolling-Funktionen ausführen können, selbst wenn der Fokus innerhalb der Tab-Liste liegt.

Wenn der Fokus sich auf einem Tab in einer `tablist` mit entweder horizontaler oder vertikaler Ausrichtung befindet:

- <kbd>Leertaste</kbd> oder <kbd>Eingabetaste</kbd>
  - : Aktiviert das Tab, wenn es nicht automatisch beim Fokus aktiviert wurde.
- <kbd>Home</kbd> (Optional)
  - : Verschiebt den Fokus auf das erste Tab. Aktiviert optional das neu fokussierte Tab.
- <kbd>Ende</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Tab. Aktiviert optional das neu fokussierte Tab.
- <kbd>Umschalt + F10</kbd>
  - : Wenn das Tab über ein zugeordnetes Popup-Menü verfügt, öffnet es das Menü.
- <kbd>Entf</kbd> (Optional)
  - : Wenn das Löschen erlaubt ist, löscht (schließt) es das aktuelle Tab-Element und sein zugehöriges Tab-Panel, setzt den Fokus auf das Tab nach dem geschlossenen Tab und aktiviert optional das neu fokussierte Tab. Wenn es kein Tab gibt, das dem gelöschten Tab folgte, z. B. wenn das gelöschte Tab das rechteste Tab in einer von links nach rechts horizontalen Tab-Liste war, setzt es den Fokus auf und aktiviert optional das Tab, das dem gelöschten Tab vorausging. Wenn die Anwendung das Löschen aller Tabs erlaubt und der Benutzer das letzte verbleibende Tab in der Tab-Liste löscht, bewegt die Anwendung den Fokus auf ein anderes Element, das einen logischen Arbeitsfluss bietet. Als Alternative zum Löschen oder zusätzlich zur Unterstützung von Löschen ist die Löschfunktion in einem Kontextmenü verfügbar.

<!--
### Erforderliche JavaScript-Funktionen

## Barrierefreiheitsbedenken

## Best Practices

### Bevorzugen Sie HTML
-->

## Beispiele

Sehen Sie sich das [Beispiel für `tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Definition der Rolle [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
