---
title: "ARIA: textbox Rolle"
slug: Web/Accessibility/ARIA/Roles/textbox_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Die `textbox` Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext erlaubt. Wann immer möglich, sollten Sie anstelle dieser Rolle ein {{HTMLElement("input")}} Element mit [type="text"](/de/docs/Web/HTML/Element/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}} Element für mehrzeilige Eingaben verwenden.

## Beschreibung

Wenn ein Element die `textbox` Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber benachrichtigen können.

Der Standard ist eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular abschickt; in diesem Fall ist es vorzuziehen, ein HTML-{{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML-{{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Einfügen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

```html
<!-- Simple text input field -->
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

Semantische Elemente sind prägnanter und erfordern kein JavaScript zur Unterstützung von Textbox-Funktionen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, geben Sie dies an, indem Sie `aria-readonly="true"` auf dem Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Attribut
  - : Nimmt als Wert die ID eines Nachfahren des Elements, das DOM-Fokus hat, oder eines logischen Nachfahren, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut angegeben, an. Es gibt an, wann dieses Element im Fokus steht, wenn es Teil eines zusammengesetzten Widgets wie z.B. eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) ist. Zum Beispiel kann der Fokus in einer Combobox auf der Textbox verbleiben, während der Wert von `aria-activedescendant` auf dem Textbox-Element sich auf einen Nachfahren einer Popup-Listbox bezieht, die von der Textbox gesteuert wird. Dieses Attribut muss programmatisch aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut

  - : Zeigt an, ob und wie die Benutzereingabe in das Feld eine Vorhersage des beabsichtigten Wertes anzeigen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird hinter dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der Text, der benötigt wird, um einen Wert zu vervollständigen, hinter dem Cursor eingefügt wird.
    - `none` (Standard): Kein vorhergesagter Text wird angeboten.

    Wenn list oder both gesetzt ist, sollten auch die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein übergeordnetes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert die AT den Benutzer, dass die Textbox mehrzeilige Eingaben unterstützt, wobei erwartet wird, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzuschicken. ARIA ändert das Verhalten des Elements nicht; diese Funktion muss vom Entwickler gesteuert werden. Ist false gesetzt, oder das Attribut weggelassen und standardmäßig auf false gesetzt, so wird erwartet, dass die Steuerung eine einzeilige Textbox ist und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular absenden.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) Attribut
  - : Repräsentiert einen Hinweis (Wort oder Phrase) an den Benutzer, was in das Textfeld eingegeben werden soll. Der Hinweis sollte einen Beispielwert oder eine kurze Beschreibung des erwarteten Formats darstellen. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, permanent, zeigt an, welche Art von Information erwartet wird und vergrößert die Trefferfläche zum Setzen des Fokus auf die Steuerung, während Platzhaltertext nur ein vorübergehender Hinweis auf den erwarteten Wert ist, der, falls falsch implementiert, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung der leere String ist, wie zum Beispiel wenn die Steuerung zuerst den Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Anstatt `aria-placeholder` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder` Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfelds nicht ändern kann. Anstatt `aria-readonly` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly` Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut
  - : Gibt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es gesendet wird. Anstatt `aria-required` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required` Attribut.

### Tastaturinteraktionen

Bei einzeiliger Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird) sendet die Return- oder Enter-Taste das Formular. Bei mehrzeiliger Verwendung (wenn `aria-multiline` `true` ist) fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit allen Eigenschaften und Zuständen verbundenen Funktionen müssen beibehalten werden, und die Formularübermittlung bei Drücken von Enter oder Return bei einer einzeiligen Textbox muss gehandhabt werden.

- Fokusereignishandler und aria-activedescendant Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, wie z.B. eine Combobox, die aus einer Textbox und einer Listbox besteht, müssen Sie das `aria-activedescendant` Attribut mit einem Handler verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die von Ihnen angestrebten Browser sie derzeit unterstützen. Siehe die [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}} Element mit type="text" oder ein {{HTMLElement("textarea")}} Element anstelle der ARIA-Textbox-Rolle zu verwenden. Bei Verwendung eines der beiden semantischen Elemente ist die ARIA-Textbox-Rolle nicht erforderlich. Siehe [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologie

Wenn die `textbox` Rolle zu einem Element hinzugefügt wird, oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Barrierefreiheits-API des Betriebssystems als Textbox-Rolle anzeigen.
- Ein zugängliches Textbox-Ereignis mit dem Barrierefreiheits-API des Betriebssystems auslösen, wenn es unterstützt wird.

Produkte der unterstützenden Technologie sollten nach einem solchen Ereignis lauschen und den Benutzer entsprechend benachrichtigen:

- Bildschirmleser sollten dessen Bezeichnung und Rolle ankündigen, wenn der Fokus erstmals auf einer Textbox landet. Wenn es auch Inhalte enthält, sollte dies wie bei einer regulären Textbox angekündigt werden.
- Bildschirmlupen können die Textbox vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologie mit dieser Technik umgehen sollte, können unterschiedlich sein. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingaben

Der untenstehende Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingaben

Der untenstehende Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

- Achten Sie darauf, das Attribut `contenteditable="true"` dem HTML-Element hinzuzufügen, auf das diese Rolle angewendet wird. Tun Sie dies, auch wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Weitere Informationen

- [ARIA: search Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
