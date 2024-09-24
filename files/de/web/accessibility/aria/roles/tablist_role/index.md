---
title: "ARIA: Rolle tablist"
slug: Web/Accessibility/ARIA/Roles/tablist_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `tablist` Rolle identifiziert das Element, das als Container für eine Gruppe von `tabs` dient. Der Inhalt der Tabs wird als `tabpanel`-Elemente bezeichnet.

## Beschreibung

Vielleicht interagieren Sie gerade mit einer Tab-Oberfläche, während Sie dies lesen! Browser-Tabs ermöglichen es einem Benutzer, mehrere Webseiten in einem einzigen Fenster zu öffnen. Indem der Benutzer auf einen Tab in der Tab-Liste am oberen Rand des Browserfensters klickt, kann der Benutzer den zugehörigen Inhalt im Hauptinhaltsbereich, dem tabpanel, jeweils eine Website anzeigen. Dies wird als "Tab-Designmuster" bezeichnet.

Bei der Implementierung eines Tab-Designmusters werden die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), `tablist` und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) verwendet.

Tabs sind eine Gruppe von geschichteten Inhaltsbereichen, bekannt als Tab-Panels, die jeweils ein Panel-Inhalt auf einmal anzeigen. Jedes Tab-Panel hat ein zugehöriges `tab`-Element, das beim Aktivieren das Panel anzeigt. Die Liste der Tab-Elemente ist entlang einer Kante des aktuell angezeigten Panels angeordnet, meist an der oberen Kante, eingebettet in ein `tablist`-Element.

Jedes `tab` in einer `tablist` dient als Beschriftung für ein `tabpanel` und kann aktiviert werden, um dieses Panel anzuzeigen. Die `tablist` ist das übergeordnete Element für die Gruppe der enthaltenen Tab-Elemente.

Wenn eine Tab-Oberfläche initialisiert wird, wird ein Tab-Panel angezeigt, und das zugehörige Tab wird so gestaltet, dass es aktiv ist. Wenn der Benutzer eines der anderen Tab-Elemente aktiviert, wird das zuvor angezeigte Tab-Panel ausgeblendet, das Tab-Panel, das mit dem aktivierten Tab verknüpft ist, wird sichtbar und das Tab wird als "aktiv" betrachtet.

Für eine einfach auswählbare Tab-Liste sollten die nicht aktiven Tab-Panel-Elemente dem Benutzer verborgen sein, bis der Benutzer das mit diesem Tab-Panel verknüpfte Tab auswählt.

Beim Erstellen einer mehrfach auswählbaren Tab-Liste, fügen Sie dem `tablist`-Element [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) hinzu.

Die `tab`-Elemente, nicht die `tablist`, haben das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Stellen Sie es auf `aria-selected="true"` für die Tabs ein, die mit jedem sichtbaren Tab-Panel verknüpft sind. Die Tabs, die mit verborgenen Tab-Panel-Elementen verknüpft sind, haben ihre `aria-selected`-Attribute auf `false` gesetzt.

Wenn die Tab-Liste eine sichtbare Beschriftung hat, setzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) auf die `id` des beschriftenden Elements. Wenn nicht, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), um eine Beschriftung bereitzustellen.

Um tastaturzugänglich zu sein, muss der Fokus für die Nachkommen dieser Rolle verwaltet werden.

Elemente mit der Rolle `tablist` haben einen impliziten Wert von [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) von `horizontal`.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rolle
  - : Erforderliche Besitz-Elemente. Jede Tab-Liste muss ein oder mehrere `tab`-Kinder haben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : Wenn auf `true` gesetzt, zeigt es an, dass der Benutzer mehr als ein `tab` aus den Nachkommen der `tablist` auswählen kann.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Wenn das `tablist`-Element vertikal ausgerichtet ist, setzen Sie `aria-orientation="vertical"`. Der Standardwert ist `horizontal`.

### Tastaturinteraktionen

Für die Tab-Liste:

- <kbd>Tab</kbd>
  - : Wenn der Fokus in die Tab-Liste wechselt, wird der Fokus auf das aktive `tab`-Element gelegt. <br/><br/>Wenn die Tab-Liste den Fokus enthält, bewegt der Fokus zum nächsten Element in der Tab-Reihenfolge außerhalb der Tab-Liste, welches das Tab-Panel ist, es sei denn, das erste Element, das bedeutsamen Inhalt im Tab-Panel enthält, ist fokussierbar.

Wenn der Fokus auf einem Tab-Element in einer horizontalen Tab-Liste liegt:

- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Tab. Wenn der Fokus auf dem ersten Tab liegt, verschiebt sich der Fokus auf das letzte Tab. Optional aktiviert es das neu fokussierte Tab.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus auf das nächste Tab. Wenn der Fokus auf dem letzten Tab-Element liegt, verschiebt sich der Fokus auf das erste Tab. Optional aktiviert es das neu fokussierte Tab.

Wenn der Fokus auf einem Tab-Element in einer vertikalen Tab-Liste liegt:

- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Tab. Wenn der Fokus auf dem ersten Tab liegt, verschiebt sich der Fokus auf das letzte Tab. Optional aktiviert es das neu fokussierte Tab.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus auf das nächste Tab. Wenn der Fokus auf dem letzten Tab-Element liegt, verschiebt sich der Fokus auf das erste Tab. Optional aktiviert es das neu fokussierte Tab.

Wenn die Tab-Liste horizontal ist, hört sie nicht auf <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd>, sodass diese Tasten ihre normalen Scroll-Funktionen des Browsers ausführen können, auch wenn der Fokus in der Tab-Liste ist.

Wenn der Fokus auf einem Tab in einer Tab-Liste mit entweder horizontaler oder vertikaler Orientierung liegt:

- <kbd>Leerzeichen</kbd> oder <kbd>Eingabetaste</kbd>
  - : Aktiviert das Tab, wenn es nicht automatisch beim Fokussieren aktiviert wurde.
- <kbd>Start</kbd> (Optional)
  - : Verschiebt den Fokus auf das erste Tab. Optional aktiviert es das neu fokussierte Tab.
- <kbd>Ende</kbd> (Optional)
  - : Verschiebt den Fokus auf das letzte Tab. Optional aktiviert es das neu fokussierte Tab.
- <kbd>Umschalt + F10</kbd>
  - : Wenn das Tab ein zugehöriges Popup-Menü hat, öffnet es das Menü.
- <kbd>Löschen</kbd> (Optional)
  - : Wenn das Löschen erlaubt ist, löscht (schließt) das aktuelle Tab-Element und sein zugehöriges Tab-Panel, setzt den Fokus auf das Tab, das dem geschlossenen Tab folgte, und aktiviert optional das neu fokussierte Tab. Wenn es kein Tab gibt, das dem gelöschten Tab folgte, z.B. das gelöschte Tab war das am weitesten rechts liegende Tab in einer von links nach rechts horizontalen Tab-Liste, setzt den Fokus und aktiviert optional das Tab, das dem gelöschten Tab vorausging. Wenn die Anwendung das Löschen aller Tabs erlaubt und der Benutzer das letzte verbleibende Tab in der Tab-Liste löscht, verschiebt die Anwendung den Fokus auf ein anderes Element, das einen logischen Arbeitsfluss bietet. Als Alternative zum Löschen oder zusätzlich zur Unterstützung des Löschens ist die Löschfunktion in einem Kontextmenü verfügbar.

<!--
### Erforderliche JavaScript-Funktionen

## Barrierefreiheitsbedenken

## Best Practices

### Bevorzugen Sie HTML
-->

## Beispiele

Sehen Sie sich das Beispiel für [`tabpanel`, `tab`, und `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rolle an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`tab` role](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel` role](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
