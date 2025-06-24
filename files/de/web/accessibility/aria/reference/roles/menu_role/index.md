---
title: "ARIA: Rolle des Menüs"
short-title: menu
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die Rolle `menu` ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung von häufigen Aktionen oder Funktionen dar, die der Benutzer ausführen kann. Die Rolle `menu` ist angebracht, wenn eine Liste von Menüelementen auf eine Weise präsentiert wird, die einem Menü in einer Desktop-Anwendung ähnelt. Untermenüs, auch als Pop-up-Menüs bekannt, haben ebenfalls die Rolle `menu`.

Während der Begriff "Menü" generisch verwendet wird, um die Navigation auf Websites zu beschreiben, ist die Rolle `menu` für eine Liste von Aktionen oder Funktionen vorgesehen, die komplexe Funktionalitäten erfordern, wie z.B. das Fokusmanagement innerhalb eines zusammengesetzten Widgets und Navigation anhand des ersten Zeichens.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerungen oder ein Widget sein, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird normalerweise durch das Aktivieren eines Menüknopfs, das Auswählen eines Menüelements, das ein Untermenü öffnet, oder durch das Ausführen eines Befehls, wie z.B. <kbd>Shift + F10</kbd> in Windows, das ein kontextabhängiges Menü öffnet, sichtbar gemacht.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, schließt sich das Menü normalerweise. Wenn die Auswahl ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gelegt. Um tastaturzugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: Alle Menüelemente innerhalb des `menu` müssen fokussierbar sein. Der Menüknopf, der das Menü öffnet, und die Menüpunkte, nicht aber das Menü selbst, sind die fokussierbaren Elemente.

Menüpunkte umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüpunkte sind fokussierbar, können jedoch nicht aktiviert werden.

Menüpunkte können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten den Fokus oder sind interaktiv.

Wenn ein `menu` infolge einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückstellen. Wenn der Fokus auf dem Menüknopf war, öffnet <kbd>Enter</kbd> das Menü und setzt den Fokus auf das erste Menüelement. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und setzt den Fokus auf den Menüknopf oder das Eltern-Menüleisten-Element (oder die Kontextaktion, die das Menü geöffnet hat) zurück.

Elemente mit der Rolle `menu` haben einen impliziten Wert von [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) mit `vertical`. Für horizontal ausgerichtete Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü visuell dauerhaft ist, ziehen Sie stattdessen die Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) in Betracht.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Rollen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
  - : Rollen von Elementen in einem enthaltenen `menu` oder `menubar`, die gemeinsam als "Menüelemente" bekannt sind. Diese müssen fokussierbar sein.
- Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : Menüpunkte können in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt werden.
- Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)

  - : Ein Trenner, der Abschnitte des Inhalts oder Gruppen von Menüpunkten innerhalb des Menüs voneinander trennt und unterscheidet.

- Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Der `menu`-Container hat `tabindex` auf `-1` oder `0` gesetzt, und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Menüorientierung horizontal oder vertikal ist; entfällt es, ist der Standardwert `vertikal`.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder das `aria-labelledby`-Set auf eine `id` des `menuitem` oder `button`, das seine Anzeige steuert, oder `aria-label`, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Nur auf den Menücontainer setzen, um Elemente einzubeziehen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Leseordnung in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Beim Fokusmanagement sicherstellen, dass die visuelle Fokus-Reihenfolge mit dieser assistiven Technologie-Leseordnung übereinstimmt.

### Tastaturinteraktionen

- <kbd>Leerzeichen</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neuen Inhalt lädt und den Fokus auf die Überschrift setzt, die den Inhalt bezeichnet.
- <kbd>Escape</kbd>
  - : Wenn sich in einem Untermenü, schließt das Untermenü und verschiebt den Fokus auf das übergeordnete Menü- oder Menüleisten-Element.
- <kbd>Pfeil nach rechts</kbd>
  - : In einer Menüleiste verschiebt sich der Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element ist, verschiebt es den Fokus auf das erste Element. Wenn sich in einem Untermenü befindet, wenn der Fokus auf einem Element ist, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüleisten-Elements und hält den Fokus auf diesem übergeordneten Menüleisten-Element. Wenn nicht in einer Menüleiste oder einem Untermenü und nicht auf einem `menuitem` mit einem Untermenü, wenn der Fokus nicht das letzte fokussierbare Element im Menü ist, verschiebt es optional den Fokus auf das nächste fokussierbare Element.
- <kbd>Pfeil nach links</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Menüleiste. Wenn der Fokus auf dem ersten Element liegt, verschiebt er den Fokus auf das letzte Element. Wenn sich in einem Untermenü befindet, schließt er das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn nicht in einer Menüleiste oder einem Untermenü, wenn der Fokus nicht das erste fokussierbare Element im Menü ist, verschiebt er optional den Fokus auf das letzte fokussierbare Element.
- <kbd>Pfeil nach unten</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach oben</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Pos1 (Home)</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>Ende (End)</kbd>
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

Um dieses standardmäßig zugängliche Navigations-Widget schrittweise zu verbessern, sollte die Klasse zum Ausblenden des `menu` und das Einfügen von `tabindex="-1"` auf den interaktiven Menüelement-Inhalt mit JavaScript beim Laden hinzugefügt werden.

Bei der Einbindung eines "menu" zur Navigation auf der Website verwenden Sie nicht die Rolle `menu`. Verwenden Sie stattdessen für die Hauptnavigation der Website das native HTML-Element {{HTMLElement('nav')}} oder einfach eine Liste von Links. Die `menu`-Rolle sollte für zusammengesetzte Widgets, die Fokusmanagement erfordern, reserviert werden. Siehe [ARIA-Praktiken für Offenlegungsnavigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) für eine Erläuterung und zusätzliche Beispiele.

### Beispiel 2: Menüleisten-Untermenüoptionenauswahl

Der folgende Codeausschnitt ist ein Popup-Menü, eingebettet in eine Menüleiste. Es wird angezeigt, wenn der Menüknopf aktiviert ist. Es ist ein Menü, um die Textfarbe aus einer Liste von Farboptionen auszuwählen:

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

Der Knopf, der das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt, was explizit angibt, dass das Popup, das es steuert, ein `menu` ist.

Um ein Menü zu öffnen, interagiert der Benutzer in der Regel mit einem Menüknopf als Öffner. Der Menüknopf muss fokussierbar sein und sowohl auf Klicks als auch auf Tastaturereignisse reagieren. Wenn der Fokus gesetzt ist, sollte <kbd>Enter</kbd>, <kbd>Leerzeichen</kbd>, <kbd>Pfeil nach unten</kbd> oder <kbd>Pfeil nach oben</kbd> das Menü öffnen und den Fokus auf ein Menüelement setzen.

Das Öffnen und Schließen des Menüs schaltet das Attribut [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) am Knopf um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` zeigt an, dass das Menü angezeigt wird und das Aktivieren des Menüknopfes das Menü schließt.

Wenn das Menü offen ist, erhält der Knopf selbst im Allgemeinen keinen Fokus, während Benutzer durch die Menüpunkte navigieren. Vielmehr schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und gibt den Fokus an den Menüknopf zurück.

Die Rolle `menu` wurde auf das {{HTMLElement('ul')}} gesetzt, wodurch das `<ul>`-Element als Menü identifiziert wird.

Die Anzeige und das Verbergen des Menüs können mit CSS durchgeführt werden. Beispielsweise können wir in diesen Codebeispielen die Attribut- und Nachbarselektoren verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationsbeispiel hat einen statischen Knopf. Das Untermenübeispiel hat einen Knopf, der aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall ist das `aria-label="Text Color: purple"` auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; der Zweck des Menüs (Auswahl einer Textfarbe) und der aktuelle Wert (lila) werden identifiziert. Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
