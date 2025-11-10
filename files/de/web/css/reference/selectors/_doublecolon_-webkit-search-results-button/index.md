---
title: ::-webkit-search-results-button
slug: Web/CSS/Reference/Selectors/::-webkit-search-results-button
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Der **`::-webkit-search-results-button`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert einen Button (den "Suchergebnis-Button") am linken Rand eines {{HTMLElement("input")}} mit `type="search"`, der beim Klicken ein Menü anzeigt, das es dem Benutzer ermöglicht, aus vorherigen Suchanfragen auszuwählen. Dieser Button und das Pseudoelement sind nicht standardisiert, sondern nur in WebKit und Blink unterstützt, daher das herstellerspezifische Präfix. Der Suchergebnis-Button wird nur bei Such-{{HTMLElement("input")}}-Elementen angezeigt, die ein [`results`](/de/docs/Web/HTML/Reference/Elements/input#results)-Attribut haben.

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
