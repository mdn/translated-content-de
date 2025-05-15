---
title: "ARIA: textbox Rolle"
short-title: textbox
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `textbox` Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freiformtext ermöglicht. Wann immer möglich, verwenden Sie anstelle dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Reference/Elements/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben.

## Beschreibung

Wenn ein Element die `textbox` Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular übermittelt; in diesem Fall ist es vorzuziehen, ein HTML {{HTMLElement("input")}} mit `type="text"` zu verwenden. Um ein mehrzeiliges Textfeld zu erstellen, das Zeilenumbrüche unterstützt, wie in einem HTML {{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Durch Einfügen des HTML-Attributs `contenteditable` wird sichergestellt, dass der Textknoten bearbeitbar ist.

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

Semantische Elemente sind präziser und benötigen kein JavaScript, um Textbox-Funktionen zu unterstützen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, sollte dies durch Setzen von `aria-readonly="true"` auf dem Element angezeigt werden.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
  - : Nimmt als Wert die ID eines Nachfahren des Elements mit DOM-Fokus oder eines logischen Nachfahren, der durch das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) angegeben ist. Es zeigt an, wenn dieses Element Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist. Zum Beispiel kann in einer Combobox der Fokus auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf das Element eines Popup-Listenfeldes verweist, das von der Textbox gesteuert wird. Dieses Attribut muss programmgesteuert aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut

  - : Gibt an, ob und wie die Benutzereingabe in diesem Feld die Anzeige einer Vorhersage des beabsichtigten Wertes auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten angezeigt.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten angezeigt, wobei der zum Vervollständigen eines Wertes benötigte Text nach dem Cursor eingefügt wird.
    - `none` (Standard): Es wird kein vorhergesagter Text angeboten.

    Wenn `list` oder `both` festgelegt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) ebenfalls einbezogen werden. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein enthaltendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut

  - : Wenn `aria-multiline="true"` gesetzt wird, informiert das AT den Benutzer, dass die Textbox mehrzeilige Eingaben unterstützt, wobei erwartet wird, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular zu übermitteln. ARIA verändert nicht das Verhalten des Elements; vielmehr muss dieses Feature vom Entwickler gesteuert werden. Wenn `false` festgelegt ist oder das Attribut weggelassen und somit auf `false` standardmäßig gesetzt ist, ist die Benutzervorstellung, dass die Steuerung eine einzeilige Textbox ist und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular übermittelt.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut
  - : Repräsentiert einen Hinweis (Wort oder Phrase) für den Benutzer, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, permanent, zeigt an, welche Art von Information erwartet wird, und vergrößert den Klickbereich, um den Fokus auf die Steuerung zu setzen, während Platzhaltertext nur ein vorübergehender Hinweis auf den erwarteten Wert ist, der bei falscher Implementierung die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung eine leere Zeichenkette wie bei der ersten Fokussierung der Steuerung und beim Entfernen eines zuvor eingegebenen Wertes ist. Anstelle von `aria-placeholder` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder` Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Anstelle von `aria-readonly` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly` Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut
  - : Gibt an, dass ein Wert für das Feld angegeben werden muss, bevor es übermittelt wird. Anstelle von `aria-required` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required` Attribut.

### Tastaturinteraktionen

Bei einer einzeiligen Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird), übermittelt die Taste Return oder Enter das Formular. Bei einer mehrzeiligen Verwendung (wenn `aria-multiline` `true` ist), fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit beliebigen Eigenschaften und Zuständen verbundenen Funktionen müssen aufrechterhalten werden, und die Formularübermittlung beim Drücken von Enter oder Return in einer einzeiligen Textbox muss behandelt werden.

- Fokus-Ereignishandler und aria-activedescendant Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, wie z. B. eine Combobox aus einer Textbox und einer Listbox, müssen Sie das `aria-activedescendant` Attribut mit einem Handler verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die von Ihnen angezielten Browser sie derzeit unterstützen. Weitere Informationen finden Sie in der [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant).

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit type="text" oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA textbox Rolle zu verwenden. Wenn Sie eines der beiden semantischen Elemente verwenden, ist die ARIA textbox Rolle nicht notwendig. Siehe [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `textbox` Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Betriebssystem-Zugänglichkeits-API als Textbox-Rolle exponieren.
- Ein zugängliches Textbox-Ereignis unter Verwendung des Betriebssystem-Zugänglichkeits-API auslösen, wenn es dies unterstützt.

Unterstützende Technologieprodukte sollten auf ein solches Ereignis hören und den Benutzer entsprechend benachrichtigen:

- Bildschirmlesegeräte sollten sein Label und seine Rolle ankündigen, wenn der Fokus zuerst auf einer Textbox landet. Wenn es auch Inhalt enthält, sollte dies wie bei einer normalen Textbox angekündigt werden.
- Bildschirmvergrößerer können die Textbox vergrößern.

> [!NOTE]
> Es können unterschiedliche Meinungen darüber bestehen, wie unterstützende Technologien mit dieser Technik umgehen sollten. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingabe

Der folgende Codeausschnitt zeigt, wie die Textbox Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingabe

Der folgende Codeausschnitt zeigt, wie die Textbox Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

Stellen Sie sicher, dass Sie das `contenteditable="true"`-Attribut zum HTML-Element hinzufügen, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
