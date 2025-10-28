---
title: :-moz-user-disabled
slug: Web/CSS/:-moz-user-disabled
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Die **`:-moz-user-disabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente selektiert, die Bilder repräsentieren, welche nicht geladen wurden, weil die Bilder vollständig durch die Benutzereinstellungen deaktiviert wurden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler vorgesehen.

## Syntax

```css
:-moz-user-disabled {
  /* ... */
}
```

## Beispiele

### Styling von benutzer-deaktivierten Elementen

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## Spezifikationen

Kein Teil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}
