---
title: "ARIA: searchbox Rolle"
short-title: searchbox
slug: Web/Accessibility/ARIA/Reference/Roles/searchbox_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `searchbox` Rolle zeigt an, dass ein Element eine Art von `textbox` ist, das für die Angabe von Suchkriterien vorgesehen ist.

## Beschreibung

Die `searchbox` kann anstelle von [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) verwendet werden, wenn das Textfeld innerhalb eines Elements mit der Rolle [`search`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) ist. Eine `searchbox` ist das semantische Äquivalent zu HTMLs {{HTMLElement('input')}} des Typs `search`, [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search), welches nach Möglichkeit verwendet werden sollte.

Die `searchbox` muss einen zugänglichen Namen haben. Wenn die `searchbox` Rolle auf ein HTML-Element {{HTMLElement('input')}} angewendet wird, sollte ein zugehöriges {{HTMLElement('label')}} verwendet werden.
Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Etikett vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Etikett vorhanden ist.

Der Screenreader wird "Suchfeld", "Suchbearbeitung" oder "Suchfeld" zusammen mit dem zugänglichen Namen ankündigen. Dies kann redundant sein, wenn "Suche" im Etikett enthalten ist.

## Beispiele

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

Während das obige gültig ist, ist es einfacher, prägnanter und weniger redundant für den Screenreader-Nutzer zu schreiben:

```html
<input type="search" />
```

Das Folgende ist eine Suchform mit einer `searchbox` und einem Button, einem ARIA-Live-Bereich und einem Container für Suchergebnisse.

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

Die Aufnahme von `role="searchbox"` wenn das Formular eine `search` ist und das Etikett anzeigt, dass das Element eine Suche ist, kann dazu führen, dass unterstützende Technologien etwas wie "search search this site search box" ankündigen, was redundant ist. Die Aufnahme von `role="searchbox"` ist nicht notwendig:

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

- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- [ARIA: `search` Role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- [ARIA: `textbox` Role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
