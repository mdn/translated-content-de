---
title: "ARIA: tablist-Rolle"
short-title: tablist
slug: Web/Accessibility/ARIA/Reference/Roles/tablist_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die `tablist`-Rolle kennzeichnet das Element, das als Container für eine Gruppe von `tab`-Elementen dient. Die zugehörigen Inhaltsbereiche werden als `tabpanel`-Elemente bezeichnet.

## Beschreibung

Möglicherweise verwenden Sie gerade eine Oberfläche mit Tabs, während Sie dies lesen! Browser-Tabs ermöglichen es, mehrere Webseiten in einem einzigen Fenster zu öffnen. Wenn Sie auf einen Tab in der Tab-Liste am oberen Rand des Browserfensters klicken, wird der zugehörige Inhalt im Hauptinhaltsbereich, dem Tab-Panel, angezeigt – jeweils eine Website zur Zeit. Dies wird als „Tab-Entwurfsmuster“ bezeichnet.

Bei der Implementierung eines Tab-Entwurfsmusters werden die Rollen [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), `tablist` und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) verwendet.

Tabs bilden eine Gruppe übereinanderliegender Inhaltsbereiche, sogenannter Tab-Panels, von denen jeweils einer angezeigt wird. Jedem Tab-Panel ist ein `tab`-Element zugeordnet, das bei Aktivierung das Panel anzeigt. Die Liste der `tab`-Elemente ist entlang einer Kante des aktuell angezeigten Panels angeordnet, meist entlang der oberen Kante, und in einem `tablist`-Element verschachtelt.

Jeder `tab` in einer `tablist` dient als Beschriftung für ein `tabpanel` und kann aktiviert werden, um dieses Panel anzuzeigen. Die `tablist` ist das umschließende Element für die enthaltenen `tab`-Elemente.

Bei der Initialisierung einer Oberfläche mit Tabs wird ein Tab-Panel angezeigt. Der zugehörige Tab wird so gestaltet, dass er als aktiv erkennbar ist. Wenn Benutzer einen anderen Tab aktivieren, wird das zuvor angezeigte Tab-Panel ausgeblendet, das dem aktivierten Tab zugeordnete Tab-Panel wird sichtbar und der Tab gilt als „aktiv“.

Bei einer `tablist`, in der nur ein Tab ausgewählt werden kann, sollten nicht aktive `tabpanel`-Elemente ausgeblendet bleiben, bis Benutzer den jeweils zugehörigen Tab auswählen.

Wenn Sie eine `tablist` erstellen, in der mehrere Tabs ausgewählt werden können, fügen Sie dem `tablist`-Element [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) hinzu.

Die `tab`-Elemente, nicht die `tablist`, haben das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected). Setzen Sie es für Tabs, deren zugehöriges `tabpanel` sichtbar ist, auf `aria-selected="true"`. Für Tabs, deren zugehöriges `tabpanel` ausgeblendet ist, setzen Sie `aria-selected` auf `false`.

Wenn die Tab-Liste eine sichtbare Beschriftung hat, setzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf die `id` des beschriftenden Elements. Verwenden Sie andernfalls [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), um eine Beschriftung bereitzustellen.

Damit die Tab-Liste über die Tastatur zugänglich ist, muss die Fokussteuerung für die untergeordneten Elemente dieser Rolle implementiert werden.

Elemente mit der Rolle `tablist` haben implizit den Wert `horizontal` für [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rolle [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
  - : Erforderliche untergeordnete Elemente. Jede `tablist` muss mindestens ein `tab`-Element als Kind haben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : Wenn der Wert `true` ist, können Benutzer mehr als einen `tab` aus den untergeordneten Elementen der `tablist` auswählen.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Wenn das `tablist`-Element vertikal ausgerichtet ist, setzen Sie `aria-orientation="vertical"`. Der Standardwert ist `horizontal`.

### Tastaturinteraktionen

Für die Tab-Liste:

- <kbd>Tab</kbd>
  - : Wenn der Fokus in die Tab-Liste wechselt, wird das aktive `tab`-Element fokussiert. <br/><br/>Wenn sich der Fokus innerhalb der Tab-Liste befindet, wechselt er zum nächsten Element außerhalb der `tablist` in der Tab-Reihenfolge der Seite. Dies ist das Tab-Panel, es sei denn, das erste Element mit aussagekräftigem Inhalt innerhalb des Tab-Panels ist fokussierbar.

Wenn ein Tab-Element in einer horizontalen Tab-Liste fokussiert ist:

- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus zum vorherigen Tab. Ist der erste Tab fokussiert, wird der Fokus zum letzten Tab verschoben. Optional wird der neu fokussierte Tab aktiviert.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt den Fokus zum nächsten Tab. Ist der letzte Tab fokussiert, wird der Fokus zum ersten Tab verschoben. Optional wird der neu fokussierte Tab aktiviert.

Wenn ein Tab-Element in einer vertikalen Tab-Liste fokussiert ist:

- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus zum vorherigen Tab. Ist der erste Tab fokussiert, wird der Fokus zum letzten Tab verschoben. Optional wird der neu fokussierte Tab aktiviert.
- <kbd>Pfeil nach unten</kbd>
  - : Verschiebt den Fokus zum nächsten Tab. Ist der letzte Tab fokussiert, wird der Fokus zum ersten Tab verschoben. Optional wird der neu fokussierte Tab aktiviert.

Bei einer horizontalen Tab-Liste werden <kbd>Pfeil nach unten</kbd> und <kbd>Pfeil nach oben</kbd> nicht verarbeitet. So können diese Tasten weiterhin ihre üblichen Bildlauffunktionen im Browser ausführen, auch wenn sich der Fokus innerhalb der Tab-Liste befindet.

Wenn ein Tab in einer horizontal oder vertikal ausgerichteten `tablist` fokussiert ist:

- <kbd>Leertaste</kbd> oder <kbd>Eingabetaste</kbd>
  - : Aktiviert den Tab, sofern er nicht bereits beim Fokussieren automatisch aktiviert wurde.
- <kbd>Pos1</kbd> (optional)
  - : Verschiebt den Fokus zum ersten Tab. Optional wird der neu fokussierte Tab aktiviert.
- <kbd>Ende</kbd> (optional)
  - : Verschiebt den Fokus zum letzten Tab. Optional wird der neu fokussierte Tab aktiviert.
- <kbd>Umschalt + F10</kbd>
  - : Öffnet das Menü, wenn dem Tab ein Popup-Menü zugeordnet ist.
- <kbd>Entf</kbd> (optional)
  - : Wenn das Löschen erlaubt ist, werden das aktuelle Tab-Element und das zugehörige Tab-Panel gelöscht (geschlossen). Der Fokus wird auf den Tab gesetzt, der auf den geschlossenen Tab folgt; optional wird dieser aktiviert. Wenn auf den gelöschten Tab kein weiterer Tab folgte, etwa weil er in einer horizontalen Tab-Liste mit Schreibrichtung von links nach rechts ganz rechts stand, wird der vorherige Tab fokussiert und optional aktiviert. Wenn die Anwendung das Löschen aller Tabs erlaubt und Benutzer den letzten verbleibenden Tab in der Tab-Liste löschen, verschiebt die Anwendung den Fokus zu einem anderen Element, das einen logischen Arbeitsablauf ermöglicht. Alternativ zur Taste <kbd>Entf</kbd> oder zusätzlich dazu kann die Löschfunktion über ein Kontextmenü verfügbar sein.

## Beispiele

Ein Beispiel für [`tabpanel`, `tab` und `tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) finden Sie in der Definition der Rolle [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [Rolle `tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
