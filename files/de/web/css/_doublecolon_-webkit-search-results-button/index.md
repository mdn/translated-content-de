---
title: "::-webkit-search-results-button"
slug: Web/CSS/::-webkit-search-results-button
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-search-results-button`** CSS-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine Schaltfläche (die "Suchergebnisse-Schaltfläche") am linken Rand eines {{HTMLElement("input")}} mit `type="search"`, die beim Klicken ein Menü anzeigt, das es dem Benutzer ermöglicht, aus früheren Suchanfragen auszuwählen. Diese Schaltfläche und das Pseudoelement sind nicht standardisiert und werden nur in WebKit und Blink unterstützt, daher das Hersteller-Präfix. Die Suchergebnis-Schaltfläche wird nur bei {{HTMLElement("input")}}-Elementen vom Typ `search` angezeigt, die ein [`results`](/de/docs/Web/HTML/Element/input#results)-Attribut haben.

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
