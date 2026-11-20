---
title: "ARIA: tooltip-Rolle"
short-title: tooltip
slug: Web/Accessibility/ARIA/Reference/Roles/tooltip_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Ein `tooltip` ist eine kontextbezogene Textblase, die eine Beschreibung für ein Element anzeigt, wenn der Mauszeiger darüber bewegt wird oder das Element den Tastaturfokus erhält.

## Beschreibung

Tooltips liefern kontextbezogene Informationen zu einem Element, wenn dieses den Fokus erhält oder der Mauszeiger darüber bewegt wird. Ansonsten sind sie auf der Seite nicht sichtbar. Der Tooltip wird nach einer kurzen Verzögerung automatisch angezeigt; Benutzer müssen ihn nicht anfordern. Tooltips können zwar für beliebige Inhalte verwendet werden, geben aber meist Hinweise zu Werkzeugen oder Steuerelementen. Beispielsweise können sie zusätzliche Informationen zu Icons mit kurzen Beschriftungen liefern – oder zu Icons ohne Beschriftung, was nicht barrierefrei ist!

Ein Tooltip wird üblicherweise nach einer kurzen Verzögerung von etwa einer bis fünf Sekunden sichtbar, wenn der Mauszeiger über das zugehörige Element bewegt wird oder das Element den Tastaturfokus erhält. So wie er ohne Aufforderung automatisch geöffnet wird, schließt er sich auch automatisch, wenn das Element den Fokus verliert oder der Mauszeiger es verlässt. Er muss geöffnet bleiben, wenn der Mauszeiger über den Tooltip selbst bewegt wird, und sollte sich auch schließen, wenn Benutzer <kbd>Escape</kbd> drücken.

Da der Tooltip selbst niemals den Fokus erhält und nicht Teil der Tab-Reihenfolge ist, darf er keine interaktiven Elemente wie Links, Eingabefelder oder Schaltflächen enthalten.

Für das „Weitere Informationen“-Icon ⓘ ist `tooltip` nicht die passende Rolle. Ein Tooltip ist unmittelbar mit dem zugehörigen Element verknüpft. `role="tooltip"` wird dem Element mit dem Hinweistext zugewiesen, nicht dem Icon oder Steuerelement, das den Tooltip auslöst. Damit ein Tooltip angezeigt wird, wenn der Mauszeiger über ⓘ bewegt wird oder das Icon den Fokus erhält, geben Sie dem auslösenden Element einen zugänglichen Namen und verweisen Sie mit `aria-describedby` auf den Tooltip. So wird der Hinweistext angesagt, wenn das auslösende Element den Fokus erhält. Da die ausführlichen Informationen das zugehörige Steuerelement und nicht das ⓘ selbst beschreiben, setzen Sie `aria-describedby` auch auf dieses Steuerelement, wie im [Beispiel mit einem „Weitere Informationen“-Icon](#ein_„weitere_informationen“-icon_verwenden) gezeigt.

Die ARIA-Rolle `tooltip` ergänzt das normale Tooltip-Verhalten des Browsers. Ein Beispiel für einen nativen Browser-Tooltip ist die Anzeige des [`title`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/title) eines Elements, wenn der Mauszeiger in manchen Browsern längere Zeit darüber verweilt. Diese Funktion lässt sich weder über den Tastaturfokus noch durch Berührung aktivieren und ist deshalb nicht barrierefrei. Wenn eine Information wichtig genug ist, um sie in einem Tooltip oder Titel anzugeben, sollten Sie erwägen, sie als sichtbaren Text bereitzustellen.

Auf Elemente mit der Rolle `tooltip` sollte mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) verwiesen werden, bevor oder während der Tooltip angezeigt wird. Das Attribut `aria-describedby` befindet sich auf dem zugehörigen Element, nicht auf dem Tooltip.

Im Sinne der Eigenschaft [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) des zugehörigen Elements gilt der Tooltip nicht als Popup. Deshalb wird er in der einleitenden Definition als „Textblase“ bezeichnet.

Obwohl ein Tooltip erscheinen und verschwinden kann, wird die Eigenschaft [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) nicht unterstützt: Das Erscheinen des Tooltips erfolgt automatisch und wird nicht gezielt von Benutzern gesteuert.

Der zugängliche Name eines Tooltips kann aus seinem Inhalt stammen. Theoretisch könnte er auch über [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) festgelegt werden. In den meisten Fällen wird jedoch davon abgeraten, einem Tooltip mithilfe von ARIA-Eigenschaften einen zugänglichen Namen zu geben.

Tooltips liefern zusätzliche Informationen und ermöglichen üblicherweise keine direkte Interaktion. Sie sind in der Regel über [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) mit dem Inhalt verknüpft, den sie beschreiben; dabei wird auf die `id` des Tooltip-Elements verwiesen. Wenn für den Tooltip ausdrücklich ein zugänglicher Name festgelegt wird, wird dieser Name statt des Tooltip-Inhalts als Beschreibung des zugehörigen Elements ausgegeben. Dadurch erfahren Benutzer von Screenreadern möglicherweise nie, was im Tooltip steht.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- Das Element, das als Tooltip-Container dient, erhält `role="tooltip"`.
- Das Element, das den Tooltip auslöst, verweist mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf das Tooltip-Element.

### Tastaturinteraktionen

- <kbd>Escape</kbd>
  - : Schließt den Tooltip.

Der Tooltip sollte erscheinen, wenn das Element den Fokus erhält oder der Mauszeiger darüber bewegt wird, ohne dass eine weitere Interaktion nötig ist. Er sollte automatisch verschwinden, wenn das zugehörige Element den Fokus verliert oder der Mauszeiger sowohl das zugehörige Element als auch den Tooltip verlässt. Der Tooltip erhält zwar selbst keinen Fokus, sollte sich aber mit <kbd>Escape</kbd> schließen lassen, wenn er geöffnet ist.

### Erforderliche JavaScript-Funktionen

- Der Tooltip wird beim Erhalt und Verlust des Tastaturfokus sowie durch Mausereignisse – beim Bewegen des Mauszeigers über das Element und beim Verlassen des Elements – angezeigt und ausgeblendet.

- Der Tooltip erhält niemals den Fokus. Der Fokus bleibt auf dem zugehörigen Element.

- Der Tooltip kann mit <kbd>Escape</kbd> ausgeblendet werden.

- Der Tooltip bleibt geöffnet, wenn der Mauszeiger darüber bewegt wird.

- Der Tooltip wird nur durch JavaScript und CSS-Selektoren ausgeblendet. Wenn JavaScript nicht verfügbar ist, wird der Tooltip angezeigt.

## Hinweise zur Barrierefreiheit

Wenn eine Information wichtig genug für einen Tooltip ist, sollte sie dann nicht immer sichtbar sein?

Der Tooltip muss geöffnet bleiben, wenn der Mauszeiger darüber bewegt wird – auch wenn der Mauszeiger dadurch technisch gesehen das zugehörige Element verlässt. Inhalte, die beim Bewegen des Mauszeigers über ein Element erscheinen, können schwer oder gar nicht wahrnehmbar sein, wenn Benutzer den Mauszeiger über dem auslösenden Element halten müssen. Deshalb verlangt [WCAG 1.4.13](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background), dass eingeblendete Inhalte bestehen bleiben, also nicht ohne Zutun der Benutzer verschwinden.

## Bewährte Vorgehensweisen

Statt Tooltips zu verwenden und wichtige Informationen zu verbergen, sollten Sie klare, knappe und dauerhaft sichtbare Beschreibungen verfassen. Wenn genügend Platz vorhanden ist, verzichten Sie auf Tooltips oder Toggletips. Stellen Sie stattdessen eindeutige Beschriftungen und ausreichend erläuternden Text bereit.

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

Der Tooltip kann mit CSS erstellt werden. Ändern Sie den Klassennamen mit JavaScript in den Namen einer Klasse, die den Tooltip ausblendet, wenn Benutzer <kbd>Escape</kbd> drücken.

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

Im obigen Beispiel wird der Tooltip im Ausgangszustand oder nachdem die Klasse `hide-tooltip` durch JavaScript hinzugefügt wurde (wenn Benutzer <kbd>Escape</kbd> gedrückt haben), mit CSS ausgeblendet. Eine hohe Spezifität stellt sicher, dass der Tooltip nicht angezeigt wird. Wenn das zugehörige Element den Fokus erhält, wird es relativ positioniert und der Tooltip sichtbar. Der Tooltip bleibt sichtbar, wenn der Mauszeiger darüber bewegt wird, entsprechend [WCAG 1.4.13](#hinweise_zur_barrierefreiheit). Hier kann der Mauszeiger vom Eingabefeld zum Tooltip bewegt werden, ohne dass der Tooltip verschwindet, weil dazwischen 0,5 Sekunden gewartet wird. Das lässt sich auch anders erreichen, etwa indem die Lücke mit einem transparenten Element gefüllt wird, über dem der Tooltip ebenfalls sichtbar bleibt.

### Ein „Weitere Informationen“-Icon verwenden

Dieses Beispiel zeigt einen Tooltip, wenn der Mauszeiger über die Schaltfläche ⓘ bewegt wird oder sie den Tastaturfokus erhält. Die Schaltfläche hat einen {{Glossary("accessible_name", "zugänglichen Namen")}} und verweist mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) auf den Tooltip. Dadurch wird dessen Inhalt angesagt, wenn die Schaltfläche den Fokus erhält. Auch das Eingabefeld verweist mit `aria-describedby` auf den Tooltip, da die Informationen dieses Steuerelement beschreiben – selbst wenn der Tooltip ausgeblendet ist.

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

Der Tooltip wird unter dem Icon positioniert. Ein Abstand oberhalb der Textblase überbrückt die Lücke zur Schaltfläche, sodass der Mauszeiger auf den Tooltip bewegt werden kann, ohne ihn zu schließen.

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

Der Tooltip bleibt sichtbar, solange die Schaltfläche den Fokus hat oder sich der Mauszeiger über der Schaltfläche oder dem Tooltip befindet. Er wird ausgeblendet, wenn keine dieser Bedingungen zutrifft.

{{EmbedLiveSample("using_a_more_information_icon", "", 200)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Die Rolle `dialog`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [CSS: Pseudoklasse `:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) von Heydon Pickering
- [SC 1.4.13 verstehen: Inhalte bei Hover oder Fokus (WCAG-Stufe AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
