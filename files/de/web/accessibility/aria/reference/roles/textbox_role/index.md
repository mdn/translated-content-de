---
title: "ARIA: textbox role"
short-title: textbox
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: fd2acb039cc1caee4af10f76ffb839c8da7da5b8
---

Die `textbox` Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freiformtext ermöglicht. Wann immer möglich, verwenden Sie anstelle dieser Rolle ein {{HTMLElement("input")}} Element mit [type="text"](/de/docs/Web/HTML/Reference/Elements/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}} Element für mehrzeilige Eingaben.

## Beschreibung

Wenn ein Element die `textbox` Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular absendet; in diesem Fall ist es wünschenswert, ein HTML-{{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML-{{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Hinzufügen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten editierbar ist.

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

Semantische Elemente sind prägnanter und benötigen kein JavaScript, um Textbox-Funktionen zu unterstützen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, geben Sie dies an, indem Sie `aria-readonly="true"` auf das Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
  - : Nimmt als Wert die ID eines Nachkommen des Elements mit DOM-Fokus oder eines logischen Nachkommen, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut angegeben, wird angezeigt, wenn das Element in einer zusammengesetzten Oberfläche wie einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) den Fokus hat. Zum Beispiel kann in einer Combobox der Fokus auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf das Element verweist, das ein Nachkomme einer Popup-Listbox ist, die von der Textbox verwaltet wird. Dieses Attribut muss programmatisch aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut
  - : Gibt an, ob und wie die Benutzereingabe in das Feld die Anzeige einer Vorhersage des beabsichtigten Wertes auslösen könnte. Es unterstützt folgende Werte:
    - `inline`: Vorhergesagter Text wird nach dem Kursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der Text, der zum Vervollständigen eines Wertes benötigt wird, nach dem Kursor eingefügt wird.
    - `none` (Standard): Es wird kein vorhergesagter Text angeboten.

    Wenn `list` oder `both` festgelegt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) ebenfalls eingeschlossen werden. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Darüber hinaus hat entweder die Textbox oder ein enthaltendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut
  - : Wenn `aria-multiline="true"` gesetzt ist, teilt das AT dem Benutzer mit, dass die Textbox mehrzeilige Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzusenden. ARIA ändert nicht das Verhalten des Elements; diese Funktion muss vom Entwickler gesteuert werden. Wenn false gesetzt ist oder das Attribut weggelassen wird und standardmäßig false ist, erwartet der Benutzer, dass die Steuerung eine einzeilige Textbox ist und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular absendet.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut
  - : Repräsentiert einen Hinweis (Wort oder Phrase) für den Benutzer darüber, was in das Textfeld eingeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, permanent, zeigt an, welche Art von Information erwartet wird, und erhöht die Trefferfläche zum Setzen des Fokus auf die Steuerung, während Platzhaltertext nur ein temporärer Hinweis über den erwarteten Wert ist, der, wenn er falsch implementiert wird, die Barrierefreiheit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung eine leere Zeichenkette ist, wie wenn die Steuerung zuerst den Fokus erhält und wenn Benutzer einen vorher eingegebenen Wert entfernen. Anstatt `aria-placeholder` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder` Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Anstatt `aria-readonly` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly` Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut
  - : Gibt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es abgesendet wird. Anstatt `aria-required` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required` Attribut.

### Tastaturinteraktionen

Bei einzeiliger Verwendung (wenn `aria-multiline` auf `false` gesetzt ist oder nicht verwendet wird), sendet die Return- oder Enter-Taste das Formular ab. Bei der mehrzeiligen Verwendung (wenn `aria-multiline` auf `true` gesetzt ist) fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle Funktionen, die mit allen Eigenschaften und Zuständen verbunden sind, müssen aufrechterhalten werden, und die Formularabsendung bei Drücken von Enter oder Return auf einer einzeiligen Textbox muss behandelt werden.

- Fokus-Ereignishandler und aria-activedescendant-Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, wie eine Combobox, die aus einer Textbox und einer Listbox besteht, müssen Sie das `aria-activedescendant` Attribut mit einem Handler verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die von Ihnen angestrebten Browser es derzeit unterstützen. Siehe die [Spezifikation von aria-descendant](https://w3c.github.io/aria/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit `type="text"` oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA-Textbox-Rolle zu verwenden. Wenn Sie eines der semantischen Elemente verwenden, ist die ARIA-Textbox-Rolle nicht notwendig. Siehe [Notizen zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `textbox` Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als mit einer textbox Rolle haben kennzeichnen.
- Ein zugängliches Textbox-Ereignis unter Verwendung der Zugänglichkeits-API des Betriebssystems auslösen, falls es diese unterstützt.

Produkte unterstützender Technologien sollten auf ein solches Ereignis achten und den Benutzer entsprechend benachrichtigen:

- Screen Reader sollten sein Label und seine Rolle ankündigen, wenn der Fokus zuerst auf einer Textbox landet. Wenn sie auch Inhalte enthält, sollte dies wie bei einer regulären Textbox angekündigt werden.
- Bildschirmvergrößerer könnten die Textbox vergrößern.

> [!NOTE]
> Meinungen darüber, wie unterstützende Technologien mit dieser Technik umgehen sollten, können unterschiedlich sein. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erfahren werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingabe

Das untenstehende Snippet zeigt, wie die textbox Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingabe

Das untenstehende Snippet zeigt, wie die textbox Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

Stellen Sie sicher, dass Sie das `contenteditable="true"` Attribut dem HTML-Element hinzufügen, dem diese Rolle zugewiesen wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
