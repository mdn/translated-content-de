---
title: "ARIA: `tooltip` Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Ein `tooltip` ist eine kontextuelle Textblase, die eine Beschreibung für ein Element anzeigt, das bei Zeigerhover oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen zu einem Element, wenn dieses Element den Fokus erhält oder darübergefahren wird, sind jedoch ansonsten nicht auf der Seite sichtbar. Das Tooltip wird automatisch nach einer kurzen Verzögerung angezeigt; der Benutzer fordert es nicht an. Während ein Tooltip auf jedem Inhalt platziert werden kann, sind sie im Allgemeinen Tipps für Werkzeuge oder Bedienelemente, wie z.B. zusätzliche Inhalte für Symbole, die kurze Beschriftungen haben (oder überhaupt keine, was nicht barrierefrei ist!).

Ein Tooltip wird typischerweise sichtbar, nachdem eine kurze Verzögerung von in der Regel ein bis fünf Sekunden in Reaktion auf ein Maus-Hover oder nachdem das besitzende Element den Tastaturfokus erhält. Genau wie es automatisch geöffnet wird, ohne Benutzeranfrage, schließt es auch automatisch, wenn der Fokus verloren geht oder die Maus wegbewegt wird. Es muss geöffnet bleiben, wenn die Maus über das Tooltip selbst bewegt wird, und sollte auch geschlossen werden, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da das Tooltip selbst nie den Fokus erhält und nicht in der Tabulatorreihenfolge ist, darf ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Das Tooltip ist nicht die geeignete Rolle für das "Mehr Informationen"-Icon, ⓘ. Ein Tooltip ist direkt mit dem besitzenden Element verbunden. Das ⓘ wird nicht durch detaillierte Informationen "beschrieben"; das Werkzeug oder Steuerungselement wird beschrieben.

Der Einsatz der ARIA `tooltip` Rolle ist eine Ergänzung zum normalen Tooltip-Verhalten des Browsers. Ein Beispiel für ein natives Tooltip des Browsers ist die Art und Weise, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) eines Elements bei langem Maus-Hover anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Berührungsinteraktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Information wichtig genug ist, um als Tooltip oder Titel aufgenommen zu werden, sollten Sie in Erwägung ziehen, sie in sichtbaren Text aufzunehmen.

Elemente mit der `tooltip` Rolle sollten vor oder beim Anzeigen des Tooltips durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden. Das `aria-describedby`-Attribut steht auf dem besitzenden Element, nicht auf dem Tooltip.

Das Tooltip wird nicht als Popup im Sinne der [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Eigenschaft auf dem besitzenden Element betrachtet, weshalb wir in der einleitenden Definition von "Textblase" sprachen.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Rolle nicht unterstützt, da ihr Erscheinungsbild automatisch und nicht absichtlich vom Benutzer gesteuert wird.

Der zugängliche Name eines Tooltips kann aus dem Inhalt stammen. Auch wenn sie theoretisch von einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) kommen könnten, wird in den meisten Fällen nicht empfohlen, ARIA-Eigenschaften zu verwenden, um einem Tooltip einen zugänglichen Namen zu geben.

Tooltips bieten zusätzliche Informationen, im Allgemeinen, ohne direkte Interaktion auf dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt verbunden, den sie über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des Hauptelements definieren. Daher, wenn das Tooltip einen explizit gesetzten zugänglichen Namen hat, wird dieser Name als Beschreibung des Hauptelements statt des Inhalts des Tooltips exponiert, was bedeutet, dass die Tooltip-Inhalte von einem Screenreader-Benutzer möglicherweise nie entdeckt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das das Tooltip auslöst, verweist mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf das Tooltip-Element.

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt das Tooltip

Das Tooltip sollte beim Fokus oder wenn das Element überfahren wird, ohne zusätzliche Interaktion erscheinen. Es sollte automatisch verschwinden, wenn der Fokus auf dem besitzenden Element verloren geht oder die Maus außerhalb des besitzenden Elements und des Tooltips bewegt wird. Obwohl das Tooltip keinen Fokus erhält, sollte es geschlossen werden, wenn die <kbd>Escape</kbd>-Taste gedrückt wird und es geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Das Tooltip wird durch Tastaturfokus und Fokusentfernung sowie durch Mausereignisse - Überfahren und Wegbewegen - angezeigt und verschwindet.

- Das Tooltip erhält nie den Fokus. Der Fokus bleibt auf dem besitzenden Element.

- Das Tooltip kann mit der <kbd>Escape</kbd>-Taste verborgen werden.

- Das Tooltip bleibt beim Überfahren offen.

- Das Tooltip wird nur über JavaScript und CSS-Selektoren verborgen. Wenn JavaScript nicht verfügbar ist, wird das Tooltip angezeigt.

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

Das Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript in eine Klasse, die das Tooltip versteckt, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

```css
[role="tooltip"],
.hide-tooltip.hide-tooltip.hide-tooltip + [role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: black;
  color: white;
}
[aria-describedby]:hover,
[aria-describedby]:focus {
  position: relative;
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"] {
  visibility: visible;
}
```

Oben wird das Tooltip im Standardzustand oder wenn die `hide-tooltip`-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt) mit CSS versteckt, mit hoher Spezifität, um sicherzustellen, dass das Tooltip nicht angezeigt wird. Wenn das besitzende Element den Fokus erhält, wird es relativ positioniert und das Tooltip wird sichtbar.

## Barrierefreiheitsbedenken

Wenn die Informationen wichtig genug für einen Tooltip sind, sind sie dann nicht wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss beim Überfahren offen bleiben, auch wenn das technisch bedeutet, dass die Maus aus dem besitzenden Element herausbewegt wird. Da Inhalt, der bei Hover erscheint, schwer oder unmöglich wahrzunehmen sein kann, wenn ein Benutzer gezwungen ist, den Mauszeiger über dem Auslöser zu halten, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachter Inhalt persistent sein sollte, d.h., er sollte nicht ohne Benutzeraktion verschwinden.

## Beste Praktiken

Statt Tooltips zu verwenden und wichtige Informationen zu verbergen, ziehen Sie in Betracht, klare, prägnante, immer sichtbare Beschreibungen zu schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggle-Tipps. Stellen Sie einfach klare Beschriftungen und ausreichend begleitenden Text bereit.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Understanding SC 1.4.13:Content on Hover or Focus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
