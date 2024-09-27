---
title: "ARIA: Tooltip-Rolle"
slug: Web/Accessibility/ARIA/Roles/tooltip_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, das bei Zeiger-Hover oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen über ein Element, wenn das betreffende Element den Fokus erhält oder darüber gehovt wird, aber ansonsten nicht auf der Seite sichtbar ist. Der Tooltip wird automatisch angezeigt, nach einer kurzen Verzögerung; der Benutzer fordert ihn nicht an. Während ein Tooltip auf jedem Inhalt platziert werden kann, sind sie generell Tipps für Werkzeuge oder Steuerungen, wie zum Beispiel die Bereitstellung zusätzlicher Inhalte für Symbole, die kurze Beschriftungen haben (oder gar keine, was nicht barrierefrei ist!).

Ein Tooltip wird in der Regel sichtbar, nach einer kurzen Verzögerung von generell einer bis fünf Sekunden, als Reaktion auf einen Maus-Hover oder nachdem das betreffende Element den Tastaturfokus erhält. Ebenso wie es automatisch geöffnet wird, ohne Benutzeranforderung, wird es automatisch geschlossen, wenn der Fokus verloren geht oder bei Maus-Overlay. Es muss offen bleiben, wenn sich die Maus über den Tooltip selbst bewegt, und sollte auch schließen, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da der Tooltip selbst nie den Fokus erhält und nicht in der Tab-Reihenfolge ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Der Tooltip ist nicht die geeignete Rolle für das Mehr-Informationen-"i"-Symbol, ⓘ. Ein Tooltip ist direkt mit dem betreffenden Element verknüpft. Das ⓘ wird nicht "beschrieben durch" detaillierte Informationen; das Werkzeug oder die Steuerung ist es.

Die Verwendung der ARIA-`tooltip`-Rolle ist eine Ergänzung zum normalen Browser-Tooltip-Verhalten. Ein Beispiel für einen nativen Browser-Tooltip ist die Art und Weise, wie einige Browser das [`title` Attribut](/de/docs/Web/HTML/Global_attributes/title) eines Elements bei längerem Mouse-Hover anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Touch-Interaktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Information wichtig genug ist, um als Tooltip oder Titel einzuschließen, ziehen Sie in Betracht, sie im sichtbaren Text zu integrieren.

Elemente mit der `tooltip`-Rolle sollten durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) referenziert werden, bevor oder wenn der Tooltip angezeigt wird. Das `aria-describedby`-Attribut befindet sich auf dem betreffenden Element, nicht auf dem Tooltip.

Der Tooltip wird nicht als Popup im Sinne der [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Eigenschaft auf dem betreffenden Element betrachtet, weshalb wir "Textblase" in der einführenden Definition verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, da sein Erscheinen automatisch und nicht gezielt durch den Benutzer gesteuert wird, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Rolle nicht unterstützt.

Der zugängliche Name eines Tooltips kann aus den Inhalten stammen. Während sie theoretisch aus einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) stammen könnten, wird in den meisten Fällen die Verwendung von ARIA-Eigenschaften, um einem Tooltip einen zugänglichen Namen zu geben, nicht empfohlen.

Tooltips bieten zusätzliche Informationen, im Allgemeinen ohne direkte Interaktion mit dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt verknüpft, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) mit der `id` des Hauptelements. Daher, wenn der Tooltip einen explizit festgelegten zugänglichen Namen hat, wird dieser Name als Beschreibung des Hauptelements anstelle des Inhalts des Tooltips ausgesetzt, was bedeutet, dass die Inhalte des Tooltips möglicherweise niemals von einem Screenreader-Benutzer entdeckt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, verweist auf das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

### Tastatur-Interaktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte bei Fokus oder wenn das Element gehovt wird, erscheinen, ohne zusätzliche Interaktion. Er sollte automatisch verschwinden, wenn der Fokus auf das betreffende Element verloren geht oder die Maus außerhalb des betreffenden Elements und des Tooltips bewegt wird. Obwohl der Tooltip nicht fokussiert wird, sollte die <kbd>Escape</kbd> ihn schließen, wenn er offen ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird über Tastaturfokus und Entfernen des Fokus angezeigt und verschwindet sowie durch die Mausereignisse - Mousing-over und Mousing-out.

- Der Tooltip erhält nie Fokus. Der Fokus bleibt auf dem betreffenden Element.

- Der Tooltip kann mit der <kbd>Escape</kbd>-Taste ausgeblendet werden

- Der Tooltip bleibt offen, wenn er überflogen wird

- Der Tooltip wird nur über JavaScript und CSS-Selektoren ausgeblendet. Wenn JavaScript nicht verfügbar ist, wird der Tooltip angezeigt.

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
[role="tooltip"],
.hidetooltip.hidetooltip.hidetooltip + [role="tooltip"] {
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

Das Obige blendet den Tooltip im Standardzustand oder wenn die hidetooltip-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer die <kbd>Escape</kbd>-Taste gedrückt hat) mit hoher Spezifität aus, um sicherzustellen, dass der Tooltip nicht angezeigt wird. Wenn das betreffende Element den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar.

## Barrierefreiheitsbedenken

Wenn die Informationen wichtig genug für einen Tooltip sind, sind sie dann nicht wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss offen bleiben, wenn er überflogen wird, selbst wenn dies technisch bedeutet, dass die Maus das betreffenden Element verlässt. Da Inhalte, die bei Hover erscheinen, schwer oder unmöglich zu erkennen sein können, wenn ein Benutzer den Mauszeiger über den Auslöser halten muss, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachter Inhalt beständig sein sollte, d.h. er sollte nicht ohne Benutzeraktion verschwinden.

## Beste Praktiken

Anstatt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie erwägen, klare, prägnante, immer sichtbare Beschreibungen zu schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggletips. Geben Sie einfach klare Beschriftungen und ausreichend Textinhalt an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Verstehen von SC 1.4.13:Inhalt bei Hover oder Fokus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
