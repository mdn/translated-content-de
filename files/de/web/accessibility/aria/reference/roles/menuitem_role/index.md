---
title: "ARIA: menuitem-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/menuitem_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `menuitem`-Rolle gibt an, dass das Element eine Option in einer Reihe von Auswahlmöglichkeiten ist, die von einem `menu` oder `menubar` enthalten sind.

## Beschreibung

Ein `menuitem` ist eine von drei Arten von Optionen in einer Reihe von Auswahlmöglichkeiten, die von einem [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) enthalten sind; die anderen beiden sind [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role). Das `menuitem` wird nur als Nachfahre oder von Elementen mit der Rolle `menu` oder `menubar` besessen gefunden, optional innerhalb eines Elements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) verschachtelt, das in einem Menü enthalten oder von einem Menü besessen ist.

Wenn das `menuitem` kein Nachfahre eines Menüs im DOM ist, geben Sie das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) im Menü an, um die Beziehung zu kennzeichnen. Wenn `aria-owns` auf dem Menü-Container gesetzt ist, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder in unterstützenden Technologien sind. Stellen Sie sicher, dass die visuelle Fokusreihenfolge mit der Lesereihenfolge der unterstützenden Technologien übereinstimmt.

Jedes `menuitem` in einem Menü ist fokussierbar, unabhängig davon, ob es deaktiviert ist oder nicht. Geben Sie an, dass ein `menuitem` deaktiviert ist, indem Sie [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) auf das Element mit der Rolle setzen.

Wenn ein `menuitem` ein Untermenü hat, programmieren Sie es so, dass es beim Aktivieren des Menüelements ein neues Untermenü anzeigt, und schließen Sie [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) oder den Wert `true` ein, um unterstützenden Technologien anzuzeigen, dass das Menüelement verwendet wird, um ein Untermenü zu öffnen.

Eine häufige Konvention, um anzuzeigen, dass ein `menuitem` ein Dialogfeld öffnet, besteht darin, „…" (Ellipsen) an den Menüpunktnamen anzuhängen, z.B. „Speichern unter …".

Jedes `menuitem` muss einen zugänglichen Namen haben. Dieser Name stammt standardmäßig aus dem Inhalt des Elements. Wenn der Inhalt keinen nützlichen zugänglichen Namen bereitstellt, kann [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) verwendet werden, um ein sichtbares Label zu referenzieren. Wenn kein sichtbarer Inhalt verfügbar ist, um den zugänglichen Namen zu liefern, kann ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) bereitgestellt werden.

## Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role) Rolle
  - : Ein Widget, das eine Liste von Wahlmöglichkeiten bereitstellt. Erforderliche Kontextrolle (oder `menubar`)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role) Rolle
  - : Eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und normalerweise horizontal präsentiert wird. Erforderliche Kontextrolle (oder `menu`)
- [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) Rolle
  - : Kann verwendet werden, um eine Gruppe verwandter `menuitem`s innerhalb oder anderweitig im Besitz eines `menu` oder `menubar` zu identifizieren
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Gibt an, dass das Element wahrnehmbar, aber deaktiviert ist und daher nicht bedienbar ist
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Gibt die Verfügbarkeit und den Typ eines interaktiven Popups an, das durch das `menuitem` ausgelöst werden kann

## Tastaturinteraktionen

- <kbd>Eingabetaste</kbd> und <kbd>Leertaste</kbd>
  - : Wenn das `menuitem` ein Untermenü hat, öffnet es das Untermenü und platziert den Fokus auf dessen erstem Element. Andernfalls aktiviert es das Element und schließt das Menü.
- <kbd>Pfeil nach unten</kbd>
  - : Bei einem `menuitem`, das ein Untermenü in einem `menubar` hat, öffnet das Untermenü und platziert den Fokus auf dem ersten Element im Untermenü. Andernfalls wird der Fokus auf das nächste Element verschoben, optional vom letzten zum ersten.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional vom ersten zum letzten. Optional, wenn das `menuitem` in einem Menüleiste und ein Untermenü hat, wird das Untermenü geöffnet und der Fokus auf das letzte Element im Untermenü gesetzt.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn sich in einem Menü, das mit einem Menübefehl geöffnet wurde und nicht in einer `menubar` ist, das Menüelement nicht über ein Untermenü verfügt, passiert nichts. Wenn der Fokus in einer `menubar` ist, wird der Fokus auf das nächste Element verschoben, optional vom letzten zum ersten. Wenn der Fokus in einem Menü und auf einem `menuitem` ist, das ein Untermenü hat, wird das Untermenü geöffnet und der Fokus auf dessen erstes Element gesetzt. Wenn der Fokus in einem Menü und auf einem Element ist, das kein Untermenü hat, schließt das Untermenü und alle Elternmenüs, verschiebt den Fokus auf das nächste Element im `menubar` und, wenn der Fokus nun auf einem `menuitem` mit einem Untermenü liegt, entweder öffnet das Untermenü dieses `menuitem` ohne den Fokus in das Untermenü zu bewegen, oder öffnet das Untermenü dieses `menuitem` und platziert den Fokus auf dem ersten Element im Untermenü.
- <kbd>Pfeil nach links</kbd>
  - : Wenn sich der Fokus in einer `menubar` befindet, wird der Fokus auf das vorherige Element verschoben, optional vom ersten zum letzten. Wenn der Fokus in einem Untermenü eines Elements in einem Menü ist, wird das Untermenü geschlossen und der Fokus auf das übergeordnete `menuitem` zurückgesetzt. Wenn sich der Fokus in einem Untermenü eines Elements in einer `menubar` befindet, wird das Untermenü geschlossen, der Fokus auf das vorherige Element in der `menubar` verschoben und, wenn der Fokus nun auf einem `menuitem` mit einem Untermenü ist, entweder öffnet das Untermenü dieses `menuitem` ohne den Fokus in das Untermenü zu bewegen, oder öffnet das Untermenü dieses `menuitem` und platziert den Fokus auf dem ersten Element im Untermenü.
- <kbd>Home</kbd>
  - : Wenn das Umschließen von Pfeiltasten nicht unterstützt wird, verschiebt den Fokus auf das erste Element im aktuellen `menu` oder `menubar`.
- <kbd>Ende</kbd>
  - : Wenn das Umschließen von Pfeiltasten nicht unterstützt wird, verschiebt den Fokus auf das letzte Element im aktuellen `menu` oder `menubar`.
- Jede Taste, die einem druckbaren Zeichen entspricht (Optional)
  - : Verschiebt den Fokus auf das nächste Element im aktuellen Menü, dessen Label mit diesem druckbaren Zeichen beginnt.
- <kbd>Escape</kbd>
  - : Schließt das Menü, das den Fokus enthält und stellt den Fokus auf das Element oder den Kontext, z.B. Menü-Button oder übergeordnetes `menuitem`, von dem aus das Menü geöffnet wurde, zurück.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tab-Reihenfolge und, wenn das Element, das den Fokus hatte, sich nicht in einer Menüleiste befindet, schließt es sein Menü und alle offenen übergeordneten Menü-Container.
- <kbd>Shift + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tab-Reihenfolge und, wenn das Element, das den Fokus hatte, sich nicht in einer Menüleiste befindet, schließt es sein Menü und alle offenen übergeordneten Menü-Container.

Wenn ein Menü geöffnet wird oder eine Menübalken als Ergebnis einer Kontextaktion den Fokus erhält, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurücksetzen.

Einige Implementierungen von Navigations-Menübalken können Menüelemente aufweisen, die sowohl eine Funktion ausführen als auch ein Untermenü öffnen. In solchen Implementierungen führen <kbd>Enter</kbd> und <kbd>Leertaste</kbd> eine Navigationsfunktion aus, während <kbd>Pfeil nach unten</kbd> in einer horizontalen Menüleiste das Untermenü öffnet, das mit diesem Menüelement verknüpft ist.

Wenn Elemente in einer `menubar` vertikal und Elemente in Menükonfigurationen horizontal angeordnet sind, funktioniert <kbd>Pfeil nach unten</kbd> wie oben für <kbd>Pfeil nach rechts</kbd> beschrieben, <kbd>Pfeil nach oben</kbd> funktioniert wie oben für <kbd>Pfeil nach links</kbd> beschrieben, und umgekehrt.

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
