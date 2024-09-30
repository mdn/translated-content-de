---
title: "ARIA: tablist Rolle"
slug: Web/Accessibility/ARIA/Roles/tablist_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `tablist`-Rolle identifiziert das Element, das als Container für eine Gruppe von `tabs` dient. Die Tab-Inhalte werden als `tabpanel`-Elemente bezeichnet.

## Beschreibung

Vielleicht interagieren Sie gerade mit einer Registerkartenoberfläche, während Sie dies lesen! Browser-Registerkarten ermöglichen es einem Benutzer, mehrere Webseiten in einem einzigen Fenster geöffnet zu haben. Durch Klicken auf eine Registerkarte in der `tablist` am oberen Rand des Browserfensters kann der Benutzer den zugehörigen Inhalt im Hauptinhaltsbereich, dem `tabpanel`, anzeigen, jeweils eine Seite. Dies wird als "Tab-Designmuster" bezeichnet.

Beim Implementieren eines Tab-Designmusters werden die [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), `tablist` und [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) Rollen verwendet.

Tabs sind eine Reihe von geschichteten Inhaltsbereichen, bekannt als Tab-Panels, in denen jeweils ein Panel angezeigt wird. Jedes Tab-Panel hat ein zugeordnetes `tab`-Element, das, wenn es aktiviert wird, das Panel anzeigt. Die Liste der `tab`-Elemente ist entlang einer Kante des derzeit angezeigten Panels angeordnet, meist die obere Kante, eingebettet in ein `tablist`-Element.

Jede `tab` in einer `tablist` dient als Label für ein `tabpanel` und kann aktiviert werden, um dieses Panel anzuzeigen. Die `tablist` ist das enthaltende Element für die Gruppe der enthaltenen `tab`-Elemente.

Wenn eine Registerkartenoberfläche initialisiert wird, wird ein Tab-Panel angezeigt und das zugehörige Tab wird so gestaltet, dass es aktiv erscheint. Wenn der Benutzer eines der anderen `tab`-Elemente aktiviert, wird das zuvor angezeigte Tab-Panel ausgeblendet, das mit dem aktivierten Tab verbundene Tab-Panel wird sichtbar und das Tab gilt als "aktiv".

Für eine Einzelauswahl-Tabliste sollten die nicht aktiven `tabpanel`-Elemente ausgeblendet werden, bis der Benutzer das Tab auswählt, das mit dem `tabpanel` verbunden ist.

Wenn Sie eine Mehrfachauswahl-Tabliste erstellen, fügen Sie [`aria-multiselectable="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) dem `tablist`-Element hinzu.

Die `tab`-Elemente, nicht die `tablist`, haben das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected). Setzen Sie `aria-selected="true"` für die Tabs, die mit jedem sichtbaren `tabpanel` verbunden sind. Die Tabs, die mit ausgeblendeten `tabpanel`-Elementen verbunden sind, haben ihre `aria-selected` Attribute auf `false` gesetzt.

Wenn die Tab-Liste ein sichtbares Label hat, setzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) auf die `id` des beschriftenden Elements. Wenn nicht, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), um eine Beschriftung bereitzustellen.

Um mit der Tastatur zugänglich zu sein, muss der Fokus für die Nachkommen dieser Rolle verwaltet werden.

Elemente mit der `tablist`-Rolle haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `horizontal`.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rolle
  - : Erforderliche besessene Elemente. Jede `tablist` muss eines oder mehrere `tab`-Kinder haben.
- [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : Wenn auf `true` gesetzt, gibt an, dass der Benutzer mehr als ein `tab` aus den `tablist`-Nachkommen auswählen kann.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Wenn das `tablist`-Element vertikal ausgerichtet ist, setzen Sie `aria-orientation="vertical"`. Der Standard ist `horizontal`.

### Tastatur-Interaktionen

Für die Tab-Liste:

- <kbd>Tab</kbd>
  - : Wenn der Fokus in die Tab-Liste verschoben wird, wird der Fokus auf das aktive `tab`-Element gelegt. <br/><br/>Wenn die Tab-Liste den Fokus enthält, wird der Fokus auf das nächste Element in der Tab-Sequenz der Seite außerhalb der `tablist`-Elemente verschoben, das meistens die erstes Element ist, welches Bedeutungsvoller Inhalt innerhalb des tabpanel enthält und fokussierbar ist.

Wenn der Fokus auf einem `tab`-Element in einer horizontalen Tab-Liste ist:

- <kbd>Linke Pfeiltaste</kbd>
  - : Der Fokus wird auf das vorherige Tab verschoben. Wenn der Fokus auf dem ersten Tab ist, wird der Fokus auf das letzte Tab verschoben. Optional aktiviert das neu fokussierte Tab.
- <kbd>Rechte Pfeiltaste</kbd>
  - : Der Fokus wird auf das nächste Tab verschoben. Wenn der Fokus auf dem letzten **Tab-Element** ist, wird der Fokus auf das erste **Tab** verschoben. Optional aktiviert das neu fokussierte **Tab**.

Wenn der Fokus auf einem **Tab-Element** in einer vertikalen **Tab-Liste** ist:

- <kbd>Obere Pfeiltaste</kbd>
  - : Der Fokus wird auf das vorherige Tab verschoben. Wenn der Fokus auf dem ersten Tab ist, wird der Fokus auf das letzte Tab verschoben. Optional aktiviert das neu fokussierte Tab.
- <kbd>Untere Pfeiltaste</kbd>
  - : Der Fokus wird auf das nächste Tab verschoben. Wenn der Fokus auf dem letzten **Tab-Element** ist, wird der Fokus auf das erste **Tab** verschoben. Optional aktiviert das neu fokussierte **Tab**.

Wenn die Tab-Liste horizontal ist, reagiert sie nicht auf die Eingaben <kbd>Untere Pfeiltaste</kbd> oder <kbd>Obere Pfeiltaste</kbd>, damit diese Tasten ihre übliche Scrollfunktion im Browser beibehalten können, selbst wenn der Fokus in der Tab-Liste liegt.

Wenn der Fokus auf einem **Tab** in einer `tablist` mit entweder horizontaler oder vertikaler Ausrichtung liegt:

- <kbd>Leertaste</kbd> oder <kbd>Enter</kbd>
  - : Aktiviert das Tab, wenn es nicht bereits beim Fokussieren automatisch aktiviert wurde.
- <kbd>Home</kbd> (Optional)
  - : Der Fokus wird auf das erste Tab verschoben. Optional aktiviert das neu fokussierte Tab.
- <kbd>Ende</kbd> (Optional)
  - : Der Fokus wird auf das letzte Tab verschoben. Optional aktiviert das neu fokussierte Tab.
- <kbd>Shift + F10</kbd>
  - : Wenn das Tab ein zugehöriges Popup-Menü hat, wird das Menü geöffnet.
- <kbd>Löschen</kbd> (Optional)
  - : Wenn die Löschung erlaubt ist, löscht (schließt) das aktuelle Tab-Element und sein zugehöriges Tab-Panel, setzt den Fokus auf das Tab nach dem geschlossenen Tab und aktiviert optional das neu fokussierte Tab. Gibt es kein Tab, das dem gelöschten Tab folgte, z.B. das gelöschte Tab war das rechts äußerste Tab in einer links-nach-rechts-anordnung, wird der Fokus auf das Tab vor dem gelöschten Tab gesetzt und optional aktiviert. Wenn die Anwendung das Löschen aller Tabs erlaubt und der Benutzer das letzte verbleibende Tab in der Tab-Liste löscht, bewegt die Anwendung den Fokus auf ein anderes Element, das einen logischen Arbeitsablauf bietet. Als Alternative zum Löschen, oder zusätzlich zur Unterstützung der Löschfunktionalität, steht die Löschung in einem Kontextmenü zur Verfügung.

<!--
### Required JavaScript features

## Accessibility concerns

## Best Practices

### Prefer HTML
-->

## Beispiele

Sehen Sie sich das [`tabpanel`, `tab`, und `tablist` Beispiel](/de/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in der [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role) Rollendefinition an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`tab` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
