---
title: "ARIA: menuitem Rolle"
slug: Web/Accessibility/ARIA/Roles/menuitem_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `menuitem`-Rolle zeigt an, dass das Element eine Option in einer Menge von Auswahlmöglichkeiten ist, die von einem `menu` oder `menubar` enthalten wird.

## Beschreibung

Ein `menuitem` ist eine der drei Arten von Optionen in einer Menge von Auswahlmöglichkeiten, die von einem [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten werden; die anderen beiden sind [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). Das `menuitem` wird nur als ein Nachfahre von oder durch Elemente mit der Rolle `menu` oder `menubar` besessen gefunden, optional verschachtelt innerhalb eines Elements mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role), das in einem Menü enthalten oder von diesem besessen ist.

Wenn `menuitem` kein Nachfahre eines Menüs im DOM ist, fügen Sie das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) zum Menü hinzu, um die Beziehung anzuzeigen. Wenn `aria-owns` am Menücontainer so eingestellt ist, dass Elemente eingeschlossen werden, die keine DOM-Kinder des Containers sind, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden und nach allen Elementen, die DOM-Kinder sind, in unterstützenden Technologien. Stellen Sie sicher, dass die visuelle Fokusreihenfolge der Lesereihenfolge der unterstützenden Technologie entspricht.

Jedes `menuitem` in einem Menü ist fokussierbar, unabhängig davon, ob es deaktiviert ist oder nicht. Geben Sie an, dass ein `menuitem` deaktiviert ist, indem Sie [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) auf das Element mit der Rolle setzen.

Wenn ein `menuitem` ein Untermenü hat, programmieren Sie es so, dass ein neues Untermenülevel angezeigt wird, wenn das Menüelement aktiviert ist, und nehmen Sie [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) oder den Wert `true` auf, um unterstützenden Technologien anzuzeigen, dass das Menüelement verwendet wird, um ein Untermenü zu öffnen.

Eine übliche Konvention, um anzuzeigen, dass ein `menuitem` ein Dialogfeld startet, besteht darin, "…" (Auslassungspunkte) an das Menüelement-Label anzuhängen, z. B. "Speichern unter …".

Jedes `menuitem` muss einen zugänglichen Namen haben. Dieser Name ergibt sich standardmäßig aus den Inhalten des Elements. Wenn die Inhalte keinen nützlichen zugänglichen Namen bieten, kann [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden, um auf ein sichtbares Label zu verweisen. Wenn kein sichtbarer Inhalt verfügbar ist, um den zugänglichen Namen bereitzustellen, kann ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bereitgestellt werden.

## Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Ein Widget, das eine Liste von Auswahlmöglichkeiten bietet. Erforderliche Kontextrolle (oder `menubar`)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und normalerweise horizontal präsentiert wird. Erforderliche Kontextrolle (oder `menu`)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Kann verwendet werden, um eine Gruppe verwandter `menuitem`s innerhalb eines `menu` oder `menubar` zu identifizieren
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Gibt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht funktionsfähig ist
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Gibt die Verfügbarkeit und Art eines interaktiven Popups an, das durch das `menuitem` ausgelöst werden kann

## Tastaturinteraktionen

- <kbd>Enter</kbd> und <kbd>Leertaste</kbd>
  - : Wenn das `menuitem` ein Untermenü hat, öffnet es das Untermenü und setzt den Fokus auf das erste Element. Andernfalls aktiviert es das Element und schließt das Menü.
- <kbd>Pfeil nach unten</kbd>
  - : Bei einem `menuitem`, das ein Untermenü in einem `menubar` hat, öffnet es das Untermenü und setzt den Fokus auf das erste Element im Untermenü. Andernfalls wird der Fokus auf das nächste Element verschoben, optional vom letzten zum ersten umschließend.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional vom ersten zum letzten umschließend. Optional, wenn das `menuitem` in einem Menübalken ist und ein Untermenü hat, öffnet es das Untermenü und setzt den Fokus auf das letzte Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn in einem `menu`, das mit einem Menübutton geöffnet wurde und nicht in einem `menubar`, und das Menüelement kein Untermenü hat, tut es nichts. Wenn der Fokus in einem `menubar` ist, verschiebt er den Fokus auf das nächste Element, optional vom letzten zum ersten umschließend. Wenn der Fokus in einem `menu` ist und auf einem `menuitem`, das ein Untermenü hat, wird das Untermenü geöffnet und der Fokus auf das erste Element gesetzt. Wenn der Fokus in einem `menu` ist und auf einem Element, das kein Untermenü hat, wird das Untermenü und alle übergeordneten Menüs geschlossen, der Fokus auf das nächste Element im `menubar` verschoben, und wenn der Fokus jetzt auf einem `menuitem` mit einem Untermenü ist, wird entweder das Untermenü dieses `menuitem` geöffnet, ohne den Fokus in das Untermenü zu verschieben, oder das Untermenü dieses `menuitem` geöffnet und der Fokus auf das erste Element im Untermenü gesetzt.
- <kbd>Pfeil nach links</kbd>
  - : Wenn der Fokus in einem `menubar` ist, wird der Fokus auf das vorherige Element verschoben, optional vom ersten zum letzten umschließend. Wenn der Fokus in einem Untermenü eines Elements in einem Menü ist, wird das Untermenü geschlossen und der Fokus auf das übergeordnete `menuitem` zurückgesetzt. Wenn der Fokus in einem Untermenü eines Elements in einem `menubar` ist, wird das Untermenü geschlossen, der Fokus auf das vorherige Element im `menubar` verschoben, und wenn der Fokus jetzt auf einem `menuitem` mit einem Untermenü ist, wird entweder das Untermenü dieses `menuitem` geöffnet, ohne den Fokus in das Untermenü zu verschieben, oder das Untermenü dieses `menuitem` geöffnet und der Fokus auf das erste Element im Untermenü gesetzt.
- <kbd>Home</kbd>
  - : Wenn keine Pfeiltasten-Umschließung unterstützt wird, wird der Fokus auf das erste Element im aktuellen `menu` oder `menubar` verschoben.
- <kbd>Ende</kbd>
  - : Wenn keine Pfeiltasten-Umschließung unterstützt wird, wird der Fokus auf das letzte Element im aktuellen `menu` oder `menubar` verschoben.
- Jede Taste, die einem druckbaren Zeichen entspricht (optional)
  - : Verschiebt den Fokus auf das nächste Element im aktuellen Menü, dessen Label mit diesem druckbaren Zeichen beginnt.
- <kbd>Escape</kbd>
  - : Schließt das Menü, das den Fokus enthält, und setzt den Fokus auf das Element oder den Kontext zurück, z. B. den Menüknopf oder das übergeordnete `menuitem`, von dem aus das Menü geöffnet wurde.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tabulatortastenfolge, und wenn das Element, das den Fokus hatte, nicht in einem Menübalken ist, schließt es sein Menü und alle offenen übergeordneten Menü-Container.
- <kbd>Umschalt + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tabulatortastenfolge, und wenn das Element, das den Fokus hatte, nicht in einem Menübalken ist, schließt es sein Menü und alle offenen übergeordneten Menü-Container.

Wenn ein Menü geöffnet wird oder ein Menübalken als Ergebnis einer Kontextaktion den Fokus erhält, kann <kbd>Escape</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurücksetzen.

Einige Implementierungen von Navigations-Menübalken können Menüelemente haben, die sowohl eine Funktion ausführen als auch ein Untermenü öffnen. In solchen Implementierungen führen <kbd>Enter</kbd> und <kbd>Leertaste</kbd> eine Navigationsfunktion aus, während <kbd>Pfeil nach unten</kbd> in einem horizontalen Menübalken das Untermenü öffnet, das mit diesem gleichen Menüelement verbunden ist.

Wenn Elemente in einem `menubar` vertikal angeordnet sind und Elemente in Menü-Containern horizontal angeordnet sind, funktioniert der <kbd>Pfeil nach unten</kbd> wie im obigen <kbd>Pfeil nach rechts</kbd> beschrieben, der <kbd>Pfeil nach oben</kbd> funktioniert wie im obigen <kbd>Pfeil nach links</kbd> beschrieben, und umgekehrt.

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

- [`menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
