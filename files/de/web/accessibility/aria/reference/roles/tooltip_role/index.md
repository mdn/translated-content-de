---
title: "ARIA: tooltip Rolle"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt und bei Mauszeiger-Hover oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen über ein Element, wenn dieses Element den Fokus erhält oder darüber gehovt wird, sind ansonsten jedoch nicht auf der Seite sichtbar. Das Tooltip wird automatisch und nach einer kurzen Verzögerung angezeigt; der Benutzer fordert es nicht an. Obwohl ein Tooltip auf jedem Inhalt platziert werden kann, sind sie im Allgemeinen Tipps für Werkzeuge oder Steuerungen, wie das Bereitstellen zusätzlicher Inhalte für Symbole, die kurze Beschriftungen haben (oder überhaupt keine Beschriftungen, was nicht barrierefrei ist!).

Ein Tooltip wird typischerweise sichtbar, nachdem eine kurze Verzögerung von in der Regel ein bis fünf Sekunden in Reaktion auf einen Mauszeiger-Hover oder nachdem das besitzende Element Tastaturfokus erhält. Wie es automatisch, ohne eine Anfrage des Benutzers, geöffnet wird, schließt es sich automatisch, wenn der Fokus verloren geht oder bei Maus-Aus. Es muss offen bleiben, wenn die Maus über den Tooltip selbst bewegt wird und sollte auch schließen, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da der Tooltip selbst nie Fokus erhält und nicht in der Tabulatorreihenfolge ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingaben oder Schaltflächen enthalten.

Der Tooltip ist nicht die geeignete Rolle für das Informationssymbol "i", ⓘ. Ein Tooltip ist direkt mit dem besitzenden Element verknüpft. Das ⓘ wird nicht von detaillierten Informationen 'beschrieben'; das Werkzeug oder die Steuerung hingegen schon.

Die Verwendung der ARIA `tooltip` Rolle ist eine Ergänzung zum normalen Verhalten des Browser-Tooltips. Ein Beispiel für ein nativen Browser-Tooltip ist die Art und Weise, wie einige Browser das [`title` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements bei langem Maus-Hover anzeigen. Dieses Feature kann weder durch Tastaturfokus noch durch Touch-Interaktion aktiviert werden, was dieses Feature unzugänglich macht. Wenn die Information wichtig genug ist, um sie als Tooltip oder Titel einzuschließen, ziehen Sie in Betracht, sie im sichtbaren Text zu integrieren.

Elemente mit der `tooltip` Rolle sollten durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden, bevor oder wenn der Tooltip angezeigt wird. Das `aria-describedby` Attribut befindet sich auf dem besitzenden Element, nicht auf dem Tooltip.

Der Tooltip wird im Hinblick auf die [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Eigenschaft des besitzenden Elements nicht als Popup betrachtet, weshalb wir in der Einführungsdefinition von "Textblase" gesprochen haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird die [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Rolle nicht unterstützt, da sein Erscheinen automatisch und nicht absichtlich vom Benutzer gesteuert wird.

Der zugängliche Name eines Tooltips kann aus den Inhalten stammen. Während sie theoretisch aus einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stammen könnten, wird die Verwendung von ARIA-Eigenschaften zur Bereitstellung eines Tooltips mit einem zugänglichen Namen in den meisten Fällen nicht empfohlen.

Tooltips bieten zusätzliche Informationen, in der Regel ohne direkte Interaktion mit dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt verknüpft, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des Hauptelements. Daher, wenn der Tooltip einen explizit festgelegten zugänglichen Namen hat, wird dieser Name als Beschreibung des Hauptelements und nicht als Inhalt des Tooltips dargestellt, was bedeutet, dass die Tooltip-Inhalte möglicherweise nie von einem Bildschirmleser-Benutzer entdeckt werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, referenziert das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte bei Fokus oder wenn das Element gehovt wird erscheinen, ohne zusätzliche Interaktion. Er sollte automatisch verschwinden, wenn der Fokus auf das besitzende Element verloren geht oder die Maus außerhalb des besitzenden Elements und des Tooltips bewegt wird. Obwohl der Tooltip keinen Fokus erhält, sollte <kbd>Escape</kbd> ihn schließen, wenn er offen ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird über Tastaturfokus und die Entfernung des Fokus sowie durch Mausereignisse - Hover und Maus-Aus - angezeigt und ausgeblendet.

- Der Tooltip erhält niemals Fokus. Der Fokus bleibt auf dem besitzenden Element.

- Der Tooltip kann mit der <kbd>Escape</kbd>-Taste versteckt werden

- Der Tooltip bleibt offen, wenn darüber gehovt wird

- Der Tooltip wird nur über JavaScript und CSS-Selektoren verborgen. Falls JavaScript nicht verfügbar ist, wird der Tooltip angezeigt.

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

Das obige Beispiel versteckt den Tooltip mit CSS im Standardzustand oder wenn die `hide-tooltip` Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> drückt), mit hoher Spezifität, um sicherzustellen, dass der Tooltip nicht angezeigt wird. Wenn das besitzende Element den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar.

## Zugänglichkeitsbedenken

Wenn die Information wichtig genug für einen Tooltip ist, ist sie nicht wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss offen bleiben, wenn darüber gehovt wird, auch wenn das technisch bedeutet, dass die Maus außerhalb des besitzenden Elements bewegt wird. Da Inhalte, die durch Hover erscheinen, schwer oder unmöglich wahrnehmbar sein können, wenn ein Benutzer den Mauszeiger über dem Auslöser halten muss, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachte Inhalte persistent sein sollten, das heißt nicht ohne Benutzerhandlung verschwinden sollten.

## Best Practices

Anstatt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie in Betracht ziehen, klare, prägnante und immer sichtbare Beschreibungen zu schreiben. Wenn Sie Platz haben, verzichten Sie auf Tooltips oder Toggletips. Bieten Sie einfach klare Beschriftungen und ausreichenden Text an.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Verständnis von SC 1.4.13: Inhalt bei Hover oder Fokus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
