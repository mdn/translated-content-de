---
title: ::-webkit-search-results-button
slug: Web/CSS/::-webkit-search-results-button
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

{{Non-standard_header}}

Das **`::-webkit-search-results-button`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert eine Schaltfläche (die "Suchergebnisschaltfläche") am linken Rand eines {{HTMLElement("input")}} mit `type="search"`, die beim Anklicken ein Menü anzeigt, das es dem Benutzer ermöglicht, aus zuvor eingegebenen Suchanfragen zu wählen. Diese Schaltfläche und das Pseudoelement sind nicht standardisiert, sondern nur in WebKit und Blink unterstützt, daher das Anbieterpräfix. Die Suchergebnisschaltfläche wird nur bei Such-{{HTMLElement("input")}}-Elementen angezeigt, die ein [`results`](/de/docs/Web/HTML/Reference/Elements/input#results)-Attribut haben.

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
