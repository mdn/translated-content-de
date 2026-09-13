---
title: "ARIA: tablist-Rolle"
short-title: tablist
slug: Web/Accessibility/ARIA/Reference/Roles/tablist_role
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

Die `tablist`-Rolle identifiziert das Element, das als Container für eine Gruppe von `tabs` dient. Die Inhalte der Tabs werden als `tabpanel`-Elemente bezeichnet.

## Beschreibung

Möglicherweise interagieren Sie gerade mit einer Registerkartenoberfläche, während Sie dies lesen! Browser-Tabs ermöglichen es dem Benutzer, mehrere Webseiten in einem einzigen Fenster zu öffnen. Durch Klicken auf eine Registerkarte in der Tab-Liste am oberen Rand des Browserfensters kann der Benutzer den zugehörigen Inhalt im Hauptbereich, dem Tabpanel, anzeigen, jeweils eine Seite. Dies wird als "Tab-Designmuster" bezeichnet.

Bei der Implementierung eines Tab-Designmusters werden die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), `tablist` und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verwendet.

Tabs sind eine Reihe von geschichteten Inhaltsabschnitten, bekannt als Tab-Panels, die jeweils ein Panel von Inhalten anzeigen. Jedes Tab-Panel hat ein zugehöriges `tab`-Element, das, wenn es aktiviert wird, das Panel anzeigt. Die Liste der Tab-Elemente ist entlang einer Kante des aktuell angezeigten Panels angeordnet, meist entlang der oberen Kante, verschachtelt in einem `tablist`-Element.

Jedes `tab` in einer `tablist` dient als Beschriftung für ein `tabpanel` und kann aktiviert werden, um dieses Panel anzuzeigen. Die `tablist` ist das enthaltene Element für die Gruppe von enthaltenen Tab-Elementen.

Wenn eine Registerkartenoberfläche initialisiert wird, wird ein Tab-Panel angezeigt und dessen zugehöriges Tab wird so gestaltet, dass es als aktiv angezeigt wird. Wenn der Benutzer eines der anderen Tab-Elemente aktiviert, wird das zuvor angezeigte Tab-Panel ausgeblendet, das Tab-Panel, das dem aktivierten Tab zugeordnet ist, wird sichtbar und das Tab gilt als "aktiv".

Für eine einfach auswählbare `tablist` sollten die nicht aktiven `tabpanel`-Elemente vor dem Benutzer verborgen bleiben, bis der Benutzer das Tab auswählt, das diesem `tabpanel` zugeordnet ist.

Bei der Erstellung einer mehrfach auswählbaren `tablist`, fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) im `tablist`-Element hinzu.

Die `tab`-Elemente, nicht die `tablist`, haben das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut. Setzen Sie `aria-selected="true"` für die Tabs, die mit jedem sichtbaren `tabpanel` verknüpft sind. Die Tabs, die mit versteckten `tabpanel`-Elementen verbunden sind, haben ihre `aria-selected` Attribute auf `false` gesetzt.

Wenn die Tab-Liste ein sichtbares Label hat, setzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf die `id` des beschriftenden Elements. Wenn nicht, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um ein Label bereitzustellen.

Um tastaturzugänglich zu sein, muss der Fokus für die Nachfahren dieser Rolle verwaltet werden.

Elemente mit der `tablist`-Rolle haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle
  - : Erforderliche zugehörige Elemente. Jede `tablist` muss ein oder mehrere `tab`-Kinder haben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn auf `true` gesetzt, zeigt an, dass der Benutzer mehr als ein `tab` aus den `tablist`-Nachkommen auswählen kann.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Wenn das Tab-Eintragselement vertikal ausgerichtet ist, setzen Sie `aria-orientation="vertical"`. Der Standard ist `horizontal`.

### Tastaturinteraktionen

Für die Tab-Liste:

- <kbd>Tab</kbd>
  - : Wenn sich der Fokus in die Tab-Liste bewegt, wird der Fokus auf das aktive `tab`-Element gesetzt. <br/><br/>Wenn die Tab-Liste den Fokus enthält, wird der Fokus auf das nächste Element in der Seitentab-Sequenz außerhalb der `tablist` bewegt, das ist das `tabpanel`, es sei denn, das erste Element mit bedeutendem Inhalt im `tabpanel` ist fokussierbar.

Wenn der Fokus auf einem `tab`-Element in einer horizontalen Tab-Liste liegt:

- <kbd>Pfeil links</kbd>
  - : verschiebt den Fokus auf den vorherigen Tab. Wenn der Fokus auf der ersten Tab-Position liegt, verschiebt sich der Fokus auf die letzte Tab-Position. Optional aktiviert es die neu fokussierte Registerkarte.
- <kbd>Pfeil rechts</kbd>
  - : verschiebt den Fokus auf den nächsten Tab. Wenn der Fokus auf die letzte Tab-Position liegt, bewegt sich der Fokus auf die erste Tab-Position. Optional aktiviert es die neu fokussierte Registerkarte.

Wenn der Fokus auf einem `tab`-Element in einer vertikalen Tab-Liste liegt:

- <kbd>Pfeil nach oben</kbd>
  - : verschiebt den Fokus auf den vorherigen Tab. Wenn der Fokus auf der ersten Tab-Position liegt, verschiebt sich der Fokus auf die letzte Tab-Position. Optional aktiviert es die neu fokussierte Registerkarte.
- <kbd>Pfeil nach unten</kbd>
  - : verschiebt den Fokus auf den nächsten Tab. Wenn der Fokus auf die letzte Tab-Position liegt, bewegt sich der Fokus auf die erste Tab-Position. Optional aktiviert es die neu fokussierte Registerkarte.

Wenn die Tab-Liste horizontal ist, hört sie nicht auf <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd>, sodass diese Tasten ihre normalen Browserscroll-Funktionen ausführen können, selbst wenn der Fokus in der Tab-Liste liegt.

Wenn der Fokus auf einem Tab in einer Tab-Liste mit entweder horizontaler oder vertikaler Orientierung liegt:

- <kbd>Leertaste</kbd> oder <kbd>Eingabetaste</kbd>
  - : aktiviert die Registerkarte, wenn sie nicht automatisch beim Fokus aktiviert wurde.
- <kbd>Home</kbd> (Optional)
  - : verschiebt den Fokus auf die erste Registerkarte. Optional aktiviert es die neu fokussierte Registerkarte.
- <kbd>Ende</kbd> (Optional)
  - : verschiebt den Fokus auf die letzte Registerkarte. Optional aktiviert es die neu fokussierte Registerkarte.
- <kbd>Shift + F10</kbd>
  - : Wenn der Tab ein zugeordnetes Popup-Menü hat, öffnet er das Menü.
- <kbd>Löschen</kbd> (Optional)
  - : Wenn das Löschen erlaubt ist, löscht (schließt) das aktuelle Tab-Element und sein zugehöriges Tab-Panel, setzt den Fokus auf den Tab, der dem geschlossenen Tab folgte und aktiviert optional den neu fokussierten Tab. Wenn es keinen Tab gibt, der dem gelöschten Tab folgte, z.B. wenn der gelöschte Tab der am weitesten rechts liegende Tab in einer von links nach rechts horizontalen Tab-Liste war, setzt er den Fokus auf und optional aktiviert den Tab, der dem gelöschten Tab vorausging. Wenn die Anwendung erlaubt, dass alle Tabs gelöscht werden, und der Benutzer den zuletzt verbliebenen Tab in der Tab-Liste löscht, bewegt die Anwendung den Fokus auf ein anderes Element, das einen logischen Arbeitsablauf bietet. Als Alternative zu Löschen oder zusätzlich zur Unterstützung von Löschen ist die Löschfunktion in einem Kontextmenü verfügbar.

<!--
### Erforderliche JavaScript-Funktionen

## Zugänglichkeitsbedenken

## Beste Praktiken

### Bevorzugen Sie HTML
-->

## Beispiele

Sehen Sie sich das Beispiel für [`tabpanel`, `tab`, und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) in der Definition der [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)-Rolle an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
