---
title: "ARIA: Rolle tooltip"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, wenn sich der Mauszeiger darüber befindet oder das Element den Tastaturfokus erhält.

## Beschreibung

Tooltips liefern kontextbezogene Informationen über ein Element, wenn dieses Element den Fokus erhält oder sich der Mauszeiger darüber befindet. Ansonsten sind sie auf der Seite nicht sichtbar. Der Tooltip erscheint nach einer kurzen Verzögerung automatisch; die nutzende Person fordert ihn nicht ausdrücklich an. Tooltips können zwar für beliebige Inhalte verwendet werden, geben aber meist Hinweise zu Werkzeugen oder Steuerelementen, etwa zusätzliche Informationen zu Symbolen mit kurzen Beschriftungen (oder ganz ohne Beschriftung, was nicht barrierefrei ist!).

Ein Tooltip wird in der Regel nach einer kurzen Verzögerung von einer bis fünf Sekunden sichtbar, wenn sich der Mauszeiger über dem zugehörigen Element befindet oder dieses den Tastaturfokus erhält. So wie er ohne ausdrückliche Anforderung automatisch geöffnet wird, schließt er sich auch automatisch, wenn der Fokus verloren geht oder der Mauszeiger das Element verlässt. Er muss geöffnet bleiben, wenn sich der Mauszeiger über den Tooltip selbst bewegt, und sollte sich auch schließen, wenn die nutzende Person die <kbd>Escape</kbd>-Taste drückt.

Da der Tooltip selbst nie den Fokus erhält und nicht Teil der Tabulatorreihenfolge ist, darf er keine interaktiven Elemente wie Links, Eingabefelder oder Schaltflächen enthalten.

`tooltip` ist nicht die passende Rolle für das „i“-Symbol für weitere Informationen (ⓘ). Ein Tooltip ist direkt mit dem zugehörigen Element verknüpft. `role="tooltip"` wird auf dem Element mit dem Hinweistext gesetzt, nicht auf dem Symbol oder Steuerelement, das ihn auslöst. Damit ein Tooltip erscheint, wenn sich der Mauszeiger über ⓘ befindet oder das Symbol den Fokus erhält, geben Sie dem auslösenden Element einen zugänglichen Namen und verweisen Sie mit `aria-describedby` auf den Tooltip. So wird der Hinweistext vorgelesen, wenn das auslösende Element den Fokus erhält. Da die zusätzlichen Informationen das zugehörige Steuerelement und nicht das ⓘ selbst beschreiben, setzen Sie `aria-describedby` auch auf dieses Steuerelement, wie im [Beispiel mit einem Symbol für weitere Informationen](#ein_symbol_für_weitere_informationen_verwenden) gezeigt.

Die Verwendung der ARIA-Rolle `tooltip` ergänzt das normale Tooltip-Verhalten des Browsers. Ein Beispiel für einen nativen Browser-Tooltip ist die Anzeige des [`title`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements durch manche Browser, wenn sich der Mauszeiger länger darüber befindet. Diese Funktion lässt sich weder über den Tastaturfokus noch durch Berührung aktivieren und ist daher nicht barrierefrei. Wenn eine Information wichtig genug für einen Tooltip oder einen Titel ist, sollten Sie erwägen, sie als sichtbaren Text anzuzeigen.

Auf Elemente mit der Rolle `tooltip` sollte vor oder bei der Anzeige des Tooltips über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwiesen werden. Das Attribut `aria-describedby` befindet sich auf dem zugehörigen Element, nicht auf dem Tooltip.

Im Hinblick auf die Eigenschaft [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) des zugehörigen Elements gilt ein Tooltip nicht als Popup. Deshalb wird er in der einleitenden Definition als „Textblase“ bezeichnet.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) nicht unterstützt: Seine Anzeige erfolgt automatisch und wird nicht bewusst von der nutzenden Person gesteuert.

Der zugängliche Name eines Tooltips kann aus seinem Inhalt stammen. Theoretisch könnte er auch durch [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) festgelegt werden. In den meisten Fällen wird jedoch davon abgeraten, einem Tooltip mithilfe von ARIA-Eigenschaften einen zugänglichen Namen zu geben.

Tooltips liefern zusätzliche Informationen, ohne dass üblicherweise eine direkte Interaktion mit ihnen möglich ist. Im Allgemeinen sind sie über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit dem Inhalt verknüpft, den sie beschreiben. Der Wert des Attributs ist dabei die `id` des Tooltips. Wenn für den Tooltip ausdrücklich ein zugänglicher Name festgelegt wird, erscheint dieser Name statt des Tooltip-Inhalts als Beschreibung des zugehörigen Elements. Dadurch kann der eigentliche Tooltip-Inhalt für Personen, die Screenreader verwenden, unzugänglich bleiben.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- Auf dem Element, das als Tooltip-Container dient, ist `role="tooltip"` gesetzt.
- Das Element, das den Tooltip auslöst, verweist mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf das Tooltip-Element.

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip.

Der Tooltip sollte erscheinen, wenn das Element den Fokus erhält oder sich der Mauszeiger darüber befindet, ohne dass eine weitere Interaktion erforderlich ist. Er sollte automatisch verschwinden, wenn das zugehörige Element den Fokus verliert oder sich der Mauszeiger weder über dem zugehörigen Element noch über dem Tooltip befindet. Obwohl der Tooltip selbst keinen Fokus erhält, sollte er sich mit <kbd>Escape</kbd> schließen lassen, wenn er geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird durch den Tastaturfokus oder Mausereignisse beim Betreten des Elements angezeigt und verschwindet, wenn der Fokus verloren geht oder der Mauszeiger das Element verlässt.

- Der Tooltip selbst erhält nie den Fokus. Der Fokus bleibt auf dem zugehörigen Element.

- Der Tooltip lässt sich mit der <kbd>Escape</kbd>-Taste ausblenden.

- Der Tooltip bleibt geöffnet, wenn sich der Mauszeiger darüber befindet.

- Der Tooltip wird nur durch JavaScript und CSS-Selektoren ausgeblendet. Wenn JavaScript nicht verfügbar ist, wird der Tooltip angezeigt.

## Beispiele

### Einen Tooltip verwenden

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

Der Tooltip kann mit CSS erstellt werden. Ändern Sie mit JavaScript den Klassennamen in den einer Klasse, die den Tooltip ausblendet, wenn die nutzende Person die <kbd>Escape</kbd>-Taste drückt.

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

{{EmbedLiveSample("using_a_tooltip", "", 300)}}

Im obigen Beispiel wird der Tooltip im Ausgangszustand oder dann ausgeblendet, wenn die Klasse `hide-tooltip` mit JavaScript hinzugefügt wurde (nachdem die nutzende Person <kbd>Escape</kbd> gedrückt hat). Dafür wird CSS mit hoher Spezifität verwendet, damit der Tooltip nicht angezeigt wird. Wenn das zugehörige Element den Fokus erhält, wird es relativ positioniert und der Tooltip sichtbar. Der Tooltip bleibt sichtbar, wenn sich der Mauszeiger darüber befindet, entsprechend [WCAG 1.4.13](#hinweise_zur_barrierefreiheit). Hier kann der Mauszeiger vom Eingabefeld zum Tooltip bewegt werden, ohne dass dieser verschwindet, weil dazwischen 0,5 Sekunden gewartet wird. Das lässt sich auch anders erreichen, etwa indem die Lücke mit einem transparenten Element gefüllt wird, über dem der Tooltip ebenfalls sichtbar bleibt.

### Ein Symbol für weitere Informationen verwenden

Dieses Beispiel zeigt einen Tooltip an, wenn sich der Mauszeiger über der Schaltfläche ⓘ befindet oder sie den Tastaturfokus erhält. Die Schaltfläche hat einen {{Glossary("accessible_name", "zugänglichen Namen")}} und verweist mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf den Tooltip. Dadurch wird der Tooltip-Inhalt vorgelesen, wenn die Schaltfläche den Fokus erhält. Auch das Eingabefeld verweist mit `aria-describedby` auf den Tooltip, da die Informationen dieses Steuerelement beschreiben – selbst wenn der Tooltip ausgeblendet ist.

```html
<label for="username">Username:</label>
<input id="username" aria-describedby="username-help" />
<div class="info">
  <button
    type="button"
    aria-label="More information about usernames"
    aria-describedby="username-help">
    <span aria-hidden="true">ⓘ</span>
  </button>
  <div role="tooltip" id="username-help">
    <p>Your username is displayed publicly alongside your comments.</p>
  </div>
</div>
```

Der Tooltip wird unterhalb des Symbols positioniert. Ein Innenabstand oberhalb der Textblase überbrückt die Lücke zur Schaltfläche, sodass der Mauszeiger auf den Tooltip bewegt werden kann, ohne ihn zu schließen.

```css
.info {
  display: inline-block;
  position: relative;
}

[role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 100%;
  right: 0;
  width: 15rem;
  padding-top: 0.5rem;
  z-index: 1;
}

.info:hover [role="tooltip"],
.info:focus-within [role="tooltip"] {
  visibility: visible;
}

[role="tooltip"] p {
  margin: 0;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background: #222222;
  color: white;
  box-shadow: 0 2px 6px #00000044;
}

[role="tooltip"]::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0.5rem;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid #222222;
  border-left: 0.5rem solid transparent;
}
```

Der Tooltip bleibt sichtbar, solange die Schaltfläche den Fokus hat oder sich der Mauszeiger über der Schaltfläche oder dem Tooltip befindet. Er wird ausgeblendet, wenn keine dieser Bedingungen erfüllt ist.

{{EmbedLiveSample("using_a_more_information_icon", "", 200)}}

## Hinweise zur Barrierefreiheit

Wenn eine Information wichtig genug für einen Tooltip ist, sollte sie dann nicht immer sichtbar sein?

Der Tooltip muss geöffnet bleiben, wenn sich der Mauszeiger darüber befindet, auch wenn der Mauszeiger dadurch das zugehörige Element technisch gesehen verlässt. Inhalte, die beim Bewegen des Mauszeigers über ein Element erscheinen, können schwer oder gar nicht wahrnehmbar sein, wenn die nutzende Person den Mauszeiger über dem auslösenden Element halten muss. Daher schreibt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) vor, dass sichtbar gewordene Inhalte bestehen bleiben, also nicht ohne eine Aktion der nutzenden Person verschwinden.

## Bewährte Verfahren

Statt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie klare, knappe und stets sichtbare Beschreibungen verfassen. Wenn genügend Platz vorhanden ist, verzichten Sie auf Tooltips und umschaltbare Hinweise. Verwenden Sie stattdessen eindeutige Beschriftungen und ausreichend erläuternden Text.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die Rolle `dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: Pseudoklasse `:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [SC 1.4.13 verstehen: Inhalte bei Hover oder Fokus (WCAG-Stufe AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
