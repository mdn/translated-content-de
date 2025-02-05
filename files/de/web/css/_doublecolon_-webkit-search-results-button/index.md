---
title: "::-webkit-search-results-button"
slug: Web/CSS/::-webkit-search-results-button
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-search-results-button`** CSS-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) stellt eine Schaltfläche (den "Suchergebnisse-Button") am linken Rand eines {{HTMLElement("input")}} mit `type="search"` dar, die beim Anklicken ein Menü anzeigt, das es dem Nutzer ermöglicht, aus den zuletzt eingegebenen Suchanfragen auszuwählen. Diese Schaltfläche und das Pseudoelement sind nicht standardisiert und werden nur in WebKit und Blink unterstützt, daher der Anbieter-Präfix. Der Suchergebnisse-Button wird nur bei Such-{{HTMLElement("input")}}-Elementen angezeigt, die ein [`results`](/de/docs/Web/HTML/Element/input#results)-Attribut besitzen.

## Syntax

```css
selector::-webkit-search-results-button {
  /* ... */
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('::-webkit-search-cancel-button')}}
