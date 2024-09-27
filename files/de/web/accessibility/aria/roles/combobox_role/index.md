---
title: "ARIA: combobox role"
slug: Web/Accessibility/ARIA/Roles/combobox_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `combobox`-Rolle identifiziert ein Element als ein `input`, das ein anderes Element steuert, wie zum Beispiel ein `listbox` oder `grid`, das dynamisch aufklappen kann, um dem Benutzer bei der Eingabe des Werts für dieses `input` zu helfen.

## Beschreibung

Eine `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Ziel dieses Widgets ist es, die Benutzererfahrung zu verbessern, indem der Benutzer einen Wert auswählen kann, ohne den vollständigen Wert eingeben zu müssen, und, optional, je nachdem, ob unterstützte Werte begrenzt sind, den Benutzer daran zu hindern, ungültige oder anderweitig nicht unterstützte Werte einzugeben.

Die `combobox`-Rolle wird auf eine Eingabe gesetzt, die ein anderes Element steuert, wie etwa eine Listbox oder ein Gitter, das dynamisch aufklappen kann, um dem Benutzer bei der Eingabe des Werts zu helfen.

Das `combobox`-Eingabefeld kann entweder ein einzeiliges Textfeld sein, das das Bearbeiten und Tippen unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einem {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der Combobox anzeigt.

Eine WAI-ARIA-Combobox hat nur ein Attribut, das Autoren angeben müssen: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded). Es gibt jedoch mehrere andere Attribute, die je nach Implementierung der Combobox angegeben werden müssen. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete).

Typischerweise ist der Anfangszustand einer Combobox eingeklappt, mit `aria-expanded="false"` gesetzt. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Button, um das Popup aufzurufen, sichtbar. Das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded), auf `false` gesetzt, ist im eingeklappten Zustand erforderlich, da es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das seinen aktuellen Wert anzeigt, als auch das zugehörige Popup-Element sichtbar sind. Wenn erweitert, muss `aria-expanded="true"` gesetzt sein.

Das Popup-Element, das mit einer `combobox` verbunden ist, kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) Element sein.

Comboboxen haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Wert von `listbox`, so dass das Einfügen dieses Attributs optional ist, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element ein `tree`, `grid` oder `dialog` (alles andere als eine `listbox`) ist, ist das `aria-haspopup` Attribut erforderlich. Der Wert von `aria-haspopup` muss entweder die `tree`, `grid`, `dialog` oder `listbox` Rolle sein. Beachten Sie, dass für diese Eigenschaft `true` `menu` bedeutet. Stellen Sie daher sicher, dass der Wert der Rolle des Popups entspricht, nicht einem Booleschen Wert.

Wenn ein Popup einer Combobox angezeigt wird, stellen Sie sicher, dass das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Attribut auf dem Combobox-Element auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Popup-`listbox`, `tree`, `grid` oder `dialog` Elements gesetzt ist. Auf diese Weise wird die Beziehung zwischen dem Element mit der `combobox` Rolle und dem Popup, das es steuert, angegeben. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, daher könnten Sie `aria-owns` in älteren Combobox-Implementierungen sehen. `aria-owns` im Code sollte in `aria-controls` aktualisiert werden!)

Wenn die Combobox-Benutzeroberfläche eine sichtbare Steuerung, wie ein Symbol, enthält, das die Sichtbarkeit des Popups über Zeiger- und Berührungsereignisse steuern lässt, sollte diese Steuerung ein {{HTMLElement('button')}}, {{HTMLElement('input')}} vom Typ `button` oder ein mit einem [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) von `-1` gekennzeichnetes [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) Rollen-Element sein. Auf diese Weise kann der Button fokussierbar, aber nicht in der Tabulatorfolge der Tastatur enthalten sein. Er darf kein Nachkomme des Elements mit der Rolle `combobox` sein.

Um tastaturzugänglich zu sein, muss die Tastaturunterstützung für das Verschieben des Fokus zwischen dem `combobox` Eingabefeld-Element und den in dem Popup `listbox`, `tree`, `grid` oder `dialog` enthaltenen Elementen programmiert werden. Eine gängige Konvention ist, dass <kbd>Pfeil nach unten</kbd> den Fokus vom Eingabefeld auf den ersten fokussierbaren Nachkommen des Popup-Elements verschiebt.

Die [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Eigenschaft kann verwendet werden, um das aktuell aktive Element des Combobox-Popups zu identifizieren, beispielsweise eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus nicht auf der Combobox bleibt, wenn ihr Popup aufgerufen wird, sondern der DOM-Fokus in das Popup, wie z.B. in ein Dialogfeld, verschoben wird, ist `aria-activedescendant` möglicherweise nicht erforderlich.

Wenn das Combobox-Element ein {{HTMLElement('input')}} Element ist, ist der Wert der Combobox der Wert des Eingabefelds. Andernfalls stammt der Wert der Combobox von ihren Nachkommenelementen.

Wenn die `combobox` Texteingaben unterstützt und ein Autovervollständigungsverhalten bietet, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) auf dem Combobox-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das `aria-autocomplete` Attribut zeigt an, dass die Eingabe von Text eine oder mehrere Vorhersagen des vom Benutzer beabsichtigten Werts für die Combobox auslösen wird und spezifiziert, wie die Vorhersagen dargestellt werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn ein {{HTMLElement('input')}} Element verwendet wird, sollte der zugängliche Name vom zugehörigen {{HTMLElement('label')}} kommen. Wenn nicht, und wenn ein geeignetes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Bezeichnung für das `combobox` Eingabefeld dient, fügen Sie `aria-labelledby` als Attribut an dem Element mit der Rolle `combobox` hinzu und setzen Sie den Wert des Attributs auf die `id` des labelnden Elements oder Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Nicht beides.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Erforderlich. Gibt an, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Impliziert. Wenn weggelassen, ist `listbox` der Standardwert. Unterstützt auch `tree`, `grid` oder `dialog`. Identifiziert die Combobox als ein Popout habend und gibt den Typ an.

### Tastaturinteraktionen

- <kbd>Pfeil nach unten</kbd>

  - : Verschiebt den Fokus zur nächsten Option oder zur ersten Option, wenn keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> (Optional)

  - : Wenn das Popup verfügbar, aber nicht angezeigt ist, zeigt es das Popup ohne den Fokus zu verschieben.

- <kbd>Pfeil nach oben</kbd>

  - : Verschiebt den Fokus zur vorherigen Option. Verschiebt den Fokus zur ersten Option, wenn der Fokus ursprünglich auf der letzten Option war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach oben</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, kehrt es zum Combobox zurück, andernfalls schließt es das Popup.

- <kbd>Eingabetaste</kbd>
  - : Wenn die Combobox bearbeitbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, akzeptiert den Vorschlag entweder, indem der Eingabecursor am Ende des akzeptierten Wertes in der Combobox platziert wird, oder indem eine Standardaktion auf den Wert ausgeführt wird. Zum Beispiel könnte in einer Messaging-Anwendung die Standardaktion darin bestehen, den akzeptierten Wert zu einer Liste von Nachrichtene Empfängern hinzuzufügen und dann die Combobox zu löschen, damit der Benutzer einen weiteren Empfänger hinzufügen kann.

## Beispiele

```html
<label for="jokes">Pick what type of jokes you like</label>
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
  <ul id="joketypes" role="listbox" aria-label="Jokes">
    <li class="active" role="option" id="item1">Puns</li>
    <li class="option" role="option" id="item2">Riddles</li>
    <li class="option" role="option" id="item3">Observations</li>
    <li class="option" role="option" id="item4">Knock-knock</li>
    <li class="option" role="option" id="item5">One liners</li>
  </ul>
</div>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('label')}} Element
- HTML {{HTMLElement('select')}} Element
- HTML {{HTMLElement('option')}} Element
- HTML {{HTMLElement('input')}} Element
- [ARIA: `listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [ARIA Role Model – Combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [Zugängliches Combobox-Modul](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
