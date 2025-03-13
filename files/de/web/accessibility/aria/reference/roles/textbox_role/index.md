---
title: "ARIA: textbox Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Die `textbox` Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext ermöglicht. Wann immer möglich, verwenden Sie anstelle dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Element/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben.

## Beschreibung

Wenn ein Element die `textbox` Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer dann darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular absendet; in diesem Fall ist es vorzuziehen, ein HTML-{{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie bei einem HTML-{{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Einschließen des HTML-Attributs `contenteditable` sorgt dafür, dass der Textknoten bearbeitbar ist.

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

Wenn ein Textfeld nur lesbar ist, zeigen Sie dies an, indem Sie `aria-readonly="true"` auf das Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
  - : Wenn der Wert die ID eines Nachkommen des Elements mit DOM-Fokus ist oder ein logischer Nachkomme, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut angezeigt, zeigt es an, wann dieses Element den Fokus hat, wenn es Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist. Beispielsweise kann in einer Combobox der Fokus auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf dem Textbox-Element auf einen Nachkommen einer Popup-Listbox verweist, die von der Textbox gesteuert wird. Dieses Attribut muss programmatisch aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut

  - : Gibt an, ob und wie die Eingabe des Benutzers in das Feld die Anzeige einer Vorhersage des beabsichtigten Werts auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der zum Vervollständigen eines Wertes benötigte Text nach dem Cursor eingefügt wird.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` gesetzt sind, sollten auch die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein enthaltendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert das AT den Benutzer darüber, dass die Textbox mehrzeilige Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzusenden. ARIA ändert nicht das Verhalten des Elements; diese Funktion muss vom Entwickler kontrolliert werden. Wenn `false` gesetzt ist oder das Attribut weggelassen wird und standardmäßig auf `false` gesetzt ist, erwartet der Benutzer, dass es sich um eine einzeilige Textbox handelt, und <kbd>Enter</kbd> oder <kbd>Return</kbd> sendet das Formular ab.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut
  - : Stellt einen Hinweis (Wort oder Phrase) für den Benutzer dar, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, dauerhaft, gibt an, welche Art von Informationen erwartet wird, und vergrößert den Hitbereich, um den Fokus auf das Steuerelement zu setzen, während Platzhaltertext nur ein temporärer Hinweis zum erwarteten Wert ist, der, wenn er falsch implementiert wird, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert des Steuerelements ein leerer String ist, z. B. wenn das Steuerelement den Fokus zum ersten Mal erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Statt `aria-placeholder` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Statt `aria-readonly` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut
  - : Gibt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es abgesendet wird. Statt `aria-required` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required`-Attribut.

### Tastatur-Interaktionen

Bei einzeiliger Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird), sendet die Taste Return oder Enter das Formular. Bei mehrzeiliger Verwendung (wenn `aria-multiline` `true` ist), fügt die Taste Return oder Enter einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit beliebigen Eigenschaften und Zuständen verbundenen Funktionen müssen beibehalten werden, und das Absenden von Formularen mit Enter oder Return bei einer einzeiligen Textbox muss behandelt werden.

- Fokus-Ereignis-Handler und aria-activedescendant Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, z. B. eine Combobox, die aus einer Textbox und einer Listbox besteht, müssen Sie das `aria-activedescendant`-Attribut mit einem Handler verwalten. Stellen Sie sicher, dass die Browser, die Sie ansprechen möchten, diese Technik derzeit unterstützen. Siehe die [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit type="text" oder ein {{HTMLElement("textarea")}}-Element zu verwenden, anstatt die ARIA-Textbox-Rolle. Wenn eines dieser semantischen Elemente verwendet wird, ist die ARIA-Textbox-Rolle nicht notwendig. Siehe [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologie

Wenn die `textbox` Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Betriebssystem-Zugänglichkeits-API als Textbox-Rolle exponieren.
- Ein zugängliches Textbox-Ereignis mit dem Betriebssystem-Zugänglichkeits-API auslösen, wenn es dies unterstützt.

Produkte unterstützender Technologien sollten auf ein solches Ereignis hören und den Benutzer entsprechend informieren:

- Bildschirmlesegeräte sollten beim ersten Fokussieren einer Textbox ihr Label und ihre Rolle ankündigen. Wenn sie auch Inhalte enthält, sollte dies wie bei einer regulären Textbox angekündigt werden.
- Bildschirmvergrößerer könnten die Textbox vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien diese Technik handhaben sollten, können unterschiedlich sein. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erfahren werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingabe

Das folgende Snippet zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingabe

Das folgende Snippet zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

- Achten Sie darauf, das Attribut `contenteditable="true"` auf das HTML-Element zu setzen, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise signalisieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
