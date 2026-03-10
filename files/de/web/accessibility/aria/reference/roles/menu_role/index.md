---
title: "ARIA: menu Rolle"
short-title: menu
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Die `menu` Rolle ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` repräsentiert im Allgemeinen eine Gruppierung von gängigen Aktionen oder Funktionen, die der Benutzer ausführen kann. Die `menu` Rolle ist geeignet, wenn eine Liste von Menüelementen in einer Weise dargestellt wird, die einem Menü in einer Desktop-Anwendung ähnelt. Untermenüs, auch als Pop-up-Menüs bekannt, haben ebenfalls die Rolle `menu`.

Obwohl der Begriff "Menü" generisch verwendet wird, um die Navigation auf einer Website zu beschreiben, ist die `menu` Rolle für eine Liste von Aktionen oder Funktionen gedacht, die komplexe Funktionalitäten erfordern, wie z.B. das Management des Fokus in zusammengesetzten Widgets und die Navigation mit dem ersten Zeichen.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerungen oder ein Widget sein, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu` Widget wird normalerweise durch Aktivieren einer Menütaste, durch das Auswählen eines Elements in einem Menü, das ein Untermenü öffnet, oder durch Ausführen eines Befehls wie <kbd>Shift + F10</kbd> in Windows, welches ein kontextspezifisches Menü öffnet, sichtbar gemacht.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, schließt sich das Menü normalerweise. Wenn die Aktion der Menüübereinstimmung ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gelegt. Um für Tastaturen zugänglich zu sein, müssen Sie den [Fokus verwalten](https://primer.style/accessibility/design-guidance/focus-management/) für alle Nachfahren: Alle Menüelemente innerhalb des `menu` sind fokusierbar. Die Menütaste, die das Menü öffnet, und die Menüelemente sind die fokussierbaren Elemente, nicht das Menü selbst.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüelemente können fokussiert, aber nicht aktiviert werden.

Menüelemente können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten den Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, können <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückbringen. Wenn der Fokus auf der Menütaste war, öffnet <kbd>Enter</kbd> das Menü und verleiht dem ersten Menüelement den Fokus. Wenn der Fokus auf dem Menü selbst ist, schließt <kbd>Escape</kbd> das Menü und bringt den Fokus zurück zur Menütaste oder zum übergeordneten Menübalkenelement (oder zur Kontextaktion, die das Menü geöffnet hat).

Elemente mit der Rolle `menu` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Wert von `vertical`. Für horizontal orientierte Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, ziehen Sie stattdessen die [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle in Betracht.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rollen
  - : Rollen von Elementen, die in einem enthaltenen `menu` oder `menubar` enthalten sind, zusammen bekannt als "menu items". Diese müssen den Fokus erhalten können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Menüelemente können in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt werden.
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) Rolle
  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs trennt und unterscheidet.

- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut
  - : Der `menu` Container hat `tabindex` auf `-1` oder `0` gesetzt, und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Menüorientierung horizontal oder vertikal ist; standardmäßig auf `vertical` gesetzt, wenn nicht angegeben.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss über einen zugänglichen Namen verfügen. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder das `aria-labelledby` setzen auf die `id` des `menuitem` oder `button`, das seine Anzeige steuert, oder `aria-label` verwenden, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Nur auf den Menücontainer setzen, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Leserichtung in der Reihenfolge, in der sie referenziert werden, und nach allen DOM-Kindern. Achten Sie bei der Verwaltung des Fokus darauf, dass die visuelle Fokusrichtung dieser assistierenden Technologie-Leserichtung entspricht.

### Tastaturinteraktionen

- <kbd>Leertaste</kbd> / <kbd>Eingabetaste</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und bewegt den Fokus zum ersten Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neuen Inhalt lädt und den Fokus auf die Überschrift legt, die den Inhalt betitelt.
- <kbd>Escape</kbd>
  - : Bei einem Untermenü schließt es das Untermenü und bewegt den Fokus zum übergeordneten Menü- oder Menübalkenelement.
- <kbd>Pfeil nach rechts</kbd>
  - : In einem Menübalken bewegt es den Fokus zum nächsten Element im Menübalken. Wenn der Fokus auf dem letzten Element liegt, bewegt er den Fokus zum ersten Element. In einem Untermenü, wenn der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und bewegt den Fokus zum nächsten Element im Menübalken. Andernfalls öffnet es das Untermenü des neu fokussierten Menübalkenelements, wobei der Fokus auf diesem übergeordneten Menübalkenelement bleibt. Wenn nicht in einem Menübalken oder Untermenü und nicht auf einem `menuitem` mit einem Untermenü, bewegt es, wenn der Fokus nicht auf dem letzten fokussierbaren Element im Menü liegt, optional den Fokus zum nächsten fokussierbaren Element.
- <kbd>Pfeil nach links</kbd>
  - : Bewegt den Fokus zum vorherigen Element im Menübalken. Wenn der Fokus auf dem ersten Element liegt, bewegt er den Fokus zum letzten Element. In einem Untermenü schließt es das Untermenü und bewegt den Fokus zum übergeordneten Menüelement. Wenn nicht in einem Menübalken oder Untermenü, bewegt es, wenn der Fokus nicht auf dem ersten fokussierbaren Element im Menü liegt, optional den Fokus zum letzten fokussierbaren Element.
- <kbd>Pfeil nach unten</kbd>
  - : Öffnet das Untermenü und bewegt den Fokus zum ersten Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : Öffnet das Untermenü und bewegt den Fokus zum letzten Element im Untermenü.
- <kbd>Home</kbd>
  - : Bewegt den Fokus zum ersten Element im Menübalken.
- <kbd>Ende</kbd>
  - : Bewegt den Fokus zum letzten Element im Menübalken.
- Jede Zeichen-Taste
  - : Bewegt den Fokus zum nächsten Element im Menübalken, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Unten sind zwei Beispielimplementierungen von Menüs.

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

Um dieses Navigations-Widget, das standardmäßig zugänglich ist, progressiv zu verbessern, sollten die Klasse, die das `menu` versteckt und das Einfügen von `tabindex="-1"` auf dem interaktiven `menuitem`-Inhalt, mit JavaScript beim Laden hinzugefügt werden.

Wenn Sie ein "Menü" für die Seitennavigation einfügen, verwenden Sie nicht die `menu` Rolle. Verwenden Sie stattdessen für die Hauptnavigation der Website das native HTML {{HTMLElement('nav')}} Element oder einfach eine Liste von Links. Die `menu` Rolle sollte für zusammengesetzte Widgets reserviert sein, die ein Fokusmanagement erfordern. Siehe [ARIA-Praktiken für Offenlegungsnavigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) für eine Erklärung und weitere Beispiele.

### Beispiel 2: Menübalken-Untermenü-Optionsauswahl

Der folgende Code-Schnipsel ist ein Popup-Menü, das in einem Menübalken verschachtelt ist. Es wird angezeigt, wenn die Menütaste aktiviert wird. Es ist ein Menü zum Auswählen der Textfarbe aus einer Liste von Farboptionen:

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

Die Schaltfläche, die das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt, was explizit darauf hinweist, dass das Popup, das es steuert, ein `menu` ist.

Damit ein Menü geöffnet wird, interagiert der Benutzer in der Regel mit einer Menütaste als Öffner. Die Menütaste muss fokussierbar sein und auf sowohl Klick- als auch Tastaturereignisse reagieren. Wenn sie fokussiert ist, sollte das Auswählen von <kbd>Eingabetaste</kbd>, <kbd>Leertaste</kbd>, <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd> das Menü öffnen und den Fokus auf ein Menüelement legen.

Das Öffnen und Schließen des Menüs wechselt das [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut auf der Schaltfläche. Es wird hinzugefügt, wenn das Menü offen ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der `true` Wert zeigt an, dass das Menü angezeigt wird und das Aktivieren der Menütaste das Menü schließt.

Wenn das Menü geöffnet ist, erhält die Schaltfläche selbst normalerweise keinen Fokus, während Benutzer durch die Menüelemente navigieren. Vielmehr schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und kehrt den Fokus zur Menütaste zurück.

Die `menu` Rolle wurde auf dem {{HTMLElement('ul')}} gesetzt und identifiziert das `<ul>` Element als Menü.

Das Anzeigen und Verstecken des Menüs kann mit CSS erfolgen. Zum Beispiel können wir in diesen Code-Beispielen die Attribut- und Nachbar-Selektoren verwenden, um die Sichtbarkeit des Menüs zu steuern:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationsbeispiel hat eine statische Schaltfläche. Das Untermenü-Beispiel hat eine Schaltfläche, die aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall wird das `aria-label="Text Color: purple"` auf dem `menu` Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: Lila"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (Lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label` Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
