---
title: "ARIA: `textbox`-Rolle"
slug: Web/Accessibility/ARIA/Roles/textbox_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `textbox`-Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext ermöglicht. Wann immer möglich, sollten Sie statt dieser Rolle besser ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Element/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben verwenden.

## Beschreibung

Wenn ein Element die `textbox`-Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular übermittelt; in diesem Fall ist es vorzuziehen, ein HTML-{{HTMLElement("input")}}-Element mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie bei einem HTML-{{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Einfügen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

```html
<!-- Simple text input field -->
<div id="txtboxLabel">Enter your five-digit zipcode</div>
<div
  role="textbox"
  contenteditable="true"
  aria-placeholder="5-digit zipcode"
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

Semantische Elemente sind prägnanter und erfordern keine JavaScript-Unterstützung für Textbox-Funktionen.

```html
<label for="txtbox">Enter your five-digit zipcode</label>
<input type="text" placeholder="5-digit zipcode" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Ist ein Textfeld schreibgeschützt, zeigen Sie dies an, indem Sie `aria-readonly="true"` auf dem Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)-Attribut
  - : Mit dem Wert, der die ID eines Nachkommen des Elements mit DOM-Fokus oder eines logischen Nachkommens ist, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)-Attribut angegeben, signalisiert es, wenn dieses Element den Fokus hat, wenn es Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) ist. Beispielsweise kann in einer Combobox der Fokus auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf dem Textbox-Element auf einen Nachkommen einer Popup-Listbox verweist, die von der Textbox gesteuert wird. Dieses Attribut muss programmatisch aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attribut

  - : Gibt an, ob und wie die Eingabe des Benutzers in das Feld die Anzeige einer Vorhersage des beabsichtigten Werts auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der zur Vervollständigung eines Werts erforderliche Text nach dem Cursor eingefügt wird.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` gesetzt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) ebenfalls eingeschlossen werden. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein enthaltenes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)-Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert das AT den Benutzer, dass die Textbox mehrzeilige Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erstellt, anstatt das Formular zu übermitteln. ARIA ändert das Verhalten des Elements nicht; diese Funktion muss vom Entwickler gesteuert werden. Wenn `false` gesetzt ist oder das Attribut weggelassen wird und standardmäßig auf `false` steht, erwartet der Benutzer, dass die Steuerung eine einzeilige Textbox ist, und <kbd>Enter</kbd> oder <kbd>Return</kbd> übermittelt das Formular.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)-Attribut
  - : Stellt einen Hinweis (Wort oder Phrase) für den Benutzer dar, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, dauerhaft, zeigt an, welche Art von Informationen erwartet wird, und erhöht den Trefferbereich für das Fokussieren der Steuerung, während Platzhaltertext nur ein vorübergehender Hinweis auf den zu erwartenden Wert ist, der, wenn er falsch implementiert wird, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung ein leerer String ist, wie wenn die Steuerung zum ersten Mal den Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Anstatt `aria-placeholder` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)-Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfelds nicht ändern kann. Anstatt `aria-readonly` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attribut
  - : Gibt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es übermittelt wird. Anstatt `aria-required` zu verwenden, verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required`-Attribut.

### Tastaturinteraktionen

Bei einzeiliger Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird) sendet die Return- oder Enter-Taste das Formular. Bei mehrzeiliger Verwendung (wenn `aria-multiline` `true` ist) fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit allen Eigenschaften und Zuständen verbundenen Funktionen müssen beibehalten werden, und die Formularübermittlung muss bei einer einzeiligen Textbox bei Eingabe oder Return gehandhabt werden.

- Fokusergebnis-Handler und `aria-activedescendant`-Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, wie z. B. eine Combobox, die aus einer Textbox und einer Listbox besteht, müssen Sie das `aria-activedescendant`-Attribut mit einem Handler verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die von Ihnen benötigten Browser dies derzeit unterstützen. Siehe die [Spezifikation zu aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit type="text" oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA-Textbox-Rolle zu verwenden. Wenn Sie eines der beiden semantischen Elemente verwenden, ist die ARIA-Textbox-Rolle nicht notwendig. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `textbox`-Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Betriebssystem-Accessibility-API als ein Element mit der Textbox-Rolle anzeigen.
- Ein zugängliches Textbox-Ereignis unter Verwendung des Betriebssystem-Accessibility-API auslösen, wenn es dies unterstützt.

Produkte für unterstützende Technologien sollten auf ein solches Ereignis hören und den Benutzer entsprechend benachrichtigen:

- Screenreader sollten sein Label und seine Rolle ankündigen, wenn der Fokus zum ersten Mal auf einer Textbox liegt. Wenn es auch Inhalte enthält, sollte dies wie bei einer regulären Textbox angesagt werden.
- Bildschirmvergrößerer können die Textbox vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien mit dieser Technik umgehen sollten, können unterschiedlich sein. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingaben

Das unten stehende Snippet zeigt, wie die Textbox-Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingaben

Das unten stehende Snippet zeigt, wie die Textbox-Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

- Stellen Sie sicher, dass Sie das Attribut `contenteditable="true"` zum HTML-Element hinzufügen, dem diese Rolle zugewiesen wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: `search`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
