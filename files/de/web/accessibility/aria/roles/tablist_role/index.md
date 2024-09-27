---
title: "ARIA: tablist Rolle"
slug: Web/Accessibility/ARIA/Roles/tablist_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `tablist` Rolle identifiziert das Element, das als Container für eine Gruppe von `tabs` dient. Die Inhalte der Tabs werden als `tabpanel`-Elemente bezeichnet.

## Beschreibung

Vielleicht interagieren Sie gerade mit einer Registerkartenschnittstelle, während Sie dies lesen! Browser-Registerkarten ermöglichen es einem Benutzer, mehrere Webseiten in einem einzigen Fenster geöffnet zu haben. Ein Klick auf eine Registerkarte im Tablist am oberen Rand des Browserfensters ermöglicht es dem Benutzer, den zugehörigen Inhalt im Hauptinhaltsbereich, dem Tabpanel, anzuzeigen, und zwar immer nur eine Website. Dies wird als "Tab-Designmuster" bezeichnet.

Beim Implementieren eines Tab-Designmusters werden die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), `tablist` und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) verwendet.

Tabellen sind eine Gruppe von geschichteten Inhaltsabschnitten, bekannt als Tabpanels, die jeweils ein Panel von Inhalten auf einmal anzeigen. Jedes Tabpanel hat ein zugehöriges `tab`-Element, das beim Aktivieren das Panel anzeigt. Die Liste der Tab-Elemente ist entlang einer Kante des aktuell angezeigten Panels angeordnet, am häufigsten entlang der oberen Kante, eingebettet in ein `tablist`-Element.

Jedes `tab` in einem `tablist` dient als Beschriftung für ein `tabpanel` und kann aktiviert werden, um dieses Panel anzuzeigen. Das `tablist` ist das umgebende Element für die Gruppe der enthaltenen Tab-Elemente.

Wenn eine Registerkartenschnittstelle initialisiert wird, wird ein Tabpanel angezeigt und sein zugehöriges Tab so gestaltet, dass es anzeigt, dass es aktiv ist. Wenn der Benutzer eines der anderen Tab-Elemente aktiviert, wird das zuvor angezeigte Tabpanel verborgen, das Tabpanel, das dem aktivierten Tab zugeordnet ist, wird sichtbar und das Tab wird als "aktiv" betrachtet.

Für ein einfach auswählbares Tablist sollten die nicht-aktiven Tabpanel-Elemente vor dem Benutzer verborgen bleiben, bis der Benutzer das Tab auswählt, das diesem Tabpanel zugeordnet ist.

Wenn Sie ein mehrfach auswählbares Tablist erstellen, fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) dem `tablist`-Element hinzu.

Die `tab`-Elemente, nicht das `tablist`, haben das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Setzen Sie `aria-selected="true"` für die Tabs, die mit jedem sichtbaren Tabpanel verknüpft sind. Die Tabs, die mit versteckten Tabpanel-Elementen verknüpft sind, haben ihre `aria-selected`-Attribute auf `false` gesetzt.

Wenn die Tab-Liste eine sichtbare Beschriftung hat, setzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) auf die `id` des beschriftenden Elements. Wenn nicht, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), um eine Beschriftung bereitzustellen.

Um über die Tastatur zugänglich zu sein, muss der Fokus für die Nachkommen dieser Rolle verwaltet werden.

Elemente mit der Rolle `tablist` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `horizontal`.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rolle
  - : Erforderliche eigene Elemente. Jedes Tablist muss ein oder mehrere `tab`-Kinder haben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : Wenn auf `true` gesetzt, gibt an, dass der Benutzer mehr als ein `tab` aus den `tablist`-Nachfahren auswählen kann.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Ist das Tablist-Element vertikal ausgerichtet, setzen Sie `aria-orientation="vertical"`. Die Standardausrichtung ist `horizontal`.

### Tastaturinteraktionen

Für die Tab-Liste:

- <kbd>Tab</kbd>
  - : Bewegt den Fokus auf das aktive `tab`-Element, wenn der Fokus in die Tab-Liste verschoben wird. <br/><br/>Wenn die Tab-Liste den Fokus enthält, bewegt sich der Fokus zum nächsten Element in der Seiten-Tab-Sequenz außerhalb des Tablist, das ist das Tabpanel, es sei denn, das erste Element mit sinnvollem Inhalt innerhalb des Tabpanels ist fokussierbar.

Wenn der Fokus auf einem Tab-Element in einer horizontalen Tab-Liste ist:

- <kbd>Pfeil nach links</kbd>
  - : Bewegt den Fokus zum vorherigen Tab. Wenn der Fokus auf dem ersten Tab ist, bewegt sich der Fokus zum letzten Tab. Optional aktiviert das neu fokussierte Tab.
- <kbd>Pfeil nach rechts</kbd>
  - : Bewegt den Fokus zum nächsten Tab. Wenn der Fokus auf dem letzten Tab-Element ist, bewegt sich der Fokus zum ersten Tab. Optional aktiviert das neu fokussierte Tab.

Wenn der Fokus auf einem Tab-Element in einer vertikalen Tab-Liste ist:

- <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Tab. Wenn der Fokus auf dem ersten Tab ist, bewegt sich der Fokus zum letzten Tab. Optional aktiviert das neu fokussierte Tab.
- <kbd>Pfeil nach unten</kbd>
  - : Bewegt den Fokus zum nächsten Tab. Wenn der Fokus auf dem letzten Tab-Element ist, bewegt sich der Fokus zum ersten Tab. Optional aktiviert das neu fokussierte Tab.

Wenn die Tab-Liste horizontal ist, hört sie nicht auf <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd>, sodass diese Tasten ihre normalen Browser-Scrollfunktionen ausführen können, selbst wenn der Fokus in der Tab-Liste liegt.

Wenn der Fokus auf einem Tab in einem Tablist mit entweder horizontaler oder vertikaler Ausrichtung ist:

- <kbd>Leertaste</kbd> oder <kbd>Eingabetaste</kbd>
  - : Aktiviert das Tab, wenn es nicht automatisch bei Fokussierung aktiviert wurde.
- <kbd>Home</kbd> (optional)
  - : Bewegt den Fokus zum ersten Tab. Optional aktiviert das neu fokussierte Tab.
- <kbd>Ende</kbd> (optional)
  - : Bewegt den Fokus zum letzten Tab. Optional aktiviert das neu fokussierte Tab.
- <kbd>Umschalt + F10</kbd>
  - : Wenn das Tab ein zugehöriges Popup-Menü hat, öffnet es das Menü.
- <kbd>Entfernen</kbd> (optional)
  - : Wenn das Löschen erlaubt ist, löscht (schließt) das aktuelle Tab-Element und das zugehörige Tabpanel, setzt den Fokus auf das Tab, das dem gelöschten Tab folgte, und aktiviert optional das neu fokussierte Tab. Wenn es kein Tab gibt, das dem gelöschten Tab folgte, z.B. wenn das gelöschte Tab das rechteste Tab in einer von links nach rechts verlaufenden horizontalen Tab-Liste war, wird der Fokus auf das Tab gesetzt, das dem gelöschten Tab vorausging, und es wird optional aktiviert. Wenn die Anwendung erlaubt, dass alle Tabs gelöscht werden können, und der Benutzer das letzte verbleibende Tab in der Tab-Liste löscht, verschiebt die Anwendung den Fokus auf ein anderes Element, das einen logischen Arbeitsablauf bietet. Als Alternative zum Löschen oder zusätzlich zur Unterstützung von Löschen ist die Löschfunktion in einem Kontextmenü verfügbar.

<!--
### Erforderliche JavaScript-Funktionen

## Barrierefreiheit Bedenken

## Beste Praktiken

### Bevorzugen Sie HTML
-->

## Beispiele

Siehe das Beispiel [`tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in der [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rollendefinition.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
