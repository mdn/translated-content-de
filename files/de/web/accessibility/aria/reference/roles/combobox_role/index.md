---
title: "ARIA: combobox Rolle"
short-title: combobox
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `combobox` Rolle identifiziert ein Element als ein `input`, das ein anderes Element steuert, wie eine `listbox` oder ein `grid`, das dynamisch aufklappen kann, um dem Benutzer beim Setzen des Wertes dieses `inputs` zu helfen.

## Beschreibung

Eine `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Das Ziel dieses Widgets ist es, die Benutzererfahrung zu verbessern, indem es dem Benutzer hilft, einen Wert auszuwählen, ohne den vollständigen Wert eingeben zu müssen und, optional, falls unterstützte Werte begrenzt sind, zu verhindern, dass der Benutzer ungültige oder anderweitig nicht unterstützte Werte eingibt.

Die `combobox` Rolle wird auf ein `input` gesetzt, das ein anderes Element steuert, wie eine `listbox` oder ein `grid`, das dynamisch aufklappen kann, um dem Benutzer beim Setzen des Wertes des `inputs` zu helfen.

Das `combobox` Eingabefeld kann entweder ein einzeiliges Textfeld sein, das Bearbeiten und Tippen unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einer {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der Combobox anzeigt.

Eine WAI-ARIA-Combobox hat nur ein Attribut, das von Autoren angegeben werden muss: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Allerdings gibt es auch mehrere andere Attribute, die je nach Umsetzung der Combobox erforderlich sein können. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

Normalerweise ist der anfängliche Zustand einer Combobox eingeklappt, mit `aria-expanded="false"` gesetzt. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Button zum Aufrufen des Popups sichtbar. Die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), mit dem auf `false` gesetzten Wert, ist erforderlich, wenn eingeklappt, da es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das seinen aktuellen Wert zeigt, als auch sein zugehöriges Popup-Element sichtbar sind. Wenn erweitert, muss `aria-expanded="true"` gesetzt werden.

Das Popup-Element, das mit einer `combobox` verbunden ist, kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Element sein.

Comboboxes haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Wert von `listbox`, daher ist das Einschließen dieses Attributs optional, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popupelement ein `tree`, `grid` oder `dialog` (alles anderes als eine `listbox`) ist, ist das `aria-haspopup` Attribut erforderlich. Der Wert von `aria-haspopup` muss entweder die `tree`, `grid`, `dialog` oder `listbox` Rolle sein. Beachten Sie, dass `true` für diese Eigenschaft `menu` bedeutet, daher stellen Sie sicher, dass der Wert der Rolle des Popups entspricht, nicht einem booleschen Wert.

Wenn das Popup einer Combobox angezeigt wird, stellen Sie sicher, dass das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut auf dem Combobox-Element auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popup `listbox`, `tree`, `grid` oder `dialog` Elements gesetzt ist. Dies ist die Art, wie die Beziehung zwischen dem Element mit der `combobox` Rolle und dem Popup, das es steuert, angezeigt wird. (Hinweis: In älteren ARIA-Spezifikationen war es `aria-owns` anstelle von `aria-controls`, daher könnten Sie `aria-owns` in älteren Combobox-Implementierungen sehen. Das `aria-owns` im Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Benutzerschnittstelle der Combobox eine sichtbare Steuerung, wie ein Symbol, enthält, die die Sichtbarkeit des Popups über Zeiger- und Toucheingabeereignisse steuern lässt, sollte diese Steuerung ein {{HTMLElement('button')}}, {{HTMLElement('input')}} vom Typ `button` oder ein [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) Rollelement mit einer [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) von `-1` sein. Dies ermöglicht, dass der Button fokussierbar aber nicht in der Sequenz der Tastaturnavigation enthalten ist. Es darf nicht ein Nachfahre des Elements mit der Rolle `combobox` sein.

Um tastaturzugänglich zu sein, muss die Tastaturunterstützung zum Verschieben des Fokus zwischen dem `combobox` Eingabefeld-Element und den in dem Popup `listbox`, `tree`, `grid` oder `dialog` enthaltenen Elementen programmiert werden. Eine gängige Konvention ist, dass <kbd>Pfeil nach unten</kbd> den Fokus vom Eingang auf den ersten fokussierbaren Nachfahren des Popup-Elements verschiebt.

Die [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Eigenschaft kann verwendet werden, um das aktuell aktive Element des Combobox-Popups zu identifizieren, beispielsweise eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus beim Aufrufen des Popups nicht auf der Combobox bleibt, sondern in das Popup, wie etwa ein Dialogfeld, verschoben wird, dann kann `aria-activedescendant` möglicherweise nicht notwendig sein.

Wenn das Combobox-Element ein {{HTMLElement('input')}} Element ist, ist der Wert der Combobox der Wert des Eingabefeldes. Andernfalls stammt der Wert der Combobox von seinen nachfolgenden Elementen.

Wenn die `combobox` Texteingabe unterstützt und Autovervollständigungsverhalten bietet, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) auf das Combobox-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das `aria-autocomplete` Attribut zeigt an, dass das Eingeben von Text die Anzeige von einem oder mehreren Vorhersagen des beabsichtigten Wertes des Benutzers für die Combobox auslöst und spezifiziert, wie die Vorhersagen präsentiert werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn ein {{HTMLElement('input')}} Element verwendet wird, sollte der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls, wenn ein geeignetes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das `combobox` Eingabefeld dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle der `combobox` hinzu und setzen Sie den Wert des Attributs auf die `id` des benennenden Elements oder der Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), jedoch nicht beides.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Erforderlich. Gibt an, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Impliziert. Wenn weggelassen, standardmäßig auf `listbox`. Unterstützt auch `tree`, `grid` oder `dialog`. Identifiziert, dass die Combobox ein Ausklappfenster hat und gibt den Typ an.

### Tastatur-Interaktionen

- <kbd>Pfeil nach unten</kbd>

  - : Verschiebt den Fokus zur nächsten Option oder zur ersten Option, wenn keine ausgewählt ist.

- <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> (Optional)

  - : Wenn das Popup verfügbar ist, aber nicht angezeigt wird, wird das Popup angezeigt, ohne den Fokus zu verschieben.

- <kbd>Pfeil nach oben</kbd>

  - : Verschiebt den Fokus zur vorherigen Option. Verschiebt den Fokus zur ersten Option, wenn der Fokus ursprünglich auf der letzten Option war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach oben</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, kehrt der Fokus zur Combobox zurück, andernfalls schließt es das Popup.

- <kbd>Enter</kbd>
  - : Wenn die Combobox bearbeitbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, akzeptiert der Vorschlag entweder durch Platzieren des Eingabecursors am Ende des akzeptierten Wertes in der Combobox oder durch Ausführen einer Standardaktion auf dem Wert. Zum Beispiel kann die Standardaktion in einer Messaging-Anwendung sein, den akzeptierten Wert zu einer Liste der Nachrichtenempfänger hinzuzufügen und dann die Combobox zu löschen, damit der Benutzer einen weiteren Empfänger hinzufügen kann.

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
- [ARIA: `listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Accessible combobox module](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
