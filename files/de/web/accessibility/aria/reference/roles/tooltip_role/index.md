---
title: "ARIA: tooltip Rolle"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: e38b228782cf7911b269ae643364dbaccca32b65
---

Ein `tooltip` ist ein kontextbezogenes Textfeld, das eine Beschreibung für ein Element anzeigen lässt, die bei Pointer-Hover oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextuelle Informationen über ein Element, wenn das zugehörige Element den Fokus erhält oder darüber gehangen wird, sind jedoch sonst auf der Seite nicht sichtbar. Das Tooltip wird automatisch und nach einer kurzen Verzögerung angezeigt; der Benutzer fordert es nicht an. Während ein Tooltip zu jedem Inhalt hinzugefügt werden kann, sind sie in der Regel Tipps für Werkzeuge oder Steuerelemente, wie z.B. zusätzliche Inhalte für Symbole zu bieten, die kurze oder gar keine Beschriftungen haben (was nicht barrierefrei ist!).

Ein Tooltip wird normalerweise sichtbar, nachdem eine kurze Verzögerung von üblicherweise ein bis fünf Sekunden eingetreten ist, als Reaktion auf Hover mit der Maus oder nachdem das zugehörige Element den Tastaturfokus erhält. Genau wie es automatisch geöffnet wird, ohne dass der Benutzer es anfordert, wird es automatisch geschlossen, wenn der Fokus verloren geht oder bei Mouse-Out. Es muss offen bleiben, wenn sich die Maus über das Tooltip selbst bewegt, und sollte auch geschlossen werden, wenn der Benutzer die <kbd>Esc</kbd>-Taste drückt.

Da das Tooltip selbst nie den Fokus erhält und nicht in der Tab-Reihenfolge ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Das Tooltip ist nicht die geeignete Rolle für das „mehr Informationen“-Icon, ⓘ. Ein Tooltip ist direkt mit dem zugehörigen Element verbunden. Das ⓘ ist nicht „beschrieben durch“ detaillierte Informationen; das Werkzeug oder die Steuerung ist es.

Die Verwendung der ARIA `tooltip` Rolle ist eine Ergänzung zum normalen Verhalten von Browser-Tooltips. Ein Beispiel für ein natives Browser-Tooltip ist die Art und Weise, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements bei langem Mouse-Hover anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Touch-Interaktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Informationen wichtig genug sind, um sie als Tooltip oder Titel einzuschließen, sollten Sie in Erwägung ziehen, sie im sichtbaren Text zu enthalten.

Elemente mit der `tooltip` Rolle sollten durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden, bevor oder wenn das Tooltip angezeigt wird. Das `aria-describedby` Attribut befindet sich auf dem zugehörigen Element, nicht auf dem Tooltip.

Das Tooltip wird in Bezug auf die [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Eigenschaft auf dem zugehörigen Element nicht als Popup angesehen, weshalb wir im einleitenden Definition von „Textblase“ sprachen.

Auch wenn ein Tooltip erscheinen und verschwinden kann, da sein Erscheinen automatisch und nicht absichtlich vom Benutzer gesteuert wird, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Rolle nicht unterstützt.

Der zugängliche Name eines Tooltips kann aus den Inhalten stammen. Während sie theoretisch von einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stammen könnten, wird in den meisten Fällen die Verwendung von ARIA-Eigenschaften, um einem Tooltip einen zugänglichen Namen zu geben, nicht empfohlen.

Tooltips bieten zusätzliche Informationen, in der Regel ohne direkte Interaktion mit dem Tooltip selbst. Sie sind in der Regel mit dem Inhalt, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des primären Elements verknüpft. Daher, wenn dem Tooltip ein zugänglicher Name explizit zugewiesen wurde, wird dieser Name als Beschreibung des primären Elements und nicht der Inhalt des Tooltips exponiert, was bedeutet, dass die Tooltip-Inhalte von einem Screenreader-Nutzer möglicherweise nie entdeckt werden.

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das das Tooltip auslöst, verweist auf das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Tastatur-Interaktionen

- <kbd>Esc</kbd>
  - : Schließt das Tooltip

Das Tooltip sollte beim Fokus oder bei Hover auf dem Element erscheinen, ohne zusätzliche Interaktion. Es sollte automatisch verschwinden, wenn der Fokus auf das zugehörige Element verloren geht oder die Maus außerhalb des zugehörigen Elements und des Tooltips bewegt wird. Während das Tooltip keinen Fokus erhält, sollte die <kbd>Esc</kbd> es schließen, wenn es geöffnet ist.

### Erforderliche JavaScript-Features

- Das Tooltip wird durch Tastaturfokus und Entfernung des Fokus sowie Mausereignisse - Überfahren und Herausfahren - angezeigt und verschwindet.

- Das Tooltip erhält niemals den Fokus. Der Fokus bleibt auf dem zugehörigen Element.

- Das Tooltip kann mit der <kbd>Esc</kbd>-Taste verborgen werden

- Das Tooltip bleibt offen, wenn darüber gehovert wird

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

Das Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript zu einer Klasse, die das Tooltip ausblendet, wenn der Benutzer die <kbd>Esc</kbd>-Taste drückt.

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

Obiges blendet das Tooltip mit CSS im Standardzustand aus oder wenn die `hide-tooltip`-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Esc</kbd> drückt), mit hoher Spezifität, um sicherzustellen, dass das Tooltip nicht angezeigt wird. Wenn das zugehörige Element den Fokus erhält, wird es relativ positioniert und das Tooltip wird sichtbar. Wir halten das Tooltip sichtbar, wenn Sie über das Tooltip bewegen, im Einklang mit [WCAG 1.4.13](#barrierefreiheitsbedenken). Hier erlauben wir es, dass sich der Cursor vom Eingabefeld zum Tooltip bewegt, ohne dass letzteres verschwindet, indem wir 0,5 Sekunden dazwischen warten; es gibt andere Möglichkeiten, dies zu erreichen, wie das Ausfüllen der Lücke mit einem transparenten Element, das das Tooltip auch sichtbar hält, wenn darüber gehovert wird.

## Barrierefreiheitsbedenken

Wenn die Informationen wichtig genug für ein Tooltip sind, sind sie dann nicht wichtig genug, um immer sichtbar zu sein?

Das Tooltip muss offen bleiben, wenn darüber gehovert wird, auch wenn das technisch bedeutet, dass die Maus aus dem zugehörigen Element hinausbewegt wird. Da Inhalte, die beim Hover erscheinen, schwer oder unmöglich zu erkennen sein können, wenn ein Benutzer gezwungen wird, den Mauszeiger über dem Trigger zu halten, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachter Inhalt persistent sein sollte, was bedeutet, dass er nicht ohne Benutzeraktion verschwinden sollte.

## Beste Praktiken

Statt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie in Erwägung ziehen, klare, prägnante und immer sichtbare Beschreibungen zu schreiben. Wenn Sie Platz haben, vermeiden Sie die Verwendung von Tooltips oder Toggletips. Bieten Sie einfach klare Beschriftungen und ausreichenden Body-Text.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Verständnis von SC 1.4.13: Inhalt bei Hover oder Fokus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
