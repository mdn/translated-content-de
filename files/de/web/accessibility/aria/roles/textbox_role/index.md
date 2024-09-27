---
title: "ARIA: textbox Rolle"
slug: Web/Accessibility/ARIA/Roles/textbox_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `textbox` Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext erlaubt. Wann immer möglich, verwenden Sie anstelle dieser Rolle ein {{HTMLElement("input")}} Element mit [type="text"](/de/docs/Web/HTML/Element/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}} Element für mehrzeilige Eingaben.

## Beschreibung

Wenn ein Element die `textbox` Rolle besitzt, sendet der Browser ein barrierefreies Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular absendet; in diesem Fall ist es vorzuziehen, ein HTML {{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML {{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Die Einbeziehung des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

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

Semantische Elemente sind prägnanter und erfordern kein JavaScript, um Textbox-Funktionen zu unterstützen.

```html
<label for="txtbox">Enter your five-digit zipcode</label>
<input type="text" placeholder="5-digit zipcode" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld nur gelesen werden soll, geben Sie dies an, indem Sie `aria-readonly="true"` auf dem Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Attribut
  - : Nimmt als Wert die ID eines Nachfahren des Elements mit DOM-Fokus oder eines logischen Nachfahren an, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut angegeben, und zeigt an, wann dieses Element den Fokus hat, wenn es Teil eines zusammengesetzten Widgets wie einem [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) ist. Beispielsweise kann in einer Combobox der Fokus auf der Textbox verbleiben, während der Wert von `aria-activedescendant` auf dem Textbox-Element auf einen Nachfahren einer Pop-up-Listenbox verweist, die von der Textbox gesteuert wird. Dieses Attribut muss programmatisch aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut

  - : Gibt an, ob und wie die Eingabe des Benutzers in das Feld die Anzeige einer Vorhersage des beabsichtigten Werts auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der Text, der zum Vervollständigen eines Werts benötigt wird, nach dem Cursor eingefügt wird.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` gesetzt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) ebenfalls enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein umschließendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der mit der Rolle des Elements übereinstimmt, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert das AT den Benutzer darüber, dass die Textbox mehrzeilige Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzusenden. ARIA ändert nicht das Verhalten des Elements; diese Funktion muss vom Entwickler gesteuert werden. Wenn false gesetzt ist oder das Attribut weggelassen wird und standardmäßig false ist, erwartet der Benutzer, dass es sich um eine einzeilige Textbox handelt, und <kbd>Enter</kbd> oder <kbd>Return</kbd> sendet das Formular ab.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) Attribut
  - : Repräsentiert einen Hinweis (Wort oder Phrase) für den Benutzer über das, was in das Textfeld eingegeben werden sollte. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für eine Beschriftung verwendet werden: Eine Beschriftung ist fokussierbar, dauerhaft, gibt an, welche Art von Information erwartet wird und vergrößert den Trefferbereich, um den Fokus auf die Steuerung zu setzen, während Platzhaltertext nur ein vorübergehender Hinweis auf den erwarteten Wert ist, der, wenn er falsch implementiert wird, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung eine leere Zeichenkette ist, zum Beispiel, wenn die Steuerung erstmals den Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Statt `aria-placeholder` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder` Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Statt `aria-readonly` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly` Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut
  - : Gibt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es abgesendet wird. Statt `aria-required` zu verwenden, nutzen Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required` Attribut.

### Tastaturinteraktionen

Bei einzeiligem Gebrauch (wenn `aria-multiline` `false` ist oder nicht verwendet wird) sendet die Return- oder Enter-Taste das Formular. Bei mehrzeiligem Gebrauch (wenn `aria-multiline` `true` ist) fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit allen Eigenschaften und Zuständen verbundenen Funktionen müssen beibehalten werden, und das Absenden von Formularen durch die Eingabe- oder Rücktaste auf einer einzeiligen Textbox muss behandelt werden.

- Fokusereignis-Handler und aria-activedescendant Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, beispielsweise eine Combobox, die aus einer Textbox und einer Listenbox besteht, müssen Sie das `aria-activedescendant` Attribut mit einem Handler verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die von Ihnen angesprochenen Browser sie derzeit unterstützen. Siehe die [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}} Element mit type="text" oder ein {{HTMLElement("textarea")}} Element anstelle der ARIA textbox Rolle zu verwenden. Wenn eines der semantischen Elemente verwendet wird, ist die ARIA textbox Rolle nicht erforderlich. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `textbox` Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element als ein Element mit der Rolle Textbox in der Barrierefreiheits-API des Betriebssystems freigeben.
- Ein barrierefreies Textbox-Ereignis auslösen unter Verwendung der Barrierefreiheits-API des Betriebssystems, falls unterstützt.

Produkte für unterstützende Technologien sollten auf ein solches Ereignis hören und den Benutzer entsprechend benachrichtigen:

- Bildschirmleser sollten seine Beschriftung und Rolle ankündigen, wenn der Fokus erstmals auf eine Textbox fällt. Wenn es auch Inhalte enthält, sollte dies wie bei einer regulären Textbox angekündigt werden.
- Bildschirmvergrößerer können die Textbox vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologien diese Technik handhaben sollten, können variieren. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingaben

Der unten gezeigte Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingaben

Der unten gezeigte Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

- Achten Sie darauf, das `contenteditable="true"` Attribut dem HTML-Element hinzuzufügen, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
