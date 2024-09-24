---
title: "ARIA: combobox-Rolle"
slug: Web/Accessibility/ARIA/Roles/combobox_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `combobox`-Rolle identifiziert ein Element als `input`, das ein anderes Element wie ein `listbox` oder `grid` steuert, das dynamisch angezeigt werden kann, um dem Benutzer bei der Einstellung des Wertes dieses `input` zu helfen.

## Beschreibung

Ein `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Der Zweck dieses Widgets besteht darin, die Benutzererfahrung zu verbessern, indem der Benutzer einen Wert auswählen kann, ohne den vollständigen Wert eingeben zu müssen und, optional, je nachdem ob die unterstützten Werte begrenzt sind, den Benutzer daran zu hindern, ungültige oder anderweitig nicht unterstützte Werte einzugeben.

Die `combobox`-Rolle wird auf ein `input` angewendet, das ein anderes Element, wie eine `listbox` oder ein `grid`, steuert, das dynamisch angezeigt werden kann, um den Benutzer bei der Einstellung des Wertes des `input` zu unterstützen.

Das `combobox`-Eingabefeld kann entweder ein einzeiliges Textfeld sein, das Bearbeitung und Eingabe unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einem {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der Combobox anzeigt.

Eine WAI-ARIA-Combobox hat nur ein Attribut, das Autoren zwingend angeben müssen: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded). Sie hat jedoch auch mehrere andere Attribute, die je nach Implementierung der Combobox angegeben werden müssen. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete).

Typischerweise ist der anfängliche Zustand einer Combobox eingeklappt, mit `aria-expanded="false"` gesetzt. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Knopf zur Anzeige des Popups sichtbar. Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded), mit dem Wert `false`, ist erforderlich, wenn die Combobox eingeklappt ist, da es assistiver Technologie anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das den aktuellen Wert anzeigt, als auch das zugehörige Popup-Element sichtbar sind. Wenn sie erweitert ist, muss `aria-expanded="true"` gesetzt werden.

Das mit einer `combobox` verknüpfte Popup-Element kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) Element sein.

Comboboxes haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Wert von `listbox`, daher ist der Einschluss dieses Attributs optional, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element ein `tree`, `grid` oder `dialog` ist (alles andere als eine `listbox`), ist das Attribut `aria-haspopup` erforderlich. Der Wert von `aria-haspopup` muss entweder die Rolle `tree`, `grid`, `dialog` oder `listbox` sein. Beachten Sie, dass für diese Eigenschaft `true` `menu` bedeutet, stellen Sie daher sicher, dass der Wert der Rolle des Popups entspricht, nicht einem Booleschen Wert.

Wenn ein Popup einer Combobox angezeigt wird, stellen Sie sicher, dass das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)-Attribut auf dem Combobox-Element auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Popup-`listbox`, `tree`, `grid` oder `dialog`-Elements gesetzt ist. Dadurch wird die Beziehung zwischen dem Element mit der `combobox`-Rolle und dem von ihm gesteuerten Popup angezeigt. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, daher könnten Sie `aria-owns` in älteren Combobox-Implementierungen sehen. Der `aria-owns`-Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Combobox-Benutzeroberfläche ein sichtbares Steuerelement enthält, wie z.B. ein Symbol, das die Sichtbarkeit des Popups über Zeiger- und Toucheingaben steuern kann, sollte dieses Steuerelement ein {{HTMLElement('button')}} oder ein {{HTMLElement('input')}} vom Typ `button` oder ein Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) sein, das einen [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) von `-1` hat. So kann der Button fokussierbar sein, aber nicht in der Tastatur-Tab-Reihenfolge enthalten. Er darf kein Nachfolger des Elements mit der `combobox`-Rolle sein.

Um tastaturzugänglich zu sein, muss die Tastaturunterstützung für das Verschieben des Fokus zwischen dem `combobox`-Eingabefeldelement und den in dem Popup enthaltenen Elementen `listbox`, `tree`, `grid` oder `dialog` programmiert werden. Eine gängige Konvention ist, dass <kbd>Pfeil nach unten</kbd> den Fokus vom Eingabefeld auf den ersten fokussierbaren Nachfolger des Popup-Elements verschiebt.

Die Eigenschaft [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) kann verwendet werden, um das aktuell aktive Element des Combobox-Popups zu identifizieren, zum Beispiel eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox verbleibt. Wenn der DOM-Fokus beim Aufrufen des Popups nicht auf der Combobox verbleibt, sondern sich in das Popup, wie in einem Dialog, verschiebt, dann ist `aria-activedescendant` möglicherweise nicht notwendig.

Wenn das Combobox-Element ein {{HTMLElement('input')}}-Element ist, ist der Wert der Combobox der Wert des Eingabefeldes. Andernfalls ergibt sich der Wert der Combobox aus ihren Nachkommenelementen.

Wenn die `combobox` Texteingaben unterstützt und ein Autokomplettierungsverhalten bietet, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) auf dem Combobox-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das `aria-autocomplete`-Attribut gibt an, dass das Eingeben von Text die Anzeige von Vorhersagen des beabsichtigten Wertes des Benutzers für die Combobox auslösen wird und spezifiziert, wie die Vorhersagen angezeigt werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn ein {{HTMLElement('input')}}-Element verwendet wird, sollte der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Falls nicht, wenn ein entsprechendes Label sichtbar im Inhalt erscheint, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an. Andernfalls, wenn kein sichtbares Label vorhanden ist, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) stattdessen. Nicht beides.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Erforderlich. Gibt an, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Impliziert. Wird ausgelassen, standardmäßig `listbox`. Unterstützt auch `tree`, `grid` oder `dialog`. Identifiziert, dass die Combobox ein Popup hat und gibt den Typ an.

### Tastaturinteraktionen

- <kbd>Pfeil nach unten</kbd>

  - : Verschiebt den Fokus auf die nächste Option oder auf die erste Option, wenn keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> (Optional)

  - : Wenn das Popup verfügbar ist, aber nicht angezeigt wird, zeigt es das Popup, ohne den Fokus zu verschieben.

- <kbd>Pfeil nach oben</kbd>

  - : Verschiebt den Fokus auf die vorherige Option. Verschiebt den Fokus auf die erste Option, wenn der Fokus ursprünglich auf der letzten Option war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach oben</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, wird der Fokus auf die Combobox zurückgesetzt, andernfalls wird das Popup geschlossen.

- <kbd>Enter</kbd>
  - : Wenn die Combobox editierbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, wird der Vorschlag angenommen, indem entweder der Eingabecursor ans Ende des angenommenen Wertes in der Combobox gesetzt wird oder eine Standardaktion mit dem Wert durchgeführt wird. Zum Beispiel könnte in einer Messaging-Anwendung die Standardaktion darin bestehen, den angenommenen Wert zur Liste der Nachrichtenempfänger hinzuzufügen und dann die Combobox zu leeren, damit der Benutzer einen weiteren Empfänger hinzufügen kann.

## Beispiele

```html
<label for="jokes">Wählen Sie die Art von Witzen, die Sie mögen</label>
<div class="combo-wrap">
  <input
    type="text"
    id="jokes"
    role="combobox"
    aria-controls="joketypes"
    aria-autocomplete="list"
    aria-expanded="false"
    data-active-option="item1"
    aria-activedescendant="" />
  <span aria-hidden="true" data-trigger="multiselect"></span>
  <ul id="joketypes" role="listbox" aria-label="Witze">
    <li class="active" role="option" id="item1">Wortspiele</li>
    <li class="option" role="option" id="item2">Rätsel</li>
    <li class="option" role="option" id="item3">Beobachtungen</li>
    <li class="option" role="option" id="item4">Klopf-Klopf</li>
    <li class="option" role="option" id="item5">Einzeiler</li>
  </ul>
</div>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('option')}}-Element
- HTML {{HTMLElement('input')}}-Element
- [ARIA: `listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [ARIA: `option`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [ARIA Role Model – Combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [Barrierefreie Combobox-Modul](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
