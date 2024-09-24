---
title: "ARIA: tooltip-Rolle"
slug: Web/Accessibility/ARIA/Roles/tooltip_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, die bei Zeigerüberlagerung oder Tastaturfokus erscheint.

## Beschreibung

Tooltips bieten kontextbezogene Informationen über ein Element, wenn dieses den Fokus erhält oder mit der Maus überlagert wird, sind ansonsten jedoch nicht auf der Seite sichtbar. Der Tooltip wird automatisch, nach einer kurzen Verzögerung, angezeigt; der Benutzer fordert ihn nicht an. Während ein Tooltip auf jedem Inhalt platziert werden kann, dienen sie in der Regel als Tipps für Werkzeuge oder Steuerelemente, z.B. bei Symbolen mit kurzen (oder gar keinen, was nicht barrierefrei ist!) Beschriftungen.

Ein Tooltip wird in der Regel nach einer kurzen Verzögerung von ein bis fünf Sekunden sichtbar, als Reaktion auf eine Zeigerüberlagerung, oder nachdem das besitzende Element den Tastaturfokus erhält. Ebenso wie er automatisch geöffnet wird, ohne dass der Benutzer dies anfordert, wird er automatisch geschlossen, wenn der Fokus verloren geht oder die Maus herausbewegt wird. Er muss geöffnet bleiben, wenn die Maus über den Tooltip selbst bewegt wird, und sollte auch schließen, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

Da der Tooltip selbst nie den Fokus erhält und nicht in der Tabulatorreihenfolge enthalten ist, kann ein Tooltip keine interaktiven Elemente wie Links, Eingabefelder oder Schaltflächen enthalten.

Der Tooltip ist nicht die geeignete Rolle für das „i“-Symbol, ⓘ, für weitere Informationen. Ein Tooltip ist direkt mit dem besitzenden Element verbunden. Das ⓘ wird nicht durch detaillierte Informationen 'beschrieben'; das Werkzeug oder die Steuerung wird es.

Die Verwendung der ARIA `tooltip`-Rolle ergänzt das normale Verhalten von Browser-Tooltips. Ein Beispiel für einen nativen Browser-Tooltip ist, wie einige Browser das [`title`-Attribut](/de/docs/Web/HTML/Global_attributes/title) eines Elements bei langer Zeigerüberlagerung anzeigen. Diese Funktion kann weder durch Tastaturfokus noch durch Berührungsinteraktion aktiviert werden, was diese Funktion unzugänglich macht. Wenn die Informationen wichtig genug sind, um sie als Tooltip oder Titel einzuschließen, sollten Sie in Betracht ziehen, diese in sichtbarem Text aufzunehmen.

Elemente mit der `tooltip`-Rolle sollten vor oder beim Anzeigen des Tooltips durch die Verwendung von [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) referenziert werden. Das `aria-describedby`-Attribut befindet sich auf dem besitzenden Element, nicht auf dem Tooltip.

Der Tooltip wird in Bezug auf die [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Eigenschaft des besitzenden Elements nicht als Popup betrachtet, weshalb wir in der einleitenden Definition "Textblase" verwendet haben.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird der [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Role aufgrund seines automatischen Erscheinens und Nichterscheinens durch Benutzersteuerung nicht unterstützt.

Der zugängliche Name eines Tooltips kann aus dem Inhalt stammen. Während theoretisch auch ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) verwendet werden könnte, wird in den meisten Fällen nicht empfohlen, ARIA-Eigenschaften zu verwenden, um einem Tooltip einen zugänglichen Namen zu geben.

Tooltips bieten zusätzliche Informationen, in der Regel ohne direkte Interaktion mit dem Tooltip selbst. Sie sind in der Regel mit dem Inhalt verbunden, den sie definieren, durch ein [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) mit der `id` des Hauptelements. Daher, wenn der Tooltip einen explizit gesetzten zugänglichen Namen hat, wird dieser Name als Beschreibung des Hauptelements ausgesetzt, anstatt des Inhalts des Tooltips, was bedeutet, dass der Tooltip-Inhalt von einem Benutzer eines Bildschirmlesers möglicherweise nie entdeckt wird.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, hat `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, referenziert das Tooltip-Element mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip

Der Tooltip sollte bei Fokus oder bei Überlagerung des Elements erscheinen, ohne zusätzliche Interaktion. Er sollte automatisch verschwinden, wenn der Fokus auf dem besitzenden Element verloren geht oder die Maus aus dem besitzenden Element und dem Tooltip herausbewegt wird. Obwohl der Tooltip keinen Fokus erhält, sollte die <kbd>Escape</kbd>-Taste ihn schließen, wenn er geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird über Tastaturfokus und Fokusentfernung sowie durch Mausereignisse - Überlagerung und Herausbewegen der Maus - angezeigt und verschwindet.

- Der Tooltip bekommt nie den Fokus. Der Fokus bleibt auf dem Besitzer-Element.

- Der Tooltip kann mit der <kbd>Escape</kbd>-Taste verborgen werden

- Der Tooltip bleibt geöffnet, wenn er überlagert ist

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

Der Tooltip kann mit CSS instanziiert werden. Ändern Sie den Klassennamen mit JavaScript zu einer Klasse, die den Tooltip ausblendet, wenn der Benutzer die <kbd>Escape</kbd>-Taste drückt.

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

Das obige Beispiel verbirgt den Tooltip im Standardzustand oder wenn die hidetooltip-Klasse mit JavaScript hinzugefügt wurde (wenn der Benutzer die <kbd>Escape</kbd>-Taste gedrückt hat), mit hoher Spezifität, um sicherzustellen, dass der Tooltip nicht angezeigt wird. Wenn das besitzende Element den Fokus erhält, wird es relativ positioniert und der Tooltip wird sichtbar.

## Barrierefreiheitsbedenken

Wenn die Informationen wichtig genug für einen Tooltip sind, sind sie dann nicht auch wichtig genug, um immer sichtbar zu sein?

Der Tooltip muss geöffnet bleiben, wenn er überlagert ist, selbst wenn das technisch bedeutet, dass die Maus aus dem besitzenden Element herausbewegt wird. Da Inhalte, die bei Überlagerung erscheinen, schwierig oder unmöglich wahrzunehmen sein können, wenn ein Benutzer gezwungen ist, den Mauszeiger über dem Auslöser zu halten, besagt [WCAG 1.4.13](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass sichtbar gemachte Inhalte anhaltend sein sollten, was bedeutet, dass sie nicht ohne Benutzeraktion verschwinden sollten.

## Beste Praktiken

Anstatt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie in Betracht ziehen, klare, prägnante, stets sichtbare Beschreibungen zu schreiben. Wenn Sie Platz haben, verwenden Sie keine Tooltips oder Toggletips. Geben Sie einfach klare Beschriftungen und ausreichend erklärenden Text.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die `dialog`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [CSS: `:focus` Pseudoklasse](/de/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [Understanding SC 1.4.13:Content on Hover or Focus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
