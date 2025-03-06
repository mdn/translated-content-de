---
title: "ARIA: textbox-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `textbox`-Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von freiem Text ermöglicht. Wann immer möglich, sollte anstelle dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Element/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben verwendet werden.

## Beschreibung

Wenn ein Element die `textbox`-Rolle hat, sendet der Browser ein zugängliches Textfeldereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig ist die Eingabe einzeilig, wobei <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular absendet; es ist in diesem Fall vorzuziehen, ein HTML {{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML {{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Die Einbindung des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

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

Semantische Elemente sind prägnanter und benötigen kein JavaScript zur Unterstützung von Textbox-Funktionen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, geben Sie dies an, indem Sie `aria-readonly="true"` auf dem Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut
  - : Nimmt als Wert die ID eines Nachkommen des Elements mit DOM-Fokus oder eines logischen Nachkommens an, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut angezeigt. Es zeigt an, wann dieses Element den Fokus hat, wenn es Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist. Zum Beispiel kann bei einer Combobox der Fokus auf dem Textfeld bleiben, während der Wert von `aria-activedescendant` auf dem Textelement auf einen Nachkommen einer Popup-Listbox verweist, die vom Textfeld gesteuert wird. Dieses Attribut muss programmgesteuert aktualisiert werden, sobald sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut

  - : Gibt an, ob und wie die Eingabe des Benutzers in das Feld die Anzeige einer Vorhersage des beabsichtigten Werts auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird hinter dem Caret eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der Text, der zur Vervollständigung eines Wertes benötigt wird, hinter dem Caret eingefügt wird.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` festgelegt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) ebenfalls enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Darüber hinaus hat entweder das Textfeld oder ein enthaltenes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attribut

  - : Wenn `aria-multiline="true"` festgelegt ist, informiert das AT den Benutzer darüber, dass das Textfeld mehrzeilige Eingaben unterstützt, wobei erwartet wird, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzusenden. ARIA verändert das Verhalten des Elements nicht; diese Funktion muss vom Entwickler gesteuert werden. Wenn `false` gesetzt ist oder das Attribut weggelassen und auf `false` standardmäßig gesetzt wird, wird vom Benutzer erwartet, dass es sich um ein einzeiliges Textfeld handelt und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular absendet.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)-Attribut
  - : Repräsentiert einen Hinweis (Wort oder Phrase) an den Benutzer, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, dauerhaft, gibt an, welche Art von Information erwartet wird, und erhöht die Trefffläche zum Fokussieren auf das Steuerelement, während Platzhaltertext nur ein vorübergehender Hinweis auf den erwarteten Wert ist, der, wenn falsch implementiert, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert des Steuerelements die leere Zeichenfolge ist, zum Beispiel wenn das Steuerelement zuerst den Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Anstelle von `aria-placeholder` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfelds nicht ändern kann. Anstelle von `aria-readonly` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut
  - : Zeigt an, dass vor dem Absenden des Formulars ein Wert für das Feld bereitgestellt werden muss. Anstelle von `aria-required` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required`-Attribut.

### Tastaturinteraktionen

Bei einzeiliger Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird), sendet die Taste Return oder Enter das Formular. Bei mehrzeiliger Verwendung (wenn `aria-multiline` `true` ist), fügt die Taste Return oder Enter einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle Funktionen, die mit allen Eigenschaften und Zuständen verbunden sind, müssen beibehalten werden, und das Absenden von Formularen durch Drücken von Enter oder Return bei einzeiligen Textfeldern muss gehandhabt werden.

- Fokus-Ereignishandler und aria-activedescendant-Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, wie z.B. eine Combobox, die aus einem Textfeld und einer Listbox besteht, müssen Sie das Attribut `aria-activedescendant` mit einem Handler verwalten. Stellen Sie vor der Verwendung dieser Technik sicher, dass die Browser, die Sie ansprechen möchten, diese derzeit unterstützen. Weitere Informationen finden Sie in der [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant).

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit `type="text"` oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA-Textbox-Rolle zu verwenden. Wenn eines der beiden semantischen Elemente verwendet wird, ist die ARIA-Textbox-Rolle nicht erforderlich. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologie

Wenn die `textbox`-Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element als Textbox-Rolle in der Accessibility-API des Betriebssystems identifizieren.
- Ein zugängliches Textbox-Ereignis mit der Accessibility-API des Betriebssystems auslösen, wenn diese es unterstützt.

Produkte der unterstützenden Technologie sollten auf ein solches Ereignis hören und den Benutzer entsprechend benachrichtigen:

- Bildschirmlesegeräte sollten das Label und die Rolle ankündigen, wenn der Fokus zum ersten Mal auf ein Textfeld fällt. Wenn es auch Inhalte enthält, sollte dies wie bei einem normalen Textfeld angekündigt werden.
- Bildschirmvergrößerer können das Textfeld vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologie mit dieser Technik umgehen sollte, können unterschiedlich sein. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erfahren werden.

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

- Stellen Sie sicher, dass das Attribut `contenteditable="true"` dem HTML-Element hinzugefügt wird, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; so kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
