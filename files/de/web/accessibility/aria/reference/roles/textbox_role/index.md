---
title: "ARIA: textbox-Rolle"
short-title: textbox
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die `textbox`-Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext ermöglicht. Wann immer möglich, verwenden Sie anstelle dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Reference/Elements/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben.

## Beschreibung

Wenn ein Element die `textbox`-Rolle hat, sendet der Browser ein zugängliches Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig ist dies eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular übermittelt; in diesem Fall ist es vorzuziehen, ein HTML-{{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML-{{HTMLElement("textarea")}}, setzen Sie `aria-multiline="true"`. Das Hinzufügen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

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

Wenn ein Textfeld nur lesbar ist, geben Sie dies an, indem Sie `aria-readonly="true"` auf dem Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut
  - : Als Wert wird die ID eines Nachfolgers des Elements mit DOM-Fokus oder eines logischen Nachfolgers angegeben, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut angezeigt. Dies zeigt an, wann dieses Element fokussiert ist, oder wann es Teil eines zusammengesetzten Widgets wie einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist. Beispielsweise kann bei einer Combobox der Fokus auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf dem Textbox-Element sich auf einen Nachfolger einer Popup-Listbox bezieht, die von der Textbox gesteuert wird. Dieses Attribut muss programmgesteuert aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut

  - : Gibt an, ob und wie die Eingabe des Benutzers in das Feld die Anzeige einer Vorhersage des beabsichtigten Werts auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach der Einfügemarke eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten dargestellt.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten dargestellt, wobei der zum Vervollständigen eines Werts benötigte Text nach der Einfügemarke eingefügt wird.
    - `none` (Standard): Kein vorhergesagter Text wird angeboten.

    Wenn `list` oder `both` gesetzt ist, sollten auch die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein enthaltenes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert das AT den Benutzer, dass die Textbox mehrzeilige Eingaben unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzusenden. ARIA ändert nicht das Verhalten des Elements; vielmehr muss diese Funktion vom Entwickler gesteuert werden. Wenn false gesetzt ist oder das Attribut ausgelassen und standardmäßig auf false gesetzt wird, wird erwartet, dass die Steuerung eine einzeilige Textbox ist und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular absenden.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)-Attribut
  - : Stellt einen Hinweis (Wort oder Phrase) für den Benutzer dar, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, dauerhaft, zeigt an, welche Art von Information erwartet wird und vergrößert den Bereich für das Setzen des Fokus auf die Steuerung, während Platzhaltertext nur ein temporärer Hinweis auf den erwarteten Wert ist, der, wenn er falsch implementiert wird, die Zugänglichkeit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Steuerung der leere String ist, z. B. wenn die Steuerung zuerst den Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Anstelle von `aria-placeholder` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Anstelle von `aria-readonly` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut
  - : Gibt an, dass ein Wert für das Feld bereitgestellt werden muss, bevor es gesendet wird. Anstelle von `aria-required` verwenden Sie das semantische `<input type="text">` oder `<textarea>` mit einem `required`-Attribut.

### Tastatur-Interaktionen

In einer einzeiligen Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird) übermittelt die Return- oder Enter-Taste das Formular. In einer mehrzeiligen Verwendung (wenn `aria-multiline` `true` ist) fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit allen Eigenschaften und Zuständen verbundenen Funktionen müssen beibehalten werden, und die Formularübermittlung bei Drücken von Enter oder Return in einer einzeiligen Textbox muss behandelt werden.

- Fokus-Ereignishandler und aria-activedescendant-Attribut
  - : Wenn Sie ein zusammengesetztes Widget wie eine Combobox implementieren, das aus einer Textbox und einer Listbox besteht, müssen Sie das `aria-activedescendant`-Attribut mit einem Handler verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die von Ihnen anvisierten Browser sie unterstützen. Siehe die [Spezifikation von aria-descendant](https://w3c.github.io/aria/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit type="text" oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA-Textbox-Rolle zu verwenden. Wenn eines der beiden semantischen Elemente verwendet wird, ist die ARIA-Textbox-Rolle nicht notwendig. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologie

Wenn die `textbox`-Rolle einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element als mit der Textbox-Rolle in der Barrierefreiheits-API des Betriebssystems auszulegen.
- Ein zugängliches Textbox-Ereignis mithilfe der Barrierefreiheits-API des Betriebssystems auszulösen, falls diese es unterstützt.

Produkte für unterstützende Technologie sollten einem solchen Ereignis lauschen und den Benutzer entsprechend benachrichtigen:

- Bildschirmleseprogramme sollten das Label und die Rolle der Textbox ankündigen, wenn der Fokus zuerst auf einer Textbox landet. Wenn sie auch Inhalt enthält, sollte dies wie bei einer regulären Textbox angekündigt werden.
- Bildschirmvergrößerungen können die Textbox vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie unterstützende Technologie diese Technik handhaben sollte, können variieren. Die oben bereitgestellte Information ist eine dieser Meinungen und kann unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingaben

Der folgende Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingaben

Der folgende Ausschnitt zeigt, wie die Textbox-Rolle direkt in den HTML-Quellcode eingefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Best Practices

Stellen Sie sicher, dass Sie das Attribut `contenteditable="true"` zu dem HTML-Element hinzufügen, auf das diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht nur lesbar wäre.

## Siehe auch

- [ARIA: search role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
