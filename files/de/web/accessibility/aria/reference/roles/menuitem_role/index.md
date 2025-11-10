---
title: "ARIA: Rolle `menuitem`"
short-title: menuitem
slug: Web/Accessibility/ARIA/Reference/Roles/menuitem_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die Rolle `menuitem` zeigt an, dass das Element eine Option in einer Reihe von Auswahlmöglichkeiten ist, die in einem `menu` oder `menubar` enthalten sind.

## Beschreibung

Ein `menuitem` ist einer der drei Arten von Optionen in einer Reihe von Auswahlmöglichkeiten, die durch ein [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) bereitgestellt werden. Die anderen beiden sind [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). Das `menuitem` wird nur als Nachfahre von oder im Besitz von Elementen mit der Rolle `menu` oder `menubar` gefunden, optional verschachtelt innerhalb eines Elements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), das in einem Menü enthalten oder von einem Menü besessen ist.

Wenn das `menuitem` kein Nachfahre eines Menüs im DOM ist, fügen Sie das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) dem Menü hinzu, um die Beziehung anzuzeigen. Wenn `aria-owns` auf dem Menücontainer gesetzt ist, um Elemente einzubeziehen, die keine DOM-Kinder des Containers sind, erscheinen diese Elemente in der Leseordnung in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind, in unterstützenden Technologien. Stellen Sie sicher, dass die visuelle Fokusreihenfolge mit der Leseordnung der unterstützenden Technologie übereinstimmt.

Jedes `menuitem` in einem Menü ist fokussierbar, unabhängig davon, ob es deaktiviert ist oder nicht. Ein `menuitem` wird als deaktiviert angezeigt, indem [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) auf dem Element mit der Rolle gesetzt wird.

Wenn ein `menuitem` über ein Untermenü verfügt, programmieren Sie es so, dass ein neues Untermenü angezeigt wird, wenn der Menüpunkt aktiviert wird, und fügen Sie [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) oder den Wert `true` hinzu, um unterstützenden Technologien anzuzeigen, dass das `menuitem` verwendet wird, um ein Untermenü zu öffnen.

Eine häufige Konvention, um anzuzeigen, dass ein `menuitem` ein Dialogfeld öffnet, besteht darin, dem Menüpunkt-Etikett "…" (Ellipse) hinzuzufügen, z.B. "Speichern unter …".

Jedes `menuitem` muss einen zugänglichen Namen haben. Dieser Name stammt standardmäßig aus dem Inhalt des Elements. Wenn der Inhalt keinen nützlichen zugänglichen Namen bietet, kann [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um ein sichtbares Etikett zu referenzieren. Wenn kein sichtbarer Inhalt verfügbar ist, um den zugänglichen Namen bereitzustellen, kann ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bereitgestellt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Ein Widget, das eine Liste von Auswahlmöglichkeiten bereitstellt. Erforderliche Kontextrolle (oder `menubar`)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Eine Präsentation eines `menu`, das normalerweise sichtbar bleibt und normalerweise horizontal dargestellt wird. Erforderliche Kontextrolle (oder `menu`)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Kann verwendet werden, um eine Gruppe verwandter `menuitem`s innerhalb eines `menu` oder `menubar` oder im Besitz eines solchen zu identifizieren.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Gibt an, dass das Element wahrnehmbar, aber deaktiviert ist und daher nicht bedienbar ist
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Gibt die Verfügbarkeit und den Typ eines interaktiven Popup an, das durch das `menuitem` ausgelöst werden kann

### Tastaturinteraktionen

- <kbd>Enter</kbd> und <kbd>Leertaste</kbd>
  - : Wenn das `menuitem` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf dessen erstem Element. Andernfalls wird das Element aktiviert und das Menü geschlossen.
- <kbd>Pfeil nach unten</kbd>
  - : Bei einem `menuitem`, das in einem `menubar` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf das erste Element im Untermenü. Andernfalls wird der Fokus auf das nächste Element verschoben, wobei optional vom letzten zum ersten Element umbrochen wird.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, wobei optional vom ersten zum letzten Element umbrochen wird. Optional, wenn das `menuitem` sich in einem menubar befindet und ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf das letzte Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn in einem `menu`, das mit einem menubutton geöffnet wurde und sich nicht in einem `menubar` befindet, und der Menüpunkt kein Untermenü hat, passiert nichts. Wenn der Fokus in einem `menubar` ist, wird der Fokus auf das nächste Element verschoben, wobei optional vom letzten zum ersten umbrochen wird. Wenn der Fokus in einem `menu` ist und auf einem `menuitem`, das ein Untermenü hat, wird das Untermenü geöffnet und der Fokus auf dessen erstes Element platziert. Wenn der Fokus in einem `menu` ist und auf einem Element, das kein Untermenü hat, wird das Untermenü und alle übergeordneten Menüs geschlossen, der Fokus auf das nächste Element in der `menubar` verschoben und, wenn der Fokus jetzt auf einem `menuitem` mit einem Untermenü ist, wird entweder das Untermenü dieses `menuitem` geöffnet, ohne den Fokus in das Untermenü zu verschieben, oder das Untermenü dieses `menuitem` wird geöffnet und der Fokus auf das erste Element im Untermenü platziert.
- <kbd>Pfeil nach links</kbd>
  - : Wenn der Fokus in einem `menubar` ist, wird der Fokus auf das vorherige Element verschoben, wobei optional vom ersten zum letzten umbrochen wird. Wenn der Fokus in einem Untermenü eines Elements in einem `menu` ist, wird das Untermenü geschlossen und der Fokus auf das übergeordnete `menuitem` zurückgesetzt. Wenn der Fokus in einem Untermenü eines Elements in einem `menubar` ist, wird das Untermenü geschlossen, der Fokus auf das vorherige Element in der `menubar` verschoben und, wenn der Fokus jetzt auf einem `menuitem` mit einem Untermenü ist, wird entweder das Untermenü dieses `menuitem` geöffnet, ohne den Fokus in das Untermenü zu verschieben, oder das Untermenü dieses `menuitem` wird geöffnet und der Fokus auf das erste Element im Untermenü platziert.
- <kbd>Home</kbd>
  - : Wenn das Pfeiltastenumbruch nicht unterstützt wird, wird der Fokus auf das erste Element im aktuellen `menu` oder `menubar` verschoben.
- <kbd>Ende</kbd>
  - : Wenn das Pfeiltastenumbruch nicht unterstützt wird, wird der Fokus auf das letzte Element im aktuellen `menu` oder `menubar` verschoben.
- Jede Taste, die einem druckbaren Zeichen entspricht (Optional)
  - : Verschiebt den Fokus auf das nächste Element im aktuellen Menü, dessen Etikett mit diesem druckbaren Zeichen beginnt.
- <kbd>Escape</kbd>
  - : Schließt das Menü, das den Fokus enthält, und gibt den Fokus an das Element oder den Kontext zurück, z.B. Menütaste oder übergeordnetes `menuitem`, von dem aus das Menü geöffnet wurde.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tabuatsequenz, und wenn das Element, das den Fokus hatte, sich nicht in einem menubar befindet, schließt es sein Menü und alle geöffneten übergeordneten Menücontainer.
- <kbd>Shift + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tabuatsequenz, und wenn das Element, das den Fokus hatte, sich nicht in einem menubar befindet, schließt es sein Menü und alle geöffneten übergeordneten Menücontainer.

Wenn ein Menü geöffnet wird oder eine Menüleiste den Fokus als Ergebnis einer Kontextaktion erhält, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückbringen.

Einige Implementierungen von Navigationsmenüleisten können `menuitem`-Elemente haben, die sowohl eine Funktion ausführen als auch ein Untermenü öffnen. In solchen Implementierungen führen <kbd>Enter</kbd> und <kbd>Leertaste</kbd> eine Navigationsfunktion aus, während <kbd>Pfeil nach unten</kbd> in einer horizontalen Menüleiste das mit diesem Menüelement verknüpfte Untermenü öffnet.

Wenn Elemente in einer `menubar` vertikal angeordnet sind und Elemente in Menücontainern horizontal angeordnet sind, funktioniert <kbd>Pfeil nach unten</kbd> wie oben für <kbd>Pfeil nach rechts</kbd> beschrieben, <kbd>Pfeil nach oben</kbd> funktioniert wie oben für <kbd>Pfeil nach links</kbd> beschrieben, und umgekehrt.

## Beispiele

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
