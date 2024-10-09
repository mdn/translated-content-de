---
title: "ARIA: menu Rolle"
slug: Web/Accessibility/ARIA/Roles/menu_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Die `menu`-Rolle ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung von üblichen Aktionen oder Funktionen dar, die der Benutzer ausführen kann. Die `menu`-Rolle ist geeignet, wenn eine Liste von Menüelementen in einer Art und Weise präsentiert wird, die einem Menü in einer Desktop-Anwendung ähnelt. Untermenüs, auch bekannt als Pop-up-Menüs, haben ebenfalls die Rolle `menu`.

Während der Begriff "Menü" allgemein verwendet wird, um die Seitennavigation zu beschreiben, ist die `menu`-Rolle für eine Liste von Aktionen oder Funktionen gedacht, die eine komplexe Funktionalität erfordern, wie z.B. das Fokusmanagement für zusammengesetzte Widgets und die Navigation über den ersten Buchstaben.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerungen sein oder ein Widget, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird in der Regel geöffnet oder sichtbar gemacht, indem eine Menütaste aktiviert, ein Element in einem Menü ausgewählt wird, das ein Untermenü öffnet, oder ein Befehl aufgerufen wird, wie z.B. <kbd>Shift + F10</kbd> in Windows, das ein kontextspezifisches Menü öffnet.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, schließt sich das Menü in der Regel. Wenn die Menüauswahl ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gesetzt. Um Tastaturzugänglichkeit zu gewährleisten, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: alle Menüeinträge innerhalb des `menu` sind fokussierbar. Die Menütaste, die das Menü öffnet, und die Menüeinträge, nicht das Menü selbst, sind die fokussierbaren Elemente.

Menüeinträge umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Menüelemente sind fokussierbar, aber nicht aktivierbar.

Menüeinträge können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den auslösenden Kontext zurückbringen. Wenn der Fokus auf der Menütaste lag, öffnet <kbd>Enter</kbd> das Menü und gibt den Fokus auf das erste Menüelement. Wenn der Fokus auf dem Menü selbst ist, schließt <kbd>Escape</kbd> das Menü und gibt den Fokus auf die Menütaste oder das übergeordnete Menüleistelement (oder die Kontextaktion, die das Menü geöffnet hat) zurück.

Elemente mit der Rolle `menu` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `vertical`. Für horizontal ausgerichtete Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, überlegen Sie, die Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) zu verwenden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rollen von Elementen, die in einem enthaltenden `menu` oder `menubar` enthalten sind, bekannt zusammenfassend als "Menüelemente". Diese müssen den Fokus erhalten können.
- Menüelemente können in einem [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) verschachtelt werden.
- Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs trennt und unterscheidet.

  - Das `menu`-Container hat `tabindex` auf `-1` oder `0` gesetzt, und jedes Element im Menü hat `tabindex` auf `-1`.
  - : Setzen Sie auf die ID des fokussierten Elements, falls vorhanden.
  - : Zeigt an, ob die Menürichtung horizontal oder vertikal ist; standardmäßig `vertical`, falls weggelassen.
  - : Das `menu` benötigt einen zugänglichen Namen. Verwenden Sie `aria-labelledby`, falls ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder das `aria-labelledby` auf die `id` des `menuitem` oder `button` setzen, der die Anzeige steuert, oder `aria-label` verwenden, um das Label zu definieren.
  - : Nur auf den Menücontainer setzen, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Beim Verwalten des Fokus sicherstellen, dass die visuelle Fokusreihenfolge mit dieser Lesereihenfolge für Hilfstechnologien übereinstimmt.

### Tastaturinteraktionen

- <kbd>Space</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls wird das Menüelement aktiviert, das neue Inhalte lädt und den Fokus auf die Überschrift legt, die die Inhalte betitelt.
- <kbd>Escape</kbd>
  - : Schließt ein Untermenü und verschiebt den Fokus auf das übergeordnete Menü oder Menüleistelement.
- <kbd>Rechte Pfeiltaste</kbd>
  - : In einer Menüleiste bewegt den Fokus zum nächsten Element in der Menüleiste. Wenn der Fokus auf dem letzten Element ist, bewegt er den Fokus auf das erste Element. In einem Untermenü, wenn der Fokus auf einem Element ist, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüleistelements, während der Fokus auf diesem übergeordneten Menüleistelement bleibt. Wenn nicht in einer Menüleiste oder einem Untermenü und nicht auf einem `menuitem` mit einem Untermenü, wenn der Fokus nicht das letzte fokussierbare Element im Menü ist, verschiebt er optional den Fokus zum nächsten fokussierbaren Element.
- <kbd>Linke Pfeiltaste</kbd>
  - : Verschiebt den Fokus zum vorherigen Element in der Menüleiste. Wenn der Fokus auf dem ersten Element ist, bewegt er den Fokus auf das letzte Element. In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn nicht in einer Menüleiste oder einem Untermenü, wenn der Fokus nicht das erste fokussierbare Element im Menü ist, verschiebt er optional den Fokus auf das letzte fokussierbare Element.
- <kbd>Pfeil nach unten</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>End</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Beliebige Zeichentaste
  - : Verschiebt den Fokus zum nächsten Element in der Menüleiste, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

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

Um dieses Navigations-Widget, das standardmäßig zugänglich ist, schrittweise zu verbessern, sollten die Klasse zum Verstecken des `menu` und die Aufnahme von `tabindex="-1"` auf den interaktiven `menuitem`-Inhalt beim Laden mit JavaScript hinzugefügt werden.

Verwenden Sie beim Einfügen eines "menu" für die Seitennavigation nicht die `menu`-Rolle. Verwenden Sie lieber das native HTML-{{HTMLElement('nav')}}-Element oder einfach eine Liste von Links für die Hauptnavigation der Website. Die `menu`-Rolle sollte für zusammengesetzte Widgets reserviert werden, die ein Fokusmanagement erfordern. Siehe [ARIA-Praktiken für Disclosure-Navigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) für eine Erklärung und zusätzliche Beispiele.

### Beispiel 2: Menüleisten-Untermenü-Optionenwähler

Der folgende Codeausschnitt ist ein Popup-Menü, das in einer Menüleiste verschachtelt ist. Es wird angezeigt, wenn die Menütaste aktiviert ist. Es ist ein Menü zur Auswahl der Textfarbe aus einer Liste von Farboptionen:

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

Die Schaltfläche, die das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) gesetzt, das explizit angibt, dass das Popup, das es steuert, ein `menu` ist.

Um ein Menü zu öffnen, interagiert der Benutzer in der Regel mit einer Menütaste als Öffner. Die Menütaste muss fokussierbar sein und sowohl auf Klick- als auch auf Tastaturereignisse reagieren. Bei Fokus sollten <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Down Arrow</kbd> oder die <kbd>Up Arrow</kbd> das Menü öffnen und den Fokus auf ein Menüelement setzen.

Das Öffnen und Schließen des Menüs toggelt das Attribut [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) auf der Schaltfläche. Es wird hinzugefügt, wenn das Menü geöffnet ist. Es wird entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` gibt an, dass das Menü angezeigt wird und dass das Aktivieren der Menütaste das Menü schließt.

Wenn das Menü geöffnet ist, erhält die Schaltfläche selbst im Allgemeinen keinen Fokus, da Benutzer durch die Artikelliste navigieren. Vielmehr schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und kehrt den Fokus zur Menütaste zurück.

Die `menu`-Rolle wurde auf dem {{HTMLElement('ul')}} gesetzt, das `<ul>`-Element als ein Menü identifizierend.

Das Anzeigen und Verbergen des Menüs kann mit CSS erfolgen. So können in diesen Codebeispielen der Attribut- und Nachbarselektor verwendet werden, um die Sichtbarkeit des Menüs zu schalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationsbeispiel hat eine statische Schaltfläche. Das Untermenübeispiel hat eine Schaltfläche, die aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall wird `aria-label="Text Color: purple"` auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
