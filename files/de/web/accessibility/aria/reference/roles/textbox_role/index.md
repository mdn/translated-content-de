---
title: "ARIA: `textbox`-Rolle"
short-title: textbox
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

Die `textbox`-Rolle wird verwendet, um ein Element zu identifizieren, das die Eingabe von Freitext erlaubt. Wenn möglich, sollte anstelle dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Reference/Elements/input/text) für einzeilige Eingabe oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingabe verwendet werden.

## Beschreibung

Wenn ein Element die `textbox`-Rolle hat, sendet der Browser ein barrierefreies Textbox-Ereignis an unterstützende Technologien, die den Benutzer darüber informieren können.

Standardmäßig handelt es sich um eine einzeilige Eingabe, bei der <kbd>Return</kbd> oder <kbd>Enter</kbd> das Formular abschickt; in diesem Fall ist es vorzuziehen, ein HTML-{{HTMLElement("input")}} mit `type="text"` zu verwenden. Um eine mehrzeilige Textbox zu erstellen, die Zeilenumbrüche unterstützt, wie in einem HTML-{{HTMLElement("textarea")}}, stellen Sie `aria-multiline="true"` ein. Das Hinzufügen des HTML-Attributs `contenteditable` stellt sicher, dass der Textknoten bearbeitbar ist.

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

Semantische Elemente sind prägnanter und erfordern kein JavaScript zur Unterstützung von Textbox-Funktionen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, machen Sie dies kenntlich, indem Sie `aria-readonly="true"` auf dem Element setzen.

### Zugehörige ARIA-Eigenschaften

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut
  - : Mit dem Wert, die ID eines Nachfolgers des Elements mit DOM-Fokus zu sein, oder ein logischer Nachfolger, wie durch das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut angegeben, zeigt es an, wenn dieses Element den Fokus hat, wenn es Teil eines zusammengesetzten Widgets wie eines [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) ist. Zum Beispiel, in einer Combobox kann der Fokus auf der Textbox bleiben, während der Wert von `aria-activedescendant` auf dem Textbox-Element auf einen Nachfolger einer Popup-Listbox verweist, die von der Textbox gesteuert wird. Dieses Attribut muss programmatisch aktualisiert werden, wenn sich der Fokus ändert.
- [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut

  - : Gibt an, ob und wie die Benutzereingabe in das Feld die Anzeige einer Vorhersage des beabsichtigten Werts auslösen könnte. Es unterstützt die folgenden Werte:

    - `inline`: Vorhergesagter Text wird nach dem Caret eingefügt.
    - `list`: Vorhergesagter Text wird als Sammlung von Werten präsentiert.
    - `both`: Vorhergesagter Text wird als Sammlung von Werten präsentiert, mit dem Text, der benötigt wird, um einen Wert nach dem Caret zu vervollständigen.
    - `none` (Standard): Vorhergesagter Text wird nicht angeboten.

    Wenn `list` oder `both` gesetzt ist, sollten die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) ebenfalls enthalten sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Zusätzlich hat entweder die Textbox oder ein enthaltendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup`, der der Rolle des Elements entspricht, das die Liste der vorgeschlagenen Werte enthält.

- [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attribut

  - : Wenn `aria-multiline="true"` gesetzt ist, informiert die unterstützende Technologie den Benutzer darüber, dass die Textbox eine mehrzeilige Eingabe unterstützt, mit der Erwartung, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, anstatt das Formular abzuschicken. ARIA ändert nicht das Verhalten des Elements; vielmehr muss diese Funktion vom Entwickler gesteuert werden. Wenn `false` gesetzt ist oder das Attribut weggelassen wird und standardmäßig `false` ist, erwartet der Benutzer, dass die Kontrolle eine einzeilige Textbox ist und <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular abschickt.

- [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)-Attribut
  - : Repräsentiert einen Hinweis (Wort oder Phrase) für den Benutzer, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information sollte nicht als Ersatz für ein Label verwendet werden: Ein Label ist fokussierbar, permanent, zeigt an, welche Art von Information erwartet wird, und erhöht den Bereich für das Setzen des Fokus auf die Steuerung, während Platzhaltertext nur ein temporärer Hinweis auf den erwarteten Wert ist, der, wenn er falsch implementiert wird, die Barrierefreiheit verringern kann. Der Platzhalter sollte sichtbar sein, wenn der Wert der Kontrolle der leere String ist, etwa wenn die Kontrolle zunächst den Fokus erhält und wenn Benutzer einen zuvor eingegebenen Wert entfernen. Anstelle von `aria-placeholder` sollte das semantische `<input type="text">` oder `<textarea>` mit einem `placeholder`-Attribut verwendet werden.
- [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut
  - : Gibt an, dass der Benutzer den Wert des Textfeldes nicht ändern kann. Anstelle von `aria-readonly` sollte das semantische `<input type="text">` oder `<textarea>` mit einem `readonly`-Attribut verwendet werden.
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut
  - : Gibt an, dass ein Wert für das Feld angegeben werden muss, bevor es abgeschickt werden kann. Anstelle von `aria-required` sollte das semantische `<input type="text">` oder `<textarea>` mit einem `required`-Attribut verwendet werden.

### Tastaturinteraktionen

In einer einzeiligen Verwendung (wenn `aria-multiline` `false` ist oder nicht verwendet wird), schickt die Return- oder Enter-Taste das Formular ab. In einer mehrzeiligen Verwendung (wenn `aria-multiline` `true` ist), fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle mit allen Eigenschaften und Zuständen verbundenen Funktionen müssen beibehalten werden, und die Formularübermittlung bei Enter oder Return in einer einzeiligen Textbox muss gehandhabt werden.

- Fokusevent-Handler und aria-activedescendant-Attribut
  - : Wenn Sie ein zusammengesetztes Widget implementieren, wie z.B. eine Combobox bestehend aus einer Textbox und einer Listbox, müssen Sie das `aria-activedescendant`-Attribut mit einem Handler verwalten. Bevor Sie diese Technik anwenden, stellen Sie sicher, dass die Browser, die Sie ansprechen müssen, diese aktuell unterstützen. Siehe die [Spezifikation von aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) für weitere Informationen.

> [!NOTE]
> Es ist eine bessere Praxis, ein {{HTMLElement("input")}}-Element mit `type="text"` oder ein {{HTMLElement("textarea")}}-Element anstelle der ARIA `textbox`-Rolle zu verwenden. Wenn Sie ein semantisches Element verwenden, ist die ARIA-Textbox-Rolle nicht notwendig. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/).

## Mögliche Auswirkungen auf Benutzeragenten und unterstützende Technologien

Wenn die `textbox`-Rolle zu einem Element hinzugefügt wird oder ein solches Element sichtbar wird, sollte der Benutzeragent Folgendes tun:

- Das Element im Barrierefreiheits-API des Betriebssystems als Textbox-Rolle darstellen.
- Ein barrierefreies Textbox-Ereignis mit dem Barrierefreiheits-API des Betriebssystems auslösen, falls es dies unterstützt.

Produkte der unterstützenden Technologie sollten auf ein solches Ereignis achten und den Benutzer entsprechend benachrichtigen:

- Bildschirmlesegeräte sollten dessen Label und Rolle ankündigen, wenn der Fokus erstmals auf einer Textbox landet. Wenn es auch Inhalt enthält, sollte dies genauso wie bei einer normalen Textbox angekündigt werden.
- Bildschirmvergrößerung könnte die Textbox vergrößern.

> [!NOTE]
> Über die Handhabung dieser Technik durch unterstützende Technologien können Meinungen auseinandergehen. Die oben bereitgestellten Informationen sind eine dieser Meinungen und können unterschiedlich erlebt werden.

## Beispiele

### Beispiel 1: Hinzufügen der Rolle im HTML-Code für einzeilige Eingabe

Der untenstehende Ausschnitt zeigt, wie die `textbox`-Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Hinzufügen der Rolle im HTML-Code für mehrzeilige Eingabe

Der untenstehende Ausschnitt zeigt, wie die `textbox`-Rolle direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Best Practices

Stellen Sie sicher, dass Sie das Attribut `contenteditable="true"` dem HTML-Element hinzufügen, auf welches diese Rolle angewendet wird. Tun Sie dies auch, wenn Sie `aria-readonly` auf `true` setzen; auf diese Weise kommunizieren Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Siehe auch

- [ARIA: search role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
