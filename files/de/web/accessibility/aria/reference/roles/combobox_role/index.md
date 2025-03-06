---
title: "ARIA: Rolle `combobox`"
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle `combobox` identifiziert ein Element als `input`, das ein anderes Element steuert, wie z.B. eine `listbox` oder ein `grid`, die dynamisch eingeblendet werden können, um dem Benutzer bei der Eingabe des Wertes zu helfen.

## Beschreibung

Ein `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Der Zweck dieses Widgets besteht darin, die Benutzererfahrung zu verbessern, indem dem Benutzer geholfen wird, einen Wert auszuwählen, ohne den vollständigen Wert eingeben zu müssen und optional, je nachdem, ob unterstützte Werte begrenzt sind, den Benutzer daran zu hindern, ungültige oder anderweitig nicht unterstützte Werte einzugeben.

Die Rolle `combobox` wird auf ein `input` gesetzt, das ein anderes Element steuert, wie z.B. eine `listbox` oder ein `grid`, das dynamisch eingeblendet werden kann, um dem Benutzer bei der Eingabe des Wertes zu helfen.

Das `combobox` Eingabefeld kann entweder ein einzeiliges Textfeld sein, das Bearbeitung und Eingabe unterstützt, ähnlich einem HTML {{HTMLElement('input')}} mit einem {{HTMLElement('datalist')}}, oder ein Element, das nur den aktuellen Wert der `combobox` anzeigt.

Eine WAI-ARIA `combobox` hat nur ein erforderlich anzugebendes Attribut: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Es gibt jedoch mehrere andere Attribute, die je nach Implementierung der `combobox` anzugeben sind. Diese umfassen [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

Typischerweise ist der anfängliche Zustand einer `combobox` eingeklappt, mit `aria-expanded="false"` gesetzt. Im eingeklappten Zustand sind nur das `combobox`-Element und optional ein benachbarter Button, um das Popup aufzurufen, sichtbar. Das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded), mit dem Wert `false`, ist erforderlich, wenn es eingeklappt ist, weil es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die `combobox` ist im erweiterten Zustand, wenn sowohl das `combobox`-Element, das seinen aktuellen Wert anzeigt, als auch sein zugehöriges Popup-Element sichtbar sind. Wenn erweitert, muss `aria-expanded="true"` gesetzt sein.

Das mit einer `combobox` assoziierte Popup-Element kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Element sein.

Comboboxen haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Wert von `listbox`, sodass das Hinzufügen dieses Attributs optional ist, wenn das Popup eine `listbox` ist. Wenn das `combobox`-Popup-Element ein `tree`, `grid` oder `dialog` (etwas anderes als eine `listbox`) ist, ist das Attribut `aria-haspopup` erforderlich. Der Wert von `aria-haspopup` muss entweder die `tree`, `grid`, `dialog` oder `listbox` Rolle sein. Beachten Sie, dass `true` für diese Eigenschaft `menu` bedeutet, stellen Sie also sicher, dass der Wert der Rolle des Popups entspricht und kein boolescher Wert ist.

Wenn das Popup einer `combobox` angezeigt wird, stellen Sie sicher, dass das Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) auf dem `combobox`-Element auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Popup-`listbox`, `tree`, `grid` oder `dialog`-Elements gesetzt ist. So wird die Beziehung zwischen dem Element mit der Rolle `combobox` und dem Popup, das es steuert, angegeben. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, daher kann in älteren `combobox`-Implementierungen `aria-owns` sichtbar sein. Das `aria-owns` im Code sollte zu `aria-controls` aktualisiert werden!)

Wenn die `combobox`-Benutzeroberfläche eine sichtbare Kontrolle, wie ein Symbol, umfasst, die es erlaubt, die Sichtbarkeit des Popups über Zeiger- und Berührungsereignisse zu steuern, sollte diese Kontrolle ein {{HTMLElement('button')}}, {{HTMLElement('input')}} vom Typ `button` oder ein [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) Rollenelement mit einem [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) von `-1` sein. Dadurch kann der Button zwar fokussierbar, aber nicht in die Tastaturtabulatorenfolge aufgenommen werden. Er darf kein Nachkomme des Elements mit der Rolle `combobox` sein.

Um über die Tastatur zugänglich zu sein, muss die Tastaturunterstützung für das Bewegen des Fokus zwischen dem `combobox`-Eingabefeldelement und den im Popup enthaltenen Elementen wie `listbox`, `tree`, `grid` oder `dialog` programmiert werden. Eine übliche Konvention ist, dass die Taste <kbd>Pfeil nach unten</kbd> den Fokus vom Eingabefeld auf den ersten fokussierbaren Nachkommen des Popup-Elements verschiebt.

Die Eigenschaft [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) kann verwendet werden, um das aktuell aktive Element des `combobox`-Popups zu identifizieren, z.B. eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der `combobox` bleibt. Wenn der DOM-Fokus nicht auf der `combobox` bleibt, wenn ihr Popup aufgerufen wird, sondern der DOM-Fokus in das Popup verschoben wird, wie beispielsweise ein Dialog, dann ist `aria-activedescendant` möglicherweise nicht notwendig.

Wenn das `combobox`-Element ein {{HTMLElement('input')}}-Element ist, ist der Wert der `combobox` der Wert des Eingabefeldes. Andernfalls kommt der Wert der `combobox` von ihren Nachkommenelementen.

Wenn die `combobox` Texteingaben unterstützt und ein Autovervollständigungsverhalten bietet, setzen Sie [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) auf dem `combobox`-Element auf den Wert, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das `aria-autocomplete` Attribut zeigt an, dass die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Werts des Benutzers für die `combobox` auslösen wird und gibt an, wie die Vorhersagen angezeigt werden, wenn sie gemacht werden.

Jede `combobox` muss einen zugänglichen Namen haben. Wenn ein {{HTMLElement('input')}}-Element verwendet wird, sollte der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Wenn nicht, und ein entsprechendes Label im Inhalt sichtbar ist, geben Sie den Namen über [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an. Das heißt, wenn es ein Element in der Benutzeroberfläche gibt, das als Label für das `combobox`-Eingabefeld dient, fügen Sie `aria-labelledby` als Attribut auf dem Element mit der Rolle `combobox` hinzu und setzen Sie den Wert des Attributs auf die `id` des beschriftenden Elements oder der Elemente. Wenn kein sichtbares Label vorhanden ist, verwenden Sie stattdessen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). Nicht beide.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Erforderlich. Gibt an, ob die `combobox` geöffnet (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Impliziert. Wenn weggelassen, standardmäßig `listbox`. Unterstützt auch `tree`, `grid` oder `dialog`. Gibt an, dass die `combobox` ein Popup hat, und gibt den Typ an.

### Tastaturinteraktionen

- <kbd>Pfeil nach unten</kbd>

  - : Verschiebt den Fokus auf die nächste Option oder auf die erste Option, wenn keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Pfeil nach unten</kbd> (Optional)

  - : Wenn das Popup verfügbar, aber nicht angezeigt ist, wird das Popup angezeigt, ohne den Fokus zu verschieben.

- <kbd>Pfeil nach oben</kbd>

  - : Verschiebt den Fokus auf die vorherige Option. Verschiebt den Fokus auf die erste Option, wenn der Fokus ursprünglich auf der letzten Option lag.

- <kbd>Alt</kbd> + <kbd>Pfeil nach oben</kbd> (Optional)

  - : Wenn das Popup den Fokus hat, wird dieser zur `combobox` zurückgesetzt, ansonsten wird das Popup geschlossen.

- <kbd>Eingabe</kbd>
  - : Wenn die `combobox` bearbeitbar ist und im Popup eine Autovervollständigungsvorschlag ausgewählt ist, wird der Vorschlag akzeptiert, indem entweder der Eingabecursor am Ende des akzeptierten Werts in der `combobox` platziert wird, oder indem eine Standardaktion auf dem Wert ausgeführt wird. Zum Beispiel könnte in einer Messaging-Anwendung die Standardaktion darin bestehen, den akzeptierten Wert zur Liste der Nachrichtenempfänger hinzuzufügen und dann die `combobox` zu leeren, damit der Benutzer einen weiteren Empfänger hinzufügen kann.

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
- [ARIA Rollenmodell – Combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [Barrierefreies Combobox-Modul](https://dequelabs.github.io/combobo/demo/) Beispiele von Deque
