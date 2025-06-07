---
title: "ARIA: Menürolle"
short-title: menu
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `menu`-Rolle ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung von häufig genutzten Aktionen oder Funktionen dar, die der Benutzer aufrufen kann. Die `menu`-Rolle ist angemessen, wenn eine Liste von Menüelementen ähnlich wie ein Menü in einer Desktop-Anwendung dargestellt wird. Untermenüs, auch als Pop-up-Menüs bekannt, haben ebenfalls die Rolle `menu`.

Obwohl der Begriff "Menü" im Allgemeinen zur Beschreibung der Seitennavigation verwendet wird, ist die `menu`-Rolle für eine Liste von Aktionen oder Funktionen vorgesehen, die komplexe Funktionalitäten erfordern, wie z.B. das Fokussieren von zusammengesetzten Widgets und die Navigation durch den ersten Buchstaben.

Ein Menü kann entweder eine dauerhaft sichtbare Liste von Steuerelementen oder ein Widget sein, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird normalerweise durch Aktivieren eines Menüknopfs, Auswählen eines Elements in einem Menü, das ein Untermenü öffnet, oder durch Aufrufen eines Befehls, wie <kbd>Shift + F10</kbd> in Windows, das ein kontextspezifisches Menü öffnet, sichtbar gemacht.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, schließt sich das Menü normalerweise. Wenn die Menüauswahlaktion ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gesetzt. Um mit der Tastatur zugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: Alle Menüelemente innerhalb des `menu` sind fokussierbar. Der Menüknopf, der das Menü öffnet, sowie die Menüelemente, und nicht das Menü selbst, sind die fokussierbaren Elemente.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüelemente sind fokussierbar, können jedoch nicht aktiviert werden.

Menüelemente können in Elementen mit der [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Rolle gruppiert und durch Elemente mit der [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Rolle getrennt werden. Weder `group` noch `separator` erhalten den Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus zurück zum aufrufenden Kontext führen. Wenn der Fokus auf dem Menüknopf war, öffnet <kbd>Enter</kbd> das Menü und setzt den Fokus auf das erste Menüelement. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und bringt den Fokus zurück zum Menüknopf oder übergeordneten Menüelement (oder der Kontextaktion, die das Menü geöffnet hat).

Elemente mit der Rolle `menu` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `vertical`. Für horizontal ausgerichtete Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, ziehen Sie die [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)-Rolle in Betracht.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)-Rollen
  - : Rollen von Elementen, die in einem enthaltenden `menu` oder `menubar` enthalten sind, bekannt als "Menüelemente". Diese müssen den Fokus erhalten können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Rolle
  - : Menüelemente können in einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt werden.
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Rolle

  - : Ein Trennzeichen, das Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs trennt und unterscheidet.

- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut
  - : Der `menu`-Container hat `tabindex` auf `-1` oder `0` gesetzt und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Menüausrichtung horizontal oder vertikal ist; standardmäßig `vertical`, wenn nicht angegeben.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder schließen Sie das `aria-labelledby` ein, das auf die `id` des `menuitem` oder `button` gesetzt ist, das dessen Anzeige steuert oder verwenden Sie `aria-label`, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Nur auf dem Menücontainer gesetzt, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Leserichtung in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Beim Verwalten des Fokus stellen Sie sicher, dass die visuelle Fokusreihenfolge mit dieser Leserichtung für unterstützende Technologien übereinstimmt.

### Tastaturinteraktionen

- <kbd>Leertaste</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neue Inhalte lädt und den Fokus auf die Überschrift setzt, die die Inhalte betitelt.
- <kbd>Escape</kbd>
  - : In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menü oder das Menüelement in der Menüleiste.
- <kbd>Pfeil-rechts</kbd>
  - : In einer Menüleiste verschiebt sich der Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element liegt, verschiebt er sich auf das erste Element. In einem Untermenü, wenn der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüleistelements und belässt den Fokus auf diesem übergeordneten Menüleistelement. Wenn nicht in einer Menüleiste oder einem Untermenü und nicht auf einem `menuitem` mit einem Untermenü, wenn der Fokus nicht das letzte fokussierbare Element im Menü ist, verschiebt er sich optional zum nächsten fokussierbaren Element.
- <kbd>Pfeil-links</kbd>
  - : Verschiebt den Fokus zum vorherigen Element in der Menüleiste. Wenn der Fokus auf dem ersten Element liegt, verschiebt er sich auf das letzte Element. In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn nicht in einer Menüleiste oder einem Untermenü, wenn der Fokus nicht das erste fokussierbare Element im Menü ist, verschiebt er sich optional zum letzten fokussierbaren Element.
- <kbd>Pfeil-runter</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus zum ersten Element im Untermenü.
- <kbd>Pfeil-hoch</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus zum letzten Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Jede Zeichentaste
  - : Verschiebt den Fokus auf das nächste Element in der Menüleiste, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Im Folgenden finden Sie zwei Beispiele für Menüimplementierungen.

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

Um dieses standardmäßig zugängliche Navigations-Widget schrittweise zu verbessern, sollte die Klasse zum Ausblenden des `menu` und die Aufnahme von `tabindex="-1"` auf dem interaktiven Menüelementinhalt beim Laden mit JavaScript hinzugefügt werden.

Bei der Einbindung eines "Menüs" für die Seitennavigation, verwenden Sie nicht die `menu`-Rolle. Verwenden Sie stattdessen für die Hauptseitennavigation das native HTML {{HTMLElement('nav')}}-Element oder einfach eine Liste von Links. Die `menu`-Rolle sollte für zusammengesetzte Widgets reserviert werden, die Fokussierung erfordern. Siehe [ARIA-Praktiken für die Offenlegungsnavigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) für eine Erklärung und zusätzliche Beispiele.

### Beispiel 2: Menüleiste Untermenü Optionsauswahl

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

Der Knopf, der das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt, was explizit anzeigt, dass das Popup, das es steuert, ein `menu` ist.

Um ein Menü zu öffnen, interagiert der Benutzer im Allgemeinen mit einem Menüknopf als Öffner. Der Menüknopf muss fokussierbar sein und sowohl auf Klick- als auch auf Tastaturereignisse reagieren. Wenn er fokussiert ist, sollten <kbd>Enter</kbd>, <kbd>Leertaste</kbd>, <kbd>Pfeil-runter</kbd> oder <kbd>Pfeil-hoch</kbd> das Menü öffnen und den Fokus auf ein Menüelement setzen.

Das Öffnen und Schließen des Menüs schaltet das Attribut [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) auf dem Button um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` zeigt an, dass das Menü angezeigt wird und dass die Aktivierung des Menüknopfs das Menü schließt.

Wenn das Menü geöffnet ist, erhält der Knopf selbst im Allgemeinen keinen Fokus, da Benutzer durch die Menüelemente navigieren. Vielmehr schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und bringt den Fokus zum Menüknopf zurück.

Die `menu`-Rolle wurde auf das {{HTMLElement('ul')}} gesetzt, wodurch das `<ul>`-Element als Menü identifiziert wird.

Das Anzeigen und Ausblenden des Menüs kann mit CSS durchgeführt werden. Zum Beispiel können wir in diesen Codebeispielen den Attribut- und Nachbarschafts-Selektor verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationselement hat einen statischen Button. Das Untermenü-Beispiel hat einen Button, der aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall ist das `aria-label="Text Color: purple"` auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft entsprechend aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
