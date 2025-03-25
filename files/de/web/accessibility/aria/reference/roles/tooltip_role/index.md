---
title: "ARIA: tooltip Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, das bei Zeigerbewegung oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen über ein Element, wenn dieses Element den Fokus erhält oder darüber gehovt wird, sie sind jedoch sonst auf der Seite nicht sichtbar. Das Tooltip wird automatisch nach einer kurzen Verzögerung angezeigt; der Benutzer fordert es nicht an. Während ein Tooltip auf beliebigen Inhalten platziert werden kann, sind sie im Allgemeinen als Tipps für Werkzeuge oder Steuerelemente gedacht, wie etwa zusätzlichen Inhalt für Symbole bereitzustellen, die kurze Beschriftungen haben (oder gar keine, was nicht zugänglich ist!).

Ein Tooltip wird typischerweise nach einer kurzen Verzögerung von in der Regel ein bis fünf Sekunden sichtbar, als Reaktion auf einen Maus-Hover oder nachdem das zugehörige Element den Tastaturfokus erhält. Ebenso wie es automatisch geöffnet wird, ohne Benutzeranforderung, wird es automatisch geschlossen, wenn der Fokus verloren geht oder bei Maus-Austritt. Es muss geöffnet bleiben, wenn sich die Maus über dem Tooltip selbst befindet, und sollte auch geschlossen werden, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da das Tooltip selbst niemals den Fokus erhält und nicht in der Tabulatorreihenfolge enthalten ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingabefelder oder Schaltflächen enthalten.

Für das "i" Icon für mehr Informationen, ⓘ, ist die Tooltip-Rolle nicht geeignet. Ein Tooltip ist direkt mit dem zugehörigen Element verbunden. Das ⓘ ist nicht von detaillierten Informationen 'beschrieben'; das Werkzeug oder die Steuerung ist es.

Die Verwendung der ARIA `tooltip` Rolle ergänzt das normale Browser-Tooltip-Verhalten. Ein Beispiel für ein natives Browser-Tooltip ist die Art und Weise, wie einige Browser ein Element mit einem [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) bei langem Maus-Hover anzeigen. Diese Funktion kann weder über Tastaturfokus noch durch Berührungsinteraktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Informationen wichtig genug sind, um als Tooltip oder Titel aufgenommen zu werden, sollten Sie überlegen, sie im sichtbaren Text einzuschließen.

Elemente mit der `tooltip` Rolle sollten durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenziert werden, bevor oder während das Tooltip angezeigt wird. Das `aria-describedby` Attribut befindet sich auf dem zugehörigen Element, nicht auf dem Tooltip.

Das Tooltip wird im Hinblick auf das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut des zugehörigen Elements nicht als Popup betrachtet, weshalb wir in der einleitenden Definition den Ausdruck "Textblase" verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, da sein Erscheinen automatisch und nicht absichtlich vom Benutzer gesteuert wird, wird die Rolle [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) nicht unterstützt.

Der zugängliche Name eines Tooltips kann sich aus den Inhalten ergeben. Theoretisch könnten sie aus einem [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) stammen, in den meisten Fällen wird jedoch die Verwendung von ARIA-Attributen zur Bereitstellung eines Tooltips mit einem zugänglichen Namen nicht empfohlen.

Tooltips liefern zusätzliche Informationen, in der Regel ohne direkte Interaktion mit dem Tooltip selbst. Sie sind im Allgemeinen mit dem Inhalt, den sie definieren, über ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit der `id` des primären Elements verknüpft. Wird dem Tooltip also explizit ein zugänglicher Name zugewiesen, wird dieser Name als Beschreibung des primären Elements und nicht als Inhalt des Tooltips offengelegt, was bedeutet, dass der Tooltip-Inhalt möglicherweise nie von einem Bildschirmleser-Benutzer entdeckt wird.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das das Tooltip auslöst, referenziert das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt das Tooltip

Das Tooltip sollte bei Fokus oder wenn das Element gehovt wird ohne zusätzliche Interaktion erscheinen. Es sollte automatisch verschwinden, wenn der Fokus auf dem zugehörigen Element verloren geht oder die Maus aus dem zugehörigen Element und dem Tooltip bewegt wird. Obwohl das Tooltip nicht den Fokus erhält, sollte <kbd>Escape</kbd> es schließen, falls es geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Das Tooltip wird sowohl durch Tastaturfokus als auch durch Fokusentfernung sowie durch Mausereignisse - Hovern und Maus-Austritt - angezeigt und verschwindet.

- Das Tooltip erhält niemals den Fokus. Der Fokus bleibt auf dem zugehörigen Element.

- Das Tooltip kann mit der <kbd>Escape</kbd>-Taste versteckt werden.

- Das Tooltip bleibt geöffnet, wenn es gehovt wird.

- Das Tooltip wird nur über JavaScript und CSS-Selektoren versteckt. Wenn JavaScript nicht verfügbar ist, wird das Tooltip angezeigt.

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

Das Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript zu einer Klasse, die das Tooltip ausblendet, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

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

Das obige Beispiel blendet das Tooltip mit CSS im Standardzustand aus oder wenn die `hide-tooltip` Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer <kbd>Escape</kbd> gedrückt hat), mit hoher Spezifität, um sicherzustellen, dass das Tooltip nicht angezeigt wird. Wenn das zugehörige Element den Fokus erhält, wird es relativ positioniert und das Tooltip wird sichtbar.

## Barrierefreiheitsthemen

Wenn die Informationen wichtig genug für ein Tooltip sind, sind sie dann nicht wichtig genug, um immer sichtbar zu sein?

Das Tooltip muss geöffnet bleiben, wenn es gehovt wird, auch wenn das technisch bedeutet, dass die Maus das zugehörige Element verlässt. Da Inhalte, die beim Hover erscheinen, schwer oder unmöglich wahrzunehmen sein können, wenn ein Benutzer den Mauszeiger über dem Auslöser halten muss, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachte Inhalte persistent sein sollten, was bedeutet, dass sie nicht ohne Benutzeraktion verschwinden sollten.

## Beste Praktiken

Anstatt Tooltips zu verwenden und wichtige Informationen zu verstecken, sollten Sie klare, prägnante, immer sichtbare Beschreibungen schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggletips. Bieten Sie einfach klare Beschriftungen und ausreichend Fließtext.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Understanding SC 1.4.13:Content on Hover or Focus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
