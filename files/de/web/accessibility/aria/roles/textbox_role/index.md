---
title: "ARIA: textbox Rolle"
slug: Web/Accessibility/ARIA/Roles/textbox_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `textbox` wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext ermöglicht. Wann immer möglich, anstatt diese Rolle zu verwenden, verwenden Sie ein {{HTMLElement("input")}} Element mit [type="text"](/de/docs/Web/HTML/Element/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}} Element für mehrzeilige Eingaben.

## Beschreibung

Wenn ein Element die Rolle `textbox` hat, sendet der Browser ein barrierefreies Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular absendet; in diesem Fall ist es vorzuziehen, ein HTML {{HTMLElement("input")}} mit `type="text"` zu verwenden. Um ein mehrzeiliges Textfeld zu erstellen, das Zeilenumbrüche unterstützt, wie in einem HTML {{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Einfügen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

```html
<!-- Einfaches Texteingabefeld -->
<div id="txtboxLabel">Geben Sie Ihre fünfstellige Postleitzahl ein</div>
<div
  role="textbox"
  contenteditable="true"
  aria-placeholder="5-digit zipcode"
  aria-labelledby="txtboxLabel"></div>

<!-- Mehrzeiliges Textfeld -->
<div id="txtboxMultilineLabel">Geben Sie die Tags für den Artikel ein</div>
<div
  role="textbox"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

Semantische Elemente sind prägnanter und erfordern kein JavaScript zur Unterstützung von Textbox-Funktionen.

```html
<label for="txtbox">Geben Sie Ihre fünfstellige Postleitzahl ein</label>
<input type="text" placeholder="5-digit zipcode" id="txtbox" />

<!-- Mehrzeiliges Textfeld -->
<label for="txtboxMultiline">Geben Sie die Tags für den Artikel ein</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, wird dies angezeigt, indem `aria-readonly="true"` am Element gesetzt wird.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) Attribut
  - : Mit einem Wert, der die ID eines Nachfahren des Elements mit DOM-Fokus ist oder ein logischer Nachfahre, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns) Attribut angegeben, wird angezeigt, wann dieses Element fokussiert ist, wenn es Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role) ist. Zum Beispiel kann in einer Combobox der Fokus auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf das Nachfahren einer Popup-Listbox verweist, die von der Textbox gesteuert wird. Dieses Attribut muss programmgesteuert aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut

  - : Gibt an, ob und wie die Benutzereingabe in das Feld die Anzeige einer Vorhersage des beabsichtigten Werts auslösen kann. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird hinter dem Cursor eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, wobei der Text zur Vervollständigung eines Werts hinter dem Cursor eingefügt wird.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn list oder both festgelegt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) ebenfalls enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein umgebendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert das AT den Benutzer, dass die Textbox mehrzeilige Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch statt einer Formularübermittlung erzeugt. ARIA ändert nicht das Verhalten des Elements; vielmehr muss diese Funktion vom Entwickler gesteuert werden. Ist false gesetzt oder das Attribut weggelassen und steht standardmäßig auf false, erwartet der Benutzer, dass das Steuerungselement eine einzeilige Textbox ist und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular übermittelt.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) Attribut
  - : Stellt einen Hinweis (Wort oder Phrase) für den Benutzer dar, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: ein Label ist fokussierbar, dauerhaft, gibt an, welche Art von Informationen erwartet werden und vergrößert den Trefferbereich zum Fokussieren des Steuerungselements, während Platzhaltertext ein nur temporärer Hinweis auf den erwarteten Wert ist, der bei falscher Implementierung die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung eine leere Zeichenkette ist, wie wenn die Steuerung erstmals den Fokus erhält und Benutzer einen vorher eingegebenen Wert entfernen. Anstelle der Verwendung von `aria-placeholder`, verwenden Sie die semantische `<input type="text">` oder `<textarea>` mit einem `placeholder` Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Anstelle der Verwendung von `aria-readonly`, nutzen Sie die semantische `<input type="text">` oder `<textarea>` mit einem `readonly` Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut
  - : Gibt an, dass ein Wert für das Feld vor der Übermittlung bereitgestellt werden muss. Anstelle der Verwendung von `aria-required`, verwenden Sie die semantische `<input type="text">` oder `<textarea>` mit einem `required` Attribut.

### Tastaturinteraktionen

Bei einzeiliger Nutzung (wenn `aria-multiline` `false` ist oder nicht verwendet wird), sendet die Return- oder Enter-Taste das Formular ab. Bei mehrzeiliger Nutzung (wenn `aria-multiline` `true` ist), fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit beliebigen Eigenschaften und Zuständen verbundenen Funktionalitäten müssen beibehalten werden, und die Formularübermittlung bei Drücken von Enter oder Return bei einer einzeiligen Textbox muss gehandhabt werden.

- Fokusereignis-Handler und aria-activedescendant Attribut
  - : Wenn Sie ein zusammengesetztes Widget wie eine Combobox, bestehend aus einer Textbox und einer Listbox, implementieren, müssen Sie das `aria-activedescendant` Attribut mit einem Handler verwalten. Achten Sie darauf, dass die gezielten Browser diese Technik derzeit unterstützen. Siehe die [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}} Element mit type="text" oder ein {{HTMLElement("textarea")}} Element anstelle der ARIA textbox Rolle zu verwenden. Bei Verwendung eines der semantischen Elemente ist die ARIA textbox Rolle nicht notwendig. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `textbox` Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im barrierefreien API des Betriebssystems als Textbox-Rolle anzeigen.
- Ein barrierefreies Textbox-Ereignis mit dem barrierefreien API des Betriebssystems auslösen, wenn es dieses unterstützt.

Produkte für unterstützende Technologien sollten auf ein solches Ereignis hören und den Benutzer entsprechend benachrichtigen:

- Screenreader sollten dessen Label und Rolle ankündigen, wenn der Fokus erstmals auf einer Textbox landet. Wenn es auch Inhalte enthält, sollte dies wie bei einer regulären Textbox angekündigt werden.
- Bildschirmlupen können die Textbox vergrößern.

> [!NOTE]
> Es kann unterschiedlichste Meinungen darüber geben, wie unterstützende Technologien mit dieser Technik umgehen sollten. Die oben bereitgestellte Information ist eine dieser Meinungen und kann unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingaben

Der folgende Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingaben

Der folgende Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Beste Praktiken

- Achten Sie darauf, das Attribut `contenteditable="true"` zum HTML-Element hinzuzufügen, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; so kommunizieren Sie, dass die Inhalte bearbeitbar wären, wenn sie nicht schreibgeschützt wären.

## Siehe auch

- [ARIA: search Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
