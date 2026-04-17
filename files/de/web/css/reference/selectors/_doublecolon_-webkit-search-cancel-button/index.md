---
title: "`::-webkit-search-cancel-button` CSS pseudo-element"
short-title: ::-webkit-search-cancel-button
slug: Web/CSS/Reference/Selectors/::-webkit-search-cancel-button
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-webkit-search-cancel-button`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Button (den "Abbrechen-Button") am Rand eines {{HTMLElement("input")}} mit `type="search"`, der den aktuellen Wert des {{HTMLElement("input")}}-Elements löscht. Dieser Button und das Pseudoelement sind nicht standardisiert und werden nur in WebKit und Blink unterstützt, daher das Vendor-Präfix. Der Abbrechen-Button wird nur bei nicht-leeren Such-{{HTMLElement("input")}}-Elementen angezeigt.

## Syntax

```css
selector::-webkit-search-cancel-button {
  /* ... */
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('::-webkit-search-results-button')}}
