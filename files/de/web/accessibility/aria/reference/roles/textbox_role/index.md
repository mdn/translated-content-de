---
title: "ARIA: Rolle textbox"
short-title: textbox
slug: Web/Accessibility/ARIA/Reference/Roles/textbox_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `textbox` kennzeichnet ein Element, das die Eingabe von Freitext ermöglicht. Verwenden Sie nach Möglichkeit statt dieser Rolle ein {{HTMLElement("input")}}-Element mit [type="text"](/de/docs/Web/HTML/Reference/Elements/input/text) für einzeilige Eingaben oder ein {{HTMLElement("textarea")}}-Element für mehrzeilige Eingaben.

## Beschreibung

Wenn ein Element die Rolle `textbox` hat, sendet der Browser ein Ereignis für ein zugängliches Textfeld an assistive Technologien. Diese können den Benutzer darauf hinweisen.

Standardmäßig ist ein Textfeld einzeilig; mit <kbd>Return</kbd> oder <kbd>Enter</kbd> wird das Formular abgesendet. In diesem Fall ist ein HTML-{{HTMLElement("input")}}-Element mit `type="text"` vorzuziehen. Um ein mehrzeiliges Textfeld mit Zeilenumbrüchen zu erstellen, wie bei einem HTML-{{HTMLElement("textarea")}}-Element, setzen Sie `aria-multiline="true"`. Das HTML-Attribut `contenteditable` sorgt dafür, dass der Textinhalt bearbeitbar ist.

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

Semantische Elemente sind kompakter und benötigen kein JavaScript, um Textfeldfunktionen bereitzustellen.

```html
<label for="txtbox">Enter your five-digit zip code</label>
<input type="text" placeholder="5-digit zip code" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Wenn ein Textfeld schreibgeschützt ist, kennzeichnen Sie dies, indem Sie `aria-readonly="true"` für das Element setzen.

### Zugehörige ARIA-Eigenschaften

- Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Sein Wert ist die ID eines Elements, das entweder ein Nachfahre des Elements mit DOM-Fokus oder gemäß dem Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) ein logischer Nachfahre ist. Das Attribut gibt an, welches Element innerhalb eines zusammengesetzten Widgets wie einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) aktiv ist. Beispielsweise kann bei einer Combobox der Fokus auf dem Textfeld bleiben, während `aria-activedescendant` auf dem Textfeldelement auf einen Nachfahren einer vom Textfeld gesteuerten Popup-Listbox verweist. Dieses Attribut muss bei Änderungen des aktiven Elements programmatisch aktualisiert werden.
- Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
  - : Gibt an, ob und wie die Eingabe des Benutzers in das Feld die Anzeige eines Vorschlags für den beabsichtigten Wert auslösen kann. Folgende Werte werden unterstützt:
    - `inline`: Vorgeschlagener Text wird hinter der Einfügemarke eingefügt.
    - `list`: Vorgeschlagener Text wird als Liste von Werten angezeigt.
    - `both`: Vorgeschlagener Text wird als Liste von Werten angezeigt; der zum Vervollständigen eines Werts benötigte Text wird hinter der Einfügemarke eingefügt.
    - `none` (Standardwert): Es wird kein vorgeschlagener Text angeboten.

    Wenn `list` oder `both` gesetzt ist, sollten auch die Attribute [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) und [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) vorhanden sein. Der Wert von `aria-controls` ist die ID des Elements, das die Liste der vorgeschlagenen Werte enthält. Außerdem muss entweder das Textfeld oder ein umgebendes Element mit der Rolle `combobox` einen Wert für `aria-haspopup` haben, der der Rolle des Elements mit der Vorschlagsliste entspricht.

- Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
  - : Wenn `aria-multiline="true"` gesetzt ist, informiert die assistive Technologie den Benutzer darüber, dass das Textfeld mehrzeilige Eingaben unterstützt. Es wird erwartet, dass <kbd>Enter</kbd> oder <kbd>Return</kbd> einen Zeilenumbruch erzeugt, statt das Formular abzusenden. ARIA ändert das Verhalten des Elements nicht; diese Funktion muss von Entwicklern implementiert werden. Wenn `false` gesetzt ist oder das Attribut fehlt und damit standardmäßig `false` gilt, erwartet der Benutzer ein einzeiliges Textfeld, bei dem <kbd>Enter</kbd> oder <kbd>Return</kbd> das Formular absendet.

- Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
  - : Stellt dem Benutzer einen Hinweis (ein Wort oder eine Formulierung) dazu bereit, was in das Textfeld eingegeben werden soll. Der Hinweis sollte ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein. Diese Information darf eine Beschriftung nicht ersetzen: Eine Beschriftung kann fokussiert werden, bleibt dauerhaft sichtbar, gibt an, welche Art von Information erwartet wird, und vergrößert die anklickbare Fläche zum Fokussieren des Steuerelements. Platzhaltertext ist dagegen nur ein vorübergehender Hinweis auf den erwarteten Wert und kann bei falscher Umsetzung die Barrierefreiheit beeinträchtigen. Der Platzhalter sollte sichtbar sein, wenn der Wert des Steuerelements eine leere Zeichenfolge ist, etwa wenn das Steuerelement erstmals den Fokus erhält oder Benutzer einen zuvor eingegebenen Wert entfernen. Verwenden Sie statt `aria-placeholder` ein semantisches `<input type="text">`- oder `<textarea>`-Element mit dem Attribut `placeholder`.
- Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
  - : Gibt an, dass der Benutzer den Wert des Textfelds nicht ändern kann. Verwenden Sie statt `aria-readonly` ein semantisches `<input type="text">`- oder `<textarea>`-Element mit dem Attribut `readonly`.
- Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
  - : Gibt an, dass für das Feld vor dem Absenden ein Wert angegeben werden muss. Verwenden Sie statt `aria-required` ein semantisches `<input type="text">`- oder `<textarea>`-Element mit dem Attribut `required`.

### Tastaturinteraktionen

Bei einzeiliger Verwendung (wenn `aria-multiline` den Wert `false` hat oder nicht verwendet wird) wird das Formular mit der Return- oder Enter-Taste abgesendet. Bei mehrzeiliger Verwendung (wenn `aria-multiline` den Wert `true` hat) fügt die Return- oder Enter-Taste einen Zeilenumbruch ein.

### JavaScript-Funktionen

Alle Funktionen, die mit den jeweiligen Eigenschaften und Zuständen verbunden sind, müssen gewährleistet sein. Bei einem einzeiligen Textfeld muss außerdem das Absenden des Formulars mit Enter oder Return implementiert werden.

- Fokus-Event-Handler und Attribut `aria-activedescendant`
  - : Wenn Sie ein zusammengesetztes Widget implementieren, beispielsweise eine Combobox aus einem Textfeld und einer Listbox, müssen Sie das Attribut `aria-activedescendant` mithilfe eines Event-Handlers verwalten. Bevor Sie diese Technik verwenden, stellen Sie sicher, dass die Browser, die Sie unterstützen müssen, sie derzeit unterstützen. Weitere Informationen finden Sie in der [Spezifikation von aria-activedescendant](https://w3c.github.io/aria/#aria-activedescendant).

> [!NOTE]
> Es empfiehlt sich, statt der ARIA-Rolle `textbox` ein {{HTMLElement("input")}}-Element mit type="text" oder ein {{HTMLElement("textarea")}}-Element zu verwenden. Bei beiden semantischen Elementen ist die ARIA-Rolle `textbox` nicht erforderlich. Siehe [Hinweise zur Verwendung von ARIA in HTML](https://w3c.github.io/using-aria/).

## Mögliche Auswirkungen auf User Agents und assistive Technologien

Wenn einem Element die Rolle `textbox` hinzugefügt wird oder ein solches Element sichtbar wird, sollte der User Agent Folgendes tun:

- Das Element in der Barrierefreiheits-API des Betriebssystems mit der Rolle `textbox` bereitstellen.
- Über die Barrierefreiheits-API des Betriebssystems ein Ereignis für ein zugängliches Textfeld auslösen, sofern die API dies unterstützt.

Assistive Technologien sollten auf ein solches Ereignis reagieren und den Benutzer entsprechend informieren:

- Screenreader sollten die Beschriftung und Rolle ansagen, wenn ein Textfeld erstmals den Fokus erhält. Wenn es bereits Inhalt enthält, sollte dieser wie bei einem gewöhnlichen Textfeld ebenfalls angesagt werden.
- Bildschirmvergrößerungsprogramme können das Textfeld vergrößern.

> [!NOTE]
> Die Meinungen darüber, wie assistive Technologien mit dieser Technik umgehen sollten, können auseinandergehen. Die obigen Angaben geben eine dieser Auffassungen wieder; in der Praxis kann sich das Verhalten unterscheiden.

## Bewährte Vorgehensweisen

Fügen Sie dem HTML-Element, dem diese Rolle zugewiesen wird, unbedingt das Attribut `contenteditable="true"` hinzu. Tun Sie dies auch dann, wenn Sie `aria-readonly` auf `true` setzen. So vermitteln Sie, dass der Inhalt bearbeitbar wäre, wenn er nicht schreibgeschützt wäre.

## Beispiele

### Beispiel 1: Die Rolle für einzeilige Eingaben im HTML-Code hinzufügen

Der folgende Ausschnitt zeigt, wie die Rolle `textbox` direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true"></div>
```

### Beispiel 2: Die Rolle für mehrzeilige Eingaben im HTML-Code hinzufügen

Der folgende Ausschnitt zeigt, wie die Rolle `textbox` direkt im HTML-Quellcode hinzugefügt wird.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Siehe auch

- [ARIA: Rolle `search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
