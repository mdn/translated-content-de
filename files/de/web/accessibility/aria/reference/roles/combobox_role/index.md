---
title: "ARIA: combobox Rolle"
short-title: combobox
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die Rolle `combobox` identifiziert ein Element als ein `input`, das ein anderes Element, wie z. B. ein `listbox` oder `grid`, steuert, das bei Bedarf dynamisch aufpoppen kann, um dem Benutzer zu helfen, den Wert dieses `input` festzulegen.

## Beschreibung

Ein `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Ziel dieses Widgets ist es, die Benutzerfreundlichkeit zu verbessern, indem es dem Benutzer hilft, einen Wert auszuwählen, ohne den vollständigen Wert eingeben zu müssen, und, abhängig davon, ob die unterstützten Werte begrenzt sind, den Benutzer daran hindert, ungültige oder sonst nicht unterstützte Werte einzugeben.

Die Rolle `combobox` wird auf ein Eingabefeld gesetzt, das ein anderes Element, wie z. B. ein `listbox` oder `grid`, steuert, welches dynamisch aufpoppen kann, um dem Benutzer zu helfen, den Wert des Eingabefeldes festzulegen.

Das `combobox` Eingabefeld kann entweder ein einzeiliges Textfeld sein, das Bearbeitung und Eingabe unterstützt, ähnlich wie ein HTML {{HTMLElement('input')}} mit einer {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der Combobox anzeigt.

Eine WAI-ARIA Combobox hat nur ein Attribut, das von Autoren zwingend anzugeben ist: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Es gibt jedoch mehrere andere Attribute, die je nach Implementierung der Combobox erforderlich sein können. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

In der Regel ist der anfängliche Zustand einer Combobox zusammengeklappt, wobei `aria-expanded="false"` gesetzt ist. Im zusammengeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Button zum Aufrufen des Popups sichtbar. Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) muss mit dem Wert `false` gesetzt sein, wenn die Combobox zusammengeklappt ist, da es unterstützenden Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das den aktuellen Wert anzeigt, als auch das zugehörige Popup-Element sichtbar sind. Wenn sie erweitert ist, muss `aria-expanded="true"` gesetzt sein.

Das Popup-Element, das mit einer `combobox` verbunden ist, kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Element sein.

Comboboxen haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Wert von `listbox`, daher ist das Einschließen dieses Attributs optional, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element ein `tree`, `grid`, oder `dialog` (etwas anderes als eine `listbox`) ist, ist das Attribut `aria-haspopup` erforderlich. Der Wert von `aria-haspopup` muss entweder die Rolle `tree`, `grid`, `dialog` oder `listbox` sein. Beachten Sie, dass für diese Eigenschaft `true` `menu` bedeutet, also stellen Sie sicher, dass der Wert der Rolle des Popups entspricht und kein boolescher Wert ist.

Wenn das Combobox-Popup angezeigt wird, stellen Sie sicher, dass das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut am Combobox-Element auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popup-`listbox`, `tree`, `grid` oder `dialog`-Elements gesetzt ist. Dies ist, wie die Beziehung zwischen dem Element mit der `combobox` Rolle und dem Popup, das es steuert, angezeigt wird. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, daher können Sie `aria-owns` in älteren Combobox-Implementierungen sehen. Das `aria-owns` im Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Combobox-Benutzeroberfläche eine sichtbare Steuerung, wie ein Icon, enthält, die die Sichtbarkeit des Popups über Zeiger- und Berührungsereignisse steuert, sollte diese Steuerung ein {{HTMLElement('button')}} sein, ein {{HTMLElement('input')}} vom Typ `button` oder ein mit einer [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) von `-1` rolliertes [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) Element. Dadurch wird der Button fokussierbar, aber nicht in die Tastatur-Tab-Sequenz aufgenommen. Sie darf kein Nachfahre des Elements mit der Rolle `combobox` sein.

Um über die Tastatur zugänglich zu sein, muss die Tastaturunterstützung für das Verschieben des Fokus zwischen dem `combobox` Eingabefeld und den im Popup `listbox`, `tree`, `grid` oder `dialog` enthaltenen Elementen programmiert werden. Eine gängige Konvention ist, dass die Taste <kbd>Pfeil nach unten</kbd> den Fokus vom Eingabefeld auf das erste fokussierbare Nachkommenelement des Popup-Elements verschiebt.

Die Eigenschaft [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) kann verwendet werden, um das aktuell aktive Element des Combobox-Popups zu identifizieren, zum Beispiel eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus nicht auf der Combobox bleibt, wenn ihr Popup aufgerufen wird, sondern eher in das Popup, wie z. B. ein Dialog, wechselt, dann ist `aria-activedescendant` möglicherweise nicht erforderlich.

Wenn das Combobox-Element ein {{HTMLElement('input')}} Element ist, ist der Wert der Combobox der Wert des Eingabefelds. Andernfalls stammt der Wert der Combobox von ihren Nachkommenelementen.

Wenn die `combobox` Texteingaben unterstützt und Autovervollständigungsfunktionen bietet, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) am Kombobox-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das Attribut `aria-autocomplete` zeigt an, dass die Eingabe von Text eine oder mehrere Vorhersagen des beabsichtigten Werts des Benutzers für die Combobox auslösen wird und gibt an, wie die Vorhersagen angezeigt werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn Sie ein {{HTMLElement('input')}}-Element verwenden, sollte der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Wenn nicht, und ein geeigneter Name im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Bezeichnung für das `combobox`-Eingabefeld dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle von `combobox` hinzu und setzen Sie den Wert des Attributs auf die `id` des/der bezeichnenden Element(e). Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beides.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Erforderlich. Gibt an, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Impliziert. Wenn weggelassen, ist der Standardwert `listbox`. Unterstützt außerdem `tree`, `grid` oder `dialog`. Identifiziert, dass die Combobox ein Popout hat und den Typ angibt.

### Tastaturinteraktionen

- <kbd>Pfeil nach unten</kbd>

  - : Verschiebt den Fokus zur nächsten Option, oder zur ersten Option, wenn keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> (Optional)

  - : Wenn das Popup verfügbar ist, aber nicht angezeigt wird, wird das Popup angezeigt, ohne den Fokus zu verschieben.

- <kbd>Pfeil nach oben</kbd>

  - : Verschiebt den Fokus zur vorherigen Option. Der Fokus wird auf die erste Option verschoben, wenn der Fokus ursprünglich auf der letzten Option war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach oben</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, gibt es den Fokus an die Combobox zurück, andernfalls schließt es das Popup.

- <kbd>Enter</kbd>
  - : Wenn die Combobox bearbeitbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, wird der Vorschlag entweder akzeptiert, indem der Eingabecursor am Ende des akzeptierten Wertes in der Combobox positioniert wird, oder indem eine Standardaktion für den Wert ausgeführt wird. Zum Beispiel kann in einer Messaging-Anwendung die Standardaktion sein, den akzeptierten Wert zu einer Liste von Nachrichtenempfängern hinzuzufügen und dann die Combobox zu leeren, damit der Benutzer einen weiteren Empfänger hinzufügen kann.

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
- [Barrierefreies Combobox-Modul](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
