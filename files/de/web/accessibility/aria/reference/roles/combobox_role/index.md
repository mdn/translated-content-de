---
title: "ARIA: Rolle combobox"
short-title: combobox
slug: Web/Accessibility/ARIA/Reference/Roles/combobox_role
l10n:
  sourceCommit: d86426e69aaed1dbf19f09d92d78d1d320737733
---

Die Rolle `combobox` identifiziert ein Element entweder als `input` oder als `button`, das ein anderes Element, wie eine `listbox` oder ein `grid`, steuert, das dynamisch angezeigt werden kann, um dem Benutzer bei der Wertauswahl zu helfen. Ein `combobox` kann entweder editierbar sein (ermöglicht die Texteingabe) oder nur zur Auswahl (nur Auswahl aus dem Popup erlaubt).

## Beschreibung

Ein `combobox` ist ein zusammengesetztes Widget, das ein benanntes Eingabefeld mit einem Popup kombiniert, das mögliche Werte für dieses Eingabefeld bereitstellt. Der Zweck dieses Widgets ist es, die Benutzererfahrung zu verbessern, indem es dem Benutzer hilft, einen Wert auszuwählen, ohne den kompletten Wert eingeben zu müssen, und optional, je nachdem, ob unterstützte Werte begrenzt sind, den Benutzer daran zu hindern, ungültige oder nicht unterstützte Werte einzugeben.

Die Rolle `combobox` kann entweder auf ein Eingabeelement für editierbare Comboboxen oder auf ein Buttonelement für reines Auswahl-Combobox-Element gesetzt werden. Dieses Element steuert ein anderes Element, wie eine Liste oder ein Raster, das dynamisch angezeigt werden kann, um dem Benutzer bei der Wertauswahl zu helfen.

Das Element mit der Rolle `combobox` kann entweder ein editierbares einzeiliges Texteingabefeld sein (mit einem {{HTMLElement('input')}}-Element, ähnlich einem mit einem {{HTMLElement('datalist')}}), oder ein reines Auswahl-Element (mit einem `button`-Element), das nur den aktuellen Wert anzeigt, ohne direkte Texteingabe zuzulassen.

Eine WAI-ARIA-Combobox benötigt nur ein Attribut: [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded). Allerdings sind je nach Implementierung typischerweise mehrere andere Attribute notwendig: [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup), [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) und [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete).

Typischerweise ist der anfängliche Zustand einer Combobox eingeklappt, wobei `aria-expanded="false"` gesetzt ist. Im eingeklappten Zustand sind nur das Combobox-Element und optional ein benachbarter Button zur Aufrufen des Popups sichtbar. Das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) mit dem Wert `false` ist erforderlich, wenn es eingeklappt ist, da es assistiven Technologien anzeigt, dass das Widget erweiterbar ist.

Die Combobox befindet sich im erweiterten Zustand, wenn sowohl das Combobox-Element, das seinen aktuellen Wert anzeigt, als auch sein zugehöriges Popup-Element sichtbar sind. Wenn es erweitert ist, muss `aria-expanded="true"` gesetzt sein.

Das Popup-Element, das mit einer `combobox` verknüpft ist, kann entweder ein [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), [`grid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) oder [`dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) Element sein.

Comboboxen haben einen impliziten [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Wert von `listbox`, daher ist das Hinzufügen dieses Attributs optional, wenn das Popup eine `listbox` ist. Wenn das Combobox-Popup-Element ein `tree`, `grid` oder `dialog` (etwas anderes als eine `listbox`) ist, ist das `aria-haspopup` Attribut erforderlich. Der Wert von `aria-haspopup` muss entweder die Rolle `tree`, `grid`, `dialog` oder `listbox` sein. Bitte beachten Sie, dass für diese Eigenschaft `true` `menu` bedeutet, stellen Sie also sicher, dass der Wert der Rolle des Popups entspricht, nicht einem booleschen Wert.

Wenn ein Combobox-Popup angezeigt wird, stellen Sie sicher, dass das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut auf dem Combobox-Element auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popup-`listbox`, `tree`, `grid` oder `dialog`-Elements gesetzt ist. Auf diese Weise wird die Beziehung zwischen dem Element mit der Rolle `combobox` und dem Popup, das es steuert, angezeigt. (Hinweis: In älteren ARIA-Spezifikationen war dies `aria-owns` anstelle von `aria-controls`, sodass Sie möglicherweise noch `aria-owns` in älteren Combobox-Implementierungen sehen. Das `aria-owns` im Code sollte auf `aria-controls` aktualisiert werden!)

Wenn die Combobox-UI ein sichtbares Steuerelement einschließt, wie ein Symbol, das die Sichtbarkeit des Popups über Zeiger- und Berührungseingaben steuern lässt, sollte dieses Steuerelement ein {{HTMLElement('button')}}, {{HTMLElement('input')}} vom Typ `button` oder ein Element mit der Rolle [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) mit einem [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) von `-1` sein. Auf diese Weise wird der Button fokussierbar, aber nicht in die Tastaturtab-Reihenfolge eingeschlossen. Es darf kein Nachfahre des Elements mit der Rolle `combobox` sein.

Um tastaturzugänglich zu sein, muss die Tastaturunterstützung für das Bewegen des Fokus zwischen dem `combobox`-Element und den in dem Popup `listbox`, `tree`, `grid` oder `dialog` enthaltenen Elementen programmiert werden. Eine verbreitete Konvention ist, dass <kbd>Abwärtspfeil</kbd> den Fokus vom Eingabefeld auf den ersten fokussierbaren Nachfahren des Popup-Elements verschiebt.

Die Eigenschaft [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) kann verwendet werden, um das derzeit aktive Element des Combobox-Popups zu identifizieren, zum Beispiel eine `option` innerhalb einer Popup-`listbox`, für Implementierungen, bei denen der DOM-Fokus auf der Combobox bleibt. Wenn der DOM-Fokus nicht auf der Combobox bleibt, wenn ihr Popup aufgerufen wird, sondern in das Popup wechselt, wie ein Dialog, kann `aria-activedescendant` nicht notwendig sein.

Wenn die Combobox als editierbares {{HTMLElement('input')}}-Element implementiert ist, ist der Wert der Combobox der Wert der Eingabe. Für reine Auswahl-Comboboxen, die mit einem `button`-Element implementiert sind, stammt der Wert von der ausgewählten Option im Popup.

Das Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) ist nur für editierbare Comboboxen anwendbar, die die Texteingabe unterstützen. Bei diesen Comboboxen stellen Sie das Attribut auf einen Wert ein, der dem bereitgestellten Verhalten entspricht: `inline`, `list` oder `both`. Das Attribut gibt an, dass das Eingeben von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Werts des Benutzers auslöst und spezifiziert, wie diese Vorhersagen präsentiert werden. Für reine Auswahl-Comboboxen, die ein `button`-Element verwenden, sollte `aria-autocomplete` nicht verwendet werden, da keine Texteingabe möglich ist.

Jede `combobox` muss einen zugänglichen Namen haben, der auf eine von drei Arten bereitgestellt werden kann:

1. Für ein {{HTMLElement('input')}}-Element verwenden Sie ein zugehöriges {{HTMLElement('label')}}.
2. Wenn ein sichtbares Label in der Benutzeroberfläche existiert, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), das sich auf die `id` des Label-Elements bezieht.
3. Wenn kein sichtbares Label vorhanden ist, verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

> [!NOTE]
> Verwenden Sie nur eine dieser Methoden; kombinieren Sie sie nicht.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Erforderlich. Identifiziert, ob die Combobox offen (`true`) oder geschlossen (`false`) ist.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Impliziert. Wenn weggelassen, wird es als `listbox` angenommen. Unterstützt auch `tree`, `grid` oder `dialog`. Identifiziert, dass die Combobox ein Popup hat, und zeigt den Typ an.

### Tastatur-Interaktionen

- <kbd>Abwärtspfeil</kbd>
  - : Öffnet das Popup, wenn es geschlossen ist, und verschiebt den Fokus zur nächsten Option oder zur ersten Option, falls keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Abwärtspfeil</kbd> (Optional)
  - : Wenn das Popup verfügbar, aber nicht angezeigt ist, zeigt es das Popup an, ohne den Fokus zu bewegen.

- <kbd>Aufwärtspfeil</kbd>
  - : Öffnet das Popup, wenn es geschlossen ist, und verschiebt den Fokus zur vorherigen Option oder zur letzten Option, falls keine ausgewählt war.

- <kbd>Alt</kbd> + <kbd>Aufwärtspfeil</kbd> (Optional)
  - : Wenn das Popup den Fokus hat, gibt es den Fokus an die Combobox zurück, andernfalls schließt es das Popup.

- <kbd>Escape</kbd>
  - : Schließt das Popup, wenn es geöffnet ist. Wenn das Popup bereits geschlossen ist, löscht es den Wert der editierbaren Comboboxen.

#### Tastatur-Interaktionen bei editierbaren Comboboxen

- <kbd>Eingabetaste</kbd>
  - : Wenn ein Autovervollständigungsvorschlag im Popup ausgewählt ist, akzeptiert es den Vorschlag, indem es den Combobox-Wert aktualisiert und den Eingabecursor ans Ende setzt.
    Kann auch eine Standardaktion auslösen (z. B. in einer Messaging-Anwendung den akzeptierten Wert zu einer Liste von Empfängern hinzufügen).

- <kbd>Tabulator</kbd>
  - : Akzeptiert den aktuellen Wert und verschiebt den Fokus auf das nächste fokussierbare Element.

#### Tastatur-Interaktionen bei reinen Auswahl-Comboboxen

- <kbd>Eingabetaste</kbd> oder <kbd>Leertaste</kbd>
  - : Wenn das Popup geschlossen ist, öffnet es das Popup. Wenn das Popup geöffnet ist und eine Option ausgewählt ist, akzeptiert es die ausgewählte Option als Combobox-Wert und schließt das Popup.

- <kbd>Tabulator</kbd>
  - : Akzeptiert die aktuelle Auswahl und verschiebt den Fokus auf das nächste fokussierbare Element.

- <kbd>Pos1</kbd> oder <kbd>Ende</kbd>
  - : Wenn das Popup geöffnet ist, verschiebt es den Fokus zur ersten bzw. letzten Option.

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

- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('select')}}-Element
- HTML {{HTMLElement('option')}}-Element
- HTML {{HTMLElement('input')}}-Element
- [ARIA: `listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [ARIA: `option` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [ARIA: `list` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [ARIA: `listitem` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [ARIA Best Practices – Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Beispiele für ein zugängliches Combobox-Modul](https://dequelabs.github.io/combobo/demo/) von Deque
