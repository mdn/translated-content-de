---
title: "ARIA: menuitem-Rolle"
slug: Web/Accessibility/ARIA/Roles/menuitem_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `menuitem`-Rolle zeigt an, dass das Element eine Option in einem Satz von Auswahlmöglichkeiten ist, die von einem `menu` oder `menubar` enthalten werden.

## Beschreibung

Ein `menuitem` ist eine der drei Arten von Optionen in einem Satz von Auswahlmöglichkeiten, die von einem [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten werden; die anderen beiden sind [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). Das `menuitem` ist nur als Nachfahre von oder wird von Elementen mit der Rolle `menu` oder `menubar` besessen, optional verschachtelt in einem Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role), das in einem Menü enthalten ist oder von diesem besessen wird.

Wenn das `menuitem` im DOM kein Nachfahre eines Menüs ist, fügen Sie das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) im Menü hinzu, um die Beziehung anzuzeigen. Wenn `aria-owns` auf das Menücontainer gesetzt ist, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind, in unterstützenden Technologien. Stellen Sie sicher, dass die visuelle Fokusreihenfolge mit der Lesereihenfolge der unterstützenden Technologie übereinstimmt.

Jedes `menuitem` in einem Menü ist fokussierbar, unabhängig davon, ob es deaktiviert ist oder nicht. Geben Sie an, dass ein `menuitem` deaktiviert ist, indem Sie [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) auf dem Element mit der Rolle setzen.

Wenn ein `menuitem` ein Untermenü hat, programmieren Sie es so, dass ein neues Untermenü angezeigt wird, wenn das Menüpunkts aktiviert wird, und fügen Sie [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) oder den Wert `true` hinzu, um unterstützenden Technologien mitzuteilen, dass der Menüpunkt zum Öffnen eines Untermenüs verwendet wird.

Eine übliche Konvention zur Anzeige, dass ein `menuitem` ein Dialogfeld öffnet, ist das Anhängen von "…" (Auslassungszeichen) an das Menüpunkt-Label, z.B. "Speichern unter …".

Jedes `menuitem` muss einen zugänglichen Namen haben. Dieser Name stammt standardmäßig aus den Inhalten des Elements. Wenn die Inhalte keinen nützlichen zugänglichen Namen bieten, können [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden, um eine sichtbare Beschriftung zu referenzieren. Wenn keine sichtbaren Inhalte verfügbar sind, um den zugänglichen Namen bereitzustellen, kann ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bereitgestellt werden.

## Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Ein Widget, das eine Liste von Auswahlmöglichkeiten bietet. Erforderliche Kontextrolle (oder `menubar`)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und in der Regel horizontal präsentiert wird. Erforderliche Kontextrolle (oder `menu`)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Kann verwendet werden, um eine Gruppe verwandter `menuitem`s innerhalb eines `menu`s oder `menubar`s oder die von diesem besessen werden, zu identifizieren
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Gibt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bedienbar ist
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Gibt die Verfügbarkeit und Art des interaktiven Popup-Fensters an, das durch das `menuitem` ausgelöst werden kann

## Tastaturinteraktionen

- <kbd>Enter</kbd> und <kbd>Leertaste</kbd>
  - : Wenn das `menuitem` ein Untermenü hat, öffnet es das Untermenü und bringt den Fokus auf dessen erstes Element. Andernfalls aktiviert es das Element und schließt das Menü.
- <kbd>Pfeil nach unten</kbd>
  - : Bei einem `menuitem`, das ein Untermenü in einem `menubar` hat, öffnet es das Untermenü und bringt den Fokus auf das erste Element im Untermenü. Andernfalls verschiebt es den Fokus zum nächsten Element, wobei optional vom letzten zum ersten Element gewickelt wird.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus zum vorherigen Element, wobei optional vom ersten zum letzten Element gewickelt wird. Optional, wenn das `menuitem` in einem menubar ist und ein Untermenü hat, öffnet es das Untermenü und bringt den Fokus auf das letzte Element im Untermenü.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn es sich in einem `menu`, das mit einem menubutton geöffnet wurde, und nicht in einem `menubar` befindet und das `menuitem` kein Untermenü hat, tut es nichts. Wenn der Fokus in einem `menubar` ist, verschiebt sich der Fokus zum nächsten Element, wobei optional vom letzten zum ersten gewickelt wird. Wenn der Fokus in einem `menu` und auf einem `menuitem` ist, das ein Untermenü hat, öffnet er das Untermenü und bringt den Fokus auf dessen erstes Element. Wenn der Fokus in einem `menu` und auf einem Element ist, das kein Untermenü hat, schließt er das Untermenü und alle übergeordneten Menüs, verschiebt den Fokus zum nächsten Element im `menubar`, und wenn der Fokus jetzt auf einem `menuitem` mit einem Untermenü ist, öffnet er entweder das Untermenü dieses `menuitem`s ohne den Fokus in das Untermenü zu verschieben, oder öffnet das Untermenü dieses `menuitem`s und bringt den Fokus auf das erste Element im Untermenü.
- <kbd>Pfeil nach links</kbd>
  - : Wenn der Fokus in einem `menubar` liegt, verschiebt sich der Fokus zum vorherigen Element, wobei optional vom ersten zum letzten gewickelt wird. Wenn der Fokus in einem Untermenü eines Elements in einem Menü liegt, schließt er das Untermenü und bringt den Fokus zurück zum übergeordneten `menuitem`. Wenn der Fokus in einem Untermenü eines Elements in einem `menubar` liegt, schließt er das Untermenü, verschiebt den Fokus zum vorherigen Element im `menubar`, und wenn der Fokus jetzt auf einem `menuitem` mit einem Untermenü liegt, öffnet er entweder das Untermenü dieses `menuitem`s ohne den Fokus in das Untermenü zu verschieben, oder öffnet das Untermenü dieses `menuitem`s und bringt den Fokus auf das erste Element im Untermenü.
- <kbd>Home</kbd>
  - : Wenn das Umschließen von Pfeiltasten nicht unterstützt wird, verschiebt er den Fokus auf das erste Element im aktuellen `menu` oder `menubar`.
- <kbd>Ende</kbd>
  - : Wenn das Umschließen von Pfeiltasten nicht unterstützt wird, verschiebt er den Fokus auf das letzte Element im aktuellen `menu` oder `menubar`.
- Jede Taste, die einem druckbaren Zeichen entspricht (Optional)
  - : Verschiebt den Fokus auf das nächste Element im aktuellen Menü, dessen Beschriftung mit diesem druckbaren Zeichen beginnt.
- <kbd>Esc</kbd>
  - : Schließt das Menü, das den Fokus enthält und gibt den Fokus an das Element oder den Kontext zurück, z.B. Menütaste oder übergeordnetes `menuitem`, von denen das Menü geöffnet wurde.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus zum nächsten Element in der Tabulatorreihenfolge, und wenn das Element, das den Fokus hatte, nicht in einem menubar ist, schließt es das Menü und alle offenen übergeordneten Menükontainer.
- <kbd>Umschalt + Tab</kbd>
  - : Verschiebt den Fokus zum vorherigen Element in der Tabulatorreihenfolge, und wenn das Element, das den Fokus hatte, nicht in einem menubar ist, schließt es das Menü und alle offenen übergeordneten Menükontainer.

Wenn ein Menü geöffnet wird oder eine Menüleiste den Fokus als Ergebnis einer Kontextaktion erhält, können <kbd>Esc</kbd> oder <kbd>Enter</kbd> den Fokus auf den aufrufenden Kontext zurückführen.

Einige Implementierungen von Navigations-Menüleisten können Menüpunkt-Elemente haben, die sowohl eine Funktion ausführen als auch ein Untermenü öffnen. In solchen Implementierungen führen <kbd>Enter</kbd> und <kbd>Leertaste</kbd> eine Navigationsfunktion aus, während <kbd>Pfeil nach unten</kbd> in einer horizontalen Menüleiste das Untermenü öffnet, das mit demselben Menüpunkt verknüpft ist.

Wenn Elemente in einem `menubar` vertikal angeordnet sind und Elemente in Menücontainern horizontal angeordnet sind, fungiert <kbd>Pfeil nach unten</kbd> wie oben für <kbd>Pfeil nach rechts</kbd> beschrieben, <kbd>Pfeil nach oben</kbd> fungiert wie oben für <kbd>Pfeil nach links</kbd> beschrieben und umgekehrt.

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
