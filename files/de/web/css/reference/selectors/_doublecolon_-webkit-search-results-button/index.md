---
title: "`::-webkit-search-results-button` CSS pseudo-element"
short-title: ::-webkit-search-results-button
slug: Web/CSS/Reference/Selectors/::-webkit-search-results-button
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

Das **`::-webkit-search-results-button`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert eine Schaltfläche (die "Suchergebnisschaltfläche") am linken Rand eines {{HTMLElement("input")}} mit `type="search"`, die bei Klick ein Menü anzeigt, das es dem Benutzer erlaubt, aus vorherigen Suchanfragen auszuwählen. Diese Schaltfläche und das Pseudoelement sind nicht standardisiert, werden nur in WebKit und Blink unterstützt, daher das Anbieter-Präfix. Die Suchergebnisschaltfläche wird nur bei Such-{{HTMLElement("input")}}-Elementen angezeigt, die ein [`results`](/de/docs/Web/HTML/Reference/Elements/input#results) Attribut besitzen.

## Syntax

```css
selector::-webkit-search-results-button {
  /* ... */
}
```

## Spezifikationen

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('::-webkit-search-cancel-button')}}
