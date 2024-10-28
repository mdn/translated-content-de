---
title: "ARIA: `tooltip`-Rolle"
slug: Web/Accessibility/ARIA/Roles/tooltip_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, die bei Zeiger-Hover oder Tastaturfokus erscheint.

## Beschreibung

Tooltips liefern kontextbezogene Informationen über ein Element, wenn dieses Element den Fokus erhält oder mit der Maus berührt wird, sind sonst aber nicht auf der Seite sichtbar. Das Tooltip wird automatisch, nach einer kurzen Verzögerung, angezeigt; der Benutzer fordert es nicht an. Während ein Tooltip auf beliebigen Inhalten platziert werden kann, sind sie im Allgemeinen Hinweise für Werkzeuge oder Steuerelemente, wie das Bereitstellen zusätzlicher Inhalte für Symbole, die kurze Beschriftungen haben (oder gar keine, was nicht barrierefrei ist!).

Ein Tooltip wird typischerweise sichtbar, nachdem eine kurze Verzögerung von normalerweise einer bis fünf Sekunden, als Reaktion auf einen Maus-Hover oder nachdem das Eigentümerelement den Tastaturfokus erhält. Genauso wie es ohne Benutzeranforderung automatisch geöffnet wird, wird es automatisch geschlossen, wenn der Fokus verloren geht oder die Maus hinausgeht. Es muss offen bleiben, wenn die Maus über das Tooltip selbst bewegt wird und sollte auch geschlossen werden, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da das Tooltip selbst nie den Fokus erhält und nicht in der Tabulator-Reihenfolge ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Die `tooltip`-Rolle ist nicht die geeignete Rolle für das "i"-Symbol für weitere Informationen, ⓘ. Ein Tooltip ist direkt mit dem Eigentümerelement verknüpft. Das ⓘ wird nicht durch detaillierte Informationen "beschrieben"; das Werkzeug oder die Steuerung ist es.

Der Einsatz der ARIA `tooltip`-Rolle ist eine Ergänzung zum normalen Tooltip-Verhalten des Browsers. Ein Beispiel für ein natives Browser-Tooltip ist die Art, wie einige Browser ein Element ohne `title`-Attribut anzeigen bei langem Maus-Hover. Diese Funktion kann weder durch Tastaturfokus noch durch Berührung aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Information wichtig genug ist, um als Tooltip oder Titel enthalten zu werden, sollten Sie erwägen, sie im sichtbaren Text einzubinden.

Elemente mit der `tooltip`-Rolle sollten durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) referenziert werden, bevor oder wenn das Tooltip angezeigt wird. Das `aria-describedby`-Attribut ist auf dem Eigentümerelement, nicht auf dem Tooltip.

Das Tooltip wird nicht als Popup im Sinne der [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Eigenschaft auf dem Eigentümerelement betrachtet, weshalb wir "Textblase" in der einleitenden Definition verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann und sein Erscheinen automatisch ist und nicht absichtlich vom Benutzer kontrolliert wird, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Rolle nicht unterstützt.

Der zugängliche Name eines Tooltips kann aus dem Inhalt stammen. Während sie theoretisch aus einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) stammen könnten, wird in den meisten Fällen die Verwendung von ARIA-Eigenschaften, um einem Tooltip einen zugänglichen Namen zu geben, nicht empfohlen.

Tooltips bieten zusätzliche Informationen, in der Regel ohne direkte Interaktion mit dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt verknüpft, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) mit der `id` des Hauptelements. Daher, wenn dem Tooltip ein explizit festgelegter zugänglicher Name gegeben wird, wird dieser Name als Beschreibung des Hauptelements exponiert, anstatt des Inhalts des Tooltips, was bedeutet, dass der Tooltip-Inhalt möglicherweise nie von einem Screenreader-Benutzer entdeckt werden kann.

### Zugehörige WAI-ARIA-Rollen, -Status und -Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das das Tooltip auslöst, verweist auf das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt das Tooltip

Das Tooltip sollte bei Fokus oder bei Hover über das Element erscheinen, ohne zusätzliche Interaktion. Es sollte automatisch verschwinden, wenn der Fokus auf das Eigentümerelement verloren geht oder die Maus außerhalb des Eigentümerelements und des Tooltips bewegt wird. Während das Tooltip keinen Fokus erhält, sollte <kbd>Escape</kbd> es schließen, wenn es geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Das Tooltip wird über den Tastaturfokus und die Entfernung des Fokus und durch Mausereignisse angezeigt und verschwindet - Überfahren mit der Maus und Herausfahren mit der Maus.

- Das Tooltip erhält nie den Fokus. Der Fokus bleibt auf dem Eigentümerelement.

- Das Tooltip kann mit der <kbd>Escape</kbd>-Taste ausgeblendet werden

- Das Tooltip bleibt offen, wenn es überfahren wird

- Das Tooltip wird nur über JavaScript und CSS-Selektoren ausgeblendet. Wenn JavaScript nicht verfügbar ist, wird das Tooltip angezeigt.

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

Das Obige versteckt das Tooltip mit CSS im Standardzustand oder wenn die `hide-tooltip`-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> drückt), mit hoher Spezifität, um sicherzustellen, dass das Tooltip nicht angezeigt wird. Wenn das Eigentümerelement den Fokus erhält, wird es relativ positioniert und das Tooltip wird sichtbar.

## Barrierefreiheitsbedenken

Wenn die Information wichtig genug für ein Tooltip ist, ist sie dann nicht wichtig genug, um immer sichtbar zu sein?

Das Tooltip muss offen bleiben, wenn es überfahren wird, selbst wenn dies technisch bedeutet, dass die Maus das Eigentümerelement verlässt. Da Inhalte, die bei Hover erscheinen, schwer oder unmöglich wahrzunehmen sein können, wenn ein Benutzer gezwungen ist, seinen Mauszeiger über den Auslöser zu halten, gibt an, dass Inhalte, die sichtbar gemacht werden, persistent sein sollten, was bedeutet, dass sie nicht ohne Benutzeraktionen verschwinden sollten. [WCAG 1.4.13](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)

## Beste Praktiken

Anstatt Tooltips zu verwenden und wichtige Informationen zu verstecken, sollten Sie in Betracht ziehen, klare, prägnante, immer sichtbare Beschreibungen zu schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggletips. Bieten Sie einfach klare Beschriftungen und ausreichend begleitenden Text an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [CSS: `:focus`-Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Understanding SC 1.4.13:Content on Hover or Focus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
