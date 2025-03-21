---
title: "ARIA: Rolle `menu`"
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: 4fb534a833a611d31aa3c0ee26ea877f8f0704b5
---

Die Rolle `menu` ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung von allgemeinen Aktionen oder Funktionen dar, die der Benutzer ausführen kann. Die Rolle `menu` ist geeignet, wenn eine Liste von Menüpunkten auf ähnliche Weise wie ein Menü in einer Desktop-Anwendung präsentiert wird. Untermenüs, auch bekannt als Pop-up-Menüs, haben ebenfalls die Rolle `menu`.

Obwohl der Begriff "Menü" allgemein verwendet wird, um die Navigation auf der Website zu beschreiben, ist die Rolle `menu` für eine Liste von Aktionen oder Funktionen gedacht, die eine komplexe Funktionalität erfordern, wie zum Beispiel die Verwaltung des Fokus bei zusammengesetzten Widgets und die Navigation mit dem ersten Zeichen.

Ein Menü kann eine ständig sichtbare Liste von Steuerelementen oder ein Widget sein, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird normalerweise geöffnet oder sichtbar gemacht, indem man einen Menüknopf aktiviert, ein Element in einem Menü auswählt, das ein Untermenü öffnet, oder indem man einen Befehl ausführt, wie zum Beispiel <kbd>Umschalt + F10</kbd> in Windows, das ein kontextspezifisches Menü öffnet.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, wird das Menü in der Regel geschlossen. Wenn die Menüauswahl ein Untermenü aufruft, bleibt das Menü geöffnet, und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gesetzt. Um tastaturzugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachfahren: Alle Menüpunkte innerhalb des `menu` müssen fokussierbar sein. Der Menüknopf, der das Menü öffnet, und die Menüpunkte, anstatt des Menüs selbst, sind die fokussierbaren Elemente.

Menüpunkte umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüpunkte sind fokussierbar, können jedoch nicht aktiviert werden.

Menüpunkte können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten den Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückbringen. Wenn der Fokus auf dem Menüknopf war, öffnet <kbd>Enter</kbd> das Menü und gibt den Fokus auf das erste Menüelement. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und gibt den Fokus auf den Menüknopf oder das übergeordnete Menühbarelement (oder die Kontextaktion, die das Menü geöffnet hat) zurück.

Elemente mit der Rolle `menu` haben einen impliziten Wert [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) von `vertical`. Für horizontal ausgerichtete Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü visuell dauerhaft ist, sollten Sie stattdessen die Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) in Betracht ziehen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rollen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
  - : Rollen von in einem enthaltenden `menu` oder `menubar` enthaltenen Elementen, bekannt als "Menüpunkte". Diese müssen den Fokus erhalten können.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Menüpunkte können in einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt werden.
- Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüpunkten im Menü trennt und unterscheidet.
- Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)
  - : Der `menu`-Container hat `tabindex` auf `-1` oder `0` gesetzt und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Setzt die ID des fokussierten Elements, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Menüausrichtung horizontal oder vertikal ist; Standard `vertical`, wenn weggelassen.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder das `aria-labelledby` auf eine das `id` zum `menuitem` oder `button` setzen, das dessen Anzeige steuert, oder das `aria-label` verwenden, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Nur bei dem Menücontainer auf einstellen, um Elemente einzubeziehen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Achten Sie beim Verwalten des Fokus darauf, dass die visuelle Fokusreihenfolge mit dieser Lesereihenfolge assistiver Technologien übereinstimmt.

### Tastaturinteraktionen

- <kbd>Space</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neue Inhalte lädt und den Fokus auf die Überschrift legt, die die Inhalte betitelt.
- <kbd>Escape</kbd>
  - : Befindet sich in einem Untermenü, schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menü- oder Menübarelement.
- <kbd>Rechtspfeil</kbd>
  - : In einer Menüleiste verschiebt es den Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element liegt, verschiebt es den Fokus auf das erste Element. Wenn in einem Untermenü der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menübarknotens und behält den Fokus auf diesem übergeordneten Menübarknoten. Wenn nicht in einer Menüleiste oder einem Untermenü und nicht auf einem `menuitem` mit einem Untermenü, verschiebt es optional den Fokus auf das nächste fokussierbare Element, sofern der Fokus nicht das letzte fokussierbare Element im Menü ist.
- <kbd>Linkspfeil </kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Menüleiste. Wenn der Fokus auf dem ersten Element liegt, verschiebt es den Fokus auf das letzte Element. Befindet sich in einem Untermenü, schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüpünktchen. Wenn nicht in einer Menüleiste oder einem Untermenü, verschiebt es optional den Fokus auf das erste fokussierbare Element im Menü, sofern der Fokus nicht das erste fokussierbare Element ist.
- <kbd>Abwärtspfeil</kbd>
  - : Öffnet Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Aufwärtspfeil</kbd>
  - : Öffnet Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Jede Zeichentaste
  - : Verschiebt den Fokus auf das nächste Element in der Menüleiste, dessen Name mit dem eingegebenen Zeichen beginnt. Beginnt keiner der Elemente mit dem eingegebenen Zeichen, verschiebt sich der Fokus nicht.

## Beispiele

Nachfolgend sind zwei Implementierungsbeispiele für Menüs.

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

Um dieses Navigations-Widget fortschreitend zu verbessern, das standardmäßig zugänglich ist, sollte die Klasse zum Ausblenden des `menu` und das Hinzufügen von `tabindex="-1"` für den interaktiven Menüinhalt beim Laden mit JavaScript erfolgen.

Beim Einfügen eines "Menüs" zur Seitennavigation verwenden Sie nicht die Rolle `menu`. Verwenden Sie stattdessen für die Hauptnavigation der Website das native HTML-{{HTMLElement('nav')}}-Element oder einfach eine Liste von Links. Die Rolle `menu` sollte für zusammengesetzte Widgets reserviert werden, die eine Fokusverwaltung erfordern. Siehe [ARIA-Praktiken zur Offenlegungsnavigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) für eine Erklärung und zusätzliche Beispiele.

### Beispiel 2: Menüleisten-Untermenüoptionen-Schalter

Das folgende Code-Snippet ist ein Popup-Menü, das in einer Menüleiste verschachtelt ist. Es wird angezeigt, wenn der Menüknopf aktiviert ist. Es ist ein Menü, um die Textfarbe aus einer Liste von Farboptionen auszuwählen:

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

Der Knopf, der das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt, was ausdrücklich darauf hinweist, dass das von ihm gesteuerte Popup ein `menu` ist.

Damit ein Menü geöffnet wird, interagiert der Benutzer in der Regel mit einem Menüknopf als Öffner. Der Menüknopf muss fokussierbar sein und auf sowohl Klicks als auch Tastatureingaben reagieren. Wenn der Fokus liegt, sollte die Auswahl von <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Abwärtspfeil</kbd> oder <kbd>Aufwärtspfeil</kbd> das Menü öffnen und den Fokus auf ein Menüelement legen.

Das Öffnen und Schließen des Menüs schaltet das Attribut [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) auf dem Knopf um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` zeigt an, dass das Menü angezeigt wird und dass das Aktivieren des Menüknopfes das Menü schließt.

Wenn das Menü geöffnet ist, erhält der Knopf selbst in der Regel keinen Fokus, während Benutzer durch die Menüpunkte blättern. Vielmehr schließen <kbd>Escape</kbd> und optional <kbd>Umschalt + Tab</kbd> das Menü und geben den Fokus auf den Menüknopf zurück.

Die Rolle `menu` wurde auf dem {{HTMLElement('ul')}} gesetzt, wobei das `<ul>`-Element als Menü identifiziert wurde.

Das Ein- und Ausblenden des Menüs kann mit CSS durchgeführt werden. Zum Beispiel können wir in diesen Codebeispielen die Attribut- und Geschwisterselektoren verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationsbeispiel hat einen statischen Knopf. Das Untermenübeispiel hat einen Knopf, der aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall ist `aria-label="Text Color: purple"` auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
