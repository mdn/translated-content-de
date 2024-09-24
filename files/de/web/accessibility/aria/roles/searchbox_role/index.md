---
title: "ARIA: searchbox-Rolle"
slug: Web/Accessibility/ARIA/Roles/searchbox_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `searchbox`-Rolle zeigt an, dass ein Element eine Art `textbox` ist, die zur Angabe von Suchkriterien vorgesehen ist.

## Beschreibung

Die `searchbox` kann anstelle von [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) verwendet werden, wenn sich die Textbox in einem Element mit der Rolle [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) befindet. Eine `searchbox` ist das semantische Äquivalent zum HTML-Element {{HTMLElement('input')}} vom Typ `search`, [`<input type="search">`](/de/docs/Web/HTML/Element/input/search), das, wenn möglich, stattdessen verwendet werden sollte.

Die `searchbox` muss einen zugänglichen Namen haben. Wenn die `searchbox`-Rolle auf ein HTML-Element {{HTMLElement('input')}} angewendet wird, sollte ein zugehöriges {{HTMLElement('label')}} verwendet werden. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Der Bildschirmleser wird "Suchfeld", "Suche bearbeiten" oder "Suchfeld" plus den zugänglichen Namen ankündigen. Dies kann redundant sein, wenn "Suche" im Label enthalten ist.

## Beispiele

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

Während das obige gültig ist, ist es einfacher, prägnanter und weniger redundant für den Bildschirmleserbenutzer, zu schreiben:

```html
<input type="search" />
```

Das folgende Beispiel zeigt ein Suchformular mit einem Suchfeld und einer Schaltfläche, einem ARIA-Live-Bereich und einem Container für Suchergebnisse.

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

Die Aufnahme von `role="searchbox"`, wenn das Formular eine `search` ist und das Label angibt, dass das Element eine Suche ist, kann dazu führen, dass unterstützende Technik etwas wie "Suche suche diese Seite Suchfeld" ankündigt, was redundant ist. Die Verwendung von `role="searchbox"` ist nicht notwendig:

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
- [ARIA: `search`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
- [ARIA: `textbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
