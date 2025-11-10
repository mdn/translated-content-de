---
title: "ARIA: tooltip-Rolle"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Ein `tooltip` ist ein kontextbezogenes Textfeld, das eine Beschreibung eines Elements anzeigt, die bei Zeigerhover oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen über ein Element, wenn dieses Element den Fokus erhält oder darübergefahren wird, sind aber ansonsten nicht sichtbar auf der Seite. Der Tooltip wird automatisch nach einer kurzen Verzögerung angezeigt; der Benutzer fordert ihn nicht an. Während ein Tooltip auf jedem Inhalt platziert werden kann, sind sie im Allgemeinen Tipps für Werkzeuge oder Steuerungen, wie das Anbieten zusätzlicher Inhalte für Symbole, die kurze Beschriftungen haben (oder gar keine Beschriftungen, was nicht zugänglich ist!).

Ein Tooltip wird typischerweise nach einer kurzen Verzögerung von in der Regel ein bis fünf Sekunden in Reaktion auf einen Maushover sichtbar oder nachdem das Eigentümer-Element den Tastaturfokus erhält. Ebenso wie er automatisch geöffnet wird, ohne Benutzeranforderung, wird er automatisch geschlossen, wenn der Fokus verloren geht oder die Maus herausgeht. Er muss offen bleiben, wenn die Maus sich über den Tooltip selbst bewegt, und sollte auch schließen, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da der Tooltip selbst niemals den Fokus erhält und nicht in der Tabreihenfolge enthalten ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Der Tooltip ist nicht die geeignete Rolle für das "i für mehr Informationen"-Symbol, ⓘ. Ein Tooltip ist direkt mit dem Eigentümer-Element verbunden. Das ⓘ wird nicht von detaillierten Informationen "beschrieben"; das Werkzeug oder die Steuerung wird es.

Die Verwendung der ARIA `tooltip`-Rolle ist eine Ergänzung zum normalen Browser-Tooltip-Verhalten. Ein Beispiel für einen nativen Browser-Tooltip ist die Art und Weise, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements bei langem Maushover anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Touch-Interaktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Information wichtig genug ist, um als Tooltip oder Titel eingeschlossen zu werden, ziehen Sie in Betracht, sie als sichtbaren Text einzubinden.

Elemente mit der `tooltip`-Rolle sollten durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden, bevor oder wenn der Tooltip angezeigt wird. Das `aria-describedby`-Attribut befindet sich auf dem Eigentümer-Element, nicht auf dem Tooltip.

Der Tooltip wird nicht als Popup im Sinne der [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Eigenschaft auf dem Eigentümer-Element angesehen, weshalb wir in der einleitenden Definition "Textfeld" verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, da sein Erscheinen automatisch und nicht absichtlich vom Benutzer gesteuert wird, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Rolle nicht unterstützt.

Der zugängliche Name eines Tooltips kann aus den Inhalten kommen. Während sie theoretisch von einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) kommen könnten, wird in den meisten Fällen die Verwendung von ARIA-Eigenschaften, um einem Tooltip einen zugänglichen Namen zu geben, nicht empfohlen.

Tooltips bieten zusätzliche Informationen, in der Regel ohne direkte Interaktion mit dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt verbunden, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des primären Elements. Wenn der Tooltip also einen explizit festgelegten zugänglichen Namen hat, wird dieser Name als Beschreibung des primären Elements offenbart, statt des Inhalts des Tooltips, was bedeutet, dass der Tooltip-Inhalt von Benutzern von Bildschirmlesern möglicherweise niemals entdeckt wird.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, verweist mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf das Tooltip-Element.

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte bei Fokus oder wenn das Element überfahren wird, ohne zusätzliche Interaktion erscheinen. Er sollte automatisch verschwinden, wenn der Fokus auf dem Eigentümer-Element verloren geht oder die Maus außerhalb des Eigentümer-Elements und des Tooltips bewegt wird. Während der Tooltip den Fokus nicht erhält, sollte die <kbd>Escape</kbd>-Taste ihn schließen, wenn er offen ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird angezeigt und verschwindet durch Tastaturfokus und Entfernen des Fokus sowie durch die Mausereignisse - Überfahren mit der Maus und Herausbewegen der Maus.

- Der Tooltip erhält niemals den Fokus. Der Fokus bleibt auf dem Eigentümer-Element.

- Der Tooltip kann mit der <kbd>Escape</kbd>-Taste ausgeblendet werden.

- Der Tooltip bleibt offen, wenn er angefahren wird.

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

Der Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript in eine Klasse, die den Tooltip ausblendet, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

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

Das oben genannte blendet den Tooltip mit CSS im Standardzustand oder wenn die `hide-tooltip`-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> drückt), mit hoher Spezifizität aus, um sicherzustellen, dass der Tooltip nicht angezeigt wird. Wenn das Eigentümer-Element den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar. Wir halten den Tooltip sichtbar, wenn der Mauszeiger über den Tooltip fährt, was der [WCAG 1.4.13](#barrierefreiheitsaspekte) entspricht. Hier erlauben wir dem Cursor, sich von der Eingabe zum Tooltip zu bewegen, ohne dass letzterer verschwindet, indem wir 0,5 Sekunden dazwischen warten; es gibt andere Möglichkeiten, dies zu erreichen, wie das Füllen der Lücke mit einem transparenten Element, das den Tooltip sichtbar hält, wenn es angefahren wird.

## Barrierefreiheitsaspekte

Wenn die Information wichtig genug ist für einen Tooltip, ist sie nicht wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss offen bleiben, wenn er angefahren wird, auch wenn das technisch bedeutet, dass die Maus das Eigentümer-Element verlässt. Da Inhalte, die beim Hover erscheinen, schwer oder unmöglich zu sehen sein können, wenn ein Benutzer seinen Mauszeiger über dem Auslöser halten muss, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbargemachte Inhalte persistent sein sollten, das bedeutet, dass sie nicht ohne Benutzeraktion verschwinden sollten.

## Beste Praktiken

Anstatt Tooltips zu verwenden und wichtige Informationen zu verbergen, ziehen Sie in Betracht, klare, prägnante, immer sichtbare Beschreibungen zu schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggles. Stellen Sie einfach klare Beschriftungen und ausreichenden Text bereit.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: `:focus`-Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Verständnis von SC 1.4.13: Inhalt beim Hover oder Fokus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
