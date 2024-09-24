---
title: "ARIA: Rolle menu"
slug: Web/Accessibility/ARIA/Roles/menu_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Rolle `menu` ist eine Art von Composite-Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` stellt im Allgemeinen eine Gruppierung gemeinsamer Aktionen oder Funktionen dar, die der Benutzer ausführen kann. Die Rolle `menu` ist angemessen, wenn eine Liste von Menüelementen ähnlich wie ein Menü in einer Desktop-Anwendung präsentiert wird. Untermenüs, auch als Popup-Menüs bekannt, haben ebenfalls die Rolle `menu`.

Während der Begriff "Menü" allgemein zur Beschreibung der Navigation auf Websites verwendet wird, ist die Rolle `menu` für eine Liste von Aktionen oder Funktionen gedacht, die komplexe Funktionalitäten erfordern, wie z.B. Composite-Widget-Fokusmanagement und Navigation mit dem ersten Zeichen.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerungselementen oder ein Widget sein, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird in der Regel durch das Aktivieren einer Menütaste, das Auswählen eines Elements in einem Menü, das ein Untermenü öffnet, oder durch das Ausführen eines Befehls, wie <kbd>Shift + F10</kbd> in Windows, das ein kontextspezifisches Menü öffnet, sichtbar gemacht.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, schließt sich das Menü normalerweise. Wenn die Menüauswahlaktion ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gelegt. Um über die Tastatur zugänglich zu sein, müssen Sie den [Fokus für alle Nachfahren verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability): Alle Menüelemente innerhalb des `menu` sind fokussierbar. Die Menütaste, die das Menü öffnet, und die Menüelemente, nicht das Menü selbst, sind die fokussierbaren Elemente.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Menüelemente sind fokussierbar, können aber nicht aktiviert werden.

Menüelemente können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) gruppiert und von Elementen mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten Fokus oder sind interaktiv.

Wenn ein `menu` infolge einer Kontextaktion geöffnet wird, können <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den auslösenden Kontext zurücksetzen. Wenn der Fokus auf der Menütaste war, öffnet <kbd>Enter</kbd> das Menü und fokussiert das erste Menüelement. Wenn der Fokus auf dem Menü selbst liegt, schließt <kbd>Escape</kbd> das Menü und kehrt zum Menüknopf oder zum übergeordneten Menüleisten-Element (oder zu der Kontextaktion, die das Menü geöffnet hat) zurück.

Elemente mit der Rolle `menu` haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `vertical`. Für horizontal orientierte Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, sollten Sie stattdessen die Rolle [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) in Betracht ziehen.

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) Rollen
  - : Rollen von Elementen, die in einem enthaltenen `menu` oder `menubar` enthalten sind, kollektiv als "Menüelemente" bekannt. Diese müssen fokussierbar sein.
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Menüelemente können in einer [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) verschachtelt werden
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) Rolle
  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs voneinander trennt und unterscheidet
- [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) Attribut
  - : Der `menu` Container hat `tabindex` auf `-1` oder `0` gesetzt, und jedes Element im Menü hat `tabindex` auf `-1` gesetzt.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Wird auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Menüausrichtung horizontal oder vertikal ist; standardmäßig `vertical`, wenn nicht angegeben.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, andernfalls verwenden Sie `aria-label`. Entweder setzen Sie `aria-labelledby` auf die `id` des `menuitem` oder `button`, das seine Anzeige steuert, oder verwenden Sie `aria-label`, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Wird nur auf den Menücontainer gesetzt, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Beim Verwalten des Fokus stellen Sie sicher, dass die visuelle Fokusreihenfolge mit dieser Assistenztechnologie-Lesereihenfolge übereinstimmt.

### Tastaturinteraktionen

- <kbd>Space</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls wird das Menüelement aktiviert, was neuen Inhalt lädt und den Fokus auf die Überschrift richtet, die den Inhalt betitelt.
- <kbd>Escape</kbd>
  - : Beim Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menü oder das Menüleisten-Element.
- <kbd>Rechter Pfeil</kbd>
  - : In einer Menüleiste verschiebt den Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element liegt, verschiebt er den Fokus auf das erste Element. In einem Untermenü, wenn der Fokus auf einem Element liegt, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus auf das nächste Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüleisten-Elementes, wobei der Fokus auf diesem übergeordneten Menüleisten-Element bleibt. Wenn nicht in einer Menüleiste oder einem Untermenü und nicht auf einem `menuitem` mit Untermenü, wenn der Fokus nicht das letzte fokussierbare Element im Menü ist, verschiebt er den Fokus optional auf das nächste fokussierbare Element.
- <kbd>Linker Pfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Menüleiste. Wenn der Fokus auf dem ersten Element liegt, verschiebt er den Fokus auf das letzte Element. In einem Untermenü schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn nicht in einer Menüleiste oder einem Untermenü, wenn der Fokus nicht das erste fokussierbare Element im Menü ist, verschiebt er den Fokus optional auf das letzte fokussierbare Element.
- <kbd>Nach unten Pfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Nach oben Pfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Jede Zeichentaste
  - : Verschiebt den Fokus auf das nächste Element in der Menüleiste, dessen Name mit dem eingegebenen Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem eingegebenen Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Nachfolgend sind zwei Beispielimplementierungen für Menüs aufgeführt.

### Beispiel 1: Navigationsmenü

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Seitenabschnitte" />
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">Beschreibung</a>
    </li>
    <li role="presentation">
      <a
        role="menuitem"
        href="#associated_wai-aria_roles_states_and_properties">
        Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#keyboard_interactions">
        Tastaturinteraktionen
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#examples">Beispiele</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#specifications">Spezifikationen</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#see_also">Siehe auch</a>
    </li>
  </ul>
</div>
```

Um dieses standardmäßig zugängliche Navigations-Widget progressiv zu verbessern, sollten die Klasse, um das `menu` zu verstecken, und die Aufnahme von `tabindex="-1"` auf dem interaktiven Menüelement-Inhalt beim Laden mit JavaScript hinzugefügt werden.

Wenn Sie ein "Menu" zur Navigation auf der Website einfügen, verwenden Sie nicht die Rolle `menu`. Verwenden Sie vielmehr für die Hauptnavigationsstruktur der Website das native HTML-Element {{HTMLElement('nav')}} oder einfach eine Liste von Links. Die Rolle `menu` sollte für Composite-Widgets reserviert sein, die Fokusmanagement erfordern. Siehe [ARIA-Praktiken für erweiterte Navigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) für eine Erklärung und zusätzliche Beispiele.

### Beispiel 2: Menüleisten-Untermenü-Optionen-Wähler

Der folgende Codeausschnitt ist ein Popup-Menü, das in einer Menüleiste verschachtelt ist. Es wird angezeigt, wenn die Menütaste aktiviert wird. Es handelt sich um ein Menü zur Auswahl der Textfarbe aus einer Liste von Farboptionen:

```html
<div>
  <button
    type="button"
    aria-haspopup="menu"
    aria-controls="colormenu"
    tabindex="0"
    aria-label="Textfarbe: lila">
    Lila
    <span></span>
  </button>
  <ul role="menu" id="colormenu" aria-label="Farboptionen" tabindex="-1">
    <li
      role="menuitemradio"
      aria-checked="true"
      style="color: purple"
      tabindex="-1">
      Lila
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
      Schwarz
    </li>
  </ul>
</div>
```

Der Knopf, der das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) gesetzt, um explizit anzugeben, dass das Popup, das er steuert, ein `menu` ist.

Für die Öffnung eines Menüs interagiert der Benutzer im Allgemeinen mit einer Menütaste als Auslöser. Der Menüknopf muss fokussierbar sein und auf sowohl Klick- als auch Tastatureingaben reagieren. Im Fokuszustand sollte die Auswahl von <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Down Arrow</kbd> oder <kbd>Up Arrow</kbd> das Menü öffnen und den Fokus auf ein Menüelement legen.

Das Öffnen und Schließen des Menüs wechselt das [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut auf dem Knopf. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` gibt an, dass das Menü angezeigt wird und das Aktivieren des Menüknopfs das Menü schließt.

Wenn das Menü geöffnet ist, erhält der Knopf selbst im Allgemeinen keinen Fokus, wenn Benutzer durch die Menüelemente blättern. Vielmehr schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und kehrt zum Menüknopf zurück.

Die `menu`-Rolle wurde auf das {{HTMLElement('ul')}} gesetzt, um das `<ul>`-Element als Menü zu identifizieren.

Das Anzeigen und Verbergen des Menüs kann mit CSS erfolgen. Zum Beispiel können in diesen Codebeispielen die Attribut- und Folgeselektoren verwendet werden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationsbeispiel hat einen statischen Button. Das Untermenü-Beispiel hat einen Button, der aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall ist die `aria-label="Text Color: purple"` Eigenschaft auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label` Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
