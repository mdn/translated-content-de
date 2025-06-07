---
title: "ARIA: combobox role"
short-title: combobox
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `combobox`-Rolle identifiziert ein Element als ein `input`, das ein anderes Element, wie etwa ein `listbox` oder `grid`, steuert, das dynamisch aufpoppen kann, um dem Benutzer zu helfen, den Wert dieses `input` festzulegen.

## Beschreibung

Eine `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Der Zweck dieses Widgets ist es, die Benutzererfahrung zu verbessern, indem es dem Benutzer hilft, einen Wert auszuwählen, ohne den vollständigen Wert eingeben zu müssen, und optional, je nachdem, ob unterstützte Werte limitiert sind, zu verhindern, dass der Benutzer ungültige oder anderweitig nicht unterstützte Werte eingibt.

Die `combobox`-Rolle wird auf ein Input-Element gesetzt, das ein anderes Element, wie etwa eine Listbox oder ein Grid, steuert, das dynamisch aufpoppen kann, um den Benutzer bei der Festlegung des Eingabewertes zu unterstützen.

Das `combobox`-Eingabefeld kann entweder ein einzeiliges Textfeld sein, das Bearbeiten und Eingeben unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einem {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der Combobox anzeigt.

Eine WAI-ARIA-Combobox hat nur ein Attribut, das erforderlich ist, um von Autoren angegeben zu werden: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Sie hat jedoch auch mehrere andere Attribute, die, je nach Implementierung der Combobox, notwendig sind, anzugeben. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

Typischerweise befindet sich der initiale Zustand einer Combobox im eingeklappten Zustand, wobei `aria-expanded="false"` gesetzt ist. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Button sichtbar, um das Popup einzuleiten. Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) mit dem Wert `false` ist im eingeklappten Zustand erforderlich, da es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das den aktuellen Wert anzeigt, als auch das zugehörige Popup-Element sichtbar sind. Wenn sie erweitert ist, muss `aria-expanded="true"` gesetzt werden.

Das mit einer `combobox` assoziierte Popup-Element kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Element sein.

Comboboxen haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Wert von `listbox`, daher ist das Einschließen dieses Attributs optional, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element ein `tree`, `grid` oder `dialog` (alles außer einer `listbox`) ist, ist das `aria-haspopup`-Attribut erforderlich. Der Wert von `aria-haspopup` muss entweder die `tree`, `grid`, `dialog` oder `listbox` Rolle sein. Beachten Sie, dass für diese Eigenschaft `true` gleichbedeutend mit `menu` ist, daher stellen Sie sicher, dass der Wert der Rolle des Popups entspricht und kein boolescher Wert ist.

Wenn das Popup einer Combobox angezeigt wird, stellen Sie sicher, dass das Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) am Combobox-Element auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popup-`listbox`, `tree`, `grid` oder `dialog`-Elements gesetzt ist. So wird die Beziehung zwischen dem Element mit der `combobox`-Rolle und dem von ihm gesteuerten Popup angezeigt. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, daher könnten Sie `aria-owns` in älteren Combobox-Implementierungen sehen. Das `aria-owns` im Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Combobox-Benutzeroberfläche eine sichtbare Steuerung beinhaltet, wie z. B. ein Symbol, das die Sichtbarkeit des Popups durch Zeiger- und Touch-Ereignisse steuern lässt, sollte diese Steuerung ein {{HTMLElement('button')}}, ein {{HTMLElement('input')}} vom Typ `button` oder ein [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) Element mit einem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) von `-1` sein. Dies ermöglicht, dass der Button fokussierbar ist, jedoch nicht in der Tabulator-Reihenfolge enthalten ist. Es darf kein Nachkomme des Elements mit der `combobox`-Rolle sein.

Um über die Tastatur zugänglich zu sein, muss die Tastaturunterstützung für das Verschieben des Fokus zwischen dem `combobox`-Eingabefeld-Element und in dem Popup-Element enthaltenen `listbox`, `tree`, `grid` oder `dialog`-Elementen programmiert werden. Eine übliche Konvention ist, dass <kbd>Pfeil nach unten</kbd> den Fokus vom Eingabefeld auf das erste fokussierbare Nachkommenselement des Popup-Elements verschiebt.

Die [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Eigenschaft kann verwendet werden, um das derzeit aktive Element des Combobox-Popups zu identifizieren, beispielsweise eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus nicht auf der Combobox bleibt, wenn ihr Popup aufgerufen wird, sondern vielmehr der DOM-Fokus in das Popup verschoben wird, wie etwa ein Dialog, ist `aria-activedescendant` möglicherweise nicht notwendig.

Wenn das Combobox-Element ein {{HTMLElement('input')}}-Element ist, ist der Wert der Combobox der Wert des Eingabefeldes. Andernfalls kommt der Wert der Combobox von ihren Nachkommenselementen.

Wenn die `combobox` Texteingabe unterstützt und Autovervollständigungsverhalten bietet, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) am Combobox-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das `aria-autocomplete`-Attribut zeigt an, dass die Eingabe von Text eine oder mehrere Vorhersagen des beabsichtigten Wertes des Benutzers für die Combobox auslöst und gibt an, wie die Vorhersagen präsentiert werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn ein {{HTMLElement('input')}}-Element verwendet wird, sollte der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Wenn nicht, und ein entsprechendes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das `combobox`-Eingabefeld dient, schließen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle `combobox` ein und setzen Sie den Wert des Attributs auf die `id` des oder der labelnden Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beides.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Erforderlich. Identifiziert, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Impliziert. Wenn weggelassen, ist der Standard `listbox`. Unterstützt auch `tree`, `grid` oder `dialog`. Identifiziert, dass die Combobox ein Popup hat, und zeigt den Typ an.

### Tastatur-Interaktionen

- <kbd>Pfeil nach unten</kbd>

  - : Verschiebt den Fokus auf die nächste Option oder auf die erste Option, wenn keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> (Optional)

  - : Wenn das Popup verfügbar, aber nicht angezeigt ist, zeigt es das Popup an, ohne den Fokus zu verschieben.

- <kbd>Pfeil nach oben</kbd>

  - : Verschiebt den Fokus auf die vorherige Option. Verschiebt den Fokus auf die erste Option, wenn der Fokus ursprünglich auf der letzten Option war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach oben</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, wird der Fokus auf die Combobox zurückgesetzt, andernfalls wird das Popup geschlossen.

- <kbd>Enter</kbd>
  - : Wenn die Combobox bearbeitbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, akzeptiert der Vorschlag entweder durch Platzieren des Eingabecursors am Ende des akzeptierten Wertes in der Combobox oder durch Durchführen einer Standardaktion auf dem Wert. Zum Beispiel könnte in einer Messaging-Anwendung die Standardaktion darin bestehen, den akzeptierten Wert zu einer Liste der Nachrichtenempfänger hinzuzufügen und dann die Combobox zu löschen, um dem Benutzer zu ermöglichen, einen weiteren Empfänger hinzuzufügen.

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

{{Spezifikationen}}

## Siehe auch

- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('option')}}-Element
- HTML {{HTMLElement('input')}}-Element
- [ARIA: `listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Accessible combobox module](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
