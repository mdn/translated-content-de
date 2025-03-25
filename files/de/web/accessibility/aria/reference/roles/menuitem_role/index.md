---
title: "ARIA: `menuitem`-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitem_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `menuitem`-Rolle zeigt an, dass das Element eine Option in einer Auswahlmenge innerhalb eines `menu` oder `menubar` ist.

## Beschreibung

Ein `menuitem` ist eine von drei Arten von Optionen in einer Auswahlmenge, die von einem [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten wird; die anderen beiden sind [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). Das `menuitem` findet sich nur als Nachfahre von oder im Besitz von Elementen mit der Rolle `menu` oder `menubar`, die optional in einem Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt sind, das in einem Menü enthalten ist oder von diesem besessen wird.

Wenn sich das `menuitem` im DOM nicht als Nachfahre eines Menüs befindet, fügen Sie das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) im Menü hinzu, um die Beziehung anzuzeigen. Wenn `aria-owns` auf dem Menü-Container gesetzt ist, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder in unterstützenden Technologien sind. Stellen Sie sicher, dass die visuelle Fokussierungsreihenfolge mit der Lesereihenfolge der unterstützenden Technologie übereinstimmt.

Jedes `menuitem` innerhalb eines Menüs ist fokussierbar, unabhängig davon, ob es deaktiviert ist oder nicht. Geben Sie an, dass ein `menuitem` deaktiviert ist, indem Sie [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) auf dem Element mit der Rolle setzen.

Wenn ein `menuitem` ein Untermenü hat, programmieren Sie es so, dass ein neues Untermenü angezeigt wird, wenn das Menüelement aktiviert wird, und fügen Sie [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) oder mit dem Wert `true` hinzu, um assistive Technologien darauf hinzuweisen, dass das Menüelement verwendet wird, um ein Untermenü zu öffnen.

Eine übliche Konvention, um anzuzeigen, dass ein `menuitem` ein Dialogfeld öffnet, besteht darin, "…" (Auslassungspunkte) an die Menüelementbeschriftung anzuhängen, z.B. "Speichern unter …".

Jedes `menuitem` muss einen zugänglichen Namen haben. Dieser Name stammt standardmäßig aus dem Inhalt des Elements. Wenn der Inhalt keinen nützlichen zugänglichen Namen liefert, kann [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um auf ein sichtbares Label zu verweisen. Wenn kein sichtbarer Inhalt verfügbar ist, um den zugänglichen Namen zu liefern, kann ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bereitgestellt werden.

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Ein Widget, das eine Liste von Auswahlmöglichkeiten bereitstellt. Erforderliche Kontext-Rolle (oder `menubar`)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Eine Präsentation eines `menu`, die normalerweise sichtbar bleibt und in der Regel horizontal präsentiert wird. Erforderliche Kontext-Rolle (oder `menu`)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Kann verwendet werden, um eine Gruppe von verwandten `menuitem`s innerhalb eines `menu` oder `menubar` oder als deren Besitz anzuzeigen
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Zeigt an, dass das Element wahrnehmbar, aber deaktiviert ist und daher nicht bedienbar ist
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Zeigt die Verfügbarkeit und den Typ eines interaktiven Popups an, das vom `menuitem` ausgelöst werden kann

### Tastaturinteraktionen

- <kbd>Enter</kbd> und <kbd>Space</kbd>
  - : Wenn das `menuitem` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf dessen erstem Element. Andernfalls aktiviert es das Element und schließt das Menü.
- <kbd>Pfeil nach unten</kbd>
  - : Bei einem `menuitem` mit Untermenü in einem `menubar` öffnet es das Untermenü und platziert den Fokus auf dem ersten Element im Untermenü. Andernfalls bewegt es den Fokus zum nächsten Element, optional von dem letzten zum ersten Element zurückspringend.
- <kbd>Pfeil nach oben</kbd>
  - : Bewegt den Fokus zum vorherigen Element, optional von dem ersten zum letzten Element zurückspringend. Optional, wenn das `menuitem` in einem menubar ist und ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf dem letzten Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn in einem `menu`, das mit einem menubutton geöffnet wurde und nicht in einem `menubar`, wenn das menuitem kein Untermenü hat, geschieht nichts. Wenn der Fokus in einem `menubar` liegt, bewegt sich der Fokus zum nächsten Element, optional von dem letzten zum ersten Element zurückspringend. Wenn der Fokus sich in einem `menu` befindet und auf einem `menuitem`, das ein Untermenü hat, öffnet sich das Untermenü und der Fokus wird auf dessen erstes Element gelegt. Wenn der Fokus sich in einem `menu` befindet und auf einem Element, das kein Untermenü hat, schließt es das Untermenü und alle übergeordneten Menüs, bewegt den Fokus zum nächsten Element in dem `menubar` und, wenn der Fokus sich jetzt auf einem `menuitem` mit einem Untermenü befindet, öffnet es entweder das Untermenü dieses `menuitem`, ohne den Fokus in das Untermenü zu bewegen, oder öffnet das Untermenü des `menuitem` und legt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach links</kbd>
  - : Wenn der Fokus sich in einem `menubar` befindet, bewegt er den Fokus zum vorherigen Element, optional von dem ersten zum letzten Element zurückspringend. Wenn der Fokus sich in einem Untermenü von einem Element innerhalb eines Menüs befindet, schließt es das Untermenü und gibt den Fokus auf das übergeordnete `menuitem` zurück. Wenn der Fokus sich in einem Untermenü von einem Element innerhalb eines `menubar` befindet, schließt es das Untermenü, bewegt den Fokus zum vorherigen Element im `menubar` und, wenn der Fokus sich jetzt auf einem `menuitem` mit einem Untermenü befindet, öffnet es entweder das Untermenü des `menuitem` ohne den Fokus in das Untermenü zu bewegen, oder öffnet das Untermenü des `menuitem` und legt den Fokus auf das erste Element im Untermenü.
- <kbd>Home</kbd>
  - : Wenn Pfeiltasten-Wrapping nicht unterstützt wird, bewegt sich der Fokus auf das erste Element im aktuellen `menu` oder `menubar`.
- <kbd>Ende</kbd>
  - : Wenn Pfeiltasten-Wrapping nicht unterstützt wird, bewegt sich der Fokus auf das letzte Element im aktuellen `menu` oder `menubar`.
- Jede Taste, die einem druckbaren Zeichen entspricht (Optional)
  - : Bewegt den Fokus auf das nächste Element im aktuellen Menü, dessen Label mit diesem druckbaren Zeichen beginnt.
- <kbd>Escape</kbd>
  - : Schließt das Menü, das den Fokus enthält, und kehrt zu dem Element oder Kontext zurück, z.B. Menü-Button oder übergeordnetes `menuitem`, von dem das Menü geöffnet wurde.
- <kbd>Tab</kbd>
  - : Bewegt den Fokus zum nächsten Element in der Tab-Reihenfolge, und wenn das Element, das den Fokus hatte, nicht in einem menubar ist, schließt es dessen Menü und alle offenen übergeordneten Menücontainer.
- <kbd>Shift + Tab</kbd>
  - : Bewegt den Fokus zum vorherigen Element in der Tab-Reihenfolge, und wenn das Element, das den Fokus hatte, nicht in einem menubar ist, schließt es dessen Menü und alle offenen übergeordneten Menücontainer.

Wenn ein Menü geöffnet wird oder eine Menüleiste den Fokus als Ergebnis einer Kontextaktion erhält, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückgeben.

Einige Implementierungen von Navigations-Menüleisten können menuitem-Elemente haben, die sowohl eine Funktion ausführen als auch ein Untermenü öffnen. In solchen Implementierungen führen <kbd>Enter</kbd> und <kbd>Space</kbd> eine Navigationsfunktion aus, während der <kbd>Pfeil nach unten</kbd> in einem horizontalen menubar das Untermenü öffnet, das mit diesem menuitem verbunden ist.

Wenn Elemente in einem `menubar` vertikal angeordnet sind und Elemente in Menücontainer horizontal angeordnet sind, funktioniert der <kbd>Pfeil nach unten</kbd> wie der oben beschriebene <kbd>Pfeil nach rechts</kbd>, der <kbd>Pfeil nach oben</kbd> wie der oben beschriebene <kbd>Pfeil nach links> und umgekehrt.

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
