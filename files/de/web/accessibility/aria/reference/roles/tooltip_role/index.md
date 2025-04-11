---
title: "ARIA: tooltip role"
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Ein `tooltip` ist eine kontextabhängige Textblase, die eine Beschreibung für ein Element anzeigt, das beim Zeigerhover oder bei der Tastaturfokussierung erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen über ein Element, wenn dieses Element den Fokus erhält oder darüber gehovt wird, sind aber ansonsten nicht auf der Seite sichtbar. Der Tooltip wird automatisch nach einer kurzen Verzögerung angezeigt; der Nutzer fordert ihn nicht an. Während ein Tooltip auf jedem Inhalt platziert werden kann, sind sie im Allgemeinen Tipps für Werkzeuge oder Steuerungen, wie z. B. das Bereitstellen von zusätzlichem Inhalt für Icons, die kurze Beschriftungen haben (oder überhaupt keine Beschriftungen, was nicht barrierefrei ist!).

Ein Tooltip wird typischerweise nach einer kurzen Verzögerung von in der Regel einer bis fünf Sekunden sichtbar, als Reaktion auf einen Maus-Hover oder nachdem das Eigentümerelement den Tastaturfokus erhält. Ebenso wie er automatisch geöffnet wird, ohne Nutzeranforderung, wird er automatisch geschlossen, wenn der Fokus verloren geht oder beim Mausverlassen. Es muss geöffnet bleiben, wenn die Maus über den Tooltip selbst bewegt wird, und sollte ebenfalls geschlossen werden, wenn der Nutzer die Taste <kbd>Escape</kbd> drückt.

Weil der Tooltip selbst niemals den Fokus erhält und nicht in der Tab-Reihenfolge ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Der Tooltip ist nicht die geeignete Rolle für das "mehr Informationen"-Symbol "i", ⓘ. Ein Tooltip ist direkt mit dem Eigentümerelement verknüpft. Der ⓘ wird nicht durch detaillierte Informationen "beschrieben"; das Werkzeug oder die Steuerung wird es.

Die Verwendung der ARIA-Rolle `tooltip` ist eine Ergänzung zum normalen Verhalten von Browser-Tooltips. Ein Beispiel für einen nativen Browser-Tooltip ist die Art, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements bei langem Maus-Hover anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Berührungsinteraktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Information wichtig genug ist, um sie als Tooltip oder Titel zu enthalten, ziehen Sie in Betracht, sie im sichtbaren Text aufzunehmen.

Elemente mit der Rolle `tooltip` sollten durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden, bevor oder wenn der Tooltip angezeigt wird. Das `aria-describedby`-Attribut befindet sich auf dem Eigentümerelement, nicht auf dem Tooltip.

Der Tooltip wird im Hinblick auf die [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Eigenschaft auf dem Eigentümerelement nicht als Popup betrachtet, weshalb wir in der einleitenden Definition "Textblase" verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird die Rolle [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) nicht unterstützt, da sein Erscheinen automatisch und nicht absichtlich vom Nutzer gesteuert wird.

Der zugängliche Name eines Tooltips kann aus dem Inhalt stammen. Während sie theoretisch aus einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stammen könnten, wird in den meisten Fällen die Verwendung von ARIA-Eigenschaften, um einem Tooltip einen zugänglichen Namen zu geben, nicht empfohlen.

Tooltips bieten zusätzliche Informationen, im Allgemeinen ohne direkte Interaktion mit dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des Hauptelements assoziiert. Daher, wenn der Tooltip einen explizit gesetzten zugänglichen Namen hat, wird dieser Name als Beschreibung des Hauptelements anstatt des Inhalts des Tooltips offengelegt, was bedeutet, dass der Tooltip-Inhalt möglicherweise niemals von einem Screenreader-Nutzer entdeckt wird.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, referenziert das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte beim Fokus oder wenn das Element überhovt wird erscheinen, ohne zusätzliche Interaktion. Er sollte automatisch verschwinden, wenn der Fokus auf dem Eigentümerelement verloren geht oder die Maus außerhalb des Eigentümerelements und des Tooltips bewegt wird. Während der Tooltip keinen Fokus erhält, sollte der <kbd>Escape</kbd> ihn schließen, wenn er geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird über Tastaturfokus und das Entfernen des Fokus sowie durch Mausereignisse - Überfahren mit der Maus und Verlassen mit der Maus angezeigt und verschwindet.

- Der Tooltip erhält niemals Fokus. Der Fokus bleibt auf dem Eigentümerelement.

- Der Tooltip kann mit der <kbd>Escape</kbd>-Taste verborgen werden

- Der Tooltip bleibt geöffnet, wenn er überhovt wird

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

Der Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript zu einer Klasse, die den Tooltip versteckt, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

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

Das oben Genannte versteckt den Tooltip in dem Standardzustand oder wenn die CSS-Klasse `hide-tooltip` mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> gedrückt hat), mit hoher Spezifität, um sicherzustellen, dass der Tooltip nicht angezeigt wird. Wenn das Eigentümerelement den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar.

## Barrierefreiheitsbedenken

Wenn die Information wichtig genug für einen Tooltip ist, ist sie nicht wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss offen bleiben, wenn er überhovt wird, selbst wenn das technisch bedeutet, dass die Maus aus dem Eigentümerelement herausbewegt wird. Da Inhalte, die beim Hover erscheinen, schwer oder unmöglich zu erkennen sein können, wenn ein Benutzer den Mauszeiger über dem Auslöser halten muss, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachter Inhalt persistent sein sollte, was bedeutet, dass er nicht ohne Benutzeraktion verschwinden sollte.

## Beste Praktiken

Statt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie klare, prägnante, immer sichtbare Beschreibungen schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggletips. Stellen Sie einfach klare Beschriftungen und ausreichenden Textkörper bereit.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Verstehen von SC 1.4.13: Inhalt bei Hover oder Fokus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
