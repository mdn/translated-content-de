---
title: "ARIA: Rolle menuitem"
slug: Web/Accessibility/ARIA/Roles/menuitem_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Rolle `menuitem` gibt an, dass das Element eine Option in einem Satz von Auswahlmöglichkeiten ist, die von einem `menu` oder `menubar` enthalten sind.

## Beschreibung

Ein `menuitem` ist eine der drei Arten von Optionen in einem Satz von Auswahlmöglichkeiten, die von einem [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) oder [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) enthalten sind; die anderen beiden sind [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) und [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). Das `menuitem` ist nur als Nachkomme von oder im Besitz von Elementen mit der Rolle `menu` oder `menubar` zu finden, optional eingebettet in einem Element mit der Rolle [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role), das in einem `menu` enthalten ist oder im Besitz eines solchen ist.

Wenn das `menuitem` im DOM kein Nachkomme eines Menüs ist, fügen Sie das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) zum Menü hinzu, um die Beziehung anzuzeigen. Wenn `aria-owns` am Menücontainer gesetzt ist, um Elemente einzuschließen, die keine DOM-Kinder des Containers sind, erscheinen diese Elemente in der Lesereihenfolge in der Reihenfolge, in der sie referenziert werden, und nach allen Elementen, die DOM-Kinder sind, in unterstützenden Technologien. Stellen Sie sicher, dass die visuelle Fokusreihenfolge der Lesereihenfolge der unterstützenden Technologie entspricht.

Jedes `menuitem` in einem Menü ist fokussierbar, unabhängig davon, ob es deaktiviert ist oder nicht. Zeigen Sie an, dass ein `menuitem` deaktiviert ist, indem Sie [`aria-disabled="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) auf dem Element mit der Rolle setzen.

Wenn ein `menuitem` ein Untermenü hat, programmieren Sie es so, dass bei Aktivierung des Menüelements ein neues Untermenü angezeigt wird, und fügen Sie [`aria-haspopup="menu"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) oder den Wert `true` hinzu, um unterstützenden Technologien anzuzeigen, dass das Menüelement verwendet wird, um ein Untermenü zu öffnen.

Eine gängige Konvention, um anzuzeigen, dass ein `menuitem` ein Dialogfeld startet, besteht darin, "…" (Ellipsis) an die Menübezeichnung anzuhängen, z.B. "Speichern unter …".

Jedes `menuitem` muss einen zugänglichen Namen haben. Dieser Name stammt standardmäßig aus den Inhalten des Elements. Wenn die Inhalte keinen nützlichen zugänglichen Namen bereitstellen, kann [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden, um ein sichtbares Etikett zu referenzieren. Wenn keine sichtbaren Inhalte verfügbar sind, um einen zugänglichen Namen bereitzustellen, kann ein zugänglicher Name mit [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) bereitgestellt werden.

## Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`menu`](/de/docs/Web/Accessibility/ARIA/Roles/menu_role) Rolle
  - : Ein Widget, das eine Liste von Auswahlmöglichkeiten bietet. Erforderliche Kontextrolle (oder `menubar`)
- [`menubar`](/de/docs/Web/Accessibility/ARIA/Roles/menubar_role) Rolle
  - : Eine Darstellung eines `menu`, das normalerweise sichtbar bleibt und normalerweise horizontal dargestellt wird. Erforderliche Kontextrolle (oder `menu`)
- [`group`](/de/docs/Web/Accessibility/ARIA/Roles/group_role) Rolle
  - : Kann verwendet werden, um eine Gruppe verwandter `menuitem`s innerhalb oder sonst im Besitz eines `menu` oder `menubar` zu identifizieren
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Gibt an, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bedienbar ist
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Gibt die Verfügbarkeit und den Typ eines interaktiven Popups an, das durch das `menuitem` ausgelöst werden kann

## Tastaturinteraktionen

- <kbd>Eingabe</kbd> und <kbd>Leertaste</kbd>
  - : Wenn das `menuitem` ein Untermenü hat, öffnet sich das Untermenü und der Fokus richtet sich auf das erste Element. Andernfalls wird das Element aktiviert und das Menü geschlossen.
- <kbd>Pfeil nach unten</kbd>
  - : Bei einem `menuitem`, das in einem `menubar` ein Untermenü hat, öffnet sich das Untermenü und der Fokus richtet sich auf das erste Element im Untermenü. Andernfalls wird der Fokus auf das nächste Element verschoben, optional vom letzten zum ersten Element weiterlaufend.
- <kbd>Pfeil nach oben</kbd>
  - : Verschiebt den Fokus auf das vorherige Element, optional vom ersten zum letzten Element weiterlaufend. Optional, wenn das `menuitem` in einem menubar ist und ein Untermenü hat, öffnet es das Untermenü und richtet den Fokus auf das letzte Element im Untermenü aus.
- <kbd>Pfeil nach rechts</kbd>
  - : Wenn in einem `menu`, das mit einem menubutton geöffnet wurde und nicht in einem `menubar`, tut das `menuitem` nichts, wenn es kein Untermenü hat. Wenn sich der Fokus in einem `menubar` befindet, verschiebt sich der Fokus auf das nächste Element, optional vom letzten zum ersten Element weiterlaufend. Wenn sich der Fokus in einem `menu` und auf einem `menuitem befindet, das ein Untermenü hat, öffnet sich das Untermenü und der Fokus richtet sich auf das erste Element darin. Wenn sich der Fokus in einem `menu` und auf einem Element befindet, das kein Untermenü hat, schließt sich das Untermenü und alle übergeordneten Menüs, der Fokus verschiebt sich auf das nächste Element im `menubar`, und falls der Fokus nun auf einem `menuitem` mit einem Untermenü liegt, wird entweder das Untermenü dieses `menuitem` geöffnet, ohne den Fokus ins Untermenü zu verschieben, oder das Untermenü dieses `menuitem` wird geöffnet und der Fokus richtet sich auf das erste Element im Untermenü aus.
- <kbd>Pfeil nach links</kbd>
  - : Wenn sich der Fokus in einem `menubar` befindet, verschiebt sich der Fokus auf das vorherige Element, optional vom ersten zum letzten weiterlaufend. Wenn sich der Fokus in einem Untermenü eines Elements in einem Menü befindet, schließt sich das Untermenü und der Fokus kehrt zum übergeordneten `menuitem` zurück. Wenn sich der Fokus in einem Untermenü eines Elements in einem `menubar` befindet, schließt sich das Untermenü, der Fokus verschiebt sich auf das vorherige Element im `menubar`, und falls der Fokus nun auf einem `menuitem` mit einem Untermenü liegt, wird entweder das Untermenü dieses `menuitem` geöffnet, ohne den Fokus ins Untermenü zu verschieben, oder das Untermenü dieses `menuitem` wird geöffnet und der Fokus richtet sich auf das erste Element im Untermenü aus.
- <kbd>Home</kbd>
  - : Wenn das Weiterlaufen der Pfeiltasten nicht unterstützt wird, verschiebt sich der Fokus auf das erste Element im aktuellen `menu` oder `menubar`.
- <kbd>Ende</kbd>
  - : Wenn das Weiterlaufen der Pfeiltasten nicht unterstützt wird, verschiebt sich der Fokus auf das letzte Element im aktuellen `menu` oder `menubar`.
- Jede Taste, die einem druckbaren Zeichen entspricht (Optional)
  - : Verschiebt den Fokus auf das nächste Element im aktuellen Menü, dessen Beschriftung mit diesem druckbaren Zeichen beginnt.
- <kbd>Escape</kbd>
  - : Schließt das Menü, das den Fokus enthält, und kehrt zum Element oder Kontext zurück, z.B. Menüschaltfläche oder übergeordnetes `menuitem`, von dem aus das Menü geöffnet wurde.
- <kbd>Tab</kbd>
  - : Verschiebt den Fokus auf das nächste Element in der Tab-Reihenfolge, und wenn das Element, das den Fokus hatte, nicht in einem menubar ist, schließt es sein Menü und alle geöffneten übergeordneten Menücontainer.
- <kbd>Shift + Tab</kbd>
  - : Verschiebt den Fokus auf das vorherige Element in der Tab-Reihenfolge, und wenn das Element, das den Fokus hatte, nicht in einem menubar ist, schließt es sein Menü und alle geöffneten übergeordneten Menücontainer.

Wenn ein Menü geöffnet wird oder eine Menüleiste als Ergebnis einer Kontextaktion den Fokus erhält, kann <kbd>Escape</kbd> oder <kbd>Eingabe</kbd> den Fokus zurück zum aufrufenden Kontext führen.

Einige Implementierungen von Navigationsmenübalken können menuitem-Elemente haben, die sowohl eine Funktion ausführen als auch ein Untermenü öffnen. In solchen Implementierungen führen <kbd>Eingabe</kbd> und <kbd>Leertaste</kbd> eine Navigationsfunktion aus, während <kbd>Pfeil nach unten</kbd> in einem horizontalen menubar das Untermenü öffnet, das mit diesem selben menuitem verbunden ist.

Wenn Elemente in einem `menubar` vertikal angeordnet sind und Elemente in Menücontainern horizontal angeordnet sind, funktioniert der <kbd>Pfeil nach unten</kbd> wie oben beim <kbd>Pfeil nach rechts</kbd> beschrieben, und der <kbd>Pfeil nach oben</kbd> wie oben beim <kbd>Pfeil nach links</kbd> beschrieben, und umgekehrt.

## Beispiele

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
        Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften
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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`menuitemcheckbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
