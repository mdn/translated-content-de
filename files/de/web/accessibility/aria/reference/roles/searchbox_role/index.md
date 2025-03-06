---
title: "ARIA: `searchbox` Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/searchbox_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `searchbox`-Rolle zeigt an, dass ein Element eine Art von `textbox` ist, die zur Angabe von Suchkriterien gedacht ist.

## Beschreibung

Die `searchbox` kann anstelle der [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) verwendet werden, wenn sich das Textfeld innerhalb eines Elements mit der Rolle [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) befindet. Eine `searchbox` ist das semantische Äquivalent zu HTMLs {{HTMLElement('input')}} vom Typ `search`, [`<input type="search">`](/de/docs/Web/HTML/Element/input/search), das nach Möglichkeit stattdessen verwendet werden sollte.

Die `searchbox` muss einen zugänglichen Namen haben. Wenn die `searchbox`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, sollte ein zugehöriges {{HTMLElement('label')}} verwendet werden.
Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Der Screenreader wird "search box", "search edit" oder "search field" zusammen mit dem zugänglichen Namen ankündigen. Dies kann redundant sein, wenn "search" im Label enthalten ist.

## Beispiele

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

Obwohl das oben Genannte gültig ist, ist es einfacher, prägnanter und weniger redundant für den Benutzer des Screenreaders zu schreiben:

```html
<input type="search" />
```

Das Folgende ist ein Suchformular mit einer Suchbox und Schaltfläche, einem ARIA-Live-Bereich und einem Container für Suchergebnisse.

```html
<form role="search">
  <input
    type="search"
    role="searchbox"
    aria-description="search results will appear below"
    id="search"
    value="" />
  <label for="search">Search this site</label>
  <button>Submit search</button>
</form>
<div aria-live="polite" role="region" aria-atomic="true">
  <div class="sr-only"></div>
</div>
<div id="search-results"></div>
```

Die Einbeziehung von `role="searchbox"`, wenn das Formular eine `search` ist und das Label anzeigt, dass das Element eine Suche ist, kann dazu führen, dass unterstützende Technologie etwas wie "search search this site search box" ankündigt, was redundant ist. Die Einbeziehung von `role="searchbox"` ist nicht notwendig:

```html
<input
  type="search"
  aria-description="search results will appear below"
  id="search"
  value="" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [ARIA: `search` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- [ARIA: `textbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
