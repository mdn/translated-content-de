---
title: "ARIA: Rolle menu"
short-title: menu
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Die Rolle `menu` bezeichnet einen zusammengesetzten Widget-Typ, der Benutzern eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppe häufig verwendeter Aktionen oder Funktionen dar, die Benutzer aufrufen können. Die Rolle `menu` eignet sich, wenn eine Liste von Menüpunkten ähnlich wie ein Menü in einer Desktop-Anwendung dargestellt wird. Untermenüs, auch Pop-up-Menüs genannt, haben ebenfalls die Rolle `menu`.

Obwohl der Begriff „Menü“ häufig für die Navigation auf Websites verwendet wird, ist die Rolle `menu` für Listen von Aktionen oder Funktionen vorgesehen, die komplexe Funktionalität erfordern, etwa die Verwaltung des Fokus in zusammengesetzten Widgets und die Navigation anhand des ersten Zeichens.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerelementen oder ein Widget sein, das sich öffnen und schließen lässt. Ein geschlossenes `menu`-Widget wird üblicherweise geöffnet oder sichtbar gemacht, indem eine Menüschaltfläche aktiviert, ein Menüpunkt ausgewählt wird, der ein Untermenü öffnet, oder ein Befehl aufgerufen wird – etwa <kbd>Umschalt + F10</kbd> unter Windows, womit ein Kontextmenü geöffnet wird.

Wenn Benutzer eine Auswahl in einem geöffneten Menü aktivieren, schließt sich das Menü normalerweise. Wenn die Auswahl ein Untermenü öffnet, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Beim Öffnen eines Menüs wird der Tastaturfokus auf den ersten Menüpunkt gesetzt. Damit das Menü über die Tastatur zugänglich ist, müssen Sie den [Fokus verwalten](https://primer.style/accessibility/design-guidance/focus-management/): Alle Menüpunkte innerhalb des `menu` müssen den Fokus erhalten können. Die Menüschaltfläche, die das Menü öffnet, und die Menüpunkte sind fokussierbar, nicht das Menü selbst.

Zu den Menüpunkten gehören [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüpunkte können den Fokus erhalten, aber nicht aktiviert werden.

Menüpunkte können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten den Fokus oder sind interaktiv.

Wurde ein `menu` durch eine Kontextaktion geöffnet, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus zum auslösenden Kontext zurückführen. Liegt der Fokus auf der Menüschaltfläche, öffnet <kbd>Enter</kbd> das Menü und setzt den Fokus auf den ersten Menüpunkt. Liegt der Fokus auf dem Menü selbst, schließt <kbd>Escape</kbd> das Menü und führt den Fokus zur Menüschaltfläche, zum übergeordneten Element in der Menüleiste oder zur Kontextaktion zurück, die das Menü geöffnet hat.

Elemente mit der Rolle `menu` haben implizit den Wert `vertical` für [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation). Verwenden Sie für ein horizontal ausgerichtetes Menü [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü dauerhaft sichtbar ist, sollten Sie stattdessen die Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) in Betracht ziehen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rollen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
  - : Rollen von Elementen innerhalb eines `menu` oder einer `menubar`, die zusammenfassend als „Menüpunkte“ bezeichnet werden. Sie müssen den Fokus erhalten können.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Menüpunkte können innerhalb einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt sein.
- Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
  - : Eine Trennlinie, die Abschnitte des Inhalts oder Gruppen von Menüpunkten innerhalb des Menüs voneinander abgrenzt.

- Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Für den `menu`-Container ist `tabindex` auf `-1` oder `0` gesetzt, für jeden Menüpunkt auf `-1`.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird auf die ID des fokussierten Menüpunkts gesetzt, sofern einer vorhanden ist.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob das Menü horizontal oder vertikal ausgerichtet ist; ohne Angabe gilt standardmäßig `vertical`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn eine sichtbare Beschriftung vorhanden ist, andernfalls `aria-label`. Setzen Sie entweder `aria-labelledby` auf die `id` des `menuitem` oder `button`, das beziehungsweise der die Anzeige des Menüs steuert, oder legen Sie die Beschriftung mit `aria-label` fest.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Wird nur auf dem Menücontainer gesetzt, um Elemente einzubeziehen, die keine DOM-Kindelemente des Containers sind. Wenn das Attribut gesetzt ist, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge ihrer Referenzierung und nach allen Elementen, die DOM-Kindelemente sind. Stellen Sie bei der Fokusverwaltung sicher, dass die visuelle Fokusreihenfolge mit dieser Lesereihenfolge für assistive Technologien übereinstimmt.

### Tastaturinteraktionen

- <kbd>Leertaste</kbd> / <kbd>Enter</kbd>
  - : Ist der Menüpunkt ein übergeordneter Menüpunkt, öffnet die Taste das Untermenü und verschiebt den Fokus auf dessen ersten Eintrag. Andernfalls aktiviert sie den Menüpunkt. Dadurch wird neuer Inhalt geladen und der Fokus auf die Überschrift gesetzt, die den Inhalt bezeichnet.
- <kbd>Escape</kbd>
  - : Schließt in einem Untermenü dieses Untermenü und verschiebt den Fokus auf den übergeordneten Menüpunkt oder das übergeordnete Element der Menüleiste.
- <kbd>Pfeil nach rechts</kbd>
  - : Verschiebt in einer Menüleiste den Fokus auf das nächste Element. Liegt der Fokus auf dem letzten Element, wird er auf das erste verschoben. Liegt der Fokus in einem Untermenü auf einem Element ohne weiteres Untermenü, wird das Untermenü geschlossen und der Fokus auf das nächste Element der Menüleiste verschoben. Andernfalls wird das Untermenü des neu fokussierten Elements der Menüleiste geöffnet, während der Fokus auf diesem übergeordneten Element bleibt. Befindet sich der Fokus weder in einer Menüleiste noch in einem Untermenü und nicht auf einem `menuitem` mit Untermenü, kann er optional auf das nächste fokussierbare Element verschoben werden, sofern er nicht bereits auf dem letzten fokussierbaren Element des Menüs liegt.
- <kbd>Pfeil nach links </kbd>
  - : Verschiebt den Fokus auf das vorherige Element der Menüleiste. Liegt der Fokus auf dem ersten Element, wird er auf das letzte verschoben. Innerhalb eines Untermenüs wird dieses geschlossen und der Fokus auf den übergeordneten Menüpunkt verschoben. Befindet sich der Fokus weder in einer Menüleiste noch in einem Untermenü, kann er optional auf das letzte fokussierbare Element verschoben werden, sofern er nicht auf dem ersten fokussierbaren Element des Menüs liegt.
- <kbd>Pfeil nach unten</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf dessen ersten Eintrag.
- <kbd>Pfeil nach oben</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf dessen letzten Eintrag.
- <kbd>Pos1</kbd>
  - : Verschiebt den Fokus auf das erste Element der Menüleiste.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element der Menüleiste.
- Beliebige Zeichentaste
  - : Verschiebt den Fokus auf das nächste Element der Menüleiste, dessen Name mit dem eingegebenen Zeichen beginnt. Beginnt kein Name mit diesem Zeichen, bleibt der Fokus unverändert.

## Beispiele

Im Folgenden finden Sie zwei Beispielimplementierungen von Menüs.

### Beispiel 1: Navigationsmenü

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Page Sections" />
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">Description</a>
    </li>
    <li role="presentation">
      <a
        role="menuitem"
        href="#associated_wai-aria_roles_states_and_properties">
        Associated WAI-ARIA roles, states, and properties
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#keyboard_interactions">
        Keyboard interactions
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#examples">Examples</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#specifications">Specifications</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#see_also">See Also</a>
    </li>
  </ul>
</div>
```

Um dieses standardmäßig zugängliche Navigations-Widget schrittweise zu erweitern, sollten die Klasse zum Ausblenden des `menu` und `tabindex="-1"` für die interaktiven Inhalte der Menüpunkte beim Laden per JavaScript hinzugefügt werden.

Wenn Sie ein „Menü“ für die Navigation auf einer Website einbinden, verwenden Sie nicht die Rolle `menu`. Verwenden Sie für die Hauptnavigation der Website stattdessen das native HTML-Element {{HTMLElement('nav')}} oder einfach eine Liste von Links. Die Rolle `menu` sollte zusammengesetzten Widgets vorbehalten bleiben, die eine Fokusverwaltung erfordern. Eine Erläuterung und weitere Beispiele finden Sie unter [ARIA-Praktiken für aufklappbare Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

### Beispiel 2: Auswahl der Textfarbe über ein Untermenü einer Menüleiste

Der folgende Codeausschnitt zeigt ein Pop-up-Menü innerhalb einer Menüleiste. Es wird angezeigt, wenn die Menüschaltfläche aktiviert wird. Über das Menü lässt sich die Textfarbe aus einer Liste von Farboptionen auswählen:

```html
<div>
  <button
    type="button"
    aria-haspopup="menu"
    aria-controls="colormenu"
    tabindex="0"
    aria-label="Text Color: purple">
    Purple
  </button>
  <ul role="menu" id="colormenu" aria-label="Color Options" tabindex="-1">
    <li
      role="menuitemradio"
      aria-checked="true"
      style="color: purple"
      tabindex="-1">
      Purple
    </li>
    <li
      role="menuitemradio"
      aria-checked="false"
      style="color: magenta"
      tabindex="-1">
      Magenta
    </li>
    <li
      role="menuitemradio"
      aria-checked="false"
      style="color: black;"
      tabindex="-1">
      Black
    </li>
  </ul>
</div>
```

Für die Schaltfläche, die das Menü öffnet, ist [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt. Damit wird ausdrücklich angegeben, dass das von ihr gesteuerte Pop-up ein `menu` ist.

Zum Öffnen eines Menüs interagieren Benutzer in der Regel mit einer Menüschaltfläche. Diese muss fokussierbar sein und sowohl auf Klicks als auch auf Tastatureingaben reagieren. Wenn die Schaltfläche den Fokus hat, sollte <kbd>Enter</kbd>, <kbd>Leertaste</kbd>, <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd> das Menü öffnen und den Fokus auf einen Menüpunkt setzen.

Beim Öffnen und Schließen des Menüs wird das Attribut [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) an der Schaltfläche entsprechend geändert. Bei geöffnetem Menü wird es hinzugefügt; bei geschlossenem Menü wird es entfernt oder auf `false` gesetzt. Der Wert `true` gibt an, dass das Menü angezeigt wird und durch Aktivieren der Menüschaltfläche geschlossen werden kann.

Wenn das Menü geöffnet ist und Benutzer mit den Pfeiltasten durch die Menüpunkte navigieren, erhält die Schaltfläche selbst normalerweise keinen Fokus. Stattdessen schließt <kbd>Escape</kbd> und optional <kbd>Umschalt + Tab</kbd> das Menü und führt den Fokus zur Menüschaltfläche zurück.

Die Rolle `menu` wurde auf {{HTMLElement('ul')}} gesetzt und kennzeichnet damit das Element `<ul>` als Menü.

Das Ein- und Ausblenden des Menüs kann mit CSS erfolgen. In diesen Codebeispielen können wir etwa Attributselektoren und Selektoren für unmittelbar nachfolgende Geschwisterelemente verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Im Navigationsbeispiel bleibt die Schaltfläche unverändert. Im Beispiel mit dem Untermenü wird die Schaltfläche aktualisiert, wenn Benutzer einen neuen Wert auswählen. In diesem Fall ist `aria-label="Text Color: purple"` auf dem Element `menu` gesetzt. Dadurch wird der zugängliche Name des Menüs als „Text Color: purple“ festgelegt: Er benennt den Zweck des Menüs (eine Textfarbe auswählen) und den aktuellen Wert (purple). Wenn eine neue Farbe ausgewählt wird, sollte auch der Wert der Eigenschaft `aria-label` aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
