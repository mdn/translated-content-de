---
title: "::-webkit-search-results-button"
slug: Web/CSS/::-webkit-search-results-button
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-search-results-button`** CSS-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine Schaltfläche (den "Suchergebnisschalter") am linken Rand eines {{HTMLElement("input")}} vom `type="search"`, die bei Klick ein Menü anzeigt, das es dem Benutzer ermöglicht, aus zuvor eingegebenen Suchanfragen zu wählen. Diese Schaltfläche und das Pseudoelement sind nicht standardisiert und werden nur in WebKit und Blink unterstützt, daher der Herstellerpräfix. Der Suchergebnisschalter wird nur bei Such-{{HTMLElement("input")}}-Elementen angezeigt, die ein [`results`](/de/docs/Web/HTML/Element/input#results)-Attribut besitzen.

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
