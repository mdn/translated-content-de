---
title: "::-webkit-search-cancel-button"
slug: Web/CSS/::-webkit-search-cancel-button
l10n:
  sourceCommit: 8d4c0f94cefe7b3f25657566a44fcafaa8851edc
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-search-cancel-button`** CSS-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine Schaltfläche (den "Abbrechen-Button") am Rand eines {{HTMLElement("input")}} mit `type="search"`, das den aktuellen Wert des {{HTMLElement("input")}}-Elements löscht. Diese Schaltfläche und das Pseudo-Element sind nicht standardisiert und werden nur in WebKit und Blink unterstützt, daher das Vendor-Präfix. Der Löschen-Button wird nur bei nicht leeren Such-{{HTMLElement("input")}}-Elementen angezeigt.

## Syntax

```css
selector::-webkit-search-cancel-button {
  /* ... */
}
```

## Spezifikationen

Ist nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('::-webkit-search-results-button')}}
