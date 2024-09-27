---
title: "ARIA: menu Rolle"
slug: Web/Accessibility/ARIA/Roles/menu_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `menu`-Rolle ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung von häufigen Aktionen oder Funktionen dar, die der Benutzer aufrufen kann. Die `menu`-Rolle ist geeignet, wenn eine Liste von Menüelementen ähnlich wie eine Menüleiste in einer Desktop-Anwendung präsentiert wird. Untermenüs, auch bekannt als Popup-Menüs, haben ebenfalls die Rolle `menu`.

Obwohl der Begriff "Menü" allgemein verwendet wird, um die Navigation auf Websites zu beschreiben, ist die `menu`-Rolle für eine Liste von Aktionen oder Funktionen vorgesehen, die komplexe Funktionalitäten erfordern, wie z.B. die Verwaltung des Fokus von zusammengesetzten Widgets und die Navigation mit dem ersten Zeichen.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerelementen oder ein Widget sein, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird in der Regel geöffnet oder sichtbar gemacht, indem ein Menü-Button aktiviert, ein Element in einem Menü ausgewählt wird, das ein Untermenü öffnet, oder indem ein Befehl aufgerufen wird, wie z.B. <kbd>Shift + F10</kbd> in Windows, das ein kontextabhängiges Menü öffnet.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü trifft, schließt sich das Menü normalerweise. Wenn die Menüauswahl ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüüberelement gelegt. Um mit der Tastatur zugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: Alle Menüelemente im `menu` sind fokussierbar. Der Menü-Button, der das Menü öffnet, und die Menüelemente, nicht jedoch das Menü selbst, sind die fokussierbaren Elemente.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Menüelemente sind fokussierbar, können jedoch nicht aktiviert werden.

Menüelemente können in Elementen mit der [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role)-Rolle gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten den Fokus oder sind interaktiv.

Wenn ein `menu` durch eine Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückkehren. Wenn der Fokus auf dem Menü-Button war, öffnet <kbd>Enter</kbd> das Menü und gibt den Fokus auf das erste Menüüberelement. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und gibt den Fokus auf den Menü-Button oder das übergeordnete Menüüberelement (oder die Kontextaktion, die das Menü geöffnet hat) zurück.

Elemente mit der Rolle `menu` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `vertical`. Für horizontal orientierte Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, sollten Sie stattdessen die [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)-Rolle in Betracht ziehen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rollen
  - : Rollen von Elementen, die in einem enthaltenen `menu` oder `menubar` enthalten sind, die zusammen als "Menüelemente" bekannt sind. Diese müssen den Fokus erhalten können.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Menüelemente können in einer [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) verschachtelt werden.
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) Rolle

  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen im Menü trennt und unterscheidet.

- [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) Attribut
  - : Der `menu`-Container hat `tabindex` auf `-1` oder `0` gesetzt und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Menüorientierung horizontal oder vertikal ist; standardmäßig `vertical`, wenn nicht angegeben.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Das `menu` ist erforderlich, einen zugänglichen Namen zu haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder fügen Sie das `aria-labelledby`-Set auf eine ID des `menuitem` oder `button` ein, das die Anzeige steuert oder verwenden `aria-label`, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Nur auf dem Menücontainer gesetzt, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, werden diese Elemente in der Lesereihenfolge in der Reihenfolge angezeigt, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Beim Verwalten des Fokus stellen Sie sicher, dass die visuelle Fokusreihenfolge dieser assistiven Technologie-Lesereihenfolge entspricht.

### Tastaturinteraktionen

- <kbd>Leertaste</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüüberelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neue Inhalte lädt und den Fokus auf die Überschrift legt, die die Inhalte betitelt.
- <kbd>Escape</kbd>
  - : In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menü oder Menüüberelement.
- <kbd>Rechter Pfeil</kbd>
  - : In einer Menüleiste verschiebt es den Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element liegt, verschiebt es den Fokus auf das erste Element. In einem Untermenü, wenn der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüüberelements, wobei der Fokus auf diesem übergeordneten Menüüberelement bleibt. Wenn nicht in einer Menüleiste oder einem Untermenü und nicht auf einem `menuitem` mit einem Untermenü, bewegt sich der Fokus optional auf das nächste fokussierbare Element, wenn der Fokus nicht auf dem letzten fokussierbaren Element im Menü ist.
- <kbd>Linker Pfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Menüleiste. Wenn der Fokus auf dem ersten Element liegt, verschiebt es den Fokus auf das letzte Element. In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn nicht in einer Menüleiste oder einem Untermenü, bewegt sich der Fokus optional auf das letzte fokussierbare Element, wenn der Fokus nicht auf dem ersten fokussierbaren Element im Menü liegt.
- <kbd>Abwärts-Pfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Aufwärts-Pfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>End</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Jede Zeichen-Taste
  - : Verschiebt den Fokus auf das nächste Element in der Menüleiste, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Unten finden Sie zwei Beispielimplementierungen von Menüs.

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

Um dieses standardmäßig zugängliche Navigations-Widget progressiv zu verbessern, sollte die Klasse zum Ausblenden des `menu` und die Einbeziehung von `tabindex="-1"` auf dem interaktiven Menüinhalt beim Laden mit JavaScript hinzugefügt werden.

Beim Einfügen eines „Menus“ für die Site-Navigation verwenden Sie nicht die `menu`-Rolle. Verwenden Sie stattdessen für die Hauptnavigation der Site das native HTML {{HTMLElement('nav')}}-Element oder einfach eine Liste von Links. Die `menu`-Rolle sollte zusammengesetzten Widgets vorbehalten sein, die eine Fokusverwaltung erfordern. Siehe [ARIA-Praxis für Aufklappnavigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) für eine Erklärung und zusätzliche Beispiele.

### Beispiel 2: Menüleiste Untermenü-Optionsauswahl

Der folgende Codeausschnitt ist ein Popup-Menü, das in einer Menüleiste eingebettet ist. Es wird angezeigt, wenn der Menü-Button aktiviert ist. Es ist ein Menü zur Auswahl der Textfarbe aus einer Liste von Farboptionen:

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

Der Button, der das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) gesetzt, was explizit anzeigt, dass das Popup, das es steuert, ein `menu` ist.

Um ein Menü zu öffnen, interagiert der Benutzer im Allgemeinen mit einem Menü-Button als Öffner. Der Menü-Button muss fokussierbar sein und sowohl auf Klick- als auch auf Tastaturereignisse reagieren. Bei Fokus sollte <kbd>Enter</kbd>, <kbd>Leertaste</kbd>, <kbd>Abwärts-Pfeil</kbd> oder der <kbd>Aufwärts-Pfeil</kbd> das Menü öffnen und den Fokus auf ein Menüelement legen.

Das Öffnen und Schließen des Menüs schaltet das [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut am Button um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` gibt an, dass das Menü angezeigt wird und dass die Aktivierung des Menü-Buttons das Menü schließt.

Wenn das Menü geöffnet ist, erhält der Button selbst im Allgemeinen keinen Fokus, während Benutzer durch die Menüelemente navigieren. <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> schließen das Menü und geben den Fokus zurück auf den Menü-Button.

Die `menu`-Rolle wurde auf das {{HTMLElement('ul')}} gesetzt, um das `<ul>` Element als Menü zu identifizieren.

Das Anzeigen und Ausblenden des Menüs kann mit CSS erfolgen. Zum Beispiel können wir in diesen Codebeispielen die Attribut- und Nachbarselektoren verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationselement hat einen statischen Button. Das Untermenübeispiel hat einen Button, der aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall ist `aria-label="Text Color: purple"` auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
