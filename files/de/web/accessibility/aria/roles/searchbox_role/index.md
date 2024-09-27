---
title: "ARIA: Rolle searchbox"
slug: Web/Accessibility/ARIA/Roles/searchbox_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `searchbox`-Rolle zeigt an, dass ein Element eine Art `textbox` ist, die zur Angabe von Suchkriterien gedacht ist.

## Beschreibung

Die `searchbox` kann anstelle der [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) verwendet werden, wenn sich das Textfeld innerhalb eines Elements mit der Rolle [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) befindet. Eine `searchbox` ist das semantische Äquivalent zu HTMLs {{HTMLElement('input')}} vom Typ `search`, [`<input type="search">`](/de/docs/Web/HTML/Element/input/search), das nach Möglichkeit verwendet werden sollte.

Die `searchbox` muss einen zugänglichen Namen haben. Wenn die `searchbox`-Rolle auf ein HTML {{HTMLElement('input')}}-Element angewendet wird, sollte ein zugehöriges {{HTMLElement('label')}} verwendet werden. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Der Screenreader wird "search box", "search edit" oder "search field" plus den zugänglichen Namen ansagen. Dies kann redundant sein, wenn "search" im Label enthalten ist.

## Beispiele

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

Während das obige Beispiel gültig ist, ist es für den Screenreader-Benutzer einfacher, prägnanter und weniger redundant, Folgendes zu schreiben:

```html
<input type="search" />
```

Das folgende Beispiel zeigt ein Suchformular mit einer Suchbox und einem Button, einem ARIA-Live-Bereich und einem Container für Suchergebnisse.

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

Die Angabe von `role="searchbox"`, wenn das Formular eine `search` ist und das Label darauf hinweist, dass es sich um eine Suche handelt, kann dazu führen, dass Hilfstechnologien etwas wie "search search this site search box" ansagen, was redundant ist. Die Angabe von `role="searchbox"` ist nicht notwendig:

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
- [ARIA: `search` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/search_role)
- [ARIA: `textbox` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
