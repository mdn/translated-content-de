---
title: "ARIA: menu Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `menu`-Rolle ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung häufiger Aktionen oder Funktionen dar, die der Benutzer aufrufen kann. Die `menu`-Rolle ist angemessen, wenn eine Liste von Menüelementen in einer Weise präsentiert wird, die einem Menü in einer Desktop-Anwendung ähnelt. Untermenüs, auch bekannt als Pop-up-Menüs, haben ebenfalls die Rolle `menu`.

Während der Begriff "Menü" generisch verwendet wird, um die Navigation auf Websites zu beschreiben, ist die `menu`-Rolle für eine Liste von Aktionen oder Funktionen vorgesehen, die komplexe Funktionalitäten erfordern, wie z.B. das Fokusmanagement von zusammengesetzten Widgets und die Navigation mit dem ersten Buchstaben.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerelementen sein oder ein Widget, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird normalerweise geöffnet oder sichtbar gemacht, indem ein Menükopf aktiviert, ein Element in einem Menü gewählt wird, das ein Untermenü öffnet, oder ein Befehl aufgerufen wird, wie z.B. <kbd>Shift + F10</kbd> in Windows, der ein kontextspezifisches Menü öffnet.

Wenn ein Benutzer eine Wahl in einem geöffneten Menü aktiviert, schließt sich das Menü normalerweise. Wenn die Menüwahl ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gesetzt. Um tastaturzugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: Alle Menüelemente innerhalb des `menu` sind fokussierbar. Der Menüknopf, der das Menü öffnet, und die Menüelemente, nicht das Menü selbst, sind die fokussierbaren Elemente.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüelemente sind fokussierbar, können jedoch nicht aktiviert werden.

Menüelemente können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den auslösenden Kontext zurückgeben. Wenn der Fokus auf dem Menüknopf lag, öffnet <kbd>Enter</kbd> das Menü und setzt den Fokus auf das erste Menüelement. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und gibt den Fokus an den Menüknopf oder das übergeordnete Menüleistelement (oder die Kontextaktion, die das Menü geöffnet hat) zurück.

Elemente mit der Rolle `menu` haben implizit den [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert `vertical`. Für horizontal orientierte Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü visuell dauerhaft sichtbar ist, ziehen Sie stattdessen die Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) in Betracht.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rollen
  - : Rollen von Elementen, die in einem enthaltenden `menu` oder `menubar` enthalten sind, zusammen bekannt als "Menüelemente". Diese müssen den Fokus erhalten können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Menüelemente können in einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt werden.
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) Rolle

  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs trennt und unterscheidet

- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut
  - : Der `menu`-Container hat `tabindex` auf `-1` oder `0` gesetzt und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Menüausrichtung horizontal oder vertikal ist; Standard ist `vertical`, wenn nicht angegeben.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder setzen Sie `aria-labelledby` auf die `id` des `menuitem` oder `button`, das seine Anzeige steuert, oder verwenden Sie `aria-label`, um das Label festzulegen.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Wird nur auf den Menücontainer gesetzt, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Lesenreihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen DOM-Kindern. Beim Fokusmanagement stellen Sie sicher, dass die visuelle Fokusreihenfolge dieser assistiven Technologie-Lesenreihenfolge entspricht.

### Tastaturinteraktionen

- <kbd>Leertaste</kbd> / <kbd>Eingabetaste</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und setzt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neuen Inhalt lädt und den Fokus auf die Überschrift des Inhalts setzt.
- <kbd>Escape</kbd>
  - : Bei einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menü- oder Menüleistenelement.
- <kbd>Pfeil nach rechts</kbd>
  - : In einer Menüleiste verschiebt es den Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element liegt, verschiebt es den Fokus auf das erste Element. In einem Untermenü, wenn der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüleistenelements und behält den Fokus auf diesem übergeordneten Menüleistenelement. Wenn es nicht in einer Menüleiste oder einem Untermenü ist und nicht auf einem `menuitem` mit einem Untermenü, bewegt es den Fokus optional auf das nächstfokussierbare Element, wenn der Fokus nicht das letzte fokussierbare Element im Menü ist.
- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Menüleiste. Wenn der Fokus auf dem ersten Element liegt, verschiebt es den Fokus auf das letzte Element. In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn es nicht in einer Menüleiste oder einem Untermenü ist, bewegt es den Fokus optional auf das letzte fokussierbare Element, wenn der Fokus nicht das erste fokussierbare Element im Menü ist.
- <kbd>Pfeil nach unten</kbd>
  - : Öffnet das Untermenü und bewegt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : Öffnet das Untermenü und bewegt den Fokus auf das letzte Element im Untermenü.
- <kbd>Start</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Beliebige Zeichentaste
  - : Bewegt den Fokus auf das nächste Element in der Menüleiste, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Unten sind zwei Beispielimplementierungen eines Menüs.

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

Um dieses standardmäßig zugängliche Navigations-Widget progressiv zu verbessern, sollten die Klasse zum Ausblenden des `menu` und das Hinzufügen von `tabindex="-1"` auf dem interaktiven Menüinhaltsinhalt beim Laden mit JavaScript hinzugefügt werden.

Wenn Sie ein "menu" für die Navigation auf der Website einfügen, verwenden Sie nicht die `menu`-Rolle. Verwenden Sie stattdessen für die Hauptnavigation der Website das native HTML-{{HTMLElement('nav')}}-Element oder einfach eine Liste von Links. Die `menu`-Rolle sollte zusammengesetzten Widgets vorbehalten sein, die ein Fokusmanagement erfordern. Siehe [ARIA-Praktiken für Disclosure Navigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) für eine Erklärung und zusätzliche Beispiele.

### Beispiel 2: Menüleiste Untermenü-Optionenwähler

Der folgende Codeausschnitt ist ein Popup-Menü, das in einer Menüleiste verschachtelt ist. Es wird angezeigt, wenn der Menüknopf aktiviert wird. Es ist ein Menü zur Auswahl der Textfarbe aus einer Liste von Farboptionen:

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

Der Knopf, der das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt und zeigt explizit an, dass das Popup, das es steuert, ein `menu` ist.

Damit ein Menü geöffnet wird, interagiert der Benutzer im Allgemeinen mit einem Menüknopf als Öffner. Der Menüknopf muss fokussierbar sein und auf sowohl Klick- als auch Tastatureingaben reagieren. Wenn fokussiert, sollte durch Auswahl von <kbd>Enter</kbd>, <kbd>Leertaste</kbd>, <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd> das Menü geöffnet und der Fokus auf ein Menüelement gesetzt werden.

Das Öffnen und Schließen des Menüs schaltet das Attribut [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) am Knopf um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` zeigt an, dass das Menü angezeigt wird und dass die Aktivierung des Menüknopfs das Menü schließt.

Wenn das Menü geöffnet ist, erhält der Knopf selbst in der Regel keinen Fokus, während Benutzer durch die Menüelemente navigieren. Stattdessen schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und gibt den Fokus an den Menüknopf zurück.

Die `menu`-Rolle wurde auf das {{HTMLElement('ul')}} gesetzt, um das `<ul>`-Element als Menü zu identifizieren.

Das Anzeigen und Ausblenden des Menüs kann mit CSS erfolgen. Zum Beispiel können in diesen Codebeispielen Attribut- und Nachbarselektoren verwendet werden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationbeispiel hat einen statischen Knopf. Das Untermenübeispiel hat einen Knopf, der aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall ist das `aria-label="Text Color: purple"` auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
