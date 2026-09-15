---
title: "ARIA: Rolle tooltip"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: 0091c5e7d19dd48ae2a9236b89159651a19ecee1
---

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, wenn der Mauszeiger darüber bewegt wird oder das Element den Tastaturfokus erhält.

## Beschreibung

Tooltips stellen kontextbezogene Informationen zu einem Element bereit, wenn dieses besitzende Element den Fokus erhält oder mit dem Mauszeiger überfahren wird, sind ansonsten jedoch nicht auf der Seite sichtbar. Der Tooltip wird nach einer kurzen Verzögerung automatisch angezeigt; der Benutzer fordert ihn nicht an. Obwohl ein Tooltip bei beliebigen Inhalten platziert werden kann, sind sie im Allgemeinen Hinweise für Werkzeuge oder Steuerelemente, beispielsweise um zusätzliche Inhalte für Symbole bereitzustellen, die kurze Beschriftungen haben (oder überhaupt keine Beschriftungen, was nicht barrierefrei ist!).

Ein Tooltip wird typischerweise nach einer kurzen Verzögerung von meist ein bis fünf Sekunden als Reaktion auf das Überfahren mit der Maus sichtbar oder nachdem das besitzende Element den Tastaturfokus erhalten hat. Ebenso wie er ohne Anforderung durch den Benutzer automatisch geöffnet wird, wird er auch automatisch geschlossen, wenn der Fokus verloren geht oder wenn der Mauszeiger das Element verlässt. Er muss geöffnet bleiben, wenn der Mauszeiger über den Tooltip selbst bewegt wird, und sollte auch geschlossen werden, wenn der Benutzer die Taste <kbd>Escape</kbd> drückt.

Da der Tooltip selbst niemals den Fokus erhält und nicht in der Tabulatorreihenfolge enthalten ist, darf ein Tooltip keine interaktiven Elemente wie Links, Eingabefelder oder Schaltflächen enthalten.

Der `tooltip` ist nicht die geeignete Rolle für das Symbol „i“ für weitere Informationen, ⓘ. Ein Tooltip ist direkt mit dem besitzenden Element verbunden. `role="tooltip"` wird auf dem Element gesetzt, das den Inhalt des Hinweises enthält, nicht auf dem Symbol oder Steuerelement, das ihn auslöst. Um einen Tooltip anzuzeigen, wenn ⓘ überfahren wird oder den Fokus erhält, geben Sie dem Auslöser einen zugänglichen Namen und verweisen Sie mit `aria-describedby` auf den Tooltip, damit der Hinweisinhalt angekündigt wird, wenn der Auslöser den Fokus erhält. Da die ausführlichen Informationen das zugehörige Steuerelement und nicht ⓘ selbst beschreiben, setzen Sie `aria-describedby` auch auf dieses Steuerelement, wie im [Beispiel für das Symbol für weitere Informationen](#verwendung_eines_symbols_für_weitere_informationen) gezeigt.

Die Verwendung der ARIA-Rolle `tooltip` ergänzt das normale Tooltip-Verhalten des Browsers. Ein Beispiel für einen nativen Browser-Tooltip ist die Art und Weise, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements beim längeren Überfahren mit der Maus anzeigen. Diese Funktion kann weder über den Tastaturfokus noch über Touch-Interaktion aktiviert werden, wodurch sie nicht barrierefrei ist. Wenn die Information wichtig genug ist, um sie als Tooltip oder Titel aufzunehmen, sollten Sie erwägen, sie in sichtbaren Text aufzunehmen.

Elemente mit der Rolle `tooltip` sollten vor oder bei der Anzeige des Tooltips über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden. Das Attribut `aria-describedby` befindet sich auf dem besitzenden Element, nicht auf dem Tooltip.

Der Tooltip wird im Hinblick auf die Eigenschaft [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) des besitzenden Elements nicht als Popup betrachtet. Deshalb wurde in der einleitenden Definition „Textblase“ verwendet.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird die Rolle [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) nicht unterstützt, da sein Erscheinen automatisch erfolgt und nicht absichtlich durch den Benutzer gesteuert wird.

Der zugängliche Name eines Tooltips kann aus seinem Inhalt stammen. Obwohl er theoretisch von einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stammen könnte, wird in den meisten Fällen nicht empfohlen, ARIA-Eigenschaften zu verwenden, um einem Tooltip einen zugänglichen Namen zu geben.

Tooltips liefern zusätzliche Informationen, im Allgemeinen ohne direkte Interaktion mit dem Tooltip selbst. Sie sind im Allgemeinen über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des primären Elements dem Inhalt zugeordnet, den sie beschreiben. Wenn für den Tooltip daher ausdrücklich ein zugänglicher Name festgelegt ist, wird dieser Name als Beschreibung des primären Elements statt des Tooltip-Inhalts bereitgestellt. Das bedeutet, dass der Tooltip-Inhalt von Benutzern von Screenreadern möglicherweise niemals entdeckt wird.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Für das Element, das als Tooltip-Container dient, ist `role="tooltip"` festgelegt.
- Das Element, das den Tooltip auslöst, referenziert das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte beim Fokussieren oder Überfahren des Elements ohne zusätzliche Interaktion erscheinen. Er sollte automatisch verschwinden, wenn der Fokus auf dem besitzenden Element verloren geht oder der Mauszeiger aus dem besitzenden Element und dem Tooltip bewegt wird. Obwohl der Tooltip keinen Fokus erhält, sollte <kbd>Escape</kbd> ihn schließen, falls er geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird über Tastaturfokus und das Entfernen des Fokus sowie durch Mausereignisse – Überfahren und Verlassen mit der Maus – angezeigt und ausgeblendet.

- Der Tooltip erhält niemals den Fokus. Der Fokus bleibt auf dem besitzenden Element.

- Der Tooltip kann mit der Taste <kbd>Escape</kbd> ausgeblendet werden.

- Der Tooltip bleibt geöffnet, wenn er überfahren wird.

- Der Tooltip wird nur über JavaScript und CSS-Selektoren ausgeblendet. Wenn JavaScript nicht verfügbar ist, wird der Tooltip angezeigt.

## Beispiele

### Verwendung eines Tooltips

```html
<label for="password">Password:</label>
<input aria-describedby="passwordrules" id="password" type="password" />
<div role="tooltip" id="passwordrules">
  <p>Password Rules:</p>
  <ul>
    <li>Minimum of 8 characters</li>
    <li>
      Include at least one lowercase letter, one uppercase letter, one number
      and one special character
    </li>
    <li>Unique to this website</li>
  </ul>
</div>
```

Der Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript in eine Klasse, die den Tooltip ausblendet, wenn der Benutzer die Taste <kbd>Escape</kbd> drückt.

```css
[role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: black;
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  /* Give some time before hiding so mouse can exit the input
  and enter the tooltip */
  transition: visibility 0.5s;
}
[aria-describedby]:hover,
[aria-describedby]:focus {
  position: relative;
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"],
[role="tooltip"]:hover,
[role="tooltip"]:focus {
  visibility: visible;
}
```

{{EmbedLiveSample("using_a_tooltip", "", 300)}}

Oben wird der Tooltip im Standardzustand oder, falls die Klasse `hide-tooltip` mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> gedrückt hat), mit CSS ausgeblendet. Die hohe Spezifität stellt sicher, dass der Tooltip nicht angezeigt wird. Wenn das besitzende Element den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar. Wir halten den Tooltip sichtbar, wenn der Mauszeiger über den Tooltip bewegt wird, entsprechend [WCAG 1.4.13](#hinweise_zur_barrierefreiheit). Hier ermöglichen wir es dem Mauszeiger, vom Eingabefeld zum Tooltip zu wechseln, ohne dass dieser verschwindet, indem wir dazwischen 0,5 s warten. Es gibt andere Möglichkeiten, dies zu erreichen, etwa indem die Lücke mit einem transparenten Element gefüllt wird, das den Tooltip ebenfalls sichtbar hält, wenn es überfahren wird.

### Verwendung eines Symbols für weitere Informationen

Dieses Beispiel zeigt einen Tooltip, wenn die Schaltfläche ⓘ überfahren wird oder den Tastaturfokus erhält. Die Schaltfläche hat einen {{Glossary("accessible_name", "zugänglichen Namen")}} und referenziert den Tooltip mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), sodass der Tooltip-Inhalt angekündigt wird, wenn die Schaltfläche den Fokus erhält. Das Eingabefeld referenziert den Tooltip ebenfalls mit `aria-describedby`, weil die Information dieses Steuerelement beschreibt, auch wenn der Tooltip ausgeblendet ist.

```html
<label for="username">Username:</label>
<input id="username" aria-describedby="username-help" />
<div class="info">
  <button
    type="button"
    aria-label="More information about usernames"
    aria-describedby="username-help">
    <span aria-hidden="true">ⓘ</span>
  </button>
  <div role="tooltip" id="username-help">
    <p>Your username is displayed publicly alongside your comments.</p>
  </div>
</div>
```

Der Tooltip wird unterhalb des Symbols positioniert. Ein Abstand oberhalb der Textblase überbrückt die Lücke zur Schaltfläche, sodass der Mauszeiger auf den Tooltip bewegt werden kann, ohne ihn zu schließen.

```css
.info {
  display: inline-block;
  position: relative;
}

[role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 100%;
  right: 0;
  width: 15rem;
  padding-top: 0.5rem;
  z-index: 1;
}

.info:hover [role="tooltip"],
.info:focus-within [role="tooltip"] {
  visibility: visible;
}

[role="tooltip"] p {
  margin: 0;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background: #222;
  color: white;
  box-shadow: 0 2px 6px #0004;
}

[role="tooltip"]::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0.5rem;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid #222;
  border-left: 0.5rem solid transparent;
}
```

Der Tooltip bleibt sichtbar, während die Schaltfläche den Fokus hat oder sich der Mauszeiger über der Schaltfläche oder dem Tooltip befindet. Er wird ausgeblendet, wenn keine der beiden Bedingungen zutrifft.

{{EmbedLiveSample("using_a_more_information_icon", "", 200)}}

## Hinweise zur Barrierefreiheit

Wenn die Information wichtig genug für einen Tooltip ist, ist sie dann nicht auch wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss beim Überfahren geöffnet bleiben, selbst wenn das technisch bedeutet, dass die Maus das besitzende Element verlässt. Da Inhalte, die beim Überfahren erscheinen, schwer oder gar nicht wahrgenommen werden können, wenn ein Benutzer den Mauszeiger über dem Auslöser halten muss, legt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) fest, dass sichtbar gemachte Inhalte beständig sein sollten. Das bedeutet, dass sie nicht ohne Benutzeraktion verschwinden sollten.

## Bewährte Verfahren

Anstatt Tooltips zu verwenden und wichtige Informationen auszublenden, sollten Sie klare, prägnante und stets sichtbare Beschreibungen verfassen. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggletips. Stellen Sie einfach klare Beschriftungen und ausreichend Fließtext bereit.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die Rolle `dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: Pseudoklasse `:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [SC 1.4.13 verstehen: Inhalte beim Überfahren oder Fokussieren (WCAG-Stufe AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
