---
title: "ARIA: Menü-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `menu`-Rolle ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` repräsentiert in der Regel eine Gruppierung von häufigen Aktionen oder Funktionen, die der Benutzer aufrufen kann. Die `menu`-Rolle eignet sich, wenn eine Liste von Menüelementen ähnlich wie in einer Desktop-Anwendung präsentiert wird. Untermenüs, auch bekannt als Pop-up-Menüs, haben ebenfalls die Rolle `menu`.

Obwohl der Begriff "Menü" generell zur Beschreibung der Seitennavigation verwendet wird, ist die `menu`-Rolle für eine Liste von Aktionen oder Funktionen gedacht, die komplexe Funktionalität erfordern, wie z. B. das Fokussieren von zusammengesetzten Widgets und die Navigation über den ersten Buchstaben.

Ein Menü kann eine permanent sichtbare Liste von Steuerungselementen sein oder ein Widget, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird in der Regel durch die Aktivierung einer Menüschaltfläche geöffnet oder sichtbar gemacht, indem ein Element in einem Menü ausgewählt wird, das ein Untermenü öffnet, oder indem ein Befehl wie <kbd>Shift + F10</kbd> in Windows aufgerufen wird, der ein kontextspezifisches Menü öffnet.

Wenn ein Benutzer eine Wahl in einem geöffneten Menü aktiviert, schließt sich das Menü in der Regel. Wenn die Menüauswahl ein Untermenü aufruft, bleibt das Menü offen und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gesetzt. Um mit der Tastatur zugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: alle Menüpunkte im `menu` müssen fokussierbar sein. Die Menüschaltfläche, die das Menü öffnet, und die Menüpunkte, anstatt des Menüs selbst, sind die fokussierbaren Elemente.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüpunkte sind fokussierbar, können aber nicht aktiviert werden.

Menüpunkte können in Elementen mit der [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Rolle gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten den Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurücksetzen. Wenn der Fokus auf der Menüschaltfläche lag, öffnet <kbd>Enter</kbd> das Menü und gibt dem ersten Menuelement den Fokus. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und gibt den Fokus an die Menüschaltfläche oder das übergeordnete Menüleistelement zurück (oder die Kontextaktion, die das Menü geöffnet hat).

Elemente mit der Rolle `menu` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `vertical`. Für ein horizontal ausgerichtetes Menü verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, ziehen Sie stattdessen die [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)-Rolle in Betracht.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)-Rollen
  - : Rollen von Elementen, die in einem enthaltenden `menu` oder `menubar` enthalten sind, gemeinsam als "Menüpunkte" bekannt. Sie müssen fokussierbar sein.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)-Rolle
  - : Menüpunkte können in einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt werden.
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)-Rolle

  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs trennt und unterscheidet.

- [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut
  - : Der `menu`-Container hat `tabindex` auf `-1` oder `0` gesetzt, und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Menüausrichtung horizontal oder vertikal ist; standardmäßig auf `vertical`, wenn ausgelassen.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder schließen Sie das `aria-labelledby`-Attribut mit der `id` auf den das `menuitem` oder die `button`, die die Anzeige steuert, ein oder verwenden `aria-label`, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Nur auf dem Menücontainer gesetzt, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Stellen Sie bei der Verwaltung des Fokus sicher, dass die visuelle Fokusreihenfolge mit dieser Lesereihenfolge der unterstützenden Technologie übereinstimmt.

### Tastaturinteraktionen

- <kbd>Leertaste</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das dann neue Inhalte lädt und den Fokus auf die Überschrift richtet, die den Inhalt titelt.
- <kbd>Escape</kbd>
  - : In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menü- oder Menüelement.
- <kbd>Rechtspfeil</kbd>
  - : In einer Menüleiste verschiebt es den Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element liegt, verschiebt es den Fokus auf das erste Element. In einem Untermenü, wenn der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüelementes, wobei der Fokus auf diesem übergeordneten Menüelement bleibt. Wenn sich der Fokus nicht in einer Menüleiste oder einem Untermenü befindet und nicht auf einem `menuitem` mit einem Untermenü, verschiebt es den Fokus gegebenenfalls auf das nächste fokussierbare Element im Menü, wenn der Fokus nicht das letzte fokussierbare Element im Menü ist.
- <kbd>Linkspfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Menüleiste. Wenn der Fokus auf dem ersten Element liegt, verschiebt es den Fokus auf das letzte Element. In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menütaste. Wenn sich der Fokus nicht in einer Menüleiste oder einem Untermenü befindet, verschiebt es den Fokus gegebenenfalls auf das letzte fokussierbare Element im Menü, wenn der Fokus nicht das erste fokussierbare Element im Menü ist.
- <kbd>Abwärtspfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Aufwärtspfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Beliebige Zeichentaste
  - : Verschiebt den Fokus auf das nächste Element in der Menüleiste, dessen Name mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Nachfolgend sind zwei Beispielimplementierungen von Menüs aufgeführt.

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

Um dieses standardmäßig barrierefreie Navigations-Widget progressiv zu verbessern, sollten die Klasse zum Verbergen des `menu` und die Hinzufügung von `tabindex="-1"` auf dem interaktiven Menüelement-Inhalt mit JavaScript beim Laden hinzugefügt werden.

Beim Hinzufügen eines "Menüs" für die Seitennavigation verwenden Sie nicht die `menu`-Rolle. Verwenden Sie stattdessen für die Hauptnavigation der Seite das native HTML-{{HTMLElement('nav')}}-Element oder einfach eine Liste von Links. Die `menu`-Rolle sollte für zusammengesetzte Widgets reserviert werden, die eine Fokusverwaltung erfordern. Sehen Sie sich die [ARIA-Praktiken für Offenlegungsnavigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) an, um eine Erklärung und zusätzliche Beispiele zu erhalten.

### Beispiel 2: Menubar-Untermenü-Optionsauswähler

Der folgende Codeausschnitt ist ein Popupmenü, das in eine Menüleiste verschachtelt ist. Es wird angezeigt, wenn die Menüschaltfläche aktiviert wird. Es handelt sich um ein Menü, um die Textfarbe aus einer Liste von Farboptionen auszuwählen:

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

Die Schaltfläche, die das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt, was ausdrücklich darauf hinweist, dass das Popup, das sie steuert, ein `menu` ist.

Um ein Menü zu öffnen, interagiert der Benutzer in der Regel mit einer Menüschaltfläche als Öffner. Die Menüschaltfläche muss fokussierbar sein und sowohl auf Klicks als auch auf Tastaturereignisse reagieren. Wenn sie fokussiert ist, sollte das Auswählen von <kbd>Enter</kbd>, <kbd>Leertaste</kbd>, <kbd>Abwärtspfeil</kbd> oder <kbd>Aufwärtspfeil</kbd> das Menü öffnen und den Fokus auf ein Menüelement setzen.

Das Öffnen und Schließen des Menüs schaltet das Attribut [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) auf der Schaltfläche um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` zeigt an, dass das Menü angezeigt wird und dass das Aktivieren der Menüschaltfläche das Menü schließt.

Wenn das Menü geöffnet ist, erhält die Schaltfläche selbst in der Regel keinen Fokus, da Benutzer durch die Menüpunkte navigieren. Stattdessen schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und gibt den Fokus an die Menüschaltfläche zurück.

Die `menu`-Rolle wurde auf das {{HTMLElement('ul')}}-Element gesetzt, und identifiziert das `<ul>`-Element als Menü.

Das Anzeigen und Verbergen des Menüs kann mit CSS erfolgen. Zum Beispiel können wir in diesen Codebeispielen die Attribut- und Nachbarselektoren verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigation-Beispiel hat eine statische Schaltfläche. Das Untermenü-Beispiel hat eine Schaltfläche, die aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall wird das `aria-label="Text Color: purple"` auf das `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: violett"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (violett). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
