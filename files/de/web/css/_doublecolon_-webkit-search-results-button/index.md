---
title: ::-webkit-search-results-button
slug: Web/CSS/::-webkit-search-results-button
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Das **`::-webkit-search-results-button`** CSS-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine Schaltfläche (die "Suchergebnis-Schaltfläche") am linken Rand eines {{HTMLElement("input")}} vom `type="search"`, die beim Klicken ein Menü anzeigt, das es dem Benutzer ermöglicht, aus vorherigen Suchanfragen auszuwählen. Diese Schaltfläche und das Pseudo-Element sind nicht standardisiert und werden nur in WebKit und Blink unterstützt, daher das Vendor-Präfix. Die Suchergebnis-Schaltfläche wird nur bei Such-{{HTMLElement("input")}}-Elementen angezeigt, die ein [`results`](/de/docs/Web/HTML/Reference/Elements/input#results) Attribut haben.

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
