---
title: "ARIA: searchbox-Rolle"
slug: Web/Accessibility/ARIA/Roles/searchbox_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `searchbox`-Rolle kennzeichnet ein Element als eine Art `textbox`, die für die Angabe von Suchkriterien vorgesehen ist.

## Beschreibung

Die `searchbox` kann anstelle einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) verwendet werden, wenn sich das Textfeld innerhalb eines Elements mit der Rolle [`search`](/de/docs/Web/Accessibility/ARIA/Roles/search_role) befindet. Eine `searchbox` ist das semantische Äquivalent zu HTMLs {{HTMLElement('input')}} vom Typ `search`, [`<input type="search">`](/de/docs/Web/HTML/Element/input/search), das nach Möglichkeit stattdessen verwendet werden sollte.

Die `searchbox` muss einen zugänglichen Namen haben. Ist die `searchbox`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet, sollte ein zugeordnetes {{HTMLElement('label')}} verwendet werden. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Der Screenreader wird "Suchfeld", "Sucheingabefeld" oder "Suchbereich" plus den zugänglichen Namen ankündigen. Dies kann redundant sein, wenn "Suche" im Label enthalten ist.

## Beispiele

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

Obwohl das oben Genannte gültig ist, ist es einfacher, prägnanter und für den Screenreader-Benutzer weniger redundant, Folgendes zu schreiben:

```html
<input type="search" />
```

Das Folgende ist ein Suchformular mit einem Suchfeld und Button, einem ARIA-Live-Bereich und einem Container für die Suchergebnisse.

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

Das Einschließen von `role="searchbox"` wenn das Formular eine `search` ist und das Label darauf hinweist, dass das Element eine Suche ist, kann dazu führen, dass unterstützende Technologien etwas in der Art von "Suche diese Seite Suchfeld" ankündigen, was redundant ist. Die Einbeziehung von `role="searchbox"` ist nicht notwendig:

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
