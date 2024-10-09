---
title: "ARIA: combobox Rolle"
slug: Web/Accessibility/ARIA/Roles/combobox_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Die `combobox` Rolle identifiziert ein Element als ein `input`, das ein anderes Element, wie eine `listbox` oder ein `grid`, steuert, das dynamisch aufpoppen kann, um dem Benutzer zu helfen, den Wert dieses `input` festzulegen.

## Beschreibung

Ein `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Der Zweck dieses Widgets ist es, die Benutzererfahrung zu verbessern, indem es dem Benutzer hilft, einen Wert auszuwählen, ohne den vollständigen Wert eingeben zu müssen, und optional, je nachdem, ob unterstützte Werte begrenzt sind, den Benutzer daran zu hindern, ungültige oder anderweitig nicht unterstützte Werte einzugeben.

Die `combobox` Rolle wird auf ein Eingabefeld gesetzt, das ein anderes Element steuert, wie eine Listbox oder ein Gitter, das dynamisch aufpoppen kann, um dem Benutzer zu helfen, den Wert des Eingabefeldes festzulegen.

Das `combobox` Eingabefeld kann entweder ein einzeiliges Textfeld sein, das Bearbeitung und Eingabe unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einer {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der Combobox anzeigt.

Eine WAI-ARIA-Combobox hat nur ein Attribut, das erforderlich ist und das Autoren angeben müssen: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded). Es gibt jedoch auch mehrere andere Attribute, die je nach Implementierung der Combobox angegeben werden müssen. Dazu gehören [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant), und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete).

Typischerweise ist der anfängliche Zustand einer Combobox eingeklappt, mit `aria-expanded="false"`. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein Schaltflächenklon zum Aufrufen des Popups sichtbar. Das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) mit dem Wert `false` ist erforderlich, wenn eingeklappt, da es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das seinen aktuellen Wert zeigt, als auch das zugehörige Popup-Element sichtbar sind. Wenn erweitert, muss `aria-expanded="true"` gesetzt werden.

Das mit einer `combobox` assoziierte Popup-Element kann entweder ein `listbox`, `tree`, `grid` oder `dialog` Element sein.

Comboboxes haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Wert von `listbox`, so dass das Hinzufügen dieses Attributs optional ist, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element ein `tree`, `grid` oder `dialog` (irgendetwas anderes als eine `listbox`) ist, ist das `aria-haspopup` Attribut erforderlich. Der Wert von `aria-haspopup` muss entweder die `tree`, `grid`, `dialog` oder `listbox` Rolle sein. Beachten Sie, dass für diese Eigenschaft `true` `menu` bedeutet, stellen Sie also sicher, dass der Wert der Rolle des Popups entspricht, nicht einem Booleschen Wert.

Wenn ein Popup einer Combobox angezeigt wird, stellen Sie sicher, dass das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) Attribut auf dem Combobox-Element auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Popup `listbox`, `tree`, `grid` oder `dialog` Elements gesetzt ist. Auf diese Weise wird die Beziehung zwischen dem Element mit der `combobox`-Rolle und dem Popup, das es steuert, angezeigt. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, sodass Sie `aria-owns` in älteren Combobox-Implementierungen sehen können. Das `aria-owns` im Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Combobox-UI eine sichtbare Steuerung, wie ein Symbol, beinhaltet, die es ermöglicht, die Sichtbarkeit des Popups über Zeiger- und Berührungsereignisse zu steuern, sollte diese Steuerung ein {{HTMLElement('button')}}, {{HTMLElement('input')}} vom Typ `button`, oder ein [`button`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) Rollen-Element mit einem [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) von `-1` sein. Dadurch kann die Schaltfläche fokussiert werden, aber nicht in der Tastatur-Tab-Sequenz enthalten sein. Es darf kein Nachfahre des Elements mit der Rolle `combobox` sein.

Um tastaturzugänglich zu sein, muss die Tastaturunterstützung für das Verschieben des Fokus zwischen dem `combobox` Eingabefeld und den im Popup enthaltenen Elementen `listbox`, `tree`, `grid` oder `dialog` programmiert werden. Ein gemeinsames Konvention ist, dass <kbd>Down Arrow</kbd> den Fokus vom Eingabefeld auf den ersten fokussierbaren Nachfolger des Popup-Elements verschiebt.

Die [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Eigenschaft kann verwendet werden, um das aktuell aktive Element des Combobox-Popups zu identifizieren, z. B. eine `option` innerhalb einer Popup-`listbox` für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus nicht auf der Combobox bleibt, wenn ihr Popup geöffnet wird, sondern sich der DOM-Fokus in das Popup bewegt, wie z.B. ein Dialog, dann ist `aria-activedescendant` möglicherweise nicht erforderlich.

Wenn das Combobox-Element ein {{HTMLElement('input')}} Element ist, ist der Wert der Combobox der Wert des Eingabefeldes. Andernfalls kommt der Wert der Combobox von seinen enthaltenen Elementen.

Wenn die `combobox` die Texteingabe unterstützt und ein Autovervollständigungsverhalten bietet, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) auf dem Combobox-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das `aria-autocomplete` Attribut gibt an, dass das Eingeben von Text eine oder mehrere Vorhersagen des beabsichtigten Wertes des Benutzers für die Combobox auslöst und spezifiziert, wie die Vorhersagen dargestellt werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn ein {{HTMLElement('input')}} Element verwendet wird, sollte der zugängliche Name vom zugeordneten {{HTMLElement('label')}} stammen. Wenn nicht, und ein entsprechendes Label im Inhalt vorhanden ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an. Mit anderen Worten, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das Combobox-Eingabefeld dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle `combobox` hinzu und setzen den Wert des Attributs auf die `id` des beschreibenden Elements oder der Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label). Aber nicht beides.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Erforderlich. Gibt an, ob die Combobox geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Impliziert. Wenn ausgelassen, standardmäßig `listbox`. Unterstützt auch `tree`, `grid`, oder `dialog`. Gibt an, dass die Combobox ein Popup hat, und gibt den Typ an.

### Tastaturinteraktionen

- <kbd>Down Arrow</kbd>

  - : Verschiebt den Fokus zur nächsten Option oder zur ersten Option, wenn keine ausgewählt wurde.

- <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> (Optional)

  - : Wenn das Popup verfügbar, aber nicht angezeigt ist, zeigt es das Popup an, ohne den Fokus zu verschieben.

- <kbd>Up Arrow</kbd>

  - : Verschiebt den Fokus zur vorherigen Option. Verschiebt den Fokus zur ersten Option, wenn der Fokus ursprünglich auf der letzten Option war.

- <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, kehrt der Fokus zur Combobox zurück, andernfalls schließt es das Popup.

- <kbd>Enter</kbd>
  - : Wenn die Combobox bearbeitbar ist und ein Autovervollständigungsvorschlag im Popup ausgewählt ist, wird der Vorschlag angenommen, indem entweder der Eingabecursor am Ende des akzeptierten Wertes in der Combobox platziert wird oder eine Standardaktion auf den Wert ausgeführt wird. Zum Beispiel könnte die Standardaktion in einer Messaging-Anwendung darin bestehen, den akzeptierten Wert zu einer Liste von Nachrichtenempfängern hinzuzufügen und dann die Combobox zu leeren, damit der Benutzer einen weiteren Empfänger hinzufügen kann.

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
