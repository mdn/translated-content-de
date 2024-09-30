---
title: "ARIA: menu Rolle"
slug: Web/Accessibility/ARIA/Roles/menu_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `menu` Rolle ist eine Art Komposit-Widget, das eine Liste von Auswahlmöglichkeiten für den Benutzer bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung von üblichen Aktionen oder Funktionen dar, die der Benutzer ausführen kann. Die `menu` Rolle ist geeignet, wenn eine Liste von Menüelementen in einer Art und Weise präsentiert wird, die einem Menü in einer Desktop-Anwendung ähnelt. Untermenüs, auch bekannt als Kontextmenüs, haben ebenfalls die Rolle `menu`.

Während der Begriff "Menü" häufig als beschreibender Begriff für die Navigation auf Websites verwendet wird, ist die `menu` Rolle für eine Liste von Aktionen oder Funktionen gedacht, die komplexe Funktionalitäten erfordern, wie z. B. die Verwaltung des Fokus in Komposit-Widgets und die Navigation mit dem ersten Zeichen.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerungen oder ein Widget sein, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu` Widget wird normalerweise geöffnet, indem ein Menüschalter aktiviert wird, ein Element in einem Menü ausgewählt wird, das ein Untermenü öffnet, oder durch Ausführen eines Befehls, wie etwa <kbd>Shift + F10</kbd> in Windows, das ein kontextspezifisches Menü öffnet.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, schließt sich das Menü normalerweise. Wenn die Menüauswahl ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gesetzt. Um tastaturzugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: alle Menüelemente innerhalb des `menu` sind fokussierbar. Der Menüschalter, der das Menü öffnet, und die Menüelemente, nicht jedoch das Menü selbst, sind die fokussierbaren Elemente.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Menüelemente sind fokussierbar, können aber nicht aktiviert werden.

Menüelemente können in Elementen mit der [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den auslösenden Kontext zurücksetzen. Wenn der Fokus auf dem Menüschalter war, öffnet <kbd>Enter</kbd> das Menü und gibt den Fokus auf das erste Menüelement. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und setzt den Fokus auf den Menüschalter oder das übergeordnete Menübalkenelement (oder die Kontextaktion, die das Menü geöffnet hat).

Elemente mit der Rolle `menu` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `vertikal`. Für horizontal ausgerichtete Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, erwägen Sie die [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle stattdessen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rollen
  - : Rollen von Elementen innerhalb eines `menu` oder `menubar`, die kollektiv als "Menüelemente" bekannt sind und fokussierbar sein müssen.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Menüelemente können in einem [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) verschachtelt werden
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) Rolle

  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs voneinander unterscheidet

- [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) Attribut
  - : Der `menu` Container hat `tabindex` auf `-1` oder `0` gesetzt, und jedes Element im Menü hat `tabindex` auf `-1`.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Setzt auf die ID des fokussierten Elements, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Menüausrichtung horizontal oder vertikal ist; Standard ist `vertikal`, wenn ausgelassen.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, ansonsten verwenden Sie `aria-label`. Entweder setzen Sie `aria-labelledby` auf die `id` des `menuitem` oder `button`, das seine Anzeige steuert, oder verwenden Sie `aria-label`, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Nur beim Menücontainer setzen, um Elemente einzubeziehen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Lese-Reihenfolge in der angegebenen Reihenfolge und nach allen DOM-Kindern. Stellen Sie sicher, dass die visuelle Fokus-Reihenfolge mit dieser assistiven Technologie-Lesereihenfolge übereinstimmt, wenn Sie den Fokus verwalten.

### Tastaturinteraktionen

- <kbd>Space</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neue Inhalte lädt und den Fokus auf die Überschrift setzt, die den Inhalt betitelt.
- <kbd>Escape</kbd>
  - : Wenn Sie sich in einem Untermenü befinden, schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menü- oder Menübalkenelement.
- <kbd>Right Arrow</kbd>
  - : In einer Menübalken bewegt sich der Fokus auf das nächste Element im Menübalken. Wenn der Fokus auf dem letzten Element liegt, wird der Fokus auf das erste Element verschoben. Wenn Sie sich in einem Untermenü befinden und der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element im Menübalken. Andernfalls öffnet es das Untermenü des neu fokussierten Menübalkenelements unter Beibehaltung des Fokus auf diesem übergeordneten Menübalkenelement. Wenn nicht in einer Menübalken oder Untermenü und nicht auf einem `menuitem` mit einem Untermenü, falls der Fokus nicht das letzte fokussierbare Element im Menü ist, verschiebt es optional den Fokus auf das nächste fokussierbare Element.
- <kbd>Left Arrow</kbd>
  - : Verschiebt den Fokus auf das vorherige Element im Menübalken. Wenn der Fokus auf dem ersten Element liegt, wird der Fokus auf das letzte Element verschoben. Wenn Sie sich in einem Untermenü befinden, schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn nicht in einem Menübalken oder Untermenü, falls der Fokus nicht das erste fokussierbare Element im Menü ist, verschiebt es optional den Fokus auf das letzte fokussierbare Element.
- <kbd>Down Arrow</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Up Arrow</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element im Menübalken.
- <kbd>End</kbd>
  - : Verschiebt den Fokus auf das letzte Element im Menübalken.
- Jede Zeichen-Taste
  - : Verschiebt den Fokus auf das nächste Element im Menübalken, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Unten sind zwei Beispiele für Menüimplementierungen.

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

Um dieses Standardmäßig barrierefreie Navigationswidget schrittweise zu verbessern, sollte die Klasse zum Ausblenden des `menu` und das Hinzufügen von `tabindex="-1"` zum interaktiven `menuitem` Inhalt mit JavaScript beim Laden hinzugefügt werden.

Wenn ein "menu" für die Navigation auf der Website enthalten ist, verwenden Sie nicht die `menu` Rolle. Verwenden Sie stattdessen für die Hauptnavigation der Website das native HTML {{HTMLElement('nav')}}-Element oder einfach eine Liste von Links. Die `menu` Rolle sollte für Komposit-Widgets reserviert werden, die ein Fokusmanagement erfordern. Siehe [ARIA-Praktiken für Offenlegungsnavigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) für eine Erklärung und zusätzliche Beispiele.

### Beispiel 2: Menübalken-Untermenü-Optionenauswahl

Der folgende Codeausschnitt ist ein Popup-Menü, das in einem Menübalken verschachtelt ist. Es wird angezeigt, wenn der Menüschalter aktiviert wird. Es ist ein Menü, um die Textfarbe aus einer Liste von Farboptionen auszuwählen:

```html
<div>
  <button
    type="button"
    aria-haspopup="menu"
    aria-controls="colormenu"
    tabindex="0"
    aria-label="Text Color: purple">
    Purple
    <span></span>
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

Der Schalter, der das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) gesetzt, um explizit anzugeben, dass das Popup, das er steuert, ein `menu` ist.

Damit ein Menü geöffnet werden kann, interagiert der Benutzer normalerweise mit einem Menüknopf als Öffner. Der Menüknopf muss fokussierbar sein und sowohl auf Klick- als auch auf Tastaturereignisse reagieren. Bei Fokus sollte die Auswahl von <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Down Arrow</kbd> oder <kbd>Up Arrow</kbd> das Menü öffnen und den Fokus auf ein Menüelement setzen.

Das Öffnen und Schließen des Menüs schaltet das [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut auf dem Knopf um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` zeigt an, dass das Menü angezeigt wird und das Aktivieren des Menüknopfs das Menü schließt.

Wenn das Menü geöffnet ist, erhält der Knopf normalerweise keinen Fokus, während Benutzer durch die Menüelemente navigieren. Stattdessen schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und gibt den Fokus auf den Menüknopf zurück.

Die `menu` Rolle wurde auf das {{HTMLElement('ul')}} gesetzt, um das `<ul>` Element als Menü zu identifizieren.

Das Anzeigen und Ausblenden des Menüs kann mit CSS erfolgen. Zum Beispiel können wir in diesen Codebeispielen den Attribut- und Nachbarselektor verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationsbeispiel hat einen statischen Knopf. Das Untermenü-Beispiel hat einen Knopf, der aktualisiert wird, wenn der Benutzer einen neuen Wert wählt. In diesem Fall ist `aria-label="Text Color: purple"` auf das `menu` Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; der den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila) identifiziert. Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label` Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
