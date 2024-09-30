---
title: "ARIA: tooltip Rolle"
slug: Web/Accessibility/ARIA/Roles/tooltip_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, die bei Zeigerüberlagerung oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen zu einem Element, wenn dieses Element den Fokus erhält oder überfahren wird, aber ansonsten auf der Seite nicht sichtbar ist. Der Tooltip wird automatisch nach einer kurzen Verzögerung angezeigt; der Benutzer fordert ihn nicht an. Während ein Tooltip auf jedem Inhalt platziert werden kann, sind sie im Allgemeinen Hinweise für Werkzeuge oder Steuerelemente, z.B. bieten sie zusätzlichen Inhalt für Symbole, die kurze Beschriftungen haben (oder gar keine Beschriftungen, was nicht barrierefrei ist!).

Ein Tooltip wird normalerweise sichtbar, nach einer kurzen Verzögerung von etwa einer bis fünf Sekunden, als Reaktion auf ein Mausüberfahren oder nachdem das besitzende Element Tastaturfokus erhält. Er wird genauso automatisch geschlossen, ohne Benutzeranforderung, wenn der Fokus verloren geht oder bei Mausausgang. Er muss geöffnet bleiben, wenn die Maus über den Tooltip selbst bewegt wird und sollte auch geschlossen werden, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da der Tooltip selbst niemals den Fokus erhält und nicht in der Tab-Reihenfolge ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Der Tooltip ist nicht die geeignete Rolle für das "i"-Symbol für weitere Informationen ⓘ. Ein Tooltip ist direkt mit dem besitzenden Element verbunden. Das ⓘ wird nicht durch detaillierte Informationen "beschrieben"; das Werkzeug oder die Steuerung ist es.

Die Verwendung der ARIA `tooltip` Rolle ergänzt das normale Verhalten von Browser-Tooltips. Ein Beispiel für einen nativen Browser-Tooltip ist die Art und Weise, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) eines Elements bei langer Mausüberlagerung anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Berührungsinteraktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Information wichtig genug ist, um sie als Tooltip oder Titel einzuschließen, sollten Sie erwägen, sie in sichtbarem Text einzufügen.

Elemente mit der `tooltip` Rolle sollten über die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) vor oder wenn der Tooltip angezeigt wird, referenziert werden. Das `aria-describedby` Attribut befindet sich auf dem besitzenden Element, nicht auf dem Tooltip.

Der Tooltip wird nicht als Popup im Sinne der [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Eigenschaft auf dem besitzenden Element betrachtet, weshalb wir in der einleitenden Definition "Textblase" verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, da sein Erscheinen automatisch und nicht absichtlich vom Benutzer gesteuert wird, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Rolle nicht unterstützt.

Der zugängliche Name eines Tooltips kann aus den Inhalten stammen. Während sie theoretisch aus einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) stammen könnten, wird in den meisten Fällen die Verwendung von ARIA-Eigenschaften zur Bereitstellung eines Tooltips mit einem zugänglichen Namen nicht empfohlen.

Tooltips bieten zusätzliche Informationen, im Allgemeinen ohne direkte Interaktion auf dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt verbunden, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) mit der `id` des primären Elements. Wenn der Tooltip also einen explizit festgelegten zugänglichen Namen hat, wird dieser Name als Beschreibung des primären Elements und nicht als Inhalt des Tooltips exponiert, was bedeutet, dass die Tooltip-Inhalte möglicherweise niemals von einem Screenreader-Benutzer entdeckt werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, referenziert das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte bei Fokus oder wenn das Element überfahren wird, ohne zusätzliche Interaktion erscheinen. Er sollte automatisch verschwinden, wenn der Fokus auf dem besitzenden Element verloren geht oder die Maus aus dem besitzenden Element und dem Tooltip bewegt wird. Während der Tooltip keinen Fokus erhält, sollte die <kbd>Escape</kbd> ihn schließen, wenn er offen ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird über Tastaturfokus und Fokusentfernung sowie durch Mausereignisse - überfahren und verlassen - angezeigt und ausgeblendet.

- Der Tooltip erhält niemals den Fokus. Der Fokus bleibt auf dem besitzenden Element.

- Der Tooltip kann mit der <kbd>Escape</kbd>-Taste ausgeblendet werden

- Der Tooltip bleibt offen, wenn überfahren

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

Das obige blendet den Tooltip mit CSS im Standardzustand oder wenn die hidetooltip-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> drückt), mit hoher Spezifität aus, um sicherzustellen, dass der Tooltip nicht angezeigt wird. Wenn das besitzende Element den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar.

## Barrierefreiheitsbedenken

Wenn die Information wichtig genug für einen Tooltip ist, ist sie dann nicht wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss offen bleiben, wenn er überfahren wird, selbst wenn dies technisch bedeutet, dass die Maus aus dem besitzenden Element herausbewegt wird. Da Inhalte, die beim Überfahren erscheinen, schwer oder unmöglich wahrnehmbar sein können, wenn ein Benutzer den Mauszeiger über dem Auslöser halten muss, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachte Inhalte persistieren sollten, d.h. ohne Benutzeraktion nicht verschwinden sollten.

## Beste Praktiken

Anstatt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie klare, prägnante, immer sichtbare Beschreibungen schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggletips. Bieten Sie einfach klare Beschriftungen und ausreichend Beschreibungstext.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Verstehen von SC 1.4.13: Inhalt bei Hover oder Fokus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
