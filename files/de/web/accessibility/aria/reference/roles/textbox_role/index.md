---
title: "ARIA: textbox-Rolle"
short-title: textbox
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `textbox`-Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext ermöglicht. Wann immer möglich, sollten Sie anstelle dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Reference/Elements/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben verwenden.

## Beschreibung

Wenn ein Element die `textbox`-Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular abschickt; in diesem Fall ist es vorzuziehen, ein HTML-{{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML-{{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Hinzufügen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

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

Semantische Elemente sind prägnanter und erfordern kein JavaScript zur Unterstützung der Textbox-Funktionen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wo ein Textfeld schreibgeschützt ist, wird dies durch Setzen von `aria-readonly="true"` am Element angezeigt.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
  - : Indem als Wert die ID eines Nachfahren des Elements mit DOM-Fokus oder eines logischen Nachfahren, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut angegeben, genommen wird, zeigt es an, wenn das Element fokussiert ist, wenn es Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist. Zum Beispiel kann der Fokus bei einer Combobox auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf ein Nachfahre einer Popup-Liste verweist, die von der Textbox kontrolliert wird. Dieses Attribut muss programmgesteuert aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut

  - : Gibt an, ob und wie die Eingabe des Benutzers in das Feld eine Vorhersage des gewünschten Wertes anzeigen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Eingabemarker eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der Text, der benötigt wird, um einen Wert abzuschließen, nach dem Eingabemarker eingefügt wird.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` gesetzt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) ebenfalls eingeschlossen werden. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein umschließendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert das AT den Benutzer, dass die Textbox mehrzeilige Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzusenden. ARIA ändert nicht das Verhalten des Elements; stattdessen muss diese Funktion vom Entwickler gesteuert werden. Wenn `false` gesetzt ist oder das Attribut ausgelassen wird und standardmäßig `false` ist, wird erwartet, dass die Kontrolle eine einzeilige Textbox ist, und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular absendet.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut
  - : Stellt einen Hinweis (Wort oder Phrase) für den Benutzer dar, was in das Textfeld einzugeben ist. Der Hinweis sollte ein Beispielsandu ein kurzes Format der erwarteten Eingabe sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, dauerhaft, zeigt an, welche Art von Informationen erwartet wird, und vergrößert die Trefferfläche zum Setzen des Fokus auf die Steuerung, während der Platzhaltertext nur ein temporärer Hinweis auf den erwarteten Wert ist, der bei falscher Implementierung die Barrierefreiheit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert des Elements die leere Zeichenkette ist, also wenn das Element zum ersten Mal den Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Anstelle von `aria-placeholder` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Anstelle von `aria-readonly` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut
  - : Gibt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es abgesendet wird. Anstelle von `aria-required` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required`-Attribut.

### Tastaturinteraktionen

In einer einzeiligen Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird), schickt die Return- oder Enter-Taste das Formular ab. In einer mehrzeiligen Verwendung (wenn `aria-multiline` `true` ist), fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle Funktionen, die mit allen Eigenschaften und Zuständen verbunden sind, müssen aufrechterhalten werden, und die Formularübermittlung bei Betätigung der Eingabetaste oder Rücktaste in einer einzeiligen Textbox muss behandelt werden.

- Ereignisbehandler für Fokus und das Attribut aria-activedescendant
  - : Wenn Sie ein zusammengesetztes Widget implementieren, wie ein Combobox, das aus einer Textbox und einer Listbox besteht, müssen Sie das `aria-activedescendant`-Attribut mit einem Handler verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die Browser, die Sie anvisieren müssen, sie derzeit unterstützen. Siehe die [Spezifikation von aria-descendant](https://w3c.github.io/aria/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit `type="text"` oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA-Textbox-Rolle zu verwenden. Wenn ein semantisches Element verwendet wird, ist die ARIA-Textbox-Rolle nicht erforderlich. Siehe [Anmerkungen zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologie

Wenn die `textbox`-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Zugänglichkeits-API des Betriebssystems als Element mit der Textbox-Rolle ausgeben.
- Mit dem Zugänglichkeits-API des Betriebssystems ein zugängliches Textbox-Ereignis auslösen, wenn es unterstützt wird.

Technologieprodukte für unterstützende Technologien sollten auf ein solches Ereignis hören und den Benutzer entsprechend benachrichtigen:

- Bildschirmleser sollten sein Label und seine Rolle ankündigen, wenn der Fokus zum ersten Mal auf einer Textbox landet. Wenn es auch Inhalte enthält, sollte dies wie bei einer normalen Textbox angekündigt werden.
- Bildschirmvergrößerer können die Textbox vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien diese Technik handhaben sollten, können unterschiedlich sein. Die oben bereitgestellte Information ist eine dieser Meinungen und kann unterschiedlich erfahren werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für eine einzeilige Eingabe

Der folgende Code zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für eine mehrzeilige Eingabe

Der folgende Code zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Empfohlene Vorgehensweisen

Stellen Sie sicher, dass Sie das Attribut `contenteditable="true"` zu dem HTML-Element hinzufügen, dem diese Rolle zugewiesen wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
