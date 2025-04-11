---
title: ::-webkit-search-results-button
slug: Web/CSS/::-webkit-search-results-button
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-search-results-button`** CSS-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert einen Button (den "Suchergebnisse-Button") am linken Rand eines {{HTMLElement("input")}} vom Typ `type="search"`, der beim Anklicken ein Menü anzeigt, über das der Benutzer aus früheren Suchanfragen auswählen kann. Dieser Button und das Pseudoelement sind nicht standardisiert und werden nur in WebKit und Blink unterstützt, daher das Vendor-Präfix. Der Suchergebnisse-Button wird nur bei Such-{{HTMLElement("input")}}-Elementen angezeigt, die ein [`results`](/de/docs/Web/HTML/Reference/Elements/input#results)-Attribut haben.

## Syntax

```css
selector::-webkit-search-results-button {
  /* ... */
}
```

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('::-webkit-search-cancel-button')}}
