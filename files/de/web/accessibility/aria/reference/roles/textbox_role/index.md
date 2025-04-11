---
title: "ARIA: `textbox`-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `textbox`-Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext erlaubt. Wann immer möglich, sollte statt dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Reference/Elements/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben verwendet werden.

## Beschreibung

Wenn ein Element die `textbox`-Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an Assistenztechnologien, die dann den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular absendet; in diesem Fall ist es vorzuziehen, ein HTML-{{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie ein HTML-{{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Einschließen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

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

Semantische Elemente sind präziser und erfordern kein JavaScript zur Unterstützung von Textbox-Funktionen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, kennzeichnen Sie dies, indem Sie `aria-readonly="true"` auf dem Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
  - : Als Wert dient die ID eines Nachfahren des Elements mit DOM-Fokus oder eines logischen Nachfahren, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut angegeben. Es zeigt an, wann dieses Element den Fokus hat, wenn es Teil eines Komposit-Widgets ist, wie z.B. eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role). Zum Beispiel kann in einer Combobox der Fokus auf dem Textfeld bleiben, während der Wert von `aria-activedescendant` auf das Element in einer Pop-up-Listbox verweist, die vom Textfeld gesteuert wird. Dieses Attribut muss programmatisch aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut

  - : Gibt an, ob und wie die Benutzereingaben in das Feld eine Vorhersage des beabsichtigten Werts auslösen könnten. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der zur Vervollständigung eines Werts erforderliche Text nach dem Cursor eingefügt wird.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` gesetzt sind, sollten auch die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder das Textfeld oder ein enthaltenes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, weist es die Assistenztechnologie darauf hin, dass das Textfeld mehrzeilige Eingaben unterstützt, wobei davon ausgegangen wird, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erstellt, anstatt das Formular abzusenden. ARIA ändert das Verhalten des Elements nicht; diese Funktion muss vom Entwickler kontrolliert werden. Wenn `false` gesetzt ist oder das Attribut ausgelassen wird und standardmäßig auf `false` steht, wird erwartet, dass die Steuerung eine einzeilige Textbox ist und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular absendet.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut
  - : Stellt einen Hinweis (Wort oder Phrase) für den Benutzer dar, was ins Textfeld eingegeben werden soll. Der Hinweis sollte einen Beispielwert oder eine kurze Beschreibung des erwarteten Formats enthalten. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, dauerhaft, zeigt an, welche Art von Informationen erwartet wird, und erhöht die Trefferfläche zum Setzen des Fokus auf die Steuerung, während Platzhaltertext nur ein temporärer Hinweis auf den erwarteten Wert ist, der, wenn nicht korrekt implementiert, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung ein leerer String ist, wie wenn die Steuerung erstmaligen Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Statt `aria-placeholder` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Zeigt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Statt `aria-readonly` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut
  - : Zeigt an, dass ein Wert für das Feld angegeben werden muss, bevor es abgesendet wird. Statt `aria-required` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required`-Attribut.

### Tastaturinteraktionen

Bei einzeiliger Nutzung (wenn `aria-multiline` `false` ist oder nicht verwendet wird) sendet die Return- oder Enter-Taste das Formular. Bei mehrzeiliger Nutzung (wenn `aria-multiline` `true` ist) fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle Funktionen, die mit irgendwelchen Eigenschaften und Zuständen verbunden sind, müssen erhalten bleiben, und das Absenden von Formularen durch Drücken von Enter oder Return bei einer einzeiligen Textbox muss gehandhabt werden.

- Fokusereignishandler und aria-activedescendant Attribut
  - : Wenn Sie ein Komposit-Widget implementieren, wie z.B. eine Combobox, bestehend aus einem Textfeld und einer Listbox, müssen Sie das `aria-activedescendant` Attribut mit einem Handler verwalten. Bevor Sie diese Technik anwenden, stellen Sie sicher, dass die Browser, die Sie ansprechen möchten, sie aktuell unterstützen. Siehe die [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit type="text" oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA-Textbox-Rolle zu verwenden. Wenn eines der semantischen Elemente verwendet wird, ist die ARIA-Textbox-Rolle nicht notwendig. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und Assistenztechnologie

Wenn die `textbox`-Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Betriebssystem-Zugänglichkeits-API als eine Textbox-Rolle exponieren.
- Ein zugängliches Textbox-Ereignis mit dem Betriebssystem-Zugänglichkeits-API auslösen, wenn es dies unterstützt.

Assistenztechnologie-Produkte sollten auf ein solches Ereignis hören und entsprechend den Benutzer benachrichtigen:

- Bildschirmleseprogramme sollten sein Label und seine Rolle ankündigen, wenn der Fokus erstmals auf eine Textbox fällt. Wenn es auch Inhalt enthält, sollte dies wie bei einer regulären Textbox angekündigt werden.
- Bildschirmvergrößerer können die Textbox vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie Assistenztechnologie mit dieser Technik umgehen sollte, können variieren. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingaben

Der untenstehende Ausschnitt zeigt, wie die Textbox-Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingaben

Der untenstehende Ausschnitt zeigt, wie die Textbox-Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

Vergessen Sie nicht, das Attribut `contenteditable="true"` zu dem HTML-Element hinzuzufügen, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
