---
title: "ARIA: combobox Rolle"
slug: Web/Accessibility/ARIA/Roles/combobox_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `combobox` Rolle identifiziert ein Element als `input`, das ein anderes Element wie ein `listbox` oder `grid` steuert, das dynamisch angezeigt werden kann, um dem Benutzer zu helfen, den Wert des `input` festzulegen.

## Beschreibung

Ein `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Der Zweck dieses Widgets ist es, die Benutzererfahrung zu verbessern, indem es dem Benutzer hilft, einen Wert auszuwählen, ohne den vollständigen Wert eingeben zu müssen, und optional, je nachdem ob unterstützte Werte begrenzt sind, den Benutzer daran zu hindern, ungültige oder anderweitig nicht unterstützte Werte einzugeben.

Die `combobox` Rolle wird auf ein `input` gesetzt, das ein anderes Element wie ein `listbox` oder `grid` steuert, das dynamisch angezeigt werden kann, um dem Benutzer zu helfen, den Wert des `input` festzulegen.

Das `combobox` Eingabefeld kann entweder ein einzeiliges Textfeld sein, das Bearbeitung und Eingabe unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einem {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der `combobox` anzeigt.

Eine WAI-ARIA Combobox hat nur ein Attribut, das von den Autoren spezifiziert werden muss: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded). Sie hat jedoch auch mehrere andere Attribute, die angegeben werden müssen, abhängig von der Implementierung der Combobox. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant), und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete).

Typischerweise befindet sich eine Combobox initial im eingeklappten Zustand, wobei `aria-expanded="false"` gesetzt ist. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Button zum Aufrufen des Popups sichtbar. Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) mit dem auf `false` gesetzten Wert ist erforderlich, wenn die Combobox eingeklappt ist, da es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das seinen aktuellen Wert anzeigt, als auch das zugehörige Popup-Element sichtbar sind. Wenn erweitert, muss `aria-expanded="true"` gesetzt sein.

Das Popup-Element, das mit einer `combobox` verbunden ist, kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role) Element sein.

Comboboxen haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Wert `listbox`, daher ist das Einschließen dieses Attributs optional, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element eine `tree`, `grid` oder `dialog` (alles außer einer `listbox`) ist, ist das `aria-haspopup` Attribut erforderlich. Der Wert von `aria-haspopup` muss entweder die Rolle `tree`, `grid`, `dialog` oder `listbox` haben. Beachten Sie, dass für diese Eigenschaft `true` `menu` bedeutet, stellen Sie also sicher, dass der Wert der Rolle des Popups entspricht und kein Boolescher Wert ist.

Wenn das Popup einer Combobox angezeigt wird, stellen Sie sicher, dass das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Attribut am Combobox-Element auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Popup-`listbox`, `tree`, `grid` oder `dialog` Elements gesetzt ist. Dadurch wird die Beziehung zwischen dem Element mit der `combobox` Rolle und dem Popup angezeigt, das es steuert. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` statt `aria-controls`, daher können Sie `aria-owns` in älteren Combobox-Implementierungen sehen. Das `aria-owns` im Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Combobox-Benutzeroberfläche ein sichtbares Steuerelement wie ein Symbol umfasst, das die Sichtbarkeit des Popups über Maus- und Touch-Ereignisse steuert, sollte dieses Steuerelement ein {{HTMLElement('button')}}, {{HTMLElement('input')}} vom Typ `button` oder ein Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) mit einem [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) von `-1` sein. Dadurch wird das Steuerelement zwar fokussierbar, aber nicht in die Tastenfolgenaufnahme einbezogen. Es darf nicht ein Nachfahre des Elements mit der Rolle `combobox` sein.

Um tastaturzugänglich zu sein, muss die Tastaturunterstützung für die Verschiebung des Fokus zwischen dem `combobox` Eingabefeld-Element und Elementen, die im Popup-`listbox`, `tree`, `grid` oder `dialog` enthalten sind, programmiert werden. Eine häufige Konvention ist, dass <kbd>Nach unten-Taste</kbd> den Fokus vom Eingabefeld zum ersten fokussierbaren Nachfahren des Popup-Elements verschiebt.

Die [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Eigenschaft kann verwendet werden, um das derzeit aktive Element des Combobox-Popups zu identifizieren, beispielsweise eine `option` innerhalb eines Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus nicht mehr auf der Combobox bleibt, wenn ihr Popup aufgerufen wird, sondern sich der DOM-Fokus in das Popup verschiebt, wie z.B. in einem Dialog, dann ist `aria-activedescendant` möglicherweise nicht erforderlich.

Wenn das Combobox-Element ein {{HTMLElement('input')}} Element ist, ist der Wert der Combobox der Wert der Eingabe. Andernfalls stammt der Wert der Combobox von seinen Nachfahrelementen.

Wenn die `combobox` Texteingabe unterstützt und ein Autovervollständigungsverhalten bereitstellt, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) auf dem Combobox-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das `aria-autocomplete` Attribut zeigt an, dass die Eingabe von Text die Anzeige eines oder mehrerer Vorhersagen des beabsichtigten Werts des Benutzers für die Combobox auslösen wird und gibt an, wie die Vorhersagen angezeigt werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn ein {{HTMLElement('input')}} Element verwendet wird, sollte der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Wenn nicht, und wenn ein geeignetes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das `combobox` Eingabefeld dient, schließen Sie `aria-labelledby` als Attribut in das Element mit der Rolle `combobox` ein und setzen Sie den Wert des Attributs auf die `id` des beschriftenden Elements oder der beschriftenden Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Nicht beides.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Erforderlich. Identifiziert, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Implizit. Wenn weggelassen, Standardwert `listbox`. Unterstützt auch `tree`, `grid` oder `dialog`. Identifiziert die Combobox als Popup und gibt den Typ an.

### Tastaturinteraktionen

- <kbd>Nach unten-Taste</kbd>

  - : Bewegt den Fokus zur nächsten Option oder zur ersten Option, wenn keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Nach unten-Taste</kbd> (Optional)

  - : Wenn das Popup verfügbar ist, aber nicht angezeigt wird, wird das Popup angezeigt, ohne den Fokus zu verschieben.

- <kbd>Nach oben-Taste</kbd>

  - : Bewegt den Fokus zur vorherigen Option. Verschiebt den Fokus zur ersten Option, wenn der Fokus ursprünglich auf der letzten Option war.

- <kbd>Alt</kbd> + <kbd>Nach oben-Taste</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, kehrt der Fokus zur Combobox zurück, ansonsten wird das Popup geschlossen.

- <kbd>Eingabetaste</kbd>
  - : Wenn die Combobox bearbeitbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, akzeptiert der Vorschlag entweder durch Platzieren des Eingabecursors am Ende des akzeptierten Wertes in der Combobox oder durch Ausführen einer Standardaktion auf dem Wert. Zum Beispiel kann in einer Nachrichtenanwendung die Standardaktion das Hinzufügen des akzeptierten Wertes zu einer Liste von Nachrichtenempfängern sein und dann die Combobox leeren, damit der Benutzer einen weiteren Empfänger hinzufügen kann.

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
- [Accessible combobox module](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
