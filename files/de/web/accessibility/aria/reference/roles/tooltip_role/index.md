---
title: "ARIA: tooltip-Rolle"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

Ein `tooltip` ist eine kontextuelle Textblase, die eine Beschreibung für ein Element anzeigt, die beim Überfahren mit dem Mauszeiger oder beim Fokussieren mit der Tastatur erscheint.

## Beschreibung

Tooltips bieten kontextuelle Informationen über ein Element, wenn das besitzende Element fokussiert wird oder wenn es mit der Maus überfahren wird. Sie sind ansonsten nicht auf der Seite sichtbar. Der Tooltip wird automatisch nach einer kurzen Verzögerung angezeigt; der Benutzer fordert ihn nicht an. Auch wenn ein Tooltip an jedem beliebigen Inhalt platziert werden kann, handelt es sich in der Regel um Tipps für Werkzeuge oder Bedienelemente, die zusätzlichen Inhalt für Symbole liefern, die kurze oder keine Beschriftungen haben (was nicht barrierefrei ist!).

Ein Tooltip wird typischerweise sichtbar, nachdem eine kurze Verzögerung von in der Regel einer bis fünf Sekunden vergangen ist, als Reaktion auf einen Mausüberflug oder wenn das besitzende Element den Tastaturfokus erhält. Genau wie er automatisch, ohne Benutzeranforderung geöffnet wird, wird er automatisch geschlossen, wenn der Fokus verloren geht oder bei Mausaus. Er muss geöffnet bleiben, wenn die Maus über den Tooltip selbst bewegt wird, und sollte auch geschlossen werden, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da der Tooltip selbst nie den Fokus erhält und nicht in der Tab-Reihenfolge ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Der Tooltip ist nicht die geeignete Rolle für das Mehr-Informationen-„i“-Symbol, ⓘ. Ein Tooltip ist direkt mit dem besitzenden Element verbunden. Das ⓘ wird nicht von detaillierten Informationen 'beschrieben'; das Werkzeug oder die Steuerung ist es.

Der Einsatz der ARIA-`tooltip`-Rolle ergänzt das normale Tooltip-Verhalten des Browsers. Ein Beispiel für einen nativen Browser-Tooltip ist die Art und Weise, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements bei langem Mausüberflug anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Berührungsinteraktion aktiviert werden, wodurch diese Funktion unzugänglich wird. Wenn die Information wichtig genug ist, um sie als Tooltip oder Titel einzuschließen, sollte sie in sichtbarem Text enthalten sein.

Elemente mit der `tooltip`-Rolle sollten vor oder wenn der Tooltip angezeigt wird, durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden. Das `aria-describedby`-Attribut befindet sich auf dem besitzenden Element, nicht auf dem Tooltip.

Der Tooltip wird in Bezug auf die [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Eigenschaft auf dem besitzenden Element nicht als Popup angesehen, weshalb wir im einleitenden Abschnitt den Begriff "Textblase" verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Rolle nicht unterstützt, da sein Erscheinen automatisch und nicht absichtlich vom Benutzer gesteuert wird.

Der zugängliche Name eines Tooltips kann aus den Inhalten stammen. Während sie theoretisch von einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stammen könnten, wird in den meisten Fällen nicht empfohlen, ARIA-Eigenschaften zu verwenden, um einem Tooltip einen zugänglichen Namen zu geben.

Tooltips bieten zusätzliche Informationen in der Regel ohne direkte Interaktion auf dem Tooltip selbst. Sie sind in der Regel mit dem Inhalt, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des primären Elements verbunden. Wenn der Tooltip also einen explizit gesetzten zugänglichen Namen hat, wird dieser Name als Beschreibung des primären Elements und nicht der Inhalt des Tooltips offengelegt, was bedeutet, dass die Tooltip-Inhalte von einem Screenreader-Benutzer möglicherweise nie entdeckt werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, referenziert das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte bei Fokus oder wenn das Element überfahren wird, ohne zusätzliche Interaktion erscheinen. Er sollte automatisch verschwinden, wenn der Fokus auf das besitzende Element verloren geht oder die Maus aus dem Bereich des besitzenden Elements und des Tooltips herausbewegt wird. Während der Tooltip keinen Fokus erhält, sollte er mit <kbd>Escape</kbd> geschlossen werden, wenn er geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird durch Tastaturfokus und Entfernung des Fokus sowie durch Mausereignisse - Überfahren mit der Maus und Herausgehen mit der Maus - angezeigt und verschwindet wieder.

- Der Tooltip erhält nie den Fokus. Der Fokus bleibt auf dem besitzenden Element.

- Der Tooltip kann mit der <kbd>Escape</kbd>-Taste verborgen werden

- Der Tooltip bleibt offen, wenn man ihn überfährt

- Der Tooltip wird nur über JavaScript und CSS-Selektoren verborgen. Wenn JavaScript nicht verfügbar ist, wird der Tooltip angezeigt.

## Beispiele

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

Der Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript in eine Klasse, die den Tooltip verbirgt, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

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

{{EmbedLiveSample("examples", "", 300)}}

Das obige Beispiel verbirgt den Tooltip mit CSS im Standardzustand oder wenn die `hide-tooltip`-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> drückt), mit hoher Spezifität, um sicherzustellen, dass der Tooltip nicht angezeigt wird. Wenn das besitzende Element den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar. Wir halten den Tooltip sichtbar, wenn man über den Tooltip fährt, im Einklang mit [WCAG 1.4.13](#barrierefreiheit). Hier erlauben wir dem Cursor, sich vom Eingabefeld zum Tooltip zu bewegen, ohne dass Letzterer verschwindet, indem wir 0,5 s dazwischen warten; es gibt auch andere Möglichkeiten, dies zu erreichen, wie z.B. das Füllen der Lücke mit einem transparenten Element, das den Tooltip ebenfalls sichtbar hält, wenn man darüber fährt.

## Barrierefreiheit

Wenn die Information wichtig genug für einen Tooltip ist, ist sie dann nicht wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss geöffnet bleiben, wenn man darüber fährt, selbst wenn das technisch bedeutet, dass die Maus das besitzende Element verlässt. Da Inhalte, die bei Hover erscheinen, schwer oder unmöglich wahrnehmbar sind, wenn ein Benutzer den Mauszeiger über dem Auslöser halten muss, sagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachte Inhalte persistent sein sollten, was bedeutet, dass sie nicht ohne Benutzerinteraktion verschwinden sollten.

## Best Practices

Anstatt Tooltips zu verwenden und wichtige Informationen zu verstecken, sollten Sie klare, prägnante und immer sichtbare Beschreibungen schreiben. Wenn ausreichend Platz vorhanden ist, sollten Sie keine Tooltips oder Toggletips verwenden. Bieten Sie stattdessen klare Beschriftungen und genügend Fließtext.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Understanding SC 1.4.13:Content on Hover or Focus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
