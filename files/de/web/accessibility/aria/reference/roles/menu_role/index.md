---
title: "ARIA: menu Rolle"
short-title: menu
slug: Web/Accessibility/ARIA/Reference/Roles/menu_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `menu`-Rolle ist eine Art zusammengesetztes Widget, das dem Benutzer eine Liste von Auswahlmöglichkeiten bietet.

## Beschreibung

Ein `menu` repräsentiert im Allgemeinen eine Gruppierung von üblichen Aktionen oder Funktionen, die der Benutzer ausführen kann. Die `menu`-Rolle ist angemessen, wenn eine Liste von Menüelementen in ähnlicher Weise wie ein Menü einer Desktop-Anwendung präsentiert wird. Untermenüs, auch bekannt als Pop-up-Menüs, haben ebenfalls die Rolle `menu`.

Während der Begriff "Menü" allgemein verwendet wird, um die Navigation auf einer Website zu beschreiben, ist die `menu`-Rolle für eine Liste von Aktionen oder Funktionen gedacht, die komplexe Funktionalität erfordern, wie z.B. das Fokusmanagement bei zusammengesetzten Widgets und die Navigation mit dem ersten Zeichen.

Ein Menü kann eine dauerhaft sichtbare Liste von Steuerungen sein oder ein Widget, das geöffnet und geschlossen werden kann. Ein geschlossenes `menu`-Widget wird normalerweise durch Aktivieren einer Menü-Schaltfläche, durch Auswählen eines Elements in einem Menü, das ein Untermenü öffnet, oder durch Ausführen eines Befehls geöffnet, wie z.B. <kbd>Shift + F10</kbd> in Windows, das ein kontextspezifisches Menü öffnet.

Wenn ein Benutzer eine Auswahl in einem geöffneten Menü aktiviert, wird das Menü normalerweise geschlossen. Wenn die Menüauswahlaktion ein Untermenü aufruft, bleibt das Menü geöffnet und das Untermenü wird angezeigt.

Wenn ein Menü geöffnet wird, wird der Tastaturfokus auf das erste Menüelement gelegt. Um tastaturzugänglich zu sein, müssen Sie den [Fokus verwalten](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) für alle Nachkommen: Alle Menüelemente innerhalb des `menu` müssen fokussierbar sein. Die Menü-Schaltfläche, die das Menü öffnet, und die Menüelemente, nicht jedoch das Menü selbst, sind die fokussierbaren Elemente.

Menüelemente umfassen [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). [Deaktivierte](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Menüelemente sind fokussierbar, können jedoch nicht aktiviert werden.

Menüelemente können in Elementen mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) gruppiert und durch Elemente mit der Rolle [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) getrennt werden. Weder `group` noch `separator` erhalten Fokus oder sind interaktiv.

Wenn ein `menu` als Ergebnis einer Kontextaktion geöffnet wird, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den auslösenden Kontext zurückbringen. War der Fokus auf der Menü-Schaltfläche, öffnet <kbd>Enter</kbd> das Menü und legt den Fokus auf das erste Menüelement. Wenn der Fokus sich auf dem Menü selbst befindet, schließt <kbd>Escape</kbd> das Menü und bringt den Fokus auf die Menü-Schaltfläche oder das übergeordnete Menüleiste-Element (oder die Kontextaktion, die das Menü geöffnet hat) zurück.

Elemente mit der Rolle `menu` haben implizit einen [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von vertikal. Für horizontal ausgerichtete Menüs verwenden Sie [`aria-orientation="horizontal"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation).

Wenn das Menü visuell persistent ist, ziehen Sie statt dessen die [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)-Rolle in Betracht.

### Zugehörige WAI-ARIA-Rollen, Status und Eigenschaften

- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role), [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) Rollen
  - : Rollen von Elementen, die in einem umgebenden `menu` oder `menubar` enthalten sind und kollektiv als "Menüelemente" bekannt sind. Diese müssen fokussierbar sein.
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Menüelemente können in einem [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt werden.
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) Rolle

  - : Ein Trenner, der Abschnitte von Inhalten oder Gruppen von Menüelementen innerhalb des Menüs trennt und unterscheidet.

- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut
  - : Der `menu`-Container hat `tabindex` gesetzt auf `-1` oder `0` und jedes Element im Menü hat `tabindex` gesetzt auf `-1`.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird auf die ID des fokussierten Elements gesetzt, falls vorhanden.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Menüorientierung horizontal oder vertikal ist; Standard ist `vertical`, wenn weggelassen.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Das `menu` muss einen zugänglichen Namen haben. Verwenden Sie `aria-labelledby`, wenn ein sichtbares Label vorhanden ist, ansonsten `aria-label`. Entweder setzen Sie `aria-labelledby` auf einen `id`, der dem `menuitem` oder `button` entspricht, das seine Anzeige steuert, oder verwenden Sie `aria-label`, um das Label zu definieren.
- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Wird nur am Menü-Container gesetzt, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind. Wenn gesetzt, erscheinen diese Elemente in der Lesereihenfolge in der Abfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind. Beim Verwalten des Fokus stellen Sie sicher, dass die visuelle Fokusreihenfolge mit dieser assistierenden Technologie-Lesereihenfolge übereinstimmt.

### Tastaturinteraktionen

- <kbd>Space</kbd> / <kbd>Enter</kbd>
  - : Wenn das Element ein übergeordnetes Menüelement ist, öffnet es das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü. Andernfalls aktiviert es das Menüelement, das neue Inhalte lädt und den Fokus auf die Überschrift legt, die die Inhalte betitelt.
- <kbd>Escape</kbd>
  - : Wenn es sich in einem Untermenü befindet, schließt es das Untermenü und verschiebt den Fokus zum übergeordneten Menü- oder Menüleiste-Element.
- <kbd>Rechter Pfeil</kbd>
  - : In einer Menüleiste verschiebt es den Fokus auf das nächste Element in der Menüleiste. Wenn der Fokus auf dem letzten Element ist, verschiebt es den Fokus auf das erste Element. Wenn in einem Untermenü, fokussiert es auf ein Element, das kein Untermenü hat, schließt es das Untermenü und verschiebt den Fokus zum nächsten Element in der Menüleiste. Andernfalls öffnet es das Untermenü des neu fokussierten Menüleiste-Elements und behält den Fokus auf diesem übergeordneten Menüleiste-Element. Wenn nicht in einer Menüleiste oder einem Untermenü und nicht auf einem `menuitem` mit einem Untermenü, und wenn der Fokus nicht das letzte fokussierbare Element im Menü ist, verschiebt es optional den Fokus zum nächsten fokussierbaren Element.
- <kbd>Linker Pfeil</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Menüleiste. Wenn der Fokus auf dem ersten Element ist, verschiebt es den Fokus auf das letzte Element. Wenn in einem Untermenü, schließt es das Untermenü und verschiebt den Fokus auf das übergeordnete Menüelement. Wenn nicht in einer Menüleiste oder einem Untermenü und wenn der Fokus nicht das erste fokussierbare Element im Menü ist, verschiebt es optional den Fokus auf das letzte fokussierbare Element.
- <kbd>Nach unten Pfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das erste Element im Untermenü.
- <kbd>Nach oben Pfeil</kbd>
  - : Öffnet das Untermenü und verschiebt den Fokus auf das letzte Element im Untermenü.
- <kbd>Home</kbd>
  - : Verschiebt den Fokus auf das erste Element in der Menüleiste.
- <kbd>Ende</kbd>
  - : Verschiebt den Fokus auf das letzte Element in der Menüleiste.
- Jede Zeichentaste
  - : Verschiebt den Fokus auf das nächste Element in der Menüleiste mit einem Namen, der mit dem getippten Zeichen beginnt. Wenn keines der Elemente einen Namen hat, der mit dem getippten Zeichen beginnt, bewegt sich der Fokus nicht.

## Beispiele

Unten sind zwei Beispielimplementierungen für Menüs.

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

Um dieses standardmäßig zugängliche Navigations-Widget progressiv zu verbessern, sollte die Klasse, um das `menu` zu verbergen, und die Einbeziehung von `tabindex="-1"` auf den interaktiven Menüinhalt mit JavaScript beim Laden hinzugefügt werden.

Wenn Sie ein "Menü" für die Navigation auf der Website einfügen, verwenden Sie nicht die `menu`-Rolle. Verwenden Sie stattdessen für die Hauptnavigation der Website das native HTML-{{HTMLElement('nav')}}-Element oder einfach eine Liste von Links. Die `menu`-Rolle sollte reserviert sein für zusammengesetzte Widgets, die Fokusmanagement erfordern. Siehe [ARIA-Praktiken für die Offenlegungsnavigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) für eine Erklärung und weitere Beispiele.

### Beispiel 2: Menüleiste Untermenü Optionenpicker

Der folgende Codeausschnitt ist ein Popup-Menü, das in eine Menüleiste eingebettet ist. Es wird angezeigt, wenn die Menü-Schaltfläche aktiviert wird. Es ist ein Menü, um die Textfarbe aus einer Liste von Farboptionen auszuwählen:

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

Die Schaltfläche, die das Menü öffnet, hat [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) gesetzt, was explizit anzeigt, dass das Popup, das sie steuert, ein `menu` ist.

Damit ein Menü geöffnet wird, interagiert der Benutzer im Allgemeinen mit einer Menü-Schaltfläche als Öffner. Die Menü-Schaltfläche muss fokussierbar sein und auf Klick- und Tastaturereignisse reagieren. Wenn der Fokus gelegt ist, sollte das Auswählen von <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Nach unten Pfeil</kbd> oder <kbd>Nach oben Pfeil</kbd> das Menü öffnen und den Fokus auf ein Menüelement legen.

Das Öffnen und Schließen des Menüs schaltet das [`aria-expanded="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut an der Schaltfläche um. Es wird hinzugefügt, wenn das Menü geöffnet ist. Entfernt oder auf `false` gesetzt, wenn das Menü geschlossen ist. Der Wert `true` gibt an, dass das Menü angezeigt wird und das Aktivieren der Menü-Schaltfläche das Menü schließt.

Wenn das Menü geöffnet ist, erhält die Schaltfläche selbst in der Regel keinen Fokus, während Benutzer durch die Menüelemente navigieren. Stattdessen schließt <kbd>Escape</kbd> und optional <kbd>Shift + Tab</kbd> das Menü und kehrt zum Fokus zurück zur Menü-Schaltfläche.

Die `menu`-Rolle wurde auf dem {{HTMLElement('ul')}} gesetzt und identifiziert das `<ul>`-Element als Menü.

Das Anzeigen und Ausblenden des Menüs kann mit CSS durchgeführt werden. Zum Beispiel, in diesen Code-Beispielen können wir die Attribut- und Nachbarselektoren verwenden, um die Sichtbarkeit des Menüs umzuschalten:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

Das Navigationsbeispiel hat eine statische Schaltfläche. Das Untermenü-Beispiel hat eine Schaltfläche, die aktualisiert wird, wenn der Benutzer einen neuen Wert auswählt. In diesem Fall wird `aria-label="Text Color: purple"` auf dem `menu`-Element gesetzt. Es definiert den zugänglichen Namen für das Menü als "Textfarbe: lila"; es identifiziert den Zweck des Menüs (Auswahl einer Textfarbe) und den aktuellen Wert (lila). Wenn eine neue Farbe ausgewählt wird, sollte der Wert der `aria-label`-Eigenschaft ebenfalls aktualisiert werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`menuitem`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
