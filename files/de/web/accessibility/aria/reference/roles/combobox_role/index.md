---
title: "ARIA: Rolle combobox"
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die Rolle `combobox` identifiziert ein Element als `input`, das ein anderes Element steuert, wie z.B. ein `listbox` oder `grid`, das dynamisch angezeigt werden kann, um dem Benutzer zu helfen, den Wert dieses `input` festzulegen.

## Beschreibung

Ein `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Der Zweck dieses Widgets ist es, die Benutzererfahrung zu verbessern, indem dem Benutzer geholfen wird, einen Wert auszuwählen, ohne den vollständigen Wert eingeben zu müssen, und optional, je nachdem ob unterstützte Werte begrenzt sind, den Benutzer daran zu hindern, ungültige oder nicht unterstützte Werte einzugeben.

Die Rolle `combobox` wird auf das Eingabefeld gesetzt, das ein anderes Element steuert, wie z.B. eine Listbox oder ein Grid, das dynamisch angezeigt werden kann, um dem Benutzer zu helfen, den Wert des Eingabefeldes festzulegen.

Das Eingabefeld der `combobox` kann entweder ein einzeiliges Textfeld sein, das Editieren und Tippen unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einer {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der Combobox anzeigt.

Eine WAI-ARIA combobox hat nur ein Attribut, das Autoren angeben müssen: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Sie hat jedoch auch mehrere andere Attribute, die angegeben werden müssen, abhängig von der Implementierung der Combobox. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

Typischerweise ist der Anfangszustand einer Combobox eingeklappt, mit `aria-expanded="false"` gesetzt. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Button, um das Popup aufzurufen, sichtbar. Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) mit dem Wert `false` ist notwendig, wenn es eingeklappt ist, weil es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox ist im erweiterten Zustand, wenn sowohl das Combobox-Element, das seinen aktuellen Wert anzeigt, als auch sein zugehöriges Popup-Element sichtbar sind. Wenn es erweitert ist, muss `aria-expanded="true"` gesetzt sein.

Das Popup-Element, das mit einer `combobox` verbunden ist, kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Element sein.

Comboboxes haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Wert von `listbox`, sodass das Hinzufügen dieses Attributs optional ist, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element ein `tree`, `grid` oder `dialog` (alles andere als eine `listbox`) ist, ist das `aria-haspopup` Attribut erforderlich. Der Wert von `aria-haspopup` muss entweder die Rolle `tree`, `grid`, `dialog` oder `listbox` sein. Beachten Sie, dass für diese Eigenschaft `true` `menu` bedeutet, also stellen Sie sicher, dass der Wert der Rolle des Popups entspricht und nicht einem booleschen Wert.

Wenn das Popup einer Combobox angezeigt wird, stellen Sie sicher, dass das Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) auf dem Combobox-Element auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popup-`listbox`, `tree`, `grid` oder `dialog`-Elements gesetzt ist. Dies zeigt an, wie die Beziehung zwischen dem Element mit der Rolle `combobox` und dem Popup, das es steuert, gekennzeichnet ist. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, sodass Sie `aria-owns` in älteren Combobox-Implementierungen sehen könnten. Das `aria-owns` im Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Benutzeroberfläche der Combobox ein sichtbares Steuerelement enthält, wie zum Beispiel ein Symbol, das es ermöglicht, die Sichtbarkeit des Popups über Zeiger- und Berührungsereignisse zu steuern, sollte dieses Steuerelement ein {{HTMLElement('button')}}, {{HTMLElement('input')}} vom Typ `button` oder ein Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) mit einem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) von `-1` sein. Dies wird es ermöglichen, dass der Button fokussierbar, aber nicht in der Tab-Folge der Tastatur enthalten ist. Es darf nicht ein Nachfolger des Elements mit der Rolle `combobox` sein.

Um tastaturzugänglich zu sein, muss die Tastaturunterstützung für die Verschiebung des Fokus zwischen dem `combobox` Eingabefeld und den im Popup enthaltenen Elementen programmiert werden, wie `listbox`, `tree`, `grid` oder `dialog`. Eine gängige Konvention ist, dass die <kbd>Pfeil nach unten</kbd> Taste den Fokus vom Eingabefeld auf den ersten fokussierbaren Nachfolger des Popup-Elements verschiebt.

Die Eigenschaft [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) kann verwendet werden, um das derzeit aktive Element des Combobox-Popups zu identifizieren, zum Beispiel eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus beim Aufrufen des Popups nicht auf der Combobox bleibt, sondern stattdessen in das Popup verschoben wird, wie in einem Dialog, dann könnte `aria-activedescendant` nicht notwendig sein.

Wenn das Combobox-Element ein {{HTMLElement('input')}} Element ist, ist der Wert der Combobox der Wert des Eingabefeldes. Andernfalls stammt der Wert der Combobox von seinen Nachfolgeelementen.

Wenn die `combobox` Texteingaben unterstützt und Autovervollständigung bietet, setzen Sie `aria-autocomplete` auf dem Combobox-Element auf den Wert, der dem angebotenen Verhalten entspricht: `inline`, `list` oder `both`. Das Attribut `aria-autocomplete` zeigt an, dass die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Wertes der Combobox auslösen wird und spezifiziert, wie die Vorhersagen bei deren Anzeige präsentiert werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn Sie ein {{HTMLElement('input')}} Element verwenden, sollte der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Wenn nicht, und wenn ein entsprechendes Label im Inhalt sichtbar ist, geben Sie den Namen via [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das `combobox` Eingabefeld dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle `combobox` hinzu und setzen Sie den Wert des Attributs auf die `id` des oder der labelnden Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beides.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Erforderlich. Identifiziert, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Impliziert. Wenn weggelassen, Standardwert `listbox`. Unterstützt auch `tree`, `grid` oder `dialog`. Identifiziert, dass die Combobox ein Popup hat und gibt den Typ an.

### Tastaturinteraktionen

- <kbd>Pfeil nach unten</kbd>

  - : Verschiebt den Fokus zur nächsten Option oder zur ersten Option, wenn keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> (Optional)

  - : Wenn das Popup verfügbar, aber nicht angezeigt ist, wird das Popup angezeigt, ohne den Fokus zu verschieben.

- <kbd>Pfeil nach oben</kbd>

  - : Verschiebt den Fokus zur vorherigen Option. Verschiebt den Fokus zur ersten Option, wenn der Fokus ursprünglich auf der letzten Option lag.

- <kbd>Alt</kbd> + <kbd>Pfeil nach oben</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, kehrt er zum Combobox zurück, ansonsten schließt es das Popup.

- <kbd>Enter</kbd>
  - : Wenn die Combobox editierbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, nimmt den Vorschlag entweder an, indem der Eingabecursor am Ende des akzeptierten Wertes in der Combobox platziert wird oder indem eine Standardaktion für den Wert ausgeführt wird. Zum Beispiel kann die Standardaktion in einer Messaging-Anwendung sein, den akzeptierten Wert zu einer Liste von Nachrichtenempfängern hinzuzufügen und dann die Combobox zu leeren, sodass der Benutzer einen weiteren Empfänger hinzufügen kann.

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
- [ARIA Role Model – Combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [Zugängliches Combobox-Modul](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
