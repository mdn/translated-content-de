---
title: "ARIA: Rolle `textbox`"
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die Rolle `textbox` wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext ermöglicht. Wann immer möglich, sollte anstelle dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Element/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben verwendet werden.

## Beschreibung

Wenn ein Element die Rolle `textbox` hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Die Standardeinstellung ist eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular abschickt; in diesem Fall ist es vorzuziehen, ein HTML {{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML {{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Die Einbindung des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

```html
<!-- Text input field -->
<div id="txtboxLabel">Enter your five-digit zip code</div>
<div
  role="textbox"
  contenteditable="true"
  aria-placeholder="5-digit zip code"
  aria-labelledby="txtboxLabel"></div>

<!-- Multi-line text area -->
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div
  role="textbox"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

Semantische Elemente sind präziser und erfordern kein JavaScript, um Textbox-Funktionen zu unterstützen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld nur lesbar ist, wird dies angezeigt, indem `aria-readonly="true"` auf das Element gesetzt wird.

### Zugehörige ARIA-Eigenschaften

- Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Nimmt einen Wert an, der die ID eines Nachkommen des Elements mit DOM-Fokus oder einen logischen Nachkommen darstellt, wie durch das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) angezeigt. Es zeigt an, wann dieses Element den Fokus hat, wenn es Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist. Beispielsweise kann in einer Combobox der Fokus auf der Textbox verbleiben, während der Wert von `aria-activedescendant` auf dem Textbox-Element auf einen Nachkommen einer Popup-Liste verweist, die von der Textbox gesteuert wird. Dieses Attribut muss programmgesteuert aktualisiert werden, wenn sich der Fokus ändert.
- Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)

  - : Zeigt an, ob und wie die Benutzereingabe in das Feld die Anzeige einer Vorhersage des beabsichtigten Wertes auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird sowohl als Sammlung von Werten präsentiert, als auch der Text, der benötigt wird, um einen Wert zu vervollständigen, wird nach dem Cursor eingefügt.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` gesetzt ist, sollten auch die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein umschließendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der mit der Rolle des Elements übereinstimmt, das die Liste der vorgeschlagenen Werte enthält.

- Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert das AT den Benutzer, dass die Textbox Mehrzeilen-Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzuschicken. ARIA ändert das Verhalten des Elements nicht; vielmehr muss diese Funktion vom Entwickler gesteuert werden. Wenn `false` gesetzt ist oder das Attribut weggelassen wird und standardmäßig `false` ist, wird erwartet, dass es sich um eine einzeilige Textbox handelt, und <kbd>Enter</kbd> oder <kbd>Return</kbd> sendet das Formular ab.

- Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
  - : Stellt einen Hinweis (Wort oder Phrase) für den Benutzer dar, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: ein Label ist fokussierbar, permanent, gibt an, welche Art von Informationen erwartet wird, und erhöht die Trefferfläche, um den Fokus auf das Steuerelement zu setzen, während der Platzhaltertext nur ein temporärer Hinweis auf den erwarteten Wert ist, der, wenn er falsch implementiert wird, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert des Steuerelements der leere String ist, z. B. wenn das Steuerelement erstmals den Fokus erhält oder wenn Benutzer einen früher eingegebenen Wert entfernen. Anstelle von `aria-placeholder` sollte das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut verwendet werden.
- Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Zeigt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Anstelle von `aria-readonly` sollte `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut verwendet werden.
- Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Zeigt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es übermittelt wird. Anstelle von `aria-required` sollte `<input type="text">` oder `<textarea>` mit einem `required`-Attribut verwendet werden.

### Tastatur-Interaktionen

Bei der Nutzung mit einer Zeile (wenn `aria-multiline` `false` ist oder nicht verwendet wird), sendet die Eingabetaste (Return oder Enter) das Formular ab. Bei der Nutzung als Mehrzeilenfeld (wenn `aria-multiline` `true` ist), fügt die Eingabetaste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit beliebigen Eigenschaften und Zuständen verbundenen Funktionen müssen aufrechterhalten werden, und die Formularübermittlung bei Eingabe oder Rücksendung in einer einzeiligen Textbox muss gehandhabt werden.

- Fokusereignis-Handler und Attribut `aria-activedescendant`
  - : Wenn Sie ein zusammengesetztes Widget wie eine Combobox aus einer Textbox und einer Listbox implementieren, müssen Sie das Attribut `aria-activedescendant` mit einem Handler verwalten. Stellen Sie vor der Verwendung dieser Technik sicher, dass die von Ihnen angezielten Browser diese derzeit unterstützen. Weitere Informationen finden Sie in der [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant).

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit type="text" oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA-Rolle `textbox` zu verwenden. Bei der Verwendung eines der beiden semantischen Elemente ist die Rolle der ARIA-Textbox nicht notwendig. Siehe [Anmerkungen zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und assistive Technologien

Wenn die Rolle `textbox` zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element als mit einer Textbox-Rolle versehen im Barrierefreiheits-API des Betriebssystems darstellen.
- Ein zugängliches Textbox-Ereignis mit dem Barrierefreiheits-API des Betriebssystems auslösen, wenn es dieses unterstützt.

Produkte für assistive Technologien sollten ein solches Ereignis erfassen und den Benutzer entsprechend benachrichtigen:

- Bildschirmleser sollten ihr Label und ihre Rolle ankündigen, wenn der Fokus erstmals auf einer Textbox liegt. Wenn sie auch Inhalte enthält, sollte dies wie bei einer normalen Textbox angekündigt werden.
- Bildschirmvergrößerer können die Textbox vergrößern.

> [!NOTE]
> Meinungen darüber, wie assistive Technologien mit dieser Technik umgehen sollten, können variieren. Die oben bereitgestellten Informationen stellen eine dieser Meinungen dar und können unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingabe

Das folgende Snippet zeigt, wie die Rolle `textbox` direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingabe

Das folgende Snippet zeigt, wie die Rolle `textbox` direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Best Practices

Stellen Sie sicher, dass Sie das Attribut `contenteditable="true"` zum HTML-Element hinzufügen, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: Rolle search](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
